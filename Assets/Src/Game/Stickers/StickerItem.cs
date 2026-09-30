using SC;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 贴纸物品组件 - 管理贴纸的拖拽、碰撞和状态
/// </summary>
public class StickerItem : MonoBehaviour {
    #region 常量定义

    /// <summary>
    /// 屏幕到世界坐标转换的Z轴深度
    /// </summary>
    private const float SCREEN_TO_WORLD_Z = 10f;

    /// <summary>
    /// 默认贴纸最大高度
    /// </summary>
    private const float DEFAULT_MAX_HEIGHT = 200f;

    /// <summary>
    /// 默认提示按钮最低关卡数
    /// </summary>
    private const int DEFAULT_HINT_BUTTON_MIN_LEVEL = 3;

    /// <summary>
    /// 拖拽时的临时排序层级（确保在最上层）
    /// </summary>
    private const int DRAGGING_SORTING_ORDER = 10000;

    /// <summary>
    /// 默认音效音量
    /// </summary>
    private const float DEFAULT_AUDIO_VOLUME = 1f;

    #endregion

    #region 枚举定义

    /// <summary>
    /// 贴纸类型枚举
    /// </summary>
    public enum StickerType {
        Null,       // 空白
        Paster,     // 贴纸
        StickHere,  // 粘贴
        DragOnly,   // 拖拽
    }

    #endregion

    #region 字段和属性

    [Header("组件引用")]
    [CustomLabel("图片对象")]
    [Tooltip("图片对象")]
    public GameObject sprite;

    [CustomLabel("骨骼节点")]
    [Tooltip("专门挂骨骼/龙骨等动画节点")]
    public Transform armatureNode;
    [Tooltip("Keep the placed sprite visible instead of using DragonBones in Playworks.")]
    public bool useStaticSpriteInPlayable;

    [CustomLabel("特效节点")]
    [Tooltip("专门挂特效（粒子、闪光等）的挂点")]
    public Transform effectNode;

    [CustomLabel("特效显示时隐藏贴图")]
    [Tooltip("仅有特效节点激活时，是否需要同时隐藏主SpriteRenderer")]
    public bool hideSpriteWhenEffectActive = false;


    [Header("贴纸设置")]
    [CustomLabel("贴纸类型")]
    [Tooltip("贴纸类型")]
    public StickerType type = StickerType.Null;
    [CustomLabel("贴纸层类型")]
    [Tooltip("贴纸所属的层类型（Game）")]
    public StickerLayer.LayerType layerType = StickerLayer.LayerType.Game;
    [CustomLabel("是否可点击")]
    [Tooltip("是否可点击，贴纸可点击，粘贴不可点击")]
    public bool isClickable = true;
    [CustomLabel("是否完成")]
    [Tooltip("是否完成，默认为false")]
    public bool isCompleted = false;
    [CustomLabel("所需重叠百分比")]
    [Tooltip("所需重叠百分比，默认为70%，主要用于StickHere类型")]
    public float requiredOverlapPercentage = 0.7f;
    [CustomLabel("大小")]
    [Tooltip("设置大小")]
    public float size = 1f;
    [CustomLabel("手指锚点位置")]
    [Tooltip("手指在贴纸上的相对位置（0-1范围），(0.5, 0.5)表示贴纸正中间，(0, 0)表示左下角，(1, 1)表示右上角")]
    public Vector2 fingerAnchorPosition = new Vector2(0f, 0f);

    [Header("音效设置")]
    [CustomLabel("粘贴完成音效音量")]
    [Tooltip("贴纸粘贴完成时的音效音量（0-1）")]
    [Range(0f, 1f)]
    public float audioVolume = DEFAULT_AUDIO_VOLUME;

    private GameObject currentDrag;
    private StickerItem originalStickerItem;
    private GameObject currentFinger;
    private Camera mainCamera;
    private RectTransform rectTransform;
    private MyLayerGame cachedMyLayerGame;
    private StickerManager stickerManager;

    #endregion

    #region Unity生命周期

    void Awake() {
        mainCamera = Camera.main;
    }

