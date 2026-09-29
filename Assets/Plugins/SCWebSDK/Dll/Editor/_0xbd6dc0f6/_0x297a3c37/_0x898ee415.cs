using UnityEngine;
using UnityEditor;
using System;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Threading;
using UnityEditor.Build;
using UnityEngine.Rendering;
using System.Linq;
using SC;
using System.Reflection;

namespace _0xa07739b8
{
    public class _0x41e48010 : IPreprocessBuildWithReport, IPostprocessBuildWithReport
    {
        
        
        
        public const string _0x93667fa1 = "SCWeb(" + SC.sc.SDKVERSION + ")/Build/";
        static string _0xf3a44d35
        {
            get
            {
                
                if (_0xc9be004e._0x35a36011)
                {
                    return Path.GetFullPath(Path.Combine(Application.dataPath, "..", "..", "..", "web-mobile"));
                }
                else
                {
                    return Path.GetFullPath(Path.Combine(Application.dataPath, "..", "web-mobile"));
                }
            }
        }

        static string _0x3bf1c325 = @"E:\Project\tool\design\createhtml\unity试玩广告生成html工具.cmd";
#region 容量预估常量 (参考 README.md)
        private const float _0x6f525fb9 = 1.195f; 
        private const float _0xbdf15529 = 1.334f; 
        private const int _0x54488b4f = 110000; 
        private const int _0x6b0195de = 5242880; 
#endregion
        [InitializeOnLoadMethod]
        private static void _0xe57148fe()
        {
            PlayerSettings.stripEngineCode = true; 
            PlayerSettings.SetManagedStrippingLevel(BuildTargetGroup.WebGL, ManagedStrippingLevel.High);
            PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Brotli;
            PlayerSettings.WebGL.decompressionFallback = true;
            PlayerSettings.WebGL.wasmArithmeticExceptions = WebGLWasmArithmeticExceptions.Ignore;
            PlayerSettings.gcIncremental = false; 
            
            EditorUserBuildSettings.SetPlatformSettings("WebGL", "CodeOptimization", "Size");
            
            GraphicsDeviceType[] _0xe3195b5c;
            if (sc.WebAdConfig != null)
            {
                switch (sc.WebAdConfig.EGraphicsAPI)
                {
                    case EGraphicsAPIType.WebGL1:
                        _0xe3195b5c = new GraphicsDeviceType[]
                        {
                            GraphicsDeviceType.OpenGLES2
                        };
                        break;
                    case EGraphicsAPIType.WebGL2:
                        _0xe3195b5c = new GraphicsDeviceType[]
                        {
                            GraphicsDeviceType.OpenGLES3
                        };
                        break;
                    case EGraphicsAPIType.WebGL1AndWebGL2:
                    default:
                        _0xe3195b5c = new GraphicsDeviceType[]
                        {
                            GraphicsDeviceType.OpenGLES2,
                            GraphicsDeviceType.OpenGLES3
                        };
                        break;
                }
            }
            else
            {
                _0xe3195b5c = new GraphicsDeviceType[]
                {
                    GraphicsDeviceType.OpenGLES2,
                    GraphicsDeviceType.OpenGLES3
                };
            }

            PlayerSettings.SetUseDefaultGraphicsAPIs(BuildTarget.WebGL, false);
            PlayerSettings.SetGraphicsAPIs(BuildTarget.WebGL, _0xe3195b5c);
            
            
            PlayerSettings.runInBackground = true;
            _0x48fb259e();
            PlayerSettings.mipStripping = false;
        }

        
        
        
        
