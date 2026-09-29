using System.Collections;
using System.Collections.Generic;
using SC;
using UnityEngine;

/// <summary>
/// 关卡控制器 - 管理关卡中的波次和贴纸逻辑
/// </summary>
public class LevelController : MonoBehaviour {
    #region 常量定义

    /// <summary>
    /// 默认刷新贴纸音效延迟时间（秒）
    /// </summary>
    private const float DEFAULT_REFRESH_AUDIO_DELAY = 0.5f;

    #endregion

    #region 字段和属性

    [Header("关卡设置")]
    [CustomLabel("关卡编号")]
    [Tooltip("关卡编号（从1开始）")]
    public int levelNum = DataManager.FixedLevelID;

    [Header("波次设置")]
    [CustomLabel("波次数组")]
    [Tooltip("关卡中的所有波次数组")]
    public GameObject[] WaveArray;

    [CustomLabel("波次子节点列表")]
    [Tooltip("存储波次数组中所有节点的子节点（运行时自动填充）")]
    public List<GameObject> waveChildren = new List<GameObject>();

    [Header("贴纸设置")]
    [CustomLabel("贴纸数组")]
    [Tooltip("关卡中的贴纸数组")]
    public GameObject[] StickerArray;

    private GameObject stickerLayer;
    private int currentWaveIndex = 0;
    private List<DataManager.LevelData> cachedLevelDataList;
    private string cachedLevelName = "";
    private bool isLoadingLevel = false; // 标识是否正在加载关卡

    #endregion

    #region Unity生命周期

    void Start() {
        // 初始化加载标志
        isLoadingLevel = false;

        InitializeLevel();
        LoadLevelContent();
    }

    /// <summary>
    /// 当对象被销毁时调用
    /// </summary>
    void OnDestroy() {
        if (stickerLayer != null) {
            Destroy(stickerLayer);
            stickerLayer = null;
        }
    }

    #endregion

    #region 初始化方法

    /// <summary>
    /// 初始化关卡基本信息（游戏模式）
    /// </summary>
    private void InitializeLevel() {
        // 从LevelManager获取当前关卡ID
        if (LevelManager.Instance != null) {
            levelNum = LevelManager.Instance.GetCurrentLevelID();
            if (levelNum < 1) {
                // 如果LevelManager没有加载关卡，尝试从DataManager获取
                levelNum = DataManager.Instance != null ? DataManager.Instance.GetCurrentLevelID() : 1;
            }
        } else if (DataManager.Instance != null) {
            levelNum = DataManager.Instance.GetCurrentLevelID();
        }

        stickerLayer = StickerManager.Instance.CreateStickerLayer();
    }





    /// <summary>
    /// 更新贴纸的动画节点和特效节点的排序层级
    /// </summary>
    private void UpdateStickerNodeSortingOrder(Transform child, StickerItem stickerItem) {
        if (StickerManager.Instance == null || stickerItem == null) return;
        if (stickerItem.armatureNode == null && stickerItem.effectNode == null) return;

        SpriteRenderer spriteRenderer = child.GetComponent<SpriteRenderer>();
        if (spriteRenderer == null) {
            spriteRenderer = child.GetComponentInChildren<SpriteRenderer>();
        }
        if (spriteRenderer == null) return;

        int sortingOrder = spriteRenderer.sortingOrder;
        if (stickerItem.armatureNode != null) {
            StickerManager.Instance.UpdateAnimationNodeSortingOrder(stickerItem.armatureNode, sortingOrder);
        }
        if (stickerItem.effectNode != null) {
            StickerManager.Instance.UpdateEffectNodeSortingOrder(stickerItem.effectNode, sortingOrder);
        }
    }

    /// <summary>
    /// 加载关卡内容
    /// </summary>
    private void LoadLevelContent() {
        isLoadingLevel = true; // 标记正在加载关卡

        string levelName = "Level" + levelNum;
        List<DataManager.LevelData> levelDataList = GetLevelData(levelName);

        HideAllWaves();

        if (levelDataList != null && levelDataList.Count > 0) {
            LoadLevelFromData(levelName, levelDataList);
        } else {
            LoadDefaultLevel(levelName);
        }

        FindObjectOfType<MyLayerGame>().InitializeProgressBar();

        // 加载完成后检查是否所有贴纸都已完成（用于处理杀死后台再进入的情况）
        StartCoroutine(CheckAlreadyCompletedCoroutine());
    }

