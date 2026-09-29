var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5188 = root || request.c( 'UnityEngine.JointSpring' )
  var i5189 = data
  i5188.spring = i5189[0]
  i5188.damper = i5189[1]
  i5188.targetPosition = i5189[2]
  return i5188
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5190 = root || request.c( 'UnityEngine.JointMotor' )
  var i5191 = data
  i5190.m_TargetVelocity = i5191[0]
  i5190.m_Force = i5191[1]
  i5190.m_FreeSpin = i5191[2]
  return i5190
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5192 = root || request.c( 'UnityEngine.JointLimits' )
  var i5193 = data
  i5192.m_Min = i5193[0]
  i5192.m_Max = i5193[1]
  i5192.m_Bounciness = i5193[2]
  i5192.m_BounceMinVelocity = i5193[3]
  i5192.m_ContactDistance = i5193[4]
  i5192.minBounce = i5193[5]
  i5192.maxBounce = i5193[6]
  return i5192
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5194 = root || request.c( 'UnityEngine.JointDrive' )
  var i5195 = data
  i5194.m_PositionSpring = i5195[0]
  i5194.m_PositionDamper = i5195[1]
  i5194.m_MaximumForce = i5195[2]
  i5194.m_UseAcceleration = i5195[3]
  return i5194
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5196 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5197 = data
  i5196.m_Spring = i5197[0]
  i5196.m_Damper = i5197[1]
  return i5196
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5198 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5199 = data
  i5198.m_Limit = i5199[0]
  i5198.m_Bounciness = i5199[1]
  i5198.m_ContactDistance = i5199[2]
  return i5198
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5200 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5201 = data
  i5200.m_ExtremumSlip = i5201[0]
  i5200.m_ExtremumValue = i5201[1]
  i5200.m_AsymptoteSlip = i5201[2]
  i5200.m_AsymptoteValue = i5201[3]
  i5200.m_Stiffness = i5201[4]
  return i5200
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5202 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5203 = data
  i5202.m_LowerAngle = i5203[0]
  i5202.m_UpperAngle = i5203[1]
  return i5202
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5204 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5205 = data
  i5204.m_MotorSpeed = i5205[0]
  i5204.m_MaximumMotorTorque = i5205[1]
  return i5204
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5206 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5207 = data
  i5206.m_DampingRatio = i5207[0]
  i5206.m_Frequency = i5207[1]
  i5206.m_Angle = i5207[2]
  return i5206
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5208 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5209 = data
  i5208.m_LowerTranslation = i5209[0]
  i5208.m_UpperTranslation = i5209[1]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5211 = data
  i5210.name = i5211[0]
  i5210.width = i5211[1]
  i5210.height = i5211[2]
  i5210.mipmapCount = i5211[3]
  i5210.anisoLevel = i5211[4]
  i5210.filterMode = i5211[5]
  i5210.hdr = !!i5211[6]
  i5210.format = i5211[7]
  i5210.wrapMode = i5211[8]
  i5210.alphaIsTransparency = !!i5211[9]
  i5210.alphaSource = i5211[10]
  i5210.graphicsFormat = i5211[11]
  i5210.sRGBTexture = !!i5211[12]
  i5210.desiredColorSpace = i5211[13]
  i5210.wrapU = i5211[14]
  i5210.wrapV = i5211[15]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5213 = data
  i5212.position = new pc.Vec3( i5213[0], i5213[1], i5213[2] )
  i5212.scale = new pc.Vec3( i5213[3], i5213[4], i5213[5] )
  i5212.rotation = new pc.Quat(i5213[6], i5213[7], i5213[8], i5213[9])
  return i5212
}

Deserializers["LevelController"] = function (request, data, root) {
  var i5214 = root || request.c( 'LevelController' )
  var i5215 = data
  i5214.levelNum = i5215[0]
  var i5217 = i5215[1]
  var i5216 = []
  for(var i = 0; i < i5217.length; i += 2) {
  request.r(i5217[i + 0], i5217[i + 1], 2, i5216, '')
  }
  i5214.WaveArray = i5216
  var i5219 = i5215[2]
  var i5218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5219.length; i += 2) {
  request.r(i5219[i + 0], i5219[i + 1], 1, i5218, '')
  }
  i5214.waveChildren = i5218
  var i5221 = i5215[3]
  var i5220 = []
  for(var i = 0; i < i5221.length; i += 2) {
  request.r(i5221[i + 0], i5221[i + 1], 2, i5220, '')
  }
  i5214.StickerArray = i5220
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5227 = data
  i5226.color = new pc.Color(i5227[0], i5227[1], i5227[2], i5227[3])
  request.r(i5227[4], i5227[5], 0, i5226, 'sprite')
  i5226.flipX = !!i5227[6]
  i5226.flipY = !!i5227[7]
  i5226.drawMode = i5227[8]
  i5226.size = new pc.Vec2( i5227[9], i5227[10] )
  i5226.tileMode = i5227[11]
  i5226.adaptiveModeThreshold = i5227[12]
  i5226.maskInteraction = i5227[13]
  i5226.spriteSortPoint = i5227[14]
  i5226.enabled = !!i5227[15]
  request.r(i5227[16], i5227[17], 0, i5226, 'sharedMaterial')
  var i5229 = i5227[18]
  var i5228 = []
  for(var i = 0; i < i5229.length; i += 2) {
  request.r(i5229[i + 0], i5229[i + 1], 2, i5228, '')
  }
  i5226.sharedMaterials = i5228
  i5226.receiveShadows = !!i5227[19]
  i5226.shadowCastingMode = i5227[20]
  i5226.sortingLayerID = i5227[21]
  i5226.sortingOrder = i5227[22]
  i5226.lightmapIndex = i5227[23]
  i5226.lightmapSceneIndex = i5227[24]
  i5226.lightmapScaleOffset = new pc.Vec4( i5227[25], i5227[26], i5227[27], i5227[28] )
  i5226.lightProbeUsage = i5227[29]
  i5226.reflectionProbeUsage = i5227[30]
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5233 = data
  i5232.name = i5233[0]
  i5232.tagId = i5233[1]
  i5232.enabled = !!i5233[2]
  i5232.isStatic = !!i5233[3]
  i5232.layer = i5233[4]
  return i5232
}

Deserializers["StickerItem"] = function (request, data, root) {
  var i5234 = root || request.c( 'StickerItem' )
  var i5235 = data
  request.r(i5235[0], i5235[1], 0, i5234, 'sprite')
  request.r(i5235[2], i5235[3], 0, i5234, 'armatureNode')
  request.r(i5235[4], i5235[5], 0, i5234, 'effectNode')
  i5234.hideSpriteWhenEffectActive = !!i5235[6]
  i5234.type = i5235[7]
  i5234.layerType = i5235[8]
  i5234.isClickable = !!i5235[9]
  i5234.isCompleted = !!i5235[10]
  i5234.requiredOverlapPercentage = i5235[11]
  i5234.size = i5235[12]
  i5234.fingerAnchorPosition = new pc.Vec2( i5235[13], i5235[14] )
  i5234.audioVolume = i5235[15]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i5236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i5237 = data
  i5236.usedByComposite = !!i5237[0]
  i5236.autoTiling = !!i5237[1]
  var i5239 = i5237[2]
  var i5238 = []
  for(var i = 0; i < i5239.length; i += 1) {
  var i5241 = i5239[i + 0]
  var i5240 = []
  for(var i = 0; i < i5241.length; i += 2) {
    i5240.push( new pc.Vec2( i5241[i + 0], i5241[i + 1] ) );
  }
    i5238.push( i5240 );
  }
  i5236.points = i5238
  i5236.enabled = !!i5237[3]
  i5236.isTrigger = !!i5237[4]
  i5236.usedByEffector = !!i5237[5]
  i5236.density = i5237[6]
  i5236.offset = new pc.Vec2( i5237[7], i5237[8] )
  request.r(i5237[9], i5237[10], 0, i5236, 'material')
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'animatorController')
  request.r(i5249[2], i5249[3], 0, i5248, 'avatar')
  i5248.updateMode = i5249[4]
  i5248.hasTransformHierarchy = !!i5249[5]
  i5248.applyRootMotion = !!i5249[6]
  var i5251 = i5249[7]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 2) {
  request.r(i5251[i + 0], i5251[i + 1], 2, i5250, '')
  }
  i5248.humanBones = i5250
  i5248.enabled = !!i5249[8]
  return i5248
}

Deserializers["DragonBones.UnityArmatureComponent"] = function (request, data, root) {
  var i5254 = root || request.c( 'DragonBones.UnityArmatureComponent' )
  var i5255 = data
  request.r(i5255[0], i5255[1], 0, i5254, 'unityData')
  i5254.armatureName = i5255[2]
  i5254.isUGUI = !!i5255[3]
  i5254.debugDraw = !!i5255[4]
  i5254.animationName = i5255[5]
  i5254._playTimes = i5255[6]
  i5254._timeScale = i5255[7]
  i5254._sortingMode = i5255[8]
  i5254._sortingLayerName = i5255[9]
  i5254._sortingOrder = i5255[10]
  i5254._zSpace = i5255[11]
  i5254._flipX = !!i5255[12]
  i5254._flipY = !!i5255[13]
  i5254._closeCombineMeshs = !!i5255[14]
  return i5254
}

