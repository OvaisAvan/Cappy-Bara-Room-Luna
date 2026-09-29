using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Reflection;
using System;
using _0xa07739b8;
using System.Text.RegularExpressions;

public class _0xf95de2f9 : EditorWindow
{
    
    [System.Serializable]
    public class _0x92f6d462
    {
        public Dictionary<string, string> _0x63273710;
    }

    
    
    
    static List<string> _0x45272273 = new List<string>()
    {
        
        "com.unity.modules.assetbundle",
        
        "com.unity.modules.imgui",
        
        "com.unity.modules.screencapture",
        
        "com.unity.modules.unitywebrequest",
        
        "com.unity.modules.unitywebrequestassetbundle",
        
        "com.unity.modules.unitywebrequestaudio",
        
        "com.unity.modules.unitywebrequesttexture",
        
        "com.unity.modules.unitywebrequestwww",
        
        "com.unity.modules.vr",
        
        "com.unity.modules.xr",
    };
    
    
    
    
    
    static List<string> _0x23f07ef4 = new List<string>()
    {
        
        "com.unity.modules.androidjni",
        
        "com.unity.modules.unityanalytics",
        
        "com.unity.modules.wind",
        
        "com.unity.ai.navigation",
        
        "com.unity.ide.rider",
        
        "com.unity.test-framework",
        
        
        
        
        
        "com.unity.modules.cloth",
        
        "com.unity.modules.imageconversion",
        
        "com.unity.modules.terrain",
        
        "com.unity.modules.terrainphysics",
        
        "com.unity.modules.tilemap",
        
        "com.unity.modules.ui",
        
        "com.unity.modules.uielements",
        
        "com.unity.modules.umbra",
    
    
    };
    
    
    
    
    static Dictionary<string, List<string>> _0x64228519 = new Dictionary<string, List<string>>()
    {
        
        {
            "com.unity.textmeshpro",
            new List<string>()
            {
                "TMPro"
            }
        },
        
        {
            "com.unity.collab-proxy",
            new List<string>()
            {
                "Unity.Plastic"
            }
        },
        {
            "com.unity.modules.physics2d",
            new List<string>()
            {
                "Rigidbody2D"
            }
        },
        {
            "com.unity.modules.physics",
            new List<string>()
            {
                "Rigidbody",
                "Physics.Raycast",
                "Collider"
            }
        },
        {
            "com.unity.modules.jsonserialize",
            new List<string>()
            {
                "JsonUtility"
            }
        },
        
        {
            "com.unity.modules.animation",
            new List<string>()
            {
                "Animation",
                "Animator",
                "AnimationState"
            }
        },
        
        {
            "com.unity.modules.vehicles",
            new List<string>()
            {
                "wheelCollider",
                "WheelHit"
            }
        },
    };
    static string _0x685b7742 = Path.Combine(Application.dataPath, "../Packages/manifest.json");
    
    public static void _0xc06e188e()
    {
        _0x16bd684c.Log("删除无用的库");
        _0x92f6d462 _0x2ea9bf89 = _0x9f55440d();
        if (_0x54d4ce71(_0x2ea9bf89))
        {
            _0xfab11faf(_0x2ea9bf89);
            _0xe8c4dbf5(_0x2ea9bf89);
        }
    }

    
    
    
    
    
    public static void _0x861d0736(string _0x1c37fc54, string _0xc0296421)
    {
        _0x92f6d462 _0xac4dd102 = _0x9f55440d();
        if (_0xac4dd102._0x63273710.ContainsKey(_0x1c37fc54))
        {
            _0xac4dd102._0x63273710[_0x1c37fc54] = _0xc0296421;
        }
        else
        {
            _0xac4dd102._0x63273710.Add(_0x1c37fc54, _0xc0296421);
        }

        _0xe8c4dbf5(_0xac4dd102);
    }

    
    
    
    
