using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace SC
{
    public class _0xc807ab2c
    {
        private readonly Dictionary<int, Coroutine> _0xa0d6e43a = new Dictionary<int, Coroutine>();
        private int _0xfd344035 = 1; 
        
        
        
        
        
        
        
        public int DelayTimeBackCall(Action _0x6244214d, float _0x1511a7e0 = 0, int _0x933fbd61 = 0)
        {
            if (_0x6244214d == null)
                return -1;
            int _0xe2379efa = _0x933fbd61 != 0 ? _0x933fbd61 : _0xfd344035++;
            if (_0x1511a7e0 > 0)
            {
                var _0xda142cc6 = sc.instance.StartCoroutine(_0xff6a8e38(_0x6244214d, _0x1511a7e0, _0xe2379efa));
                _0xa0d6e43a.Add(_0xe2379efa, _0xda142cc6);
            }
            else
            {
                _0x6244214d.Invoke();
            }

            return _0xe2379efa;
        }

        
        
        
        
        
        public bool StopDelayedCall(int _0xc6acfd86)
        {
            if (_0xa0d6e43a.TryGetValue(_0xc6acfd86, out var coroutine))
            {
                sc.instance.StopCoroutine(coroutine);
                _0xa0d6e43a.Remove(_0xc6acfd86);
                return true;
            }

            return false;
        }

        
        
        
        public void StopAllDelayedCalls()
        {
            foreach (var coroutine in _0xa0d6e43a.Values)
            {
                sc.instance.StopCoroutine(coroutine);
            }

            _0xa0d6e43a.Clear();
        }

        
        
        
        
        public void EndOfFrameBackCall(Action _0xd5442c5b)
        {
            if (_0xd5442c5b == null)
                return;
            sc.instance.StartCoroutine(_0xcf462b5a(_0xd5442c5b));
        }

        private IEnumerator _0xcf462b5a(Action _0x9a1ecbf9)
        {
            yield return new WaitForEndOfFrame();
            _0x9a1ecbf9.Invoke();
        }

        private IEnumerator _0xff6a8e38(Action _0xbf6a3f35, float _0xd7d91697, int _0x6e3e2ca4)
        {
            yield return new WaitForSeconds(_0xd7d91697);
            _0xbf6a3f35.Invoke();
            _0xa0d6e43a.Remove(_0x6e3e2ca4);
        }
    }
}