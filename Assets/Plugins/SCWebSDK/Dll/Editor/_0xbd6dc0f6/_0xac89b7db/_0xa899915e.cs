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

namespace _0xa07739b8
{
    public static class _0xfb66840f
    {
        public static bool _0x8fd59343()
        {
            string _0xb5c355ce = _0xb0d27edb("python3", "--version");
            if (_0xb5c355ce.Contains("Python 3"))
            {
                return true;
            }

            string _0x3b5c557e = _0xb0d27edb("python", "--version");
            return _0x3b5c557e.Contains("Python 3");
        }

        public static bool _0xfb8db08d()
        {
            string _0x7ba5b10e = "python";
            string _0xb5f01a77 = _0xb0d27edb(_0x7ba5b10e, "--version");
            return _0xb5f01a77.Contains("Python 2");
        }

        
        public static string _0xb0d27edb(string _0xc159faf9, string _0x8c62c88c)
        {
            try
            {
                ProcessStartInfo _0x4d53cc4b = new ProcessStartInfo
                {
                    FileName = _0xc159faf9,
                    Arguments = _0x8c62c88c,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };
                using (Process _0x2f498fa6 = new Process())
                {
                    _0x2f498fa6.StartInfo = _0x4d53cc4b;
                    _0x2f498fa6.Start();
                    string _0x9af657aa = _0x2f498fa6.StandardOutput.ReadToEnd();
                    string _0xe52b65f2 = _0x2f498fa6.StandardError.ReadToEnd();
                    _0x2f498fa6.WaitForExit();
                    if (!string.IsNullOrEmpty(_0xe52b65f2))
                    {
                        return _0xe52b65f2; 
                    }

                    return _0x9af657aa;
                }
            }
            catch (Exception)
            {
                
                return "";
            }
        }

        
        
        
        
        
        public static bool _0xdb04814b(string _0x61449195, bool _0x7ace125f, out string _0x2bd8d5ff, bool _0x13729583 = true)
        {
            EditorUtility.DisplayCancelableProgressBar(_0x3a19ac8a._0x512da7a0("执行中..."), _0x3a19ac8a._0x512da7a0("执行cmd命令{0}", _0x61449195), 0.1f);
            string _0xb8dd5b97 = System.Environment.GetEnvironmentVariable("windir") + "\\system32";
            ProcessStartInfo _0xab418a07 = new ProcessStartInfo();
            _0xab418a07.FileName = string.Format("{0}\\{1}", _0xb8dd5b97, "cmd.exe");
            _0xab418a07.Arguments = @"C:\Windows\System32\cmd.exe";
            _0xab418a07.CreateNoWindow = !_0x7ace125f;
            _0xab418a07.ErrorDialog = true;
            _0xab418a07.UseShellExecute = false;
            if (_0xab418a07.UseShellExecute)
            {
                _0xab418a07.RedirectStandardOutput = false;
                _0xab418a07.RedirectStandardError = false;
                _0xab418a07.RedirectStandardInput = false;
            }
            else
            {
                _0xab418a07.RedirectStandardOutput = true; 
                _0xab418a07.RedirectStandardError = true; 
                _0xab418a07.RedirectStandardInput = true; 
                _0xab418a07.StandardOutputEncoding = System.Text.Encoding.UTF8;
                _0xab418a07.StandardErrorEncoding = System.Text.Encoding.UTF8;
            }

            _0xab418a07.Verb = "RunAs";
            Process _0xb21f96a6 = Process.Start(_0xab418a07);
            _0xb21f96a6.StandardInput.WriteLine("@echo off");
            _0xb21f96a6.StandardInput.WriteLine("chcp 65001");
            _0xb21f96a6.StandardInput.WriteLine(@"e:"); 
            _0xb21f96a6.StandardInput.WriteLine(_0x61449195);
            _0xb21f96a6.StandardInput.WriteLine("exit");
            _0xb21f96a6.StandardInput.AutoFlush = true;
            if (_0x13729583)
            {
                _0xb21f96a6.WaitForExit();
                _0x2bd8d5ff = _0xb21f96a6.StandardOutput.ReadToEnd();
                int _0x3f9968e8 = _0xb21f96a6.ExitCode;
                _0xb21f96a6.Close();
                if (_0x3f9968e8 != 0)
                {
                    Debug.Log("执行结果：" + _0x3f9968e8);
                    Debug.Log(_0x2bd8d5ff);
                }

                EditorUtility.ClearProgressBar();
                return _0x3f9968e8 == 0;
            }
            else
            {
                _0x2bd8d5ff = "";
            }

            EditorUtility.ClearProgressBar();
            return true;
        }

        
        
        
        
        
        
        
        public static bool _0x1f441cc2(string _0x1bb8454b, bool _0x71234605, out string _0x6b28e2b8, bool _0x617f2c01 = true, bool _0x240a6a2a = true)
        {
            EditorUtility.DisplayCancelableProgressBar(_0x3a19ac8a._0x512da7a0("执行中..."), _0x3a19ac8a._0x512da7a0("执行cmd命令{0}", _0x1bb8454b), 0.1f);
            Process _0x6e752182 = new Process();
            ProcessStartInfo _0xfdc7408e = new ProcessStartInfo(); 
            string _0x6eebb3a7 = System.Environment.GetEnvironmentVariable("windir") + "\\system32";
            _0xfdc7408e.FileName = string.Format("{0}\\{1}", _0x6eebb3a7, "cmd.exe");
            _0xfdc7408e.Arguments = $@"/c {_0x1bb8454b}";
            _0xfdc7408e.CreateNoWindow = !_0x71234605;
            _0xfdc7408e.UseShellExecute = false;
            _0xfdc7408e.RedirectStandardOutput = true;
            _0xfdc7408e.RedirectStandardError = true;
            _0x6e752182.StartInfo = _0xfdc7408e;
            _0x6e752182.Start();
            if (_0x240a6a2a)
            {
                string _0xad15aafa = _0x6e752182.StandardOutput.ReadToEnd();
                string _0xa55fbbaf = _0x6e752182.StandardError.ReadToEnd();
                _0x6e752182.WaitForExit();
                int _0x047f5559 = _0x6e752182.ExitCode;
                _0x6b28e2b8 = _0xad15aafa + _0xa55fbbaf;
                EditorUtility.ClearProgressBar();
                if (_0x047f5559 != 0 && _0x617f2c01)
                {
                    Debug.LogError(_0x3a19ac8a._0x512da7a0("运行命令失败{0}\n{1}", _0x1bb8454b, _0xad15aafa));
                }

                return _0x047f5559 == 0;
            }
            else
            {
                _0x6b28e2b8 = "";
                EditorUtility.ClearProgressBar();
            }

            return true;
        }

        
        
        
        
        
        
        
        
