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
using _0xa07739b8;
using SC;

namespace _0xa07739b8
{
    public partial class _0x6689e212 : EditorWindow
    {
        public static void _0xa9741371()
        {
            _0x6689e212 _0x2deff8ef = GetWindow<_0x6689e212>(_0x3a19ac8a._0x512da7a0("组件替换"));
            _0x2deff8ef.minSize = new Vector2(477, 500);
            _0x2deff8ef.Show();
        }

        
        private const string _0x3e733e2c = "<Null>";
        
        private bool _0xceb7d8c4 = false;
        private static bool _0xae6a9025(string _0x57e96979)
        {
            return _0x57e96979 == _0x3e733e2c;
        }

        private static string[] _0x96d5fb77(string[] _0xfc795f57)
        {
            if (_0xfc795f57 == null || _0xfc795f57.Length <= 0)
            {
                return _0xfc795f57;
            }

            
            
            string[] _0x3d41eecc = (string[])_0xfc795f57.Clone();
            if (_0x3d41eecc.Length > 0 && _0x3d41eecc[0] == _0x3e733e2c)
            {
                _0x3d41eecc[0] = _0x3a19ac8a._0x512da7a0(_0x3e733e2c);
            }

            return _0x3d41eecc;
        }

        private static string[] _0x885b745d(string[] _0x326ccb45, string _0xf270d359)
        {
            List<string> _0x21c1e23f = new List<string>();
            _0x21c1e23f.Add(_0x3e733e2c);
            if (_0x326ccb45 == null || _0x326ccb45.Length <= 0)
            {
                return _0x21c1e23f.ToArray();
            }

            
            if (string.IsNullOrEmpty(_0xf270d359))
            {
                _0x21c1e23f.AddRange(_0x326ccb45);
                return _0x21c1e23f.ToArray();
            }

            int _0xab2f2bf4 = 0;
            for (int _0x80ed2a72 = 0; _0x80ed2a72 < _0x326ccb45.Length; _0x80ed2a72++)
            {
                string _0xfa4ff53b = _0x326ccb45[_0x80ed2a72];
                if (_0xfa4ff53b == null)
                    continue;
                if (_0xfa4ff53b.IndexOf(_0xf270d359) != -1)
                {
                    _0x21c1e23f.Add(_0xfa4ff53b);
                    _0xab2f2bf4++;
                }
            }

            if (_0xab2f2bf4 == 0)
            {
                _0x21c1e23f.AddRange(_0x326ccb45);
            }

            return _0x21c1e23f.ToArray();
        }

        
        
        
        
        private string[] _0xbefdd20a = null;
        
        
        
        
        private string[] _0xe1d07ff7 = null;
        
        
        
        
        private string[] _0xcb56ec54 = null;
        
        
        
        
        private string[] _0xb37753f1 = new string[]
        {
            "TestTools",
            "EventSystem",
            "Timeline",
            "Networking"
        };
        
        
        
        
        private string[] _0x9e5944e3 = new string[]
        {
        };
        
        
        
        
        public int _0x6089eb10
        {
            get
            {
                int _0x88e0a0bc = PlayerPrefs.GetInt("selectedSource", 0);
                return _0x88e0a0bc;
            }

            set
            {
                PlayerPrefs.SetInt("selectedSource", value);
            }
        }

        
        
        
        
        public int _0x0b96acd5
        {
            get
            {
                int _0x1ce4f7d3 = PlayerPrefs.GetInt("selectedAim", 0);
                return _0x1ce4f7d3;
            }

            set
            {
                PlayerPrefs.SetInt("selectedAim", value);
            }
        }

        private int _0x796f97ec = 0;
        private string _0x8940bcf3 = "";
        private string _0x62b46052 = "";
        
        public static string _0xbb64fb1e
        {
            get
            {
                
                string _0x45ec875c = PlayerPrefs.GetString("sAllProperty", "");
                return _0x45ec875c;
            }

            set
            {
                PlayerPrefs.SetString("sAllProperty", value);
            }
        }

