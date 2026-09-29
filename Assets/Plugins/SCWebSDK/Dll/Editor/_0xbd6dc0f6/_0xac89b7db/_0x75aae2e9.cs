using UnityEngine;
using UnityEditor;
using System;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Threading;
using UnityEditor.Build;
using UnityEditor.WebGL;
using System.Text.RegularExpressions;

namespace _0xa07739b8
{
    public static class _0xbd42ee6f
    {
        
        
        
        public enum _0x25c08a36
        {
            [global::UnityEngine.InspectorName("File")]
            _0xd921a821,
            [global::UnityEngine.InspectorName("Folder")]
            _0x5a2ce685,
            [global::UnityEngine.InspectorName("NoExistFile")]
            _0x4701e15d,
            [global::UnityEngine.InspectorName("NoExistFolder")]
            _0xc4f47351,
        }

        
        
        
        
        public static string _0x9381861f
        {
            get
            {
                string _0xaf3e4f58 = Path.GetFileName(Path.GetDirectoryName(Application.dataPath));
                return _0xaf3e4f58;
            }
        }

        
        
        
        
        
        
        
        
        
        public static bool _0x94b3e792(string _0x02bbd01d, string _0x1b252d7f, string[] _0xee1872f8 = null, bool _0xaf94cb8c = true, bool _0x519ca116 = true)
        {
            if (string.IsNullOrEmpty(_0x02bbd01d))
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("来源路径为空，不能复制！"));
                return false;
            }

