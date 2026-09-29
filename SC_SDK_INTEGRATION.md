# Reusable SC Web SDK Integration Guide for Unity Playables

This guide is intended to be copied into another Unity playable project. It explains the common SC SDK lifecycle calls, settlement flow, and download call. The final section records how the current Zombie Fire project maps onto that pattern.

The API names below are from the SC Web SDK included in this project (SDK version **2.5.9**). The SDK source is obfuscated; use the public `SC.sc` facade from game scripts and inspect the SDK version that ships with the target project before relying on internals.

## 1. Integration model

Keep these responsibilities distinct:

| Owner | Responsibility |
|---|---|
| Game code | Decide when gameplay is ready, started, won, failed, or idle; stop gameplay and set its own result state |
| SC SDK | Initialize ad integration, expose lifecycle events, show configured SDK windows, and forward end/download requests to the host page |
| Settlement UI | Display the result artwork and CTA that match the result already decided by the game |
| Ad network wrapper | Supply the JavaScript callbacks or platform APIs that open the store/listing |

`sc.web.GameEnd()` does **not** take a win/fail argument. Store the result in game state before calling it. In the current SDK, `sc.web.GameEnd()` raises the C# `OnGameEndAction` event, then invokes the JavaScript game-end bridge.

## 2. Minimal lifecycle pattern

Create a bootstrap object in the first scene. It should persist across scene loads, initialize the SDK once, subscribe to lifecycle events before signalling readiness, then start/load gameplay from the SDK init callback.

```csharp
using UnityEngine;
using SC;

public sealed class ScSdkBootstrap : MonoBehaviour
{
    void Awake()
    {
        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        sc.Init(OnSdkInitialized);
    }

    void OnSdkInitialized()
    {
        // Optional: show the configured in-game SDK layer.
        sc.window.ShowWindow("LayerMainWeb");

        // Subscribe before announcing that the game is ready.
        sc.web.OnStartGameLogic += OnStartGameLogic;
        sc.web.OnGameEndAction += OnGameEndAction;

        // Signals successful entry/readiness. The SDK then runs its ready flow
        // and may start immediately or wait for the ad-network/user start call.
        sc.sdk.OnEnterGameSuccess();

        // Load the playable scene here, or enable it in OnStartGameLogic,
        // according to the ad experience. Avoid loading it in both places.
    }

    void OnStartGameLogic()
    {
        // Enable gameplay input/timers here if start must wait for the SDK.
    }

    void OnGameEndAction()
    {
        // Show this project's result UI, or swap configured SDK windows.
    }

    void OnDestroy()
    {
        if (sc.web != null)
        {
            sc.web.OnStartGameLogic -= OnStartGameLogic;
            sc.web.OnGameEndAction -= OnGameEndAction;
        }
    }
}
```

The init callback is the place to continue startup. Do not call `OnEnterGameSuccess()` every frame or repeatedly: this SDK tracks the ready state and ignores/logs duplicate ready calls.

### What the lifecycle calls mean

| Call/event | Meaning and use |
|---|---|
| `sc.Init(callback)` | Initialize SDK services; continue startup in `callback` |
| `sc.sdk.OnEnterGameSuccess()` | Tell SDK the playable entered successfully and is ready for its start flow |
| `sc.web.OnStartGameLogic` | C# event raised when the SDK/ad wrapper authorizes game logic to start |
| `sc.sdk.OnPluginGameStart()` | Plugin lifecycle hook; in this project's SDK implementation its body is empty. Do not treat it as a replacement for `OnEnterGameSuccess()` or the JS start bridge without checking the shipped SDK. |
| `sc.web.GameEnd()` | End playable; raises `OnGameEndAction`, then sends the end notification through the selected bridge |
| `sc.sdk.OnPluginGameEnd()` | Plugin lifecycle hook; empty in this project's SDK implementation. `GameEnd()` is the call that actually runs the web end bridge here. |
| `sc.sdk.OnCommonOpportunity("GameOver")` | Opportunity/analytics hook; empty in this SDK source. It does not open the settlement window. |

The exact platform start timing is controlled by SDK configuration and host callbacks. Some configurations start directly after readiness; others wait for a host `gameStart` callback or user gesture. Decide whether `OnStartGameLogic` should enable gameplay; avoid starting twice.

## 3. Generic result and settlement pattern

Each game owns a result state. Set it before ending the SDK game. Guard the transition so repeated game callbacks cannot open multiple settlement windows.

```csharp
public enum PlayableResult { None, Won, Failed }

PlayableResult result = PlayableResult.None;
bool ending;

public void Finish(bool won)
{
    if (ending) return;
    ending = true;

    result = won ? PlayableResult.Won : PlayableResult.Failed;
    StopGameplay();
    PlayResultAudio(result);

    // Optional analytics hook; this does not perform the settlement.
    sc.sdk.OnCommonOpportunity("GameOver");

    sc.web.GameEnd();
}

void OnGameEndAction()
{
    // The result must already be assigned. This event is also called if the
    // SDK ends the ad itself (for example, through its inactivity timer).
    if (result == PlayableResult.None)
        result = PlayableResult.Failed; // choose a product-appropriate fallback

    ShowSettlementFor(result);
}
```

