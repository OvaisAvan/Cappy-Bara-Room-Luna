using UnityEditor;
using UnityEngine;
using System.IO;
using UnityEngine.SceneManagement;
using System.Linq;
using UnityEditor.SceneManagement;
using _0xa07739b8;

public class _0x61d8b815 : EditorWindow
{
    
    public static void _0x7a08f8c8()
    {
        string _0x29acd85d = Application.dataPath;
        _0x4481a423(_0x29acd85d);
        
        AssetDatabase.Refresh();
        Debug.Log(_0x3a19ac8a._0x512da7a0("删除项目中空文件夹完成！"));
    }

    private static void _0x4481a423(string _0x417dde45)
    {
        
        string[] _0xd6daecd9 = Directory.GetDirectories(_0x417dde45);
        
        foreach (string subFolder in _0xd6daecd9)
        {
            _0x4481a423(subFolder);
        }

        
        if (_0x3c3c9ccb(_0x417dde45))
        {
            
            Directory.Delete(_0x417dde45);
            
            string _0x4cc703f7 = _0x417dde45 + ".meta";
            if (File.Exists(_0x4cc703f7))
            {
                File.Delete(_0x4cc703f7);
            }

            Debug.Log("Deleted empty folder: " + _0x417dde45);
        }
    }

    private static bool _0x3c3c9ccb(string _0x5dac349e)
    {
        
        return Directory.GetFiles(_0x5dac349e).Length == 0 && Directory.GetDirectories(_0x5dac349e).Length == 0;
    }

    
    public static void _0x468bbc65()
    {
        _0x93cedbc7();
    }

    private static void _0x93cedbc7()
    {
        _0x7d3a670e();
        _0x18209df6();
        Debug.Log(_0x3a19ac8a._0x512da7a0("删除无效脚本完成！"));
    }

    
    
    
    private static void _0x7d3a670e()
    {
        string[] _0xac22cc8b = AssetDatabase.FindAssets("t:Prefab");
        foreach (string prefabGuid in _0xac22cc8b)
        {
            string _0x1dd8eff8 = AssetDatabase.GUIDToAssetPath(prefabGuid);
            GameObject _0x32a23af4 = AssetDatabase.LoadAssetAtPath<GameObject>(_0x1dd8eff8);
            if (_0x32a23af4 != null)
            {
                
                int _0xd1a1a7fa = _0xa23c6cc1(_0x32a23af4);
                if (_0xd1a1a7fa > 0)
                {
                    
                    PrefabUtility.SavePrefabAsset(_0x32a23af4);
                    Debug.Log(_0x3a19ac8a._0x512da7a0("删除预制体中无效脚本: {0}, delCount:{1}", _0x1dd8eff8, _0xd1a1a7fa + ""));
                }
            }
        }
    }

    
    
    
    private static void _0x18209df6()
    {
        Scene _0x37f7cfbd = SceneManager.GetActiveScene();
        string _0x71544e89 = _0x37f7cfbd.path;
        string[] _0x16298be3 = _0xc9be004e._0x82d4b299();
        foreach (string scenePath in _0x16298be3)
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
                continue;
            EditorSceneManager.OpenScene(scenePath);
            _0x37f7cfbd = SceneManager.GetActiveScene();
            
            GameObject[] _0x53bd470c = _0x37f7cfbd.GetRootGameObjects();
            int _0x8beb90cb = 0;
            foreach (GameObject rootObject in _0x53bd470c)
            {
                _0x8beb90cb = _0x8beb90cb + _0xa23c6cc1(rootObject);
            }

            if (_0x8beb90cb > 0)
            {
                
                EditorSceneManager.MarkSceneDirty(_0x37f7cfbd);
                EditorSceneManager.SaveScene(_0x37f7cfbd);
                Debug.Log(_0x3a19ac8a._0x512da7a0("删除场景中无效脚本: {0}, delCount:{1}", scenePath, _0x8beb90cb + ""));
            }
        }

        EditorSceneManager.OpenScene(_0x71544e89);
    }

    private static int _0xa23c6cc1(GameObject _0x9c1df10e)
    {
        if (_0x9c1df10e == null)
            return 0;
        
        int _0x2ba8782e = GameObjectUtility.RemoveMonoBehavioursWithMissingScript(_0x9c1df10e);
        
        foreach (Transform child in _0x9c1df10e.transform)
        {
            _0x2ba8782e = _0x2ba8782e + _0xa23c6cc1(child.gameObject);
        }

        return _0x2ba8782e;
    }
}