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
using System.Linq;
using SC;
using System.Globalization;

namespace _0xa07739b8
{
    public static class _0x3a4ab209
    {
        static string _0xe7d1dd39 = Application.dataPath + "/../Temp/SCEnterSignFile.json";
        
        
        
        [InitializeOnLoadMethod]
        static void _0xe337be3e()
        {
            Debug.Log("main Initialize");
            EditorApplication.update += _0xc128f93d;
        }

        static void _0x157a7924(string _0xe83e9907, object _0xe50f0d29)
        {
            Debug.Log($"WebAdConfig change{_0xe83e9907}:{_0xe50f0d29}");
            if (_0xe83e9907 == "EEditorLanguage")
            {
                _0x3a19ac8a._0xc4df4546();
            }
        }

        static void _0xc128f93d()
        {
            
            if (!EditorApplication.isUpdating && !EditorApplication.isCompiling)
            {
                
                EditorApplication.delayCall += _0x77938061;
                
                EditorApplication.update -= _0xc128f93d;
            }
        }

        static void _0x77938061()
        {
            
            EditorApplication.delayCall -= _0x77938061;
            _0x7a68d58c();
            sc.WebAdConfig.OnEditorConfigChanged += _0x157a7924;
            _0xa7126670._0xeb460c78();
            Debug.Log(_0x3a19ac8a._0x512da7a0("编辑器刷新完成！"));
        }

        static void _0x7a68d58c()
        {
            _0x852e8d8a._0xd17efa51();
            
            int _0xe47f43b3 = 0;
            if (File.Exists(_0xe7d1dd39))
            {
                var _0xec50593a = File.ReadAllText(_0xe7d1dd39);
                if (!int.TryParse(_0xec50593a, out _0xe47f43b3))
                {
                    _0xe47f43b3 = 0;
                }

                if (_0xe47f43b3 > 3)
                {
                    return;
                }

                _0xe47f43b3++;
                File.WriteAllText(_0xe7d1dd39, _0xe47f43b3.ToString());
            }
            else
            {
                File.WriteAllText(_0xe7d1dd39, "0");
            }

            if (_0xe47f43b3 == 0)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("开始初始化"));
            }

            bool _0x04177e56 = _0xf43a6983._0x4d509f4c();
            if (_0x04177e56)
            {
                return;
            }

            _0xf95de2f9._0xc06e188e();
            _0xa5140cd3();
            _0xa80ccea3();
            
            if (_0xf43a6983._0xf21e956a() && !_0x56371c74())
            {
                return;
            }

