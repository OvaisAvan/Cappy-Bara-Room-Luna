var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6340 = root || request.c( 'UnityEngine.JointSpring' )
  var i6341 = data
  i6340.spring = i6341[0]
  i6340.damper = i6341[1]
  i6340.targetPosition = i6341[2]
  return i6340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6342 = root || request.c( 'UnityEngine.JointMotor' )
  var i6343 = data
  i6342.m_TargetVelocity = i6343[0]
  i6342.m_Force = i6343[1]
  i6342.m_FreeSpin = i6343[2]
  return i6342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6344 = root || request.c( 'UnityEngine.JointLimits' )
  var i6345 = data
  i6344.m_Min = i6345[0]
  i6344.m_Max = i6345[1]
  i6344.m_Bounciness = i6345[2]
  i6344.m_BounceMinVelocity = i6345[3]
  i6344.m_ContactDistance = i6345[4]
  i6344.minBounce = i6345[5]
  i6344.maxBounce = i6345[6]
  return i6344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6346 = root || request.c( 'UnityEngine.JointDrive' )
  var i6347 = data
  i6346.m_PositionSpring = i6347[0]
  i6346.m_PositionDamper = i6347[1]
  i6346.m_MaximumForce = i6347[2]
  i6346.m_UseAcceleration = i6347[3]
  return i6346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6349 = data
  i6348.m_Spring = i6349[0]
  i6348.m_Damper = i6349[1]
  return i6348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6351 = data
  i6350.m_Limit = i6351[0]
  i6350.m_Bounciness = i6351[1]
  i6350.m_ContactDistance = i6351[2]
  return i6350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6353 = data
  i6352.m_ExtremumSlip = i6353[0]
  i6352.m_ExtremumValue = i6353[1]
  i6352.m_AsymptoteSlip = i6353[2]
  i6352.m_AsymptoteValue = i6353[3]
  i6352.m_Stiffness = i6353[4]
  return i6352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6355 = data
  i6354.m_LowerAngle = i6355[0]
  i6354.m_UpperAngle = i6355[1]
  return i6354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6357 = data
  i6356.m_MotorSpeed = i6357[0]
  i6356.m_MaximumMotorTorque = i6357[1]
  return i6356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6359 = data
  i6358.m_DampingRatio = i6359[0]
  i6358.m_Frequency = i6359[1]
  i6358.m_Angle = i6359[2]
  return i6358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6361 = data
  i6360.m_LowerTranslation = i6361[0]
  i6360.m_UpperTranslation = i6361[1]
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6363 = data
  i6362.name = i6363[0]
  i6362.width = i6363[1]
  i6362.height = i6363[2]
  i6362.mipmapCount = i6363[3]
  i6362.anisoLevel = i6363[4]
  i6362.filterMode = i6363[5]
  i6362.hdr = !!i6363[6]
  i6362.format = i6363[7]
  i6362.wrapMode = i6363[8]
  i6362.alphaIsTransparency = !!i6363[9]
  i6362.alphaSource = i6363[10]
  i6362.graphicsFormat = i6363[11]
  i6362.sRGBTexture = !!i6363[12]
  i6362.desiredColorSpace = i6363[13]
  i6362.wrapU = i6363[14]
  i6362.wrapV = i6363[15]
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6365 = data
  i6364.position = new pc.Vec3( i6365[0], i6365[1], i6365[2] )
  i6364.scale = new pc.Vec3( i6365[3], i6365[4], i6365[5] )
  i6364.rotation = new pc.Quat(i6365[6], i6365[7], i6365[8], i6365[9])
  return i6364
}

Deserializers["LevelController"] = function (request, data, root) {
  var i6366 = root || request.c( 'LevelController' )
  var i6367 = data
  i6366.levelNum = i6367[0]
  var i6369 = i6367[1]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 2) {
  request.r(i6369[i + 0], i6369[i + 1], 2, i6368, '')
  }
  i6366.WaveArray = i6368
  var i6371 = i6367[2]
  var i6370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6371.length; i += 2) {
  request.r(i6371[i + 0], i6371[i + 1], 1, i6370, '')
  }
  i6366.waveChildren = i6370
  var i6373 = i6367[3]
  var i6372 = []
  for(var i = 0; i < i6373.length; i += 2) {
  request.r(i6373[i + 0], i6373[i + 1], 2, i6372, '')
  }
  i6366.StickerArray = i6372
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6379 = data
  i6378.color = new pc.Color(i6379[0], i6379[1], i6379[2], i6379[3])
  request.r(i6379[4], i6379[5], 0, i6378, 'sprite')
  i6378.flipX = !!i6379[6]
  i6378.flipY = !!i6379[7]
  i6378.drawMode = i6379[8]
  i6378.size = new pc.Vec2( i6379[9], i6379[10] )
  i6378.tileMode = i6379[11]
  i6378.adaptiveModeThreshold = i6379[12]
  i6378.maskInteraction = i6379[13]
  i6378.spriteSortPoint = i6379[14]
  i6378.enabled = !!i6379[15]
  request.r(i6379[16], i6379[17], 0, i6378, 'sharedMaterial')
  var i6381 = i6379[18]
  var i6380 = []
  for(var i = 0; i < i6381.length; i += 2) {
  request.r(i6381[i + 0], i6381[i + 1], 2, i6380, '')
  }
  i6378.sharedMaterials = i6380
  i6378.receiveShadows = !!i6379[19]
  i6378.shadowCastingMode = i6379[20]
  i6378.sortingLayerID = i6379[21]
  i6378.sortingOrder = i6379[22]
  i6378.lightmapIndex = i6379[23]
  i6378.lightmapSceneIndex = i6379[24]
  i6378.lightmapScaleOffset = new pc.Vec4( i6379[25], i6379[26], i6379[27], i6379[28] )
  i6378.lightProbeUsage = i6379[29]
  i6378.reflectionProbeUsage = i6379[30]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6385 = data
  i6384.name = i6385[0]
  i6384.tagId = i6385[1]
  i6384.enabled = !!i6385[2]
  i6384.isStatic = !!i6385[3]
  i6384.layer = i6385[4]
  return i6384
}

Deserializers["StickerItem"] = function (request, data, root) {
  var i6386 = root || request.c( 'StickerItem' )
  var i6387 = data
  request.r(i6387[0], i6387[1], 0, i6386, 'sprite')
  request.r(i6387[2], i6387[3], 0, i6386, 'armatureNode')
  request.r(i6387[4], i6387[5], 0, i6386, 'effectNode')
  i6386.hideSpriteWhenEffectActive = !!i6387[6]
  i6386.type = i6387[7]
  i6386.layerType = i6387[8]
  i6386.isClickable = !!i6387[9]
  i6386.isCompleted = !!i6387[10]
  i6386.requiredOverlapPercentage = i6387[11]
  i6386.size = i6387[12]
  i6386.fingerAnchorPosition = new pc.Vec2( i6387[13], i6387[14] )
  i6386.audioVolume = i6387[15]
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i6389 = data
  i6388.usedByComposite = !!i6389[0]
  i6388.autoTiling = !!i6389[1]
  var i6391 = i6389[2]
  var i6390 = []
  for(var i = 0; i < i6391.length; i += 1) {
  var i6393 = i6391[i + 0]
  var i6392 = []
  for(var i = 0; i < i6393.length; i += 2) {
    i6392.push( new pc.Vec2( i6393[i + 0], i6393[i + 1] ) );
  }
    i6390.push( i6392 );
  }
  i6388.points = i6390
  i6388.enabled = !!i6389[3]
  i6388.isTrigger = !!i6389[4]
  i6388.usedByEffector = !!i6389[5]
  i6388.density = i6389[6]
  i6388.offset = new pc.Vec2( i6389[7], i6389[8] )
  request.r(i6389[9], i6389[10], 0, i6388, 'material')
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6401 = data
  request.r(i6401[0], i6401[1], 0, i6400, 'animatorController')
  request.r(i6401[2], i6401[3], 0, i6400, 'avatar')
  i6400.updateMode = i6401[4]
  i6400.hasTransformHierarchy = !!i6401[5]
  i6400.applyRootMotion = !!i6401[6]
  var i6403 = i6401[7]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 2) {
  request.r(i6403[i + 0], i6403[i + 1], 2, i6402, '')
  }
  i6400.humanBones = i6402
  i6400.enabled = !!i6401[8]
  return i6400
}

Deserializers["DragonBones.UnityArmatureComponent"] = function (request, data, root) {
  var i6406 = root || request.c( 'DragonBones.UnityArmatureComponent' )
  var i6407 = data
  request.r(i6407[0], i6407[1], 0, i6406, 'unityData')
  i6406.armatureName = i6407[2]
  i6406.isUGUI = !!i6407[3]
  i6406.debugDraw = !!i6407[4]
  i6406.animationName = i6407[5]
  i6406._playTimes = i6407[6]
  i6406._timeScale = i6407[7]
  i6406._sortingMode = i6407[8]
  i6406._sortingLayerName = i6407[9]
  i6406._sortingOrder = i6407[10]
  i6406._zSpace = i6407[11]
  i6406._flipX = !!i6407[12]
  i6406._flipY = !!i6407[13]
  i6406._closeCombineMeshs = !!i6407[14]
  return i6406
}