    void Start() {
        rectTransform = GetComponent<RectTransform>();
        stickerManager = StickerManager.Instance;
    }

    void Update() {
        HandleInput();
    }

    #endregion

    #region 配置获取方法

    /// <summary>
    /// 获取GameConfig配置（如果不存在则返回null）
    /// </summary>
    private GameConfig GetGameConfig() {
        if (DataManager.Instance == null) return null;
        return DataManager.Instance.gameConfig;
    }

    /// <summary>
    /// 获取贴纸最大高度
    /// </summary>
    /// <returns>最大高度（像素）</returns>
    private float GetStickerMaxHeight() {
        GameConfig config = GetGameConfig();
        return config != null ? config.stickerMaxHeight : DEFAULT_MAX_HEIGHT;
    }


    #endregion

    #region 初始化方法

    /// <summary>
    /// 根据贴纸类型初始化贴纸
    /// </summary>
    /// <param name="stickerType">贴纸类型</param>
    /// <param name="layerType">贴纸层类型，默认为Game</param>
    public void InitializeSticker(StickerType stickerType, StickerLayer.LayerType layerType = StickerLayer.LayerType.Game) {
        type = stickerType;
        this.layerType = layerType;

        // 根据贴纸类型设置属性
        switch (stickerType) {
            case StickerType.Paster:
                SetupPasterType();
                break;

            case StickerType.StickHere:
                SetupStickHereType();
                break;

            case StickerType.DragOnly:
                SetupDragOnlyType();
                break;

            case StickerType.Null:
            default:
                SetupNullType();
                break;
        }

        // 初始化音效状态（先设为0）
        InitializeAudioState();
        // 根据当前贴纸完成状态更新音效
        UpdateAudioState();
    }

    /// <summary>
    /// 初始化音效状态
    /// </summary>
    private void InitializeAudioState() {
        AudioSource audioSource = GetComponent<AudioSource>();
        if (audioSource == null) return;

        // 初始化时所有音效都设为0，后续通过UpdateAudioState更新
        audioSource.volume = 0f;
    }

    /// <summary>
    /// 更新音效状态（根据当前贴纸状态和位置更新音量）
    /// </summary>
    public void UpdateAudioState() {
        AudioSource audioSource = GetComponent<AudioSource>();
        if (audioSource == null) return;
        if (IsInStickerLayer() || !sc.audio.IsSoundAndMusicOpen() || !isCompleted) {
            audioSource.volume = 0f;
            return;
        }
        audioSource.volume = audioVolume;
        if (!audioSource.isPlaying) audioSource.Play();
    }

    /// <summary>
    /// 检查父节点链中是否存在指定类型的组件
    /// </summary>
    /// <typeparam name="T">要查找的组件类型</typeparam>
    /// <returns>如果找到返回true，否则返回false</returns>
    private bool HasComponentInParent<T>() where T : Component {
        if (transform.parent == null) return false;

        Transform checkTransform = transform.parent;
        while (checkTransform != null) {
            if (checkTransform.GetComponent<T>() != null) {
                return true;
            }
            checkTransform = checkTransform.parent;
        }
        return false;
    }

    /// <summary>
    /// 判断是否在StickerLayer上
    /// </summary>
    private bool IsInStickerLayer() {
        return HasComponentInParent<StickerLayer>();
    }



    /// <summary>
    /// 获取SpriteRenderer组件（优先从自身获取，其次从子对象获取）
    /// </summary>
    /// <param name="target">目标对象，如果为null则使用当前对象</param>
    /// <returns>SpriteRenderer组件，如果找不到返回null</returns>
    private SpriteRenderer GetSpriteRenderer(GameObject target = null) {
        if (target == null) target = gameObject;
        return GetSpriteRendererFromGameObject(target);
    }

    /// <summary>
    /// 从GameObject获取SpriteRenderer组件（静态方法，可在静态方法中使用）
    /// </summary>
    /// <param name="target">目标对象</param>
    /// <returns>SpriteRenderer组件，如果找不到返回null</returns>
    private static SpriteRenderer GetSpriteRendererFromGameObject(GameObject target) {
        if (target == null) return null;
        SpriteRenderer spriteRenderer = target.GetComponent<SpriteRenderer>();
        return spriteRenderer ?? target.GetComponentInChildren<SpriteRenderer>();
    }

