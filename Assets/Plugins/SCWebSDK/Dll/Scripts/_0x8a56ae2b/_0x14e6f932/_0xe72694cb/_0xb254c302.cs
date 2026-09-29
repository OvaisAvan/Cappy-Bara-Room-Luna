namespace SC
{
    
    
    
     
    public class WindowNotify : WindowLogic
    {
        
        protected virtual void onClick_BtnClose()
        {
        }

        
        
        
        
        
        public override void Hide(object _0xaad38028 = null)
        {
            gameObject.SetActive(false);
        }
    }
}