This is an integration pattern, not a drop-in script: replace `StopGameplay`, `PlayResultAudio`, and `ShowSettlementFor` with the target game's own implementations. If a celebration delays the result UI, delay the single `sc.web.GameEnd()` call until that beat ends, while keeping the game marked ended so gameplay cannot continue.

### Settlement UI choices

There are two standard designs:

1. **Use SC configured windows.** Configure names such as `LayerMainWeb` and `LayerSettleWeb` in the SDK's window configuration. In `OnGameEndAction`, hide the in-game window and show the settlement window using `sc.window.HideWindow(name)` / `sc.window.ShowWindow(name)`. Set/read the game outcome before showing the settlement window because enabling its UI may immediately run `OnEnable`.
2. **Use game-owned UI.** In `OnGameEndAction`, enable the game's own win/fail panel. Avoid also showing a second SDK settlement window unless intentionally layered.

When using one shared panel, its presenter selects the win/fail title, art, sound, CTA art, and any labels based on the stored result. Do not expect SC to infer the outcome from audio, gameplay events, or analytics.

SC's end event is synchronous in this SDK implementation and runs before the JavaScript end notification. Keep the event handler short and protect it against duplicate calls. Do not recursively call `sc.web.GameEnd()` from `OnGameEndAction`.

## 4. Download / CTA integration

The SC UI download button in this SDK uses this call chain:

```text
Button click
  -> SC button component
  -> sc.web.GoDownload()
  -> selected platform bridge's scDownloadCallBack()
  -> host/ad-network store-opening callback(s)
```

In the included SDK source, `sc.web.GoDownload()` calls `scDownloadCallBack()`. The WebGL bridge can call available hooks such as `window.install()` and `window.mraid.open()`, and platform-specific helpers. The wrapper varies by ad network, so test the final exported playable in the target network's tester. A local HTML preview does not prove a real install/store redirect.

When changing button appearance, change its Image sprite while preserving its Button and SDK click component. Check for SDK initialization that clears/replaces existing button listeners; avoid installing a competing listener before it runs.

## 5. SDK-driven inactivity and game-driven inactivity

If both the SDK and game have inactivity timers, document which one is authoritative and how activity resets each timer. The SDK timer in this included version starts after game logic starts and calls `GameEnd()` when `IAutoSettleDuration` elapses. The public SDK API here also includes `ResetStartDownloadTimer()`.

Important integration rules:

- Decide how an SDK-triggered end with no game result should be classified (fail, neutral, or another product-specific state).
- Set that fallback in `OnGameEndAction` before activating the settlement UI.
- If gameplay activity includes automatic actions (for example, a unit firing without touch), decide whether that should count as engagement. Reset the relevant SDK and game timers consistently.
- Avoid invoking `GameEnd()` again from the end callback; that can recurse or duplicate notifications.
- Check win, loss, SDK timeout, and game timeout independently in both Editor simulation and the exported ad.

In SDK 2.5.9 from this project, the SDK idle duration is `WebAdConfig.IAutoSettleDuration`. This project's game also has a separate `GameManager.idleSettleSeconds` watchdog. They are separate timers; changing one does not change the other.

## 6. Events and optional analytics

This project calls `sc.mobClick.Event(name, value, deduplicate)` for its product events and uses `sc.sdk.OnCommonOpportunity("GameOver")` at result time. These are optional instrumentation choices, not required to show a settlement. Use event names and payloads agreed with the client/ad-network team; avoid firing both win and loss events for a single run.

The included SDK source has empty method bodies for `OnPluginGameStart`, `OnPluginGameEnd`, and `OnCommonOpportunity`. They may be hooks implemented by another SDK/build layer in a different version. Inspect the SDK shipped in the destination project and validate the event in the target network before depending on it for analytics or UI.

## 7. Adding the SDK to another Unity project

Use the SDK/package delivery method approved for the project and client. This source project has a local Playworks UPM dependency; its path must resolve on the recipient's machine. A portable source handoff should bundle the matching Luna/Playworks distribution or use the client's approved package source, then use a relative package path. Keep the SDK configuration, window prefabs, scripts, fonts/assets, and required resources together.

For Luna/Playworks builds:

- Keep `luna.json` and the compatible Luna package version with the Unity project.
- Preserve required SDK JS bridge files and their source templates if the SDK regenerates output from templates.
- Preserve any required shader variants and code APIs that prevent export stripping.
- Rebuild HTML after changing source; generated HTML edits alone are not a persistent Unity project integration.
- Check browser console errors and run the exported playable through the target ad-network tester.

