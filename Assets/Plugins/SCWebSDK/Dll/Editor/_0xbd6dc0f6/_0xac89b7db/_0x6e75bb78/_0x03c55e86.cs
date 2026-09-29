using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using _0xa07739b8;



namespace _0xa07739b8
{
    public static class _0x7df90926
    {
        
        public static string[] _0xb785cefb()
        {
            return _0xc9be004e._0xc9ae6b43();
        }
    }

    public static class _0x218983fa
    {
        public static Type _0x41347487(string _0x9dc6d4f7)
        {
            return _0xbc030071._0xd0a42bd4(_0x9dc6d4f7);
        }

        public static List<Type> _0x14e5e431(Type _0xa4bcc1cb)
        {
            return _0xbc030071._0xfbf84854(_0xa4bcc1cb);
        }

        public static string[] _0x60773fcc(Type _0x274e7d66)
        {
            return _0xbc030071._0x0dd8dd9f(_0x274e7d66);
        }
    }

    public static class _0x62cb14ef
    {
        
        public static void _0xf66c2fbf(string _0xe5d1eaa8)
        {
            _0x2684f217._0x355d6414(_0xe5d1eaa8);
        }

        public static void _0x399d6f66(string _0xcf94d23d, int _0x2001eb10 = 100, int _0x8b416e0c = 30, int _0xa1742107 = 16)
        {
            _0x2684f217._0xf9289847(_0xcf94d23d, _0x2001eb10, _0x8b416e0c, _0xa1742107);
        }

        public static void _0x98ad12db(string _0x2e44c2f6, int _0xb67f58ad = 100, int _0x7e0e7905 = 30, int _0x62af7bcd = 16)
        {
            _0x2684f217._0x69ee21e9(_0x2e44c2f6, _0xb67f58ad, _0x7e0e7905, _0x62af7bcd);
        }

        
        
        public static bool _0xd9b2e63a(string _0x7f54f610, float _0x6d2ee5e5 = -1, float _0x85412adc = -1)
        {
            _0x7f54f610 = _0x3a19ac8a._0x512da7a0(_0x7f54f610);
            var _0x813e3ee1 = new GUIStyle(GUI.skin.button);
            _0x813e3ee1.fontSize = 16;
            _0x813e3ee1.alignment = TextAnchor.MiddleCenter;
            _0x813e3ee1.fixedHeight = _0x85412adc == -1 ? _0x2684f217._0xe3d3f651.y : _0x85412adc;
            if (_0x6d2ee5e5 == -1)
            {
                Vector2 _0xc03b9c30 = _0x813e3ee1.CalcSize(new GUIContent(_0x7f54f610));
                _0x6d2ee5e5 = (int)_0xc03b9c30.x;
            }

            _0x813e3ee1.fixedWidth = _0x6d2ee5e5 == -1 ? _0x2684f217._0xe3d3f651.x : _0x6d2ee5e5;
            return GUILayout.Button(_0x7f54f610, _0x813e3ee1);
        }
    }
}