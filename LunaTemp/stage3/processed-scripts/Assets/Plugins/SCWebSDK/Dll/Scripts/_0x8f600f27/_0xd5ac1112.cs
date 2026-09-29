using System.Collections.Generic;
using System;
using UnityEngine;
using SC._0xe343fa14;
using SC;

namespace SC
{
    public static class _0xe9f3d109
    {
        public const string Def = "";
    }

    public delegate void LoadSuccessCallback(string _0xeaeb4319, object _0xe9c59971, float _0x1cca96cd, object _0x3d766cce);
    public delegate void LoadUpdateCallback(string _0xc42da8ad, float _0xd697c95b, object _0x36f6aac3);
    public delegate void LoadFailureCallback(string _0x6b49441c, _0xda32970e _0x52728c6c, string _0xec07847f, object _0x34a00a4b);
    public class _0x0df97461
    {
        private readonly LoadSuccessCallback _0xdc3690fa;
        private readonly LoadFailureCallback _0xfc25855b;
        private readonly LoadUpdateCallback _0x096553a4;
    }

    public delegate void LanguageHandler();
    public delegate void OnSCFunctionCallback_Void();
    public delegate void OnSCFunctionCallback_Void<in T>(T _0x22ba4d52);
    public delegate void OnSCFunctionCallback_Void<in T, in T1>(T _0xea9bef09, T1 _0x90ee3063);
    public delegate void OnSCFunctionCallback_Void<in T, in T1, in T2>(T _0x3b0ab6ef, T1 _0x9555ee65, T2 _0x0e6e0b43);
    public delegate void OnSCFunctionCallback_Void<in T, in T1, in T2, in T3>(T _0xe2304777, T1 _0x26647152, T2 _0xa394a4ef, T3 _0xa96d22bc);
    public delegate bool OnSCFunctionCallback_Bool();
    public delegate int OnSCFunctionCallback_Int();
    public delegate float OnSCFunctionCallback_Float();
    public delegate double OnSCFunctionCallback_Double();
    public delegate string OnSCFunctionCallback_String();
}


namespace SC.Events
{
    public sealed class _0x2913d22d
    {
    }

    
    
    
    public sealed class _0xec09438b
    {
        
        
        
        public string FullscreenAdClose = _0xe9f3d109.Def;
        
        
        
        public string OnChangeCloseAdStatus = _0xe9f3d109.Def;
        
        
        
        
        
        public string AdvertisementClose = _0xe9f3d109.Def;
        
        public string AdvertisementRecover = _0xe9f3d109.Def;
        
        public string onSocialShareSuccess = _0xe9f3d109.Def;
        
        
        
        public string OnChangeGameListStatus = _0xe9f3d109.Def;
        
        
        
        public string onNativeAdShow_Json = _0xe9f3d109.Def;
        
        
        
        public string onNativeAdClosedByUser_Json = _0xe9f3d109.Def;
        
        
        
        public string onNativeAdClosedByClicked_Json = _0xe9f3d109.Def;
        
        
        
        public string UpdateProduct = _0xe9f3d109.Def;
        
        
        
        public string onIncompletePayOrderToDeal = _0xe9f3d109.Def;
        
        
        
         
        public string Opportunity_Restart = _0xe9f3d109.Def;
        
        
        
         
        public string Opportunity_GiveUp = _0xe9f3d109.Def;
        
        
        
         
        public string Opportunity_GameOver = _0xe9f3d109.Def;
        
        
        
        public string OnChangeDebugModeStatus = _0xe9f3d109.Def;
        
        public string OnDownloadMoreGameIconCompleted = _0xe9f3d109.Def;
    }

    public sealed class _0xbb7416ff
    {
        
        
        
        public string Enough_Show_Tip = _0xe9f3d109.Def;
        
        
        
        public string Enough_Show_Shop = _0xe9f3d109.Def;
        
        
        
        public string closeAd = _0xe9f3d109.Def;
        
        
        
        public string timeLimitCloseAd = _0xe9f3d109.Def;
        
        
        
        public string gold = _0xe9f3d109.Def;
        
        
        
        public string diamond = _0xe9f3d109.Def;
    }
}


