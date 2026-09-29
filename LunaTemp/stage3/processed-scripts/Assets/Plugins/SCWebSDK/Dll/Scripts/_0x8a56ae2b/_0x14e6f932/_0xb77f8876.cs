using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;
using SC.Utility;

namespace SC
{
    public partial class sc
    {
        public static _0xde080b51 config = new _0xde080b51();
    }

    public partial class _0xde080b51
    {
        static string _0xd495fc77 = "config";
        Dictionary<string, Dictionary<string, Dictionary<string, object>>> _0x1de9d89e = null;
        Dictionary<string, Dictionary<string, Dictionary<string, object>>> _0xd058b242
        {
            get
            {
                if (_0x1de9d89e == null)
                {
                    _0x139f2bc2();
                }

                return _0x1de9d89e;
            }
        }

        
        
        
        private void _0x139f2bc2()
        {
            _0x1de9d89e = new Dictionary<string, Dictionary<string, Dictionary<string, object>>>();
            TextAsset[] _0x8ae987df = Resources.LoadAll<TextAsset>(_0xd495fc77);
            foreach (var item in _0x8ae987df)
            {
                var _0x79a5d54e = item.name;
                var _0xef89d2fc = item.text;
                if (_0xef89d2fc == "" || _0x79a5d54e.Contains("data"))
                {
                    continue;
                }

                
                var _0xfb0d94d4 = TExcel.ExcelToJson(_0xef89d2fc, _0x79a5d54e);
                _0xd058b242.Add(_0x79a5d54e, _0xfb0d94d4);
            }
        }

        
        public void Refresh()
        {
        }

        public object GetTable(string _0xda5db7f0)
        {
            if (_0xd058b242.ContainsKey(_0xda5db7f0))
            {
                return _0xd058b242[_0xda5db7f0];
            }

            return null;
        }

        
        public object GetColumn(string _0x3556da2f, string _0x19d91ef4, string _0x0db0289c)
        {
            if (_0xd058b242.ContainsKey(_0x3556da2f))
            {
                var _0x7dc842a9 = _0xd058b242[_0x3556da2f];
                if (_0x7dc842a9.ContainsKey(_0x19d91ef4))
                {
                    var _0x6b98afa6 = _0x7dc842a9[_0x19d91ef4];
                    if (_0x6b98afa6.ContainsKey(_0x0db0289c))
                    {
                        return _0x6b98afa6[_0x0db0289c];
                    }
                }
            }

            return default(object);
        }

        
        public T GetColumn<T>(string _0x1aaa7a23, string _0xfd5a158e, string _0x0d005dc6)
        {
            return (T)GetColumn(_0x1aaa7a23, _0xfd5a158e, _0x0d005dc6);
        }

        public object GetRow(string _0xef18f7fb, string _0x47f48991)
        {
            return default(object);
        }

        public T GetRow<T>(string _0xcd457bf4, string _0x523c0455)
        {
            return default(T);
        }

        public T GetRow<T>(string _0x89df1f66, string _0x1c93648d, Type _0xa7e3c2a5)
        {
            return default(T);
        }

        public bool IsExistTable(string _0x103d4cfb)
        {
            return false;
        }

        public List<T> GetList<T>(string _0xd0b754f6)
        {
            return default(System.Collections.Generic.List<T>);
        }

        public List<object> GetList(string _0xffbfebbb, Type _0x7009c08e)
        {
            return default(System.Collections.Generic.List<object>);
        }

        public enum _0x7f802bc6
        {
            [global::UnityEngine.InspectorName("Txt")]
            _0x2ebeaef5 = 0,
            [global::UnityEngine.InspectorName("Protobuf")]
            _0x29062255 = 1,
        }
    }
}