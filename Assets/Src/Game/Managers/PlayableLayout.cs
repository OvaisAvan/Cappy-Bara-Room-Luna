using SC;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 横竖屏自适应（随时可切换）：
/// 竖屏托盘在底部、横屏托盘在右侧；相机取景让房间落在托盘与左上角计数之外的剩余区域；
/// 背景图保持比例铺满。只移动/缩放相机，关卡、拖拽与碰撞的世界坐标不变。
/// </summary>
public class PlayableLayout : MonoBehaviour {
    private static readonly Vector2 PORTRAIT_REFERENCE = new Vector2(640f, 1136f);
    private const float ROOM_PADDING = 0.025f;       // Reduce unused pink space around the room.
    private const float TOP_RESERVE_FALLBACK = 0.12f; // 未找到计数面板时顶部预留比例
    private const float COUNTER_GAP = 8f;             // 计数面板下方额外间距（像素）
    private const int SETTLE_FRAMES = 2;              // CanvasScaler 在自身 Update 中才生效，变化后连续重排几帧

    [CustomLabel("主相机")]
    public Camera mainCamera;

    [CustomLabel("游戏画布缩放器")]
    [Tooltip("与 SDK UICanvas 保持一致：竖屏 640x1136，横屏 1136x640，按宽度匹配")]
    public CanvasScaler[] gameScalers;

    [CustomLabel("背景画布")]
    [Tooltip("其下带图片的背景节点保持比例铺满屏幕")]
    public RectTransform backgroundRoot;

    private int lastWidth;
    private int lastHeight;
    private StickerLayer lastLayer;
    private GameObject lastLevel;
    private MyLayerGame gameLayer;
    private bool hasRoom;
    private Bounds roomBounds;
    private int settleFrames;
    private Rect lastSafeArea;
    private Vector2 lastCounterCanvasSize;

    public static bool IsPortrait {
        get { return Screen.width <= Screen.height; }
    }

    void LateUpdate() {
        StickerLayer layer = StickerManager.Instance != null ? StickerManager.Instance.GetStickerLayer() : null;
        GameObject level = LevelManager.Instance != null ? LevelManager.Instance.GetCurrentLevel() : null;
        MyLayerGame counterOwner = gameLayer != null ? gameLayer : FindObjectOfType<MyLayerGame>();
        RectTransform counterCanvas = counterOwner != null && counterOwner.counterPanel != null
            ? counterOwner.counterPanel.parent as RectTransform : null;
        Vector2 counterCanvasSize = counterCanvas != null ? counterCanvas.rect.size : Vector2.zero;

        bool changed = Screen.width != lastWidth || Screen.height != lastHeight ||
                       layer != lastLayer || level != lastLevel || counterOwner != gameLayer ||
                       Screen.safeArea != lastSafeArea || counterCanvasSize != lastCounterCanvasSize;
        if (changed) {
            lastWidth = Screen.width;
            lastHeight = Screen.height;
            lastSafeArea = Screen.safeArea;
            lastCounterCanvasSize = counterCanvasSize;
            lastLayer = layer;
            gameLayer = counterOwner;
            if (level != lastLevel) {
                lastLevel = level;
                CacheRoom(level);
            }
            settleFrames = SETTLE_FRAMES;
        }

        if (settleFrames <= 0) return;
        settleFrames--;
        Apply(layer);
    }

    private void Apply(StickerLayer layer) {
        bool portrait = IsPortrait;

        Vector2 reference = portrait ? PORTRAIT_REFERENCE : new Vector2(PORTRAIT_REFERENCE.y, PORTRAIT_REFERENCE.x);
        if (gameScalers != null) {
            foreach (CanvasScaler scaler in gameScalers) {
                if (scaler == null) continue;
                scaler.referenceResolution = reference;
                scaler.matchWidthOrHeight = 0f;
            }
        }

        EnvelopeBackgrounds();
        if (layer != null) layer.ApplyOrientation(portrait);

        Canvas.ForceUpdateCanvases();
        PositionCounter();
        FitCamera(layer, portrait);
    }

    // Playworks currently returns the full viewport for Screen.safeArea. Keep a
    // conservative inset too, so embedded ads remain readable on notched phones.
    public static Rect GetSafeScreenRect() {
        float width = Mathf.Max(1f, Screen.width);
        float height = Mathf.Max(1f, Screen.height);
        Rect safe = Screen.safeArea;
        if (safe.width <= 0f || safe.height <= 0f) safe = new Rect(0f, 0f, width, height);
        float side = width * (IsPortrait ? 0.025f : 0.05f);
        float top = height * (IsPortrait ? 0.055f : 0.035f);
        return Rect.MinMaxRect(Mathf.Max(safe.xMin, side), Mathf.Max(safe.yMin, height * 0.02f),
            Mathf.Min(safe.xMax, width - side), Mathf.Min(safe.yMax, height - top));
    }

