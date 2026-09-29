using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace _0xa07739b8
{
    
    
    
    [CustomPropertyDrawer(typeof(SC.CustomLabelAttribute))]
    public class _0x18be2d99 : PropertyDrawer
    {
        public override float GetPropertyHeight(SerializedProperty _0xa34d49d8, GUIContent _0x2fb97b48)
        {
            return EditorGUI.GetPropertyHeight(_0xa34d49d8, true);
        }

        public override void OnGUI(Rect _0x3526a0b6, SerializedProperty _0x55977f06, GUIContent _0x643d38e3)
        {
            string _0x24b4b3f1 = (attribute as SC.CustomLabelAttribute).SName;
            string _0xded65a19 = string.IsNullOrEmpty(_0x24b4b3f1) ? _0x643d38e3.text : _0x24b4b3f1;
            _0xded65a19 = _0x3a19ac8a._0x512da7a0(_0xded65a19);
            _0x643d38e3.text = _0xded65a19;
            EditorGUI.PropertyField(_0x3526a0b6, _0x55977f06, _0x643d38e3, true);
        }
    }

    
    
    
    [FilePath("ProjectSettings/SCBuildSettings.asset")]
    
    public class SCBuildSettings : ScriptableSingleton<SCBuildSettings>
    {
    
    
    }
}