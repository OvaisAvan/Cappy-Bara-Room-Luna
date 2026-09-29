using System.Drawing;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using System;
using System.Reflection;
using UnityEditor.SceneManagement;
using UnityEditor.ShortcutManagement;
using SC;

namespace _0xa07739b8
{
    
    
    
    public class _0xb1c51c50
    {
        
        public static class _0x75397f57
        {
            public static object _0x4024beb9()
            {
                Type _0x71dbc23a = Type.GetType("UnityEditor.SceneManagement.PrefabStageUtility, UnityEditor") ?? Type.GetType("UnityEditor.Experimental.SceneManagement.PrefabStageUtility, UnityEditor");
                return _0x71dbc23a?.GetMethod("GetCurrentPrefabStage")?.Invoke(null, null);
            }

            public static GameObject _0xe4142014(object _0x2cffaf82)
            {
                return _0x2cffaf82?.GetType().GetProperty("prefabContentsRoot")?.GetValue(_0x2cffaf82) as GameObject;
            }
        }

        [Shortcut("Custom/Rotate", KeyCode.Space)]
        
        public static void _0x5cc82bf8()
        {
            _0x77d6d61e();
            
            int _0x15d6be71 = _0x30f2a5ed();
            
            Vector2 _0xbbed6374 = _0x39e5b6c3(_0x15d6be71);
            
            Vector2 _0xa8f74f73 = new Vector2(_0xbbed6374.y, _0xbbed6374.x);
            if (!_0xc7149a9a((int)_0xa8f74f73.x, (int)_0xa8f74f73.y))
            {
                Debug.LogError($"分辨率不在设置列表里，请先添加分辨率{_0xbbed6374.y}x{_0xbbed6374.x}");
                return;
            }

            SceneView.RepaintAll();
        }

        [Shortcut("Custom/Save", KeyCode.S)]
        
        public static void _0x77d6d61e()
        {
            var _0x738f313d = EditorSceneManager.GetActiveScene();
            
            if (_0x738f313d != null && _0x738f313d.name != "")
            {
                var _0x499d14a8 = _0x738f313d.GetRootGameObjects();
                for (int _0x67d6a6e0 = 0; _0x67d6a6e0 < _0x499d14a8.Length; _0x67d6a6e0++)
                {
                    _0xc741c56b(_0x499d14a8[_0x67d6a6e0], _0xaf79d3b5);
                }
            }

            
            var _0x228acbb8 = _0x75397f57._0x4024beb9();
            if (_0x228acbb8 != null)
            {
                var _0x39e2be50 = _0x75397f57._0xe4142014(_0x228acbb8);
                if (_0x39e2be50 != null)
                {
                    _0xc741c56b(_0x39e2be50, _0xaf79d3b5);
                }
            }

            Debug.Log(_0x3a19ac8a._0x512da7a0("保存横竖屏数据"));
        }

        
        
        
        private static bool _0x7550caa7 = true;
        
        
        
        private static Vector2 _0x58842f93 = Vector2.zero;
        
        
        
        public static bool _0xaf79d3b5 => _0x58842f93.y > _0x58842f93.x;

        
        
        
        private static bool _0x98f71777 = true;
        [InitializeOnLoadMethod]
        private static void _0x00e54b40()
        {
            _0xf7c3d1db = System.Type.GetType("UnityEditor.GameView,UnityEditor");
            _0xf0171ba3 = _0xf7c3d1db.GetProperty("selectedSizeIndex", System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.NonPublic);
            _0x98f71777 = false;
        }

        private static EventInfo _0x690571ab;
        private static MethodInfo _0xcda696a8;
        private static Delegate _0x2efa4528;
        [InitializeOnLoadMethod]
        private static void _0x6b3dd819()
        {
            _0x58842f93 = _0xe4ccf637();
            
            EditorApplication.update += _0xae9af1e9;
            
            EditorApplication.playModeStateChanged += _0x34420e98;
            
            EditorSceneManager.sceneOpened += _0xc80d7e1b;
            
            
            Type _0xa2a37062 = Type.GetType("UnityEditor.SceneManagement.PrefabStage, UnityEditor") ?? Type.GetType("UnityEditor.Experimental.SceneManagement.PrefabStage, UnityEditor");
            if (_0xa2a37062 != null)
            {
                _0x690571ab = _0xa2a37062.GetEvent("prefabStageOpened");
                _0xcda696a8 = typeof(_0xb1c51c50).GetMethod("_onPrefabStageOpened", BindingFlags.NonPublic | BindingFlags.Static);
                
                if (_0x690571ab != null && _0xcda696a8 != null)
                {
                    
                    Type _0x3563b78a = _0x690571ab.EventHandlerType;
                    _0x2efa4528 = Delegate.CreateDelegate(_0x3563b78a, _0xcda696a8);
                    _0x690571ab.AddEventHandler(null, _0x2efa4528);
                }
            }
            else
            {
                Debug.LogWarning("[SCWebAdAdaptEditor] PrefabStage API not found. Prefab editing events will not work.");
            }
        }

        
        private static void _0x45179663(object _0x033f6cc4)
        {
            
            Type _0x2049d321 = _0x033f6cc4.GetType();
            PropertyInfo _0x64266e30 = _0x2049d321.GetProperty("prefabContentsRoot");
            GameObject _0xbf011c72 = _0x64266e30?.GetValue(_0x033f6cc4) as GameObject;
            Debug.Log($"Prefab opened: {_0xbf011c72?.name}");
            _0x8b825ddf();
        }

