using UnityEngine;
using UnityEditor;
using System;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Threading;
using UnityEditor.Build;
using UnityEditor.WebGL;
using System.Collections.Generic;
using UnityEngine.UI;
using System.Reflection;
using System.Linq;
using System.Text.RegularExpressions;
using SC;

namespace _0xa07739b8
{
    public partial class _0x852e8d8a : EditorWindow
    {
        
        Vector2 _0x908d4aed = new Vector2();
        public static bool _0xb7d5a786
        {
            get
            {
                return EditorPrefs.GetBool("SCEditor_MainEditorMenu_isLogEnabled", false);
            }

            set
            {
                EditorPrefs.SetBool("SCEditor_MainEditorMenu_isLogEnabled", value);
            }
        }

        public static bool _0xac9489fb { get => EditorPrefs.GetBool("SCEditor_LunaWindow_isBase122", true); set => EditorPrefs.SetBool("SCEditor_LunaWindow_isBase122", value); }

        
        
        
        public static int _0x08604d61 = -1;
        public static int _0x334a1fc0
        {
            get
            {
                if (_0x08604d61 == -1)
                {
                    _0x08604d61 = EditorPrefs.GetInt("SCEditor_MainEditorMenu_selectedAutoOpenMode", 0);
                    if (_0x08604d61 < 0 || _0x08604d61 >= _0xa2a88ee9.Count)
                    {
                        _0x08604d61 = 0;
                        EditorPrefs.SetInt("SCEditor_MainEditorMenu_selectedAutoOpenMode", _0x08604d61);
                    }
                }

                return _0x08604d61;
            }

            set
            {
                _0x08604d61 = value;
                EditorPrefs.SetInt("SCEditor_MainEditorMenu_selectedAutoOpenMode", _0x08604d61);
            }
        }

        private static Dictionary<string, string> _0x37f51565 = null;
        private static Dictionary<string, string> _0xa2a88ee9
        {
            get
            {
                if (_0x37f51565 == null)
                {
                    _0x37f51565 = new Dictionary<string, string>();
                    var _0xe6bb3094 = System.Enum.GetNames(typeof(EWebPlatform));
                    var _0xfd60b786 = _0xe6bb3094.ToList();
                    _0xfd60b786.Add("web");
                    for (int _0xe8fad8f6 = 0; _0xe8fad8f6 < _0xfd60b786.Count; _0xe8fad8f6++)
                    {
                        _0x37f51565.Add(_0xfd60b786[_0xe8fad8f6], _0xfd60b786[_0xe8fad8f6].ToLower());
                    }
                }

                return _0x37f51565;
            }
        }

        public static string _0x97784d7c()
        {
            return _0xa2a88ee9.Keys.ToArray()[_0x334a1fc0];
        }

        
        private void OnDisable()
        {
            _0xb7d5a786 = false;
        }

        public void _0xaab935e5(EditorWindow _0xab37c12c)
        {
            
            var _0xfebc8859 = new GUIStyle(GUI.skin.button);
            _0xfebc8859.fontSize = 16; 
            _0xfebc8859.alignment = TextAnchor.MiddleCenter; 
            this._0x908d4aed = EditorGUILayout.BeginScrollView(this._0x908d4aed);
            
            
            float _0x776f314f = _0xab37c12c.position.width;
            
            foreach (var group in _0xc645975c)
            {
                string _0x563e7bbd = group.Key;
                var _0x7e1846e6 = group.Value;
                
                EditorGUILayout.BeginVertical("box");
                _0x2684f217._0x355d6414(_0x563e7bbd);
                if (_0xf43a6983._0x17ee4b5c() && _0x563e7bbd == "打包")
                {
                    _0xf4b5420b();
                    EditorGUILayout.BeginHorizontal();
                    
                    GUIStyle _0x04d14ac1 = new GUIStyle(EditorStyles.popup)
                    {
                        fontSize = 16,
                        fixedHeight = 28
                    };
                    _0x2684f217._0xf9289847("完成后自动打开模式", -1, 30, 14);
                    int _0x2972ab26 = EditorGUILayout.Popup(_0x334a1fc0, _0xa2a88ee9.Keys.ToArray(), _0x04d14ac1, GUILayout.Width(100), GUILayout.Height(28));
                    if (_0x334a1fc0 != _0x2972ab26)
                    {
                        _0x334a1fc0 = _0x2972ab26;
                    }

                    
                    var _0x59f43e3a = GUI.backgroundColor;
                    GUI.backgroundColor = _0xb7d5a786 ? Color.green : Color.red;
                    _0x2684f217._0xc3842f89("是否开启日志", () =>
                    {
                        _0xb7d5a786 = !_0xb7d5a786;
                    }, 100);
                    
                    GUI.backgroundColor = _0x59f43e3a;
                    EditorGUILayout.EndHorizontal();
                }

                if (_0x7e1846e6.Count > 0)
                {
                    
                    EditorGUILayout.BeginHorizontal();
                    float _0x01c9ca21 = 0;
                    foreach (var button in _0x7e1846e6)
                    {
                        string _0x4d3ee046 = button.Key;
                        Action _0xa93c3636 = button.Value;
                        
                        Vector2 _0x98f1f664 = _0xfebc8859.CalcSize(new GUIContent(_0x3a19ac8a._0x512da7a0(_0x4d3ee046)));
                        float _0xc6459d3e = _0x98f1f664.x + 16; 
                        float _0xbe2084b0 = 30;
                        
                        if (_0x01c9ca21 + _0xc6459d3e > _0x776f314f - 20)
                        {
                            EditorGUILayout.EndHorizontal(); 
                            EditorGUILayout.BeginHorizontal(); 
                            _0x01c9ca21 = 0; 
                        }

                        if (_0x4d3ee046 == "安装LeanCLR")
                        {
                            var _0xbb467a1a = GUI.backgroundColor;
                            GUI.backgroundColor = _0x12350fa5() ? Color.green : Color.red;
                            _0x2684f217._0xc3842f89(_0x4d3ee046, () =>
                            {
                                EditorApplication.delayCall += () =>
                                {
                                    _0xa4a98d7e();
                                };
                            }, _0xc6459d3e, _0xbe2084b0);
                            GUI.backgroundColor = _0xbb467a1a;
                            _0x01c9ca21 += _0xc6459d3e;
                            continue;
                        }

                        _0x2684f217._0xc3842f89(_0x4d3ee046, () =>
                        {
                            
                            EditorApplication.delayCall += () =>
                            {
                                _0xa93c3636();
                            };
                        }, _0xc6459d3e, _0xbe2084b0);
                        _0x01c9ca21 += _0xc6459d3e;
                    }

                    EditorGUILayout.EndHorizontal();
                }

                EditorGUILayout.EndVertical();
            }

            _0x2684f217._0xbf7140d1();
            EditorGUILayout.EndScrollView();
        }

