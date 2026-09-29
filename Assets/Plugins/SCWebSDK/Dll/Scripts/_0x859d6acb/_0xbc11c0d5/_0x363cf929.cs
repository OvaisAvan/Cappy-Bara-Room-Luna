using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

namespace SC
{
    public class _0xc1e449cf : MonoBehaviour
    {
        void Awake()
        {
            
            var _0xaac2fc2b = GetComponent<Button>();
            _0xaac2fc2b.onClick.RemoveAllListeners();
            _0xaac2fc2b.onClick.AddListener(onClick_BtnDownload);
        }

        public void onClick_BtnDownload()
        {
            sc.web.GoDownload();
        }
    }
}