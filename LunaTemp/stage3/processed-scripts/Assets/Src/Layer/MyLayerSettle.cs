using DG.Tweening;
using SC;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 试玩结算：50% 黑色遮罩 + 顶部标题 + 中间图片 + 底部 PlayNow。
/// 胜利与无操作两种布局，结果由 PlayableFlow 在显示前确定；竖屏/横屏各有一套排布。
/// 下载由 SDK 下载组件（sc.web.GoDownload）处理，遮罩与按钮均可点击。
/// </summary>
public class MyLayerSettle : SC.WindowLogic {
    private static readonly Vector2 PORTRAIT_DESIGN = new Vector2(640f, 1136f);
    private const float OVERLAY_ALPHA = 0.5f;
    private const float FADE_DURATION = 0.25f;
    private const float POP_DURATION = 0.35f;
    private const float POP_STAGGER = 0.1f;
    private const float PULSE_SCALE = 1.08f;
    private const float PULSE_DURATION = 0.6f;

    /// <summary>
    /// 一种朝向下的排布（设计分辨率坐标，相对面板中心）
    /// </summary>
    private struct Arrangement {
        public Vector2 titlePosition, titleBox;
        public Vector2 picturePosition, pictureBox;
        public Vector2 buttonPosition, buttonBox;
    }

    private static readonly Arrangement PORTRAIT = new Arrangement {
        titlePosition = new Vector2(0f, 400f), titleBox = new Vector2(460f, 140f),
        picturePosition = new Vector2(0f, 30f), pictureBox = new Vector2(480f, 560f),
        buttonPosition = new Vector2(0f, -400f), buttonBox = new Vector2(280f, 150f),
    };

    private static readonly Arrangement LANDSCAPE = new Arrangement {
        titlePosition = new Vector2(0f, 235f), titleBox = new Vector2(440f, 110f),
        picturePosition = new Vector2(0f, 0f), pictureBox = new Vector2(440f, 330f),
        buttonPosition = new Vector2(0f, -235f), buttonBox = new Vector2(230f, 121f),
    };

    [Header("胜利结算")]
    [CustomLabel("胜利标题")] public Sprite winTitle;
    [CustomLabel("胜利图片")] public Sprite winPicture;

    [Header("无操作结算")]
    [CustomLabel("无操作标题")] public Sprite idleTitle;
    [CustomLabel("无操作图片")] public Sprite idlePicture;

    [Header("节点")]
    public Image overlay;
    public RectTransform panel;
    public Image title;
    public Image picture;
    public RectTransform playButton;

    private int lastWidth;
    private int lastHeight;

    public override void OnInit(object userData) {
        base.OnInit(userData);
        // SDK 下载组件在 Awake 中已接管 onClick，这里只追加点击音效
        Button button = playButton != null ? playButton.GetComponent<Button>() : null;
        if (button != null) button.onClick.AddListener(PlayClickAudio);
    }

    public override void OnShow(object userData) {
        base.OnShow(userData);
        bool won = PlayableFlow.Result == PlayableResult.Won;
        title.sprite = won ? winTitle : idleTitle;
        picture.sprite = won ? winPicture : idlePicture;

        HideGameplay();
        lastWidth = lastHeight = 0;
        ApplyLayout();
        PlayEntrance();
    }

    public override void OnHide(object userData) {
        base.OnHide(userData);
        KillTweens();
    }

    void LateUpdate() {
        if (Screen.width != lastWidth || Screen.height != lastHeight) ApplyLayout();
    }

    /// <summary>
    /// 结算时隐藏房间、托盘与计数，只保留背景（被遮罩压暗）
    /// </summary>
    private void HideGameplay() {
        GameObject level = LevelManager.Instance != null ? LevelManager.Instance.GetCurrentLevel() : null;
        if (level != null) level.SetActive(false);

        StickerLayer tray = StickerManager.Instance != null ? StickerManager.Instance.GetStickerLayer() : null;
        if (tray != null) tray.gameObject.SetActive(false);

        MyLayerGame game = FindObjectOfType<MyLayerGame>();
        if (game != null && game.counterPanel != null) game.counterPanel.gameObject.SetActive(false);

        GuideManager.Instance?.ResetGuideState();
    }

    private void ApplyLayout() {
        lastWidth = Screen.width;
        lastHeight = Screen.height;
        bool portrait = lastWidth <= lastHeight;

        Arrangement arrangement = portrait ? PORTRAIT : LANDSCAPE;
        Vector2 design = portrait ? PORTRAIT_DESIGN : new Vector2(PORTRAIT_DESIGN.y, PORTRAIT_DESIGN.x);

        // 面板按设计分辨率等比缩放到当前画布内
        RectTransform canvasRect = (RectTransform)transform.parent;
        Vector2 canvasSize = canvasRect != null ? canvasRect.rect.size : design;
        float scale = Mathf.Min(canvasSize.x / design.x, canvasSize.y / design.y);
        panel.sizeDelta = design;
        panel.localScale = new Vector3(scale, scale, 1f);

        Place(title.rectTransform, title.sprite, arrangement.titlePosition, arrangement.titleBox);
        Place(picture.rectTransform, picture.sprite, arrangement.picturePosition, arrangement.pictureBox);
        Image buttonImage = playButton.GetComponent<Image>();
        Place(playButton, buttonImage != null ? buttonImage.sprite : null, arrangement.buttonPosition, arrangement.buttonBox);
    }

    /// <summary>
    /// 按图片比例放入指定区域
    /// </summary>
    private static void Place(RectTransform target, Sprite sprite, [Bridge.Ref] Vector2 position, [Bridge.Ref] Vector2 box) {
        target.anchoredPosition = position;
        if (sprite == null || sprite.rect.height <= 0f) {
            target.sizeDelta = box;
            return;
        }
        float aspect = sprite.rect.width / sprite.rect.height;
        Vector2 size = new Vector2(box.x, box.x / aspect);
        if (size.y > box.y) size = new Vector2(box.y * aspect, box.y);
        target.sizeDelta = size;
    }

    private void PlayEntrance() {
        KillTweens();

        overlay.color = new Color(0f, 0f, 0f, 0f);
        overlay.DOFade(OVERLAY_ALPHA, FADE_DURATION).SetLink(gameObject);

        Transform[] pops = { title.transform, picture.transform, playButton };
        for (int i = 0; i < pops.Length; i++) {
            pops[i].localScale = Vector3.zero;
            Tween pop = pops[i].DOScale(Vector3.one, POP_DURATION)
                .SetDelay(FADE_DURATION + POP_STAGGER * i)
                .SetEase(Ease.OutBack)
                .SetLink(gameObject);
            if (pops[i] == playButton) pop.OnComplete(StartButtonPulse);
        }
    }

    private void StartButtonPulse() {
        playButton.DOScale(PULSE_SCALE, PULSE_DURATION)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo)
            .SetLink(gameObject);
    }

    private void KillTweens() {
        if (overlay != null) overlay.DOKill();
        if (title != null) title.transform.DOKill();
        if (picture != null) picture.transform.DOKill();
        if (playButton != null) playButton.DOKill();
    }

    private void PlayClickAudio() {
        sc.audio.Play("DefaultBtnClicked");
    }
}
