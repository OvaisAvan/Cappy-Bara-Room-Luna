namespace SCParam
{
    using UnityEngine;
    using SCParam;
    using System.Collections.Generic;

    [System.Serializable]
    public partial class StageRewardTable : SCParam.SCDataBase
    {
        
        
        
        public string id;
        
        
        
        public int sectionID;
        
        
        
        public int starNum;
        
        
        
        public List<string> awardsList;
        
        
        
        public List<int> awardsCountList;
    }
}