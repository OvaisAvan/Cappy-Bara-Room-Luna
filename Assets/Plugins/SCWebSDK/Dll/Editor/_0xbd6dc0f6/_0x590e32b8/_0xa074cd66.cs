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
using SC;
using System.IO.Compression;
using System.Text.RegularExpressions;

namespace _0xa07739b8
{
    public partial class _0xa7126670
    {
        
        
        
        public enum _0x28d229a1
        {
            [global::UnityEngine.InspectorName("GE")]
            _0xde3f8977, 
            [global::UnityEngine.InspectorName("GT")]
            _0x72aeec1f, 
            [global::UnityEngine.InspectorName("LE")]
            _0x5065eb26, 
            [global::UnityEngine.InspectorName("LT")]
            _0xab64f697, 
            [global::UnityEngine.InspectorName("EQ")]
            _0xd5504db3
        }

        
        
        
        public enum _0xadf52402
        {
            [global::UnityEngine.InspectorName("Error")]
            _0x88ea095c,
            [global::UnityEngine.InspectorName("Warning")]
            _0xb421f1e0,
            [global::UnityEngine.InspectorName("ErrorAndComment")]
            _0xec72a7d5,
            [global::UnityEngine.InspectorName("Replace")]
            _0x62d343f0
        }

        public class _0x5568808b
        {
            public string _0x148c0232;
            public string _0x35c749b8;
            public _0x28d229a1 _0x20a38b25;
            public string _0xce37ab29; 
            public bool _0x68f9f66b; 
            public _0x5568808b(string _0xd2be5b38, string _0x2621e5f9, _0x28d229a1 _0x42c4452c, string _0xdf767593 = null, bool _0xf1f1aa51 = false)
            {
                this._0x148c0232 = _0xd2be5b38;
                this._0x35c749b8 = _0x2621e5f9;
                this._0x20a38b25 = _0x42c4452c;
                this._0xce37ab29 = _0xdf767593;
                this._0x68f9f66b = _0xf1f1aa51;
            }
        }

        
        
        
        public class _0xda2835af
        {
            
            public string _0xfb6e8fac;
            
            public string _0x3614a40d;
            
            public _0xadf52402 _0x0cfe7dbe;
            
            public string _0x597f30cd;
            public _0xda2835af(string _0xc9464d93, string _0xfd7f8641, _0xadf52402 _0x9ab960c5 = _0xadf52402._0x88ea095c, string _0x4538344b = null)
            {
                this._0xfb6e8fac = _0xc9464d93;
                this._0x3614a40d = _0xfd7f8641;
                this._0x0cfe7dbe = _0x9ab960c5;
                this._0x597f30cd = _0x4538344b;
            }
        }

        
        public static List<_0x5568808b> _0x958e67c7 = new List<_0x5568808b>
        {
            
            new _0x5568808b("Spine", "3.8.0", _0x28d229a1._0xde3f8977, "Spine/package.json", false),
            
            new _0x5568808b("com.unity.cinemachine", "2.10.1", _0x28d229a1._0x5065eb26, null, true),
        };
        
        public static List<string> _0xc3f0faf9 = new List<string>
        {
            "com.unity.ai.navigation",
            "com.unity.modules.ai",
        };
        
