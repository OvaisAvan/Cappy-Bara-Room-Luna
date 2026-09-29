using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using DG.Tweening;
using SC;

/// <summary>
/// 贴纸管理器，负责处理贴纸的创建、拖拽、碰撞检测等功能
/// </summary>
public class StickerManager : MonoBehaviour {
    #region 常量定义
    /// <summary>
    /// 拖动贴纸的排序层级
    /// </summary>
    private const int DRAG_STICKER_SORTING_ORDER = 10000;

    /// <summary>
    /// 手指的排序层级（高于拖动贴纸）
    /// </summary>
    private const int FINGER_SORTING_ORDER = 10001;

    /// <summary>
    /// 默认重叠阈值（70%）
    /// </summary>
    private const float DEFAULT_OVERLAP_THRESHOLD = 0.7f;

    /// <summary>
    /// 屏幕到世界坐标转换的Z轴深度
    /// </summary>
    private const float SCREEN_TO_WORLD_Z = 10f;

    /// <summary>
    /// 贴纸预制体路径前缀
    /// </summary>
    private const string PREFAB_PATH_PREFIX = "prefab/Scene/";

    /// <summary>
    /// 贴纸图片路径前缀
    /// </summary>
    private const string SPRITE_PATH_PREFIX = "Scene/";

    /// <summary>
    /// 贴纸名称分隔符
    /// </summary>
    private const char STICKER_NAME_SEPARATOR = '_';
    #endregion

    #region 单例模式
    public static StickerManager Instance;
    #endregion

    #region 私有字段
    private Camera mainCamera;
    private StickerLayer cachedStickerLayer;
    #endregion

    #region 公共字段
    [Header("UI画布")]
    [CustomLabel("UI画布")]
    public Canvas uiCanvas;

    [Header("预制体引用")]
    [CustomLabel("贴纸层预制体")]
    public GameObject StickerLayerPrefab;

    [CustomLabel("手指预制")]
    public GameObject fingerPrefab;

    [Header("预制体父节点")]
    [CustomLabel("预制体父节点")]
    public Transform StickerLayerParent;
    #endregion

    #region 配置获取方法

    #endregion

    #region Unity生命周期
    /// <summary>
    /// 初始化单例和缓存引用
    /// </summary>
    void Awake() {
        if (Instance == null) {
            Instance = this;
            mainCamera = Camera.main;
        }
    }


    /// <summary>
    /// 在Scene视图中绘制Gizmos（用于显示射线）
    /// </summary>
    void OnDrawGizmos() {
        GameUtils.DrawRayGizmos();
    }

    /// <summary>
    /// 当对象被选中时绘制Gizmos（用于显示射线）
    /// </summary>
    void OnDrawGizmosSelected() {
        GameUtils.DrawRayGizmos();
    }
    #endregion

