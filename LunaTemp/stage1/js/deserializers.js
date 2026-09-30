var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSpring' )
  var i577 = data
  i576.spring = i577[0]
  i576.damper = i577[1]
  i576.targetPosition = i577[2]
  return i576
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointMotor' )
  var i579 = data
  i578.m_TargetVelocity = i579[0]
  i578.m_Force = i579[1]
  i578.m_FreeSpin = i579[2]
  return i578
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointLimits' )
  var i581 = data
  i580.m_Min = i581[0]
  i580.m_Max = i581[1]
  i580.m_Bounciness = i581[2]
  i580.m_BounceMinVelocity = i581[3]
  i580.m_ContactDistance = i581[4]
  i580.minBounce = i581[5]
  i580.maxBounce = i581[6]
  return i580
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointDrive' )
  var i583 = data
  i582.m_PositionSpring = i583[0]
  i582.m_PositionDamper = i583[1]
  i582.m_MaximumForce = i583[2]
  i582.m_UseAcceleration = i583[3]
  return i582
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i585 = data
  i584.m_Spring = i585[0]
  i584.m_Damper = i585[1]
  return i584
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i587 = data
  i586.m_Limit = i587[0]
  i586.m_Bounciness = i587[1]
  i586.m_ContactDistance = i587[2]
  return i586
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i589 = data
  i588.m_ExtremumSlip = i589[0]
  i588.m_ExtremumValue = i589[1]
  i588.m_AsymptoteSlip = i589[2]
  i588.m_AsymptoteValue = i589[3]
  i588.m_Stiffness = i589[4]
  return i588
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i591 = data
  i590.m_LowerAngle = i591[0]
  i590.m_UpperAngle = i591[1]
  return i590
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i593 = data
  i592.m_MotorSpeed = i593[0]
  i592.m_MaximumMotorTorque = i593[1]
  return i592
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i595 = data
  i594.m_DampingRatio = i595[0]
  i594.m_Frequency = i595[1]
  i594.m_Angle = i595[2]
  return i594
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i597 = data
  i596.m_LowerTranslation = i597[0]
  i596.m_UpperTranslation = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i599 = data
  i598.name = i599[0]
  i598.width = i599[1]
  i598.height = i599[2]
  i598.mipmapCount = i599[3]
  i598.anisoLevel = i599[4]
  i598.filterMode = i599[5]
  i598.hdr = !!i599[6]
  i598.format = i599[7]
  i598.wrapMode = i599[8]
  i598.alphaIsTransparency = !!i599[9]
  i598.alphaSource = i599[10]
  i598.graphicsFormat = i599[11]
  i598.sRGBTexture = !!i599[12]
  i598.desiredColorSpace = i599[13]
  i598.wrapU = i599[14]
  i598.wrapV = i599[15]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i601 = data
  i600.position = new pc.Vec3( i601[0], i601[1], i601[2] )
  i600.scale = new pc.Vec3( i601[3], i601[4], i601[5] )
  i600.rotation = new pc.Quat(i601[6], i601[7], i601[8], i601[9])
  return i600
}

Deserializers["LevelController"] = function (request, data, root) {
  var i602 = root || request.c( 'LevelController' )
  var i603 = data
  i602.levelNum = i603[0]
  var i605 = i603[1]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602.WaveArray = i604
  var i607 = i603[2]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 1, i606, '')
  }
  i602.waveChildren = i606
  var i609 = i603[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i602.StickerArray = i608
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i615 = data
  i614.color = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  request.r(i615[4], i615[5], 0, i614, 'sprite')
  i614.flipX = !!i615[6]
  i614.flipY = !!i615[7]
  i614.drawMode = i615[8]
  i614.size = new pc.Vec2( i615[9], i615[10] )
  i614.tileMode = i615[11]
  i614.adaptiveModeThreshold = i615[12]
  i614.maskInteraction = i615[13]
  i614.spriteSortPoint = i615[14]
  i614.enabled = !!i615[15]
  request.r(i615[16], i615[17], 0, i614, 'sharedMaterial')
  var i617 = i615[18]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.sharedMaterials = i616
  i614.receiveShadows = !!i615[19]
  i614.shadowCastingMode = i615[20]
  i614.sortingLayerID = i615[21]
  i614.sortingOrder = i615[22]
  i614.lightmapIndex = i615[23]
  i614.lightmapSceneIndex = i615[24]
  i614.lightmapScaleOffset = new pc.Vec4( i615[25], i615[26], i615[27], i615[28] )
  i614.lightProbeUsage = i615[29]
  i614.reflectionProbeUsage = i615[30]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["StickerItem"] = function (request, data, root) {
  var i622 = root || request.c( 'StickerItem' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'sprite')
  request.r(i623[2], i623[3], 0, i622, 'armatureNode')
  request.r(i623[4], i623[5], 0, i622, 'effectNode')
  i622.hideSpriteWhenEffectActive = !!i623[6]
  i622.type = i623[7]
  i622.layerType = i623[8]
  i622.isClickable = !!i623[9]
  i622.isCompleted = !!i623[10]
  i622.requiredOverlapPercentage = i623[11]
  i622.size = i623[12]
  i622.fingerAnchorPosition = new pc.Vec2( i623[13], i623[14] )
  i622.audioVolume = i623[15]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i625 = data
  i624.usedByComposite = !!i625[0]
  i624.autoTiling = !!i625[1]
  var i627 = i625[2]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
  var i629 = i627[i + 0]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
    i628.push( new pc.Vec2( i629[i + 0], i629[i + 1] ) );
  }
    i626.push( i628 );
  }
  i624.points = i626
  i624.enabled = !!i625[3]
  i624.isTrigger = !!i625[4]
  i624.usedByEffector = !!i625[5]
  i624.density = i625[6]
  i624.offset = new pc.Vec2( i625[7], i625[8] )
  request.r(i625[9], i625[10], 0, i624, 'material')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'animatorController')
  request.r(i637[2], i637[3], 0, i636, 'avatar')
  i636.updateMode = i637[4]
  i636.hasTransformHierarchy = !!i637[5]
  i636.applyRootMotion = !!i637[6]
  var i639 = i637[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.humanBones = i638
  i636.enabled = !!i637[8]
  return i636
}

Deserializers["DragonBones.UnityArmatureComponent"] = function (request, data, root) {
  var i642 = root || request.c( 'DragonBones.UnityArmatureComponent' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'unityData')
  i642.armatureName = i643[2]
  i642.isUGUI = !!i643[3]
  i642.debugDraw = !!i643[4]
  i642.animationName = i643[5]
  i642._playTimes = i643[6]
  i642._timeScale = i643[7]
  i642._sortingMode = i643[8]
  i642._sortingLayerName = i643[9]
  i642._sortingOrder = i643[10]
  i642._zSpace = i643[11]
  i642._flipX = !!i643[12]
  i642._flipY = !!i643[13]
  i642._closeCombineMeshs = !!i643[14]
  return i642
}

