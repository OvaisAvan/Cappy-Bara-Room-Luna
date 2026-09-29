using UnityEngine;
using UnityEditor;
using System;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Threading;
using UnityEditor.Build;
using UnityEditor.WebGL;
using System.Collections.Generic;
using UnityEngine.UI;
using System.Reflection;
using System.Linq;
using SC;

namespace _0xa07739b8
{
    
    
    
    public partial class _0x8dcf1a76 : EditorWindow
    {
        public static void _0x30af7f33()
        {
            string _0x303cc282 = Application.dataPath;
            string _0xaab36679 = Application.dataPath + "/Plugins/SCWebSDK/Dll/Scripts";
            if (!Directory.Exists(_0xaab36679))
            {
                return;
            }

            _0xff619081(_0x303cc282, _0xaab36679, "SCWebSDK");
            Debug.Log($"修复完成");
        }

        public static void _0xfe2fd42a()
        {
            string _0xf331868f = Application.dataPath + "/Resources/config/WebAdConfig.asset";
            if (!File.Exists(_0xf331868f))
            {
                Debug.LogError("未找到 WebAdConfig.asset: " + _0xf331868f);
                return;
            }

            string _0x784d2419 = File.ReadAllText(_0xf331868f);
            
            string _0xf2dcc02a = "m_Script: {fileID:";
            int _0x2fb1202a = _0x784d2419.IndexOf(_0xf2dcc02a);
            if (_0x2fb1202a == -1)
                return;
            int _0x3113fb55 = _0x784d2419.IndexOf("guid: ", _0x2fb1202a);
            if (_0x3113fb55 == -1)
                return;
            _0x3113fb55 += 6;
            int _0x4936a441 = _0x784d2419.IndexOf(",", _0x3113fb55);
            if (_0x4936a441 == -1)
                return;
            string _0x629b58da = _0x784d2419.Substring(_0x3113fb55, _0x4936a441 - _0x3113fb55);
            if (!_0xf43a6983._0x6b788340.TryGetValue("SCWebSDK", out var sDllGuid))
            {
                Debug.LogError("MainConfig.dDllMeta 中未找到 SCWebSDK 的 GUID");
                return;
            }

            if (_0x629b58da != sDllGuid)
            {
                Debug.Log($"WebAdConfig.asset 的 GUID ({_0x629b58da}) 与 DLL GUID ({sDllGuid}) 不一致，开始修复...");
                _0xc7c05324(Application.dataPath, _0x629b58da, sDllGuid);
            }
            else
            {
                Debug.Log("WebAdConfig.asset 的 GUID 与 DLL GUID 一致，无需修复。");
            }
        }

        
        
        
        public static void _0xc7c05324(string _0x165ac020, string _0x591f3469, string _0x56f8f61c)
        {
            var _0xb7abb0d7 = Directory.GetFiles(_0x165ac020, "*.*", SearchOption.AllDirectories);
            int _0xe22a393b = 0;
            foreach (string sFile in _0xb7abb0d7)
            {
                string _0x5f540cf9 = Path.GetExtension(sFile).ToLower();
                if (_0x5f540cf9 == ".prefab" || _0x5f540cf9 == ".mat" || _0x5f540cf9 == ".unity" || _0x5f540cf9 == ".asset")
                {
                    string _0x541621a7 = File.ReadAllText(sFile);
                    if (_0x541621a7.Contains(_0x591f3469))
                    {
                        _0x541621a7 = _0x541621a7.Replace(_0x591f3469, _0x56f8f61c);
                        File.WriteAllText(sFile, _0x541621a7);
                        _0xe22a393b++;
                        Debug.Log($"    修复文件: {sFile}");
                    }
                }
            }

            Debug.Log($"GUID 修复完成，共修复 {_0xe22a393b} 个文件");
        }

        
        
        
        
        
        