        private void _0xf4b5420b()
        {
            
            EditorGUILayout.BeginHorizontal();
            GUILayout.Space(10);
            
            float _0x6ab23a2e = 24;
            GUIStyle _0x932563a6 = new GUIStyle(EditorStyles.label)
            {
                fontSize = 14,
                alignment = TextAnchor.MiddleLeft,
                fixedHeight = _0x6ab23a2e,
                margin = new RectOffset(0, 0, 0, 0),
                padding = new RectOffset(0, 0, 0, 0)
            };
            GUILayout.Label(_0x3a19ac8a._0x512da7a0("资源编码模式:"), _0x932563a6, GUILayout.Width(95));
            GUIStyle _0xd2b58408 = new GUIStyle(EditorStyles.miniButtonLeft)
            {
                fontSize = 13,
                fixedHeight = _0x6ab23a2e
            };
            GUIStyle _0x0062364a = new GUIStyle(EditorStyles.miniButtonRight)
            {
                fontSize = 13,
                fixedHeight = _0x6ab23a2e
            };
            Color _0x1f7d340a = GUI.backgroundColor;
            GUI.backgroundColor = !_0xac9489fb ? Color.cyan : _0x1f7d340a;
            if (GUILayout.Button("Base64", _0xd2b58408, GUILayout.Width(105)))
            {
                _0xac9489fb = false;
            }

            GUI.backgroundColor = _0xac9489fb ? Color.cyan : _0x1f7d340a;
            if (GUILayout.Button("Base122", _0x0062364a, GUILayout.Width(105)))
            {
                _0xac9489fb = true;
            }

            GUI.backgroundColor = _0x1f7d340a;
            EditorGUILayout.EndHorizontal();
            GUILayout.Space(4);
        }

        
        
        
        private Dictionary<string, Dictionary<string, Action>> _0xa56fdf39 = null;
        private Dictionary<string, Dictionary<string, Action>> _0xc645975c
        {
            get
            {
                if (_0xa56fdf39 == null)
                {
                    var _0x726ff6e2 = _0x3a19ac8a._0x91cdca1d;
                    _0xa56fdf39 = new Dictionary<string, Dictionary<string, Action>>();
                    foreach (var group in _0xf1aa2498)
                    {
                        _0xa56fdf39.Add(group.Key, group.Value);
                    }

                    if (_0xf43a6983._0x17ee4b5c())
                    {
                        foreach (var group in _0x25308ede)
                        {
                            string _0x33af57e3 = group.Key;
                            if (_0xa56fdf39.TryGetValue(_0x33af57e3, out var showGroup))
                            {
                                foreach (var button in group.Value)
                                {
                                    showGroup.Add(button.Key, button.Value);
                                }

                                _0xa56fdf39[_0x33af57e3] = showGroup;
                            }
                            else
                            {
                                _0xa56fdf39.Add(_0x33af57e3, group.Value);
                            }
                        }
                    }

                    if (_0xf43a6983._0x17ee4b5c() && _0xf43a6983._0x4d509f4c())
                    {
                        foreach (var group in _0x7db723c2)
                        {
                            string _0xa2216749 = group.Key;
                            if (_0xa56fdf39.TryGetValue(_0xa2216749, out var showGroup))
                            {
                                foreach (var button in group.Value)
                                {
                                    showGroup.Add(button.Key, button.Value);
                                }

                                _0xa56fdf39[_0xa2216749] = showGroup;
                            }
                            else
                            {
                                _0xa56fdf39.Add(_0xa2216749, group.Value);
                            }
                        }
                    }
                }

                return _0xa56fdf39;
            }
        }

