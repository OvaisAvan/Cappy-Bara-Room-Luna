using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    public partial class sc
    {
        public static PayCommon pay = new PayCommon();
    }

    
    public partial class PayCommon
    {
        
        public Int64 GetGold()
        {
            return 0;
        }

        public Int64 GetDiamond()
        {
            return 0;
        }

        public void AddGold([Bridge.Ref] Int64 _0xfb21152a, string _0xb0ab463c, SC.OnSCFunctionCallback_Void _0x7e98461b = null, bool _0x3371e18c = true)
        {
        }

        public void AddDiamond([Bridge.Ref] Int64 _0x1c34885b, string _0xfc82f341, SC.OnSCFunctionCallback_Void _0x19acedfc = null, bool _0xe481d12f = true)
        {
        }

        public bool ReduceGold([Bridge.Ref] Int64 _0x4f767397, string _0x74b53345 = null)
        {
            return false;
        }

        public bool ReduceGold([Bridge.Ref] Int64 _0xb09f2687, bool _0x1c91b099 = false, string _0x885343ef = null)
        {
            return false;
        }

        public bool ReduceDiamond([Bridge.Ref] Int64 _0xb2f65758, string _0xcae1f773 = null)
        {
            return false;
        }

        public bool ReduceDiamond([Bridge.Ref] Int64 _0xcc83bb6b, bool _0x221fff1a = false, string _0x3935d4db = null)
        {
            return false;
        }

        public void SetGoldLevel(int _0x66bc2ad7)
        {
        }

        public int GetGoldLevel()
        {
            return 0;
        }

        public Single GetGoldRate()
        {
            return 0.0f;
        }

        public int TransformGoldByRate([Bridge.Ref] Single _0xbcc641de, string _0xd50c18a5 = null)
        {
            return 0;
        }

        public void AddGoldCheckGoldRate(int _0x9ec17e7e, string _0xdec226d9, SC.OnSCFunctionCallback_Void _0x4269b1d3 = null, bool _0xba0a0088 = false)
        {
        }

        public void AddResumeOrderCB(ResumeOrderCB _0xf2ed8040)
        {
        }

        public void QueryRestoreTransactions(SC.OnSCFunctionCallback_Void<string[]> _0x2fb583f5, bool _0xb2c1bd14 = true)
        {
        }

        public void CountPayItemEvent(string _0x4a63a8d0)
        {
        }

        public string GetCloseAdProductId()
        {
            return null;
        }

        public SCParam.PaymentTable GetProductConfig(string _0x49d8317b)
        {
            return default(SCParam.PaymentTable);
        }

        public bool HasProductConfig(string _0x85b2ef82)
        {
            return false;
        }

        public SCParam.PaymentTable GetProductByID(int _0x05d46c67)
        {
            return default(SCParam.PaymentTable);
        }

        public List<SCParam.PaymentTable> GetGoldProductItems()
        {
            return default(System.Collections.Generic.List<SCParam.PaymentTable>);
        }

        public List<SCParam.PaymentTable> GetDiamondProductItems()
        {
            return default(System.Collections.Generic.List<SCParam.PaymentTable>);
        }

        public SCParam.PaymentTable GetCloseAdOrder()
        {
            return default(SCParam.PaymentTable);
        }

        public string sModuleName = default(string);
        public SC.Events._0xcba66dab EventType = new SC.Events._0xcba66dab();
    }
}