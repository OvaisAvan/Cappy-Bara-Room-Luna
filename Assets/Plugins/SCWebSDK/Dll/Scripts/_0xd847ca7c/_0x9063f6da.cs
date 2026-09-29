using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    
    public partial class _0x30b81eb5
    {
        
        public bool AllowShowLaunchButton()
        {
            return false;
        }

        public bool HasSignIn(int _0x069b3862)
        {
            return false;
        }

        public bool AllowSignIn(int _0x84922566)
        {
            return false;
        }

        public bool AllowResign(int _0x8a83dad6)
        {
            return false;
        }

        public int GetMaxDays()
        {
            return 0;
        }

        public int GetCurDays()
        {
            return 0;
        }

        public List<SCParam.SignTable> lSignInConfigs = new List<SCParam.SignTable>();
        public int CurSignInDays = default;
        public Int64 CurSignInStartTime = default;
        public string sModuleName = default;
    }
}