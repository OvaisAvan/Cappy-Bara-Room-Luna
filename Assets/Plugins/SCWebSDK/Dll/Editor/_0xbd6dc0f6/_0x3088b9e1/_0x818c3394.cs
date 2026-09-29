using UnityEngine;
using UnityEditor;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Text.RegularExpressions;

namespace _0xa07739b8
{
    public partial class _0xa7126670
    {
        private static string _0xbb6c20ef = null;
        
        
        
        public static void _0x7e094254(string _0xb62e7be8)
        {
            if (!_0x3ae754dc._0x387a6334)
                return;
            _0x16bd684c.Log("[LunaLog] 开始扫描产物目录以开启日志: {0}", _0xb62e7be8);
            try
            {
                EditorUtility.DisplayProgressBar("Luna 日志", "正在开启 Luna 运行时日志...", 0.1f);
                
                string _0x561e7a44 = Path.Combine(_0xb62e7be8, "applovin");
                if (Directory.Exists(_0x561e7a44))
                {
                    EditorUtility.DisplayProgressBar("Luna 日志", "处理 AppLovin 平台...", 0.3f);
                    var _0x7204e642 = Directory.GetFiles(_0x561e7a44, "*.html");
                    foreach (var html in _0x7204e642)
                        _0x5f996149(html);
                }

                
                string _0x5ce800b2 = Path.Combine(_0xb62e7be8, "mintegral");
                if (Directory.Exists(_0x5ce800b2))
                {
                    EditorUtility.DisplayProgressBar("Luna 日志", "处理 Mintegral 平台...", 0.6f);
                    
                    var _0x55195d23 = Directory.GetFiles(_0x5ce800b2, "*.html");
                    foreach (var html in _0x55195d23)
                        _0x5f996149(html);
                    var _0x4beb2f9e = Directory.GetDirectories(_0x5ce800b2);
                    foreach (var sub in _0x4beb2f9e)
                    {
                        var _0xc0772b4a = Directory.GetFiles(sub, "*.html");
                        foreach (var html in _0xc0772b4a)
                        {
                            if (_0x5f996149(html))
                            {
                                string _0xf5e7a21a = sub.TrimEnd('\\', '/') + ".zip";
                                if (File.Exists(_0xf5e7a21a))
                                {
                                    _0x98f141ea(html, _0xf5e7a21a);
                                    _0x16bd684c.Log("[LunaLog] 已同步更新 Mintegral 压缩包: {0}", _0xf5e7a21a);
                                }
                            }
                        }
                    }
                }

                
                string _0x828574ab = Path.Combine(_0xb62e7be8, "google");
                if (Directory.Exists(_0x828574ab))
                {
                    EditorUtility.DisplayProgressBar("Luna 日志", "处理 Google 平台...", 0.9f);
                    
                    var _0xdc56badb = Directory.GetFiles(_0x828574ab, "*.html");
                    foreach (var html in _0xdc56badb)
                        _0x5f996149(html);
                    var _0x0ab34672 = Directory.GetDirectories(_0x828574ab);
                    foreach (var sub in _0x0ab34672)
                    {
                        
                        var _0x2f7d763a = Directory.GetFiles(sub, "*.html");
                        if (_0x2f7d763a.Length == 0)
                            continue;
                        foreach (var html in _0x2f7d763a)
                        {
                            if (_0x5f996149(html))
                            {
                                
                                string _0x277721ec = sub.TrimEnd('\\', '/') + ".zip";
                                if (File.Exists(_0x277721ec))
                                {
                                    _0x98f141ea(html, _0x277721ec);
                                    _0x16bd684c.Log("[LunaLog] 已同步更新 Google 压缩包: {0}", _0x277721ec);
                                }
                                else
                                {
                                    _0x16bd684c._0x181d6923("[LunaLog] 未找到对应的 Google 压缩包: {0}", _0x277721ec);
                                }
                            }
                        }
                    }
                }

                _0x16bd684c._0xd8cc31d1("已根据配置开启 Luna 运行时日志 (window.scOpenLog = true)");
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[LunaLog] 开启日志异常: {0}", e.Message);
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }
        }

