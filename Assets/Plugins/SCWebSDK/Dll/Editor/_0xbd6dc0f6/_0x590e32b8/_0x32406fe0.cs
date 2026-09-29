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
using UnityEditor.Compilation;
using System.Text.RegularExpressions;

namespace _0xa07739b8
{
    public partial class _0xa7126670
    {
        
        
        
        
        public static void _0xe7b18bba()
        {
            
            string _0xb48faabb = _0xf43a6983._0xdbd34359 + "/Luna";
            if (Directory.Exists(_0xf43a6983._0xdbd34359))
            {
                _0xfb66840f._0xf2315609(_0xb48faabb);
            }
            else
            {
                _0x16bd684c._0xe8f5e459("工具根目录不存在，请检查配置：{0}", _0xf43a6983._0xdbd34359);
                return;
            }

            string[] _0xec6244f0 = Directory.Exists(_0xb48faabb) ? Directory.GetDirectories(_0xb48faabb) : new string[0];
            if (_0xec6244f0.Length == 0)
            {
                _0xfb66840f._0xf2315609(_0xb48faabb);
                _0xec6244f0 = Directory.Exists(_0xb48faabb) ? Directory.GetDirectories(_0xb48faabb) : new string[0];
            }

            if (_0xec6244f0.Length == 0)
            {
                _0x16bd684c._0xe8f5e459("Luna工具包不存在或为空，请手动解决！{0}", _0xb48faabb);
                return;
            }

            
            string _0x01b39e4c = _0xec6244f0.OrderByDescending(_0x30fd231d =>
            {
                Version _0x61a18b16;
                return Version.TryParse(Path.GetFileName(_0x30fd231d), out _0x61a18b16) ? _0x61a18b16 : new Version(0, 0);
            }).FirstOrDefault().Replace("\\", "/");
            string _0x2a59b5b6 = Application.dataPath + "/../uk.lunalabs.luna";
            if (Directory.Exists(_0x2a59b5b6))
            {
                Directory.Delete(_0x2a59b5b6, true);
                _0x16bd684c.Log("清理旧的Luna工具包：{0}", _0x2a59b5b6);
            }

            Directory.CreateDirectory(_0x2a59b5b6);
            _0xc9be004e._0xd4f06a6a(_0x01b39e4c, _0x2a59b5b6);
            _0x16bd684c.Log("Luna工具包拷贝完成，路径：{0}", _0x2a59b5b6);
            
            string _0xad222d38 = "com.unity.playworks.upp"; 
            string _0xa1f4400c = _0x2a59b5b6 + "/scripts/package.json";
            if (File.Exists(_0xa1f4400c))
            {
                string _0x5a8da8be = File.ReadAllText(_0xa1f4400c);
                var _0x59521082 = System.Text.RegularExpressions.Regex.Match(_0x5a8da8be, "\"name\"\\s*:\\s*\"([^\"]+)\"");
                if (_0x59521082.Success)
                {
                    _0xad222d38 = _0x59521082.Groups[1].Value;
                }
            }

            
            string _0x38c3ed9b = Path.GetDirectoryName(Application.dataPath);
            string[] _0x2f16923d =
            {
                "uk.lunalabs.luna",
                "com.unity.playworks.upp"
            };
            foreach (var sOld in _0x2f16923d)
            {
                if (sOld != _0xad222d38)
                {
                    _0xf95de2f9._0xd60b0a31(_0x38c3ed9b, sOld, "");
                }
            }

            _0xf95de2f9._0xd60b0a31(_0x38c3ed9b, _0xad222d38, "file:../uk.lunalabs.luna/scripts");
            _0x16bd684c.Log("manifest.json 添加包引用: {0}", _0xad222d38);
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
        }

        
        
        
        public static void _0x1130c7d5()
        {
            string _0x6612b8e5 = Application.dataPath + "/../luna.json";
            if (!File.Exists(_0x6612b8e5))
            {
                _0x16bd684c._0xe8f5e459("请先进行luna的初始化");
                return;
            }

            _0x9cb0cdbc();
            _0x7d77fc0d();
            _0x16bd684c.Log("添加js库：{0}", _0x4042434b);
            
            var _0xa0e80e23 = File.ReadAllText(_0x6612b8e5);
            _0xa0e80e23 = _0xa0e80e23.Replace("\"export\": []", @"""export"": [
                ""resources""
            ]");
            // macOS/cross-platform: Luna's pipeline (Node.js) needs forward slashes
            // here; the original ".\\Assets\\..." backslash paths silently fail to
            // load on non-Windows, leaving pc.WebGLLib undefined ("not a constructor").
            _0xa0e80e23 = _0xa0e80e23.Replace("\"externalJSLibraries\": []", @"""externalJSLibraries"": [
                ""./Assets/Plugins/SCWebSDK/webGL/WebGLLib.js""
            ]");
            _0xa0e80e23 = _0xa0e80e23.Replace("\"externalSources\": []", @"""externalSources"": [
                ""./Assets/Plugins/SCWebSDK/webGL""
            ]");
            
            string _0xdb9c7b09 = @"(""default""\s*:\s*{\s*""data""\s*:\s*{\s*""alphabet""\s*:\s*""(?:[^""\\]|\\.)*""\s*,\s*""size""\s*:\s*\d+\s*,\s*""textureWidth""\s*:\s*)\d+(\s*,\s*""textureHeight""\s*:\s*)\d+";
            _0xa0e80e23 = Regex.Replace(_0xa0e80e23, _0xdb9c7b09, _0xcfe89f48 => _0xcfe89f48.Groups[1].Value + "512" + _0xcfe89f48.Groups[2].Value + "512");
            File.WriteAllText(_0x6612b8e5, _0xa0e80e23);
            _0x16bd684c.Log("luna初始化完成 (已同步贴图尺寸: 512x512)");
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            CompilationPipeline.RequestScriptCompilation();
            _0x16bd684c.Log("重载");
        }

        public static void _0x9cb0cdbc()
        {
            string _0x78d9c508 = _0x3e134976._0x5e7e43c3(true, true);
            if (!string.IsNullOrEmpty(_0x78d9c508))
            {
                _0x2e7cc768(_0x78d9c508);
            }
        }

        
        
        
        public static void _0x2e7cc768(string _0x96d1a6c3)
        {
            string _0x8cc67914 = Path.GetDirectoryName(Application.dataPath);
            string _0xb6b2c717 = Path.Combine(_0x8cc67914, "luna.json");
            if (!File.Exists(_0xb6b2c717))
                return;
            string _0x45d2f7c0 = File.ReadAllText(_0xb6b2c717);
            
            
            string _0xb423a9af = @"(""default""\s*:\s*{\s*""data""\s*:\s*{\s*""alphabet""\s*:\s*"")(?:[^""\\]|\\.)*("")";
            
            
            string _0x7ffceb40 = _0x96d1a6c3.Replace("\\", "\\\\").Replace("\"", "\\\"");
            if (Regex.IsMatch(_0x45d2f7c0, _0xb423a9af))
            {
                
                string _0xeac53d7c = Regex.Replace(_0x45d2f7c0, _0xb423a9af, _0xe06bbc07 => _0xe06bbc07.Groups[1].Value + _0x7ffceb40 + _0xe06bbc07.Groups[2].Value);
                if (_0xeac53d7c != _0x45d2f7c0)
                {
                    File.WriteAllText(_0xb6b2c717, _0xeac53d7c);
                    _0x16bd684c.Log("[LunaMgr] 已成功同步更新 luna.json (处理了转义字符)。");
                }
            }
            else
            {
                _0x16bd684c._0x181d6923("[LunaMgr] 未在 luna.json 中找到对应的 font.default.data.alphabet 结构，同步失败。");
            }
        }
    }
}