    /// <summary>
    /// 清理当前手指对象
    /// </summary>
    private void ClearFinger() {
        if (stickerManager != null && currentFinger != null) {
            stickerManager.RemoveFinger(currentFinger);
            currentFinger = null;
        }
    }

    /// <summary>
    /// 初始化为拖拽类型
    /// </summary>
    public void DragOnlyInit() {
        InitializeSticker(StickerType.DragOnly);
    }

    /// <summary>
    /// 设置为Paster类型
    /// </summary>
    private void SetupPasterType() {
        isClickable = true;
        isCompleted = false;
        if (sprite == null) return;

        sprite.SetActive(true);
        SpriteRenderer spriteRenderer = sprite.GetComponent<SpriteRenderer>();
        if (spriteRenderer == null) return;

        Sprite spriteAsset = spriteRenderer.sprite;
        // Playworks queues component destruction; hide the old renderer immediately.
        spriteRenderer.enabled = false;
        DestroyImmediate(spriteRenderer);

        Image image = sprite.AddComponent<Image>();
        image.sprite = spriteAsset;
        SetupRectTransform(spriteAsset);
    }

    /// <summary>
    /// 设置RectTransform尺寸
    /// </summary>
    /// <param name="spriteAsset">精灵资源</param>
    private void SetupRectTransform(Sprite spriteAsset) {
        if (spriteAsset == null) return;

        RectTransform rectTransform = sprite.GetComponent<RectTransform>();
        if (rectTransform == null) return;

        // 获取原始尺寸
        float originalWidth = spriteAsset.rect.width;
        float originalHeight = spriteAsset.rect.height;

        // 从GameConfig获取最大高度限制
        float maxHeight = GetStickerMaxHeight();

        // 计算缩放比例，确保不超过最大高度
        float scale = 1f;
        if (originalHeight > maxHeight) {
            scale = maxHeight / originalHeight;
        }

        // 叠加 StickerItem.size 作为额外缩放系数（<=0 时按 1 处理）
        float sizeScale = size > 0f ? size : 1f;

        // 应用缩放后的尺寸
        rectTransform.sizeDelta = new Vector2(originalWidth * scale * sizeScale, originalHeight * scale * sizeScale);
    }

    /// <summary>
    /// 设置为StickHere类型
    /// </summary>
    private void SetupStickHereType() {
        SetupNonClickableType();
    }

    /// <summary>
    /// 设置为DragOnly类型
    /// </summary>
    private void SetupDragOnlyType() {
        SetupNonClickableType();
    }

    /// <summary>
    /// 设置不可点击类型的通用逻辑
    /// </summary>
    private void SetupNonClickableType() {
        isClickable = false;
        isCompleted = false;
        if (sprite != null) sprite.SetActive(true);
    }


    /// <summary>
    /// 设置为Null类型
    /// </summary>
    private void SetupNullType() {
        isClickable = false;
        isCompleted = false;
        if (sprite != null) sprite.SetActive(false);
    }

    #endregion

    #region 输入处理方法

    /// <summary>
    /// 处理输入事件（鼠标和触摸）
    /// </summary>
    private void HandleInput() {
        if (Time.timeScale == 0f || PlayableFlow.IsEnded || LevelManager.Instance == null || LevelManager.Instance.IsRestarting) return;
        if (Input.touchSupported && Input.touchCount > 0) {
            HandleTouchInput();
        } else {
            HandleMouseInput();
        }
    }

    /// <summary>
    /// 处理鼠标输入
    /// </summary>
    private void HandleMouseInput() {
        if (Input.GetMouseButtonDown(0)) {
            TryStartDrag(Input.mousePosition);
        }
        if (Input.GetMouseButton(0)) {
            Drag(Input.mousePosition);
        }
        if (Input.GetMouseButtonUp(0)) {
            EndDrag();
        }
    }

