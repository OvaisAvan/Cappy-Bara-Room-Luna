using SC;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 第八关界面：进度、暂停与免费提示。
/// </summary>
public class MyLayerGame : SC.WindowLogic {
    private const float DEFAULT_PROGRESS_BAR_ANIMATION_DURATION = 0.5f;
    public Text levelText;
    public Image progressBar;
    public GameObject hintButton;
    private Transform cachedBackgroundCanvasTransform;

    public override void OnInit(object userData) {
        base.OnInit(userData);
        foreach (Button button in GetComponentsInChildren<Button>(true)) {
            if (button.name == "BtnPause") button.onClick.AddListener(onClick_BtnPause);
            if (button.name == "BtnHint") button.onClick.AddListener(onClick_BtnHint);
        }
    }

    public override void OnShow(object userData) {
        base.OnShow(userData);
        sc.sdk.OnPluginGameStart();
        if (levelText != null) levelText.text = sc.language.Get("Level") + " 8";
        if (hintButton != null) hintButton.SetActive(true);
        CreateLevelBackground();
        LevelManager.Instance.RestartLevel();
    }

    public override void OnHide(object userData) {
        base.OnHide(userData);
        StopAllCoroutines();
        RemoveLevelBackground();
    }

    public void ResetRoundUI() {
        StopAllCoroutines();
        if (progressBar != null) progressBar.fillAmount = 0f;
        if (hintButton != null) hintButton.SetActive(true);
        StartCoroutine(DelayedInitializeProgressBar());
    }

    private void onClick_BtnPause() {
        if (LevelManager.Instance == null || LevelManager.Instance.IsRestarting) return;
        sc.window.ShowWindow(EnumTable.window.LayerPause);
    }

    private void onClick_BtnHint() {
        if (LevelManager.Instance == null || LevelManager.Instance.IsRestarting) return;
        GuideManager.Instance?.CreateHintGuideFinger();
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

    private float CalculateProgressValue() {
        if (!CheckLevelManager()) return 0f;
        int total = LevelManager.Instance.GetTotalWaveChildrenCount();
        int completed = LevelManager.Instance.GetCompletedWaveChildrenCount();
        return total > 0 ? (float)completed / total : 0f;
    }

    private float GetProgressBarAnimationDuration() {
        GameConfig config = GetGameConfig();
        return config != null ? config.progressBarAnimationDuration : DEFAULT_PROGRESS_BAR_ANIMATION_DURATION;
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

    private IEnumerator DelayedInitializeProgressBar() {
        yield return null; // 等待一帧，确保LevelController.Start()已执行

        int retryCount = 0;
        while (CheckLevelManager() && LevelManager.Instance.GetTotalWaveChildrenCount() == 0 && retryCount < 10) {
            yield return null;
            retryCount++;
        }

        InitializeProgressBar();
    }

    public void InitializeProgressBar() {
        if (progressBar == null) return;

        float progress = CalculateProgressValue();
        progressBar.fillAmount = progress;

        UpdateStickerLayerText();
    }

    public void SmoothUpdateProgressBar(float duration = -1f) {
        if (progressBar == null) return;

        float targetProgress = CalculateProgressValue();

        if (duration < 0) {
            duration = GetProgressBarAnimationDuration();
        }

        StartCoroutine(AnimateProgressBar(progressBar.fillAmount, targetProgress, duration));
        UpdateStickerLayerText();
    }

    private IEnumerator AnimateProgressBar(float startValue, float endValue, float duration) {
        if (progressBar == null) yield break;

        float elapsedTime = 0;
        while (elapsedTime < duration) {
            elapsedTime += Time.deltaTime;
            progressBar.fillAmount = Mathf.Lerp(startValue, endValue, elapsedTime / duration);
            yield return null;
        }

        progressBar.fillAmount = endValue;
    }

    private void UpdateStickerLayerText() {
        LevelController levelController = GetCurrentLevelController();
        if (levelController == null) return;

        GameObject stickerLayerObj = levelController.GetStickerLayer();
        if (stickerLayerObj == null) return;

        StickerLayer stickerLayer = stickerLayerObj.GetComponent<StickerLayer>();
        if (stickerLayer != null) {
            stickerLayer.UpdateTextDisplay();
        }
    }

    private LevelController GetCurrentLevelController() {
        if (!CheckLevelManager()) {
            return null;
        }

        GameObject currentLevel = LevelManager.Instance.GetCurrentLevel();
        if (currentLevel == null) {
            return null;
        }

        return currentLevel.GetComponent<LevelController>();
    }
}
