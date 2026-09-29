using UnityEngine;
using System.Collections.Generic;

/// <summary>
/// 游戏工具类 - 提供通用的工具方法
/// </summary>
public static class GameUtils {
    /// <summary>
    /// 清理对象名称（移除Unity自动添加的(Clone)后缀）
    /// </summary>
    /// <param name="objectName">原始对象名称</param>
    /// <returns>清理后的名称</returns>
    public static string CleanObjectName(string objectName) {
        if (string.IsNullOrEmpty(objectName)) {
            return objectName;
        }

        // 移除名称中的"(Clone)"后缀
        const string cloneSuffix = "(Clone)";
        if (objectName.Contains(cloneSuffix)) {
            return objectName.Replace(cloneSuffix, "").Trim();
        }

        return objectName;
    }

    #region 射线调试绘制

    /// <summary>
    /// 用于在编辑器中绘制射线的数据
    /// </summary>
    private struct RayDebugData {
        public Vector3 origin;
        public Vector3 direction;
        public float distance;
        public Color color;
        public float endTime;
    }

    /// <summary>
    /// 射线调试数据列表
    /// </summary>
    private static List<RayDebugData> rayDebugList = new List<RayDebugData>();

    /// <summary>
    /// 从屏幕位置发射射线并显示（无论是否命中）- 使用3D物理系统
    /// </summary>
    /// <param name="screenPos">屏幕位置</param>
    /// <param name="camera">摄像机引用</param>
    /// <param name="maxDistance">最大检测距离</param>
    /// <param name="layerMask">层级遮罩</param>
    public static void DrawRayFromScreen(Vector2 screenPos, Camera camera, float maxDistance = 1000f, int layerMask = -1) {
        if (camera == null) {
            camera = Camera.main;
            if (camera == null) {
                return;
            }
        }

        // 从屏幕位置发射射线
        Ray ray = camera.ScreenPointToRay(new Vector3(screenPos.x, screenPos.y, 0));
        RaycastHit hit;

        // 进行射线检测
        if (Physics.Raycast(ray, out hit, maxDistance, layerMask)) {
            // 命中某个对象：显示蓝色射线（表示检测到了物体）
            DrawRayDebug(ray.origin, ray.direction * hit.distance, Color.cyan);
            Debug.DrawRay(ray.origin, ray.direction * hit.distance, Color.cyan, 2f);
        } else {
            // 没有命中任何对象：显示黄色射线（到最大距离）
            DrawRayDebug(ray.origin, ray.direction * maxDistance, Color.yellow);
            Debug.DrawRay(ray.origin, ray.direction * maxDistance, Color.yellow, 2f);
        }
    }