namespace SCParam
{
    [System.Serializable]
    public class _0xa241aa20 : SCDataBase
    {
        public _0xa241aa20()
        {
        }

        public _0xa241aa20(string _0x11e432aa, long _0xe96d2ec8 = 0)
        {
            this.itemId = _0x11e432aa;
            this.count = _0xe96d2ec8;
        }

        
        
        
        public string itemId;
        
        
        
        public long count;
    }
}


namespace SCParam
{
    [System.Serializable]
    public class _0xbd7cfdb7
    {
        public string insId;
        public string itemId;
        
        
        
        public long changeCount;
        
        
        
        
        
        public long curCount;
        public void Clear()
        {
            this.changeCount = this.curCount = 0;
            this.insId = null;
        }
    }
}

namespace SC
{
    
    
    
    public sealed class _0x54e540d0
    {
        
        
        
        public _0x54e540d0()
        {
            this.itemId = _0xe9f3d109.Def;
            this.count = 0;
            this.userData = null;
        }

        
        
        
        public string itemId { get; private set; }
        
        
        
        
        public long count { get; private set; }
        
        
        
        public object userData { get; private set; }
    }
}

namespace SC
{
    
    
    
    public interface IEntity
    {
        
        
        
        int Id { get; }

        
        
        
        string PrefabId { get; }

        
        
        
        object Handle { get; }

        
        
        
        void OnRecycle();
        
        
        
        
         
        void OnShow(object _0x082a1a8b);
        
        
        
        
        void Hide(object _0x2f2a77e2);
        
        
        
        
        void OnHide(object _0x7c686cd0 = null);
        
        
        
        
        
        void OnAddChild(IEntity _0x71abd978, object _0xc097aa36);
        
        
        
        
        
        void OnRemoveChild(IEntity _0xb53050ef, object _0xadfbfb91);
        
        
        
        
        
        void OnAddParent(IEntity _0x7d68c186, object _0xbb3264f0);
        
        
        
        
        
        void OnRemoveParent(IEntity _0x32eb3d24, object _0x4a3cb1bd);
        
        
        
        
        
        void OnUpdate(float _0xf34a79dd, float _0xae2e2a0d);
    }
}

namespace SC
{
    
    
    
    public sealed class _0x7308c9b6 : SCEventArgs
    {
        
        
        
        public _0x7308c9b6()
        {
            Entity = null;
            Duration = 0f;
            UserData = null;
        }

        
        
        
        public IEntity Entity { get; private set; }
        
        
        
        public float Duration { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }

    public sealed class _0x71b148ae : SCEventArgs
    {
        
        
        
        public _0x71b148ae()
        {
            EntityId = 0;
            PrefabPath = null;
            ErrorMessage = null;
            UserData = null;
        }

        
        
        
        public int EntityId { get; private set; }
        
        
        
        public string PrefabPath { get; private set; }
        
        
        
        public string ErrorMessage { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }
}

public class _0xb93849a5
{
    public string type;
    public string[] lRewardId;
    public int[] lRewardCount;
    
    public bool isSc;
}

public delegate bool ResumeOrderCB(_0xb93849a5 _0x25e09fc8);

namespace SC.Events
{
    
    
    
    public class _0xe798b30e
    {
        public const string NONE = _0xe9f3d109.Def; 
        public const string TOP = _0xe9f3d109.Def; 
        public const string BOTTOM = _0xe9f3d109.Def; 
    }

    
    
    
    public class _0xea722ab1
    {
        public const string NORMAL = _0xe9f3d109.Def; 
        public const string HIGH = _0xe9f3d109.Def; 
    }

    
    
    
     
    public class EnumShowVideoType
    {
        
        
        
         
        public string Success = _0xe9f3d109.Def; 
        
        
        
         
        public string NoFinished = _0xe9f3d109.Def;
        
        
        
         
        public string NoEnoughMemory = _0xe9f3d109.Def;
        
        
        
         
        public string Cancel = _0xe9f3d109.Def;
        
        
        
         
        public string Loaded = _0xe9f3d109.Def;
        
        
        
         
        public string Loading = _0xe9f3d109.Def;
    }
}

namespace SC
{
    
    
    
