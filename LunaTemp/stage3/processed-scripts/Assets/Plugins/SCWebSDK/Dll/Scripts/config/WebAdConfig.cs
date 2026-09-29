using System;
using System.Collections.Generic;
using System.Reflection;
using SC;
using UnityEngine;




namespace SC
{
    
    public enum EWebPlatform
    {
        
        none,
        
        mintegral,
        
        applovin,
        
        NewsBreak,
        
        google,
    }

    
    public enum EGraphicsAPIType
    {
        
        WebGL1,
        
        WebGL2,
        
        WebGL1AndWebGL2,
    }

    [Serializable]
    
    public class WindowConfig
    {
        
        public string winName;
        
        public GameObject prefab;
    }

    [CreateAssetMenu(fileName = "WebAdConfig", menuName = "Configs/WebAdConfig", order = 0)]
    public class WebAdConfig : ScriptableObject
    {
        
        public event Action<string, object> OnEditorConfigChanged;
        [SerializeField]
        [CustomLabel("编辑器多语言")]
        
        public LanguageCommon.ELanguage EEditorLanguage = LanguageCommon.ELanguage.Chinese;
        private WebAdConfig _0xf7ca088e = null;
        private FieldInfo[] _0xac07fcd8;
        private void OnValidate()
        {
            if (Application.isPlaying)
            {
                return;
            }

            if (_0xac07fcd8 == null)
            {
                _0xac07fcd8 = this.GetType().GetFields(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance);
            }

            if (_0xf7ca088e == null)
            {
                _0xf7ca088e = ScriptableObject.CreateInstance<WebAdConfig>();
                
                foreach (var field in _0xac07fcd8)
                {
                    field.SetValue(_0xf7ca088e, field.GetValue(this));
                }
            }

            
            foreach (var field in _0xac07fcd8)
            {
                var _0x2a24962e = field.GetValue(this);
                var _0x700fd221 = field.GetValue(_0xf7ca088e);
                if (!Equals(_0x2a24962e, _0x700fd221))
                {
                    field.SetValue(_0xf7ca088e, _0x2a24962e);
                    if (OnEditorConfigChanged != null)
                        OnEditorConfigChanged.Invoke(field.Name, _0x2a24962e);
                }
            }
        }

        
        
        public static string sFilePath = "config/WebAdConfig";
        
        [CustomLabel("WindowConfig")]
        
        public List<WindowConfig> WindowConfigs = new List<WindowConfig>()
        {
            new WindowConfig()
            {
                winName = "LayerMainWeb",
                prefab = null
            },
            new WindowConfig()
            {
                winName = "LayerSettleWeb",
                prefab = null
            },
        };
        [CustomLabel("是否使用SCFont.ttf")]
        public bool BUseSCFontTtf = true;
        
        
        
        [CustomLabel("待机跳转结算时长(秒)")]
        public int IAutoSettleDuration = 10;
        
        
        
        [CustomLabel("模拟运行时多语言(编辑器)")]
        public LanguageCommon.ELanguage IDebugLanguage = LanguageCommon.ELanguage.English;
        [CustomLabel("模拟当前平台(编辑器)")]
        public EWebPlatform eDebugWebPlatform = EWebPlatform.applovin;
        [CustomLabel("检测OnEnterGameSuccess时间(秒)(编辑器)")]
        public float fDebugCheckEnterGameTime = 10;
        [CustomLabel("模拟广告播放时长(秒)(编辑器)")]
        public float fDebugAdDuration = 10;
        [SerializeField]
        [CustomLabel("WebGL Graphics API")]
        
        public EGraphicsAPIType EGraphicsAPI = EGraphicsAPIType.WebGL1AndWebGL2;
    }
}