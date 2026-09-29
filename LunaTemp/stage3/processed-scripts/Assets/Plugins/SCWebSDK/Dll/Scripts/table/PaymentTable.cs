using SC;

namespace SCParam
{
    
    public class NotifyBuyCloseAd
    {
        public OnSCFunctionCallback_Void fSuccess;
        public OnSCFunctionCallback_Void fError;
        public OnSCFunctionCallback_Void fClose;
    }

    public class PaymentTable : SCDataBase
    {
        public int ID; 
        public string PayType; 
        public string Name; 
        public string Money; 
        public string MoneyText; 
        public int Gold; 
        public string Text; 
        public int Group; 
        
        
        
        
        
        
        
        
        
        
        public string BuyType;
        
        
        
        public string DscControlName;
        
        
        
        public string GameType;
        
        public double OrgMoney;
        
        
        
        public string Image;
        
        
        
        public int ViewOrder;
        
        
        
        public int Ratio;
        
        
        
        public int IsNotConsumables;
        private int _buyCount;
        public int BuyCount
        {
            get
            {
                if (this._buyCount == 0)
                {
                    int.TryParse(Money, out this._buyCount);
                }

                return this._buyCount;
            }
        }

        public PaymentTable()
        {
        }

        
        
        
        
        
        
        
        public PaymentTable(int ID, string Image, string Money, int _0x64e8655a)
        {
            this.PayType = "" + ID;
            this.ID = ID;
            this.Image = "CommonShopCoinsImg" + Image;
            this.Money = Money;
            this.Gold = _0x64e8655a;
            this.BuyType = "BuyGold";
        }
    }
}