Deserializers["DragonBones.UnityCombineMeshs"] = function (request, data, root) {
  var i644 = root || request.c( 'DragonBones.UnityCombineMeshs' )
  var i645 = data
  var i647 = i645[0]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(i647[i + 0]);
  }
  i644.slotNames = i646
  i644.dirty = !!i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'additionalVertexStreams')
  i650.enabled = !!i651[2]
  request.r(i651[3], i651[4], 0, i650, 'sharedMaterial')
  var i653 = i651[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.sharedMaterials = i652
  i650.receiveShadows = !!i651[6]
  i650.shadowCastingMode = i651[7]
  i650.sortingLayerID = i651[8]
  i650.sortingOrder = i651[9]
  i650.lightmapIndex = i651[10]
  i650.lightmapSceneIndex = i651[11]
  i650.lightmapScaleOffset = new pc.Vec4( i651[12], i651[13], i651[14], i651[15] )
  i650.lightProbeUsage = i651[16]
  i650.reflectionProbeUsage = i651[17]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'sharedMesh')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i656 = root || new pc.UnityMaterial()
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'shader')
  i656.renderQueue = i657[3]
  i656.enableInstancing = !!i657[4]
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i659[i + 0]) );
  }
  i656.floatParameters = i658
  var i661 = i657[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i661[i + 0]) );
  }
  i656.colorParameters = i660
  var i663 = i657[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i663[i + 0]) );
  }
  i656.vectorParameters = i662
  var i665 = i657[8]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i665[i + 0]) );
  }
  i656.textureParameters = i664
  var i667 = i657[9]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i667[i + 0]) );
  }
  i656.materialFlags = i666
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Color(i675[1], i675[2], i675[3], i675[4])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = new pc.Vec4( i679[1], i679[2], i679[3], i679[4] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i683 = data
  i682.name = i683[0]
  request.r(i683[1], i683[2], 0, i682, 'value')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i687 = data
  i686.name = i687[0]
  i686.enabled = !!i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i689 = data
  i688.pivot = new pc.Vec2( i689[0], i689[1] )
  i688.anchorMin = new pc.Vec2( i689[2], i689[3] )
  i688.anchorMax = new pc.Vec2( i689[4], i689[5] )
  i688.sizeDelta = new pc.Vec2( i689[6], i689[7] )
  i688.anchoredPosition3D = new pc.Vec3( i689[8], i689[9], i689[10] )
  i688.rotation = new pc.Quat(i689[11], i689[12], i689[13], i689[14])
  i688.scale = new pc.Vec3( i689[15], i689[16], i689[17] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i691 = data
  i690.cullTransparentMesh = !!i691[0]
  return i690
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Image' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_Sprite')
  i692.m_Type = i693[2]
  i692.m_PreserveAspect = !!i693[3]
  i692.m_FillCenter = !!i693[4]
  i692.m_FillMethod = i693[5]
  i692.m_FillAmount = i693[6]
  i692.m_FillClockwise = !!i693[7]
  i692.m_FillOrigin = i693[8]
  i692.m_UseSpriteMesh = !!i693[9]
  i692.m_PixelsPerUnitMultiplier = i693[10]
  request.r(i693[11], i693[12], 0, i692, 'm_Material')
  i692.m_Maskable = !!i693[13]
  i692.m_Color = new pc.Color(i693[14], i693[15], i693[16], i693[17])
  i692.m_RaycastTarget = !!i693[18]
  i692.m_RaycastPadding = new pc.Vec4( i693[19], i693[20], i693[21], i693[22] )
  return i692
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_Content')
  i694.m_Horizontal = !!i695[2]
  i694.m_Vertical = !!i695[3]
  i694.m_MovementType = i695[4]
  i694.m_Elasticity = i695[5]
  i694.m_Inertia = !!i695[6]
  i694.m_DecelerationRate = i695[7]
  i694.m_ScrollSensitivity = i695[8]
  request.r(i695[9], i695[10], 0, i694, 'm_Viewport')
  request.r(i695[11], i695[12], 0, i694, 'm_HorizontalScrollbar')
  request.r(i695[13], i695[14], 0, i694, 'm_VerticalScrollbar')
  i694.m_HorizontalScrollbarVisibility = i695[15]
  i694.m_VerticalScrollbarVisibility = i695[16]
  i694.m_HorizontalScrollbarSpacing = i695[17]
  i694.m_VerticalScrollbarSpacing = i695[18]
  i694.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i695[19], i694.m_OnValueChanged)
  return i694
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i697 = data
  i696.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i697[0], i696.m_PersistentCalls)
  return i696
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i699 = data
  var i701 = i699[0]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('UnityEngine.Events.PersistentCall', i701[i + 0]));
  }
  i698.m_Calls = i700
  return i698
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Target')
  i704.m_TargetAssemblyTypeName = i705[2]
  i704.m_MethodName = i705[3]
  i704.m_Mode = i705[4]
  i704.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i705[5], i704.m_Arguments)
  i704.m_CallState = i705[6]
  return i704
}