        public static List<_0xda2835af> _0x012cca0c = new List<_0xda2835af>
        {
            
            new _0xda2835af(@"\.parameters", "禁止使用 Animator.parameters ，请使用Anim.SetBool()Anim.setTrigger()代替", _0xadf52402._0x88ea095c),
            
            new _0xda2835af(@"\.CrossFadeInFixedTime", "Luna 不支持 CrossFadeInFixedTime，请使用常规 Transition 或 SetTrigger 替代", _0xadf52402._0x88ea095c),
            
            
            new _0xda2835af(@"\bFindObjectOfType\s*<\s*([^>]+)\s*>\s*\(\s*([^)]+)\s*\)", "Luna 不支持带参数的 FindObjectOfType<T>(...)，已自动替换为 UnityExtension.FindObjectOfTypeInc 版本", _0xadf52402._0x62d343f0, "UnityExtension.FindObjectOfTypeInc<$1>($2)"),
            
            new _0xda2835af(@"\bFindObjectOfType\s*\(\s*(.*?)\s*,\s*([^)]+)\s*\)", "Luna 不支持带参数的 FindObjectOfType(..., ...)，已自动替换为 UnityExtension.FindObjectOfTypeInc 版本", _0xadf52402._0x62d343f0, "UnityExtension.FindObjectOfTypeInc($1, $2)"),
            
            new _0xda2835af(@"\b(UnityEngine\.)?JsonUtility\b", "禁止使用 UnityEngine.JsonUtility，Luna 不支持，请使用其他方案(如 Newtonsoft.Json)", _0xadf52402._0x88ea095c),
            
            new _0xda2835af(@"\bDefaultExecutionOrder\b", "DefaultExecutionOrder 特性在 Luna 环境下失效", _0xadf52402._0xb421f1e0),
        };
        
        public static List<string> _0xd5ea146b = new List<string>
        {
            "UIRoot",
        };
        
        
        
