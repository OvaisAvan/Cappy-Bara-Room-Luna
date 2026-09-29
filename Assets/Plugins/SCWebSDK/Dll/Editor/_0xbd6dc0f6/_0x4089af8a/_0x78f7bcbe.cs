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
using System.Text.RegularExpressions;
using System.Linq;
using System.Text;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

namespace _0xa07739b8
{
    
    
    
    public static class _0x3e134976
    {
        private static bool _0xd450795a()
        {
            try
            {
                var _0x021e5eff = SC.sc.WebAdConfig;
                if (_0x021e5eff == null)
                    return true;
                return _0x021e5eff.BUseSCFontTtf;
            }
            catch
            {
                return true;
            }
        }

        
        public static void _0x5c0ecc99()
        {
            _0x5e7e43c3(false, true);
        }

        public static string _0x5e7e43c3(bool _0x71796664, bool _0x9beb7c9a = true)
        {
            if (!_0xd450795a())
            {
                return null;
            }

            
            var _0x691b53d6 = (Dictionary<string, Dictionary<string, object>>)SC.sc.config.GetTable("language");
            if (_0x691b53d6 == null)
            {
                _0x16bd684c._0x0393c175(_0x9beb7c9a, "language表不存在,字体生成失败！");
                return null;
            }

            string _0xf38df108 = "";
            foreach (var item in _0x691b53d6)
            {
                var _0x1f830624 = item.Value;
                foreach (var item2 in _0x1f830624)
                {
                    if (SC.LanguageCommon.lDefLanguage.Contains(item2.Key))
                    {
                        _0xf38df108 += item2.Value.ToString();
                    }
                }
            }

            if (string.IsNullOrEmpty(_0xf38df108))
            {
                return null;
            }

            
            if (!File.Exists(_0xf43a6983._0x98f5a4a8))
            {
                _0x16bd684c._0x0393c175(_0x9beb7c9a, "默认字体库不存在。{0}", _0xf43a6983._0x98f5a4a8);
                return null;
            }

            
            if (!_0xb220156e(_0x9beb7c9a))
            {
                return null;
            }

            _0xf38df108 = _0xcc3a3223(_0xf38df108);
            if (_0x71796664)
            {
                
                string _0x8f83bad7 = " §1234567890-=qwertyuiop[]asdfghjkl;'\\`zxcvbnm,./±!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:\"|~ZXCVBNM<>?";
                _0xf38df108 = new string ((_0x8f83bad7 + _0xf38df108).Distinct().ToArray());
            }

            _0x8ff44731(_0xf43a6983._0x98f5a4a8, _0xf43a6983._0x1dd00f72, _0xf38df108);
            AssetDatabase.Refresh();
            _0xdde52d26();
            _0x16bd684c._0xd8cc31d1("生成字体完成");
            return _0xf38df108;
        }

        static string _0xcc3a3223(string _0x87cba930)
        {
            if (string.IsNullOrEmpty(_0x87cba930))
                return "";
            
            HashSet<char> _0xef5b26c6 = new HashSet<char>();
            foreach (char c in _0x87cba930)
            {
                if (c >= '\u4e00' && c <= '\u9fff')
                {
                    _0xef5b26c6.Add(c);
                }
            }

            return new string (_0xef5b26c6.ToArray());
        }

        
        
        
        
        public static bool _0xce039477()
        {
            string _0x2f451902 = _0xfb66840f._0xb0d27edb("pip3", "show fonttools");
            
            return !_0x2f451902.Contains("not found");
        }

        
        
        
        
        public static bool _0xb220156e(bool _0xd58305e4 = true)
        {
            
            if (!_0xfb66840f._0x8fd59343())
            {
                _0x16bd684c._0x0393c175(_0xd58305e4, "");
                return false;
            }

            
            if (!_0xce039477())
            {
                _0x16bd684c._0x181d6923("当前未安装 fonttools ，自动安装中...");
                _0xfb66840f._0xb0d27edb("pip3", "install fonttools");
                if (!_0xce039477())
                {
                    _0x16bd684c._0x0393c175(_0xd58305e4, "安装 fonttools 失败！请手动安装。pip3 install fonttools");
                    return false;
                }

                _0x16bd684c._0xf1a21e79("fonttools 安装成功");
            }

            return true;
        }

        
        
        
        
        
        