    public static _0x92f6d462 _0x9f55440d()
    {
        _0x92f6d462 _0xbeb269f4 = new _0x92f6d462();
        _0xbeb269f4._0x63273710 = new Dictionary<string, string>();
        if (File.Exists(_0x685b7742))
        {
            var _0xb139a788 = File.ReadAllLines(_0x685b7742);
            bool _0x346bb36e = false;
            for (int _0x8a2855cf = 0; _0x8a2855cf < _0xb139a788.Length; _0x8a2855cf++)
            {
                string _0xd851af60 = _0xb139a788[_0x8a2855cf];
                if (_0xd851af60.Contains("\"dependencies\":"))
                {
                    _0x346bb36e = true;
                    continue;
                }

                if (_0x346bb36e && _0xd851af60.Trim().StartsWith("}"))
                {
                    _0x346bb36e = false;
                    continue;
                }

                if (!_0x346bb36e)
                    continue;
                if (!_0xd851af60.Contains(":"))
                    continue;
                int _0xefd1489a = _0xd851af60.IndexOf('"');
                int _0xf8012f68 = (_0xefd1489a >= 0) ? _0xd851af60.IndexOf('"', _0xefd1489a + 1) : -1;
                if (_0xefd1489a < 0 || _0xf8012f68 < 0)
                    continue;
                string _0xd7f56abf = _0xd851af60.Substring(_0xefd1489a + 1, _0xf8012f68 - _0xefd1489a - 1);
                int _0xd0400ebb = _0xd851af60.IndexOf('"', _0xf8012f68 + 1);
                int _0x5c95e869 = (_0xd0400ebb >= 0) ? _0xd851af60.IndexOf('"', _0xd0400ebb + 1) : -1;
                if (_0xd0400ebb < 0 || _0x5c95e869 < 0)
                    continue;
                string _0xaec9c799 = _0xd851af60.Substring(_0xd0400ebb + 1, _0x5c95e869 - _0xd0400ebb - 1);
                if (!_0xbeb269f4._0x63273710.ContainsKey(_0xd7f56abf))
                {
                    _0xbeb269f4._0x63273710.Add(_0xd7f56abf, _0xaec9c799);
                }
            }
        }
        else
        {
            Debug.LogError("manifest.json not found!");
        }

        return _0xbeb269f4;
    }

    
    
    
    