Deserializers["DragonBones.UnityCombineMeshs"] = function (request, data, root) {
  var i6408 = root || request.c( 'DragonBones.UnityCombineMeshs' )
  var i6409 = data
  var i6411 = i6409[0]
  var i6410 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6411.length; i += 1) {
    i6410.add(i6411[i + 0]);
  }
  i6408.slotNames = i6410
  i6408.dirty = !!i6409[1]
  return i6408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6415 = data
  request.r(i6415[0], i6415[1], 0, i6414, 'additionalVertexStreams')
  i6414.enabled = !!i6415[2]
  request.r(i6415[3], i6415[4], 0, i6414, 'sharedMaterial')
  var i6417 = i6415[5]
  var i6416 = []
  for(var i = 0; i < i6417.length; i += 2) {
  request.r(i6417[i + 0], i6417[i + 1], 2, i6416, '')
  }
  i6414.sharedMaterials = i6416
  i6414.receiveShadows = !!i6415[6]
  i6414.shadowCastingMode = i6415[7]
  i6414.sortingLayerID = i6415[8]
  i6414.sortingOrder = i6415[9]
  i6414.lightmapIndex = i6415[10]
  i6414.lightmapSceneIndex = i6415[11]
  i6414.lightmapScaleOffset = new pc.Vec4( i6415[12], i6415[13], i6415[14], i6415[15] )
  i6414.lightProbeUsage = i6415[16]
  i6414.reflectionProbeUsage = i6415[17]
  return i6414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6419 = data
  request.r(i6419[0], i6419[1], 0, i6418, 'sharedMesh')
  return i6418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6420 = root || new pc.UnityMaterial()
  var i6421 = data
  i6420.name = i6421[0]
  request.r(i6421[1], i6421[2], 0, i6420, 'shader')
  i6420.renderQueue = i6421[3]
  i6420.enableInstancing = !!i6421[4]
  var i6423 = i6421[5]
  var i6422 = []
  for(var i = 0; i < i6423.length; i += 1) {
    i6422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6423[i + 0]) );
  }
  i6420.floatParameters = i6422
  var i6425 = i6421[6]
  var i6424 = []
  for(var i = 0; i < i6425.length; i += 1) {
    i6424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6425[i + 0]) );
  }
  i6420.colorParameters = i6424
  var i6427 = i6421[7]
  var i6426 = []
  for(var i = 0; i < i6427.length; i += 1) {
    i6426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6427[i + 0]) );
  }
  i6420.vectorParameters = i6426
  var i6429 = i6421[8]
  var i6428 = []
  for(var i = 0; i < i6429.length; i += 1) {
    i6428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6429[i + 0]) );
  }
  i6420.textureParameters = i6428
  var i6431 = i6421[9]
  var i6430 = []
  for(var i = 0; i < i6431.length; i += 1) {
    i6430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6431[i + 0]) );
  }
  i6420.materialFlags = i6430
  return i6420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6435 = data
  i6434.name = i6435[0]
  i6434.value = i6435[1]
  return i6434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6439 = data
  i6438.name = i6439[0]
  i6438.value = new pc.Color(i6439[1], i6439[2], i6439[3], i6439[4])
  return i6438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6443 = data
  i6442.name = i6443[0]
  i6442.value = new pc.Vec4( i6443[1], i6443[2], i6443[3], i6443[4] )
  return i6442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6447 = data
  i6446.name = i6447[0]
  request.r(i6447[1], i6447[2], 0, i6446, 'value')
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6451 = data
  i6450.name = i6451[0]
  i6450.enabled = !!i6451[1]
  return i6450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6453 = data
  i6452.pivot = new pc.Vec2( i6453[0], i6453[1] )
  i6452.anchorMin = new pc.Vec2( i6453[2], i6453[3] )
  i6452.anchorMax = new pc.Vec2( i6453[4], i6453[5] )
  i6452.sizeDelta = new pc.Vec2( i6453[6], i6453[7] )
  i6452.anchoredPosition3D = new pc.Vec3( i6453[8], i6453[9], i6453[10] )
  i6452.rotation = new pc.Quat(i6453[11], i6453[12], i6453[13], i6453[14])
  i6452.scale = new pc.Vec3( i6453[15], i6453[16], i6453[17] )
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6455 = data
  i6454.cullTransparentMesh = !!i6455[0]
  return i6454
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6456 = root || request.c( 'UnityEngine.UI.Image' )
  var i6457 = data
  request.r(i6457[0], i6457[1], 0, i6456, 'm_Sprite')
  i6456.m_Type = i6457[2]
  i6456.m_PreserveAspect = !!i6457[3]
  i6456.m_FillCenter = !!i6457[4]
  i6456.m_FillMethod = i6457[5]
  i6456.m_FillAmount = i6457[6]
  i6456.m_FillClockwise = !!i6457[7]
  i6456.m_FillOrigin = i6457[8]
  i6456.m_UseSpriteMesh = !!i6457[9]
  i6456.m_PixelsPerUnitMultiplier = i6457[10]
  request.r(i6457[11], i6457[12], 0, i6456, 'm_Material')
  i6456.m_Maskable = !!i6457[13]
  i6456.m_Color = new pc.Color(i6457[14], i6457[15], i6457[16], i6457[17])
  i6456.m_RaycastTarget = !!i6457[18]
  i6456.m_RaycastPadding = new pc.Vec4( i6457[19], i6457[20], i6457[21], i6457[22] )
  return i6456
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i6458 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i6459 = data
  request.r(i6459[0], i6459[1], 0, i6458, 'm_Content')
  i6458.m_Horizontal = !!i6459[2]
  i6458.m_Vertical = !!i6459[3]
  i6458.m_MovementType = i6459[4]
  i6458.m_Elasticity = i6459[5]
  i6458.m_Inertia = !!i6459[6]
  i6458.m_DecelerationRate = i6459[7]
  i6458.m_ScrollSensitivity = i6459[8]
  request.r(i6459[9], i6459[10], 0, i6458, 'm_Viewport')
  request.r(i6459[11], i6459[12], 0, i6458, 'm_HorizontalScrollbar')
  request.r(i6459[13], i6459[14], 0, i6458, 'm_VerticalScrollbar')
  i6458.m_HorizontalScrollbarVisibility = i6459[15]
  i6458.m_VerticalScrollbarVisibility = i6459[16]
  i6458.m_HorizontalScrollbarSpacing = i6459[17]
  i6458.m_VerticalScrollbarSpacing = i6459[18]
  i6458.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i6459[19], i6458.m_OnValueChanged)
  return i6458
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i6460 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i6461 = data
  i6460.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6461[0], i6460.m_PersistentCalls)
  return i6460
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6462 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6463 = data
  var i6465 = i6463[0]
  var i6464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6465.length; i += 1) {
    i6464.add(request.d('UnityEngine.Events.PersistentCall', i6465[i + 0]));
  }
  i6462.m_Calls = i6464
  return i6462
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6469 = data
  request.r(i6469[0], i6469[1], 0, i6468, 'm_Target')
  i6468.m_TargetAssemblyTypeName = i6469[2]
  i6468.m_MethodName = i6469[3]
  i6468.m_Mode = i6469[4]
  i6468.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6469[5], i6468.m_Arguments)
  i6468.m_CallState = i6469[6]
  return i6468
}

