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
    /// 试玩托盘只显示当前波次，不允许滚动，始终保持禁用
    /// </summary>
    public void EnableScrollRect() {
        DisableScrollRect();
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
        // 试玩托盘不滚动，左右箭头始终隐藏
        if (leftArrow != null) leftArrow.SetActive(false);
        if (rightArrow != null) rightArrow.SetActive(false);
    }

    #endregion

    #region 初始化方法

    /// <summary>
    /// 初始化贴纸层
    /// </summary>
    public void InitializeLayer() {
        InitializeLayerByType();
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
        // 计数改由左上角面板（MyLayerGame）显示，托盘上的旧计数牌隐藏
        if (textBackground != null) {
            textBackground.SetActive(false);
        }

        // 贴纸由 LevelController 按当前波次通过 ShowWaveStickers 填充
        ConfigureStaticTray();
    }

    #endregion

    #region 试玩托盘（仅当前波次）

    private const float TRAY_THICKNESS = 252f;  // 与托盘底图 common_bg_03 高度一致
    private const float TRAY_HEADER = 64f;      // 底图紫色标题栏厚度
    private const float TRAY_EDGE = 28f;        // 其余三边留白
    private const float SLOT_FILL = 0.85f;      // 贴纸占槽位的比例

    private bool isPortrait = true;
    private Image landscapeBackground;

    /// <summary>
    /// 托盘改为静态显示：禁用滚动、隐藏箭头，内容铺满视口并由 LayoutSlots 手动排布
    /// </summary>
    private void ConfigureStaticTray() {
        if (scrollRect == null) scrollRect = GetComponent<ScrollRect>();
        DisableScrollRect();
        UpdateArrowsVisibility();

        RectTransform content = stickerParent as RectTransform;
        if (content == null) return;
        HorizontalLayoutGroup layoutGroup = content.GetComponent<HorizontalLayoutGroup>();
        if (layoutGroup != null) layoutGroup.enabled = false;
        ContentSizeFitter sizeFitter = content.GetComponent<ContentSizeFitter>();
        if (sizeFitter != null) sizeFitter.enabled = false;

        content.anchorMin = Vector2.zero;
        content.anchorMax = Vector2.one;
        content.pivot = new Vector2(0.5f, 0.5f);
        content.offsetMin = Vector2.zero;
        content.offsetMax = Vector2.zero;
        content.localScale = Vector3.one;
    }

    /// <summary>
    /// 竖屏：托盘在底部，贴纸横排；横屏：托盘在右侧（底图旋转 90°，标题栏朝向房间），贴纸竖排
    /// </summary>
    public void ApplyOrientation(bool portrait) {
        isPortrait = portrait;
        ConfigureStaticTray();

        RectTransform rect = (RectTransform)transform;
        if (portrait) {
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = new Vector2(1f, 0f);
            rect.pivot = new Vector2(0.5f, 0f);
            rect.sizeDelta = new Vector2(0f, TRAY_THICKNESS);
        } else {
            rect.anchorMin = new Vector2(1f, 0f);
            rect.anchorMax = Vector2.one;
            rect.pivot = new Vector2(1f, 0.5f);
            rect.sizeDelta = new Vector2(TRAY_THICKNESS, 0f);
        }
        rect.anchoredPosition = Vector2.zero;

        Image background = GetComponent<Image>();
        if (background != null) {
            if (background.sprite != null && background.sprite.border != Vector4.zero) background.type = Image.Type.Sliced;
            background.enabled = portrait;
            Image rotated = GetLandscapeBackground(background);
            rotated.gameObject.SetActive(!portrait);
            ((RectTransform)rotated.transform).sizeDelta = new Vector2(rect.rect.height, rect.rect.width);
        }

        RectTransform viewport = scrollRect != null ? scrollRect.viewport : null;
        if (viewport != null) {
            viewport.anchorMin = Vector2.zero;
            viewport.anchorMax = Vector2.one;
            viewport.pivot = new Vector2(0.5f, 0.5f);
            viewport.offsetMin = portrait ? new Vector2(TRAY_EDGE, TRAY_EDGE) : new Vector2(TRAY_HEADER, TRAY_EDGE);
            viewport.offsetMax = portrait ? new Vector2(-TRAY_EDGE, -TRAY_HEADER) : new Vector2(-TRAY_EDGE, -TRAY_EDGE);
        }

        LayoutSlots();
    }

    /// <summary>
    /// 横屏用的旋转底图（与竖屏共用同一张图，逆时针旋转 90° 后标题栏在左侧）
    /// </summary>
    private Image GetLandscapeBackground(Image source) {
        if (landscapeBackground != null) return landscapeBackground;

        GameObject go = new GameObject("LandscapeBackground", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
        go.layer = gameObject.layer;
        RectTransform rt = (RectTransform)go.transform;
        rt.SetParent(transform, false);
        rt.SetAsFirstSibling();
        rt.anchorMin = rt.anchorMax = rt.pivot = new Vector2(0.5f, 0.5f);
        rt.anchoredPosition = Vector2.zero;
        rt.localRotation = Quaternion.Euler(0f, 0f, 90f);

        landscapeBackground = go.GetComponent<Image>();
        landscapeBackground.sprite = source.sprite;
        landscapeBackground.type = source.type;
        landscapeBackground.color = source.color;
        landscapeBackground.raycastTarget = false;
        return landscapeBackground;
    }

    /// <summary>
    /// 清空托盘并按波次顺序放入本波次待放置的贴纸
    /// </summary>
    public void ShowWaveStickers(List<GameObject> prefabs) {
        if (stickerParent == null) return;
        ConfigureStaticTray();

        // 先脱离父节点再销毁，避免本帧布局仍计算旧贴纸
        for (int i = stickerParent.childCount - 1; i >= 0; i--) {
            Transform child = stickerParent.GetChild(i);
            child.gameObject.SetActive(false);
            child.SetParent(null, false);
            Destroy(child.gameObject);
        }

        CreateStickersInLayer(prefabs);
        LayoutSlots();
    }

    /// <summary>
    /// 沿托盘长边等分槽位，每个贴纸居中放入并等比缩小到槽位内（保留翻转的负缩放）；
    /// 已放置的贴纸保持缩小隐藏，只更新位置，其余贴纸不移位
    /// </summary>
    private void LayoutSlots() {
        RectTransform content = stickerParent as RectTransform;
        if (content == null) return;
        Rect area = content.rect;
        int count = content.childCount;
        if (count == 0 || area.width <= 0f || area.height <= 0f) return;

        float slot = (isPortrait ? area.width : area.height) / count;
        Vector2 box = isPortrait ? new Vector2(slot, area.height) : new Vector2(area.width, slot);
        for (int i = 0; i < count; i++) {
            RectTransform item = content.GetChild(i) as RectTransform;
            if (item == null) continue;

            float offset = slot * (i + 0.5f) - slot * count * 0.5f;
            item.anchorMin = item.anchorMax = new Vector2(0.5f, 0.5f);
            item.anchoredPosition = isPortrait ? new Vector2(offset, 0f) : new Vector2(0f, -offset);

            StickerItem sticker = item.GetComponent<StickerItem>();
            if (sticker != null && !sticker.isClickable) continue;

            Vector2 size = item.rect.size;
            if (size.x <= 0f || size.y <= 0f) continue;
            float scale = Mathf.Min(1f, box.x * SLOT_FILL / size.x, box.y * SLOT_FILL / size.y);
            Vector3 current = item.localScale;
            item.localScale = new Vector3(Mathf.Sign(current.x) * scale, Mathf.Sign(current.y) * scale, 1f);
        }
    }

    #endregion

    #region 装扮类型贴纸初始化




    #endregion
}