    public static void _0xe8c4dbf5(_0x92f6d462 _0x638919e9)
    {
        if (File.Exists(_0x685b7742))
        {
            var _0xe289d0aa = _0x638919e9._0x63273710;
            var _0xee3d9abb = new HashSet<string>();
            var _0x135b63a6 = new List<string>();
            var _0x13bfb433 = File.ReadAllLines(_0x685b7742);
            bool _0xf4e8a957 = false;
            bool _0x78e68907 = false;
            int _0x409c0aa3 = -1;
            for (int _0x71a89cc1 = 0; _0x71a89cc1 < _0x13bfb433.Length; _0x71a89cc1++)
            {
                string _0x05920699 = _0x13bfb433[_0x71a89cc1];
                
                if (_0x05920699.Contains("\"dependencies\":"))
                {
                    _0x78e68907 = true;
                    _0x135b63a6.Add(_0x05920699);
                    _0x409c0aa3 = _0x135b63a6.Count; 
                    continue;
                }

                if (_0x78e68907)
                {
                    if (_0x05920699.Trim().StartsWith("}"))
                    {
                        
                        var _0x5093d2cd = new List<KeyValuePair<string, string>>();
                        foreach (var kvp in _0xe289d0aa)
                        {
                            if (!_0xee3d9abb.Contains(kvp.Key))
                            {
                                _0x5093d2cd.Add(kvp);
                            }
                        }

                        if (_0x5093d2cd.Count > 0)
                        {
                            _0x5093d2cd.Sort((_0xf37e3ac9, _0x9bee216f) => string.CompareOrdinal(_0xf37e3ac9.Key, _0x9bee216f.Key));
                            var _0xeecab4d9 = new List<string>();
                            for (int _0x2bd7de32 = 0; _0x2bd7de32 < _0x5093d2cd.Count; _0x2bd7de32++)
                            {
                                var _0x30d18136 = _0x5093d2cd[_0x2bd7de32];
                                _0xeecab4d9.Add($"    \"{_0x30d18136.Key}\": \"{_0x30d18136.Value}\",");
                                _0xf4e8a957 = true;
                            }

                            if (_0x409c0aa3 < 0)
                            {
                                _0x409c0aa3 = _0x135b63a6.Count;
                            }

                            _0x135b63a6.InsertRange(_0x409c0aa3, _0xeecab4d9);
                        }

                        _0x78e68907 = false;
                        _0x135b63a6.Add(_0x05920699);
                        continue;
                    }

                    
                    if (_0x05920699.Contains(":"))
                    {
                        int _0x28e3f809 = _0x05920699.IndexOf('"');
                        int _0xb7747639 = _0x05920699.IndexOf('"', _0x28e3f809 + 1);
                        if (_0x28e3f809 != -1 && _0xb7747639 != -1)
                        {
                            string _0x59056876 = _0x05920699.Substring(_0x28e3f809 + 1, _0xb7747639 - _0x28e3f809 - 1);
                            if (_0xe289d0aa.TryGetValue(_0x59056876, out string version))
                            {
                                _0xee3d9abb.Add(_0x59056876);
                                
                                string _0x8799b0ff = $"\"{Regex.Escape(_0x59056876)}\":\\s*\"([^\"]+)\"";
                                Match _0x4cc62732 = Regex.Match(_0x05920699, _0x8799b0ff);
                                if (_0x4cc62732.Success && _0x4cc62732.Groups[1].Value != version)
                                {
                                    _0x05920699 = Regex.Replace(_0x05920699, _0x8799b0ff, $"\"{_0x59056876}\": \"{version}\"");
                                    _0xf4e8a957 = true;
                                }

                                _0x135b63a6.Add(_0x05920699);
                            }
                            else
                            {
                                Debug.LogWarning("del package:" + _0x59056876);
                                _0xf4e8a957 = true;
                            }
                        }
                    }

                    continue;
                }

                _0x135b63a6.Add(_0x05920699);
            }

            _0xc7cb97de(_0x135b63a6);
            if (_0xf4e8a957)
            {
                File.WriteAllLines(_0x685b7742, _0x135b63a6);
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("manifest.json 已更新，若是有报错，请根据报错提示还原库！"));
            }
        }
        else
        {
            Debug.LogError(_0x3a19ac8a._0x512da7a0("manifest.json 不存在！"));
        }
    }

    private static void _0xbd148609(List<string> _0xa2c34e2e)
    {
        bool _0x15bbe119 = false;
        int _0x316180af = -1;
        for (int _0xb404ad03 = 0; _0xb404ad03 < _0xa2c34e2e.Count; _0xb404ad03++)
        {
            string _0xd93eb09c = _0xa2c34e2e[_0xb404ad03].Trim();
            if (_0xd93eb09c.EndsWith("{") || _0xd93eb09c.EndsWith("["))
            {
                _0x15bbe119 = true;
                _0x316180af = -1;
            }
            else if (_0xd93eb09c.StartsWith("}") || _0xd93eb09c.StartsWith("]"))
            {
                if (_0x316180af != -1)
                {
                    string _0x44c77a97 = _0xa2c34e2e[_0x316180af];
                    if (Regex.Replace(_0x44c77a97, @"\s+$", "").EndsWith(","))
                    {
                        _0xa2c34e2e[_0x316180af] = Regex.Replace(_0x44c77a97, @",\s*$", "");
                    }
                }

                _0x15bbe119 = false;
                _0x316180af = -1;
            }
            else if (_0xd93eb09c.Length > 0 && _0x15bbe119)
            {
                _0x316180af = _0xb404ad03;
            }
        }
    }

    
    
    
    private static void _0xc7cb97de(List<string> _0x4e341664)
    {
        bool _0x164ddb4d = false;
        int _0x9586ab72 = -1;
        for (int _0x426ea66c = 0; _0x426ea66c < _0x4e341664.Count; _0x426ea66c++)
        {
            string _0x36c516bc = _0x4e341664[_0x426ea66c];
            string _0x3e892c0c = _0x36c516bc.Trim();
            if (!_0x164ddb4d)
            {
                if (_0x3e892c0c.Contains("\"dependencies\":"))
                {
                    _0x164ddb4d = true;
                    _0x9586ab72 = -1;
                }

                continue;
            }

            if (_0x3e892c0c.StartsWith("}"))
            {
                if (_0x9586ab72 != -1)
                {
                    string _0x88f4ed6e = _0x4e341664[_0x9586ab72];
                    if (Regex.Replace(_0x88f4ed6e, @"\s+$", "").EndsWith(","))
                    {
                        _0x4e341664[_0x9586ab72] = Regex.Replace(_0x88f4ed6e, @",\s*$", "");
                    }
                }

                _0x164ddb4d = false;
                _0x9586ab72 = -1;
                continue;
            }

            if (_0x3e892c0c.Length == 0)
                continue;
            if (_0x3e892c0c.StartsWith("\"") && _0x3e892c0c.Contains("\":"))
            {
                _0x9586ab72 = _0x426ea66c;
            }
        }
    }

    public static bool _0xd60b0a31(string _0x0aa076fa, string _0x594d47d8, string _0xb40bce33)
    {
        string _0x4d5435f8 = _0x0aa076fa + "/Packages/manifest.json";
        
        string _0xdca0d4f4 = File.ReadAllText(_0x4d5435f8);
        string _0x6b7d957f = _0xdca0d4f4;
        if (_0xb40bce33 != "")
        {
            
            if (_0x6b7d957f.IndexOf(_0x594d47d8) > 0)
            {
                
                string _0x05df114e = $"\"{Regex.Escape(_0x594d47d8)}\":\\s*\"[^\"]+\"";
                string _0x6421c3a5 = $"\"{_0x594d47d8}\": \"{_0xb40bce33}\"";
                _0x6b7d957f = Regex.Replace(_0x6b7d957f, _0x05df114e, _0x6421c3a5);
            }
            else
            {
                _0x6b7d957f = Regex.Replace(_0x6b7d957f, "\"dependencies\":\\s*{", $"\"dependencies\": {{\n    \"{_0x594d47d8}\": \"{_0xb40bce33}\",");
            }
        }
        else
        {
            string _0xd7e7b871 = $"\"{Regex.Escape(_0x594d47d8)}\":\\s*\"[^\"]+\"";
            string _0x90e3079e = Regex.Replace(_0x6b7d957f, $"(.*{_0xd7e7b871}\\s*,\\s*\\n\\s*)|({_0xd7e7b871}\\s*,\\s*\\n\\s*)", "    ");
            _0x6b7d957f = _0x90e3079e;
        }

        _0x6b7d957f = _0x6b7d957f.Replace("\r\n", "\n");
        if (_0xdca0d4f4 != _0x6b7d957f)
        {
            
            using (StreamWriter _0x641973c6 = new StreamWriter(_0x4d5435f8, false))
            {
                _0x641973c6.Write(_0x6b7d957f);
            }

            return true;
        }

        return false;
    }

    
    
    
    
    
    
    private static bool _0x54d4ce71(_0x92f6d462 _0x0e8d3b3c)
    {
        var _0x5936ccb2 = _0x0e8d3b3c._0x63273710;
        foreach (var item in _0x45272273)
        {
            if (_0x5936ccb2.TryGetValue(item, out string version))
            {
                return true;
            }
        }

        return false;
    }

    
    
    
    
    private static void _0xfab11faf(_0x92f6d462 _0xe404309b)
    {
        var _0x2304f1b7 = _0xe404309b._0x63273710;
        for (int _0x1d78091d = 0; _0x1d78091d < _0x45272273.Count; _0x1d78091d++)
        {
            if (_0x2304f1b7.TryGetValue(_0x45272273[_0x1d78091d], out string version))
            {
                _0x2304f1b7.Remove(_0x45272273[_0x1d78091d]);
            }
        }

        for (int _0x5472b40c = 0; _0x5472b40c < _0x23f07ef4.Count; _0x5472b40c++)
        {
            if (_0x2304f1b7.TryGetValue(_0x23f07ef4[_0x5472b40c], out string version))
            {
                _0x2304f1b7.Remove(_0x23f07ef4[_0x5472b40c]);
            }
        }

        
        var _0xd8beb8df = Directory.GetFiles(Application.dataPath, "*.cs", SearchOption.AllDirectories);
        
        List<string> _0xbc796284 = new List<string>();
        for (int _0xa2748160 = 0; _0xa2748160 < _0xd8beb8df.Length; _0xa2748160++)
        {
            if (_0xd8beb8df[_0xa2748160].Contains("DelPackage"))
            {
                continue;
            }

            _0xbc796284.Add(File.ReadAllText(_0xd8beb8df[_0xa2748160]));
        }

        foreach (var item in _0x64228519)
        {
            var _0x6a85db98 = item.Value;
            bool _0xb475343a = true;
            for (int _0xb6aee0ba = 0; _0xb6aee0ba < _0xbc796284.Count; _0xb6aee0ba++)
            {
                for (int _0xd40260ff = 0; _0xd40260ff < _0x6a85db98.Count; _0xd40260ff++)
                {
                    if (_0xbc796284[_0xb6aee0ba].Contains(_0x6a85db98[_0xd40260ff]))
                    {
                        _0xb475343a = false;
                        break;
                    }
                }

                if (!_0xb475343a)
                {
                    break;
                }
            }

            if (_0xb475343a)
            {
                _0x2304f1b7.Remove(item.Key);
            }
        }
    }
}