    public sealed class _0x40d08fac : SCEventArgs
    {
        
        
        
        public string SceneAssetName { get; private set; }
        
        
        
        public float Duration { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }
}


namespace SCParam
{
    
    
    
    public sealed class _0xc9a7c399
    {
        
        
        
        public string sShowSign;
        
        
        
        public List<string> lFilterSign;
    }

    public class _0x644cdd14 : SCDataBase
    {
        
        
        
        public string stageID;
        
        
        
        public int starNum;
        private bool _0xc5edfdd7;
        
        
        
        public bool bUnlocked
        {
            get
            {
                return _0xc5edfdd7 || bPass || starNum != 0;
            }

            set
            {
                _0xc5edfdd7 = value;
            }
        }

        
        
        
        public bool bPass;
    }

    public sealed class _0x96595b61
    {
        public Action<StageLevelTable> OnEnterStage;
        public StageLevelTable stageInfo;
    }

    public class _0x0bc1ed17 : SCDataBase
    {
        public int sectionID;
        
        
        
        public List<string> lAwardReceivedRecord = new List<string>();
    }
}


namespace SC.Events
{
    
    
    
    public class _0xcba66dab
    {
        
        
        
        public string None = _0xe9f3d109.Def;
        
        
        
        public string Other = _0xe9f3d109.Def;
        
        
        
        public string Module_Ins = _0xe9f3d109.Def;
        
        
        
        public string DialogShop = _0xe9f3d109.Def;
        
        
        
        public string DialogShopAD = _0xe9f3d109.Def;
        
        
        
        public string DialogShopOfferWall = _0xe9f3d109.Def;
        
        
        
        public string DialogShopGold = _0xe9f3d109.Def;
        
        
        
        public string DialogShopDiamond = _0xe9f3d109.Def;
        
        
        
        public string Subscribe = _0xe9f3d109.Def;
        
        
        
        public string Settle = _0xe9f3d109.Def;
        
        
        
        public string Video = _0xe9f3d109.Def;
        
        
        
        internal string _0x5cf4a891 = _0xe9f3d109.Def;
        
        internal string _0xf86ff0ef = _0xe9f3d109.Def;
        
        internal string _0x48ef288d = _0xe9f3d109.Def;
        
        internal string _0x6fc2751b = _0xe9f3d109.Def;
        
        
        
        public string MoreGame = _0xe9f3d109.Def;
    }
}


namespace SC.Events
{
    
    
    
    public sealed class _0x69d68f1a
    {
        
        
        
        public string Resolution_Change = _0xe9f3d109.Def;
        
        
        
        public string SDK_Hide_Dialog_OnNet = _0xe9f3d109.Def;
        
        
        
        public string Money_AddAnimStart = _0xe9f3d109.Def;
        
        
        
        public string Money_AddAnimEnd = _0xe9f3d109.Def;
        
        
        
        
        
        
        
        
        public string Video_Play_Complete = _0xe9f3d109.Def;
        
        
        
        public string Video_Loading = _0xe9f3d109.Def;
        
        
        
        public string Global_Event_NewDay = _0xe9f3d109.Def;
        
        
        
        public string Game_Exit = _0xe9f3d109.Def;
        
        
        
        public string SDK_Init_Complete = _0xe9f3d109.Def;
        
        
        
        public string Enter_Game_Success = _0xe9f3d109.Def;
        
        
        
        public string Plugin_Catalog_Path = _0xe9f3d109.Def;
        
        
        
        
        internal string _0xf4fb7811 = _0xe9f3d109.Def;
        
        
        
        
        internal string _0x308ab6d2 = _0xe9f3d109.Def;
        
        
        
        
        
        public string Audio_OnSCAudioStateChange = _0xe9f3d109.Def;
        
        
        
        
        internal string _0x2d5bd09d = _0xe9f3d109.Def;
        
        internal string _0x28832bc6 = _0xe9f3d109.Def;
        
        internal string _0x85db0ddc = _0xe9f3d109.Def;
    }

    
    
    
    
    public class _0x9e2250d3
    {
    }
}