        public static int _0xe6f1034c(bool _0x91ba930b = true)
        {
            string _0x685081ae = Path.GetDirectoryName(Application.dataPath);
            _0xf95de2f9._0x92f6d462 _0xe4dad37c = _0xf95de2f9._0x9f55440d();
            bool _0x2f380f76 = false;
            int _0x4ff2aaea = 0;
            
            foreach (var forbidden in _0xc3f0faf9)
            {
                if (_0xe4dad37c._0x63273710.ContainsKey(forbidden))
                {
                    _0x16bd684c._0xe8f5e459("[第三方检测] 项目中禁止使用包: {0} (发现于 manifest.json)", forbidden);
                    _0x4ff2aaea++;
                }
            }

            
            foreach (_0x5568808b config in _0x958e67c7)
            {
                if (string.IsNullOrEmpty(config._0xce37ab29))
                {
                    
                    if (_0xe4dad37c._0x63273710.TryGetValue(config._0x148c0232, out string currentVersion))
                    {
                        if (!_0xb4f131e4(currentVersion, config._0x35c749b8, config._0x20a38b25))
                        {
                            if (config._0x68f9f66b)
                            {
                                _0xe4dad37c._0x63273710[config._0x148c0232] = config._0x35c749b8;
                                _0x2f380f76 = true;
                                _0x16bd684c._0x181d6923("[第三方检测] {0} 版本 {1} 不满足 {2} {3}，已强制更新至 {3}", config._0x148c0232, currentVersion, config._0x20a38b25.ToString(), config._0x35c749b8);
                            }
                            else
                            {
                                _0x16bd684c._0xe8f5e459("[第三方检测] {0} 版本 {1} 不满足 {2} {3}", config._0x148c0232, currentVersion, config._0x20a38b25.ToString(), config._0x35c749b8);
                                _0x4ff2aaea++;
                            }
                        }
                    }
                }
                else
                {
                    
                    string[] _0x97470117 = Directory.GetFiles(Application.dataPath, "package.json", SearchOption.AllDirectories);
                    bool _0x9b3da211 = false;
                    foreach (var file in _0x97470117)
                    {
                        string _0xc355a307 = file.Replace("\\", "/");
                        if (_0xc355a307.Contains(config._0xce37ab29))
                        {
                            _0x9b3da211 = true;
                            string _0xc2ac614f = File.ReadAllText(file);
                            
                            Match _0x6a7ca714 = Regex.Match(_0xc2ac614f, "\"version\"\\s*:\\s*\"([^\"]+)\"");
                            if (_0x6a7ca714.Success)
                            {
                                string _0xaadbd826 = _0x6a7ca714.Groups[1].Value;
                                if (!_0xb4f131e4(_0xaadbd826, config._0x35c749b8, config._0x20a38b25))
                                {
                                    _0x16bd684c._0xe8f5e459("[第三方检测] 本地包 {0} (路径: {1}) 版本 {2} 不满足 {3} {4}", config._0x148c0232, file, _0xaadbd826, config._0x20a38b25.ToString(), config._0x35c749b8);
                                    _0x4ff2aaea++;
                                }
                            }

                            break;
                        }
                    }
                }
            }

            
            if (_0xc3f0faf9.Count > 0)
            {
                string[] _0xf7782059 = Directory.GetFiles(Application.dataPath, "package.json", SearchOption.AllDirectories);
                foreach (var file in _0xf7782059)
                {
                    string _0x57b4fac7 = File.ReadAllText(file);
                    Match _0x83c7df78 = Regex.Match(_0x57b4fac7, "\"name\"\\s*:\\s*\"([^\"]+)\"");
                    if (_0x83c7df78.Success)
                    {
                        string _0x31324080 = _0x83c7df78.Groups[1].Value;
                        foreach (var forbidden in _0xc3f0faf9)
                        {
                            if (_0x31324080 == forbidden || file.Replace("\\", "/").Contains("/" + forbidden + "/"))
                            {
                                _0x16bd684c._0xe8f5e459("[第三方检测] 项目中禁止使用包: {0} (发现于本地路径: {1})", forbidden, file);
                                _0x4ff2aaea++;
                            }
                        }
                    }
                }
            }

            if (_0x2f380f76)
            {
                _0xf95de2f9._0xe8c4dbf5(_0xe4dad37c);
                if (_0x91ba930b)
                    AssetDatabase.Refresh();
            }

            return _0x4ff2aaea;
        }

        
        
        
        public static int _0xfd5217a2(bool _0x64609bb4 = true)
        {
            if (_0x012cca0c == null || _0x012cca0c.Count == 0)
                return 0;
            string[] _0xbf8aa183 = AssetDatabase.FindAssets("t:Script");
            int _0xff1ceb53 = 0;
            int _0xdb22e326 = 0;
            foreach (string guid in _0xbf8aa183)
            {
                string _0xf3b216f1 = AssetDatabase.GUIDToAssetPath(guid);
                if (!_0xf3b216f1.StartsWith("Assets/"))
                    continue;
                if (_0xf3b216f1.Contains("/Editor/") || _0xf3b216f1.Contains("\\Editor\\") || _0xf3b216f1.Contains("/Plugins/"))
                    continue;
                if (_0xf3b216f1.Contains("LunaMgr.check.cs"))
                    continue; 
                string _0x3322e423 = File.ReadAllText(_0xf3b216f1);
                bool _0x21a5af07 = false;
                string _0x04baadad = _0x3322e423;
                foreach (_0xda2835af config in _0x012cca0c)
                {
                    
                    string _0xf823b701 = @"(?m)^.*" + config._0xfb6e8fac + @".*$";
                    _0x04baadad = Regex.Replace(_0x04baadad, _0xf823b701, _0x84b6a8ac =>
                    {
                        string _0x7316354d = _0x84b6a8ac.Value;
                        
                        int _0x0bf08ba8 = Regex.Match(_0x7316354d, config._0xfb6e8fac).Index;
                        int _0x0fc64d5d = _0x7316354d.IndexOf("//");
                        if (_0x0fc64d5d != -1 && _0x0fc64d5d < _0x0bf08ba8)
                        {
                            return _0x7316354d; 
                        }

                        switch (config._0x0cfe7dbe)
                        {
                            case _0xadf52402._0xb421f1e0:
                                _0x16bd684c._0x181d6923("[禁用接口检测] 脚本: {0}, 模式: {1}, 原因: {2}", Path.GetFileName(_0xf3b216f1), config._0xfb6e8fac, config._0x3614a40d);
                                _0xff1ceb53++;
                                return _0x7316354d;
                            case _0xadf52402._0x88ea095c:
                                _0x16bd684c._0xe8f5e459("[禁用接口检测] 脚本: {0}, 模式: {1}, 原因: {2}", Path.GetFileName(_0xf3b216f1), config._0xfb6e8fac, config._0x3614a40d);
                                _0xdb22e326++;
                                return _0x7316354d;
                            case _0xadf52402._0xec72a7d5:
                                _0x16bd684c._0x181d6923("[禁用接口检测] 脚本: {0}, 模式: {1}, 原因: {2}", Path.GetFileName(_0xf3b216f1), config._0xfb6e8fac, config._0x3614a40d);
                                _0xff1ceb53++;
                                _0x21a5af07 = true;
                                
                                var _0x0ab58ee8 = Regex.Match(_0x7316354d, config._0xfb6e8fac);
                                return _0x7316354d.Substring(0, _0x0ab58ee8.Index) + "/* [Forbidden API] */ // " + _0x7316354d.Substring(_0x0ab58ee8.Index);
                            case _0xadf52402._0x62d343f0:
                                if (!string.IsNullOrEmpty(config._0x597f30cd))
                                {
                                    
                                    string _0xa7a0e2fe = Regex.Replace(_0x7316354d, config._0xfb6e8fac, config._0x597f30cd);
                                    if (_0xa7a0e2fe != _0x7316354d)
                                    {
                                        _0x16bd684c._0x181d6923("[禁用接口检测] 脚本: {0}, 模式: {1}, 原因: {2}", Path.GetFileName(_0xf3b216f1), config._0xfb6e8fac, config._0x3614a40d);
                                        _0xff1ceb53++;
                                        _0x21a5af07 = true;
                                        return _0xa7a0e2fe;
                                    }
                                }

                                return _0x7316354d;
                            default:
                                return _0x7316354d;
                        }
                    });
                }

                if (_0x21a5af07)
                {
                    File.WriteAllText(_0xf3b216f1, _0x04baadad);
                }
            }

            if (_0xdb22e326 > 0 || _0xff1ceb53 > 0)
            {
                _0x16bd684c._0x181d6923("[禁用接口检测] 完成。发现 {0} 处错误， {1} 处警告（含自动替换）。", _0xdb22e326.ToString(), _0xff1ceb53.ToString());
                if (_0x64609bb4)
                    AssetDatabase.Refresh();
            }

            return _0xdb22e326;
        }

        
        
        
        public static int _0x7ed99cc8(bool _0xbef2a7a8 = true)
        {
            if (_0xd5ea146b == null || _0xd5ea146b.Count == 0)
                return 0;
            string[] _0xae65ee24 = AssetDatabase.FindAssets("t:Script");
            int _0xa22a663f = 0;
            foreach (string guid in _0xae65ee24)
            {
                string _0x050534b1 = AssetDatabase.GUIDToAssetPath(guid);
                if (!_0x050534b1.StartsWith("Assets/"))
                    continue;
                if (_0x050534b1.Contains("/Editor/") || _0x050534b1.Contains("\\Editor\\") || _0x050534b1.Contains("/Plugins/"))
                    continue;
                if (_0x050534b1.Contains("LunaMgr.check.cs"))
                    continue;
                MonoScript _0x6ed7a689 = AssetDatabase.LoadAssetAtPath<MonoScript>(_0x050534b1);
                if (_0x6ed7a689 == null)
                    continue;
                
                string _0x4770f41f = File.ReadAllText(_0x050534b1);
                foreach (var forbiddenName in _0xd5ea146b)
                {
                    
                    string _0x5ca891ff = @"\b(class|struct|interface|enum)\s+" + forbiddenName + @"\b";
                    if (Regex.IsMatch(_0x4770f41f, _0x5ca891ff))
                    {
                        string[] _0x10b8e066 = _0x4770f41f.Split('\n');
                        bool _0xf7155c28 = false;
                        foreach (var line in _0x10b8e066)
                        {
                            var _0x146d6158 = Regex.Match(line, _0x5ca891ff);
                            if (_0x146d6158.Success)
                            {
                                int _0x58a8047f = line.IndexOf("//");
                                if (_0x58a8047f == -1 || _0x58a8047f > _0x146d6158.Index)
                                {
                                    _0xf7155c28 = true;
                                    break;
                                }
                            }
                        }

                        if (_0xf7155c28)
                        {
                            _0x16bd684c._0xe8f5e459("[禁用类名检测] 发现禁用的类定义: {0} (路径: {1})", forbiddenName, _0x050534b1);
                            _0xa22a663f++;
                        }
                    }
                }
            }

            if (_0xa22a663f > 0)
            {
                _0x16bd684c._0x181d6923("[禁用类名检测] 完成。共发现 {0} 个禁用类定义。", _0xa22a663f.ToString());
            }
            else if (_0xbef2a7a8)
            {
                _0x16bd684c.Log("[禁用类名检测] 完成。未发现禁用类定义。");
            }

            return _0xa22a663f;
        }

