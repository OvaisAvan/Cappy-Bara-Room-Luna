using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using DG.Tweening;
using SC;

/// <summary>
/// 引导管理器，负责处理游戏引导功能，包括新手引导和道具引导
/// </summary>
public class GuideManager : MonoBehaviour {
    #region 常量定义
    /// <summary>
    /// 引导手指的排序层级
    /// </summary>
    private const int GUIDE_FINGER_SORTING_ORDER = 2000;

    /// <summary>
    /// 屏幕到世界坐标转换的Z轴深度
    /// </summary>
    private const float SCREEN_TO_WORLD_Z = 10f;

    /// <summary>
    /// 默认引导手指移动动画持续时间（秒）
    /// </summary>
    private const float DEFAULT_GUIDE_FINGER_MOVE_ANIMATION_DURATION = 1.5f;

    /// <summary>
    /// 滚动动画持续时间（秒）
    /// </summary>
    private const float SCROLL_ANIMATION_DURATION = 0.5f;
    #endregion

    #region 单例模式
    /// <summary>
    /// 单例实例
    /// </summary>
    public static GuideManager Instance;

    /// <summary>
    /// 初始化单例
    /// </summary>
    void Awake() {
        if (Instance == null) {
            Instance = this;
            mainCamera = Camera.main;
        } else if (Instance != this) {
            Destroy(gameObject);
        }
    }
    #endregion

    #region 私有字段
    private Camera mainCamera;
    private GameObject currentHintGuideFinger = null;
    #endregion

    #region 公共字段
    [Header("引导手指预制")]
    [CustomLabel("引导手指预制")]
    [Tooltip("用于显示引导动画的手指预制体")]
    public GameObject guideFingerPrefab;

    [Header("UI画布")]
    [CustomLabel("UI画布")]
    [Tooltip("用于坐标转换的UI画布")]
    public Canvas uiCanvas;
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
    /// 获取引导手指移动动画持续时间
    /// </summary>
    /// <returns>动画持续时间（秒）</returns>
    private float GetGuideFingerMoveAnimationDuration() {
        GameConfig config = GetGameConfig();
        return config != null ? config.guideFingerMoveAnimationDuration : DEFAULT_GUIDE_FINGER_MOVE_ANIMATION_DURATION;
    }
    #endregion

    #region 引导模式管理



    /// <summary>
    /// 重置引导状态（在场景切换或窗口重新打开时调用）
    /// </summary>
    public void ResetGuideState() {
        StopAllCoroutines();
        ScrollRect scroll = GetStickerLayerScrollRect();
        if (scroll != null && scroll.content != null) scroll.content.DOKill();
        RemoveHintGuideFinger();
        StickerManager.Instance?.EnableStickerLayerScrollRect();
    }

    #endregion

    #region 新手引导手指


    /// <summary>
    /// 创建引导手指的通用方法
    /// </summary>
    private void CreateGuideFingerWithTargets(GameObject startSticker, GameObject targetSticker, ref GameObject fingerInstance, bool isHintGuide = false) {
        if (startSticker == null || targetSticker == null) return;

        fingerInstance = CreateGuideFingerInstance();
        if (fingerInstance == null) return;

        SetupGuideFingerPosition(fingerInstance, startSticker, targetSticker, isHintGuide);
    }

    #endregion

    #region 道具引导手指
    /// <summary>
    /// 创建道具引导手指（提示按钮引导）
    /// </summary>
    public void CreateHintGuideFinger() {
        ResetGuideState();
        if (guideFingerPrefab == null) return;

        (GameObject uiSticker, GameObject levelSticker) = FindHintGuideTargets();
        if (uiSticker == null || levelSticker == null) return;

        EnsureVisibleAndExecute(uiSticker, () => {
            CreateGuideFingerWithTargets(uiSticker, levelSticker, ref currentHintGuideFinger, true);
            if (currentHintGuideFinger != null) {
                StartCoroutine(MonitorTouchInputForHintGuide());
            }
        });
    }