Do not copy all settings from this project blindly. Unity version, Luna version, ad-network wrapper, SDK version, scene flow, event names, timeout policy, and settlement UI are project-specific.

## 8. Troubleshooting checklist

| Symptom | Inspect |
|---|---|
| Ready/start callback never runs | `sc.Init` callback, event subscription order, `OnEnterGameSuccess`, selected bridge/host start callback |
| Game starts twice | Scene loading and gameplay enablement split between init callback and `OnStartGameLogic` |
| Correct sound but wrong result artwork | Stored outcome and exception stack from the settlement presenter; the SDK does not choose win/fail |
| Settlement window does not appear | Window name and prefab configured in `WebAdConfig`, event handler registration, exceptions before/during `ShowWindow` |
| Old CTA text overlaps new art | Presenter changes Image type/aspect and hides the old label, or use a purpose-built button prefab |
| Idle settlement is inconsistent | SDK and game timers, activity reset calls, no-result classification, duplicate guards |
| Button looks correct but store does not open | Button still has SDK click handler; `GoDownload()` reached; target wrapper exposes required hook |
| Works in Editor but fails in HTML | Editor uses a simulation bridge; inspect generated HTML console, stripped APIs, SDK version, Luna settings, and host wrapper |

Minimum validation cases:

1. Initialize from the intended bootstrap scene and confirm ready/start occurs once.
2. Trigger win; confirm one result panel, correct artwork/audio and end notification.
3. Trigger loss; confirm one result panel, correct artwork/audio and end notification.
4. Trigger SDK and game inactivity separately; confirm intended fallback result and timing.
5. Click the CTA in the real target ad-network tester.
6. Confirm no duplicate panels, recursive end calls, or browser exceptions in a fresh HTML export.

## 9. This project's concrete call mapping

The reusable pattern above is implemented in Zombie Fire as follows:

| Generic integration point | Zombie Fire implementation |
|---|---|
| SDK bootstrap/init | `Assets/Scripts/MenuManager.cs`: `sc.Init(initComplete)` |
| Report playable ready | `MenuManager.initComplete()`: `sc.sdk.OnEnterGameSuccess()` after event subscriptions |
| Load game | `Assets/Scripts/UIManager.cs`: loads build scene index 1, then calls `sc.sdk.OnPluginGameStart()` (empty in this SDK source) |
| Win source | `Assets/Scripts/Grid/ZombieGridManager.cs`: invokes `GameManager.GameWin` when all blocks are removed |
| Fail source | `Assets/Scripts/Plants/PlantShooter.cs`: invokes `GameManager.GameFail` when cannon slots stay blocked |
| Result state and SDK end | `Assets/Scripts/GameManager.cs`: `Win()`, `Fail()`, `HandleIdleSettle()`, `MarkIdleSettlementFailed()`, and `EndToSettlement()` |
| SDK end callback / windows | `Assets/Scripts/MenuManager.cs`: `OnGameEndAction()` classifies unknown outcome, then switches `LayerMainWeb` to `LayerSettleWeb` |
| Outcome artwork / CTA art | `Assets/Scripts/SettlementOutcomeBanner.cs`, attached to `Assets/Plugins/SCWebSDK/Res/prefab/webAd/LayerSettleWeb.prefab` |
| SDK window/timer config | `Assets/Resources/config/WebAdConfig.asset` |
| SC download bridge | SDK component in `Assets/Plugins/SCWebSDK/Dll/Scripts/` calls `sc.web.GoDownload()` |

Zombie Fire-specific cautions: `OnPluginGameStart()` is empty in this SDK source; the actual ready call is `OnEnterGameSuccess()`. `GameManager.NotifyActivity()` resets only the game's watchdog, not SC's timer. The game's own idle path currently stops music but does not call `PlayLose()`, while the SDK-first idle callback does. These are characteristics of this game, not requirements for a new integration.

## 10. Main source references in this project

- Game integration scripts: `Assets/Scripts/MenuManager.cs`, `UIManager.cs`, `GameManager.cs`, `SettlementOutcomeBanner.cs`, `PlayableAudio.cs`.
- SDK facade and bridge selection: `Assets/Plugins/SCWebSDK/Dll/Scripts/_0x8f600f27/_0xfadede07.cs` and `_0x8a56ae2b/_0x14e6f932/_0x4f432934.cs`.
- SDK lifecycle events and timeout: `Assets/Plugins/SCWebSDK/Dll/Scripts/_0x8a56ae2b/_0x14e6f932/_0x1f9d47c1.cs`.
- WebGL bridge: `Assets/Plugins/SCWebSDK/webGL/WebGLLib.js`.
- SC UI download button: `Assets/Plugins/SCWebSDK/Dll/Scripts/_0x859d6acb/_0xbc11c0d5/_0x363cf929.cs`.
- SDK window/idle configuration: `Assets/Resources/config/WebAdConfig.asset`.
