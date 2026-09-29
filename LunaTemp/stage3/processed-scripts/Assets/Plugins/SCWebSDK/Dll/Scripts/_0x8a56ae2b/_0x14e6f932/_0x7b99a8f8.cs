using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;
using System.Collections;

namespace SC
{
    public partial class sc
    {
        
        public static _0xbd04323f audio = new _0xbd04323f();
    }

    public partial class _0xbd04323f
    {
        private static Dictionary<string, List<AudioSource>> _0xdd11a10d = new Dictionary<string, List<AudioSource>>();
        
        
        
        
        
        
        public void Play(string _0xc16d7d8b, bool _0x85d951c2 = false, Action _0x4afdef09 = null)
        {
            var _0x4de6b84c = sc.config.GetColumn<string>("audio", _0xc16d7d8b, "path");
            if (_0x4de6b84c == "")
            {
                if (_0x4afdef09 != null)
                    _0x4afdef09.Invoke();
                return;
            }

            AudioClip _0xc9963f51 = Resources.Load<AudioClip>(_0x4de6b84c);
            if (_0xc9963f51 == null)
            {
                Debug.Log($"Audio clip '{_0xc16d7d8b}' not found in audio.txt");
                if (_0x4afdef09 != null)
                    _0x4afdef09.Invoke();
                return;
            }

            GameObject _0xd29fdb79 = new GameObject($"Audio_{_0xc16d7d8b}_{Guid.NewGuid()}");
            AudioSource _0x053db16e = _0xd29fdb79.AddComponent<AudioSource>();
            _0x053db16e.clip = _0xc9963f51;
            _0x053db16e.loop = _0x85d951c2;
            _0x053db16e.Play();
            
            if (!_0xdd11a10d.ContainsKey(_0xc16d7d8b))
            {
                _0xdd11a10d[_0xc16d7d8b] = new List<AudioSource>();
            }

            _0xdd11a10d[_0xc16d7d8b].Add(_0x053db16e);
            _0x9ef9d6a5.StartCor(_0xbdd1f5ec(_0x053db16e, _0x4afdef09, _0xc16d7d8b));
        }

        private static IEnumerator _0xbdd1f5ec(AudioSource _0xac1a718c, Action _0xa6bfd476, string _0x5ecfd96d)
        {
            yield return new WaitWhile(() =>
            {
                if (_0xac1a718c == null || _0xac1a718c.isPlaying)
                    return true;
                
                return _0xac1a718c.time > 0f;
            });
            if (!_0xac1a718c.loop && _0xa6bfd476 != null)
            {
                _0xa6bfd476.Invoke();
            }

            
            if (_0xdd11a10d.ContainsKey(_0x5ecfd96d))
            {
                _0xdd11a10d[_0x5ecfd96d].Remove(_0xac1a718c);
                if (_0xdd11a10d[_0x5ecfd96d].Count == 0)
                {
                    _0xdd11a10d.Remove(_0x5ecfd96d);
                }
            }

            UnityEngine.Object.Destroy(_0xac1a718c.gameObject);
        }

        
        
        
        public static void StopAll()
        {
            AudioSource[] _0x18566fe5 = UnityEngine.Object.FindObjectsOfType<AudioSource>();
            foreach (AudioSource audioSource in _0x18566fe5)
            {
                if (audioSource.gameObject.name.StartsWith("Audio_"))
                {
                    audioSource.Stop();
                    UnityEngine.Object.Destroy(audioSource.gameObject);
                }
            }
        }

        public void Stop(string _0x20ddaf25)
        {
            if (_0xdd11a10d.TryGetValue(_0x20ddaf25, out List<AudioSource> sources))
            {
                
                var _0xafbcac47 = new List<AudioSource>(sources);
                foreach (var source in _0xafbcac47)
                {
                    if (source != null)
                    {
                        source.Stop();
                        UnityEngine.Object.Destroy(source.gameObject);
                    }
                }

                _0xdd11a10d.Remove(_0x20ddaf25);
            }
        }

        public void Pause(string _0x9f3adcb8)
        {
            if (_0xdd11a10d.TryGetValue(_0x9f3adcb8, out List<AudioSource> sources))
            {
                foreach (var source in sources)
                {
                    if (source != null)
                        source.Pause();
                }
            }
        }

        public void PauseAll()
        {
            foreach (var item in _0xdd11a10d)
            {
                foreach (var source in item.Value)
                {
                    if (source != null)
                        source.Pause();
                }
            }
        }

        public void Resume(string _0x4bbfa408)
        {
            if (_0xdd11a10d.TryGetValue(_0x4bbfa408, out List<AudioSource> sources))
            {
                foreach (var source in sources)
                {
                    if (source != null)
                        source.Play();
                }
            }
        }

        public void ResumeAll()
        {
            foreach (var item in _0xdd11a10d)
            {
                foreach (var source in item.Value)
                {
                    if (source != null)
                        source.Play();
                }
            }
        }

        public bool IsSoundAndMusicOpen()
        {
            return true;
        }

        public void OpenSoundAndMusicOpen()
        {
        }

        public void CloseSoundAndMusic()
        {
        }

        public void CloseMusic()
        {
        }

        public void OpenMusic()
        {
        }

        public bool IsMusicOpen()
        {
            return true;
        }

        public bool IsSoundOpen()
        {
            return true;
        }

        public void CloseSound()
        {
        }

        public void OpenSound()
        {
        }
    }

    
    public class _0x9ef9d6a5 : MonoBehaviour
    {
        private static _0x9ef9d6a5 _0xa8256155;
        public static void StartCor(IEnumerator _0xc61ef8b6)
        {
            if (_0xa8256155 == null)
            {
                _0xa8256155 = new GameObject("CoroutineHelper").AddComponent<_0x9ef9d6a5>();
                UnityEngine.Object.DontDestroyOnLoad(_0xa8256155.gameObject);
            }

            _0xa8256155.StartCoroutine(_0xc61ef8b6);
        }
    }
}