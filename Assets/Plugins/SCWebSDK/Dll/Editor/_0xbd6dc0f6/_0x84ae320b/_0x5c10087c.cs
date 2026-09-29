using System;
using System.IO;
using System.Linq;
using UnityEditorInternal;
using UnityEngine;

namespace _0xa07739b8
{
    public abstract class _0x566b05c2 : ScriptableObject
    {
        
        public abstract void SaveData(ScriptableObject objData, bool saveAsText = true);
    }

    
    public class ScriptableSingleton<T> : _0x566b05c2 where T : _0x566b05c2
    {
        
        private static T s_Instance;
        
        public static T Instance
        {
            get
            {
                if (!s_Instance)
                {
                    _0xeea31789();
                }

                return s_Instance;
            }
        }

        public static T _0xeea31789()
        {
            string _0x69d6a424 = _0xe98833f6();
            if (!string.IsNullOrEmpty(_0x69d6a424))
            {
                var _0x03c54c1b = InternalEditorUtility.LoadSerializedFileAndForget(_0x69d6a424);
                if (_0x03c54c1b.Length > 0)
                {
                    s_Instance = _0x03c54c1b[0] as T;
                }
                else
                {
                    s_Instance = CreateInstance<T>();
                }
            }
            else
            {
                Debug.LogError($"{nameof(ScriptableSingleton<T>)}: 请指定单例存档路径！ ");
            }

            if (s_Instance == null)
            {
                Debug.LogError($"{nameof(ScriptableSingleton<T>)}: 加载失败。" + _0x69d6a424);
            }

            return s_Instance;
        }

        public static void _0x003c1ce2(bool _0xbea6e3b2 = true)
        {
            if (!s_Instance)
            {
                Debug.LogError("Cannot save ScriptableSingleton: no instance!");
                return;
            }

            string _0x88d2241c = _0xe98833f6();
            if (!string.IsNullOrEmpty(_0x88d2241c))
            {
                string _0x44778f0d = Path.GetDirectoryName(_0x88d2241c);
                if (!Directory.Exists(_0x44778f0d))
                {
                    Directory.CreateDirectory(_0x44778f0d);
                }

                UnityEngine.Object[] _0xcdc76054 = new T[1]
                {
                    s_Instance
                };
                InternalEditorUtility.SaveToSerializedFileAndForget(_0xcdc76054, _0x88d2241c, _0xbea6e3b2);
            }
        }

        
        public override void SaveData(ScriptableObject _0x1e9e001a, bool _0xadaafa7a = true)
        {
            string _0xc9f96516 = _0xe98833f6();
            string _0xf2686b0d = Path.GetDirectoryName(_0xc9f96516);
            if (!Directory.Exists(_0xf2686b0d))
            {
                Directory.CreateDirectory(_0xf2686b0d);
            }

            UnityEngine.Object[] _0xa0da7803 = new ScriptableObject[1]
            {
                _0x1e9e001a
            };
            InternalEditorUtility.SaveToSerializedFileAndForget(_0xa0da7803, _0xc9f96516, _0xadaafa7a);
        }

        protected static string _0xe98833f6()
        {
            return typeof(T).GetCustomAttributes(inherit: true).Cast<FilePathAttribute>().FirstOrDefault(_0x2db04d08 => _0x2db04d08 != null)?._0xb9d948cc;
        }
    }

    [AttributeUsage(AttributeTargets.Class)]
    public class FilePathAttribute : Attribute
    {
        internal string _0xb9d948cc;
        
        
        
        
        public FilePathAttribute(string _0x30c0b8a8)
        {
            if (string.IsNullOrEmpty(_0x30c0b8a8))
            {
                throw new ArgumentException("Invalid relative path (it is empty)");
            }

            if (_0x30c0b8a8[0] == '/')
            {
                _0x30c0b8a8 = _0x30c0b8a8.Substring(1);
            }

            _0xb9d948cc = _0x30c0b8a8;
        }
    }
}