Deserializers["StickerLayer"] = function (request, data, root) {
  var i6470 = root || request.c( 'StickerLayer' )
  var i6471 = data
  i6470.currentLayerType = i6471[0]
  request.r(i6471[1], i6471[2], 0, i6470, 'stickerParent')
  request.r(i6471[3], i6471[4], 0, i6470, 'leftArrow')
  request.r(i6471[5], i6471[6], 0, i6470, 'rightArrow')
  request.r(i6471[7], i6471[8], 0, i6470, 'textBackground')
  request.r(i6471[9], i6471[10], 0, i6470, 'textComponent')
  request.r(i6471[11], i6471[12], 0, i6470, 'emptyStateText')
  return i6470
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i6472 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i6473 = data
  i6472.m_Padding = new pc.Vec4( i6473[0], i6473[1], i6473[2], i6473[3] )
  i6472.m_Softness = new pc.Vec2( i6473[4], i6473[5] )
  return i6472
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i6474 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i6475 = data
  i6474.m_HorizontalFit = i6475[0]
  i6474.m_VerticalFit = i6475[1]
  return i6474
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6476 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6477 = data
  i6476.m_Spacing = i6477[0]
  i6476.m_ChildForceExpandWidth = !!i6477[1]
  i6476.m_ChildForceExpandHeight = !!i6477[2]
  i6476.m_ChildControlWidth = !!i6477[3]
  i6476.m_ChildControlHeight = !!i6477[4]
  i6476.m_ChildScaleWidth = !!i6477[5]
  i6476.m_ChildScaleHeight = !!i6477[6]
  i6476.m_ReverseArrangement = !!i6477[7]
  i6476.m_Padding = UnityEngine.RectOffset.FromPaddings(i6477[8], i6477[9], i6477[10], i6477[11])
  i6476.m_ChildAlignment = i6477[12]
  return i6476
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6478 = root || request.c( 'UnityEngine.UI.Text' )
  var i6479 = data
  i6478.m_FontData = request.d('UnityEngine.UI.FontData', i6479[0], i6478.m_FontData)
  i6478.m_Text = i6479[1]
  request.r(i6479[2], i6479[3], 0, i6478, 'm_Material')
  i6478.m_Maskable = !!i6479[4]
  i6478.m_Color = new pc.Color(i6479[5], i6479[6], i6479[7], i6479[8])
  i6478.m_RaycastTarget = !!i6479[9]
  i6478.m_RaycastPadding = new pc.Vec4( i6479[10], i6479[11], i6479[12], i6479[13] )
  return i6478
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6480 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6481 = data
  request.r(i6481[0], i6481[1], 0, i6480, 'm_Font')
  i6480.m_FontSize = i6481[2]
  i6480.m_FontStyle = i6481[3]
  i6480.m_BestFit = !!i6481[4]
  i6480.m_MinSize = i6481[5]
  i6480.m_MaxSize = i6481[6]
  i6480.m_Alignment = i6481[7]
  i6480.m_AlignByGeometry = !!i6481[8]
  i6480.m_RichText = !!i6481[9]
  i6480.m_HorizontalOverflow = i6481[10]
  i6480.m_VerticalOverflow = i6481[11]
  i6480.m_LineSpacing = i6481[12]
  return i6480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6483 = data
  i6482.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6483[0], i6482.main)
  i6482.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6483[1], i6482.colorBySpeed)
  i6482.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6483[2], i6482.colorOverLifetime)
  i6482.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6483[3], i6482.emission)
  i6482.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6483[4], i6482.rotationBySpeed)
  i6482.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6483[5], i6482.rotationOverLifetime)
  i6482.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6483[6], i6482.shape)
  i6482.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6483[7], i6482.sizeBySpeed)
  i6482.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6483[8], i6482.sizeOverLifetime)
  i6482.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6483[9], i6482.textureSheetAnimation)
  i6482.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6483[10], i6482.velocityOverLifetime)
  i6482.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6483[11], i6482.noise)
  i6482.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6483[12], i6482.inheritVelocity)
  i6482.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6483[13], i6482.forceOverLifetime)
  i6482.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6483[14], i6482.limitVelocityOverLifetime)
  i6482.useAutoRandomSeed = !!i6483[15]
  i6482.randomSeed = i6483[16]
  return i6482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6484 = root || new pc.ParticleSystemMain()
  var i6485 = data
  i6484.duration = i6485[0]
  i6484.loop = !!i6485[1]
  i6484.prewarm = !!i6485[2]
  i6484.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[3], i6484.startDelay)
  i6484.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[4], i6484.startLifetime)
  i6484.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[5], i6484.startSpeed)
  i6484.startSize3D = !!i6485[6]
  i6484.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[7], i6484.startSizeX)
  i6484.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[8], i6484.startSizeY)
  i6484.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[9], i6484.startSizeZ)
  i6484.startRotation3D = !!i6485[10]
  i6484.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[11], i6484.startRotationX)
  i6484.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[12], i6484.startRotationY)
  i6484.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[13], i6484.startRotationZ)
  i6484.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6485[14], i6484.startColor)
  i6484.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6485[15], i6484.gravityModifier)
  i6484.simulationSpace = i6485[16]
  request.r(i6485[17], i6485[18], 0, i6484, 'customSimulationSpace')
  i6484.simulationSpeed = i6485[19]
  i6484.useUnscaledTime = !!i6485[20]
  i6484.scalingMode = i6485[21]
  i6484.playOnAwake = !!i6485[22]
  i6484.maxParticles = i6485[23]
  i6484.emitterVelocityMode = i6485[24]
  i6484.stopAction = i6485[25]
  return i6484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6486 = root || new pc.MinMaxCurve()
  var i6487 = data
  i6486.mode = i6487[0]
  i6486.curveMin = new pc.AnimationCurve( { keys_flow: i6487[1] } )
  i6486.curveMax = new pc.AnimationCurve( { keys_flow: i6487[2] } )
  i6486.curveMultiplier = i6487[3]
  i6486.constantMin = i6487[4]
  i6486.constantMax = i6487[5]
  return i6486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6488 = root || new pc.MinMaxGradient()
  var i6489 = data
  i6488.mode = i6489[0]
  i6488.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6489[1], i6488.gradientMin)
  i6488.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6489[2], i6488.gradientMax)
  i6488.colorMin = new pc.Color(i6489[3], i6489[4], i6489[5], i6489[6])
  i6488.colorMax = new pc.Color(i6489[7], i6489[8], i6489[9], i6489[10])
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6491 = data
  i6490.mode = i6491[0]
  var i6493 = i6491[1]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 1) {
    i6492.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6493[i + 0]) );
  }
  i6490.colorKeys = i6492
  var i6495 = i6491[2]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 1) {
    i6494.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6495[i + 0]) );
  }
  i6490.alphaKeys = i6494
  return i6490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6499 = data
  i6498.color = new pc.Color(i6499[0], i6499[1], i6499[2], i6499[3])
  i6498.time = i6499[4]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6503 = data
  i6502.alpha = i6503[0]
  i6502.time = i6503[1]
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6504 = root || new pc.ParticleSystemColorBySpeed()
  var i6505 = data
  i6504.enabled = !!i6505[0]
  i6504.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6505[1], i6504.color)
  i6504.range = new pc.Vec2( i6505[2], i6505[3] )
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6506 = root || new pc.ParticleSystemColorOverLifetime()
  var i6507 = data
  i6506.enabled = !!i6507[0]
  i6506.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6507[1], i6506.color)
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6508 = root || new pc.ParticleSystemEmitter()
  var i6509 = data
  i6508.enabled = !!i6509[0]
  i6508.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6509[1], i6508.rateOverTime)
  i6508.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6509[2], i6508.rateOverDistance)
  var i6511 = i6509[3]
  var i6510 = []
  for(var i = 0; i < i6511.length; i += 1) {
    i6510.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6511[i + 0]) );
  }
  i6508.bursts = i6510
  return i6508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6514 = root || new pc.ParticleSystemBurst()
  var i6515 = data
  i6514.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6515[0], i6514.count)
  i6514.cycleCount = i6515[1]
  i6514.minCount = i6515[2]
  i6514.maxCount = i6515[3]
  i6514.repeatInterval = i6515[4]
  i6514.time = i6515[5]
  return i6514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6516 = root || new pc.ParticleSystemRotationBySpeed()
  var i6517 = data
  i6516.enabled = !!i6517[0]
  i6516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[1], i6516.x)
  i6516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[2], i6516.y)
  i6516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[3], i6516.z)
  i6516.separateAxes = !!i6517[4]
  i6516.range = new pc.Vec2( i6517[5], i6517[6] )
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6518 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6519 = data
  i6518.enabled = !!i6519[0]
  i6518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[1], i6518.x)
  i6518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[2], i6518.y)
  i6518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[3], i6518.z)
  i6518.separateAxes = !!i6519[4]
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6520 = root || new pc.ParticleSystemShape()
  var i6521 = data
  i6520.enabled = !!i6521[0]
  i6520.shapeType = i6521[1]
  i6520.randomDirectionAmount = i6521[2]
  i6520.sphericalDirectionAmount = i6521[3]
  i6520.randomPositionAmount = i6521[4]
  i6520.alignToDirection = !!i6521[5]
  i6520.radius = i6521[6]
  i6520.radiusMode = i6521[7]
  i6520.radiusSpread = i6521[8]
  i6520.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6521[9], i6520.radiusSpeed)
  i6520.radiusThickness = i6521[10]
  i6520.angle = i6521[11]
  i6520.length = i6521[12]
  i6520.boxThickness = new pc.Vec3( i6521[13], i6521[14], i6521[15] )
  i6520.meshShapeType = i6521[16]
  request.r(i6521[17], i6521[18], 0, i6520, 'mesh')
  request.r(i6521[19], i6521[20], 0, i6520, 'meshRenderer')
  request.r(i6521[21], i6521[22], 0, i6520, 'skinnedMeshRenderer')
  i6520.useMeshMaterialIndex = !!i6521[23]
  i6520.meshMaterialIndex = i6521[24]
  i6520.useMeshColors = !!i6521[25]
  i6520.normalOffset = i6521[26]
  i6520.arc = i6521[27]
  i6520.arcMode = i6521[28]
  i6520.arcSpread = i6521[29]
  i6520.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6521[30], i6520.arcSpeed)
  i6520.donutRadius = i6521[31]
  i6520.position = new pc.Vec3( i6521[32], i6521[33], i6521[34] )
  i6520.rotation = new pc.Vec3( i6521[35], i6521[36], i6521[37] )
  i6520.scale = new pc.Vec3( i6521[38], i6521[39], i6521[40] )
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6522 = root || new pc.ParticleSystemSizeBySpeed()
  var i6523 = data
  i6522.enabled = !!i6523[0]
  i6522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[1], i6522.x)
  i6522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[2], i6522.y)
  i6522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[3], i6522.z)
  i6522.separateAxes = !!i6523[4]
  i6522.range = new pc.Vec2( i6523[5], i6523[6] )
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6524 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6525 = data
  i6524.enabled = !!i6525[0]
  i6524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[1], i6524.x)
  i6524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[2], i6524.y)
  i6524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[3], i6524.z)
  i6524.separateAxes = !!i6525[4]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6526 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6527 = data
  i6526.enabled = !!i6527[0]
  i6526.mode = i6527[1]
  i6526.animation = i6527[2]
  i6526.numTilesX = i6527[3]
  i6526.numTilesY = i6527[4]
  i6526.useRandomRow = !!i6527[5]
  i6526.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6527[6], i6526.frameOverTime)
  i6526.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6527[7], i6526.startFrame)
  i6526.cycleCount = i6527[8]
  i6526.rowIndex = i6527[9]
  i6526.flipU = i6527[10]
  i6526.flipV = i6527[11]
  i6526.spriteCount = i6527[12]
  var i6529 = i6527[13]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 2) {
  request.r(i6529[i + 0], i6529[i + 1], 2, i6528, '')
  }
  i6526.sprites = i6528
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6532 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6533 = data
  i6532.enabled = !!i6533[0]
  i6532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[1], i6532.x)
  i6532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[2], i6532.y)
  i6532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[3], i6532.z)
  i6532.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[4], i6532.radial)
  i6532.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[5], i6532.speedModifier)
  i6532.space = i6533[6]
  i6532.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[7], i6532.orbitalX)
  i6532.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[8], i6532.orbitalY)
  i6532.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[9], i6532.orbitalZ)
  i6532.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[10], i6532.orbitalOffsetX)
  i6532.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[11], i6532.orbitalOffsetY)
  i6532.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6533[12], i6532.orbitalOffsetZ)
  return i6532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6534 = root || new pc.ParticleSystemNoise()
  var i6535 = data
  i6534.enabled = !!i6535[0]
  i6534.separateAxes = !!i6535[1]
  i6534.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[2], i6534.strengthX)
  i6534.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[3], i6534.strengthY)
  i6534.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[4], i6534.strengthZ)
  i6534.frequency = i6535[5]
  i6534.damping = !!i6535[6]
  i6534.octaveCount = i6535[7]
  i6534.octaveMultiplier = i6535[8]
  i6534.octaveScale = i6535[9]
  i6534.quality = i6535[10]
  i6534.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[11], i6534.scrollSpeed)
  i6534.scrollSpeedMultiplier = i6535[12]
  i6534.remapEnabled = !!i6535[13]
  i6534.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[14], i6534.remapX)
  i6534.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[15], i6534.remapY)
  i6534.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[16], i6534.remapZ)
  i6534.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[17], i6534.positionAmount)
  i6534.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[18], i6534.rotationAmount)
  i6534.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6535[19], i6534.sizeAmount)
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6536 = root || new pc.ParticleSystemInheritVelocity()
  var i6537 = data
  i6536.enabled = !!i6537[0]
  i6536.mode = i6537[1]
  i6536.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6537[2], i6536.curve)
  return i6536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6538 = root || new pc.ParticleSystemForceOverLifetime()
  var i6539 = data
  i6538.enabled = !!i6539[0]
  i6538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[1], i6538.x)
  i6538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[2], i6538.y)
  i6538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6539[3], i6538.z)
  i6538.space = i6539[4]
  i6538.randomized = !!i6539[5]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6540 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6541 = data
  i6540.enabled = !!i6541[0]
  i6540.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[1], i6540.limit)
  i6540.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[2], i6540.limitX)
  i6540.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[3], i6540.limitY)
  i6540.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[4], i6540.limitZ)
  i6540.dampen = i6541[5]
  i6540.separateAxes = !!i6541[6]
  i6540.space = i6541[7]
  i6540.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6541[8], i6540.drag)
  i6540.multiplyDragByParticleSize = !!i6541[9]
  i6540.multiplyDragByParticleVelocity = !!i6541[10]
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6543 = data
  request.r(i6543[0], i6543[1], 0, i6542, 'mesh')
  i6542.meshCount = i6543[2]
  i6542.activeVertexStreamsCount = i6543[3]
  i6542.alignment = i6543[4]
  i6542.renderMode = i6543[5]
  i6542.sortMode = i6543[6]
  i6542.lengthScale = i6543[7]
  i6542.velocityScale = i6543[8]
  i6542.cameraVelocityScale = i6543[9]
  i6542.normalDirection = i6543[10]
  i6542.sortingFudge = i6543[11]
  i6542.minParticleSize = i6543[12]
  i6542.maxParticleSize = i6543[13]
  i6542.pivot = new pc.Vec3( i6543[14], i6543[15], i6543[16] )
  request.r(i6543[17], i6543[18], 0, i6542, 'trailMaterial')
  i6542.applyActiveColorSpace = !!i6543[19]
  i6542.enabled = !!i6543[20]
  request.r(i6543[21], i6543[22], 0, i6542, 'sharedMaterial')
  var i6545 = i6543[23]
  var i6544 = []
  for(var i = 0; i < i6545.length; i += 2) {
  request.r(i6545[i + 0], i6545[i + 1], 2, i6544, '')
  }
  i6542.sharedMaterials = i6544
  i6542.receiveShadows = !!i6543[24]
  i6542.shadowCastingMode = i6543[25]
  i6542.sortingLayerID = i6543[26]
  i6542.sortingOrder = i6543[27]
  i6542.lightmapIndex = i6543[28]
  i6542.lightmapSceneIndex = i6543[29]
  i6542.lightmapScaleOffset = new pc.Vec4( i6543[30], i6543[31], i6543[32], i6543[33] )
  i6542.lightProbeUsage = i6543[34]
  i6542.reflectionProbeUsage = i6543[35]
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6547 = data
  i6546.name = i6547[0]
  i6546.halfPrecision = !!i6547[1]
  i6546.useSimplification = !!i6547[2]
  i6546.useUInt32IndexFormat = !!i6547[3]
  i6546.vertexCount = i6547[4]
  i6546.aabb = i6547[5]
  var i6549 = i6547[6]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.push( !!i6549[i + 0] );
  }
  i6546.streams = i6548
  i6546.vertices = i6547[7]
  var i6551 = i6547[8]
  var i6550 = []
  for(var i = 0; i < i6551.length; i += 1) {
    i6550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6551[i + 0]) );
  }
  i6546.subMeshes = i6550
  var i6553 = i6547[9]
  var i6552 = []
  for(var i = 0; i < i6553.length; i += 16) {
    i6552.push( new pc.Mat4().setData(i6553[i + 0], i6553[i + 1], i6553[i + 2], i6553[i + 3],  i6553[i + 4], i6553[i + 5], i6553[i + 6], i6553[i + 7],  i6553[i + 8], i6553[i + 9], i6553[i + 10], i6553[i + 11],  i6553[i + 12], i6553[i + 13], i6553[i + 14], i6553[i + 15]) );
  }
  i6546.bindposes = i6552
  var i6555 = i6547[10]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6555[i + 0]) );
  }
  i6546.blendShapes = i6554
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6561 = data
  i6560.triangles = i6561[0]
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6567 = data
  i6566.name = i6567[0]
  var i6569 = i6567[1]
  var i6568 = []
  for(var i = 0; i < i6569.length; i += 1) {
    i6568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6569[i + 0]) );
  }
  i6566.frames = i6568
  return i6566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6571 = data
  i6570.name = i6571[0]
  i6570.atlasId = i6571[1]
  i6570.mipmapCount = i6571[2]
  i6570.hdr = !!i6571[3]
  i6570.size = i6571[4]
  i6570.anisoLevel = i6571[5]
  i6570.filterMode = i6571[6]
  var i6573 = i6571[7]
  var i6572 = []
  for(var i = 0; i < i6573.length; i += 4) {
    i6572.push( UnityEngine.Rect.MinMaxRect(i6573[i + 0], i6573[i + 1], i6573[i + 2], i6573[i + 3]) );
  }
  i6570.rects = i6572
  i6570.wrapU = i6571[8]
  i6570.wrapV = i6571[9]
  return i6570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6577 = data
  i6576.name = i6577[0]
  i6576.index = i6577[1]
  i6576.startup = !!i6577[2]
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6579 = data
  i6578.aspect = i6579[0]
  i6578.orthographic = !!i6579[1]
  i6578.orthographicSize = i6579[2]
  i6578.backgroundColor = new pc.Color(i6579[3], i6579[4], i6579[5], i6579[6])
  i6578.nearClipPlane = i6579[7]
  i6578.farClipPlane = i6579[8]
  i6578.fieldOfView = i6579[9]
  i6578.depth = i6579[10]
  i6578.clearFlags = i6579[11]
  i6578.cullingMask = i6579[12]
  i6578.rect = i6579[13]
  request.r(i6579[14], i6579[15], 0, i6578, 'targetTexture')
  i6578.usePhysicalProperties = !!i6579[16]
  i6578.focalLength = i6579[17]
  i6578.sensorSize = new pc.Vec2( i6579[18], i6579[19] )
  i6578.lensShift = new pc.Vec2( i6579[20], i6579[21] )
  i6578.gateFit = i6579[22]
  i6578.commandBufferCount = i6579[23]
  i6578.cameraType = i6579[24]
  i6578.enabled = !!i6579[25]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6581 = data
  i6580.type = i6581[0]
  i6580.color = new pc.Color(i6581[1], i6581[2], i6581[3], i6581[4])
  i6580.cullingMask = i6581[5]
  i6580.intensity = i6581[6]
  i6580.range = i6581[7]
  i6580.spotAngle = i6581[8]
  i6580.shadows = i6581[9]
  i6580.shadowNormalBias = i6581[10]
  i6580.shadowBias = i6581[11]
  i6580.shadowStrength = i6581[12]
  i6580.shadowResolution = i6581[13]
  i6580.lightmapBakeType = i6581[14]
  i6580.renderMode = i6581[15]
  request.r(i6581[16], i6581[17], 0, i6580, 'cookie')
  i6580.cookieSize = i6581[18]
  i6580.shadowNearPlane = i6581[19]
  i6580.occlusionMaskChannel = i6581[20]
  i6580.isBaked = !!i6581[21]
  i6580.mixedLightingMode = i6581[22]
  i6580.enabled = !!i6581[23]
  return i6580
}