        private static void _0xc80d7e1b(UnityEngine.SceneManagement.Scene _0x380ac13c, OpenSceneMode _0xe2ce61c5)
        {
            _0x8b825ddf();
        }

        private static void _0x34420e98(PlayModeStateChange _0x0114c5b4)
        {
            if (_0x0114c5b4 == PlayModeStateChange.ExitingPlayMode)
            {
                _0x8b825ddf();
            }
        }

        
        
        
        private static void _0xae9af1e9()
        {
            if (_0x98f71777)
            {
                return;
            }

            if (_0x084f6268 == null || _0xf0171ba3 == null)
            {
                return;
            }

            var _0xd23b5e9d = EditorWindow.focusedWindow;
            if (_0xd23b5e9d != null)
            {
                string _0xd6e09aab = _0xd23b5e9d.GetType().Name;
                if (_0xd6e09aab == "GameView")
                {
                    _0x7550caa7 = false;
                }
                else if (_0xd6e09aab == "SceneView")
                {
                    _0x7550caa7 = true;
                }
            }
            else
            {
                _0x7550caa7 = true;
            }

            Vector2 _0x1ab1e1aa = _0xe4ccf637();
            
            if (_0x1ab1e1aa.x != 0 && (_0x1ab1e1aa != _0x58842f93 || _0x58842f93.x == 0))
            {
                
                bool _0x670c19fa = _0x1ab1e1aa.x < _0x1ab1e1aa.y;
                bool _0x8b780e15 = _0x58842f93.x == 0 ? !_0x670c19fa : _0x58842f93.x < _0x58842f93.y;
                
                if (_0x670c19fa != _0x8b780e15)
                {
                    _0x98f71777 = true;
                    EditorApplication.update -= _0x40bf6f1e;
                    _0x323e7a60();
                    EditorApplication.update += _0x40bf6f1e;
                }

                _0x58842f93 = _0x1ab1e1aa;
            }
        }

        
        
        
        private static void _0x40bf6f1e()
        {
            EditorApplication.update -= _0x40bf6f1e;
            EditorApplication.update -= _0x40bf6f1e;
            
            if (_0x7550caa7)
            {
                var _0x16a64d36 = SceneView.sceneViews;
                if (_0x16a64d36.Count > 0)
                {
                    
                    var _0x0d59a97b = (SceneView)_0x16a64d36[0];
                    _0x0d59a97b.Focus();
                    _0x0d59a97b.Show();
                    _0x0d59a97b.ShowTab();
                }
                else
                {
                    
                    EditorApplication.ExecuteMenuItem("Window/General/Scene");
                }

                SceneView.RepaintAll();
            }

            _0x81221ed0();
            _0x98f71777 = false;
            _0x4a368a00();
            string _0x23d4cdc3 = _0xaf79d3b5 ? "竖屏" : "横屏";
            Debug.Log(_0x3a19ac8a._0x512da7a0("横竖屏切换，当前{0}", _0x3a19ac8a._0x512da7a0(_0x23d4cdc3)));
        }

        
        
        
        public static void _0x8b825ddf()
        {
            _0x58842f93 = new Vector2(0, _0x58842f93.x);
        }

        
        
        
        
        
        static void _0x81221ed0()
        {
            var _0x664763e8 = EditorSceneManager.GetActiveScene();
            
            if (_0x664763e8 != null && _0x664763e8.name != "")
            {
                var _0x74184233 = _0x664763e8.GetRootGameObjects();
                for (int _0xede09b8e = 0; _0xede09b8e < _0x74184233.Length; _0xede09b8e++)
                {
                    _0xd7a5fd78(_0x74184233[_0xede09b8e], _0xaf79d3b5);
                }
            }

            
            var _0xc489f2f3 = _0x75397f57._0x4024beb9();
            if (_0xc489f2f3 != null)
            {
                var _0x5fe3ac6c = _0x75397f57._0xe4142014(_0xc489f2f3);
                if (_0x5fe3ac6c != null)
                {
                    _0xd7a5fd78(_0x5fe3ac6c, _0xaf79d3b5);
                }
            }
        }

        
        
        
        
        
        static void _0xd7a5fd78(GameObject _0x1347499b, bool _0x36c077ea)
        {
            var _0xa74bfba6 = _0x1347499b.GetComponentsInChildren<SCWebAdAdaptCanvas>();
            for (int _0x226a4f46 = 0; _0x226a4f46 < _0xa74bfba6.Length; _0x226a4f46++)
            {
                _0xa74bfba6[_0x226a4f46].ApplyAdapt(_0x36c077ea);
            }

            var _0x9fa5c353 = _0x1347499b.GetComponentsInChildren<SCWebAdAdaptNode>();
            for (int _0xd35e820d = 0; _0xd35e820d < _0x9fa5c353.Length; _0xd35e820d++)
            {
                _0x9fa5c353[_0xd35e820d].ApplyAdapt(_0x36c077ea);
            }
        }

        
        
        
        
        
        static void _0xc741c56b(GameObject _0x6229a059, bool _0xd970243a)
        {
            bool _0xc5b776d3 = false;
            var _0xd1b57475 = _0x6229a059.GetComponentsInChildren<SCWebAdAdaptNode>();
            for (int _0x98b63b4b = 0; _0x98b63b4b < _0xd1b57475.Length; _0x98b63b4b++)
            {
                _0xd1b57475[_0x98b63b4b].SaveData(_0xd970243a);
                _0xc5b776d3 = true;
                Debug.Log($"save:{_0xd970243a}:{_0xc9be004e._0x4cfb25ca(_0xd1b57475[_0x98b63b4b].transform)}");
            }

            if (_0xc5b776d3)
            {
                _0xc9be004e._0x2e1dbaf8(_0x6229a059);
            }
        }

        
        
        
        
