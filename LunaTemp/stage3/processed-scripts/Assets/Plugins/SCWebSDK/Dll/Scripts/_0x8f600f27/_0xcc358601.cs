using UnityEngine;

namespace SC
{
    
    
    
    public partial class _0x80279dc2
    {
        
        
        
        
        public bool BMultiTouchEnabled
        {
            get
            {
                return Input.multiTouchEnabled;
            }

            set
            {
                Input.multiTouchEnabled = value;
            }
        }

        
        
        
        
        public bool IsPlayAdsPlatform()
        {
            
            string _0x49928eed = @"(function(){
                if (window.mraid && window.mraid.open) return 'applovin';
                if (typeof ExitApi !== 'undefined' && ExitApi.exit) return 'google';
                if (window.install) return 'mintegral';
                return '';
            })()";
            string _0x737b06c1 = sc.web.webGLLib.scDoJSFun(_0x49928eed);
            return !string.IsNullOrEmpty(_0x737b06c1);
        }
    }
}