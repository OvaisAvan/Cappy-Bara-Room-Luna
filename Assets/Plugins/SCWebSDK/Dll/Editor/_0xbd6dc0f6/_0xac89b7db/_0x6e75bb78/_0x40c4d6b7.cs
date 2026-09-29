using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Reflection;
using System;
using System.Text.RegularExpressions;
using _0xa07739b8;

namespace _0xa07739b8
{
    public class _0xda644433 : EditorWindow
    {
        [System.Serializable]
        public class _0xb4d8605a
        {
            
            public string _0xd1ebd095;
            
            public string _0x19961ec1;
            
            public string _0x1b3c6366;
            
            public string _0x46d0c64b;
            
            public string _0x7d1c9b9f;
            
            public string _0x4d37a528;
        }

        [System.Serializable]
        
        private class Wrapper<T>
        {
            
            public List<T> Items;
        }

        static string _0xe9d3e1bc = Application.dataPath + "/../Library/SCRefDataTemp/RefData.json";
        public static void _0xabd2f3f7(Type _0x5fdaf444)
        {
            List<_0xb4d8605a> _0x27e6009a = new List<_0xb4d8605a>();
            var _0x063b9918 = _0x8bfba6cc(_0x5fdaf444);
            
            for (int _0xedbdf68c = 0; _0xedbdf68c < _0x063b9918.Count; _0xedbdf68c++)
            {
                _0xb4d8605a _0x2c3472dd = _0x063b9918[_0xedbdf68c];
                string _0x3f31d977 = $"{_0x2c3472dd._0xd1ebd095}: {_0x2c3472dd._0x19961ec1},Node: {_0x2c3472dd._0x1b3c6366},Script: {_0x2c3472dd._0x46d0c64b}, Field: {_0x2c3472dd._0x7d1c9b9f}\n";
                _0x3f31d977 = _0x3f31d977 + $"  Referenced Node: {_0x2c3472dd._0x4d37a528}";
                Debug.Log(_0x3f31d977);
                _0x27e6009a.Add(_0x2c3472dd);
            }

            var _0xe1cb6614 = _0xca21a8be(_0x5fdaf444);
            
            for (int _0x8b636ce8 = 0; _0x8b636ce8 < _0xe1cb6614.Count; _0x8b636ce8++)
            {
                _0xb4d8605a _0xed6b8020 = _0xe1cb6614[_0x8b636ce8];
                string _0xc08ba387 = $"{_0xed6b8020._0xd1ebd095}: {_0xed6b8020._0x19961ec1},Node: {_0xed6b8020._0x1b3c6366},Script: {_0xed6b8020._0x46d0c64b}, Field: {_0xed6b8020._0x7d1c9b9f}\n";
                _0xc08ba387 = _0xc08ba387 + $"  Referenced Node: {_0xed6b8020._0x4d37a528}";
                Debug.Log(_0xc08ba387);
                _0x27e6009a.Add(_0xed6b8020);
            }

            
            string _0x7248505e = JsonUtility.ToJson(new Wrapper<_0xb4d8605a> { Items = _0x27e6009a }, true);
            if (!Directory.Exists(Path.GetDirectoryName(_0xe9d3e1bc)))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(_0xe9d3e1bc));
            }