        static int _0x9100490d = 7;
        
        
        
        
        static System.Type _0xf7c3d1db;
        
        
        
        
        static PropertyInfo _0xf0171ba3;
        
        
        
        
        static EditorWindow _0x084f6268
        {
            get
            {
                if (_0xf7c3d1db == null)
                {
                    return null;
                }

                var _0xdf2139ca = Resources.FindObjectsOfTypeAll(_0xf7c3d1db);
                if (_0xdf2139ca != null && _0xdf2139ca.Length > 0)
                {
                    return _0xdf2139ca[0] as EditorWindow;
                }

                return null;
            }
        }

        
        
        
        static void _0x323e7a60()
        {
            var _0xf34f73a6 = _0x084f6268;
            if (_0xf34f73a6 == null)
            {
                return;
            }

            _0xf34f73a6.Focus();
        }

        
        
        
        
        
        
        
        public static bool _0xc7149a9a(int _0x90e4b872, int _0xd7095864)
        {
            
            int _0xf30ed65e = _0x269f66c9(_0x90e4b872, _0xd7095864);
            if (_0xf30ed65e == -1)
            {
                return false;
            }

            _0x6ace61e0(_0xf30ed65e);
            return true;
        }

        
        
        
        
        public static void _0x6ace61e0(int _0x56d899c2)
        {
            
            var _0xb0806914 = _0x084f6268;
            if (_0xb0806914 == null)
            {
                _0x323e7a60();
                _0xb0806914 = _0x084f6268;
            }

            if (_0xb0806914 == null)
            {
                Debug.LogError("GameView not found!");
                return;
            }

            _0xf0171ba3.SetValue(_0xb0806914, _0x9100490d + _0x56d899c2);
            _0xb0806914.Repaint();
        }

        
        public static void _0x4a368a00()
        {
            var _0x726c18c4 = _0x084f6268;
            if (_0x726c18c4 == null)
            {
                Debug.LogError("GameView not found!");
                return;
            }

            FieldInfo _0x250fbdeb = _0x726c18c4.GetType().GetField("m_ZoomArea", BindingFlags.Instance | BindingFlags.NonPublic);
            if (_0x250fbdeb == null)
            {
                Debug.LogError("m_ZoomArea field not found!");
                return;
            }

            object _0xec376d73 = _0x250fbdeb.GetValue(_0x726c18c4);
            if (_0xec376d73 == null)
            {
                Debug.LogError("m_ZoomArea is null!");
                return;
            }

            
            PropertyInfo _0x52564e7c = _0x726c18c4.GetType().GetProperty("minScale", BindingFlags.Instance | BindingFlags.NonPublic);
            if (_0x52564e7c == null)
            {
                Debug.LogError("minScale property not found!");
                return;
            }

            float _0xedb3c8f6 = (float)_0x52564e7c.GetValue(_0x726c18c4);
            
            MethodInfo _0x12b91276 = _0xec376d73.GetType().GetMethod("SetScaleFocused", new Type[] { typeof(Vector2), typeof(Vector2), typeof(bool), typeof(bool) });
            if (_0x12b91276 == null)
            {
                Debug.LogError("SetScaleFocused method not found!");
                return;
            }

            
            Vector2 _0x46ffb081 = new Vector2(0.5f, 0.5f); 
            _0x12b91276.Invoke(_0xec376d73, new object[] { _0x46ffb081, new Vector2(_0xedb3c8f6, _0xedb3c8f6), false, false });
            _0x726c18c4.Repaint();
        }

        
        
        
        