Deserializers["Main"] = function (request, data, root) {
  var i6582 = root || request.c( 'Main' )
  var i6583 = data
  return i6582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6585 = data
  i6584.planeDistance = i6585[0]
  i6584.referencePixelsPerUnit = i6585[1]
  i6584.isFallbackOverlay = !!i6585[2]
  i6584.renderMode = i6585[3]
  i6584.renderOrder = i6585[4]
  i6584.sortingLayerName = i6585[5]
  i6584.sortingOrder = i6585[6]
  i6584.scaleFactor = i6585[7]
  request.r(i6585[8], i6585[9], 0, i6584, 'worldCamera')
  i6584.overrideSorting = !!i6585[10]
  i6584.pixelPerfect = !!i6585[11]
  i6584.targetDisplay = i6585[12]
  i6584.overridePixelPerfect = !!i6585[13]
  i6584.enabled = !!i6585[14]
  return i6584
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6586 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6587 = data
  i6586.m_UiScaleMode = i6587[0]
  i6586.m_ReferencePixelsPerUnit = i6587[1]
  i6586.m_ScaleFactor = i6587[2]
  i6586.m_ReferenceResolution = new pc.Vec2( i6587[3], i6587[4] )
  i6586.m_ScreenMatchMode = i6587[5]
  i6586.m_MatchWidthOrHeight = i6587[6]
  i6586.m_PhysicalUnit = i6587[7]
  i6586.m_FallbackScreenDPI = i6587[8]
  i6586.m_DefaultSpriteDPI = i6587[9]
  i6586.m_DynamicPixelsPerUnit = i6587[10]
  i6586.m_PresetInfoIsWorld = !!i6587[11]
  return i6586
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6588 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6589 = data
  i6588.m_IgnoreReversedGraphics = !!i6589[0]
  i6588.m_BlockingObjects = i6589[1]
  i6588.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6589[2] )
  return i6588
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6590 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6591 = data
  request.r(i6591[0], i6591[1], 0, i6590, 'm_FirstSelected')
  i6590.m_sendNavigationEvents = !!i6591[2]
  i6590.m_DragThreshold = i6591[3]
  return i6590
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6592 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6593 = data
  i6592.m_HorizontalAxis = i6593[0]
  i6592.m_VerticalAxis = i6593[1]
  i6592.m_SubmitButton = i6593[2]
  i6592.m_CancelButton = i6593[3]
  i6592.m_InputActionsPerSecond = i6593[4]
  i6592.m_RepeatDelay = i6593[5]
  i6592.m_ForceModuleActive = !!i6593[6]
  i6592.m_SendPointerHoverToParent = !!i6593[7]
  return i6592
}

