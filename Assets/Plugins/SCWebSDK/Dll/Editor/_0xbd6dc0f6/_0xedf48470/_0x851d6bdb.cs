using UnityEngine;
using UnityEditor;
using SC;

namespace _0xa07739b8
{
    
    
    
    [CustomEditor(typeof(SCWebAdAdaptNode))]
    public class _0xccfcdcaf : Editor
    {
        public override void OnInspectorGUI()
        {
            if (GUILayout.Button("save data"))
            {
                SCWebAdAdaptNode _0x6fcd59d1 = (SCWebAdAdaptNode)target;
                _0x6fcd59d1.SaveData(_0xb1c51c50._0xaf79d3b5);
                _0xc9be004e._0x2e1dbaf8(_0x6fcd59d1);
                Debug.Log($"save:{_0xc9be004e._0x4cfb25ca(_0x6fcd59d1.transform)}");
            }

            base.OnInspectorGUI();
        }
    }
}