        public static bool _0x48fb259e()
        {
            try
            {
                
                if (!Application.isEditor)
                {
                    
                    return false;
                }

                
                Type _0x7309fce7 = Type.GetType("UnityEditor.PlayerSettings, UnityEditor");
                if (_0x7309fce7 == null)
                {
                    
                    return false;
                }

                
                Type _0xa2ec98bb = Type.GetType("UnityEditor.Build.NamedBuildTarget, UnityEditor");
                if (_0xa2ec98bb == null)
                {
                    
                    return false;
                }

                
                FieldInfo _0x164263ac = _0xa2ec98bb.GetField("WebGL", BindingFlags.Public | BindingFlags.Static);
                if (_0x164263ac == null)
                {
                    Debug.LogError(_0x3a19ac8a._0x512da7a0("NamedBuildTarget.WebGL field not found, check Unity API"));
                    return false;
                }

                
                object _0x85c9e7a0 = _0x164263ac.GetValue(null); 
                
                Type _0x0096e831 = Type.GetType("UnityEditor.Build.Il2CppCodeGeneration, UnityEditor");
                if (_0x0096e831 == null)
                {
                    
                    return false;
                }

                
                object _0xdaf64448 = Enum.Parse(_0x0096e831, "OptimizeSize");
                
                MethodInfo _0x64711aab = _0x7309fce7.GetMethod("SetIl2CppCodeGeneration", BindingFlags.Public | BindingFlags.Static, null, new[] { _0xa2ec98bb, _0x0096e831 }, null);
                if (_0x64711aab == null)
                {
                    
                    return false;
                }

                _0x64711aab.Invoke(null, new[] { _0x85c9e7a0, _0xdaf64448 });
                
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError($"❌ Failed to set Il2Cpp Code Generation: {e.Message}");
                
                return false;
            }
        }

        public int callbackOrder => 0;

        public void OnPreprocessBuild(BuildReport _0x90ed4a00)
        {
            Debug.Log("打包前：资源预处理");
        
        
        
        
        }