            _0x25c08a36 _0x34995e96 = _0xa7ea8918(_0x02bbd01d);
            if (_0x34995e96 == _0x25c08a36._0x4701e15d || _0x34995e96 == _0x25c08a36._0xc4f47351)
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("来源路径{0}不存在，不能复制！", _0x02bbd01d));
                return false;
            }

            if (_0x34995e96 == _0x25c08a36._0xd921a821)
            {
                _0xc85e8a66(_0x02bbd01d, _0x1b252d7f, _0xaf94cb8c);
                return true;
            }

            return _0x7c6785df(_0x02bbd01d, _0x1b252d7f, _0xee1872f8, _0xaf94cb8c, _0x519ca116);
        }

        
        
        
        
        public static _0x25c08a36 _0xa7ea8918(string _0xe2cfeea1)
        {
            bool _0xf9b8a7c0 = File.Exists(_0xe2cfeea1);
            if (_0xf9b8a7c0)
            {
                return _0x25c08a36._0xd921a821;
            }
            else
            {
                bool _0x594742de = Directory.Exists(_0xe2cfeea1);
                if (_0x594742de)
                {
                    return _0x25c08a36._0x5a2ce685;
                }

                int _0x70312220 = _0xe2cfeea1.LastIndexOf(".");
                if (_0x70312220 < 0)
                {
                    return _0x25c08a36._0xc4f47351;
                }
                else
                {
                    string _0xbd2e0d4b = _0xe2cfeea1.Substring(_0x70312220, _0xe2cfeea1.Length - _0x70312220);
                    if (int.TryParse(_0xbd2e0d4b, out int temp))
                    {
                        return _0x25c08a36._0xc4f47351;
                    }
                }

                return _0x25c08a36._0x4701e15d;
            }
        }

        
        
        
        
        
        public static bool _0xc85e8a66(string _0x23a93272, string _0x68ec0111, bool _0x3389026d = true)
        {
            if (!File.Exists(_0x23a93272))
            {
                Debug.Log("<color=red>" + _0x3a19ac8a._0x512da7a0("CopyFile:{0}文件不存在", _0x23a93272) + "</color>");
                return false;
            }

            if (!File.Exists(_0x68ec0111))
            {
                DirectoryInfo _0xe1a16a23 = new DirectoryInfo(_0x68ec0111);
                if (!Directory.Exists(_0xe1a16a23.Parent.ToString()))
                    Directory.CreateDirectory(_0xe1a16a23.Parent.ToString());
                File.Copy(_0x23a93272, _0x68ec0111, _0x3389026d);
                return true;
            }

            if (_0x3389026d)
            {
                File.Delete(_0x68ec0111);
                File.Copy(_0x23a93272, _0x68ec0111, _0x3389026d);
            }

            return true;
        }

        
        
        
        
        
        
        
        
        public static bool _0x7c6785df(string _0xc7ca3b75, string _0xfc7a980c, string[] _0x528ab7ba = null, bool _0x3c0f1cb4 = true, bool _0xbd0ef4eb = true)
        {
            _0x48eecf0e(_0xfc7a980c);
            return _0xf23462c6(_0xc7ca3b75, _0xfc7a980c, _0x528ab7ba, _0x3c0f1cb4, _0xbd0ef4eb);
        }

        
        
        
        
        public static void _0x48eecf0e(string _0x9af04007)
        {
            DirectoryInfo _0x8ced4e22 = new DirectoryInfo(_0x9af04007);
            if (_0x8ced4e22.Exists)
            {
                Directory.Delete(_0x9af04007, true);
            }

            Directory.CreateDirectory(_0x9af04007);
        }

        
        
        
        
        
        
        
        
        
        public static bool _0xf23462c6(string _0x3c7ca254, string _0x0dfa2acd, string[] _0x9cd29397 = null, bool _0x607bed16 = true, bool _0xb84c344e = true)
        {
            DirectoryInfo _0x2e079017 = new DirectoryInfo(_0x3c7ca254);
            DirectoryInfo _0x224aff57 = new DirectoryInfo(_0x0dfa2acd);
            if (!_0x2e079017.Exists)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("来源中不存在:{0}", _0x3c7ca254));
                return false;
            }

            if (_0x224aff57.FullName.StartsWith(_0x2e079017.FullName, StringComparison.CurrentCultureIgnoreCase) && Path.GetFileName(_0x224aff57.FullName) != Path.GetFileName(_0x0dfa2acd))
            {
                throw new Exception(_0x3a19ac8a._0x512da7a0("父目录不能拷贝到子目录！"));
            }

            if (!_0x224aff57.Exists)
            { 
                _0x224aff57.Create();
            }

            FileInfo[] _0x3d4fef3d = _0x2e079017.GetFiles();
            DirectoryInfo[] _0x2edcc940 = _0x2e079017.GetDirectories();
            if (_0x3d4fef3d.Length == 0 && _0x2edcc940.Length == 0)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("当前项目中:{0}文件夹为空", _0x3c7ca254));
                return false;
            }

            
            for (int _0xd0fa2a96 = 0; _0xd0fa2a96 < _0x3d4fef3d.Length; _0xd0fa2a96++)
            {
                string _0xe65ac7ff = _0x3d4fef3d[_0xd0fa2a96].ToString();
                if (_0x3ade429f(_0xe65ac7ff, _0x9cd29397))
                {
                    _0xafdc75fe(_0x3d4fef3d[_0xd0fa2a96].FullName, Path.Combine(_0x224aff57.FullName, _0x3d4fef3d[_0xd0fa2a96].Name), _0x607bed16);
                }
            }

            
            if (_0xb84c344e)
            {
                for (int _0x4e61e686 = 0; _0x4e61e686 < _0x2edcc940.Length; _0x4e61e686++)
                {
                    string _0xb3c72bb6 = _0x2edcc940[_0x4e61e686].FullName;
                    if (_0x3ade429f(_0xb3c72bb6, _0x9cd29397))
                    {
                        _0xf23462c6(_0xb3c72bb6, Path.Combine(_0x224aff57.FullName, _0x2edcc940[_0x4e61e686].Name), _0x9cd29397, _0x607bed16, _0xb84c344e);
                    }
                }
            }

            return true;
        }

        
        
        
        
        
        
        private static bool _0x3ade429f(string _0x97a58380, string[] _0x74c5ad56 = null)
        {
            if (_0x74c5ad56 == null || _0x74c5ad56.Length <= 0 || (_0x74c5ad56.Length == 1 && string.IsNullOrEmpty(_0x74c5ad56[0])))
                return true;
            bool _0xd7b6a2b0 = true;
            _0x97a58380 = _0xa779e3f2(_0x97a58380);
            for (int _0xec9bff09 = 0; _0xec9bff09 < _0x74c5ad56.Length; _0xec9bff09++)
            {
                string _0xf2f7cff7 = _0x74c5ad56[_0xec9bff09];
                if (_0x97a58380.Contains(_0xf2f7cff7))
                {
                    _0xd7b6a2b0 = false;
                    break;
                }
            }

            return _0xd7b6a2b0;
        }

        
        
        
        
        public static string _0xa779e3f2(string _0xe2fc2e93)
        {
            _0xe2fc2e93 = _0xe2fc2e93.Replace("\\", "/");
            return _0xe2fc2e93;
        }

        
        
        
        
        public static string _0x17911df1(string _0xefb6d8b5)
        {
            _0xefb6d8b5 = _0xefb6d8b5.Replace("/", "\\");
            return _0xefb6d8b5;
        }

        
        
        
        
        
        public static bool _0xafdc75fe(string _0xd8343ad6, string _0xa4ab7bb3, bool _0xa1367c70 = true)
        {
            if (!File.Exists(_0xd8343ad6))
            {
                Debug.Log("<color=red>" + _0x3a19ac8a._0x512da7a0("CopyFile:{0}文件不存在", _0xd8343ad6) + "</color>");
                return false;
            }

            if (!File.Exists(_0xa4ab7bb3))
            {
                File.Copy(_0xd8343ad6, _0xa4ab7bb3, _0xa1367c70);
                return true;
            }

            if (_0xa1367c70)
            {
                File.Delete(_0xa4ab7bb3);
                File.Copy(_0xd8343ad6, _0xa4ab7bb3, _0xa1367c70);
            }

            return true;
        }

        
        
        
        
        
        
        public static bool _0xe2e33a27(string _0x9128dbd9, string _0x9fc063b4)
        {
            if (!Directory.Exists(_0x9128dbd9))
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("来源中不存在:{0}", _0x9128dbd9));
                return false;
            }

            if (Directory.Exists(_0x9fc063b4))
            {
                _0x1febd2ce(_0x9fc063b4, true);
            }

            _0xf23462c6(_0x9128dbd9, _0x9fc063b4);
            _0x1febd2ce(_0x9128dbd9, true);
            return true;
        }

        
        
        
        
        
        public static void _0x1febd2ce(string _0xb60e8e88, bool _0x608657ca = false, string _0x86369eb8 = "")
        {
            DirectoryInfo _0x4dd59d47 = new DirectoryInfo(_0xb60e8e88);
            if (!_0x4dd59d47.Exists)
            {
                return;
            }

            DirectoryInfo[] _0x3a285af5 = _0x4dd59d47.GetDirectories();
            foreach (DirectoryInfo subDir in _0x3a285af5)
            {
                if (_0x86369eb8 == subDir.Name)
                    continue;
                Directory.Delete(subDir.FullName, true); 
            }

            FileInfo[] _0x7e15f1f0 = _0x4dd59d47.GetFiles();
            for (int _0xb80bacc6 = 0; _0xb80bacc6 < _0x7e15f1f0.Length; _0xb80bacc6++)
            {
                if (_0x86369eb8 == _0x7e15f1f0[_0xb80bacc6].Name)
                    continue;
                File.Delete(_0x7e15f1f0[_0xb80bacc6].FullName); 
            }

            if (_0x608657ca)
            {
                Directory.Delete(_0xb60e8e88, true);
                var _0x43097f85 = _0xb60e8e88 + ".meta";
                if (File.Exists(_0x43097f85))
                {
                    File.Delete(_0x43097f85);
                }
            }
        }

        
        
        
        
        
        public static string _0x55e4cd7a(string _0x595eb9e7)
        {
            if (!_0x595eb9e7.StartsWith("Assets"))
            {
                return _0x595eb9e7;
            }

            _0x595eb9e7 = _0xbd42ee6f._0xa779e3f2(_0x595eb9e7);
            
            int _0xe97a7563 = _0x595eb9e7.IndexOf("Assets");
            if (_0xe97a7563 != -1)
            {
                _0x595eb9e7 = _0x595eb9e7.Substring(0, _0xe97a7563) + _0xbd42ee6f._0xa779e3f2(Application.dataPath) + _0x595eb9e7.Substring(_0xe97a7563 + "Assets".Length);
            }

            return _0x595eb9e7;
        }

        
        
        
        
        
        public static string _0x504fac1f(string _0xa9153b9a, string _0x3bee4c22 = "")
        {
            if (string.IsNullOrEmpty(_0xa9153b9a))
                return _0xa9153b9a;
            _0xa9153b9a = Path.GetFullPath(_0xa9153b9a);
            if (string.IsNullOrEmpty(_0x3bee4c22))
            {
                string _0xd7e3adf0 = "\\Assets\\";
                int _0xa14d26ac = _0xa9153b9a.IndexOf(_0xd7e3adf0);
                int _0x8608628c = _0xa9153b9a.LastIndexOf(_0xd7e3adf0);
                if (_0xa14d26ac >= 0)
                {
                    if (_0xa14d26ac != _0x8608628c)
                    {
                        Debug.LogWarning(_0x3a19ac8a._0x512da7a0("{0} 存在2个Assets,不满足要求！默认使用第一个", _0xa9153b9a));
                    }

                    _0xa9153b9a = _0xa9153b9a.Substring(_0xa14d26ac + 1, _0xa9153b9a.Length - _0xa14d26ac - 1);
                }
            }
            else
            {
                _0xa9153b9a = _0xa9153b9a.Replace(Path.GetFullPath(_0x3bee4c22), "");
                if (_0xa9153b9a.StartsWith("\\"))
                    _0xa9153b9a = _0xa9153b9a.Substring(1);
            }

            return _0xa9153b9a;
        }

        
        
        
        
        
        public static bool _0xecc2e243(string _0x3988ecfb)
        {
            bool _0x7d4f53bf = File.Exists(_0x3988ecfb);
            bool _0xaa57ad6a = Directory.Exists(_0x3988ecfb);
            return !_0x7d4f53bf && !_0xaa57ad6a;
        }

        public static void _0xd52204dd(string _0xd3fa5a0f, string _0x8fdc7472)
        {
            if (string.IsNullOrEmpty(_0xd3fa5a0f) || string.IsNullOrEmpty(_0x8fdc7472))
            {
                Debug.LogError("Folder path or file extension is empty.");
                return;
            }

            
            string _0xa12d3b0a = $"*.{_0x8fdc7472}";
            string[] _0xd0c6437e = Directory.GetFiles(_0xd3fa5a0f, _0xa12d3b0a, SearchOption.AllDirectories);
            if (_0xd0c6437e.Length == 0)
            {
                Debug.Log($"No files with extension '{_0x8fdc7472}' found in '{_0xd3fa5a0f}'.");
                return;
            }

            
            foreach (string file in _0xd0c6437e)
            {
                File.Delete(file);
                Debug.Log($"Deleted: {file}");
            }

            
            AssetDatabase.Refresh();
            Debug.Log($"Deleted {_0xd0c6437e.Length} files with extension '{_0x8fdc7472}' in '{_0xd3fa5a0f}'.");
        }

        
        
        
        
        
        public static bool _0xf7dc3d31(string _0x7c970ec8, bool _0xa7a9bce8 = false)
        {
            if (_0x7c970ec8.IndexOf("http") >= 0)
            {
                Application.OpenURL(_0x7c970ec8);
                return true;
            }

            _0x25c08a36 _0x5773a899 = _0xa7ea8918(_0x7c970ec8);
            if (_0x5773a899 == _0x25c08a36._0xc4f47351 || _0x5773a899 == _0x25c08a36._0x4701e15d)
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("{0} no exist", _0x7c970ec8));
                _0x7c970ec8 = Directory.GetParent(_0x7c970ec8).ToString();
                if (Directory.Exists(_0x7c970ec8))
                {
                    Application.OpenURL($"file:///{_0x7c970ec8}");
                }

                return false;
            }
            else if (_0x5773a899 == _0x25c08a36._0xd921a821 && !_0xa7a9bce8)
            {
                _0x7c970ec8 = Directory.GetParent(_0x7c970ec8).ToString();
            }

            Application.OpenURL($"file:///{_0x7c970ec8}");
            return true;
        }
    }
}