Deserializers["PlayableLayout"] = function (request, data, root) {
  var i6594 = root || request.c( 'PlayableLayout' )
  var i6595 = data
  request.r(i6595[0], i6595[1], 0, i6594, 'mainCamera')
  var i6597 = i6595[2]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 2) {
  request.r(i6597[i + 0], i6597[i + 1], 2, i6596, '')
  }
  i6594.gameScalers = i6596
  request.r(i6595[3], i6595[4], 0, i6594, 'backgroundRoot')
  return i6594
}

Deserializers["PlayableIdleTimer"] = function (request, data, root) {
  var i6600 = root || request.c( 'PlayableIdleTimer' )
  var i6601 = data
  return i6600
}

Deserializers["DataManager"] = function (request, data, root) {
  var i6602 = root || request.c( 'DataManager' )
  var i6603 = data
  request.r(i6603[0], i6603[1], 0, i6602, 'levelConfig')
  request.r(i6603[2], i6603[3], 0, i6602, 'gameConfig')
  return i6602
}

Deserializers["StickerManager"] = function (request, data, root) {
  var i6604 = root || request.c( 'StickerManager' )
  var i6605 = data
  request.r(i6605[0], i6605[1], 0, i6604, 'uiCanvas')
  request.r(i6605[2], i6605[3], 0, i6604, 'StickerLayerPrefab')
  request.r(i6605[4], i6605[5], 0, i6604, 'fingerPrefab')
  request.r(i6605[6], i6605[7], 0, i6604, 'StickerLayerParent')
  return i6604
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i6606 = root || request.c( 'LevelManager' )
  var i6607 = data
  request.r(i6607[0], i6607[1], 0, i6606, 'levelParent')
  request.r(i6607[2], i6607[3], 0, i6606, 'effectParent')
  request.r(i6607[4], i6607[5], 0, i6606, 'fireworksEffectPrefab')
  i6606.victoryScreenDelay = i6607[6]
  return i6606
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i6608 = root || request.c( 'GuideManager' )
  var i6609 = data
  request.r(i6609[0], i6609[1], 0, i6608, 'guideFingerPrefab')
  request.r(i6609[2], i6609[3], 0, i6608, 'uiCanvas')
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6611 = data
  i6610.ambientIntensity = i6611[0]
  i6610.reflectionIntensity = i6611[1]
  i6610.ambientMode = i6611[2]
  i6610.ambientLight = new pc.Color(i6611[3], i6611[4], i6611[5], i6611[6])
  i6610.ambientSkyColor = new pc.Color(i6611[7], i6611[8], i6611[9], i6611[10])
  i6610.ambientGroundColor = new pc.Color(i6611[11], i6611[12], i6611[13], i6611[14])
  i6610.ambientEquatorColor = new pc.Color(i6611[15], i6611[16], i6611[17], i6611[18])
  i6610.fogColor = new pc.Color(i6611[19], i6611[20], i6611[21], i6611[22])
  i6610.fogEndDistance = i6611[23]
  i6610.fogStartDistance = i6611[24]
  i6610.fogDensity = i6611[25]
  i6610.fog = !!i6611[26]
  request.r(i6611[27], i6611[28], 0, i6610, 'skybox')
  i6610.fogMode = i6611[29]
  var i6613 = i6611[30]
  var i6612 = []
  for(var i = 0; i < i6613.length; i += 1) {
    i6612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6613[i + 0]) );
  }
  i6610.lightmaps = i6612
  i6610.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6611[31], i6610.lightProbes)
  i6610.lightmapsMode = i6611[32]
  i6610.mixedBakeMode = i6611[33]
  i6610.environmentLightingMode = i6611[34]
  i6610.ambientProbe = new pc.SphericalHarmonicsL2(i6611[35])
  request.r(i6611[36], i6611[37], 0, i6610, 'customReflection')
  request.r(i6611[38], i6611[39], 0, i6610, 'defaultReflection')
  i6610.defaultReflectionMode = i6611[40]
  i6610.defaultReflectionResolution = i6611[41]
  i6610.sunLightObjectId = i6611[42]
  i6610.pixelLightCount = i6611[43]
  i6610.defaultReflectionHDR = !!i6611[44]
  i6610.hasLightDataAsset = !!i6611[45]
  i6610.hasManualGenerate = !!i6611[46]
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6617 = data
  request.r(i6617[0], i6617[1], 0, i6616, 'lightmapColor')
  request.r(i6617[2], i6617[3], 0, i6616, 'lightmapDirection')
  request.r(i6617[4], i6617[5], 0, i6616, 'shadowMask')
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6618 = root || new UnityEngine.LightProbes()
  var i6619 = data
  return i6618
}

Deserializers["MyLayerGame"] = function (request, data, root) {
  var i6626 = root || request.c( 'MyLayerGame' )
  var i6627 = data
  request.r(i6627[0], i6627[1], 0, i6626, 'counterPanel')
  request.r(i6627[2], i6627[3], 0, i6626, 'counterText')
  return i6626
}

Deserializers["MyLayerPause"] = function (request, data, root) {
  var i6628 = root || request.c( 'MyLayerPause' )
  var i6629 = data
  return i6628
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i6630 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i6631 = data
  i6630.m_Spacing = i6631[0]
  i6630.m_ChildForceExpandWidth = !!i6631[1]
  i6630.m_ChildForceExpandHeight = !!i6631[2]
  i6630.m_ChildControlWidth = !!i6631[3]
  i6630.m_ChildControlHeight = !!i6631[4]
  i6630.m_ChildScaleWidth = !!i6631[5]
  i6630.m_ChildScaleHeight = !!i6631[6]
  i6630.m_ReverseArrangement = !!i6631[7]
  i6630.m_Padding = UnityEngine.RectOffset.FromPaddings(i6631[8], i6631[9], i6631[10], i6631[11])
  i6630.m_ChildAlignment = i6631[12]
  return i6630
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6632 = root || request.c( 'UnityEngine.UI.Button' )
  var i6633 = data
  i6632.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6633[0], i6632.m_OnClick)
  i6632.m_Navigation = request.d('UnityEngine.UI.Navigation', i6633[1], i6632.m_Navigation)
  i6632.m_Transition = i6633[2]
  i6632.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6633[3], i6632.m_Colors)
  i6632.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6633[4], i6632.m_SpriteState)
  i6632.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6633[5], i6632.m_AnimationTriggers)
  i6632.m_Interactable = !!i6633[6]
  request.r(i6633[7], i6633[8], 0, i6632, 'm_TargetGraphic')
  return i6632
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6634 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6635 = data
  i6634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6635[0], i6634.m_PersistentCalls)
  return i6634
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6636 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6637 = data
  i6636.m_Mode = i6637[0]
  i6636.m_WrapAround = !!i6637[1]
  request.r(i6637[2], i6637[3], 0, i6636, 'm_SelectOnUp')
  request.r(i6637[4], i6637[5], 0, i6636, 'm_SelectOnDown')
  request.r(i6637[6], i6637[7], 0, i6636, 'm_SelectOnLeft')
  request.r(i6637[8], i6637[9], 0, i6636, 'm_SelectOnRight')
  return i6636
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6638 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6639 = data
  i6638.m_NormalColor = new pc.Color(i6639[0], i6639[1], i6639[2], i6639[3])
  i6638.m_HighlightedColor = new pc.Color(i6639[4], i6639[5], i6639[6], i6639[7])
  i6638.m_PressedColor = new pc.Color(i6639[8], i6639[9], i6639[10], i6639[11])
  i6638.m_SelectedColor = new pc.Color(i6639[12], i6639[13], i6639[14], i6639[15])
  i6638.m_DisabledColor = new pc.Color(i6639[16], i6639[17], i6639[18], i6639[19])
  i6638.m_ColorMultiplier = i6639[20]
  i6638.m_FadeDuration = i6639[21]
  return i6638
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6640 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6641 = data
  request.r(i6641[0], i6641[1], 0, i6640, 'm_HighlightedSprite')
  request.r(i6641[2], i6641[3], 0, i6640, 'm_PressedSprite')
  request.r(i6641[4], i6641[5], 0, i6640, 'm_SelectedSprite')
  request.r(i6641[6], i6641[7], 0, i6640, 'm_DisabledSprite')
  return i6640
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6642 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6643 = data
  i6642.m_NormalTrigger = i6643[0]
  i6642.m_HighlightedTrigger = i6643[1]
  i6642.m_PressedTrigger = i6643[2]
  i6642.m_SelectedTrigger = i6643[3]
  i6642.m_DisabledTrigger = i6643[4]
  return i6642
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6644 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6645 = data
  i6644.m_ShowMaskGraphic = !!i6645[0]
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i6647 = data
  i6646.playAutomatically = !!i6647[0]
  request.r(i6647[1], i6647[2], 0, i6646, 'clip')
  var i6649 = i6647[3]
  var i6648 = []
  for(var i = 0; i < i6649.length; i += 2) {
  request.r(i6649[i + 0], i6649[i + 1], 2, i6648, '')
  }
  i6646.clips = i6648
  i6646.wrapMode = i6647[4]
  i6646.enabled = !!i6647[5]
  return i6646
}

Deserializers["SC._0xc1e449cf"] = function (request, data, root) {
  var i6652 = root || request.c( 'SC._0xc1e449cf' )
  var i6653 = data
  return i6652
}

Deserializers["SC.SCWebAdAdaptNode"] = function (request, data, root) {
  var i6654 = root || request.c( 'SC.SCWebAdAdaptNode' )
  var i6655 = data
  i6654.landscapeData = request.d('SC._0xda5e030f', i6655[0], i6654.landscapeData)
  i6654.portraitData = request.d('SC._0xda5e030f', i6655[1], i6654.portraitData)
  return i6654
}

Deserializers["SC._0xda5e030f"] = function (request, data, root) {
  var i6656 = root || request.c( 'SC._0xda5e030f' )
  var i6657 = data
  i6656.bEmpty = !!i6657[0]
  i6656.position = new pc.Vec3( i6657[1], i6657[2], i6657[3] )
  i6656.rotation = new pc.Quat(i6657[4], i6657[5], i6657[6], i6657[7])
  i6656.scale = new pc.Vec3( i6657[8], i6657[9], i6657[10] )
  i6656.anchoredPosition = new pc.Vec2( i6657[11], i6657[12] )
  i6656.sizeDelta = new pc.Vec2( i6657[13], i6657[14] )
  i6656.anchorMin = new pc.Vec2( i6657[15], i6657[16] )
  i6656.anchorMax = new pc.Vec2( i6657[17], i6657[18] )
  i6656.pivot = new pc.Vec2( i6657[19], i6657[20] )
  return i6656
}

