using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using SC;
using UnityEngine;

public class Main : MonoBehaviour {
    void Awake() {
        // 默认关闭多点触摸，插件若有需要自行开启
        Input.multiTouchEnabled = false;
        GameObject.DontDestroyOnLoad(gameObject);
    }

    void Start() {
        // SDK 回调可能同步返回；等待场景管理器的 Awake 全部完成。
        sc.Init(initComplete);
    }

    private void initComplete() {
        DOTween.Init(false, true);
        sc.events.On(sc.events.EventType.Game_Exit, onGameClose);
        // 在通知 SDK 就绪前订阅开始/结束事件。
        PlayableFlow.Bind();
        sc.sdk.OnEnterGameSuccess();

        //sc.window.OpenUIFormSuccess += onOpenUIFormSuccess;
        DataManager.Instance.Initialize();
        sc.audio.Play("StickerBGM", true);
        sc.window.ShowWindow(EnumTable.window.LayerGame);
    }

    //private void onOpenUIFormSuccess(ShowWindowSuccessEventArgs e) {
    //    sc.window.OpenUIFormSuccess -= onOpenUIFormSuccess;

    //    sc.sdk.OnEnterGameSuccess();
    //}

    private void onGameClose(SC.SCEventArgs e) {
        // 取消事件监听
        sc.events.Off(sc.events.EventType.Game_Exit, onGameClose);
        PlayableFlow.Unbind();

        // 清理内存相关处理 
        DOTween.Clear(true);

        // --- 1. 清理项目业务单例 ---
        DataManager.ClearInstance();
        LevelManager.Instance = null;
        StickerManager.Instance = null;
        GuideManager.Instance = null;

        // --- 2. 彻底重置龙骨动画插件状态 ---
        try {
            var factory = DragonBones.UnityFactory.factory;
            if (factory != null) {
                // 清空缓存的纹理和数据（调用插件自带的清理方法）
                factory.Clear(true);
                // 清空时钟里的任务（停止所有正在跑的动画心跳）
                if (factory.clock != null) {
                    factory.clock.Clear();
                }
            }

            // 利用反射强行归零所有私有静态变量，确保下次进入时重新初始化
            var factoryType = typeof(DragonBones.UnityFactory);
            var baseFactoryType = typeof(DragonBones.BaseFactory);
            var baseObjectType = typeof(DragonBones.BaseObject);

            // 重置 UnityFactory 的私有静态字段
            ResetStaticField(factoryType, "_factory");
            ResetStaticField(factoryType, "_gameObject");
            ResetStaticField(factoryType, "_dragonBonesInstance");

            // 重置 BaseFactory 的私有静态字段（解析器缓存）
            ResetStaticField(baseFactoryType, "_objectParser");
            ResetStaticField(baseFactoryType, "_binaryParser");

            // 清理 BaseObject 的对象池缓存
            ClearStaticDictionary(baseObjectType, "_poolsMap");
            ClearStaticDictionary(baseObjectType, "_maxCountMap");

            Debug.Log("[Main] 龙骨插件所有静态变量和缓存已重置");
        } catch (Exception ex) {
            Debug.LogWarning("[Main] 强力清理龙骨单例失败: " + ex.Message);
        }

        // --- 3. 销毁全局节点 ---
        // 销毁龙骨心跳驱动节点（隐藏在 DontDestroyOnLoad 里的那个）
        GameObject dbObj = GameObject.Find("DragonBones Object");
        if (dbObj != null) {
            Destroy(dbObj);
        }

        //done
        Debug.Log("插件内存彻底清理完成");
        Destroy(gameObject);
    }

    /// <summary>
    /// 利用反射重置静态字段为 null
    /// </summary>
    private void ResetStaticField(Type type, string fieldName) {
        var field = type.GetField(fieldName, System.Reflection.BindingFlags.Static | System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Public);
        if (field != null) {
            field.SetValue(null, null);
        }
    }

    /// <summary>
    /// 利用反射清理静态字典内容
    /// </summary>
    private void ClearStaticDictionary(Type type, string fieldName) {
        var field = type.GetField(fieldName, System.Reflection.BindingFlags.Static | System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Public);
        if (field != null) {
            var dict = field.GetValue(null) as IDictionary;
            if (dict != null) {
                dict.Clear();
            }
        }
    }
}