        public static Vector2 _0xe4ccf637()
        {
            
            int _0x39d57449 = _0x30f2a5ed();
            if (_0x39d57449 < 0)
            {
                return Vector2.zero;
            }

            
            return _0x39e5b6c3(_0x39d57449);
        }

        
        
        
        
        public static int _0x30f2a5ed()
        {
            
            if (_0x084f6268 == null || _0xf0171ba3 == null)
            {
                return -1;
            }

            
            return (int)_0xf0171ba3.GetValue(_0x084f6268) - _0x9100490d;
        }

        
        
        
        
        
        public static Vector2 _0x39e5b6c3(int _0x8e7f8761)
        {
            var _0x2603633f = _0xa9f79d7b();
            if (_0x8e7f8761 >= 0 && _0x8e7f8761 < _0x2603633f.Count)
            {
                return _0x2603633f[_0x8e7f8761];
            }

            return Vector2.zero;
        }

        
        
        
        
        
        public static int _0x269f66c9(int _0x89753bbd, int _0xc44a3efc)
        {
            var _0xfecce023 = _0xa9f79d7b();
            for (int _0x641a719e = 0; _0x641a719e < _0xfecce023.Count; _0x641a719e++)
            {
                if (_0xfecce023[_0x641a719e].x == _0x89753bbd && _0xfecce023[_0x641a719e].y == _0xc44a3efc)
                {
                    return _0x641a719e;
                }
            }

            return -1;
        }

        
        static Type _0x5fe9dddd = typeof(Editor).Assembly.GetType("UnityEditor.ScriptableSingleton`1");
        
        static Type _0x1561595f = typeof(Editor).Assembly.GetType("UnityEditor.GameViewSizes");
        static Type _0xe0b1bd0b = _0x5fe9dddd.MakeGenericType(_0x1561595f);
        static PropertyInfo _0x069d8355 = _0xe0b1bd0b.GetProperty("instance", BindingFlags.Public | BindingFlags.Static);
        static PropertyInfo _0xf16bec0a = _0x1561595f.GetProperty("currentGroup", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
        static Type _0x7838c791 = typeof(Editor).Assembly.GetType("UnityEditor.GameViewSizeGroup");
        static FieldInfo _0xb14f24be = _0x7838c791.GetField("m_Custom", BindingFlags.NonPublic | BindingFlags.Instance);
        static Type _0xc9a78786 = typeof(Editor).Assembly.GetType("UnityEditor.GameViewSize");
        static FieldInfo _0x476834a8 = _0xc9a78786.GetField("m_Width", BindingFlags.NonPublic | BindingFlags.Instance);
        static FieldInfo _0xa2834fc1 = _0xc9a78786.GetField("m_Height", BindingFlags.NonPublic | BindingFlags.Instance);
        
        
        
        
        
        public static List<Vector2> _0xa9f79d7b()
        {
            
            
            var _0x66eaabbe = _0x069d8355.GetValue(null);
            
            var _0xc54ba94b = _0xf16bec0a.GetValue(_0x66eaabbe);
            List<Vector2> _0xefdbbee6 = new List<Vector2>();
            
            var _0x12afda1f = _0xb14f24be.GetValue(_0xc54ba94b) as System.Collections.IList;
            if (_0x12afda1f != null)
            {
                
                foreach (var item in _0x12afda1f)
                {
                    int _0xeb48496f = (int)_0x476834a8.GetValue(item);
                    int _0x16496d2f = (int)_0xa2834fc1.GetValue(item);
                    _0xefdbbee6.Add(new Vector2(_0xeb48496f, _0x16496d2f));
                }
            }

            return _0xefdbbee6;
        }
    }
}