Deserializers["StickerLayer"] = function (request, data, root) {
  var i706 = root || request.c( 'StickerLayer' )
  var i707 = data
  i706.currentLayerType = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'stickerParent')
  request.r(i707[3], i707[4], 0, i706, 'leftArrow')
  request.r(i707[5], i707[6], 0, i706, 'rightArrow')
  request.r(i707[7], i707[8], 0, i706, 'textBackground')
  request.r(i707[9], i707[10], 0, i706, 'textComponent')
  request.r(i707[11], i707[12], 0, i706, 'emptyStateText')
  return i706
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i709 = data
  i708.m_Padding = new pc.Vec4( i709[0], i709[1], i709[2], i709[3] )
  i708.m_Softness = new pc.Vec2( i709[4], i709[5] )
  return i708
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i711 = data
  i710.m_HorizontalFit = i711[0]
  i710.m_VerticalFit = i711[1]
  return i710
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i713 = data
  i712.m_Spacing = i713[0]
  i712.m_ChildForceExpandWidth = !!i713[1]
  i712.m_ChildForceExpandHeight = !!i713[2]
  i712.m_ChildControlWidth = !!i713[3]
  i712.m_ChildControlHeight = !!i713[4]
  i712.m_ChildScaleWidth = !!i713[5]
  i712.m_ChildScaleHeight = !!i713[6]
  i712.m_ReverseArrangement = !!i713[7]
  i712.m_Padding = UnityEngine.RectOffset.FromPaddings(i713[8], i713[9], i713[10], i713[11])
  i712.m_ChildAlignment = i713[12]
  return i712
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Text' )
  var i715 = data
  i714.m_FontData = request.d('UnityEngine.UI.FontData', i715[0], i714.m_FontData)
  i714.m_Text = i715[1]
  request.r(i715[2], i715[3], 0, i714, 'm_Material')
  i714.m_Maskable = !!i715[4]
  i714.m_Color = new pc.Color(i715[5], i715[6], i715[7], i715[8])
  i714.m_RaycastTarget = !!i715[9]
  i714.m_RaycastPadding = new pc.Vec4( i715[10], i715[11], i715[12], i715[13] )
  return i714
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.FontData' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Font')
  i716.m_FontSize = i717[2]
  i716.m_FontStyle = i717[3]
  i716.m_BestFit = !!i717[4]
  i716.m_MinSize = i717[5]
  i716.m_MaxSize = i717[6]
  i716.m_Alignment = i717[7]
  i716.m_AlignByGeometry = !!i717[8]
  i716.m_RichText = !!i717[9]
  i716.m_HorizontalOverflow = i717[10]
  i716.m_VerticalOverflow = i717[11]
  i716.m_LineSpacing = i717[12]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i719 = data
  i718.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i719[0], i718.main)
  i718.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i719[1], i718.colorBySpeed)
  i718.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i719[2], i718.colorOverLifetime)
  i718.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i719[3], i718.emission)
  i718.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i719[4], i718.rotationBySpeed)
  i718.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i719[5], i718.rotationOverLifetime)
  i718.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i719[6], i718.shape)
  i718.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i719[7], i718.sizeBySpeed)
  i718.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i719[8], i718.sizeOverLifetime)
  i718.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i719[9], i718.textureSheetAnimation)
  i718.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i719[10], i718.velocityOverLifetime)
  i718.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i719[11], i718.noise)
  i718.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i719[12], i718.inheritVelocity)
  i718.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i719[13], i718.forceOverLifetime)
  i718.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i719[14], i718.limitVelocityOverLifetime)
  i718.useAutoRandomSeed = !!i719[15]
  i718.randomSeed = i719[16]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemMain()
  var i721 = data
  i720.duration = i721[0]
  i720.loop = !!i721[1]
  i720.prewarm = !!i721[2]
  i720.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.startDelay)
  i720.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[4], i720.startLifetime)
  i720.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[5], i720.startSpeed)
  i720.startSize3D = !!i721[6]
  i720.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[7], i720.startSizeX)
  i720.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[8], i720.startSizeY)
  i720.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[9], i720.startSizeZ)
  i720.startRotation3D = !!i721[10]
  i720.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[11], i720.startRotationX)
  i720.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[12], i720.startRotationY)
  i720.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[13], i720.startRotationZ)
  i720.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i721[14], i720.startColor)
  i720.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[15], i720.gravityModifier)
  i720.simulationSpace = i721[16]
  request.r(i721[17], i721[18], 0, i720, 'customSimulationSpace')
  i720.simulationSpeed = i721[19]
  i720.useUnscaledTime = !!i721[20]
  i720.scalingMode = i721[21]
  i720.playOnAwake = !!i721[22]
  i720.maxParticles = i721[23]
  i720.emitterVelocityMode = i721[24]
  i720.stopAction = i721[25]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i722 = root || new pc.MinMaxCurve()
  var i723 = data
  i722.mode = i723[0]
  i722.curveMin = new pc.AnimationCurve( { keys_flow: i723[1] } )
  i722.curveMax = new pc.AnimationCurve( { keys_flow: i723[2] } )
  i722.curveMultiplier = i723[3]
  i722.constantMin = i723[4]
  i722.constantMax = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i724 = root || new pc.MinMaxGradient()
  var i725 = data
  i724.mode = i725[0]
  i724.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i725[1], i724.gradientMin)
  i724.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i725[2], i724.gradientMax)
  i724.colorMin = new pc.Color(i725[3], i725[4], i725[5], i725[6])
  i724.colorMax = new pc.Color(i725[7], i725[8], i725[9], i725[10])
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i727 = data
  i726.mode = i727[0]
  var i729 = i727[1]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i729[i + 0]) );
  }
  i726.colorKeys = i728
  var i731 = i727[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i731[i + 0]) );
  }
  i726.alphaKeys = i730
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i735 = data
  i734.color = new pc.Color(i735[0], i735[1], i735[2], i735[3])
  i734.time = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i739 = data
  i738.alpha = i739[0]
  i738.time = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemColorBySpeed()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i741[1], i740.color)
  i740.range = new pc.Vec2( i741[2], i741[3] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemColorOverLifetime()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i743[1], i742.color)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemEmitter()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.rateOverTime)
  i744.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.rateOverDistance)
  var i747 = i745[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i747[i + 0]) );
  }
  i744.bursts = i746
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemBurst()
  var i751 = data
  i750.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[0], i750.count)
  i750.cycleCount = i751[1]
  i750.minCount = i751[2]
  i750.maxCount = i751[3]
  i750.repeatInterval = i751[4]
  i750.time = i751[5]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemRotationBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  i752.range = new pc.Vec2( i753[5], i753[6] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemRotationOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemShape()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.shapeType = i757[1]
  i756.randomDirectionAmount = i757[2]
  i756.sphericalDirectionAmount = i757[3]
  i756.randomPositionAmount = i757[4]
  i756.alignToDirection = !!i757[5]
  i756.radius = i757[6]
  i756.radiusMode = i757[7]
  i756.radiusSpread = i757[8]
  i756.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.radiusSpeed)
  i756.radiusThickness = i757[10]
  i756.angle = i757[11]
  i756.length = i757[12]
  i756.boxThickness = new pc.Vec3( i757[13], i757[14], i757[15] )
  i756.meshShapeType = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'mesh')
  request.r(i757[19], i757[20], 0, i756, 'meshRenderer')
  request.r(i757[21], i757[22], 0, i756, 'skinnedMeshRenderer')
  i756.useMeshMaterialIndex = !!i757[23]
  i756.meshMaterialIndex = i757[24]
  i756.useMeshColors = !!i757[25]
  i756.normalOffset = i757[26]
  i756.arc = i757[27]
  i756.arcMode = i757[28]
  i756.arcSpread = i757[29]
  i756.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[30], i756.arcSpeed)
  i756.donutRadius = i757[31]
  i756.position = new pc.Vec3( i757[32], i757[33], i757[34] )
  i756.rotation = new pc.Vec3( i757[35], i757[36], i757[37] )
  i756.scale = new pc.Vec3( i757[38], i757[39], i757[40] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemSizeBySpeed()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.separateAxes = !!i759[4]
  i758.range = new pc.Vec2( i759[5], i759[6] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemSizeOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.separateAxes = !!i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.mode = i763[1]
  i762.animation = i763[2]
  i762.numTilesX = i763[3]
  i762.numTilesY = i763[4]
  i762.useRandomRow = !!i763[5]
  i762.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[6], i762.frameOverTime)
  i762.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.startFrame)
  i762.cycleCount = i763[8]
  i762.rowIndex = i763[9]
  i762.flipU = i763[10]
  i762.flipV = i763[11]
  i762.spriteCount = i763[12]
  var i765 = i763[13]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sprites = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.radial)
  i768.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[5], i768.speedModifier)
  i768.space = i769[6]
  i768.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[7], i768.orbitalX)
  i768.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.orbitalY)
  i768.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[9], i768.orbitalZ)
  i768.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[10], i768.orbitalOffsetX)
  i768.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[11], i768.orbitalOffsetY)
  i768.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[12], i768.orbitalOffsetZ)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemNoise()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.separateAxes = !!i771[1]
  i770.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.strengthX)
  i770.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.strengthY)
  i770.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.strengthZ)
  i770.frequency = i771[5]
  i770.damping = !!i771[6]
  i770.octaveCount = i771[7]
  i770.octaveMultiplier = i771[8]
  i770.octaveScale = i771[9]
  i770.quality = i771[10]
  i770.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[11], i770.scrollSpeed)
  i770.scrollSpeedMultiplier = i771[12]
  i770.remapEnabled = !!i771[13]
  i770.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[14], i770.remapX)
  i770.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[15], i770.remapY)
  i770.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[16], i770.remapZ)
  i770.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[17], i770.positionAmount)
  i770.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[18], i770.rotationAmount)
  i770.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[19], i770.sizeAmount)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemInheritVelocity()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.mode = i773[1]
  i772.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.curve)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemForceOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.space = i775[4]
  i774.randomized = !!i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.limit)
  i776.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.limitX)
  i776.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.limitY)
  i776.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[4], i776.limitZ)
  i776.dampen = i777[5]
  i776.separateAxes = !!i777[6]
  i776.space = i777[7]
  i776.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[8], i776.drag)
  i776.multiplyDragByParticleSize = !!i777[9]
  i776.multiplyDragByParticleVelocity = !!i777[10]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'mesh')
  i778.meshCount = i779[2]
  i778.activeVertexStreamsCount = i779[3]
  i778.alignment = i779[4]
  i778.renderMode = i779[5]
  i778.sortMode = i779[6]
  i778.lengthScale = i779[7]
  i778.velocityScale = i779[8]
  i778.cameraVelocityScale = i779[9]
  i778.normalDirection = i779[10]
  i778.sortingFudge = i779[11]
  i778.minParticleSize = i779[12]
  i778.maxParticleSize = i779[13]
  i778.pivot = new pc.Vec3( i779[14], i779[15], i779[16] )
  request.r(i779[17], i779[18], 0, i778, 'trailMaterial')
  i778.applyActiveColorSpace = !!i779[19]
  i778.enabled = !!i779[20]
  request.r(i779[21], i779[22], 0, i778, 'sharedMaterial')
  var i781 = i779[23]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.sharedMaterials = i780
  i778.receiveShadows = !!i779[24]
  i778.shadowCastingMode = i779[25]
  i778.sortingLayerID = i779[26]
  i778.sortingOrder = i779[27]
  i778.lightmapIndex = i779[28]
  i778.lightmapSceneIndex = i779[29]
  i778.lightmapScaleOffset = new pc.Vec4( i779[30], i779[31], i779[32], i779[33] )
  i778.lightProbeUsage = i779[34]
  i778.reflectionProbeUsage = i779[35]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i783 = data
  i782.name = i783[0]
  i782.halfPrecision = !!i783[1]
  i782.useSimplification = !!i783[2]
  i782.useUInt32IndexFormat = !!i783[3]
  i782.vertexCount = i783[4]
  i782.aabb = i783[5]
  var i785 = i783[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( !!i785[i + 0] );
  }
  i782.streams = i784
  i782.vertices = i783[7]
  var i787 = i783[8]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i787[i + 0]) );
  }
  i782.subMeshes = i786
  var i789 = i783[9]
  var i788 = []
  for(var i = 0; i < i789.length; i += 16) {
    i788.push( new pc.Mat4().setData(i789[i + 0], i789[i + 1], i789[i + 2], i789[i + 3],  i789[i + 4], i789[i + 5], i789[i + 6], i789[i + 7],  i789[i + 8], i789[i + 9], i789[i + 10], i789[i + 11],  i789[i + 12], i789[i + 13], i789[i + 14], i789[i + 15]) );
  }
  i782.bindposes = i788
  var i791 = i783[10]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i791[i + 0]) );
  }
  i782.blendShapes = i790
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i797 = data
  i796.triangles = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i803 = data
  i802.name = i803[0]
  var i805 = i803[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i805[i + 0]) );
  }
  i802.frames = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i807 = data
  i806.name = i807[0]
  i806.atlasId = i807[1]
  i806.mipmapCount = i807[2]
  i806.hdr = !!i807[3]
  i806.size = i807[4]
  i806.anisoLevel = i807[5]
  i806.filterMode = i807[6]
  var i809 = i807[7]
  var i808 = []
  for(var i = 0; i < i809.length; i += 4) {
    i808.push( UnityEngine.Rect.MinMaxRect(i809[i + 0], i809[i + 1], i809[i + 2], i809[i + 3]) );
  }
  i806.rects = i808
  i806.wrapU = i807[8]
  i806.wrapV = i807[9]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i813 = data
  i812.name = i813[0]
  i812.index = i813[1]
  i812.startup = !!i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i815 = data
  i814.aspect = i815[0]
  i814.orthographic = !!i815[1]
  i814.orthographicSize = i815[2]
  i814.backgroundColor = new pc.Color(i815[3], i815[4], i815[5], i815[6])
  i814.nearClipPlane = i815[7]
  i814.farClipPlane = i815[8]
  i814.fieldOfView = i815[9]
  i814.depth = i815[10]
  i814.clearFlags = i815[11]
  i814.cullingMask = i815[12]
  i814.rect = i815[13]
  request.r(i815[14], i815[15], 0, i814, 'targetTexture')
  i814.usePhysicalProperties = !!i815[16]
  i814.focalLength = i815[17]
  i814.sensorSize = new pc.Vec2( i815[18], i815[19] )
  i814.lensShift = new pc.Vec2( i815[20], i815[21] )
  i814.gateFit = i815[22]
  i814.commandBufferCount = i815[23]
  i814.cameraType = i815[24]
  i814.enabled = !!i815[25]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i817 = data
  i816.type = i817[0]
  i816.color = new pc.Color(i817[1], i817[2], i817[3], i817[4])
  i816.cullingMask = i817[5]
  i816.intensity = i817[6]
  i816.range = i817[7]
  i816.spotAngle = i817[8]
  i816.shadows = i817[9]
  i816.shadowNormalBias = i817[10]
  i816.shadowBias = i817[11]
  i816.shadowStrength = i817[12]
  i816.shadowResolution = i817[13]
  i816.lightmapBakeType = i817[14]
  i816.renderMode = i817[15]
  request.r(i817[16], i817[17], 0, i816, 'cookie')
  i816.cookieSize = i817[18]
  i816.shadowNearPlane = i817[19]
  i816.occlusionMaskChannel = i817[20]
  i816.isBaked = !!i817[21]
  i816.mixedLightingMode = i817[22]
  i816.enabled = !!i817[23]
  return i816
}

