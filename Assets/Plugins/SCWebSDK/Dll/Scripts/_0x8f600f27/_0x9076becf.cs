using System;
using System.Reflection;
using UnityEngine;
using UnityEngine.EventSystems;

namespace SC
{
    public class _0xbcb2c5eb : MonoBehaviour
    {
        private void OnApplicationFocus(bool _0x1c24a06f)
        {
        
        }

        private void OnApplicationPause(bool _0xce353ff2)
        {
        
        }

        private static _0xbcb2c5eb _0xb2650b9c;
        
        
        
        
        public static _0xbcb2c5eb GetInstance()
        {
            if (_0xb2650b9c != null)
                return _0xb2650b9c;
            GameObject _0xb56ec498 = new GameObject("SCManager");
            _0xb2650b9c = _0xb56ec498.AddComponent<_0xbcb2c5eb>();
            DontDestroyOnLoad(_0xb56ec498);
            sc.window.AddUICanvas();
            return _0xb2650b9c;
        }

        public void Init(Action _0xc824251b)
        {
            Application.runInBackground = true; 
            Application.focusChanged += OnApplicationFocus;
            sc.web._0x5dba4681();
            
            
            
            
            
            
            string _0xdb009a41 = sc.web._0x07d4f8b2();
            sc.log.Info("sdk ver:" + sc.SDKVERSION);
            sc.log.Info("sdk Obfuscated:" + sc.BObfuscated);
            sc.loom.DelayTimeBackCall(() =>
            {
                sc.log.Info("SDK Init Complete");
                sc.loom.DelayTimeBackCall(() =>
                {
                    string _0x59257ae4 = $"More than {sc.WebAdConfig.fDebugCheckEnterGameTime} seconds have passed without calling sc.sdk.OnEnterGameSuccess() Did I forget to call it!";
                    if (sc.bEditor)
                    {
                        sc.log.Error(_0x59257ae4);
                    }
                    else
                    {
                        sc.log.Warning(_0x59257ae4);
                    }

                    sc.web._0xd1f9d9fb("DelayTimeBackCall");
                }, sc.WebAdConfig.fDebugCheckEnterGameTime, -100);
                if (_0xc824251b != null)
                    _0xc824251b.Invoke();
            });
        }

        void Update()
        {
            sc.web.Update();
        }

        private void OnApplicationQuit()
        {
            Debug.Log("Application quitting");
            if (this != null)
            {
            
            
            }
        }

        
        
        
        
        public void OnJSCallback(string _0x68c64e67)
        {
            sc.web.OnJSCallback(_0x68c64e67);
        }
    }
}