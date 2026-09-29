using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using System.Diagnostics;
using Debug = UnityEngine.Debug;
using System.Threading;
using UnityEditor.ShortcutManagement;
using System.IO;
using System.Reflection;





namespace _0xa07739b8
{
    public static class _0xf43a6983
    {
        
        
        
        
        public static string _0xc3810270 = "2026-09-01 17:53:59";
        
        
        
        public const string _0xdbd34359 = @"E:\Project_Plugins\common\tool\unity";
        
        
        
        public const string _0xb30a9ae7 = @"E:\Project_Plugins\common\unity";
        
        
        
        public const string _0xe3bf1bed = _0xb30a9ae7 + @"\unityWeb\ads";
        
        
        
        public const string _0x5602dbca = "SCWebSDK";
        
        
        
        public const string _0x8b88855b = _0x5602dbca;
        
        
        
        public const string _0x53408117 = "SCWebSDK_Upgrade";
        
        
        
        
        public static string _0xc20f084b
        {
            get
            {
                
                return $"{_0xe3bf1bed}/2020.3.5f1c1/sdk";
            
            }
        }

        
        
        
        
        public static string _0x53d4192f
        {
            get
            {
                return $"{_0xc20f084b}/{SC.sc.SDKVERSION}";
            }
        }

        
        
        
        public const string _0x6544d7be = "SCWeb(" + SC.sc.SDKVERSION + ")";
        
        
        
        
        public static Dictionary<string, string> _0x6b788340 = new Dictionary<string, string>()
        {
            {
                "SCWebSDK",
                "1ac6851023b30c54aa8c9d7008f9bcfe"
            },
            {
                "SCJoystick",
                "45c142dc417a39446ae664c3474e3f1f"
            },
        };
        private static bool? _0x75087f97;
        private static bool? _0x81d62b79;
        private static bool? _0xbe72f557;
        
        
        
        
        public static bool _0x17ee4b5c()
        {
            if (_0x75087f97 == null)
            {
                _0x75087f97 = Directory.Exists(@"E:\Project\tool\design\createhtml");
                if (_0x75087f97.Value && Path.GetFileName(Path.GetDirectoryName(Application.dataPath)) == "unityhelloscLunaProxy")
                {
                    _0x75087f97 = false;
                }
            }

            return _0x75087f97.Value;
        }

        
        
        
        
        public static bool _0x4d509f4c()
        {
            if (_0x81d62b79 == null)
            {
                string _0x5d5dc7be = Path.GetDirectoryName(Application.dataPath);
                string _0x408a83bc = Path.GetFileName(_0x5d5dc7be);
                var _0x10753545 = Directory.GetFiles(Application.dataPath, "SCWebSDK.asmdef", SearchOption.AllDirectories);
                _0x81d62b79 = _0x408a83bc == "UnityWebSdk" && _0x10753545.Length > 0;
            }

            return _0x81d62b79.Value;
        }

        
        
        
        
        public static bool _0xf21e956a()
        {
            if (_0xbe72f557 == null)
            {
                var _0xc510d76b = Directory.GetFiles(Application.dataPath, "SCWebSDK.asmdef", SearchOption.AllDirectories);
                _0xbe72f557 = _0xc510d76b.Length == 0;
            }

            return _0xbe72f557.Value;
        }

        
        
        
        
        public static string[] _0x2239b4d3 = new string[]
        {
            "BtnDownload",
        };
        
        
        
        public static string _0x71483527 = Application.dataPath + "/Resources/prefab";
        
        
        
        
        public static string _0x98f5a4a8
        {
            get
            {
                if (_0x4d509f4c())
                {
                    return Application.dataPath + "/Plugins/.SCWebSDK/font/SCDefFont";
                }
                else
                {
                    return Application.dataPath + "/Plugins/SCWebSDK/font/SCDefFont";
                }
            }
        }

        
        
        
        public static string _0x1dd00f72 = Application.dataPath + "/Resources/font/SCFont.ttf";
        
        
        
        
        public const string _0x3d5f730b = "06311b04565b91a44a0c6835bdfe13d7";
        
        
        
        
        public static string _0x91e899e5
        {
            get
            {
                if (_0x4d509f4c())
                {
                    return Application.dataPath + "/Plugins/.SCWebSDK/config";
                }
                else
                {
                    return Application.dataPath + "/Plugins/SCWebSDK/config";
                }
            }
        }
    }
}