using System;
using System.Collections;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;

namespace SC
{
    
    
    
    
    public abstract class _0xafe018ef
    {
        public abstract string scGetWebPlatform();
        public abstract void scGameEnd();
        public abstract void scGameReady();
        public abstract void scGameStart();
        public abstract void scDownloadCallBack();
        public abstract int GetCustomLanguageIdx();
        public abstract string scDoJSFun(string _0xf78fce4e);
        public virtual void scRegisterEvent(Action<string> _0x13220ddf)
        {
        }
    }
}