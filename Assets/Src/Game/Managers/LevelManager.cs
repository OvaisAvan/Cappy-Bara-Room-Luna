using SC;
using System.Collections;
using UnityEngine;

/// <summary>
/// 关卡管理器 - 管理关卡加载和进度
/// </summary>
public class LevelManager : MonoBehaviour {
    #region 常量定义

    /// <summary>
    /// 礼花特效的排序层级
    /// </summary>
    private const int FIREWORKS_SORTING_ORDER = 21000;

    #endregion

    #region 字段和属性

    public static LevelManager Instance;

    [Header("挂载关卡的父节点")]
    [CustomLabel("关卡父节点")]
    [Tooltip("关卡预制体实例化的父节点")]
    public Transform levelParent;

    [Header("特效设置")]
    [CustomLabel("特效挂载节点")]
    [Tooltip("用于挂载特效的父节点")]
    public Transform effectParent;

    [CustomLabel("礼花特效预制体")]
    [Tooltip("关卡完成时播放的礼花特效预制体")]
    public GameObject fireworksEffectPrefab;

    [Header("结算设置")]
    [CustomLabel("结算延迟时间")]
    [Tooltip("游戏结束后进入结算界面的延迟时间（秒）")]
    [Range(0f, 10f)]
    public float victoryScreenDelay = 2f;

    private GameObject currentLevel;
    private int currentLevelID = -1;
    private int totalWaveChildrenCount;
    private int completedWaveChildrenCount;
    private GameObject currentFireworksEffect;
    public bool IsRestarting { get; private set; }

    #endregion

    #region Unity生命周期

    void Awake() {
        if (Instance == null) {
            Instance = this;
        }
    }

    #endregion

    /// <summary>
    /// 暂停重开、启动和通关均使用同一清理流程。
    /// </summary>
    public void RestartLevel() {
        StopAllCoroutines();
        StartCoroutine(ReloadLevel());
    }

    private IEnumerator ReloadLevel() {
        IsRestarting = true;
        Time.timeScale = 1f;
        GuideManager.Instance?.ResetGuideState();
        StickerManager.Instance?.DestroyStickerLayer();
        ClearLevel();
        // 等待旧关卡和贴纸层的 OnDestroy，避免清掉新一轮缓存。
        yield return null;
        DataManager.Instance.ResetRun();
        LoadLevel(DataManager.FixedLevelID);
        FindObjectOfType<MyLayerGame>()?.ResetRoundUI();
        IsRestarting = false;
    }

    #region 关卡加载

    /// <summary>
    /// 初始化并加载当前关卡（从 DataManager 读取）
    /// </summary>
    public void Init() {
        RestartLevel();
    }

    /// <summary>
    /// 根据关卡ID加载（从1开始计数）
    /// </summary>
    /// <param name="levelID">关卡ID（从1开始）</param>
    public void LoadLevel(int levelID) {
        GameObject prefab = DataManager.Instance.levelConfig.GetLevelPrefab(DataManager.FixedLevelID);
        if (prefab == null) {
            Debug.LogError("第八关预制体未配置。");
            return;
        }
        currentLevelID = DataManager.FixedLevelID;
        ResetLevelProgress();
        totalWaveChildrenCount = 0;
        currentLevel = Instantiate(prefab, levelParent);
        currentLevel.name = GameUtils.CleanObjectName(currentLevel.name);
    }

    /// <summary>
    /// 获取当前关卡对象
    /// </summary>
    /// <returns>当前关卡对象</returns>
    public GameObject GetCurrentLevel() {
        return currentLevel;
    }

    /// <summary>
    /// 获取当前关卡ID
    /// </summary>
    /// <returns>当前关卡ID（从1开始），如果没有加载关卡则返回-1</returns>
    public int GetCurrentLevelID() {
        return currentLevelID;
    }

    /// <summary>
    /// 清除当前关卡预制
    /// </summary>
    public void ClearLevel() {
        if (currentLevel != null) {
            currentLevel.SetActive(false);
            Destroy(currentLevel);
            currentLevel = null;
        }
        currentLevelID = -1;
        StopFireworksEffect();
    }





    /// <summary>
    /// 显示胜利界面（延迟执行，确保数据保存完成）
    /// </summary>
    public void ShowVictoryScreen() {
        if (IsRestarting || PlayableFlow.IsEnded) return;
        IsRestarting = true;
        // 礼花期间先锁定胜利结果，SDK 若在此期间结束也按胜利结算。
        PlayableFlow.DeclareResult(PlayableResult.Won);
        GuideManager.Instance?.ResetGuideState();
        PlayFireworksEffect();
        StartCoroutine(ShowVictoryScreenDelayed());
    }

    /// <summary>
    /// 礼花播放后进入胜利结算（不再自动重玩）
    /// </summary>
    private IEnumerator ShowVictoryScreenDelayed() {
        yield return new WaitForSeconds(victoryScreenDelay);
        PlayableFlow.EndGame(PlayableResult.Won);
    }

    #endregion

    #region 特效管理

    /// <summary>
    /// 播放礼花特效
    /// </summary>
    public void PlayFireworksEffect() {
        PlayFireworksEffectAt(Vector3.zero, true);
    }

