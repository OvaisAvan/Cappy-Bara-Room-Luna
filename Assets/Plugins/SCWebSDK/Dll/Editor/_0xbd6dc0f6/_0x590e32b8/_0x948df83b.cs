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

namespace _0xa07739b8
{
    public partial class _0x2684f217
    {
        
        
        
        
        public static GUIStyle _0x12aed859
        {
            get
            {
                var _0xb63dc6a2 = new GUIStyle(EditorStyles.boldLabel);
                _0xb63dc6a2.fontSize = 20; 
                Color _0xa0d04e8b;
                ColorUtility.TryParseHtmlString("#FFAE47", out _0xa0d04e8b);
                _0xb63dc6a2.normal.textColor = _0xa0d04e8b; 
                _0xb63dc6a2.alignment = TextAnchor.MiddleLeft; 
                return _0xb63dc6a2;
            }
        }

        public static Vector2 _0xe3d3f651 = new Vector2(100, 30);
        
        public static void _0x355d6414(string _0x09572a2d)
        {
            _0x09572a2d = _0x3a19ac8a._0x512da7a0(_0x09572a2d);
            EditorGUILayout.LabelField(_0x09572a2d, _0x12aed859);
        }

        
        
        
        
        public static void _0xbf7140d1()
        {
            
            GUILayout.Space(5);
            GUILayout.Box("", GUILayout.Height(2), GUILayout.ExpandWidth(true));
            GUILayout.Space(5);
        }

        public static void _0xf9289847(string _0x1f985713, int _0xf13a7d92 = 100, int _0x26660706 = 30, int _0x456d7bb0 = 16)
        {
            _0x1f985713 = _0x3a19ac8a._0x512da7a0(_0x1f985713);
            GUIStyle _0xfaf37747 = new GUIStyle(EditorStyles.label)
            {
                fontSize = _0x456d7bb0,
                
                normal =
                {
                    textColor = EditorStyles.label.normal.textColor
                },
                fixedHeight = _0x26660706,
                alignment = TextAnchor.MiddleLeft 
            };
            if (_0xf13a7d92 == -1)
            {
                Vector2 _0x8ed1e8ee = _0xfaf37747.CalcSize(new GUIContent(_0x1f985713));
                _0xf13a7d92 = (int)_0x8ed1e8ee.x;
            }

            _0xfaf37747.fixedWidth = _0xf13a7d92;
            EditorGUILayout.LabelField(_0x1f985713, _0xfaf37747, GUILayout.Width(_0xf13a7d92), GUILayout.Height(_0x26660706));
        }

        public static void _0x69ee21e9(string _0x1963fa8e, int _0x15f5034b = 100, int _0x453727fe = 30, int _0xca1bd430 = 16)
        {
            _0x1963fa8e = _0x3a19ac8a._0x512da7a0(_0x1963fa8e);
            GUIStyle _0xa176ba68 = new GUIStyle(EditorStyles.label)
            {
                fontSize = _0xca1bd430,
                
                normal =
                {
                    textColor = EditorStyles.label.normal.textColor
                },
                fixedHeight = _0x453727fe,
                alignment = TextAnchor.MiddleLeft,
                richText = true,
                wordWrap = true
            };
            if (_0x15f5034b == -1)
            {
                Vector2 _0x8c7167e0 = _0xa176ba68.CalcSize(new GUIContent(_0x1963fa8e));
                _0x15f5034b = (int)_0x8c7167e0.x;
            }

            _0xa176ba68.fixedWidth = _0x15f5034b;
            EditorGUILayout.LabelField(_0x1963fa8e, _0xa176ba68, GUILayout.Width(_0x15f5034b), GUILayout.Height(_0x453727fe));
        }

        public static void _0xc3842f89(string _0x9b4597ac, Action _0x4db067a4, float _0xb78e1b2b = -1, float _0x34379f18 = -1)
        {
            _0x9b4597ac = _0x3a19ac8a._0x512da7a0(_0x9b4597ac);
            
            var _0x980cc682 = new GUIStyle(GUI.skin.button);
            _0x980cc682.fontSize = 16; 
            _0x980cc682.alignment = TextAnchor.MiddleCenter; 
            _0x980cc682.fixedHeight = _0x34379f18 == -1 ? _0xe3d3f651.y : _0x34379f18;
            _0x9b4597ac = _0x3a19ac8a._0x512da7a0(_0x9b4597ac);
            if (_0xb78e1b2b == -1)
            {
                Vector2 _0x9bfc2bec = _0x980cc682.CalcSize(new GUIContent(_0x9b4597ac));
                _0xb78e1b2b = (int)_0x9bfc2bec.x;
            }

            _0x980cc682.fixedWidth = _0xb78e1b2b == -1 ? _0xe3d3f651.x : _0xb78e1b2b;
            
            if (GUILayout.Button(_0x9b4597ac, _0x980cc682))
            {
                try
                {
                    _0x4db067a4();
                }
                catch (System.Exception e)
                {
                    _0x16bd684c._0xe8f5e459(e.Message);
                    _0x16bd684c._0xe8f5e459(e.StackTrace);
                    throw;
                }
            }
        }
    }
}