Deserializers["DragonBones.UnityCombineMeshs"] = function (request, data, root) {
  var i5256 = root || request.c( 'DragonBones.UnityCombineMeshs' )
  var i5257 = data
  var i5259 = i5257[0]
  var i5258 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5259.length; i += 1) {
    i5258.add(i5259[i + 0]);
  }
  i5256.slotNames = i5258
  i5256.dirty = !!i5257[1]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5263 = data
  request.r(i5263[0], i5263[1], 0, i5262, 'additionalVertexStreams')
  i5262.enabled = !!i5263[2]
  request.r(i5263[3], i5263[4], 0, i5262, 'sharedMaterial')
  var i5265 = i5263[5]
  var i5264 = []
  for(var i = 0; i < i5265.length; i += 2) {
  request.r(i5265[i + 0], i5265[i + 1], 2, i5264, '')
  }
  i5262.sharedMaterials = i5264
  i5262.receiveShadows = !!i5263[6]
  i5262.shadowCastingMode = i5263[7]
  i5262.sortingLayerID = i5263[8]
  i5262.sortingOrder = i5263[9]
  i5262.lightmapIndex = i5263[10]
  i5262.lightmapSceneIndex = i5263[11]
  i5262.lightmapScaleOffset = new pc.Vec4( i5263[12], i5263[13], i5263[14], i5263[15] )
  i5262.lightProbeUsage = i5263[16]
  i5262.reflectionProbeUsage = i5263[17]
  return i5262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5267 = data
  request.r(i5267[0], i5267[1], 0, i5266, 'sharedMesh')
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5268 = root || new pc.UnityMaterial()
  var i5269 = data
  i5268.name = i5269[0]
  request.r(i5269[1], i5269[2], 0, i5268, 'shader')
  i5268.renderQueue = i5269[3]
  i5268.enableInstancing = !!i5269[4]
  var i5271 = i5269[5]
  var i5270 = []
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5271[i + 0]) );
  }
  i5268.floatParameters = i5270
  var i5273 = i5269[6]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 1) {
    i5272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5273[i + 0]) );
  }
  i5268.colorParameters = i5272
  var i5275 = i5269[7]
  var i5274 = []
  for(var i = 0; i < i5275.length; i += 1) {
    i5274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5275[i + 0]) );
  }
  i5268.vectorParameters = i5274
  var i5277 = i5269[8]
  var i5276 = []
  for(var i = 0; i < i5277.length; i += 1) {
    i5276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5277[i + 0]) );
  }
  i5268.textureParameters = i5276
  var i5279 = i5269[9]
  var i5278 = []
  for(var i = 0; i < i5279.length; i += 1) {
    i5278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5279[i + 0]) );
  }
  i5268.materialFlags = i5278
  return i5268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5283 = data
  i5282.name = i5283[0]
  i5282.value = i5283[1]
  return i5282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5287 = data
  i5286.name = i5287[0]
  i5286.value = new pc.Color(i5287[1], i5287[2], i5287[3], i5287[4])
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5291 = data
  i5290.name = i5291[0]
  i5290.value = new pc.Vec4( i5291[1], i5291[2], i5291[3], i5291[4] )
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5295 = data
  i5294.name = i5295[0]
  request.r(i5295[1], i5295[2], 0, i5294, 'value')
  return i5294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5299 = data
  i5298.name = i5299[0]
  i5298.enabled = !!i5299[1]
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5301 = data
  i5300.pivot = new pc.Vec2( i5301[0], i5301[1] )
  i5300.anchorMin = new pc.Vec2( i5301[2], i5301[3] )
  i5300.anchorMax = new pc.Vec2( i5301[4], i5301[5] )
  i5300.sizeDelta = new pc.Vec2( i5301[6], i5301[7] )
  i5300.anchoredPosition3D = new pc.Vec3( i5301[8], i5301[9], i5301[10] )
  i5300.rotation = new pc.Quat(i5301[11], i5301[12], i5301[13], i5301[14])
  i5300.scale = new pc.Vec3( i5301[15], i5301[16], i5301[17] )
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5303 = data
  i5302.cullTransparentMesh = !!i5303[0]
  return i5302
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.UI.Image' )
  var i5305 = data
  request.r(i5305[0], i5305[1], 0, i5304, 'm_Sprite')
  i5304.m_Type = i5305[2]
  i5304.m_PreserveAspect = !!i5305[3]
  i5304.m_FillCenter = !!i5305[4]
  i5304.m_FillMethod = i5305[5]
  i5304.m_FillAmount = i5305[6]
  i5304.m_FillClockwise = !!i5305[7]
  i5304.m_FillOrigin = i5305[8]
  i5304.m_UseSpriteMesh = !!i5305[9]
  i5304.m_PixelsPerUnitMultiplier = i5305[10]
  request.r(i5305[11], i5305[12], 0, i5304, 'm_Material')
  i5304.m_Maskable = !!i5305[13]
  i5304.m_Color = new pc.Color(i5305[14], i5305[15], i5305[16], i5305[17])
  i5304.m_RaycastTarget = !!i5305[18]
  i5304.m_RaycastPadding = new pc.Vec4( i5305[19], i5305[20], i5305[21], i5305[22] )
  return i5304
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i5306 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i5307 = data
  request.r(i5307[0], i5307[1], 0, i5306, 'm_Content')
  i5306.m_Horizontal = !!i5307[2]
  i5306.m_Vertical = !!i5307[3]
  i5306.m_MovementType = i5307[4]
  i5306.m_Elasticity = i5307[5]
  i5306.m_Inertia = !!i5307[6]
  i5306.m_DecelerationRate = i5307[7]
  i5306.m_ScrollSensitivity = i5307[8]
  request.r(i5307[9], i5307[10], 0, i5306, 'm_Viewport')
  request.r(i5307[11], i5307[12], 0, i5306, 'm_HorizontalScrollbar')
  request.r(i5307[13], i5307[14], 0, i5306, 'm_VerticalScrollbar')
  i5306.m_HorizontalScrollbarVisibility = i5307[15]
  i5306.m_VerticalScrollbarVisibility = i5307[16]
  i5306.m_HorizontalScrollbarSpacing = i5307[17]
  i5306.m_VerticalScrollbarSpacing = i5307[18]
  i5306.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i5307[19], i5306.m_OnValueChanged)
  return i5306
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i5308 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i5309 = data
  i5308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5309[0], i5308.m_PersistentCalls)
  return i5308
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5311 = data
  var i5313 = i5311[0]
  var i5312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.add(request.d('UnityEngine.Events.PersistentCall', i5313[i + 0]));
  }
  i5310.m_Calls = i5312
  return i5310
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5316 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5317 = data
  request.r(i5317[0], i5317[1], 0, i5316, 'm_Target')
  i5316.m_TargetAssemblyTypeName = i5317[2]
  i5316.m_MethodName = i5317[3]
  i5316.m_Mode = i5317[4]
  i5316.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5317[5], i5316.m_Arguments)
  i5316.m_CallState = i5317[6]
  return i5316
}

