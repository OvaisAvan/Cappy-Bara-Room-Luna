using DG.Tweening;
using SC;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 第八关界面：左上角已放置数量计数（试玩广告不含暂停与提示按钮）。
/// </summary>
public class MyLayerGame : SC.WindowLogic {
    private const float DEFAULT_COUNTER_ANIMATION_DURATION = 0.5f;
    private const float COUNTER_PUNCH_SCALE = 0.15f;
    public RectTransform counterPanel;
    public Text counterText;
    private Transform cachedBackgroundCanvasTransform;

    public override void OnShow(object userData) {
        base.OnShow(userData);
        sc.sdk.OnPluginGameStart();
        CreateLevelBackground();
        LevelManager.Instance.RestartLevel();
    }

    public override void OnHide(object userData) {
        base.OnHide(userData);
        StopAllCoroutines();
        if (counterPanel != null) counterPanel.DOKill(true);
        RemoveLevelBackground();
    }

    public void ResetRoundUI() {
        StopAllCoroutines();
        StartCoroutine(DelayedRefreshCounter());
    }

    private bool CheckDataManager() {
        return DataManager.Instance != null;
    }

    private bool CheckLevelManager() {
        return LevelManager.Instance != null;
    }

    private GameConfig GetGameConfig() {
        if (!CheckDataManager()) return null;
        return DataManager.Instance.gameConfig;
    }

    private float GetCounterAnimationDuration() {
        GameConfig config = GetGameConfig();
        return config != null ? config.progressBarAnimationDuration : DEFAULT_COUNTER_ANIMATION_DURATION;
    }

    private Transform GetBackgroundCanvasTransform() {
        if (cachedBackgroundCanvasTransform != null) {
            return cachedBackgroundCanvasTransform;
        }

        GameObject backgroundCanvasObj = GameObject.Find("BackGroundCanvas");
        if (backgroundCanvasObj == null) {
            return null;
        }

        cachedBackgroundCanvasTransform = backgroundCanvasObj.transform;
        return cachedBackgroundCanvasTransform;
    }

    private void CreateLevelBackground() {
        Transform parent = GetBackgroundCanvasTransform();
        if (parent == null) {
            return;
        }

        // 检查数据管理器和关卡配置
        if (!CheckDataManager()) {
            return;
        }

        LevelConfig levelConfig = DataManager.Instance.levelConfig;
        if (levelConfig == null) {
            return;
        }

        // 优先使用 DataManager 中记录的当前关卡ID
        int levelID = DataManager.Instance.GetCurrentLevelID();
        if (levelID < 1 && CheckLevelManager()) {
            levelID = LevelManager.Instance.GetCurrentLevelID();
        }
        if (levelID < 1) {
            return;
        }

        LevelConfig.LevelData data = levelConfig.GetLevelData(levelID);
        if (data == null || data.backgroundImage == null) {
            return;
        }

        // 如果已经有旧的背景节点，先清理
        Transform oldBackground = parent.Find("LevelBackground");
        if (oldBackground != null) {
            Destroy(oldBackground.gameObject);
        }

        // 创建新的背景节点
        GameObject backgroundGO = new GameObject("LevelBackground", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
        backgroundGO.transform.SetParent(parent, false);

        RectTransform rectTransform = backgroundGO.GetComponent<RectTransform>();
        rectTransform.anchorMin = Vector2.zero;
        rectTransform.anchorMax = Vector2.one;
        rectTransform.offsetMin = Vector2.zero;
        rectTransform.offsetMax = Vector2.zero;

        Image image = backgroundGO.GetComponent<Image>();
        image.sprite = data.backgroundImage;
    }

    public void RemoveLevelBackground() {
        Transform parent = GetBackgroundCanvasTransform();
        if (parent == null) {
            return;
        }

        Transform oldBackground = parent.Find("LevelBackground");
        if (oldBackground != null) {
            Destroy(oldBackground.gameObject);
        }
    }

    private IEnumerator DelayedRefreshCounter() {
        yield return null; // 等待一帧，确保LevelController.Start()已执行

        int retryCount = 0;
        while (CheckLevelManager() && LevelManager.Instance.GetTotalWaveChildrenCount() == 0 && retryCount < 10) {
            yield return null;
            retryCount++;
        }

        RefreshCounter();
    }

    /// <summary>
    /// 显示已放置数量 / 总数（例如 "0 / 25"）
    /// </summary>
    public void RefreshCounter() {
        if (counterText == null || !CheckLevelManager()) return;

        int total = LevelManager.Instance.GetTotalWaveChildrenCount();
        int completed = LevelManager.Instance.GetCompletedWaveChildrenCount();
        counterText.text = completed + " / " + total;
    }

    /// <summary>
    /// 放置成功后刷新计数并弹一下面板
    /// </summary>
    public void BumpCounter() {
        RefreshCounter();
        if (counterPanel == null) return;

        counterPanel.DOKill(true);
        counterPanel.DOPunchScale(Vector3.one * COUNTER_PUNCH_SCALE, GetCounterAnimationDuration(), 6, 0.5f)
            .SetLink(counterPanel.gameObject);
    }
}
