using System;
using System.Collections;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;


namespace SC
{
    
    
    
    public partial class _0x034ef5c9
    {
        [DllImport("__Internal")]
        public static extern int scGetWebPlatformIdx();
        [DllImport("__Internal")]
        public static extern void scGameEnd();
        [DllImport("__Internal")]
        public static extern void scGameReady();
        [DllImport("__Internal")]
        public static extern void scGameStart();
        [DllImport("__Internal")]
        public static extern void scDownloadCallBack();
        [DllImport("__Internal")]
        public static extern string scDoJSFun(string _0x876eb8c2);
    }

    
    
    
    public class _0xb7a78122 : _0xafe018ef
    {
        public override string scGetWebPlatform()
        {
            int _0x9126b450 = _0x034ef5c9.scGetWebPlatformIdx();
            string[] _0xf8c75a69 = new string[]
            {
                "mintegral",
                "applovin",
                "NewsBreak",
                "google"
            };
            string _0xee6279e8 = _0x9126b450 == -1 ? "" : _0xf8c75a69[_0x9126b450];
            return _0xee6279e8;
        }

        public override void scGameEnd()
        {
            _0x034ef5c9.scGameEnd();
        }

        public override void scGameReady()
        {
            _0x034ef5c9.scGameReady();
        }

        public override void scGameStart()
        {
            _0x034ef5c9.scGameStart();
        }

        public override void scDownloadCallBack()
        {
            _0x034ef5c9.scDownloadCallBack();
        }

        public override int GetCustomLanguageIdx()
        {
            return (int)LanguageCommon.GetCurLanguageIdx();
        }

        public override string scDoJSFun(string _0xe7543182)
        {
            return _0x034ef5c9.scDoJSFun(_0xe7543182);
        }
    }
}