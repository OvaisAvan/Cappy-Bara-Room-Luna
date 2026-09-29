using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace SC
{
    
    public class BaseNode : MonoBehaviour
    {
        protected void Awake()
        {
            SCAwake();
        }

        protected void OnEnable()
        {
            SCOnEnable();
        }

        protected void OnDisable()
        {
            SCOnDisable();
        }

        protected void Start()
        {
            SCStart();
        }

        protected void OnDestroy()
        {
            SCOnDestroy();
        }

        
        public virtual void SCAwake()
        {
        }

        
        public virtual void SCOnEnable()
        {
        }

        
        public virtual void SCOnDisable()
        {
        }

        
        public virtual void SCStart()
        {
        }

        
        protected virtual void Update()
        {
        }

        
        public virtual void SCOnDestroy()
        {
        }
    }
}