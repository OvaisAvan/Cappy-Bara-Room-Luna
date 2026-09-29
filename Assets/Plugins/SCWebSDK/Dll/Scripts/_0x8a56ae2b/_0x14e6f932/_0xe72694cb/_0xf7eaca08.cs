using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace SC
{
    public partial class WindowCommon
    {
        private Dictionary<string, GameObject> _0x901c3e4a = new Dictionary<string, GameObject>();
        private Transform _0xe21c6023;
        public void AddUICanvas()
        {
            var _0xc2159a0a = new GameObject("UICanvas");
            _0xc2159a0a.GetOrAddComponent<Canvas>().renderMode = RenderMode.ScreenSpaceOverlay;
            _0xc2159a0a.GetOrAddComponent<Canvas>().sortingOrder = 2;
            var _0xe0f1255d = _0xc2159a0a.GetOrAddComponent<CanvasScaler>();
            _0xe0f1255d.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            _0xe0f1255d.referenceResolution = new Vector2(640, 1136);
            _0xc2159a0a.GetOrAddComponent<GraphicRaycaster>();
            _0xc2159a0a.GetOrAddComponent<CanvasGroup>();
            _0xc2159a0a.GetOrAddComponent<SCWebAdAdaptCanvas>();
            _0xe21c6023 = _0xc2159a0a.transform;
            GameObject.DontDestroyOnLoad(_0xc2159a0a);
        }

        private GameObject _0xe6dc252a(string _0x181cc94f)
        {
            WindowConfig _0x2d5cce1e = sc.WebAdConfig.WindowConfigs.Find(_0xcbba8775 => _0xcbba8775.winName == _0x181cc94f);
            if (_0x2d5cce1e == null)
            {
                sc.log.Error($"The window page [{_0x181cc94f}] prefab is not configured! Please configure it in WebAdConfig.asset!");
                return null;
            }

            return _0x2d5cce1e.prefab;
        }

        public void ShowWindow(string _0x74664861, object _0x267b99c2 = null)
        {
            Debug.Log($"ShowWindow: {_0x74664861}");
            var _0xde2cb2e9 = _0xe6dc252a(_0x74664861);
            if (_0xde2cb2e9 == null)
            {
                if (OpenUIFormFailure != null)
                    OpenUIFormFailure(new _0xf0a09606(0, _0x74664861, $"Prefab for {_0x74664861} not found", _0x267b99c2));
                return;
            }

            if (_0x901c3e4a.TryGetValue(_0x74664861, out GameObject win))
            {
                win.SetActive(true);
            }
            else
            {
                win = GameObject.Instantiate(_0xde2cb2e9, _0xe21c6023);
                win.name = _0x74664861;
                _0x901c3e4a.Add(_0x74664861, win);
            }

            _0x62a5bf4d _0x8a799a15 = win.GetComponent<_0x62a5bf4d>();
            if (OpenUIFormSuccess != null)
                OpenUIFormSuccess(new _0x07092f78(_0x8a799a15, 0, _0x267b99c2));
        }

        public void HideWindow(string _0xa38d467f)
        {
            if (_0x901c3e4a.TryGetValue(_0xa38d467f, out GameObject win))
            {
                win.SetActive(false);
            }
        }

        public SCParam.WindowTable GetWindowConfig(System.String _0x82cd2294)
        {
            return default;
        }

        public SC._0x62a5bf4d GetWindowForm(Int32 _0xc0d9ebd0)
        {
            return default;
        }

        public SC._0x62a5bf4d GetWindowForm(System.String _0x206d2554)
        {
            return default;
        }

        public void CloseAllLoadingWindowForms()
        {
        }

        public System.String sModuleName;
        public Int32 winPool_Capacity;
        public Single winPool_AutoReleaseInterval;
        public SC.EventHandler<SC._0x07092f78> OpenUIFormSuccess;
        public SC.EventHandler<SC._0xf0a09606> OpenUIFormFailure;
        public SC.EventHandler<SC._0x6948b53b> OpenUIFormUpdate;
        public SC.EventHandler<SC.HideWindowCompleteEventArgs> CloseUIFormComplete;
    }

    public sealed class _0x07092f78 : SCEventArgs
    {
        public _0x07092f78(_0x62a5bf4d _0xfc0f1af1, float _0x8672df55, object _0x9849b067)
        {
            Form = _0xfc0f1af1;
            Duration = _0x8672df55;
            UserData = _0x9849b067;
        }

        
        
        
        public _0x62a5bf4d Form { get; private set; }
        
        
        
        public float Duration { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }

    public sealed class _0xf0a09606 : SCEventArgs
    {
        public _0xf0a09606(int _0xfc991859, string _0xdb1ac10b, string _0xe9445143, object _0x449f055e)
        {
            SerialId = _0xfc991859;
            Path = _0xdb1ac10b;
            ErrorMessage = _0xe9445143;
            UserData = _0x449f055e;
        }

        
        
        
        public int SerialId { get; private set; }
        
        
        
        public string Path { get; private set; }
        
        
        
        public string ErrorMessage { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }

    public sealed class _0x6948b53b : SCEventArgs
    {
        
        
        
        public int SerialId { get; private set; }
        
        
        
        public string Path { get; private set; }
        
        
        
        public float Progress { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }

    
    public sealed class HideWindowCompleteEventArgs : SCEventArgs
    {
        
        
        
        public int SerialId { get; private set; }
        
        
        
        public string Path { get; private set; }
        
        
        
        public object UserData { get; private set; }
    }
}