        private static bool _0x5f996149(string _0x4fe23dd5)
        {
            if (!File.Exists(_0x4fe23dd5))
                return false;
            try
            {
                string _0x283cafab = File.ReadAllText(_0x4fe23dd5);
                
                string _0x43370a41 = @"window\.scOpenLog\s*=\s*false";
                if (System.Text.RegularExpressions.Regex.IsMatch(_0x283cafab, _0x43370a41))
                {
                    _0x283cafab = System.Text.RegularExpressions.Regex.Replace(_0x283cafab, _0x43370a41, "window.scOpenLog = true");
                    File.WriteAllText(_0x4fe23dd5, _0x283cafab);
                    _0x16bd684c.Log("[LunaLog] 已修改 HTML 标志位: {0}", _0x4fe23dd5);
                    return true;
                }
            }
            catch (Exception e)
            {
                _0x16bd684c._0x181d6923("[LunaLog] 处理 HTML 异常: {0} {1}", _0x4fe23dd5, e.Message);
            }

            return false;
        }

        
        
        
        
        
        public static bool _0x3d806305(string _0x77b9933f, out string _0x70fbdcc2)
        {
            _0x70fbdcc2 = "";
            string _0x79bab287 = Path.Combine(_0x77b9933f, "LunaTemp/stage4/create-hub");
            if (!Directory.Exists(_0x79bab287))
            {
                _0x16bd684c._0xe8f5e459("未找到 Luna 构建临时目录,请先执行 Luna 构建(已被我们拦截上传): {0}", _0x79bab287);
                return false;
            }

            var _0xef85e873 = Directory.GetFiles(_0x79bab287, "*.zip");
            if (_0xef85e873 == null || _0xef85e873.Length == 0)
            {
                _0x16bd684c._0xe8f5e459("在目录下未找到 ZIP 文件: {0}", _0x79bab287);
                return false;
            }

            string _0x83818381 = Path.GetFileName(_0x77b9933f.TrimEnd('\\', '/'));
            _0x70fbdcc2 = Path.Combine(_0x77b9933f, _0x83818381 + ".zip");
            try
            {
                if (File.Exists(_0x70fbdcc2))
                    File.Delete(_0x70fbdcc2);
                File.Copy(_0xef85e873[0], _0x70fbdcc2, true);
                _0x16bd684c.Log("[Luna] 已拷贝 zip 到项目根: {0} -> {1}", _0xef85e873[0], _0x70fbdcc2);
                return true;
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[Luna] 拷贝 zip 失败: {0}", e.Message);
                return false;
            }
        }

        
        
        
        public static bool _0xeb8621ae(string _0xd6c00822, string _0xbde62053, out string _0xc95df8aa)
        {
            _0xc95df8aa = Path.GetFullPath(Path.Combine(_0xd6c00822, "web-mobile"));
            if (string.IsNullOrEmpty(_0xbde62053) || !File.Exists(_0xbde62053))
            {
                _0x16bd684c._0xe8f5e459("[Luna] 待解压的 zip 不存在: {0}", _0xbde62053);
                return false;
            }

            try
            {
                if (Directory.Exists(_0xc95df8aa))
                    Directory.Delete(_0xc95df8aa, true);
                Directory.CreateDirectory(_0xc95df8aa);
                _0x23e20d91(_0xbde62053, _0xc95df8aa);
                _0x16bd684c.Log("[Luna] 已解压到本工程目录: {0}", _0xc95df8aa);
                return true;
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[Luna] 解压失败: {0}", e.Message);
                return false;
            }
        }

        
        
        
        
