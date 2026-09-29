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
using SC;

namespace _0xa07739b8
{
    
    
    
    public static class _0x3a19ac8a
    {
        static string _0x55405ba9 = _0xf43a6983._0x91e899e5 + "/languageEditor.txt";
        public enum _0x45eb8085
        {
            [global::UnityEngine.InspectorName("Chinese")]
            _0x14718f96,
            [global::UnityEngine.InspectorName("English")]
            _0xb921bfdd,
        }

        static Dictionary<string, Dictionary<string, object>> _0xcb6ae160;
        static Dictionary<string, Dictionary<string, Dictionary<string, object>>> _0x50b66eb8;
        public static Dictionary<string, Dictionary<string, object>> _0x91cdca1d
        {
            get
            {
                if (_0xcb6ae160 == null)
                {
                    _0x50b66eb8 = new Dictionary<string, Dictionary<string, Dictionary<string, object>>>();
                    if (!File.Exists(_0x55405ba9))
                    {
                        Debug.LogWarning(_0x55405ba9 + " not found");
                        _0xcb6ae160 = new Dictionary<string, Dictionary<string, object>>();
                    }
                    else
                    {
                        var _0xd32d2ee9 = File.ReadAllText(_0x55405ba9);
                        var _0xdfe06dfb = SC.Utility.TExcel.ExcelToJson(_0xd32d2ee9, Path.GetFileNameWithoutExtension(_0x55405ba9));
                        _0xcb6ae160 = new Dictionary<string, Dictionary<string, object>>();
                        foreach (var item in _0xdfe06dfb)
                        {
                            var _0x31bb6cf5 = item.Key.Replace("\\n", "\n");
                            var _0x0482db39 = item.Value;
                            var _0x3f8566cc = new Dictionary<string, object>();
                            foreach (var lineItem in _0x0482db39)
                            {
                                if (lineItem.Value is string sVal)
                                {
                                    _0x3f8566cc.Add(lineItem.Key, sVal.Replace("\\n", "\n"));
                                }
                                else
                                {
                                    _0x3f8566cc.Add(lineItem.Key, lineItem.Value);
                                }
                            }

                            _0xcb6ae160[_0x31bb6cf5] = _0x3f8566cc;
                        }

                        var _0x8bbfc3aa = _0x9bf30588;
                        for (int _0xd24ba577 = 0; _0xd24ba577 < _0x8bbfc3aa.Length; _0xd24ba577++)
                        {
                            var _0x659c9622 = _0x8bbfc3aa[_0xd24ba577];
                            Dictionary<string, Dictionary<string, object>> _0x8db3e866 = new Dictionary<string, Dictionary<string, object>>();
                            foreach (var item in _0xcb6ae160)
                            {
                                var _0xde82de22 = item.Value;
                                if (_0xde82de22.ContainsKey(_0x659c9622))
                                {
                                    _0x8db3e866.Add(_0xde82de22[_0x659c9622].ToString(), _0xde82de22);
                                }
                            }

                            _0x50b66eb8.Add(_0x659c9622, _0x8db3e866);
                        }
                    }
                }

                return _0xcb6ae160;
            }
        }

        public static void _0xc4df4546()
        {
            _0xcb6ae160 = null;
            _0x50b66eb8 = null;
        }

        static string[] _0x669f2622;
        public static string[] _0x9bf30588
        {
            get
            {
                if (_0x669f2622 == null)
                {
                    var _0x6a0cca49 = _0x91cdca1d;
                    var _0x777ef4fb = _0x6a0cca49[_0x6a0cca49.Keys.First()];
                    var _0xa3322ab1 = _0x777ef4fb.Keys.ToList();
                    _0x669f2622 = _0xa3322ab1.ToArray();
                }

                return _0x669f2622;
            }
        }

        
        
        
        
        public static string _0x47663b55
        {
            get
            {
                if (_0x91cdca1d == null)
                    return null;
                var _0x02d2ef36 = sc.WebAdConfig.EEditorLanguage.ToString();
                return _0x02d2ef36;
            }
        }

        
        
        
        
        
        public static string _0x512da7a0(string _0x6eed0531, string _0x96ed1403 = null, string _0x30a2ded0 = null, string _0x22df774c = null, string _0x17d2f455 = null, string _0xf4195981 = null, string _0x44e52356 = null)
        {
            if (_0x91cdca1d == null || string.IsNullOrEmpty(_0x6eed0531))
                return _0x5a9b4a8a(_0x6eed0531, _0x96ed1403, _0x30a2ded0, _0x22df774c, _0x17d2f455, _0xf4195981, _0x44e52356);
            if (!_0x91cdca1d.TryGetValue(_0x6eed0531, out var line))
            {
                
                foreach (var item in _0x50b66eb8)
                {
                    if (item.Value.TryGetValue(_0x6eed0531, out var line2))
                    {
                        line = line2;
                        break;
                    }
                }
            }

            if (line == null)
            {
                return _0x5a9b4a8a(_0x6eed0531, _0x96ed1403, _0x30a2ded0, _0x22df774c, _0x17d2f455, _0xf4195981, _0x44e52356);
            }

            var _0xcb6a3741 = _0x47663b55;
            if (line.ContainsKey(_0xcb6a3741))
            {
                return _0x5a9b4a8a(line[_0xcb6a3741]?.ToString() ?? _0x6eed0531, _0x96ed1403, _0x30a2ded0, _0x22df774c, _0x17d2f455, _0xf4195981, _0x44e52356);
            }

            return _0x5a9b4a8a(_0x6eed0531, _0x96ed1403, _0x30a2ded0, _0x22df774c, _0x17d2f455, _0xf4195981, _0x44e52356);
        }

        private static string _0x5a9b4a8a(string _0x0c14e152, string _0x1be04076 = null, string _0x2e8b1ddd = null, string _0x642c0bf1 = null, string _0xf82080aa = null, string _0xd3fb934a = null, string _0xa147c9e9 = null)
        {
            if (_0x1be04076 != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{0}", _0x1be04076);
            }

            if (_0x2e8b1ddd != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{1}", _0x2e8b1ddd);
            }

            if (_0x642c0bf1 != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{2}", _0x642c0bf1);
            }

            if (_0xf82080aa != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{3}", _0xf82080aa);
            }

            if (_0xd3fb934a != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{4}", _0xd3fb934a);
            }

            if (_0xa147c9e9 != null)
            {
                _0x0c14e152 = _0x0c14e152.Replace("{5}", _0xa147c9e9);
            }

            return _0x0c14e152;
        }
    }
}