Deserializers["StickerLayer"] = function (request, data, root) {
  var i5318 = root || request.c( 'StickerLayer' )
  var i5319 = data
  i5318.currentLayerType = i5319[0]
  request.r(i5319[1], i5319[2], 0, i5318, 'stickerParent')
  request.r(i5319[3], i5319[4], 0, i5318, 'leftArrow')
  request.r(i5319[5], i5319[6], 0, i5318, 'rightArrow')
  request.r(i5319[7], i5319[8], 0, i5318, 'textBackground')
  request.r(i5319[9], i5319[10], 0, i5318, 'textComponent')
  request.r(i5319[11], i5319[12], 0, i5318, 'emptyStateText')
  return i5318
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i5320 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i5321 = data
  i5320.m_Padding = new pc.Vec4( i5321[0], i5321[1], i5321[2], i5321[3] )
  i5320.m_Softness = new pc.Vec2( i5321[4], i5321[5] )
  return i5320
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5322 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5323 = data
  i5322.m_HorizontalFit = i5323[0]
  i5322.m_VerticalFit = i5323[1]
  return i5322
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5324 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5325 = data
  i5324.m_Spacing = i5325[0]
  i5324.m_ChildForceExpandWidth = !!i5325[1]
  i5324.m_ChildForceExpandHeight = !!i5325[2]
  i5324.m_ChildControlWidth = !!i5325[3]
  i5324.m_ChildControlHeight = !!i5325[4]
  i5324.m_ChildScaleWidth = !!i5325[5]
  i5324.m_ChildScaleHeight = !!i5325[6]
  i5324.m_ReverseArrangement = !!i5325[7]
  i5324.m_Padding = UnityEngine.RectOffset.FromPaddings(i5325[8], i5325[9], i5325[10], i5325[11])
  i5324.m_ChildAlignment = i5325[12]
  return i5324
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5326 = root || request.c( 'UnityEngine.UI.Text' )
  var i5327 = data
  i5326.m_FontData = request.d('UnityEngine.UI.FontData', i5327[0], i5326.m_FontData)
  i5326.m_Text = i5327[1]
  request.r(i5327[2], i5327[3], 0, i5326, 'm_Material')
  i5326.m_Maskable = !!i5327[4]
  i5326.m_Color = new pc.Color(i5327[5], i5327[6], i5327[7], i5327[8])
  i5326.m_RaycastTarget = !!i5327[9]
  i5326.m_RaycastPadding = new pc.Vec4( i5327[10], i5327[11], i5327[12], i5327[13] )
  return i5326
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5328 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5329 = data
  request.r(i5329[0], i5329[1], 0, i5328, 'm_Font')
  i5328.m_FontSize = i5329[2]
  i5328.m_FontStyle = i5329[3]
  i5328.m_BestFit = !!i5329[4]
  i5328.m_MinSize = i5329[5]
  i5328.m_MaxSize = i5329[6]
  i5328.m_Alignment = i5329[7]
  i5328.m_AlignByGeometry = !!i5329[8]
  i5328.m_RichText = !!i5329[9]
  i5328.m_HorizontalOverflow = i5329[10]
  i5328.m_VerticalOverflow = i5329[11]
  i5328.m_LineSpacing = i5329[12]
  return i5328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5331 = data
  i5330.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5331[0], i5330.main)
  i5330.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5331[1], i5330.colorBySpeed)
  i5330.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5331[2], i5330.colorOverLifetime)
  i5330.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5331[3], i5330.emission)
  i5330.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5331[4], i5330.rotationBySpeed)
  i5330.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5331[5], i5330.rotationOverLifetime)
  i5330.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5331[6], i5330.shape)
  i5330.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5331[7], i5330.sizeBySpeed)
  i5330.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5331[8], i5330.sizeOverLifetime)
  i5330.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5331[9], i5330.textureSheetAnimation)
  i5330.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5331[10], i5330.velocityOverLifetime)
  i5330.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5331[11], i5330.noise)
  i5330.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5331[12], i5330.inheritVelocity)
  i5330.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5331[13], i5330.forceOverLifetime)
  i5330.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5331[14], i5330.limitVelocityOverLifetime)
  i5330.useAutoRandomSeed = !!i5331[15]
  i5330.randomSeed = i5331[16]
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5332 = root || new pc.ParticleSystemMain()
  var i5333 = data
  i5332.duration = i5333[0]
  i5332.loop = !!i5333[1]
  i5332.prewarm = !!i5333[2]
  i5332.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[3], i5332.startDelay)
  i5332.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[4], i5332.startLifetime)
  i5332.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[5], i5332.startSpeed)
  i5332.startSize3D = !!i5333[6]
  i5332.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[7], i5332.startSizeX)
  i5332.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[8], i5332.startSizeY)
  i5332.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[9], i5332.startSizeZ)
  i5332.startRotation3D = !!i5333[10]
  i5332.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[11], i5332.startRotationX)
  i5332.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[12], i5332.startRotationY)
  i5332.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[13], i5332.startRotationZ)
  i5332.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5333[14], i5332.startColor)
  i5332.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5333[15], i5332.gravityModifier)
  i5332.simulationSpace = i5333[16]
  request.r(i5333[17], i5333[18], 0, i5332, 'customSimulationSpace')
  i5332.simulationSpeed = i5333[19]
  i5332.useUnscaledTime = !!i5333[20]
  i5332.scalingMode = i5333[21]
  i5332.playOnAwake = !!i5333[22]
  i5332.maxParticles = i5333[23]
  i5332.emitterVelocityMode = i5333[24]
  i5332.stopAction = i5333[25]
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5334 = root || new pc.MinMaxCurve()
  var i5335 = data
  i5334.mode = i5335[0]
  i5334.curveMin = new pc.AnimationCurve( { keys_flow: i5335[1] } )
  i5334.curveMax = new pc.AnimationCurve( { keys_flow: i5335[2] } )
  i5334.curveMultiplier = i5335[3]
  i5334.constantMin = i5335[4]
  i5334.constantMax = i5335[5]
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5336 = root || new pc.MinMaxGradient()
  var i5337 = data
  i5336.mode = i5337[0]
  i5336.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5337[1], i5336.gradientMin)
  i5336.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5337[2], i5336.gradientMax)
  i5336.colorMin = new pc.Color(i5337[3], i5337[4], i5337[5], i5337[6])
  i5336.colorMax = new pc.Color(i5337[7], i5337[8], i5337[9], i5337[10])
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5339 = data
  i5338.mode = i5339[0]
  var i5341 = i5339[1]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5341[i + 0]) );
  }
  i5338.colorKeys = i5340
  var i5343 = i5339[2]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5343[i + 0]) );
  }
  i5338.alphaKeys = i5342
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5347 = data
  i5346.color = new pc.Color(i5347[0], i5347[1], i5347[2], i5347[3])
  i5346.time = i5347[4]
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5351 = data
  i5350.alpha = i5351[0]
  i5350.time = i5351[1]
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5352 = root || new pc.ParticleSystemColorBySpeed()
  var i5353 = data
  i5352.enabled = !!i5353[0]
  i5352.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5353[1], i5352.color)
  i5352.range = new pc.Vec2( i5353[2], i5353[3] )
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5354 = root || new pc.ParticleSystemColorOverLifetime()
  var i5355 = data
  i5354.enabled = !!i5355[0]
  i5354.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5355[1], i5354.color)
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5356 = root || new pc.ParticleSystemEmitter()
  var i5357 = data
  i5356.enabled = !!i5357[0]
  i5356.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[1], i5356.rateOverTime)
  i5356.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5357[2], i5356.rateOverDistance)
  var i5359 = i5357[3]
  var i5358 = []
  for(var i = 0; i < i5359.length; i += 1) {
    i5358.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5359[i + 0]) );
  }
  i5356.bursts = i5358
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5362 = root || new pc.ParticleSystemBurst()
  var i5363 = data
  i5362.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5363[0], i5362.count)
  i5362.cycleCount = i5363[1]
  i5362.minCount = i5363[2]
  i5362.maxCount = i5363[3]
  i5362.repeatInterval = i5363[4]
  i5362.time = i5363[5]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5364 = root || new pc.ParticleSystemRotationBySpeed()
  var i5365 = data
  i5364.enabled = !!i5365[0]
  i5364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[1], i5364.x)
  i5364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[2], i5364.y)
  i5364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5365[3], i5364.z)
  i5364.separateAxes = !!i5365[4]
  i5364.range = new pc.Vec2( i5365[5], i5365[6] )
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5366 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5367 = data
  i5366.enabled = !!i5367[0]
  i5366.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[1], i5366.x)
  i5366.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[2], i5366.y)
  i5366.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5367[3], i5366.z)
  i5366.separateAxes = !!i5367[4]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5368 = root || new pc.ParticleSystemShape()
  var i5369 = data
  i5368.enabled = !!i5369[0]
  i5368.shapeType = i5369[1]
  i5368.randomDirectionAmount = i5369[2]
  i5368.sphericalDirectionAmount = i5369[3]
  i5368.randomPositionAmount = i5369[4]
  i5368.alignToDirection = !!i5369[5]
  i5368.radius = i5369[6]
  i5368.radiusMode = i5369[7]
  i5368.radiusSpread = i5369[8]
  i5368.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5369[9], i5368.radiusSpeed)
  i5368.radiusThickness = i5369[10]
  i5368.angle = i5369[11]
  i5368.length = i5369[12]
  i5368.boxThickness = new pc.Vec3( i5369[13], i5369[14], i5369[15] )
  i5368.meshShapeType = i5369[16]
  request.r(i5369[17], i5369[18], 0, i5368, 'mesh')
  request.r(i5369[19], i5369[20], 0, i5368, 'meshRenderer')
  request.r(i5369[21], i5369[22], 0, i5368, 'skinnedMeshRenderer')
  i5368.useMeshMaterialIndex = !!i5369[23]
  i5368.meshMaterialIndex = i5369[24]
  i5368.useMeshColors = !!i5369[25]
  i5368.normalOffset = i5369[26]
  i5368.arc = i5369[27]
  i5368.arcMode = i5369[28]
  i5368.arcSpread = i5369[29]
  i5368.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5369[30], i5368.arcSpeed)
  i5368.donutRadius = i5369[31]
  i5368.position = new pc.Vec3( i5369[32], i5369[33], i5369[34] )
  i5368.rotation = new pc.Vec3( i5369[35], i5369[36], i5369[37] )
  i5368.scale = new pc.Vec3( i5369[38], i5369[39], i5369[40] )
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5370 = root || new pc.ParticleSystemSizeBySpeed()
  var i5371 = data
  i5370.enabled = !!i5371[0]
  i5370.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[1], i5370.x)
  i5370.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[2], i5370.y)
  i5370.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5371[3], i5370.z)
  i5370.separateAxes = !!i5371[4]
  i5370.range = new pc.Vec2( i5371[5], i5371[6] )
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5372 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5373 = data
  i5372.enabled = !!i5373[0]
  i5372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5373[1], i5372.x)
  i5372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5373[2], i5372.y)
  i5372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5373[3], i5372.z)
  i5372.separateAxes = !!i5373[4]
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5374 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5375 = data
  i5374.enabled = !!i5375[0]
  i5374.mode = i5375[1]
  i5374.animation = i5375[2]
  i5374.numTilesX = i5375[3]
  i5374.numTilesY = i5375[4]
  i5374.useRandomRow = !!i5375[5]
  i5374.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5375[6], i5374.frameOverTime)
  i5374.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5375[7], i5374.startFrame)
  i5374.cycleCount = i5375[8]
  i5374.rowIndex = i5375[9]
  i5374.flipU = i5375[10]
  i5374.flipV = i5375[11]
  i5374.spriteCount = i5375[12]
  var i5377 = i5375[13]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 2) {
  request.r(i5377[i + 0], i5377[i + 1], 2, i5376, '')
  }
  i5374.sprites = i5376
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5380 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5381 = data
  i5380.enabled = !!i5381[0]
  i5380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[1], i5380.x)
  i5380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[2], i5380.y)
  i5380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[3], i5380.z)
  i5380.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[4], i5380.radial)
  i5380.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[5], i5380.speedModifier)
  i5380.space = i5381[6]
  i5380.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[7], i5380.orbitalX)
  i5380.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[8], i5380.orbitalY)
  i5380.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[9], i5380.orbitalZ)
  i5380.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[10], i5380.orbitalOffsetX)
  i5380.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[11], i5380.orbitalOffsetY)
  i5380.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5381[12], i5380.orbitalOffsetZ)
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5382 = root || new pc.ParticleSystemNoise()
  var i5383 = data
  i5382.enabled = !!i5383[0]
  i5382.separateAxes = !!i5383[1]
  i5382.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[2], i5382.strengthX)
  i5382.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[3], i5382.strengthY)
  i5382.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[4], i5382.strengthZ)
  i5382.frequency = i5383[5]
  i5382.damping = !!i5383[6]
  i5382.octaveCount = i5383[7]
  i5382.octaveMultiplier = i5383[8]
  i5382.octaveScale = i5383[9]
  i5382.quality = i5383[10]
  i5382.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[11], i5382.scrollSpeed)
  i5382.scrollSpeedMultiplier = i5383[12]
  i5382.remapEnabled = !!i5383[13]
  i5382.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[14], i5382.remapX)
  i5382.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[15], i5382.remapY)
  i5382.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[16], i5382.remapZ)
  i5382.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[17], i5382.positionAmount)
  i5382.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[18], i5382.rotationAmount)
  i5382.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5383[19], i5382.sizeAmount)
  return i5382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5384 = root || new pc.ParticleSystemInheritVelocity()
  var i5385 = data
  i5384.enabled = !!i5385[0]
  i5384.mode = i5385[1]
  i5384.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5385[2], i5384.curve)
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5386 = root || new pc.ParticleSystemForceOverLifetime()
  var i5387 = data
  i5386.enabled = !!i5387[0]
  i5386.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5387[1], i5386.x)
  i5386.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5387[2], i5386.y)
  i5386.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5387[3], i5386.z)
  i5386.space = i5387[4]
  i5386.randomized = !!i5387[5]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5388 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5389 = data
  i5388.enabled = !!i5389[0]
  i5388.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5389[1], i5388.limit)
  i5388.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5389[2], i5388.limitX)
  i5388.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5389[3], i5388.limitY)
  i5388.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5389[4], i5388.limitZ)
  i5388.dampen = i5389[5]
  i5388.separateAxes = !!i5389[6]
  i5388.space = i5389[7]
  i5388.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5389[8], i5388.drag)
  i5388.multiplyDragByParticleSize = !!i5389[9]
  i5388.multiplyDragByParticleVelocity = !!i5389[10]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5391 = data
  request.r(i5391[0], i5391[1], 0, i5390, 'mesh')
  i5390.meshCount = i5391[2]
  i5390.activeVertexStreamsCount = i5391[3]
  i5390.alignment = i5391[4]
  i5390.renderMode = i5391[5]
  i5390.sortMode = i5391[6]
  i5390.lengthScale = i5391[7]
  i5390.velocityScale = i5391[8]
  i5390.cameraVelocityScale = i5391[9]
  i5390.normalDirection = i5391[10]
  i5390.sortingFudge = i5391[11]
  i5390.minParticleSize = i5391[12]
  i5390.maxParticleSize = i5391[13]
  i5390.pivot = new pc.Vec3( i5391[14], i5391[15], i5391[16] )
  request.r(i5391[17], i5391[18], 0, i5390, 'trailMaterial')
  i5390.applyActiveColorSpace = !!i5391[19]
  i5390.enabled = !!i5391[20]
  request.r(i5391[21], i5391[22], 0, i5390, 'sharedMaterial')
  var i5393 = i5391[23]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 2) {
  request.r(i5393[i + 0], i5393[i + 1], 2, i5392, '')
  }
  i5390.sharedMaterials = i5392
  i5390.receiveShadows = !!i5391[24]
  i5390.shadowCastingMode = i5391[25]
  i5390.sortingLayerID = i5391[26]
  i5390.sortingOrder = i5391[27]
  i5390.lightmapIndex = i5391[28]
  i5390.lightmapSceneIndex = i5391[29]
  i5390.lightmapScaleOffset = new pc.Vec4( i5391[30], i5391[31], i5391[32], i5391[33] )
  i5390.lightProbeUsage = i5391[34]
  i5390.reflectionProbeUsage = i5391[35]
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5395 = data
  i5394.name = i5395[0]
  i5394.halfPrecision = !!i5395[1]
  i5394.useSimplification = !!i5395[2]
  i5394.useUInt32IndexFormat = !!i5395[3]
  i5394.vertexCount = i5395[4]
  i5394.aabb = i5395[5]
  var i5397 = i5395[6]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( !!i5397[i + 0] );
  }
  i5394.streams = i5396
  i5394.vertices = i5395[7]
  var i5399 = i5395[8]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5399[i + 0]) );
  }
  i5394.subMeshes = i5398
  var i5401 = i5395[9]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 16) {
    i5400.push( new pc.Mat4().setData(i5401[i + 0], i5401[i + 1], i5401[i + 2], i5401[i + 3],  i5401[i + 4], i5401[i + 5], i5401[i + 6], i5401[i + 7],  i5401[i + 8], i5401[i + 9], i5401[i + 10], i5401[i + 11],  i5401[i + 12], i5401[i + 13], i5401[i + 14], i5401[i + 15]) );
  }
  i5394.bindposes = i5400
  var i5403 = i5395[10]
  var i5402 = []
  for(var i = 0; i < i5403.length; i += 1) {
    i5402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5403[i + 0]) );
  }
  i5394.blendShapes = i5402
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5409 = data
  i5408.triangles = i5409[0]
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5415 = data
  i5414.name = i5415[0]
  var i5417 = i5415[1]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5417[i + 0]) );
  }
  i5414.frames = i5416
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5419 = data
  i5418.name = i5419[0]
  i5418.atlasId = i5419[1]
  i5418.mipmapCount = i5419[2]
  i5418.hdr = !!i5419[3]
  i5418.size = i5419[4]
  i5418.anisoLevel = i5419[5]
  i5418.filterMode = i5419[6]
  var i5421 = i5419[7]
  var i5420 = []
  for(var i = 0; i < i5421.length; i += 4) {
    i5420.push( UnityEngine.Rect.MinMaxRect(i5421[i + 0], i5421[i + 1], i5421[i + 2], i5421[i + 3]) );
  }
  i5418.rects = i5420
  i5418.wrapU = i5419[8]
  i5418.wrapV = i5419[9]
  return i5418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5425 = data
  i5424.name = i5425[0]
  i5424.index = i5425[1]
  i5424.startup = !!i5425[2]
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5427 = data
  i5426.aspect = i5427[0]
  i5426.orthographic = !!i5427[1]
  i5426.orthographicSize = i5427[2]
  i5426.backgroundColor = new pc.Color(i5427[3], i5427[4], i5427[5], i5427[6])
  i5426.nearClipPlane = i5427[7]
  i5426.farClipPlane = i5427[8]
  i5426.fieldOfView = i5427[9]
  i5426.depth = i5427[10]
  i5426.clearFlags = i5427[11]
  i5426.cullingMask = i5427[12]
  i5426.rect = i5427[13]
  request.r(i5427[14], i5427[15], 0, i5426, 'targetTexture')
  i5426.usePhysicalProperties = !!i5427[16]
  i5426.focalLength = i5427[17]
  i5426.sensorSize = new pc.Vec2( i5427[18], i5427[19] )
  i5426.lensShift = new pc.Vec2( i5427[20], i5427[21] )
  i5426.gateFit = i5427[22]
  i5426.commandBufferCount = i5427[23]
  i5426.cameraType = i5427[24]
  i5426.enabled = !!i5427[25]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5429 = data
  i5428.type = i5429[0]
  i5428.color = new pc.Color(i5429[1], i5429[2], i5429[3], i5429[4])
  i5428.cullingMask = i5429[5]
  i5428.intensity = i5429[6]
  i5428.range = i5429[7]
  i5428.spotAngle = i5429[8]
  i5428.shadows = i5429[9]
  i5428.shadowNormalBias = i5429[10]
  i5428.shadowBias = i5429[11]
  i5428.shadowStrength = i5429[12]
  i5428.shadowResolution = i5429[13]
  i5428.lightmapBakeType = i5429[14]
  i5428.renderMode = i5429[15]
  request.r(i5429[16], i5429[17], 0, i5428, 'cookie')
  i5428.cookieSize = i5429[18]
  i5428.shadowNearPlane = i5429[19]
  i5428.occlusionMaskChannel = i5429[20]
  i5428.isBaked = !!i5429[21]
  i5428.mixedLightingMode = i5429[22]
  i5428.enabled = !!i5429[23]
  return i5428
}

