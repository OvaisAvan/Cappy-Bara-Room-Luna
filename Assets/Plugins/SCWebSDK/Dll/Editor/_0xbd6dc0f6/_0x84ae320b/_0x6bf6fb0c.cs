using System.Collections.Generic;
using System;
using UnityEngine;
using UnityEditor;
using System.Reflection;

namespace _0xa07739b8
{
    [Serializable]
    public class _0xc21ca37c : EditorWindow
    {
        
        
        
        
        public static Vector2 _0x3a9105ee = new Vector2(400, 300);
        
        
        
         
        public static void _0x4c902b12()
        {
            _0xc21ca37c _0x693c59d1 = EditorWindow.GetWindow<_0xc21ca37c>("Config");
            _0x693c59d1.minSize = _0x3a9105ee;
            _0x693c59d1.maxSize = _0x3a9105ee;
            _0x693c59d1._0xfc8d46ef();
            _0x693c59d1.Show();
        }

        private SerializedObject _0xfb8e7968;
        private List<SerializedProperty> _0xf440c96d = null;
        public SCBuildSettings _0xaffa34d9 = null;
        public void _0xfc8d46ef()
        {
            _0xaffa34d9 = SCBuildSettings.Instance;
            if (_0xaffa34d9 == null)
            {
                Debug.LogWarning("配置文件不存在！");
                return;
            }

            _0xfb8e7968?.Dispose();
            _0xfb8e7968 = new SerializedObject(_0xaffa34d9);
            _0xf440c96d = new List<SerializedProperty>();
            Type _0xda09b4ad = _0xaffa34d9.GetType();
            var _0xaf7a75bd = _0xda09b4ad.GetFields(BindingFlags.Public | BindingFlags.Instance);
            for (var _0x5dbebb2c = 0; _0x5dbebb2c < _0xaf7a75bd.Length; _0x5dbebb2c++)
            {
                string _0x5e7d5ed2 = _0xaf7a75bd[_0x5dbebb2c].Name;
                var _0x7a87f7d2 = _0xfb8e7968.FindProperty(_0x5e7d5ed2);
                if (_0x7a87f7d2 != null)
                {
                    _0xf440c96d.Add(_0x7a87f7d2);
                }
            }
        }

        public void OnGUI()
        {
            using (_0x802dd420())
            {
                GUISkin _0x29d29c6b = GUI.skin;
                GUI.skin = EditorGUIUtility.Load("CustomEditorSkin.guiskin") as GUISkin; 
                
                if (_0xfb8e7968 == null || !_0xfb8e7968.targetObject)
                {
                    _0xfc8d46ef();
                }

                _0xfb8e7968.Update();
                EditorGUI.BeginChangeCheck();
                foreach (var item in _0xf440c96d)
                {
                    EditorGUILayout.PropertyField(item, GUILayout.Height(24));
                }

                if (EditorGUI.EndChangeCheck())
                {
                    _0xfb8e7968.ApplyModifiedProperties();
                    _0xaffa34d9.SaveData(_0xaffa34d9);
                    _0x3a19ac8a._0xc4df4546();
                }

                GUI.skin = _0x29d29c6b;
            }
        }

        private IDisposable _0x802dd420()
        {
            var _0xbc2f3015 = Assembly.GetAssembly(typeof(EditorWindow));
            var _0x841d19e8 = _0xbc2f3015.GetType("UnityEditor.SettingsWindow+GUIScope");
            return Activator.CreateInstance(_0x841d19e8) as IDisposable;
        }
    }
}