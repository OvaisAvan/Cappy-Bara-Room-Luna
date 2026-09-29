using System;
using System.Collections;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;


#if UNITY_LUNA
using Bridge;



[External][Name( "pc.WebGLLib" )]
#endif



public class _0xdb7190ab
{
    public extern string scGetWebPlatform();
    public extern void scGameEnd();
    public extern void scGameReady();
    public extern void scGameStart();
    public extern void scDownloadCallBack();
    public extern void scRegisterEvent(Action<string> _0xa735d217);
    public extern string scDoJSFun(string _0xd27b5170);
}

namespace SC
{
    public class _0xd623588b : _0xafe018ef
    {
        _0xdb7190ab _0x618d93de = new _0xdb7190ab();
        public override string scGetWebPlatform()
        {
            return _0x618d93de.scGetWebPlatform();
        }

        public override void scGameEnd()
        {
            _0x618d93de.scGameEnd();
        }

        public override void scGameReady()
        {
            _0x618d93de.scGameReady();
        }

        public override void scGameStart()
        {
            _0x618d93de.scGameStart();
        }

        public override void scDownloadCallBack()
        {
            _0x618d93de.scDownloadCallBack();
        }

        public override int GetCustomLanguageIdx()
        {
            return (int)LanguageCommon.GetCurLanguageIdx();
        }

        public override string scDoJSFun(string _0x35a7fda7)
        {
            return _0x618d93de.scDoJSFun(_0x35a7fda7);
        }

        public override void scRegisterEvent(Action<string> _0x89c7c80d)
        {
            _0x618d93de.scRegisterEvent(_0x89c7c80d);
        }
    }
}