Deserializers["Main"] = function (request, data, root) {
  var i5430 = root || request.c( 'Main' )
  var i5431 = data
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5433 = data
  i5432.planeDistance = i5433[0]
  i5432.referencePixelsPerUnit = i5433[1]
  i5432.isFallbackOverlay = !!i5433[2]
  i5432.renderMode = i5433[3]
  i5432.renderOrder = i5433[4]
  i5432.sortingLayerName = i5433[5]
  i5432.sortingOrder = i5433[6]
  i5432.scaleFactor = i5433[7]
  request.r(i5433[8], i5433[9], 0, i5432, 'worldCamera')
  i5432.overrideSorting = !!i5433[10]
  i5432.pixelPerfect = !!i5433[11]
  i5432.targetDisplay = i5433[12]
  i5432.overridePixelPerfect = !!i5433[13]
  i5432.enabled = !!i5433[14]
  return i5432
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5434 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5435 = data
  i5434.m_UiScaleMode = i5435[0]
  i5434.m_ReferencePixelsPerUnit = i5435[1]
  i5434.m_ScaleFactor = i5435[2]
  i5434.m_ReferenceResolution = new pc.Vec2( i5435[3], i5435[4] )
  i5434.m_ScreenMatchMode = i5435[5]
  i5434.m_MatchWidthOrHeight = i5435[6]
  i5434.m_PhysicalUnit = i5435[7]
  i5434.m_FallbackScreenDPI = i5435[8]
  i5434.m_DefaultSpriteDPI = i5435[9]
  i5434.m_DynamicPixelsPerUnit = i5435[10]
  i5434.m_PresetInfoIsWorld = !!i5435[11]
  return i5434
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5436 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5437 = data
  i5436.m_IgnoreReversedGraphics = !!i5437[0]
  i5436.m_BlockingObjects = i5437[1]
  i5436.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5437[2] )
  return i5436
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5438 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5439 = data
  request.r(i5439[0], i5439[1], 0, i5438, 'm_FirstSelected')
  i5438.m_sendNavigationEvents = !!i5439[2]
  i5438.m_DragThreshold = i5439[3]
  return i5438
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5440 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5441 = data
  i5440.m_HorizontalAxis = i5441[0]
  i5440.m_VerticalAxis = i5441[1]
  i5440.m_SubmitButton = i5441[2]
  i5440.m_CancelButton = i5441[3]
  i5440.m_InputActionsPerSecond = i5441[4]
  i5440.m_RepeatDelay = i5441[5]
  i5440.m_ForceModuleActive = !!i5441[6]
  i5440.m_SendPointerHoverToParent = !!i5441[7]
  return i5440
}

