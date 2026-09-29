using UnityEngine;
using System.Collections.Generic;
using SC;
using UnityEngine.UI;

/// <summary>
/// StickerLayer组件，用于管理贴纸层
/// </summary>
public class StickerLayer : MonoBehaviour {
    #region 枚举定义

    /// <summary>
    /// 贴纸层类型枚举
    /// </summary>
    public enum LayerType {
        Game,   // 游戏类型
    }

    #endregion

    #region 字段与引用

    [Header("贴纸层设置")]
    [CustomLabel("贴纸层类型")]
    [Tooltip("当前贴纸层的类型")]
    public LayerType currentLayerType = LayerType.Game;

    [CustomLabel("贴纸父节点")]
    [Tooltip("贴纸父节点")]
    public Transform stickerParent;

    [Header("UI元素")]
    [CustomLabel("左箭头节点")]
    [Tooltip("左箭头节点")]
    public GameObject leftArrow;

    [CustomLabel("右箭头节点")]
    [Tooltip("右箭头节点")]
    public GameObject rightArrow;

    [CustomLabel("文本背景节点")]
    [Tooltip("文本背景节点")]
    public GameObject textBackground;

    [CustomLabel("文本组件")]
    [Tooltip("文本组件")]
    public Text textComponent;

    [CustomLabel("空状态提示文本")]
    [Tooltip("没有东西时显示的文本组件")]
    public Text emptyStateText;

    private ScrollRect scrollRect;

    #endregion

    #region Unity生命周期

    void Start() {
        if (scrollRect == null) {
            InitializeScrollRect();
        }
    }

    /// <summary>
    /// 初始化ScrollRect组件（可在Start()之前调用）
    /// </summary>
    public void InitializeScrollRect() {
        if (scrollRect == null) {
            scrollRect = GetComponent<ScrollRect>();
        }
        if (scrollRect != null) {
            scrollRect.onValueChanged.RemoveListener(OnScrollChanged);
            scrollRect.onValueChanged.AddListener(OnScrollChanged);
        }
    }

    void OnDestroy() {
        if (scrollRect != null) {
            scrollRect.onValueChanged.RemoveListener(OnScrollChanged);
        }
        if (StickerManager.Instance != null) {
            StickerManager.Instance.ClearCachedStickerLayer();
        }
    }

    #endregion

    #region ScrollRect控制

    /// <summary>
    /// 滚动位置变化时的回调
    /// </summary>
    /// <param name="position">新的滚动位置</param>
    private void OnScrollChanged(Vector2 position) {
        UpdateArrowsVisibility();
    }

    /// <summary>
    /// 启用ScrollRect滚动
    /// </summary>
    public void EnableScrollRect() {
        if (scrollRect != null) {
            scrollRect.enabled = true;
        }
    }

    /// <summary>
    /// 禁用ScrollRect滚动
    /// </summary>
    public void DisableScrollRect() {
        if (scrollRect != null) {
            scrollRect.enabled = false;
        }
    }

    #endregion

    #region 箭头显示

    /// <summary>
    /// 更新箭头的可见性
    /// </summary>
    public void UpdateArrowsVisibility() {
        if (scrollRect == null) {
            scrollRect = GetComponent<ScrollRect>();
        }
        if (scrollRect == null || leftArrow == null || rightArrow == null) return;

        const float threshold = 0.01f;
        float normalizedPosition = scrollRect.normalizedPosition.x;
        leftArrow.SetActive(normalizedPosition > threshold);
        rightArrow.SetActive(normalizedPosition < (1f - threshold));
    }

    #endregion

    #region 文本显示

    /// <summary>
    /// 更新文本显示，显示剩余未完成数量/总数
    /// </summary>
    public void UpdateTextDisplay() {
        if (textComponent == null) return;
        if (LevelManager.Instance == null) return;

        int totalCount = LevelManager.Instance.GetTotalWaveChildrenCount();
        int completedCount = LevelManager.Instance.GetCompletedWaveChildrenCount();
        int remainingCount = totalCount - completedCount;
        textComponent.text = $"{remainingCount}/{totalCount}";
    }

    #endregion

    #region 初始化方法

    /// <summary>
    /// 初始化贴纸层
    /// </summary>
    public void InitializeLayer() {
        InitializeLayerByType();
        UpdateTextDisplay();
    }