Deserializers["Main"] = function (request, data, root) {
  var i818 = root || request.c( 'Main' )
  var i819 = data
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i821 = data
  i820.planeDistance = i821[0]
  i820.referencePixelsPerUnit = i821[1]
  i820.isFallbackOverlay = !!i821[2]
  i820.renderMode = i821[3]
  i820.renderOrder = i821[4]
  i820.sortingLayerName = i821[5]
  i820.sortingOrder = i821[6]
  i820.scaleFactor = i821[7]
  request.r(i821[8], i821[9], 0, i820, 'worldCamera')
  i820.overrideSorting = !!i821[10]
  i820.pixelPerfect = !!i821[11]
  i820.targetDisplay = i821[12]
  i820.overridePixelPerfect = !!i821[13]
  i820.enabled = !!i821[14]
  return i820
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i823 = data
  i822.m_UiScaleMode = i823[0]
  i822.m_ReferencePixelsPerUnit = i823[1]
  i822.m_ScaleFactor = i823[2]
  i822.m_ReferenceResolution = new pc.Vec2( i823[3], i823[4] )
  i822.m_ScreenMatchMode = i823[5]
  i822.m_MatchWidthOrHeight = i823[6]
  i822.m_PhysicalUnit = i823[7]
  i822.m_FallbackScreenDPI = i823[8]
  i822.m_DefaultSpriteDPI = i823[9]
  i822.m_DynamicPixelsPerUnit = i823[10]
  i822.m_PresetInfoIsWorld = !!i823[11]
  return i822
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i825 = data
  i824.m_IgnoreReversedGraphics = !!i825[0]
  i824.m_BlockingObjects = i825[1]
  i824.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i825[2] )
  return i824
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_FirstSelected')
  i826.m_sendNavigationEvents = !!i827[2]
  i826.m_DragThreshold = i827[3]
  return i826
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i829 = data
  i828.m_HorizontalAxis = i829[0]
  i828.m_VerticalAxis = i829[1]
  i828.m_SubmitButton = i829[2]
  i828.m_CancelButton = i829[3]
  i828.m_InputActionsPerSecond = i829[4]
  i828.m_RepeatDelay = i829[5]
  i828.m_ForceModuleActive = !!i829[6]
  i828.m_SendPointerHoverToParent = !!i829[7]
  return i828
}