        public static bool _0xf2315609(string _0x4ca6e13a)
        {
            if (_0xbd42ee6f._0xecc2e243(_0x4ca6e13a))
            {
                Debug.LogError(_0x3a19ac8a._0x512da7a0("{0} 不存在，不能拉取", _0x4ca6e13a));
                return false;
            }

            if (_0x623e7381(_0x4ca6e13a))
            {
                Debug.LogError(_0x3a19ac8a._0x512da7a0("svn有冲突文件，请手动解决{0}", _0x4ca6e13a));
                _0xbd42ee6f._0xf7dc3d31(_0x4ca6e13a);
                return false;
            }

            _0x4ca6e13a = _0xbd42ee6f._0x17911df1(_0x4ca6e13a);
            string _0x50bc625f = "";
            if (!_0x4ca6e13a.Contains("E:") && !_0x4ca6e13a.Contains("e:"))
            {
                _0x50bc625f = $@"{_0x4ca6e13a[0]}:";
            }

            string _0x0051627a = $@"
{_0x50bc625f}
svn update ""{_0x4ca6e13a}""
            ";
            var _0x2c18ab67 = _0x1f441cc2(_0x0051627a, false, out var sDes);
            if (_0x2c18ab67 && sDes.Contains("conflicts"))
            {
                Debug.LogError(_0x3a19ac8a._0x512da7a0("svn拉取出现冲突，请手动解决{0}", _0x4ca6e13a));
                _0xbd42ee6f._0xf7dc3d31(_0x4ca6e13a);
                return false;
            }

            Debug.Log($"svn拉取{(_0x2c18ab67 ? "成功" : "失败")}。" + _0x4ca6e13a);
            return _0x2c18ab67;
        }

        
        
        
        
        
        public static bool _0x623e7381(string _0xa87ba47c)
        {
            if (_0xbd42ee6f._0xecc2e243(_0xa87ba47c))
            {
                Debug.LogError($"{_0xa87ba47c} 不存在");
                return false;
            }

            _0xbd42ee6f._0x25c08a36 _0xae1e6f23 = _0xbd42ee6f._0xa7ea8918(_0xa87ba47c);
            if (_0xae1e6f23 == _0xbd42ee6f._0x25c08a36._0xd921a821)
            {
                string _0x24290d3e = _0xa87ba47c + ".mine";
                if (File.Exists(_0x24290d3e))
                {
                    return true;
                }
            }
            else
            {
                var _0x3a194faf = Directory.GetFiles(_0xa87ba47c, "*.mine", SearchOption.AllDirectories);
                for (int _0x33461509 = 0; _0x33461509 < _0x3a194faf.Length; _0x33461509++)
                {
                    string _0x6f581777 = _0x3a194faf[_0x33461509];
                    _0x6f581777 = _0x6f581777.Replace(".mine", "");
                    if (File.Exists(_0x6f581777))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }
}