Deserializers["PlayableLayout"] = function (request, data, root) {
  var i5442 = root || request.c( 'PlayableLayout' )
  var i5443 = data
  request.r(i5443[0], i5443[1], 0, i5442, 'mainCamera')
  var i5445 = i5443[2]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 2) {
  request.r(i5445[i + 0], i5445[i + 1], 2, i5444, '')
  }
  i5442.gameScalers = i5444
  request.r(i5443[3], i5443[4], 0, i5442, 'backgroundRoot')
  return i5442
}

Deserializers["PlayableIdleTimer"] = function (request, data, root) {
  var i5448 = root || request.c( 'PlayableIdleTimer' )
  var i5449 = data
  return i5448
}

Deserializers["DataManager"] = function (request, data, root) {
  var i5450 = root || request.c( 'DataManager' )
  var i5451 = data
  request.r(i5451[0], i5451[1], 0, i5450, 'levelConfig')
  request.r(i5451[2], i5451[3], 0, i5450, 'gameConfig')
  return i5450
}

Deserializers["StickerManager"] = function (request, data, root) {
  var i5452 = root || request.c( 'StickerManager' )
  var i5453 = data
  request.r(i5453[0], i5453[1], 0, i5452, 'uiCanvas')
  request.r(i5453[2], i5453[3], 0, i5452, 'StickerLayerPrefab')
  request.r(i5453[4], i5453[5], 0, i5452, 'fingerPrefab')
  request.r(i5453[6], i5453[7], 0, i5452, 'StickerLayerParent')
  return i5452
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i5454 = root || request.c( 'LevelManager' )
  var i5455 = data
  request.r(i5455[0], i5455[1], 0, i5454, 'levelParent')
  request.r(i5455[2], i5455[3], 0, i5454, 'effectParent')
  request.r(i5455[4], i5455[5], 0, i5454, 'fireworksEffectPrefab')
  i5454.victoryScreenDelay = i5455[6]
  return i5454
}

Deserializers["GuideManager"] = function (request, data, root) {
  var i5456 = root || request.c( 'GuideManager' )
  var i5457 = data
  request.r(i5457[0], i5457[1], 0, i5456, 'guideFingerPrefab')
  request.r(i5457[2], i5457[3], 0, i5456, 'uiCanvas')
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5459 = data
  i5458.ambientIntensity = i5459[0]
  i5458.reflectionIntensity = i5459[1]
  i5458.ambientMode = i5459[2]
  i5458.ambientLight = new pc.Color(i5459[3], i5459[4], i5459[5], i5459[6])
  i5458.ambientSkyColor = new pc.Color(i5459[7], i5459[8], i5459[9], i5459[10])
  i5458.ambientGroundColor = new pc.Color(i5459[11], i5459[12], i5459[13], i5459[14])
  i5458.ambientEquatorColor = new pc.Color(i5459[15], i5459[16], i5459[17], i5459[18])
  i5458.fogColor = new pc.Color(i5459[19], i5459[20], i5459[21], i5459[22])
  i5458.fogEndDistance = i5459[23]
  i5458.fogStartDistance = i5459[24]
  i5458.fogDensity = i5459[25]
  i5458.fog = !!i5459[26]
  request.r(i5459[27], i5459[28], 0, i5458, 'skybox')
  i5458.fogMode = i5459[29]
  var i5461 = i5459[30]
  var i5460 = []
  for(var i = 0; i < i5461.length; i += 1) {
    i5460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5461[i + 0]) );
  }
  i5458.lightmaps = i5460
  i5458.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5459[31], i5458.lightProbes)
  i5458.lightmapsMode = i5459[32]
  i5458.mixedBakeMode = i5459[33]
  i5458.environmentLightingMode = i5459[34]
  i5458.ambientProbe = new pc.SphericalHarmonicsL2(i5459[35])
  request.r(i5459[36], i5459[37], 0, i5458, 'customReflection')
  request.r(i5459[38], i5459[39], 0, i5458, 'defaultReflection')
  i5458.defaultReflectionMode = i5459[40]
  i5458.defaultReflectionResolution = i5459[41]
  i5458.sunLightObjectId = i5459[42]
  i5458.pixelLightCount = i5459[43]
  i5458.defaultReflectionHDR = !!i5459[44]
  i5458.hasLightDataAsset = !!i5459[45]
  i5458.hasManualGenerate = !!i5459[46]
  return i5458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5465 = data
  request.r(i5465[0], i5465[1], 0, i5464, 'lightmapColor')
  request.r(i5465[2], i5465[3], 0, i5464, 'lightmapDirection')
  request.r(i5465[4], i5465[5], 0, i5464, 'shadowMask')
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5466 = root || new UnityEngine.LightProbes()
  var i5467 = data
  return i5466
}

Deserializers["MyLayerGame"] = function (request, data, root) {
  var i5474 = root || request.c( 'MyLayerGame' )
  var i5475 = data
  request.r(i5475[0], i5475[1], 0, i5474, 'counterPanel')
  request.r(i5475[2], i5475[3], 0, i5474, 'counterText')
  return i5474
}

Deserializers["MyLayerPause"] = function (request, data, root) {
  var i5476 = root || request.c( 'MyLayerPause' )
  var i5477 = data
  return i5476
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i5478 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i5479 = data
  i5478.m_Spacing = i5479[0]
  i5478.m_ChildForceExpandWidth = !!i5479[1]
  i5478.m_ChildForceExpandHeight = !!i5479[2]
  i5478.m_ChildControlWidth = !!i5479[3]
  i5478.m_ChildControlHeight = !!i5479[4]
  i5478.m_ChildScaleWidth = !!i5479[5]
  i5478.m_ChildScaleHeight = !!i5479[6]
  i5478.m_ReverseArrangement = !!i5479[7]
  i5478.m_Padding = UnityEngine.RectOffset.FromPaddings(i5479[8], i5479[9], i5479[10], i5479[11])
  i5478.m_ChildAlignment = i5479[12]
  return i5478
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5480 = root || request.c( 'UnityEngine.UI.Button' )
  var i5481 = data
  i5480.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5481[0], i5480.m_OnClick)
  i5480.m_Navigation = request.d('UnityEngine.UI.Navigation', i5481[1], i5480.m_Navigation)
  i5480.m_Transition = i5481[2]
  i5480.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5481[3], i5480.m_Colors)
  i5480.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5481[4], i5480.m_SpriteState)
  i5480.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5481[5], i5480.m_AnimationTriggers)
  i5480.m_Interactable = !!i5481[6]
  request.r(i5481[7], i5481[8], 0, i5480, 'm_TargetGraphic')
  return i5480
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5482 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5483 = data
  i5482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5483[0], i5482.m_PersistentCalls)
  return i5482
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5484 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5485 = data
  i5484.m_Mode = i5485[0]
  i5484.m_WrapAround = !!i5485[1]
  request.r(i5485[2], i5485[3], 0, i5484, 'm_SelectOnUp')
  request.r(i5485[4], i5485[5], 0, i5484, 'm_SelectOnDown')
  request.r(i5485[6], i5485[7], 0, i5484, 'm_SelectOnLeft')
  request.r(i5485[8], i5485[9], 0, i5484, 'm_SelectOnRight')
  return i5484
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5486 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5487 = data
  i5486.m_NormalColor = new pc.Color(i5487[0], i5487[1], i5487[2], i5487[3])
  i5486.m_HighlightedColor = new pc.Color(i5487[4], i5487[5], i5487[6], i5487[7])
  i5486.m_PressedColor = new pc.Color(i5487[8], i5487[9], i5487[10], i5487[11])
  i5486.m_SelectedColor = new pc.Color(i5487[12], i5487[13], i5487[14], i5487[15])
  i5486.m_DisabledColor = new pc.Color(i5487[16], i5487[17], i5487[18], i5487[19])
  i5486.m_ColorMultiplier = i5487[20]
  i5486.m_FadeDuration = i5487[21]
  return i5486
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5488 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5489 = data
  request.r(i5489[0], i5489[1], 0, i5488, 'm_HighlightedSprite')
  request.r(i5489[2], i5489[3], 0, i5488, 'm_PressedSprite')
  request.r(i5489[4], i5489[5], 0, i5488, 'm_SelectedSprite')
  request.r(i5489[6], i5489[7], 0, i5488, 'm_DisabledSprite')
  return i5488
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5490 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5491 = data
  i5490.m_NormalTrigger = i5491[0]
  i5490.m_HighlightedTrigger = i5491[1]
  i5490.m_PressedTrigger = i5491[2]
  i5490.m_SelectedTrigger = i5491[3]
  i5490.m_DisabledTrigger = i5491[4]
  return i5490
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5492 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5493 = data
  i5492.m_ShowMaskGraphic = !!i5493[0]
  return i5492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i5495 = data
  i5494.playAutomatically = !!i5495[0]
  request.r(i5495[1], i5495[2], 0, i5494, 'clip')
  var i5497 = i5495[3]
  var i5496 = []
  for(var i = 0; i < i5497.length; i += 2) {
  request.r(i5497[i + 0], i5497[i + 1], 2, i5496, '')
  }
  i5494.clips = i5496
  i5494.wrapMode = i5495[4]
  i5494.enabled = !!i5495[5]
  return i5494
}

