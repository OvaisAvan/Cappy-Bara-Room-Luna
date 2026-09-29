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

namespace _0xa07739b8
{
    public static class _0xc9be004e
    {
        
        
        
        
        
        public static (string, string) _0x0d22d9a5(string _0xbe92d940)
        {
            string _0x28169ed0 = Path.GetDirectoryName(_0xbe92d940);
            string _0xa7901387 = Path.GetFileName(_0x28169ed0);
            return (_0xa7901387, _0x28169ed0);
        }

        
        
        
        
        public static bool _0x35a36011
        {
            get
            {
                
                var _0xc2c05105 = _0x0d22d9a5(Application.dataPath);
                string _0xec2771a9 = _0xc2c05105.Item1;
                
                var _0xabe3f2f3 = _0x0d22d9a5(_0xc2c05105.Item2);
                if (_0xabe3f2f3.Item1 != "Resources")
                {
                    return false;
                }

                var _0xf0da2df0 = _0x0d22d9a5(_0xabe3f2f3.Item2);
                if (_0xf0da2df0.Item1 == _0xec2771a9 && _0xabe3f2f3.Item2.IndexOf("branchs") == -1)
                {
                    
                    return true;
                }

                
                var _0x539d4dee = _0x0d22d9a5(_0xabe3f2f3.Item2);
                if (_0x539d4dee.Item1 != "branchs")
                {
                    return false;
                }

                var _0x2b82c263 = _0x0d22d9a5(_0x539d4dee.Item2);
                return _0x2b82c263.Item1 == _0xec2771a9;
            }
        }

        
        
        
        
        public static void _0x1b5a8b5a(string _0x9c0de987)
        {
            DirectoryInfo _0x2aa2234d = new DirectoryInfo(_0x9c0de987);
            if (_0x2aa2234d.Exists)
            {
                Directory.Delete(_0x9c0de987, true);
            }

            Directory.CreateDirectory(_0x9c0de987);
        }

        
        
        
        
        
        
        
        
        
        public static bool _0xd4f06a6a(string _0x0ebc34ad, string _0xe51fff8e, string[] _0x27fe299f = null, bool _0xc37241c9 = true, bool _0x52a3cf0c = true)
        {
            DirectoryInfo _0x5f162b46 = new DirectoryInfo(_0x0ebc34ad);
            DirectoryInfo _0x3052a165 = new DirectoryInfo(_0xe51fff8e);
            if (!_0x5f162b46.Exists)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("来源中不存在:{0}", _0x0ebc34ad));
                return false;
            }

            if (_0x3052a165.FullName.StartsWith(_0x5f162b46.FullName, StringComparison.CurrentCultureIgnoreCase) && Path.GetFileName(_0x3052a165.FullName) != Path.GetFileName(_0xe51fff8e))
            {
                throw new Exception(_0x3a19ac8a._0x512da7a0("父目录不能拷贝到子目录！"));
            }

            if (!_0x3052a165.Exists)
            { 
                _0x3052a165.Create();
            }

