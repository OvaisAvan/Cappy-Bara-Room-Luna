using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 手指控制器 - 控制手指跟随玩家触摸/鼠标移动
/// </summary>
public class FingerController : MonoBehaviour {
    #region 字段和属性

    [Header("画布引用")]
    /// <summary>
    /// UI画布引用（如果未设置则尝试从StickerManager获取）
    /// </summary>
    public Canvas targetCanvas;

    private RectTransform canvasRect;

    #endregion

    #region Unity生命周期

    void Awake() {
        if (targetCanvas == null && StickerManager.Instance != null) {
            targetCanvas = StickerManager.Instance.uiCanvas;
        }
        if (targetCanvas != null) {
            canvasRect = targetCanvas.transform as RectTransform;
        }
    }

    void Update() {
        if (Input.touchSupported && Input.touchCount > 0) {
            HandleTouchInput();
        } else {
            HandleMouseInput();
        }
    }

    #endregion

    #region 输入处理方法

    /// <summary>
    /// 处理鼠标输入
    /// </summary>
    private void HandleMouseInput() {
        if (Input.GetMouseButton(0)) {
            UpdateFingerPosition(Input.mousePosition);
        }
    }

    /// <summary>
    /// 处理触摸输入
    /// </summary>
    private void HandleTouchInput() {
        if (Input.touchCount > 0) {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Moved || touch.phase == TouchPhase.Stationary) {
                UpdateFingerPosition(touch.position);
            }
        }
    }

    #endregion

    #region 位置更新方法

    /// <summary>
    /// 更新手指位置
    /// </summary>
    /// <param name="screenPos">屏幕坐标位置</param>
    private void UpdateFingerPosition([Bridge.Ref] Vector2 screenPos) {
        if (canvasRect == null || targetCanvas == null) return;

        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
            canvasRect, screenPos, targetCanvas.worldCamera, out Vector2 localPoint)) {
            transform.localPosition = localPoint;
        }
    }

    #endregion
}