Deserializers["PlayableLayout"] = function (request, data, root) {
  var i830 = root || request.c( 'PlayableLayout' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'mainCamera')
  var i833 = i831[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.gameScalers = i832
  request.r(i831[3], i831[4], 0, i830, 'backgroundRoot')
  return i830
}

Deserializers["PlayableIdleTimer"] = function (request, data, root) {
  var i836 = root || request.c( 'PlayableIdleTimer' )
  var i837 = data
  return i836
}

Deserializers["DataManager"] = function (request, data, root) {
  var i838 = root || request.c( 'DataManager' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'levelConfig')
  request.r(i839[2], i839[3], 0, i838, 'gameConfig')
  return i838
}

Deserializers["StickerManager"] = function (request, data, root) {
  var i840 = root || request.c( 'StickerManager' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'uiCanvas')
  request.r(i841[2], i841[3], 0, i840, 'StickerLayerPrefab')
  request.r(i841[4], i841[5], 0, i840, 'fingerPrefab')
  request.r(i841[6], i841[7], 0, i840, 'StickerLayerParent')
  return i840
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i842 = root || request.c( 'LevelManager' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'levelParent')
  request.r(i843[2], i843[3], 0, i842, 'effectParent')
  request.r(i843[4], i843[5], 0, i842, 'fireworksEffectPrefab')
  i842.victoryScreenDelay = i843[6]
  return i842
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i844 = root || request.c( 'GuideManager' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'guideFingerPrefab')
  request.r(i845[2], i845[3], 0, i844, 'uiCanvas')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i847 = data
  i846.ambientIntensity = i847[0]
  i846.reflectionIntensity = i847[1]
  i846.ambientMode = i847[2]
  i846.ambientLight = new pc.Color(i847[3], i847[4], i847[5], i847[6])
  i846.ambientSkyColor = new pc.Color(i847[7], i847[8], i847[9], i847[10])
  i846.ambientGroundColor = new pc.Color(i847[11], i847[12], i847[13], i847[14])
  i846.ambientEquatorColor = new pc.Color(i847[15], i847[16], i847[17], i847[18])
  i846.fogColor = new pc.Color(i847[19], i847[20], i847[21], i847[22])
  i846.fogEndDistance = i847[23]
  i846.fogStartDistance = i847[24]
  i846.fogDensity = i847[25]
  i846.fog = !!i847[26]
  request.r(i847[27], i847[28], 0, i846, 'skybox')
  i846.fogMode = i847[29]
  var i849 = i847[30]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i849[i + 0]) );
  }
  i846.lightmaps = i848
  i846.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i847[31], i846.lightProbes)
  i846.lightmapsMode = i847[32]
  i846.mixedBakeMode = i847[33]
  i846.environmentLightingMode = i847[34]
  i846.ambientProbe = new pc.SphericalHarmonicsL2(i847[35])
  request.r(i847[36], i847[37], 0, i846, 'customReflection')
  request.r(i847[38], i847[39], 0, i846, 'defaultReflection')
  i846.defaultReflectionMode = i847[40]
  i846.defaultReflectionResolution = i847[41]
  i846.sunLightObjectId = i847[42]
  i846.pixelLightCount = i847[43]
  i846.defaultReflectionHDR = !!i847[44]
  i846.hasLightDataAsset = !!i847[45]
  i846.hasManualGenerate = !!i847[46]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'lightmapColor')
  request.r(i853[2], i853[3], 0, i852, 'lightmapDirection')
  request.r(i853[4], i853[5], 0, i852, 'shadowMask')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i854 = root || new UnityEngine.LightProbes()
  var i855 = data
  return i854
}

Deserializers["MyLayerGame"] = function (request, data, root) {
  var i862 = root || request.c( 'MyLayerGame' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'counterPanel')
  request.r(i863[2], i863[3], 0, i862, 'counterText')
  return i862
}

Deserializers["MyLayerPause"] = function (request, data, root) {
  var i864 = root || request.c( 'MyLayerPause' )
  var i865 = data
  return i864
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i867 = data
  i866.m_Spacing = i867[0]
  i866.m_ChildForceExpandWidth = !!i867[1]
  i866.m_ChildForceExpandHeight = !!i867[2]
  i866.m_ChildControlWidth = !!i867[3]
  i866.m_ChildControlHeight = !!i867[4]
  i866.m_ChildScaleWidth = !!i867[5]
  i866.m_ChildScaleHeight = !!i867[6]
  i866.m_ReverseArrangement = !!i867[7]
  i866.m_Padding = UnityEngine.RectOffset.FromPaddings(i867[8], i867[9], i867[10], i867[11])
  i866.m_ChildAlignment = i867[12]
  return i866
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Button' )
  var i869 = data
  i868.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i869[0], i868.m_OnClick)
  i868.m_Navigation = request.d('UnityEngine.UI.Navigation', i869[1], i868.m_Navigation)
  i868.m_Transition = i869[2]
  i868.m_Colors = request.d('UnityEngine.UI.ColorBlock', i869[3], i868.m_Colors)
  i868.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i869[4], i868.m_SpriteState)
  i868.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i869[5], i868.m_AnimationTriggers)
  i868.m_Interactable = !!i869[6]
  request.r(i869[7], i869[8], 0, i868, 'm_TargetGraphic')
  return i868
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i871 = data
  i870.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i871[0], i870.m_PersistentCalls)
  return i870
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i873 = data
  i872.m_Mode = i873[0]
  i872.m_WrapAround = !!i873[1]
  request.r(i873[2], i873[3], 0, i872, 'm_SelectOnUp')
  request.r(i873[4], i873[5], 0, i872, 'm_SelectOnDown')
  request.r(i873[6], i873[7], 0, i872, 'm_SelectOnLeft')
  request.r(i873[8], i873[9], 0, i872, 'm_SelectOnRight')
  return i872
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i875 = data
  i874.m_NormalColor = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.m_HighlightedColor = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.m_PressedColor = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  i874.m_SelectedColor = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  i874.m_DisabledColor = new pc.Color(i875[16], i875[17], i875[18], i875[19])
  i874.m_ColorMultiplier = i875[20]
  i874.m_FadeDuration = i875[21]
  return i874
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_HighlightedSprite')
  request.r(i877[2], i877[3], 0, i876, 'm_PressedSprite')
  request.r(i877[4], i877[5], 0, i876, 'm_SelectedSprite')
  request.r(i877[6], i877[7], 0, i876, 'm_DisabledSprite')
  return i876
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i879 = data
  i878.m_NormalTrigger = i879[0]
  i878.m_HighlightedTrigger = i879[1]
  i878.m_PressedTrigger = i879[2]
  i878.m_SelectedTrigger = i879[3]
  i878.m_DisabledTrigger = i879[4]
  return i878
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Mask' )
  var i881 = data
  i880.m_ShowMaskGraphic = !!i881[0]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i883 = data
  i882.playAutomatically = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'clip')
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.clips = i884
  i882.wrapMode = i883[4]
  i882.enabled = !!i883[5]
  return i882
}

Deserializers["SC._0xc1e449cf"] = function (request, data, root) {
  var i888 = root || request.c( 'SC._0xc1e449cf' )
  var i889 = data
  return i888
}

Deserializers["SC.SCWebAdAdaptNode"] = function (request, data, root) {
  var i890 = root || request.c( 'SC.SCWebAdAdaptNode' )
  var i891 = data
  i890.landscapeData = request.d('SC._0xda5e030f', i891[0], i890.landscapeData)
  i890.portraitData = request.d('SC._0xda5e030f', i891[1], i890.portraitData)
  return i890
}

Deserializers["SC._0xda5e030f"] = function (request, data, root) {
  var i892 = root || request.c( 'SC._0xda5e030f' )
  var i893 = data
  i892.bEmpty = !!i893[0]
  i892.position = new pc.Vec3( i893[1], i893[2], i893[3] )
  i892.rotation = new pc.Quat(i893[4], i893[5], i893[6], i893[7])
  i892.scale = new pc.Vec3( i893[8], i893[9], i893[10] )
  i892.anchoredPosition = new pc.Vec2( i893[11], i893[12] )
  i892.sizeDelta = new pc.Vec2( i893[13], i893[14] )
  i892.anchorMin = new pc.Vec2( i893[15], i893[16] )
  i892.anchorMax = new pc.Vec2( i893[17], i893[18] )
  i892.pivot = new pc.Vec2( i893[19], i893[20] )
  return i892
}