        private static bool _0xb4f131e4(string _0xc8f3cdf0, string _0xb0bffe15, _0x28d229a1 _0xcab2247a)
        {
            
            string CleanVersion(string _0x2b93fd41)
            {
                if (string.IsNullOrEmpty(_0x2b93fd41))
                    return "0.0.0";
                
                if (_0x2b93fd41.Contains(":") || _0x2b93fd41.Contains("/"))
                    return "999.999.999";
                Match _0x85b396a8 = Regex.Match(_0x2b93fd41, @"^(\d+\.\d+\.\d+)");
                return _0x85b396a8.Success ? _0x85b396a8.Groups[1].Value : _0x2b93fd41;
            }

            try
            {
                Version _0xf67d3320 = new Version(CleanVersion(_0xc8f3cdf0));
                Version _0x24c12a0d = new Version(CleanVersion(_0xb0bffe15));
                int _0xdcf6e8c2 = _0xf67d3320.CompareTo(_0x24c12a0d);
                switch (_0xcab2247a)
                {
                    case _0x28d229a1._0xde3f8977:
                        return _0xdcf6e8c2 >= 0;
                    case _0x28d229a1._0x72aeec1f:
                        return _0xdcf6e8c2 > 0;
                    case _0x28d229a1._0x5065eb26:
                        return _0xdcf6e8c2 <= 0;
                    case _0x28d229a1._0xab64f697:
                        return _0xdcf6e8c2 < 0;
                    case _0x28d229a1._0xd5504db3:
                        return _0xdcf6e8c2 == 0;
                    default:
                        return true;
                }
            }
            catch
            {
                
                int _0xc8ff9c42 = string.Compare(_0xc8f3cdf0, _0xb0bffe15);
                switch (_0xcab2247a)
                {
                    case _0x28d229a1._0xde3f8977:
                        return _0xc8ff9c42 >= 0;
                    case _0x28d229a1._0x72aeec1f:
                        return _0xc8ff9c42 > 0;
                    case _0x28d229a1._0x5065eb26:
                        return _0xc8ff9c42 <= 0;
                    case _0x28d229a1._0xab64f697:
                        return _0xc8ff9c42 < 0;
                    case _0x28d229a1._0xd5504db3:
                        return _0xc8ff9c42 == 0;
                    default:
                        return true;
                }
            }
        }

        
        
        
        public static int _0x9cf3ba7a(bool _0xd8b3eca3 = true, bool _0x9bc4587e = true)
        {
            string[] _0x9f79f8e9 = AssetDatabase.FindAssets("t:Script");
            int _0x0a685a3c = 0;
            int _0x3279eaa2 = 0;
            int _0x8f60c0d4 = 0;
            foreach (string guid in _0x9f79f8e9)
            {
                string _0xc3e2f37e = AssetDatabase.GUIDToAssetPath(guid);
                
                if (!_0xc3e2f37e.StartsWith("Assets/"))
                    continue;
                if (_0xc3e2f37e.Contains("/Editor/") || _0xc3e2f37e.Contains("\\Editor\\"))
                    continue;
                MonoScript _0xf954df31 = AssetDatabase.LoadAssetAtPath<MonoScript>(_0xc3e2f37e);
                if (_0xf954df31 == null)
                    continue;
                Type _0x58e3e0c7 = _0xf954df31.GetClass();
                
                if (_0x58e3e0c7 == null || !typeof(MonoBehaviour).IsAssignableFrom(_0x58e3e0c7))
                    continue;
                string _0xe6c27a4d = File.ReadAllText(_0xc3e2f37e);
                
                string _0xe5c7a57a = @"(?m)^(.*)(Invoke(?:Repeating)?\s*\(\s*""([^""]+)"")";
                bool _0x12a9ba99 = false;
                string _0x42c14b66 = Regex.Replace(_0xe6c27a4d, _0xe5c7a57a, _0x3d192498 =>
                {
                    string _0xbb706cc2 = _0x3d192498.Groups[1].Value;
                    string _0xa134f8bc = _0x3d192498.Groups[2].Value;
                    string _0x0f6c7c46 = _0x3d192498.Groups[3].Value;
                    
                    if (_0xbb706cc2.TrimStart().StartsWith("//") || _0xbb706cc2.TrimStart().StartsWith("/*") || _0xbb706cc2.Contains("/*"))
                        return _0x3d192498.Value;
                    
                    if (_0xbb706cc2.TrimEnd().EndsWith("."))
                        return _0x3d192498.Value;
                    
                    
                    
                    MethodInfo _0x14d23b8f = _0x58e3e0c7.GetMethod(_0x0f6c7c46, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
                    if (_0x14d23b8f == null)
                    {
                        
                        Type _0xc3311241 = _0x58e3e0c7.BaseType;
                        while (_0xc3311241 != null && _0x14d23b8f == null)
                        {
                            _0x14d23b8f = _0xc3311241.GetMethod(_0x0f6c7c46, BindingFlags.Instance | BindingFlags.NonPublic);
                            _0xc3311241 = _0xc3311241.BaseType;
                        }
                    }

                    if (_0x14d23b8f == null)
                    {
                        _0x0a685a3c++;
                        _0x12a9ba99 = true;
                        _0x8f60c0d4++;
                        _0x16bd684c._0x181d6923("[Invoke检查] 脚本: {0}, 类: {1}, 找不到函数: \"{2}\" (路径: {3}) - 已自动注释", Path.GetFileName(_0xc3e2f37e), _0x58e3e0c7.Name, _0x0f6c7c46, _0xc3e2f37e);
                        return _0xbb706cc2 + "/* [Invoke Error] */ // " + _0xa134f8bc;
                    }

                    _0x3279eaa2++;
                    return _0x3d192498.Value;
                });
                if (_0x12a9ba99)
                {
                    File.WriteAllText(_0xc3e2f37e, _0x42c14b66);
                }
            }

            if (_0x0a685a3c == 0)
            {
                if (_0x9bc4587e)
                    _0x16bd684c.Log("[Invoke检查] 完成。共检查了 {0} 个脚本中的 Invoke 调用，未发现异常。", _0x3279eaa2.ToString());
            }
            else
            {
                _0x16bd684c._0x181d6923("[Invoke检查] 完成。共发现 {0} 处非法的 Invoke 调用，已自动注释修复 {1} 处！", _0x0a685a3c.ToString(), _0x8f60c0d4.ToString());
                if (_0xd8b3eca3)
                    AssetDatabase.Refresh();
            }

            return _0x0a685a3c;
        }

        
        
        
        public static void _0x0a97b010(bool _0xe43e051b = true, bool _0x2c296f54 = true)
        {
            string[] _0x840d963e = AssetDatabase.FindAssets("t:AudioClip");
            int _0x8a2ba035 = 0;
            int _0x0b6ee003 = _0x840d963e.Length;
            foreach (string guid in _0x840d963e)
            {
                string _0x755f766c = AssetDatabase.GUIDToAssetPath(guid);
                if (!_0x755f766c.StartsWith("Assets/"))
                    continue;
                AudioImporter _0x1ed50e6e = AssetImporter.GetAtPath(_0x755f766c) as AudioImporter;
                if (_0x1ed50e6e == null)
                    continue;
                bool _0xd246b84f = false;
                
                AudioImporterSampleSettings _0xbade26eb = _0x1ed50e6e.defaultSampleSettings;
                if (_0xbade26eb.loadType != AudioClipLoadType.DecompressOnLoad)
                {
                    _0xbade26eb.loadType = AudioClipLoadType.DecompressOnLoad;
                    _0x1ed50e6e.defaultSampleSettings = _0xbade26eb;
                    _0xd246b84f = true;
                }

                
                AudioImporterSampleSettings _0x9988a270 = _0x1ed50e6e.GetOverrideSampleSettings("WebGL");
                if (_0x9988a270.loadType != AudioClipLoadType.DecompressOnLoad)
                {
                    _0x9988a270.loadType = AudioClipLoadType.DecompressOnLoad;
                    _0x1ed50e6e.SetOverrideSampleSettings("WebGL", _0x9988a270);
                    _0xd246b84f = true;
                }

                if (_0xd246b84f)
                {
                    _0x1ed50e6e.SaveAndReimport();
                    _0x8a2ba035++;
                    _0x16bd684c._0x181d6923("[音效自动修复] 已将 {0} 修正为 Decompress OnLoad (路径: {1})", Path.GetFileName(_0x755f766c), _0x755f766c);
                }
            }

            if (_0x8a2ba035 == 0)
            {
                if (_0x2c296f54)
                    _0x16bd684c.Log("[音效检查] 完成。共扫描了 {0} 个音频文件，全部符合要求。", _0x0b6ee003.ToString());
            }
            else
            {
                _0x16bd684c._0x181d6923("[音效检查] 完成。共发现并自动修复了 {0} 个音频文件。", _0x8a2ba035.ToString());
                if (_0xe43e051b)
                    AssetDatabase.Refresh();
            }
        }

        
        
        
        public static bool _0x21d4ad11()
        {
            int _0x22ed37a3 = 0;
            try
            {
                EditorUtility.DisplayProgressBar("Luna全量检测", "1/6 检测第三方库版本...", 0.1f);
                _0x22ed37a3 += _0xe6f1034c(false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "2/6 检测禁用接口调用...", 0.25f);
                _0x22ed37a3 += _0xfd5217a2(false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "3/6 检测禁用类名...", 0.4f);
                _0x22ed37a3 += _0x7ed99cc8(false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "4/6 检测 Invoke 有效性...", 0.55f);
                _0x9cf3ba7a(false, false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "5/6 检测 Shader 规范...", 0.7f);
                _0x22ed37a3 += _0x973cae9a(false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "6/6 检测并修复音效压缩...", 0.9f);
                _0x0a97b010(false, false);
                EditorUtility.DisplayProgressBar("Luna全量检测", "正在完成检测并刷新...", 1.0f);
                AssetDatabase.Refresh();
                if (_0x22ed37a3 > 0)
                {
                    _0x16bd684c._0xe8f5e459("[Luna全量检测] 检测完成，共发现 {0} 处错误！请先修复错误再继续。", _0x22ed37a3.ToString());
                }
                else
                {
                    _0x16bd684c.Log("[Luna全量检测] 所有检测项已执行完毕，未发现阻塞性错误。");
                }
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[Luna全量检测] 执行出错: {0}", e.Message);
                _0x22ed37a3++;
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }

            return _0x22ed37a3 == 0;
        }

        
        
        
        public static void _0xeb460c78()
        {
            if (_0xf43a6983._0xf21e956a())
                return;
            string _0xa2675dbe = Path.Combine(Path.GetDirectoryName(Application.dataPath), "Temp");
            if (!Directory.Exists(_0xa2675dbe))
                Directory.CreateDirectory(_0xa2675dbe);
            string _0xe0b1959f = Path.Combine(_0xa2675dbe, "SCLunaFullCheckFlag.txt");
            string _0xa87c190b = _0xf43a6983._0xc3810270;
            bool _0x83222b8d = true;
            if (File.Exists(_0xe0b1959f))
            {
                if (_0xf43a6983._0x4d509f4c())
                {
                    _0x83222b8d = false;
                }
                else
                {
                    string _0x33f09995 = File.ReadAllText(_0xe0b1959f);
                    if (_0x33f09995 == _0xa87c190b)
                    {
                        _0x83222b8d = false;
                    }
                }
            }

            if (_0x83222b8d)
            {
                _0x16bd684c.Log("[Luna自动检测] SDK首次加载，开始执行全量检测...");
                _0x21d4ad11();
                File.WriteAllText(_0xe0b1959f, _0xa87c190b);
            }
        }
    }
}