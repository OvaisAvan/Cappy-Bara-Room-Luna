using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;


namespace SCParam
{
    
    public partial class DialogNotifyInfo
    {
        
        public string SContent = default(string);
        public string STitle = default(string);
        public bool BNeedSelect = default(bool);
        public SC.OnSCFunctionCallback_Void FunConfirm = default(SC.OnSCFunctionCallback_Void);
        public string SConfirmTxt = default(string);
        public SC.OnSCFunctionCallback_Void FunCancel = default(SC.OnSCFunctionCallback_Void);
        public string SCancelTxt = default(string);
    }
}