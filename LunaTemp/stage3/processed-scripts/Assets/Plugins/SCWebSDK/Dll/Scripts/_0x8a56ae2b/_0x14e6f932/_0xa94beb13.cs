using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    public partial class sc
    {
        
        public static LanguageCommon language = new LanguageCommon();
    }

    
    public partial class LanguageCommon
    {
        
        
        
         
        public enum ELanguage
        {
            
            Chinese = 0,
            
            English = 1
        }

        
        
        
        
        public static string[] lDefLanguage
        {
            get
            {
                List<string> _0x250ada8b = new List<string>();
                
                Array _0x79c24904 = Enum.GetValues(typeof(ELanguage));
                foreach (ELanguage status in _0x79c24904)
                {
                    _0x250ada8b.Add(status.ToString());
                }

                return _0x250ada8b.ToArray();
            }
        }

        
        
        
        
        private string _0x97673d43(string _0x2e82ad5c)
        {
            if (string.IsNullOrEmpty(_0x2e82ad5c))
            {
                return _0x2e82ad5c;
            }

            var _0x8d86b063 = (Dictionary<string, Dictionary<string, object>>)sc.config.GetTable("language");
            if (_0x8d86b063 == null)
            {
                sc.log.Error($"SCLanguage Get sKey {_0x2e82ad5c}, no find table language");
                return _0x2e82ad5c;
            }

            string _0x7802d038 = null;
            if (_0x8d86b063.TryGetValue(_0x2e82ad5c, out Dictionary<string, object> temp))
            {
                
                var _0xd8e35324 = GetCustomLanguage();
                _0x7802d038 = (string)temp[_0xd8e35324];
            }

            if (string.IsNullOrEmpty(_0x7802d038))
            {
                sc.log.Dev($"SCLanguage Get sKey {_0x2e82ad5c}, no find");
                return _0x2e82ad5c;
            }
            else
            {
                _0x7802d038 = _0x7802d038.Replace("\\n", "\n"); 
                
                return _0x7802d038;
            }
        }

        
        public void Event()
        {
        }

        public int GetCustomLanguageIdx()
        {
            return (int)sc.web.webGLLib.GetCustomLanguageIdx();
        }

        public static int GetCurLanguageIdx()
        {
            SystemLanguage _0x3abf4843 = Application.systemLanguage;
            ELanguage _0x96b7b04f = ELanguage.English;
            
            switch (_0x3abf4843)
            {
                case SystemLanguage.English:
                    _0x96b7b04f = ELanguage.English;
                    
                    
                    break;
                case SystemLanguage.Chinese:
                case SystemLanguage.ChineseSimplified:
                case SystemLanguage.ChineseTraditional:
                    _0x96b7b04f = ELanguage.Chinese;
                    
                    
                    break;
                
                default:
                    _0x96b7b04f = ELanguage.English;
                    
                    
                    break;
            }

            
            if (Application.isEditor)
            {
                _0x96b7b04f = sc.WebAdConfig.IDebugLanguage;
            }

            return (int)_0x96b7b04f;
        }

        
        public string GetCustomLanguage()
        {
            int _0x1a0b8d07 = GetCustomLanguageIdx();
            return lDefLanguage[_0x1a0b8d07];
        }

        public void SetCustomLanguage(string _0xe3f8c84d)
        {
        }

        
        public string Get(string _0xd15649ac)
        {
            return this._0x97673d43(_0xd15649ac);
        }

        
        public string Get<T>(string _0x48c2a9fd, T _0xa13ef8ce)
        {
            return null;
        }

        
        public string Get<T1, T2>(string _0x9fcaef00, T1 _0x0bd3949e, T2 _0xf11bd728)
        {
            return null;
        }

        
        public string Get<T1, T2, T3>(string _0xa3c52e74, T1 _0xa9917e5b, T2 _0x56160f13, T3 _0xdfb711e2)
        {
            return null;
        }

        
        public string Get<T1, T2, T3, T4>(string _0x5f0a3e1c, T1 _0x333e9443, T2 _0x2b4d2a18, T3 _0x865900cc, T4 _0xd6141f0f)
        {
            return null;
        }

        
        public string Get<T1, T2, T3, T4, T5>(string _0xd67f008f, T1 _0xb6595910, T2 _0x31603d9b, T3 _0x000be106, T4 _0x1d14ae21, T5 _0x03d6a338)
        {
            return null;
        }

        
        public string Get<T1, T2, T3, T4, T5, T6>(string _0xd453b0b8, T1 _0xd1832877, T2 _0x96967421, T3 _0xe75e5d0c, T4 _0xd27475b8, T5 _0xc7de65cc, T6 _0x13df1d2d)
        {
            return null;
        }

        
        public string Get<T1, T2, T3, T4, T5, T6, T7>(string _0xa62cb4b4, T1 _0x3e10da3c, T2 _0x1a339d63, T3 _0xbbb0e9b3, T4 _0x2db1fd95, T5 _0x518f871c, T6 _0xc37ada52, T7 _0x07292a80)
        {
            return null;
        }

        
        public SC.Events._0x2913d22d EventType = new SC.Events._0x2913d22d();
        
        public SC.LanguageHandler OnLocalizeChange = default(SC.LanguageHandler);
    }
}