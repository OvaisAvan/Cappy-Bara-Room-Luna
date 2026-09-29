using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace _0xa07739b8
{
    
    
    
     
    public class TFileIdMD4 : HashAlgorithm
    {
        private uint _0xcf4d9d6a;
        private uint _0x4c395179;
        private uint _0xff1b5993;
        private uint _0xda99a2d3;
        private uint[] _0xc9d31f4a;
        private int _0xc1eb52c2;
        public TFileIdMD4()
        {
            _0xc9d31f4a = new uint[16];
            Initialize();
        }

        
        public override void Initialize()
        {
            _0xcf4d9d6a = 0x67452301;
            _0x4c395179 = 0xefcdab89;
            _0xff1b5993 = 0x98badcfe;
            _0xda99a2d3 = 0x10325476;
            _0xc1eb52c2 = 0;
        }

        protected override void HashCore(byte[] _0xa0aa4968, int _0xcb2b4fa4, int _0x0c4bbfac)
        {
            _0x7b8cad6c(_0x8c1fa5d1(_0xa0aa4968, _0xcb2b4fa4, _0x0c4bbfac));
        }

        protected override byte[] HashFinal()
        {
            try
            {
                _0x7b8cad6c(_0x25f89a28());
                return new[]
                {
                    _0xcf4d9d6a,
                    _0x4c395179,
                    _0xff1b5993,
                    _0xda99a2d3
                }.SelectMany(_0x058b7ee9 => _0x163defdb(_0x058b7ee9)).ToArray();
            }
            finally
            {
                Initialize();
            }
        }

        private void _0x7b8cad6c(IEnumerable<byte> _0xdae03a4a)
        {
            foreach (byte b in _0xdae03a4a)
            {
                int _0x7f66d062 = _0xc1eb52c2 & 63;
                int _0x3e95be3b = _0x7f66d062 >> 2;
                int _0xfb96e22f = (_0x7f66d062 & 3) << 3;
                _0xc9d31f4a[_0x3e95be3b] = (_0xc9d31f4a[_0x3e95be3b] & ~((uint)255 << _0xfb96e22f)) | ((uint)b << _0xfb96e22f);
                if (_0x7f66d062 == 63)
                {
                    _0x1838779e();
                }

                _0xc1eb52c2++;
            }
        }

        private static IEnumerable<byte> _0x8c1fa5d1(byte[] _0x3221542a, int _0x9b159cd6, int _0xe10b5e4c)
        {
            for (int _0xe12f0695 = _0x9b159cd6; _0xe12f0695 < _0xe10b5e4c; _0xe12f0695++)
            {
                yield return _0x3221542a[_0xe12f0695];
            }
        }

        private IEnumerable<byte> _0x163defdb(uint _0xc36e9e5e)
        {
            yield return (byte)(_0xc36e9e5e & 255);
            yield return (byte)((_0xc36e9e5e >> 8) & 255);
            yield return (byte)((_0xc36e9e5e >> 16) & 255);
            yield return (byte)((_0xc36e9e5e >> 24) & 255);
        }

        private IEnumerable<byte> _0x02f23463(byte _0x0a979809, int _0x5e777e5b)
        {
            for (int _0x4787cbe5 = 0; _0x4787cbe5 < _0x5e777e5b; _0x4787cbe5++)
            {
                yield return _0x0a979809;
            }
        }

        private IEnumerable<byte> _0x25f89a28()
        {
            return _0x02f23463(128, 1).Concat(_0x02f23463(0, ((_0xc1eb52c2 + 8) & 0x7fffffc0) + 55 - _0xc1eb52c2)).Concat(_0x163defdb((uint)_0xc1eb52c2 << 3)).Concat(_0x02f23463(0, 4));
        }

        private void _0x1838779e()
        {
            uint _0x08a8fe29 = _0xcf4d9d6a;
            uint _0x8b5b8436 = _0x4c395179;
            uint _0xe053bd74 = _0xff1b5993;
            uint _0x9e2fde95 = _0xda99a2d3;
            foreach (int k in new[]
            {
                0,
                4,
                8,
                12
            }

            )
            {
                _0x08a8fe29 = _0xb63b852b(_0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0xc9d31f4a[k], 3);
                _0x9e2fde95 = _0xb63b852b(_0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0xc9d31f4a[k + 1], 7);
                _0xe053bd74 = _0xb63b852b(_0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xc9d31f4a[k + 2], 11);
                _0x8b5b8436 = _0xb63b852b(_0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0xc9d31f4a[k + 3], 19);
            }

            foreach (int k in new[]
            {
                0,
                1,
                2,
                3
            }

            )
            {
                _0x08a8fe29 = _0x670d74b8(_0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0xc9d31f4a[k], 3);
                _0x9e2fde95 = _0x670d74b8(_0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0xc9d31f4a[k + 4], 5);
                _0xe053bd74 = _0x670d74b8(_0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xc9d31f4a[k + 8], 9);
                _0x8b5b8436 = _0x670d74b8(_0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0xc9d31f4a[k + 12], 13);
            }

            foreach (int k in new[]
            {
                0,
                2,
                1,
                3
            }

            )
            {
                _0x08a8fe29 = _0x19e34e62(_0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0xc9d31f4a[k], 3);
                _0x9e2fde95 = _0x19e34e62(_0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xe053bd74, _0xc9d31f4a[k + 8], 9);
                _0xe053bd74 = _0x19e34e62(_0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0x8b5b8436, _0xc9d31f4a[k + 4], 11);
                _0x8b5b8436 = _0x19e34e62(_0x8b5b8436, _0xe053bd74, _0x9e2fde95, _0x08a8fe29, _0xc9d31f4a[k + 12], 15);
            }

            unchecked
            {
                _0xcf4d9d6a += _0x08a8fe29;
                _0x4c395179 += _0x8b5b8436;
                _0xff1b5993 += _0xe053bd74;
                _0xda99a2d3 += _0x9e2fde95;
            }
        }

        private static uint _0x9d4d1d42(uint _0x9b510e8b, int _0x94643bcb)
        {
            return (_0x9b510e8b << _0x94643bcb) | (_0x9b510e8b >> (32 - _0x94643bcb));
        }

        private static uint _0xb63b852b(uint _0x70e7a139, uint _0x3f597381, uint _0xe858d0a9, uint _0x6c2ce4c4, uint _0x1adb6c30, int _0x51b238cb)
        {
            unchecked
            {
                return _0x9d4d1d42(_0x70e7a139 + ((_0x3f597381 & _0xe858d0a9) | (~_0x3f597381 & _0x6c2ce4c4)) + _0x1adb6c30, _0x51b238cb);
            }
        }

        private static uint _0x670d74b8(uint _0xf034f81e, uint _0x13ff4f1d, uint _0xf8b6f097, uint _0x00703988, uint _0x5baafdd7, int _0x39e18254)
        {
            unchecked
            {
                return _0x9d4d1d42(_0xf034f81e + ((_0x13ff4f1d & _0xf8b6f097) | (_0x13ff4f1d & _0x00703988) | (_0xf8b6f097 & _0x00703988)) + _0x5baafdd7 + 0x5a827999, _0x39e18254);
            }
        }

        private static uint _0x19e34e62(uint _0xa4416dc0, uint _0x85fef9c2, uint _0x0f1b50f1, uint _0x11e13f63, uint _0x5753933e, int _0xcb371ed4)
        {
            unchecked
            {
                return _0x9d4d1d42(_0xa4416dc0 + (_0x85fef9c2 ^ _0x0f1b50f1 ^ _0x11e13f63) + _0x5753933e + 0x6ed9eba1, _0xcb371ed4);
            }
        }

        
        
        
        
        
        public static int _0x5b4271c8(Type _0xde455763)
        {
            string _0xa7c0fe5e = "s\0\0\0" + _0xde455763.Namespace + _0xde455763.Name;
            using (HashAlgorithm _0x28cca509 = new TFileIdMD4())
            {
                byte[] _0x0a9c2bcd = _0x28cca509.ComputeHash(System.Text.Encoding.UTF8.GetBytes(_0xa7c0fe5e));
                int _0x3c9bbd0d = 0;
                for (int _0xf1a99591 = 3; _0xf1a99591 >= 0; --_0xf1a99591)
                {
                    _0x3c9bbd0d <<= 8;
                    _0x3c9bbd0d |= _0x0a9c2bcd[_0xf1a99591];
                }

                return _0x3c9bbd0d;
            }
        }
    }
}