        static bool _0x8ff44731(string _0x3ad55512, string _0xde1fb92d, string _0x9b121f68)
        {
            if (!File.Exists(_0x3ad55512))
            {
                _0x16bd684c._0xe8f5e459("默认字体库不存在。{0}", _0x3ad55512);
                return false;
            }

            if (!_0xb220156e())
            {
                return false;
            }

            if (File.Exists(_0xde1fb92d))
            {
                
                File.Delete(_0xde1fb92d);
            }

            string _0xb206164a = Path.GetDirectoryName(_0xde1fb92d);
            if (!Directory.Exists(_0xb206164a))
            {
                Directory.CreateDirectory(_0xb206164a);
            }

            
            
            string _0xdddb00a9 = Path.Combine(Path.GetTempPath(), "luna_font_text.txt").Replace("\\", "/");
            string _0xe9bdd591 = Path.Combine(Path.GetTempPath(), "luna_font_gen.py").Replace("\\", "/");
            try
            {
                
                File.WriteAllText(_0xdddb00a9, _0x9b121f68, new UTF8Encoding(false));
                
                
                string _0x51e6b142 = $@"
# -*- coding: utf-8 -*-
import io
import os
from fontTools.subset import Subsetter
from fontTools.ttLib import TTFont

# 读取字符文件
with io.open('{_0xdddb00a9}', 'r', encoding='utf-8') as f:
    text_content = f.read()

# 使用 TTFont 加载字体文件
font = TTFont('{_0x3ad55512.Replace("\\", "/")}')

# 初始化 Subsetter
subsetter = Subsetter()
subsetter.populate(text=text_content)
subsetter.subset(font)

# 保存新字体文件
font.save('{_0xde1fb92d.Replace("\\", "/")}')
";
                
                File.WriteAllText(_0xe9bdd591, _0x51e6b142, new UTF8Encoding(false));
                
                string _0x5e6adeeb = _0xfb66840f._0xb0d27edb("python3", _0xe9bdd591);
                if (!File.Exists(_0xde1fb92d))
                {
                    _0x16bd684c._0x181d6923("(python3)自定义字体库生成失败，尝试 python。{0}", _0x5e6adeeb);
                    string _0xdf71b66e = _0xfb66840f._0xb0d27edb("python", _0xe9bdd591);
                    if (!File.Exists(_0xde1fb92d))
                    {
                        _0x16bd684c._0xe8f5e459("(python)自定义字体库生成失败。{0}", _0xdf71b66e);
                        return false;
                    }
                }
            }
            finally
            {
                
                try
                {
                    if (File.Exists(_0xdddb00a9))
                        File.Delete(_0xdddb00a9);
                    if (File.Exists(_0xe9bdd591))
                        File.Delete(_0xe9bdd591);
                }
                catch
                {
                }
            }

            _0x16bd684c.Log("自定义字体库生成成功\n{0}", _0x9b121f68);
            return true;
        }

        
        
        
        
        public static string _0xcde45f83
        {
            get
            {
                
                string _0xfacd4d67 = Application.unityVersion;
                int _0xe76dc4d8 = _0xfacd4d67.IndexOf('.');
                string _0x641aadb0 = _0xe76dc4d8 >= 0 ? _0xfacd4d67.Substring(0, _0xe76dc4d8) : _0xfacd4d67;
                
                System.Text.StringBuilder _0xedfc45ec = new System.Text.StringBuilder();
                foreach (char c in _0x641aadb0)
                {
                    if (char.IsDigit(c))
                    {
                        _0xedfc45ec.Append(c);
                    }
                }

                _0x641aadb0 = _0xedfc45ec.ToString();
                
                if (int.TryParse(_0x641aadb0, out int majorVersion))
                {
                    return majorVersion >= 2022 ? "LegacyRuntime.ttf" : "Arial.ttf";
                }

                return "Arial.ttf";
            }
        }

        
        
        
        
        public static bool _0xdde52d26()
        {
            if (!_0xd450795a())
            {
                return false;
            }

            string _0x83e49bf0 = _0xf43a6983._0x1dd00f72;
            if (!File.Exists(_0x83e49bf0))
            {
                _0x16bd684c._0x181d6923("字体文件不存在！！请先生成字体！{0}", _0x83e49bf0);
                return false;
            }

            
            string _0xb03a5365 = _0xbd42ee6f._0x504fac1f(_0x83e49bf0);
            string _0x316a6c33 = AssetDatabase.AssetPathToGUID(_0xb03a5365);
            if (string.IsNullOrEmpty(_0x316a6c33))
            {
                _0x16bd684c._0x181d6923("字体文件GUID不存在！！请检查路径是否正确！{0}", _0xb03a5365);
                return false;
            }

            if (_0x316a6c33 == _0xf43a6983._0x3d5f730b)
            {
                return true;
            }

            
            if (File.Exists(_0x83e49bf0 + ".meta"))
            {
                var _0x9c3bf655 = File.ReadAllText(_0x83e49bf0 + ".meta");
                _0x9c3bf655 = _0x9c3bf655.Replace(_0x316a6c33, _0xf43a6983._0x3d5f730b);
                File.WriteAllText(_0x83e49bf0 + ".meta", _0x9c3bf655);
                _0x16bd684c._0x181d6923("当前自定义字体库的meta文件GUID不正确，已自动修复！");
                AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            }

            return true;
        }

        
        
        
         
