using System;
using System.Collections;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;


namespace SC
{
    
    
    
    public class _0xda3ecde7 : _0xafe018ef
    {
        public override string scGetWebPlatform()
        {
            return sc.WebAdConfig.eDebugWebPlatform.ToString();
        }

        public override void scGameEnd()
        {
            sc.log.Debug("Simulation scGameEnd");
        }

        public override void scGameReady()
        {
            sc.log.Debug("Simulation scGameReady");
            if (Application.isEditor && sc.WebAdConfig.fDebugAdDuration >= 0)
                return;
            if (sc.web._0x3104f99b())
            {
                sc.loom.DelayTimeBackCall(() =>
                {
                    sc.log.Debug("Simulation gameStart");
                    sc.web.OnJSCallback("gameStart");
                }, 1);
            }
        }

        public override void scGameStart()
        {
            sc.log.Debug("Simulation scGameStart");
            sc.web.OnJSCallback("gameStart");
        }

        public override void scDownloadCallBack()
        {
            sc.log.Debug("Simulation download");
        }

        public override int GetCustomLanguageIdx()
        {
            return (int)LanguageCommon.GetCurLanguageIdx();
        }

        public override string scDoJSFun(string _0x54d659bc)
        {
            sc.log.Debug("Simulation scDoJSFun:" + _0x54d659bc);
            return "";
        }
    }
}