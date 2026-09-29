using System;
using System.Text;
using UnityEngine;
using UnityEngine.UI;

namespace SC
{
    
    
    
    
    
    internal class _0x919a0128 : MonoBehaviour
    {
        
        
        
        private float _0x3d16ae21 = 0f;
        
        
        
        public float fUpdateDeltaTime = 0.1f;
        
        
        
        private int _0xa9ad034d = 0;
        
        
        
        private float _0x03233fdf = 0.0f;
        public Color textColor = Color.white;
        void Start()
        {
            this._0x3d16ae21 = Time.realtimeSinceStartup;
            
            Canvas _0x26f12bd8 = _0x043c7cd5();
            _0xf0140553 = _0x365896fe(_0x26f12bd8);
        }

        void Update()
        {
            _0xa9ad034d++;
            if (Time.realtimeSinceStartup - this._0x3d16ae21 >= this.fUpdateDeltaTime)
            {
                this._0x03233fdf = this._0xa9ad034d / (Time.realtimeSinceStartup - this._0x3d16ae21);
                this._0xa9ad034d = 0;
                this._0x3d16ae21 = Time.realtimeSinceStartup;
                _0x89231ff5();
            }
        }

        
        
        
        private string _0xcbeb81d1;
        
        
        
        private long _0x1bdf477a = 0;
        
        
        
        private long _0xbde0071f = 0;
        
        
        
        private long _0x6d4c0805;
        
        
        
        private Vector3 _0xf2e924eb = Vector3.one;
        Text _0xf0140553 = null;
        void _0x89231ff5()
        {
            _0xcbeb81d1 = "";
            _0x6d4c0805 = UnityEngine.Profiling.Profiler.GetMonoUsedSizeLong();
            _0xcbeb81d1 += " FPS: " + _0x03233fdf.ToString("f0") + "\n";
            _0xbde0071f = UnityEngine.Profiling.Profiler.GetTotalReservedMemoryLong();
            _0x1bdf477a = UnityEngine.Profiling.Profiler.GetTotalAllocatedMemoryLong();
            _0xcbeb81d1 += " MonoHeap:" + GetByteLengthString(UnityEngine.Profiling.Profiler.GetMonoHeapSizeLong()) + "\n";
            _0xcbeb81d1 += " MonoUsed:" + GetByteLengthString(_0x6d4c0805) + "\n";
            _0xcbeb81d1 += " MemoryUsed:" + GetByteLengthString(_0x1bdf477a) + "\n";
            _0xcbeb81d1 += " MemoryNoUsed:" + GetByteLengthString(UnityEngine.Profiling.Profiler.GetTotalUnusedReservedMemoryLong()) + "\n";
            _0xcbeb81d1 += " AllMemory:" + GetByteLengthString(_0xbde0071f) + "\n";
            _0xcbeb81d1 += " ObjectCount:" + GameObject.FindObjectsOfType<UnityEngine.GameObject>().Length;
            _0xf0140553.text = _0xcbeb81d1;
        }

        
        
        
        
        public string GetUseRange()
        {
            _0xbde0071f = UnityEngine.Profiling.Profiler.GetTotalReservedMemoryLong();
            _0x1bdf477a = UnityEngine.Profiling.Profiler.GetTotalAllocatedMemoryLong();
            string _0x8e1e0c09 = GetByteLengthString(_0x1bdf477a, 0) + "/" + GetByteLengthString(_0xbde0071f, 0);
            _0x8e1e0c09 = _0x8e1e0c09.Replace(" ", "").Replace("B", "");
            return _0x8e1e0c09;
        }

        Canvas _0x043c7cd5()
        {
            
            GameObject _0xae402d45 = new GameObject("TopCanvas");
            Canvas _0x5acf2f59 = _0xae402d45.AddComponent<Canvas>();
            _0x5acf2f59.renderMode = RenderMode.ScreenSpaceOverlay;
            _0xae402d45.AddComponent<CanvasScaler>();
            _0xae402d45.AddComponent<GraphicRaycaster>();
            _0x5acf2f59.sortingOrder = int.MaxValue;
            _0x5acf2f59.transform.position = new Vector3(0, 0, 0);
            return _0x5acf2f59;
        }

        Text _0x365896fe(Canvas _0x07da12c5)
        {
            
            GameObject _0xd6d44437 = new GameObject("BottomLeftText");
            _0xd6d44437.transform.SetParent(_0x07da12c5.transform);
            
            Text _0xfd7e4896 = _0xd6d44437.AddComponent<Text>();
            _0xfd7e4896.font = this.GetComponent<Text>().font;
            _0xfd7e4896.color = textColor;
            _0xfd7e4896.fontSize = 28;
            _0xfd7e4896.alignment = TextAnchor.LowerLeft;
            _0xfd7e4896.raycastTarget = false;
            
            RectTransform _0x9913bfa3 = _0xd6d44437.GetComponent<RectTransform>();
            _0x9913bfa3.anchorMin = Vector2.zero;
            _0x9913bfa3.anchorMax = Vector2.zero;
            _0x9913bfa3.pivot = Vector2.zero;
            _0x9913bfa3.sizeDelta = new Vector2(400, 700);
            var _0xb857d1dc = GetAdapterNodeZoomScale();
            _0xf2e924eb.x = _0xf2e924eb.y = _0xb857d1dc;
            _0xd6d44437.transform.localScale = _0xf2e924eb;
            return _0xfd7e4896;
        }