        private static void _0x23e20d91(string _0x5f136dcc, string _0xd67b5e00)
        {
            string _0xd0381031 = Path.GetFullPath(_0xd67b5e00);
            if (!_0xd0381031.EndsWith(Path.DirectorySeparatorChar.ToString()))
            {
                _0xd0381031 += Path.DirectorySeparatorChar;
            }

            using (FileStream _0x04077d3d = new FileStream(_0x5f136dcc, FileMode.Open, FileAccess.Read, FileShare.Read))
            using (ZipArchive _0x09f56d10 = new ZipArchive(_0x04077d3d, ZipArchiveMode.Read))
            {
                foreach (ZipArchiveEntry oEntry in _0x09f56d10.Entries)
                {
                    if (string.IsNullOrEmpty(oEntry.FullName))
                        continue;
                    string _0x935caeea = oEntry.FullName.Replace('/', Path.DirectorySeparatorChar);
                    string _0x5b0892ab = Path.Combine(_0xd67b5e00, _0x935caeea);
                    string _0xa1ed1fca = Path.GetFullPath(_0x5b0892ab);
                    if (!_0xa1ed1fca.StartsWith(_0xd0381031, StringComparison.OrdinalIgnoreCase))
                    {
                        _0x16bd684c._0xe8f5e459("Zip条目路径非法，已阻止解压：{0}", oEntry.FullName);
                        continue;
                    }

                    if (_0xa1ed1fca.EndsWith(Path.DirectorySeparatorChar.ToString()) || string.IsNullOrEmpty(oEntry.Name))
                    {
                        Directory.CreateDirectory(_0xa1ed1fca);
                        continue;
                    }

                    string _0xb1f901f2 = Path.GetDirectoryName(_0xa1ed1fca);
                    if (!string.IsNullOrEmpty(_0xb1f901f2))
                        Directory.CreateDirectory(_0xb1f901f2);
                    using (Stream _0x738e5ae7 = oEntry.Open())
                    using (FileStream _0x6832b4b5 = new FileStream(_0xa1ed1fca, FileMode.Create, FileAccess.Write, FileShare.None))
                    {
                        _0x738e5ae7.CopyTo(_0x6832b4b5);
                    }
                }
            }
        }

        
        
        
        private static void _0x98f141ea(string _0x496a6eac, string _0x8968cefa)
        {
            if (File.Exists(_0x8968cefa))
                File.Delete(_0x8968cefa);
            using (FileStream _0xcabe4b1e = File.Create(_0x8968cefa))
            using (ZipArchive _0x800c34c0 = new ZipArchive(_0xcabe4b1e, ZipArchiveMode.Create))
            {
                ZipArchiveEntry _0x3dcf17eb = _0x800c34c0.CreateEntry(Path.GetFileName(_0x496a6eac), System.IO.Compression.CompressionLevel.Optimal);
                using (Stream _0xdfe74fba = _0x3dcf17eb.Open())
                using (FileStream _0x7c15d3c7 = new FileStream(_0x496a6eac, FileMode.Open, FileAccess.Read, FileShare.Read))
                {
                    _0x7c15d3c7.CopyTo(_0xdfe74fba);
                }
            }
        }

        
        
        
        
        
        