        private Dictionary<string, Dictionary<string, Action>> _0xf1aa2498 = new Dictionary<string, Dictionary<string, Action>>()
        {
            {
                "打包",
                new Dictionary<string, Action>()
                {
                    {
                        "打包",
                        _0x41e48010._0x7a5ac07b
                    },
                    {
                        "运行打包后文件",
                        _0x41e48010._0xb41bd30b
                    },
                }
            },
            {
                "其他",
                new Dictionary<string, Action>()
                {
                    {
                        "生成字体",
                        _0x3e134976._0x5c0ecc99
                    },
                    {
                        "使用默认字体",
                        _0x3e134976._0xf7e527ff
                    },
                    {
                        "修复Dll的sdk的脚本丢失",
                        _0x8dcf1a76._0xfe2fd42a
                    },
                }
            },
            {
                "横竖屏",
                new Dictionary<string, Action>()
                {
                    {
                        "横竖屏切换(空格)",
                        _0xb1c51c50._0x5cc82bf8
                    },
                    {
                        "横竖屏保存(S)",
                        _0xb1c51c50._0x77d6d61e
                    },
                }
            },
        };
        private Dictionary<string, Dictionary<string, Action>> _0x25308ede = new Dictionary<string, Dictionary<string, Action>>()
        {
            {
                "打包",
                new Dictionary<string, Action>()
                {
                    {
                        "打包并转Html",
                        _0x41e48010._0x988f46a9
                    },
                }
            },
            {
                "其他",
                new Dictionary<string, Action>()
                {
                    {
                        "安装LeanCLR",
                        _0x2eb466e3
                    },
                    {
                        "开启日志",
                        () =>
                        {
                            _0x0bee824b();
                        }
                    },
                }
            },
        };
        private Dictionary<string, Dictionary<string, Action>> _0x7db723c2 = new Dictionary<string, Dictionary<string, Action>>()
        {
            {
                "打包",
                new Dictionary<string, Action>()
                {
                    {
                        "仅转html",
                        () =>
                        {
                            string _0x2c78ac86 = _0xac9489fb ? "base122" : "base64";
                            _0x41e48010._0x6098db78(_0x2c78ac86);
                        }
                    },
                }
            },
        };
        
        
        public static void _0x77c6148d(bool _0x44f15ad0)
        {
            if (!_0xf43a6983._0x17ee4b5c() || !Directory.Exists(_0xf43a6983._0xb30a9ae7))
            {
                Debug.LogError(_0x3a19ac8a._0x512da7a0("SDK路径不存在，请去网站下载升级包，根据文档进行升级"));
                return;
            }

            string _0x0a90181c = _0xf43a6983._0xe3bf1bed;
            if (!Directory.Exists(_0x0a90181c))
            {
                Directory.CreateDirectory(_0x0a90181c);
            }

            bool _0x7e1be984 = _0xfb66840f._0xf2315609(_0xf43a6983._0xc20f084b);
            if (!_0x7e1be984)
            {
                Debug.LogError($"SDK目录自动更新失败，请注意！最好手动解决！{_0x0a90181c}");
                return;
            }

            var _0xee28e69d = _0xc9be004e._0xaad172f5(_0xf43a6983._0xc20f084b);
            string _0x13c5d4b9 = _0xf43a6983._0x8b88855b;
            string _0x9ef6fd52 = _0xf43a6983._0x53408117;
            
            if (!_0xf43a6983._0xf21e956a())
            {
                
                bool _0x3ee52ba9 = sc.BObfuscated;
                if (_0x3ee52ba9)
                {
                    _0x13c5d4b9 = "Luna_Obfuscated_" + _0x13c5d4b9;
                    _0x9ef6fd52 = "Luna_Obfuscated_" + _0x9ef6fd52;
                }
                else
                {
                    _0x13c5d4b9 = "Luna_" + _0x13c5d4b9;
                    _0x9ef6fd52 = "Luna_" + _0x9ef6fd52;
                }
            }

            string _0xcdbd233f;
            if (_0x44f15ad0)
            {
                _0xcdbd233f = $"{_0xf43a6983._0xc20f084b}/{_0xee28e69d}/{_0x13c5d4b9}.unitypackage";
            }
            else
            {
                _0xcdbd233f = $"{_0xf43a6983._0xc20f084b}/{_0xee28e69d}/{_0x9ef6fd52}.unitypackage";
            }

            if (!File.Exists(_0xcdbd233f))
            {
                Debug.LogError("导入的SDK包不存在，请去网站下载升级包，根据文档进行升级");
                return;
            }

            AssetDatabase.ImportPackage(_0xcdbd233f, true);
            Debug.Log(_0x3a19ac8a._0x512da7a0("升级完成"));
        }

        
        
        
        