Deserializers["SC._0xc1e449cf"] = function (request, data, root) {
  var i5500 = root || request.c( 'SC._0xc1e449cf' )
  var i5501 = data
  return i5500
}

Deserializers["SC.SCWebAdAdaptNode"] = function (request, data, root) {
  var i5502 = root || request.c( 'SC.SCWebAdAdaptNode' )
  var i5503 = data
  i5502.landscapeData = request.d('SC._0xda5e030f', i5503[0], i5502.landscapeData)
  i5502.portraitData = request.d('SC._0xda5e030f', i5503[1], i5502.portraitData)
  return i5502
}

Deserializers["SC._0xda5e030f"] = function (request, data, root) {
  var i5504 = root || request.c( 'SC._0xda5e030f' )
  var i5505 = data
  i5504.bEmpty = !!i5505[0]
  i5504.position = new pc.Vec3( i5505[1], i5505[2], i5505[3] )
  i5504.rotation = new pc.Quat(i5505[4], i5505[5], i5505[6], i5505[7])
  i5504.scale = new pc.Vec3( i5505[8], i5505[9], i5505[10] )
  i5504.anchoredPosition = new pc.Vec2( i5505[11], i5505[12] )
  i5504.sizeDelta = new pc.Vec2( i5505[13], i5505[14] )
  i5504.anchorMin = new pc.Vec2( i5505[15], i5505[16] )
  i5504.anchorMax = new pc.Vec2( i5505[17], i5505[18] )
  i5504.pivot = new pc.Vec2( i5505[19], i5505[20] )
  return i5504
}

Deserializers["SC.UILanguage"] = function (request, data, root) {
  var i5506 = root || request.c( 'SC.UILanguage' )
  var i5507 = data
  var i5509 = i5507[0]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 1, i5508, '')
  }
  i5506.LLang = i5508
  return i5506
}