        public static void _0xb76175c8()
        {
            string _0xd211c97a = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
            try
            {
                EditorUtility.DisplayProgressBar("Luna 导出", "阶段 1/2：拷贝 LunaTemp zip 并改名为 项目名.zip...", 0.4f);
                if (!_0x3d806305(_0xd211c97a, out string sCopiedZipPath))
                    return;
                EditorUtility.DisplayProgressBar("Luna 导出", "阶段 2/2：解压 项目名.zip 到 web-mobile/...", 0.8f);
                if (!_0xeb8621ae(_0xd211c97a, sCopiedZipPath, out _))
                    return;
                _0x16bd684c._0xd8cc31d1("已生成压缩包：{0}", sCopiedZipPath);
                EditorUtility.RevealInFinder(sCopiedZipPath);
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("导出 web-mobile 压缩包失败: {0}", e.Message);
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }
        }

        
        
        
        
        
        public static void _0x4d057338(Action<string, bool> _0xabdef555)
        {
            _0xcdbdfee6(_0x89652e62 =>
            {
                string _0x1e876130 = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
                try
                {
                    EditorUtility.DisplayProgressBar("Luna 打包", "阶段 2/3：拷贝 zip 到项目根并改名...", 0.4f);
                    if (!_0x3d806305(_0x1e876130, out string sCopiedZipPath))
                        return;
                    EditorUtility.DisplayProgressBar("Luna 打包", "阶段 3/3：解压到 web-mobile/...", 0.7f);
                    if (!_0xeb8621ae(_0x1e876130, sCopiedZipPath, out string sWebMobileFolder))
                        return;
                    _0x16bd684c._0xd8cc31d1("[Luna] web-mobile 准备就绪,移交给调用者继续编排 ({0})...", (_0x89652e62 ? "Base122" : "Base64"));
                    _0xabdef555?.Invoke(sWebMobileFolder, _0x89652e62);
                }
                catch (Exception e)
                {
                    _0x16bd684c._0xe8f5e459("[Luna] 准备 web-mobile 异常: {0}", e.Message);
                }
                finally
                {
                    EditorUtility.ClearProgressBar();
                }
            });
        }

        
        
        
        public static void _0xbb397fac()
        {
            _0xcdbdfee6(_0xd897d765 =>
            {
                _0x16bd684c._0xd8cc31d1("[Luna] 构建完成,正在导出 web-mobile...");
                _0xb76175c8();
            });
        }

        
        
        
        
        public static void _0xcdbdfee6(Action<bool> _0x7d6c9790)
        {
            if (!_0xb94cf3a3())
            {
                return;
            }

            _0x9cb0cdbc();
            if (!_0x21d4ad11() && !_0x3ae754dc._0x1b3388da)
            {
                _0x16bd684c._0xe8f5e459("[Luna构建] 全量检测发现错误，已停止打包。请先修复上述错误，或开启“忽略检测报错”强制打包。");
                return;
            }

            bool _0x47e87334 = _0x3ae754dc._0xbbbeea2a;
            if (!_0x2287d72a(out var process, out var logLines))
                return;
            EditorUtility.DisplayProgressBar("Luna 构建", "正在执行 Luna 构建 (Jake project:deploy)...", 0.1f);
            process.EnableRaisingEvents = true;
            process.Exited += (_0x5acfbaa9, _0xe3e0ed78) =>
            {
                EditorApplication.delayCall += () =>
                {
                    EditorUtility.ClearProgressBar();
                    bool _0x27085e99 = _0x85ccbfde(process.ExitCode, logLines);
                    if (process.ExitCode == 0 || _0x27085e99)
                    {
                        string _0x57d80cc6 = _0x27085e99 ? "[Luna] 构建完成！" : "[Luna] 构建打包成功！";
                        _0x16bd684c._0xd8cc31d1(_0x57d80cc6);
                        _0x7d6c9790?.Invoke(_0x47e87334);
                    }
                    else
                    {
                        _0xbef061e5(process.ExitCode, logLines);
                        _0xe70c56a6();
                    }

                    process.Dispose();
                };
            };
            try
            {
                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
            }
            catch (Exception e)
            {
                EditorUtility.ClearProgressBar();
                _0x16bd684c._0xe8f5e459("启动 Luna 构建进程失败: {0}", e.Message);
            }
        }