    /// <summary>
    /// 检查关卡是否已经全部完成（用于处理杀死后台再进入的情况）
    /// </summary>
    private IEnumerator CheckAlreadyCompletedCoroutine() {
        // 等待一帧，确保所有初始化完成
        yield return null;

        if (LevelManager.Instance == null) {
            isLoadingLevel = false; // 加载完成，取消标记
            yield break;
        }

        int totalCount = LevelManager.Instance.GetTotalWaveChildrenCount();
        int completedCount = LevelManager.Instance.GetCompletedWaveChildrenCount();

        // 如果总数大于0且已全部完成，直接进入结算
        if (totalCount > 0 && completedCount >= totalCount) {
            LevelManager.Instance.ShowVictoryScreen();
        }

        isLoadingLevel = false; // 加载完成，取消标记
    }

    /// <summary>
    /// 隐藏所有WaveArray
    /// </summary>
    private void HideAllWaves() {
        if (WaveArray == null) return;
        foreach (var wave in WaveArray) {
            wave?.SetActive(false);
        }
    }

    #endregion

    #region 关卡加载方法

    /// <summary>
    /// 获取关卡数据（带缓存）
    /// </summary>
    /// <param name="levelName">关卡名称</param>
    /// <returns>关卡数据列表</returns>
    private List<DataManager.LevelData> GetLevelData(string levelName) {
        if (string.IsNullOrEmpty(cachedLevelName) || cachedLevelName != levelName || cachedLevelDataList == null) {
            cachedLevelDataList = DataManager.Instance.GetLevelDataList(levelName);
            cachedLevelName = levelName;
        }
        return cachedLevelDataList;
    }

    /// <summary>
    /// 获取贴纸层GameObject
    /// </summary>
    /// <returns>贴纸层GameObject</returns>
    public GameObject GetStickerLayer() {
        return stickerLayer;
    }

    /// <summary>
    /// 根据关卡数据加载关卡内容
    /// </summary>
    /// <param name="levelName">关卡名称</param>
    /// <param name="levelDataList">关卡数据列表</param>
    private void LoadLevelFromData(string levelName, List<DataManager.LevelData> levelDataList) {
        foreach (var levelData in levelDataList) {
            if (string.IsNullOrEmpty(levelData.prefabName)) continue;

            ProcessAllWaves((wave, child) => {
                if (child.gameObject.name.Contains(levelData.prefabName)) {
                    wave.SetActive(true);
                    InitializeSticker(child, levelData);
                    waveChildren.Add(child.gameObject);
                }
            });
        }

        CheckWavesStatus();

        int totalCount = LevelManager.Instance.GetAllWaveChildrenCount(WaveArray);
        LevelManager.Instance.ResetLevelProgress();

        int completedCount = 0;
        foreach (var data in levelDataList) {
            if (data.isCompleted) completedCount++;
        }

        for (int i = 0; i < completedCount; i++) {
            LevelManager.Instance.IncrementCompletedWaveChildrenCount();
        }
    }

    /// <summary>
    /// 加载默认关卡（无数据情况）
    /// </summary>
    /// <param name="levelName">关卡名称</param>
    private void LoadDefaultLevel(string levelName) {
        if (WaveArray == null || WaveArray.Length == 0 || WaveArray[0] == null) return;

        WaveArray[0].SetActive(true);
        foreach (Transform child in WaveArray[0].transform) {
            if (child == null || child.gameObject == null) continue;

            child.gameObject.SetActive(true);
            var defaultLevelData = new DataManager.LevelData {
                prefabName = child.gameObject.name,
                isCompleted = false
            };
            InitializeSticker(child, defaultLevelData);
            waveChildren.Add(child.gameObject);
        }

        LevelManager.Instance.GetAllWaveChildrenCount(WaveArray);
        LevelManager.Instance.ResetLevelProgress();
    }

    /// <summary>
    /// 初始化单个贴纸
    /// </summary>
    /// <param name="child">贴纸子对象</param>
    /// <param name="levelData">关卡数据</param>
    private void InitializeSticker(Transform child, DataManager.LevelData levelData) {
        StickerItem stickerItem = child.GetComponent<StickerItem>();
        if (stickerItem == null) return;

        stickerItem.InitializeSticker(StickerItem.StickerType.StickHere);

        if (levelData.isCompleted) {
            StickerManager.Instance.SwitchStickerImage(child.gameObject);
            // 初始化时设置完成状态，但不播放粘贴音效
            stickerItem.SetCompleted(false);

            StickerManager.Instance?.ShowAnimationNodeAndHideSprite(stickerItem, child.gameObject);
        } else {
            StickerManager.Instance.SwitchStickerImage(child.gameObject, "01");
        }

        // 更新动画节点和特效节点的排序层级
        UpdateStickerNodeSortingOrder(child, stickerItem);
    }