Deserializers["MyLayerSettle"] = function (request, data, root) {
  var i5512 = root || request.c( 'MyLayerSettle' )
  var i5513 = data
  request.r(i5513[0], i5513[1], 0, i5512, 'winTitle')
  request.r(i5513[2], i5513[3], 0, i5512, 'winPicture')
  request.r(i5513[4], i5513[5], 0, i5512, 'idleTitle')
  request.r(i5513[6], i5513[7], 0, i5512, 'idlePicture')
  request.r(i5513[8], i5513[9], 0, i5512, 'overlay')
  request.r(i5513[10], i5513[11], 0, i5512, 'panel')
  request.r(i5513[12], i5513[13], 0, i5512, 'title')
  request.r(i5513[14], i5513[15], 0, i5512, 'picture')
  request.r(i5513[16], i5513[17], 0, i5512, 'playButton')
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5515 = data
  var i5517 = i5515[0]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5517[i + 0]));
  }
  i5514.ShaderCompilationErrors = i5516
  i5514.name = i5515[1]
  i5514.guid = i5515[2]
  var i5519 = i5515[3]
  var i5518 = []
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.push( i5519[i + 0] );
  }
  i5514.shaderDefinedKeywords = i5518
  var i5521 = i5515[4]
  var i5520 = []
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5521[i + 0]) );
  }
  i5514.passes = i5520
  var i5523 = i5515[5]
  var i5522 = []
  for(var i = 0; i < i5523.length; i += 1) {
    i5522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5523[i + 0]) );
  }
  i5514.usePasses = i5522
  var i5525 = i5515[6]
  var i5524 = []
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5525[i + 0]) );
  }
  i5514.defaultParameterValues = i5524
  request.r(i5515[7], i5515[8], 0, i5514, 'unityFallbackShader')
  i5514.readDepth = !!i5515[9]
  i5514.hasDepthOnlyPass = !!i5515[10]
  i5514.isCreatedByShaderGraph = !!i5515[11]
  i5514.disableBatching = !!i5515[12]
  i5514.compiled = !!i5515[13]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5529 = data
  i5528.shaderName = i5529[0]
  i5528.errorMessage = i5529[1]
  return i5528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5534 = root || new pc.UnityShaderPass()
  var i5535 = data
  i5534.id = i5535[0]
  i5534.subShaderIndex = i5535[1]
  i5534.name = i5535[2]
  i5534.passType = i5535[3]
  i5534.grabPassTextureName = i5535[4]
  i5534.usePass = !!i5535[5]
  i5534.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[6], i5534.zTest)
  i5534.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[7], i5534.zWrite)
  i5534.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[8], i5534.culling)
  i5534.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5535[9], i5534.blending)
  i5534.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5535[10], i5534.alphaBlending)
  i5534.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[11], i5534.colorWriteMask)
  i5534.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[12], i5534.offsetUnits)
  i5534.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[13], i5534.offsetFactor)
  i5534.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[14], i5534.stencilRef)
  i5534.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[15], i5534.stencilReadMask)
  i5534.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5535[16], i5534.stencilWriteMask)
  i5534.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5535[17], i5534.stencilOp)
  i5534.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5535[18], i5534.stencilOpFront)
  i5534.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5535[19], i5534.stencilOpBack)
  var i5537 = i5535[20]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 1) {
    i5536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5537[i + 0]) );
  }
  i5534.tags = i5536
  var i5539 = i5535[21]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.push( i5539[i + 0] );
  }
  i5534.passDefinedKeywords = i5538
  var i5541 = i5535[22]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 1) {
    i5540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5541[i + 0]) );
  }
  i5534.passDefinedKeywordGroups = i5540
  var i5543 = i5535[23]
  var i5542 = []
  for(var i = 0; i < i5543.length; i += 1) {
    i5542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5543[i + 0]) );
  }
  i5534.variants = i5542
  var i5545 = i5535[24]
  var i5544 = []
  for(var i = 0; i < i5545.length; i += 1) {
    i5544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5545[i + 0]) );
  }
  i5534.excludedVariants = i5544
  i5534.hasDepthReader = !!i5535[25]
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5547 = data
  i5546.val = i5547[0]
  i5546.name = i5547[1]
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5549 = data
  i5548.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5549[0], i5548.src)
  i5548.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5549[1], i5548.dst)
  i5548.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5549[2], i5548.op)
  return i5548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5551 = data
  i5550.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5551[0], i5550.pass)
  i5550.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5551[1], i5550.fail)
  i5550.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5551[2], i5550.zFail)
  i5550.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5551[3], i5550.comp)
  return i5550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5555 = data
  i5554.name = i5555[0]
  i5554.value = i5555[1]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5559 = data
  var i5561 = i5559[0]
  var i5560 = []
  for(var i = 0; i < i5561.length; i += 1) {
    i5560.push( i5561[i + 0] );
  }
  i5558.keywords = i5560
  i5558.hasDiscard = !!i5559[1]
  return i5558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5565 = data
  i5564.passId = i5565[0]
  i5564.subShaderIndex = i5565[1]
  var i5567 = i5565[2]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.push( i5567[i + 0] );
  }
  i5564.keywords = i5566
  i5564.vertexProgram = i5565[3]
  i5564.fragmentProgram = i5565[4]
  i5564.exportedForWebGl2 = !!i5565[5]
  i5564.readDepth = !!i5565[6]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5571 = data
  request.r(i5571[0], i5571[1], 0, i5570, 'shader')
  i5570.pass = i5571[2]
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5575 = data
  i5574.name = i5575[0]
  i5574.type = i5575[1]
  i5574.value = new pc.Vec4( i5575[2], i5575[3], i5575[4], i5575[5] )
  i5574.textureValue = i5575[6]
  i5574.shaderPropertyFlag = i5575[7]
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5577 = data
  i5576.name = i5577[0]
  request.r(i5577[1], i5577[2], 0, i5576, 'texture')
  i5576.aabb = i5577[3]
  i5576.vertices = i5577[4]
  i5576.triangles = i5577[5]
  i5576.textureRect = UnityEngine.Rect.MinMaxRect(i5577[6], i5577[7], i5577[8], i5577[9])
  i5576.packedRect = UnityEngine.Rect.MinMaxRect(i5577[10], i5577[11], i5577[12], i5577[13])
  i5576.border = new pc.Vec4( i5577[14], i5577[15], i5577[16], i5577[17] )
  i5576.transparency = i5577[18]
  i5576.bounds = i5577[19]
  i5576.pixelsPerUnit = i5577[20]
  i5576.textureWidth = i5577[21]
  i5576.textureHeight = i5577[22]
  i5576.nativeSize = new pc.Vec2( i5577[23], i5577[24] )
  i5576.pivot = new pc.Vec2( i5577[25], i5577[26] )
  i5576.textureRectOffset = new pc.Vec2( i5577[27], i5577[28] )
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5579 = data
  i5578.name = i5579[0]
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5581 = data
  i5580.name = i5581[0]
  i5580.wrapMode = i5581[1]
  i5580.isLooping = !!i5581[2]
  i5580.length = i5581[3]
  var i5583 = i5581[4]
  var i5582 = []
  for(var i = 0; i < i5583.length; i += 1) {
    i5582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5583[i + 0]) );
  }
  i5580.curves = i5582
  var i5585 = i5581[5]
  var i5584 = []
  for(var i = 0; i < i5585.length; i += 1) {
    i5584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5585[i + 0]) );
  }
  i5580.events = i5584
  i5580.halfPrecision = !!i5581[6]
  i5580._frameRate = i5581[7]
  i5580.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5581[8], i5580.localBounds)
  i5580.hasMuscleCurves = !!i5581[9]
  var i5587 = i5581[10]
  var i5586 = []
  for(var i = 0; i < i5587.length; i += 1) {
    i5586.push( i5587[i + 0] );
  }
  i5580.clipMuscleConstant = i5586
  i5580.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5581[11], i5580.clipBindingConstant)
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5591 = data
  i5590.path = i5591[0]
  i5590.hash = i5591[1]
  i5590.componentType = i5591[2]
  i5590.property = i5591[3]
  i5590.keys = i5591[4]
  var i5593 = i5591[5]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5593[i + 0]) );
  }
  i5590.objectReferenceKeys = i5592
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5597 = data
  i5596.time = i5597[0]
  request.r(i5597[1], i5597[2], 0, i5596, 'value')
  return i5596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5601 = data
  i5600.functionName = i5601[0]
  i5600.floatParameter = i5601[1]
  i5600.intParameter = i5601[2]
  i5600.stringParameter = i5601[3]
  request.r(i5601[4], i5601[5], 0, i5600, 'objectReferenceParameter')
  i5600.time = i5601[6]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5603 = data
  i5602.center = new pc.Vec3( i5603[0], i5603[1], i5603[2] )
  i5602.extends = new pc.Vec3( i5603[3], i5603[4], i5603[5] )
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5607 = data
  var i5609 = i5607[0]
  var i5608 = []
  for(var i = 0; i < i5609.length; i += 1) {
    i5608.push( i5609[i + 0] );
  }
  i5606.genericBindings = i5608
  var i5611 = i5607[1]
  var i5610 = []
  for(var i = 0; i < i5611.length; i += 1) {
    i5610.push( i5611[i + 0] );
  }
  i5606.pptrCurveMapping = i5610
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5613 = data
  i5612.name = i5613[0]
  i5612.ascent = i5613[1]
  i5612.originalLineHeight = i5613[2]
  i5612.fontSize = i5613[3]
  var i5615 = i5613[4]
  var i5614 = []
  for(var i = 0; i < i5615.length; i += 1) {
    i5614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5615[i + 0]) );
  }
  i5612.characterInfo = i5614
  request.r(i5613[5], i5613[6], 0, i5612, 'texture')
  i5612.originalFontSize = i5613[7]
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5619 = data
  i5618.index = i5619[0]
  i5618.advance = i5619[1]
  i5618.bearing = i5619[2]
  i5618.glyphWidth = i5619[3]
  i5618.glyphHeight = i5619[4]
  i5618.minX = i5619[5]
  i5618.maxX = i5619[6]
  i5618.minY = i5619[7]
  i5618.maxY = i5619[8]
  i5618.uvBottomLeftX = i5619[9]
  i5618.uvBottomLeftY = i5619[10]
  i5618.uvBottomRightX = i5619[11]
  i5618.uvBottomRightY = i5619[12]
  i5618.uvTopLeftX = i5619[13]
  i5618.uvTopLeftY = i5619[14]
  i5618.uvTopRightX = i5619[15]
  i5618.uvTopRightY = i5619[16]
  return i5618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5621 = data
  i5620.name = i5621[0]
  var i5623 = i5621[1]
  var i5622 = []
  for(var i = 0; i < i5623.length; i += 1) {
    i5622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5623[i + 0]) );
  }
  i5620.layers = i5622
  var i5625 = i5621[2]
  var i5624 = []
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5625[i + 0]) );
  }
  i5620.parameters = i5624
  i5620.animationClips = i5621[3]
  i5620.avatarUnsupported = i5621[4]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5629 = data
  i5628.name = i5629[0]
  i5628.defaultWeight = i5629[1]
  i5628.blendingMode = i5629[2]
  i5628.avatarMask = i5629[3]
  i5628.syncedLayerIndex = i5629[4]
  i5628.syncedLayerAffectsTiming = !!i5629[5]
  i5628.syncedLayers = i5629[6]
  i5628.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5629[7], i5628.stateMachine)
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5631 = data
  i5630.id = i5631[0]
  i5630.name = i5631[1]
  i5630.path = i5631[2]
  var i5633 = i5631[3]
  var i5632 = []
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5633[i + 0]) );
  }
  i5630.states = i5632
  var i5635 = i5631[4]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5635[i + 0]) );
  }
  i5630.machines = i5634
  var i5637 = i5631[5]
  var i5636 = []
  for(var i = 0; i < i5637.length; i += 1) {
    i5636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5637[i + 0]) );
  }
  i5630.entryStateTransitions = i5636
  var i5639 = i5631[6]
  var i5638 = []
  for(var i = 0; i < i5639.length; i += 1) {
    i5638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5639[i + 0]) );
  }
  i5630.exitStateTransitions = i5638
  var i5641 = i5631[7]
  var i5640 = []
  for(var i = 0; i < i5641.length; i += 1) {
    i5640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5641[i + 0]) );
  }
  i5630.anyStateTransitions = i5640
  i5630.defaultStateId = i5631[8]
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5645 = data
  i5644.id = i5645[0]
  i5644.name = i5645[1]
  i5644.cycleOffset = i5645[2]
  i5644.cycleOffsetParameter = i5645[3]
  i5644.cycleOffsetParameterActive = !!i5645[4]
  i5644.mirror = !!i5645[5]
  i5644.mirrorParameter = i5645[6]
  i5644.mirrorParameterActive = !!i5645[7]
  i5644.motionId = i5645[8]
  i5644.nameHash = i5645[9]
  i5644.fullPathHash = i5645[10]
  i5644.speed = i5645[11]
  i5644.speedParameter = i5645[12]
  i5644.speedParameterActive = !!i5645[13]
  i5644.tag = i5645[14]
  i5644.tagHash = i5645[15]
  i5644.writeDefaultValues = !!i5645[16]
  var i5647 = i5645[17]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 2) {
  request.r(i5647[i + 0], i5647[i + 1], 2, i5646, '')
  }
  i5644.behaviours = i5646
  var i5649 = i5645[18]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5649[i + 0]) );
  }
  i5644.transitions = i5648
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5655 = data
  i5654.fullPath = i5655[0]
  i5654.canTransitionToSelf = !!i5655[1]
  i5654.duration = i5655[2]
  i5654.exitTime = i5655[3]
  i5654.hasExitTime = !!i5655[4]
  i5654.hasFixedDuration = !!i5655[5]
  i5654.interruptionSource = i5655[6]
  i5654.offset = i5655[7]
  i5654.orderedInterruption = !!i5655[8]
  i5654.destinationStateId = i5655[9]
  i5654.isExit = !!i5655[10]
  i5654.mute = !!i5655[11]
  i5654.solo = !!i5655[12]
  var i5657 = i5655[13]
  var i5656 = []
  for(var i = 0; i < i5657.length; i += 1) {
    i5656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5657[i + 0]) );
  }
  i5654.conditions = i5656
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5663 = data
  i5662.destinationStateId = i5663[0]
  i5662.isExit = !!i5663[1]
  i5662.mute = !!i5663[2]
  i5662.solo = !!i5663[3]
  var i5665 = i5663[4]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5665[i + 0]) );
  }
  i5662.conditions = i5664
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5669 = data
  i5668.defaultBool = !!i5669[0]
  i5668.defaultFloat = i5669[1]
  i5668.defaultInt = i5669[2]
  i5668.name = i5669[3]
  i5668.nameHash = i5669[4]
  i5668.type = i5669[5]
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5671 = data
  i5670.name = i5671[0]
  i5670.bytes64 = i5671[1]
  i5670.data = i5671[2]
  return i5670
}

Deserializers["LevelConfig"] = function (request, data, root) {
  var i5672 = root || request.c( 'LevelConfig' )
  var i5673 = data
  var i5675 = i5673[0]
  var i5674 = []
  for(var i = 0; i < i5675.length; i += 1) {
    i5674.push( request.d('LevelConfig+LevelData', i5675[i + 0]) );
  }
  i5672.levelDataList = i5674
  return i5672
}

Deserializers["LevelConfig+LevelData"] = function (request, data, root) {
  var i5678 = root || request.c( 'LevelConfig+LevelData' )
  var i5679 = data
  i5678.levelID = i5679[0]
  request.r(i5679[1], i5679[2], 0, i5678, 'levelPrefab')
  i5678.levelPrefabPath = i5679[3]
  i5678.imageFolderPath = i5679[4]
  request.r(i5679[5], i5679[6], 0, i5678, 'backgroundImage')
  return i5678
}

Deserializers["DragonBones.UnityDragonBonesData"] = function (request, data, root) {
  var i5680 = root || request.c( 'DragonBones.UnityDragonBonesData' )
  var i5681 = data
  i5680.dataName = i5681[0]
  request.r(i5681[1], i5681[2], 0, i5680, 'dragonBonesJSON')
  var i5683 = i5681[3]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( request.d('DragonBones.UnityDragonBonesData+TextureAtlas', i5683[i + 0]) );
  }
  i5680.textureAtlas = i5682
  return i5680
}

Deserializers["DragonBones.UnityDragonBonesData+TextureAtlas"] = function (request, data, root) {
  var i5686 = root || request.c( 'DragonBones.UnityDragonBonesData+TextureAtlas' )
  var i5687 = data
  request.r(i5687[0], i5687[1], 0, i5686, 'textureAtlasJSON')
  request.r(i5687[2], i5687[3], 0, i5686, 'texture')
  request.r(i5687[4], i5687[5], 0, i5686, 'material')
  request.r(i5687[6], i5687[7], 0, i5686, 'uiMaterial')
  return i5686
}