        private static bool _0xb94cf3a3()
        {
            try
            {
                string _0x19d13be4 = _0xa0573c1e();
                if (string.IsNullOrEmpty(_0x19d13be4))
                {
                    _0x16bd684c._0xe8f5e459(_0x3a19ac8a._0x512da7a0("[Luna构建] 未能定位到 Luna 插件目录，请检查 manifest.json 配置。"));
                    return false;
                }

                string _0xde25f120 = Path.Combine(_0x19d13be4, "pipeline");
                string _0x27244e66 = Path.Combine(_0xde25f120, ".auth_credentials.user");
                string _0xa90fe8ef = Path.Combine(_0xde25f120, ".auth_response.user");
                if (File.Exists(_0x27244e66) && File.Exists(_0xa90fe8ef))
                {
                    return true;
                }

                _0x16bd684c._0xe8f5e459(_0x3a19ac8a._0x512da7a0("[Luna构建] 检测到 Luna 授权文件缺失，无法继续构建。请先打开 Luna 的面板成功构建一次（完成登录/授权）后再重试。"));
                _0xe70c56a6();
                EditorUtility.DisplayDialog(_0x3a19ac8a._0x512da7a0("Luna 构建拦截"), _0x3a19ac8a._0x512da7a0("检测到 Luna 授权文件缺失。\n请先使用 Luna 的官方面板成功构建一次（完成登录/授权）后再重试。"), _0x3a19ac8a._0x512da7a0("知道了"));
                return false;
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[Luna构建] 授权文件检测异常，已拦截构建：{0}", e.Message);
                return false;
            }
        }