Deserializers["SC.UILanguage"] = function (request, data, root) {
  var i6658 = root || request.c( 'SC.UILanguage' )
  var i6659 = data
  var i6661 = i6659[0]
  var i6660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6661.length; i += 2) {
  request.r(i6661[i + 0], i6661[i + 1], 1, i6660, '')
  }
  i6658.LLang = i6660
  return i6658
}

Deserializers["MyLayerSettle"] = function (request, data, root) {
  var i6664 = root || request.c( 'MyLayerSettle' )
  var i6665 = data
  request.r(i6665[0], i6665[1], 0, i6664, 'winTitle')
  request.r(i6665[2], i6665[3], 0, i6664, 'winPicture')
  request.r(i6665[4], i6665[5], 0, i6664, 'idleTitle')
  request.r(i6665[6], i6665[7], 0, i6664, 'idlePicture')
  request.r(i6665[8], i6665[9], 0, i6664, 'overlay')
  request.r(i6665[10], i6665[11], 0, i6664, 'panel')
  request.r(i6665[12], i6665[13], 0, i6664, 'title')
  request.r(i6665[14], i6665[15], 0, i6664, 'picture')
  request.r(i6665[16], i6665[17], 0, i6664, 'playButton')
  return i6664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6667 = data
  var i6669 = i6667[0]
  var i6668 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6669.length; i += 1) {
    i6668.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6669[i + 0]));
  }
  i6666.ShaderCompilationErrors = i6668
  i6666.name = i6667[1]
  i6666.guid = i6667[2]
  var i6671 = i6667[3]
  var i6670 = []
  for(var i = 0; i < i6671.length; i += 1) {
    i6670.push( i6671[i + 0] );
  }
  i6666.shaderDefinedKeywords = i6670
  var i6673 = i6667[4]
  var i6672 = []
  for(var i = 0; i < i6673.length; i += 1) {
    i6672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6673[i + 0]) );
  }
  i6666.passes = i6672
  var i6675 = i6667[5]
  var i6674 = []
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6675[i + 0]) );
  }
  i6666.usePasses = i6674
  var i6677 = i6667[6]
  var i6676 = []
  for(var i = 0; i < i6677.length; i += 1) {
    i6676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6677[i + 0]) );
  }
  i6666.defaultParameterValues = i6676
  request.r(i6667[7], i6667[8], 0, i6666, 'unityFallbackShader')
  i6666.readDepth = !!i6667[9]
  i6666.hasDepthOnlyPass = !!i6667[10]
  i6666.isCreatedByShaderGraph = !!i6667[11]
  i6666.disableBatching = !!i6667[12]
  i6666.compiled = !!i6667[13]
  return i6666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6681 = data
  i6680.shaderName = i6681[0]
  i6680.errorMessage = i6681[1]
  return i6680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6686 = root || new pc.UnityShaderPass()
  var i6687 = data
  i6686.id = i6687[0]
  i6686.subShaderIndex = i6687[1]
  i6686.name = i6687[2]
  i6686.passType = i6687[3]
  i6686.grabPassTextureName = i6687[4]
  i6686.usePass = !!i6687[5]
  i6686.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[6], i6686.zTest)
  i6686.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[7], i6686.zWrite)
  i6686.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[8], i6686.culling)
  i6686.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6687[9], i6686.blending)
  i6686.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6687[10], i6686.alphaBlending)
  i6686.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[11], i6686.colorWriteMask)
  i6686.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[12], i6686.offsetUnits)
  i6686.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[13], i6686.offsetFactor)
  i6686.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[14], i6686.stencilRef)
  i6686.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[15], i6686.stencilReadMask)
  i6686.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6687[16], i6686.stencilWriteMask)
  i6686.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6687[17], i6686.stencilOp)
  i6686.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6687[18], i6686.stencilOpFront)
  i6686.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6687[19], i6686.stencilOpBack)
  var i6689 = i6687[20]
  var i6688 = []
  for(var i = 0; i < i6689.length; i += 1) {
    i6688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6689[i + 0]) );
  }
  i6686.tags = i6688
  var i6691 = i6687[21]
  var i6690 = []
  for(var i = 0; i < i6691.length; i += 1) {
    i6690.push( i6691[i + 0] );
  }
  i6686.passDefinedKeywords = i6690
  var i6693 = i6687[22]
  var i6692 = []
  for(var i = 0; i < i6693.length; i += 1) {
    i6692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6693[i + 0]) );
  }
  i6686.passDefinedKeywordGroups = i6692
  var i6695 = i6687[23]
  var i6694 = []
  for(var i = 0; i < i6695.length; i += 1) {
    i6694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6695[i + 0]) );
  }
  i6686.variants = i6694
  var i6697 = i6687[24]
  var i6696 = []
  for(var i = 0; i < i6697.length; i += 1) {
    i6696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6697[i + 0]) );
  }
  i6686.excludedVariants = i6696
  i6686.hasDepthReader = !!i6687[25]
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6699 = data
  i6698.val = i6699[0]
  i6698.name = i6699[1]
  return i6698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6701 = data
  i6700.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6701[0], i6700.src)
  i6700.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6701[1], i6700.dst)
  i6700.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6701[2], i6700.op)
  return i6700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6703 = data
  i6702.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6703[0], i6702.pass)
  i6702.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6703[1], i6702.fail)
  i6702.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6703[2], i6702.zFail)
  i6702.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6703[3], i6702.comp)
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6707 = data
  i6706.name = i6707[0]
  i6706.value = i6707[1]
  return i6706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6711 = data
  var i6713 = i6711[0]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.push( i6713[i + 0] );
  }
  i6710.keywords = i6712
  i6710.hasDiscard = !!i6711[1]
  return i6710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6717 = data
  i6716.passId = i6717[0]
  i6716.subShaderIndex = i6717[1]
  var i6719 = i6717[2]
  var i6718 = []
  for(var i = 0; i < i6719.length; i += 1) {
    i6718.push( i6719[i + 0] );
  }
  i6716.keywords = i6718
  i6716.vertexProgram = i6717[3]
  i6716.fragmentProgram = i6717[4]
  i6716.exportedForWebGl2 = !!i6717[5]
  i6716.readDepth = !!i6717[6]
  return i6716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6723 = data
  request.r(i6723[0], i6723[1], 0, i6722, 'shader')
  i6722.pass = i6723[2]
  return i6722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6727 = data
  i6726.name = i6727[0]
  i6726.type = i6727[1]
  i6726.value = new pc.Vec4( i6727[2], i6727[3], i6727[4], i6727[5] )
  i6726.textureValue = i6727[6]
  i6726.shaderPropertyFlag = i6727[7]
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6729 = data
  i6728.name = i6729[0]
  request.r(i6729[1], i6729[2], 0, i6728, 'texture')
  i6728.aabb = i6729[3]
  i6728.vertices = i6729[4]
  i6728.triangles = i6729[5]
  i6728.textureRect = UnityEngine.Rect.MinMaxRect(i6729[6], i6729[7], i6729[8], i6729[9])
  i6728.packedRect = UnityEngine.Rect.MinMaxRect(i6729[10], i6729[11], i6729[12], i6729[13])
  i6728.border = new pc.Vec4( i6729[14], i6729[15], i6729[16], i6729[17] )
  i6728.transparency = i6729[18]
  i6728.bounds = i6729[19]
  i6728.pixelsPerUnit = i6729[20]
  i6728.textureWidth = i6729[21]
  i6728.textureHeight = i6729[22]
  i6728.nativeSize = new pc.Vec2( i6729[23], i6729[24] )
  i6728.pivot = new pc.Vec2( i6729[25], i6729[26] )
  i6728.textureRectOffset = new pc.Vec2( i6729[27], i6729[28] )
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6731 = data
  i6730.name = i6731[0]
  return i6730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6733 = data
  i6732.name = i6733[0]
  i6732.wrapMode = i6733[1]
  i6732.isLooping = !!i6733[2]
  i6732.length = i6733[3]
  var i6735 = i6733[4]
  var i6734 = []
  for(var i = 0; i < i6735.length; i += 1) {
    i6734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6735[i + 0]) );
  }
  i6732.curves = i6734
  var i6737 = i6733[5]
  var i6736 = []
  for(var i = 0; i < i6737.length; i += 1) {
    i6736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6737[i + 0]) );
  }
  i6732.events = i6736
  i6732.halfPrecision = !!i6733[6]
  i6732._frameRate = i6733[7]
  i6732.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6733[8], i6732.localBounds)
  i6732.hasMuscleCurves = !!i6733[9]
  var i6739 = i6733[10]
  var i6738 = []
  for(var i = 0; i < i6739.length; i += 1) {
    i6738.push( i6739[i + 0] );
  }
  i6732.clipMuscleConstant = i6738
  i6732.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6733[11], i6732.clipBindingConstant)
  return i6732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6743 = data
  i6742.path = i6743[0]
  i6742.hash = i6743[1]
  i6742.componentType = i6743[2]
  i6742.property = i6743[3]
  i6742.keys = i6743[4]
  var i6745 = i6743[5]
  var i6744 = []
  for(var i = 0; i < i6745.length; i += 1) {
    i6744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6745[i + 0]) );
  }
  i6742.objectReferenceKeys = i6744
  return i6742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6749 = data
  i6748.time = i6749[0]
  request.r(i6749[1], i6749[2], 0, i6748, 'value')
  return i6748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6753 = data
  i6752.functionName = i6753[0]
  i6752.floatParameter = i6753[1]
  i6752.intParameter = i6753[2]
  i6752.stringParameter = i6753[3]
  request.r(i6753[4], i6753[5], 0, i6752, 'objectReferenceParameter')
  i6752.time = i6753[6]
  return i6752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6755 = data
  i6754.center = new pc.Vec3( i6755[0], i6755[1], i6755[2] )
  i6754.extends = new pc.Vec3( i6755[3], i6755[4], i6755[5] )
  return i6754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6759 = data
  var i6761 = i6759[0]
  var i6760 = []
  for(var i = 0; i < i6761.length; i += 1) {
    i6760.push( i6761[i + 0] );
  }
  i6758.genericBindings = i6760
  var i6763 = i6759[1]
  var i6762 = []
  for(var i = 0; i < i6763.length; i += 1) {
    i6762.push( i6763[i + 0] );
  }
  i6758.pptrCurveMapping = i6762
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6765 = data
  i6764.name = i6765[0]
  i6764.ascent = i6765[1]
  i6764.originalLineHeight = i6765[2]
  i6764.fontSize = i6765[3]
  var i6767 = i6765[4]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 1) {
    i6766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6767[i + 0]) );
  }
  i6764.characterInfo = i6766
  request.r(i6765[5], i6765[6], 0, i6764, 'texture')
  i6764.originalFontSize = i6765[7]
  return i6764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6771 = data
  i6770.index = i6771[0]
  i6770.advance = i6771[1]
  i6770.bearing = i6771[2]
  i6770.glyphWidth = i6771[3]
  i6770.glyphHeight = i6771[4]
  i6770.minX = i6771[5]
  i6770.maxX = i6771[6]
  i6770.minY = i6771[7]
  i6770.maxY = i6771[8]
  i6770.uvBottomLeftX = i6771[9]
  i6770.uvBottomLeftY = i6771[10]
  i6770.uvBottomRightX = i6771[11]
  i6770.uvBottomRightY = i6771[12]
  i6770.uvTopLeftX = i6771[13]
  i6770.uvTopLeftY = i6771[14]
  i6770.uvTopRightX = i6771[15]
  i6770.uvTopRightY = i6771[16]
  return i6770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6773 = data
  i6772.name = i6773[0]
  var i6775 = i6773[1]
  var i6774 = []
  for(var i = 0; i < i6775.length; i += 1) {
    i6774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6775[i + 0]) );
  }
  i6772.layers = i6774
  var i6777 = i6773[2]
  var i6776 = []
  for(var i = 0; i < i6777.length; i += 1) {
    i6776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6777[i + 0]) );
  }
  i6772.parameters = i6776
  i6772.animationClips = i6773[3]
  i6772.avatarUnsupported = i6773[4]
  return i6772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6781 = data
  i6780.name = i6781[0]
  i6780.defaultWeight = i6781[1]
  i6780.blendingMode = i6781[2]
  i6780.avatarMask = i6781[3]
  i6780.syncedLayerIndex = i6781[4]
  i6780.syncedLayerAffectsTiming = !!i6781[5]
  i6780.syncedLayers = i6781[6]
  i6780.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6781[7], i6780.stateMachine)
  return i6780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6783 = data
  i6782.id = i6783[0]
  i6782.name = i6783[1]
  i6782.path = i6783[2]
  var i6785 = i6783[3]
  var i6784 = []
  for(var i = 0; i < i6785.length; i += 1) {
    i6784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6785[i + 0]) );
  }
  i6782.states = i6784
  var i6787 = i6783[4]
  var i6786 = []
  for(var i = 0; i < i6787.length; i += 1) {
    i6786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6787[i + 0]) );
  }
  i6782.machines = i6786
  var i6789 = i6783[5]
  var i6788 = []
  for(var i = 0; i < i6789.length; i += 1) {
    i6788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6789[i + 0]) );
  }
  i6782.entryStateTransitions = i6788
  var i6791 = i6783[6]
  var i6790 = []
  for(var i = 0; i < i6791.length; i += 1) {
    i6790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6791[i + 0]) );
  }
  i6782.exitStateTransitions = i6790
  var i6793 = i6783[7]
  var i6792 = []
  for(var i = 0; i < i6793.length; i += 1) {
    i6792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6793[i + 0]) );
  }
  i6782.anyStateTransitions = i6792
  i6782.defaultStateId = i6783[8]
  return i6782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6797 = data
  i6796.id = i6797[0]
  i6796.name = i6797[1]
  i6796.cycleOffset = i6797[2]
  i6796.cycleOffsetParameter = i6797[3]
  i6796.cycleOffsetParameterActive = !!i6797[4]
  i6796.mirror = !!i6797[5]
  i6796.mirrorParameter = i6797[6]
  i6796.mirrorParameterActive = !!i6797[7]
  i6796.motionId = i6797[8]
  i6796.nameHash = i6797[9]
  i6796.fullPathHash = i6797[10]
  i6796.speed = i6797[11]
  i6796.speedParameter = i6797[12]
  i6796.speedParameterActive = !!i6797[13]
  i6796.tag = i6797[14]
  i6796.tagHash = i6797[15]
  i6796.writeDefaultValues = !!i6797[16]
  var i6799 = i6797[17]
  var i6798 = []
  for(var i = 0; i < i6799.length; i += 2) {
  request.r(i6799[i + 0], i6799[i + 1], 2, i6798, '')
  }
  i6796.behaviours = i6798
  var i6801 = i6797[18]
  var i6800 = []
  for(var i = 0; i < i6801.length; i += 1) {
    i6800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6801[i + 0]) );
  }
  i6796.transitions = i6800
  return i6796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6807 = data
  i6806.fullPath = i6807[0]
  i6806.canTransitionToSelf = !!i6807[1]
  i6806.duration = i6807[2]
  i6806.exitTime = i6807[3]
  i6806.hasExitTime = !!i6807[4]
  i6806.hasFixedDuration = !!i6807[5]
  i6806.interruptionSource = i6807[6]
  i6806.offset = i6807[7]
  i6806.orderedInterruption = !!i6807[8]
  i6806.destinationStateId = i6807[9]
  i6806.isExit = !!i6807[10]
  i6806.mute = !!i6807[11]
  i6806.solo = !!i6807[12]
  var i6809 = i6807[13]
  var i6808 = []
  for(var i = 0; i < i6809.length; i += 1) {
    i6808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6809[i + 0]) );
  }
  i6806.conditions = i6808
  return i6806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6815 = data
  i6814.destinationStateId = i6815[0]
  i6814.isExit = !!i6815[1]
  i6814.mute = !!i6815[2]
  i6814.solo = !!i6815[3]
  var i6817 = i6815[4]
  var i6816 = []
  for(var i = 0; i < i6817.length; i += 1) {
    i6816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6817[i + 0]) );
  }
  i6814.conditions = i6816
  return i6814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6821 = data
  i6820.defaultBool = !!i6821[0]
  i6820.defaultFloat = i6821[1]
  i6820.defaultInt = i6821[2]
  i6820.name = i6821[3]
  i6820.nameHash = i6821[4]
  i6820.type = i6821[5]
  return i6820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6823 = data
  i6822.name = i6823[0]
  i6822.bytes64 = i6823[1]
  i6822.data = i6823[2]
  return i6822
}