Deserializers["GameConfig"] = function (request, data, root) {
  var i5688 = root || request.c( 'GameConfig' )
  var i5689 = data
  i5688.stickerMaxHeight = i5689[0]
  i5688.dragStickerScaleAnimationDuration = i5689[1]
  i5688.dragStickerDestroyAnimationDuration = i5689[2]
  i5688.guideFingerMoveAnimationDuration = i5689[3]
  i5688.progressBarAnimationDuration = i5689[4]
  i5688.idleSettleSeconds = i5689[5]
  i5688.stickerRefreshAudioDelay = i5689[6]
  return i5688
}

Deserializers["SC.WebAdConfig"] = function (request, data, root) {
  var i5690 = root || request.c( 'SC.WebAdConfig' )
  var i5691 = data
  i5690.EEditorLanguage = i5691[0]
  var i5693 = i5691[1]
  var i5692 = new (System.Collections.Generic.List$1(Bridge.ns('SC.WindowConfig')))
  for(var i = 0; i < i5693.length; i += 1) {
    i5692.add(request.d('SC.WindowConfig', i5693[i + 0]));
  }
  i5690.WindowConfigs = i5692
  i5690.BUseSCFontTtf = !!i5691[2]
  i5690.IAutoSettleDuration = i5691[3]
  i5690.IDebugLanguage = i5691[4]
  i5690.eDebugWebPlatform = i5691[5]
  i5690.fDebugCheckEnterGameTime = i5691[6]
  i5690.fDebugAdDuration = i5691[7]
  i5690.EGraphicsAPI = i5691[8]
  return i5690
}

Deserializers["SC.WindowConfig"] = function (request, data, root) {
  var i5696 = root || request.c( 'SC.WindowConfig' )
  var i5697 = data
  i5696.winName = i5697[0]
  request.r(i5697[1], i5697[2], 0, i5696, 'prefab')
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5699 = data
  var i5701 = i5699[0]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5701[i + 0]) );
  }
  i5698.files = i5700
  i5698.componentToPrefabIds = i5699[1]
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5705 = data
  i5704.path = i5705[0]
  request.r(i5705[1], i5705[2], 0, i5704, 'unityObject')
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5707 = data
  var i5709 = i5707[0]
  var i5708 = []
  for(var i = 0; i < i5709.length; i += 1) {
    i5708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5709[i + 0]) );
  }
  i5706.scriptsExecutionOrder = i5708
  var i5711 = i5707[1]
  var i5710 = []
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5711[i + 0]) );
  }
  i5706.sortingLayers = i5710
  var i5713 = i5707[2]
  var i5712 = []
  for(var i = 0; i < i5713.length; i += 1) {
    i5712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5713[i + 0]) );
  }
  i5706.cullingLayers = i5712
  i5706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5707[3], i5706.timeSettings)
  i5706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5707[4], i5706.physicsSettings)
  i5706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5707[5], i5706.physics2DSettings)
  i5706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5707[6], i5706.qualitySettings)
  i5706.enableRealtimeShadows = !!i5707[7]
  i5706.enableAutoInstancing = !!i5707[8]
  i5706.enableStaticBatching = !!i5707[9]
  i5706.enableDynamicBatching = !!i5707[10]
  i5706.usePreservativeDynamicBatching = !!i5707[11]
  i5706.lightmapEncodingQuality = i5707[12]
  i5706.desiredColorSpace = i5707[13]
  var i5715 = i5707[14]
  var i5714 = []
  for(var i = 0; i < i5715.length; i += 1) {
    i5714.push( i5715[i + 0] );
  }
  i5706.allTags = i5714
  return i5706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5719 = data
  i5718.name = i5719[0]
  i5718.value = i5719[1]
  return i5718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5723 = data
  i5722.id = i5723[0]
  i5722.name = i5723[1]
  i5722.value = i5723[2]
  return i5722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5727 = data
  i5726.id = i5727[0]
  i5726.name = i5727[1]
  return i5726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5729 = data
  i5728.fixedDeltaTime = i5729[0]
  i5728.maximumDeltaTime = i5729[1]
  i5728.timeScale = i5729[2]
  i5728.maximumParticleTimestep = i5729[3]
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5731 = data
  i5730.gravity = new pc.Vec3( i5731[0], i5731[1], i5731[2] )
  i5730.defaultSolverIterations = i5731[3]
  i5730.bounceThreshold = i5731[4]
  i5730.autoSyncTransforms = !!i5731[5]
  i5730.autoSimulation = !!i5731[6]
  var i5733 = i5731[7]
  var i5732 = []
  for(var i = 0; i < i5733.length; i += 1) {
    i5732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5733[i + 0]) );
  }
  i5730.collisionMatrix = i5732
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5737 = data
  i5736.enabled = !!i5737[0]
  i5736.layerId = i5737[1]
  i5736.otherLayerId = i5737[2]
  return i5736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5739 = data
  request.r(i5739[0], i5739[1], 0, i5738, 'material')
  i5738.gravity = new pc.Vec2( i5739[2], i5739[3] )
  i5738.positionIterations = i5739[4]
  i5738.velocityIterations = i5739[5]
  i5738.velocityThreshold = i5739[6]
  i5738.maxLinearCorrection = i5739[7]
  i5738.maxAngularCorrection = i5739[8]
  i5738.maxTranslationSpeed = i5739[9]
  i5738.maxRotationSpeed = i5739[10]
  i5738.baumgarteScale = i5739[11]
  i5738.baumgarteTOIScale = i5739[12]
  i5738.timeToSleep = i5739[13]
  i5738.linearSleepTolerance = i5739[14]
  i5738.angularSleepTolerance = i5739[15]
  i5738.defaultContactOffset = i5739[16]
  i5738.autoSimulation = !!i5739[17]
  i5738.queriesHitTriggers = !!i5739[18]
  i5738.queriesStartInColliders = !!i5739[19]
  i5738.callbacksOnDisable = !!i5739[20]
  i5738.reuseCollisionCallbacks = !!i5739[21]
  i5738.autoSyncTransforms = !!i5739[22]
  var i5741 = i5739[23]
  var i5740 = []
  for(var i = 0; i < i5741.length; i += 1) {
    i5740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5741[i + 0]) );
  }
  i5738.collisionMatrix = i5740
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5745 = data
  i5744.enabled = !!i5745[0]
  i5744.layerId = i5745[1]
  i5744.otherLayerId = i5745[2]
  return i5744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5747 = data
  var i5749 = i5747[0]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 1) {
    i5748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5749[i + 0]) );
  }
  i5746.qualityLevels = i5748
  var i5751 = i5747[1]
  var i5750 = []
  for(var i = 0; i < i5751.length; i += 1) {
    i5750.push( i5751[i + 0] );
  }
  i5746.names = i5750
  i5746.shadows = i5747[2]
  i5746.anisotropicFiltering = i5747[3]
  i5746.antiAliasing = i5747[4]
  i5746.lodBias = i5747[5]
  i5746.shadowCascades = i5747[6]
  i5746.shadowDistance = i5747[7]
  i5746.shadowmaskMode = i5747[8]
  i5746.shadowProjection = i5747[9]
  i5746.shadowResolution = i5747[10]
  i5746.softParticles = !!i5747[11]
  i5746.softVegetation = !!i5747[12]
  i5746.activeColorSpace = i5747[13]
  i5746.desiredColorSpace = i5747[14]
  i5746.masterTextureLimit = i5747[15]
  i5746.maxQueuedFrames = i5747[16]
  i5746.particleRaycastBudget = i5747[17]
  i5746.pixelLightCount = i5747[18]
  i5746.realtimeReflectionProbes = !!i5747[19]
  i5746.shadowCascade2Split = i5747[20]
  i5746.shadowCascade4Split = new pc.Vec3( i5747[21], i5747[22], i5747[23] )
  i5746.streamingMipmapsActive = !!i5747[24]
  i5746.vSyncCount = i5747[25]
  i5746.asyncUploadBufferSize = i5747[26]
  i5746.asyncUploadTimeSlice = i5747[27]
  i5746.billboardsFaceCameraPosition = !!i5747[28]
  i5746.shadowNearPlaneOffset = i5747[29]
  i5746.streamingMipmapsMemoryBudget = i5747[30]
  i5746.maximumLODLevel = i5747[31]
  i5746.streamingMipmapsAddAllCameras = !!i5747[32]
  i5746.streamingMipmapsMaxLevelReduction = i5747[33]
  i5746.streamingMipmapsRenderersPerFrame = i5747[34]
  i5746.resolutionScalingFixedDPIFactor = i5747[35]
  i5746.streamingMipmapsMaxFileIORequests = i5747[36]
  i5746.currentQualityLevel = i5747[37]
  return i5746
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5754 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5755 = data
  request.r(i5755[0], i5755[1], 0, i5754, 'm_ObjectArgument')
  i5754.m_ObjectArgumentAssemblyTypeName = i5755[2]
  i5754.m_IntArgument = i5755[3]
  i5754.m_FloatArgument = i5755[4]
  i5754.m_StringArgument = i5755[5]
  i5754.m_BoolArgument = !!i5755[6]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5759 = data
  i5758.weight = i5759[0]
  i5758.vertices = i5759[1]
  i5758.normals = i5759[2]
  i5758.tangents = i5759[3]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5763 = data
  i5762.mode = i5763[0]
  i5762.parameter = i5763[1]
  i5762.threshold = i5763[2]
  return i5762
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

Deserializers.buildID = "77d98dfa-0097-46df-9a9b-44fcdba3f86d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["SC","_0xea696b74","_0xfa2bc922"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["SC","_0xea696b74","_0x2f6a202b"]],[["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

