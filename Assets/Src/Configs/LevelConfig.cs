using UnityEngine;

/// <summary>
/// 仅保留第八关配置，原编号 8 保持不变。
/// </summary>
[CreateAssetMenu(fileName = "LevelConfig", menuName = "StickerGame/LevelConfig", order = 1)]
public class LevelConfig : ScriptableObject {
    [System.Serializable]
    public class LevelData {
        public int levelID;
        public GameObject levelPrefab;
        public string levelPrefabPath;
        public string imageFolderPath;
        public Sprite backgroundImage;
    }

    public LevelData[] levelDataList;

    public LevelData GetLevelData(int levelID) {
        if (levelDataList == null) return null;
        foreach (LevelData data in levelDataList) {
            if (data != null && data.levelID == levelID) return data;
        }
        return null;
    }

    public GameObject GetLevelPrefab(int levelID) {
        return GetLevelData(levelID)?.levelPrefab;
    }
}