    /// <summary>
    /// 处理触摸输入
    /// </summary>
    private void HandleTouchInput() {
        if (Input.touchCount <= 0) return;

        Touch touch = Input.GetTouch(0);

        switch (touch.phase) {
            case TouchPhase.Began:
                TryStartDrag(touch.position);
                break;

            case TouchPhase.Moved:
            case TouchPhase.Stationary:
                Drag(touch.position);
                break;

            case TouchPhase.Ended:
            case TouchPhase.Canceled:
                EndDrag();
                break;
        }
    }

    #endregion

    #region 拖拽相关方法

    /// <summary>
    /// 设置贴纸为完成状态，同时设置为不可点击
    /// </summary>
    /// <param name="playAudio">是否播放粘贴完成音效，默认为true</param>
    public void SetCompleted(bool playAudio = true) {
        isCompleted = true;
        isClickable = false;
        if (playAudio) {
            PlayCompletionAudio();
        }
        // 更新音效状态
        UpdateAudioState();
    }

    /// <summary>
    /// 播放粘贴完成音效
    /// </summary>
    private void PlayCompletionAudio() {
        // 使用SDK播放粘贴音效
        sc.audio.Play("StickerPlace");
    }

    /// <summary>
    /// 设置原始贴纸引用
    /// </summary>
    /// <param name="originalSticker">原始贴纸的StickerItem组件</param>
    public void SetOriginalSticker(StickerItem originalSticker) {
        originalStickerItem = originalSticker;
    }






    /// <summary>
    /// 尝试开始拖动贴纸
    /// </summary>
    /// <param name="screenPos">屏幕上的点击位置</param>
    private void TryStartDrag(Vector2 screenPos) {
        if (currentDrag != null) return; // 如果已经正在拖动，则不再创建新的拖动副本
        if (!IsPointerOver(screenPos) || type != StickerType.Paster || !isClickable || stickerManager == null) return;

        // 播放取贴纸音效
        sc.audio.Play("StickerPick");

        stickerManager.DisableStickerLayerScrollRect();
        Vector2 sizeDifference = stickerManager.CalculateSizeDifference(gameObject);
        currentDrag = stickerManager.CreateDragSticker(gameObject, screenPos, this, sizeDifference);

        if (currentDrag != null) {
            // Leave the slot empty while dragging; restore only after a failed drop.
            Image trayImage = sprite != null ? sprite.GetComponent<Image>() : null;
            if (trayImage != null) trayImage.enabled = false;
            currentFinger = stickerManager.CreateFinger(parent: currentDrag, screenPos: screenPos, anchorPosition: fingerAnchorPosition);
        }
    }