    /// <summary>
    /// 设置贴纸层类型并初始化
    /// </summary>
    /// <param name="layerType">贴纸层类型</param>
    public void SetLayerTypeAndInitialize(LayerType layerType) {
        currentLayerType = layerType;
        InitializeLayerByType();
    }

    /// <summary>
    /// 根据当前类型初始化贴纸层
    /// </summary>
    public void InitializeLayerByType() {
        InitializeGameStickers();
    }

    #endregion

    #region 贴纸创建通用方法

    /// <summary>
    /// 过滤需要创建的贴纸（排除已存在和不符合条件的）
    /// </summary>
    /// <param name="prefabs">贴纸预制列表</param>
    /// <param name="shouldCreate">判断是否应该创建的条件委托，如果为null则只检查是否已存在</param>
    /// <returns>需要创建的贴纸列表</returns>
    private List<GameObject> FilterStickersToCreate(List<GameObject> prefabs, System.Func<GameObject, bool> shouldCreate) {
        List<GameObject> stickersToCreate = new List<GameObject>();
        if (prefabs == null || prefabs.Count == 0) return stickersToCreate;

        foreach (GameObject prefab in prefabs) {
            if (prefab == null) continue;

            bool alreadyExists = false;
            if (stickerParent != null) {
                foreach (Transform child in stickerParent) {
                    if (child.name.Contains(prefab.name)) {
                        alreadyExists = true;
                        break;
                    }
                }
            }
            if (alreadyExists) continue;
            if (shouldCreate != null && !shouldCreate(prefab)) continue;
            stickersToCreate.Add(prefab);
        }
        return stickersToCreate;
    }

    /// <summary>
    /// 过滤需要创建的贴纸（重载方法，接受数组参数）
    /// </summary>
    /// <param name="prefabs">贴纸预制数组</param>
    /// <param name="shouldCreate">判断是否应该创建的条件委托，如果为null则只检查是否已存在</param>
    /// <returns>需要创建的贴纸列表</returns>
    private List<GameObject> FilterStickersToCreate(GameObject[] prefabs, System.Func<GameObject, bool> shouldCreate) {
        if (prefabs == null || prefabs.Length == 0) {
            return new List<GameObject>();
        }
        return FilterStickersToCreate(new List<GameObject>(prefabs), shouldCreate);
    }

    /// <summary>
    /// 在当前贴纸层中创建贴纸（根据currentLayerType自动确定贴纸类型）
    /// </summary>
    /// <param name="stickersToCreate">需要创建的贴纸预制列表</param>
    private void CreateStickersInLayer(List<GameObject> stickersToCreate) {
        if (stickersToCreate == null || stickersToCreate.Count == 0) return;
        if (stickerParent == null) return;
        if (StickerManager.Instance == null) return;

        StickerItem.StickerType stickerType = StickerItem.StickerType.Paster;
        StickerManager.Instance.CreateStickers(stickersToCreate.ToArray(), stickerParent, stickerType, currentLayerType);
    }

    #endregion

    #region 游戏类型贴纸初始化

    /// <summary>
    /// 初始化游戏类型的贴纸
    /// </summary>
    private void InitializeGameStickers() {
        if (emptyStateText != null) {
            emptyStateText.gameObject.SetActive(false);
        }
        if (textBackground != null) {
            textBackground.SetActive(true);
        }

        if (LevelManager.Instance == null) return;
        GameObject currentLevel = LevelManager.Instance.GetCurrentLevel();
        if (currentLevel == null) return;

        LevelController levelController = currentLevel.GetComponent<LevelController>();
        if (levelController == null || stickerParent == null) return;

        GameObject[] stickerArray = levelController.StickerArray;
        if (stickerArray == null || stickerArray.Length == 0) return;

        if (DataManager.Instance == null) return;
        string levelName = "Level" + levelController.levelNum;
        List<DataManager.LevelData> levelDataList = DataManager.Instance.GetLevelDataList(levelName);

        List<GameObject> stickersToCreate = FilterStickersToCreate(
            stickerArray,
            (prefab) => {
                if (levelDataList == null) return true;
                foreach (DataManager.LevelData levelData in levelDataList) {
                    if (levelData.prefabName == prefab.name) {
                        return !levelData.isCompleted;
                    }
                }
                return true;
            }
        );

        CreateStickersInLayer(stickersToCreate);
        UpdateArrowsVisibility();
    }

    #endregion

    #region 装扮类型贴纸初始化




    #endregion
}
