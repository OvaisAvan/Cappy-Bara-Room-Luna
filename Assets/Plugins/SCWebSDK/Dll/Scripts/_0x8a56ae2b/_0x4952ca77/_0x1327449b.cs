using System.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;


namespace SC.Utility
{
    
    
    
     
    public static class TTime
    {
        public static long MINUTE_SECONDS = 60;
        public static long HOUR_SECONDS = MINUTE_SECONDS * 60;
        public static long DAY_SECONDS = HOUR_SECONDS * 24;
        public static long MINUTE_MILLISECOND = MINUTE_SECONDS * 1000;
        public static long HOUR_MILLISECOND = HOUR_SECONDS * 1000;
        public static long DAY_MILLISECOND = DAY_SECONDS * 1000;
        
        
        
        public static long CurTimeMillisecond => new DateTimeOffset(DateTime.UtcNow).ToUnixTimeMilliseconds();
        
        
        
        public static long CurTimeSecond => new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds();

        
        
        
        
        
        public static int MillisecondsToDay(long _0x43854f74)
        {
            return (int)(_0x43854f74 / DAY_MILLISECOND);
        }

        
        
        
        
        
        public static string MillisecondsToHMS(long _0x3c6fc635)
        {
            _0x3c6fc635 = _0x3c6fc635 / 1000;
            var _0x22381a7d = (long)(_0x3c6fc635 / HOUR_SECONDS);
            _0x3c6fc635 = _0x3c6fc635 % HOUR_SECONDS;
            var _0xe1fed152 = (long)(_0x3c6fc635 / MINUTE_SECONDS);
            _0x3c6fc635 = _0x3c6fc635 % MINUTE_SECONDS;
            var _0x135c06a4 = "";
            if (_0x22381a7d > 0)
            {
                _0x135c06a4 = _0x135c06a4 + (_0x22381a7d > 9 ? "" + _0x22381a7d : "0" + _0x22381a7d);
                _0x135c06a4 += ":";
            }
            else
            {
                _0x135c06a4 += "00:";
            }

            if (_0xe1fed152 > 0)
            {
                _0x135c06a4 = _0x135c06a4 + (_0xe1fed152 > 9 ? "" + _0xe1fed152 : "0" + _0xe1fed152);
                _0x135c06a4 += ":";
            }
            else
            {
                _0x135c06a4 += "00:";
            }

            _0x135c06a4 = _0x135c06a4 + (_0x3c6fc635 > 9 ? "" + _0x3c6fc635 : "0" + _0x3c6fc635);
            return _0x135c06a4;
        }
    }
}