


namespace _0xa07739b8
{
    public static class _0x16bd684c
    {
        
        public enum LogType
        {
            
            None,
            
            Normal,
            
            Dev,
            
            Debug,
            
            Info,
            
            Warm,
            
            Error
        }

        public static void Log(string _0x4e441e4f, string _0x77dd4494 = null, string _0xa500aaaa = null, string _0x925c4038 = null, string _0x4e84a3fd = null, string _0xe4ebe027 = null, string _0x08ea1dbb = null)
        {
            _0x6700fc85(LogType.None, _0x4e441e4f, _0x77dd4494, _0xa500aaaa, _0x925c4038, _0x4e84a3fd, _0xe4ebe027, _0x08ea1dbb);
        }

        public static void _0xda6a81dc(LogType _0x44c3c25c, string _0xb4098fa2, string _0x97d8867d = null, string _0x8463392a = null, string _0x1d162dbe = null, string _0x25e25f9b = null, string _0x4437008d = null, string _0x0799896e = null)
        {
            _0x6700fc85(_0x44c3c25c, _0xb4098fa2, _0x97d8867d, _0x8463392a, _0x1d162dbe, _0x25e25f9b, _0x4437008d, _0x0799896e);
        }

        
        
        
        
        
        private static void _0x6700fc85(LogType _0x686ebe77, string _0xce4353bb, string _0xa9a57fbc = null, string _0xf39a0bcd = null, string _0x8a5bc894 = null, string _0x2cee6871 = null, string _0x19f29336 = null, string _0x1c843f77 = null)
        {
            _0xce4353bb = _0x3a19ac8a._0x512da7a0(_0xce4353bb, _0xa9a57fbc, _0xf39a0bcd, _0x8a5bc894, _0x2cee6871, _0x19f29336, _0x1c843f77);
            _0xce4353bb = $"[{_0x686ebe77.ToString()}] {_0xce4353bb}";
            string _0xb07f7065 = "white";
            if (_0x686ebe77 == LogType.None)
            {
                UnityEngine.Debug.Log(_0xce4353bb);
                return;
            }
            else if (_0x686ebe77 == LogType.Normal)
            {
                _0xb07f7065 = "white";
            }
            else if (_0x686ebe77 == LogType.Dev)
            {
                _0xb07f7065 = "#70ACE3";
            }
            else if (_0x686ebe77 == LogType.Debug)
            {
                _0xb07f7065 = "#E69DEC";
            }
            else if (_0x686ebe77 == LogType.Info)
            {
                _0xb07f7065 = "#00FF0C";
            }
            else if (_0x686ebe77 == LogType.Warm)
            {
                _0xb07f7065 = "#FFC107";
                _0xce4353bb = "<color=" + _0xb07f7065 + ">" + _0xce4353bb + "</color>";
                UnityEngine.Debug.LogWarning(_0xce4353bb);
                return;
            }
            else if (_0x686ebe77 == LogType.Error)
            {
                _0xb07f7065 = "#FF0000";
                _0xce4353bb = "<color=" + _0xb07f7065 + ">" + _0xce4353bb + "</color>";
                UnityEngine.Debug.LogError(_0xce4353bb);
                return;
            }

            UnityEngine.Debug.Log("<color=" + _0xb07f7065 + ">" + _0xce4353bb + "</color>");
        }

        public static void _0xe8f5e459(string _0x9224cdd0, string _0x79928aef = null, string _0x541b1783 = null, string _0x78a5a0ef = null, string _0xfc25ba8a = null, string _0x39f6b223 = null, string _0x0a77e897 = null)
        {
            _0x6700fc85(LogType.Error, "Error:" + _0x9224cdd0, _0x79928aef, _0x541b1783, _0x78a5a0ef, _0xfc25ba8a, _0x39f6b223, _0x0a77e897);
        }

        public static void _0x181d6923(string _0x78398ed5, string _0x299719ab = null, string _0x81e263ab = null, string _0xf5aaed1c = null, string _0x0fa0bd00 = null, string _0x455ec9e6 = null, string _0x2e71ac44 = null)
        {
            _0x6700fc85(LogType.Warm, _0x78398ed5, _0x299719ab, _0x81e263ab, _0xf5aaed1c, _0x0fa0bd00, _0x455ec9e6, _0x2e71ac44);
        }

        public static void _0xd8cc31d1(string _0x01cf705e, string _0xa60d90c0 = null, string _0x3bf69fb1 = null, string _0xe5132229 = null, string _0xa48e49e6 = null, string _0x7b9919fd = null, string _0x292950df = null)
        {
            _0x6700fc85(LogType.Info, _0x01cf705e, _0xa60d90c0, _0x3bf69fb1, _0xe5132229, _0xa48e49e6, _0x7b9919fd, _0x292950df);
        }

        public static void _0xf1a21e79(string _0x11c46f96, string _0xde37efeb = null, string _0x46d42f57 = null, string _0xda984ea4 = null, string _0x88e03972 = null, string _0x2e93fff5 = null, string _0x7601fd67 = null)
        {
            _0x6700fc85(LogType.Debug, _0x11c46f96, _0xde37efeb, _0x46d42f57, _0xda984ea4, _0x88e03972, _0x2e93fff5, _0x7601fd67);
        }

        public static void _0xa3ba68cd(string _0xfb3d927e, string _0xfeabcc1f = null, string _0x7ceaa0ba = null, string _0xfcde5113 = null, string _0x47e8cbc7 = null, string _0xf8fb28c2 = null, string _0x65bbc4e7 = null)
        {
            _0x6700fc85(LogType.Dev, _0xfb3d927e, _0xfeabcc1f, _0x7ceaa0ba, _0xfcde5113, _0x47e8cbc7, _0xf8fb28c2, _0x65bbc4e7);
        }

        public static void _0x2e3db364(string _0x41f7f474, string _0x65d416be = null, string _0xfbaeedd6 = null, string _0x7ea93da5 = null, string _0x523182c2 = null, string _0x9e2ea4d7 = null, string _0x1a2d9bd3 = null)
        {
            _0x6700fc85(LogType.Normal, _0x41f7f474, _0x65d416be, _0xfbaeedd6, _0x7ea93da5, _0x523182c2, _0x9e2ea4d7, _0x1a2d9bd3);
        }

        public static void _0x0393c175(bool _0xd090ba5d, string _0x04f80213, string _0x82c28851 = null, string _0x68443ef3 = null, string _0xcc77190f = null, string _0x368129c6 = null, string _0xd3cec8c4 = null, string _0x6bef9190 = null)
        {
            _0x6700fc85(_0xd090ba5d ? LogType.Error : LogType.Warm, _0x04f80213, _0x82c28851, _0x68443ef3, _0xcc77190f, _0x368129c6, _0xd3cec8c4, _0x6bef9190);
        }
    }
}