    /// <summary>
    /// 停止并销毁礼花特效
    /// </summary>
    public void StopFireworksEffect() {
        if (currentFireworksEffect != null) {
            Destroy(currentFireworksEffect);
            currentFireworksEffect = null;
        }
    }

    /// <summary>
    /// 在指定位置播放礼花特效
    /// </summary>
    /// <param name="position">世界坐标位置（如果为Vector3.zero则使用父节点位置）</param>
    /// <param name="playAudio">是否播放音效，默认为true</param>
    public void PlayFireworksEffectAt(Vector3 position, bool playAudio = true) {
        if (fireworksEffectPrefab == null) return;

        // 清除之前的特效实例
        StopFireworksEffect();

        // 播放胜利礼花音效
        if (playAudio) {
            sc.audio.Play("VictoryFireworks");
        }

        // 确定特效的父节点
        Transform parent = GetEffectParent();

        // 实例化礼花特效
        if (position == Vector3.zero) {
            currentFireworksEffect = Instantiate(fireworksEffectPrefab, parent);
        } else {
            currentFireworksEffect = Instantiate(fireworksEffectPrefab, position, Quaternion.identity, parent);
        }
        currentFireworksEffect.name = GameUtils.CleanObjectName(currentFireworksEffect.name);

        // 设置特效层级并播放
        SetupAndPlayFireworksEffect(currentFireworksEffect);
    }

    /// <summary>
    /// 获取特效父节点
    /// </summary>
    private Transform GetEffectParent() {
        if (effectParent != null) return effectParent;
        if (levelParent != null) return levelParent;
        return transform;
    }

    /// <summary>
    /// 设置特效层级并播放所有粒子系统
    /// </summary>
    private void SetupAndPlayFireworksEffect(GameObject effectObject) {
        if (effectObject == null) return;

        // 设置特效层级
        SetFireworksEffectSortingOrder(effectObject, FIREWORKS_SORTING_ORDER);

        // 播放所有粒子系统（包括主粒子和子粒子）
        ParticleSystem[] allParticleSystems = effectObject.GetComponentsInChildren<ParticleSystem>();
        foreach (ParticleSystem ps in allParticleSystems) {
            if (ps != null) {
                ps.Play();
            }
        }
    }

    /// <summary>
    /// 设置特效的排序层级
    /// </summary>
    /// <param name="effectObject">特效对象</param>
    /// <param name="sortingOrder">排序层级</param>
    private void SetFireworksEffectSortingOrder(GameObject effectObject, int sortingOrder) {
        if (effectObject == null) return;

        // 设置所有 ParticleSystemRenderer 的层级
        ParticleSystemRenderer[] particleRenderers = effectObject.GetComponentsInChildren<ParticleSystemRenderer>(true);
        foreach (ParticleSystemRenderer renderer in particleRenderers) {
            renderer.sortingOrder = sortingOrder;
        }

        // 设置所有 SpriteRenderer 的层级（如果有）
        SpriteRenderer[] spriteRenderers = effectObject.GetComponentsInChildren<SpriteRenderer>(true);
        foreach (SpriteRenderer renderer in spriteRenderers) {
            renderer.sortingOrder = sortingOrder;
        }
    }

    #endregion

    #region 关卡进度

    /// <summary>
    /// 获取所有波次下的子节点总数量
    /// </summary>
    /// <returns>子节点总数量</returns>
    public int GetTotalWaveChildrenCount() {
        return totalWaveChildrenCount;
    }

    /// <summary>
    /// 设置所有波次下的子节点总数量
    /// </summary>
    /// <param name="count">子节点总数量</param>
    public void SetTotalWaveChildrenCount(int count) {
        totalWaveChildrenCount = count;
    }

    /// <summary>
    /// 获取已完成的子节点数量
    /// </summary>
    /// <returns>已完成的子节点数量</returns>
    public int GetCompletedWaveChildrenCount() {
        return completedWaveChildrenCount;
    }

    /// <summary>
    /// 增加已完成的子节点数量
    /// </summary>
    public void IncrementCompletedWaveChildrenCount() {
        completedWaveChildrenCount++;
    }

    /// <summary>
    /// 重置关卡进度数据
    /// </summary>
    public void ResetLevelProgress() {
        completedWaveChildrenCount = 0;
    }

    /// <summary>
    /// 计算波次数组下的所有子节点数量（通用方法）
    /// </summary>
    /// <param name="waveArray">波次数组</param>
    /// <returns>所有波次下的子节点总数量</returns>
    private int CountWaveChildren(GameObject[] waveArray) {
        if (waveArray == null) return 0;

        int totalCount = 0;
        foreach (GameObject wave in waveArray) {
            if (wave == null) continue;
            foreach (Transform child in wave.transform) {
                if (child != null && child.gameObject != null) {
                    totalCount++;
                }
            }
        }
        return totalCount;
    }

    /// <summary>
    /// 计算波次数组下的所有子节点数量并设置总数量字段
    /// </summary>
    /// <param name="waveArray">波次数组</param>
    /// <returns>所有波次下的子节点总数量</returns>
    public int GetAllWaveChildrenCount(GameObject[] waveArray) {
        int totalCount = CountWaveChildren(waveArray);
        SetTotalWaveChildrenCount(totalCount);
        return totalCount;
    }



    #endregion
}
