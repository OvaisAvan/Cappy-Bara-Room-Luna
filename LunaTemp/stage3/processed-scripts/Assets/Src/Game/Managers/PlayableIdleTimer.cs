using UnityEngine;

/// <summary>
/// 无操作结算计时（唯一权威计时器）：关卡显示后开始计时，任意触摸/鼠标/按键输入清零，
/// 连续无操作达到 GameConfig.idleSettleSeconds 后以 Idle 结果结束试玩。
/// SDK 自带计时（WebAdConfig.IAutoSettleDuration）保持关闭：它要等 SDK 开始游戏逻辑后才计时，
/// AppLovin 需首次触摸才开始，玩家从不触摸时永远不会结算。
/// </summary>
public class PlayableIdleTimer : MonoBehaviour {
    private const float DEFAULT_IDLE_SECONDS = 15f;

    private float idleTime;

    public float IdleTime {
        get { return idleTime; }
    }

    void Update() {
        if (!IsCounting() || HasInput()) {
            idleTime = 0f;
            return;
        }

        idleTime += Time.unscaledDeltaTime;
        if (idleTime >= GetIdleSeconds()) {
            idleTime = 0f;
            PlayableFlow.EndGame(PlayableResult.Idle);
        }
    }

    /// <summary>
    /// 仅在可玩状态下计时：关卡已加载、未在重开、尚未结束且未进入胜利礼花
    /// </summary>
    private static bool IsCounting() {
        if (PlayableFlow.IsEnded || PlayableFlow.Result != PlayableResult.None) return false;
        if (LevelManager.Instance == null || LevelManager.Instance.IsRestarting) return false;
        if (LevelManager.Instance.GetCurrentLevel() == null) return false;
#if UNITY_EDITOR
        // 编辑器下 SDK 会先显示模拟广告遮罩（仅编辑器），遮罩期间玩家无法操作
        if (SC._0xea696b74.IsMaskShow) return false;
#endif
        return true;
    }

    /// <summary>
    /// 按下/拖动期间持续视为有操作；GetMouseButton 与贴纸拖拽使用的输入接口一致
    /// </summary>
    private static bool HasInput() {
        return Input.touchCount > 0 || Input.GetMouseButton(0) || Input.anyKey || Input.anyKeyDown;
    }

    private static float GetIdleSeconds() {
        GameConfig config = DataManager.Instance != null ? DataManager.Instance.gameConfig : null;
        return config != null && config.idleSettleSeconds > 0f ? config.idleSettleSeconds : DEFAULT_IDLE_SECONDS;
    }
}