        public static void _0x6585d8be()
        {
            if (!_0xd450795a())
            {
                return;
            }

            
            if (!File.Exists(_0xf43a6983._0x1dd00f72))
            {
                _0x16bd684c._0x181d6923("字体文件不存在！！请先生成字体！{0}", _0xf43a6983._0x1dd00f72);
                return;
            }

            string _0x0d15b19c = _0xbd42ee6f._0x504fac1f(_0xf43a6983._0x1dd00f72);
            Debug.Log($"设置字体 {_0xcde45f83} => {_0x0d15b19c}");
            Font _0xc796d4e8 = AssetDatabase.LoadAssetAtPath<Font>(_0x0d15b19c);
            Font _0xb8a38bc0 = Resources.GetBuiltinResource<Font>(_0xcde45f83);
            
            AssetDatabase.TryGetGUIDAndLocalFileIdentifier(_0xc796d4e8.GetInstanceID(), out string guid, out long fileID);
            AssetDatabase.TryGetGUIDAndLocalFileIdentifier(_0xb8a38bc0.GetInstanceID(), out string oldGuid, out long oldFileID);
            _0x2457c717(guid, fileID, oldGuid, oldFileID, true);
        }

        
        
        
         
        public static void _0xf7e527ff()
        {
            _0x16bd684c.Log("恢复原来的字体");
            string _0xd88ecd27 = _0xbd42ee6f._0x504fac1f(_0xf43a6983._0x1dd00f72);
            Font _0x61945865 = AssetDatabase.LoadAssetAtPath<Font>(_0xd88ecd27);
            Font _0x32a42619 = Resources.GetBuiltinResource<Font>(_0xcde45f83);
            AssetDatabase.TryGetGUIDAndLocalFileIdentifier(_0x32a42619.GetInstanceID(), out string guid, out long fileID);
            AssetDatabase.TryGetGUIDAndLocalFileIdentifier(_0x61945865.GetInstanceID(), out string oldGuid, out long oldFileID);
            _0x2457c717(guid, fileID, oldGuid, oldFileID, false);
        }

        
        
        
        
        
        
        
        
        private static void _0x2457c717(string _0xa77d3dc3, long _0xcf0ec0d6, string _0x83c988e1, long _0x32f148a0, bool _0x08835266)
        {
            string _0x8e2c0bcc = "fileID: {0}, guid: {1}, type: {2}";
            StringBuilder _0xd7fbc5cc = new StringBuilder();
            string _0x6d3b43d0 = _0xd7fbc5cc.AppendFormat(_0x8e2c0bcc, _0x32f148a0, _0x83c988e1, _0x08835266 ? 0 : 3).ToString();
            _0x6d3b43d0 = "m_Font: {" + _0x6d3b43d0 + "}";
            _0xd7fbc5cc.Clear();
            string _0x7858a5ef = _0xd7fbc5cc.AppendFormat(_0x8e2c0bcc, _0xcf0ec0d6, _0xa77d3dc3, _0x08835266 ? 3 : 0).ToString();
            _0x7858a5ef = "m_Font: {" + _0x7858a5ef + "}";
            string[] _0x9e11caea = _0xc9be004e._0x82d4b299();
            Scene _0x837f804a = SceneManager.GetActiveScene();
            string _0x66f3a835 = _0x837f804a.path;
            for (var _0x9ca54bf3 = 0; _0x9ca54bf3 < _0x9e11caea.Length; _0x9ca54bf3++)
            {
                var _0x2c1aff04 = _0x9e11caea[_0x9ca54bf3];
                EditorUtility.DisplayProgressBar("Hold on", _0x2c1aff04, 1.0f * _0x9ca54bf3 / _0x9e11caea.Length);
                Debug.Log(_0x2c1aff04);
                _0x2c1aff04 = _0xbd42ee6f._0x55e4cd7a(_0x2c1aff04);
                var _0x357013c4 = File.ReadAllText(_0x2c1aff04);
                var _0x058a250c = Regex.Replace(_0x357013c4, _0x6d3b43d0, _0x7858a5ef);
                if (_0x357013c4 != _0x058a250c)
                {
                    File.WriteAllText(_0x2c1aff04, _0x058a250c);
                    if (_0x2c1aff04.EndsWith(".unity"))
                    {
                        
                        EditorSceneManager.OpenScene(_0x2c1aff04);
                        EditorSceneManager.MarkSceneDirty(_0x837f804a);
                        EditorSceneManager.SaveScene(_0x837f804a);
                    }
                }
            }

            if (!string.IsNullOrEmpty(_0x66f3a835))
            {
                EditorSceneManager.OpenScene(_0x66f3a835);
            }

            EditorUtility.ClearProgressBar();
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
            _0x16bd684c._0xd8cc31d1("替换字体完成");
        }
    }
}