    /// <summary>
    /// 从屏幕位置发射2D射线并显示（无论是否命中）- 使用2D物理系统
    /// </summary>
    /// <param name="screenPos">屏幕位置</param>
    /// <param name="camera">摄像机引用</param>
    /// <param name="maxDistance">最大检测距离</param>
    /// <param name="layerMask">层级遮罩</param>
    public static void DrawRayFromScreen2D(Vector2 screenPos, Camera camera, float maxDistance = 1000f, int layerMask = -1) {
        if (camera == null) {
            camera = Camera.main;
            if (camera == null) {
                return;
            }
        }

        // 从屏幕位置发射射线
        Ray ray = camera.ScreenPointToRay(new Vector3(screenPos.x, screenPos.y, 0));

        // 临时启用触发器检测（因为贴纸的 PolygonCollider2D 被设置为 isTrigger = true）
        bool originalQueriesHitTriggers = Physics2D.queriesHitTriggers;
        Physics2D.queriesHitTriggers = true;

        // 使用2D物理系统的射线检测
        RaycastHit2D[] hits = Physics2D.GetRayIntersectionAll(ray, maxDistance, layerMask);

        // 恢复原始设置
        Physics2D.queriesHitTriggers = originalQueriesHitTriggers;

        if (hits != null && hits.Length > 0) {
            // 命中某个对象：显示蓝色射线（表示检测到了物体）
            // 使用第一个命中的点作为终点
            Vector3 rayOrigin = camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, camera.nearClipPlane));
            Vector3 rayEnd = hits[0].point;
            DrawRayDebug(rayOrigin, rayEnd - rayOrigin, Color.cyan);
            Debug.DrawRay(rayOrigin, rayEnd - rayOrigin, Color.cyan, 2f);
        } else {
            // 没有命中任何对象：显示黄色射线（到最大距离）
            Vector3 rayOrigin = camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, camera.nearClipPlane));
            DrawRayDebug(rayOrigin, ray.direction * maxDistance, Color.yellow);
            Debug.DrawRay(rayOrigin, ray.direction * maxDistance, Color.yellow, 2f);
        }
    }

    /// <summary>
    /// 添加射线调试数据，用于在编辑器中绘制
    /// </summary>
    /// <param name="origin">射线起点</param>
    /// <param name="direction">射线方向（已乘以距离）</param>
    /// <param name="color">射线颜色</param>
    public static void DrawRayDebug(Vector3 origin, Vector3 direction, Color color) {
        if (rayDebugList == null) {
            rayDebugList = new List<RayDebugData>();
        }

        float currentTime = Application.isPlaying ? Time.time : Time.realtimeSinceStartup;
        float distance = direction.magnitude;
        RayDebugData rayData = new RayDebugData {
            origin = origin,
            direction = direction.normalized,
            distance = distance,
            color = color,
            endTime = currentTime + 5f // 显示5秒，更持久
        };

        rayDebugList.Add(rayData);


        // 限制列表大小，避免内存问题
        if (rayDebugList.Count > 100) {
            rayDebugList.RemoveAt(0);
        }
    }

    /// <summary>
    /// 清理过期的射线调试数据
    /// </summary>
    public static void CleanExpiredRayDebug() {
        if (rayDebugList == null) return;

        float currentTime = Application.isPlaying ? Time.time : Time.realtimeSinceStartup;
        rayDebugList.RemoveAll(rayData => currentTime > rayData.endTime);
    }

    /// <summary>
    /// 绘制射线Gizmos（在OnDrawGizmos中调用）
    /// </summary>
    public static void DrawRayGizmos() {
        if (rayDebugList == null || rayDebugList.Count == 0) return;

        // 绘制所有未过期的射线
        float currentTime = Application.isPlaying ? Time.time : Time.realtimeSinceStartup;
        foreach (var rayData in rayDebugList) {
            if (currentTime <= rayData.endTime) {
                Gizmos.color = rayData.color;
                Vector3 endPoint = rayData.origin + rayData.direction * rayData.distance;

                // 绘制射线
                Gizmos.DrawLine(rayData.origin, endPoint);

                // 在射线起点绘制一个小球
                Gizmos.DrawSphere(rayData.origin, 0.05f);

                // 在射线终点绘制一个更大的球，更明显
                Gizmos.DrawSphere(endPoint, 0.15f);

                // 绘制箭头指向终点（使用多个小球模拟箭头）
                Vector3 arrowDir = rayData.direction;
                Vector3 arrowBase = endPoint - arrowDir * 0.2f;
                Gizmos.DrawSphere(arrowBase, 0.08f);
            }
        }
    }

    #endregion

    #region 2D射线检测

    /// <summary>
    /// 使用2D射线检测是否点击到了指定目标对象
    /// 从屏幕位置发射射线进行检测，并显示可视化射线
    /// </summary>
    /// <param name="screenPos">屏幕位置</param>
    /// <param name="targetTransform">目标对象的Transform，用于判断是否命中</param>
    /// <param name="camera">摄像机引用，如果为null则使用Camera.main</param>
    /// <param name="maxDistance">最大检测距离，默认1000</param>
    /// <param name="layerMask">层级遮罩，默认检测所有层级</param>
    /// <returns>如果点击到了目标对象返回true，否则返回false</returns>
    public static bool RaycastHitTarget2D(Vector2 screenPos, Transform targetTransform, Camera camera = null, float maxDistance = 1000f, int layerMask = -1) {
        if (targetTransform == null) {
            return false;
        }

        if (camera == null) {
            camera = Camera.main;
            if (camera == null) {
                return false;
            }
        }

        // 临时启用触发器检测（因为贴纸的 PolygonCollider2D 被设置为 isTrigger = true）
        bool originalQueriesHitTriggers = Physics2D.queriesHitTriggers;
        Physics2D.queriesHitTriggers = true;

        // 使用2D物理系统的射线检测（从摄像机发射射线）
        RaycastHit2D hit = Physics2D.GetRayIntersection(camera.ScreenPointToRay(new Vector3(screenPos.x, screenPos.y, 0)), maxDistance, layerMask);

        // 恢复原始设置
        Physics2D.queriesHitTriggers = originalQueriesHitTriggers;

        // 进行2D射线检测
        if (hit.collider != null) {
            // 检查命中的对象是否是目标对象或其子对象
            Transform hitTransform = hit.collider.transform;

            // 检查多种情况：
            // 1. 直接命中目标对象
            // 2. 命中目标对象的子对象
            // 3. 命中目标对象的父对象（目标对象是击中对象的子对象）
            bool isHit = (hitTransform == targetTransform) ||
                        hitTransform.IsChildOf(targetTransform) ||
                        targetTransform.IsChildOf(hitTransform);

            if (isHit) {
                // 命中目标：显示绿色射线
                Vector3 rayOrigin = camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, camera.nearClipPlane));
                Vector3 rayEnd = hit.point;
                DrawRayDebug(rayOrigin, rayEnd - rayOrigin, Color.green);
                Debug.DrawRay(rayOrigin, rayEnd - rayOrigin, Color.green, 2f);
                return true;
            } else {
                // 命中其他对象：显示红色射线
                Vector3 rayOrigin = camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, camera.nearClipPlane));
                Vector3 rayEnd = hit.point;
                DrawRayDebug(rayOrigin, rayEnd - rayOrigin, Color.red);
                Debug.DrawRay(rayOrigin, rayEnd - rayOrigin, Color.red, 2f);
            }
        } else {
            // 没有命中任何对象：显示黄色射线（到最大距离）
            Vector3 rayOrigin = camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, camera.nearClipPlane));
            Vector3 rayDirection = camera.ScreenPointToRay(new Vector3(screenPos.x, screenPos.y, 0)).direction;
            DrawRayDebug(rayOrigin, rayDirection * maxDistance, Color.yellow);
            Debug.DrawRay(rayOrigin, rayDirection * maxDistance, Color.yellow, 2f);
        }

        return false;
    }

    #endregion
}

