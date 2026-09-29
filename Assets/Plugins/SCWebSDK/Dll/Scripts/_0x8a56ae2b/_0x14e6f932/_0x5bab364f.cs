using UnityEngine;
using System;

namespace SC
{
    public class _0x9e4216fb
    {
        
        public void Debug(object _0x9ba4351e)
        {
            _0x5b666d81(_0x5e3f4dc9._0x79f611af, _0x9ba4351e);
        }

        
        public void Dev(object _0xca64e7c3)
        {
            _0x5b666d81(_0x5e3f4dc9._0xa460a6cf, _0xca64e7c3);
        }

        
        public void Info(string _0xc39a972d)
        {
            _0x5b666d81(_0x5e3f4dc9._0x427224b3, _0xc39a972d);
        }

        
        public void Warning(object _0x721011e9)
        {
            _0x5b666d81(_0x5e3f4dc9._0x1d17c8e2, _0x721011e9);
        }

        
        public void Error(object _0xd2428b14)
        {
            _0x5b666d81(_0x5e3f4dc9._0x6feca38d, _0xd2428b14);
        }

        
        public void Fatal(string _0xe08510aa)
        {
            _0x5b666d81(_0x5e3f4dc9._0x19f4bbf5, _0xe08510aa);
        }

        
        
        
        
        
        void _0x5b666d81(_0x5e3f4dc9 _0x819da778, object _0xeee3333b)
        {
            string _0x4eb28f0d = _0xeee3333b.ToString();
            _0x284d8623(_0x819da778, _0x4eb28f0d);
        }

        
        
        
        
        
        internal void _0x284d8623(_0x5e3f4dc9 _0x2d2b5886, string _0x6192aaaa)
        {
            
            
            
            
            
            
            
            
            
            
            switch (_0x2d2b5886)
            {
                case _0x5e3f4dc9._0xa460a6cf:
                    _0x6192aaaa = $"<color=#70ACE3>[sc.dev] {_0x6192aaaa}</color>";
                    UnityEngine.Debug.Log(_0x6192aaaa);
                    break;
                case _0x5e3f4dc9._0x79f611af:
                    _0x6192aaaa = $"<color=#E69DEC>[sc.debug] {_0x6192aaaa}</color>";
                    UnityEngine.Debug.Log(_0x6192aaaa);
                    break;
                case _0x5e3f4dc9._0x427224b3:
                    _0x6192aaaa = $"<color=#00FF0C>[sc.info] {_0x6192aaaa}</color>";
                    UnityEngine.Debug.Log(_0x6192aaaa);
                    break;
                case _0x5e3f4dc9._0x1d17c8e2:
                    _0x6192aaaa = "[sc.warn] " + _0x6192aaaa;
                    UnityEngine.Debug.LogWarning(_0x6192aaaa);
                    break;
                case _0x5e3f4dc9._0x6feca38d:
                    _0x6192aaaa = "[sc.error] " + _0x6192aaaa;
                    UnityEngine.Debug.LogError(_0x6192aaaa);
                    break;
            }
        }
    }

    enum _0x5e3f4dc9
    {
        [global::UnityEngine.InspectorName("Debug")]
        _0x79f611af = 0,
        [global::UnityEngine.InspectorName("Info")]
        _0x427224b3,
        [global::UnityEngine.InspectorName("Warning")]
        _0x1d17c8e2,
        [global::UnityEngine.InspectorName("Error")]
        _0x6feca38d,
        [global::UnityEngine.InspectorName("Fatal")]
        _0x19f4bbf5,
        [global::UnityEngine.InspectorName("Dev")]
        _0xa460a6cf,
    }
}