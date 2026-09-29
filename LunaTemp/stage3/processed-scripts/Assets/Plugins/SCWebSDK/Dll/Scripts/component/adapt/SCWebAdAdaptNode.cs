using SC;
using UnityEngine;
using UnityEngine.UI;

namespace SC
{
    
    
    
    
    [AddComponentMenu("sc-sdk/Adapt/SCWebAdAdaptNode")]
    
    public class SCWebAdAdaptNode : MonoBehaviour
    {
        
        
        
        
        [SerializeField]
        public _0xda5e030f landscapeData = new _0xda5e030f();
        
        
        
        
        [SerializeField]
        public _0xda5e030f portraitData = new _0xda5e030f();
        private RectTransform _0x2c689f62;
        protected RectTransform _0x3070e37e
        {
            get
            {
                if (_0x2c689f62 == null)
                {
                    _0x2c689f62 = GetComponent<RectTransform>();
                }

                return _0x2c689f62;
            }
        }

        private void Start()
        {
            ApplyAdapt(sc.web.bPortrait);
        }

        void OnEnable()
        {
            ApplyAdapt(sc.web.bPortrait);
            sc.web.OnScreenOrientationChanged += ApplyAdapt;
        }

        void OnDisable()
        {
            sc.web.OnScreenOrientationChanged -= ApplyAdapt;
        }

        
        
        
        public void SaveData(bool _0x5c7b0c8a)
        {
            if (_0x5c7b0c8a)
            {
                portraitData = _0x74b2400b();
            }
            else
            {
                landscapeData = _0x74b2400b();
            }
        }

        
        
        
        
        private _0xda5e030f _0x74b2400b()
        {
            _0xda5e030f _0x2c8fca6a = new _0xda5e030f
            {
                bEmpty = false,
                position = transform.position,
                rotation = transform.rotation,
                scale = transform.localScale,
                anchoredPosition = _0x3070e37e.anchoredPosition,
                sizeDelta = _0x3070e37e.sizeDelta,
                anchorMin = _0x3070e37e.anchorMin,
                anchorMax = _0x3070e37e.anchorMax,
                pivot = _0x3070e37e.pivot,
            };
            return _0x2c8fca6a;
        }

        
        
        
        
        public void ApplyAdapt(bool _0xd2abf547)
        {
            _0x8c9be201(_0xd2abf547 ? portraitData : landscapeData);
        }

        
        
        
        
        private void _0x8c9be201(_0xda5e030f _0x030a4f5e)
        {
            if (_0x030a4f5e == null || _0x030a4f5e.bEmpty)
            {
                return;
            }

            
            transform.position = _0x030a4f5e.position;
            transform.rotation = _0x030a4f5e.rotation;
            transform.localScale = _0x030a4f5e.scale;
            _0x3070e37e.anchoredPosition = _0x030a4f5e.anchoredPosition;
            _0x3070e37e.sizeDelta = _0x030a4f5e.sizeDelta;
            _0x3070e37e.anchorMin = _0x030a4f5e.anchorMin;
            _0x3070e37e.anchorMax = _0x030a4f5e.anchorMax;
            _0x3070e37e.pivot = _0x030a4f5e.pivot;
        }
    }
}