    #endregion

    #region 波次管理方法

    /// <summary>
    /// 处理所有WaveArray及其子节点
    /// </summary>
    /// <param name="action">对每个WaveArray和子节点执行的操作</param>
    private void ProcessAllWaves(System.Action<GameObject, Transform> action) {
        if (WaveArray == null || action == null) return;

        foreach (var wave in WaveArray) {
            if (wave == null) continue;
            foreach (Transform child in wave.transform) {
                if (child != null && child.gameObject != null) {
                    action(wave, child);
                }
            }
        }
    }

    /// <summary>
    /// 检查所有波次状态
    /// </summary>
    public void CheckWavesStatus() {
        HideAllWaves();

        string levelName = "Level" + levelNum;
        List<DataManager.LevelData> levelDataList = GetLevelData(levelName);

        if (levelDataList == null || levelDataList.Count == 0) {
            ShowWave(0);
            currentWaveIndex = 0;
            return;
        }

        int lastCompletedWaveIndex = -1;
        for (int i = 0; i < WaveArray.Length; i++) {
            if (WaveArray[i] == null) continue;
            if (IsWaveCompleted(i, levelDataList)) {
                lastCompletedWaveIndex = i;
            } else {
                break;
            }
        }

        for (int i = 0; i <= lastCompletedWaveIndex; i++) {
            if (WaveArray[i] != null) {
                ShowWave(i, true);
            }
        }

        int firstUncompletedWaveIndex = lastCompletedWaveIndex + 1;
        if (firstUncompletedWaveIndex < WaveArray.Length && WaveArray[firstUncompletedWaveIndex] != null) {
            ShowWave(firstUncompletedWaveIndex, false);
            currentWaveIndex = firstUncompletedWaveIndex;
        } else {
            currentWaveIndex = lastCompletedWaveIndex;
        }
    }

    /// <summary>
    /// 检查指定波次是否完成
    /// </summary>
    /// <param name="waveIndex">波次索引</param>
    /// <param name="levelDataList">关卡数据列表</param>
    /// <returns>如果波次完成返回true，否则返回false</returns>
    private bool IsWaveCompleted(int waveIndex, List<DataManager.LevelData> levelDataList) {
        if (WaveArray[waveIndex] == null) return false;

        List<GameObject> waveChildren = GetWaveChildren(waveIndex);
        if (waveChildren == null || waveChildren.Count == 0) return true;

        foreach (GameObject stickerObj in waveChildren) {
            if (!IsStickerCompleted(stickerObj, levelDataList)) {
                return false;
            }
        }

        return true;
    }

    /// <summary>
    /// 显示指定波次
    /// </summary>
    /// <param name="waveIndex">波次索引</param>
    /// <param name="isCompletedWave">波次是否已完成</param>
    private void ShowWave(int waveIndex, bool isCompletedWave = false) {
        if (waveIndex < 0 || waveIndex >= WaveArray.Length || WaveArray[waveIndex] == null) {
            return;
        }

        WaveArray[waveIndex].SetActive(true);

        string levelName = "Level" + levelNum;
        List<DataManager.LevelData> levelDataList = GetLevelData(levelName);

        waveChildren.Clear();
        foreach (Transform child in WaveArray[waveIndex].transform) {
            if (child == null || child.gameObject == null) continue;

            waveChildren.Add(child.gameObject);
            string stickerName = GameUtils.CleanObjectName(child.gameObject.name);
            bool isStickerCompleted = IsStickerCompletedByName(stickerName, levelDataList);

            var levelData = new DataManager.LevelData {
                prefabName = stickerName,
                isCompleted = isCompletedWave || isStickerCompleted
            };
            InitializeSticker(child, levelData);
        }
    }

    /// <summary>
    /// 从指定波次获取所有子节点（通用方法）
    /// </summary>
    /// <param name="wave">波次GameObject</param>
    /// <returns>子节点列表</returns>
    private List<GameObject> GetChildrenFromWave(GameObject wave) {
        if (wave == null) return new List<GameObject>();

        List<GameObject> children = new List<GameObject>();
        foreach (Transform child in wave.transform) {
            if (child != null && child.gameObject != null) {
                children.Add(child.gameObject);
            }
        }
        return children;
    }

