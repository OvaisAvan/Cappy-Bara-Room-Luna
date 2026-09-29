using UnityEngine;
using UnityEditor;
using System;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Threading;
using UnityEditor.Build;
using UnityEditor.WebGL;
using System.Collections.Generic;
using UnityEngine.UI;
using System.Reflection;
using System.Linq;
using SC;
using System.IO.Compression;

namespace _0xa07739b8
{
    public partial class _0xa7126670
    {
        
        
        
        
        static string _0x138ae84a = @"
pc.WebGLLib = function () {
    console.log(""[sc] :WebGLLib Init"");
    window.scDownload = function () {
        window.___scDownload && window.___scDownload();
    };
    this.scDownloadCallBack = function () {
        console.log(""[sc] : go download"");
        if ((/iPhone|iPad/i.test(navigator.userAgent))) {
            window.scIosDownloadTip && window.scIosDownloadTip();
        }
        if (window.scPlatform && window.scPlatform.showToast) {
            window.scPlatform.showToast();
        }
        window.install && window.install();
        if (window.mraid && window.mraid.open) {
            window.mraid.open();
        }
        var sName = document.getElementById(""playable"");
        if (sName && sName.content === ""google"") {
            console.log(""[sc] : is google"");
            if (window.location.href.indexOf('file://') != 0) {
                console.log(""[sc] : ExitApi.exit"");
                (typeof ExitApi != ""undefined"") && ExitApi.exit && ExitApi.exit();
            }
        }
    };

    this.scGameEnd = function () {
        console.log(""[sc] : step last  C# game end"");
        window.scGameEnded = true;
        window.gameEnd && window.gameEnd();
    };

    this.scGameReady = function () {
        if (window.scGameReady) return;
        console.log(""C# game ready"");
        window.scGameReady = true;
        window.gameReady && window.gameReady();
        window.gameReady = function () {
            console.log(""[sc] : game ready already called"");
        };
    };

    this.scGameStart = function () {
        console.log(""[sc] : C# gameStart"");
        window.gameStart && window.gameStart();
    };

    this.scGetWebPlatform = function () {
        var platform = """";
        var customPlatform;
        var pElement = document.getElementById(""playable"");
        if (pElement) {
            customPlatform = pElement.content;
        }
        if (customPlatform) {
            platform = customPlatform;
        }
        return platform;
    };

    this.scRegisterEvent = function (callback) {
        console.log(""scRegisterEvent"", callback);
        window.unityCallback = callback;
    };

    var oldStart = window.gameStart;
    window.gameStart = function () {
        console.log(""[sc] : gameStart"");
        oldStart && oldStart();
        if (window.unityCallback) {
            window.unityCallback(""gameStart"");
        } else {
            console.warn(""Unity回调未注册"");
        }

        var vid = document.getElementById(""vid"");
        if (vid != null) {
            console.log(""[sc] : remove loop"");
            vid.removeAttribute(""loop"");
            vid.currentTime = 0;
            vid.play();
        }
    };

    var oldClose = window.gameClose;
    window.gameClose = function () {
        console.log(""[sc] : game close"");
        oldClose && oldClose();
        if (window.unityCallback) {
            window.unityCallback(""gameClose"");
        } else {
            console.warn(""Unity回调未注册"");
        }
    };

    this.scDoJSFun = function (sFun) {
        if (sFun) {
            try {
                return eval(sFun) + """";
            } catch (e) {
                console.warn(""[sc] scDoJSFun error: "" + e.message);
                return """";
            }
        }
        return """";
    };
    window.___scInit && window.___scInit();
};    
";
        static string _0x4042434b
        {
            get
            {
                if (_0xf43a6983._0x4d509f4c())
                {
                    return Application.dataPath + "/Plugins/webGL/WebGLLib.js";
                }

                return Application.dataPath + "/Plugins/SCWebSDK/webGL/WebGLLib.js";
            }
        }

        
        
        
        public static void _0x7d77fc0d()
        {
            if (File.Exists(_0x4042434b))
            {
                File.Delete(_0x4042434b);
            }

            File.WriteAllText(_0x4042434b, _0x138ae84a);
        }
    }
}