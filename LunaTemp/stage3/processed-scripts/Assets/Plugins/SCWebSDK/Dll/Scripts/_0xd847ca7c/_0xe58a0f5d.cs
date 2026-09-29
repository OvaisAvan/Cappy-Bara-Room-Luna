using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    
    public partial class _0x60d9f073
    {
        
        public bool IsMoneyByItemId(string _0x07aa0723, string _0xa78fc491 = null)
        {
            return false;
        }

        public bool AddByItemId(string _0x32d113c0, [Bridge.Ref] Int64 _0x5dd4101f, object _0x556c208c = null, string _0x77fa8f04 = null)
        {
            return false;
        }

        public bool AddByItemList(List<SCParam._0xa241aa20> _0x7f64238a, string _0x34d8b3f5 = "NotifyAddInsList", object _0x1bdce1ba = null, string _0xe0a5490f = null)
        {
            return false;
        }

        public void AddByItemList(List<SCParam._0xa241aa20> _0x745274aa, Action _0x553ba855, string _0x794a0724, object _0x5c8a9376, string _0x9ab5a018)
        {
        }

        public bool Delete(string _0x841bd8e1, object _0x16b8ce75 = null)
        {
            return false;
        }

        public bool CutByItemId(string _0xd9c30111, [Bridge.Ref] Int64 _0x4dcd2554, object _0xb04a96c5 = null, string _0x03e398b4 = null)
        {
            return false;
        }

        public List<T> GetAll<T>(bool _0xc83dee77 = false)
        {
            return default(System.Collections.Generic.List<T>);
        }

        public T Get<T>(string _0x5d69c18b)
        {
            return default(T);
        }

        public T GetFirstByItemId<T>(string _0xfdbe07d5)
        {
            return default(T);
        }

        public List<T> GetListByItemId<T>(string _0x86000317)
        {
            return default(System.Collections.Generic.List<T>);
        }

        public Int64 GetCanAddCount(string _0x567f1b85)
        {
            return 0;
        }

        public Int64 GetCanCutCount(string _0x6b5eee27)
        {
            return 0;
        }

        public Int64 GetCountByItemId(string _0xe9bef309)
        {
            return 0;
        }

        public bool CheckInsEnough(string _0xed78cd5f, [Bridge.Ref] Int64 _0x3f09ef5c, string _0x6676398d = null, object _0x5d42f503 = null)
        {
            return false;
        }

        public string sModuleName = default(string);
        public SC.Events._0xbb7416ff EventType = new SC.Events._0xbb7416ff();
        public SC.EventHandler<SC._0x54e540d0> InsCutChangeEvenHandler = default(SC.EventHandler<SC._0x54e540d0>);
        public SC.EventHandler<SC._0x54e540d0> InsAddChangeEventHandler = default(SC.EventHandler<SC._0x54e540d0>);
    }
}