        public static void _0x0bee824b()
        {
            
            string _0x23976eee = EditorUtility.OpenFilePanel("选择文件", "", "html");
            if (string.IsNullOrEmpty(_0x23976eee))
            {
                Debug.LogError("未选择文件");
                return;
            }

            Debug.Log("选择文件:" + _0x23976eee);
            string _0x2e6b3ab5 = "E:/Project/tool/design/createhtml/config/dev/Unity试玩打包模板/2020.3.5f1c1/index_log.js";
            
            string _0x91bf0fd3 = File.ReadAllText(_0x2e6b3ab5);
            string _0xc58f730c = File.ReadAllText(_0x23976eee);
            
            int _0x346e6670 = _0xc58f730c.IndexOf("<script>");
            if (_0x346e6670 != -1)
            {
                
                if (_0xc58f730c.IndexOf("luna:startup:bundlesLoad") > 0)
                {
                    _0xc58f730c = _0xc58f730c.Insert(_0x346e6670, "<script>" + _0x91bf0fd3 + "\nwindow.setIsOpenLog(true);\nwindow.addEventListener(\"luna:startup:bundlesLoad\", ( () => { window.setGlobalLog(); }))</script>\n");
                }
                else
                {
                    _0xc58f730c = _0xc58f730c.Insert(_0x346e6670, "<script>" + _0x91bf0fd3 + "\nwindow.setIsOpenLog(true);\nwindow.setGlobalLog();</script>\n");
                }
            }

            string _0xb6428992 = _0x23976eee.Replace(".html", "_log.html");
            File.WriteAllText(_0xb6428992, _0xc58f730c);
            Debug.Log("添加日志完成");
        }

        
        public static void _0xc465b4a9()
        {
            string _0x12e7e688 = @"E:\Project_Plugins\common\unity\unityWeb\ads\tools\BuildReport";
            string _0xb88d5747 = Path.Combine(Application.dataPath, "BuildReport");
            if (!Directory.Exists(_0x12e7e688))
            {
                
                string _0xaf8ea98a = Path.GetDirectoryName(_0x12e7e688);
                if (!Directory.Exists(_0xaf8ea98a))
                {
                    Directory.CreateDirectory(_0xaf8ea98a);
                }

                bool _0x9972904e = _0xfb66840f._0xf2315609(_0xaf8ea98a);
                if (!_0x9972904e)
                {
                    Debug.LogError(_0x3a19ac8a._0x512da7a0("BuildReport 目录自动更新失败，请手动解决！{0}", _0xaf8ea98a));
                    return;
                }
            }

            if (!Directory.Exists(_0x12e7e688))
            {
                Debug.LogError(_0x3a19ac8a._0x512da7a0("BuildReport 路径不存在：{0}", _0x12e7e688));
                return;
            }

            
            if (Directory.Exists(_0xb88d5747))
            {
                Directory.Delete(_0xb88d5747, true);
            }

            _0xc9be004e._0xd4f06a6a(_0x12e7e688, _0xb88d5747);
            AssetDatabase.Refresh();
            Debug.Log(_0x3a19ac8a._0x512da7a0("升级BuildReport完成"));
        }

        private const string _0x526b1abb = "com.code-philosophy.leanclr";
        private const string _0x3123e080 = "https://gitee.com/focus-creative-games/leanclr4unity.git";
        private static bool _0xa0a876a6 = false;
        public static void _0x2eb466e3()
        {
            try
            {
                _0xf95de2f9._0x861d0736(_0x526b1abb, _0x3123e080);
                Debug.Log("<color=#00FF0C><b>[LeanCLR] manifest.json 依赖已更新：</b></color>" + _0x526b1abb);
                UnityEditor.PackageManager.Client.Resolve();
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 安装失败\n" + e);
            }
        }

        public static void _0xa4a98d7e()
        {
            if (_0x12350fa5())
            {
                _0x7700fec7();
            }
            else
            {
                _0x17c9d9ea();
            }
        }

        private static void _0x17c9d9ea()
        {
            if (!_0x534932c9())
            {
                _0x2eb466e3();
                return;
            }

            bool _0x702291f0 = false;
            _0x702291f0 |= _0x7556868b();
            _0x702291f0 |= _0xdd9b4933(true);
            if (_0x702291f0)
            {
                _0x0c5d2a70();
            }
        }