    #region 贴纸创建与管理
    /// <summary>
    /// 创建拖动贴纸副本
    /// </summary>
    /// <param name="sticker">原始贴纸对象</param>
    /// <param name="screenPos">屏幕位置</param>
    /// <param name="originalStickerItem">原始贴纸的StickerItem组件</param>
    /// <param name="sizeDifference">大小差异（可选，用于设置初始缩放和动画）</param>
    /// <returns>创建的拖动副本</returns>
    public GameObject CreateDragSticker(GameObject sticker, [Bridge.Ref] Vector2 screenPos, StickerItem originalStickerItem = null, Vector2? sizeDifference = null) {
        GameObject prefab = LoadStickerPrefab(sticker.name);
        if (prefab == null) return null;
        // 副本归属本轮关卡，暂停重开和自动重玩均可一起清理。
        Transform parent = LevelManager.Instance.GetCurrentLevel().transform;
        GameObject currentDrag = InstantiateAndCleanName(prefab, parent);
        SpriteRenderer spriteRenderer = currentDrag.GetComponent<SpriteRenderer>();
        if (spriteRenderer != null) spriteRenderer.sortingOrder = DRAG_STICKER_SORTING_ORDER;
        if (mainCamera != null) {
            currentDrag.transform.position = mainCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, SCREEN_TO_WORLD_Z));
        }
        StickerItem dragStickerItem = currentDrag.GetComponent<StickerItem>();
        if (dragStickerItem != null) {
            dragStickerItem.InitializeSticker(StickerItem.StickerType.DragOnly);
            dragStickerItem.SetOriginalSticker(originalStickerItem);
        }
        ApplyFlipToSticker(currentDrag);
        if (sizeDifference.HasValue) ApplySizeDifferenceWithAnimation(currentDrag, sizeDifference.Value);
        return currentDrag;
    }

    /// <summary>
    /// 根据贴纸预制数组创建贴纸
    /// </summary>
    /// <param name="stickerArray">贴纸预制数组</param>
    /// <param name="parent">贴纸父节点</param>
    /// <param name="stickerType">贴纸类型，默认为Paster</param>
    /// <param name="layerType">贴纸层类型，默认为Game</param>
    public void CreateStickers(GameObject[] stickerArray, Transform parent, StickerItem.StickerType stickerType = StickerItem.StickerType.Paster, StickerLayer.LayerType layerType = StickerLayer.LayerType.Game) {
        if (stickerArray == null || stickerArray.Length == 0) return;
        if (parent == null) return;

        foreach (GameObject stickerPrefab in stickerArray) {
            if (stickerPrefab == null) continue;

            GameObject stickerInstance = InstantiateAndCleanName(stickerPrefab, parent);
            if (stickerInstance == null) continue;

            StickerItem stickerItem = stickerInstance.GetComponent<StickerItem>();
            if (stickerItem != null) {
                stickerItem.InitializeSticker(stickerType, layerType);
            }

            // 如果是游戏模式，检查并应用关卡预制中的翻转状态
            if (layerType == StickerLayer.LayerType.Game) {
                ApplyFlipToSticker(stickerInstance);
            }
        }
    }

    /// <summary>
    /// 创建StickerLayer实例
    /// </summary>
    /// <param name="layerType">贴纸层类型，默认为Game类型</param>
    /// <returns>创建的StickerLayer GameObject</returns>
    public GameObject CreateStickerLayer(StickerLayer.LayerType layerType = StickerLayer.LayerType.Game) {
        if (StickerLayerPrefab == null) return null;

        GameObject stickerLayerInstance = InstantiateAndCleanName(StickerLayerPrefab, StickerLayerParent);
        if (stickerLayerInstance == null) return null;

        StickerLayer stickerLayer = stickerLayerInstance.GetComponent<StickerLayer>();
        if (stickerLayer != null) {
            stickerLayer.InitializeScrollRect();
            stickerLayer.SetLayerTypeAndInitialize(layerType);
            stickerLayer.EnableScrollRect();
            cachedStickerLayer = stickerLayer;
        }

        return stickerLayerInstance;
    }

    /// <summary>
    /// 切换贴纸图片，根据预制体名称在Resources/Scene/bar目录查找对应的图片
    /// </summary>
    /// <param name="stickerObject">贴纸游戏对象</param>
    /// <param name="imageFormat">图片格式后缀（传null/空表示不添加，传"01"等表示添加下划线后缀）</param>
    public void SwitchStickerImage(GameObject stickerObject, string imageFormat = null) {
        if (stickerObject == null) return;
        string stickerId = ExtractStickerName(stickerObject.name);
        if (string.IsNullOrEmpty(stickerId)) return;
        string newSpriteName = string.IsNullOrEmpty(imageFormat) ? stickerId : stickerId + "_" + imageFormat;
        Sprite newSprite = Resources.Load<Sprite>(SPRITE_PATH_PREFIX + "Room/" + newSpriteName);
        if (newSprite != null) UpdateStickerSprite(stickerObject, newSprite);
    }
    #endregion

    #region 碰撞检测
    /// <summary>
    /// 检查DragOnly类型贴纸的碰撞
    /// </summary>
    /// <param name="dragOnlyObject">拖动类型的贴纸对象</param>
    /// <returns>碰撞是否成功</returns>
    public bool CheckDragOnlyCollision(GameObject dragOnlyObject) {
        if (dragOnlyObject == null) return false;

        PolygonCollider2D myCollider = dragOnlyObject.GetComponent<PolygonCollider2D>();
        if (myCollider == null) return false;

        if (LevelManager.Instance == null) return false;
        GameObject currentLevel = LevelManager.Instance.GetCurrentLevel();
        if (currentLevel == null) return false;
        LevelController levelController = currentLevel.GetComponent<LevelController>();
        if (levelController == null) return false;

        List<GameObject> waveChildren = levelController.waveChildren;
        if (waveChildren == null || waveChildren.Count == 0) {
            return false;
        }

        foreach (GameObject child in waveChildren) {
            if (child == null) continue;

            PolygonCollider2D childCollider = child.GetComponent<PolygonCollider2D>();
            if (childCollider == null) continue;

            if (AreCollidersOverlapping(myCollider, childCollider)) {
                if (OnDragOnlyCollision(dragOnlyObject, child)) {
                    return true;
                }
            }
        }

        return false;
    }



    /// <summary>
    /// 当DragOnly类型贴纸发生碰撞时的处理
    /// </summary>
    /// <param name="dragOnlyObject">拖动类型的贴纸对象</param>
    /// <param name="collidedObject">被碰撞的对象</param>
    /// <returns>碰撞是否成功</returns>
    public bool OnDragOnlyCollision(GameObject dragOnlyObject, GameObject collidedObject) {
        if (dragOnlyObject == null || collidedObject == null) {
            return false;
        }

        // 使用标准化贴纸ID来比较，支持 Sticker_xxx_Prefab / Sticker_xxx_Prefab2 等同款命名
        string dragStickerId = ExtractStickerName(dragOnlyObject.name);
        string collidedStickerId = ExtractStickerName(collidedObject.name);
        if (string.IsNullOrEmpty(dragStickerId) || string.IsNullOrEmpty(collidedStickerId) || dragStickerId != collidedStickerId) {
            return false;
        }

        PolygonCollider2D myCollider = dragOnlyObject.GetComponent<PolygonCollider2D>();
        PolygonCollider2D otherCollider = collidedObject.GetComponent<PolygonCollider2D>();

        float overlapPercentage = CalculateOverlapPercentage(myCollider, otherCollider);
        StickerItem collidedSticker = collidedObject.GetComponent<StickerItem>();
        float overlapThreshold = collidedSticker != null ? collidedSticker.requiredOverlapPercentage : DEFAULT_OVERLAP_THRESHOLD;

        if (overlapPercentage >= overlapThreshold) {
            if (collidedSticker != null) {
                SwitchStickerImage(collidedObject);
                collidedSticker.SetCompleted();

                ShowAnimationNodeAndHideSprite(collidedSticker, collidedObject);

                LevelManager.Instance.GetCurrentLevel().GetComponent<LevelController>().CheckWaveCompletion();
            }
            Destroy(dragOnlyObject);
            return true;
        }

        return false;
    }

    /// <summary>
    /// 检查两个多边形碰撞器是否重叠
    /// </summary>
    /// <param name="collider1">第一个碰撞器</param>
    /// <param name="collider2">第二个碰撞器</param>
    /// <returns>是否重叠</returns>
    public bool AreCollidersOverlapping(PolygonCollider2D collider1, PolygonCollider2D collider2) {
        if (collider1 == null || collider2 == null) {
            return false;
        }

        Vector2[] points1 = TransformPointsToWorld(collider1);
        Vector2[] points2 = TransformPointsToWorld(collider2);

        foreach (Vector2 point in points1) {
            if (IsPointInPolygon(point, points2)) {
                return true;
            }
        }

        foreach (Vector2 point in points2) {
            if (IsPointInPolygon(point, points1)) {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// 计算两个多边形碰撞器的重叠百分比
    /// </summary>
    /// <param name="collider1">第一个碰撞器</param>
    /// <param name="collider2">第二个碰撞器</param>
    /// <returns>重叠百分比</returns>
    public float CalculateOverlapPercentage(PolygonCollider2D collider1, PolygonCollider2D collider2) {
        if (collider1 == null || collider2 == null) {
            return 0f;
        }

        Vector2[] points1 = TransformPointsToWorld(collider1);
        Vector2[] points2 = TransformPointsToWorld(collider2);

        float area1 = CalculatePolygonArea(points1);
        float area2 = CalculatePolygonArea(points2);

        if (area1 <= 0 || area2 <= 0) {
            return 0f;
        }

        float overlapArea = CalculateOverlapArea(points1, points2);
        return overlapArea / Mathf.Min(area1, area2);
    }







    #endregion

    #region 几何计算工具方法
    /// <summary>
    /// 计算多边形面积
    /// </summary>
    /// <param name="points">多边形顶点数组</param>
    /// <returns>多边形面积</returns>
    private float CalculatePolygonArea(Vector2[] points) {
        if (points == null || points.Length < 3) {
            return 0;
        }

        float area = 0;
        for (int i = 0; i < points.Length; i++) {
            int j = (i + 1) % points.Length;
            area += points[i].x * points[j].y;
            area -= points[j].x * points[i].y;
        }

        return Mathf.Abs(area / 2);
    }

    /// <summary>
    /// 计算两个多边形的重叠面积
    /// </summary>
    /// <param name="polygon1">第一个多边形顶点数组</param>
    /// <param name="polygon2">第二个多边形顶点数组</param>
    /// <returns>重叠面积</returns>
    private float CalculateOverlapArea(Vector2[] polygon1, Vector2[] polygon2) {
        if (polygon1 == null || polygon2 == null || polygon1.Length < 3 || polygon2.Length < 3) {
            return 0f;
        }

        List<Vector2> intersectionPoints = GetIntersectionPoints(polygon1, polygon2);
        List<Vector2> insidePoints1 = GetPointsInsidePolygon(polygon1, polygon2);
        List<Vector2> insidePoints2 = GetPointsInsidePolygon(polygon2, polygon1);

        List<Vector2> allPoints = new List<Vector2>();
        allPoints.AddRange(intersectionPoints);
        allPoints.AddRange(insidePoints1);
        allPoints.AddRange(insidePoints2);

        if (allPoints.Count < 3) {
            return 0;
        }

        List<Vector2> convexHull = CalculateConvexHull(allPoints);
        return CalculatePolygonArea(convexHull.ToArray());
    }

    /// <summary>
    /// 获取两个多边形的交点
    /// </summary>
    /// <param name="polygon1">第一个多边形顶点数组</param>
    /// <param name="polygon2">第二个多边形顶点数组</param>
    /// <returns>交点列表</returns>
    private List<Vector2> GetIntersectionPoints(Vector2[] polygon1, Vector2[] polygon2) {
        if (polygon1 == null || polygon2 == null) {
            return new List<Vector2>();
        }

        List<Vector2> intersections = new List<Vector2>();

        for (int i = 0; i < polygon1.Length; i++) {
            Vector2 p1 = polygon1[i];
            Vector2 p2 = polygon1[(i + 1) % polygon1.Length];

            for (int j = 0; j < polygon2.Length; j++) {
                Vector2 p3 = polygon2[j];
                Vector2 p4 = polygon2[(j + 1) % polygon2.Length];

                if (LineIntersection(p1, p2, p3, p4, out Vector2 intersection)) {
                    intersections.Add(intersection);
                }
            }
        }

        return intersections;
    }

    /// <summary>
    /// 获取在一个多边形内部的另一个多边形的顶点
    /// </summary>
    /// <param name="testPoints">测试点数组</param>
    /// <param name="polygon">多边形顶点数组</param>
    /// <returns>在多边形内部的点列表</returns>
    private List<Vector2> GetPointsInsidePolygon(Vector2[] testPoints, Vector2[] polygon) {
        if (testPoints == null || polygon == null) {
            return new List<Vector2>();
        }

        List<Vector2> insidePoints = new List<Vector2>();

        foreach (Vector2 point in testPoints) {
            if (IsPointInPolygon(point, polygon)) {
                insidePoints.Add(point);
            }
        }

        return insidePoints;
    }

    /// <summary>
    /// 检查点是否在多边形内（射线法）
    /// </summary>
    /// <param name="point">测试点</param>
    /// <param name="polygon">多边形顶点数组</param>
    /// <returns>是否在多边形内</returns>
    public bool IsPointInPolygon([Bridge.Ref] Vector2 point, Vector2[] polygon) {
        if (polygon == null || polygon.Length < 3) {
            return false;
        }

        int intersectCount = 0;
        int vertexCount = polygon.Length;

        for (int i = 0; i < vertexCount; i++) {
            Vector2 vertex1 = polygon[i];
            Vector2 vertex2 = polygon[(i + 1) % vertexCount];

            if (point == vertex1 || point == vertex2) {
                return true;
            }

            if (((vertex1.y > point.y) != (vertex2.y > point.y)) &&
                (point.x < (vertex2.x - vertex1.x) * (point.y - vertex1.y) / (vertex2.y - vertex1.y) + vertex1.x)) {
                intersectCount++;
            }
        }

        return intersectCount % 2 == 1;
    }

    /// <summary>
    /// 计算两条线段的交点
    /// </summary>
    /// <param name="p1">第一条线段的起点</param>
    /// <param name="p2">第一条线段的终点</param>
    /// <param name="p3">第二条线段的起点</param>
    /// <param name="p4">第二条线段的终点</param>
    /// <param name="intersection">交点输出</param>
    /// <returns>是否相交</returns>
    private bool LineIntersection([Bridge.Ref] Vector2 p1, [Bridge.Ref] Vector2 p2, [Bridge.Ref] Vector2 p3, [Bridge.Ref] Vector2 p4, out Vector2 intersection) {
        intersection = Vector2.zero;

        Vector2 d1 = p2 - p1;
        Vector2 d2 = p4 - p3;
        float cross = d1.x * d2.y - d1.y * d2.x;

        if (Mathf.Abs(cross) < 1e-8) {
            return false;
        }

        float t1 = ((p3.x - p1.x) * d2.y - (p3.y - p1.y) * d2.x) / cross;
        float t2 = ((p3.x - p1.x) * d1.y - (p3.y - p1.y) * d1.x) / cross;

        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
            intersection = p1 + t1 * d1;
            return true;
        }

        return false;
    }

    /// <summary>
    /// 计算点集的凸包（Graham扫描算法）
    /// </summary>
    /// <param name="points">点集</param>
    /// <returns>凸包顶点列表</returns>
    private List<Vector2> CalculateConvexHull(List<Vector2> points) {
        if (points == null || points.Count < 3) {
            return points ?? new List<Vector2>();
        }

        List<Vector2> sortedPoints = new List<Vector2>(points);
        sortedPoints.Sort((a, b) => {
            if (Mathf.Abs(a.x - b.x) > 0.001f) {
                return a.x.CompareTo(b.x);
            }
            return a.y.CompareTo(b.y);
        });

        List<Vector2> lower = new List<Vector2>();
        foreach (Vector2 p in sortedPoints) {
            while (lower.Count >= 2 && CrossProduct(lower[lower.Count - 2], lower[lower.Count - 1], p) <= 0) {
                lower.RemoveAt(lower.Count - 1);
            }
            lower.Add(p);
        }

        List<Vector2> upper = new List<Vector2>();
        for (int i = sortedPoints.Count - 1; i >= 0; i--) {
            Vector2 p = sortedPoints[i];
            while (upper.Count >= 2 && CrossProduct(upper[upper.Count - 2], upper[upper.Count - 1], p) <= 0) {
                upper.RemoveAt(upper.Count - 1);
            }
            upper.Add(p);
        }

        lower.RemoveAt(lower.Count - 1);
        upper.RemoveAt(upper.Count - 1);
        lower.AddRange(upper);

        return lower;
    }

    /// <summary>
    /// 计算三点叉积
    /// </summary>
    /// <param name="a">第一个点</param>
    /// <param name="b">第二个点</param>
    /// <param name="c">第三个点</param>
    /// <returns>叉积值</returns>
    private float CrossProduct([Bridge.Ref] Vector2 a, [Bridge.Ref] Vector2 b, [Bridge.Ref] Vector2 c) {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    }

    /// <summary>
    /// 显示贴纸的动画节点并隐藏SpriteRenderer（仅当存在动画节点时）
    /// </summary>
    /// <param name="stickerItem">贴纸组件</param>
    /// <param name="stickerObject">贴纸对象（可选，默认为stickerItem所在对象）</param>
    public void ShowAnimationNodeAndHideSprite(StickerItem stickerItem, GameObject stickerObject = null) {
        if (!Application.isPlaying || stickerItem == null) return;

        // 获取外部SpriteRenderer的sortingOrder
        GameObject targetObject = stickerObject != null ? stickerObject : stickerItem.gameObject;
        SpriteRenderer externalSpriteRenderer = targetObject.GetComponent<SpriteRenderer>();
        if (externalSpriteRenderer == null) {
            externalSpriteRenderer = targetObject.GetComponentInChildren<SpriteRenderer>();
        }

        int sortingOrder = 0;
        if (externalSpriteRenderer != null) {
            sortingOrder = externalSpriteRenderer.sortingOrder;
        }

        bool hasArmatureNode = stickerItem.armatureNode != null;
        bool hasEffectNode = stickerItem.effectNode != null;

        // 显示骨骼节点，并根据需要更新其sortingOrder
        if (hasArmatureNode) {
            stickerItem.armatureNode.gameObject.SetActive(true);

            // 确保龙骨组件已经完成初始化，解决执行顺序导致的显示问题
            DragonBones.UnityArmatureComponent armatureComponent = stickerItem.armatureNode.GetComponent<DragonBones.UnityArmatureComponent>();
            if (armatureComponent != null) {
                armatureComponent.enabled = true; // 确保组件是开启状态
                armatureComponent.Initialize();

                var factory = DragonBones.UnityFactory.factory;
                if (factory != null && factory.clock != null && armatureComponent.armature != null) {
                    factory.clock.Remove(armatureComponent.armature);
                    factory.clock.Add(armatureComponent.armature);
                }
                
                // 重新进入游戏时，确保动画播放
                if (armatureComponent.armature != null && armatureComponent.armature.animation != null) {
                    armatureComponent.armature.animation.timeScale = 1f; // 确保动画自身速度不为0
                    
                    string animToPlay = !string.IsNullOrEmpty(armatureComponent.animationName) 
                    ? armatureComponent.animationName : armatureComponent.armature.animation.lastAnimationName;

                    if (!string.IsNullOrEmpty(animToPlay)) {
                        armatureComponent.armature.animation.Play(animToPlay);
                    } else {
                        armatureComponent.armature.animation.Play();
                    }

                    // 强制手动更新一次，确保在当前帧就能看到动画效果（解决静止问题）
                    armatureComponent.armature.AdvanceTime(0); 
                }
            } 

            if (sortingOrder != 0) {
                UpdateAnimationNodeSortingOrder(stickerItem.armatureNode, sortingOrder);
            }
        }

        // 显示特效节点，并根据需要更新其sortingOrder
        if (hasEffectNode) {
            stickerItem.effectNode.gameObject.SetActive(true);
            if (sortingOrder != 0) {
                UpdateEffectNodeSortingOrder(stickerItem.effectNode, sortingOrder);
            }
        }

        // 如果存在骨骼节点，或特效节点要求隐藏主贴纸，则隐藏原始SpriteRenderer
        if (hasArmatureNode || (hasEffectNode && stickerItem.hideSpriteWhenEffectActive)) {
            HideStickerSpriteRenderer(targetObject);
        }
    }

    /// <summary>
    /// 更新动画节点及其子节点中所有SpriteRenderer的sortingOrder
    /// </summary>
    /// <param name="animationNode">动画节点Transform</param>
    /// <param name="sortingOrder">目标sortingOrder值</param>
    public void UpdateAnimationNodeSortingOrder(Transform animationNode, int sortingOrder) {
        if (animationNode == null) return;

        DragonBones.UnityArmatureComponent armatureComponent = animationNode.GetComponent<DragonBones.UnityArmatureComponent>();
        if (armatureComponent != null) {
            armatureComponent.sortingOrder = sortingOrder;
        }
    }

    /// <summary>
    /// 更新特效节点及其子节点中所有SpriteRenderer的sortingOrder
    /// </summary>
    /// <param name="effectNode">特效节点Transform</param>
    /// <param name="sortingOrder">目标sortingOrder值</param>
    public void UpdateEffectNodeSortingOrder(Transform effectNode, int sortingOrder) {
        if (effectNode == null) return;

        SpriteRenderer[] spriteRenderers = effectNode.GetComponentsInChildren<SpriteRenderer>(true);
        if (spriteRenderers == null || spriteRenderers.Length == 0) return;

        foreach (SpriteRenderer sr in spriteRenderers) {
            if (sr != null) {
                sr.sortingOrder = sortingOrder;
            }
        }
    }

    /// <summary>
    /// 隐藏贴纸对象上的SpriteRenderer（包含子节点）
    /// </summary>
    /// <param name="target">目标贴纸对象</param>
    private void HideStickerSpriteRenderer(GameObject target) {
        if (target == null) return;

        SpriteRenderer spriteRenderer = target.GetComponent<SpriteRenderer>();
        if (spriteRenderer != null) {
            spriteRenderer.enabled = false;
            return;
        }
    }
    #endregion

    #region 手指预制相关

    /// <summary>
    /// 根据RectTransform和锚点计算目标位置
    /// </summary>
    /// <param name="parentRect">父对象的RectTransform</param>
    /// <param name="anchor">锚点值（0-1范围）</param>
    /// <returns>计算出的目标位置（Vector2）</returns>
    private Vector2 CalculatePositionFromRectTransform(RectTransform parentRect, [Bridge.Ref] Vector2 anchor) {
        Vector2 min = parentRect.rect.min;  // 左下角（相对于pivot）
        Vector2 max = parentRect.rect.max;  // 右上角（相对于pivot）
        return new Vector2(
            Mathf.Lerp(min.x, max.x, anchor.x),
            Mathf.Lerp(min.y, max.y, anchor.y)
        );
    }

    /// <summary>
    /// 根据SpriteRenderer和锚点计算目标位置
    /// </summary>
    /// <param name="spriteRenderer">SpriteRenderer组件</param>
    /// <param name="anchor">锚点值（0-1范围）</param>
    /// <returns>计算出的目标位置（Vector3）</returns>
    private Vector3 CalculatePositionFromSpriteRenderer(SpriteRenderer spriteRenderer, [Bridge.Ref] Vector2 anchor) {
        Bounds localBounds = GameUtils.GetLocalBounds(spriteRenderer);
        Vector3 localMin = localBounds.min;  // 左下角（本地坐标）
        Vector3 localMax = localBounds.max;  // 右上角（本地坐标）
        return new Vector3(
            Mathf.Lerp(localMin.x, localMax.x, anchor.x),
            Mathf.Lerp(localMin.y, localMax.y, anchor.y),
            Mathf.Lerp(localMin.z, localMax.z, 0.5f)  // Z轴使用中间值
        );
    }

    /// <summary>
    /// 查找手指对象中的"Hand"子节点
    /// </summary>
    /// <param name="finger">手指对象</param>
    /// <returns>Hand节点的Transform，如果找不到返回null</returns>
    private Transform FindHandTransform(GameObject finger) {
        if (finger == null) return null;

        // 首先尝试直接查找名为"Hand"的子节点
        Transform handTransform = finger.transform.Find("Hand");
        if (handTransform != null) return handTransform;

        // 如果找不到，尝试查找所有子节点中名字包含"Hand"的
        foreach (Transform child in finger.transform) {
            if (child.name.Contains("Hand") || child.name.Contains("hand")) {
                return child;
            }
        }

        return null;
    }

    /// <summary>
    /// 根据"Hand"节点的大小修正手指位置，使手指图片的左上角（锚点0,1）对齐到目标位置
    /// </summary>
    /// <param name="finger">手指对象</param>
    /// <param name="targetLocalPos">目标本地坐标位置（手指图片左上角应该对齐的位置）</param>
    /// <returns>修正后的手指根节点位置</returns>
    private Vector3 AdjustFingerPositionForHand(GameObject finger, [Bridge.Ref] Vector3 targetLocalPos) {
        if (finger == null) return targetLocalPos;

        Transform handTransform = FindHandTransform(finger);
        if (handTransform == null) {
            // 没有找到Hand节点，直接返回目标位置
            return targetLocalPos;
        }

        // 获取Hand节点的左上角（锚点0,1）相对于手指根节点的偏移
        Vector3 topLeftOffset = Vector3.zero;

        RectTransform handRect = handTransform.GetComponent<RectTransform>();
        if (handRect != null) {
            // UI模式：使用RectTransform
            // 左上角（锚点0,1）：X轴最小（左），Y轴最大（上）
            // rect.min = 左下角，rect.max = 右上角
            // 左上角相对于pivot = (rect.min.x, rect.max.y)
            Vector2 rectMin = handRect.rect.min;  // 左下角（相对于pivot）
            Vector2 rectMax = handRect.rect.max;  // 右上角（相对于pivot）
            // 左上角相对于手指根节点的偏移 = Hand的localPosition + (rect.min.x, rect.max.y)
            topLeftOffset = new Vector3(
                handRect.localPosition.x + rectMin.x,  // X轴：Hand的localPosition + rect的左边界
                handRect.localPosition.y + rectMax.y,  // Y轴：Hand的localPosition + rect的上边界
                0
            );
        } else {
            // 3D模式：使用Renderer
            Renderer handRenderer = handTransform.GetComponent<Renderer>()
                ?? handTransform.GetComponentInChildren<Renderer>();

            if (handRenderer != null) {
                Bounds handBounds = GameUtils.GetLocalBounds(handRenderer);
                // 左上角（锚点0,1）：X轴最小（左），Y轴最大（上）
                // bounds.min = 左下角，bounds.max = 右上角
                // 左上角 = (bounds.min.x, bounds.max.y, bounds.center.z)
                topLeftOffset = handTransform.localPosition + new Vector3(
                    handBounds.min.x,  // X轴：左边界
                    handBounds.max.y,  // Y轴：上边界
                    handBounds.center.z  // Z轴：中心
                );
            } else {
                // 如果没有Renderer，使用Transform的localPosition作为参考
                // 假设左上角就在Hand节点的位置（需要根据实际情况调整）
                topLeftOffset = handTransform.localPosition;
            }
        }

        // 修正位置：目标位置 - Hand左上角的偏移 = 手指根节点应该放置的位置
        // 这样手指图片的左上角就会对齐到目标位置
        return targetLocalPos - topLeftOffset;
    }

    /// <summary>
    /// 创建手指预制，创建在指定的父对象上
    /// </summary>
    /// <param name="parent">父对象（通常是拖动贴纸对象），如果为null则创建在UI画布上</param>
    /// <param name="screenPos">屏幕坐标位置（可选，如果提供则会将手指设置到该位置）</param>
    /// <param name="anchorPosition">锚点位置（0-1范围），相对于父对象的RectTransform或SpriteRenderer边界，如果提供则使用锚点计算位置</param>
    /// <returns>创建的手指对象实例</returns>
    public GameObject CreateFinger(GameObject parent = null, Vector2? screenPos = null, Vector2? anchorPosition = null) {
        if (fingerPrefab == null) return null;

        Transform parentTransform;
        bool isUI = false;

        if (parent != null) {
            parentTransform = parent.transform;
        } else {
            if (uiCanvas == null) return null;
            parentTransform = uiCanvas.transform;
            isUI = true;
        }

        GameObject finger = InstantiateAndCleanName(fingerPrefab, parentTransform);
        if (finger == null) return null;

        // 设置手指位置
        if (anchorPosition.HasValue && parent != null) {
            // 优先使用锚点位置
            Vector2 anchor = anchorPosition.Value;
            Vector3 targetPos = Vector3.zero;
            bool positionCalculated = false;

            // 尝试使用RectTransform计算位置
            RectTransform parentRect = parent.GetComponent<RectTransform>();
            if (parentRect != null) {
                Vector2 position2D = CalculatePositionFromRectTransform(parentRect, anchor);
                targetPos = position2D;
                positionCalculated = true;
            } else {
                // 尝试使用SpriteRenderer计算位置（3D模式）
                SpriteRenderer spriteRenderer = parent.GetComponent<SpriteRenderer>()
                    ?? parent.GetComponentInChildren<SpriteRenderer>();

                if (spriteRenderer != null && spriteRenderer.bounds.size != Vector3.zero) {
                    targetPos = CalculatePositionFromSpriteRenderer(spriteRenderer, anchor);
                    positionCalculated = true;
                }
            }

            if (positionCalculated) {
                // 根据Hand节点大小修正位置
                Vector3 adjustedPos = AdjustFingerPositionForHand(finger, targetPos);
                finger.transform.localPosition = adjustedPos;
            } else {
                finger.transform.localPosition = Vector3.zero;
            }
        } else if (screenPos.HasValue && isUI) {
            // 使用屏幕坐标（仅UI模式）
            RectTransform canvasRect = uiCanvas.transform as RectTransform;
            if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
                canvasRect, screenPos.Value, uiCanvas.worldCamera, out Vector2 localPoint)) {
                finger.transform.localPosition = localPoint;
            }
        } else {
            finger.transform.localPosition = Vector3.zero;
        }

        // UI模式：设置FingerController
        if (isUI) {
            FingerController fingerController = finger.GetComponent<FingerController>();
            if (fingerController == null) {
                fingerController = finger.AddComponent<FingerController>();
            }
            fingerController.targetCanvas = uiCanvas;
        } else {
            // 非UI模式：设置SortingOrder
            SpriteRenderer fingerSpriteRenderer = finger.GetComponentInChildren<SpriteRenderer>();
            if (fingerSpriteRenderer != null) {
                fingerSpriteRenderer.sortingOrder = FINGER_SORTING_ORDER;
            }
            finger.transform.SetAsLastSibling();
        }

        return finger;
    }

    /// <summary>
    /// 移除手指对象
    /// </summary>
    /// <param name="finger">要移除的手指对象</param>
    public void RemoveFinger(GameObject finger) {
        if (finger != null) {
            Destroy(finger);
        }
    }
    #endregion

    #region StickerLayer控制方法
    /// <summary>
    /// 获取StickerLayer组件（游戏模式和装扮模式通用）
    /// </summary>
    /// <returns>StickerLayer组件，如果获取失败返回null</returns>
    public StickerLayer GetStickerLayer() {
        return cachedStickerLayer;
    }

    /// <summary>
    /// 禁用StickerLayer的ScrollRect滚动
    /// </summary>
    public void DisableStickerLayerScrollRect() {
        if (cachedStickerLayer != null) {
            cachedStickerLayer.DisableScrollRect();
        }
    }

    /// <summary>
    /// 启用StickerLayer的ScrollRect滚动（引导模式下不会启用）
    /// </summary>
    public void EnableStickerLayerScrollRect() {
        if (cachedStickerLayer == null) return;
        cachedStickerLayer.EnableScrollRect();
    }


    /// <summary>
    /// 清除缓存的StickerLayer引用（在StickerLayer被销毁时调用）
    /// </summary>
    public void ClearCachedStickerLayer() {
        cachedStickerLayer = null;
    }

    /// <summary>
    /// 销毁当前StickerLayer实例
    /// </summary>
    public void DestroyStickerLayer() {
        if (cachedStickerLayer != null) {
            Destroy(cachedStickerLayer.gameObject);
            cachedStickerLayer = null;
        }
    }
    #endregion

    #region 贴纸大小计算工具方法
    /// <summary>
    /// 计算原始贴纸与拖动贴纸（预制体）之间的显示大小差异
    /// </summary>
    /// <param name="originalSticker">原始贴纸对象（StickerLayer 上的 UI 贴纸）</param>
    /// <param name="dragSticker">拖动贴纸对象（可为null，将从预制体加载）</param>
    /// <returns>大小差异（拖动贴纸大小 - 原始贴纸大小）</returns>
    public Vector2 CalculateSizeDifference(GameObject originalSticker, GameObject dragSticker = null) {
        if (originalSticker == null) return Vector2.zero;

        Vector2 originalSize = GetStickerDisplaySize(originalSticker);
        Vector2 dragSize = Vector2.zero;

        if (dragSticker != null) {
            dragSize = GetStickerDisplaySize(dragSticker);
        } else {
            StickerItem stickerItem = originalSticker.GetComponent<StickerItem>();
            GameObject prefab = LoadStickerPrefab(originalSticker.name);
            SpriteRenderer prefabSpriteRenderer = prefab != null ? prefab.GetComponent<SpriteRenderer>() : null;
            if (prefabSpriteRenderer != null && prefabSpriteRenderer.sprite != null) {
                Bounds bounds = prefabSpriteRenderer.sprite.bounds;
                dragSize = new Vector2(bounds.size.x, bounds.size.y);
            }
        }

        return dragSize - originalSize;
    }

    /// <summary>
    /// 获取贴纸的显示大小（世界空间大小）
    /// </summary>
    /// <param name="sticker">贴纸对象</param>
    /// <returns>显示大小（宽度，高度）</returns>
    public Vector2 GetStickerDisplaySize(GameObject sticker) {
        if (sticker == null) return Vector2.zero;

        // 如果有 StickerItem，则优先用它的 sprite(Image) 节点来计算显示大小
        StickerItem stickerItem = sticker.GetComponent<StickerItem>();
        if (stickerItem != null && stickerItem.sprite != null) {
            RectTransform spriteRect = stickerItem.sprite.GetComponent<RectTransform>();
            if (spriteRect != null) {
                Vector2 sizeDelta = spriteRect.sizeDelta;
                Vector3 scale = spriteRect.lossyScale;
                return new Vector2(sizeDelta.x * scale.x, sizeDelta.y * scale.y);
            }
        }

        RectTransform rectTransform = sticker.GetComponent<RectTransform>();
        if (rectTransform != null) {
            Vector2 sizeDelta = rectTransform.sizeDelta;
            Vector3 scale = rectTransform.lossyScale;
            return new Vector2(sizeDelta.x * scale.x, sizeDelta.y * scale.y);
        }

        SpriteRenderer spriteRenderer = sticker.GetComponent<SpriteRenderer>();
        if (spriteRenderer.sprite != null) {
            Bounds bounds = spriteRenderer.bounds;
            return new Vector2(bounds.size.x, bounds.size.y);
        }

        Vector3 lossyScale = sticker.transform.lossyScale;
        return new Vector2(Mathf.Abs(lossyScale.x), Mathf.Abs(lossyScale.y));
    }
    #endregion

    #region 拖动贴纸缩放动画
    /// <summary>
    /// 根据大小差异设置初始缩放并执行缩放到正常大小的动画
    /// </summary>
    /// <param name="dragSticker">拖动贴纸对象</param>
    /// <param name="sizeDifference">大小差异（拖动贴纸大小 - 原始贴纸大小）</param>
    private void ApplySizeDifferenceWithAnimation(GameObject dragSticker, [Bridge.Ref] Vector2 sizeDifference) {
        if (dragSticker == null) return;

        SpriteRenderer spriteRenderer = dragSticker.GetComponent<SpriteRenderer>();
        if (spriteRenderer.sprite == null) return;

        Vector3 initialScale = CalculateInitialScale(spriteRenderer, dragSticker.transform.localScale, sizeDifference);
        if (initialScale == Vector3.zero) return;

        dragSticker.transform.localScale = initialScale;

        Transform fingerTransform = FindFingerInChildren(dragSticker.transform);
        if (fingerTransform != null) {
            fingerTransform.localScale = CalculateFingerCounterScale(initialScale);
        }

        float duration = GetAnimationDuration(false);
        AnimateDragStickerScale(dragSticker.transform, Vector3.one, duration, fingerTransform, initialScale);
    }

    /// <summary>
    /// 计算拖动贴纸的初始缩放比例
    /// </summary>
    private Vector3 CalculateInitialScale(SpriteRenderer spriteRenderer, [Bridge.Ref] Vector3 currentScale, [Bridge.Ref] Vector2 sizeDifference) {
        Vector2 dragSizeDefault = new Vector2(
            spriteRenderer.sprite.bounds.size.x * currentScale.x,
            spriteRenderer.sprite.bounds.size.y * currentScale.y
        );

        Vector2 originalSize = dragSizeDefault - sizeDifference;

        if (originalSize.x > 0 && originalSize.y > 0 && dragSizeDefault.x > 0 && dragSizeDefault.y > 0) {
            return new Vector3(
                originalSize.x / dragSizeDefault.x,
                originalSize.y / dragSizeDefault.y,
                1f
            );
        }

        return Vector3.zero;
    }

    /// <summary>
    /// 在子对象中查找手指Transform
    /// </summary>
    private Transform FindFingerInChildren(Transform parent) {
        for (int i = parent.childCount - 1; i >= 0; i--) {
            Transform child = parent.GetChild(i);
            if (child.name.Contains("Finger") || child.GetComponent<SpriteRenderer>() != null) {
                return child;
            }
        }
        return null;
    }

    /// <summary>
    /// 计算手指的反向缩放比例（用于抵消父对象的缩放）
    /// </summary>
    private Vector3 CalculateFingerCounterScale([Bridge.Ref] Vector3 parentScale) {
        return new Vector3(1f / parentScale.x, 1f / parentScale.y, 1f / parentScale.z);
    }

    /// <summary>
    /// 从GameConfig获取动画时长
    /// </summary>
    /// <param name="isDestroyAnimation">是否为删除动画，true为删除动画，false为缩放动画</param>
    /// <returns>动画时长</returns>
    private float GetAnimationDuration(bool isDestroyAnimation = false) {
        if (DataManager.Instance == null || DataManager.Instance.gameConfig == null) {
            return isDestroyAnimation ? 0.2f : 0.3f;
        }

        GameConfig config = DataManager.Instance.gameConfig;
        return isDestroyAnimation
            ? config.dragStickerDestroyAnimationDuration
            : config.dragStickerScaleAnimationDuration;
    }

    /// <summary>
    /// 使用 DOTween 动画缩放拖动贴纸
    /// </summary>
    /// <param name="targetTransform">目标Transform</param>
    /// <param name="endScale">结束缩放</param>
    /// <param name="duration">动画时长</param>
    /// <param name="fingerTransform">手指Transform（可选）</param>
    /// <param name="startScale">起始缩放（用于计算手指的反向缩放）</param>
    private void AnimateDragStickerScale(Transform targetTransform, [Bridge.Ref] Vector3 endScale, float duration, Transform fingerTransform = null, Vector3? startScale = null) {
        if (targetTransform == null) return;

        targetTransform.DOScale(endScale, duration)
            .SetEase(Ease.OutBack)
            .SetLink(targetTransform.gameObject);

        if (fingerTransform != null && startScale.HasValue) {
            Vector3 fingerStartScale = CalculateFingerCounterScale(startScale.Value);
            fingerTransform.DOScale(Vector3.one, duration)
                .SetEase(Ease.OutBack)
                .SetLink(fingerTransform.gameObject)
                .From(fingerStartScale);
        }
    }

    /// <summary>
    /// 托盘贴纸放置成功后缩小隐藏，但保留占位（与参考试玩一致，其余贴纸不移位）；
    /// 下一波次刷新托盘时统一清理。
    /// </summary>
    /// <param name="traySticker">托盘上的原始贴纸对象</param>
    public void ShrinkTraySticker(GameObject traySticker) {
        if (traySticker == null) return;

        traySticker.transform.DOScale(Vector3.zero, GetAnimationDuration(true))
            .SetEase(Ease.InBack)
            .SetLink(traySticker);
    }
    #endregion

    #region 工具方法
    /// <summary>
    /// 更新贴纸的Sprite（支持Image和SpriteRenderer）
    /// </summary>
    /// <param name="stickerObject">贴纸对象</param>
    /// <param name="newSprite">新的Sprite</param>
    /// <returns>是否成功更新</returns>
    private bool UpdateStickerSprite(GameObject stickerObject, Sprite newSprite) {
        if (stickerObject == null || newSprite == null) return false;

        Image imageComponent = stickerObject.GetComponent<Image>();
        if (imageComponent != null) {
            imageComponent.sprite = newSprite;
            return true;
        }

        SpriteRenderer spriteRenderer = stickerObject.GetComponent<SpriteRenderer>();
        if (spriteRenderer != null) {
            spriteRenderer.sprite = newSprite;
            return true;
        }

        return false;
    }

    /// <summary>
    /// 实例化GameObject并清理名称（移除Clone后缀）
    /// </summary>
    /// <param name="prefab">预制体</param>
    /// <param name="parent">父节点</param>
    /// <returns>实例化的对象</returns>
    private GameObject InstantiateAndCleanName(GameObject prefab, Transform parent) {
        if (prefab == null) return null;
        GameObject instance = Instantiate(prefab, parent);
        instance.name = GameUtils.CleanObjectName(instance.name);
        return instance;
    }

    /// <summary>
    /// 加载贴纸预制体
    /// </summary>
    /// <param name="stickerName">贴纸名称</param>
    /// <returns>预制体对象，如果加载失败返回null</returns>
    public GameObject LoadStickerPrefab(string stickerName) {
        string stickerId = ExtractStickerName(stickerName);
        if (string.IsNullOrEmpty(stickerId)) return null;
        return Resources.Load<GameObject>(PREFAB_PATH_PREFIX + "Room/Sticker_" + stickerId + "_Prefab");
    }

    /// <summary>
    /// 从贴纸名称中提取标准化ID（去掉"Sticker_"和"_Prefab"前后缀）
    /// </summary>
    /// <param name="stickerName">贴纸名称</param>
    /// <returns>贴纸ID（例如map01_a12），失败返回null</returns>
    private string ExtractStickerName(string stickerName) {
        if (string.IsNullOrEmpty(stickerName)) return null;

        // 先清理名字（去掉 Clone、空格之类）
        string cleanName = GameUtils.CleanObjectName(stickerName);

        // 去掉前缀 "Sticker_"
        if (cleanName.StartsWith("Sticker_")) {
            cleanName = cleanName.Substring("Sticker_".Length);
        }

        // 找到 "_Prefab" 这段（无论后面有没有数字），直接截掉后面的所有内容
        int prefabIndex = cleanName.LastIndexOf("_Prefab", System.StringComparison.Ordinal);
        if (prefabIndex >= 0) {
            cleanName = cleanName.Substring(0, prefabIndex);
        }

        return cleanName;
    }

    /// <summary>
    /// 将碰撞器的本地坐标点转换为世界坐标点
    /// </summary>
    /// <param name="collider">碰撞器</param>
    /// <returns>世界坐标点数组</returns>
    private Vector2[] TransformPointsToWorld(PolygonCollider2D collider) {
        if (collider == null) {
            return new Vector2[0];
        }

        Vector2[] localPoints = collider.points;
        Vector2[] worldPoints = new Vector2[localPoints.Length];

        for (int i = 0; i < localPoints.Length; i++) {
            worldPoints[i] = collider.transform.TransformPoint(localPoints[i]);
        }

        return worldPoints;
    }

    /// <summary>
    /// 将关卡预制中贴纸的翻转状态应用到单个贴纸实例上（支持 SpriteRenderer 和 Image 组件）
    /// </summary>
    /// <param name="stickerInstance">贴纸实例</param>
    private void ApplyFlipToSticker(GameObject stickerInstance) {
        if (stickerInstance == null) return;
        if (LevelManager.Instance == null) return;

        GameObject currentLevel = LevelManager.Instance.GetCurrentLevel();
        if (currentLevel == null) return;

        LevelController levelController = currentLevel.GetComponent<LevelController>();
        if (levelController == null) return;

        string stickerName = GameUtils.CleanObjectName(stickerInstance.name);

        // 在关卡预制中查找对应名字的贴纸
        GameObject levelSticker = FindStickerInLevelPrefab(levelController, stickerName);
        if (levelSticker == null) return;

        // 获取关卡预制中贴纸的翻转状态（关卡预制中应该是 SpriteRenderer）
        SpriteRenderer levelSpriteRenderer = levelSticker.GetComponent<SpriteRenderer>();
        if (levelSpriteRenderer == null) return;

        bool flipX = levelSpriteRenderer.flipX;
        bool flipY = levelSpriteRenderer.flipY;

        // 如果不需要翻转，直接返回
        if (!flipX && !flipY) return;

        // 应用翻转状态到创建的贴纸上（支持 SpriteRenderer 和 Image）
        SpriteRenderer createdSpriteRenderer = stickerInstance.GetComponent<SpriteRenderer>();
        if (createdSpriteRenderer != null) {
            // SpriteRenderer 直接设置 flipX 和 flipY
            createdSpriteRenderer.flipX = flipX;
            createdSpriteRenderer.flipY = flipY;

            // 如果有 PolygonCollider2D，按照翻转状态更新碰撞体点
            PolygonCollider2D collider = stickerInstance.GetComponent<PolygonCollider2D>();
            if (collider != null) {
                FlipColliderPoints(collider, flipX, flipY);
            }
        } else {
            // Image 组件通过 RectTransform 的 localScale 实现翻转
            Image createdImage = stickerInstance.GetComponent<Image>();
            if (createdImage != null) {
                RectTransform rectTransform = stickerInstance.GetComponent<RectTransform>();
                if (rectTransform != null) {
                    Vector3 currentScale = rectTransform.localScale;
                    rectTransform.localScale = new Vector3(
                        flipX ? -Mathf.Abs(currentScale.x) : Mathf.Abs(currentScale.x),
                        flipY ? -Mathf.Abs(currentScale.y) : Mathf.Abs(currentScale.y),
                        currentScale.z
                    );
                }

                // 如果有 PolygonCollider2D，按照翻转状态更新碰撞体点
                PolygonCollider2D collider = stickerInstance.GetComponent<PolygonCollider2D>();
                if (collider != null) {
                    FlipColliderPoints(collider, flipX, flipY);
                }
            }
        }
    }

    /// <summary>
    /// 根据 flipX / flipY 翻转 PolygonCollider2D 的碰撞点（运行时版，参考 LevelControllerEditor.UpdateColliderPoints）
    /// </summary>
    /// <param name="collider">要更新的碰撞体</param>
    /// <param name="flipX">是否水平翻转</param>
    /// <param name="flipY">是否垂直翻转</param>
    private void FlipColliderPoints(PolygonCollider2D collider, bool flipX, bool flipY) {
        if (collider == null) return;
        if (!flipX && !flipY) return;

        int pathCount = collider.pathCount;
        if (pathCount <= 0) return;

        // 逐路径翻转所有点
        for (int i = 0; i < pathCount; i++) {
            Vector2[] originalPath = collider.GetPath(i);
            if (originalPath == null || originalPath.Length == 0) continue;

            Vector2[] flippedPath = new Vector2[originalPath.Length];

            for (int j = 0; j < originalPath.Length; j++) {
                Vector2 point = originalPath[j];

                if (flipX) {
                    point.x = -point.x;
                }
                if (flipY) {
                    point.y = -point.y;
                }

                flippedPath[j] = point;
            }

            collider.SetPath(i, flippedPath);
        }
    }

    /// <summary>
    /// 在关卡预制中查找指定名字的贴纸
    /// </summary>
    /// <param name="levelController">关卡控制器</param>
    /// <param name="stickerName">贴纸名称</param>
    /// <returns>找到的贴纸 GameObject，如果未找到返回 null</returns>
    public GameObject FindStickerInLevelPrefab(LevelController levelController, string stickerName) {
        if (levelController == null || string.IsNullOrEmpty(stickerName)) return null;

        GameObject[] waveArray = levelController.WaveArray;
        if (waveArray == null || waveArray.Length == 0) return null;

        // 遍历所有波次及其子节点
        foreach (GameObject wave in waveArray) {
            if (wave == null) continue;

            foreach (Transform child in wave.transform) {
                if (child == null || child.gameObject == null) continue;

                string childName = GameUtils.CleanObjectName(child.gameObject.name);
                if (childName == stickerName) {
                    return child.gameObject;
                }
            }
        }

        return null;
    }
    #endregion
}
