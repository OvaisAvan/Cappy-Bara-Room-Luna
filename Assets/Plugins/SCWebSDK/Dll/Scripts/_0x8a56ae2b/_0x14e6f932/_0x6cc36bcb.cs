using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;
using UnityEngine.SceneManagement;

namespace SC
{
    public partial class sc
    {
        public static _0xe4b5de9a scene = new _0xe4b5de9a();
    }

    
    
    
    public partial class _0xe4b5de9a
    {
        internal class _0xf8fa6431
        {
        }

        
        public void LoadScene(int _0x54679aef)
        {
            var _0xaccaec1b = SceneManager.LoadSceneAsync(_0x54679aef, LoadSceneMode.Single);
            _0xaccaec1b.completed += (AsyncOperation _0x08647b9c) =>
            {
                if (LoadSceneSuccess != null)
                {
                    if (_0xaccaec1b.isDone)
                    {
                        LoadSceneSuccess(new _0x40d08fac());
                    }
                }
            };
        }

        public void LoadScene(int _0x1eea0faa, object _0xf3a74b45)
        {
            LoadScene(_0x1eea0faa);
        }

        public void LoadScene(string _0x28fa5af8)
        {
            var _0xf22f4cec = SceneManager.LoadSceneAsync(_0x28fa5af8, LoadSceneMode.Single);
            _0xf22f4cec.completed += (AsyncOperation _0xadd238b9) =>
            {
                if (LoadSceneSuccess != null)
                {
                    if (_0xf22f4cec.isDone)
                    {
                        LoadSceneSuccess(new _0x40d08fac());
                    }
                }
            };
        }

        public void LoadScene(string _0x235b1cd2, object _0x727804d9)
        {
            LoadScene(_0x235b1cd2);
        }

        public void UnloadScene(int _0x8f5664e1)
        {
            SceneManager.UnloadSceneAsync(_0x8f5664e1);
        }

        public void UnloadScene(UnityEngine.SceneManagement.Scene _0xd3f96f69)
        {
            SceneManager.UnloadSceneAsync(_0xd3f96f69);
        }

        public void UnloadScene(string _0x973cb5e7)
        {
            SceneManager.UnloadSceneAsync(_0x973cb5e7);
        }

        public void UnloadScene(string _0x655f694c, object _0x21c39412)
        {
            UnloadScene(_0x655f694c);
        }

        public UnityEngine.SceneManagement.LoadSceneMode LoadMode;
        public SC.EventHandler<SC._0x40d08fac> LoadSceneSuccess;
    }
}