Deserializers["SC.UILanguage"] = function (request, data, root) {
  var i894 = root || request.c( 'SC.UILanguage' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i894.LLang = i896
  return i894
}

Deserializers["MyLayerSettle"] = function (request, data, root) {
  var i900 = root || request.c( 'MyLayerSettle' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'winTitle')
  request.r(i901[2], i901[3], 0, i900, 'winPicture')
  request.r(i901[4], i901[5], 0, i900, 'idleTitle')
  request.r(i901[6], i901[7], 0, i900, 'idlePicture')
  request.r(i901[8], i901[9], 0, i900, 'overlay')
  request.r(i901[10], i901[11], 0, i900, 'panel')
  request.r(i901[12], i901[13], 0, i900, 'title')
  request.r(i901[14], i901[15], 0, i900, 'picture')
  request.r(i901[16], i901[17], 0, i900, 'playButton')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i905[i + 0]));
  }
  i902.ShaderCompilationErrors = i904
  i902.name = i903[1]
  i902.guid = i903[2]
  var i907 = i903[3]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i902.shaderDefinedKeywords = i906
  var i909 = i903[4]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i909[i + 0]) );
  }
  i902.passes = i908
  var i911 = i903[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i911[i + 0]) );
  }
  i902.usePasses = i910
  var i913 = i903[6]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i913[i + 0]) );
  }
  i902.defaultParameterValues = i912
  request.r(i903[7], i903[8], 0, i902, 'unityFallbackShader')
  i902.readDepth = !!i903[9]
  i902.hasDepthOnlyPass = !!i903[10]
  i902.isCreatedByShaderGraph = !!i903[11]
  i902.disableBatching = !!i903[12]
  i902.compiled = !!i903[13]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i917 = data
  i916.shaderName = i917[0]
  i916.errorMessage = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i922 = root || new pc.UnityShaderPass()
  var i923 = data
  i922.id = i923[0]
  i922.subShaderIndex = i923[1]
  i922.name = i923[2]
  i922.passType = i923[3]
  i922.grabPassTextureName = i923[4]
  i922.usePass = !!i923[5]
  i922.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[6], i922.zTest)
  i922.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[7], i922.zWrite)
  i922.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[8], i922.culling)
  i922.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i923[9], i922.blending)
  i922.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i923[10], i922.alphaBlending)
  i922.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[11], i922.colorWriteMask)
  i922.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[12], i922.offsetUnits)
  i922.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[13], i922.offsetFactor)
  i922.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[14], i922.stencilRef)
  i922.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[15], i922.stencilReadMask)
  i922.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i923[16], i922.stencilWriteMask)
  i922.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i923[17], i922.stencilOp)
  i922.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i923[18], i922.stencilOpFront)
  i922.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i923[19], i922.stencilOpBack)
  var i925 = i923[20]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i925[i + 0]) );
  }
  i922.tags = i924
  var i927 = i923[21]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i922.passDefinedKeywords = i926
  var i929 = i923[22]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i929[i + 0]) );
  }
  i922.passDefinedKeywordGroups = i928
  var i931 = i923[23]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i931[i + 0]) );
  }
  i922.variants = i930
  var i933 = i923[24]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i933[i + 0]) );
  }
  i922.excludedVariants = i932
  i922.hasDepthReader = !!i923[25]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i935 = data
  i934.val = i935[0]
  i934.name = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i937 = data
  i936.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[0], i936.src)
  i936.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[1], i936.dst)
  i936.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[2], i936.op)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i939 = data
  i938.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[0], i938.pass)
  i938.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[1], i938.fail)
  i938.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[2], i938.zFail)
  i938.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i939[3], i938.comp)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i943 = data
  i942.name = i943[0]
  i942.value = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i946.keywords = i948
  i946.hasDiscard = !!i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i953 = data
  i952.passId = i953[0]
  i952.subShaderIndex = i953[1]
  var i955 = i953[2]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i952.keywords = i954
  i952.vertexProgram = i953[3]
  i952.fragmentProgram = i953[4]
  i952.exportedForWebGl2 = !!i953[5]
  i952.readDepth = !!i953[6]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'shader')
  i958.pass = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i963 = data
  i962.name = i963[0]
  i962.type = i963[1]
  i962.value = new pc.Vec4( i963[2], i963[3], i963[4], i963[5] )
  i962.textureValue = i963[6]
  i962.shaderPropertyFlag = i963[7]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i965 = data
  i964.name = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'texture')
  i964.aabb = i965[3]
  i964.vertices = i965[4]
  i964.triangles = i965[5]
  i964.textureRect = UnityEngine.Rect.MinMaxRect(i965[6], i965[7], i965[8], i965[9])
  i964.packedRect = UnityEngine.Rect.MinMaxRect(i965[10], i965[11], i965[12], i965[13])
  i964.border = new pc.Vec4( i965[14], i965[15], i965[16], i965[17] )
  i964.transparency = i965[18]
  i964.bounds = i965[19]
  i964.pixelsPerUnit = i965[20]
  i964.textureWidth = i965[21]
  i964.textureHeight = i965[22]
  i964.nativeSize = new pc.Vec2( i965[23], i965[24] )
  i964.pivot = new pc.Vec2( i965[25], i965[26] )
  i964.textureRectOffset = new pc.Vec2( i965[27], i965[28] )
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i967 = data
  i966.name = i967[0]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i969 = data
  i968.name = i969[0]
  i968.wrapMode = i969[1]
  i968.isLooping = !!i969[2]
  i968.length = i969[3]
  var i971 = i969[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i971[i + 0]) );
  }
  i968.curves = i970
  var i973 = i969[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i973[i + 0]) );
  }
  i968.events = i972
  i968.halfPrecision = !!i969[6]
  i968._frameRate = i969[7]
  i968.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i969[8], i968.localBounds)
  i968.hasMuscleCurves = !!i969[9]
  var i975 = i969[10]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i968.clipMuscleConstant = i974
  i968.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i969[11], i968.clipBindingConstant)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i979 = data
  i978.path = i979[0]
  i978.hash = i979[1]
  i978.componentType = i979[2]
  i978.property = i979[3]
  i978.keys = i979[4]
  var i981 = i979[5]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i981[i + 0]) );
  }
  i978.objectReferenceKeys = i980
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i985 = data
  i984.time = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'value')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i989 = data
  i988.functionName = i989[0]
  i988.floatParameter = i989[1]
  i988.intParameter = i989[2]
  i988.stringParameter = i989[3]
  request.r(i989[4], i989[5], 0, i988, 'objectReferenceParameter')
  i988.time = i989[6]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i991 = data
  i990.center = new pc.Vec3( i991[0], i991[1], i991[2] )
  i990.extends = new pc.Vec3( i991[3], i991[4], i991[5] )
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i994.genericBindings = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i994.pptrCurveMapping = i998
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.ascent = i1001[1]
  i1000.originalLineHeight = i1001[2]
  i1000.fontSize = i1001[3]
  var i1003 = i1001[4]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1003[i + 0]) );
  }
  i1000.characterInfo = i1002
  request.r(i1001[5], i1001[6], 0, i1000, 'texture')
  i1000.originalFontSize = i1001[7]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1007 = data
  i1006.index = i1007[0]
  i1006.advance = i1007[1]
  i1006.bearing = i1007[2]
  i1006.glyphWidth = i1007[3]
  i1006.glyphHeight = i1007[4]
  i1006.minX = i1007[5]
  i1006.maxX = i1007[6]
  i1006.minY = i1007[7]
  i1006.maxY = i1007[8]
  i1006.uvBottomLeftX = i1007[9]
  i1006.uvBottomLeftY = i1007[10]
  i1006.uvBottomRightX = i1007[11]
  i1006.uvBottomRightY = i1007[12]
  i1006.uvTopLeftX = i1007[13]
  i1006.uvTopLeftY = i1007[14]
  i1006.uvTopRightX = i1007[15]
  i1006.uvTopRightY = i1007[16]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1009 = data
  i1008.name = i1009[0]
  var i1011 = i1009[1]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1011[i + 0]) );
  }
  i1008.layers = i1010
  var i1013 = i1009[2]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1013[i + 0]) );
  }
  i1008.parameters = i1012
  i1008.animationClips = i1009[3]
  i1008.avatarUnsupported = i1009[4]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.defaultWeight = i1017[1]
  i1016.blendingMode = i1017[2]
  i1016.avatarMask = i1017[3]
  i1016.syncedLayerIndex = i1017[4]
  i1016.syncedLayerAffectsTiming = !!i1017[5]
  i1016.syncedLayers = i1017[6]
  i1016.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1017[7], i1016.stateMachine)
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  i1018.path = i1019[2]
  var i1021 = i1019[3]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1021[i + 0]) );
  }
  i1018.states = i1020
  var i1023 = i1019[4]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1023[i + 0]) );
  }
  i1018.machines = i1022
  var i1025 = i1019[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1025[i + 0]) );
  }
  i1018.entryStateTransitions = i1024
  var i1027 = i1019[6]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1027[i + 0]) );
  }
  i1018.exitStateTransitions = i1026
  var i1029 = i1019[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1029[i + 0]) );
  }
  i1018.anyStateTransitions = i1028
  i1018.defaultStateId = i1019[8]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  i1032.cycleOffset = i1033[2]
  i1032.cycleOffsetParameter = i1033[3]
  i1032.cycleOffsetParameterActive = !!i1033[4]
  i1032.mirror = !!i1033[5]
  i1032.mirrorParameter = i1033[6]
  i1032.mirrorParameterActive = !!i1033[7]
  i1032.motionId = i1033[8]
  i1032.nameHash = i1033[9]
  i1032.fullPathHash = i1033[10]
  i1032.speed = i1033[11]
  i1032.speedParameter = i1033[12]
  i1032.speedParameterActive = !!i1033[13]
  i1032.tag = i1033[14]
  i1032.tagHash = i1033[15]
  i1032.writeDefaultValues = !!i1033[16]
  var i1035 = i1033[17]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1032.behaviours = i1034
  var i1037 = i1033[18]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1037[i + 0]) );
  }
  i1032.transitions = i1036
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1043 = data
  i1042.fullPath = i1043[0]
  i1042.canTransitionToSelf = !!i1043[1]
  i1042.duration = i1043[2]
  i1042.exitTime = i1043[3]
  i1042.hasExitTime = !!i1043[4]
  i1042.hasFixedDuration = !!i1043[5]
  i1042.interruptionSource = i1043[6]
  i1042.offset = i1043[7]
  i1042.orderedInterruption = !!i1043[8]
  i1042.destinationStateId = i1043[9]
  i1042.isExit = !!i1043[10]
  i1042.mute = !!i1043[11]
  i1042.solo = !!i1043[12]
  var i1045 = i1043[13]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1045[i + 0]) );
  }
  i1042.conditions = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1051 = data
  i1050.destinationStateId = i1051[0]
  i1050.isExit = !!i1051[1]
  i1050.mute = !!i1051[2]
  i1050.solo = !!i1051[3]
  var i1053 = i1051[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1053[i + 0]) );
  }
  i1050.conditions = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1057 = data
  i1056.defaultBool = !!i1057[0]
  i1056.defaultFloat = i1057[1]
  i1056.defaultInt = i1057[2]
  i1056.name = i1057[3]
  i1056.nameHash = i1057[4]
  i1056.type = i1057[5]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.bytes64 = i1059[1]
  i1058.data = i1059[2]
  return i1058
}

