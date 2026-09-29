using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using Object = UnityEngine.Object;

namespace SC
{
    public partial class sc
    {
        public static _0x75d7d73c prefab = new _0x75d7d73c();
    }

    public partial class _0x75d7d73c
    {
        
        public void ReleaseGameObject(GameObject _0x6de6eba1)
        {
        }

        public bool HasEntity(int _0x31888396)
        {
            return false;
        }

        public SC.IEntity GetEntity(int _0xdae4ae7b)
        {
            return default;
        }

        public SC.IEntity GetEntity(string _0x11820a03)
        {
            return default;
        }

        public SC.IEntity[] GetEntities(string _0xdac3c622)
        {
            return default;
        }

        public int ShowPrefab(int _0x6a6c4fd8, string _0x0228eb1a, object _0xfe3e77f6 = null)
        {
            return 0;
        }

        public int ShowPrefab(string _0xf8c0c05f, object _0x3ef1a378 = null)
        {
            return 0;
        }

        public int ShowPrefab(string _0x749198e7, Transform _0x25812be5, object _0xcf048a70 = null)
        {
            return 0;
        }

        public int ShowPrefab(int _0xcaa18d9b, string _0x1c6d8bc2, Transform _0xc359acd2, object _0xac53e549 = null)
        {
            return 0;
        }

        public SC.IEntity ShowPrefabSync(string _0xe81f1675, object _0xd4c8fdd6 = null)
        {
            return default;
        }

        public SC.IEntity ShowPrefabSync(string _0xf83d2050, Transform _0xba2235f1, object _0x06306504 = null)
        {
            return default;
        }

        public SC.IEntity ShowPrefabSync(int _0xad36867a, string _0x3e4be921, Transform _0x3f5b40be, object _0x0489befa = null)
        {
            return default;
        }

        public void HideLoadingByPrefabId(string _0x799766d9)
        {
        }

        public void HideEntityByGameObj(GameObject _0xc9946db6, object _0xa022879d = null)
        {
        }

        public void HidePrefabEntity(int _0x89de2650, object _0x5cc091fc = null)
        {
        }

        public void HidePrefabEntity(int _0xc6894203, object _0x0883a027, bool _0x66b5a752 = false)
        {
        }

        public void HidePrefabEntity(SC.IEntity _0x5be32821, object _0x0133b610 = null)
        {
        }

        public Transform DefaultParentTransform = default;
        public int insPool_Capacity = default;
        public Single insPool_AutoReleaseInterval = default;
        public int CreateSerialId = default;
        public int CreateCutSerialId = default;
        public SC.EventHandler<SC._0x7308c9b6> ShowPrefabEntityFailure = default;
        public SC.EventHandler<SC._0x71b148ae> ShowPrefabEntitySuccess = default;
    }
}