namespace SCParam
{
    using UnityEngine;
    using SCParam;
    using System.Collections.Generic;

    [System.Serializable]
    public partial class StageLevelTable : SCParam.SCDataBase
    {
        
        
        
        public string stageID;
        
        
        
        public string nameLangId;
        
        
        
        public string nextID;
        
        
        
        public int sectionID;
        
        
        
        public List<string> awardsWin;
        
        
        
        public List<int> awardsWinCount;
        
        
        
        public List<string> awardsLose;
        
        
        
        public List<int> awardsLoseCount;
    }
}