    /// <summary>
    /// 拖动贴纸
    /// </summary>
    /// <param name="screenPos">屏幕上的位置</param>
    private void Drag(Vector2 screenPos) {
        if (currentDrag == null || mainCamera == null) return;

        Vector3 worldPos = mainCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, SCREEN_TO_WORLD_Z));
        currentDrag.transform.position = worldPos;
    }

    /// <summary>
    /// 结束拖动
    /// </summary>
    private void EndDrag() {
        if (currentDrag == null) return;
        StickerItem dragStickerItem = currentDrag.GetComponent<StickerItem>();
        if (dragStickerItem != null) dragStickerItem.CheckDragOnlyCollision();
        ClearFinger();
        if (currentDrag != null) Destroy(currentDrag);
        currentDrag = null;
        if (stickerManager != null) {
            stickerManager.EnableStickerLayerScrollRect();
            if (type == StickerType.Paster && isClickable) {
                stickerManager.SwitchStickerImage(gameObject);
                Image trayImage = sprite != null ? sprite.GetComponent<Image>() : null;
                if (trayImage != null) trayImage.enabled = true;
            }
        }
    }

    /// <summary>
    /// 检查指针是否在贴纸上
    /// </summary>
    /// <param name="screenPos">屏幕上的位置</param>
    /// <returns>如果指针在贴纸上返回true，否则返回false</returns>
    public bool IsPointerOver(Vector2 screenPos) {
        if (!gameObject.activeSelf || !gameObject.activeInHierarchy) return false;

        CanvasGroup canvasGroup = GetComponentInParent<CanvasGroup>();
        if (canvasGroup != null && (!canvasGroup.interactable || canvasGroup.alpha <= 0.01f)) {
            return false;
        }

        if (rectTransform == null) rectTransform = GetComponent<RectTransform>();
        if (stickerManager == null) stickerManager = StickerManager.Instance;

        if (rectTransform == null || stickerManager == null || stickerManager.uiCanvas == null) {
            return false;
        }

        if (!IsVisibleInScrollRect()) return false;

        return RectTransformUtility.RectangleContainsScreenPoint(
            rectTransform,
            screenPos,
            stickerManager.uiCanvas.worldCamera
        );
    }

    /// <summary>
    /// 检查贴纸是否在ScrollRect的可视区域内
    /// </summary>
    /// <returns>如果在可视区域内返回true，否则返回false</returns>
    private bool IsVisibleInScrollRect() {
        if (rectTransform == null || stickerManager == null) return false;

        StickerLayer stickerLayer = stickerManager.GetStickerLayer();
        if (stickerLayer == null) return true;

        ScrollRect scrollRect = stickerLayer.GetComponent<ScrollRect>();
        if (scrollRect == null || scrollRect.viewport == null) return true;

        RectTransform viewport = scrollRect.viewport;
        Vector3[] stickerCorners = new Vector3[4];
        rectTransform.GetWorldCorners(stickerCorners);

        Rect viewportRect = viewport.rect;
        foreach (Vector3 corner in stickerCorners) {
            Vector2 cornerLocal = viewport.InverseTransformPoint(corner);
            if (viewportRect.Contains(cornerLocal)) {
                return true;
            }
        }

        Vector3 stickerCenterWorld = rectTransform.position;
        Vector2 stickerCenterLocal = viewport.InverseTransformPoint(stickerCenterWorld);
        return viewportRect.Contains(stickerCenterLocal);
    }

    #endregion

    #region 碰撞检查方法




    /// <summary>
    /// 检查DragOnly类型的贴纸与waveChildren节点的碰撞
    /// </summary>
    private void CheckDragOnlyCollision() {
        if (stickerManager == null) return;

        bool collisionSuccess = stickerManager.CheckDragOnlyCollision(gameObject);
        if (!collisionSuccess || originalStickerItem == null) return;

        originalStickerItem?.ClearFinger();
        originalStickerItem.isClickable = false;
        originalStickerItem.currentDrag = null;



        stickerManager.EnableStickerLayerScrollRect();
        SaveLevelDataAndDestroyOriginal();
    }


    /// <summary>
    /// 保存关卡数据并销毁原始贴纸
    /// </summary>
    private void SaveLevelDataAndDestroyOriginal() {
        if (DataManager.Instance == null) {
            return;
        }

        int currentLevelID = DataManager.Instance.GetCurrentLevelID();
        if (currentLevelID < 1) {
            return;
        }

        string levelName = "Level" + currentLevelID;
        DataManager.LevelData levelData = new DataManager.LevelData {
            prefabName = GameUtils.CleanObjectName(originalStickerItem.name),
            isCompleted = true
        };
        DataManager.Instance.SaveLevelData(levelName, levelData);
        UpdateCompletedStickerCount();
        stickerManager.ShrinkTraySticker(originalStickerItem.gameObject);
    }


    /// <summary>
    /// 更新LevelManager中的已完成贴纸数量
    /// </summary>
    private void UpdateCompletedStickerCount() {
        if (LevelManager.Instance != null) {
            LevelManager.Instance.IncrementCompletedWaveChildrenCount();
            MyLayerGame myLayerGame = GetOrCacheMyLayerGame();
            if (myLayerGame != null) {
                myLayerGame.BumpCounter();
            }
        }
    }

    /// <summary>
    /// 获取或缓存MyLayerGame引用
    /// </summary>
    /// <returns>MyLayerGame组件引用</returns>
    private MyLayerGame GetOrCacheMyLayerGame() {
        if (cachedMyLayerGame == null) {
            cachedMyLayerGame = FindObjectOfType<MyLayerGame>();
        }
        return cachedMyLayerGame;
    }


    #endregion
}