        private static void _0x7700fec7()
        {
            try
            {
                string _0x61a23a67 = Directory.GetParent(Application.dataPath).FullName;
                try
                {
                    _0xf95de2f9._0x92f6d462 _0x15d6229e = _0xf95de2f9._0x9f55440d();
                    if (_0x15d6229e != null && _0x15d6229e._0x63273710 != null && _0x15d6229e._0x63273710.ContainsKey(_0x526b1abb))
                    {
                        _0x15d6229e._0x63273710.Remove(_0x526b1abb);
                        _0xf95de2f9._0xe8c4dbf5(_0x15d6229e);
                        Debug.Log("<color=#00FF0C><b>[LeanCLR] 已从 manifest.json 移除依赖：</b></color>" + _0x526b1abb);
                        UnityEditor.PackageManager.Client.Resolve();
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("[LeanCLR] 移除 manifest.json 依赖失败\n" + e);
                }

                string _0x78954767 = Path.Combine(_0x61a23a67, "Library", "LeanCLR", "aot.xml");
                if (File.Exists(_0x78954767))
                {
                    File.Delete(_0x78954767);
                }

                string _0x01f57ef8 = Path.Combine(_0x61a23a67, "ProjectSettings", "LeanCLR.asset");
                if (File.Exists(_0x01f57ef8))
                {
                    File.Delete(_0x01f57ef8);
                }

                _0xbcaff1b7();
                _0xe223f9b6(_0x61a23a67);
                _0xdbcc2e08(_0x61a23a67);
                _0x4ee417bc();
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 已清理相关文件：</b></color>" + "Library/LeanCLR/aot.xml, ProjectSettings/LeanCLR.asset");
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 卸载/清理失败\n" + e);
            }
        }

        private static bool _0xbcaff1b7()
        {
            try
            {
                string _0xa12c5272 = PlayerSettings.GetAdditionalIl2CppArgs();
                if (string.IsNullOrEmpty(_0xa12c5272))
                    return false;
                
                
                string _0xb00101aa = Regex.Replace(_0xa12c5272, @"(^|\s)--compiler-flags=""[^""]*?-DUNITY_\d{4}_\d+[^""]*?""", "$1", RegexOptions.IgnoreCase);
                _0xb00101aa = Regex.Replace(_0xb00101aa, @"\s{2,}", " ").Trim();
                if (_0xb00101aa == _0xa12c5272.Trim())
                    return false;
                PlayerSettings.SetAdditionalIl2CppArgs(_0xb00101aa);
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 已清理 PlayerSettings.AdditionalIl2CppArgs 中的 compiler-flags 注入</b></color>");
                return true;
            }
            catch (Exception e)
            {
                Debug.LogWarning("[LeanCLR] 清理 PlayerSettings.AdditionalIl2CppArgs 失败\n" + e);
                return false;
            }
        }

        private static void _0x4ee417bc()
        {
            try
            {
                var _0x2b38f480 = typeof(BuildPipeline).GetMethod("CleanBuildCache", BindingFlags.Public | BindingFlags.Static);
                if (_0x2b38f480 == null)
                    return;
                _0x2b38f480.Invoke(null, null);
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 卸载后已执行 Clean Build Cache</b></color>");
            }
            catch (Exception e)
            {
                Debug.LogWarning("[LeanCLR] 卸载后执行 Clean Build Cache 失败\n" + e);
            }
        }

        private static void _0xdbcc2e08(string _0xe3914d31)
        {
            try
            {
                if (string.IsNullOrEmpty(_0xe3914d31))
                    return;
                
                if (EditorApplication.isCompiling || EditorApplication.isUpdating)
                {
                    Debug.LogWarning("[LeanCLR] 卸载后 Unity 正在编译/更新中，建议等待完成后再打包（避免旧缓存指向 LeanCLR 本地 IL2CPP 路径）");
                    return;
                }

                string _0xab5383cb = Path.Combine(_0xe3914d31, "Library");
                
                try
                {
                    string _0xb09e4de0 = Path.Combine(_0xab5383cb, "Artifacts");
                    if (!Directory.Exists(_0xb09e4de0))
                    {
                        Directory.CreateDirectory(_0xb09e4de0);
                    }
                }
                catch
                {
                
                }

                bool _0x3b6dd2f5 = false;
                _0x3b6dd2f5 |= _0x611e5602(Path.Combine(_0xab5383cb, "Bee"));
                _0x3b6dd2f5 |= _0x611e5602(Path.Combine(_0xab5383cb, "Il2cppBuildCache"));
                if (_0x3b6dd2f5)
                {
                    Debug.Log("<color=#00FF0C><b>[LeanCLR] 已重置 Bee/IL2CPP 缓存（卸载后防止旧路径残留）</b></color>");
                }
            }
            catch (Exception e)
            {
                Debug.LogWarning("[LeanCLR] 重置 Bee/IL2CPP 缓存失败\n" + e);
            }
        }

        private static void _0xe223f9b6(string _0x3f1144ec)
        {
            try
            {
                if (string.IsNullOrEmpty(_0x3f1144ec))
                    return;
                string _0xa873f980 = Path.Combine(_0x3f1144ec, "Library", "PackageCache");
                if (!Directory.Exists(_0xa873f980))
                    return;
                string _0xd7badfce = _0x526b1abb + "@";
                string[] _0x82c664f0 = Directory.GetDirectories(_0xa873f980);
                bool _0x1a2c1ab0 = false;
                for (int _0x7e4711d1 = 0; _0x7e4711d1 < _0x82c664f0.Length; _0x7e4711d1++)
                {
                    try
                    {
                        string _0x28da8f36 = Path.GetFileName(_0x82c664f0[_0x7e4711d1]);
                        if (string.IsNullOrEmpty(_0x28da8f36))
                            continue;
                        if (!_0x28da8f36.StartsWith(_0xd7badfce, StringComparison.OrdinalIgnoreCase))
                            continue;
                        Directory.Delete(_0x82c664f0[_0x7e4711d1], true);
                        _0x1a2c1ab0 = true;
                    }
                    catch (Exception e)
                    {
                        Debug.LogWarning("[LeanCLR] 删除 PackageCache 目录失败：" + _0x82c664f0[_0x7e4711d1] + "\n" + e);
                    }
                }

                if (_0x1a2c1ab0)
                {
                    Debug.Log("<color=#00FF0C><b>[LeanCLR] 已清理 Library/PackageCache 下的 LeanCLR 缓存：</b></color>" + _0xd7badfce + "*");
                }
            }
            catch (Exception e)
            {
                Debug.LogWarning("[LeanCLR] 清理 Library/PackageCache LeanCLR 缓存失败\n" + e);
            }
        }

        private static void _0x0c5d2a70()
        {
            if (_0xa0a876a6)
                return;
            _0xa0a876a6 = true;
            try
            {
                Debug.LogWarning("[LeanCLR] 已请求 Clean Build Cache");
                _0xf7daa571();
            }
            finally
            {
                _0xa0a876a6 = false;
            }
        }

        private static void _0xf7daa571()
        {
            try
            {
                Debug.Log("[LeanCLR] 开始执行 Clean Build Cache...");
                var _0x33f36948 = typeof(BuildPipeline).GetMethod("CleanBuildCache", BindingFlags.Public | BindingFlags.Static);
                if (_0x33f36948 != null)
                {
                    _0x33f36948.Invoke(null, null);
                    Debug.Log("<color=#00FF0C><b>[LeanCLR] 已执行 Clean Build Cache</b></color>");
                    return;
                }

                
                bool _0xf82b4c3c = _0x4b72a251();
                if (_0xf82b4c3c)
                {
                    Debug.Log("<color=#00FF0C><b>[LeanCLR] 已清理旧版构建缓存目录（未找到 CleanBuildCache API）</b></color>");
                }
                else
                {
                    Debug.LogWarning("[LeanCLR] 未找到 BuildPipeline.CleanBuildCache()，且未发现可清理的旧版构建缓存目录");
                }
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 执行 Clean Build Cache 失败\n" + e);
            }
        }

        private static bool _0x4b72a251()
        {
            try
            {
                string _0x4d5d4fdd = Directory.GetParent(Application.dataPath).FullName;
                string _0xf0b0af2e = Path.Combine(_0x4d5d4fdd, "Library");
                
                
                
                
                try
                {
                    string _0x5395cd09 = Path.Combine(_0xf0b0af2e, "Artifacts");
                    if (!Directory.Exists(_0x5395cd09))
                    {
                        Directory.CreateDirectory(_0x5395cd09);
                    }
                }
                catch
                {
                
                }

                
                try
                {
                    if (EditorApplication.isCompiling || EditorApplication.isUpdating)
                    {
                        Debug.LogWarning("[LeanCLR] Unity 正在编译/更新中，跳过旧版构建缓存清理（避免触发资源管线异常）");
                        return false;
                    }
                }
                catch
                {
                
                }

                
                bool _0xcfc5ae76 = false;
                _0xcfc5ae76 |= _0x611e5602(Path.Combine(_0xf0b0af2e, "Il2cppBuildCache"));
                return _0xcfc5ae76;
            }
            catch
            {
                return false;
            }
        }

        private static bool _0x611e5602(string _0xeae938de)
        {
            try
            {
                if (!Directory.Exists(_0xeae938de))
                    return false;
                Directory.Delete(_0xeae938de, true);
                return true;
            }
            catch (Exception e)
            {
                Debug.LogWarning("[LeanCLR] 清理目录失败：" + _0xeae938de + "\n" + e);
                return false;
            }
        }

        public static bool _0x7556868b()
        {
            try
            {
                string _0x20748508 = Directory.GetParent(Application.dataPath).FullName;
                string _0xd50a2982 = Path.Combine(_0x20748508, "Library", "LeanCLR", "aot.xml");
                if (File.Exists(_0xd50a2982))
                    return false;
                string _0x2ae819c5 = Path.GetDirectoryName(_0xd50a2982);
                if (!Directory.Exists(_0x2ae819c5))
                {
                    Directory.CreateDirectory(_0x2ae819c5);
                }

                string _0xbdaec4f4 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<aot> <assembly fullname=\"*\" aot=\"0\" /></aot>";
                File.WriteAllText(_0xd50a2982, _0xbdaec4f4);
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 已生成 Library/LeanCLR/aot.xml：</b></color>" + _0xd50a2982);
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 生成 Library/LeanCLR/aot.xml 失败\n" + e);
                return false;
            }
        }

        public static void _0xd17efa51()
        {
            if (!_0x534932c9())
                return;
            bool _0x9b65096b = false;
            _0x9b65096b |= _0x7556868b();
            _0x9b65096b |= _0xdd9b4933(false);
            if (_0x9b65096b)
            {
                _0x0c5d2a70();
            }
        }

        public static bool _0x534932c9()
        {
            try
            {
                string _0x830883bc = Directory.GetParent(Application.dataPath).FullName;
                string _0x255582f8 = Path.Combine(_0x830883bc, "Packages", "manifest.json");
                if (!File.Exists(_0x255582f8))
                    return false;
                string _0x907c2675 = File.ReadAllText(_0x255582f8);
                return _0x907c2675.IndexOf(_0x526b1abb, StringComparison.OrdinalIgnoreCase) >= 0;
            }
            catch
            {
            
            }

            return false;
        }

        private static Type _0xfa21115e()
        {
            try
            {
                var _0xd9cae191 = Type.GetType("LeanCLR.Settings");
                if (_0xd9cae191 != null)
                    return _0xd9cae191;
            }
            catch
            {
            
            }

            try
            {
                var _0x96b5a00d = AppDomain.CurrentDomain.GetAssemblies();
                for (int _0x706b97e8 = 0; _0x706b97e8 < _0x96b5a00d.Length; _0x706b97e8++)
                {
                    try
                    {
                        var _0x3639a537 = _0x96b5a00d[_0x706b97e8].GetType("LeanCLR.Settings");
                        if (_0x3639a537 != null)
                            return _0x3639a537;
                    }
                    catch
                    {
                    
                    }
                }
            }
            catch
            {
            
            }

            return null;
        }

        public static bool _0xdd9b4933(bool _0x7909e0d9)
        {
            try
            {
                string _0x53b07d18 = Directory.GetParent(Application.dataPath).FullName;
                string _0x498d04e0 = Path.Combine(_0x53b07d18, "ProjectSettings", "LeanCLR.asset");
                bool _0x5a988e0d = File.Exists(_0x498d04e0);
                Type _0x252f6839 = _0xfa21115e();
                if (_0x252f6839 == null)
                {
                    Debug.LogError("[LeanCLR] 未找到 LeanCLR.Settings 类型，无法自动创建 ProjectSettings/LeanCLR.asset");
                    return false;
                }

                object _0x4bc9b9cb = null;
                try
                {
                    MethodInfo _0xd61f43bb = _0x252f6839.GetMethod("LoadOrCreate", BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic);
                    if (_0xd61f43bb != null)
                    {
                        _0x4bc9b9cb = _0xd61f43bb.Invoke(null, null);
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("[LeanCLR] 反射调用 Settings.LoadOrCreate() 失败\n" + e);
                }

                if (_0x4bc9b9cb == null)
                {
                    try
                    {
                        PropertyInfo _0xfd8f11d1 = _0x252f6839.GetProperty("Instance", BindingFlags.Static | BindingFlags.Public);
                        if (_0xfd8f11d1 != null)
                        {
                            _0x4bc9b9cb = _0xfd8f11d1.GetValue(null, null);
                        }
                    }
                    catch (Exception e)
                    {
                        Debug.LogError("[LeanCLR] 反射读取 Settings.Instance 失败\n" + e);
                    }
                }

                bool _0xe8e2d3ed = _0xfe8d9041(_0x252f6839, _0x4bc9b9cb);
                bool _0x63ea2981 = _0x7909e0d9 && _0x2b8cfb81(_0x252f6839, _0x4bc9b9cb, true);
                bool _0xb1616c82 = !File.Exists(_0x498d04e0) || _0xe8e2d3ed || _0x63ea2981;
                try
                {
                    MethodInfo _0x47518cee = _0x252f6839.GetMethod("Save", BindingFlags.Static | BindingFlags.Public);
                    if (_0x47518cee != null)
                    {
                        if (_0xb1616c82)
                        {
                            _0x47518cee.Invoke(null, null);
                        }
                    }
                    else
                    {
                        Debug.LogError("[LeanCLR] 未找到 Settings.Save()，无法落盘 ProjectSettings/LeanCLR.asset");
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("[LeanCLR] 反射调用 Settings.Save() 失败\n" + e);
                }

                if (File.Exists(_0x498d04e0))
                {
                    if (!_0x5a988e0d)
                    {
                        Debug.Log("<color=#00FF0C><b>[LeanCLR] 已创建 ProjectSettings/LeanCLR.asset：</b></color>" + _0x498d04e0);
                    }
                }
                else
                {
                    Debug.LogError("[LeanCLR] 尝试创建 ProjectSettings/LeanCLR.asset 失败：" + _0x498d04e0);
                }

                return _0xb1616c82 && File.Exists(_0x498d04e0);
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 创建 ProjectSettings/LeanCLR.asset 失败\n" + e);
                return false;
            }
        }

        public static bool _0x12350fa5()
        {
            if (!_0x534932c9())
                return false;
            try
            {
                Type _0xb296003d = _0xfa21115e();
                if (_0xb296003d == null)
                    return false;
                object _0xb2241c8e = null;
                try
                {
                    PropertyInfo _0x1d61c6a5 = _0xb296003d.GetProperty("Instance", BindingFlags.Static | BindingFlags.Public);
                    if (_0x1d61c6a5 != null)
                    {
                        _0xb2241c8e = _0x1d61c6a5.GetValue(null, null);
                    }
                }
                catch
                {
                
                }

                if (_0xb2241c8e == null)
                    return false;
                FieldInfo _0x20f59f69 = _0xb296003d.GetField("enable", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                if (_0x20f59f69 == null)
                    return false;
                return (bool)_0x20f59f69.GetValue(_0xb2241c8e);
            }
            catch
            {
                return false;
            }
        }

        private static bool _0xfe8d9041(Type _0xe5a0c6f1, object _0x0ac08dd9)
        {
            try
            {
                if (_0xe5a0c6f1 == null || _0x0ac08dd9 == null)
                    return false;
                string _0xc8afc463 = "Library\\LeanCLR\\aot.xml";
                FieldInfo _0x6522ab98 = _0xe5a0c6f1.GetField("leanAOTSettings", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                if (_0x6522ab98 == null)
                    return false;
                object _0x7c453e7b = _0x6522ab98.GetValue(_0x0ac08dd9);
                Type _0x26497f28 = _0x6522ab98.FieldType ?? _0xa31e38fd(_0xe5a0c6f1);
                if (_0x26497f28 == null)
                    return false;
                if (_0x7c453e7b == null)
                {
                    _0x7c453e7b = Activator.CreateInstance(_0x26497f28);
                    _0x6522ab98.SetValue(_0x0ac08dd9, _0x7c453e7b);
                }

                FieldInfo _0x047e650b = _0x26497f28.GetField("ruleFiles", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                if (_0x047e650b == null)
                    return false;
                string[] _0xf5cf677f = _0x047e650b.GetValue(_0x7c453e7b) as string[];
                if (_0xe7c3be7c(_0xf5cf677f, _0xc8afc463))
                    return false;
                _0x047e650b.SetValue(_0x7c453e7b, new[] { _0xc8afc463 });
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 已设置 leanAOTSettings.ruleFiles：</b></color>" + _0xc8afc463);
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 设置 leanAOTSettings.ruleFiles 失败\n" + e);
                return false;
            }
        }

        private static bool _0x2b8cfb81(Type _0xade82e61, object _0x18876b7b, bool _0x7b4569b0)
        {
            try
            {
                if (_0xade82e61 == null || _0x18876b7b == null)
                    return false;
                FieldInfo _0xf5d76825 = _0xade82e61.GetField("enable", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                if (_0xf5d76825 == null)
                    return false;
                bool _0xfdaa33f2 = (bool)_0xf5d76825.GetValue(_0x18876b7b);
                if (_0xfdaa33f2 == _0x7b4569b0)
                    return false;
                _0xf5d76825.SetValue(_0x18876b7b, _0x7b4569b0);
                Debug.Log("<color=#00FF0C><b>[LeanCLR] 已设置 Settings.enable：</b></color>" + _0x7b4569b0);
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError("[LeanCLR] 设置 Settings.enable 失败\n" + e);
                return false;
            }
        }

        private static Type _0xa31e38fd(Type _0xb11c968e)
        {
            try
            {
                if (_0xb11c968e == null)
                    return null;
                var _0x75b536a5 = _0xb11c968e.Assembly;
                return _0x75b536a5 != null ? _0x75b536a5.GetType("LeanCLR.LeanAOTSettings") : null;
            }
            catch
            {
                return null;
            }
        }

        private static bool _0xe7c3be7c(string[] _0x60e51c93, string _0x303a5a99)
        {
            if (_0x60e51c93 == null || _0x60e51c93.Length != 1)
                return false;
            return _0xbd2334d6(_0x60e51c93[0]) == _0xbd2334d6(_0x303a5a99);
        }

        private static string _0xbd2334d6(string _0xb2bf8dc1)
        {
            return string.IsNullOrEmpty(_0xb2bf8dc1) ? string.Empty : _0xb2bf8dc1.Trim().Replace('\\', '/');
        }
    }
}