        public static string GetByteLengthString(long byteLength, int iFCount = 2)
        {
            string _0x72c6c3ec = "{0:F" + iFCount + "} ";
            if (byteLength < 1024L)
                return format("{0} B", byteLength);
            if (byteLength < 1048576L)
                return format(_0x72c6c3ec + "KB", byteLength / 1024f);
            if (byteLength < 1073741824L)
                return format(_0x72c6c3ec + "MB", byteLength / 1048576f);
            if (byteLength < 1099511627776L)
                return format(_0x72c6c3ec + "GB", byteLength / 1073741824f);
            if (byteLength < 1125899906842624L)
                return format(_0x72c6c3ec + "TB", byteLength / 1099511627776f);
            if (byteLength < 1152921504606846976L)
                return format(_0x72c6c3ec + "PB", byteLength / 1125899906842624f);
            return format(_0x72c6c3ec + "EB", byteLength / 1152921504606846976f);
        }

        [ThreadStatic]
        private static StringBuilder _0x869b7f06;
        
        public static string format<T>(string format, T _0x720b5646)
        {
            _0x47da96ca();
            _0x869b7f06.Length = 0;
            format = ConvertFormat(format);
            _0x869b7f06.AppendFormat(format, _0x720b5646);
            return _0x869b7f06.ToString();
        }

        private static void _0x47da96ca()
        {
            if (_0x869b7f06 != null)
                return;
            _0x869b7f06 = new StringBuilder(1024);
        }

        
        
        
        
        public static string ConvertFormat(string _0xca923c49)
        {
            var _0x1c015193 = _0xca923c49.Length;
            int _0xf1831a10 = _0xca923c49.IndexOf("%s");
            int _0x31ea231e = 0;
            int _0x21c315cf = _0xf1831a10;
            while (_0x21c315cf < _0x1c015193 && _0x21c315cf != -1)
            {
                _0xca923c49 = _0xca923c49.Substring(0, _0x21c315cf) + "{" + _0x31ea231e + "}" + _0xca923c49.Substring(_0x21c315cf + 2);
                _0x31ea231e++;
                _0x21c315cf = _0xca923c49.IndexOf("%s");
                _0x1c015193 = _0xca923c49.Length;
                if (_0x21c315cf == -1)
                    break;
            }

            return _0xca923c49;
        }

        private Vector2 _0x2bcf3dcc = Vector2.zero;
        public Vector2 designSize
        {
            get
            {
                if (_0x2bcf3dcc == Vector2.zero)
                {
                    _0x2bcf3dcc = sc.web.bPortrait ? new Vector2(640, 1136) : new Vector2(1136, 640);
                }

                return _0x2bcf3dcc;
            }
        }

        private float _0xb79dc8b2 = 0;
        public float GetAdapterNodeZoomScale()
        {
            if (_0xb79dc8b2 == 0)
            {
                var _0xd689cad7 = this.designSize;
                float _0x2cae3709 = _0xd689cad7.x;
                float _0xb2d5e9c2 = _0xd689cad7.y;
                if (sc.web.bPortrait)
                {
                    
                    var _0x4b9259e4 = Screen.height / _0xb2d5e9c2;
                    if (_0x2cae3709 * _0x4b9259e4 > Screen.width)
                    {
                        _0x4b9259e4 = _0x4b9259e4 * (Screen.width / (_0x2cae3709 * _0x4b9259e4));
                    }

                    if (_0xb2d5e9c2 * _0x4b9259e4 > Screen.height)
                    {
                        _0x4b9259e4 = _0x4b9259e4 * (Screen.height / (_0xb2d5e9c2 * _0x4b9259e4));
                    }

                    _0xb79dc8b2 = _0x4b9259e4;
                }
                else
                {
                    
                    var _0x84fed854 = Screen.width / _0x2cae3709;
                    if (_0xb2d5e9c2 * _0x84fed854 > Screen.height)
                    {
                        _0x84fed854 = _0x84fed854 * (Screen.height / (_0xb2d5e9c2 * _0x84fed854));
                    }

                    if (_0x2cae3709 * _0x84fed854 > Screen.width)
                    {
                        _0x84fed854 = _0x84fed854 * (Screen.width / (_0x2cae3709 * _0x84fed854));
                    }

                    _0xb79dc8b2 = _0x84fed854;
                }
            }

            return _0xb79dc8b2;
        }
    }
}