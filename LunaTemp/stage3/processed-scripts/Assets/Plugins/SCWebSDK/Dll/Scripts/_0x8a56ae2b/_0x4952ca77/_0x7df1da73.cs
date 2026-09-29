using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

namespace SC
{
    
    public interface IReference
    {
        
        
        
         
        void Clear();
    }

    
    
    
    
     
    public abstract class Singleton<T> : IReference where T : class, IReference, new()
    {
#region 单列
        protected static T _0x5ab83225;
        private static readonly object _0x83bbe84b = new object ();
        
        public static T instance
        {
            get
            {
                lock (_0x83bbe84b)
                {
                    if (_0x5ab83225 == null)
                    {
                        _0x5ab83225 = new T();
                    }

                    return _0x5ab83225;
                }
            }
        }

        
        public static T Instance()
        {
            return instance;
        }

#endregion
        
        
        
        protected virtual bool _0xb16ed87b => true;

        public Singleton()
        {
            _0x6e4aea2b();
        }

        internal virtual void _0x6e4aea2b()
        {
        }

        
        public virtual void Clear()
        {
            _0x5ab83225 = null;
        }
    }

    
    
    
    public static class _0xeb7b2e5c
    {
        
        
        
        public static string SBuiltFontName
        {
            get
            {
                
                string _0xf5e7afd4 = Application.unityVersion;
                int _0x6f386b10 = _0xf5e7afd4.IndexOf('.');
                string _0x44a200e3 = _0x6f386b10 >= 0 ? _0xf5e7afd4.Substring(0, _0x6f386b10) : _0xf5e7afd4;
                
                System.Text.StringBuilder _0xfbfd324f = new System.Text.StringBuilder();
                foreach (char c in _0x44a200e3)
                {
                    if (char.IsDigit(c))
                    {
                        _0xfbfd324f.Append(c);
                    }
                }

                _0x44a200e3 = _0xfbfd324f.ToString();
                
                if (int.TryParse(_0x44a200e3, out int majorVersion))
                {
                    return majorVersion >= 2022 ? "LegacyRuntime.ttf" : "Arial.ttf";
                }

                return "Arial.ttf";
            }
        }

        private static List<Transform> _0xc9f8a974 = new List<Transform>();
        
        
        
        
        public static void SetLayerRecursively(this GameObject _0x910958ab, int _0x689f4e5e)
        {
            Transform[] _0x136f39ea = _0x910958ab.GetComponentsInChildren<Transform>(true);
            _0xc9f8a974 = _0x136f39ea.ToList();
            for (int _0xccc33161 = 0; _0xccc33161 < _0xc9f8a974.Count; _0xccc33161++)
            {
                _0xc9f8a974[_0xccc33161].gameObject.layer = _0x689f4e5e;
            }

            _0xc9f8a974.Clear();
        }

        
        
        
        
        public static void DestroyAllChildren(this GameObject _0xdfa59693)
        {
            var _0xf6c4e70c = _0xdfa59693.transform;
            var _0x14766a7f = _0xf6c4e70c.childCount;
            for (int _0x43025b7d = 0; _0x43025b7d < _0x14766a7f; _0x43025b7d++)
            {
                GameObject.Destroy(_0xf6c4e70c.GetChild(_0x43025b7d).gameObject);
            }
        }

        
        
        
        public static void SetLabelValue(this Component _0x47430f7f, string _0x165e5871, params object[] _0x597b7d56)
        {
        }

        public static void setLabelValue(this Text _0x516ca394, string _0xa8b465c6, params object[] _0xdacbd683)
        {
        }

        
        
        
        
        
        
        public static T GetOrAddComponent<T>(this GameObject _0x53f56737)
            where T : Component
        {
            T _0x4d1a085a = _0x53f56737.GetComponent<T>();
            if (_0x4d1a085a == null)
            {
                _0x4d1a085a = _0x53f56737.AddComponent<T>();
            }

            return _0x4d1a085a;
        }

        
        
        
        
        
        
        public static T FindObjectOfTypeInc<T>(bool _0xe9698453)
            where T : Component
        {
            if (!_0xe9698453)
            {
                return Object.FindObjectOfType<T>();
            }

            for (int _0x191b4c0e = 0; _0x191b4c0e < SceneManager.sceneCount; _0x191b4c0e++)
            {
                Scene _0xff470828 = SceneManager.GetSceneAt(_0x191b4c0e);
                if (!_0xff470828.isLoaded)
                    continue;
                GameObject[] _0x08cd174a = _0xff470828.GetRootGameObjects();
                foreach (GameObject root in _0x08cd174a)
                {
                    T _0xc4548343 = root.GetComponentInChildren<T>(true);
                    if (_0xc4548343 != null)
                        return _0xc4548343;
                }
            }

            return null;
        }

        
        
        
        
        
        
        public static UnityEngine.Object FindObjectOfTypeInc(System.Type _0x6bb2a779, bool _0x36b2a3e7)
        {
            if (!_0x36b2a3e7)
            {
                return UnityEngine.Object.FindObjectOfType(_0x6bb2a779);
            }

            for (int _0xe536b61f = 0; _0xe536b61f < SceneManager.sceneCount; _0xe536b61f++)
            {
                Scene _0x7bbfd904 = SceneManager.GetSceneAt(_0xe536b61f);
                if (!_0x7bbfd904.isLoaded)
                    continue;
                GameObject[] _0x7066807a = _0x7bbfd904.GetRootGameObjects();
                foreach (GameObject root in _0x7066807a)
                {
                    Component _0x63d04fa6 = root.GetComponentInChildren(_0x6bb2a779, true);
                    if (_0x63d04fa6 != null)
                        return _0x63d04fa6;
                }
            }

            return null;
        }
    }
}