using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;


namespace SCParam
{
    
    public partial class DialogNotifyInfo
    {
        
        public string SContent = default;
        public string STitle = default;
        public bool BNeedSelect = default;
        public SC.OnSCFunctionCallback_Void FunConfirm = default;
        public string SConfirmTxt = default;
        public SC.OnSCFunctionCallback_Void FunCancel = default;
        public string SCancelTxt = default;
    }
}