using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 第八关本轮数据。每次开始清空，不读取原版关卡、金币或装扮存档。
/// </summary>
public class DataManager : MonoBehaviour {
    public const int FixedLevelID = 8;

    [System.Serializable]
    public class LevelData {
        public string prefabName;
        public bool isCompleted;
    }

    public LevelConfig levelConfig;
    public GameConfig gameConfig;
    public static DataManager Instance { get; private set; }
    private readonly List<LevelData> currentRun = new List<LevelData>();

    void Awake() {
        Instance = this;
    }

    public static void ClearInstance() {
        Instance = null;
    }

    public void Initialize() {
        ResetRun();
    }

    public void ResetRun() {
        currentRun.Clear();
    }

    public int GetCurrentLevelID() {
        return FixedLevelID;
    }

    public List<LevelData> GetLevelDataList(string levelName) {
        return currentRun;
    }

    public void SaveLevelData(string levelName, LevelData levelData) {
        int index = currentRun.FindIndex(item => item.prefabName == levelData.prefabName);
        if (index >= 0) currentRun[index] = levelData;
        else currentRun.Add(levelData);
    }
}
