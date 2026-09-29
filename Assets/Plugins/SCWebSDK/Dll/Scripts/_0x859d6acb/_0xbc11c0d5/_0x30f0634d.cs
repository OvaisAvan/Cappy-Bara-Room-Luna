using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;
using UnityEngine.Scripting;
using System.Collections;

namespace SC
{
    
    
    
    [Preserve]
    public class _0xea696b74
    {
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSplashScreen)]
        private static void _0x2f6a202b()
        {
            Application.focusChanged += _0x3b584631;
        }

        private static void _0x3b584631(bool _0x43e5bba7)
        {
            Application.focusChanged -= _0x3b584631;
            SplashScreen.Stop(SplashScreen.StopBehavior.StopImmediate);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void _0xfa2bc922()
        {
            if (!Application.isEditor)
                return;
            if (sc.WebAdConfig.fDebugAdDuration < 0)
                return;
            string _0x907ad991 = sc.WebAdConfig.eDebugWebPlatform.ToString();
            _0x6a23e193($"模拟播放平台广告 [{_0x907ad991}]，请稍候…", sc.WebAdConfig.fDebugAdDuration);
        }

        private const string _0x6c391a32 = "SCWebSDK__StartupMask";
        private static bool _0x869be08e = false;
        private static bool _0x12c6cd40 = false;
        public static bool IsMaskShow
        {
            get
            {
                return _0x12c6cd40;
            }
        }

        private static void _0x6a23e193(string _0xfb40d048, float _0x7f7c5192)
        {
            if (_0x869be08e)
                return;
            _0x869be08e = true;
            if (GameObject.Find(_0x6c391a32) != null)
                return;
            _0x12c6cd40 = true;
            var _0xeaa6cd4c = new GameObject(_0x6c391a32);
            Object.DontDestroyOnLoad(_0xeaa6cd4c);
            var _0x505b4226 = _0xeaa6cd4c.AddComponent<Canvas>();
            _0x505b4226.renderMode = RenderMode.ScreenSpaceOverlay;
            _0x505b4226.sortingOrder = 32767;
            var _0xb30520d5 = _0xeaa6cd4c.AddComponent<CanvasScaler>();
            _0xb30520d5.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            _0xb30520d5.referenceResolution = new Vector2(1080f, 1920f);
            _0xb30520d5.matchWidthOrHeight = 0.5f;
            _0xeaa6cd4c.AddComponent<GraphicRaycaster>();
            var _0xbe06f5ff = new GameObject("Mask");
            _0xbe06f5ff.transform.SetParent(_0xeaa6cd4c.transform, false);
            var _0x00fb7ec1 = _0xbe06f5ff.AddComponent<Image>();
            _0x00fb7ec1.color = new Color(0f, 0f, 0f, 0.85f);
            var _0x7a0a7013 = _0xbe06f5ff.GetComponent<RectTransform>();
            _0x7a0a7013.anchorMin = Vector2.zero;
            _0x7a0a7013.anchorMax = Vector2.one;
            _0x7a0a7013.offsetMin = Vector2.zero;
            _0x7a0a7013.offsetMax = Vector2.zero;
            var _0x012aafd2 = new GameObject("Tip");
            _0x012aafd2.transform.SetParent(_0xbe06f5ff.transform, false);
            var _0x84199656 = _0x012aafd2.AddComponent<Text>();
            _0x84199656.text = _0xfb40d048 ?? "";
            _0x84199656.alignment = TextAnchor.MiddleCenter;
            _0x84199656.color = Color.white;
            _0x84199656.fontSize = 36;
            _0x84199656.raycastTarget = false;
            _0x84199656.font = (Font)Resources.GetBuiltinResource(typeof(Font), _0xeb7b2e5c.SBuiltFontName);
            var _0x42688b85 = _0x012aafd2.GetComponent<RectTransform>();
            _0x42688b85.anchorMin = Vector2.zero;
            _0x42688b85.anchorMax = Vector2.one;
            _0x42688b85.offsetMin = new Vector2(40f, 40f);
            _0x42688b85.offsetMax = new Vector2(-40f, -40f);
            _0xb6f88893 _0x64251e15 = _0xeaa6cd4c.AddComponent<_0xb6f88893>();
            _0x64251e15.Seconds = Mathf.Max(0.01f, _0x7f7c5192);
            _0x64251e15.TipText = _0x84199656;
            _0x64251e15.RawTip = _0xfb40d048;
        }

        [Preserve]
        private sealed class _0xb6f88893 : MonoBehaviour
        {
            public float Seconds = 3f;
            public Text TipText;
            public string RawTip;
            private IEnumerator Start()
            {
                float _0x0fa593c8 = Seconds;
                while (_0x0fa593c8 > 0)
                {
                    if (TipText != null)
                    {
                        TipText.text = $"{RawTip} ({Mathf.CeilToInt(_0x0fa593c8)}s)";
                    }

                    yield return null;
                    _0x0fa593c8 -= Time.unscaledDeltaTime;
                }

                while (!_0x0b275e47.bGameReady)
                {
                    if (TipText != null)
                    {
                        TipText.text = "等待游戏准备完成...";
                    }

                    yield return null;
                }

                yield return null;
                Destroy(gameObject);
                if (sc.web._0x3104f99b())
                {
                    sc.log.Debug("Simulation gameStart");
                    sc.web.OnJSCallback("gameStart");
                }
            }

            private void OnDestroy()
            {
                _0x12c6cd40 = false;
            }
        }
    }
}