Deserializers["LevelConfig"] = function (request, data, root) {
  var i1060 = root || request.c( 'LevelConfig' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('LevelConfig+LevelData', i1063[i + 0]) );
  }
  i1060.levelDataList = i1062
  return i1060
}

Deserializers["LevelConfig+LevelData"] = function (request, data, root) {
  var i1066 = root || request.c( 'LevelConfig+LevelData' )
  var i1067 = data
  i1066.levelID = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'levelPrefab')
  i1066.levelPrefabPath = i1067[3]
  i1066.imageFolderPath = i1067[4]
  request.r(i1067[5], i1067[6], 0, i1066, 'backgroundImage')
  return i1066
}

Deserializers["DragonBones.UnityDragonBonesData"] = function (request, data, root) {
  var i1068 = root || request.c( 'DragonBones.UnityDragonBonesData' )
  var i1069 = data
  i1068.dataName = i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'dragonBonesJSON')
  var i1071 = i1069[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('DragonBones.UnityDragonBonesData+TextureAtlas', i1071[i + 0]) );
  }
  i1068.textureAtlas = i1070
  return i1068
}

Deserializers["DragonBones.UnityDragonBonesData+TextureAtlas"] = function (request, data, root) {
  var i1074 = root || request.c( 'DragonBones.UnityDragonBonesData+TextureAtlas' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'textureAtlasJSON')
  request.r(i1075[2], i1075[3], 0, i1074, 'texture')
  request.r(i1075[4], i1075[5], 0, i1074, 'material')
  request.r(i1075[6], i1075[7], 0, i1074, 'uiMaterial')
  return i1074
}

Deserializers["GameConfig"] = function (request, data, root) {
  var i1076 = root || request.c( 'GameConfig' )
  var i1077 = data
  i1076.stickerMaxHeight = i1077[0]
  i1076.dragStickerScaleAnimationDuration = i1077[1]
  i1076.dragStickerDestroyAnimationDuration = i1077[2]
  i1076.guideFingerMoveAnimationDuration = i1077[3]
  i1076.progressBarAnimationDuration = i1077[4]
  i1076.idleSettleSeconds = i1077[5]
  i1076.stickerRefreshAudioDelay = i1077[6]
  return i1076
}

Deserializers["SC.WebAdConfig"] = function (request, data, root) {
  var i1078 = root || request.c( 'SC.WebAdConfig' )
  var i1079 = data
  i1078.EEditorLanguage = i1079[0]
  var i1081 = i1079[1]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('SC.WindowConfig')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('SC.WindowConfig', i1081[i + 0]));
  }
  i1078.WindowConfigs = i1080
  i1078.BUseSCFontTtf = !!i1079[2]
  i1078.IAutoSettleDuration = i1079[3]
  i1078.IDebugLanguage = i1079[4]
  i1078.eDebugWebPlatform = i1079[5]
  i1078.fDebugCheckEnterGameTime = i1079[6]
  i1078.fDebugAdDuration = i1079[7]
  i1078.EGraphicsAPI = i1079[8]
  return i1078
}