        GUIStyle _0xa0e14099 = null;
        private List<Type> _0xe521eccd = null;
        string _0x2024b9c4;
        string _0xd2953aca;
        public void OnGUI()
        {
            EditorGUILayout.BeginVertical("box");
            
            titleContent = new GUIContent(_0x3a19ac8a._0x512da7a0("组件替换"));
            if (_0xbefdd20a == null)
            {
                _0xbefdd20a = _0xabb7813c();
                _0xe1d07ff7 = _0x885b745d(_0xbefdd20a, "");
                _0xcb56ec54 = _0x885b745d(_0xbefdd20a, "");
            }

            if (_0xcb56ec54 == null)
            {
                _0xcb56ec54 = _0x885b745d(_0xbefdd20a, "");
            }

            if (!_0xceb7d8c4)
            {
                _0x6089eb10 = 0;
                _0x0b96acd5 = 0;
                _0x2024b9c4 = "";
                _0xd2953aca = "";
                _0x8940bcf3 = "";
                _0x62b46052 = "";
                _0x9e5944e3 = new string[]
                {
                };
                _0x796f97ec = 0;
                _0xceb7d8c4 = true;
            }

            _0x2684f217._0x355d6414("组件替换");
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("被换的组件", -1, 40);
            if (_0xa0e14099 == null)
            {
                _0xa0e14099 = new GUIStyle(EditorStyles.popup)
                {
                    fontSize = 16,
                    fixedHeight = 38,
                    alignment = TextAnchor.MiddleLeft,
                };
            }

            
            string _0x64631feb = EditorGUILayout.TextField(_0x2024b9c4 == null ? "" : _0x2024b9c4, GUILayout.Width(120), GUILayout.Height(40));
            if (_0x64631feb != _0x2024b9c4)
            {
                _0x2024b9c4 = _0x64631feb;
                _0xe1d07ff7 = _0x885b745d(_0xbefdd20a, _0x64631feb);
            }

            
            if (_0xe1d07ff7 == null || _0xe1d07ff7.Length <= 0)
            {
                _0xe1d07ff7 = _0x885b745d(_0xbefdd20a, _0x2024b9c4);
            }

            if (_0x6089eb10 < 0 || _0x6089eb10 >= _0xe1d07ff7.Length)
            {
                _0x6089eb10 = 0;
            }

            string[] _0x57c25463 = _0x96d5fb77(_0xe1d07ff7);
            int _0xd094bdc9 = EditorGUILayout.Popup(_0x6089eb10, _0x57c25463, _0xa0e14099, GUILayout.Width(200), GUILayout.Height(40));
            if (_0xd094bdc9 != _0x6089eb10 || _0x8940bcf3 == "")
            {
                _0x6089eb10 = _0xd094bdc9;
                string _0xd9ede90f = _0xe1d07ff7[_0xd094bdc9];
                if (_0xae6a9025(_0xd9ede90f))
                {
                    _0x2024b9c4 = "";
                    _0x8940bcf3 = "";
                    _0x62b46052 = "";
                    _0x9e5944e3 = new string[]
                    {
                    };
                    _0x796f97ec = 0;
                }
                else
                {
                    _0x2024b9c4 = _0xd9ede90f;
                    
                    
                    var _0xd92966c0 = _0xbc030071._0xd0a42bd4(_0x2024b9c4);
                    var _0xb4f2a897 = _0xbc030071._0xfbf84854(_0xd92966c0);
                    _0xb4f2a897.Add(_0xd92966c0);
                    _0x8940bcf3 = "<color=white>";
                    foreach (var oCur in _0xb4f2a897)
                    {
                        _0x8940bcf3 += oCur.FullName + ";";
                    }

                    _0x8940bcf3 += "</color>";
                    
                    Type _0xf6a058b9 = _0xd92966c0.BaseType;
                    if (_0xf6a058b9.FullName.IndexOf("UnityEngine") == -1)
                    {
                        _0x62b46052 = $"<color=#FFFF00>{_0xf6a058b9.FullName}{_0x3a19ac8a._0x512da7a0("！！！请确定是否不替换父类")}</color>";
                    }
                    else
                    {
                        _0x62b46052 = "<color=white>" + _0xf6a058b9.FullName + "</color>";
                    }

                    
                    if (!string.IsNullOrEmpty(_0xd2953aca))
                    {
                        _0x9e5944e3 = _0x326220c9(_0x2024b9c4, _0xd2953aca);
                        _0x796f97ec = 0;
                        
                        HashSet<string> _0x813f4df8 = new HashSet<string>(_0x9e5944e3);
                        _0xbb64fb1e = _0x8aca82d1(_0xbb64fb1e, _0x813f4df8);
                    }
                }
            }

            
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("子类：");
            _0x2684f217._0x69ee21e9(_0x8940bcf3, -1, 30, 12);
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("父类：");
            _0x2684f217._0x69ee21e9(_0x62b46052, -1, 30, 12);
            EditorGUILayout.EndHorizontal();
            GUILayout.Space(8);
            
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("换成的组件", -1, 40);
            string _0xf84636da = EditorGUILayout.TextField(_0xd2953aca == null ? "" : _0xd2953aca, GUILayout.Width(120), GUILayout.Height(40));
            if (_0xf84636da != _0xd2953aca)
            {
                _0xd2953aca = _0xf84636da;
                _0xcb56ec54 = _0x885b745d(_0xbefdd20a, _0xf84636da);
            }

            
            string[] _0x496394bd = (_0xcb56ec54 != null && _0xcb56ec54.Length > 0) ? _0xcb56ec54 : _0x885b745d(_0xbefdd20a, _0xd2953aca);
            bool _0x22b64880 = _0x496394bd != null && _0x496394bd.Length > 0;
            string[] _0x242dea3e = _0x22b64880 ? _0x96d5fb77(_0x496394bd) : new string[]
            {
                _0x3a19ac8a._0x512da7a0("<无可选组件>")
            };
            if (_0x22b64880 && (_0x0b96acd5 < 0 || _0x0b96acd5 >= _0x496394bd.Length))
            {
                _0x0b96acd5 = 0;
            }

            EditorGUI.BeginDisabledGroup(!_0x22b64880);
            int _0x99b24c09 = EditorGUILayout.Popup(_0x0b96acd5, _0x242dea3e, _0xa0e14099, GUILayout.Width(200), GUILayout.Height(40));
            EditorGUI.EndDisabledGroup();
            if (_0x22b64880)
            {
                if (_0x99b24c09 != _0x0b96acd5 || _0x9e5944e3.Length == 0)
                {
                    string _0x993bc704 = _0x496394bd[_0x99b24c09];
                    if (_0xae6a9025(_0x993bc704))
                    {
                        _0xd2953aca = "";
                        _0xbb64fb1e = "";
                        _0x9e5944e3 = new string[]
                        {
                        };
                        _0x796f97ec = 0;
                        _0x0b96acd5 = _0x99b24c09;
                    }
                    else
                    {
                        _0xd2953aca = _0x993bc704;
                        if (_0x99b24c09 != _0x0b96acd5)
                        {
                            _0xbb64fb1e = "";
                        }

                        _0x0b96acd5 = _0x99b24c09;
                        _0x9e5944e3 = _0x326220c9(_0x2024b9c4, _0xd2953aca);
                        _0x796f97ec = 0;
                    }
                }
            }

            EditorGUILayout.EndHorizontal();
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("保留的属性", -1, 40);
            bool _0xa363a5e3 = _0x9e5944e3 != null && _0x9e5944e3.Length > 0;
            string[] _0x720c242d = _0xa363a5e3 ? _0x9e5944e3 : new string[]
            {
                _0x3a19ac8a._0x512da7a0("<无可保留属性>")
            };
            _0x796f97ec = EditorGUILayout.Popup(_0x796f97ec, _0x720c242d, _0xa0e14099, GUILayout.Width(140), GUILayout.Height(40));
            ;
            EditorGUI.BeginDisabledGroup(!_0xa363a5e3);
            _0x2684f217._0xc3842f89("增加", () =>
            {
                if (_0x9e5944e3 == null || _0x9e5944e3.Length <= 0)
                {
                    return;
                }

                if (_0x796f97ec < 0)
                    _0x796f97ec = 0;
                if (_0x796f97ec >= _0x9e5944e3.Length)
                    _0x796f97ec = _0x9e5944e3.Length - 1;
                if (_0xbb64fb1e == "")
                {
                    _0xbb64fb1e = _0x9e5944e3[_0x796f97ec];
                }
                else
                {
                    _0xbb64fb1e = _0xbb64fb1e + ";" + _0x9e5944e3[_0x796f97ec];
                }
            }, -1, 40);
            EditorGUI.EndDisabledGroup();
            _0x2684f217._0xc3842f89("清空", () =>
            {
                _0xbb64fb1e = "";
            }, -1, 40);
            
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.BeginHorizontal();
            _0x2684f217._0xf9289847("总保留的属性:");
            if (_0xbb64fb1e == "")
            {
                _0x2684f217._0x69ee21e9($"<color=yellow>{_0x3a19ac8a._0x512da7a0("没有设置保留属性")}</color>", 300);
            }
            else
            {
                _0x2684f217._0xf9289847(_0xbb64fb1e, 300);
            }

            EditorGUILayout.EndHorizontal();
            _0x2684f217._0x69ee21e9($"<color=yellow>{_0x3a19ac8a._0x512da7a0("注意：每一步，需要等待刷新完成后再下一步")}</color>", 600);
            _0x2684f217._0xc3842f89("保存引用(第一步)", () =>
            {
                if (string.IsNullOrEmpty(_0x2024b9c4))
                {
                    Debug.LogWarning(_0x3a19ac8a._0x512da7a0("请先选择被换的组件"));
                    return;
                }

                _0xda644433._0xabd2f3f7(_0xbc030071._0xd0a42bd4(_0x2024b9c4));
                Debug.Log(_0x3a19ac8a._0x512da7a0("保存引用完成"));
            }, -1, 40);
            _0x2684f217._0xc3842f89("替换组件(第二步)", () =>
            {
                if (string.IsNullOrEmpty(_0x2024b9c4) || string.IsNullOrEmpty(_0xd2953aca))
                {
                    Debug.LogWarning(_0x3a19ac8a._0x512da7a0("请先选择被换的组件和换成的组件"));
                    return;
                }

                List<string> _0xf21277c2 = _0xbb64fb1e.Split(new char[] { ';' }).ToList();
                _0xda644433._0x8e0e4102(_0xbc030071._0xd0a42bd4(_0x2024b9c4), _0xbc030071._0xd0a42bd4(_0xd2953aca), _0xf21277c2);
                _0xda644433._0x7f4c6ba8(_0xbc030071._0xd0a42bd4(_0x2024b9c4), _0xbc030071._0xd0a42bd4(_0xd2953aca), _0xf21277c2);
                var _0x7973f5e3 = _0xbc030071._0xfbf84854(_0xbc030071._0xd0a42bd4(_0x2024b9c4));
                _0x7973f5e3.Add(_0xbc030071._0xd0a42bd4(_0x2024b9c4));
                _0xda644433._0xf7218621(_0x7973f5e3, _0xbc030071._0xd0a42bd4(_0xd2953aca));
                AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
                Debug.Log(_0x3a19ac8a._0x512da7a0("替换组件完成"));
            }, -1, 40);
            _0x2684f217._0xc3842f89("修复引用(第三步)", () =>
            {
                _0xda644433._0xe1e1b54e();
                Debug.Log(_0x3a19ac8a._0x512da7a0("修复引用完成"));
            }, -1, 40);
            
            EditorGUILayout.EndVertical();
        }

