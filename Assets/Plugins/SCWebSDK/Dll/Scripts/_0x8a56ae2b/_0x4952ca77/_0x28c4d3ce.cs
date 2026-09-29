using UnityEngine;


namespace SC.Utility
{
    public static class _0x128f8877
    {
#region Easing Types
        public enum _0x354bf775
        {
            [global::UnityEngine.InspectorName("None")]
            _0x71c0978f,
            [global::UnityEngine.InspectorName("linear")]
            _0x3a0b7899,
            [global::UnityEngine.InspectorName("clerp")]
            _0xdd943681,
            [global::UnityEngine.InspectorName("spring")]
            _0x9797a54f,
            [global::UnityEngine.InspectorName("easeInQuad")]
            _0xcae5507d,
            [global::UnityEngine.InspectorName("easeOutQuad")]
            _0x53daa11d,
            [global::UnityEngine.InspectorName("easeInOutQuad")]
            _0x7a074438,
            [global::UnityEngine.InspectorName("easeInCubic")]
            _0x66a7052c,
            [global::UnityEngine.InspectorName("easeOutCubic")]
            _0x4d5fb599,
            [global::UnityEngine.InspectorName("easeInOutCubic")]
            _0xb8f9b146,
            [global::UnityEngine.InspectorName("easeInQuart")]
            _0x70d69a8d,
            [global::UnityEngine.InspectorName("easeOutQuart")]
            _0xd69b0e95,
            [global::UnityEngine.InspectorName("easeInOutQuart")]
            _0xd3660b45,
            [global::UnityEngine.InspectorName("easeInQuint")]
            _0xd9d2dc57,
            [global::UnityEngine.InspectorName("easeOutQuint")]
            _0x376ff549,
            [global::UnityEngine.InspectorName("easeInOutQuint")]
            _0x00685c0a,
            [global::UnityEngine.InspectorName("easeInSine")]
            _0x5ef4f666,
            [global::UnityEngine.InspectorName("easeOutSine")]
            _0x7366d657,
            [global::UnityEngine.InspectorName("easeInOutSine")]
            _0xfdedd2b6,
            [global::UnityEngine.InspectorName("easeInExpo")]
            _0x17b1aec8,
            [global::UnityEngine.InspectorName("easeOutExpo")]
            _0x9c152b16,
            [global::UnityEngine.InspectorName("easeInOutExpo")]
            _0x86ee8f53,
            [global::UnityEngine.InspectorName("easeInCirc")]
            _0xbff4b9e9,
            [global::UnityEngine.InspectorName("easeOutCirc")]
            _0x91287f36,
            [global::UnityEngine.InspectorName("easeInOutCirc")]
            _0xf3c6b9ae,
            [global::UnityEngine.InspectorName("easeInBounce")]
            _0xb2e19685,
            [global::UnityEngine.InspectorName("easeOutBounce")]
            _0x5f77cc04,
            [global::UnityEngine.InspectorName("easeInOutBounce")]
            _0xc7766ca4,
            [global::UnityEngine.InspectorName("easeInBack")]
            _0x061e159d,
            [global::UnityEngine.InspectorName("easeOutBack")]
            _0xdda28ccf,
            [global::UnityEngine.InspectorName("easeInOutBack")]
            _0xfc1a6059,
            [global::UnityEngine.InspectorName("easeInElastic")]
            _0x8b65d47d,
            [global::UnityEngine.InspectorName("easeOutElastic")]
            _0xecf78a56,
            [global::UnityEngine.InspectorName("easeInOutElastic")]
            _0xf504b94f
        }

#endregion
        public static float DoEaseMotion(float _0x09dece8e, float _0x7a9e5e53, float _0x1d5bad71, _0x354bf775 _0xc5a442bf)
        {
            switch (_0xc5a442bf)
            {
                case _0x354bf775._0x71c0978f:
                    return _0x7a9e5e53;
                case _0x354bf775._0x3a0b7899:
                    return linear(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xdd943681:
                    return clerp(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x9797a54f:
                    return spring(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xcae5507d:
                    return easeInQuad(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x53daa11d:
                    return easeOutQuad(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x7a074438:
                    return easeInOutQuad(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x66a7052c:
                    return easeInCubic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x4d5fb599:
                    return easeOutCubic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xb8f9b146:
                    return easeInOutCubic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x70d69a8d:
                    return easeInQuart(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xd69b0e95:
                    return easeOutQuart(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xd3660b45:
                    return easeInOutQuart(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xd9d2dc57:
                    return easeInQuint(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x376ff549:
                    return easeOutQuint(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x00685c0a:
                    return easeInOutQuint(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x5ef4f666:
                    return easeInSine(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x7366d657:
                    return easeOutSine(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xfdedd2b6:
                    return easeInOutSine(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x17b1aec8:
                    return easeInExpo(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x9c152b16:
                    return easeOutExpo(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x86ee8f53:
                    return easeInOutExpo(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xbff4b9e9:
                    return easeInCirc(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x91287f36:
                    return easeOutCirc(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xf3c6b9ae:
                    return easeInOutCirc(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xb2e19685:
                    return easeInBounce(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x5f77cc04:
                    return easeOutBounce(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xc7766ca4:
                    return easeInOutBounce(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x061e159d:
                    return easeInBack(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xdda28ccf:
                    return easeOutBack(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xfc1a6059:
                    return easeInOutBack(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0x8b65d47d:
                    return easeInElastic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xecf78a56:
                    return easeOutElastic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                case _0x354bf775._0xf504b94f:
                    return easeInOutElastic(_0x09dece8e, _0x7a9e5e53, _0x1d5bad71);
                default:
                    return _0x7a9e5e53;
            }
        }

#region Easing Curves
        public static float linear(float _0x7ad89d84, float _0x581b7344, float _0x2049a370)
        {
            return Mathf.Lerp(_0x7ad89d84, _0x581b7344, _0x2049a370);
        }

        public static float clerp(float _0x41e06b7d, float _0x38d0ff29, float _0x9f69e50a)
        {
            float _0x286f81c5 = 0.0f;
            float _0x74b406b5 = 360.0f;
            float _0x6bd9f105 = Mathf.Abs((_0x74b406b5 - _0x286f81c5) * 0.5f);
            float _0xfa1335be = 0.0f;
            float _0xc249da8e = 0.0f;
            if ((_0x38d0ff29 - _0x41e06b7d) < -_0x6bd9f105)
            {
                _0xc249da8e = ((_0x74b406b5 - _0x41e06b7d) + _0x38d0ff29) * _0x9f69e50a;
                _0xfa1335be = _0x41e06b7d + _0xc249da8e;
            }
            else if ((_0x38d0ff29 - _0x41e06b7d) > _0x6bd9f105)
            {
                _0xc249da8e = -((_0x74b406b5 - _0x38d0ff29) + _0x41e06b7d) * _0x9f69e50a;
                _0xfa1335be = _0x41e06b7d + _0xc249da8e;
            }
            else
                _0xfa1335be = _0x41e06b7d + (_0x38d0ff29 - _0x41e06b7d) * _0x9f69e50a;
            return _0xfa1335be;
        }

        public static float spring(float _0x8a1900bf, float _0xdc55266f, float _0xc1e87ae9)
        {
            _0xc1e87ae9 = Mathf.Clamp01(_0xc1e87ae9);
            _0xc1e87ae9 = (Mathf.Sin(_0xc1e87ae9 * Mathf.PI * (0.2f + 2.5f * _0xc1e87ae9 * _0xc1e87ae9 * _0xc1e87ae9)) * Mathf.Pow(1f - _0xc1e87ae9, 2.2f) + _0xc1e87ae9) * (1f + (1.2f * (1f - _0xc1e87ae9)));
            return _0x8a1900bf + (_0xdc55266f - _0x8a1900bf) * _0xc1e87ae9;
        }

        public static float easeInQuad(float _0xeb26c167, float _0xabfbf0b6, float _0x71f2f47a)
        {
            _0xabfbf0b6 -= _0xeb26c167;
            return _0xabfbf0b6 * _0x71f2f47a * _0x71f2f47a + _0xeb26c167;
        }

        public static float easeOutQuad(float _0xfbada7e0, float _0x2832e571, float _0x160100fb)
        {
            _0x2832e571 -= _0xfbada7e0;
            return -_0x2832e571 * _0x160100fb * (_0x160100fb - 2) + _0xfbada7e0;
        }

        public static float easeInOutQuad(float _0x853b8bb0, float _0x76951698, float _0x73d2c9f1)
        {
            _0x73d2c9f1 /= .5f;
            _0x76951698 -= _0x853b8bb0;
            if (_0x73d2c9f1 < 1)
                return _0x76951698 * 0.5f * _0x73d2c9f1 * _0x73d2c9f1 + _0x853b8bb0;
            _0x73d2c9f1--;
            return -_0x76951698 * 0.5f * (_0x73d2c9f1 * (_0x73d2c9f1 - 2) - 1) + _0x853b8bb0;
        }

        public static float easeInCubic(float _0x8453f251, float _0x19022753, float _0x2fa528f2)
        {
            _0x19022753 -= _0x8453f251;
            return _0x19022753 * _0x2fa528f2 * _0x2fa528f2 * _0x2fa528f2 + _0x8453f251;
        }

        public static float easeOutCubic(float _0xa9d56552, float _0x977c247c, float _0x9024a043)
        {
            _0x9024a043--;
            _0x977c247c -= _0xa9d56552;
            return _0x977c247c * (_0x9024a043 * _0x9024a043 * _0x9024a043 + 1) + _0xa9d56552;
        }

        public static float easeInOutCubic(float _0x2066705f, float _0xf6873b03, float _0x622b5751)
        {
            _0x622b5751 /= .5f;
            _0xf6873b03 -= _0x2066705f;
            if (_0x622b5751 < 1)
                return _0xf6873b03 * 0.5f * _0x622b5751 * _0x622b5751 * _0x622b5751 + _0x2066705f;
            _0x622b5751 -= 2;
            return _0xf6873b03 * 0.5f * (_0x622b5751 * _0x622b5751 * _0x622b5751 + 2) + _0x2066705f;
        }

        public static float easeInQuart(float _0x73f97c2f, float _0x03d3b1b3, float _0xff228381)
        {
            _0x03d3b1b3 -= _0x73f97c2f;
            return _0x03d3b1b3 * _0xff228381 * _0xff228381 * _0xff228381 * _0xff228381 + _0x73f97c2f;
        }

        public static float easeOutQuart(float _0x16fff385, float _0xd9988c14, float _0x9da12edc)
        {
            _0x9da12edc--;
            _0xd9988c14 -= _0x16fff385;
            return -_0xd9988c14 * (_0x9da12edc * _0x9da12edc * _0x9da12edc * _0x9da12edc - 1) + _0x16fff385;
        }

        public static float easeInOutQuart(float _0xdd9d0fbf, float _0x98db1700, float _0x797157e8)
        {
            _0x797157e8 /= .5f;
            _0x98db1700 -= _0xdd9d0fbf;
            if (_0x797157e8 < 1)
                return _0x98db1700 * 0.5f * _0x797157e8 * _0x797157e8 * _0x797157e8 * _0x797157e8 + _0xdd9d0fbf;
            _0x797157e8 -= 2;
            return -_0x98db1700 * 0.5f * (_0x797157e8 * _0x797157e8 * _0x797157e8 * _0x797157e8 - 2) + _0xdd9d0fbf;
        }

        public static float easeInQuint(float _0xa574a0c5, float _0x9bb58b1b, float _0xd52604c8)
        {
            _0x9bb58b1b -= _0xa574a0c5;
            return _0x9bb58b1b * _0xd52604c8 * _0xd52604c8 * _0xd52604c8 * _0xd52604c8 * _0xd52604c8 + _0xa574a0c5;
        }

        public static float easeOutQuint(float _0x6ad7f658, float _0xe7562956, float _0x64e1435d)
        {
            _0x64e1435d--;
            _0xe7562956 -= _0x6ad7f658;
            return _0xe7562956 * (_0x64e1435d * _0x64e1435d * _0x64e1435d * _0x64e1435d * _0x64e1435d + 1) + _0x6ad7f658;
        }

        public static float easeInOutQuint(float _0x5e390806, float _0x225e579e, float _0xd7d4a271)
        {
            _0xd7d4a271 /= .5f;
            _0x225e579e -= _0x5e390806;
            if (_0xd7d4a271 < 1)
                return _0x225e579e * 0.5f * _0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 + _0x5e390806;
            _0xd7d4a271 -= 2;
            return _0x225e579e * 0.5f * (_0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 * _0xd7d4a271 + 2) + _0x5e390806;
        }

        public static float easeInSine(float _0x7f9a6176, float _0xc9a809a8, float _0x6eda94bb)
        {
            _0xc9a809a8 -= _0x7f9a6176;
            return -_0xc9a809a8 * Mathf.Cos(_0x6eda94bb * (Mathf.PI * 0.5f)) + _0xc9a809a8 + _0x7f9a6176;
        }

        public static float easeOutSine(float _0x7171adc7, float _0x9e6c7d61, float _0xe96d69f4)
        {
            _0x9e6c7d61 -= _0x7171adc7;
            return _0x9e6c7d61 * Mathf.Sin(_0xe96d69f4 * (Mathf.PI * 0.5f)) + _0x7171adc7;
        }

        public static float easeInOutSine(float _0xe97daaaa, float _0x1e5a83fe, float _0xd6467d3e)
        {
            _0x1e5a83fe -= _0xe97daaaa;
            return -_0x1e5a83fe * 0.5f * (Mathf.Cos(Mathf.PI * _0xd6467d3e) - 1) + _0xe97daaaa;
        }

        public static float easeInExpo(float _0x183ff5aa, float _0x065668ed, float _0xd5f618c5)
        {
            _0x065668ed -= _0x183ff5aa;
            return _0x065668ed * Mathf.Pow(2, 10 * (_0xd5f618c5 - 1)) + _0x183ff5aa;
        }

        public static float easeOutExpo(float _0xf2986750, float _0x621c2d28, float _0x2135578f)
        {
            _0x621c2d28 -= _0xf2986750;
            return _0x621c2d28 * (-Mathf.Pow(2, -10 * _0x2135578f) + 1) + _0xf2986750;
        }

        public static float easeInOutExpo(float _0x87fd5b18, float _0xbef92a33, float _0x190f4791)
        {
            _0x190f4791 /= .5f;
            _0xbef92a33 -= _0x87fd5b18;
            if (_0x190f4791 < 1)
                return _0xbef92a33 * 0.5f * Mathf.Pow(2, 10 * (_0x190f4791 - 1)) + _0x87fd5b18;
            _0x190f4791--;
            return _0xbef92a33 * 0.5f * (-Mathf.Pow(2, -10 * _0x190f4791) + 2) + _0x87fd5b18;
        }

        public static float easeInCirc(float _0xc48c68f1, float _0x9ee8f0b4, float _0x46769b25)
        {
            _0x9ee8f0b4 -= _0xc48c68f1;
            return -_0x9ee8f0b4 * (Mathf.Sqrt(1 - _0x46769b25 * _0x46769b25) - 1) + _0xc48c68f1;
        }

        public static float easeOutCirc(float _0xf60af8fc, float _0xfce54498, float _0x78253824)
        {
            _0x78253824--;
            _0xfce54498 -= _0xf60af8fc;
            return _0xfce54498 * Mathf.Sqrt(1 - _0x78253824 * _0x78253824) + _0xf60af8fc;
        }

        public static float easeInOutCirc(float _0x6908addd, float _0x34a8030e, float _0x898bd39c)
        {
            _0x898bd39c /= .5f;
            _0x34a8030e -= _0x6908addd;
            if (_0x898bd39c < 1)
                return -_0x34a8030e * 0.5f * (Mathf.Sqrt(1 - _0x898bd39c * _0x898bd39c) - 1) + _0x6908addd;
            _0x898bd39c -= 2;
            return _0x34a8030e * 0.5f * (Mathf.Sqrt(1 - _0x898bd39c * _0x898bd39c) + 1) + _0x6908addd;
        }

        
        public static float easeInBounce(float _0x3b60cbef, float _0x26eab19d, float _0x73354d74)
        {
            _0x26eab19d -= _0x3b60cbef;
            float _0x1410360c = 1f;
            return _0x26eab19d - easeOutBounce(0, _0x26eab19d, _0x1410360c - _0x73354d74) + _0x3b60cbef;
        }

        
        
        
        public static float easeOutBounce(float _0xe47d1ef8, float _0xdf5046ab, float _0x50c212f5)
        {
            _0x50c212f5 /= 1f;
            _0xdf5046ab -= _0xe47d1ef8;
            if (_0x50c212f5 < (1 / 2.75f))
            {
                return _0xdf5046ab * (7.5625f * _0x50c212f5 * _0x50c212f5) + _0xe47d1ef8;
            }
            else if (_0x50c212f5 < (2 / 2.75f))
            {
                _0x50c212f5 -= (1.5f / 2.75f);
                return _0xdf5046ab * (7.5625f * (_0x50c212f5) * _0x50c212f5 + .75f) + _0xe47d1ef8;
            }
            else if (_0x50c212f5 < (2.5 / 2.75))
            {
                _0x50c212f5 -= (2.25f / 2.75f);
                return _0xdf5046ab * (7.5625f * (_0x50c212f5) * _0x50c212f5 + .9375f) + _0xe47d1ef8;
            }
            else
            {
                _0x50c212f5 -= (2.625f / 2.75f);
                return _0xdf5046ab * (7.5625f * (_0x50c212f5) * _0x50c212f5 + .984375f) + _0xe47d1ef8;
            }
        }

        
        
        public static float easeInOutBounce(float _0x7aa98108, float _0xc548f189, float _0x485166b1)
        {
            _0xc548f189 -= _0x7aa98108;
            float _0xea3d37d8 = 1f;
            if (_0x485166b1 < _0xea3d37d8 * 0.5f)
                return easeInBounce(0, _0xc548f189, _0x485166b1 * 2) * 0.5f + _0x7aa98108;
            else
                return easeOutBounce(0, _0xc548f189, _0x485166b1 * 2 - _0xea3d37d8) * 0.5f + _0xc548f189 * 0.5f + _0x7aa98108;
        }

        
        public static float easeInBack(float _0x8a7ff999, float _0x6b97a1c8, float _0xc3332a3e)
        {
            _0x6b97a1c8 -= _0x8a7ff999;
            _0xc3332a3e /= 1;
            float _0x3258a4aa = 1.70158f;
            return _0x6b97a1c8 * (_0xc3332a3e) * _0xc3332a3e * ((_0x3258a4aa + 1) * _0xc3332a3e - _0x3258a4aa) + _0x8a7ff999;
        }

        public static float easeOutBack(float _0x9e2a048b, float _0xe75c5119, float _0xe02ec46a)
        {
            float _0xcd1a5dbb = 1.70158f;
            _0xe75c5119 -= _0x9e2a048b;
            _0xe02ec46a = (_0xe02ec46a) - 1;
            return _0xe75c5119 * ((_0xe02ec46a) * _0xe02ec46a * ((_0xcd1a5dbb + 1) * _0xe02ec46a + _0xcd1a5dbb) + 1) + _0x9e2a048b;
        }

        public static float easeInOutBack(float _0x16479e9b, float _0x622cad63, float _0x91063489)
        {
            float _0xd593d0c8 = 1.70158f;
            _0x622cad63 -= _0x16479e9b;
            _0x91063489 /= .5f;
            if ((_0x91063489) < 1)
            {
                _0xd593d0c8 *= (1.525f);
                return _0x622cad63 * 0.5f * (_0x91063489 * _0x91063489 * (((_0xd593d0c8) + 1) * _0x91063489 - _0xd593d0c8)) + _0x16479e9b;
            }

            _0x91063489 -= 2;
            _0xd593d0c8 *= (1.525f);
            return _0x622cad63 * 0.5f * ((_0x91063489) * _0x91063489 * (((_0xd593d0c8) + 1) * _0x91063489 + _0xd593d0c8) + 2) + _0x16479e9b;
        }

        public static float punch(float _0x30cd87fc, float _0xe1bdd5aa)
        {
            float _0xa10233e6 = 9;
            if (_0xe1bdd5aa == 0)
            {
                return 0;
            }
            else if (_0xe1bdd5aa == 1)
            {
                return 0;
            }

            float _0x2c723c55 = 1 * 0.3f;
            _0xa10233e6 = _0x2c723c55 / (2 * Mathf.PI) * Mathf.Asin(0);
            return (_0x30cd87fc * Mathf.Pow(2, -10 * _0xe1bdd5aa) * Mathf.Sin((_0xe1bdd5aa * 1 - _0xa10233e6) * (2 * Mathf.PI) / _0x2c723c55));
        }

        
        public static float easeInElastic(float _0x65c1a8aa, float _0x6b95402c, float _0xa41bb737)
        {
            _0x6b95402c -= _0x65c1a8aa;
            float _0x277a788a = 1f;
            float _0xa916c933 = _0x277a788a * .3f;
            float _0xe09851a4 = 0;
            float _0x63ebb804 = 0;
            if (_0xa41bb737 == 0)
                return _0x65c1a8aa;
            if ((_0xa41bb737 /= _0x277a788a) == 1)
                return _0x65c1a8aa + _0x6b95402c;
            if (_0x63ebb804 == 0f || _0x63ebb804 < Mathf.Abs(_0x6b95402c))
            {
                _0x63ebb804 = _0x6b95402c;
                _0xe09851a4 = _0xa916c933 / 4;
            }
            else
            {
                _0xe09851a4 = _0xa916c933 / (2 * Mathf.PI) * Mathf.Asin(_0x6b95402c / _0x63ebb804);
            }

            return -(_0x63ebb804 * Mathf.Pow(2, 10 * (_0xa41bb737 -= 1)) * Mathf.Sin((_0xa41bb737 * _0x277a788a - _0xe09851a4) * (2 * Mathf.PI) / _0xa916c933)) + _0x65c1a8aa;
        }

        
        
        
        public static float easeOutElastic(float _0x7cd00346, float _0x675fb59d, float _0x45c3097c)
        {
            _0x675fb59d -= _0x7cd00346;
            float _0x2ce1c960 = 1f;
            float _0x9e2d2f0b = _0x2ce1c960 * .3f;
            float _0x16bb5ea2 = 0;
            float _0x611069ba = 0;
            if (_0x45c3097c == 0)
                return _0x7cd00346;
            if ((_0x45c3097c /= _0x2ce1c960) == 1)
                return _0x7cd00346 + _0x675fb59d;
            if (_0x611069ba == 0f || _0x611069ba < Mathf.Abs(_0x675fb59d))
            {
                _0x611069ba = _0x675fb59d;
                _0x16bb5ea2 = _0x9e2d2f0b * 0.25f;
            }
            else
            {
                _0x16bb5ea2 = _0x9e2d2f0b / (2 * Mathf.PI) * Mathf.Asin(_0x675fb59d / _0x611069ba);
            }

            return (_0x611069ba * Mathf.Pow(2, -10 * _0x45c3097c) * Mathf.Sin((_0x45c3097c * _0x2ce1c960 - _0x16bb5ea2) * (2 * Mathf.PI) / _0x9e2d2f0b) + _0x675fb59d + _0x7cd00346);
        }

        
        public static float easeInOutElastic(float _0x664a316d, float _0xaba6f9bf, float _0x2fde3d1f)
        {
            _0xaba6f9bf -= _0x664a316d;
            float _0x5f8ac1d8 = 1f;
            float _0x4f77afaf = _0x5f8ac1d8 * .3f;
            float _0xa6cf856a = 0;
            float _0xfff7f417 = 0;
            if (_0x2fde3d1f == 0)
                return _0x664a316d;
            if ((_0x2fde3d1f /= _0x5f8ac1d8 * 0.5f) == 2)
                return _0x664a316d + _0xaba6f9bf;
            if (_0xfff7f417 == 0f || _0xfff7f417 < Mathf.Abs(_0xaba6f9bf))
            {
                _0xfff7f417 = _0xaba6f9bf;
                _0xa6cf856a = _0x4f77afaf / 4;
            }
            else
            {
                _0xa6cf856a = _0x4f77afaf / (2 * Mathf.PI) * Mathf.Asin(_0xaba6f9bf / _0xfff7f417);
            }

            if (_0x2fde3d1f < 1)
                return -0.5f * (_0xfff7f417 * Mathf.Pow(2, 10 * (_0x2fde3d1f -= 1)) * Mathf.Sin((_0x2fde3d1f * _0x5f8ac1d8 - _0xa6cf856a) * (2 * Mathf.PI) / _0x4f77afaf)) + _0x664a316d;
            return _0xfff7f417 * Mathf.Pow(2, -10 * (_0x2fde3d1f -= 1)) * Mathf.Sin((_0x2fde3d1f * _0x5f8ac1d8 - _0xa6cf856a) * (2 * Mathf.PI) / _0x4f77afaf) * 0.5f + _0xaba6f9bf + _0x664a316d;
        }
    
#endregion
    }
}