Deserializers["LevelConfig"] = function (request, data, root) {
  var i6824 = root || request.c( 'LevelConfig' )
  var i6825 = data
  var i6827 = i6825[0]
  var i6826 = []
  for(var i = 0; i < i6827.length; i += 1) {
    i6826.push( request.d('LevelConfig+LevelData', i6827[i + 0]) );
  }
  i6824.levelDataList = i6826
  return i6824
}

Deserializers["LevelConfig+LevelData"] = function (request, data, root) {
  var i6830 = root || request.c( 'LevelConfig+LevelData' )
  var i6831 = data
  i6830.levelID = i6831[0]
  request.r(i6831[1], i6831[2], 0, i6830, 'levelPrefab')
  i6830.levelPrefabPath = i6831[3]
  i6830.imageFolderPath = i6831[4]
  request.r(i6831[5], i6831[6], 0, i6830, 'backgroundImage')
  return i6830
}

Deserializers["DragonBones.UnityDragonBonesData"] = function (request, data, root) {
  var i6832 = root || request.c( 'DragonBones.UnityDragonBonesData' )
  var i6833 = data
  i6832.dataName = i6833[0]
  request.r(i6833[1], i6833[2], 0, i6832, 'dragonBonesJSON')
  var i6835 = i6833[3]
  var i6834 = []
  for(var i = 0; i < i6835.length; i += 1) {
    i6834.push( request.d('DragonBones.UnityDragonBonesData+TextureAtlas', i6835[i + 0]) );
  }
  i6832.textureAtlas = i6834
  return i6832
}

Deserializers["DragonBones.UnityDragonBonesData+TextureAtlas"] = function (request, data, root) {
  var i6838 = root || request.c( 'DragonBones.UnityDragonBonesData+TextureAtlas' )
  var i6839 = data
  request.r(i6839[0], i6839[1], 0, i6838, 'textureAtlasJSON')
  request.r(i6839[2], i6839[3], 0, i6838, 'texture')
  request.r(i6839[4], i6839[5], 0, i6838, 'material')
  request.r(i6839[6], i6839[7], 0, i6838, 'uiMaterial')
  return i6838
}

Deserializers["GameConfig"] = function (request, data, root) {
  var i6840 = root || request.c( 'GameConfig' )
  var i6841 = data
  i6840.stickerMaxHeight = i6841[0]
  i6840.dragStickerScaleAnimationDuration = i6841[1]
  i6840.dragStickerDestroyAnimationDuration = i6841[2]
  i6840.guideFingerMoveAnimationDuration = i6841[3]
  i6840.progressBarAnimationDuration = i6841[4]
  i6840.idleSettleSeconds = i6841[5]
  i6840.stickerRefreshAudioDelay = i6841[6]
  return i6840
}

Deserializers["SC.WebAdConfig"] = function (request, data, root) {
  var i6842 = root || request.c( 'SC.WebAdConfig' )
  var i6843 = data
  i6842.EEditorLanguage = i6843[0]
  var i6845 = i6843[1]
  var i6844 = new (System.Collections.Generic.List$1(Bridge.ns('SC.WindowConfig')))
  for(var i = 0; i < i6845.length; i += 1) {
    i6844.add(request.d('SC.WindowConfig', i6845[i + 0]));
  }
  i6842.WindowConfigs = i6844
  i6842.BUseSCFontTtf = !!i6843[2]
  i6842.IAutoSettleDuration = i6843[3]
  i6842.IDebugLanguage = i6843[4]
  i6842.eDebugWebPlatform = i6843[5]
  i6842.fDebugCheckEnterGameTime = i6843[6]
  i6842.fDebugAdDuration = i6843[7]
  i6842.EGraphicsAPI = i6843[8]
  return i6842
}