        private void _0x72e9e17f()
        {
            if (_0xe521eccd != null)
            {
                return;
            }

            _0xe521eccd = new List<Type>();
            
            var _0x5861cfed = AppDomain.CurrentDomain.GetAssemblies();
            foreach (var assembly in _0x5861cfed)
            {
                try
                {
                    
                    var _0xa5a16b30 = assembly.GetTypes();
                    
                    foreach (var type in _0xa5a16b30)
                    {
                        if (type.IsSubclassOf(typeof(MonoBehaviour)))
                        {
                            bool _0x982a823e = true;
                            for (int _0x0e0f2232 = 0; _0x0e0f2232 < _0xb37753f1.Length; _0x0e0f2232++)
                            {
                                if (type.FullName.IndexOf(_0xb37753f1[_0x0e0f2232]) != -1)
                                {
                                    _0x982a823e = false;
                                }
                            }

                            if (_0x982a823e)
                            {
                                _0xe521eccd.Add(type);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    
                    continue;
                }
            }

            _0xe521eccd.Sort((_0xe4214838, _0x8ac60e81) => string.Compare(_0x8ac60e81.FullName, _0xe4214838.FullName, StringComparison.Ordinal));
        }

        
        
        
        
        private string[] _0xabb7813c()
        {
            _0x72e9e17f();
            List<string> _0x3d30ddbd = new List<string>();
            for (int _0x3889e12d = 0; _0x3889e12d < _0xe521eccd.Count; _0x3889e12d++)
            {
                _0x3d30ddbd.Add(_0xe521eccd[_0x3889e12d].FullName);
            }

            return _0x3d30ddbd.ToArray();
        }

        private string[] _0x68f6f12a(string _0x232d353a)
        {
            _0x72e9e17f();
            Type _0xe229ecf5 = null;
            for (int _0x3991ec67 = 0; _0x3991ec67 < _0xe521eccd.Count; _0x3991ec67++)
            {
                if (_0xe521eccd[_0x3991ec67].FullName == _0x232d353a)
                {
                    _0xe229ecf5 = _0xe521eccd[_0x3991ec67];
                }
            }

            if (_0xe229ecf5 == null)
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("Type can not find {0}", _0x232d353a));
                return new string[]
                {
                };
            }

            string[] _0x9507e0d6 = _0xbc030071._0x0dd8dd9f(_0xe229ecf5);
            return _0x9507e0d6 == null ? new string[]
            {
            }

            : _0x9507e0d6;
        }

        
        
        
        
        
        private string[] _0x326220c9(string _0x0ec8177b, string _0x647452cc)
        {
            _0x72e9e17f();
            if (string.IsNullOrEmpty(_0x0ec8177b) || string.IsNullOrEmpty(_0x647452cc))
            {
                return new string[]
                {
                };
            }

            Type _0x00284d71 = null;
            Type _0x14d63f87 = null;
            for (int _0xb472e2bd = 0; _0xb472e2bd < _0xe521eccd.Count; _0xb472e2bd++)
            {
                if (_0xe521eccd[_0xb472e2bd].FullName == _0x0ec8177b)
                {
                    _0x00284d71 = _0xe521eccd[_0xb472e2bd];
                }

                if (_0xe521eccd[_0xb472e2bd].FullName == _0x647452cc)
                {
                    _0x14d63f87 = _0xe521eccd[_0xb472e2bd];
                }
            }

            if (_0x00284d71 == null || _0x14d63f87 == null)
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("Type can not find source:{0} aim:{1}", _0x0ec8177b, _0x647452cc));
                return new string[]
                {
                };
            }

            
            Dictionary<string, PropertyInfo> _0x9d2d48dd = new Dictionary<string, PropertyInfo>();
            PropertyInfo[] _0xe15bbe2b = _0x00284d71.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo property in _0xe15bbe2b)
            {
                if (property == null)
                    continue;
                if (property.GetIndexParameters() != null && property.GetIndexParameters().Length > 0)
                    continue;
                
                if (property.GetGetMethod() == null)
                    continue;
                _0x9d2d48dd[property.Name] = property;
            }

            
            List<string> _0x26c0f12b = new List<string>();
            PropertyInfo[] _0x8b660e74 = _0x14d63f87.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo property in _0x8b660e74)
            {
                if (property == null)
                    continue;
                if (property.GetIndexParameters() != null && property.GetIndexParameters().Length > 0)
                    continue;
                
                if (property.GetSetMethod() == null)
                    continue;
                if (!_0x9d2d48dd.TryGetValue(property.Name, out PropertyInfo sourceProperty))
                {
                    continue;
                }

                if (!_0x8e776536(sourceProperty.PropertyType, property.PropertyType))
                {
                    continue;
                }

                _0x26c0f12b.Add(property.Name);
            }

            _0x26c0f12b.Sort(StringComparer.Ordinal);
            return _0x26c0f12b.ToArray();
        }

        private static bool _0x8e776536(Type _0xb371fde3, Type _0x0ab1f794)
        {
            if (_0xb371fde3 == null || _0x0ab1f794 == null)
                return false;
            if (_0x0ab1f794.IsAssignableFrom(_0xb371fde3))
            {
                return true;
            }

            
            if (_0xb371fde3 == typeof(int) && _0x0ab1f794 == typeof(float))
                return true;
            if (_0xb371fde3 == typeof(float) && _0x0ab1f794 == typeof(int))
                return true;
            return false;
        }

        private static string _0x8aca82d1(string _0x9c2a5102, HashSet<string> _0x93d77d7f)
        {
            if (string.IsNullOrEmpty(_0x9c2a5102) || _0x93d77d7f == null || _0x93d77d7f.Count <= 0)
            {
                return "";
            }

            string[] _0xf1f9b441 = _0x9c2a5102.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            List<string> _0xbef26f56 = new List<string>();
            for (int _0xd368fdb7 = 0; _0xd368fdb7 < _0xf1f9b441.Length; _0xd368fdb7++)
            {
                string _0xfc5446f7 = _0xf1f9b441[_0xd368fdb7] == null ? "" : _0xf1f9b441[_0xd368fdb7].Trim();
                if (string.IsNullOrEmpty(_0xfc5446f7))
                    continue;
                if (!_0x93d77d7f.Contains(_0xfc5446f7))
                    continue;
                if (_0xbef26f56.Contains(_0xfc5446f7))
                    continue;
                _0xbef26f56.Add(_0xfc5446f7);
            }

            return string.Join(";", _0xbef26f56);
        }
    }
}