Deserializers["SC.WindowConfig"] = function (request, data, root) {
  var i1084 = root || request.c( 'SC.WindowConfig' )
  var i1085 = data
  i1084.winName = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'prefab')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1089[i + 0]) );
  }
  i1086.files = i1088
  i1086.componentToPrefabIds = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1093 = data
  i1092.path = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'unityObject')
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1097[i + 0]) );
  }
  i1094.scriptsExecutionOrder = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1099[i + 0]) );
  }
  i1094.sortingLayers = i1098
  var i1101 = i1095[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1101[i + 0]) );
  }
  i1094.cullingLayers = i1100
  i1094.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1095[3], i1094.timeSettings)
  i1094.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1095[4], i1094.physicsSettings)
  i1094.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1095[5], i1094.physics2DSettings)
  i1094.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1095[6], i1094.qualitySettings)
  i1094.enableRealtimeShadows = !!i1095[7]
  i1094.enableAutoInstancing = !!i1095[8]
  i1094.enableStaticBatching = !!i1095[9]
  i1094.enableDynamicBatching = !!i1095[10]
  i1094.usePreservativeDynamicBatching = !!i1095[11]
  i1094.lightmapEncodingQuality = i1095[12]
  i1094.desiredColorSpace = i1095[13]
  var i1103 = i1095[14]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1094.allTags = i1102
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.value = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1111 = data
  i1110.id = i1111[0]
  i1110.name = i1111[1]
  i1110.value = i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1117 = data
  i1116.fixedDeltaTime = i1117[0]
  i1116.maximumDeltaTime = i1117[1]
  i1116.timeScale = i1117[2]
  i1116.maximumParticleTimestep = i1117[3]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1119 = data
  i1118.gravity = new pc.Vec3( i1119[0], i1119[1], i1119[2] )
  i1118.defaultSolverIterations = i1119[3]
  i1118.bounceThreshold = i1119[4]
  i1118.autoSyncTransforms = !!i1119[5]
  i1118.autoSimulation = !!i1119[6]
  var i1121 = i1119[7]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1121[i + 0]) );
  }
  i1118.collisionMatrix = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.layerId = i1125[1]
  i1124.otherLayerId = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'material')
  i1126.gravity = new pc.Vec2( i1127[2], i1127[3] )
  i1126.positionIterations = i1127[4]
  i1126.velocityIterations = i1127[5]
  i1126.velocityThreshold = i1127[6]
  i1126.maxLinearCorrection = i1127[7]
  i1126.maxAngularCorrection = i1127[8]
  i1126.maxTranslationSpeed = i1127[9]
  i1126.maxRotationSpeed = i1127[10]
  i1126.baumgarteScale = i1127[11]
  i1126.baumgarteTOIScale = i1127[12]
  i1126.timeToSleep = i1127[13]
  i1126.linearSleepTolerance = i1127[14]
  i1126.angularSleepTolerance = i1127[15]
  i1126.defaultContactOffset = i1127[16]
  i1126.autoSimulation = !!i1127[17]
  i1126.queriesHitTriggers = !!i1127[18]
  i1126.queriesStartInColliders = !!i1127[19]
  i1126.callbacksOnDisable = !!i1127[20]
  i1126.reuseCollisionCallbacks = !!i1127[21]
  i1126.autoSyncTransforms = !!i1127[22]
  var i1129 = i1127[23]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1129[i + 0]) );
  }
  i1126.collisionMatrix = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1133 = data
  i1132.enabled = !!i1133[0]
  i1132.layerId = i1133[1]
  i1132.otherLayerId = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1137[i + 0]) );
  }
  i1134.qualityLevels = i1136
  var i1139 = i1135[1]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1134.names = i1138
  i1134.shadows = i1135[2]
  i1134.anisotropicFiltering = i1135[3]
  i1134.antiAliasing = i1135[4]
  i1134.lodBias = i1135[5]
  i1134.shadowCascades = i1135[6]
  i1134.shadowDistance = i1135[7]
  i1134.shadowmaskMode = i1135[8]
  i1134.shadowProjection = i1135[9]
  i1134.shadowResolution = i1135[10]
  i1134.softParticles = !!i1135[11]
  i1134.softVegetation = !!i1135[12]
  i1134.activeColorSpace = i1135[13]
  i1134.desiredColorSpace = i1135[14]
  i1134.masterTextureLimit = i1135[15]
  i1134.maxQueuedFrames = i1135[16]
  i1134.particleRaycastBudget = i1135[17]
  i1134.pixelLightCount = i1135[18]
  i1134.realtimeReflectionProbes = !!i1135[19]
  i1134.shadowCascade2Split = i1135[20]
  i1134.shadowCascade4Split = new pc.Vec3( i1135[21], i1135[22], i1135[23] )
  i1134.streamingMipmapsActive = !!i1135[24]
  i1134.vSyncCount = i1135[25]
  i1134.asyncUploadBufferSize = i1135[26]
  i1134.asyncUploadTimeSlice = i1135[27]
  i1134.billboardsFaceCameraPosition = !!i1135[28]
  i1134.shadowNearPlaneOffset = i1135[29]
  i1134.streamingMipmapsMemoryBudget = i1135[30]
  i1134.maximumLODLevel = i1135[31]
  i1134.streamingMipmapsAddAllCameras = !!i1135[32]
  i1134.streamingMipmapsMaxLevelReduction = i1135[33]
  i1134.streamingMipmapsRenderersPerFrame = i1135[34]
  i1134.resolutionScalingFixedDPIFactor = i1135[35]
  i1134.streamingMipmapsMaxFileIORequests = i1135[36]
  i1134.currentQualityLevel = i1135[37]
  return i1134
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'm_ObjectArgument')
  i1142.m_ObjectArgumentAssemblyTypeName = i1143[2]
  i1142.m_IntArgument = i1143[3]
  i1142.m_FloatArgument = i1143[4]
  i1142.m_StringArgument = i1143[5]
  i1142.m_BoolArgument = !!i1143[6]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1147 = data
  i1146.weight = i1147[0]
  i1146.vertices = i1147[1]
  i1146.normals = i1147[2]
  i1146.tangents = i1147[3]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1151 = data
  i1150.mode = i1151[0]
  i1150.parameter = i1151[1]
  i1150.threshold = i1151[2]
  return i1150
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[32],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[32],"98":[14],"99":[100],"101":[100],"36":[18],"102":[11],"13":[11],"103":[19,18],"104":[24],"105":[36],"106":[4],"107":[18],"108":[18],"38":[36],"21":[19,18],"109":[18],"37":[36],"26":[18],"110":[18],"27":[18],"111":[18],"112":[18],"113":[18],"52":[18],"54":[18],"114":[18],"115":[19,18],"25":[18],"116":[18],"22":[18],"117":[18],"24":[19,18],"118":[18],"119":[39],"120":[39],"40":[39],"121":[39],"122":[32],"123":[32]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LevelController","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","StickerItem","UnityEngine.PolygonCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DragonBones.UnityArmatureComponent","DragonBones.UnityDragonBonesData","DragonBones.UnityCombineMeshs","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.ScrollRect","StickerLayer","UnityEngine.UI.Text","UnityEngine.UI.RectMask2D","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Font","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","Main","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableLayout","PlayableIdleTimer","DataManager","LevelConfig","GameConfig","StickerManager","LevelManager","GuideManager","UnityEngine.Cubemap","MyLayerGame","MyLayerPause","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.Mask","UnityEngine.Animation","UnityEngine.AnimationClip","SC._0xc1e449cf","SC.SCWebAdAdaptNode","SC.UILanguage","MyLayerSettle","UnityEngine.TextAsset","SC.WebAdConfig","UnityEngine.AudioClip","UnityEditor.BrokenPrefabAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","DragonBones.UnityUGUIDisplay","_0x77cefece","SC.SCWebAdAdaptCanvas","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "capybararoom_AbridgedVersion_LUNA_2";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39699";

Deserializers.projectId = "877d01838a98c1e4f8a1396e9eb7ceb8";

Deserializers.packagesInfo = "com.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "./Assets/Plugins/SCWebSDK/webGL/WebGLLib.js";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "Simplecreator";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.Simplecreator.capybararoom";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d1321cfd-9e4e-4f31-8aa7-4bd1ad772e9c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["SC","_0xea696b74","_0xfa2bc922"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["SC","_0xea696b74","_0x2f6a202b"]],[["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

