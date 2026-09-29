using UnityEngine;
using UnityEditor;
using System;
using System.Collections.Generic;
using System.IO;
using SC;

namespace _0xa07739b8
{
    public class _0x3ae754dc : EditorWindow
    {
        private Vector2 _0xa3f5c7b5 = new Vector2();
        public static bool _0xbbbeea2a { get => EditorPrefs.GetBool("SCEditor_LunaWindow_isBase122", true); set => EditorPrefs.SetBool("SCEditor_LunaWindow_isBase122", value); }
        public static bool _0x1b3388da { get => EditorPrefs.GetBool("SCEditor_LunaWindow_isIgnoreCheckErrors", true); set => EditorPrefs.SetBool("SCEditor_LunaWindow_isIgnoreCheckErrors", value); }
        public static bool _0x387a6334 { get => EditorPrefs.GetBool("SCEditor_LunaWindow_isOpenLog", false); set => EditorPrefs.SetBool("SCEditor_LunaWindow_isOpenLog", value); }

        [InitializeOnLoadMethod]
        private static void _0x723f5af9()
        {
            
            if (!EditorPrefs.HasKey("SCEditor_LunaWindow_isOpenLog"))
            {
                _0x387a6334 = false;
            }

            if (!EditorPrefs.HasKey("SCEditor_LunaWindow_isIgnoreCheckErrors"))
            {
                _0x1b3388da = true;
            }
        }

        public void _0xcf66282f(EditorWindow _0xdd2ab31c)
        {
            this._0xa3f5c7b5 = EditorGUILayout.BeginScrollView(this._0xa3f5c7b5);
            
            float _0xc1cf0e03 = _0xdd2ab31c.position.width;
            
            foreach (var group in _0x47c742e4)
            {
                string _0x084feed9 = group.Key;
                var _0xc8fa3226 = group.Value;
                
                EditorGUILayout.BeginVertical("box");
                _0x2684f217._0x355d6414(_0x084feed9);
                if (_0x084feed9 == "打包" && _0xf43a6983._0x17ee4b5c())
                {
                    _0x38d08dc3();
                }

                if (_0xc8fa3226.Count > 0)
                {
                    
                    EditorGUILayout.BeginHorizontal();
                    float _0x8c45ad5b = 0;
                    foreach (var button in _0xc8fa3226)
                    {
                        string _0x2a26699d = button.Key;
                        Action _0x35a5c4e4 = button.Value;
                        
                        GUIStyle _0xa5ff34cf = new GUIStyle(GUI.skin.button)
                        {
                            fontSize = 16,
                            alignment = TextAnchor.MiddleCenter
                        };
                        
                        Vector2 _0x0cc83809 = _0xa5ff34cf.CalcSize(new GUIContent(_0x3a19ac8a._0x512da7a0(_0x2a26699d)));
                        float _0x520db5a0 = _0x0cc83809.x + 16;
                        float _0x66a2470b = 30;
                        
                        if (_0x8c45ad5b + _0x520db5a0 > _0xc1cf0e03 - 20)
                        {
                            EditorGUILayout.EndHorizontal();
                            EditorGUILayout.BeginHorizontal();
                            _0x8c45ad5b = 0;
                        }

                        _0x2684f217._0xc3842f89(_0x2a26699d, () =>
                        {
                            
                            EditorApplication.delayCall += () =>
                            {
                                _0x35a5c4e4();
                            };
                        }, _0x520db5a0, _0x66a2470b);
                        _0x8c45ad5b += _0x520db5a0;
                    }

                    EditorGUILayout.EndHorizontal();
                }

                EditorGUILayout.EndVertical();
            }

            _0x2684f217._0xbf7140d1();
            EditorGUILayout.EndScrollView();
        }

        private void _0x38d08dc3()
        {
        
        }

        private Dictionary<string, Dictionary<string, Action>> _0x36ce3be3 = null;
        private Dictionary<string, Dictionary<string, Action>> _0x47c742e4
        {
            get
            {
                if (_0x36ce3be3 == null)
                {
                    _0x36ce3be3 = new Dictionary<string, Dictionary<string, Action>>();
                    bool _0x126a0bf9 = _0xf43a6983._0x17ee4b5c();
                    
                    var _0x12f14aa1 = new Dictionary<string, Action>();
                    if (_0x126a0bf9)
                        _0x12f14aa1.Add("luna导入/升级", _0xa7126670._0xe7b18bba);
                    _0x12f14aa1.Add("luna初始化配置", () =>
                    {
                        _0x8dcf1a76._0x30af7f33();
                        _0xa7126670._0x1130c7d5();
                    });
                    _0x12f14aa1.Add("Luna全量检测", () => _0xa7126670._0x21d4ad11());
                    _0x36ce3be3.Add("Luna 维护", _0x12f14aa1);
                    
                    var _0xc07162f7 = new Dictionary<string, Action>();
                    _0xc07162f7.Add("luna字体生成", _0xa7126670._0x9cb0cdbc);
                    _0xc07162f7.Add("修复SDK组件丢失", _0x8dcf1a76._0x30af7f33);
                    _0x36ce3be3.Add("常用开发工具", _0xc07162f7);
                    
                    var _0xca3702a9 = new Dictionary<string, Action>();
                    _0xca3702a9.Add("打包", _0xa7126670._0xbb397fac);
                    _0xca3702a9.Add("开启日志(html文件)", _0xa7126670._0x39a68889);
                    _0x36ce3be3.Add("打包", _0xca3702a9);
                
                }

                return _0x36ce3be3;
            }
        }
    
    
    
    
    
    
    
    }
}