using SC;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 单关暂停：继续或从头重玩第八关。
/// </summary>
public class MyLayerPause : SC.WindowNotify {
    private float previousTimeScale = 1f;

    public override void OnInit(object userData) {
        base.OnInit(userData);
        // 原版窗口包装器已移除，由业务界面自身拦截背景点击。
        Image blocker = gameObject.GetComponent<Image>();
        if (blocker == null) blocker = gameObject.AddComponent<Image>();
        blocker.color = Color.clear;
        blocker.raycastTarget = true;
        foreach (Button button in GetComponentsInChildren<Button>(true)) {
            if (button.name == "BtnRestart") button.onClick.AddListener(onClick_BtnRestart);
            if (button.name == "BtnContinue") button.onClick.AddListener(onClick_BtnContinue);
        }
        foreach (Text label in GetComponentsInChildren<Text>(true)) {
            if (label.text.StartsWith("SC_")) label.text = sc.language.Get(label.text);
        }
    }

    private void onClick_BtnRestart() {
        Hide();
        LevelManager.Instance.RestartLevel();
    }

    private void onClick_BtnContinue() {
        Hide();
    }

    public override void OnShow(object userData) {
        previousTimeScale = Time.timeScale;
        Time.timeScale = 0f;
    }

    public override void Hide(object userData = null) {
        Time.timeScale = previousTimeScale;
        base.Hide(userData);
    }

    public override void OnHide(object userData) {
        Time.timeScale = previousTimeScale;
    }

    public override void SCOnDisable() {
        Time.timeScale = previousTimeScale;
        base.SCOnDisable();
    }
}
