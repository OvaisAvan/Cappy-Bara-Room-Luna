using UnityEngine;
using UnityEditor;
using System;
using System.Collections.Generic;
using SC;

namespace _0xa07739b8
{
    public class _0xc5430093 : EditorWindow
    {
        [MenuItem(_0xf43a6983._0x6544d7be + "/MainMenu", priority = 10)]
        public static void _0xdec825e5()
        {
            _0xc5430093 _0xd09b4241 = GetWindow<_0xc5430093>("SC SDK");
            _0xd09b4241.minSize = new Vector2(500, 600);
            _0xd09b4241.Show();
        }

        private int _0xf290ea5f { get => EditorPrefs.GetInt("SCEditor_SCMainWindow_Tab", 0); set => EditorPrefs.SetInt("SCEditor_SCMainWindow_Tab", value); }

        private List<string> _0xff8a58b1 = new List<string>();
        private List<string> _0x73279845
        {
            get
            {
                _0xff8a58b1.Clear();
                _0xff8a58b1.Add("unity试玩");
                if (!_0xf43a6983._0xf21e956a())
                {
                    _0xff8a58b1.Add("Luna试玩");
                }

                _0xff8a58b1.Add("其他");
                return _0xff8a58b1;
            }
        }

        private _0x3ae754dc _0x584851d3;
        private _0x852e8d8a _0x174b6c14;
        private void OnEnable()
        {
            if (_0x584851d3 == null)
                _0x584851d3 = CreateInstance<_0x3ae754dc>();
            if (_0x174b6c14 == null)
                _0x174b6c14 = CreateInstance<_0x852e8d8a>();
        }

        private void OnGUI()
        {
            
            string _0xfe128756 = $"{_0x3a19ac8a._0x512da7a0("SDK版本")}:{SC.sc.SDKVERSION}   {_0x3a19ac8a._0x512da7a0("发布时间")}:{_0xf43a6983._0xc3810270}";
            _0x2684f217._0xf9289847(_0xfe128756, -1, 30, 14);
            
            GUILayout.Space(5);
            EditorGUILayout.BeginHorizontal();
            GUILayout.Space(10);
            var _0xcccf61f3 = _0x73279845;
            if (_0xf290ea5f >= _0xcccf61f3.Count)
                _0xf290ea5f = 0;
            
            string[] _0x2f8a514c = new string[_0xcccf61f3.Count];
            for (int _0x38ade01f = 0; _0x38ade01f < _0xcccf61f3.Count; _0x38ade01f++)
            {
                _0x2f8a514c[_0x38ade01f] = _0x3a19ac8a._0x512da7a0(_0xcccf61f3[_0x38ade01f]);
            }

            _0xf290ea5f = GUILayout.Toolbar(_0xf290ea5f, _0x2f8a514c, GUILayout.Height(30));
            GUILayout.Space(10);
            EditorGUILayout.EndHorizontal();
            GUILayout.Space(5);
            _0x2684f217._0xbf7140d1();
            
            string _0xa7025b51 = _0xcccf61f3[_0xf290ea5f];
            
            if (_0xa7025b51 == "unity试玩")
            {
                if (_0x174b6c14 == null)
                    _0x174b6c14 = CreateInstance<_0x852e8d8a>();
                _0x174b6c14._0xaab935e5(this);
            }
            else if (_0xa7025b51 == "Luna试玩")
            {
                if (_0x584851d3 == null)
                    _0x584851d3 = CreateInstance<_0x3ae754dc>();
                _0x584851d3._0xcf66282f(this);
            }
            else if (_0xa7025b51 == "其他")
            {
                _0xc1d10b87();
            }
        }

        private void _0xc1d10b87()
        {
            this._0x3cc8004c = EditorGUILayout.BeginScrollView(this._0x3cc8004c);
            
            EditorGUILayout.BeginVertical("box");
            _0x2684f217._0x355d6414("SDK 维护");
            var _0x654918d1 = new Dictionary<string, Action>()
            {
                {
                    "升级SDK",
                    () => _0x852e8d8a._0x77c6148d(false)
                },
                {
                    "重新导入SDK(包括资源)",
                    () => _0x852e8d8a._0x77c6148d(true)
                },
                {
                    "组件替换",
                    _0x6689e212._0xa9741371
                },
            };
            if (_0xf43a6983._0x17ee4b5c())
            {
                _0x654918d1.Add("升级BuildReport", _0x852e8d8a._0xc465b4a9);
            }

            _0x9d194ead(_0x654918d1);
            EditorGUILayout.EndVertical();
            GUILayout.Space(10);
            
            EditorGUILayout.BeginVertical("box");
            _0x2684f217._0x355d6414("工程清理");
            var _0x70c909e9 = new Dictionary<string, Action>()
            {
                {
                    "无效的挂载脚本",
                    _0x61d8b815._0x468bbc65
                },
                {
                    "空文件夹",
                    _0x61d8b815._0x7a08f8c8
                },
                {
                    "旧版资源",
                    _0x3a4ab209._0x7f98781a
                },
                {
                    "删除无用的库",
                    _0xf95de2f9._0xc06e188e
                },
            };
            _0x9d194ead(_0x70c909e9);
            EditorGUILayout.EndVertical();
            EditorGUILayout.EndScrollView();
        }

        private void _0x9d194ead(Dictionary<string, Action> _0xfaeb6aa0)
        {
            EditorGUILayout.BeginHorizontal();
            float _0x02b7a785 = position.width;
            float _0x2366cc25 = 0;
            GUIStyle _0xd82a902c = new GUIStyle(GUI.skin.button)
            {
                fontSize = 14,
                alignment = TextAnchor.MiddleCenter
            };
            foreach (var action in _0xfaeb6aa0)
            {
                Vector2 _0x8e4dccaf = _0xd82a902c.CalcSize(new GUIContent(_0x3a19ac8a._0x512da7a0(action.Key)));
                float _0xd28457ac = _0x8e4dccaf.x + 16;
                float _0xa287e513 = 28;
                if (_0x2366cc25 + _0xd28457ac > _0x02b7a785 - 30)
                {
                    EditorGUILayout.EndHorizontal();
                    EditorGUILayout.BeginHorizontal();
                    _0x2366cc25 = 0;
                }

                _0x2684f217._0xc3842f89(action.Key, () =>
                {
                    EditorApplication.delayCall += () => action.Value();
                }, _0xd28457ac, _0xa287e513);
                _0x2366cc25 += _0xd28457ac;
            }

            EditorGUILayout.EndHorizontal();
        }

        private Vector2 _0x3cc8004c = new Vector2();
    }
}