        public static void _0xff619081(string _0x099f0571, string _0x0a9f8116, string _0x8952cfc8)
        {
            
            Dictionary<string, string> _0xc0b69e28 = _0x2205e0eb(_0x0a9f8116);
            
            Dictionary<string, string> _0xa77b0c49 = _0x64d548f3(_0x8952cfc8);
            
            Dictionary<string, string> _0xab3b2523 = new Dictionary<string, string>();
            foreach (var item in _0xa77b0c49)
            {
                string _0x7ab8d1bc = item.Key;
                if (_0xc0b69e28.TryGetValue(_0x7ab8d1bc, out var temp))
                {
                    _0xab3b2523.Add(temp, item.Value);
                }
            }

            if (!_0xf43a6983._0x6b788340.TryGetValue(_0x8952cfc8, out var sDefGuid))
            {
                Debug.LogError($"[FixComponents] 未在 MainConfig.dDllMeta 中找到程序集 {_0x8952cfc8} 的 GUID 配置");
                return;
            }

            
            
            var _0xeded2fba = Directory.GetFiles(_0x099f0571, "*.*", SearchOption.AllDirectories);
            foreach (string sResource in _0xeded2fba)
            {
                
                string _0x62a5b1b3 = Path.GetExtension(sResource).ToLower();
                if (_0x62a5b1b3 == ".prefab" || _0x62a5b1b3 == ".mat" || _0x62a5b1b3 == ".unity" || _0x62a5b1b3 == ".asset")
                {
                    _0xc0bc78fc(sResource, sDefGuid, _0xab3b2523);
                }
            }
        }

        
        
        
        
        
        
        
        public static void _0xc0bc78fc(string _0x02793524, string _0x82691ad7, Dictionary<string, string> _0xc0946597)
        {
            bool _0x2c83efb4 = false;
            string _0x4ef49a59 = File.ReadAllText(_0x02793524);
            foreach (var oldGuid2NewGuid in _0xc0946597)
            {
                string _0x7f06d457 = $"fileID: {oldGuid2NewGuid.Value}, guid: {_0x82691ad7}";
                if (_0x4ef49a59.Contains(_0x7f06d457))
                {
                    _0x2c83efb4 = true;
                    string _0x684925af = $"fileID: 11500000, guid: {oldGuid2NewGuid.Key}";
                    _0x4ef49a59 = _0x4ef49a59.Replace(_0x7f06d457, _0x684925af);
                    Debug.Log($"     {_0x7f06d457}=>{_0x684925af}");
                }
            }

            if (_0x2c83efb4 == true)
            {
                File.WriteAllText(_0x02793524, _0x4ef49a59);
                Debug.Log($"{_0x02793524} 修改成功");
            }
        }

        
        
        
        
        
        
        
        public static void _0x856e21a8(string _0x667d959d, string _0x431eac49, Dictionary<string, string> _0xdd95a34d)
        {
            bool _0x0bc12310 = false;
            string _0x476200d1 = File.ReadAllText(_0x667d959d);
            foreach (var oldGuid2NewGuid in _0xdd95a34d)
            {
                string _0xca70c4da = $"fileID: 11500000, guid: {oldGuid2NewGuid.Key}";
                if (_0x476200d1.Contains(_0xca70c4da))
                {
                    _0x0bc12310 = true;
                    string _0xe4fec26a = $"fileID: {oldGuid2NewGuid.Value}, guid: {_0x431eac49}";
                    _0x476200d1 = _0x476200d1.Replace(_0xca70c4da, _0xe4fec26a);
                    Debug.Log($"     {_0xca70c4da}=>{_0xe4fec26a}");
                }
            }

            if (_0x0bc12310 == true)
            {
                File.WriteAllText(_0x667d959d, _0x476200d1);
                Debug.Log($"{_0x667d959d} 修改成功");
            }
        }

        
        
        
        
        
        public static Dictionary<string, string> _0x64d548f3(string _0x8bcb1570)
        {
            Dictionary<string, string> _0xfb6563ab = new Dictionary<string, string>();
            
            Assembly _0x6e192d98 = AppDomain.CurrentDomain.GetAssemblies().FirstOrDefault(_0x36b57316 => _0x36b57316.GetName().Name == _0x8bcb1570);
            if (_0x6e192d98 == null)
            {
                Debug.LogError($"[FixComponents] 无法在当前环境中找到程序集: {_0x8bcb1570}，请确保其已编译或 DLL 已导入");
                return _0xfb6563ab;
            }

            Type[] _0x3dc4e5fa = _0x6e192d98.GetTypes();
            for (int _0xf5580cc0 = 0; _0xf5580cc0 < _0x3dc4e5fa.Length; _0xf5580cc0++)
            {
                Type _0x6cd6e217 = _0x3dc4e5fa[_0xf5580cc0];
                if (!typeof(Component).IsAssignableFrom(_0x6cd6e217) && !typeof(ScriptableObject).IsAssignableFrom(_0x6cd6e217))
                {
                    continue;
                }

                int _0x85ec335e = TFileIdMD4._0x5b4271c8(_0x6cd6e217);
                _0xfb6563ab[_0x3dc4e5fa[_0xf5580cc0].Name] = _0x85ec335e.ToString();
            }

            return _0xfb6563ab;
        }

        
        
        
        
        public static Dictionary<string, string> _0x2205e0eb(string _0xe2b1e53e)
        {
            var _0x0acf52c3 = Directory.GetFiles(_0xe2b1e53e, "*.cs", SearchOption.AllDirectories);
            Dictionary<string, string> _0x0c2a96ae = new Dictionary<string, string>();
            for (int _0x262f6888 = 0; _0x262f6888 < _0x0acf52c3.Length; _0x262f6888++)
            {
                string _0x181ad00d = _0x0acf52c3[_0x262f6888];
                _0x181ad00d = _0x181ad00d.Replace(Application.dataPath, "Assets");
                string _0xa29d190c = Path.GetFileNameWithoutExtension(_0x181ad00d);
                string _0xee7b29ff = AssetDatabase.AssetPathToGUID(_0x181ad00d);
                _0x0c2a96ae.Add(_0xa29d190c, _0xee7b29ff);
            }

            return _0x0c2a96ae;
        }
    }
}