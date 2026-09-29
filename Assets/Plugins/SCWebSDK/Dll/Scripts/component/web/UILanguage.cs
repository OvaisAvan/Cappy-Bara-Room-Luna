using System.Collections;
using System.Collections.Generic;
using SC;
using UnityEngine;
using UnityEngine.UI;


namespace SC
{
    
    public class UILanguage : MonoBehaviour
    {
        [Header("Image(0.Chinese,1.English)")]
        [SerializeField]
        private List<Sprite> LLang;
        void Start()
        {
            int _0x20faeb77 = sc.language.GetCustomLanguageIdx();
            if (LLang[_0x20faeb77] && gameObject.GetComponent<Image>())
            {
                gameObject.GetComponent<Image>().sprite = LLang[_0x20faeb77];
            }
        }

        void Update()
        {
        }
    }
}