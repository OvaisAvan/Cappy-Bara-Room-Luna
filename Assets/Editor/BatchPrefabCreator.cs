using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections.Generic;
using UnityEngine.UI;

public class BatchPrefabCreator : EditorWindow {
    private string sourceFolder = "Assets/Resources/Scene/bar";     // 资源文件夹
    private string saveFolder = "Assets/Resources/prefab/stickers";        // 生成Prefab保存路径

    [MenuItem("Tools/Batch Prefab Creator")]
    public static void ShowWindow() {
        GetWindow<BatchPrefabCreator>("批量生成Prefab");
    }

    void OnGUI() {
        GUILayout.Label("批量生成Prefab", EditorStyles.boldLabel);
        sourceFolder = EditorGUILayout.TextField("资源文件夹", sourceFolder);
        saveFolder = EditorGUILayout.TextField("保存Prefab路径", saveFolder);

        if (GUILayout.Button("生成全部Prefab")) {
            // 路径有效性检查
            if (!Directory.Exists(sourceFolder)) {
                EditorUtility.DisplayDialog("错误", $"资源文件夹不存在:\n{sourceFolder}", "确定");
                return;
            }

            // 保存路径如果不存在，可以提示或者创建
            if (!Directory.Exists(saveFolder)) {
                bool create = EditorUtility.DisplayDialog("提示", $"保存路径不存在:\n{saveFolder}\n是否创建？", "是", "否");
                if (!create) return;
                Directory.CreateDirectory(saveFolder);
                AssetDatabase.Refresh();
            }

            // 路径通过检查后再生成Prefab
            CreatePrefabs();
        }
    }

    public void CreatePrefabs() {
        if (!Directory.Exists(saveFolder))
            Directory.CreateDirectory(saveFolder);

        // ✅ 只扫描当前目录
        string[] files = Directory.GetFiles(sourceFolder, "*.png", SearchOption.TopDirectoryOnly);

        // 按前缀分组（map01_a02、map01_a02_01、map01_a02_02 -> map01_a02）
        Dictionary<string, string> groupDict = new Dictionary<string, string>();
        foreach (var file in files) {
            if (file.EndsWith(".meta")) continue;
            string name = Path.GetFileNameWithoutExtension(file);
            string prefix = GetStickerPrefix(name);
            if (string.IsNullOrEmpty(prefix)) continue;
            if (!groupDict.ContainsKey(prefix))
                groupDict[prefix] = file;
        }

        foreach (var kv in groupDict) {
            string prefix = kv.Key;
            string filePath = kv.Value;

            string prefabName = $"Sticker_{prefix}_Prefab";
            string prefabPath = Path.Combine(saveFolder, prefabName + ".prefab").Replace("\\", "/");

            if (File.Exists(prefabPath)) {
                Debug.Log($"跳过已存在的预制体: {prefabName}");
                continue;
            }

            Sprite sprite = AssetDatabase.LoadAssetAtPath<Sprite>(filePath);
            if (sprite == null) {
                Debug.LogWarning($"无法加载贴图: {filePath}");
                continue;
            }

            // 创建根对象
            GameObject rootGO = new GameObject(prefabName);

            // 添加SpriteRenderer到根对象
            var sr = rootGO.AddComponent<SpriteRenderer>();
            sr.sprite = sprite;
            sr.sortingLayerName = "Sticker";
            sr.sortingOrder = 5;   // 默认层级顺序为 5

            // 添加 StickerItem 脚本
            StickerItem stickerItem = rootGO.AddComponent<StickerItem>();

            // 将根对象赋值给StickerItem的sprite属性
            stickerItem.sprite = rootGO;

            // 添加 PolygonCollider2D 到根对象
            var collider = rootGO.AddComponent<PolygonCollider2D>();
            collider.isTrigger = true;

            // 自动生成 collider 点
            GameObject tempGO = new GameObject("TempCollider");
            tempGO.hideFlags = HideFlags.HideAndDontSave;
            SpriteRenderer tempSR = tempGO.AddComponent<SpriteRenderer>();
            tempSR.sprite = sprite;
            PolygonCollider2D tempPoly = tempGO.AddComponent<PolygonCollider2D>();
            tempPoly.isTrigger = true;

            List<Vector2> points = new List<Vector2>();
            for (int i = 0; i < tempPoly.pathCount; i++) {
                Vector2[] path = tempPoly.GetPath(i);
                for (int j = 0; j < path.Length; j++)
                    points.Add(path[j]);
            }
            if (points.Count > 0) {
                collider.pathCount = 1;
                collider.SetPath(0, points.ToArray());
            }

            Object.DestroyImmediate(tempGO);

            // 保存为 Prefab
            PrefabUtility.SaveAsPrefabAsset(rootGO, prefabPath);
            Object.DestroyImmediate(rootGO);

            Debug.Log($"生成Prefab: {prefabName}");
        }

        AssetDatabase.Refresh();
        Debug.Log("批量生成贴纸Prefab完成！");
    }

    /// <summary>
    /// 获取贴纸前缀（移除末尾的数字序号，如 map01_a02_01 -> map01_a02）
    /// </summary>
    /// <param name="name">原始文件名</param>
    /// <returns>标准化后的贴纸名前缀</returns>
    private string GetStickerPrefix(string name) {
        if (string.IsNullOrEmpty(name)) return null;

        string prefix = name;
        int underscoreIndex = prefix.LastIndexOf('_');
        if (underscoreIndex >= 0 && underscoreIndex < prefix.Length - 1) {
            string suffix = prefix.Substring(underscoreIndex + 1);
            bool isNumericSuffix = true;
            for (int i = 0; i < suffix.Length; i++) {
                if (!char.IsDigit(suffix[i])) {
                    isNumericSuffix = false;
                    break;
                }
            }
            if (isNumericSuffix) {
                prefix = prefix.Substring(0, underscoreIndex);
            }
        }

        return prefix;
    }
}