Deserializers["SC.WindowConfig"] = function (request, data, root) {
  var i6848 = root || request.c( 'SC.WindowConfig' )
  var i6849 = data
  i6848.winName = i6849[0]
  request.r(i6849[1], i6849[2], 0, i6848, 'prefab')
  return i6848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6851 = data
  var i6853 = i6851[0]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6853[i + 0]) );
  }
  i6850.files = i6852
  i6850.componentToPrefabIds = i6851[1]
  return i6850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6857 = data
  i6856.path = i6857[0]
  request.r(i6857[1], i6857[2], 0, i6856, 'unityObject')
  return i6856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6859 = data
  var i6861 = i6859[0]
  var i6860 = []
  for(var i = 0; i < i6861.length; i += 1) {
    i6860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6861[i + 0]) );
  }
  i6858.scriptsExecutionOrder = i6860
  var i6863 = i6859[1]
  var i6862 = []
  for(var i = 0; i < i6863.length; i += 1) {
    i6862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6863[i + 0]) );
  }
  i6858.sortingLayers = i6862
  var i6865 = i6859[2]
  var i6864 = []
  for(var i = 0; i < i6865.length; i += 1) {
    i6864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6865[i + 0]) );
  }
  i6858.cullingLayers = i6864
  i6858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6859[3], i6858.timeSettings)
  i6858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6859[4], i6858.physicsSettings)
  i6858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6859[5], i6858.physics2DSettings)
  i6858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6859[6], i6858.qualitySettings)
  i6858.enableRealtimeShadows = !!i6859[7]
  i6858.enableAutoInstancing = !!i6859[8]
  i6858.enableStaticBatching = !!i6859[9]
  i6858.enableDynamicBatching = !!i6859[10]
  i6858.usePreservativeDynamicBatching = !!i6859[11]
  i6858.lightmapEncodingQuality = i6859[12]
  i6858.desiredColorSpace = i6859[13]
  var i6867 = i6859[14]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.push( i6867[i + 0] );
  }
  i6858.allTags = i6866
  return i6858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6871 = data
  i6870.name = i6871[0]
  i6870.value = i6871[1]
  return i6870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6875 = data
  i6874.id = i6875[0]
  i6874.name = i6875[1]
  i6874.value = i6875[2]
  return i6874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6879 = data
  i6878.id = i6879[0]
  i6878.name = i6879[1]
  return i6878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6881 = data
  i6880.fixedDeltaTime = i6881[0]
  i6880.maximumDeltaTime = i6881[1]
  i6880.timeScale = i6881[2]
  i6880.maximumParticleTimestep = i6881[3]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6883 = data
  i6882.gravity = new pc.Vec3( i6883[0], i6883[1], i6883[2] )
  i6882.defaultSolverIterations = i6883[3]
  i6882.bounceThreshold = i6883[4]
  i6882.autoSyncTransforms = !!i6883[5]
  i6882.autoSimulation = !!i6883[6]
  var i6885 = i6883[7]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6885[i + 0]) );
  }
  i6882.collisionMatrix = i6884
  return i6882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6889 = data
  i6888.enabled = !!i6889[0]
  i6888.layerId = i6889[1]
  i6888.otherLayerId = i6889[2]
  return i6888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6891 = data
  request.r(i6891[0], i6891[1], 0, i6890, 'material')
  i6890.gravity = new pc.Vec2( i6891[2], i6891[3] )
  i6890.positionIterations = i6891[4]
  i6890.velocityIterations = i6891[5]
  i6890.velocityThreshold = i6891[6]
  i6890.maxLinearCorrection = i6891[7]
  i6890.maxAngularCorrection = i6891[8]
  i6890.maxTranslationSpeed = i6891[9]
  i6890.maxRotationSpeed = i6891[10]
  i6890.baumgarteScale = i6891[11]
  i6890.baumgarteTOIScale = i6891[12]
  i6890.timeToSleep = i6891[13]
  i6890.linearSleepTolerance = i6891[14]
  i6890.angularSleepTolerance = i6891[15]
  i6890.defaultContactOffset = i6891[16]
  i6890.autoSimulation = !!i6891[17]
  i6890.queriesHitTriggers = !!i6891[18]
  i6890.queriesStartInColliders = !!i6891[19]
  i6890.callbacksOnDisable = !!i6891[20]
  i6890.reuseCollisionCallbacks = !!i6891[21]
  i6890.autoSyncTransforms = !!i6891[22]
  var i6893 = i6891[23]
  var i6892 = []
  for(var i = 0; i < i6893.length; i += 1) {
    i6892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6893[i + 0]) );
  }
  i6890.collisionMatrix = i6892
  return i6890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6897 = data
  i6896.enabled = !!i6897[0]
  i6896.layerId = i6897[1]
  i6896.otherLayerId = i6897[2]
  return i6896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6899 = data
  var i6901 = i6899[0]
  var i6900 = []
  for(var i = 0; i < i6901.length; i += 1) {
    i6900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6901[i + 0]) );
  }
  i6898.qualityLevels = i6900
  var i6903 = i6899[1]
  var i6902 = []
  for(var i = 0; i < i6903.length; i += 1) {
    i6902.push( i6903[i + 0] );
  }
  i6898.names = i6902
  i6898.shadows = i6899[2]
  i6898.anisotropicFiltering = i6899[3]
  i6898.antiAliasing = i6899[4]
  i6898.lodBias = i6899[5]
  i6898.shadowCascades = i6899[6]
  i6898.shadowDistance = i6899[7]
  i6898.shadowmaskMode = i6899[8]
  i6898.shadowProjection = i6899[9]
  i6898.shadowResolution = i6899[10]
  i6898.softParticles = !!i6899[11]
  i6898.softVegetation = !!i6899[12]
  i6898.activeColorSpace = i6899[13]
  i6898.desiredColorSpace = i6899[14]
  i6898.masterTextureLimit = i6899[15]
  i6898.maxQueuedFrames = i6899[16]
  i6898.particleRaycastBudget = i6899[17]
  i6898.pixelLightCount = i6899[18]
  i6898.realtimeReflectionProbes = !!i6899[19]
  i6898.shadowCascade2Split = i6899[20]
  i6898.shadowCascade4Split = new pc.Vec3( i6899[21], i6899[22], i6899[23] )
  i6898.streamingMipmapsActive = !!i6899[24]
  i6898.vSyncCount = i6899[25]
  i6898.asyncUploadBufferSize = i6899[26]
  i6898.asyncUploadTimeSlice = i6899[27]
  i6898.billboardsFaceCameraPosition = !!i6899[28]
  i6898.shadowNearPlaneOffset = i6899[29]
  i6898.streamingMipmapsMemoryBudget = i6899[30]
  i6898.maximumLODLevel = i6899[31]
  i6898.streamingMipmapsAddAllCameras = !!i6899[32]
  i6898.streamingMipmapsMaxLevelReduction = i6899[33]
  i6898.streamingMipmapsRenderersPerFrame = i6899[34]
  i6898.resolutionScalingFixedDPIFactor = i6899[35]
  i6898.streamingMipmapsMaxFileIORequests = i6899[36]
  i6898.currentQualityLevel = i6899[37]
  return i6898
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6906 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6907 = data
  request.r(i6907[0], i6907[1], 0, i6906, 'm_ObjectArgument')
  i6906.m_ObjectArgumentAssemblyTypeName = i6907[2]
  i6906.m_IntArgument = i6907[3]
  i6906.m_FloatArgument = i6907[4]
  i6906.m_StringArgument = i6907[5]
  i6906.m_BoolArgument = !!i6907[6]
  return i6906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6911 = data
  i6910.weight = i6911[0]
  i6910.vertices = i6911[1]
  i6910.normals = i6911[2]
  i6910.tangents = i6911[3]
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6915 = data
  i6914.mode = i6915[0]
  i6914.parameter = i6915[1]
  i6914.threshold = i6915[2]
  return i6914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[32],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[32],"98":[14],"99":[100],"101":[100],"36":[18],"102":[11],"13":[11],"103":[19,18],"104":[24],"105":[36],"106":[4],"107":[18],"108":[18],"38":[36],"21":[19,18],"109":[18],"37":[36],"26":[18],"110":[18],"27":[18],"111":[18],"112":[18],"113":[18],"52":[18],"54":[18],"114":[18],"115":[19,18],"25":[18],"116":[18],"22":[18],"117":[18],"24":[19,18],"118":[18],"119":[39],"120":[39],"40":[39],"121":[39],"122":[32],"123":[32]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LevelController","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","StickerItem","UnityEngine.PolygonCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DragonBones.UnityArmatureComponent","DragonBones.UnityDragonBonesData","DragonBones.UnityCombineMeshs","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.ScrollRect","StickerLayer","UnityEngine.UI.Text","UnityEngine.UI.RectMask2D","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Font","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","Main","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableLayout","PlayableIdleTimer","DataManager","LevelConfig","GameConfig","StickerManager","LevelManager","GuideManager","UnityEngine.Cubemap","MyLayerGame","MyLayerPause","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.Mask","UnityEngine.Animation","UnityEngine.AnimationClip","SC._0xc1e449cf","SC.SCWebAdAdaptNode","SC.UILanguage","MyLayerSettle","UnityEngine.TextAsset","SC.WebAdConfig","UnityEngine.AudioClip","UnityEditor.BrokenPrefabAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","DragonBones.UnityUGUIDisplay","_0x77cefece","SC.SCWebAdAdaptCanvas","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "capybararoom_AbridgedVersion_LUNA_2";

Deserializers.lunaInitializationTime = "09/29/2026 08:07:02";

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

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "Simplecreator";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.Simplecreator.capybararoom";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "da9a4731-7a6c-4275-87e6-c89f1be935c3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["SC","_0xea696b74","_0xfa2bc922"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["SC","_0xea696b74","_0x2f6a202b"]],[["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