    /// <summary>
    /// 查找道具引导的目标对（UI贴纸, 关卡贴纸）
    /// </summary>
    private (GameObject, GameObject) FindHintGuideTargets() {
        if (LevelManager.Instance == null || StickerManager.Instance == null) return (null, null);
        
        GameObject currentLevel = LevelManager.Instance.GetCurrentLevel();
        if (currentLevel == null) return (null, null);
        
        LevelController controller = currentLevel.GetComponent<LevelController>();
        StickerLayer stickerLayer = StickerManager.Instance.GetStickerLayer();
        if (controller == null || controller.waveChildren == null || stickerLayer == null || stickerLayer.stickerParent == null) 
            return (null, null);

        foreach (Transform child in stickerLayer.stickerParent) {
            if (child == null) continue;
            string uiName = GameUtils.CleanObjectName(child.name);
            foreach (GameObject levelObj in controller.waveChildren) {
                if (levelObj != null && GameUtils.CleanObjectName(levelObj.name) == uiName) {
                    return (child.gameObject, levelObj);
                }
            }
        }
        return (null, null);
    }

    /// <summary>
    /// 移除道具引导手指
    /// </summary>
    public void RemoveHintGuideFinger() {
        RemoveGuideFingerInstance(ref currentHintGuideFinger);
    }

