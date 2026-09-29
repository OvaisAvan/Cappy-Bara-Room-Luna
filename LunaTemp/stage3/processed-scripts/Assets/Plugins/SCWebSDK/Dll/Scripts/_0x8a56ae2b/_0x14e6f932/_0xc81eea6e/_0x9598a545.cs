using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

namespace SC
{
    public partial class _0xd8ffff25
    {
        private readonly Dictionary<string, EventHandler<SCEventArgs>> _0xaf8bd9a6 = new Dictionary<string, EventHandler<SCEventArgs>>();
        
        public void On(string _0x6bf70b7a, EventHandler<SCEventArgs> _0xe2e07b00)
        {
            if (_0xaf8bd9a6.ContainsKey(_0x6bf70b7a))
            {
                _0xaf8bd9a6[_0x6bf70b7a] += _0xe2e07b00;
            }
            else
            {
                _0xaf8bd9a6[_0x6bf70b7a] = _0xe2e07b00;
            }
        }

        
        public void Off(string _0xfe450af3, EventHandler<SCEventArgs> _0x9dad3b5e)
        {
            if (_0xaf8bd9a6.ContainsKey(_0xfe450af3))
            {
                _0xaf8bd9a6[_0xfe450af3] -= _0x9dad3b5e;
            }
        }

        
        public void Event(string _0xbcc1c457, SCEventArgs _0xa5eb9873)
        {
            if (_0xaf8bd9a6.ContainsKey(_0xbcc1c457))
            {
                if (_0xaf8bd9a6[_0xbcc1c457] != null)
                    _0xaf8bd9a6[_0xbcc1c457].Invoke(_0xa5eb9873);
            }
        }

        
        
        
        
        
         
        public void Event(string _0xa3ca747f, object _0x40f4e5b4 = null, object _0x3d5ccaf9 = null, object _0x7f3ba858 = null, object _0xa358273d = null, object _0x51829309 = null)
        {
            if (string.IsNullOrEmpty(_0xa3ca747f))
            {
                return;
            }

            var _0x70e201f4 = SCEventArgs.Create(_0x40f4e5b4, _0x3d5ccaf9, _0x7f3ba858, _0xa358273d, _0x51829309);
            _0x70e201f4._0xb0d3dfe8 = _0xa3ca747f;
            if (_0xaf8bd9a6.ContainsKey(_0xa3ca747f))
            {
                if (_0xaf8bd9a6[_0xa3ca747f] != null)
                    _0xaf8bd9a6[_0xa3ca747f].Invoke(_0x70e201f4);
            }
        }

        public Int32 Count(System.String _0x90813747)
        {
            return 0;
        }

        public Boolean Check(System.String _0x610531cb, SC.EventHandler<SC.SCEventArgs> _0x5d6cbf39)
        {
            return false;
        }

        public void SetDefaultHandler(SC.EventHandler<SC.SCEventArgs> _0xe500354c)
        {
        }

        public void Event(SC.SCEventArgs _0x46e5a7d0)
        {
        }

        public void EventNow(SC.SCEventArgs _0x9443da82)
        {
        }

        public void EventNow(System.String _0xc1f921a1, System.Object _0x61a991ef, System.Object _0xf5b1667e, System.Object _0xe567212f, System.Object _0x16d9e1d1, System.Object _0x71ec6c75)
        {
        }

        public Int32 iEventHandlerCount;
        public Int32 iEventCount;
        public SC.Events._0x69d68f1a EventType = new SC.Events._0x69d68f1a();
    }
}