mergeInto(LibraryManager.library, {
    scDownload: function () {
        window.___scDownload && window.___scDownload();
    },
    scDownloadCallBack: function () {
        console.log("[sc] : go download");
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
        var sName = document.getElementById("playable");
        if (sName && sName.content === "google") {
            console.log("[sc] : is google");
            if (window.location.href.indexOf('file://') != 0) {
                console.log("[sc] : ExitApi.exit");
                (typeof ExitApi != "undefined") && ExitApi.exit && ExitApi.exit();
            }
        }
    },

    scDoJSFun: function (sFun) {
        var str = UTF8ToString(sFun);
        var result = "";
        if (str) {
            try {
                result = eval(str) + "";
            } catch (e) {
                console.warn("[sc] scDoJSFun error: " + e.message);
            }
        }
        var bufferSize = lengthBytesUTF8(result) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(result, buffer, bufferSize);
        return buffer;
    },

    scGameEnd: function () {
        console.log("[sc] : step last  C# game end");
        window.scGameEnded = true;
        window.gameEnd && window.gameEnd();
    },

    scGameReady: function () {
        if (window.scGameReady) return;
        console.log("C# game ready");
        window.scGameReady = true;
        window.gameReady && window.gameReady();
        window.gameReady = function () {
            console.log("[sc] : game ready already called");
        };
    },

    scGameStart: function () {
        console.log("[sc] : C# gameStart");
        window.gameStart && window.gameStart();
    },

    scGetWebPlatform: function () {
        var platform = "unknown";
        var buffer = 0;
        try {
            var customPlatform;
            var pElement = document.getElementById("playable");
            if (pElement) {
                customPlatform = pElement.content;
            }
            if (customPlatform) {
                platform = customPlatform;
            }
            buffer = _malloc(platform.length + 1);
            stringToUTF8(platform, buffer, platform.length + 1);
        } catch (e) {
            if (buffer) _free(buffer);
            buffer = _malloc(5);
            stringToUTF8("error", buffer, 5);
        }
        return buffer;
    },

    scGetWebPlatformIdx: function () {
        var pElement = document.getElementById("playable");
        if (pElement) {
            var platform = pElement.content;
            console.log("[sc] scGetWebPlatformIdx : platform" + platform);
            if (platform === "mintegral") {
                return 0;
            } else if (platform === "applovin") {
                return 1;
            } else if (platform === "NewsBreak") {
                return 2;
            } else if (platform === "google") {
                return 3;
            }
        }
        return -1;
    },

    scInit: function () {
        if (typeof window !== "undefined") {
            window.___scInit && window.___scInit();
        }
    }

});

