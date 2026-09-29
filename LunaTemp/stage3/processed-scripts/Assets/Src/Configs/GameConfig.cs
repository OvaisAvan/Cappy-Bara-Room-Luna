using UnityEngine;
using SC;

[CreateAssetMenu(fileName = "GameConfig", menuName = "StickerGame/GameConfig", order = 0)]
public class GameConfig : ScriptableObject {
    #region 贴纸设置

    [Header("贴纸设置")]
    [CustomLabel("贴纸最大高度")]
    [Tooltip("贴纸最大高度限制(像素)")]
    public float stickerMaxHeight = 200f;

    [CustomLabel("拖动缩放持续时间")]
    [Tooltip("拖动贴纸缩放动画持续时间(秒)")]
    public float dragStickerScaleAnimationDuration = 0.3f;

    [CustomLabel("删除缩小持续时间")]
    [Tooltip("拖动贴纸删除前缩小动画持续时间(秒)")]
    public float dragStickerDestroyAnimationDuration = 0.2f;

    [CustomLabel("引导手指移动时间")]
    [Tooltip("引导手指移动动画持续时间(秒)")]
    public float guideFingerMoveAnimationDuration = 1.5f;

    #endregion

    #region UI设置

    [Header("UI设置")]
    [CustomLabel("进度条动画时间")]
    [Tooltip("进度条动画持续时间(秒)")]
    public float progressBarAnimationDuration = 0.5f;

    #endregion

    #region 试玩设置

    [Header("试玩设置")]
    [CustomLabel("无操作结算时间")]
    [Tooltip("玩家连续无操作达到该时间（秒）后进入无操作结算")]
    public float idleSettleSeconds = 15f;

    #endregion

    #region 音效设置

    [Header("音效设置")]
    [CustomLabel("刷新贴纸音效延迟")]
    [Tooltip("刷新贴纸音效延迟播放时间(秒)")]
    public float stickerRefreshAudioDelay = 0.5f;

    #endregion

}