            System.IO.File.WriteAllText(_0xe9d3e1bc, _0x7248505e);
            Debug.Log("save success:" + _0xe9d3e1bc);
            Application.OpenURL($"file:///{_0xe9d3e1bc}");
        }

        public static void _0xe1e1b54e()
        {
            var _0x4d55bc3e = System.IO.File.ReadAllText(_0xe9d3e1bc);
            
            Wrapper<_0xb4d8605a> _0x0161c4f5 = JsonUtility.FromJson<Wrapper<_0xb4d8605a>>(_0x4d55bc3e);
            List<_0xb4d8605a> _0xd347100f = _0x0161c4f5 == null ? null : _0x0161c4f5.Items;
            if (_0xd347100f == null || _0xd347100f.Count <= 0)
            {
                Debug.LogWarning("not find replace config");
                return;
            }

            try
            {
                
                
                int _0x449f08c5 = _0xd347100f.Count;
                int _0x3c580985 = 0;
                Dictionary<string, Type> _0xf8aba238 = new Dictionary<string, Type>();
                var _0xc1c92b52 = _0xd347100f.Where(_0xcc192cd5 => _0xcc192cd5 != null).GroupBy(_0xa71fdf93 => _0xa71fdf93._0xd1ebd095 + "|" + _0xa71fdf93._0x19961ec1);
                foreach (var group in _0xc1c92b52)
                {
                    _0xb4d8605a _0x71e5c837 = group.FirstOrDefault();
                    if (_0x71e5c837 == null)
                        continue;
                    
                    if (_0x71e5c837._0xd1ebd095 == "Scene")
                    {
                        if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
                        {
                            return;
                        }

                        EditorSceneManager.OpenScene(_0x71e5c837._0x19961ec1);
                        Scene _0x0b0051cb = SceneManager.GetActiveScene();
                        List<GameObject> _0xaff06613 = _0x0b0051cb.GetRootGameObjects().ToList();
                        bool _0x50ff16f6 = false;
                        foreach (_0xb4d8605a oData in group)
                        {
                            float _0xc2710b2b = _0x449f08c5 <= 0 ? 1f : (float)_0x3c580985 / _0x449f08c5;
                            EditorUtility.DisplayProgressBar("Change References", $"{_0x3c580985 + 1}/{_0x449f08c5}  {oData._0x19961ec1}", _0xc2710b2b);
                            _0x50ff16f6 = _0xc08c88b0(oData, _0xaff06613, _0xf8aba238) || _0x50ff16f6;
                            _0x3c580985++;
                        }

                        if (_0x50ff16f6)
                        {
                            EditorSceneManager.MarkSceneDirty(_0x0b0051cb);
                            EditorSceneManager.SaveScene(_0x0b0051cb);
                        }

                        continue;
                    }

                    
                    if (_0x71e5c837._0xd1ebd095 == "Prefab")
                    {
                        GameObject _0x4bb218c4 = AssetDatabase.LoadAssetAtPath<GameObject>(_0x71e5c837._0x19961ec1);
                        if (_0x4bb218c4 == null)
                        {
                            Debug.LogError("Resource not found at specified path: " + _0x71e5c837._0x19961ec1);
                            
                            foreach (_0xb4d8605a oData in group)
                            {
                                float _0x3d4d6b05 = _0x449f08c5 <= 0 ? 1f : (float)_0x3c580985 / _0x449f08c5;
                                EditorUtility.DisplayProgressBar("Change References", $"{_0x3c580985 + 1}/{_0x449f08c5}  {oData._0x19961ec1}", _0x3d4d6b05);
                                _0x3c580985++;
                            }

                            continue;
                        }

                        List<GameObject> _0x157be3de = new List<GameObject>
                        {
                            _0x4bb218c4
                        };
                        bool _0xd02d20b7 = false;
                        foreach (_0xb4d8605a oData in group)
                        {
                            float _0x7df360c0 = _0x449f08c5 <= 0 ? 1f : (float)_0x3c580985 / _0x449f08c5;
                            EditorUtility.DisplayProgressBar("Change References", $"{_0x3c580985 + 1}/{_0x449f08c5}  {oData._0x19961ec1}", _0x7df360c0);
                            _0xd02d20b7 = _0xc08c88b0(oData, _0x157be3de, _0xf8aba238) || _0xd02d20b7;
                            _0x3c580985++;
                        }

                        if (_0xd02d20b7)
                        {
                            PrefabUtility.SavePrefabAsset(_0x4bb218c4);
                        }

                        continue;
                    }

                    
                    foreach (_0xb4d8605a oData in group)
                    {
                        float _0xa176ad09 = _0x449f08c5 <= 0 ? 1f : (float)_0x3c580985 / _0x449f08c5;
                        EditorUtility.DisplayProgressBar("Change References", $"{_0x3c580985 + 1}/{_0x449f08c5}  {oData._0x19961ec1}", _0xa176ad09);
                        _0xcafedcfd(oData);
                        _0x3c580985++;
                    }
                }
            }
            finally
            {
                EditorUtility.ClearProgressBar();
            }
        }

        
        public static void _0xbdb38b22(Type _0xfbdb9fd6, Component[] _0xc5f4133e, string _0x4bb635ad, List<_0xb4d8605a> _0x3e09dd0a)
        {
            foreach (Component component in _0xc5f4133e)
            {
                if (component == null)
                    continue;
                System.Type _0xe1b35c3a = component.GetType();
                var _0xc2137a34 = _0xe1b35c3a.GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
                foreach (var field in _0xc2137a34)
                {
                    if (_0xfbdb9fd6.IsAssignableFrom(field.FieldType))
                    {
                        var _0x635c28fd = field.GetValue(component) as Component;
                        if (_0x635c28fd != null)
                        {
                            string _0xf80e5901 = _0x8cda71ee(component.gameObject);
                            string _0xf95fa461 = _0x8cda71ee(_0x635c28fd.gameObject);
                            _0xb4d8605a _0x72d4e334 = new _0xb4d8605a();
                            _0x72d4e334._0xd1ebd095 = _0x4bb635ad.IndexOf(".unity") != -1 ? "Scene" : "Prefab";
                            _0x72d4e334._0x19961ec1 = _0x4bb635ad;
                            _0x72d4e334._0x1b3c6366 = _0xf80e5901;
                            _0x72d4e334._0x46d0c64b = _0xe1b35c3a.FullName;
                            _0x72d4e334._0x7d1c9b9f = field.Name;
                            _0x72d4e334._0x4d37a528 = _0xf95fa461;
                            _0x3e09dd0a.Add(_0x72d4e334);
                        }
                    }
                }
            }
        }

        
        
        
        
        private static List<_0xb4d8605a> _0x8bfba6cc(Type _0x959c03ff)
        {
            string[] _0x9af8a3fa = AssetDatabase.FindAssets("t:Prefab");
            Debug.Log("=== Checking Prefabs ===");
            List<_0xb4d8605a> _0x78f30b49 = new List<_0xb4d8605a>();
            foreach (string prefabGuid in _0x9af8a3fa)
            {
                string _0x7970efec = AssetDatabase.GUIDToAssetPath(prefabGuid);
                GameObject _0x662ff909 = AssetDatabase.LoadAssetAtPath<GameObject>(_0x7970efec);
                if (_0x662ff909 != null)
                {
                    
                    Component[] _0xf126dcdd = _0x662ff909.GetComponentsInChildren<Component>(true);
                    _0xbdb38b22(_0x959c03ff, _0xf126dcdd, _0x7970efec, _0x78f30b49);
                }
            }

            return _0x78f30b49;
        }

        
        
        
        
        private static List<_0xb4d8605a> _0xca21a8be(Type _0x39d83cef)
        {
            Debug.Log("=== Checking Scene ===");
            List<_0xb4d8605a> _0x08c2ed22 = new List<_0xb4d8605a>();
            
            
            string[] _0xcc8896e1 = null;
            try
            {
                _0xcc8896e1 = _0xc9be004e._0xc9ae6b43();
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return _0x08c2ed22;
            }

            foreach (string scenePath in _0xcc8896e1)
            {
                if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
                    return null;
                EditorSceneManager.OpenScene(scenePath);
                Scene _0xbb2c17e6 = SceneManager.GetActiveScene();
                
                Component[] _0x201c33ef = FindObjectsOfType<Component>(true);
                _0xbdb38b22(_0x39d83cef, _0x201c33ef, scenePath, _0x08c2ed22);
            }

            return _0x08c2ed22;
        }

        private static string _0x8cda71ee(GameObject _0xa515c0be)
        {
            string _0xd5a71fba = _0xa515c0be.name;
            Transform _0x0cc66be0 = _0xa515c0be.transform.parent;
            while (_0x0cc66be0 != null)
            {
                _0xd5a71fba = _0x0cc66be0.name + "/" + _0xd5a71fba;
                _0x0cc66be0 = _0x0cc66be0.parent;
            }

            return _0xd5a71fba;
        }

        private static List<GameObject> _0x0c4112ee(_0xb4d8605a _0xb47dfcd7)
        {
            if (_0xb47dfcd7._0xd1ebd095 == "Prefab")
            {
                GameObject _0x8ab83695 = AssetDatabase.LoadAssetAtPath<GameObject>(_0xb47dfcd7._0x19961ec1);
                if (_0x8ab83695 == null)
                {
                    Debug.LogError("Resource not found at specified path: " + _0xb47dfcd7._0x19961ec1);
                    return null;
                }

                return new List<GameObject>
                {
                    _0x8ab83695
                };
            }

            EditorSceneManager.OpenScene(_0xb47dfcd7._0x19961ec1);
            Scene _0x02f5d99a = SceneManager.GetActiveScene();
            var _0x6c0f643c = _0x02f5d99a.GetRootGameObjects();
            return _0x6c0f643c.ToList();
        }

        private static Transform _0x0635acca(List<GameObject> _0xc6edd334, string _0xb4be301a)
        {
            for (int _0x9b880da8 = 0; _0x9b880da8 < _0xc6edd334.Count; _0x9b880da8++)
            {
                Transform _0x736a299e = _0x50453c11(_0xc6edd334[_0x9b880da8].transform, _0xb4be301a);
                if (_0x736a299e != null)
                {
                    return _0x736a299e;
                }
            }

            return null;
        }

        
        
        
        
        private static void _0xcafedcfd(_0xb4d8605a _0xe1ecb740)
        {
            var _0xb680651c = _0x0c4112ee(_0xe1ecb740);
            if (_0xb680651c == null)
            {
                return;
            }

            
            Dictionary<string, Type> _0x8173772e = new Dictionary<string, Type>();
            bool _0x07c56331 = _0xc08c88b0(_0xe1ecb740, _0xb680651c, _0x8173772e);
            if (!_0x07c56331)
            {
                return;
            }

            if (_0xe1ecb740._0xd1ebd095 == "Prefab")
            {
                PrefabUtility.SavePrefabAsset(_0xb680651c[0]);
            }
            else
            {
                Scene _0x8b17d7f3 = SceneManager.GetActiveScene();
                EditorSceneManager.MarkSceneDirty(_0x8b17d7f3);
                EditorSceneManager.SaveScene(_0x8b17d7f3);
            }
        }

        
        
        private static bool _0xc08c88b0(_0xb4d8605a _0xbd133b49, List<GameObject> _0x69a146f1, Dictionary<string, Type> _0x264e4648)
        {
            if (_0xbd133b49 == null || _0x69a146f1 == null || _0x69a146f1.Count <= 0)
            {
                return false;
            }

            Transform _0x2d0615ec = _0x0635acca(_0x69a146f1, _0xbd133b49._0x4d37a528);
            if (_0x2d0615ec == null)
            {
                Debug.LogError("Referenced node not found:" + _0xbd133b49._0x4d37a528);
                return false;
            }

            Transform _0x7954c5f2 = _0x0635acca(_0x69a146f1, _0xbd133b49._0x1b3c6366);
            if (_0x7954c5f2 == null)
            {
                Debug.LogError("sNodePath node not found:" + _0xbd133b49._0x1b3c6366);
                return false;
            }

            
            Type _0x8beb2552 = null;
            if (_0x264e4648 != null && !string.IsNullOrEmpty(_0xbd133b49._0x46d0c64b))
            {
                _0x264e4648.TryGetValue(_0xbd133b49._0x46d0c64b, out _0x8beb2552);
            }

            if (_0x8beb2552 == null)
            {
                _0x8beb2552 = _0xa7eeebe7(_0xbd133b49._0x46d0c64b);
                if (_0x264e4648 != null && _0x8beb2552 != null && !string.IsNullOrEmpty(_0xbd133b49._0x46d0c64b))
                {
                    _0x264e4648[_0xbd133b49._0x46d0c64b] = _0x8beb2552;
                }
            }

            Component _0x95b9dc77 = _0x7954c5f2.GetComponent(_0x8beb2552);
            if (_0x95b9dc77 == null)
            {
                Debug.LogError("Script component not found on the object.");
                return false;
            }

            
            var _0x4357f151 = _0x95b9dc77.GetType().GetField(_0xbd133b49._0x7d1c9b9f, BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
            if (_0x4357f151 == null)
            {
                Debug.LogError("Field not found or type mismatch.");
                return false;
            }

            Type _0x84f31666 = _0x4357f151.FieldType;
            var _0x7e201899 = _0x2d0615ec.GetComponent(_0x84f31666);
            object _0xbc3df9f9 = _0x4357f151.GetValue(_0x95b9dc77);
            if (object.ReferenceEquals(_0xbc3df9f9, _0x7e201899))
            {
                return false;
            }

            _0x4357f151.SetValue(_0x95b9dc77, _0x7e201899);
            Debug.Log("modify success:" + _0xbd133b49._0x19961ec1 + " " + _0xbd133b49._0x1b3c6366 + " " + _0xbd133b49._0x4d37a528 + " " + _0xbd133b49._0x46d0c64b + " " + _0xbd133b49._0x7d1c9b9f);
            return true;
        }

        private static Transform _0x50453c11(Transform _0x14d89c93, string _0xe01fd836)
        {
            string[] _0xfece33d2 = _0xe01fd836.Split(new char[] { '/' });
            Transform _0xb44f5d58 = _0x14d89c93;
            if (_0xfece33d2.Length == 1)
            {
                if (_0xb44f5d58.name == _0xe01fd836)
                {
                    return _0xb44f5d58;
                }
                else
                {
                    return null;
                }
            }

            for (int _0x78a2513d = 1; _0x78a2513d < _0xfece33d2.Length; _0x78a2513d++)
            {
                string _0xa8069e32 = _0xfece33d2[_0x78a2513d];
                if (_0xb44f5d58.Find(_0xa8069e32) == null)
                {
                    return null;
                }

                _0xb44f5d58 = _0xb44f5d58.Find(_0xa8069e32);
            }

            return _0xb44f5d58;
        }

        private static Type _0xa7eeebe7(string _0x2714cfc8)
        {
            foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                Type _0x38ed6c25 = assembly.GetTypes().FirstOrDefault(_0x8dfccc03 => _0x8dfccc03.FullName == _0x2714cfc8);
                if (_0x38ed6c25 != null)
                {
                    return _0x38ed6c25;
                }
            }

            return null;
        }

        
        
        
        
        
        
        
        
        
        private static int _0x6192e35a(Type _0x3675608d, Type _0xa036fb9f, GameObject _0x38cc1477, List<string> _0x5c77cf0d)
        {
            int _0x462dfb4e = 0;
            
            Component[] _0x17194930 = _0x38cc1477.GetComponentsInChildren(_0x3675608d, true);
            foreach (var oComp in _0x17194930)
            {
                GameObject _0xa19b7dcf = oComp.gameObject;
                
                if (_0x3675608d.IsAssignableFrom(oComp.GetType()))
                {
                    _0x462dfb4e++;
                    
                    Dictionary<string, object> _0x62e05c8a = new Dictionary<string, object>();
                    foreach (var propertyName in _0x5c77cf0d)
                    {
                        var _0xd31dec66 = _0x3675608d.GetProperty(propertyName);
                        if (_0xd31dec66 != null && _0xd31dec66.CanRead)
                        {
                            _0x62e05c8a[propertyName] = _0xd31dec66.GetValue(oComp);
                        }
                    }

                    
                    DestroyImmediate(oComp, true);
                    
                    Component _0x47d1c954 = _0xa19b7dcf.AddComponent(_0xa036fb9f);
                    
                    foreach (var propertyName in _0x5c77cf0d)
                    {
                        var _0x64401e2c = _0xa036fb9f.GetProperty(propertyName);
                        if (_0x64401e2c != null && _0x64401e2c.CanWrite && _0x62e05c8a.ContainsKey(propertyName))
                        {
                            
                            object _0x1cc9455e = _0x62e05c8a[propertyName];
                            
                            Type _0xd18261b1 = _0x64401e2c.PropertyType;
                            
                            if (_0x1cc9455e is int && _0xd18261b1 == typeof(float))
                            {
                                _0x64401e2c.SetValue(_0x47d1c954, Convert.ToSingle(_0x1cc9455e));
                            }
                            
                            else if (_0x1cc9455e is float && _0xd18261b1 == typeof(int))
                            {
                                _0x64401e2c.SetValue(_0x47d1c954, Convert.ToInt32(_0x1cc9455e));
                            }
                            
                            else
                            {
                                _0x64401e2c.SetValue(_0x47d1c954, _0x1cc9455e);
                            }
                        }
                    }
                }
            }

            return _0x462dfb4e;
        }

        
        
        
        
        
        
        public static void _0x7f4c6ba8(Type _0x2964e52c, Type _0x0c4a8bba, List<string> _0xa059c63e)
        {
            string[] _0x57962b15 = AssetDatabase.FindAssets("t:Prefab");
            foreach (string prefabGuid in _0x57962b15)
            {
                string _0x8f268d19 = AssetDatabase.GUIDToAssetPath(prefabGuid);
                GameObject _0xc28ce685 = AssetDatabase.LoadAssetAtPath<GameObject>(_0x8f268d19);
                if (_0xc28ce685 != null)
                {
                    int _0xfadfc20a = _0x6192e35a(_0x2964e52c, _0x0c4a8bba, _0xc28ce685, _0xa059c63e);
                    if (_0xfadfc20a > 0)
                    {
                        PrefabUtility.SavePrefabAsset(_0xc28ce685);
                        Debug.Log($"Replace in prefab {_0x8f268d19} count:{_0xfadfc20a}");
                    }
                }
            }
        }

        
        
        
        
        
        
        public static void _0x8e0e4102(Type _0x9f350989, Type _0x00e4fbef, List<string> _0x3d4cd908)
        {
            Scene _0x4a81aca8 = SceneManager.GetActiveScene();
            string _0x73801775 = _0x4a81aca8.path;
            
            string[] _0x40178f14 = null;
            try
            {
                _0x40178f14 = _0xc9be004e._0xc9ae6b43();
            }
            catch (Exception e)
            {
                Debug.LogError(e);
                return;
            }

            foreach (string scenePath in _0x40178f14)
            {
                if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
                    continue;
                EditorSceneManager.OpenScene(scenePath);
                _0x4a81aca8 = SceneManager.GetActiveScene();
                
                GameObject[] _0x11bd3379 = _0x4a81aca8.GetRootGameObjects();
                int _0xeca26895 = 0;
                foreach (GameObject rootObject in _0x11bd3379)
                {
                    _0xeca26895 = _0xeca26895 + _0x6192e35a(_0x9f350989, _0x00e4fbef, rootObject, _0x3d4cd908);
                }

                if (_0xeca26895 > 0)
                {
                    
                    EditorSceneManager.MarkSceneDirty(_0x4a81aca8);
                    EditorSceneManager.SaveScene(_0x4a81aca8);
                    Debug.Log($"Replace in scene {scenePath} count:{_0xeca26895}");
                }
            }
        }

        
        
        
        
        
        
        public static void _0xf7218621(List<Type> _0x56d011ba, Type _0x7623adae)
        {
            
            string _0xa039481b = _0x7623adae.FullName;
            
            string _0xc43ae0d6 = Application.dataPath;
            
            string[] _0x7240fa0a =
            {
            };
            
            string[] _0x65c501e2 =
            {
                "Editor",
                "Plugins"
            };
            Dictionary<string, string> _0x88ca0672 = new Dictionary<string, string>();
            for (int _0x7c6c289d = 0; _0x7c6c289d < _0x56d011ba.Count; _0x7c6c289d++)
            {
                string _0xcd2c9d20 = _0x56d011ba[_0x7c6c289d].Namespace;
                _0x88ca0672.Add(_0xcd2c9d20 + "." + _0x56d011ba[_0x7c6c289d].Name, _0xa039481b);
                _0x88ca0672.Add(_0x56d011ba[_0x7c6c289d].Name, _0xa039481b);
                
                string _0x0629d2df = $"using {_0xcd2c9d20};";
                if (!_0x88ca0672.TryGetValue(_0x0629d2df, out string newName))
                {
                    _0x88ca0672.Add(_0x0629d2df, "");
                }
            }

            _0x9b8ad80f(_0xc43ae0d6, _0x88ca0672, _0x7240fa0a, _0x65c501e2);
        }

        static void _0x9b8ad80f(string _0xc44807fa, Dictionary<string, string> _0x77a5ea06, string[] _0xd49d1e47, string[] _0x97800d11)
        {
            
            var _0x25aa1204 = Directory.EnumerateFiles(_0xc44807fa, "*.cs", SearchOption.AllDirectories);
            foreach (var file in _0x25aa1204)
            {
                
                string _0xcc0abf00 = Path.GetDirectoryName(file);
                
                if (_0x50309466(_0xcc0abf00, _0x97800d11))
                    continue;
                
                if (_0xd49d1e47.Contains(Path.GetFileName(file)))
                    continue;
                
                string _0xd4959a65 = File.ReadAllText(file);
                
                string _0xa5266f1c = _0xd4959a65;
                foreach (var item in _0x77a5ea06)
                {
                    _0xa5266f1c = _0xd737431a(_0xa5266f1c, item.Key, item.Value);
                }

                
                if (_0xd4959a65 != _0xa5266f1c)
                {
                    File.WriteAllText(file, _0xa5266f1c);
                    Debug.Log("update success:" + file);
                }
            }
        }

        static bool _0x50309466(string _0xdb4424a4, string[] _0x991f6dfb)
        {
            if (string.IsNullOrEmpty(_0xdb4424a4) || _0x991f6dfb == null || _0x991f6dfb.Length <= 0)
            {
                return false;
            }

            
            string _0x37abafdb = _0xdb4424a4.Replace('\\', '/');
            for (int _0xdc34d59e = 0; _0xdc34d59e < _0x991f6dfb.Length; _0xdc34d59e++)
            {
                string _0xd6f2ddb9 = _0x991f6dfb[_0xdc34d59e];
                if (string.IsNullOrEmpty(_0xd6f2ddb9))
                    continue;
                string _0x7915126a = "/" + _0xd6f2ddb9 + "/";
                if (_0x37abafdb.Contains(_0x7915126a))
                {
                    return true;
                }

                
                if (_0x37abafdb.EndsWith("/" + _0xd6f2ddb9))
                {
                    return true;
                }
            }

            return false;
        }

        
        
        static string _0xd737431a(string _0xd18d0e70, string _0x50b49c2d, string _0x15a89431)
        {
            if (string.IsNullOrEmpty(_0xd18d0e70) || string.IsNullOrEmpty(_0x50b49c2d))
            {
                return _0xd18d0e70;
            }

            if (!_0xd3844a3b(_0x50b49c2d))
            {
                return _0xd18d0e70.Replace(_0x50b49c2d, _0x15a89431);
            }

            string _0x354dfac8 = $@"(?<![A-Za-z0-9_]){Regex.Escape(_0x50b49c2d)}(?![A-Za-z0-9_])";
            return Regex.Replace(_0xd18d0e70, _0x354dfac8, (Match _0xbc6e7918) =>
            {
                if (_0xf03bbf3a(_0xd18d0e70, _0xbc6e7918.Index, _0xbc6e7918.Length))
                {
                    return _0xbc6e7918.Value;
                }

                return _0x15a89431;
            });
        }

        static bool _0xd3844a3b(string _0x760aca38)
        {
            
            for (int _0x7d6168ce = 0; _0x7d6168ce < _0x760aca38.Length; _0x7d6168ce++)
            {
                char _0xb6ca47a2 = _0x760aca38[_0x7d6168ce];
                if (!(char.IsLetterOrDigit(_0xb6ca47a2) || _0xb6ca47a2 == '_'))
                {
                    return false;
                }
            }

            return true;
        }

        static bool _0xf03bbf3a(string _0x2c63e9b5, int _0xeeb0f989, int _0x98377d59)
        {
            
            int _0x970433c3 = _0xeeb0f989 - 1;
            if (_0x970433c3 >= 0 && _0x2c63e9b5[_0x970433c3] == '.')
            {
                return true;
            }

            if (_0x970433c3 >= 0 && _0x2c63e9b5[_0x970433c3] == '@')
            {
                int _0x9cd1028d = _0xeeb0f989 - 2;
                if (_0x9cd1028d >= 0 && _0x2c63e9b5[_0x9cd1028d] == '.')
                {
                    return true;
                }
            }

            
            
            int _0x0e30283b = _0xeeb0f989 + _0x98377d59;
            int _0x4fc538b9 = _0x0e30283b;
            while (_0x4fc538b9 < _0x2c63e9b5.Length && char.IsWhiteSpace(_0x2c63e9b5[_0x4fc538b9]))
                _0x4fc538b9++;
            bool _0x61234601 = false;
            if (_0x4fc538b9 < _0x2c63e9b5.Length && _0x2c63e9b5[_0x4fc538b9] == '(')
            {
                _0x61234601 = true;
            }
            else if (_0x4fc538b9 < _0x2c63e9b5.Length && _0x2c63e9b5[_0x4fc538b9] == '<')
            {
                
                int _0xf1b790ba = _0x4fc538b9;
                int _0xcd2d2b57 = 0;
                while (_0xf1b790ba < _0x2c63e9b5.Length)
                {
                    char _0xba22586c = _0x2c63e9b5[_0xf1b790ba];
                    if (_0xba22586c == '<')
                        _0xcd2d2b57++;
                    else if (_0xba22586c == '>')
                    {
                        _0xcd2d2b57--;
                        if (_0xcd2d2b57 == 0)
                        {
                            _0xf1b790ba++;
                            break;
                        }
                    }

                    _0xf1b790ba++;
                }

                while (_0xf1b790ba < _0x2c63e9b5.Length && char.IsWhiteSpace(_0x2c63e9b5[_0xf1b790ba]))
                    _0xf1b790ba++;
                if (_0xf1b790ba < _0x2c63e9b5.Length && _0x2c63e9b5[_0xf1b790ba] == '(')
                {
                    _0x61234601 = true;
                }
            }

            if (_0x61234601)
            {
                
                int _0x55213597 = _0xeeb0f989 - 1;
                while (_0x55213597 >= 0 && char.IsWhiteSpace(_0x2c63e9b5[_0x55213597]))
                    _0x55213597--;
                
                if (_0x55213597 >= 0 && _0x2c63e9b5[_0x55213597] == '[')
                {
                    return false;
                }

                
                if (_0x06bb49ed(_0x2c63e9b5, _0xeeb0f989, "new"))
                {
                    return false;
                }

                return true;
            }

            
            
            int _0x58121036 = _0x0e30283b;
            while (_0x58121036 < _0x2c63e9b5.Length && char.IsWhiteSpace(_0x2c63e9b5[_0x58121036]))
                _0x58121036++;
            if (_0x58121036 < _0x2c63e9b5.Length && _0x2c63e9b5[_0x58121036] == '{')
            {
                int _0x680cd127 = _0x58121036 + 1;
                while (_0x680cd127 < _0x2c63e9b5.Length && char.IsWhiteSpace(_0x2c63e9b5[_0x680cd127]))
                    _0x680cd127++;
                if (_0x96b3ff3e(_0x2c63e9b5, _0x680cd127, "get") || _0x96b3ff3e(_0x2c63e9b5, _0x680cd127, "set") || _0x96b3ff3e(_0x2c63e9b5, _0x680cd127, "init"))
                {
                    return true;
                }
            }

            return false;
        }

        static bool _0x06bb49ed(string _0x26224c4f, int _0xd9ac7b75, string _0x58150e32)
        {
            int _0xb44282bd = _0xd9ac7b75 - 1;
            while (_0xb44282bd >= 0 && char.IsWhiteSpace(_0x26224c4f[_0xb44282bd]))
                _0xb44282bd--;
            int _0xf1f0df14 = _0xb44282bd;
            while (_0xb44282bd >= 0 && (char.IsLetterOrDigit(_0x26224c4f[_0xb44282bd]) || _0x26224c4f[_0xb44282bd] == '_'))
                _0xb44282bd--;
            int _0x5c3cf773 = _0xb44282bd + 1;
            if (_0x5c3cf773 <= _0xf1f0df14)
            {
                string _0x650d5296 = _0x26224c4f.Substring(_0x5c3cf773, _0xf1f0df14 - _0x5c3cf773 + 1);
                return _0x650d5296 == _0x58150e32;
            }

            return false;
        }

        static bool _0x96b3ff3e(string _0xd0bb4a5b, int _0xfae8388e, string _0x89865eeb)
        {
            int _0x35e215ad = _0xfae8388e;
            int _0x930c19e0 = _0x35e215ad;
            while (_0x930c19e0 < _0xd0bb4a5b.Length && (char.IsLetterOrDigit(_0xd0bb4a5b[_0x930c19e0]) || _0xd0bb4a5b[_0x930c19e0] == '_'))
                _0x930c19e0++;
            if (_0x930c19e0 > _0x35e215ad)
            {
                string _0x08afe368 = _0xd0bb4a5b.Substring(_0x35e215ad, _0x930c19e0 - _0x35e215ad);
                return _0x08afe368 == _0x89865eeb;
            }

            return false;
        }
    }
}