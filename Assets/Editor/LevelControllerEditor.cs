using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using System.Collections.Generic;

/// <summary>
/// LevelController 的自定义编辑器 - 在 Inspector 中显示按钮
/// </summary>
[CustomEditor(typeof(LevelController))]
public class LevelControllerEditor : Editor {
    public override void OnInspectorGUI() {
        // 先绘制默认的 Inspector 内容
        DrawDefaultInspector();

        // 添加分隔线
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("", GUI.skin.horizontalSlider);

        // 获取当前选中的 LevelController 对象
        LevelController controller = (LevelController)target;

        // 显示按钮区域标题
        EditorGUILayout.LabelField("快捷操作", EditorStyles.boldLabel);

        // 按钮：执行功能
        if (GUILayout.Button("执行功能", GUILayout.Height(30))) {
            ExecuteFunction(controller);
        }

        // 如果对象被修改，标记为脏数据
        if (GUI.changed) {
            EditorUtility.SetDirty(controller);
        }
    }

    /// <summary>
    /// 执行功能：获取并遍历波次数组中所有节点的子节点，检查并更新翻转后的碰撞体
    /// </summary>
    /// <param name="controller">LevelController 实例</param>
    private void ExecuteFunction(LevelController controller) {
        if (controller == null) {
            EditorUtility.DisplayDialog("错误", "LevelController 对象为空", "确定");
            return;
        }

        // 获取波次数组
        GameObject[] waveArray = controller.WaveArray;
        if (waveArray == null || waveArray.Length == 0) {
            EditorUtility.DisplayDialog("提示", "波次数组为空，请先配置 WaveArray", "确定");
            return;
        }

        // 收集所有子节点
        List<GameObject> allWaveChildren = new List<GameObject>();

        // 遍历每个波次
        for (int waveIndex = 0; waveIndex < waveArray.Length; waveIndex++) {
            GameObject wave = waveArray[waveIndex];
            if (wave == null) continue;

            // 遍历当前波次的所有子节点
            foreach (Transform child in wave.transform) {
                if (child != null && child.gameObject != null) {
                    allWaveChildren.Add(child.gameObject);
                }
            }
        }

        // 处理每个子节点：检查翻转状态并更新碰撞体
        int processedCount = 0;
        int updatedCount = 0;
        List<string> updatedNames = new List<string>();

        foreach (GameObject child in allWaveChildren) {
            if (ProcessChildCollider(child)) {
                updatedCount++;
                updatedNames.Add(child.name);
            }
            processedCount++;
        }

        // 标记场景为已修改
        if (updatedCount > 0) {
            EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
        }

        // 显示结果
        string message = $"处理完成！\n\n";
        message += $"总节点数: {processedCount}\n";
        message += $"已更新碰撞体: {updatedCount}\n\n";
        if (updatedNames.Count > 0) {
            message += "已更新的节点：\n";
            foreach (string name in updatedNames) {
                message += $"  - {name}\n";
            }
        }

        EditorUtility.DisplayDialog("处理结果", message, "确定");
    }

    /// <summary>
    /// 处理子节点的碰撞体：检查翻转状态并更新 PolygonCollider2D
    /// </summary>
    /// <param name="child">子节点 GameObject</param>
    /// <returns>如果更新了碰撞体返回 true，否则返回 false</returns>
    private bool ProcessChildCollider(GameObject child) {
        if (child == null) return false;

        // 检查是否有 SpriteRenderer 组件
        SpriteRenderer spriteRenderer = child.GetComponent<SpriteRenderer>();
        if (spriteRenderer == null || spriteRenderer.sprite == null) {
            return false;
        }

        // 检查是否有翻转
        bool hasFlipX = spriteRenderer.flipX;
        bool hasFlipY = spriteRenderer.flipY;
        if (!hasFlipX && !hasFlipY) {
            return false;
        }

        // 检查是否有 PolygonCollider2D 组件
        PolygonCollider2D collider = child.GetComponent<PolygonCollider2D>();
        if (collider == null) {
            return false;
        }

        // 重新生成碰撞点（参考 BatchPrefabCreator.cs 的方法）
        UpdateColliderPoints(collider, spriteRenderer.sprite, hasFlipX, hasFlipY);

        // 标记对象为已修改
        EditorUtility.SetDirty(child);

        return true;
    }

    /// <summary>
    /// 更新 PolygonCollider2D 的碰撞点（根据翻转状态直接翻转现有碰撞点）
    /// 方法：直接获取现有碰撞体的点，根据 flipX/flipY 翻转坐标，无需重新生成
    /// </summary>
    /// <param name="collider">要更新的碰撞体</param>
    /// <param name="sprite">精灵图片（保留参数以保持接口兼容，但不再使用）</param>
    /// <param name="flipX">是否水平翻转</param>
    /// <param name="flipY">是否垂直翻转</param>
    private void UpdateColliderPoints(PolygonCollider2D collider, Sprite sprite, bool flipX, bool flipY) {
        if (collider == null) return;

        // 直接获取现有碰撞体的所有路径
        List<List<Vector2>> flippedPaths = new List<List<Vector2>>();
        for (int i = 0; i < collider.pathCount; i++) {
            Vector2[] originalPath = collider.GetPath(i);
            List<Vector2> flippedPath = new List<Vector2>();

            foreach (Vector2 point in originalPath) {
                Vector2 flippedPoint = point;

                // 根据翻转状态调整点坐标
                // flipX: 翻转 X 坐标（相对于原点）
                // flipY: 翻转 Y 坐标（相对于原点）
                if (flipX) {
                    flippedPoint.x = -flippedPoint.x;
                }
                if (flipY) {
                    flippedPoint.y = -flippedPoint.y;
                }

                flippedPath.Add(flippedPoint);
            }
            flippedPaths.Add(flippedPath);
        }

        // 应用翻转后的碰撞点到碰撞体
        if (flippedPaths.Count > 0) {
            collider.pathCount = flippedPaths.Count;
            for (int i = 0; i < flippedPaths.Count; i++) {
                collider.SetPath(i, flippedPaths[i].ToArray());
            }
        }
    }
}

