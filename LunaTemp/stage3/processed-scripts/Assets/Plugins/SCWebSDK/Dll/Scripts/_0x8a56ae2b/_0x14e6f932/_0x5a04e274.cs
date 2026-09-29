using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    public partial class sc
    {
        
        public static _0x44c7f1b7 localStorage = new _0x44c7f1b7();
    }

    public partial class _0x44c7f1b7
    {
        
        
        public T GetObject<T>(string _0xab4d08d9, object _0x7997b65d = null, bool _0x755b6d9f = false)
        {
            object _0x1e50a323 = GetObject(typeof(T), _0xab4d08d9, _0x7997b65d, _0x755b6d9f);
            if (_0x1e50a323 is T tValue)
                return tValue;
            return (T)_0x7997b65d;
        }

        
        public object GetObject(Type _0xa7328d13, string _0xda3f1ffc, object _0x61fed657 = null, bool _0x02434a32 = false)
        {
            if (string.IsNullOrEmpty(_0xda3f1ffc))
                return _0x61fed657;
            if (_0xa7328d13 == null)
                return _0x61fed657;
            if (_0xa7328d13 == typeof(string))
                return PlayerPrefs.GetString(_0xda3f1ffc, _0x61fed657 as string);
            if (_0xa7328d13 == typeof(int))
                return PlayerPrefs.GetInt(_0xda3f1ffc, _0x61fed657 != null ? Convert.ToInt32(_0x61fed657) : 0);
            if (_0xa7328d13 == typeof(float))
                return PlayerPrefs.GetFloat(_0xda3f1ffc, _0x61fed657 != null ? Convert.ToSingle(_0x61fed657) : 0f);
            if (_0xa7328d13 == typeof(bool))
                return PlayerPrefs.GetInt(_0xda3f1ffc, (_0x61fed657 is bool b && b) ? 1 : 0) == 1;
            return _0x61fed657;
        }

        
        public void SetObject(string _0xde7ae990, object _0xb751a0a8, bool _0xd5d0140b = false)
        {
            if (string.IsNullOrEmpty(_0xde7ae990))
                return;
            if (_0xb751a0a8 == null)
            {
                Remove(_0xde7ae990);
                return;
            }

            if (_0xb751a0a8 is string s)
                PlayerPrefs.SetString(_0xde7ae990, s);
            else if (_0xb751a0a8 is int i)
                PlayerPrefs.SetInt(_0xde7ae990, i);
            else if (_0xb751a0a8 is float f)
                PlayerPrefs.SetFloat(_0xde7ae990, f);
            else if (_0xb751a0a8 is bool b)
                PlayerPrefs.SetInt(_0xde7ae990, b ? 1 : 0);
            else
                return;
            PlayerPrefs.Save();
        }

        
        public bool HasKey(string _0x63dd86fc)
        {
            return !string.IsNullOrEmpty(_0x63dd86fc) && PlayerPrefs.HasKey(_0x63dd86fc);
        }

        
        public void Remove(string _0x19bf6a10)
        {
            if (string.IsNullOrEmpty(_0x19bf6a10))
                return;
            PlayerPrefs.DeleteKey(_0x19bf6a10);
            PlayerPrefs.Save();
        }
    }
}