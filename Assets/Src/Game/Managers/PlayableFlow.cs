using SC;
using UnityEngine;

public enum PlayableResult {
    None,
    Won,
    Idle,
}

/// <summary>
/// Playable ad lifecycle: owns the single result and the single sc.web.GameEnd() call.
/// The SDK does not know win/idle; the result must be stored before GameEnd().
/// </summary>
public static class PlayableFlow {
    public const string SettleWindow = "LayerSettle";

    public static PlayableResult Result { get; private set; }
    public static bool IsStarted { get; private set; }
    public static bool IsEnded { get; private set; }
    private static bool settlementShown;
    private static bool bound;

    public static void Bind() {
        Result = PlayableResult.None;
        IsStarted = false;
        IsEnded = false;
        settlementShown = false;
        if (bound) return;
        sc.web.OnStartGameLogic += OnStartGameLogic;
        sc.web.OnGameEndAction += OnGameEndAction;
        bound = true;
    }

    public static void Unbind() {
        if (!bound) return;
        if (sc.web != null) {
            sc.web.OnStartGameLogic -= OnStartGameLogic;
            sc.web.OnGameEndAction -= OnGameEndAction;
        }
        bound = false;
    }

    /// <summary>
    /// Locks in the outcome without ending yet (e.g. while the victory fireworks play),
    /// so an SDK idle end during the celebration still settles as a win.
    /// </summary>
    public static void DeclareResult(PlayableResult result) {
        if (IsEnded || Result != PlayableResult.None) return;
        Result = result;
    }

    public static void EndGame(PlayableResult result) {
        if (IsEnded) return;
        DeclareResult(result);
        IsEnded = true;
        sc.sdk.OnCommonOpportunity("GameOver");
        // Raises OnGameEndAction synchronously, then notifies the host page.
        sc.web.GameEnd();
    }

    private static void OnStartGameLogic() {
        IsStarted = true;
        Debug.Log("[PlayableFlow] Game logic started");
    }

    private static void OnGameEndAction() {
        // Also reached when the SDK ends the ad itself (idle timer), with no game result.
        IsEnded = true;
        if (Result == PlayableResult.None) Result = PlayableResult.Idle;
        if (settlementShown) return;
        settlementShown = true;

        GuideManager.Instance?.ResetGuideState();
        Debug.Log("[PlayableFlow] Game end, result = " + Result);
        sc.window.ShowWindow(SettleWindow);
    }
}
