using System.Collections.Generic;
using System.Text.RegularExpressions;
using UnityEngine;


namespace SC.Utility
{
    public static class TExcel
    {
        
        
        
        
        private static List<string> _0x776c3abb(string _0xecbab2d1)
        {
            
            var _0x78d4ed69 = new List<string>();
            var _0x991654d8 = "";
            var _0xd4f3ba2f = _0xecbab2d1.IndexOf("\t");
            while (_0xd4f3ba2f >= 0)
            {
                _0x991654d8 = _0xecbab2d1.Substring(0, _0xd4f3ba2f);
                _0x78d4ed69.Add(_0x991654d8);
                _0xecbab2d1 = _0xecbab2d1.Substring(_0xd4f3ba2f + 1);
                _0xd4f3ba2f = _0xecbab2d1.IndexOf("\t");
            }

            _0xecbab2d1 = Regex.Replace(_0xecbab2d1, @"\s+$", ""); 
            _0x78d4ed69.Add(_0xecbab2d1);
            return _0x78d4ed69;
        }

        
        
        
        
        
        private static List<List<string>> _0xf39cfe13(string _0x6c9f04dd)
        {
            
            
            
            
            var _0xb9a8dfb2 = new List<List<string>>();
            
            var _0x1707d479 = _0x6c9f04dd.IndexOf("\n");
            
            var _0x733449f7 = "";
            List<string> _0x688001fc;
            while (_0x1707d479 >= 0)
            {
                _0x733449f7 = _0x6c9f04dd.Substring(0, _0x1707d479);
                _0x688001fc = _0x776c3abb(_0x733449f7);
                _0xb9a8dfb2.Add(_0x688001fc);
                
                if (_0x6c9f04dd[0] == '\n')
                {
                    _0x6c9f04dd = _0x6c9f04dd.Substring(1);
                }
                else
                {
                    _0x6c9f04dd = _0x6c9f04dd.Substring(_0x1707d479 + 1);
                }

                _0x1707d479 = _0x6c9f04dd.IndexOf("\n");
            }

            _0x688001fc = _0x776c3abb(_0x6c9f04dd);
            _0xb9a8dfb2.Add(_0x688001fc);
            return _0xb9a8dfb2;
        }

        
        
        
        
        
        
         
        public static Dictionary<string, Dictionary<string, object>> ExcelToJson(string _0x58d0d446, string _0x40595aa1)
        {
            
            List<List<string>> _0x45c0f0f7 = _0xf39cfe13(_0x58d0d446);
            if (_0x45c0f0f7 == null || _0x45c0f0f7.Count <= 3)
            {
                return null;
            }

            
            
            var _0x2fafa597 = _0x45c0f0f7[2];
            var _0xd730dde2 = _0x2fafa597.Count;
            if (_0xd730dde2 > 30)
            {
                sc.log.Warning($"[{_0x40595aa1}] has {_0xd730dde2} fields, too many! Please check if it is needed!");
            }

            for (int _0xff0e3076 = 0; _0xff0e3076 < _0xd730dde2; _0xff0e3076++)
            {
                var _0x45284634 = _0x2fafa597[_0xff0e3076].Trim();
                if (_0x45284634 == "")
                {
                    sc.log.Error($"[{_0x40595aa1}] The field name of the {_0xff0e3076 + 1} column cannot be empty");
                    return null;
                }
            }

            var _0x87351ace = _0x45c0f0f7[1];
            
            if (_0xd730dde2 != _0x87351ace.Count)
            {
                sc.log.Error($"TExcel tableName:{_0x40595aa1} 2,3 row column number is inconsistent");
                return null;
            }

            
            var _0xac1dbd8e = "string"; 
            object _0x347174e0;
            Dictionary<string, Dictionary<string, object>> _0x4ab838da = new Dictionary<string, Dictionary<string, object>>()
            {
            };
            List<string> _0x6b8b9074 = null;
            string _0x632377a0 = "";
            string _0xddef86a1 = "";
            string _0xa93d6e22;
            int _0xeb89d923 = 3;
            int _0xfb4ad5f6 = 0;
            
            
            
            
            
            
            
            try
            {
                for (; _0xeb89d923 < _0x45c0f0f7.Count; _0xeb89d923++)
                {
                    _0x6b8b9074 = _0x45c0f0f7[_0xeb89d923];
                    if (sc.bEditor)
                    {
                        if (_0xd730dde2 != _0x6b8b9074.Count && _0x6b8b9074.Count != 1 && _0x6b8b9074[0].Length != 0 && !_0x6b8b9074[0].StartsWith("#"))
                        {
                            sc.log.Error($"TExcel tableName:{_0x40595aa1} key field number is inconsistent with the number of columns in the {_0xeb89d923 + 1} row");
                            return null;
                        }
                    }

                    Dictionary<string, object> _0x4377bf79 = new Dictionary<string, object>()
                    {
                    };
                    _0x632377a0 = "";
                    int _0x1e3f016c = _0x6b8b9074.Count;
                    for (_0xfb4ad5f6 = 0; _0xfb4ad5f6 < _0xd730dde2; _0xfb4ad5f6++)
                    {
                        if (_0xfb4ad5f6 >= _0x1e3f016c)
                        {
                            _0xddef86a1 = "";
                        }
                        else
                        {
                            _0xddef86a1 = _0x6b8b9074[_0xfb4ad5f6];
                        }

                        if (_0xddef86a1 == null)
                        {
                            _0xddef86a1 = "";
                        }

                        _0xa93d6e22 = _0xddef86a1.Trim();
                        if (_0xfb4ad5f6 == 0)
                        {
                            _0x632377a0 = _0xa93d6e22;
                            
                            if (_0x632377a0.Length == 0 || _0x632377a0.StartsWith("#"))
                            {
                                _0x632377a0 = "";
                                break;
                            }
                        }

                        if (!_0xa93d6e22.Equals(_0xddef86a1))
                        {
                            if (_0xfb4ad5f6 == 0 || _0x40595aa1 != "language")
                            { 
                                _0xddef86a1 = _0xa93d6e22;
                            }
                        }

                        _0xac1dbd8e = _0x87351ace[_0xfb4ad5f6];
                        if (_0xac1dbd8e == "int")
                        {
                            if (_0xddef86a1 == "-" || _0xddef86a1 == "")
                            {
                                _0x347174e0 = 0;
                            }
                            else
                            {
                                _0x347174e0 = int.Parse(_0xddef86a1);
                            }
                        }
                        else if (_0xac1dbd8e == "long")
                        {
                            if (_0xddef86a1 == "-" || _0xddef86a1 == "")
                            {
                                _0x347174e0 = 0;
                            }
                            else
                            {
                                _0x347174e0 = long.Parse(_0xddef86a1);
                            }
                        }
                        else if (_0xac1dbd8e == "double" || _0xac1dbd8e == "float")
                        {
                            if (_0xddef86a1 == "-" || _0xddef86a1 == "")
                            {
                                _0x347174e0 = 0;
                            }
                            else
                            {
                                double _0x5aa20dc9 = double.Parse(_0xddef86a1);
                                _0x347174e0 = _0x5aa20dc9; 
                            }
                        }
                        else if (_0xac1dbd8e == "list")
                        {
                            if (_0xddef86a1 == "-" || _0xddef86a1 == "")
                            {
                                _0x347174e0 = "[]";
                            }
                            else
                            {
                                _0x347174e0 = _0xddef86a1;
                            }
                        }
                        else if (_0xac1dbd8e == "dict")
                        {
                            if (_0xddef86a1 == "-" || _0xddef86a1 == "")
                            {
                                _0x347174e0 = "{}";
                            }
                            else
                            { 
                                _0x347174e0 = _0xddef86a1;
                            }
                        }
                        else if (_0xac1dbd8e == "string")
                        {
                            _0x347174e0 = _0xddef86a1;
                            if (_0x347174e0.ToString() == "-")
                            {
                                _0x347174e0 = "";
                            }
                        }
                        else
                        {
                            if (sc.bEditor)
                            {
                                
                                if (_0xac1dbd8e != "")
                                {
                                    sc.log.Error($"config {_0x40595aa1}.txt type =[{_0xac1dbd8e}] error \n i:{_0xeb89d923}-- j:{_0xfb4ad5f6} value:{_0xddef86a1}");
                                    return null;
                                }
                            }

                            if (_0xac1dbd8e == "")
                            {
                                
                                continue;
                            }
                            else if (_0xfb4ad5f6 >= _0x6b8b9074.Count)
                            {
                                sc.log.Error($"sTableName::{_0x40595aa1} i::{_0xeb89d923} Incorrect number of data at least::{_0xd730dde2}");
                                break;
                            }

                            _0x347174e0 = _0xddef86a1;
                            if (_0x347174e0.ToString() == "-")
                            {
                                _0x347174e0 = "";
                            }
                        }

                        _0x4377bf79[_0x2fafa597[_0xfb4ad5f6]] = _0x347174e0;
                    }

                    if (_0x632377a0.ToString() != "")
                    {
                        _0x4ab838da[_0x632377a0] = _0x4377bf79;
                    }
                }
            }
            catch (System.Exception e)
            {
                
                if (_0x6b8b9074 != null)
                {
                    sc.log.Error($"sc config TExcel tableName:{_0x40595aa1} row.length:{_0x6b8b9074.Count} i:{_0xeb89d923}-- j:{_0xfb4ad5f6}-- key:{_0x632377a0}-- sValue:{_0xddef86a1} message:{e.Message}" + @"
	StackTrace:" + e.StackTrace);
                }
                else
                {
                    sc.log.Error($"sc config TExcel tableName:{_0x40595aa1} i:{_0xeb89d923}-- j:{_0xfb4ad5f6}-- key:{_0x632377a0}-- sValue:{_0xddef86a1} message:{e.Message}" + @"
	StackTrace:" + e.StackTrace);
                }

                throw;
            }

            return _0x4ab838da;
        }
    }
}