            _0x87ee3e83();
            
            
            string _0xa46820ea = $"Assets/Resources/{WebAdConfig.sFilePath}.asset";
            if (!File.Exists(_0xa46820ea))
            {
                _0xac870145();
                _0x42e8e13b();
                if (!Directory.Exists(Path.GetDirectoryName(_0xe7d1dd39)))
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(_0xe7d1dd39));
                }

                Debug.Log(_0x3a19ac8a._0x512da7a0("首次初始化完成"));
            }
        }

        
        
        
        public static void _0xa5140cd3()
        {
            Debug.Log("CheckOtherSDK");
            string[] _0xfca6996f = new string[]
            {
                "/Plugins/SCSDK",
                "/Editor/SCEditor",
                "/Resources/config/data.bytes",
                "/Resources/config/SDKConfig.asset",
            };
            bool _0x29ed34fb = false;
            for (int _0x6a046b9e = 0; _0x6a046b9e < _0xfca6996f.Length; _0x6a046b9e++)
            {
                var _0xde93c7d4 = Application.dataPath + _0xfca6996f[_0x6a046b9e];
                if (Directory.Exists(_0xde93c7d4))
                {
                    Debug.Log("del folder: " + _0xde93c7d4);
                    Directory.Delete(_0xde93c7d4, true);
                    if (File.Exists(_0xde93c7d4 + ".meta"))
                    {
                        File.Delete(_0xde93c7d4 + ".meta");
                    }

                    _0x29ed34fb = true;
                }
                else if (File.Exists(_0xde93c7d4))
                {
                    Debug.Log("del old file: " + _0xde93c7d4);
                    File.Delete(_0xde93c7d4);
                    if (File.Exists(_0xde93c7d4 + ".meta"))
                    {
                        File.Delete(_0xde93c7d4 + ".meta");
                    }

                    _0x29ed34fb = true;
                }
            }

            if (_0x29ed34fb)
            {
                AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
                Debug.Log(_0x3a19ac8a._0x512da7a0("检测到其他sdk，已自动删除"));
            }
        }

        
        
        
        
        public static bool _0x56371c74()
        {
            Debug.Log("CheckSDKMeat");
            string[] _0xa03539c7 = _0x30ad15cf();
            if (_0xa03539c7 == null)
            {
                return false;
            }

            foreach (string sVal in _0xa03539c7)
            {
                string _0x3bb4b03f = Path.GetFileNameWithoutExtension(sVal);
                if (!_0xf43a6983._0x6b788340.TryGetValue(_0x3bb4b03f, out string sDefGuid))
                {
                    continue;
                }

                
                string _0x786664ea = sVal;
                _0x786664ea = _0x786664ea.Replace(Application.dataPath, "Assets");
                string _0x28c645e1 = AssetDatabase.AssetPathToGUID(_0x786664ea);
                if (_0x28c645e1 == sDefGuid)
                {
                    continue;
                }

                
                var _0x01293b5b = File.ReadAllText(_0x786664ea + ".meta");
                _0x01293b5b = _0x01293b5b.Replace(_0x28c645e1, sDefGuid);
                File.WriteAllText(_0x786664ea + ".meta", _0x01293b5b);
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("当前{0}的meta文件GUID不正确，已自动修复！{1} => {2}", _0x3bb4b03f, _0x28c645e1, sDefGuid));
                
                var _0x1b72f68c = Directory.GetFiles(Application.dataPath, "*", SearchOption.AllDirectories);
                foreach (var sPath in _0x1b72f68c)
                {
                    string _0x42258f72 = File.ReadAllText(sPath);
                    if (_0x42258f72.Contains(_0x28c645e1))
                    {
                        _0x42258f72 = _0x42258f72.Replace(_0x28c645e1, sDefGuid);
                        File.WriteAllText(sPath, _0x42258f72);
                    }
                }
            }

            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            return true;
        }

        
        
        
        
        public static string[] _0x30ad15cf()
        {
            string _0xa33ea084 = Application.dataPath + "/Plugins/SCWebSDK";
            if (!Directory.Exists(_0xa33ea084))
            {
                return null;
            }

            var _0xb443f511 = Directory.GetFiles(_0xa33ea084, "*.dll", SearchOption.AllDirectories);
            if (_0xb443f511.Length > 0)
            {
                return _0xb443f511;
            }

            return null;
        }

        
        
        
         
        public static void _0xa80ccea3()
        {
            _0xb35c0463("SCWebSDK", new[] { "Editor", "WebGL" }, true);
            _0xb35c0463("SCWebSDKEditor", new[] { "Editor" }, true);
        }

        
        
        
        private static void _0xb35c0463(string _0xac5a5bf1, string[] _0x0781abfe, bool _0x16ba16e9 = false)
        {
            
            var _0xd160490b = Directory.GetFiles(Application.dataPath, _0xac5a5bf1 + ".asmdef", SearchOption.AllDirectories);
            foreach (var file in _0xd160490b)
            {
                _0x6887f56d(file, _0x0781abfe, _0x16ba16e9);
            }

            
            string[] _0xc101989f = _0x30ad15cf();
            if (_0xc101989f != null)
            {
                foreach (var path in _0xc101989f)
                {
                    if (Path.GetFileNameWithoutExtension(path) == _0xac5a5bf1)
                    {
                        _0x9f82c462(path, _0x0781abfe, _0x16ba16e9);
                    }
                }
            }
        }

        
        
        
        private static void _0x6887f56d(string _0x667a9d74, string[] _0xb478980f, bool _0x5c503b51 = false)
        {
            string _0xbb7b775a = File.ReadAllText(_0x667a9d74);
            bool _0x5caebbf8 = false;
            if (_0x5c503b51)
            {
                
                string _0x11070303 = "\"includePlatforms\": \\[[\\s\\S]*?\\],";
                string _0x6776a62e = string.Join(",\n        ", _0xb478980f.Select(_0x11a460f9 => $"\"{_0x11a460f9}\""));
                string _0xc2cdb243 = $"\"includePlatforms\": [\n        {_0x6776a62e}\n    ],";
                
                bool _0xe1aa3a3f = true;
                foreach (var p in _0xb478980f)
                {
                    if (!_0xbb7b775a.Contains($"\"{p}\""))
                    {
                        _0xe1aa3a3f = false;
                        break;
                    }
                }

                
                if (_0xbb7b775a.Contains("WebGL") && !_0xb478980f.Contains("WebGL"))
                    _0xe1aa3a3f = false;
                if (_0xbb7b775a.Contains("WindowsStandalone") && !_0xb478980f.Contains("WindowsStandalone32") && !_0xb478980f.Contains("WindowsStandalone64"))
                    _0xe1aa3a3f = false;
                if (!_0xe1aa3a3f && System.Text.RegularExpressions.Regex.IsMatch(_0xbb7b775a, _0x11070303))
                {
                    _0xbb7b775a = System.Text.RegularExpressions.Regex.Replace(_0xbb7b775a, _0x11070303, _0xc2cdb243);
                    _0x5caebbf8 = true;
                }
            }
            else
            {
                
                if (_0xbb7b775a.Contains("\"includePlatforms\": ["))
                {
                    foreach (var platform in _0xb478980f)
                    {
                        if (!_0xbb7b775a.Contains($"\"{platform}\""))
                        {
                            _0xbb7b775a = _0xbb7b775a.Replace("\"includePlatforms\": [", $"\"includePlatforms\": [\n        \"{platform}\",");
                            _0x5caebbf8 = true;
                        }
                    }
                }
            }

            if (_0x5caebbf8)
            {
                File.WriteAllText(_0x667a9d74, _0xbb7b775a);
                Debug.Log("<color=#00FF0C><b>[MainCore] 已强制修正 .asmdef 平台：</b></color>" + _0x667a9d74);
                AssetDatabase.ImportAsset(FileUtil.GetProjectRelativePath(_0x667a9d74));
            }
        }

        
        
        
        private static void _0x9f82c462(string _0x85482274, string[] _0x8db50ed9, bool _0x93586bf8 = false)
        {
            string _0x9dea7a36 = FileUtil.GetProjectRelativePath(_0x85482274);
            PluginImporter _0x98cb4436 = AssetImporter.GetAtPath(_0x9dea7a36) as PluginImporter;
            if (_0x98cb4436 == null)
                return;
            bool _0x390d2245 = false;
            if (_0x93586bf8)
            {
                
                if (_0x98cb4436.GetCompatibleWithAnyPlatform())
                {
                    _0x98cb4436.SetCompatibleWithAnyPlatform(false);
                    _0x390d2245 = true;
                }

                bool _0x0e218f14 = _0x8db50ed9.Contains("Editor");
                if (_0x98cb4436.GetCompatibleWithEditor() != _0x0e218f14)
                {
                    _0x98cb4436.SetCompatibleWithEditor(_0x0e218f14);
                    _0x390d2245 = true;
                }

                
                var _0x8969226e = new Dictionary<string, BuildTarget>
                {
                    {
                        "WebGL",
                        BuildTarget.WebGL
                    },
                    {
                        "WindowsStandalone32",
                        BuildTarget.StandaloneWindows
                    },
                    {
                        "WindowsStandalone64",
                        BuildTarget.StandaloneWindows64
                    }
                };
                foreach (var kv in _0x8969226e)
                {
                    bool _0x3643c219 = _0x8db50ed9.Contains(kv.Key);
                    if (_0x98cb4436.GetCompatibleWithPlatform(kv.Value) != _0x3643c219)
                    {
                        _0x98cb4436.SetCompatibleWithPlatform(kv.Value, _0x3643c219);
                        _0x390d2245 = true;
                    }
                }
            }
            else
            {
                
                foreach (var platform in _0x8db50ed9)
                {
                    if (platform == "Editor")
                    {
                        if (!_0x98cb4436.GetCompatibleWithEditor())
                        {
                            _0x98cb4436.SetCompatibleWithEditor(true);
                            _0x390d2245 = true;
                        }
                    }
                    else if (platform == "WebGL")
                    {
                        if (!_0x98cb4436.GetCompatibleWithPlatform(BuildTarget.WebGL))
                        {
                            _0x98cb4436.SetCompatibleWithPlatform(BuildTarget.WebGL, true);
                            _0x390d2245 = true;
                        }
                    }
                    else if (platform == "WindowsStandalone32")
                    {
                        if (!_0x98cb4436.GetCompatibleWithPlatform(BuildTarget.StandaloneWindows))
                        {
                            _0x98cb4436.SetCompatibleWithPlatform(BuildTarget.StandaloneWindows, true);
                            _0x390d2245 = true;
                        }
                    }
                    else if (platform == "WindowsStandalone64")
                    {
                        if (!_0x98cb4436.GetCompatibleWithPlatform(BuildTarget.StandaloneWindows64))
                        {
                            _0x98cb4436.SetCompatibleWithPlatform(BuildTarget.StandaloneWindows64, true);
                            _0x390d2245 = true;
                        }
                    }
                }
            }

            if (_0x390d2245)
            {
                _0x98cb4436.SaveAndReimport();
                Debug.Log("<color=#00FF0C><b>[MainCore] 已强制设置 DLL 平台：</b></color>" + _0x9dea7a36);
            }
        }

        
        public static void _0x42e8e13b()
        {
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            
            string _0x31f6a759 = Application.dataPath + $"/Resources/{WebAdConfig.sFilePath}.asset";
            if (File.Exists(_0x31f6a759))
            {
                return;
            }

            
            if (!Directory.Exists(Path.GetDirectoryName(_0x31f6a759)))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(_0x31f6a759));
            }

            
            WebAdConfig _0xbffaebc6 = ScriptableObject.CreateInstance<WebAdConfig>();
            SystemLanguage _0x6392dc34 = Application.systemLanguage;
            
            if (_0x6392dc34 == SystemLanguage.ChineseSimplified)
            {
                Debug.Log("当前系统语言是简体中文");
                _0xbffaebc6.EEditorLanguage = LanguageCommon.ELanguage.Chinese;
            }
            else
            {
                Debug.Log($"cur system language: {_0x6392dc34}");
                _0xbffaebc6.EEditorLanguage = LanguageCommon.ELanguage.English;
            }

            _0xbffaebc6.WindowConfigs = new List<WindowConfig>()
            {
            };
            
            var _0x18dabfe4 = Directory.GetFiles(_0xf43a6983._0x71483527, "*.prefab", SearchOption.AllDirectories);
            foreach (string file in _0x18dabfe4)
            {
                
                string _0x23024484 = Path.GetFileNameWithoutExtension(file);
                var _0xeb6af805 = FileUtil.GetProjectRelativePath(file);
                var _0x69f514f4 = AssetDatabase.LoadAssetAtPath<GameObject>(_0xeb6af805);
                var _0xa0908fb5 = new WindowConfig();
                _0xa0908fb5.winName = _0x23024484;
                _0xa0908fb5.prefab = _0x69f514f4;
                _0xbffaebc6.WindowConfigs.Add(_0xa0908fb5);
            }

            
            string _0x22f16c9f = $"Assets/Resources/{WebAdConfig.sFilePath}.asset";
            AssetDatabase.CreateAsset(_0xbffaebc6, _0x22f16c9f);
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log(_0x3a19ac8a._0x512da7a0("WebAdConfig 资源已创建并保存到: {0}", _0x22f16c9f));
        }

        
        
        
        private static void _0x87ee3e83()
        {
            string _0x3c38605f = Application.dataPath + "/Resources/config/data.bytes";
            if (File.Exists(_0x3c38605f))
            {
                File.Delete(_0x3c38605f);
                if (File.Exists(_0x3c38605f + ".meta"))
                {
                    File.Delete(_0x3c38605f + ".meta");
                }

                Debug.LogWarning("del old file: data.bytes");
            }

            
            string _0x52c7d6bd = Application.dataPath + "/Resources/config/common/language.txt";
            if (!File.Exists(_0x52c7d6bd))
            {
                Debug.LogWarning("create file: language.txt");
                string _0x2dcea480 = @"字符串名	说明	中文	繁體	英文	土耳其语	西班牙语	葡萄牙语	俄罗斯语	法语	越南语	日语	韩语	阿拉伯	泰语	印度尼西亚语	德语	意大利语
string	string	string	string	string	string	string	string	string	string	string	string	string	string	string	string	string	string
StringName	Text	Chinese	ZhHant	English	Turkish	Spanish	Portuguese	Russian	French	Vietnamese	Japanese	Korean	Arabic	Thailand	Indonesia	German	Italian
Cancel	取消	取消	取消	CANCEL	İPTAL	CANCELAR	CANCELAR	ОТМЕНА	ANNULER	HỦY	キャンセル	취소	إلغاء	ยกเลิก	BATALKAN	ABBRECHEN	ANNULLA
";
                if (!Directory.Exists(Path.GetDirectoryName(_0x52c7d6bd)))
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(_0x52c7d6bd));
                }

                File.WriteAllText(_0x52c7d6bd, _0x2dcea480);
            }
        }

        
        public static void _0xac870145()
        {
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            var _0xbc1a5bb4 = Directory.GetFiles(Application.dataPath + "/Plugins/SCWebSDK/Res", "*.prefab", SearchOption.AllDirectories);
            foreach (var file in _0xbc1a5bb4)
            {
                string _0x3470bf98 = Path.GetFileNameWithoutExtension(file);
                if (_0xf43a6983._0x2239b4d3.Contains(_0x3470bf98))
                {
                    continue;
                }

                string _0x18a92f6a = Path.GetFullPath(file).Replace("\\", "/");
                var _0x003d67c5 = FileUtil.GetProjectRelativePath(_0x18a92f6a);
                
                var _0xd1855ecd = _0x003d67c5.Replace("Assets/Plugins/SCWebSDK/Res", "Assets/Resources");
                if (!File.Exists(_0xd1855ecd))
                {
                    var _0x7319b6a7 = new DirectoryInfo(_0xd1855ecd);
                    if (!_0x7319b6a7.Parent.Exists)
                        _0x7319b6a7.Parent.Create();
                    UnityEngine.Object _0x07a68a3f = (GameObject)AssetDatabase.LoadAssetAtPath(_0x003d67c5, typeof(GameObject));
                    if (_0x07a68a3f == null)
                    {
                        Debug.LogError(_0x3a19ac8a._0x512da7a0("预制体:{0}不存在！", _0x003d67c5));
                        continue;
                    }

                    GameObject _0x1dbf3553 = PrefabUtility.InstantiatePrefab(_0x07a68a3f) as GameObject;
                    if (_0x1dbf3553 == null)
                    {
                        Debug.LogError(_0x3a19ac8a._0x512da7a0("预制体实例化失败:{0}", _0x003d67c5));
                        continue;
                    }

                    PrefabUtility.SaveAsPrefabAsset(_0x1dbf3553, _0xd1855ecd);
                    GameObject.DestroyImmediate(_0x1dbf3553);
                }
            }

            Debug.Log(_0x3a19ac8a._0x512da7a0("创建变体完成"));
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
        }

        
        static List<string> _0x73d751b2 = new List<string>()
        {
            "/Plugins/OtherPlugins/Protobuf",
            "/Plugins/SCSDK",
            "/Editor/SCEditor",
            "/Resources/sc-sdk",
        };
        static List<string> _0xb098a153 = new List<string>()
        {
            "/Resources/config/data.bytes",
            "/Resources/config/SDKConfig.asset",
        };
        
        public static void _0x7f98781a()
        {
            for (int _0x84c3d17d = 0; _0x84c3d17d < _0x73d751b2.Count; _0x84c3d17d++)
            {
                string _0xe82ee6c8 = Application.dataPath + _0x73d751b2[_0x84c3d17d];
                if (Directory.Exists(_0xe82ee6c8))
                {
                    
                    Directory.Delete(_0xe82ee6c8, true);
                    if (File.Exists(_0xe82ee6c8 + ".meta"))
                    {
                        File.Delete(_0xe82ee6c8 + ".meta");
                    }

                    Debug.Log(_0x3a19ac8a._0x512da7a0("Delete folder:{0}", _0xe82ee6c8));
                }
            }

            for (int _0x93a9d074 = 0; _0x93a9d074 < _0xb098a153.Count; _0x93a9d074++)
            {
                string _0xc55185da = Application.dataPath + _0x73d751b2[_0x93a9d074];
                if (File.Exists(_0xc55185da))
                {
                    
                    File.Delete(_0xc55185da);
                    if (File.Exists(_0xc55185da + ".meta"))
                    {
                        File.Delete(_0xc55185da + ".meta");
                    }

                    Debug.Log(_0x3a19ac8a._0x512da7a0("Delete file:{0}", _0xc55185da));
                }
            }

            Debug.Log(_0x3a19ac8a._0x512da7a0("Delete old resources complete"));
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
        }
    }
}