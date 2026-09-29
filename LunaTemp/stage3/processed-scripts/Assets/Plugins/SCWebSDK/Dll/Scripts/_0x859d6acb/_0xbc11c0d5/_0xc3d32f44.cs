using System.Collections;
using System.Collections.Generic;
using SC;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Text))]
[AddComponentMenu("sc-sdk/常用组件/SCLanguageComp-多语言支持")]
public class _0x77cefece : MonoBehaviour
{
    
    
    
    private static readonly string _0xe04587a0 = "\u00A0";
    private Text _0x6f7ab55a;
    private string _0x21a4030c = "";
    void Awake()
    {
        _0x6f7ab55a = GetComponent<Text>();
        _0x21a4030c = _0x6f7ab55a.text;
        _0x7038096a();
    }

    void OnEnable()
    {
        _0x7038096a();
    }

    
    
    
    internal void _0x7038096a()
    {
        _0x769f23e9(sc.language.Get(_0x21a4030c).Replace(" ", _0xe04587a0));
    }

    
    
    
    
    internal void _0x769f23e9(string _0x54031a98)
    {
        _0x6f7ab55a.text = _0x54031a98;
    }
}