using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    
    public partial class _0xdd805538
    {
        
        public void CheckItemForScenery()
        {
        }

        public void CheckConditionalForScenery()
        {
        }

        public void UpdateGameLevel(int _0x5d2ed8e5)
        {
        }

        public int GetTotalBuildPartCount()
        {
            return 0;
        }

        public int GetBuildPartCost()
        {
            return 0;
        }

        public int GetSceneryPartCost(string _0x26a77f5c, int _0x2714fab6)
        {
            return 0;
        }

        public void AddSceneryPartCost(string _0xb4cd3e1d, int _0x9c33508a, int _0x8f70cc94)
        {
        }

        public int GetBuildSceneryPartCount(string _0xdf79c898)
        {
            return 0;
        }

        public int CompleteSceneryPartBuild(string _0x1b278bec)
        {
            return 0;
        }

        public void BuildStart(Transform _0x4a2671af, UnityEngine.Vector3 _0x9c5b7718)
        {
        }

        public void BuildSceneryProgress(string _0x37afe415, int _0x1f023e60, Single _0x4370fdc2)
        {
        }

        public void BuildEnd()
        {
        }

        public bool IsSceneryCompleted(string _0x15ef89ee)
        {
            return false;
        }

        public void CompleteScenery(string _0x06d65531)
        {
        }

        public bool IsSceneryUnlocked(string _0x6cc284b4)
        {
            return false;
        }

        public void UnlockScenery(string _0xc1535467)
        {
        }

        public bool IsSceneryNewItem(string _0x1b240d82)
        {
            return false;
        }

        public string GetSelSceneryId()
        {
            return null;
        }

        public void SelectScenery(string _0xd64dd9b2)
        {
        }

        public string GetCurSceneryId()
        {
            return null;
        }

        public bool IsUsingScenery(string _0x4e02fa84)
        {
            return false;
        }

        public bool UseScenery(string _0x81ff0a1e)
        {
            return false;
        }

        public T GetSceneryItemConfig<T>(string _0x36c75ffb)
        {
            return default;
        }

        public T GetNextSceneryItemConfig<T>(string _0xb39f3133, int _0xe3e1bc03)
        {
            return default;
        }

        public string sModuleName = default;
        public Action<string> ON_UNLOCK_ITEM = default;
        public Action<string> ON_SELECT_ITEM = default;
        public Action<string> ON_USE_ITEM = default;
        public Action<Transform, UnityEngine.Vector3> ON_PART_BUILD_START = default;
        public Action ON_PART_BUILD_END = default;
        public Action<string, int, Single> ON_PART_BUILD_PROGRESS = default;
        public Action<string> ON_SCENERY_COMPLETE = default;
    }
}