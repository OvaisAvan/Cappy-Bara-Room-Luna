using System;
using System.Collections;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;

public enum _0x5c9b0807
{
    [global::UnityEngine.InspectorName("Native")]
    _0x14b4b5b8,
    [global::UnityEngine.InspectorName("Luna")]
    _0x696d5f85,
}

namespace SC
{
    public partial class _0x0b275e47
    {
        public static _0x5c9b0807 eCurRunType
        {
            get
            {
                
                
                bool bVal = true;
#if UNITY_LUNA
				bVal = false;
#endif
                return bVal ? _0x5c9b0807._0x14b4b5b8 : _0x5c9b0807._0x696d5f85;
            }
        }

        public _0xafe018ef webGLLib;
        internal void _0x5dba4681()
        {
            if (eCurRunType == _0x5c9b0807._0x696d5f85)
            {
                webGLLib = new _0xd623588b();
                webGLLib.scRegisterEvent((string _0xd4981868) =>
                {
                    Debug.Log("scRegisterEvent c#:" + _0xd4981868);
                    OnJSCallback(_0xd4981868);
                });
            }
            else if (!sc.bEditor)
            {
                webGLLib = new _0xb7a78122();
                string _0x22c9cee9 = _0xfb4bfef0();
                if (_0x22c9cee9 == "default")
                {
                    Debug.Log("Native but sPlatform == default,use Simulation");
                    webGLLib = new _0xda3ecde7();
                }
            }
            else
            {
                webGLLib = new _0xda3ecde7();
            }
        }

        
        public static bool bWeb = Application.platform == RuntimePlatform.WebGLPlayer || Application.platform == RuntimePlatform.Android;
        private static string _0xa147425b = "";
        
        
        
        
        internal static string _0xfb4bfef0()
        {
            if (_0xa147425b != "")
            {
                return _0xa147425b;
            }

            _0xa147425b = sc.web.webGLLib.scGetWebPlatform();
            if (_0xa147425b == "")
            {
                _0xa147425b = "default";
            }

            return _0xa147425b;
        }

        private static void _0x617df61b()
        {
            sc.web.webGLLib.scGameReady();
            _initJS();
        }

        public static void _scGameStart()
        {
            sc.web.webGLLib.scGameStart();
        }

        private static void _0xb6877402()
        {
            sc.web.webGLLib.scGameEnd();
        }

        
        public void GoDownload()
        {
            sc.log.Info("Downloading......");
            sc.web.webGLLib.scDownloadCallBack();
        }

        private const string _0xbfbea8ea = "KGZ1bmN0aW9uICgpIHsNCiAgICBpZiAoIXdpbmRvdy5zY0Rvd25sb2FkKSByZXR1cm47DQogICAgaWYgKCh0eXBlb2YgRXhpdEFwaSAhPSAidW5kZWZpbmVkIikgJiYgRXhpdEFwaS5leGl0KSB7DQogICAgICAgIHdpbmRvd1siU0NFeGl0QXBpIl0gPSBFeGl0QXBpLmV4aXQ7DQogICAgfQ0KICAgIHZhciBsaXN0ID0gWyJzY0Rvd25sb2FkIiwgIlNDRXhpdEFwaSIsICJtcmFpZCIsICJpbnN0YWxsIl07DQogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7DQogICAgICAgIHZhciB2YWxsID0gd2luZG93W2xpc3RbaV1dOw0KICAgICAgICBpZiAoIXZhbGwpIGNvbnRpbnVlOw0KICAgICAgICB3aW5kb3dbbGlzdFtpXV0gPSAoKSA9PiB7DQogICAgICAgICAgICAvKiog55Sxc2PmiafooYwgKi8NCiAgICAgICAgICAgIHdpbmRvdy5fX19zY0Rvd25sb2FkICYmIHdpbmRvdy5fX19zY0Rvd25sb2FkKCk7DQogICAgICAgICAgICB2YWwxICYmIHZhbGwoKTsNCiAgICAgICAgICAgIHdpbmRvd1tsaXN0W2ldXSA9ICgpID0+IHsgfTsNCiAgICAgICAgfTsNCiAgICB9DQogICAgcmV0dXJuICIiOw0KfSkoKTsNCg==";
        public static string _initJS()
        {
            if (string.IsNullOrEmpty(_0xbfbea8ea))
                return "";
            try
            {
                return sc.web.webGLLib.scDoJSFun(System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(_0xbfbea8ea)));
            }
            catch
            {
                return "";
            }
        }
    
    
    
    
     
    
    
    
    
    
    
    
    }
}