    /// <summary>
    /// 获取指定波次的所有子节点
    /// </summary>
    /// <param name="waveIndex">波次索引</param>
    /// <returns>子节点列表，如果波次不存在返回null</returns>
    private List<GameObject> GetWaveChildren(int waveIndex) {
        if (waveIndex < 0 || waveIndex >= WaveArray.Length || WaveArray[waveIndex] == null) {
            return null;
        }
        return GetChildrenFromWave(WaveArray[waveIndex]);
    }

    /// <summary>
    /// 检查贴纸对象是否已完成
    /// </summary>
    /// <param name="stickerObj">贴纸对象</param>
    /// <param name="levelDataList">关卡数据列表</param>
    /// <returns>如果贴纸已完成返回true，否则返回false</returns>
    private bool IsStickerCompleted(GameObject stickerObj, List<DataManager.LevelData> levelDataList) {
        return stickerObj != null && IsStickerCompletedByName(GameUtils.CleanObjectName(stickerObj.name), levelDataList);
    }

    /// <summary>
    /// 根据名称检查贴纸是否已完成
    /// </summary>
    /// <param name="stickerName">贴纸名称</param>
    /// <param name="levelDataList">关卡数据列表</param>
    /// <returns>如果贴纸已完成返回true，否则返回false</returns>
    private bool IsStickerCompletedByName(string stickerName, List<DataManager.LevelData> levelDataList) {
        if (string.IsNullOrEmpty(stickerName) || levelDataList == null) return false;

        foreach (var levelData in levelDataList) {
            if (levelData.prefabName == stickerName && levelData.isCompleted) {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// 检查当前波次的所有贴纸是否都已完成
    /// </summary>
    public void CheckWaveCompletion() {
        List<GameObject> currentWaveChildren = GetCurrentWaveChildren();
        if (currentWaveChildren == null || currentWaveChildren.Count == 0) {
            return;
        }

        bool allCompleted = true;
        foreach (GameObject sticker in currentWaveChildren) {
            if (sticker != null) {
                StickerItem stickerItem = sticker.GetComponent<StickerItem>();
                if (stickerItem != null && !stickerItem.isCompleted) {
                    allCompleted = false;
                    break;
                }
            }
        }

        if (allCompleted) {
            if (currentWaveIndex < WaveArray.Length - 1) {
                NextWave();
            } else {
                LevelManager.Instance.ShowVictoryScreen();
            }
        }
    }

    /// <summary>
    /// 获取当前激活波次的所有子节点
    /// </summary>
    /// <returns>当前波次的子节点列表，如果没有则返回空列表</returns>
    private List<GameObject> GetCurrentWaveChildren() {
        if (WaveArray == null || currentWaveIndex < 0 || currentWaveIndex >= WaveArray.Length) {
            return new List<GameObject>();
        }
        return GetChildrenFromWave(WaveArray[currentWaveIndex]);
    }

    /// <summary>
    /// 进入下一个波次
    /// </summary>
    private void NextWave() {
        GuideManager.Instance?.ResetGuideState();
        currentWaveIndex++;

        if (currentWaveIndex >= WaveArray.Length || WaveArray[currentWaveIndex] == null) {
            return;
        }

        // 只有在游戏中进入下一波次时才播放刷新音效，加载关卡时不播放
        if (!isLoadingLevel) {
            // 延迟播放刷新贴纸音效（进入新的小阶段）
            StartCoroutine(PlayRefreshAudioDelayed());
        }

        WaveArray[currentWaveIndex].SetActive(true);

        waveChildren.Clear();
        foreach (Transform child in WaveArray[currentWaveIndex].transform) {
            if (child == null || child.gameObject == null) continue;

            waveChildren.Add(child.gameObject);
            var levelData = new DataManager.LevelData {
                prefabName = GameUtils.CleanObjectName(child.gameObject.name),
                isCompleted = false
            };
            InitializeSticker(child, levelData);
        }
    }

    /// <summary>
    /// 延迟播放刷新音效
    /// </summary>
    private IEnumerator PlayRefreshAudioDelayed() {
        float delay = DEFAULT_REFRESH_AUDIO_DELAY;
        if (DataManager.Instance != null && DataManager.Instance.gameConfig != null) {
            delay = DataManager.Instance.gameConfig.stickerRefreshAudioDelay;
        }
        yield return new WaitForSeconds(delay);
        sc.audio.Play("StickerRefresh");
    }

    #endregion
}