        public void OnPostprocessBuild(BuildReport _0x2f7a7700)
        {
            string _0xafb1760a = _0x2f7a7700.summary.outputPath;
            
            var _0x8b4cd560 = Directory.GetFiles(_0xafb1760a, "*.html", SearchOption.AllDirectories);
            string _0x19efa6cf = File.ReadAllText(_0x8b4cd560[0]);
            
            int _0x2ad2f762 = _0x19efa6cf.LastIndexOf("</script>");
            _0x19efa6cf = _0x19efa6cf.Insert(_0x2ad2f762, @"
      document.addEventListener(""keydown"", function (event) {
        if (event.keyCode === 32) { 
          var oCanvas = document.querySelector(""#unity-canvas"");
          var iWidow = oCanvas.style.width;
          oCanvas.style.width = oCanvas.style.height;
          oCanvas.style.height = iWidow;
        }
      });
    ");
            File.WriteAllText(_0x8b4cd560[0], _0x19efa6cf);
        }

        
        public static void _0x7a5ac07b()
        {
            _0xaf588ad7(_0xf3a44d35, (bool _0xd8106cd4) =>
            {
                if (_0xd8106cd4)
                {
                    Application.OpenURL($"file:///{_0xf3a44d35}");
                    _0xb41bd30b();
                }
            }, "base122");
        }

        
        public static void _0xb41bd30b()
        {
            var _0x704f3554 = _0xf3a44d35;
            if (!Directory.Exists(_0xf3a44d35))
            {
                EditorUtility.DisplayDialog(_0x3a19ac8a._0x512da7a0("提示"), _0x3a19ac8a._0x512da7a0("请先导出Web包"), "确定");
                return;
            }

            _0xc9be004e._0x5d43c2a2(_0x704f3554);
            Thread.Sleep(100);
            Application.OpenURL("http://localhost:8000");
        }

        
        
        
        public static void _0x6098db78(string _0x07b26b30)
        {
            string _0x74c7b668 = Path.Combine(Path.GetDirectoryName(_0x3bf1c325), "ResourcesZip", "1.0.0");
            _0x74c7b668 = Path.GetFullPath(_0x74c7b668);
            if (Directory.Exists(_0x74c7b668))
            {
                Directory.Delete(_0x74c7b668, true);
            }

            bool _0x3a80e2a2 = _0x852e8d8a._0xb7d5a786;
            string _0xc6980173 = _0xc9be004e._0xf4a2f258(false, _0x3bf1c325, _0xf3a44d35, _0x07b26b30, _0x3a80e2a2 ? "true" : "false");
            
            bool _0x36679689 = true;
            if (_0xc6980173.Contains("[error]"))
            {
                _0x36679689 = false;
            }

            string _0x46ec7f58 = "";
            string _0xfa716b3b = _0x852e8d8a._0x97784d7c();
            string _0x3c05202e = "";
            string[] _0xbbca4e22 = Directory.GetFiles(_0x74c7b668, "*", SearchOption.AllDirectories);
            
            if (_0xbbca4e22 != null && _0xbbca4e22.Length > 0)
            {
                
                string _0x2b9a7c85 = Application.dataPath + "/../web-html";
                _0x2b9a7c85 = Path.GetFullPath(_0x2b9a7c85);
                if (Directory.Exists(_0x2b9a7c85))
                {
                    _0xbd42ee6f._0x48eecf0e(_0x2b9a7c85);
                }
                else
                {
                    Directory.CreateDirectory(_0x2b9a7c85);
                }

                string _0xfcddbcf0 = "_" + DateTime.Now.ToString("yyMMdd");
                for (int _0x331ec93c = 0; _0x331ec93c < _0xbbca4e22.Length; _0x331ec93c++)
                {
                    string _0x69a966e8 = _0xbbca4e22[_0x331ec93c];
                    
                    string _0x379de705 = _0xef281d65(_0x69a966e8, _0x74c7b668, _0x2b9a7c85, _0xfcddbcf0);
                    _0xbd42ee6f._0x94b3e792(_0x69a966e8, _0x379de705);
                    
                    
                    
                    if (_0x379de705.IndexOf(".html") == -1)
                        continue;
                    if (_0x379de705.IndexOf(_0xfa716b3b) != -1)
                    {
                        _0x46ec7f58 = _0x379de705;
                    }

                    if (_0x379de705.IndexOf("applovin") != -1 || _0x379de705.IndexOf("google") != -1)
                    {
                        _0x3c05202e = _0x379de705;
                    }
                }
            }

            if (_0x36679689)
            {
                string _0xb46d4dde = "";
                if (_0xfa716b3b == "web")
                {
                    _0xb46d4dde = $"file:///{_0x3c05202e}";
                }
                else if (_0x46ec7f58 != "")
                {
                    if (_0xfa716b3b == EWebPlatform.applovin.ToString())
                    {
                        Application.OpenURL($"file:///{Path.GetDirectoryName(_0x46ec7f58)}");
                        _0xb46d4dde = "https://p.applov.in/playablePreview?create=1&qr=1";
                    }
                    else if (_0xfa716b3b == EWebPlatform.mintegral.ToString())
                    {
                        Application.OpenURL($"file:///{Path.GetDirectoryName(Path.GetDirectoryName(_0x46ec7f58))}");
                        _0xb46d4dde = "https://www.playturbo.cn/review";
                    }
                    else if (_0xfa716b3b == EWebPlatform.google.ToString())
                    {
                        _0xb46d4dde = "https://h5validator.appspot.com/adwords/asset";
                        Application.OpenURL($"file:///{Path.GetDirectoryName(Path.GetDirectoryName(_0x3c05202e))}");
                    }
                }

                if (_0xb46d4dde != "")
                {
                    Application.OpenURL(_0xb46d4dde);
                }

                _0x16bd684c._0xd8cc31d1("打包全部成功了！" + _0xf3a44d35);
            }
            else
            {
                _0x16bd684c._0xe8f5e459("请查看失败的渠道" + _0xf3a44d35);
            }
        }

        
        
        
        private static string _0xef281d65(string _0x3a4779e7, string _0x454b3268, string _0x7a76870a, string _0x58c1e135)
        {
            string _0x9e2edecc = _0x3a4779e7.Substring(_0x454b3268.Length).TrimStart(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            string[] _0x7cc3c9bc = _0x9e2edecc.Split(new[] { Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar }, StringSplitOptions.RemoveEmptyEntries);
            string _0xc28dcd31 = _0xbd42ee6f._0x9381861f.Replace("-", "_");
            for (int _0x99dc5e25 = 0; _0x99dc5e25 < _0x7cc3c9bc.Length; _0x99dc5e25++)
            {
                if (!_0x7cc3c9bc[_0x99dc5e25].StartsWith(_0xc28dcd31, StringComparison.OrdinalIgnoreCase))
                    continue;
                string _0x15f47e2d = _0x99dc5e25 == _0x7cc3c9bc.Length - 1 ? Path.GetExtension(_0x7cc3c9bc[_0x99dc5e25]) : "";
                string _0x97d085a3 = string.IsNullOrEmpty(_0x15f47e2d) ? _0x7cc3c9bc[_0x99dc5e25] : _0x7cc3c9bc[_0x99dc5e25].Substring(0, _0x7cc3c9bc[_0x99dc5e25].Length - _0x15f47e2d.Length);
                if (_0x97d085a3.EndsWith(_0x58c1e135, StringComparison.OrdinalIgnoreCase))
                    continue;
                _0x7cc3c9bc[_0x99dc5e25] = _0x97d085a3 + _0x58c1e135 + _0x15f47e2d;
            }

            return Path.Combine(_0x7a76870a, Path.Combine(_0x7cc3c9bc));
        }

        
        public static void _0x322c6a85()
        {
            _0x852e8d8a._0xb7d5a786 = false;
            _0x988f46a9();
        }

        public static void _0x988f46a9()
        {
            string _0xb7d5dca7 = _0x852e8d8a._0xac9489fb ? "base122" : "base64";
            _0xaf588ad7(_0xf3a44d35, (bool _0x1678b35f) =>
            {
                if (_0x1678b35f)
                {
                    _0x6098db78(_0xb7d5dca7);
                }
            }, _0xb7d5dca7);
        }

        
        public static void _0xaf588ad7(string _0x82cb5ee5, Action<bool> _0x7836fbd9, string _0x869ed51b)
        {
            _0x3e134976._0x5e7e43c3(false);
            if (_0x3e134976._0xdde52d26())
            {
                _0x3e134976._0x6585d8be();
            }

            
            if (!_0x3a3893c4(_0x82cb5ee5))
            {
                _0x7836fbd9(false);
                return;
            }

            
            var _0x0f100306 = _0xe964ce40(_0x82cb5ee5);
            bool _0x8368d499 = _0x0f100306 != null && _0x0f100306.summary.result == BuildResult.Succeeded;
            if (_0x8368d499)
            {
                _0x16bd684c._0xd8cc31d1("打包结果:{0}, 路径:{1}", _0x0f100306.summary.result + "", _0x82cb5ee5);
                
                if (_0x464856b4(_0x82cb5ee5, _0x869ed51b))
                {
                    _0x16bd684c._0xd8cc31d1("导出成功");
                }
                else
                {
                    _0x16bd684c._0xe8f5e459("导出失败，请检查文件大小");
                }

                _0x7836fbd9(true);
            }
            else
            {
                _0x16bd684c._0xe8f5e459("导出失败" + ":" + _0x0f100306.summary.result);
                _0x7836fbd9(false);
            }
        }

        private static bool _0x3a3893c4(string _0x3fdf77d4)
        {
            if (string.IsNullOrEmpty(_0x3fdf77d4))
            {
                _0x16bd684c._0xe8f5e459("导出失败：sBuildPath 为空");
                return false;
            }

            string _0xf8c5a5c3 = Path.GetFullPath(_0x3fdf77d4);
            string _0xb39bb6e8 = Path.GetPathRoot(_0xf8c5a5c3);
            if (string.IsNullOrEmpty(_0xb39bb6e8))
            {
                _0x16bd684c._0xe8f5e459("导出失败：无法识别导出路径根目录：" + _0xf8c5a5c3);
                return false;
            }

            string _0x5a53f878 = _0xf8c5a5c3.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            string _0xc2e70856 = _0xb39bb6e8.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            if (string.Equals(_0x5a53f878, _0xc2e70856, StringComparison.OrdinalIgnoreCase))
            {
                _0x16bd684c._0xe8f5e459("导出失败：禁止清理盘符根目录：" + _0xf8c5a5c3);
                return false;
            }

            try
            {
                if (Directory.Exists(_0xf8c5a5c3))
                {
                    Directory.Delete(_0xf8c5a5c3, true);
                }

                Directory.CreateDirectory(_0xf8c5a5c3);
                return true;
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("导出失败：清理导出目录异常：" + _0xf8c5a5c3 + "\n" + e);
                return false;
            }
        }

        
        
        
        
        private static BuildReport _0xe964ce40(string _0xc2b24f92)
        {
            _0xe57148fe();
            BuildPlayerOptions _0x1e9651d5 = new BuildPlayerOptions(); 
            _0x1e9651d5.scenes = _0xc9be004e._0xc9ae6b43(); 
            _0x1e9651d5.locationPathName = _0xc2b24f92; 
            _0x1e9651d5.target = BuildTarget.WebGL; 
            
            BuildOptions _0x7faa6b49 = BuildOptions.None;
            PlayerSettings.bundleVersion = "99.88.777";
            PlayerSettings.SetScriptingBackend(BuildTargetGroup.WebGL, ScriptingImplementation.IL2CPP);
            
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WebGL, BuildTarget.WebGL);
            _0x1e9651d5.options = _0x7faa6b49;
            BuildReport _0x86b2aea1 = BuildPipeline.BuildPlayer(_0x1e9651d5);
            return _0x86b2aea1;
        }

        
        
        
        
        
        
        private static bool _0x464856b4(string _0xeaf9df32, string _0x39a6da9d)
        {
            long _0x1922645f = 0;
            if (File.Exists(_0xeaf9df32))
            {
                FileInfo _0xdd67cd59 = new FileInfo(_0xeaf9df32);
                _0x1922645f = _0xdd67cd59.Length;
            }
            else if (Directory.Exists(_0xeaf9df32))
            {
                string[] _0x7fa77f7b = Directory.GetFiles(_0xeaf9df32, "*.unityweb", SearchOption.AllDirectories);
                foreach (string sFile in _0x7fa77f7b)
                {
                    FileInfo _0xa90f810a = new FileInfo(sFile);
                    _0x1922645f += _0xa90f810a.Length;
                }
            }

            if (_0x1922645f == 0)
            {
                _0x16bd684c._0xe8f5e459("File size is 0" + ":" + _0xeaf9df32);
                return false;
            }

            
            float _0x8a3205ce = (_0x39a6da9d == "base64") ? _0xbdf15529 : _0x6f525fb9;
            long _0x1077d590 = (long)(_0x1922645f * _0x8a3205ce) + _0x54488b4f;
            
            long _0x33647b49 = (long)(_0x1922645f * _0x8a3205ce * 0.98f) + _0x54488b4f;
            long _0x608c741a = (long)(_0x1922645f * _0x8a3205ce * 1.02f) + _0x54488b4f;
            string _0x082d5a03 = Path.GetFullPath(_0xeaf9df32);
            if (_0x1077d590 > _0x6b0195de)
            {
                long _0x5a7cfeed = _0x1077d590 - _0x6b0195de;
                
                long _0xef8a9106 = (long)(_0x5a7cfeed / _0x8a3205ce);
                string _0x15e07226 = "{0} 的资源预估生成的 HTML ({1}) 大小为 {2}KB [{3}KB ~ {4}KB]，超过 5MB 限制！";
                _0x16bd684c._0xa3ba68cd(_0x15e07226, _0x082d5a03, _0x39a6da9d, (_0x1077d590 / 1024).ToString(), (_0x33647b49 / 1024).ToString(), (_0x608c741a / 1024).ToString());
                string _0xedd605e2 = "当前 .unityweb 总大小: {0}KB，还需要减少约 {1} 字节 ({2}KB) 的原始资源，胜利就在眼前了，加油加油！！！";
                _0x16bd684c._0xe8f5e459(_0xedd605e2, (_0x1922645f / 1024).ToString(), _0xef8a9106.ToString(), (_0xef8a9106 / 1024).ToString());
                return false;
            }
            else
            {
                string _0x524f6e08 = "{0} 的资源预估生成的 HTML ({1}) 大小为 {2}KB [{3}KB ~ {4}KB]";
                _0x16bd684c._0xa3ba68cd(_0x524f6e08, _0x082d5a03, _0x39a6da9d, (_0x1077d590 / 1024).ToString(), (_0x33647b49 / 1024).ToString(), (_0x608c741a / 1024).ToString());
                string _0x78e1a6a5 = "当前 .unityweb 总大小: {0}KB，恭喜你成功了！！";
                _0x16bd684c._0xd8cc31d1(_0x78e1a6a5, (_0x1922645f / 1024).ToString());
                return true;
            }
        }
    }
}