            FileInfo[] _0xad1ffb04 = _0x5f162b46.GetFiles();
            DirectoryInfo[] _0xd61903d2 = _0x5f162b46.GetDirectories();
            if (_0xad1ffb04.Length == 0 && _0xd61903d2.Length == 0)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("当前项目中:{0}文件夹为空", _0x0ebc34ad));
                return false;
            }

            
            for (int _0x58871a8f = 0; _0x58871a8f < _0xad1ffb04.Length; _0x58871a8f++)
            {
                _0xd10d7aae(_0xad1ffb04[_0x58871a8f].FullName, Path.Combine(_0x3052a165.FullName, _0xad1ffb04[_0x58871a8f].Name), _0xc37241c9);
            }

            
            if (_0x52a3cf0c)
            {
                for (int _0x59eef201 = 0; _0x59eef201 < _0xd61903d2.Length; _0x59eef201++)
                {
                    string _0x2ab5dda0 = _0xd61903d2[_0x59eef201].FullName;
                    _0xd4f06a6a(_0x2ab5dda0, Path.Combine(_0x3052a165.FullName, _0xd61903d2[_0x59eef201].Name), _0x27fe299f, _0xc37241c9, _0x52a3cf0c);
                }
            }

            return true;
        }

        
        
        
        
        
        public static bool _0xd10d7aae(string _0x051d7bfe, string _0x79cea49e, bool _0xc8105e3b = true)
        {
            if (!File.Exists(_0x051d7bfe))
            {
                Debug.Log($"<color=red>{_0x3a19ac8a._0x512da7a0("CopyFile:{0}文件不存在", _0x051d7bfe)}</color>");
                return false;
            }

            if (!File.Exists(_0x79cea49e))
            {
                File.Copy(_0x051d7bfe, _0x79cea49e, _0xc8105e3b);
                return true;
            }

            if (_0xc8105e3b)
            {
                File.Delete(_0x79cea49e);
                File.Copy(_0x051d7bfe, _0x79cea49e, _0xc8105e3b);
            }

            return true;
        }

        
        
        
        
        public static void _0x2e1dbaf8(UnityEngine.Object _0x35cb0894)
        {
            if (!Application.isPlaying && _0x35cb0894 != null)
            {
                EditorUtility.SetDirty(_0x35cb0894);
                try
                {
                    AssetDatabase.SaveAssets();
                }
                catch (System.Exception e)
                {
                    Debug.LogWarning(e.Message);
                }
            }
        }

        
        
        
        
        
        public static string _0x4cfb25ca(Transform _0x51b3acb3)
        {
            if (_0x51b3acb3.parent == null)
            {
                return _0x51b3acb3.name;
            }
            else
            {
                return _0x4cfb25ca(_0x51b3acb3.parent) + "/" + _0x51b3acb3.name;
            }
        }

        
        
        
        
        public static string[] _0xc9ae6b43()
        {
            List<string> _0x86c2b56b = new List<string>();
            List<string> _0xab99e2dc = new List<string>();
            EditorBuildSettingsScene[] _0xa81b440c = EditorBuildSettings.scenes;
            foreach (EditorBuildSettingsScene pCurScene in _0xa81b440c)
            {
                if (pCurScene == null)
                    continue;
                _0x86c2b56b.Add(pCurScene.path);
                
                if (pCurScene.enabled)
                {
                    _0xab99e2dc.Add(pCurScene.path);
                }
            }

            if (_0xab99e2dc.Count == 0 && _0x86c2b56b.Count > 0)
            {
                _0xab99e2dc.Add(_0x86c2b56b[0]);
            }

            if (_0xab99e2dc.Count == 0)
            { 
                throw new Exception(_0x3a19ac8a._0x512da7a0("请在build setting 勾选上对应的场景"));
            }

            return _0xab99e2dc.ToArray();
        }

        
        
        public static string _0xf4a2f258(bool _0x0c254c8a, string _0xa0e47bb0, string _0xd9400f0f = "", string _0xcce009f7 = "", string _0x1fc3fafa = "")
        {
            if (!File.Exists(_0xa0e47bb0))
            {
                Debug.LogError("Batch file not found: " + _0xa0e47bb0);
                return "";
            }

            if (_0x0c254c8a)
            {
                string _0x1aed4c5b = _0xa0e47bb0; 
                string _0xf09db3f1 = _0xd9400f0f; 
                
                
                string _0x8501f2ef = $"/c \"{_0x1aed4c5b}\" {_0xf09db3f1} {_0xcce009f7} {_0x1fc3fafa}";
                
                Process _0xe517df4b = _0xd5ef40e5("cmd.exe", _0x8501f2ef, "", _0x83b213ae: false);
                _0xe517df4b.Start();
                _0xe517df4b.WaitForExit();
                return "";
            }

            Process _0xf0a79edc = new Process();
            _0xf0a79edc.StartInfo.FileName = _0xa0e47bb0;
            
            string _0x87bbf690 = $"\"{_0xd9400f0f}\" \"{_0xcce009f7}\" \"{_0x1fc3fafa}\"";
            _0xf0a79edc.StartInfo.Arguments = _0x87bbf690;
            _0xf0a79edc.StartInfo.WorkingDirectory = Path.GetDirectoryName(_0xa0e47bb0);
            _0xf0a79edc.StartInfo.RedirectStandardOutput = true;
            _0xf0a79edc.StartInfo.RedirectStandardError = true;
            _0xf0a79edc.StartInfo.UseShellExecute = false;
            _0xf0a79edc.StartInfo.CreateNoWindow = true;
            string _0x264dda42 = "";
            Action<string, bool> _0x930a406a = (string _0xe65dcb9d, bool _0xc349bf1a) =>
            {
                if (string.IsNullOrEmpty(_0xe65dcb9d))
                {
                    return;
                }

                _0xe65dcb9d = _0xe65dcb9d.Replace("\x1b[0m", "");
                if (_0xe65dcb9d.Contains("\x1b[31m") || _0xc349bf1a)
                {
                    _0xe65dcb9d = _0xe65dcb9d.Replace("\x1b[31m", "");
                    Debug.LogError("<color=#FF4D4D><b>" + _0xe65dcb9d + "</b></color>");
                }
                else if (_0xe65dcb9d.Contains("\x1b[33m"))
                {
                    _0xe65dcb9d = _0xe65dcb9d.Replace("\x1b[33m", "");
                    Debug.LogWarning("<color=#FFC107><b>" + _0xe65dcb9d + "</b></color>");
                }
                else if (_0xe65dcb9d.Contains("\x1b[32m"))
                {
                    _0xe65dcb9d = _0xe65dcb9d.Replace("\x1b[32m", "");
                    Debug.Log("<color=#00FF0C><b>" + _0xe65dcb9d + "</b></color>");
                }
                else if (_0xe65dcb9d.Contains("\x1b[37m"))
                {
                    _0xe65dcb9d = _0xe65dcb9d.Replace("\x1b[37m", "");
                    Debug.Log("" + _0xe65dcb9d + "");
                }
                else
                {
                    Debug.Log(_0xe65dcb9d);
                }

                _0x264dda42 = _0x264dda42 + _0xe65dcb9d + "\n";
            };
            _0xf0a79edc.OutputDataReceived += (_0xb79c3153, _0x20a4b8a9) =>
            {
                _0x930a406a(_0x20a4b8a9.Data, false);
            };
            _0xf0a79edc.ErrorDataReceived += (_0x71122608, _0x02e0b3ad) =>
            {
                _0x930a406a(_0x02e0b3ad.Data, true);
            };
            _0xf0a79edc.Start();
            _0xf0a79edc.BeginOutputReadLine();
            _0xf0a79edc.BeginErrorReadLine();
            _0xf0a79edc.WaitForExit();
            if (_0xf0a79edc.ExitCode != 0)
            {
                Debug.LogError($"Process exited with code: {_0xf0a79edc.ExitCode}");
            }

            _0xf0a79edc.Close();
            return _0x264dda42;
        }

        
        
        
        
        public static void _0x5d43c2a2(string _0x72fb990d)
        {
            string _0xe83ebcd7 = "python3"; 
            string _0x30812935 = "-m http.server"; 
            string _0xfb546d65 = _0x72fb990d; 
            var _0xe277b6f5 = EditorPrefs.GetInt("WebServer", 0);
            if (_0xe277b6f5 != 0)
            {
                _0x5efbdcd2(_0xe83ebcd7, _0xe277b6f5);
            }

            
            Process _0xa5c4104a = _0xd5ef40e5(_0xe83ebcd7, _0x30812935, _0xfb546d65, _0x83b213ae: false);
            _0xa5c4104a.Start();
            EditorPrefs.SetInt("WebServer", _0xa5c4104a.Id);
        }

        
        
        
        
        
        public static void _0x5efbdcd2(string _0x8b406681, int _0x1348e2f5)
        {
            
            Process[] _0xe7c00237 = Process.GetProcessesByName(_0x8b406681);
            if (_0xe7c00237.Length > 0)
            {
                foreach (Process process in _0xe7c00237)
                {
                    if (process.Id == _0x1348e2f5 || _0x1348e2f5 == -1)
                    {
                        try
                        {
                            process.Kill(); 
                            process.Close(); 
                            Debug.Log($"End Process: {_0x8b406681}");
                        }
                        catch (Exception ex)
                        {
                            Debug.LogWarning($"End Process Failed: {ex.Message}");
                        }

                        break;
                    }
                }
            }
            else
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("未找到运行的 HTTP 服务器进程。"));
            }
        }

        public static Process _0xd5ef40e5(string _0xfd52871d, string _0x263a2c81, string _0xd64ae43a = "", bool _0x83b213ae = true)
        {
            Process _0x5727c154 = new Process();
            _0x5727c154.StartInfo.FileName = _0xfd52871d; 
            _0x5727c154.StartInfo.Arguments = _0x263a2c81; 
            _0x5727c154.StartInfo.CreateNoWindow = _0x83b213ae; 
            _0x5727c154.StartInfo.UseShellExecute = true; 
            _0x5727c154.StartInfo.RedirectStandardOutput = false; 
            _0x5727c154.StartInfo.RedirectStandardError = false; 
            _0x5727c154.StartInfo.RedirectStandardInput = false; 
            _0x5727c154.StartInfo.ErrorDialog = true; 
            
            if (!string.IsNullOrEmpty(_0xd64ae43a))
            {
                _0x5727c154.StartInfo.WorkingDirectory = _0xd64ae43a;
            }

            return _0x5727c154;
        }

        
        
        
        
        
        public static void _0x33b8e842(Func<bool> _0x76f16285, int _0xb971807c = 100)
        {
            for (int _0x568b5d56 = 0; _0x568b5d56 < _0xb971807c; _0x568b5d56++)
            {
                var _0x69009261 = _0x76f16285();
                if (!_0x69009261)
                {
                    Thread.Sleep(100);
                    continue;
                }

                return;
            }

            Debug.LogWarning("WaitByFun over MaxCount");
        }

        
        
        
        
        
        public static string _0xaad172f5(string _0x69961dfb)
        {
            Version _0x7689fe87 = new Version("0.0.0");
            var _0x84c8b97f = Directory.GetDirectories(_0x69961dfb);
            string _0x603c7f80 = null;
            for (var _0x1c6659ad = 0; _0x1c6659ad < _0x84c8b97f.Length; _0x1c6659ad++)
            {
                string _0x414444ff = _0x84c8b97f[_0x1c6659ad];
                string _0xa5d88f12 = Path.GetFileName(_0x414444ff);
                if (!_0xa5d88f12.Contains("."))
                    continue;
                Version _0x23f0f336 = new Version(_0xa5d88f12);
                if (_0x7689fe87.CompareTo(_0x23f0f336) < 0)
                {
                    _0x7689fe87 = _0x23f0f336;
                    _0x603c7f80 = _0xa5d88f12;
                }
            }

            return _0x603c7f80;
        }

        
        
        
        
        
        public static void _0x4083332a(Action _0xb96560f5, float _0xafd9a3cc)
        {
            _0xca45caea(_0xb96560f5, _0xafd9a3cc);
#pragma warning restore CS4014
        }

        
        
        
        
        
        
        private static async Task _0xca45caea(Action _0x2755b1a8, float _0x31feac83)
        {
            await Task.Delay(TimeSpan.FromSeconds(_0x31feac83));
            _0x2755b1a8();
        }

        
        
        
        
        public static string[] _0x82d4b299()
        {
            string[] _0x662a6b53 = AssetDatabase.FindAssets("t:Scene").Select(_0x8d7d91d1 => AssetDatabase.GUIDToAssetPath(_0x8d7d91d1)).Where(_0x27e588f5 => !_0x27e588f5.StartsWith("Packages/") && 
 !_0x27e588f5.StartsWith("Library/") && 
 !new FileInfo(Path.GetFullPath(_0x27e588f5)).IsReadOnly 
            ).ToArray();
            return _0x662a6b53;
        }
    }
}