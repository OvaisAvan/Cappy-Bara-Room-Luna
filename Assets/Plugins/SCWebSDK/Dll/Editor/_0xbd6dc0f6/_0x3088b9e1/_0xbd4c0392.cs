using UnityEngine;
using UnityEditor;
using System;
using System.IO;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace _0xa07739b8
{
    public partial class _0xa7126670
    {
        public enum _0x88a6b2d4
        {
            [global::UnityEngine.InspectorName("Warning")]
            _0x9d428f66,
            [global::UnityEngine.InspectorName("Error")]
            _0x647121a4
        }

        
        
        
        public class _0xb1d7bed8
        {
            public string _0xd4bde6ad;
            public string _0xb9af1e30;
            public string _0x09556e1a;
            public _0x88a6b2d4 _0x225b99fa;
            public bool _0x4eb1b431;
            public RegexOptions _0x76d728b0;
            public _0xb1d7bed8(string _0xdf8eafb2, string _0x845af6aa, string _0x64a84883, _0x88a6b2d4 _0x9e67887a, bool _0x5bd5811b = true)
            {
                this._0xd4bde6ad = _0xdf8eafb2;
                this._0xb9af1e30 = _0x845af6aa;
                this._0x09556e1a = _0x64a84883;
                this._0x225b99fa = _0x9e67887a;
                this._0x4eb1b431 = _0x5bd5811b;
                this._0x76d728b0 = RegexOptions.IgnoreCase | RegexOptions.Multiline;
            }
        }

        
        
        
        public static List<_0xb1d7bed8> _0x9d1cf136 = new List<_0xb1d7bed8>
        {
            new _0xb1d7bed8("PackageRequirements", @"\bPackageRequirements\b", "Playworks 不支持 PackageRequirements block。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("RenderPipeline Tag", @"""RenderPipeline""\s*=", "Playworks 不支持 RenderPipeline SubShader tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("DisableBatching Tag", @"""DisableBatching""\s*=", "Playworks 不支持 DisableBatching SubShader tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("CanUseSpriteAtlas Tag", @"""CanUseSpriteAtlas""\s*=", "Playworks 不支持 CanUseSpriteAtlas SubShader tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("PreviewType Tag", @"""PreviewType""\s*=", "Playworks 不支持 PreviewType SubShader tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("PassFlags", @"\bPassFlags\b", "Playworks 不支持 PassFlags tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("RequireOptions", @"\bRequi(?:re|te)Options\b", "Playworks 不支持 RequireOptions tag。", _0x88a6b2d4._0x647121a4),
            new _0xb1d7bed8("AlphaToMask", @"\bAlphaToMask\b", "Playworks 文档声明不支持 AlphaToMask，但真机测试显示基础支持，建议仅在效果异常时移除。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("Conservative", @"\bConservative\b", "Playworks 文档声明不支持 Conservative，但真机测试显示基础支持，建议仅在效果异常时移除。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("Fixed Function SetTexture", @"\bSetTexture\s*\[", "检测到旧固定管线 SetTexture，Playworks 导出阶段可能无法稳定序列化。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("Category", @"^\s*Category\s*\{", "检测到旧式 Category 包裹结构，建议改为标准 SubShader 结构。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("Fog Command", @"^\s*Fog\s*\{", "检测到 Fog 命令，Playworks 支持表未声明该命令，建议移除或改写。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("Lighting Command", @"^\s*Lighting\s+\w+", "检测到 Lighting 命令，Playworks 支持表未声明该命令，建议移除或改写。", _0x88a6b2d4._0x9d428f66),
            new _0xb1d7bed8("GrabPass Only SubShader", @"SubShader\s*\{(?![^{}]*?\bPass\b)\s*GrabPass\s*\{[^}]*\}\s*\}", "检测到仅包含 GrabPass 的 SubShader，真机运行可能导致材质丢失，建议在同一个 SubShader 中包含至少一个常规 Pass。", _0x88a6b2d4._0x647121a4),
        };
        public static bool _0x3e5bed03 = false;
        public static bool _0x8cbe2033 = true;
        public static bool _0x2d181005 = true; 
        
        
        
        public static List<string> _0x28e498f1 = new List<string>
        {
            "TextMesh Pro", 
        };
        
        
        
        public static int _0x973cae9a(bool _0x189af6cc = true)
        {
            int _0xf558e092 = 0;
            int _0xc2918710 = 0;
            int _0xcb327353 = 0;
            foreach (string path in _0x0b5d1072())
            {
                if (!_0xd4905789(path))
                    continue;
                _0xcb327353++;
                _0x0373c86e(path, ref _0xf558e092, ref _0xc2918710);
            }

            _0x20b11917(_0xcb327353, _0xf558e092, _0xc2918710, _0x189af6cc);
            return _0xf558e092;
        }

        private static IEnumerable<string> _0x0b5d1072()
        {
            
            
            HashSet<string> _0xedb34f66 = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            string[] _0x9999b21e = AssetDatabase.FindAssets("t:Shader", new[] { "Assets" });
            foreach (string guid in _0x9999b21e)
            {
                string _0xdb102b6d = AssetDatabase.GUIDToAssetPath(guid);
                if (!string.IsNullOrEmpty(_0xdb102b6d))
                    _0xedb34f66.Add(_0xdb102b6d);
            }

            try
            {
                string _0xacb28b6f = Application.dataPath.Replace('\\', '/');
                if (!_0xacb28b6f.EndsWith("/"))
                    _0xacb28b6f += "/";
                string[] _0x925bb01e = Directory.GetFiles(Application.dataPath, "*.shader", SearchOption.AllDirectories);
                foreach (string file in _0x925bb01e)
                {
                    if (string.IsNullOrEmpty(file))
                        continue;
                    string _0xcc01b9a7 = file.Replace('\\', '/');
                    if (!_0xcc01b9a7.StartsWith(_0xacb28b6f, StringComparison.OrdinalIgnoreCase))
                        continue;
                    string _0x941f531c = "Assets/" + _0xcc01b9a7.Substring(_0xacb28b6f.Length);
                    _0xedb34f66.Add(_0x941f531c);
                }
            }
            catch (Exception e)
            {
                _0x16bd684c._0x181d6923("[Luna Shader检测] 扫描 .shader 文件失败（将仅使用 t:Shader 结果）: {0}", e.Message);
            }

            return _0xedb34f66;
        }

        private static bool _0xd4905789(string _0xe5350d99)
        {
            if (string.IsNullOrEmpty(_0xe5350d99))
                return false;
            if (!_0xe5350d99.StartsWith("Assets/"))
                return false;
            
            foreach (var skip in _0x28e498f1)
            {
                if (_0xe5350d99.IndexOf(skip, StringComparison.OrdinalIgnoreCase) >= 0)
                    return false;
            }

            return _0xe5350d99.EndsWith(".shader", StringComparison.OrdinalIgnoreCase);
        }

        private static void _0x0373c86e(string _0x38e7de30, ref int _0xd4186ff0, ref int _0x06243301)
        {
            string _0xa8df56e3 = File.ReadAllText(_0x38e7de30);
            bool _0xe94ebf98 = false;
            string _0x70546f49 = _0xa8df56e3;
            int _0x64d0b180 = _0xd4186ff0;
            int _0xee25dc9b = _0x06243301;
            foreach (_0xb1d7bed8 rule in _0x9d1cf136)
            {
                if (rule == null || !rule._0x4eb1b431)
                    continue;
                if (!Regex.IsMatch(_0xa8df56e3, rule._0xb9af1e30, rule._0x76d728b0))
                    continue;
                _0x684c2b5c(_0x38e7de30, rule._0xd4bde6ad, _0x9e6952fe(rule._0x225b99fa), rule._0x09556e1a, ref _0xd4186ff0, ref _0x06243301);
            }

            _0xc96116c1(_0x38e7de30, _0xa8df56e3, ref _0xd4186ff0, ref _0x06243301);
            _0xce3a3350(_0x38e7de30, _0xa8df56e3, ref _0xd4186ff0, ref _0x06243301);
            _0x028e6724(_0x38e7de30, _0xa8df56e3, ref _0xd4186ff0, ref _0x06243301);
            _0x71c49b45(_0x38e7de30, _0xa8df56e3, ref _0xd4186ff0, ref _0x06243301);
            bool _0xa1153522 = (_0xd4186ff0 != _0x64d0b180);
            bool _0x9f3f69ed = (_0x06243301 != _0xee25dc9b);
            bool _0xaa058cfa = _0xa1153522 || (_0x3e5bed03 && _0x9f3f69ed);
            if (_0x2d181005 && _0xaa058cfa)
            {
                _0xa8df56e3 = _0x9c837a6c(_0x38e7de30, _0xa8df56e3, ref _0xe94ebf98);
                if (_0xe94ebf98 && _0xa8df56e3 != _0x70546f49)
                {
                    File.WriteAllText(_0x38e7de30, _0xa8df56e3);
                    _0x16bd684c._0xd8cc31d1("[Luna Shader自动修复] 已修复 Shader: {0}", _0x38e7de30);
                    try
                    {
                        
                        AssetDatabase.ImportAsset(_0x38e7de30, ImportAssetOptions.ForceUpdate);
                    }
                    catch (Exception e)
                    {
                        _0x16bd684c._0x181d6923("[Luna Shader自动修复] ImportAsset 失败（可忽略，Refresh 后会生效）: {0} (路径: {1})", e.Message, _0x38e7de30);
                    }
                }
            }
        }

        private static string _0x9c837a6c(string _0xf09899c6, string _0xd42771c6, ref bool _0x7b2c4a73)
        {
            bool _0x1399c548 = false;
            string _0xca17cbd2 = _0xd42771c6;
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"(?im)^[ \t]*PackageRequirements\b[^\r\n]*[\r\n]*", _0xf1fa37e8 =>
            {
                _0x1399c548 = true;
                return "\t\t// [Auto-disabled] Removed unsupported block: PkgRequirements\r\n";
            });
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"#pragma\s+target\s+([0-9.]+)", _0xd613a3ca =>
            {
                float _0xa462b02b;
                if (float.TryParse(_0xd613a3ca.Groups[1].Value, out _0xa462b02b) && _0xa462b02b > 3.0f)
                {
                    _0x1399c548 = true;
                    return "#pragma target 3.0 // Auto-fixed from " + _0xd613a3ca.Groups[1].Value;
                }

                return _0xd613a3ca.Value;
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"#pragma\s+only_renderers\s+([^\r\n]+)", _0xe5649e57 =>
            {
                string _0xad636ad4 = _0xe5649e57.Groups[1].Value;
                if (!_0x94947799(_0xad636ad4))
                {
                    _0x1399c548 = true;
                    return _0xe5649e57.Value + " gles gles3 // Auto-added GLES support";
                }

                return _0xe5649e57.Value;
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"#pragma\s+exclude_renderers\s+([^\r\n]+)", _0xbdf14594 =>
            {
                string _0xcde378ac = _0xbdf14594.Groups[1].Value;
                if (_0x94947799(_0xcde378ac))
                {
                    _0x1399c548 = true;
                    string _0xc3bc8782 = Regex.Replace(_0xcde378ac, @"\bgles(?:3)?\b", "", RegexOptions.IgnoreCase).Trim();
                    return string.IsNullOrEmpty(_0xc3bc8782) ? "// [Auto-disabled] Removed directive: exclude_renderers\r\n" : "#pragma exclude_renderers " + _0xc3bc8782;
                }

                return _0xbdf14594.Value;
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"\bFallback\s+""([^""]+)""", _0x7503ab79 =>
            {
                string _0xebc98212 = _0x7503ab79.Groups[1].Value;
                if (_0xebc98212.IndexOf("ShadowCaster", StringComparison.OrdinalIgnoreCase) < 0)
                {
                    _0x1399c548 = true;
                    return "// [Auto-disabled] Removed unsupported F_back: \"" + _0xebc98212 + "\"";
                }

                return _0x7503ab79.Value;
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"(?im)^[ \t]*PassFlags\b[^\r\n]*[\r\n]*", _0x6a9c02ea =>
            {
                _0x1399c548 = true;
                return "\t\t\t// [Auto-disabled] Removed unsupported tag: PFlags\r\n";
            });
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"(?im)^[ \t]*RequireOptions\b[^\r\n]*[\r\n]*", _0xf95fa4d4 =>
            {
                _0x1399c548 = true;
                return "\t\t\t// [Auto-disabled] Removed unsupported tag: ReqOptions\r\n";
            });
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"(?ims)(\bPass\s*\{\s*)(Name\s+""[^""]+""\s*)+(?=\s*SetTexture\s*\[)", _0x17cc1efe =>
            {
                _0x1399c548 = true;
                return _0x17cc1efe.Groups[1].Value;
            });
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"""RenderPipeline""\s*=\s*""[^""]+""", _0x261b34a7 =>
            {
                _0x1399c548 = true;
                return "";
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"""DisableBatching""\s*=\s*""[^""]+""", _0x26f43d6a =>
            {
                _0x1399c548 = true;
                return "";
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"""CanUseSpriteAtlas""\s*=\s*""[^""]+""", _0xf4a9b8ed =>
            {
                _0x1399c548 = true;
                return "";
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"""PreviewType""\s*=\s*""[^""]+""", _0x549e96e9 =>
            {
                _0x1399c548 = true;
                return "";
            }, RegexOptions.IgnoreCase);
            _0xca17cbd2 = Regex.Replace(_0xca17cbd2, @"(?ims)\bSubShader\s*\{\s*(GrabPass\s*\{[^{}]*\}\s*)\}", _0x3418fe8c =>
            {
                
                string _0x0e9def3c = _0x3418fe8c.Groups[1].Value;
                if (_0x0e9def3c.IndexOf("Pass", StringComparison.OrdinalIgnoreCase) >= 0 || _0x0e9def3c.IndexOf("CGPROGRAM", StringComparison.OrdinalIgnoreCase) >= 0 || _0x0e9def3c.IndexOf("HLSLPROGRAM", StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    return _0x3418fe8c.Value;
                }

                _0x1399c548 = true;
                return "SubShader {\r\n\t\t\t" + _0x0e9def3c + "\t\t\tPass { }\r\n\t\t}";
            });
            if (_0x1399c548)
                _0x7b2c4a73 = true;
            return _0xca17cbd2;
        }

        private static _0x88a6b2d4 _0x9e6952fe(_0x88a6b2d4 _0x36176d7b)
        {
            if (_0x3e5bed03 && _0x36176d7b == _0x88a6b2d4._0x9d428f66)
            {
                return _0x88a6b2d4._0x647121a4;
            }

            return _0x36176d7b;
        }

        private static void _0xc96116c1(string _0x811b34fb, string _0x1d952e69, ref int _0x8b1af46c, ref int _0xd369f826)
        {
            MatchCollection _0x2a52888a = Regex.Matches(_0x1d952e69, @"\bFallback\s+""([^""]+)""", RegexOptions.IgnoreCase);
            foreach (Match match in _0x2a52888a)
            {
                string _0xc9096aed = match.Groups[1].Value;
                if (_0xc9096aed.IndexOf("ShadowCaster", StringComparison.OrdinalIgnoreCase) >= 0)
                    continue;
                _0x684c2b5c(_0x811b34fb, "Fallback", _0x88a6b2d4._0x647121a4, "Playworks 的 Fallback block 仅支持 ShadowCaster。", ref _0x8b1af46c, ref _0xd369f826);
            }
        }

        private static void _0xce3a3350(string _0xe4db0aca, string _0x2046466d, ref int _0xc8631a3b, ref int _0x8a72c092)
        {
            MatchCollection _0x4f90d5ad = Regex.Matches(_0x2046466d, @"#pragma\s+target\s+([0-9.]+)", RegexOptions.IgnoreCase);
            foreach (Match match in _0x4f90d5ad)
            {
                float _0x1283bb88;
                if (!float.TryParse(match.Groups[1].Value, out _0x1283bb88))
                    continue;
                if (_0x1283bb88 <= 3.0f)
                    continue;
                _0x684c2b5c(_0xe4db0aca, "#pragma target", _0x88a6b2d4._0x647121a4, "Playworks 仅支持 #pragma target 2.0 到 3.0。", ref _0xc8631a3b, ref _0x8a72c092);
            }
        }

        private static void _0x028e6724(string _0x98b58fcb, string _0xdd3a9bb4, ref int _0x8c31f09a, ref int _0x2f823067)
        {
            _0x7ebc2b56(_0x98b58fcb, _0xdd3a9bb4, ref _0x8c31f09a, ref _0x2f823067);
            _0x27667e9d(_0x98b58fcb, _0xdd3a9bb4, ref _0x8c31f09a, ref _0x2f823067);
        }

        private static void _0x7ebc2b56(string _0x6d102857, string _0xf1fea45f, ref int _0x6e7208b8, ref int _0xd035430e)
        {
            MatchCollection _0x262a3b29 = Regex.Matches(_0xf1fea45f, @"#pragma\s+only_renderers\s+([^\r\n]+)", RegexOptions.IgnoreCase);
            foreach (Match match in _0x262a3b29)
            {
                string _0xa0461f3b = match.Groups[1].Value;
                if (_0x94947799(_0xa0461f3b))
                    continue;
                _0x684c2b5c(_0x6d102857, "#pragma only_renderers", _0x88a6b2d4._0x647121a4, "Playworks 需要 GLES target shaders，only_renderers 中必须保留 GLES。", ref _0x6e7208b8, ref _0xd035430e);
            }
        }

        private static void _0x27667e9d(string _0x9d0ad179, string _0x5f36c77c, ref int _0xfc43c518, ref int _0x3f03cd51)
        {
            MatchCollection _0xa15c6584 = Regex.Matches(_0x5f36c77c, @"#pragma\s+exclude_renderers\s+([^\r\n]+)", RegexOptions.IgnoreCase);
            foreach (Match match in _0xa15c6584)
            {
                string _0x267538ed = match.Groups[1].Value;
                if (!_0x94947799(_0x267538ed))
                    continue;
                _0x684c2b5c(_0x9d0ad179, "#pragma exclude_renderers", _0x88a6b2d4._0x647121a4, "Playworks 需要 GLES target shaders，exclude_renderers 中不能排除 GLES。", ref _0xfc43c518, ref _0x3f03cd51);
            }
        }

        private static bool _0x94947799(string _0xf5c6c00b)
        {
            if (string.IsNullOrEmpty(_0xf5c6c00b))
                return false;
            return Regex.IsMatch(_0xf5c6c00b, @"\bgles(?:3)?\b", RegexOptions.IgnoreCase);
        }

        private static void _0x71c49b45(string _0x9a9fb148, string _0x6f41d3bf, ref int _0xa06c0c6b, ref int _0x47179ef4)
        {
            if (!_0x711e8faa(_0x6f41d3bf))
                return;
            string _0xcda5ec91 = "检测到 Category + GrabPass + SetTexture 组合，可能触发 Playworks ShadersCollection 序列化异常。";
            _0x88a6b2d4 _0x61071338 = _0x8cbe2033 ? _0x88a6b2d4._0x647121a4 : _0x88a6b2d4._0x9d428f66;
            _0x684c2b5c(_0x9a9fb148, "Legacy GrabPass Combo", _0x61071338, _0xcda5ec91, ref _0xa06c0c6b, ref _0x47179ef4);
        }

        private static bool _0x711e8faa(string _0x53ea9536)
        {
            bool _0xd8105462 = Regex.IsMatch(_0x53ea9536, @"^\s*Category\s*\{", RegexOptions.IgnoreCase | RegexOptions.Multiline);
            bool _0x83a57980 = Regex.IsMatch(_0x53ea9536, @"\bGrabPass\s*\{", RegexOptions.IgnoreCase);
            bool _0xdefbbed2 = Regex.IsMatch(_0x53ea9536, @"\bSetTexture\s*\[", RegexOptions.IgnoreCase);
            return _0xd8105462 && _0x83a57980 && _0xdefbbed2;
        }

        private static void _0x684c2b5c(string _0xbacbc0c9, string _0x960982a5, _0x88a6b2d4 _0xffa1aae4, string _0xc87f885f, ref int _0x41fd34d2, ref int _0xf5ec2af4)
        {
            if (_0xffa1aae4 == _0x88a6b2d4._0x647121a4)
            {
                _0x16bd684c._0xe8f5e459("[Luna Shader检测] {0}: {1} (路径: {2})", _0x960982a5, _0xc87f885f, _0xbacbc0c9);
                _0x41fd34d2++;
                return;
            }

            _0x16bd684c._0x181d6923("[Luna Shader检测] {0}: {1} (路径: {2})", _0x960982a5, _0xc87f885f, _0xbacbc0c9);
            _0xf5ec2af4++;
        }

        private static void _0x20b11917(int _0x12c085a4, int _0x69667dcc, int _0x4ec1cd7e, bool _0x1f36b959)
        {
            if (_0x69667dcc > 0)
            {
                _0x16bd684c._0xe8f5e459("[Luna Shader检测] 完成。扫描 {0} 个 Shader，发现 {1} 处错误，{2} 处警告。", _0x12c085a4.ToString(), _0x69667dcc.ToString(), _0x4ec1cd7e.ToString());
            }
            else if (_0x4ec1cd7e > 0)
            {
                _0x16bd684c._0x181d6923("[Luna Shader检测] 完成。扫描 {0} 个 Shader，发现 {1} 处警告。", _0x12c085a4.ToString(), _0x4ec1cd7e.ToString());
            }
            else if (_0x1f36b959)
            {
                _0x16bd684c.Log("[Luna Shader检测] 完成。扫描 {0} 个 Shader，未发现异常。", _0x12c085a4.ToString());
            }
        }
    }
}