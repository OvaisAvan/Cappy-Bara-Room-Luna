using System;
using UnityEngine;


namespace SC
{
    
    public partial class sc
    {
        
        
        public const string SDKVERSION = "2.5.9";
        
        
        
        
         
        public static bool BObfuscated = true;
        
        
        
         
        public static _0xbcb2c5eb instance
        {
            get
            {
                return _0xbcb2c5eb.GetInstance();
            }
        }

        
        
        
         
        public static bool bEditor
        {
            get
            {
                var _0x827c691b = Application.platform == RuntimePlatform.WindowsEditor || Application.platform == RuntimePlatform.OSXEditor || Application.platform == RuntimePlatform.LinuxEditor;
                return _0x827c691b;
            }
        }

        private static _0xc807ab2c _0x9f76fdb7;
        
        
        
         
        public static _0xc807ab2c loom
        {
            get
            {
                if (_0x9f76fdb7 == null)
                {
                    _0x9f76fdb7 = new _0xc807ab2c();
                }

                return _0x9f76fdb7;
            }
        }

        private static WebAdConfig _0x6c363c8e;
        
        public static WebAdConfig WebAdConfig
        {
            get
            {
                if (_0x6c363c8e == null)
                {
                    _0x6c363c8e = Resources.Load<WebAdConfig>(WebAdConfig.sFilePath);
                    if (_0x6c363c8e == null)
                    {
                        _0x6c363c8e = ScriptableObject.CreateInstance<WebAdConfig>();
                        Debug.LogWarning(WebAdConfig.sFilePath + "。WebAdConfig 不存在，代码创建");
                    }
                }

                return _0x6c363c8e;
            }
        }

        private static _0xd8ffff25 _0x23b88765;
        
        public static _0xd8ffff25 events
        {
            get
            {
                if (_0x23b88765 == null)
                {
                    _0x23b88765 = new _0xd8ffff25();
                }

                return _0x23b88765;
            }
        }

        private static WindowCommon _0x697c4b84;
        
        public static WindowCommon window
        {
            get
            {
                if (_0x697c4b84 == null)
                {
                    _0x697c4b84 = new WindowCommon();
                }

                return _0x697c4b84;
            }
        }

        private static _0x0b275e47 _0xf00b8908;
        
        public static _0x0b275e47 web
        {
            get
            {
                if (_0xf00b8908 == null)
                {
                    _0xf00b8908 = new _0x0b275e47();
                }

                return _0xf00b8908;
            }
        }

        
        public static _0xb1613693 sdk = new _0xb1613693();
        
        public static _0x9e4216fb log = new _0x9e4216fb();
        public static class app
        {
            
            public static _0xf42a8601 events => new _0xf42a8601();
        }

        public static class module
        {
            
            public static _0x60d9f073 ins => new _0x60d9f073();
        }

        
        public static _0x80279dc2 engine = new _0x80279dc2();
        
        public static void Init(Action _0x1b29e726)
        {
            instance.Init(_0x1b29e726);
        }

        public class _0xb1613693
        {
            
            
            
             
            public void OnPluginGameStart()
            {
            }

            
            
            
             
            public void OnPluginGameEnd()
            {
            }

            
            
            
            
            
            
            
             
            public void OnCommonOpportunity(string _0x40a6f42a)
            {
            }

            
            
            
             
            public void OnEnterGameSuccess()
            {
                sc.web._0xd1f9d9fb("OnEnterGameSuccess");
            }
        }
    }
}