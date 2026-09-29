using System;
using System.Collections;
using System.Reflection;
using System.Runtime.InteropServices;
using SC;
using UnityEngine;
using UnityEngine.EventSystems;

namespace SC
{
    public partial class _0x0b275e47
    {
        
        
        
        
         
        public event Action OnStartGameLogic;
        
        
        
         
        public event Action OnGameEndAction;
        
        
        
         
        public event Action OnGameCloseAction;
        
        public event Action<bool> OnScreenOrientationChanged;
        
        public bool bPortrait = Screen.width <= Screen.height;
        
        private static string _0x588c6ec3 = "";
        
        
        
        
        internal string _0x07d4f8b2()
        {
            if (_0x588c6ec3 != "")
            {
                return _0x588c6ec3;
            }

            _0x588c6ec3 = _0xfb4bfef0();
            sc.log.Info("Current platform:" + _0x588c6ec3);
            return _0x588c6ec3;
        }

        internal bool _0x3104f99b()
        {
            string _0x9d9a2610 = _0x07d4f8b2();
            return _0x9d9a2610 == "mintegral";
        }

        internal bool _0x0016dd0d()
        {
            string _0x8acab258 = _0x07d4f8b2();
            return _0x8acab258 == "applovin";
        }

        internal bool _0x4c5a3e79()
        {
            string _0xd58a7721 = _0x07d4f8b2();
            return _0xd58a7721 == "NewsBreak";
        }

        internal bool _0x9b35e2da()
        {
            string _0x67289227 = _0x07d4f8b2();
            return _0x67289227 == "google";
        }

        
        
        
        
        
        internal bool _0x1be12bff()
        {
            return !_0x3104f99b();
        }

        
        
        
        
        
        internal bool _0xf6b7e58d()
        {
            return !(_0x0016dd0d() || _0x4c5a3e79());
        }

        
        private bool _0x2c92b556 = false;
        public static bool bGameReady = false;
        private static bool _0xf1cfe009 = false;
        private static bool _0x357bb2ba = false;
        private static bool _0xda4b0623 = false;
        public float idleTime = 0;
        
        
        
        
        public void OnJSCallback(string _0xee17f505)
        {
            sc.log.Dev("JS callback data: " + _0xee17f505);
            
            if (_0xee17f505 == "UnityInstanceEnd")
            {
            
            }
            else if (_0xee17f505 == "gameStart")
            {
                sc.log.Info("Web call start");
                _0xe50a16b2();
            }
            else if (_0xee17f505 == "videoEnd")
            {
                sc.log.Info("Video playback completed.");
            }
            else if (_0xee17f505 == "gameClose")
            {
                sc.log.Info("Web call close");
                
#if !UNITY_LUNA
                AudioListener.pause = true;
#endif
                if (OnGameCloseAction != null)
                    OnGameCloseAction.Invoke();
            }
        }

        
        
        
        internal void _0xd1f9d9fb(string _0x153021fb)
        {
            if (bGameReady)
            {
                sc.log.Warning("GameReady has ended." + _0x153021fb);
                return;
            }

            bGameReady = true;
            sc.loom.StopDelayedCall(-100);
            sc.log.Info("[sc] : step 3 GameReady " + _0x153021fb);
            sc.loom.EndOfFrameBackCall(() =>
            {
                sc.log.Info("[sc] : step 4 scGameReady " + _0x153021fb);
                if (_0x1be12bff())
                {
                    sc.log.Info("Direct start");
                    _0x617df61b();
                    _scGameStart();
                }
                else
                {
                    sc.log.Info("Waiting for start");
                    _0x617df61b();
                }
            });
        }

        
        
        
        
        private void _0xe50a16b2()
        {
            if (_0xf1cfe009)
                return;
            _0xf1cfe009 = true;
            sc.log.Info("[sc] : step 5 startGame");
            if (_0xf6b7e58d())
            {
                _sc_startGameLogic();
            }
            else
            {
                sc.log.Info("Waiting for screen touch to start");
            }
        }

        
        
        
        public void _sc_startGameLogic()
        {
            if (_0x357bb2ba)
                return;
            _0x357bb2ba = true;
            sc.log.Info("[sc] : step 6 startGameLogic");
            idleTime = 0f;
#if !UNITY_LUNA
            if (!Application.isFocused)
            {
                sc.log.Info("[sc] :isFocused is false,force focus");
                
                var _0x2a639810 = GameObject.FindObjectsOfType<EventSystem>();
                foreach (var eventSystem in _0x2a639810)
                {
                    var _0xa78ee665 = typeof(EventSystem).GetMethod("OnApplicationFocus", BindingFlags.NonPublic | BindingFlags.Instance);
                    _0xa78ee665.Invoke(eventSystem, new object[] { true });
                }

                MethodInfo _0x25973c0c = typeof(Application).GetMethod("InvokeFocusChanged", BindingFlags.Static | BindingFlags.NonPublic);
                if (_0x25973c0c != null)
                {
                    _0x25973c0c.Invoke(null, new object[] { true }); 
                }
            }

#endif
            if (OnStartGameLogic != null)
                OnStartGameLogic.Invoke();
        }

        
        
        
        private void _0x57c702d2()
        {
            if (!_0xf1cfe009)
                return;
            if (_0xea696b74.IsMaskShow)
                return;
            if (Input.anyKeyDown || Input.anyKey)
            {
                if (_0x2c92b556)
                {
                    
                    
                    return;
                }

                _sc_startGameLogic();
                idleTime = 0f;
                
                if (!_0xda4b0623)
                {
                    _0xda4b0623 = true;
#if !UNITY_LUNA
                    
                    if (!AudioListener.pause)
                    {
                        AudioListener.pause = true;
                        sc.loom.DelayTimeBackCall(() =>
                        {
                            AudioListener.pause = false;
                        }, 0.01f);
                    }
#endif
                }
            }

            if (!_0x357bb2ba || _0x2c92b556)
                return;
            idleTime += Time.unscaledDeltaTime;
            if (idleTime >= sc.WebAdConfig.IAutoSettleDuration)
            { 
                GameEnd();
            }
        }

        
        public void GameEnd()
        {
            _0x2c92b556 = true;
            
            if (OnGameEndAction != null)
                OnGameEndAction.Invoke();
            _0xb6877402();
        }

        
        
        
        private void _0x423fe97e()
        {
            
            if (Screen.width > Screen.height)
            {
                if (bPortrait)
                {
                    sc.log.Info("Current is landscape");
                    bPortrait = false;
                    if (OnScreenOrientationChanged != null)
                        OnScreenOrientationChanged.Invoke(bPortrait);
                }
            }
            else
            {
                if (!bPortrait)
                {
                    sc.log.Info("Current is portrait");
                    bPortrait = true;
                    if (OnScreenOrientationChanged != null)
                        OnScreenOrientationChanged.Invoke(bPortrait);
                }
            }
        }

        internal void Update()
        {
            _0x423fe97e();
            _0x57c702d2();
        }

        
        
        
         
        public void ResetStartDownloadTimer()
        {
            idleTime = 0f;
        }
    }
}