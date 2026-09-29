using System;
using UnityEngine;
using System.Reflection;
using System.Collections.Generic;

namespace SC
{
    internal class MonoPInvokeCallbackAttribute : Attribute
    {
        public MonoPInvokeCallbackAttribute()
        {
        }
    }

    
    
    
     
    public class CustomLabelAttribute : PropertyAttribute
    {
        
        
        public string SName;
        
        
        
        
         
        public CustomLabelAttribute(string _0x45c20cfd)
        {
            this.SName = _0x45c20cfd;
        }
    }

    
    
    
    public class CustomDisableAttribute : PropertyAttribute
    {
        
        
        public string SName;
        
        
        
        
        public CustomDisableAttribute()
        {
        }

        
        
        
        
        public CustomDisableAttribute(string _0x5b62492b)
        {
            this.SName = _0x5b62492b;
        }
    }

    
    
    
    public class CustomMoreAttribute : PropertyAttribute
    {
        
        public string SLabelName;
        
        public string SAttributeName;
        
        public object OAttributeVal;
        
        
        
        
        public CustomMoreAttribute(string _0xecbf3a57 = "", string _0x4f0748a5 = "", object _0x5593636f = null)
        {
            this.SLabelName = _0xecbf3a57 == null ? "" : _0xecbf3a57;
            this.SAttributeName = _0x4f0748a5 == null ? "" : _0x4f0748a5;
            this.OAttributeVal = _0x5593636f;
        }
    }

    
    
    
    public class CustomVisibleAttribute : PropertyAttribute
    {
        
        public string sLabelName;
        
        
        
        public string[] lParamNames;
        
        
        
        public Type type;
        
        
        
        public string sMethod;
        
        
        
        
        
        
        
        public CustomVisibleAttribute(string _0x10c03117, Type _0x9dad94cc, string _0x4d66dd8a, string[] _0xb8af5afb)
        {
            this.sLabelName = _0x10c03117;
            this.type = _0x9dad94cc;
            this.sMethod = _0x4d66dd8a;
            this.lParamNames = _0xb8af5afb;
        }
    }

    
    
    
    [AttributeUsage(AttributeTargets.Field, Inherited = true, AllowMultiple = false)]
    public class CustomRangeAttribute : PropertyAttribute
    {
        public readonly float min;
        public readonly float max;
        public CustomRangeAttribute(float _0x157cc63c, float _0x24fc3718, string _0x130c8d8e = "", string _0x408706f0 = "", object _0x918ae610 = null)
        {
            this.min = _0x157cc63c;
            this.max = _0x24fc3718;
            this.SLabelName = _0x130c8d8e == null ? "" : _0x130c8d8e;
            this.SAttributeName = _0x408706f0 == null ? "" : _0x408706f0;
            this.OAttributeVal = _0x918ae610;
        }

        
        public string SLabelName;
        
        public string SAttributeName;
        
        public object OAttributeVal;
    }

    
    
    
     
    
    public class CustomStringListAttribute : PropertyAttribute
    {
        public delegate string[] GetStringList();
        
        public string[] List { get; private set; }

        public CustomStringListAttribute(params string[] _0x8f72a9bf)
        {
            this.List = _0x8f72a9bf;
        }

        public CustomStringListAttribute(Type _0xb0667214)
        {
            var _0xe84c8325 = Activator.CreateInstance(_0xb0667214);
            var _0x9abd8b07 = _0xb0667214.GetFields(BindingFlags.Instance | BindingFlags.Public);
            List<string> _0x08af6e01 = new List<string>();
            foreach (var item in _0x9abd8b07)
            {
                var _0x63b58a26 = item.GetValue(_0xe84c8325);
                if (_0x63b58a26.GetType() == typeof(string))
                {
                    _0x08af6e01.Add((string)_0x63b58a26);
                }
            }

            _0x9abd8b07 = _0xb0667214.GetFields(BindingFlags.Static | BindingFlags.Public);
            foreach (var item in _0x9abd8b07)
            {
                var _0xf94863b9 = item.GetValue(null);
                if (_0xf94863b9.GetType() == typeof(string))
                {
                    _0x08af6e01.Add((string)_0xf94863b9);
                }
            }

            this.List = _0x08af6e01.ToArray();
        }

        public CustomStringListAttribute(Type _0x3fc29651, string _0x3a7f9396)
        {
            var _0xde652c5a = _0x3fc29651.GetMethod(_0x3a7f9396);
            if (_0xde652c5a != null)
            {
                this.List = _0xde652c5a.Invoke(null, null) as string[];
            }
            else
            {
                sc.log.Error("NO SUCH METHOD " + _0x3a7f9396 + " FOR " + _0x3fc29651);
            }
        }
    }
}