    /// <summary>
    /// 监听触摸输入，一旦有触摸就移除道具引导手指
    /// </summary>
    private IEnumerator MonitorTouchInputForHintGuide() {
        yield return null; // 忽略触发提示按钮的本次按下。
        while (currentHintGuideFinger != null) {
            if (Input.GetMouseButtonDown(0) || Input.GetMouseButton(0) ||
                (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Began || Input.GetTouch(0).phase == TouchPhase.Moved))) {
                RemoveHintGuideFinger();
                yield break;
            }
            yield return null;
        }
    }
    #endregion

    #region 引导手指工具方法
    /// <summary>
    /// 创建引导手指实例
    /// </summary>
    /// <returns>创建的手指实例</returns>
    private GameObject CreateGuideFingerInstance() {
        GameObject finger = Instantiate(guideFingerPrefab, null);
        if (finger == null) return null;

        finger.name = GameUtils.CleanObjectName(finger.name);
        SpriteRenderer fingerSpriteRenderer = finger.GetComponentInChildren<SpriteRenderer>();
        if (fingerSpriteRenderer != null) {
            fingerSpriteRenderer.sortingOrder = GUIDE_FINGER_SORTING_ORDER;
        }
        return finger;
    }

    /// <summary>
    /// 设置引导手指位置并启动动画
    /// </summary>
    /// <param name="finger">手指对象</param>
    /// <param name="startSticker">起始贴纸</param>
    /// <param name="targetSticker">目标贴纸</param>
    /// <param name="isHintGuide">是否为提示引导（提示引导需要做左上角偏移）</param>
    private void SetupGuideFingerPosition(GameObject finger, GameObject startSticker, GameObject targetSticker, bool isHintGuide = false) {
        // 尝试获取贴纸的锚点配置
        Vector2? customAnchor = null;
        StickerItem stickerItem = startSticker.GetComponent<StickerItem>();
        if (stickerItem == null) {
            stickerItem = startSticker.GetComponentInChildren<StickerItem>();
        }
        
        if (stickerItem != null && stickerItem.fingerAnchorPosition != Vector2.zero) {
            customAnchor = stickerItem.fingerAnchorPosition;
        }

        // 获取贴纸的世界坐标位置
        Vector3 startPosition = GetStickerWorldPosition(startSticker, customAnchor);
        Vector3 targetPosition = GetLevelStickerCameraPosition(targetSticker, customAnchor);
        
        // 如果启用偏移修正，调整手指位置使其左上角（Hand 节点）对齐到目标锚点
        if (isHintGuide) {
            startPosition = AdjustGuideFingerPositionForTopLeft(finger, startPosition);
            targetPosition = AdjustGuideFingerPositionForTopLeft(finger, targetPosition);
        }
        
        finger.transform.position = startPosition;
        StartGuideFingerMoveAnimation(finger, startPosition, targetPosition);
    }

    /// <summary>
    /// 启动引导手指移动动画（使用缓动）
    /// </summary>
    /// <param name="fingerObject">手指对象</param>
    /// <param name="startPos">起始位置</param>
    /// <param name="targetPos">目标位置</param>
    private void StartGuideFingerMoveAnimation(GameObject fingerObject, Vector3 startPos, Vector3 targetPos) {
        if (fingerObject == null) return;
        fingerObject.transform.DOMove(targetPos, GetGuideFingerMoveAnimationDuration())
            .SetEase(Ease.InOutQuad)
            .SetLoops(-1, LoopType.Restart)
            .SetLink(fingerObject);
    }

    /// <summary>
    /// 移除引导手指实例（通用方法）
    /// </summary>
    /// <param name="fingerInstance">手指实例引用</param>
    private void RemoveGuideFingerInstance(ref GameObject fingerInstance) {
        if (fingerInstance != null) {
            if (fingerInstance.transform != null) {
                fingerInstance.transform.DOKill();
            }
            Destroy(fingerInstance);
            fingerInstance = null;
        }
    }
    #endregion

    #region 贴纸查找方法
    /// <summary>
    /// 在Transform列表中查找指定名称的贴纸（通用方法）
    /// </summary>
    private GameObject FindStickerInTransforms(Transform parent, string targetName) {
        if (parent == null || string.IsNullOrEmpty(targetName)) return null;
        string cleanTargetName = GameUtils.CleanObjectName(targetName);
        foreach (Transform child in parent) {
            if (child != null && GameUtils.CleanObjectName(child.name) == cleanTargetName) {
                return child.gameObject;
            }
        }
        return null;
    }

    /// <summary>
    /// 在GameObject列表中查找指定名称的贴纸（通用方法）
    /// </summary>
    private GameObject FindStickerInGameObjects(List<GameObject> list, string targetName) {
        if (list == null || string.IsNullOrEmpty(targetName)) return null;
        string cleanTargetName = GameUtils.CleanObjectName(targetName);
        foreach (GameObject item in list) {
            if (item != null && GameUtils.CleanObjectName(item.name) == cleanTargetName) {
                return item;
            }
        }
        return null;
    }


    #endregion

    #region 坐标转换方法
    /// <summary>
    /// 获取对象内的特定点坐标（支持锚点或默认中心）
    /// </summary>
    private Vector3 GetPointInObject(GameObject obj, Vector2? anchor = null) {
        if (obj == null) return Vector3.zero;

        RectTransform rt = obj.GetComponent<RectTransform>();
        if (rt != null) {
            if (anchor.HasValue) {
                Vector2 localPos = new Vector2(
                    Mathf.Lerp(rt.rect.min.x, rt.rect.max.x, anchor.Value.x),
                    Mathf.Lerp(rt.rect.min.y, rt.rect.max.y, anchor.Value.y)
                );
                return rt.TransformPoint(localPos);
            }
            return rt.position;
        }

        SpriteRenderer sr = obj.GetComponent<SpriteRenderer>() ?? obj.GetComponentInChildren<SpriteRenderer>();
        if (sr != null && anchor.HasValue) {
            Bounds b = GameUtils.GetLocalBounds(sr);
            Vector3 localPos = new Vector3(
                Mathf.Lerp(b.min.x, b.max.x, anchor.Value.x),
                Mathf.Lerp(b.min.y, b.max.y, anchor.Value.y),
                Mathf.Lerp(b.min.z, b.max.z, 0.5f)
            );
            return sr.transform.TransformPoint(localPos);
        }

        return obj.transform.position;
    }

    /// <summary>
    /// 获取贴纸的世界坐标位置（用于StickerLayer中的UI贴纸）
    /// </summary>
    private Vector3 GetStickerWorldPosition(GameObject sticker, Vector2? anchor = null) {
        Vector3 worldPos = GetPointInObject(sticker, anchor);
        
        // 只有 UI 坐标需要通过相机转换到世界深度 Z
        if (sticker.GetComponent<RectTransform>() != null && uiCanvas != null && uiCanvas.worldCamera != null && mainCamera != null) {
            Vector2 screenPos = RectTransformUtility.WorldToScreenPoint(uiCanvas.worldCamera, worldPos);
            return mainCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, SCREEN_TO_WORLD_Z));
        }
        return worldPos;
    }

    /// <summary>
    /// 获取关卡中贴纸的相机坐标位置
    /// </summary>
    private Vector3 GetLevelStickerCameraPosition(GameObject sticker, Vector2? anchor = null) {
        if (sticker == null || mainCamera == null) return Vector3.zero;
        Vector3 worldPos = GetPointInObject(sticker, anchor);
        Vector2 screenPos = mainCamera.WorldToScreenPoint(worldPos);
        return mainCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, SCREEN_TO_WORLD_Z));
    }

    /// <summary>
    /// 调整引导手指位置，使手指图片的左上角对齐到目标位置
    /// </summary>
    /// <param name="finger">手指对象</param>
    /// <param name="targetPos">目标位置（世界坐标）</param>
    /// <returns>修正后的手指根节点位置</returns>
    private Vector3 AdjustGuideFingerPositionForTopLeft(GameObject finger, Vector3 targetPos) {
        if (finger == null) return targetPos;

        Transform handTransform = FindHandTransformInFinger(finger);
        if (handTransform == null) return targetPos;

        // 获取Hand节点的左上角相对于手指根节点的偏移
        Vector3 topLeftOffset = Vector3.zero;
        RectTransform handRect = handTransform.GetComponent<RectTransform>();
        
        if (handRect != null) {
            // UI模式：使用RectTransform
            Vector2 rectMin = handRect.rect.min;  // 左下角（相对于pivot）
            Vector2 rectMax = handRect.rect.max;  // 右上角（相对于pivot）
            topLeftOffset = new Vector3(
                handRect.localPosition.x + rectMin.x,
                handRect.localPosition.y + rectMax.y,
                0
            );
        } else {
            // 3D模式：使用Renderer
            Renderer handRenderer = handTransform.GetComponent<Renderer>()
                ?? handTransform.GetComponentInChildren<Renderer>();

            if (handRenderer != null) {
                Bounds handBounds = GameUtils.GetLocalBounds(handRenderer);
                topLeftOffset = handTransform.localPosition + new Vector3(
                    handBounds.min.x,
                    handBounds.max.y,
                    handBounds.center.z
                );
            } else {
                topLeftOffset = handTransform.localPosition;
            }
        }

        // 修正位置：目标位置 - Hand左上角的偏移 = 手指根节点应该放置的位置
        return targetPos - topLeftOffset;
    }

    /// <summary>
    /// 查找手指对象中的"Hand"子节点
    /// </summary>
    /// <param name="finger">手指对象</param>
    /// <returns>Hand节点的Transform，如果找不到返回null</returns>
    private Transform FindHandTransformInFinger(GameObject finger) {
        if (finger == null) return null;

        // 首先尝试直接查找名为"Hand"的子节点
        Transform handTransform = finger.transform.Find("Hand");
        if (handTransform != null) return handTransform;

        // 如果找不到，尝试查找所有子节点中名字包含"Hand"的
        foreach (Transform child in finger.transform) {
            if (child.name.Contains("Hand") || child.name.Contains("hand")) {
                return child;
            }
        }

        return null;
    }
    #endregion

    #region 滚动和可见性检查
    /// <summary>
    /// 确保目标可见（若不可见则自动滚动）并执行后续操作
    /// </summary>
    private void EnsureVisibleAndExecute(GameObject target, System.Action action) {
        if (IsStickerVisibleInViewport(target)) {
            action?.Invoke();
        } else {
            ScrollStickerToVisible(target, () => action?.Invoke());
        }
    }

    /// <summary>
    /// 检查贴纸是否在StickerLayer的视口内可见
    /// </summary>
    /// <param name="sticker">贴纸对象</param>
    /// <returns>如果贴纸在视口内返回true，否则返回false</returns>
    private bool IsStickerVisibleInViewport(GameObject sticker) {
        if (StickerManager.Instance == null) return true;
        StickerLayer stickerLayer = StickerManager.Instance.GetStickerLayer();
        if (stickerLayer == null) return true;
        ScrollRect scrollRect = stickerLayer.GetComponent<ScrollRect>();
        if (scrollRect == null || scrollRect.viewport == null) return true;

        RectTransform stickerRect = sticker.GetComponent<RectTransform>();
        if (stickerRect == null) return true;

        RectTransform viewport = scrollRect.viewport;
        Rect viewportRect = viewport.rect;
        Vector3[] stickerCorners = new Vector3[4];
        stickerRect.GetWorldCorners(stickerCorners);

        foreach (Vector3 corner in stickerCorners) {
            if (viewportRect.Contains(viewport.InverseTransformPoint(corner))) {
                return true;
            }
        }
        return viewportRect.Contains(viewport.InverseTransformPoint(stickerRect.position));
    }

    /// <summary>
    /// 安全执行回调
    /// </summary>
    private void SafeInvokeCallback(System.Action callback) {
        if (callback != null) callback();
    }

    /// <summary>
    /// 获取StickerLayer的ScrollRect组件
    /// </summary>
    private ScrollRect GetStickerLayerScrollRect() {
        if (StickerManager.Instance == null) return null;
        StickerLayer stickerLayer = StickerManager.Instance.GetStickerLayer();
        if (stickerLayer == null) return null;
        return stickerLayer.GetComponent<ScrollRect>();
    }

    /// <summary>
    /// 滚动StickerLayer使贴纸显示在屏幕内
    /// </summary>
    /// <param name="sticker">要显示的贴纸</param>
    /// <param name="onComplete">滚动完成后的回调</param>
    private void ScrollStickerToVisible(GameObject sticker, System.Action onComplete) {
        ScrollRect scrollRect = GetStickerLayerScrollRect();
        if (scrollRect == null || scrollRect.content == null || scrollRect.viewport == null) {
            SafeInvokeCallback(onComplete);
            return;
        }

        RectTransform stickerRect = sticker != null ? sticker.GetComponent<RectTransform>() : null;
        if (stickerRect == null) {
            SafeInvokeCallback(onComplete);
            return;
        }

        RectTransform content = scrollRect.content;
        RectTransform viewport = scrollRect.viewport;
        Vector2 stickerLocalPos = content.InverseTransformPoint(stickerRect.position);
        float scrollableWidth = content.rect.width - viewport.rect.width;

        if (scrollableWidth > 0) {
            float targetNormalizedX = Mathf.Clamp01((stickerLocalPos.x - viewport.rect.width * 0.5f) / scrollableWidth);
            Vector2 targetPos = new Vector2(targetNormalizedX, scrollRect.normalizedPosition.y);
            DOTween.To(() => scrollRect.normalizedPosition, x => scrollRect.normalizedPosition = x, targetPos, SCROLL_ANIMATION_DURATION)
                .SetTarget(content)
                .SetEase(Ease.OutQuad)
                .OnComplete(() => SafeInvokeCallback(onComplete));
        } else {
            SafeInvokeCallback(onComplete);
        }
    }
    #endregion
}


