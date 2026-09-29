namespace SCParam
{
    using UnityEngine;
    using SCParam;
    using System.Collections.Generic;

    [System.Serializable]
    public partial class GiftTable : SCParam.SCDataBase
    {
        
        
        
        public string id;
        
        
        
        public string type;
        
        
        
        public string extraItemId;
        
        
        
        public int extraItemCount;
        
        
        
        public List<string> itemIdList;
        
        
        
        public List<int> itemCountList;
        
        
        
        public List<int> rateList;
    }
}