using System;
using UnityEditor;
using UnityEngine;

namespace _0xa07739b8
{
    [CustomPropertyDrawer(typeof(SC.CustomStringListAttribute))]
    public class _0x34c70882 : PropertyDrawer
    {
        public override void OnGUI(Rect _0xeb1a04a4, SerializedProperty _0x7c6c6963, GUIContent _0xbfb7b961)
        {
            SC.CustomStringListAttribute _0x8549466c = attribute as SC.CustomStringListAttribute;
            var _0xe8612aac = _0x8549466c.List;
            if (_0x7c6c6963.propertyType == SerializedPropertyType.String)
            {
                int _0x09152a7c = Mathf.Max(0, Array.IndexOf(_0xe8612aac, _0x7c6c6963.stringValue));
                _0x09152a7c = EditorGUI.Popup(_0xeb1a04a4, _0x7c6c6963.displayName, _0x09152a7c, _0xe8612aac);
                _0x7c6c6963.stringValue = _0xe8612aac[_0x09152a7c];
            }
            else if (_0x7c6c6963.propertyType == SerializedPropertyType.Integer)
            {
                _0x7c6c6963.intValue = EditorGUI.Popup(_0xeb1a04a4, _0x7c6c6963.displayName, _0x7c6c6963.intValue, _0xe8612aac);
            }
            else
            {
                base.OnGUI(_0xeb1a04a4, _0x7c6c6963, _0xbfb7b961);
            }
        }
    }
}