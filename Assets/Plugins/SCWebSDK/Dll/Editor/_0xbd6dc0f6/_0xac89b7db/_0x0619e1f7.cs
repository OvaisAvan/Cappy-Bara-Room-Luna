using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using System.Diagnostics;
using Debug = UnityEngine.Debug;
using System.Threading;
using UnityEditor.ShortcutManagement;
using System.IO;
using System.Reflection;
using System.Linq;

namespace _0xa07739b8
{
    public static class _0xbc030071
    {
        
        
        
        
        
        public static string[] _0x0dd8dd9f(Type _0x9624519b)
        {
            if (_0x9624519b == null)
            {
                Debug.LogWarning(_0x3a19ac8a._0x512da7a0("type not found"));
                return null;
            }

            List<string> _0x7cf62a9f = new List<string>();
            
            PropertyInfo[] _0xf93913a1 = _0x9624519b.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            
            foreach (PropertyInfo property in _0xf93913a1)
            {
                Debug.Log(_0x3a19ac8a._0x512da7a0("property:{0}", property.Name));
                MethodInfo _0x9f90f26b = property.GetGetMethod();
                MethodInfo _0x2f28c872 = property.GetSetMethod();
                bool _0x9575df01 = true;
                if (_0x9f90f26b == null)
                {
                    _0x9575df01 = false;
                }

                if (_0x2f28c872 == null)
                {
                    _0x9575df01 = false;
                }

                if (_0x9575df01)
                {
                    _0x7cf62a9f.Add(property.Name);
                }
            }

            return _0x7cf62a9f.ToArray();
        }

        
        
        
        
        
        public static List<Type> _0xfbf84854(Type _0xb8dcdce1)
        {
            List<Type> _0xf49b13e4 = new List<Type>();
            
            Assembly[] _0xdbc0afe3 = AppDomain.CurrentDomain.GetAssemblies();
            foreach (Assembly assembly in _0xdbc0afe3)
            {
                try
                {
                    
                    IEnumerable<Type> _0x1ed850bc = assembly.GetTypes().Where(_0xf94b7adc => _0xf94b7adc.IsSubclassOf(_0xb8dcdce1));
                    _0xf49b13e4.AddRange(_0x1ed850bc);
                }
                catch (ReflectionTypeLoadException)
                {
                
                }
            }

            _0xf49b13e4.Sort((_0x803eb352, _0xcbc8abf4) => string.Compare(_0xcbc8abf4.FullName, _0x803eb352.FullName, StringComparison.Ordinal));
            return _0xf49b13e4;
        }

        
        
        
        
        
        public static Type _0xd0a42bd4(string _0x578705b4)
        {
            
            Assembly[] _0xec2b73ec = AppDomain.CurrentDomain.GetAssemblies();
            foreach (Assembly assembly in _0xec2b73ec)
            {
                try
                {
                    var _0x6860d12e = assembly.GetType(_0x578705b4);
                    if (_0x6860d12e != null)
                    {
                        return _0x6860d12e;
                    }
                }
                catch (ReflectionTypeLoadException)
                {
                
                }
            }

            return null;
        }
    }
}