        private static bool _0x2287d72a(out System.Diagnostics.Process _0x90a0e71c, out List<string> _0x2265a7b8)
        {
            _0x90a0e71c = null;
            var _0x636a78f4 = new List<string>();
            _0x2265a7b8 = _0x636a78f4;
            string _0x0d7d5f7c = _0xa0573c1e();
            if (string.IsNullOrEmpty(_0x0d7d5f7c))
            {
                _0x16bd684c._0xe8f5e459("[Luna] 未能定位到 Luna 插件目录，请检查 manifest.json 配置。");
                return false;
            }

            string _0x0746a4ee = Path.GetFullPath(Application.dataPath + "/../");
            // macOS compat: the SDK's Luna launcher was Windows-only (cmd.exe +
            // tools/node/win64/node.exe). On the Mac editor use the bundled
            // tools/node/mac64/bin/node and run jake.js directly (no cmd shell).
            bool _0xIsWinEditor = Application.platform == RuntimePlatform.WindowsEditor;
            string _0x68bfa735 = Path.Combine(_0x0d7d5f7c,
                _0xIsWinEditor ? "tools/node/win64/node.exe" : "tools/node/mac64/bin/node");
            string _0xa53dd414 = Path.Combine(_0x0d7d5f7c, "pipeline/jake.js");
            string _0xd6bd2d9b = Path.Combine(_0x0d7d5f7c, "pipeline");
            if (!File.Exists(_0x68bfa735))
            {
                _0x16bd684c._0xe8f5e459("未找到 Luna 内置 Node: {0}", _0x68bfa735);
                return false;
            }

            _0x16bd684c.Log("开始执行 Luna project:deploy... \n项目根目录: {0}\n工作目录: {1}", _0x0746a4ee, _0xd6bd2d9b);
            string _0xJakeArgs = $"\"{_0xa53dd414}\" project:deploy PROJECT_PATH=\"{_0x0746a4ee.TrimEnd('\\', '/')}\" LUNA_PACKAGE_PATH=\"{_0x0d7d5f7c.TrimEnd('\\', '/')}\" TARGET_PLATFORM=playground";
            _0x90a0e71c = new System.Diagnostics.Process();
            if (_0xIsWinEditor)
            {
                _0x90a0e71c.StartInfo.FileName = "cmd.exe";
                _0x90a0e71c.StartInfo.Arguments = "/c \"\"" + _0x68bfa735 + "\" " + _0xJakeArgs + "\"";
            }
            else
            {
                try
                {
                    var _0xChmod = System.Diagnostics.Process.Start("/bin/chmod", "+x \"" + _0x68bfa735 + "\"");
                    if (_0xChmod != null) _0xChmod.WaitForExit(2000);
                }
                catch { }
                _0x90a0e71c.StartInfo.FileName = _0x68bfa735;
                _0x90a0e71c.StartInfo.Arguments = _0xJakeArgs;
            }
            _0x90a0e71c.StartInfo.WorkingDirectory = _0xd6bd2d9b;
            _0x90a0e71c.StartInfo.UseShellExecute = false;
            _0x90a0e71c.StartInfo.RedirectStandardOutput = true;
            _0x90a0e71c.StartInfo.RedirectStandardError = true;
            _0x90a0e71c.StartInfo.CreateNoWindow = true;
            _0x90a0e71c.StartInfo.StandardOutputEncoding = Encoding.UTF8;
            _0x90a0e71c.StartInfo.StandardErrorEncoding = Encoding.UTF8;
            _0x90a0e71c.OutputDataReceived += (_0x82303f84, _0x0cea0259) =>
            {
                if (string.IsNullOrEmpty(_0x0cea0259.Data))
                    return;
                _0x636a78f4.Add(_0x0cea0259.Data);
                if (_0x0cea0259.Data.Contains("[ Stage"))
                {
                    _0x16bd684c._0xa3ba68cd(_0x0cea0259.Data);
                    
                    string _0x3214091d = _0x0cea0259.Data;
                    EditorApplication.delayCall += () =>
                    {
                        float _0x85b852a9 = 0.1f;
                        if (_0x3214091d.Contains("Stage 1"))
                            _0x85b852a9 = 0.2f;
                        else if (_0x3214091d.Contains("Stage 2"))
                            _0x85b852a9 = 0.4f;
                        else if (_0x3214091d.Contains("Stage 3"))
                            _0x85b852a9 = 0.6f;
                        else if (_0x3214091d.Contains("Stage 4"))
                            _0x85b852a9 = 0.8f;
                        EditorUtility.DisplayProgressBar("Luna 构建", _0x3214091d, _0x85b852a9);
                    };
                }
            };
            _0x90a0e71c.ErrorDataReceived += (_0x82f5716b, _0x2bdbe988) =>
            {
                if (string.IsNullOrEmpty(_0x2bdbe988.Data))
                    return;
                _0x636a78f4.Add("[ERROR] " + _0x2bdbe988.Data);
                if (_0x2bdbe988.Data.IndexOf("Unable to authorize user", StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    _0x636a78f4.Add(_0x3a19ac8a._0x512da7a0("[HINT] 检测到 Unable to authorize user。请先使用 Luna 的面板成功构建一次（完成登录/授权）后再重试。"));
                }
            };
            return true;
        }

        private static bool _0x85ccbfde(int _0xc621df9b, List<string> _0x339d997d)
        {
            if (_0xc621df9b == 0)
                return false;
            if (_0x339d997d == null)
                return false;
            foreach (var line in _0x339d997d)
            {
                if (!string.IsNullOrEmpty(line) && line.Contains("Package upload failed"))
                    return true;
            }

            return false;
        }

        private static void _0xbef061e5(int _0xe5a1c27d, List<string> _0x33a719a0)
        {
            _0x16bd684c._0xe8f5e459("[Luna] 构建合并失败 (退出码: {0})，正在导出详细日志：", _0xe5a1c27d.ToString());
            if (_0x33a719a0 != null)
            {
                foreach (var line in _0x33a719a0)
                {
                    _0x16bd684c._0xe8f5e459(line);
                }
            }

            _0x16bd684c._0xe8f5e459("----------------- 日志结束 -----------------");
            _0x16bd684c._0xe8f5e459("请通过Luna的面板查看具体报错");
        }

        private static void _0xe70c56a6()
        {
            try
            {
                if (EditorApplication.ExecuteMenuItem("Tools/Unity Playworks Plugin"))
                {
                    _0x16bd684c.Log("[Luna] 已自动打开官方插件面板。");
                }
                else
                {
                    _0xc5430093._0xdec825e5();
                }
            }
            catch (Exception)
            {
                _0xc5430093._0xdec825e5();
            }
        }

        
        
        
        public static void _0x39a68889()
        {
            
            string _0xcd0fd3af = EditorUtility.OpenFilePanel("选择文件", "", "html");
            if (string.IsNullOrEmpty(_0xcd0fd3af))
            {
                return;
            }

            try
            {
                
                
                string _0xa4ee7ac8 = File.ReadAllText(_0xcd0fd3af);
                string _0xc79035b7 = "window.scOpenLog = false";
                string _0xcfd0e111 = "window.scOpenLog = true";
                if (_0xa4ee7ac8.Contains(_0xc79035b7))
                {
                    _0xa4ee7ac8 = _0xa4ee7ac8.Replace(_0xc79035b7, _0xcfd0e111);
                    File.WriteAllText(_0xcd0fd3af, _0xa4ee7ac8);
                    _0x16bd684c._0xd8cc31d1("开启Luna日志成功：{0}", _0xcd0fd3af);
                    EditorUtility.RevealInFinder(_0xcd0fd3af);
                }
                else if (_0xa4ee7ac8.Contains(_0xcfd0e111))
                {
                    _0x16bd684c._0x181d6923("日志已处于开启状态 (window.scOpenLog = true)");
                    EditorUtility.RevealInFinder(_0xcd0fd3af);
                }
                else
                {
                    _0x16bd684c._0xe8f5e459("未在 HTML 中找到 \"window.scOpenLog = false\"，请检查文件内容。");
                }
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("开启Luna日志失败: {0}", e.Message);
            }
        }

        
        
        
        public static string _0xa0573c1e()
        {
            if (!string.IsNullOrEmpty(_0xbb6c20ef))
                return _0xbb6c20ef;
            try
            {
                string _0xb1057697 = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
                string _0x397d11d1 = Path.Combine(_0xb1057697, "Packages/manifest.json");
                if (!File.Exists(_0x397d11d1))
                    return "";
                string _0x7e1b8d92 = File.ReadAllText(_0x397d11d1);
                
                string[] _0x0d886c5c =
                {
                    "com.unity.playworks.upp",
                    "uk.lunalabs.luna"
                };
                foreach (var pkg in _0x0d886c5c)
                {
                    string _0xe7d9946e = string.Format("\"{0}\"\\s*:\\s*\"([^\"]+)\"", pkg);
                    var _0x8f87789e = Regex.Match(_0x7e1b8d92, _0xe7d9946e);
                    if (_0x8f87789e.Success)
                    {
                        string _0x84bd632b = _0x8f87789e.Groups[1].Value;
                        if (_0x84bd632b.StartsWith("file:"))
                        {
                            string _0x87932c6d = _0x84bd632b.Substring(5);
                            
                            string _0xb1cf5499 = Path.Combine(_0xb1057697, "Packages");
                            string _0xa85a18a0 = Path.GetFullPath(Path.Combine(_0xb1cf5499, _0x87932c6d));
                            if (Directory.Exists(_0xa85a18a0))
                            {
                                
                                if (Path.GetFileName(_0xa85a18a0).Equals("scripts", StringComparison.OrdinalIgnoreCase))
                                {
                                    _0xa85a18a0 = Path.GetDirectoryName(_0xa85a18a0);
                                }

                                _0xbb6c20ef = _0xa85a18a0;
                                
                                return _0xa85a18a0;
                            }
                        }
                        else
                        {
                            
                            string _0x93c0e01e = Path.Combine(_0xb1057697, "Library/PackageCache");
                            if (Directory.Exists(_0x93c0e01e))
                            {
                                var _0x872dff2d = Directory.GetDirectories(_0x93c0e01e, pkg + "@*");
                                if (_0x872dff2d.Length > 0)
                                {
                                    _0xbb6c20ef = Path.GetFullPath(_0x872dff2d[0]);
                                    return _0xbb6c20ef;
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                _0x16bd684c._0xe8f5e459("[Luna] 获取插件目录异常: {0}", e.Message);
            }

            return "";
        }
    }
}