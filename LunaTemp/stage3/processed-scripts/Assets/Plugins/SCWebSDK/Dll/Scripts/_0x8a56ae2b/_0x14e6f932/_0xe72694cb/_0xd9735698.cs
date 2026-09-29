using UnityEngine;

namespace SC
{
    
    public class WindowLogic : BaseNode
    {
        public override void SCAwake()
        {
            OnInit(null);
        }

        public override void SCOnEnable()
        {
            OnShow(null);
        }

        public override void SCOnDestroy()
        {
            base.SCOnDestroy();
        }

        
        public virtual void OnUpdate(float _0x1f65cefc, float _0xf3b5a33f)
        {
        }

        
        public virtual void OnInit(object _0x9cfd58b6)
        {
        }

        
        public virtual void OnShow(object _0x2dba71d1)
        {
        }

        
        public virtual void OnHide()
        {
        }

        
        public virtual void OnHide(object _0x7f117f7c = null)
        {
        }

        public virtual void OnRecycle()
        {
        }

        
        public virtual void Hide(object _0xae420eaf, bool _0x0aaef2bc)
        {
            StopAllCoroutines();
            sc.window.HideWindow(gameObject.name);
        }

        
        public virtual void Hide(object _0x43f0c5d8 = null)
        {
            this.Hide(_0x43f0c5d8, false);
        }
    }
}