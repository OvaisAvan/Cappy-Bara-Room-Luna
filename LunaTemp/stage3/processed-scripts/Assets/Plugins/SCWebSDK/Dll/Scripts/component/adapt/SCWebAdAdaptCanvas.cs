using SC;
using UnityEngine;
using UnityEngine.UI;

namespace SC
{
    
    
    
    
    [AddComponentMenu("sc-sdk/Adapt/SCWebAdAdaptCanvas")]
    [RequireComponent(typeof(Canvas))]
    
    public class SCWebAdAdaptCanvas : MonoBehaviour
    {
        private CanvasScaler _0x1fecd093;
        protected CanvasScaler _0xb4a8f11c
        {
            get
            {
                if (_0x1fecd093 == null)
                {
                    _0x1fecd093 = GetComponent<CanvasScaler>();
                }

                return _0x1fecd093;
            }
        }

        void Awake()
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

        
        
        
        
         
        public void ApplyAdapt(bool _0x999a060c)
        {
            
            var _0x9a28f5e2 = _0xb4a8f11c.referenceResolution;
            bool _0x5b559f74 = _0x9a28f5e2.x > _0x9a28f5e2.y;
            if ((_0x999a060c && _0x5b559f74) || (!_0x999a060c && !_0x5b559f74))
            {
                _0xb4a8f11c.referenceResolution = new Vector2(_0x9a28f5e2.y, _0x9a28f5e2.x);
            }
        }
    }
}