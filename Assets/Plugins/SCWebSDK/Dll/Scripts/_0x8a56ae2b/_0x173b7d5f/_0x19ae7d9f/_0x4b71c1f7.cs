using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace SC
{
    
    
    
    public delegate void EventHandler<TEventArgs>(TEventArgs _0x1a2d37d3);
    
    public class SCEventArgs
    {
        internal string _0xb0d3dfe8;
        public string Id
        {
            get
            {
                return _0xb0d3dfe8;
            }
        }

        public void Clear()
        {
            _0xc4143096 = null;
            _0x8f0aba03 = null;
            _0x86b0d058 = null;
            _0x851e0ab9 = null;
            _0x954380b4 = null;
            _0xb0d3dfe8 = "";
        }

        internal object _0xc4143096 { get; set; }
        internal object _0x8f0aba03 { get; set; }
        internal object _0x86b0d058 { get; set; }
        internal object _0x851e0ab9 { get; set; }
        internal object _0x954380b4 { get; set; }

        
        
        
         
        public T OneData<T>()
        {
            if (_0xc4143096 != null)
            {
                return (T)_0xc4143096;
            }

            sc.log.Warning("EventArgs Count Not Has 1");
            return default;
        }

        
        
        
         
        public T TwoData<T>()
        {
            if (_0x8f0aba03 != null)
            {
                return (T)_0x8f0aba03;
            }

            sc.log.Warning("EventArgs Count Not Has 2");
            return default;
        }

        
        
        
         
        public T ThreeData<T>()
        {
            if (_0x86b0d058 != null)
            {
                return (T)_0x86b0d058;
            }

            sc.log.Warning("EventArgs Count Not Has 3");
            return default;
        }

        
        
        
         
        public T FourData<T>()
        {
            if (_0x851e0ab9 != null)
            {
                return (T)_0x851e0ab9;
            }

            sc.log.Warning("EventArgs Count Not Has 4");
            return default;
        }

        
        
        
         
        public T FiveData<T>()
        {
            if (_0x954380b4 != null)
            {
                return (T)_0x954380b4;
            }

            sc.log.Warning("EventArgs Count Not Has 5");
            return default;
        }

        
        
        
         
        public static SCEventArgs Create(object _0x5e56c225 = null, object _0x88363958 = null, object _0x95c8845a = null, object _0x7b837dd8 = null, object _0x9b59b43a = null)
        {
            SCEventArgs _0x58366417 = new SCEventArgs();
            _0x58366417._0x52eafe07(_0x5e56c225, _0x88363958, _0x95c8845a, _0x7b837dd8, _0x9b59b43a);
            return _0x58366417;
        }

        
        
        
         
        public static SCEventArgs CreateAndID(string _0xb62b0881, object _0xb8085b16 = null, object _0x70e9d680 = null, object _0x1a3af272 = null, object _0x591dede4 = null, object _0xe0df137f = null)
        {
            SCEventArgs _0xb198eb1a = new SCEventArgs();
            _0xb198eb1a._0xb0d3dfe8 = _0xb62b0881;
            _0xb198eb1a._0x52eafe07(_0xb8085b16, _0x70e9d680, _0x1a3af272, _0x591dede4, _0xe0df137f);
            return _0xb198eb1a;
        }

        
        
        
        
        
        
        
        
        protected virtual void _0x52eafe07(object _0x3eafbf09 = null, object _0xd5e9ad19 = null, object _0x9b29ef56 = null, object _0x9cbeb3e4 = null, object _0x58394439 = null)
        {
            this._0xc4143096 = _0x3eafbf09;
            this._0x8f0aba03 = _0xd5e9ad19;
            this._0x86b0d058 = _0x9b29ef56;
            this._0x851e0ab9 = _0x9cbeb3e4;
            this._0x954380b4 = _0x58394439;
        }
    }
}