    private void PositionCounter() {
        if (gameLayer == null || gameLayer.counterPanel == null) return;
        RectTransform counter = gameLayer.counterPanel;
        RectTransform parent = counter.parent as RectTransform;
        if (parent == null || Screen.width <= 0 || Screen.height <= 0) return;
        Rect safe = GetSafeScreenRect();
        counter.anchorMin = counter.anchorMax = new Vector2(0f, 1f);
        counter.anchoredPosition = new Vector2(
            safe.xMin * parent.rect.width / Screen.width + 12f + counter.rect.width * counter.pivot.x,
            -((Screen.height - safe.yMax) * parent.rect.height / Screen.height + 16f +
              counter.rect.height * (1f - counter.pivot.y)));
    }

    /// <summary>
    /// 房间取景以房间外壳（Scene）为准；关卡自带的世界空间背景与背景画布重复，横屏时无法铺满，隐藏
    /// </summary>
    private void CacheRoom(GameObject level) {
        hasRoom = false;
        if (level == null) return;

        Transform worldBackground = level.transform.Find("Background");
        if (worldBackground != null) worldBackground.gameObject.SetActive(false);

        Transform shell = level.transform.Find("Scene");
        SpriteRenderer shellRenderer = shell != null ? shell.GetComponent<SpriteRenderer>() : null;
        if (shellRenderer == null) return;
        roomBounds = shellRenderer.bounds;
        hasRoom = true;
    }

    private void EnvelopeBackgrounds() {
        if (backgroundRoot == null) return;
        foreach (Image image in backgroundRoot.GetComponentsInChildren<Image>(true)) {
            if (image.sprite == null || image.rectTransform == backgroundRoot) continue;
            AspectRatioFitter fitter = image.GetComponent<AspectRatioFitter>();
            if (fitter == null) fitter = image.gameObject.AddComponent<AspectRatioFitter>();
            fitter.aspectMode = AspectRatioFitter.AspectMode.EnvelopeParent;
            fitter.aspectRatio = image.sprite.rect.width / image.sprite.rect.height;
        }
    }

    private void FitCamera(StickerLayer layer, bool portrait) {
        if (!hasRoom || mainCamera == null) return;

        float width = Screen.width;
        float height = Screen.height;
        if (width <= 0f || height <= 0f) return;

        Rect free = new Rect(0f, 0f, width, height);
        if (layer != null) {
            Rect tray = GetScreenRect((RectTransform)layer.transform);
            if (portrait) free.yMin = Mathf.Max(free.yMin, tray.yMax);
            else free.xMax = Mathf.Min(free.xMax, tray.xMin);
        }

        float top = height * (1f - TOP_RESERVE_FALLBACK);
        if (gameLayer != null && gameLayer.counterPanel != null && gameLayer.counterPanel.gameObject.activeInHierarchy) {
            top = GetScreenRect(gameLayer.counterPanel).yMin - COUNTER_GAP;
        }
        free.yMax = Mathf.Min(free.yMax, top);
        if (free.width <= 0f || free.height <= 0f) return;

        float aspect = width / height;
        float fill = 1f - 2f * ROOM_PADDING;
        float sizeForHeight = roomBounds.size.y / (2f * free.height / height);
        float sizeForWidth = roomBounds.size.x / (2f * aspect * free.width / width);
        float orthoSize = Mathf.Max(sizeForHeight, sizeForWidth) / fill;
        mainCamera.orthographicSize = orthoSize;

        // 让房间中心对准可用区域中心
        float offsetX = (free.center.x / width - 0.5f) * 2f * orthoSize * aspect;
        float offsetY = (free.center.y / height - 0.5f) * 2f * orthoSize;
        Vector3 position = mainCamera.transform.position;
        mainCamera.transform.position = new Vector3(roomBounds.center.x - offsetX, roomBounds.center.y - offsetY, position.z);
    }

    private static Rect GetScreenRect(RectTransform rect) {
        Canvas canvas = rect.GetComponentInParent<Canvas>();
        Camera cam = null;
        if (canvas != null) {
            canvas = canvas.rootCanvas;
            if (canvas.renderMode != RenderMode.ScreenSpaceOverlay) cam = canvas.worldCamera;
        }

        Vector3[] corners = new Vector3[4];
        rect.GetWorldCorners(corners);
        Vector2 min = RectTransformUtility.WorldToScreenPoint(cam, corners[0]);
        Vector2 max = min;
        for (int i = 1; i < 4; i++) {
            Vector2 point = RectTransformUtility.WorldToScreenPoint(cam, corners[i]);
            min = Vector2.Min(min, point);
            max = Vector2.Max(max, point);
        }
        return Rect.MinMaxRect(min.x, min.y, max.x, max.y);
    }
}
