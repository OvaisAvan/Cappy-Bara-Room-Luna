using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    
    public partial class _0x62a5bf4d : MonoBehaviour
    {
        
        public void OnInit(int serialId, string path, SCParam.WindowTable tableData, bool isNewInstance, object _0xc8f9b7ad)
        {
        }

        public void OnRecycle()
        {
        }

        public void OnOpen(object _0xfef4bcfd)
        {
        }

        public void OnClose(bool isShutdown, object _0x6ac50225)
        {
        }

        public void OnUpdate(Single elapseSeconds, Single _0xef876dd0)
        {
        }

        public void OnDepthChanged(int groupDepth, int _0x350610f5)
        {
        }

        public bool IsReleaseByRecycle()
        {
            return false;
        }

        public int SerialId = default;
        public string Path = default;
        public object Handle = new object ();
        public SC.WindowLogic Logic = default;
        public SCParam.WindowTable TableData = new SCParam.WindowTable();
        public object OtherData = new object ();
    }
}