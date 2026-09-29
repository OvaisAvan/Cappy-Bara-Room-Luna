/**
 * @version 1.0.9763.31707
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*_0x5c9b0807 start.*/
    Bridge.define("_0x5c9b0807", {
        $kind: 6,
        statics: {
            fields: {
                _0x14b4b5b8: 0,
                _0x696d5f85: 1
            }
        }
    });
    /*_0x5c9b0807 end.*/

    /*_0x77cefece start.*/
    Bridge.define("_0x77cefece", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _0xe04587a0: null
            },
            ctors: {
                init: function () {
                    this._0xe04587a0 = "\u00a0";
                }
            }
        },
        fields: {
            _0x6f7ab55a: null,
            _0x21a4030c: null
        },
        ctors: {
            init: function () {
                this._0x21a4030c = "";
            }
        },
        methods: {
            /*_0x77cefece.Awake start.*/
            Awake: function () {
                this._0x6f7ab55a = this.GetComponent(UnityEngine.UI.Text);
                this._0x21a4030c = this._0x6f7ab55a.text;
                this._0x7038096a();
            },
            /*_0x77cefece.Awake end.*/

            /*_0x77cefece.OnEnable start.*/
            OnEnable: function () {
                this._0x7038096a();
            },
            /*_0x77cefece.OnEnable end.*/

            /*_0x77cefece._0x7038096a start.*/
            _0x7038096a: function () {
                this._0x769f23e9(System.String.replaceAll(SC.sc.language.Get(this._0x21a4030c), " ", _0x77cefece._0xe04587a0));
            },
            /*_0x77cefece._0x7038096a end.*/

            /*_0x77cefece._0x769f23e9 start.*/
            _0x769f23e9: function (_0x54031a98) {
                this._0x6f7ab55a.text = _0x54031a98;
            },
            /*_0x77cefece._0x769f23e9 end.*/


        }
    });
    /*_0x77cefece end.*/

    /*_0xb93849a5 start.*/
    Bridge.define("_0xb93849a5", {
        fields: {
            type: null,
            lRewardId: null,
            lRewardCount: null,
            isSc: false
        }
    });
    /*_0xb93849a5 end.*/

    /*ColorHelper start.*/
    Bridge.define("ColorHelper", {
        statics: {
            methods: {
                /*ColorHelper.GetColor:static start.*/
                GetColor: function (type) {
                    switch (type) {
                        case ColorType.Red: 
                            return new pc.Color( 0.96, 0.26, 0.22, 1 );
                        case ColorType.Green: 
                            return new pc.Color( 0.35, 0.8, 0.32, 1 );
                        case ColorType.Yellow: 
                            return new pc.Color( 0.96, 0.71, 0.19, 1 );
                        case ColorType.Blue: 
                            return new pc.Color( 0.2, 0.55, 1.0, 1 );
                        case ColorType.Orange: 
                            return new pc.Color( 1.0, 0.5, 0.0, 1 );
                        case ColorType.Gray: 
                            return new pc.Color( 0.62, 0.62, 0.62, 1 );
                        case ColorType.White: 
                            return new pc.Color( 1, 1, 1, 1 );
                        case ColorType.Brown: 
                            return new pc.Color( 0.59, 0.24, 0.035, 1 );
                        case ColorType.DarkBrown: 
                            return new pc.Color( 0.380392164, 0.129411772, 0.0156862754, 1 );
                        case ColorType.Tan: 
                            return new pc.Color( 0.654902, 0.5176471, 0.309803933, 1 );
                        default: 
                            return new pc.Color( 1, 1, 1, 1 );
                    }
                },
                /*ColorHelper.GetColor:static end.*/


            }
        }
    });
    /*ColorHelper end.*/

    /*ColorType start.*/
    Bridge.define("ColorType", {
        $kind: 6,
        statics: {
            fields: {
                Red: 0,
                Green: 1,
                Yellow: 2,
                Blue: 3,
                Orange: 4,
                Gray: 5,
                White: 6,
                Brown: 7,
                DarkBrown: 8,
                Tan: 9
            }
        }
    });
    /*ColorType end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {DG.Tweening.DOTweenAnimation}    arg
     * @return  {void}
     */


    /*DG.Tweening.DOTweenAnimation start.*/
    /** @namespace DG.Tweening */

    /**
     * Attach this to a GameObject to create a tween
     *
     * @public
     * @class DG.Tweening.DOTweenAnimation
     * @augments DG.Tweening.Core.ABSAnimationComponent
     */
    Bridge.define("DG.Tweening.DOTweenAnimation", {
        inherits: [DG.Tweening.Core.ABSAnimationComponent],
        statics: {
            events: {
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function addOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function removeOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnReset: null
            },
            methods: {
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static start.*/
                Dispatch_OnReset: function (anim) {
                    if (!Bridge.staticEquals(DG.Tweening.DOTweenAnimation.OnReset, null)) {
                        DG.Tweening.DOTweenAnimation.OnReset(anim);
                    }
                },
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static end.*/

                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static start.*/
                TypeToDOTargetType: function (t) {
                    var str = Bridge.getTypeName(t);
                    var dotIndex = str.lastIndexOf(".");
                    if (dotIndex !== -1) {
                        str = str.substr(((dotIndex + 1) | 0));
                    }
                    if (System.String.indexOf(str, "Renderer") !== -1 && (!Bridge.referenceEquals(str, "SpriteRenderer"))) {
                        str = "Renderer";
                    }
                    //#if true // PHYSICS_MARKER
                    //            if (str == "Rigidbody") str = "Transform";
                    //#endif
                    //#if true // PHYSICS2D_MARKER
                    //            if (str == "Rigidbody2D") str = "Transform";
                    //#endif
                    //            if (str == "RectTransform") str = "Transform";
                    if (Bridge.referenceEquals(str, "RawImage") || Bridge.referenceEquals(str, "Graphic")) {
                        str = "Image";
                    } // RawImages/Graphics are managed like Images for DOTweenAnimation (color and fade use Graphic target anyway)
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(DG.Tweening.DOTweenAnimation.TargetType, str), DG.Tweening.DOTweenAnimation.TargetType), System.Int32));
                },
                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static end.*/


            }
        },
        fields: {
            targetIsSelf: false,
            targetGO: null,
            tweenTargetIsTargetGO: false,
            delay: 0,
            duration: 0,
            easeType: 0,
            easeCurve: null,
            loopType: 0,
            loops: 0,
            id: null,
            isRelative: false,
            isFrom: false,
            isIndependentUpdate: false,
            autoKill: false,
            isActive: false,
            isValid: false,
            target: null,
            animationType: 0,
            targetType: 0,
            forcedTargetType: 0,
            autoPlay: false,
            useTargetAsV3: false,
            endValueFloat: 0,
            endValueV3: null,
            endValueV2: null,
            endValueColor: null,
            endValueString: null,
            endValueRect: null,
            endValueTransform: null,
            optionalBool0: false,
            optionalFloat0: 0,
            optionalInt0: 0,
            optionalRotationMode: 0,
            optionalScrambleMode: 0,
            optionalString: null,
            _tweenCreated: false,
            _playCount: 0
        },
        ctors: {
            init: function () {
                this.endValueV3 = new UnityEngine.Vector3();
                this.endValueV2 = new UnityEngine.Vector2();
                this.endValueColor = new UnityEngine.Color();
                this.endValueRect = new UnityEngine.Rect();
                this.targetIsSelf = true;
                this.tweenTargetIsTargetGO = true;
                this.duration = 1;
                this.easeType = DG.Tweening.Ease.OutQuad;
                this.easeCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0, 0, 0, 0), new pc.Keyframe(1, 1, 0, 0) ]});
                this.loopType = DG.Tweening.LoopType.Restart;
                this.loops = 1;
                this.id = "";
                this.isIndependentUpdate = false;
                this.autoKill = true;
                this.isActive = true;
                this.autoPlay = true;
                this.endValueColor = new pc.Color( 1, 1, 1, 1 );
                this.endValueString = "";
                this.endValueRect = new UnityEngine.Rect.$ctor1(0, 0, 0, 0);
                this.optionalRotationMode = DG.Tweening.RotateMode.Fast;
                this.optionalScrambleMode = DG.Tweening.ScrambleMode.None;
                this._playCount = -1;
            }
        },
        methods: {
            /*DG.Tweening.DOTweenAnimation.Awake start.*/
            Awake: function () {
                if (!this.isActive || !this.isValid) {
                    return;
                }

                if (this.animationType !== DG.Tweening.DOTweenAnimation.AnimationType.Move || !this.useTargetAsV3) {
                    // Don't create tweens if we're using a RectTransform as a Move target,
                    // because that will work only inside Start
                    this.CreateTween();
                    this._tweenCreated = true;
                }
            },
            /*DG.Tweening.DOTweenAnimation.Awake end.*/

            /*DG.Tweening.DOTweenAnimation.Start start.*/
            Start: function () {
                if (this._tweenCreated || !this.isActive || !this.isValid) {
                    return;
                }

                this.CreateTween();
                this._tweenCreated = true;
            },
            /*DG.Tweening.DOTweenAnimation.Start end.*/

            /*DG.Tweening.DOTweenAnimation.Reset start.*/
            Reset: function () {
                DG.Tweening.DOTweenAnimation.Dispatch_OnReset(this);
            },
            /*DG.Tweening.DOTweenAnimation.Reset end.*/

            /*DG.Tweening.DOTweenAnimation.OnDestroy start.*/
            OnDestroy: function () {
                if (this.tween != null && DG.Tweening.TweenExtensions.IsActive(this.tween)) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.OnDestroy end.*/

            /*DG.Tweening.DOTweenAnimation.CreateTween start.*/
            CreateTween: function () {
                //            if (target == null) {
                //                Debug.LogWarning(string.Format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", this.gameObject.name), this.gameObject);
                //                return;
                //            }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.Component.op_Equality(this.target, null) || UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    if (this.targetIsSelf && UnityEngine.Component.op_Equality(this.target, null)) {
                        // Old error caused during upgrade from DOTween Pro 0.9.255
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", [this.gameObject.name]), this.gameObject);
                    } else {
                        // Missing non-self target
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }

                if (this.forcedTargetType !== DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    this.targetType = this.forcedTargetType;
                }
                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    // Legacy DOTweenAnimation (made with a version older than 0.9.450) without stored targetType > assign it now
                    this.targetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                }

                switch (this.animationType) {
                    case DG.Tweening.DOTweenAnimation.AnimationType.None: 
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Move: 
                        if (this.useTargetAsV3) {
                            this.isRelative = false;
                            if (UnityEngine.Component.op_Equality(this.endValueTransform, null)) {
                                UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target is NULL, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                this.endValueV3 = pc.Vec3.ZERO.clone();
                            } else {
                                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.RectTransform) {
                                    var endValueT = Bridge.as(this.endValueTransform, UnityEngine.RectTransform);
                                    if (UnityEngine.Component.op_Equality(endValueT, null)) {
                                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target should be a RectTransform, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                        this.endValueV3 = pc.Vec3.ZERO.clone();
                                    } else {
                                        var rTarget = Bridge.as(this.target, UnityEngine.RectTransform);
                                        if (UnityEngine.Component.op_Equality(rTarget, null)) {
                                            UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's target and TO target are not of the same type. Please reassign the values", [this.gameObject.name]), this.gameObject);
                                        } else {
                                            // Problem: doesn't work inside Awake (ararargh!)
                                            this.endValueV3 = UnityEngine.Vector3.FromVector2(DG.Tweening.DOTweenModuleUI.Utils.SwitchToRectTransform(endValueT, rTarget));
                                        }
                                    }
                                } else {
                                    this.endValueV3 = this.endValueTransform.position.$clone();
                                }
                            }
                        }
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOAnchorPos3D(Bridge.cast(this.target, UnityEngine.RectTransform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.DOTweenModulePhysics.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody2D), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalMove: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalMove(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalBool0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Rotate: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.DOTweenModulePhysics.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody2D), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalRotate: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalRotate(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Scale: 
                        switch (this.targetType) {
                            default: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOScale$1(tweenGO.transform, this.optionalBool0 ? new pc.Vec3( this.endValueFloat, this.endValueFloat, this.endValueFloat ) : this.endValueV3.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.UIWidthHeight: 
                        this.tween = DG.Tweening.DOTweenModuleUI.DOSizeDelta(Bridge.cast(this.target, UnityEngine.RectTransform), this.optionalBool0 ? new pc.Vec2( this.endValueFloat, this.endValueFloat ) : this.endValueV2.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Color: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$3(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$1(Bridge.cast(this.target, UnityEngine.Light), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOColor(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor$3(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueColor.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Fade: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOFade$1(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOIntensity(Bridge.cast(this.target, UnityEngine.Light), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOFade(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$1(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$4(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.CanvasGroup: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade(Bridge.cast(this.target, UnityEngine.CanvasGroup), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Text: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOText(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueString, this.duration, this.optionalBool0, this.optionalScrambleMode, this.optionalString);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchPosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOPunchPosition(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos(Bridge.cast(this.target, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchScale(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchRotation(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakePosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOShakePosition$3(Bridge.cast(this.target, UnityEngine.Transform), this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1(Bridge.cast(this.target, UnityEngine.RectTransform), this.duration, UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeScale$1(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeRotation$3(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraAspect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOAspect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraBackgroundColor: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOColor(Bridge.cast(this.target, UnityEngine.Camera), this.endValueColor.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraFieldOfView: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOFieldOfView(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraOrthoSize: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOOrthoSize(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraPixelRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPixelRect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DORect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                }

                if (this.tween == null) {
                    return;
                }

                if (this.isFrom) {
                    DG.Tweening.TweenSettingsExtensions.From$1(DG.Tweening.Tweener, Bridge.cast(this.tween, DG.Tweening.Tweener), this.isRelative);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Tween, this.tween, this.isRelative);
                }
                var setTarget = this.targetIsSelf || !this.tweenTargetIsTargetGO ? this.gameObject : this.targetGO;
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tween, this.tween, setTarget), this.delay), this.loops, this.loopType), this.autoKill), Bridge.fn.bind(this, function () {
                    this.tween = null;
                }));
                if (this.isSpeedBased) {
                    DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Tween, this.tween);
                }
                if (this.easeType === DG.Tweening.Ease.INTERNAL_Custom) {
                    DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Tween, this.tween, this.easeCurve);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tween, this.tween, this.easeType);
                }
                if (!System.String.isNullOrEmpty(this.id)) {
                    DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Tween, this.tween, this.id);
                }
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Tween, this.tween, this.isIndependentUpdate);

                if (this.hasOnStart) {
                    if (this.onStart != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStart, this.onStart.Invoke));
                    }
                } else {
                    this.onStart = null;
                }
                if (this.hasOnPlay) {
                    if (this.onPlay != null) {
                        DG.Tweening.TweenSettingsExtensions.OnPlay(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onPlay, this.onPlay.Invoke));
                    }
                } else {
                    this.onPlay = null;
                }
                if (this.hasOnUpdate) {
                    if (this.onUpdate != null) {
                        DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onUpdate, this.onUpdate.Invoke));
                    }
                } else {
                    this.onUpdate = null;
                }
                if (this.hasOnStepComplete) {
                    if (this.onStepComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStepComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStepComplete, this.onStepComplete.Invoke));
                    }
                } else {
                    this.onStepComplete = null;
                }
                if (this.hasOnComplete) {
                    if (this.onComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onComplete, this.onComplete.Invoke));
                    }
                } else {
                    this.onComplete = null;
                }
                if (this.hasOnRewind) {
                    if (this.onRewind != null) {
                        DG.Tweening.TweenSettingsExtensions.OnRewind(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onRewind, this.onRewind.Invoke));
                    }
                } else {
                    this.onRewind = null;
                }

                if (this.autoPlay) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this.tween);
                } else {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tween, this.tween);
                }

                if (this.hasOnTweenCreated && this.onTweenCreated != null) {
                    this.onTweenCreated.Invoke();
                }
            },
            /*DG.Tweening.DOTweenAnimation.CreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlay start.*/
            DOPlay: function () {
                DG.Tweening.DOTween.Play(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlay end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards start.*/
            DOPlayBackwards: function () {
                DG.Tweening.DOTween.PlayBackwards(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForward start.*/
            DOPlayForward: function () {
                DG.Tweening.DOTween.PlayForward(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForward end.*/

            /*DG.Tweening.DOTweenAnimation.DOPause start.*/
            DOPause: function () {
                DG.Tweening.DOTween.Pause(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOPause end.*/

            /*DG.Tweening.DOTweenAnimation.DOTogglePause start.*/
            DOTogglePause: function () {
                DG.Tweening.DOTween.TogglePause(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOTogglePause end.*/

            /*DG.Tweening.DOTweenAnimation.DORewind start.*/
            DORewind: function () {
                this._playCount = -1;
                // Rewind using Components order (in case there are multiple animations on the same property)
                var anims = this.gameObject.GetComponents(DG.Tweening.DOTweenAnimation);
                for (var i = (anims.length - 1) | 0; i > -1; i = (i - 1) | 0) {
                    var t = anims[i].tween;
                    if (t != null && DG.Tweening.TweenExtensions.IsInitialized(t)) {
                        DG.Tweening.TweenExtensions.Rewind(anims[i].tween);
                    }
                }
                // DOTween.Rewind(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DORewind end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart start.*/
            /**
             * Restarts the tween
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORestart: function () {
                this.DORestart$1(false);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart$1 start.*/
            /**
             * Restarts the tween
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    fromHere    If TRUE, re-evaluates the tween's start and end values from its current position.
             Set it to TRUE when spawning the same DOTweenAnimation in different positions (like when using a pooling system)
             * @return  {void}
             */
            DORestart$1: function (fromHere) {
                this._playCount = -1;
                if (this.tween == null) {
                    if (DG.Tweening.Core.Debugger.logPriority > 1) {
                        DG.Tweening.Core.Debugger.LogNullTween(this.tween);
                    }
                    return;
                }
                if (fromHere && this.isRelative) {
                    this.ReEvaluateRelativeTween();
                }
                DG.Tweening.DOTween.Restart(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart$1 end.*/

            /*DG.Tweening.DOTweenAnimation.DOComplete start.*/
            DOComplete: function () {
                DG.Tweening.DOTween.Complete(this.gameObject);
            },
            /*DG.Tweening.DOTweenAnimation.DOComplete end.*/

            /*DG.Tweening.DOTweenAnimation.DOKill start.*/
            DOKill: function () {
                DG.Tweening.DOTween.Kill(this.gameObject);
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.DOKill end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayById start.*/
            DOPlayById: function (id) {
                DG.Tweening.DOTween.Play$1(this.gameObject, id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayAllById start.*/
            DOPlayAllById: function (id) {
                DG.Tweening.DOTween.Play(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPauseAllById start.*/
            DOPauseAllById: function (id) {
                DG.Tweening.DOTween.Pause(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPauseAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById start.*/
            DOPlayBackwardsById: function (id) {
                DG.Tweening.DOTween.PlayBackwards$1(this.gameObject, id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById start.*/
            DOPlayBackwardsAllById: function (id) {
                DG.Tweening.DOTween.PlayBackwards(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById start.*/
            DOPlayForwardById: function (id) {
                DG.Tweening.DOTween.PlayForward$1(this.gameObject, id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById start.*/
            DOPlayForwardAllById: function (id) {
                DG.Tweening.DOTween.PlayForward(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayNext start.*/
            DOPlayNext: function () {
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                while (this._playCount < ((anims.length - 1) | 0)) {
                    this._playCount = (this._playCount + 1) | 0;
                    var anim = anims[this._playCount];
                    if (UnityEngine.MonoBehaviour.op_Inequality(anim, null) && anim.tween != null && !DG.Tweening.TweenExtensions.IsPlaying(anim.tween) && !DG.Tweening.TweenExtensions.IsComplete(anim.tween)) {
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, anim.tween);
                        break;
                    }
                }
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext start.*/
            DORewindAndPlayNext: function () {
                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(this.gameObject);
                this.DOPlayNext();
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAllById start.*/
            DORewindAllById: function (id) {
                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartById start.*/
            DORestartById: function (id) {
                this._playCount = -1;
                DG.Tweening.DOTween.Restart$1(this.gameObject, id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartAllById start.*/
            DORestartAllById: function (id) {
                this._playCount = -1;
                DG.Tweening.DOTween.Restart(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartAllById end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweens start.*/
            /**
             * Returns the tweens created by this DOTweenAnimation, in the same order as they appear in the Inspector (top to bottom)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {System.Collections.Generic.List$1}
             */
            GetTweens: function () {
                var $t;
                //            return DOTween.TweensByTarget(this.gameObject);

                var result = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                $t = Bridge.getEnumerator(anims);
                try {
                    while ($t.moveNext()) {
                        var anim = $t.Current;
                        result.add(anim.tween);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweens end.*/

            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview start.*/
            /**
             * Previews the tween in the editor. Only for DOTween internal usage: don't use otherwise.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {DG.Tweening.Tween}
             */
            CreateEditorPreview: function () {
                if (UnityEngine.Application.isPlaying) {
                    return null;
                }

                this.CreateTween();
                return this.tween;
            },
            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenGO start.*/
            GetTweenGO: function () {
                return this.targetIsSelf ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenGO end.*/

            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween start.*/
            ReEvaluateRelativeTween: function () {
                var tweenGO = this.GetTweenGO();
                if (UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    return;
                }
                if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.Move) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.position.$clone().add( this.endValueV3 ).$clone(), true);
                } else if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.LocalMove) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.localPosition.$clone().add( this.endValueV3 ).$clone(), true);
                }
            },
            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween end.*/


        },
        overloads: {
            "DORestart(bool)": "DORestart$1"
        }
    });
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.AnimationType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Move: 1,
                LocalMove: 2,
                Rotate: 3,
                LocalRotate: 4,
                Scale: 5,
                Color: 6,
                Fade: 7,
                Text: 8,
                PunchPosition: 9,
                PunchRotation: 10,
                PunchScale: 11,
                ShakePosition: 12,
                ShakeRotation: 13,
                ShakeScale: 14,
                CameraAspect: 15,
                CameraBackgroundColor: 16,
                CameraFieldOfView: 17,
                CameraOrthoSize: 18,
                CameraPixelRect: 19,
                CameraRect: 20,
                UIWidthHeight: 21
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.TargetType", {
        $kind: 1006,
        statics: {
            fields: {
                Unset: 0,
                Camera: 1,
                CanvasGroup: 2,
                Image: 3,
                Light: 4,
                RectTransform: 5,
                Renderer: 6,
                SpriteRenderer: 7,
                Rigidbody: 8,
                Rigidbody2D: 9,
                Text: 10,
                Transform: 11,
                tk2dBaseSprite: 12,
                tk2dTextMesh: 13,
                TextMeshPro: 14,
                TextMeshProUGUI: 15
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    Bridge.define("DG.Tweening.DOTweenAnimationExtensions", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static start.*/
                IsSameOrSubclassOf: function (T, t) {
                    return Bridge.is(t, T);
                },
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t;
                    var rBody = tweenRigidbody ? target.GetComponent(UnityEngine.Rigidbody) : null;
                    if (tweenRigidbody && UnityEngine.Component.op_Inequality(rBody, null)) {
                        t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                    } else {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    Bridge.define("DG.Tweening.DOTweenProShortcuts", {
        statics: {
            ctors: {
                ctor: function () {
                    // Create stub instances of custom plugins, in order to allow IL2CPP to understand they must be included in the build
                    var stub = new DG.Tweening.Plugins.SpiralPlugin();
                }
            },
            methods: {
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral$1:static start.*/
                /**
                 * Tweens a Transform's localPosition in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Transform}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral$1: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.localPosition;
                    }, function (x) {
                        target.localPosition = x.$clone();
                    }, System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral$1:static end.*/

                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static start.*/
                /**
                 * Tweens a Rigidbody's position in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Rigidbody}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null,
                GameWin: null,
                GameFail: null,
                ActiveShooters: null
            },
            ctors: {
                init: function () {
                    this.ActiveShooters = new (System.Collections.Generic.List$1(PlantShooter)).ctor();
                }
            }
        },
        fields: {
            LevelText: null,
            gameHud: null,
            winCelebration: null,
            idleSettleSeconds: 0,
            wonThisRun: false,
            failedThisRun: false,
            settlementStarted: false,
            idleTimer: 0
        },
        props: {
            WonThisRun: {
                get: function () {
                    return this.wonThisRun;
                }
            },
            FailedThisRun: {
                get: function () {
                    return this.failedThisRun;
                }
            }
        },
        ctors: {
            init: function () {
                this.idleSettleSeconds = 10.0;
            }
        },
        methods: {
            /*GameManager.OnEnable start.*/
            OnEnable: function () {
                GameManager.GameWin = Bridge.fn.combine(GameManager.GameWin, Bridge.fn.cacheBind(this, this.Win));
                GameManager.GameFail = Bridge.fn.combine(GameManager.GameFail, Bridge.fn.cacheBind(this, this.Fail));
            },
            /*GameManager.OnEnable end.*/

            /*GameManager.OnDisable start.*/
            OnDisable: function () {
                GameManager.GameWin = Bridge.fn.remove(GameManager.GameWin, Bridge.fn.cacheBind(this, this.Win));
                GameManager.GameFail = Bridge.fn.remove(GameManager.GameFail, Bridge.fn.cacheBind(this, this.Fail));
            },
            /*GameManager.OnDisable end.*/

            /*GameManager.OnDestroy start.*/
            OnDestroy: function () {
                GameManager.GameWin = Bridge.fn.remove(GameManager.GameWin, Bridge.fn.cacheBind(this, this.Win));
                GameManager.GameFail = Bridge.fn.remove(GameManager.GameFail, Bridge.fn.cacheBind(this, this.Fail));
                GameManager.instance = null;
            },
            /*GameManager.OnDestroy end.*/

            /*GameManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.instance, null)) {
                    GameManager.instance = this;
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
                GameManager.ActiveShooters = new (System.Collections.Generic.List$1(PlantShooter)).ctor();

                // Playable is always presented as "Level 1" (Phase 10 will localise this).
                if (UnityEngine.MonoBehaviour.op_Inequality(this.LevelText, null)) {
                    this.LevelText.text = "Level 1";
                }
                SC.sc.mobClick.Event$1("LevelStart", "Level 1", false);
                SC.sc.mobClick.Event$1("DedupLevelStart", "Level 1", true);
            },
            /*GameManager.Start end.*/

            /*GameManager.NotifyActivity start.*/
            NotifyActivity: function () {
                this.idleTimer = 0.0;
            },
            /*GameManager.NotifyActivity end.*/

            /*GameManager.MarkIdleSettlementFailed start.*/
            MarkIdleSettlementFailed: function () {
                if (this.wonThisRun || this.failedThisRun) {
                    return;
                }
                this.failedThisRun = true;
                this.settlementStarted = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(ZombieGridManager.Instance, null)) {
                    ZombieGridManager.Instance.levelEnd = true;
                }
                if (UnityEngine.GameObject.op_Inequality(this.gameHud, null)) {
                    this.gameHud.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.StopMusic();
                    PlayableAudio.instance.PlayLose();
                }
            },
            /*GameManager.MarkIdleSettlementFailed end.*/

            /*GameManager.Update start.*/
            Update: function () {
                if (this.settlementStarted) {
                    return;
                }
                var grid = ZombieGridManager.Instance;
                if (UnityEngine.MonoBehaviour.op_Inequality(grid, null) && grid.levelEnd) {
                    return;
                }

                if (UnityEngine.Input.anyKey || UnityEngine.Input.touchCount > 0) {
                    this.idleTimer = 0.0;
                } else {
                    // Cap the step so a load/compile hitch (one multi-second frame) can't
                    // jump the timer past the threshold in a single frame.
                    this.idleTimer += UnityEngine.Mathf.Min(UnityEngine.Time.unscaledDeltaTime, 0.25);
                    if (this.idleTimer >= this.idleSettleSeconds) {
                        this.HandleIdleSettle();
                    }
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.HandleIdleSettle start.*/
            HandleIdleSettle: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(ZombieGridManager.Instance, null)) {
                    ZombieGridManager.Instance.levelEnd = true;
                }
                // The no-input timeout is classified as a loss so the settlement artwork
                // and CTA match the failure path in both Editor and exported ads.
                this.failedThisRun = true;
                if (UnityEngine.GameObject.op_Inequality(this.gameHud, null)) {
                    this.gameHud.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.StopMusic();
                }
                SC.sc.sdk.OnCommonOpportunity("GameOver");
                SC.sc.mobClick.Event$1("LevelIdleSettle", "Level 1", false);
                // Straight to settlement — no GREAT JOB beat for a non-engager.
                this.EndToSettlement();
            },
            /*GameManager.HandleIdleSettle end.*/

            /*GameManager.Win start.*/
            Win: function () {
                if (ZombieGridManager.Instance.levelEnd) {
                    return;
                }
                ZombieGridManager.Instance.levelEnd = true;
                this.wonThisRun = true;
                if (UnityEngine.GameObject.op_Inequality(this.gameHud, null)) {
                    this.gameHud.SetActive(false);
                } // hides the HUD + guidance
                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.StopMusic();
                    PlayableAudio.instance.PlayWin();
                }
                SC.sc.sdk.OnCommonOpportunity("GameOver");
                SC.sc.mobClick.Event$1("LevelPass", "Level 1", false);
                SC.sc.mobClick.Event$1("DedupLevelPass", "Level 1", true);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.winCelebration, null)) {
                    this.winCelebration.Play(Bridge.fn.cacheBind(this, this.EndToSettlement));
                } else {
                    this.EndToSettlement();
                }
            },
            /*GameManager.Win end.*/

            /*GameManager.Fail start.*/
            Fail: function () {
                if (ZombieGridManager.Instance.levelEnd) {
                    return;
                }
                ZombieGridManager.Instance.levelEnd = true;
                this.failedThisRun = true;
                if (UnityEngine.GameObject.op_Inequality(this.gameHud, null)) {
                    this.gameHud.SetActive(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.StopMusic();
                    PlayableAudio.instance.PlayLose();
                }
                SC.sc.sdk.OnCommonOpportunity("GameOver");
                SC.sc.mobClick.Event$1("LevelLose", "Level 1", false);
                SC.sc.mobClick.Event$1("DedupLevelLose", "Level 1", true);
                this.EndToSettlement();
            },
            /*GameManager.Fail end.*/

            /*GameManager.EndToSettlement start.*/
            EndToSettlement: function () {
                if (this.settlementStarted) {
                    return;
                }
                this.settlementStarted = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.winCelebration, null)) {
                    this.winCelebration.gameObject.SetActive(false);
                }
                // coins jingle as the styled LayerSettleWeb (YOU WON! + coin art) appears
                if (this.wonThisRun && UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.PlayCoins();
                }
                // sc.web.GameEnd() fires OnGameEndAction (shows LayerSettleWeb) before the
                // JS-bridge notify; that notify NREs in a bare editor session (no bridge),
                // harmless in the Luna build. Guard so the console stays clean either way.
                try {
                    SC.sc.web.GameEnd();
                } catch (e) {
                    e = System.Exception.create(e);
                    UnityEngine.Debug.LogWarning$1("[GameManager] sc.web.GameEnd() bridge notify skipped: " + (e.Message || ""));
                }
            },
            /*GameManager.EndToSettlement end.*/


        }
    });
    /*GameManager end.*/

    /*GridZombieSpawner start.*/
    Bridge.define("GridZombieSpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            levelManager: null,
            zombieGridManager: null,
            rowHeightGap: 0
        },
        ctors: {
            init: function () {
                this.rowHeightGap = 1.2;
            }
        },
        methods: {
            /*GridZombieSpawner.Start start.*/
            Start: function () {
                this.SpawnGridZombies();
            },
            /*GridZombieSpawner.Start end.*/

            /*GridZombieSpawner.SpawnGridZombies start.*/
            SpawnGridZombies: function () {
                var $t;
                if (UnityEngine.GameObject.op_Inequality(this.levelManager.currentLevelData.mapPrefab, null)) {
                    this.zombieGridManager.SpawnPrefabMap();
                    return;
                }
                if (this.levelManager.currentLevelData.useExactMap) {
                    $t = Bridge.getEnumerator(this.levelManager.currentLevelData.GetExactMapCellsInSpawnOrder());
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current.$clone();
                            this.zombieGridManager.SpawnZombieWithCoords(cell.column, 0, cell.row);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return;
                }

                var cols = this.levelManager.currentLevelData.numberOfColumns;
                var rows = this.levelManager.currentLevelData.numberOfRows;
                var stackHeight = this.levelManager.currentLevelData.stackHeight;
                var stackMode = this.levelManager.currentLevelData.stackMode;

                if (stackMode) {
                    for (var i = 0; i < Bridge.Int.mul(rows, stackHeight); i = (i + 1) | 0) {
                        for (var col = 0; col < cols; col = (col + 1) | 0) {
                            var y = i % stackHeight; // vertical stack
                            var z = (Bridge.Int.div(i, stackHeight)) | 0; // row: only increases when a full stack is done

                            this.zombieGridManager.SpawnZombieWithCoords(col, y, z);
                        }
                    }
                    return;
                }

                // Vertical colour columns: fill column-major so the streak-ordered spawn queue
                // (built in LevelManager) lands each colour in its own contiguous columns.
                if (this.levelManager.currentLevelData.columnColorGroups) {
                    for (var col1 = 0; col1 < cols; col1 = (col1 + 1) | 0) {
                        for (var row = 0; row < rows; row = (row + 1) | 0) {
                            this.zombieGridManager.SpawnZombie(col1, row * this.rowHeightGap);
                        }
                    }
                    return;
                }

                // Default: row-major (horizontal bands).
                for (var row1 = 0; row1 < rows; row1 = (row1 + 1) | 0) {
                    var verticalOffset = row1 * this.rowHeightGap;

                    for (var col2 = 0; col2 < cols; col2 = (col2 + 1) | 0) {
                        this.zombieGridManager.SpawnZombie(col2, verticalOffset);
                    }
                }
            },
            /*GridZombieSpawner.SpawnGridZombies end.*/


        }
    });
    /*GridZombieSpawner end.*/

    /*HudHandler start.*/
    Bridge.define("HudHandler", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*HudHandler end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelData start.*/
    Bridge.define("LevelData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            numberOfColumns: 0,
            numberOfRows: 0,
            samePrefabStreak: 0,
            zombiePrefabs: null,
            randomizeZombies: false,
            leveltimer: 0,
            useExactMap: false,
            exactMapCells: null,
            mapPrefab: null,
            mapPrefabCellPitch: 0,
            mapMaterialGroups: null,
            mapHitEffectPrefab: null,
            columnColorGroups: false,
            stackMode: false,
            stackHeight: 0
        },
        ctors: {
            init: function () {
                this.numberOfColumns = 9;
                this.numberOfRows = 10;
                this.samePrefabStreak = 3;
                this.randomizeZombies = false;
                this.leveltimer = 120;
                this.useExactMap = false;
                this.exactMapCells = System.Array.init(0, function (){
                    return new MapCell();
                }, MapCell);
                this.mapPrefabCellPitch = 1.3;
                this.mapMaterialGroups = System.Array.init(0, null, MapMaterialGroup);
                this.columnColorGroups = false;
                this.stackMode = false;
                this.stackHeight = 5;
            }
        },
        methods: {
            /*LevelData.TryGetMapColor start.*/
            TryGetMapColor: function (material, color) {
                var $t;
                $t = Bridge.getEnumerator(this.mapMaterialGroups);
                try {
                    while ($t.moveNext()) {
                        var group = $t.Current;
                        if (Bridge.referenceEquals(group.material, material)) {
                            color.v = group.color;
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                color.v = 0;
                return false;
            },
            /*LevelData.TryGetMapColor end.*/

            /*LevelData.GetExactMapCellsInSpawnOrder start.*/
            GetExactMapCellsInSpawnOrder: function () {
                if (this.exactMapCells == null || this.exactMapCells.length === 0) {
                    return System.Array.init(0, function (){
                        return new MapCell();
                    }, MapCell);
                }

                return System.Linq.Enumerable.from(this.exactMapCells, MapCell).orderBy(function (cell) {
                        return cell.row;
                    }).thenBy(function (cell) {
                    return cell.column;
                }).ToArray(MapCell);
            },
            /*LevelData.GetExactMapCellsInSpawnOrder end.*/


        }
    });
    /*LevelData end.*/

    /*LevelManager start.*/
    Bridge.define("LevelManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            currentLevelData: null,
            randomizeChunks: false,
            possibleChunkSizes: null,
            spawnQueue: null
        },
        ctors: {
            init: function () {
                this.randomizeChunks = false;
                this.possibleChunkSizes = System.Array.init([5, 10, 15, 20, 25, 30], System.Int32);
                this.spawnQueue = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*LevelManager.Awake start.*/
            Awake: function () {
                this.randomizeChunks = this.currentLevelData.randomizeZombies;
                this.PrepareZombieSpawnList();
            },
            /*LevelManager.Awake end.*/

            /*LevelManager.GetNextZombiePrefab start.*/
            GetNextZombiePrefab: function () {
                return this.spawnQueue.Count > 0 ? this.spawnQueue.Dequeue() : null;
            },
            /*LevelManager.GetNextZombiePrefab end.*/

            /*LevelManager.GetZombiePrefab start.*/
            GetZombiePrefab: function (color) {
                var $t;
                if (this.currentLevelData == null || this.currentLevelData.zombiePrefabs == null) {
                    return null;
                }

                $t = Bridge.getEnumerator(this.currentLevelData.zombiePrefabs);
                try {
                    while ($t.moveNext()) {
                        var prefab = $t.Current;
                        var zombie = { };
                        if (UnityEngine.GameObject.op_Inequality(prefab, null) && prefab.TryGetComponent$1(ZombieBlock, zombie) && zombie.v.colorType === color) {
                            return prefab;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*LevelManager.GetZombiePrefab end.*/

            /*LevelManager.GetZombieColorOrder start.*/
            GetZombieColorOrder: function () {
                var $t, $t1;
                var order = new (System.Collections.Generic.List$1(ColorType)).ctor();
                if (UnityEngine.GameObject.op_Inequality(this.currentLevelData.mapPrefab, null)) {
                    $t = Bridge.getEnumerator(this.currentLevelData.GetExactMapCellsInSpawnOrder());
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current.$clone();
                            order.add(cell.color);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return order;
                }
                $t1 = Bridge.getEnumerator(this.spawnQueue);
                try {
                    while ($t1.moveNext()) {
                        var prefab = $t1.Current;
                        var zb = { };
                        if (prefab.TryGetComponent$1(ZombieBlock, zb)) {
                            order.add(zb.v.colorType);
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                return order;
            },
            /*LevelManager.GetZombieColorOrder end.*/

            /*LevelManager.GetAllZombiesToSpawn start.*/
            GetAllZombiesToSpawn: function () {
                return new (System.Collections.Generic.List$1(UnityEngine.GameObject)).$ctor1(this.spawnQueue);
            },
            /*LevelManager.GetAllZombiesToSpawn end.*/

            /*LevelManager.PrepareZombieSpawnList start.*/
            PrepareZombieSpawnList: function () {
                var $t, $t1, $t2, $t3;
                this.spawnQueue.Clear();

                // Prefab blocks already exist; their serialized cells supply ammunition counts.
                if (UnityEngine.GameObject.op_Inequality(this.currentLevelData.mapPrefab, null)) {
                    return;
                }

                if (this.currentLevelData.useExactMap) {
                    $t = Bridge.getEnumerator(this.currentLevelData.GetExactMapCellsInSpawnOrder());
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current.$clone();
                            this.spawnQueue.Enqueue(this.GetZombiePrefab(cell.color));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return;
                }

                var prefabs = this.currentLevelData.zombiePrefabs;
                var cols = this.currentLevelData.numberOfColumns;
                var rows = this.currentLevelData.numberOfRows;

                // Vertical colour columns: contiguous groups of columns each get one colour,
                // in zombiePrefabs order. Fills the grid column-major (see GridZombieSpawner).
                if (this.currentLevelData.columnColorGroups && !this.currentLevelData.stackMode) {
                    var prefabCount = prefabs.length;
                    for (var col = 0; col < cols; col = (col + 1) | 0) {
                        var pIdx = UnityEngine.Mathf.Min(((prefabCount - 1) | 0), ((Bridge.Int.div(Bridge.Int.mul(col, prefabCount), cols)) | 0));
                        for (var r = 0; r < rows; r = (r + 1) | 0) {
                            this.spawnQueue.Enqueue(prefabs[pIdx]);
                        }
                    }
                    return;
                }

                var totalZombies = Bridge.Int.mul(cols, rows);
                if (this.currentLevelData.stackMode) {
                    totalZombies = Bridge.Int.mul(totalZombies, this.currentLevelData.stackHeight);
                }

                if (!this.randomizeChunks) {
                    var streak = UnityEngine.Mathf.Max(5, this.currentLevelData.samePrefabStreak);
                    var streakCounter = 0;
                    var index = 0;

                    for (var i = 0; i < totalZombies; i = (i + 1) | 0) {
                        this.spawnQueue.Enqueue(prefabs[index]);
                        streakCounter = (streakCounter + 1) | 0;

                        if (streakCounter >= streak) {
                            index = (((index + 1) | 0)) % prefabs.length;
                            streakCounter = 0;
                        }
                    }
                } else {
                    var prefabLimits = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,System.Int32)).ctor();
                    var prefabSpawned = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,System.Int32)).ctor();

                    var perPrefab = (Bridge.Int.div(totalZombies, prefabs.length)) | 0;
                    var extras = totalZombies % prefabs.length;

                    $t1 = Bridge.getEnumerator(prefabs);
                    try {
                        while ($t1.moveNext()) {
                            var prefab = $t1.Current;
                            var count = (perPrefab + (extras > 0 ? 1 : 0)) | 0;
                            prefabLimits.setItem(prefab, count);
                            prefabSpawned.setItem(prefab, 0);
                            if (extras > 0) {
                                extras = (extras - 1) | 0;
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                    var availablePrefabs = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).$ctor1(prefabs);
                    var zombiesSpawned = 0;

                    while (zombiesSpawned < totalZombies) {
                        var candidates = new (System.Collections.Generic.List$1(LevelManager.ChunkCandidate)).ctor();

                        $t2 = Bridge.getEnumerator(availablePrefabs);
                        try {
                            while ($t2.moveNext()) {
                                var prefab1 = $t2.Current;
                                var remaining = (prefabLimits.getItem(prefab1) - prefabSpawned.getItem(prefab1)) | 0;
                                if (remaining < 5) {
                                    continue;
                                }

                                $t3 = Bridge.getEnumerator(this.possibleChunkSizes);
                                try {
                                    while ($t3.moveNext()) {
                                        var size = $t3.Current;
                                        if (size <= remaining && (((totalZombies - zombiesSpawned) | 0)) >= size) {
                                            candidates.add(new LevelManager.ChunkCandidate.$ctor1(prefab1, size));
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t3, System.IDisposable)) {
                                        $t3.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }

                        if (candidates.Count === 0) {
                            break;
                        }

                        var selected = candidates.getItem(UnityEngine.Random.Range(0, candidates.Count)).$clone();
                        var chosen = selected.prefab;
                        var chunkSize = selected.chunkSize;

                        for (var i1 = 0; i1 < chunkSize; i1 = (i1 + 1) | 0) {
                            this.spawnQueue.Enqueue(chosen);
                            prefabSpawned.setItem(chosen, (prefabSpawned.getItem(chosen) + 1) | 0);
                            zombiesSpawned = (zombiesSpawned + 1) | 0;
                        }

                        if (((prefabLimits.getItem(chosen) - prefabSpawned.getItem(chosen)) | 0) < 5) {
                            availablePrefabs.remove(chosen);
                        }
                    }
                }
            },
            /*LevelManager.PrepareZombieSpawnList end.*/

            /*LevelManager.GetFirstZombieChunkColor start.*/
            GetFirstZombieChunkColor: function () {
                var $t;
                if (this.spawnQueue == null || this.spawnQueue.Count === 0) {
                    return ColorType.Green;
                }

                $t = Bridge.getEnumerator(this.spawnQueue);
                try {
                    while ($t.moveNext()) {
                        var z = $t.Current;
                        var zb = { };
                        if (z.TryGetComponent$1(ZombieBlock, zb)) {
                            return zb.v.colorType;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return ColorType.Green;
            },
            /*LevelManager.GetFirstZombieChunkColor end.*/


        }
    });
    /*LevelManager end.*/

    /*LevelManager+ChunkCandidate start.*/
    Bridge.define("LevelManager.ChunkCandidate", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () { return new LevelManager.ChunkCandidate(); }
            }
        },
        fields: {
            prefab: null,
            chunkSize: 0
        },
        ctors: {
            $ctor1: function (prefab, chunkSize) {
                this.$initialize();
                this.prefab = prefab;
                this.chunkSize = chunkSize;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([5339052678, this.prefab, this.chunkSize]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, LevelManager.ChunkCandidate)) {
                    return false;
                }
                return Bridge.equals(this.prefab, o.prefab) && Bridge.equals(this.chunkSize, o.chunkSize);
            },
            $clone: function (to) {
                var s = to || new LevelManager.ChunkCandidate();
                s.prefab = this.prefab;
                s.chunkSize = this.chunkSize;
                return s;
            }
        }
    });
    /*LevelManager+ChunkCandidate end.*/

    /*SCParam.SCDataBase start.*/
    Bridge.define("SCParam.SCDataBase");
    /*SCParam.SCDataBase end.*/

    /*MangerParent start.*/
    Bridge.define("MangerParent", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*MangerParent.Awake start.*/
            Awake: function () { },
            /*MangerParent.Awake end.*/


        }
    });
    /*MangerParent end.*/

    /*MapCell start.*/
    Bridge.define("MapCell", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () { return new MapCell(); }
            }
        },
        fields: {
            column: 0,
            row: 0,
            color: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1138544050, this.column, this.row, this.color]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, MapCell)) {
                    return false;
                }
                return Bridge.equals(this.column, o.column) && Bridge.equals(this.row, o.row) && Bridge.equals(this.color, o.color);
            },
            $clone: function (to) {
                var s = to || new MapCell();
                s.column = this.column;
                s.row = this.row;
                s.color = this.color;
                return s;
            }
        }
    });
    /*MapCell end.*/

    /*MapMaterialGroup start.*/
    Bridge.define("MapMaterialGroup", {
        fields: {
            material: null,
            color: 0
        }
    });
    /*MapMaterialGroup end.*/

    /*MenuManager start.*/
    Bridge.define("MenuManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            settled: false
        },
        methods: {
            /*MenuManager.Start start.*/
            Start: function () {
                // 如果实例不存在，则设置当前实例为单例
                if (UnityEngine.MonoBehaviour.op_Equality(MenuManager.Instance, null)) {
                    MenuManager.Instance = this;
                    // 默认关闭多点触摸，插件若有需要自行开启
                    UnityEngine.Input.multiTouchEnabled = false;
                    // 初始化场景管理器，并设置初始化完成回调
                    SC.sc.Init(Bridge.fn.cacheBind(this, this.initComplete));
                    // 确保游戏对象在场景切换时不被销毁
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                }
            },
            /*MenuManager.Start end.*/

            /*MenuManager.initComplete start.*/
            initComplete: function () {
                // Cut to the game page (persistent in-game download button).
                SC.sc.window.ShowWindow("LayerMainWeb");

                // Register the SC lifecycle callbacks BEFORE signalling ready, so the
                // deferred gameStart/gameEnd dispatch always finds its handlers.
                SC.sc.web.addOnStartGameLogic(Bridge.fn.cacheBind(this, this.OnStartGameLogic));
                SC.sc.web.addOnGameEndAction(Bridge.fn.cacheBind(this, this.OnGameEndAction));

                // Enter the game successfully -> drives GameReady -> gameStart.
                // Called exactly once (a second call logs "GameReady has ended").
                SC.sc.sdk.OnEnterGameSuccess();

                // Main menu only completes SDK init, then loads the gameplay scene.
                UIManager.instance.PlayGame();
            },
            /*MenuManager.initComplete end.*/

            /*MenuManager.ShowMenu start.*/
            ShowMenu: function () {
                // 已移除主菜单，屏蔽返回主菜单功能。
            },
            /*MenuManager.ShowMenu end.*/

            /*MenuManager.OnStartGameLogic start.*/
            /**
             * 场景加载完成后的回调函数
             *
             * @instance
             * @protected
             * @this MenuManager
             * @memberof MenuManager
             * @return  {void}
             */
            OnStartGameLogic: function () {
                SC.sc.log.Info("The real logic of starting a game");
            },
            /*MenuManager.OnStartGameLogic end.*/

            /*MenuManager.OnGameEndAction start.*/
            OnGameEndAction: function () {
                // Win / fail / SDK-idle / GameManager-idle can all reach here; only the
                // first should swap the windows.
                if (this.settled) {
                    return;
                }
                this.settled = true;

                // The SC SDK may time out on its own and enter here before GameManager's
                // idle watchdog. Set the fail state before ShowWindow triggers OnEnable
                // on SettlementOutcomeBanner.
                var game = GameManager.instance;
                if (UnityEngine.MonoBehaviour.op_Inequality(game, null) && !game.WonThisRun && !game.FailedThisRun) {
                    game.MarkIdleSettlementFailed();
                }

                SC.sc.log.Info("Game End!");
                SC.sc.window.HideWindow("LayerMainWeb");
                SC.sc.window.ShowWindow("LayerSettleWeb");

                // SettlementOutcomeBanner selects win/fail artwork when the window opens.

                //这里结束游戏的逻辑！！！！！
            },
            /*MenuManager.OnGameEndAction end.*/


        }
    });
    /*MenuManager end.*/

    /*OrientationController start.*/
    Bridge.define("OrientationController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetCamera: null,
            portrait: null,
            landscape: null,
            plantQueueRoot: null,
            plantQueuePortraitPos: null,
            plantQueueLandscapePos: null,
            movePlantQueue: false,
            mapFrameRenderer: null,
            sideMargin: 0,
            mapTopViewport: 0,
            lastAspect: 0,
            lastMapBounds: null
        },
        ctors: {
            init: function () {
                var $t;
                this.portrait = new OrientationController.CamConfig();
                this.landscape = new OrientationController.CamConfig();
                this.plantQueuePortraitPos = new UnityEngine.Vector3();
                this.plantQueueLandscapePos = new UnityEngine.Vector3();
                this.lastMapBounds = new UnityEngine.Bounds();
                this.portrait = ($t = new OrientationController.CamConfig(), $t.position = new pc.Vec3( 0.0, 5.8, -19.9 ), $t.euler = new pc.Vec3( 52.0, 0.0, 0.0 ), $t.orthoSize = 9.14, $t);
                this.landscape = ($t = new OrientationController.CamConfig(), $t.position = new pc.Vec3( 0.0, 7.5, -19.9 ), $t.euler = new pc.Vec3( 52.0, 0.0, 0.0 ), $t.orthoSize = 13.0, $t);
                this.sideMargin = 0.025;
                this.mapTopViewport = 0.95;
                this.lastAspect = -1.0;
            }
        },
        methods: {
            /*OrientationController.Awake start.*/
            Awake: function () {
                if (UnityEngine.Component.op_Equality(this.targetCamera, null)) {
                    this.targetCamera = UnityEngine.Camera.main;
                }
            },
            /*OrientationController.Awake end.*/

            /*OrientationController.OnEnable start.*/
            OnEnable: function () {
                this.Apply(this.SafePortrait());
                SC.sc.web.addOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.Apply));
            },
            /*OrientationController.OnEnable end.*/

            /*OrientationController.OnDisable start.*/
            OnDisable: function () {
                SC.sc.web.removeOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.Apply));
            },
            /*OrientationController.OnDisable end.*/

            /*OrientationController.SafePortrait start.*/
            SafePortrait: function () {
                // sc.web.bPortrait may not be ready very early; fall back to screen aspect.
                try {
                    return SC.sc.web.bPortrait;
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    return UnityEngine.Screen.height >= UnityEngine.Screen.width;
                }
            },
            /*OrientationController.SafePortrait end.*/

            /*OrientationController.LateUpdate start.*/
            LateUpdate: function () {
                if (UnityEngine.Component.op_Equality(this.targetCamera, null) || UnityEngine.Component.op_Equality(this.mapFrameRenderer, null)) {
                    return;
                }
                if (Math.abs(this.targetCamera.aspect - this.lastAspect) > 0.001 || !pc.BoundingBox.equals( this.mapFrameRenderer.bounds, this.lastMapBounds )) {
                    this.Apply(this.SafePortrait());
                }
            },
            /*OrientationController.LateUpdate end.*/

            /*OrientationController.Apply start.*/
            Apply: function (isPortrait) {
                var cfg = isPortrait ? this.portrait.$clone() : this.landscape.$clone();
                if (UnityEngine.Component.op_Inequality(this.targetCamera, null)) {
                    this.targetCamera.transform.position = cfg.position.$clone();
                    this.targetCamera.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( cfg.euler.x, cfg.euler.y, cfg.euler.z );
                    if (this.targetCamera.orthographic) {
                        this.targetCamera.orthographicSize = cfg.orthoSize;
                    }
                    if (this.targetCamera.orthographic && UnityEngine.Component.op_Inequality(this.mapFrameRenderer, null)) {
                        var bounds = this.mapFrameRenderer.bounds;
                        var right = this.targetCamera.transform.right.$clone();
                        var up = this.targetCamera.transform.up.$clone();
                        var extent = bounds.halfExtents.$clone();
                        var halfWidth = Math.abs(right.x) * extent.x + Math.abs(right.y) * extent.y + Math.abs(right.z) * extent.z;
                        var halfHeight = Math.abs(up.x) * extent.x + Math.abs(up.y) * extent.y + Math.abs(up.z) * extent.z;
                        // Preferred close view, limited only when the map would leave the screen.
                        var fitSize = halfWidth / (UnityEngine.Mathf.Max(0.01, this.targetCamera.aspect) * (1.0 - 2.0 * this.sideMargin));
                        this.targetCamera.orthographicSize = UnityEngine.Mathf.Max(cfg.orthoSize, fitSize);
                        var currentTop = bounds.center.$clone().sub( this.targetCamera.transform.position ).dot( up ) + halfHeight;
                        var desiredTop = (this.mapTopViewport - 0.5) * 2.0 * this.targetCamera.orthographicSize;
                        this.targetCamera.transform.position = this.targetCamera.transform.position.$clone().add( up.$clone().clone().scale( (currentTop - desiredTop) ) );
                        this.lastMapBounds = bounds;
                    }
                    this.lastAspect = this.targetCamera.aspect;
                }
                if (this.movePlantQueue && UnityEngine.Component.op_Inequality(this.plantQueueRoot, null)) {
                    this.plantQueueRoot.position = isPortrait ? this.plantQueuePortraitPos.$clone() : this.plantQueueLandscapePos.$clone();
                }
            },
            /*OrientationController.Apply end.*/


        }
    });
    /*OrientationController end.*/

    /*OrientationController+CamConfig start.*/
    Bridge.define("OrientationController.CamConfig", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () { return new OrientationController.CamConfig(); }
            }
        },
        fields: {
            position: null,
            euler: null,
            orthoSize: 0
        },
        ctors: {
            init: function () {
                this.position = new UnityEngine.Vector3();
                this.euler = new UnityEngine.Vector3();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([2899562521, this.position, this.euler, this.orthoSize]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, OrientationController.CamConfig)) {
                    return false;
                }
                return Bridge.equals(this.position, o.position) && Bridge.equals(this.euler, o.euler) && Bridge.equals(this.orthoSize, o.orthoSize);
            },
            $clone: function (to) {
                var s = to || new OrientationController.CamConfig();
                s.position = this.position.$clone();
                s.euler = this.euler.$clone();
                s.orthoSize = this.orthoSize;
                return s;
            }
        }
    });
    /*OrientationController+CamConfig end.*/

    /*PlantColorPrefab start.*/
    Bridge.define("PlantColorPrefab", {
        fields: {
            colorType: 0,
            plantPrefab: null
        }
    });
    /*PlantColorPrefab end.*/

    /*PlantData start.*/
    Bridge.define("PlantData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            plantName: null,
            plantColor: 0,
            fireRate: 0
        }
    });
    /*PlantData end.*/

    /*PlantProjectile start.*/
    Bridge.define("PlantProjectile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            lifeTime: 0,
            target: null,
            targetZombie: null,
            hasHit: false,
            owner: null,
            _trail: null
        },
        ctors: {
            init: function () {
                this.speed = 10.0;
                this.lifeTime = 1.0;
                this.hasHit = false;
            }
        },
        methods: {
            /*PlantProjectile.SetTarget start.*/
            SetTarget: function (zombie) {
                this.target = UnityEngine.MonoBehaviour.op_Inequality(zombie, null) ? zombie.transform : null;
                this.targetZombie = zombie;
                this.hasHit = false;
                this.CancelInvoke$1("ReleaseSelf");
                this.Invoke("ReleaseSelf", this.lifeTime);
            },
            /*PlantProjectile.SetTarget end.*/

            /*PlantProjectile.Initialize start.*/
            Initialize: function (newOwner, zombie) {
                this.owner = newOwner;
                this.target = UnityEngine.MonoBehaviour.op_Inequality(zombie, null) ? zombie.transform : null;
                this.targetZombie = zombie;
                this.hasHit = false;
                this.CancelInvoke$1("ReleaseSelf");
                this.Invoke("ReleaseSelf", this.lifeTime);
            },
            /*PlantProjectile.Initialize end.*/

            /*PlantProjectile.FixedUpdate start.*/
            FixedUpdate: function () {
                if (this.hasHit || UnityEngine.Component.op_Equality(this.target, null)) {
                    return;
                }

                var direction = (this.target.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                this.transform.position = this.transform.position.$clone().add( direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ) );
                this.transform.LookAt$2(this.target.position);

                // Detonate when we actually reach our reserved block. Each shot owns one
                // block, so a shot aimed deep in a column flies THROUGH the blocks in
                // front of it (see OnTriggerEnter) and bursts on its own target — that's
                // what lets a shooter rain fire several rows into the last column.
                if ((this.transform.position.$clone().sub( this.target.position )).lengthSq() < 0.09) {
                    this.Detonate();
                }
            },
            /*PlantProjectile.FixedUpdate end.*/

            /*PlantProjectile.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (this.hasHit || other.CompareTag("zombie") === false) {
                    return;
                }

                var zb = null;
                if (UnityEngine.MonoBehaviour.op_Inequality(ZombieGridManager.Instance, null)) {
                    zb = ZombieGridManager.Instance.GetCachedZombieBlock(other.gameObject);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(zb, null)) {
                    zb = other.GetComponent(ZombieBlock);
                }

                // Only our reserved block stops us; pass through everything else.
                if (UnityEngine.MonoBehaviour.op_Equality(zb, null) || UnityEngine.MonoBehaviour.op_Inequality(zb, this.targetZombie)) {
                    return;
                }
                this.Detonate();
            },
            /*PlantProjectile.OnTriggerEnter end.*/

            /*PlantProjectile.Detonate start.*/
            Detonate: function () {
                if (this.hasHit) {
                    return;
                }
                this.hasHit = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.targetZombie, null) && !this.targetZombie.IsDead) {
                    this.targetZombie.TakeDamage(1);
                }
                this.ReleaseSelf();
            },
            /*PlantProjectile.Detonate end.*/

            /*PlantProjectile.OnEnable start.*/
            OnEnable: function () {
                this.hasHit = false;
                // Pooled projectiles keep their TrailRenderer's point history across
                // reuse - without clearing it here, waking back up at a new fire point
                // (potentially across the board from wherever this instance last
                // detonated) draws one giant streak connecting the two. This is what
                // got worse with more simultaneous shooters: more pool reuse, more
                // stale trails. Position is already set by FireProjectile() before
                // SetActive(true), so clearing here starts the trail fresh from here.
                if (UnityEngine.Component.op_Equality(this._trail, null)) {
                    this._trail = this.GetComponent(UnityEngine.TrailRenderer);
                }
                if (UnityEngine.Component.op_Inequality(this._trail, null)) {
                    this._trail.Clear();
                }
            },
            /*PlantProjectile.OnEnable end.*/

            /*PlantProjectile.OnDisable start.*/
            OnDisable: function () {
                this.CancelInvoke$1("ReleaseSelf");
                this.target = null;
                this.targetZombie = null;
            },
            /*PlantProjectile.OnDisable end.*/

            /*PlantProjectile.ReleaseSelf start.*/
            ReleaseSelf: function () {
                this.CancelInvoke$1("ReleaseSelf");
                if (UnityEngine.MonoBehaviour.op_Inequality(this.owner, null)) {
                    this.owner.ReleaseProjectile(this);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*PlantProjectile.ReleaseSelf end.*/


        }
    });
    /*PlantProjectile end.*/

    /*PlantShooter start.*/
    Bridge.define("PlantShooter", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                globallyTargetedZombies: null,
                _lastTargetColumnByColor: null
            },
            ctors: {
                init: function () {
                    this.globallyTargetedZombies = new (System.Collections.Generic.HashSet$1(ZombieBlock)).ctor();
                    this._lastTargetColumnByColor = new (System.Collections.Generic.Dictionary$2(ColorType,System.Int32)).ctor();
                }
            }
        },
        fields: {
            shooterMat: null,
            textMesh: null,
            _animator: null,
            columnIndex: 0,
            queueIndex: 0,
            onStartedWalkingColumn: null,
            onRemovedFromQueue: null,
            fireRate: 0,
            maxShots: 0,
            colorType: 0,
            projectilePrefab: null,
            firePoint: null,
            projectilePoolSize: 0,
            exitSpeed: 0,
            exitDuration: 0,
            currentState: 0,
            walkSpeed: 0,
            availableSlots: null,
            currentTargetSlot: null,
            fireCooldown: 0,
            shotsFired: 0,
            isDepleted: false,
            exitTimer: 0,
            activeTargets: null,
            slotsParent: null,
            occupiedSlot: null,
            offset: null,
            spawner: null,
            failCheckRoutine: null,
            isFailCheckRunning: false,
            slotOverflowFailTimer: null,
            isShooting: false,
            vfx: null,
            _cachedMeshRenderer: null,
            _cachedCollider: null,
            _cachedGridManager: null,
            _cachedTransform: null,
            _slotOccupierCache: null,
            _projectilePool: null,
            _projectilePoolRoot: null,
            appliedSizeMultiplier: 0,
            _projectileComponentCache: null,
            hasReachedSlot: false,
            _lastLookTarget: null,
            _lastLookYAngle: 0,
            currentSlot: null
        },
        ctors: {
            init: function () {
                this.offset = new UnityEngine.Vector3();
                this.slotOverflowFailTimer = new SlotOverflowFailTimer();
                this.fireRate = 0.15;
                this.maxShots = 5;
                this.projectilePoolSize = 8;
                this.exitSpeed = 2.0;
                this.exitDuration = 2.0;
                this.currentState = ShooterState.Idle;
                this.walkSpeed = 3.0;
                this.fireCooldown = 0.0;
                this.shotsFired = 0;
                this.isDepleted = false;
                this.exitTimer = 0.0;
                this.activeTargets = new (System.Collections.Generic.HashSet$1(ZombieBlock)).ctor();
                this.offset = new pc.Vec3( 0, -0.57, 0 );
                this.isFailCheckRunning = false;
                this.isShooting = false;
                this._slotOccupierCache = new (System.Collections.Generic.Dictionary$2(UnityEngine.Transform,SlotOccupier)).ctor();
                this._projectilePool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                this.appliedSizeMultiplier = 1.0;
                this._projectileComponentCache = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,PlantProjectile)).ctor();
                this.hasReachedSlot = false;
                this._lastLookYAngle = 3.40282347E+38;
            }
        },
        methods: {
            /*PlantShooter.ApplySizeMultiplier start.*/
            ApplySizeMultiplier: function (multiplier) {
                multiplier = Math.max(0.5, Math.min(multiplier, 1.3));
                var factor = multiplier / this.appliedSizeMultiplier;
                // The idle animation controls the root scale. Scale its children instead,
                // including the label and muzzle, but leave pooled projectiles untouched.
                for (var childIndex = 0; childIndex < this.transform.childCount; childIndex = (childIndex + 1) | 0) {
                    var child = this.transform.GetChild(childIndex);
                    if (UnityEngine.Component.op_Equality(child, this._projectilePoolRoot)) {
                        continue;
                    }
                    child.localPosition = child.localPosition.$clone().clone().scale( factor );
                    child.localScale = child.localScale.$clone().clone().scale( factor );
                }
                var touchCollider = this.GetComponent(UnityEngine.BoxCollider);
                if (UnityEngine.Component.op_Inequality(touchCollider, null)) {
                    touchCollider.center = touchCollider.center.$clone().clone().scale( factor );
                    touchCollider.size = touchCollider.size.$clone().clone().scale( factor );
                }
                this.appliedSizeMultiplier = multiplier;
            },
            /*PlantShooter.ApplySizeMultiplier end.*/

            /*PlantShooter.Awake start.*/
            Awake: function () {
                var $t;
                if (this.availableSlots == null) {
                    this.availableSlots = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                }

                // 缓存常用组件和引用
                this._animator = this.GetComponent(UnityEngine.Animator);
                this._cachedCollider = this.GetComponent(UnityEngine.Collider);
                this._cachedTransform = this.transform;
                this._cachedGridManager = ZombieGridManager.Instance;
                // 注意：Camera.main 在 Awake 时可能还未准备好，在 Start 中缓存

                this.slotsParent = this._cachedGridManager.SlotParentTransform;
                for (var i = 0; i < this.slotsParent.childCount; i = (i + 1) | 0) {
                    this.availableSlots.add(this.slotsParent.GetChild(i));
                }
                this.spawner = UnityEngine.Object.FindObjectOfType(PlantSpawner);

                // cache mesh renderer (child 0)
                var child0 = this._cachedTransform.childCount > 0 ? this._cachedTransform.GetChild(0) : null;
                if (UnityEngine.Component.op_Inequality(child0, null)) {
                    this._cachedMeshRenderer = child0.GetComponent(UnityEngine.MeshRenderer);
                }

                // 预缓存所有 SlotOccupier 组件
                $t = Bridge.getEnumerator(this.availableSlots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        var occupier = slot.GetComponent(SlotOccupier);
                        if (UnityEngine.MonoBehaviour.op_Inequality(occupier, null)) {
                            this._slotOccupierCache.setItem(slot, occupier);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // setup projectile pool
                if (UnityEngine.GameObject.op_Inequality(this.projectilePrefab, null) && this.projectilePoolSize > 0) {
                    this._projectilePoolRoot = new UnityEngine.GameObject.$ctor2(System.String.format("{0}_ProjectilePool", [this.name])).transform;
                    this._projectilePoolRoot.SetParent(this._cachedTransform, false);
                    for (var i1 = 0; i1 < this.projectilePoolSize; i1 = (i1 + 1) | 0) {
                        var go = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.projectilePrefab, this._projectilePoolRoot);
                        go.SetActive(false);
                        this._projectilePool.Enqueue(go);
                        // 预缓存投射物组件
                        var proj = go.GetComponent(PlantProjectile);
                        if (UnityEngine.MonoBehaviour.op_Inequality(proj, null)) {
                            this._projectileComponentCache.setItem(go, proj);
                        }
                    }
                }
            },
            /*PlantShooter.Awake end.*/

            /*PlantShooter.Start start.*/
            Start: function () {
                this.UpdateShotsText();
                // 注意：不缓存 Camera.main，因为道具1会动态切换相机（MainCamera ↔ SwapPowerupCamera）
                // 需要在每次点击检测时动态获取当前活动的相机
            },
            /*PlantShooter.Start end.*/

            /*PlantShooter.Update start.*/
            Update: function () {
                switch (this.currentState) {
                    case ShooterState.Idle: 
                        this.HandleTapDetection();
                        break;
                    case ShooterState.Walking: 
                        this.MoveToTargetSlot();
                        break;
                    case ShooterState.Shooting: 
                        this.HandleShooting();
                        break;
                    case ShooterState.Depleted: 
                        this.HandleDepletionExit();
                        break;
                }

                if (this.queueIndex === 0) {
                    this.SetMaterial();
                    // Front-of-queue plants play the idle "breathing" animation (plantAnimator.anim).
                    if (UnityEngine.Component.op_Inequality(this._animator, null) && !this._animator.enabled) {
                        this._animator.enabled = true;
                    }
                }
            },
            /*PlantShooter.Update end.*/

            /*PlantShooter.HandleTapDetection start.*/
            HandleTapDetection: function () {
                if (UnityEngine.Input.GetMouseButtonDown(0) && !this._cachedGridManager.levelEnd && this.queueIndex === 0) {
                    // 如果点击到了UI，阻止后续射线检测功能
                    if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }

                    var cam = (UnityEngine.MonoBehaviour.op_Inequality(this.spawner, null) && UnityEngine.Component.op_Inequality(this.spawner.MainCamera, null)) ? this.spawner.MainCamera : UnityEngine.Camera.main;

                    if (UnityEngine.Component.op_Inequality(cam, null)) {
                        var ray = cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                        var hit = { v : new UnityEngine.RaycastHit() };
                        // 进行射线检测，获取碰撞信息
                        if (UnityEngine.Physics.Raycast$1(ray, hit)) {
                            // 检测是否点击了当前游戏对象
                            if (UnityEngine.GameObject.op_Equality(hit.v.collider.gameObject, this.gameObject)) {
                                // 尝试分配槽位并行走
                                this.TryAssignSlotAndWalk();
                            }
                        }
                    }
                }
            },
            /*PlantShooter.HandleTapDetection end.*/

            /*PlantShooter.MoveToTargetSlot start.*/
            MoveToTargetSlot: function () {
                if (UnityEngine.Component.op_Equality(this.currentTargetSlot, null) || this.currentTargetSlot.childCount === 0) {
                    return;
                }

                this._animator.enabled = true;

                var target = this.currentTargetSlot.GetChild(0).position.$clone().add( this.offset );
                var currentPos = this._cachedTransform.position.$clone();
                // 性能优化：使用 sqrMagnitude 替代 Distance，避免开方运算
                var sqrDistance = (target.$clone().sub( currentPos )).lengthSq();
                var sqrThreshold = 0.0025; // 0.05f * 0.05f

                if (!this.hasReachedSlot) {
                    this._cachedTransform.position = pc.Vec3.moveTowards( currentPos, target, this.walkSpeed * UnityEngine.Time.deltaTime );

                    if (sqrDistance <= sqrThreshold) {
                        this.hasReachedSlot = true;
                        this._cachedTransform.position = target.$clone(); // Snap exactly
                        this.OnReachedSlot();
                    }
                }
            },
            /*PlantShooter.MoveToTargetSlot end.*/

            /*PlantShooter.OnReachedSlot start.*/
            OnReachedSlot: function () {
                this.currentState = ShooterState.Shooting;
                this.spawner.PlantShootersFront.add(this);
                // 初始抖动，避免同帧齐射导致的峰值
                if (this.fireRate > 0.0) {
                    this.fireCooldown = UnityEngine.Random.Range$1(0.0, this.fireRate);
                }
                this.StartFailCheckLoop();
            },
            /*PlantShooter.OnReachedSlot end.*/

            /*PlantShooter.SetMaterial start.*/
            SetMaterial: function () {
                if (UnityEngine.Component.op_Inequality(this._cachedMeshRenderer, null) && !Bridge.referenceEquals(this._cachedMeshRenderer.material, this.shooterMat)) {
                    this._cachedMeshRenderer.material = this.shooterMat;
                }
            },
            /*PlantShooter.SetMaterial end.*/

            /*PlantShooter.HandleShooting start.*/
            HandleShooting: function () {
                if (!this.hasReachedSlot) {
                    return;
                }
                if (this.shotsFired >= this.maxShots) {
                    return;
                }

                this.fireCooldown -= UnityEngine.Time.deltaTime;

                if (this.fireCooldown <= 0.0) {
                    this.TryShootMatchingFrontZombie();
                }
            },
            /*PlantShooter.HandleShooting end.*/

            /*PlantShooter.TryShootMatchingFrontZombie start.*/
            TryShootMatchingFrontZombie: function () {
                this.isShooting = false; // Reset at start of shooting attempt

                // 缓存单例引用和状态，避免重复访问
                var gridManager = ZombieGridManager.Instance;

                // 提前检查：游戏结束，直接返回
                if (gridManager.levelEnd) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                        this.occupiedSlot.isShooting = false;
                    }
                    this.fireCooldown = 0;
                    return;
                }

                // 性能优化：直接获取同色僵尸列表，避免遍历所有僵尸
                var matchingZombies = gridManager.GetFrontZombiesByColor(this.colorType);

                // 提前检查：没有匹配颜色的僵尸，直接返回
                if (matchingZombies == null || matchingZombies.Count === 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                        this.occupiedSlot.isShooting = false;
                    }
                    this.fireCooldown = 0;
                    return;
                }

                var foundMatchingZombie = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                    this.occupiedSlot.isShooting = true;
                }

                // 再次检查游戏是否结束
                if (gridManager.levelEnd) {
                    return;
                }

                // Round-robin by lane index: pick the first untargeted match whose lane
                // comes after the lane we fired at last time, wrapping back to the
                // lowest lane if we've swept past the end. Sweeps left-to-right across
                // every currently-exposed lane before repeating any one of them.
                var lastColumn = { };
                if (!PlantShooter._lastTargetColumnByColor.tryGetValue(this.colorType, lastColumn)) {
                    lastColumn.v = -1;
                }

                var next = null;
                var nextColumn = 2147483647;
                var wrap = null;
                var wrapColumn = 2147483647;

                var count = matchingZombies.Count;
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var zb = matchingZombies.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(zb, null) || UnityEngine.GameObject.op_Equality(zb.gameObject, null)) {
                        continue;
                    }
                    if (PlantShooter.globallyTargetedZombies.contains(zb)) {
                        continue;
                    }

                    if (zb.columnIndex > lastColumn.v) {
                        if (zb.columnIndex < nextColumn) {
                            next = zb;
                            nextColumn = zb.columnIndex;
                        }
                    } else if (zb.columnIndex < wrapColumn) {
                        wrap = zb;
                        wrapColumn = zb.columnIndex;
                    }
                }

                var target = UnityEngine.MonoBehaviour.op_Inequality(next, null) ? next : wrap;
                if (UnityEngine.MonoBehaviour.op_Inequality(target, null)) {
                    this.isShooting = true;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                        this.occupiedSlot.isShooting = true;
                    }
                    this.LookAt(target.transform);
                    this.FireProjectile(target);
                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.instance, null)) {
                        GameManager.instance.NotifyActivity();
                    }
                    this.shotsFired = (this.shotsFired + 1) | 0;
                    this.UpdateShotsText();
                    this.fireCooldown = this.fireRate;
                    PlantShooter.globallyTargetedZombies.add(target);
                    PlantShooter._lastTargetColumnByColor.setItem(this.colorType, target.columnIndex);

                    if (this.shotsFired >= this.maxShots) {
                        this.currentState = ShooterState.Depleted;
                        this.BeginDepletion();
                        this.isShooting = false;
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                            this.occupiedSlot.isShooting = false;
                        }
                        this.StopFailCheckLoop(); // Stop fail check on depletion
                    }

                    foundMatchingZombie = true;
                }

                if (!foundMatchingZombie && !gridManager.levelEnd) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                        this.occupiedSlot.isShooting = false;
                    }
                    this.isShooting = false;
                    this.fireCooldown = 0; // 立即重置冷却时间，以便下一帧立即寻找新目标
                    // No need to start DelayedFailCheck here since periodic check runs
                }
            },
            /*PlantShooter.TryShootMatchingFrontZombie end.*/

            /*PlantShooter.UpdateShotsText start.*/
            UpdateShotsText: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.textMesh, null)) {
                    this.textMesh.text = Bridge.toString((((this.maxShots - this.shotsFired) | 0)));
                }
            },
            /*PlantShooter.UpdateShotsText end.*/

            /*PlantShooter.IsShooting start.*/
            IsShooting: function () {
                return this.isShooting;
            },
            /*PlantShooter.IsShooting end.*/

            /*PlantShooter.FireProjectile start.*/
            FireProjectile: function (target) {
                if (UnityEngine.GameObject.op_Equality(this.projectilePrefab, null) || UnityEngine.Component.op_Equality(this.firePoint, null) || UnityEngine.MonoBehaviour.op_Equality(target, null)) {
                    return;
                }

                var projGO = this.GetProjectileFromPool();
                if (UnityEngine.GameObject.op_Equality(projGO, null)) {
                    return;
                } // 防御性检查

                // Shots in flight must not inherit the cannon's aiming or exit movement.
                // ReleaseProjectile reattaches them to the pool after deactivation.
                projGO.transform.SetParent(null, true);
                projGO.transform.SetPositionAndRotation(this.firePoint.position, pc.Quat.IDENTITY.clone());
                projGO.SetActive(true);
                var proj = { };

                // 性能优化：使用缓存的组件，避免重复 GetComponent
                if (!this._projectileComponentCache.tryGetValue(projGO, proj)) {
                    proj.v = projGO.GetComponent(PlantProjectile);
                    if (UnityEngine.MonoBehaviour.op_Inequality(proj.v, null)) {
                        this._projectileComponentCache.setItem(projGO, proj.v);
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(proj.v, null)) {
                    // 注意：这里 Remove 是为了在投射物初始化时清理，因为之前已经 Add 了
                    PlantShooter.globallyTargetedZombies.remove(target);
                    proj.v.Initialize(this, target);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                    PlayableAudio.instance.PlayExplode();
                }
            },
            /*PlantShooter.FireProjectile end.*/

            /*PlantShooter.LookAt start.*/
            LookAt: function (target) {
                if (UnityEngine.Component.op_Equality(target, null)) {
                    return;
                }

                var currentPos = this._cachedTransform.position.$clone();
                var direction = target.position.$clone().sub( currentPos );
                direction.y = 0.0;

                if (direction.lengthSq() < 0.0001) {
                    return;
                } // 距离太近，跳过

                // 计算目标角度
                var targetYAngle = Math.atan2(direction.x, direction.z) * UnityEngine.Mathf.Rad2Deg;

                // 如果目标相同且角度变化很小（小于1度），跳过旋转计算
                if (UnityEngine.Component.op_Equality(this._lastLookTarget, target) && Math.abs(UnityEngine.Mathf.DeltaAngle(this._lastLookYAngle, targetYAngle)) < 1.0) {
                    return;
                }

                this._lastLookTarget = target;
                this._lastLookYAngle = targetYAngle;
                var lookRotation = new pc.Quat().lookRotation( direction, pc.Vec3.UP );
                // 性能优化：使用缓存的 Transform
                this._cachedTransform.rotation = new pc.Quat().setFromEulerAngles_Unity( -90.0, lookRotation.getPositiveEulerAngles().y, 0.0 );
            },
            /*PlantShooter.LookAt end.*/

            /*PlantShooter.GetProjectileFromPool start.*/
            GetProjectileFromPool: function () {
                if (this._projectilePool.Count > 0) {
                    var go = this._projectilePool.Dequeue();
                    // 确保组件已缓存
                    if (!this._projectileComponentCache.containsKey(go)) {
                        var proj = go.GetComponent(PlantProjectile);
                        if (UnityEngine.MonoBehaviour.op_Inequality(proj, null)) {
                            this._projectileComponentCache.setItem(go, proj);
                        }
                    }
                    return go;
                }
                // 扩容：必要时再实例化，避免打空
                var newGo = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.projectilePrefab, UnityEngine.Component.op_Inequality(this._projectilePoolRoot, null) ? this._projectilePoolRoot : this._cachedTransform);
                newGo.SetActive(false);
                // 缓存新创建的投射物组件
                var newProj = newGo.GetComponent(PlantProjectile);
                if (UnityEngine.MonoBehaviour.op_Inequality(newProj, null)) {
                    this._projectileComponentCache.setItem(newGo, newProj);
                }
                return newGo;
            },
            /*PlantShooter.GetProjectileFromPool end.*/

            /*PlantShooter.ReleaseProjectile start.*/
            ReleaseProjectile: function (projectile) {
                if (UnityEngine.MonoBehaviour.op_Equality(projectile, null)) {
                    return;
                }
                var go = projectile.gameObject;
                go.SetActive(false);
                if (UnityEngine.Component.op_Inequality(this._projectilePoolRoot, null)) {
                    go.transform.SetParent(this._projectilePoolRoot, false);
                }
                this._projectilePool.Enqueue(go);
            },
            /*PlantShooter.ReleaseProjectile end.*/

            /*PlantShooter.BeginDepletion start.*/
            BeginDepletion: function () {
                this.isDepleted = true;
                this.exitTimer = this.exitDuration;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.occupiedSlot, null)) {
                    this.occupiedSlot.isShooting = false;
                    this.occupiedSlot.isOccupied = false;
                    this.occupiedSlot = null;
                    this.spawner.PlantShootersFront.remove(this);
                }

                // 性能优化：使用缓存的 Collider，避免重复 GetComponent
                if (UnityEngine.Component.op_Inequality(this._cachedCollider, null)) {
                    this._cachedCollider.enabled = false;
                }

                !Bridge.staticEquals(this.onRemovedFromQueue, null) ? this.onRemovedFromQueue(this.columnIndex, this) : null;
            },
            /*PlantShooter.BeginDepletion end.*/

            /*PlantShooter.HandleDepletionExit start.*/
            HandleDepletionExit: function () {
                // 性能优化：使用缓存的 Transform
                this._cachedTransform.position = this._cachedTransform.position.$clone().add( pc.Vec3.LEFT.clone().clone().scale( this.exitSpeed ).clone().scale( UnityEngine.Time.deltaTime ) );
                this.exitTimer -= UnityEngine.Time.deltaTime;

                if (this.exitTimer <= 0.0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*PlantShooter.HandleDepletionExit end.*/

            /*PlantShooter.TryAssignSlotAndWalk start.*/
            TryAssignSlotAndWalk: function () {
                var $t;
                if (this.queueIndex === 0) {
                    $t = Bridge.getEnumerator(this.availableSlots);
                    try {
                        while ($t.moveNext()) {
                            var slot = $t.Current;
                            var occupier = { };
                            // 性能优化：使用缓存的 SlotOccupier，避免重复 GetComponent
                            if (!this._slotOccupierCache.tryGetValue(slot, occupier)) {
                                occupier.v = slot.GetComponent(SlotOccupier);
                                if (UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null)) {
                                    this._slotOccupierCache.setItem(slot, occupier.v);
                                }
                            }

                            if (UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null) && !occupier.v.isOccupied) {
                                this.currentSlot = occupier.v;
                                occupier.v.isOccupied = true;
                                occupier.v.isShooting = true;
                                this.occupiedSlot = occupier.v;
                                this.currentTargetSlot = slot;

                                !Bridge.staticEquals(this.onStartedWalkingColumn, null) ? this.onStartedWalkingColumn(this.columnIndex, this.queueIndex, this, this.walkSpeed) : null;
                                if (this.queueIndex === 0 || this.queueIndex === 1) {
                                    this.SetMaterial();
                                }
                                this.hasReachedSlot = false;


                                this.currentState = ShooterState.Walking;
                                GameManager.ActiveShooters.add(this);
                                if (UnityEngine.MonoBehaviour.op_Inequality(PlayableAudio.instance, null)) {
                                    PlayableAudio.instance.PlayPick();
                                }
                                return;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*PlantShooter.TryAssignSlotAndWalk end.*/

            /*PlantShooter.OnDestroy start.*/
            OnDestroy: function () {
                GameManager.ActiveShooters.remove(this);
                this.StopFailCheckLoop();
                if (UnityEngine.Component.op_Inequality(this._projectilePoolRoot, null)) {
                    UnityEngine.MonoBehaviour.Destroy(this._projectilePoolRoot.gameObject);
                }
            },
            /*PlantShooter.OnDestroy end.*/

            /*PlantShooter.StartFailCheckLoop start.*/
            StartFailCheckLoop: function () {
                if (this.failCheckRoutine == null) {
                    this.slotOverflowFailTimer.Reset();
                    this.failCheckRoutine = this.StartCoroutine$1(this.PeriodicFailCheck());
                }
            },
            /*PlantShooter.StartFailCheckLoop end.*/

            /*PlantShooter.StopFailCheckLoop start.*/
            StopFailCheckLoop: function () {
                if (this.failCheckRoutine != null) {
                    this.StopCoroutine$2(this.failCheckRoutine);
                    this.failCheckRoutine = null;
                    this.isFailCheckRunning = false;
                }
            },
            /*PlantShooter.StopFailCheckLoop end.*/

            /*PlantShooter.PeriodicFailCheck start.*/
            PeriodicFailCheck: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isFailCheckRunning) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.isFailCheckRunning = true;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( !this.slotOverflowFailTimer.Advance(this.AreAllSlotsBlocked(), UnityEngine.Time.deltaTime) ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    !Bridge.staticEquals(GameManager.GameFail, null) ? GameManager.GameFail() : null;
                                        this.failCheckRoutine = null;
                                        this.isFailCheckRunning = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlantShooter.PeriodicFailCheck end.*/

            /*PlantShooter.AreAllSlotsBlocked start.*/
            AreAllSlotsBlocked: function () {
                var $t;
                var allPlantStucked = true;
                $t = Bridge.getEnumerator(this.availableSlots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        var occupier = { };
                        // 性能优化：使用缓存的 SlotOccupier，避免重复 GetComponent
                        if (this._slotOccupierCache.tryGetValue(slot, occupier) && UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null)) {
                            if (!occupier.v.isPlantStuck()) {
                                allPlantStucked = false;
                                break; // 提前退出，找到第一个未卡住的就返回
                            }
                        } else {
                            // 如果缓存中没有，获取并缓存
                            occupier.v = slot.GetComponent(SlotOccupier);
                            if (UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null)) {
                                this._slotOccupierCache.setItem(slot, occupier.v);
                                if (!occupier.v.isPlantStuck()) {
                                    allPlantStucked = false;
                                    break;
                                }
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return allPlantStucked;
            },
            /*PlantShooter.AreAllSlotsBlocked end.*/

            /*PlantShooter.IsAnyPlantShooting start.*/
            IsAnyPlantShooting: function () {
                var $t;
                $t = Bridge.getEnumerator(this.availableSlots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        var occupier = { };
                        // 性能优化：使用缓存的 SlotOccupier，避免重复 GetComponent
                        if (this._slotOccupierCache.tryGetValue(slot, occupier) && UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null)) {
                            if (occupier.v.isShooting) {
                                return true;
                            }
                        } else {
                            // 如果缓存中没有，获取并缓存
                            occupier.v = slot.GetComponent(SlotOccupier);
                            if (UnityEngine.MonoBehaviour.op_Inequality(occupier.v, null)) {
                                this._slotOccupierCache.setItem(slot, occupier.v);
                                if (occupier.v.isShooting) {
                                    return true;
                                }
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*PlantShooter.IsAnyPlantShooting end.*/


        }
    });
    /*PlantShooter end.*/

    /*PlantSpawner start.*/
    Bridge.define("PlantSpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            maxColumns: 0,
            levelManager: null,
            startPoint: null,
            xSpacing: 0,
            zSpacing: 0,
            startPointTransform: null,
            cannonSizeMultiplier: 0,
            plantColorPrefabs: null,
            maxBulletsPerPlant: 0,
            cannonFireRate: 0,
            plantColumns: null,
            colorToPlantPrefab: null,
            numColumns: 0,
            MainCamera: null,
            /**
             * 存储前排植物射手对象的列表
             *
             * @instance
             * @public
             * @memberof PlantSpawner
             * @type System.Collections.Generic.List$1
             */
            PlantShootersFront: null
        },
        ctors: {
            init: function () {
                this.startPoint = new UnityEngine.Vector3();
                this.maxColumns = 7;
                this.startPoint = pc.Vec3.ZERO.clone();
                this.xSpacing = 2.0;
                this.zSpacing = 2.0;
                this.cannonSizeMultiplier = 1.15;
                this.maxBulletsPerPlant = 10;
                this.cannonFireRate = 0.15;
                this.plantColumns = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(PlantShooter))).ctor();
                this.colorToPlantPrefab = new (System.Collections.Generic.Dictionary$2(ColorType,UnityEngine.GameObject)).ctor();
                this.PlantShootersFront = new (System.Collections.Generic.List$1(PlantShooter)).ctor();
            }
        },
        methods: {
            /*PlantSpawner.Start start.*/
            Start: function () {
                if (UnityEngine.Component.op_Inequality(this.startPointTransform, null)) {
                    this.startPoint = this.startPointTransform.position.$clone();
                }

                this.SetupPrefabLookup();
                this.SpawnPlantsInColumns();
            },
            /*PlantSpawner.Start end.*/

            /*PlantSpawner.OnPlantStartedWalking start.*/
            OnPlantStartedWalking: function (columnIndex, oldQueueIndex, shooter, walkSpeed) {
                if (columnIndex < 0 || columnIndex >= this.plantColumns.Count) {
                    return;
                }

                var col = this.plantColumns.getItem(columnIndex);
                var idx = col.indexOf(shooter);
                if (idx === -1) {
                    idx = oldQueueIndex;
                }
                if (idx < 0 || idx >= col.Count) {
                    return;
                }

                col.removeAt(idx);

                for (var i = idx; i < col.Count; i = (i + 1) | 0) {
                    col.getItem(i).queueIndex = i;
                    var target = this.GetColumnPosition(columnIndex, i);
                    this.StartCoroutine$1(this.MoveQueuedPlant(col.getItem(i).transform, target, walkSpeed));
                }
            },
            /*PlantSpawner.OnPlantStartedWalking end.*/

            /*PlantSpawner.OnPlantRemoved start.*/
            OnPlantRemoved: function (columnIndex, shooter) {
                if (columnIndex < 0 || columnIndex >= this.plantColumns.Count) {
                    return;
                }

                var col = this.plantColumns.getItem(columnIndex);
                var idx = col.indexOf(shooter);
                if (idx === -1) {
                    return;
                }

                col.removeAt(idx);

                for (var i = idx; i < col.Count; i = (i + 1) | 0) {
                    col.getItem(i).queueIndex = i;
                    var target = this.GetColumnPosition(columnIndex, i);
                    this.StartCoroutine$1(this.MoveQueuedPlant(col.getItem(i).transform, target, col.getItem(i).walkSpeed));
                }
            },
            /*PlantSpawner.OnPlantRemoved end.*/

            /*PlantSpawner.MoveQueuedPlant start.*/
            MoveQueuedPlant: function (plant, target, speed) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    epsilon,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    epsilon = 0.01;
                                        plant.GetComponent(UnityEngine.BoxCollider).enabled = false;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( pc.Vec3.distance( plant.position, target ) > epsilon ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    plant.position = pc.Vec3.moveTowards( plant.position, target, speed * UnityEngine.Time.deltaTime );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    plant.GetComponent(UnityEngine.BoxCollider).enabled = true;
                                        plant.position = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlantSpawner.MoveQueuedPlant end.*/

            /*PlantSpawner.SetupPrefabLookup start.*/
            SetupPrefabLookup: function () {
                var $t;
                this.colorToPlantPrefab.clear();
                $t = Bridge.getEnumerator(this.plantColorPrefabs);
                try {
                    while ($t.moveNext()) {
                        var entry = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(entry.plantPrefab, null)) {
                            this.colorToPlantPrefab.setItem(entry.colorType, entry.plantPrefab);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlantSpawner.SetupPrefabLookup end.*/

            /*PlantSpawner.SpawnPlantsInColumns start.*/
            SpawnPlantsInColumns: function () {
                var $t, $t1, $t2;
                var levelData = this.levelManager.currentLevelData;
                if (levelData == null || levelData.zombiePrefabs == null || levelData.zombiePrefabs.length === 0) {
                    return;
                }

                this.numColumns = Math.max(1, Math.min(this.maxColumns, 100));
                this.plantColumns.clear();
                for (var i = 0; i < this.numColumns; i = (i + 1) | 0) {
                    this.plantColumns.add(new (System.Collections.Generic.List$1(PlantShooter)).ctor());
                }

                // Column-per-colour: plant column i is dedicated to zombie colour i, stacked as a
                // queue whose bullet counts cover that colour's zombies (mirrors the reference).
                if (levelData.columnColorGroups) {
                    var order = System.Linq.Enumerable.from(this.levelManager.GetZombieColorOrder(), ColorType).distinct().toList(ColorType);
                    var counts = this.CountZombiesPerColor(levelData);

                    for (var col = 0; col < this.numColumns && col < order.Count; col = (col + 1) | 0) {
                        var color = order.getItem(col);
                        var prefab = { };
                        if (!this.colorToPlantPrefab.tryGetValue(color, prefab)) {
                            continue;
                        }
                        var c = { };

                        var bulletsForColor = counts.tryGetValue(color, c) ? c.v : 0;
                        $t = Bridge.getEnumerator(this.GetRandomBulletDistributionInTens(bulletsForColor));
                        try {
                            while ($t.moveNext()) {
                                var bullets = $t.Current;
                                this.SpawnPlantInColumn(prefab.v, color, bullets, col);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    return;
                }

                var spawnQueue;

                if (this.levelManager.randomizeChunks) {
                    spawnQueue = this.BuildQueueFromActualZombieOrder();
                } else {
                    var zombieColorCount = this.CountZombiesPerColor(levelData);
                    spawnQueue = this.BuildQueueFromColorCount(zombieColorCount);

                    // Get unique zombie colors in order
                    var zombieOrder = System.Linq.Enumerable.from(this.levelManager.GetZombieColorOrder(), ColorType).distinct().toList(ColorType);

                    // Define how many plants to spawn for first few zombie colors
                    var colorPlantCount = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)).ctor();
                    if (zombieOrder.Count === 2) {
                        colorPlantCount.setItem(0, 4);
                        colorPlantCount.setItem(1, (spawnQueue.Count - 4) | 0);
                    } else if (zombieOrder.Count === 3) {
                        colorPlantCount.setItem(0, 4);
                        colorPlantCount.setItem(1, 2);
                        colorPlantCount.setItem(2, (spawnQueue.Count - 6) | 0);
                    } else if (zombieOrder.Count >= 4) {
                        colorPlantCount.setItem(0, 4);
                        colorPlantCount.setItem(1, 3);
                        colorPlantCount.setItem(2, 2);
                    }

                    var newQueue = new (System.Collections.Generic.List$1(System.ValueTuple$2(ColorType,System.Int32))).ctor();

                    $t1 = Bridge.getEnumerator(colorPlantCount);
                    try {
                        while ($t1.moveNext()) {
                            var kvp = $t1.Current;
                            var colorIndex = kvp.key;
                            var amount = kvp.value;
                            var targetColor = { v : zombieOrder.getItem(colorIndex) };

                            for (var i1 = 0; i1 < amount; i1 = (i1 + 1) | 0) {
                                var index = spawnQueue.FindIndex$2((function ($me, targetColor) {
                                    return function (e) {
                                        return e.Item1 === targetColor.v;
                                    };
                                })(this, targetColor));
                                if (index !== -1) {
                                    newQueue.add(spawnQueue.getItem(index).$clone());
                                    spawnQueue.removeAt(index);
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                    newQueue.AddRange(spawnQueue);
                    spawnQueue = newQueue;
                }

                var queueCounter = 0;
                $t2 = Bridge.getEnumerator(spawnQueue);
                try {
                    while ($t2.moveNext()) {
                        var entry = $t2.Current.$clone();
                        var prefab1 = { };
                        if (!this.colorToPlantPrefab.tryGetValue(entry.Item1, prefab1)) {
                            continue;
                        }

                        var columnIndex = queueCounter % this.numColumns;
                        var queueIndex = this.plantColumns.getItem(columnIndex).Count;

                        var spawnPos = this.GetColumnPosition(columnIndex, queueIndex);
                        var plantGO = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefab1.v, spawnPos, prefab1.v.transform.rotation, this.transform);
                        var shooter = { };

                        if (plantGO.TryGetComponent$1(PlantShooter, shooter)) {
                            shooter.v.ApplySizeMultiplier(this.cannonSizeMultiplier);
                            shooter.v.fireRate = this.cannonFireRate;
                            shooter.v.colorType = entry.Item1;
                            shooter.v.maxShots = entry.Item2;
                            shooter.v.columnIndex = columnIndex;
                            shooter.v.queueIndex = queueIndex;

                            shooter.v.onStartedWalkingColumn = Bridge.fn.cacheBind(this, this.OnPlantStartedWalking);
                            shooter.v.onRemovedFromQueue = Bridge.fn.cacheBind(this, this.OnPlantRemoved);
                        }

                        this.plantColumns.getItem(columnIndex).add(plantGO.GetComponent(PlantShooter));
                        queueCounter = (queueCounter + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlantSpawner.SpawnPlantsInColumns end.*/

            /*PlantSpawner.SpawnPlantInColumn start.*/
            SpawnPlantInColumn: function (prefab, color, bullets, columnIndex) {
                var queueIndex = this.plantColumns.getItem(columnIndex).Count;
                var spawnPos = this.GetColumnPosition(columnIndex, queueIndex);
                var plantGO = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefab, spawnPos, prefab.transform.rotation, this.transform);
                var shooter = { };

                if (plantGO.TryGetComponent$1(PlantShooter, shooter)) {
                    shooter.v.ApplySizeMultiplier(this.cannonSizeMultiplier);
                    shooter.v.fireRate = this.cannonFireRate;
                    shooter.v.colorType = color;
                    shooter.v.maxShots = bullets;
                    shooter.v.columnIndex = columnIndex;
                    shooter.v.queueIndex = queueIndex;
                    shooter.v.onStartedWalkingColumn = Bridge.fn.cacheBind(this, this.OnPlantStartedWalking);
                    shooter.v.onRemovedFromQueue = Bridge.fn.cacheBind(this, this.OnPlantRemoved);
                }

                this.plantColumns.getItem(columnIndex).add(plantGO.GetComponent(PlantShooter));
            },
            /*PlantSpawner.SpawnPlantInColumn end.*/

            /*PlantSpawner.GetColumnPosition start.*/
            GetColumnPosition: function (columnIndex, queueIndex) {
                var x = this.startPoint.x + (columnIndex * this.xSpacing);
                var z = this.startPoint.z - (queueIndex * this.zSpacing);
                return new pc.Vec3( x, this.startPoint.y, z );
            },
            /*PlantSpawner.GetColumnPosition end.*/

            /*PlantSpawner.CountZombiesPerColor start.*/
            CountZombiesPerColor: function (levelData) {
                var $t, $t1;
                // Count from the actual spawn queue the LevelManager built, so this stays
                // correct for every layout mode (column groups, streaks, randomized chunks).
                var map = new (System.Collections.Generic.Dictionary$2(ColorType,System.Int32)).ctor();
                if (UnityEngine.GameObject.op_Inequality(levelData.mapPrefab, null)) {
                    $t = Bridge.getEnumerator(levelData.exactMapCells);
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current.$clone();
                            if (!map.containsKey(cell.color)) {
                                map.setItem(cell.color, 0);
                            }
                            map.setItem(cell.color, (map.getItem(cell.color) + 1) | 0);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return map;
                }
                $t1 = Bridge.getEnumerator(this.levelManager.GetAllZombiesToSpawn());
                try {
                    while ($t1.moveNext()) {
                        var prefab = $t1.Current;
                        var zb = { };
                        if (UnityEngine.GameObject.op_Inequality(prefab, null) && prefab.TryGetComponent$1(ZombieBlock, zb)) {
                            if (!map.containsKey(zb.v.colorType)) {
                                map.setItem(zb.v.colorType, 0);
                            }
                            map.setItem(zb.v.colorType, (map.getItem(zb.v.colorType) + 1) | 0);
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                return map;
            },
            /*PlantSpawner.CountZombiesPerColor end.*/

            /*PlantSpawner.BuildQueueFromColorCount start.*/
            BuildQueueFromColorCount: function (colorZombieCount) {
                var $t, $t1;
                var queue = new (System.Collections.Generic.List$1(System.ValueTuple$2(ColorType,System.Int32))).ctor();

                $t = Bridge.getEnumerator(colorZombieCount);
                try {
                    while ($t.moveNext()) {
                        var kvp = $t.Current;
                        var color = kvp.key;
                        var total = kvp.value;

                        if (!this.colorToPlantPrefab.containsKey(color)) {
                            continue;
                        }

                        var dist = this.GetRandomBulletDistributionInTens(total);
                        $t1 = Bridge.getEnumerator(dist);
                        try {
                            while ($t1.moveNext()) {
                                var b = $t1.Current;
                                queue.add(new (System.ValueTuple$2(ColorType,System.Int32)).$ctor1(color, b));
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.Shuffle(System.ValueTuple$2(ColorType,System.Int32), queue);
                return queue;
            },
            /*PlantSpawner.BuildQueueFromColorCount end.*/

            /*PlantSpawner.BuildQueueFromActualZombieOrder start.*/
            BuildQueueFromActualZombieOrder: function () {
                var zombieColorOrder = this.levelManager.GetZombieColorOrder();

                var result = new (System.Collections.Generic.List$1(System.ValueTuple$2(ColorType,System.Int32))).ctor();

                var i = 0;
                while (i < zombieColorOrder.Count) {
                    var current = zombieColorOrder.getItem(i);
                    var count = 1;

                    while (((i + count) | 0) < zombieColorOrder.Count && zombieColorOrder.getItem(((i + count) | 0)) === current) {
                        count = (count + 1) | 0;
                    }

                    result.add(new (System.ValueTuple$2(ColorType,System.Int32)).$ctor1(current, count));
                    i = (i + count) | 0;
                }

                return result;
            },
            /*PlantSpawner.BuildQueueFromActualZombieOrder end.*/

            /*PlantSpawner.GetRandomBulletDistributionInTens start.*/
            GetRandomBulletDistributionInTens: function (totalBullets) {
                var result = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                var remaining = totalBullets;

                while (remaining > this.maxBulletsPerPlant) {
                    result.add(this.maxBulletsPerPlant);
                    remaining = (remaining - this.maxBulletsPerPlant) | 0;
                }

                if (remaining > 0) {
                    result.add(remaining);
                }

                return result;
            },
            /*PlantSpawner.GetRandomBulletDistributionInTens end.*/

            /*PlantSpawner.Shuffle start.*/
            Shuffle: function (T, list) {
                for (var i = (list.Count - 1) | 0; i > 0; i = (i - 1) | 0) {
                    var j = UnityEngine.Random.Range(0, ((i + 1) | 0));
                    Bridge.Deconstruct(new (System.ValueTuple$2(T,T)).$ctor1(Bridge.rValue(list.getItem(j)), Bridge.rValue(list.getItem(i))).$clone(), Bridge.ref(Bridge.rValue(list.getItem(i))), Bridge.ref(Bridge.rValue(list.getItem(j))));
                }
            },
            /*PlantSpawner.Shuffle end.*/


        }
    });
    /*PlantSpawner end.*/

    /*PlayableAudio start.*/
    Bridge.define("PlayableAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            music: null,
            sfx: null,
            bgm: null,
            pick: null,
            explode: null,
            win: null,
            lose: null,
            coins: null,
            cheers: null,
            musicVolume: 0
        },
        ctors: {
            init: function () {
                this.musicVolume = 0.55;
            }
        },
        methods: {
            /*PlayableAudio.Awake start.*/
            Awake: function () {
                PlayableAudio.instance = this;
            },
            /*PlayableAudio.Awake end.*/

            /*PlayableAudio.OnDestroy start.*/
            OnDestroy: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(PlayableAudio.instance, this)) {
                    PlayableAudio.instance = null;
                }
            },
            /*PlayableAudio.OnDestroy end.*/

            /*PlayableAudio.Start start.*/
            Start: function () {
                if (UnityEngine.Component.op_Inequality(this.music, null) && this.bgm != null) {
                    this.music.clip = this.bgm;
                    this.music.loop = true;
                    this.music.volume = this.musicVolume;
                    this.music.playOnAwake = false;
                    this.music.Play();
                }
            },
            /*PlayableAudio.Start end.*/

            /*PlayableAudio.Sfx start.*/
            Sfx: function (clip) {
                if (UnityEngine.Component.op_Inequality(this.sfx, null) && clip != null) {
                    this.sfx.PlayOneShot(clip);
                }
            },
            /*PlayableAudio.Sfx end.*/

            /*PlayableAudio.PlayPick start.*/
            PlayPick: function () {
                this.Sfx(this.pick);
            },
            /*PlayableAudio.PlayPick end.*/

            /*PlayableAudio.PlayExplode start.*/
            PlayExplode: function () {
                this.Sfx(this.explode);
            },
            /*PlayableAudio.PlayExplode end.*/

            /*PlayableAudio.PlayWin start.*/
            PlayWin: function () {
                this.Sfx(this.win);
            },
            /*PlayableAudio.PlayWin end.*/

            /*PlayableAudio.PlayLose start.*/
            PlayLose: function () {
                this.Sfx(this.lose);
            },
            /*PlayableAudio.PlayLose end.*/

            /*PlayableAudio.PlayCoins start.*/
            PlayCoins: function () {
                this.Sfx(this.coins);
            },
            /*PlayableAudio.PlayCoins end.*/

            /*PlayableAudio.PlayCheers start.*/
            PlayCheers: function () {
                this.Sfx(this.cheers);
            },
            /*PlayableAudio.PlayCheers end.*/

            /*PlayableAudio.StopMusic start.*/
            StopMusic: function () {
                if (UnityEngine.Component.op_Inequality(this.music, null)) {
                    this.music.Stop();
                }
            },
            /*PlayableAudio.StopMusic end.*/


        }
    });
    /*PlayableAudio end.*/

    /*PlayableTutorial start.*/
    Bridge.define("PlayableTutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*PlayableTutorial.ClearableCount:static start.*/
                ClearableCount: function (grid, color) {
                    var $t;
                    if (UnityEngine.MonoBehaviour.op_Equality(grid, null) || grid.levelEnd) {
                        return 0;
                    }
                    var count = 0;
                    $t = Bridge.getEnumerator(grid.GetFrontZombiesByColor(color));
                    try {
                        while ($t.moveNext()) {
                            var block = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(block, null) && !block.IsDead && block.gameObject.activeInHierarchy && !PlantShooter.globallyTargetedZombies.contains(block)) {
                                count = (count + 1) | 0;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return count;
                },
                /*PlayableTutorial.ClearableCount:static end.*/

                /*PlayableTutorial.ShouldRetarget:static start.*/
                ShouldRetarget: function (current, remaining) {
                    return UnityEngine.MonoBehaviour.op_Equality(current, null) || current.queueIndex !== 0 || current.currentState !== ShooterState.Idle || remaining <= 0;
                },
                /*PlayableTutorial.ShouldRetarget:static end.*/


            }
        },
        fields: {
            tapCard: null,
            finger: null,
            canvasRect: null,
            idleReHintDelay: 0,
            fingerOffset: null,
            fingerPulseScale: 0,
            idleTimer: 0,
            ended: false,
            target: null,
            fingerPulse: null,
            slots: null
        },
        ctors: {
            init: function () {
                this.fingerOffset = new UnityEngine.Vector2();
                this.idleReHintDelay = 3.0;
                this.fingerOffset = pc.Vec2.ZERO.clone();
                this.fingerPulseScale = 0.82;
            }
        },
        methods: {
            /*PlayableTutorial.Awake start.*/
            Awake: function () {
                // Retain the reference to hide the legacy card in older scene variants too.
                if (UnityEngine.GameObject.op_Inequality(this.tapCard, null)) {
                    this.tapCard.SetActive(false);
                }
            },
            /*PlayableTutorial.Awake end.*/

            /*PlayableTutorial.Start start.*/
            Start: function () {
                if (UnityEngine.Component.op_Inequality(this.finger, null)) {
                    this.finger.gameObject.SetActive(false);
                }
                this.slots = UnityEngine.Object.FindObjectsOfType(SlotOccupier);
                this.idleTimer = this.idleReHintDelay; // finger shows straight away at the start
                // Also stop on the SDK's 10s no-op settlement, which never sets levelEnd.
                try {
                    SC.sc.web.addOnGameEndAction(Bridge.fn.cacheBind(this, this.EndGuidance));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*PlayableTutorial.Start end.*/

            /*PlayableTutorial.OnDestroy start.*/
            OnDestroy: function () {
                try {
                    SC.sc.web.removeOnGameEndAction(Bridge.fn.cacheBind(this, this.EndGuidance));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*PlayableTutorial.OnDestroy end.*/

            /*PlayableTutorial.Update start.*/
            Update: function () {
                if (this.ended) {
                    return;
                }

                var grid = ZombieGridManager.Instance;
                if (UnityEngine.MonoBehaviour.op_Inequality(grid, null) && grid.levelEnd) {
                    this.EndGuidance();
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.idleTimer = 0.0;
                } else {
                    this.idleTimer += UnityEngine.Time.deltaTime;
                }

                if (this.idleTimer >= this.idleReHintDelay && this.HasFreeSlot()) {
                    var targetRemaining = UnityEngine.MonoBehaviour.op_Equality(this.target, null) ? 0 : PlayableTutorial.ClearableCount(grid, this.target.colorType);
                    if (PlayableTutorial.ShouldRetarget(this.target, targetRemaining)) {
                        this.target = this.FindNeededFrontPlant();
                    }
                    this.ShowFingerOn(this.target);
                } else {
                    this.HideFinger();
                }
            },
            /*PlayableTutorial.Update end.*/

            /*PlayableTutorial.HasFreeSlot start.*/
            HasFreeSlot: function () {
                var $t;
                if (this.slots == null) {
                    return true;
                }
                $t = Bridge.getEnumerator(this.slots);
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(s, null) && !s.isOccupied) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*PlayableTutorial.HasFreeSlot end.*/

            /*PlayableTutorial.ShowFingerOn start.*/
            ShowFingerOn: function (t) {
                if (UnityEngine.MonoBehaviour.op_Equality(t, null) || UnityEngine.Component.op_Equality(this.finger, null) || UnityEngine.Component.op_Equality(this.canvasRect, null)) {
                    this.HideFinger();
                    return;
                }
                if (!this.finger.gameObject.activeSelf) {
                    this.finger.gameObject.SetActive(true);
                }
                var cam = UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Inequality(cam, null)) {
                    var collider = t.GetComponent(UnityEngine.Collider);
                    var sp = cam.WorldToScreenPoint(UnityEngine.Component.op_Inequality(collider, null) ? collider.bounds.center.$clone() : t.transform.position.$clone());
                    var parent = Bridge.as(this.finger.parent, UnityEngine.RectTransform);
                    var canvas = this.finger.GetComponentInParent(UnityEngine.Canvas);
                    var uiCamera = UnityEngine.Component.op_Inequality(canvas, null) && canvas.renderMode !== UnityEngine.RenderMode.ScreenSpaceOverlay ? canvas.worldCamera : null;
                    var world = { v : new UnityEngine.Vector3() };
                    if (sp.z <= 0 || UnityEngine.Component.op_Equality(parent, null) || !UnityEngine.RectTransformUtility.ScreenPointToWorldPointInRectangle(parent, UnityEngine.Vector2.FromVector3(sp), uiCamera, world)) {
                        this.HideFinger();
                        return;
                    }
                    // The finger pivot is at its fingertip, so pulsing cannot move the tip off the cannon.
                    this.finger.position = world.v.$clone().add( parent.TransformVector(UnityEngine.Vector3.FromVector2(this.fingerOffset)) );
                }
                this.EnsurePulse();
            },
            /*PlayableTutorial.ShowFingerOn end.*/

            /*PlayableTutorial.HideFinger start.*/
            HideFinger: function () {
                if (UnityEngine.Component.op_Inequality(this.finger, null) && this.finger.gameObject.activeSelf) {
                    this.finger.gameObject.SetActive(false);
                }
                if (this.fingerPulse != null) {
                    DG.Tweening.TweenExtensions.Kill(this.fingerPulse);
                    this.fingerPulse = null;
                }
            },
            /*PlayableTutorial.HideFinger end.*/

            /*PlayableTutorial.EnsurePulse start.*/
            EnsurePulse: function () {
                if (this.fingerPulse != null && DG.Tweening.TweenExtensions.IsActive(this.fingerPulse)) {
                    return;
                }
                this.finger.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.75 );
                this.fingerPulse = DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.finger, this.fingerPulseScale, 0.55), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine), true);
            },
            /*PlayableTutorial.EnsurePulse end.*/

            /*PlayableTutorial.FindNeededFrontPlant start.*/
            FindNeededFrontPlant: function () {
                var $t;
                var grid = ZombieGridManager.Instance;
                var best = null;
                var bestRemaining = -1;
                var bestColumn = 2147483647;
                $t = Bridge.getEnumerator(UnityEngine.Object.FindObjectsOfType(PlantShooter));
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        if (s.queueIndex !== 0 || s.currentState !== ShooterState.Idle) {
                            continue;
                        }
                        var remaining = PlayableTutorial.ClearableCount(grid, s.colorType);
                        if (remaining <= 0) {
                            continue;
                        }
                        // Most-needed colour wins; ties break toward the left-most plant column
                        // so the very first hint lands on column 0 like the reference.
                        if (remaining > bestRemaining || (remaining === bestRemaining && s.columnIndex < bestColumn)) {
                            bestRemaining = remaining;
                            bestColumn = s.columnIndex;
                            best = s;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return best;
            },
            /*PlayableTutorial.FindNeededFrontPlant end.*/

            /*PlayableTutorial.EndGuidance start.*/
            EndGuidance: function () {
                if (this.ended) {
                    return;
                }
                this.ended = true;
                try {
                    SC.sc.web.removeOnGameEndAction(Bridge.fn.cacheBind(this, this.EndGuidance));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
                this.HideFinger();
                if (UnityEngine.GameObject.op_Inequality(this.tapCard, null)) {
                    this.tapCard.SetActive(false);
                }
                this.enabled = false;
            },
            /*PlayableTutorial.EndGuidance end.*/


        }
    });
    /*PlayableTutorial end.*/

    /*ProgressBar start.*/
    Bridge.define("ProgressBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fill: null,
            fillSpeed: 0,
            total: 0,
            armed: false
        },
        ctors: {
            init: function () {
                this.fillSpeed = 1.5;
                this.total = -1;
            }
        },
        methods: {
            /*ProgressBar.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(this.fill, null)) {
                    this.fill = this.GetComponent(UnityEngine.UI.Image);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.fill, null)) {
                    this.fill.fillAmount = 0.0;
                }
            },
            /*ProgressBar.Awake end.*/

            /*ProgressBar.Update start.*/
            Update: function () {
                var grid = ZombieGridManager.Instance;
                if (UnityEngine.MonoBehaviour.op_Equality(grid, null) || UnityEngine.MonoBehaviour.op_Equality(this.fill, null) || UnityEngine.MonoBehaviour.op_Equality(grid.levelManager, null) || grid.levelManager.currentLevelData == null) {
                    return;
                }

                if (this.total < 0) {
                    var d = grid.levelManager.currentLevelData;
                    // Prefab/exact maps may have holes; their bounding rectangle is not
                    // the number of destructible blocks (the client map has 1599, not 1600).
                    if (UnityEngine.GameObject.op_Inequality(d.mapPrefab, null)) {
                        this.total = d.mapPrefab.GetComponentsInChildren(UnityEngine.MeshRenderer).length;
                    } else {
                        if (d.useExactMap) {
                            this.total = d.GetExactMapCellsInSpawnOrder().length;
                        } else {
                            this.total = Bridge.Int.mul(Bridge.Int.mul(d.numberOfColumns, d.numberOfRows), (d.stackMode ? UnityEngine.Mathf.Max(1, d.stackHeight) : 1));
                        }
                    }
                }
                if (this.total <= 0) {
                    return;
                }

                // Don't track until the grid has finished spawning (count ramps 0 -> total in one frame).
                if (!this.armed) {
                    if (grid.countOfZombies >= this.total) {
                        this.armed = true;
                    }
                    return;
                }

                var target = 1.0 - Math.max(0, Math.min(1, grid.countOfZombies / this.total));
                this.fill.fillAmount = UnityEngine.Mathf.MoveTowards(this.fill.fillAmount, target, this.fillSpeed * UnityEngine.Time.deltaTime);
            },
            /*ProgressBar.Update end.*/


        }
    });
    /*ProgressBar end.*/

    /*SC._0x034ef5c9 start.*/
    Bridge.define("SC._0x034ef5c9");
    /*SC._0x034ef5c9 end.*/

    /*SC.SCEventArgs start.*/
    Bridge.define("SC.SCEventArgs", {
        statics: {
            methods: {
                /*SC.SCEventArgs.Create:static start.*/
                Create: function (_0x5e56c225, _0x88363958, _0x95c8845a, _0x7b837dd8, _0x9b59b43a) {
                    if (_0x5e56c225 === void 0) { _0x5e56c225 = null; }
                    if (_0x88363958 === void 0) { _0x88363958 = null; }
                    if (_0x95c8845a === void 0) { _0x95c8845a = null; }
                    if (_0x7b837dd8 === void 0) { _0x7b837dd8 = null; }
                    if (_0x9b59b43a === void 0) { _0x9b59b43a = null; }
                    var _0x58366417 = new SC.SCEventArgs();
                    _0x58366417._0x52eafe07(_0x5e56c225, _0x88363958, _0x95c8845a, _0x7b837dd8, _0x9b59b43a);
                    return _0x58366417;
                },
                /*SC.SCEventArgs.Create:static end.*/

                /*SC.SCEventArgs.CreateAndID:static start.*/
                CreateAndID: function (_0xb62b0881, _0xb8085b16, _0x70e9d680, _0x1a3af272, _0x591dede4, _0xe0df137f) {
                    if (_0xb8085b16 === void 0) { _0xb8085b16 = null; }
                    if (_0x70e9d680 === void 0) { _0x70e9d680 = null; }
                    if (_0x1a3af272 === void 0) { _0x1a3af272 = null; }
                    if (_0x591dede4 === void 0) { _0x591dede4 = null; }
                    if (_0xe0df137f === void 0) { _0xe0df137f = null; }
                    var _0xb198eb1a = new SC.SCEventArgs();
                    _0xb198eb1a._0xb0d3dfe8 = _0xb62b0881;
                    _0xb198eb1a._0x52eafe07(_0xb8085b16, _0x70e9d680, _0x1a3af272, _0x591dede4, _0xe0df137f);
                    return _0xb198eb1a;
                },
                /*SC.SCEventArgs.CreateAndID:static end.*/


            }
        },
        fields: {
            _0xb0d3dfe8: null,
            _0xc4143096: null,
            _0x8f0aba03: null,
            _0x86b0d058: null,
            _0x851e0ab9: null,
            _0x954380b4: null
        },
        props: {
            Id: {
                get: function () {
                    return this._0xb0d3dfe8;
                }
            }
        },
        methods: {
            /*SC.SCEventArgs.Clear start.*/
            Clear: function () {
                this._0xc4143096 = null;
                this._0x8f0aba03 = null;
                this._0x86b0d058 = null;
                this._0x851e0ab9 = null;
                this._0x954380b4 = null;
                this._0xb0d3dfe8 = "";
            },
            /*SC.SCEventArgs.Clear end.*/

            /*SC.SCEventArgs.OneData start.*/
            OneData: function (T) {
                if (this._0xc4143096 != null) {
                    return Bridge.cast(Bridge.unbox(this._0xc4143096, T), T);
                }

                SC.sc.log.Warning("EventArgs Count Not Has 1");
                return Bridge.getDefaultValue(T);
            },
            /*SC.SCEventArgs.OneData end.*/

            /*SC.SCEventArgs.TwoData start.*/
            TwoData: function (T) {
                if (this._0x8f0aba03 != null) {
                    return Bridge.cast(Bridge.unbox(this._0x8f0aba03, T), T);
                }

                SC.sc.log.Warning("EventArgs Count Not Has 2");
                return Bridge.getDefaultValue(T);
            },
            /*SC.SCEventArgs.TwoData end.*/

            /*SC.SCEventArgs.ThreeData start.*/
            ThreeData: function (T) {
                if (this._0x86b0d058 != null) {
                    return Bridge.cast(Bridge.unbox(this._0x86b0d058, T), T);
                }

                SC.sc.log.Warning("EventArgs Count Not Has 3");
                return Bridge.getDefaultValue(T);
            },
            /*SC.SCEventArgs.ThreeData end.*/

            /*SC.SCEventArgs.FourData start.*/
            FourData: function (T) {
                if (this._0x851e0ab9 != null) {
                    return Bridge.cast(Bridge.unbox(this._0x851e0ab9, T), T);
                }

                SC.sc.log.Warning("EventArgs Count Not Has 4");
                return Bridge.getDefaultValue(T);
            },
            /*SC.SCEventArgs.FourData end.*/

            /*SC.SCEventArgs.FiveData start.*/
            FiveData: function (T) {
                if (this._0x954380b4 != null) {
                    return Bridge.cast(Bridge.unbox(this._0x954380b4, T), T);
                }

                SC.sc.log.Warning("EventArgs Count Not Has 5");
                return Bridge.getDefaultValue(T);
            },
            /*SC.SCEventArgs.FiveData end.*/

            /*SC.SCEventArgs._0x52eafe07 start.*/
            _0x52eafe07: function (_0x3eafbf09, _0xd5e9ad19, _0x9b29ef56, _0x9cbeb3e4, _0x58394439) {
                if (_0x3eafbf09 === void 0) { _0x3eafbf09 = null; }
                if (_0xd5e9ad19 === void 0) { _0xd5e9ad19 = null; }
                if (_0x9b29ef56 === void 0) { _0x9b29ef56 = null; }
                if (_0x9cbeb3e4 === void 0) { _0x9cbeb3e4 = null; }
                if (_0x58394439 === void 0) { _0x58394439 = null; }
                this._0xc4143096 = _0x3eafbf09;
                this._0x8f0aba03 = _0xd5e9ad19;
                this._0x86b0d058 = _0x9b29ef56;
                this._0x851e0ab9 = _0x9cbeb3e4;
                this._0x954380b4 = _0x58394439;
            },
            /*SC.SCEventArgs._0x52eafe07 end.*/


        }
    });
    /*SC.SCEventArgs end.*/

    /*SC._0x0b275e47 start.*/
    Bridge.define("SC._0x0b275e47", {
        statics: {
            fields: {
                _0xbfbea8ea: null,
                _0x588c6ec3: null,
                bGameReady: false,
                _0xf1cfe009: false,
                _0x357bb2ba: false,
                _0xda4b0623: false,
                bWeb: false,
                _0xa147425b: null
            },
            props: {
                eCurRunType: {
                    get: function () {


                        var bVal = true;
                        bVal = false;
                        return bVal ? _0x5c9b0807._0x14b4b5b8 : _0x5c9b0807._0x696d5f85;
                    }
                }
            },
            ctors: {
                init: function () {
                    this._0xbfbea8ea = "KGZ1bmN0aW9uICgpIHsNCiAgICBpZiAoIXdpbmRvdy5zY0Rvd25sb2FkKSByZXR1cm47DQogICAgaWYgKCh0eXBlb2YgRXhpdEFwaSAhPSAidW5kZWZpbmVkIikgJiYgRXhpdEFwaS5leGl0KSB7DQogICAgICAgIHdpbmRvd1siU0NFeGl0QXBpIl0gPSBFeGl0QXBpLmV4aXQ7DQogICAgfQ0KICAgIHZhciBsaXN0ID0gWyJzY0Rvd25sb2FkIiwgIlNDRXhpdEFwaSIsICJtcmFpZCIsICJpbnN0YWxsIl07DQogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7DQogICAgICAgIHZhciB2YWxsID0gd2luZG93W2xpc3RbaV1dOw0KICAgICAgICBpZiAoIXZhbGwpIGNvbnRpbnVlOw0KICAgICAgICB3aW5kb3dbbGlzdFtpXV0gPSAoKSA9PiB7DQogICAgICAgICAgICAvKiog55Sxc2PmiafooYwgKi8NCiAgICAgICAgICAgIHdpbmRvdy5fX19zY0Rvd25sb2FkICYmIHdpbmRvdy5fX19zY0Rvd25sb2FkKCk7DQogICAgICAgICAgICB2YWwxICYmIHZhbGwoKTsNCiAgICAgICAgICAgIHdpbmRvd1tsaXN0W2ldXSA9ICgpID0+IHsgfTsNCiAgICAgICAgfTsNCiAgICB9DQogICAgcmV0dXJuICIiOw0KfSkoKTsNCg==";
                    this._0x588c6ec3 = "";
                    this.bGameReady = false;
                    this._0xf1cfe009 = false;
                    this._0x357bb2ba = false;
                    this._0xda4b0623 = false;
                    this.bWeb = UnityEngine.Application.platform === UnityEngine.RuntimePlatform.WebGLPlayer || UnityEngine.Application.platform === UnityEngine.RuntimePlatform.Android;
                    this._0xa147425b = "";
                }
            },
            methods: {
                /*SC._0x0b275e47._0xfb4bfef0:static start.*/
                _0xfb4bfef0: function () {
                    if (!Bridge.referenceEquals(SC._0x0b275e47._0xa147425b, "")) {
                        return SC._0x0b275e47._0xa147425b;
                    }

                    SC._0x0b275e47._0xa147425b = SC.sc.web.webGLLib.scGetWebPlatform();
                    if (Bridge.referenceEquals(SC._0x0b275e47._0xa147425b, "")) {
                        SC._0x0b275e47._0xa147425b = "default";
                    }

                    return SC._0x0b275e47._0xa147425b;
                },
                /*SC._0x0b275e47._0xfb4bfef0:static end.*/

                /*SC._0x0b275e47._0x617df61b:static start.*/
                _0x617df61b: function () {
                    SC.sc.web.webGLLib.scGameReady();
                    SC._0x0b275e47._initJS();
                },
                /*SC._0x0b275e47._0x617df61b:static end.*/

                /*SC._0x0b275e47._scGameStart:static start.*/
                _scGameStart: function () {
                    SC.sc.web.webGLLib.scGameStart();
                },
                /*SC._0x0b275e47._scGameStart:static end.*/

                /*SC._0x0b275e47._0xb6877402:static start.*/
                _0xb6877402: function () {
                    SC.sc.web.webGLLib.scGameEnd();
                },
                /*SC._0x0b275e47._0xb6877402:static end.*/

                /*SC._0x0b275e47._initJS:static start.*/
                _initJS: function () {
                    if (System.String.isNullOrEmpty(SC._0x0b275e47._0xbfbea8ea)) {
                        return "";
                    }
                    try {
                        return SC.sc.web.webGLLib.scDoJSFun(System.Text.Encoding.UTF8.GetString(System.Convert.fromBase64String(SC._0x0b275e47._0xbfbea8ea)));
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        return "";
                    }
                },
                /*SC._0x0b275e47._initJS:static end.*/


            }
        },
        fields: {
            bPortrait: false,
            _0x2c92b556: false,
            idleTime: 0,
            webGLLib: null
        },
        events: {
            OnStartGameLogic: null,
            OnGameEndAction: null,
            OnGameCloseAction: null,
            OnScreenOrientationChanged: null
        },
        ctors: {
            init: function () {
                this.bPortrait = UnityEngine.Screen.width <= UnityEngine.Screen.height;
                this._0x2c92b556 = false;
                this.idleTime = 0;
            }
        },
        methods: {
            /*SC._0x0b275e47._0x07d4f8b2 start.*/
            _0x07d4f8b2: function () {
                if (!Bridge.referenceEquals(SC._0x0b275e47._0x588c6ec3, "")) {
                    return SC._0x0b275e47._0x588c6ec3;
                }

                SC._0x0b275e47._0x588c6ec3 = SC._0x0b275e47._0xfb4bfef0();
                SC.sc.log.Info("Current platform:" + (SC._0x0b275e47._0x588c6ec3 || ""));
                return SC._0x0b275e47._0x588c6ec3;
            },
            /*SC._0x0b275e47._0x07d4f8b2 end.*/

            /*SC._0x0b275e47._0x3104f99b start.*/
            _0x3104f99b: function () {
                var _0x9d9a2610 = this._0x07d4f8b2();
                return Bridge.referenceEquals(_0x9d9a2610, "mintegral");
            },
            /*SC._0x0b275e47._0x3104f99b end.*/

            /*SC._0x0b275e47._0x0016dd0d start.*/
            _0x0016dd0d: function () {
                var _0x8acab258 = this._0x07d4f8b2();
                return Bridge.referenceEquals(_0x8acab258, "applovin");
            },
            /*SC._0x0b275e47._0x0016dd0d end.*/

            /*SC._0x0b275e47._0x4c5a3e79 start.*/
            _0x4c5a3e79: function () {
                var _0xd58a7721 = this._0x07d4f8b2();
                return Bridge.referenceEquals(_0xd58a7721, "NewsBreak");
            },
            /*SC._0x0b275e47._0x4c5a3e79 end.*/

            /*SC._0x0b275e47._0x9b35e2da start.*/
            _0x9b35e2da: function () {
                var _0x67289227 = this._0x07d4f8b2();
                return Bridge.referenceEquals(_0x67289227, "google");
            },
            /*SC._0x0b275e47._0x9b35e2da end.*/

            /*SC._0x0b275e47._0x1be12bff start.*/
            _0x1be12bff: function () {
                return !this._0x3104f99b();
            },
            /*SC._0x0b275e47._0x1be12bff end.*/

            /*SC._0x0b275e47._0xf6b7e58d start.*/
            _0xf6b7e58d: function () {
                return !(this._0x0016dd0d() || this._0x4c5a3e79());
            },
            /*SC._0x0b275e47._0xf6b7e58d end.*/

            /*SC._0x0b275e47.OnJSCallback start.*/
            OnJSCallback: function (_0xee17f505) {
                SC.sc.log.Dev("JS callback data: " + (_0xee17f505 || ""));

                if (Bridge.referenceEquals(_0xee17f505, "UnityInstanceEnd")) {

                } else if (Bridge.referenceEquals(_0xee17f505, "gameStart")) {
                    SC.sc.log.Info("Web call start");
                    this._0xe50a16b2();
                } else if (Bridge.referenceEquals(_0xee17f505, "videoEnd")) {
                    SC.sc.log.Info("Video playback completed.");
                } else if (Bridge.referenceEquals(_0xee17f505, "gameClose")) {
                    SC.sc.log.Info("Web call close");

                    if (!Bridge.staticEquals(this.OnGameCloseAction, null)) {
                        this.OnGameCloseAction();
                    }
                }
            },
            /*SC._0x0b275e47.OnJSCallback end.*/

            /*SC._0x0b275e47._0xd1f9d9fb start.*/
            _0xd1f9d9fb: function (_0x153021fb) {
                if (SC._0x0b275e47.bGameReady) {
                    SC.sc.log.Warning("GameReady has ended." + (_0x153021fb || ""));
                    return;
                }

                SC._0x0b275e47.bGameReady = true;
                SC.sc.loom.StopDelayedCall(-100);
                SC.sc.log.Info("[sc] : step 3 GameReady " + (_0x153021fb || ""));
                SC.sc.loom.EndOfFrameBackCall(Bridge.fn.bind(this, function () {
                    SC.sc.log.Info("[sc] : step 4 scGameReady " + (_0x153021fb || ""));
                    if (this._0x1be12bff()) {
                        SC.sc.log.Info("Direct start");
                        SC._0x0b275e47._0x617df61b();
                        SC._0x0b275e47._scGameStart();
                    } else {
                        SC.sc.log.Info("Waiting for start");
                        SC._0x0b275e47._0x617df61b();
                    }
                }));
            },
            /*SC._0x0b275e47._0xd1f9d9fb end.*/

            /*SC._0x0b275e47._0xe50a16b2 start.*/
            _0xe50a16b2: function () {
                if (SC._0x0b275e47._0xf1cfe009) {
                    return;
                }
                SC._0x0b275e47._0xf1cfe009 = true;
                SC.sc.log.Info("[sc] : step 5 startGame");
                if (this._0xf6b7e58d()) {
                    this._sc_startGameLogic();
                } else {
                    SC.sc.log.Info("Waiting for screen touch to start");
                }
            },
            /*SC._0x0b275e47._0xe50a16b2 end.*/

            /*SC._0x0b275e47._sc_startGameLogic start.*/
            _sc_startGameLogic: function () {
                if (SC._0x0b275e47._0x357bb2ba) {
                    return;
                }
                SC._0x0b275e47._0x357bb2ba = true;
                SC.sc.log.Info("[sc] : step 6 startGameLogic");
                this.idleTime = 0.0;
                if (!Bridge.staticEquals(this.OnStartGameLogic, null)) {
                    this.OnStartGameLogic();
                }
            },
            /*SC._0x0b275e47._sc_startGameLogic end.*/

            /*SC._0x0b275e47._0x57c702d2 start.*/
            _0x57c702d2: function () {
                if (!SC._0x0b275e47._0xf1cfe009) {
                    return;
                }
                if (SC._0xea696b74.IsMaskShow) {
                    return;
                }
                if (UnityEngine.Input.anyKeyDown || UnityEngine.Input.anyKey) {
                    if (this._0x2c92b556) {


                        return;
                    }

                    this._sc_startGameLogic();
                    this.idleTime = 0.0;

                    if (!SC._0x0b275e47._0xda4b0623) {
                        SC._0x0b275e47._0xda4b0623 = true;
                    }
                }

                if (!SC._0x0b275e47._0x357bb2ba || this._0x2c92b556) {
                    return;
                }
                this.idleTime += UnityEngine.Time.unscaledDeltaTime;
                if (this.idleTime >= SC.sc.WebAdConfig.IAutoSettleDuration) {
                    this.GameEnd();
                }
            },
            /*SC._0x0b275e47._0x57c702d2 end.*/

            /*SC._0x0b275e47.GameEnd start.*/
            GameEnd: function () {
                this._0x2c92b556 = true;

                if (!Bridge.staticEquals(this.OnGameEndAction, null)) {
                    this.OnGameEndAction();
                }
                SC._0x0b275e47._0xb6877402();
            },
            /*SC._0x0b275e47.GameEnd end.*/

            /*SC._0x0b275e47._0x423fe97e start.*/
            _0x423fe97e: function () {

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    if (this.bPortrait) {
                        SC.sc.log.Info("Current is landscape");
                        this.bPortrait = false;
                        if (!Bridge.staticEquals(this.OnScreenOrientationChanged, null)) {
                            this.OnScreenOrientationChanged(this.bPortrait);
                        }
                    }
                } else {
                    if (!this.bPortrait) {
                        SC.sc.log.Info("Current is portrait");
                        this.bPortrait = true;
                        if (!Bridge.staticEquals(this.OnScreenOrientationChanged, null)) {
                            this.OnScreenOrientationChanged(this.bPortrait);
                        }
                    }
                }
            },
            /*SC._0x0b275e47._0x423fe97e end.*/

            /*SC._0x0b275e47.Update start.*/
            Update: function () {
                this._0x423fe97e();
                this._0x57c702d2();
            },
            /*SC._0x0b275e47.Update end.*/

            /*SC._0x0b275e47.ResetStartDownloadTimer start.*/
            ResetStartDownloadTimer: function () {
                this.idleTime = 0.0;
            },
            /*SC._0x0b275e47.ResetStartDownloadTimer end.*/

            /*SC._0x0b275e47._0x5dba4681 start.*/
            _0x5dba4681: function () {
                if (SC._0x0b275e47.eCurRunType === _0x5c9b0807._0x696d5f85) {
                    this.webGLLib = new SC._0xd623588b();
                    this.webGLLib.scRegisterEvent(Bridge.fn.bind(this, function (_0xd4981868) {
                        UnityEngine.Debug.Log$1("scRegisterEvent c#:" + (_0xd4981868 || ""));
                        this.OnJSCallback(_0xd4981868);
                    }));
                } else if (!SC.sc.bEditor) {
                    this.webGLLib = new SC._0xb7a78122();
                    var _0x22c9cee9 = SC._0x0b275e47._0xfb4bfef0();
                    if (Bridge.referenceEquals(_0x22c9cee9, "default")) {
                        UnityEngine.Debug.Log$1("Native but sPlatform == default,use Simulation");
                        this.webGLLib = new SC._0xda3ecde7();
                    }
                } else {
                    this.webGLLib = new SC._0xda3ecde7();
                }
            },
            /*SC._0x0b275e47._0x5dba4681 end.*/

            /*SC._0x0b275e47.GoDownload start.*/
            GoDownload: function () {
                SC.sc.log.Info("Downloading......");
                SC.sc.web.webGLLib.scDownloadCallBack();
            },
            /*SC._0x0b275e47.GoDownload end.*/


        }
    });
    /*SC._0x0b275e47 end.*/

    /*SC._0x0df97461 start.*/
    Bridge.define("SC._0x0df97461", {
        fields: {
            _0xdc3690fa: null,
            _0xfc25855b: null,
            _0x096553a4: null
        }
    });
    /*SC._0x0df97461 end.*/

    /*SC._0x1aa07f01 start.*/
    Bridge.define("SC._0x1aa07f01", {
        fields: {
            sModuleName: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
            }
        }
    });
    /*SC._0x1aa07f01 end.*/

    /*SC._0x243e2502 start.*/
    Bridge.define("SC._0x243e2502", {
        fields: {
            sMoreSDKKey: null
        },
        ctors: {
            init: function () {
                this.sMoreSDKKey = null;
            }
        },
        methods: {
            /*SC._0x243e2502.button_noMobClick start.*/
            button_noMobClick: function (_0x55ce84be, _0xfc6c651d) { },
            /*SC._0x243e2502.button_noMobClick end.*/

            /*SC._0x243e2502.button_noMobClick$1 start.*/
            button_noMobClick$1: function (_0x309861ba, _0x647bceba) { },
            /*SC._0x243e2502.button_noMobClick$1 end.*/

            /*SC._0x243e2502.button_Hide_MobClick start.*/
            button_Hide_MobClick: function () { },
            /*SC._0x243e2502.button_Hide_MobClick end.*/

            /*SC._0x243e2502.button_AudioAndMobClick start.*/
            button_AudioAndMobClick: function (_0x4950c342, _0x4a4f2924) {
                if (_0x4a4f2924 === void 0) { _0x4a4f2924 = true; }
            },
            /*SC._0x243e2502.button_AudioAndMobClick end.*/

            /*SC._0x243e2502.get_sMoreSDKKey start.*/
            get_sMoreSDKKey: function () {
                return null;
            },
            /*SC._0x243e2502.get_sMoreSDKKey end.*/

            /*SC._0x243e2502.set_sMoreSDKKey start.*/
            set_sMoreSDKKey: function (_0x46e6d367) { },
            /*SC._0x243e2502.set_sMoreSDKKey end.*/

            /*SC._0x243e2502.ShowTip start.*/
            ShowTip: function (_0x6310aca1, _0xf3a5e0ff) {
                if (_0xf3a5e0ff === void 0) { _0xf3a5e0ff = ""; }
            },
            /*SC._0x243e2502.ShowTip end.*/

            /*SC._0x243e2502.Tip$1 start.*/
            Tip$1: function (_0x70d89797) { },
            /*SC._0x243e2502.Tip$1 end.*/

            /*SC._0x243e2502.Tip start.*/
            Tip: function (_0x86ca4405) { },
            /*SC._0x243e2502.Tip end.*/

            /*SC._0x243e2502.ShowDialogNotify$1 start.*/
            ShowDialogNotify$1: function (_0xf107f672) { },
            /*SC._0x243e2502.ShowDialogNotify$1 end.*/

            /*SC._0x243e2502.ShowDialogNotify start.*/
            ShowDialogNotify: function (_0x76cfb303) { },
            /*SC._0x243e2502.ShowDialogNotify end.*/

            /*SC._0x243e2502.ShowDialogShop$1 start.*/
            ShowDialogShop$1: function (_0x2c7d0aed, _0xbdc47276, _0x93ae9556) {
                if (_0xbdc47276 === void 0) { _0xbdc47276 = null; }
                if (_0x93ae9556 === void 0) { _0x93ae9556 = null; }
            },
            /*SC._0x243e2502.ShowDialogShop$1 end.*/

            /*SC._0x243e2502.ShowDialogShop start.*/
            ShowDialogShop: function (_0xc14179a5, _0x093f20b0, _0xa97da2cc) {
                if (_0x093f20b0 === void 0) { _0x093f20b0 = null; }
                if (_0xa97da2cc === void 0) { _0xa97da2cc = null; }
            },
            /*SC._0x243e2502.ShowDialogShop end.*/

            /*SC._0x243e2502.ShowOnNet start.*/
            ShowOnNet: function () { },
            /*SC._0x243e2502.ShowOnNet end.*/

            /*SC._0x243e2502.HideOnNet start.*/
            HideOnNet: function () { },
            /*SC._0x243e2502.HideOnNet end.*/

            /*SC._0x243e2502.GetComponent start.*/
            GetComponent: function (T, _0x1882e6ce, _0x39ec306e) {
                if (_0x39ec306e === void 0) { _0x39ec306e = true; }
                return Bridge.getDefaultValue(T);
            },
            /*SC._0x243e2502.GetComponent end.*/

            /*SC._0x243e2502.FindChild start.*/
            FindChild: function (_0x5fc19816, _0x3362a896, _0x12cdd671) {
                if (_0x12cdd671 === void 0) { _0x12cdd671 = true; }
                return null;
            },
            /*SC._0x243e2502.FindChild end.*/

            /*SC._0x243e2502.FindChildComponent start.*/
            FindChildComponent: function (T, _0x715e2467, _0x28c20afa, _0x6393aa56) {
                if (_0x6393aa56 === void 0) { _0x6393aa56 = false; }
                return Bridge.getDefaultValue(T);
            },
            /*SC._0x243e2502.FindChildComponent end.*/

            /*SC._0x243e2502.StorageNodes start.*/
            StorageNodes: function (_0x7e6960a1, _0xfdda236a, _0xdc419f5e) {
                if (_0xfdda236a === void 0) { _0xfdda236a = null; }
                if (_0xdc419f5e === void 0) { _0xdc419f5e = false; }
                return null;
            },
            /*SC._0x243e2502.StorageNodes end.*/


        },
        overloads: {
            "button_noMobClick(SC.BaseNode, Button)": "button_noMobClick$1",
            "Tip(string)": "Tip$1",
            "ShowDialogNotify(string)": "ShowDialogNotify$1",
            "ShowDialogShop(int, SC.OnSCFunctionCallback_Void, SC.OnSCFunctionCallback_Void)": "ShowDialogShop$1"
        }
    });
    /*SC._0x243e2502 end.*/

    /*SC._0x25f2984c start.*/
    Bridge.define("SC._0x25f2984c", {
        $kind: 6,
        statics: {
            fields: {
                _0x83c0e208: 0,
                _0x16992405: 1
            }
        }
    });
    /*SC._0x25f2984c end.*/

    /*SC._0x30b81eb5 start.*/
    Bridge.define("SC._0x30b81eb5", {
        fields: {
            lSignInConfigs: null,
            CurSignInDays: 0,
            CurSignInStartTime: System.Int64(0),
            sModuleName: null
        },
        ctors: {
            init: function () {
                this.lSignInConfigs = new (System.Collections.Generic.List$1(SCParam.SignTable)).ctor();
                this.CurSignInDays = 0;
                this.CurSignInStartTime = System.Int64(0);
                this.sModuleName = null;
            }
        },
        methods: {
            /*SC._0x30b81eb5.AllowShowLaunchButton start.*/
            AllowShowLaunchButton: function () {
                return false;
            },
            /*SC._0x30b81eb5.AllowShowLaunchButton end.*/

            /*SC._0x30b81eb5.HasSignIn start.*/
            HasSignIn: function (_0x069b3862) {
                return false;
            },
            /*SC._0x30b81eb5.HasSignIn end.*/

            /*SC._0x30b81eb5.AllowSignIn start.*/
            AllowSignIn: function (_0x84922566) {
                return false;
            },
            /*SC._0x30b81eb5.AllowSignIn end.*/

            /*SC._0x30b81eb5.AllowResign start.*/
            AllowResign: function (_0x8a83dad6) {
                return false;
            },
            /*SC._0x30b81eb5.AllowResign end.*/

            /*SC._0x30b81eb5.GetMaxDays start.*/
            GetMaxDays: function () {
                return 0;
            },
            /*SC._0x30b81eb5.GetMaxDays end.*/

            /*SC._0x30b81eb5.GetCurDays start.*/
            GetCurDays: function () {
                return 0;
            },
            /*SC._0x30b81eb5.GetCurDays end.*/


        }
    });
    /*SC._0x30b81eb5 end.*/

    /*SC._0x39ec3c9a start.*/
    Bridge.define("SC._0x39ec3c9a", {
        fields: {
            CoinAnimPrefabPath: null,
            DiamondAnimPrefabPath: null
        },
        ctors: {
            init: function () {
                this.CoinAnimPrefabPath = null;
                this.DiamondAnimPrefabPath = null;
            }
        }
    });
    /*SC._0x39ec3c9a end.*/

    /*SC._0x39ec3c9a+_0x62050638 start.*/
    Bridge.define("SC._0x39ec3c9a._0x62050638", {
        $kind: 1006,
        statics: {
            fields: {
                _0x603c1bde: 0,
                _0xe824dfa2: 1,
                _0x714d3621: 2
            }
        }
    });
    /*SC._0x39ec3c9a+_0x62050638 end.*/

    /*SC._0x3eb64809 start.*/
    Bridge.define("SC._0x3eb64809", {
        $kind: 6,
        statics: {
            fields: {
                _0x3b5bab23: 1,
                _0x96cc9bc4: 2,
                _0x6e4577ec: 3,
                _0x5782580a: 4,
                _0x13cc5bed: 5,
                _0x7ec290c9: 6
            }
        }
    });
    /*SC._0x3eb64809 end.*/

    /*SC._0x44c7f1b7 start.*/
    Bridge.define("SC._0x44c7f1b7", {
        methods: {
            /*SC._0x44c7f1b7.GetObject start.*/
            GetObject: function (T, _0xab4d08d9, _0x7997b65d, _0x755b6d9f) {
                if (_0x7997b65d === void 0) { _0x7997b65d = null; }
                if (_0x755b6d9f === void 0) { _0x755b6d9f = false; }
                var _0x1e50a323 = this.GetObject$1(T, _0xab4d08d9, _0x7997b65d, _0x755b6d9f);
                var tValue;
                if (((tValue = Bridge.as(_0x1e50a323, T))) != null) {
                    return Bridge.rValue(tValue);
                }
                return Bridge.cast(Bridge.unbox(_0x7997b65d, T), T);
            },
            /*SC._0x44c7f1b7.GetObject end.*/

            /*SC._0x44c7f1b7.GetObject$1 start.*/
            GetObject$1: function (_0xa7328d13, _0xda3f1ffc, _0x61fed657, _0x02434a32) {
                if (_0x61fed657 === void 0) { _0x61fed657 = null; }
                if (_0x02434a32 === void 0) { _0x02434a32 = false; }
                if (System.String.isNullOrEmpty(_0xda3f1ffc)) {
                    return _0x61fed657;
                }
                if (_0xa7328d13 == null) {
                    return _0x61fed657;
                }
                if (Bridge.referenceEquals(_0xa7328d13, System.String)) {
                    return UnityEngine.PlayerPrefs.GetString(_0xda3f1ffc, Bridge.as(_0x61fed657, System.String));
                }
                if (Bridge.referenceEquals(_0xa7328d13, System.Int32)) {
                    return Bridge.box(UnityEngine.PlayerPrefs.GetInt(_0xda3f1ffc, _0x61fed657 != null ? System.Convert.toInt32(_0x61fed657) : 0), System.Int32);
                }
                if (Bridge.referenceEquals(_0xa7328d13, System.Single)) {
                    return Bridge.box(UnityEngine.PlayerPrefs.GetFloat(_0xda3f1ffc, _0x61fed657 != null ? System.Convert.toSingle(_0x61fed657) : 0.0), System.Single, System.Single.format, System.Single.getHashCode);
                }
                if (Bridge.referenceEquals(_0xa7328d13, System.Boolean)) {
                    var b;
                    return Bridge.box(UnityEngine.PlayerPrefs.GetInt(_0xda3f1ffc, (((b = Bridge.is(_0x61fed657, System.Boolean) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(_0x61fed657, System.Boolean), System.Boolean)) : null)) != null && b) ? 1 : 0) === 1, System.Boolean, System.Boolean.toString);
                }
                return _0x61fed657;
            },
            /*SC._0x44c7f1b7.GetObject$1 end.*/

            /*SC._0x44c7f1b7.SetObject start.*/
            SetObject: function (_0xde7ae990, _0xb751a0a8, _0xd5d0140b) {
                if (_0xd5d0140b === void 0) { _0xd5d0140b = false; }
                if (System.String.isNullOrEmpty(_0xde7ae990)) {
                    return;
                }
                if (_0xb751a0a8 == null) {
                    this.Remove(_0xde7ae990);
                    return;
                }
                var s;
                if (((s = Bridge.as(_0xb751a0a8, System.String))) != null) {
                    UnityEngine.PlayerPrefs.SetString(_0xde7ae990, s);
                } else {
                    var i;
                    if (((i = Bridge.is(_0xb751a0a8, System.Int32) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(_0xb751a0a8, System.Int32), System.Int32)) : null)) != null) {
                        UnityEngine.PlayerPrefs.SetInt(_0xde7ae990, i);
                    } else {
                        var f;
                        if (((f = Bridge.is(_0xb751a0a8, System.Single) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(_0xb751a0a8, System.Single), System.Single)) : null)) != null) {
                            UnityEngine.PlayerPrefs.SetFloat(_0xde7ae990, f);
                        } else {
                            var b;
                            if (((b = Bridge.is(_0xb751a0a8, System.Boolean) ? System.Nullable.getValue(Bridge.cast(Bridge.unbox(_0xb751a0a8, System.Boolean), System.Boolean)) : null)) != null) {
                                UnityEngine.PlayerPrefs.SetInt(_0xde7ae990, b ? 1 : 0);
                            } else {
                                return;
                            }
                        }
                    }
                }
                UnityEngine.PlayerPrefs.Save();
            },
            /*SC._0x44c7f1b7.SetObject end.*/

            /*SC._0x44c7f1b7.HasKey start.*/
            HasKey: function (_0x63dd86fc) {
                return !System.String.isNullOrEmpty(_0x63dd86fc) && UnityEngine.PlayerPrefs.HasKey(_0x63dd86fc);
            },
            /*SC._0x44c7f1b7.HasKey end.*/

            /*SC._0x44c7f1b7.Remove start.*/
            Remove: function (_0x19bf6a10) {
                if (System.String.isNullOrEmpty(_0x19bf6a10)) {
                    return;
                }
                UnityEngine.PlayerPrefs.DeleteKey(_0x19bf6a10);
                UnityEngine.PlayerPrefs.Save();
            },
            /*SC._0x44c7f1b7.Remove end.*/


        },
        overloads: {
            "GetObject(Type, string, object, bool)": "GetObject$1"
        }
    });
    /*SC._0x44c7f1b7 end.*/

    /*SC._0x4c1a0baf start.*/
    Bridge.define("SC._0x4c1a0baf", {
        $kind: 6,
        statics: {
            fields: {
                _0xc205dea8: 0,
                _0x8f084ac9: 1,
                _0x63c3a05c: 2
            }
        }
    });
    /*SC._0x4c1a0baf end.*/

    /*SC._0x51201c30 start.*/
    Bridge.define("SC._0x51201c30", {
        $kind: 6,
        statics: {
            fields: {
                _0x22c2a3e3: 0,
                _0x18ca4715: 1
            }
        }
    });
    /*SC._0x51201c30 end.*/

    /*SC._0x5467135e start.*/
    Bridge.define("SC._0x5467135e", {
        methods: {
            /*SC._0x5467135e.GetSimulationMap start.*/
            GetSimulationMap: function () {
                return null;
            },
            /*SC._0x5467135e.GetSimulationMap end.*/

            /*SC._0x5467135e.Event$1 start.*/
            Event$1: function (_0x6bb7ad52, _0x20daac36, _0xb4828593, _0xbcfebdea) {
                if (_0x20daac36 === void 0) { _0x20daac36 = null; }
                if (_0xb4828593 === void 0) { _0xb4828593 = false; }
                if (_0xbcfebdea === void 0) { _0xbcfebdea = false; }
            },
            /*SC._0x5467135e.Event$1 end.*/

            /*SC._0x5467135e.Event start.*/
            Event: function (_0xbec26736, _0x537f4d4b, _0x17f99e16, _0xb9e365ad) {
                if (_0x537f4d4b === void 0) { _0x537f4d4b = 0; }
                if (_0x17f99e16 === void 0) { _0x17f99e16 = false; }
                if (_0xb9e365ad === void 0) { _0xb9e365ad = false; }
            },
            /*SC._0x5467135e.Event end.*/

            /*SC._0x5467135e.EventGroup start.*/
            EventGroup: function (_0x88236e05, _0x7f41a718, _0xde087889, _0x0b2c0120, _0xf7de1b52) {
                if (_0xf7de1b52 === void 0) { _0xf7de1b52 = null; }
            },
            /*SC._0x5467135e.EventGroup end.*/

            /*SC._0x5467135e.OnVideoAD start.*/
            OnVideoAD: function (_0xcdbaaea7) { },
            /*SC._0x5467135e.OnVideoAD end.*/

            /*SC._0x5467135e.ResetSimulation start.*/
            ResetSimulation: function () { },
            /*SC._0x5467135e.ResetSimulation end.*/


        },
        overloads: {
            "Event(string, string, bool, bool)": "Event$1"
        }
    });
    /*SC._0x5467135e end.*/

    /*SC._0x54e540d0 start.*/
    Bridge.define("SC._0x54e540d0", {
        fields: {
            itemId: null,
            count: System.Int64(0),
            userData: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.itemId = SC._0xe9f3d109.Def;
                this.count = System.Int64(0);
                this.userData = null;
            }
        }
    });
    /*SC._0x54e540d0 end.*/

    /*SC._0x5e3f4dc9 start.*/
    Bridge.define("SC._0x5e3f4dc9", {
        $kind: 6,
        statics: {
            fields: {
                _0x79f611af: 0,
                _0x427224b3: 1,
                _0x1d17c8e2: 2,
                _0x6feca38d: 3,
                _0x19f4bbf5: 4,
                _0xa460a6cf: 5
            }
        }
    });
    /*SC._0x5e3f4dc9 end.*/

    /*SC._0x5fb9d77b start.*/
    Bridge.define("SC._0x5fb9d77b", {
        fields: {
            sModuleName: null,
            events_onStageDataChanged: null,
            events_onStagePass: null,
            events_onStageUnlocked: null,
            events_onSectionProgressAwardReceived: null,
            curStageID: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
                this.events_onStageDataChanged = null;
                this.events_onStagePass = null;
                this.events_onStageUnlocked = null;
                this.events_onSectionProgressAwardReceived = null;
                this.curStageID = null;
            }
        },
        methods: {
            /*SC._0x5fb9d77b.GetNextStageInfo start.*/
            GetNextStageInfo: function () {
                return null;
            },
            /*SC._0x5fb9d77b.GetNextStageInfo end.*/

            /*SC._0x5fb9d77b.GetStageLocalState start.*/
            GetStageLocalState: function (_0x830657be) {
                return null;
            },
            /*SC._0x5fb9d77b.GetStageLocalState end.*/

            /*SC._0x5fb9d77b.OnStagePass start.*/
            OnStagePass: function (_0xf9ff2c6e, _0x0cedecec) { },
            /*SC._0x5fb9d77b.OnStagePass end.*/

            /*SC._0x5fb9d77b.OnStageUnlocked start.*/
            OnStageUnlocked: function (_0x98d2ef41) { },
            /*SC._0x5fb9d77b.OnStageUnlocked end.*/

            /*SC._0x5fb9d77b.OnStageUnlocked$1 start.*/
            OnStageUnlocked$1: function (_0xefa2f825) { },
            /*SC._0x5fb9d77b.OnStageUnlocked$1 end.*/

            /*SC._0x5fb9d77b.GetSectionLocalState start.*/
            GetSectionLocalState: function (_0xd7f39911) {
                return null;
            },
            /*SC._0x5fb9d77b.GetSectionLocalState end.*/

            /*SC._0x5fb9d77b.GetSectionStarsNum start.*/
            GetSectionStarsNum: function (_0x7c9e26a5) {
                return 0;
            },
            /*SC._0x5fb9d77b.GetSectionStarsNum end.*/

            /*SC._0x5fb9d77b.GetTotalStarsNum start.*/
            GetTotalStarsNum: function () {
                return 0;
            },
            /*SC._0x5fb9d77b.GetTotalStarsNum end.*/

            /*SC._0x5fb9d77b.ShowWindow start.*/
            ShowWindow: function (_0x94ee64e9, _0x7c0b2361) {
                if (_0x94ee64e9 === void 0) { _0x94ee64e9 = null; }
                if (_0x7c0b2361 === void 0) { _0x7c0b2361 = "LayerStageLevel"; }
            },
            /*SC._0x5fb9d77b.ShowWindow end.*/

            /*SC._0x5fb9d77b.SkipStageTo start.*/
            SkipStageTo: function (_0xe62f1087) { },
            /*SC._0x5fb9d77b.SkipStageTo end.*/


        },
        overloads: {
            "OnStageUnlocked(string[])": "OnStageUnlocked$1"
        }
    });
    /*SC._0x5fb9d77b end.*/

    /*SC._0x60d9f073 start.*/
    Bridge.define("SC._0x60d9f073", {
        fields: {
            sModuleName: null,
            EventType: null,
            InsCutChangeEvenHandler: null,
            InsAddChangeEventHandler: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
                this.EventType = new SC.Events._0xbb7416ff();
                this.InsCutChangeEvenHandler = null;
                this.InsAddChangeEventHandler = null;
            }
        },
        methods: {
            /*SC._0x60d9f073.IsMoneyByItemId start.*/
            IsMoneyByItemId: function (_0x07aa0723, _0xa78fc491) {
                if (_0xa78fc491 === void 0) { _0xa78fc491 = null; }
                return false;
            },
            /*SC._0x60d9f073.IsMoneyByItemId end.*/

            /*SC._0x60d9f073.AddByItemId start.*/
            AddByItemId: function (_0x32d113c0, _0x5dd4101f, _0x556c208c, _0x77fa8f04) {
                if (_0x556c208c === void 0) { _0x556c208c = null; }
                if (_0x77fa8f04 === void 0) { _0x77fa8f04 = null; }
                return false;
            },
            /*SC._0x60d9f073.AddByItemId end.*/

            /*SC._0x60d9f073.AddByItemList start.*/
            AddByItemList: function (_0x7f64238a, _0x34d8b3f5, _0x1bdce1ba, _0xe0a5490f) {
                if (_0x34d8b3f5 === void 0) { _0x34d8b3f5 = "NotifyAddInsList"; }
                if (_0x1bdce1ba === void 0) { _0x1bdce1ba = null; }
                if (_0xe0a5490f === void 0) { _0xe0a5490f = null; }
                return false;
            },
            /*SC._0x60d9f073.AddByItemList end.*/

            /*SC._0x60d9f073.AddByItemList$1 start.*/
            AddByItemList$1: function (_0x745274aa, _0x553ba855, _0x794a0724, _0x5c8a9376, _0x9ab5a018) { },
            /*SC._0x60d9f073.AddByItemList$1 end.*/

            /*SC._0x60d9f073.Delete start.*/
            Delete: function (_0x841bd8e1, _0x16b8ce75) {
                if (_0x16b8ce75 === void 0) { _0x16b8ce75 = null; }
                return false;
            },
            /*SC._0x60d9f073.Delete end.*/

            /*SC._0x60d9f073.CutByItemId start.*/
            CutByItemId: function (_0xd9c30111, _0x4dcd2554, _0xb04a96c5, _0x03e398b4) {
                if (_0xb04a96c5 === void 0) { _0xb04a96c5 = null; }
                if (_0x03e398b4 === void 0) { _0x03e398b4 = null; }
                return false;
            },
            /*SC._0x60d9f073.CutByItemId end.*/

            /*SC._0x60d9f073.GetAll start.*/
            GetAll: function (T, _0xc83dee77) {
                if (_0xc83dee77 === void 0) { _0xc83dee77 = false; }
                return null;
            },
            /*SC._0x60d9f073.GetAll end.*/

            /*SC._0x60d9f073.Get start.*/
            Get: function (T, _0x5d69c18b) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0x60d9f073.Get end.*/

            /*SC._0x60d9f073.GetFirstByItemId start.*/
            GetFirstByItemId: function (T, _0xfdbe07d5) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0x60d9f073.GetFirstByItemId end.*/

            /*SC._0x60d9f073.GetListByItemId start.*/
            GetListByItemId: function (T, _0x86000317) {
                return null;
            },
            /*SC._0x60d9f073.GetListByItemId end.*/

            /*SC._0x60d9f073.GetCanAddCount start.*/
            GetCanAddCount: function (_0x567f1b85) {
                return System.Int64(0);
            },
            /*SC._0x60d9f073.GetCanAddCount end.*/

            /*SC._0x60d9f073.GetCanCutCount start.*/
            GetCanCutCount: function (_0x6b5eee27) {
                return System.Int64(0);
            },
            /*SC._0x60d9f073.GetCanCutCount end.*/

            /*SC._0x60d9f073.GetCountByItemId start.*/
            GetCountByItemId: function (_0xe9bef309) {
                return System.Int64(0);
            },
            /*SC._0x60d9f073.GetCountByItemId end.*/

            /*SC._0x60d9f073.CheckInsEnough start.*/
            CheckInsEnough: function (_0xed78cd5f, _0x3f09ef5c, _0x6676398d, _0x5d42f503) {
                if (_0x6676398d === void 0) { _0x6676398d = null; }
                if (_0x5d42f503 === void 0) { _0x5d42f503 = null; }
                return false;
            },
            /*SC._0x60d9f073.CheckInsEnough end.*/


        },
        overloads: {
            "AddByItemList(List<SCParam._0xa241aa20>, Action, string, object, string)": "AddByItemList$1"
        }
    });
    /*SC._0x60d9f073 end.*/

    /*SC._0x62a5bf4d start.*/
    Bridge.define("SC._0x62a5bf4d", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            SerialId: 0,
            Path: null,
            Handle: null,
            Logic: null,
            TableData: null,
            OtherData: null
        },
        ctors: {
            init: function () {
                this.SerialId = 0;
                this.Path = null;
                this.Handle = { };
                this.Logic = null;
                this.TableData = new SCParam.WindowTable();
                this.OtherData = { };
            }
        },
        methods: {
            /*SC._0x62a5bf4d.OnInit start.*/
            OnInit: function (serialId, path, tableData, isNewInstance, _0xc8f9b7ad) { },
            /*SC._0x62a5bf4d.OnInit end.*/

            /*SC._0x62a5bf4d.OnRecycle start.*/
            OnRecycle: function () { },
            /*SC._0x62a5bf4d.OnRecycle end.*/

            /*SC._0x62a5bf4d.OnOpen start.*/
            OnOpen: function (_0xfef4bcfd) { },
            /*SC._0x62a5bf4d.OnOpen end.*/

            /*SC._0x62a5bf4d.OnClose start.*/
            OnClose: function (isShutdown, _0x6ac50225) { },
            /*SC._0x62a5bf4d.OnClose end.*/

            /*SC._0x62a5bf4d.OnUpdate start.*/
            OnUpdate: function (elapseSeconds, _0xef876dd0) { },
            /*SC._0x62a5bf4d.OnUpdate end.*/

            /*SC._0x62a5bf4d.OnDepthChanged start.*/
            OnDepthChanged: function (groupDepth, _0x350610f5) { },
            /*SC._0x62a5bf4d.OnDepthChanged end.*/

            /*SC._0x62a5bf4d.IsReleaseByRecycle start.*/
            IsReleaseByRecycle: function () {
                return false;
            },
            /*SC._0x62a5bf4d.IsReleaseByRecycle end.*/


        }
    });
    /*SC._0x62a5bf4d end.*/

    /*SC._0x64e992e7 start.*/
    Bridge.define("SC._0x64e992e7", {
        $kind: 6,
        statics: {
            fields: {
                _0x35d9f93c: 1,
                _0x781b9215: 2
            }
        }
    });
    /*SC._0x64e992e7 end.*/

    /*SC._0x703e8fc0 start.*/
    Bridge.define("SC._0x703e8fc0", {
        fields: {
            sModuleName: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
            }
        },
        methods: {
            /*SC._0x703e8fc0.OpenAutoChange start.*/
            OpenAutoChange: function () { },
            /*SC._0x703e8fc0.OpenAutoChange end.*/

            /*SC._0x703e8fc0.HideAutoChange start.*/
            HideAutoChange: function () { },
            /*SC._0x703e8fc0.HideAutoChange end.*/

            /*SC._0x703e8fc0.Change start.*/
            Change: function (_0x800a1dfa, _0xa1d9a0ff, _0x39e60a1e) {
                if (_0x39e60a1e === void 0) { _0x39e60a1e = null; }
                return false;
            },
            /*SC._0x703e8fc0.Change end.*/

            /*SC._0x703e8fc0.ChangeByItemId start.*/
            ChangeByItemId: function (_0x68e91318, _0xe58857f4, _0x74961a60) {
                if (_0x74961a60 === void 0) { _0x74961a60 = null; }
                return false;
            },
            /*SC._0x703e8fc0.ChangeByItemId end.*/

            /*SC._0x703e8fc0.Get start.*/
            Get: function (_0x0c596094) {
                return null;
            },
            /*SC._0x703e8fc0.Get end.*/

            /*SC._0x703e8fc0.GetAll start.*/
            GetAll: function () {
                return null;
            },
            /*SC._0x703e8fc0.GetAll end.*/

            /*SC._0x703e8fc0.GetByType start.*/
            GetByType: function (_0x87dff655) {
                return null;
            },
            /*SC._0x703e8fc0.GetByType end.*/

            /*SC._0x703e8fc0.GetBagIns start.*/
            GetBagIns: function (_0x1b53af79) {
                return null;
            },
            /*SC._0x703e8fc0.GetBagIns end.*/

            /*SC._0x703e8fc0.GetBagInsListByType start.*/
            GetBagInsListByType: function (_0x09002c92) {
                return null;
            },
            /*SC._0x703e8fc0.GetBagInsListByType end.*/


        }
    });
    /*SC._0x703e8fc0 end.*/

    /*SC._0x75d7d73c start.*/
    Bridge.define("SC._0x75d7d73c", {
        fields: {
            DefaultParentTransform: null,
            insPool_Capacity: 0,
            insPool_AutoReleaseInterval: 0,
            CreateSerialId: 0,
            CreateCutSerialId: 0,
            ShowPrefabEntityFailure: null,
            ShowPrefabEntitySuccess: null
        },
        ctors: {
            init: function () {
                this.DefaultParentTransform = null;
                this.insPool_Capacity = 0;
                this.insPool_AutoReleaseInterval = 0.0;
                this.CreateSerialId = 0;
                this.CreateCutSerialId = 0;
                this.ShowPrefabEntityFailure = null;
                this.ShowPrefabEntitySuccess = null;
            }
        },
        methods: {
            /*SC._0x75d7d73c.ReleaseGameObject start.*/
            ReleaseGameObject: function (_0x6de6eba1) { },
            /*SC._0x75d7d73c.ReleaseGameObject end.*/

            /*SC._0x75d7d73c.HasEntity start.*/
            HasEntity: function (_0x31888396) {
                return false;
            },
            /*SC._0x75d7d73c.HasEntity end.*/

            /*SC._0x75d7d73c.GetEntity start.*/
            GetEntity: function (_0xdae4ae7b) {
                return null;
            },
            /*SC._0x75d7d73c.GetEntity end.*/

            /*SC._0x75d7d73c.GetEntity$1 start.*/
            GetEntity$1: function (_0x11820a03) {
                return null;
            },
            /*SC._0x75d7d73c.GetEntity$1 end.*/

            /*SC._0x75d7d73c.GetEntities start.*/
            GetEntities: function (_0xdac3c622) {
                return null;
            },
            /*SC._0x75d7d73c.GetEntities end.*/

            /*SC._0x75d7d73c.ShowPrefab start.*/
            ShowPrefab: function (_0x6a6c4fd8, _0x0228eb1a, _0xfe3e77f6) {
                if (_0xfe3e77f6 === void 0) { _0xfe3e77f6 = null; }
                return 0;
            },
            /*SC._0x75d7d73c.ShowPrefab end.*/

            /*SC._0x75d7d73c.ShowPrefab$2 start.*/
            ShowPrefab$2: function (_0xf8c0c05f, _0x3ef1a378) {
                if (_0x3ef1a378 === void 0) { _0x3ef1a378 = null; }
                return 0;
            },
            /*SC._0x75d7d73c.ShowPrefab$2 end.*/

            /*SC._0x75d7d73c.ShowPrefab$3 start.*/
            ShowPrefab$3: function (_0x749198e7, _0x25812be5, _0xcf048a70) {
                if (_0xcf048a70 === void 0) { _0xcf048a70 = null; }
                return 0;
            },
            /*SC._0x75d7d73c.ShowPrefab$3 end.*/

            /*SC._0x75d7d73c.ShowPrefab$1 start.*/
            ShowPrefab$1: function (_0xcaa18d9b, _0x1c6d8bc2, _0xc359acd2, _0xac53e549) {
                if (_0xac53e549 === void 0) { _0xac53e549 = null; }
                return 0;
            },
            /*SC._0x75d7d73c.ShowPrefab$1 end.*/

            /*SC._0x75d7d73c.ShowPrefabSync$1 start.*/
            ShowPrefabSync$1: function (_0xe81f1675, _0xd4c8fdd6) {
                if (_0xd4c8fdd6 === void 0) { _0xd4c8fdd6 = null; }
                return null;
            },
            /*SC._0x75d7d73c.ShowPrefabSync$1 end.*/

            /*SC._0x75d7d73c.ShowPrefabSync$2 start.*/
            ShowPrefabSync$2: function (_0xf83d2050, _0xba2235f1, _0x06306504) {
                if (_0x06306504 === void 0) { _0x06306504 = null; }
                return null;
            },
            /*SC._0x75d7d73c.ShowPrefabSync$2 end.*/

            /*SC._0x75d7d73c.ShowPrefabSync start.*/
            ShowPrefabSync: function (_0xad36867a, _0x3e4be921, _0x3f5b40be, _0x0489befa) {
                if (_0x0489befa === void 0) { _0x0489befa = null; }
                return null;
            },
            /*SC._0x75d7d73c.ShowPrefabSync end.*/

            /*SC._0x75d7d73c.HideLoadingByPrefabId start.*/
            HideLoadingByPrefabId: function (_0x799766d9) { },
            /*SC._0x75d7d73c.HideLoadingByPrefabId end.*/

            /*SC._0x75d7d73c.HideEntityByGameObj start.*/
            HideEntityByGameObj: function (_0xc9946db6, _0xa022879d) {
                if (_0xa022879d === void 0) { _0xa022879d = null; }
            },
            /*SC._0x75d7d73c.HideEntityByGameObj end.*/

            /*SC._0x75d7d73c.HidePrefabEntity$1 start.*/
            HidePrefabEntity$1: function (_0x89de2650, _0x5cc091fc) {
                if (_0x5cc091fc === void 0) { _0x5cc091fc = null; }
            },
            /*SC._0x75d7d73c.HidePrefabEntity$1 end.*/

            /*SC._0x75d7d73c.HidePrefabEntity$2 start.*/
            HidePrefabEntity$2: function (_0xc6894203, _0x0883a027, _0x66b5a752) {
                if (_0x66b5a752 === void 0) { _0x66b5a752 = false; }
            },
            /*SC._0x75d7d73c.HidePrefabEntity$2 end.*/

            /*SC._0x75d7d73c.HidePrefabEntity start.*/
            HidePrefabEntity: function (_0x5be32821, _0x0133b610) {
                if (_0x0133b610 === void 0) { _0x0133b610 = null; }
            },
            /*SC._0x75d7d73c.HidePrefabEntity end.*/


        },
        overloads: {
            "GetEntity(string)": "GetEntity$1",
            "ShowPrefab(string, object)": "ShowPrefab$2",
            "ShowPrefab(string, Transform, object)": "ShowPrefab$3",
            "ShowPrefab(int, string, Transform, object)": "ShowPrefab$1",
            "ShowPrefabSync(string, object)": "ShowPrefabSync$1",
            "ShowPrefabSync(string, Transform, object)": "ShowPrefabSync$2",
            "HidePrefabEntity(int, object)": "HidePrefabEntity$1",
            "HidePrefabEntity(int, object, bool)": "HidePrefabEntity$2"
        }
    });
    /*SC._0x75d7d73c end.*/

    /*SC._0x78f64d15 start.*/
    Bridge.define("SC._0x78f64d15", {
        $kind: 6,
        statics: {
            fields: {
                _0x5e50ef31: 0,
                _0xb21ceaff: 1,
                _0x49f42d0e: 2
            }
        }
    });
    /*SC._0x78f64d15 end.*/

    /*SC._0x80279dc2 start.*/
    Bridge.define("SC._0x80279dc2", {
        props: {
            BMultiTouchEnabled: {
                get: function () {
                    return UnityEngine.Input.multiTouchEnabled;
                },
                set: function (value) {
                    UnityEngine.Input.multiTouchEnabled = value;
                }
            }
        },
        methods: {
            /*SC._0x80279dc2.IsPlayAdsPlatform start.*/
            IsPlayAdsPlatform: function () {

                var _0x49928eed = "(function(){\r\n                if (window.mraid && window.mraid.open) return 'applovin';\r\n                if (typeof ExitApi !== 'undefined' && ExitApi.exit) return 'google';\r\n                if (window.install) return 'mintegral';\r\n                return '';\r\n            })()";
                var _0x737b06c1 = SC.sc.web.webGLLib.scDoJSFun(_0x49928eed);
                return !System.String.isNullOrEmpty(_0x737b06c1);
            },
            /*SC._0x80279dc2.IsPlayAdsPlatform end.*/


        }
    });
    /*SC._0x80279dc2 end.*/

    /*SC._0x8677e429 start.*/
    Bridge.define("SC._0x8677e429", {
        $kind: 6,
        statics: {
            fields: {
                _0x0628880e: 1,
                _0x4b891e82: 2,
                _0xd2814de2: 3
            }
        }
    });
    /*SC._0x8677e429 end.*/

    /*SC._0x919a0128 start.*/
    Bridge.define("SC._0x919a0128", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _0x869b7f06: null
            },
            methods: {
                /*SC._0x919a0128.GetByteLengthString:static start.*/
                GetByteLengthString: function (byteLength, iFCount) {
                    if (iFCount === void 0) { iFCount = 2; }
                    var _0x72c6c3ec = "{0:F" + iFCount + "} ";
                    if (byteLength.lt(System.Int64(1024))) {
                        return SC._0x919a0128.format(System.Int64, "{0} B", byteLength);
                    }
                    if (byteLength.lt(System.Int64(1048576))) {
                        return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "KB", byteLength / 1024.0);
                    }
                    if (byteLength.lt(System.Int64(1073741824))) {
                        return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "MB", byteLength / 1048576.0);
                    }
                    if (byteLength.lt(System.Int64([0,256]))) {
                        return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "GB", byteLength / 1.07374182E+09);
                    }
                    if (byteLength.lt(System.Int64([0,262144]))) {
                        return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "TB", byteLength / 1.09951163E+12);
                    }
                    if (byteLength.lt(System.Int64([0,268435456]))) {
                        return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "PB", byteLength / 1.12589991E+15);
                    }
                    return SC._0x919a0128.format(System.Single, (_0x72c6c3ec || "") + "EB", byteLength / 1.1529215E+18);
                },
                /*SC._0x919a0128.GetByteLengthString:static end.*/

                /*SC._0x919a0128.format:static start.*/
                format: function (T, format, _0x720b5646) {
                    SC._0x919a0128._0x47da96ca();
                    SC._0x919a0128._0x869b7f06.setLength(0);
                    format = SC._0x919a0128.ConvertFormat(format);
                    SC._0x919a0128._0x869b7f06.appendFormat(format, _0x720b5646);
                    return SC._0x919a0128._0x869b7f06.toString();
                },
                /*SC._0x919a0128.format:static end.*/

                /*SC._0x919a0128._0x47da96ca:static start.*/
                _0x47da96ca: function () {
                    if (SC._0x919a0128._0x869b7f06 != null) {
                        return;
                    }
                    SC._0x919a0128._0x869b7f06 = new System.Text.StringBuilder("", 1024);
                },
                /*SC._0x919a0128._0x47da96ca:static end.*/

                /*SC._0x919a0128.ConvertFormat:static start.*/
                ConvertFormat: function (_0xca923c49) {
                    var _0x1c015193 = _0xca923c49.length;
                    var _0xf1831a10 = System.String.indexOf(_0xca923c49, "%s");
                    var _0x31ea231e = 0;
                    var _0x21c315cf = _0xf1831a10;
                    while (_0x21c315cf < _0x1c015193 && _0x21c315cf !== -1) {
                        _0xca923c49 = (_0xca923c49.substr(0, _0x21c315cf) || "") + "{" + _0x31ea231e + "}" + (_0xca923c49.substr(((_0x21c315cf + 2) | 0)) || "");
                        _0x31ea231e = (_0x31ea231e + 1) | 0;
                        _0x21c315cf = System.String.indexOf(_0xca923c49, "%s");
                        _0x1c015193 = _0xca923c49.length;
                        if (_0x21c315cf === -1) {
                            break;
                        }
                    }

                    return _0xca923c49;
                },
                /*SC._0x919a0128.ConvertFormat:static end.*/


            }
        },
        fields: {
            _0x3d16ae21: 0,
            fUpdateDeltaTime: 0,
            _0xa9ad034d: 0,
            _0x03233fdf: 0,
            textColor: null,
            _0xcbeb81d1: null,
            _0x1bdf477a: System.Int64(0),
            _0xbde0071f: System.Int64(0),
            _0x6d4c0805: System.Int64(0),
            _0xf2e924eb: null,
            _0xf0140553: null,
            _0x2bcf3dcc: null,
            _0xb79dc8b2: 0
        },
        props: {
            designSize: {
                get: function () {
                    if (pc.Vec2.equals( this._0x2bcf3dcc, pc.Vec2.ZERO.clone() )) {
                        this._0x2bcf3dcc = SC.sc.web.bPortrait ? new pc.Vec2( 640, 1136 ) : new pc.Vec2( 1136, 640 );
                    }

                    return this._0x2bcf3dcc.$clone();
                }
            }
        },
        ctors: {
            init: function () {
                this.textColor = new UnityEngine.Color();
                this._0xf2e924eb = new UnityEngine.Vector3();
                this._0x2bcf3dcc = new UnityEngine.Vector2();
                this._0x3d16ae21 = 0.0;
                this.fUpdateDeltaTime = 0.1;
                this._0xa9ad034d = 0;
                this._0x03233fdf = 0.0;
                this.textColor = new pc.Color( 1, 1, 1, 1 );
                this._0x1bdf477a = System.Int64(0);
                this._0xbde0071f = System.Int64(0);
                this._0xf2e924eb = new pc.Vec3( 1, 1, 1 );
                this._0x2bcf3dcc = pc.Vec2.ZERO.clone();
                this._0xb79dc8b2 = 0;
            }
        },
        methods: {
            /*SC._0x919a0128.Start start.*/
            Start: function () {
                this._0x3d16ae21 = UnityEngine.Time.realtimeSinceStartup;

                var _0x26f12bd8 = this._0x043c7cd5();
                this._0xf0140553 = this._0x365896fe(_0x26f12bd8);
            },
            /*SC._0x919a0128.Start end.*/

            /*SC._0x919a0128.Update start.*/
            Update: function () {
                this._0xa9ad034d = (this._0xa9ad034d + 1) | 0;
                if (UnityEngine.Time.realtimeSinceStartup - this._0x3d16ae21 >= this.fUpdateDeltaTime) {
                    this._0x03233fdf = this._0xa9ad034d / (UnityEngine.Time.realtimeSinceStartup - this._0x3d16ae21);
                    this._0xa9ad034d = 0;
                    this._0x3d16ae21 = UnityEngine.Time.realtimeSinceStartup;
                    this._0x89231ff5();
                }
            },
            /*SC._0x919a0128.Update end.*/

            /*SC._0x919a0128._0x89231ff5 start.*/
            _0x89231ff5: function () {
                this._0xcbeb81d1 = "";
                this._0x6d4c0805 = UnityEngine.Profiling.Profiler.GetMonoUsedSizeLong();
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" FPS: " + (System.Single.format(this._0x03233fdf, "f0") || "") + "\n") || "");
                this._0xbde0071f = UnityEngine.Profiling.Profiler.GetTotalReservedMemoryLong();
                this._0x1bdf477a = UnityEngine.Profiling.Profiler.GetTotalAllocatedMemoryLong();
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" MonoHeap:" + (SC._0x919a0128.GetByteLengthString(UnityEngine.Profiling.Profiler.GetMonoHeapSizeLong()) || "") + "\n") || "");
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" MonoUsed:" + (SC._0x919a0128.GetByteLengthString(this._0x6d4c0805) || "") + "\n") || "");
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" MemoryUsed:" + (SC._0x919a0128.GetByteLengthString(this._0x1bdf477a) || "") + "\n") || "");
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" MemoryNoUsed:" + (SC._0x919a0128.GetByteLengthString(UnityEngine.Profiling.Profiler.GetTotalUnusedReservedMemoryLong()) || "") + "\n") || "");
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" AllMemory:" + (SC._0x919a0128.GetByteLengthString(this._0xbde0071f) || "") + "\n") || "");
                this._0xcbeb81d1 = (this._0xcbeb81d1 || "") + ((" ObjectCount:" + UnityEngine.Object.FindObjectsOfType(UnityEngine.GameObject).length) || "");
                this._0xf0140553.text = this._0xcbeb81d1;
            },
            /*SC._0x919a0128._0x89231ff5 end.*/

            /*SC._0x919a0128.GetUseRange start.*/
            GetUseRange: function () {
                this._0xbde0071f = UnityEngine.Profiling.Profiler.GetTotalReservedMemoryLong();
                this._0x1bdf477a = UnityEngine.Profiling.Profiler.GetTotalAllocatedMemoryLong();
                var _0x8e1e0c09 = (SC._0x919a0128.GetByteLengthString(this._0x1bdf477a, 0) || "") + "/" + (SC._0x919a0128.GetByteLengthString(this._0xbde0071f, 0) || "");
                _0x8e1e0c09 = System.String.replaceAll(System.String.replaceAll(_0x8e1e0c09, " ", ""), "B", "");
                return _0x8e1e0c09;
            },
            /*SC._0x919a0128.GetUseRange end.*/

            /*SC._0x919a0128._0x043c7cd5 start.*/
            _0x043c7cd5: function () {

                var _0xae402d45 = new UnityEngine.GameObject.$ctor2("TopCanvas");
                var _0x5acf2f59 = _0xae402d45.AddComponent(UnityEngine.Canvas);
                _0x5acf2f59.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                _0xae402d45.AddComponent(UnityEngine.UI.CanvasScaler);
                _0xae402d45.AddComponent(UnityEngine.UI.GraphicRaycaster);
                _0x5acf2f59.sortingOrder = 2147483647;
                _0x5acf2f59.transform.position = new pc.Vec3( 0, 0, 0 );
                return _0x5acf2f59;
            },
            /*SC._0x919a0128._0x043c7cd5 end.*/

            /*SC._0x919a0128._0x365896fe start.*/
            _0x365896fe: function (_0x07da12c5) {

                var _0xd6d44437 = new UnityEngine.GameObject.$ctor2("BottomLeftText");
                _0xd6d44437.transform.SetParent(_0x07da12c5.transform);

                var _0xfd7e4896 = _0xd6d44437.AddComponent(UnityEngine.UI.Text);
                _0xfd7e4896.font = this.GetComponent(UnityEngine.UI.Text).font;
                _0xfd7e4896.color = this.textColor.$clone();
                _0xfd7e4896.fontSize = 28;
                _0xfd7e4896.alignment = UnityEngine.TextAnchor.LowerLeft;
                _0xfd7e4896.raycastTarget = false;

                var _0x9913bfa3 = _0xd6d44437.GetComponent(UnityEngine.RectTransform);
                _0x9913bfa3.anchorMin = pc.Vec2.ZERO.clone();
                _0x9913bfa3.anchorMax = pc.Vec2.ZERO.clone();
                _0x9913bfa3.pivot = pc.Vec2.ZERO.clone();
                _0x9913bfa3.sizeDelta = new pc.Vec2( 400, 700 );
                var _0xb857d1dc = this.GetAdapterNodeZoomScale();
                this._0xf2e924eb.x = (this._0xf2e924eb.y = _0xb857d1dc, _0xb857d1dc);
                _0xd6d44437.transform.localScale = this._0xf2e924eb.$clone();
                return _0xfd7e4896;
            },
            /*SC._0x919a0128._0x365896fe end.*/

            /*SC._0x919a0128.GetAdapterNodeZoomScale start.*/
            GetAdapterNodeZoomScale: function () {
                if (this._0xb79dc8b2 === 0) {
                    var _0xd689cad7 = this.designSize.$clone();
                    var _0x2cae3709 = _0xd689cad7.x;
                    var _0xb2d5e9c2 = _0xd689cad7.y;
                    if (SC.sc.web.bPortrait) {

                        var _0x4b9259e4 = UnityEngine.Screen.height / _0xb2d5e9c2;
                        if (_0x2cae3709 * _0x4b9259e4 > UnityEngine.Screen.width) {
                            _0x4b9259e4 = _0x4b9259e4 * (UnityEngine.Screen.width / (_0x2cae3709 * _0x4b9259e4));
                        }

                        if (_0xb2d5e9c2 * _0x4b9259e4 > UnityEngine.Screen.height) {
                            _0x4b9259e4 = _0x4b9259e4 * (UnityEngine.Screen.height / (_0xb2d5e9c2 * _0x4b9259e4));
                        }

                        this._0xb79dc8b2 = _0x4b9259e4;
                    } else {

                        var _0x84fed854 = UnityEngine.Screen.width / _0x2cae3709;
                        if (_0xb2d5e9c2 * _0x84fed854 > UnityEngine.Screen.height) {
                            _0x84fed854 = _0x84fed854 * (UnityEngine.Screen.height / (_0xb2d5e9c2 * _0x84fed854));
                        }

                        if (_0x2cae3709 * _0x84fed854 > UnityEngine.Screen.width) {
                            _0x84fed854 = _0x84fed854 * (UnityEngine.Screen.width / (_0x2cae3709 * _0x84fed854));
                        }

                        this._0xb79dc8b2 = _0x84fed854;
                    }
                }

                return this._0xb79dc8b2;
            },
            /*SC._0x919a0128.GetAdapterNodeZoomScale end.*/


        }
    });
    /*SC._0x919a0128 end.*/

    /*SC._0x9e4216fb start.*/
    Bridge.define("SC._0x9e4216fb", {
        methods: {
            /*SC._0x9e4216fb.Debug start.*/
            Debug: function (_0x9ba4351e) {
                this._0x5b666d81(SC._0x5e3f4dc9._0x79f611af, _0x9ba4351e);
            },
            /*SC._0x9e4216fb.Debug end.*/

            /*SC._0x9e4216fb.Dev start.*/
            Dev: function (_0xca64e7c3) {
                this._0x5b666d81(SC._0x5e3f4dc9._0xa460a6cf, _0xca64e7c3);
            },
            /*SC._0x9e4216fb.Dev end.*/

            /*SC._0x9e4216fb.Info start.*/
            Info: function (_0xc39a972d) {
                this._0x5b666d81(SC._0x5e3f4dc9._0x427224b3, _0xc39a972d);
            },
            /*SC._0x9e4216fb.Info end.*/

            /*SC._0x9e4216fb.Warning start.*/
            Warning: function (_0x721011e9) {
                this._0x5b666d81(SC._0x5e3f4dc9._0x1d17c8e2, _0x721011e9);
            },
            /*SC._0x9e4216fb.Warning end.*/

            /*SC._0x9e4216fb.Error start.*/
            Error: function (_0xd2428b14) {
                this._0x5b666d81(SC._0x5e3f4dc9._0x6feca38d, _0xd2428b14);
            },
            /*SC._0x9e4216fb.Error end.*/

            /*SC._0x9e4216fb.Fatal start.*/
            Fatal: function (_0xe08510aa) {
                this._0x5b666d81(SC._0x5e3f4dc9._0x19f4bbf5, _0xe08510aa);
            },
            /*SC._0x9e4216fb.Fatal end.*/

            /*SC._0x9e4216fb._0x5b666d81 start.*/
            _0x5b666d81: function (_0x819da778, _0xeee3333b) {
                var _0x4eb28f0d = Bridge.toString(_0xeee3333b);
                this._0x284d8623(_0x819da778, _0x4eb28f0d);
            },
            /*SC._0x9e4216fb._0x5b666d81 end.*/

            /*SC._0x9e4216fb._0x284d8623 start.*/
            _0x284d8623: function (_0x2d2b5886, _0x6192aaaa) {










                switch (_0x2d2b5886) {
                    case SC._0x5e3f4dc9._0xa460a6cf: 
                        _0x6192aaaa = System.String.format("<color=#70ACE3>[sc.dev] {0}</color>", [_0x6192aaaa]);
                        UnityEngine.Debug.Log$1(_0x6192aaaa);
                        break;
                    case SC._0x5e3f4dc9._0x79f611af: 
                        _0x6192aaaa = System.String.format("<color=#E69DEC>[sc.debug] {0}</color>", [_0x6192aaaa]);
                        UnityEngine.Debug.Log$1(_0x6192aaaa);
                        break;
                    case SC._0x5e3f4dc9._0x427224b3: 
                        _0x6192aaaa = System.String.format("<color=#00FF0C>[sc.info] {0}</color>", [_0x6192aaaa]);
                        UnityEngine.Debug.Log$1(_0x6192aaaa);
                        break;
                    case SC._0x5e3f4dc9._0x1d17c8e2: 
                        _0x6192aaaa = "[sc.warn] " + (_0x6192aaaa || "");
                        UnityEngine.Debug.LogWarning$1(_0x6192aaaa);
                        break;
                    case SC._0x5e3f4dc9._0x6feca38d: 
                        _0x6192aaaa = "[sc.error] " + (_0x6192aaaa || "");
                        UnityEngine.Debug.LogError$2(_0x6192aaaa);
                        break;
                }
            },
            /*SC._0x9e4216fb._0x284d8623 end.*/


        }
    });
    /*SC._0x9e4216fb end.*/

    /*SC._0x9ef9d6a5 start.*/
    Bridge.define("SC._0x9ef9d6a5", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _0xa8256155: null
            },
            methods: {
                /*SC._0x9ef9d6a5.StartCor:static start.*/
                StartCor: function (_0xc61ef8b6) {
                    if (UnityEngine.MonoBehaviour.op_Equality(SC._0x9ef9d6a5._0xa8256155, null)) {
                        SC._0x9ef9d6a5._0xa8256155 = new UnityEngine.GameObject.$ctor2("CoroutineHelper").AddComponent(SC._0x9ef9d6a5);
                        UnityEngine.Object.DontDestroyOnLoad(SC._0x9ef9d6a5._0xa8256155.gameObject);
                    }

                    SC._0x9ef9d6a5._0xa8256155.StartCoroutine$1(_0xc61ef8b6);
                },
                /*SC._0x9ef9d6a5.StartCor:static end.*/


            }
        }
    });
    /*SC._0x9ef9d6a5 end.*/

    /*SC._0xa96fe423 start.*/
    Bridge.define("SC._0xa96fe423", {
        fields: {
            sModuleName: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
            }
        },
        methods: {
            /*SC._0xa96fe423.IsEnable start.*/
            IsEnable: function () {
                return false;
            },
            /*SC._0xa96fe423.IsEnable end.*/

            /*SC._0xa96fe423.IsGainSubscribeReward start.*/
            IsGainSubscribeReward: function () {
                return false;
            },
            /*SC._0xa96fe423.IsGainSubscribeReward end.*/

            /*SC._0xa96fe423.ShowGainSubscribeReward start.*/
            ShowGainSubscribeReward: function (_0x589f9f01) {
                if (_0x589f9f01 === void 0) { _0x589f9f01 = false; }
            },
            /*SC._0xa96fe423.ShowGainSubscribeReward end.*/

            /*SC._0xa96fe423.ShowSubscribe start.*/
            ShowSubscribe: function (_0xc2fde79d, _0x7daa009d) {
                if (_0xc2fde79d === void 0) { _0xc2fde79d = false; }
                if (_0x7daa009d === void 0) { _0x7daa009d = null; }
            },
            /*SC._0xa96fe423.ShowSubscribe end.*/

            /*SC._0xa96fe423.GetSubscribeProductByGroup start.*/
            GetSubscribeProductByGroup: function (_0x4255db43) {
                return null;
            },
            /*SC._0xa96fe423.GetSubscribeProductByGroup end.*/


        }
    });
    /*SC._0xa96fe423 end.*/

    /*SC._0xafe018ef start.*/
    Bridge.define("SC._0xafe018ef", {
        methods: {
            /*SC._0xafe018ef.scRegisterEvent start.*/
            scRegisterEvent: function (_0x13220ddf) { },
            /*SC._0xafe018ef.scRegisterEvent end.*/


        }
    });
    /*SC._0xafe018ef end.*/

    /*SC._0xb1611680 start.*/
    Bridge.define("SC._0xb1611680", {
        methods: {
            /*SC._0xb1611680.GetByKey start.*/
            GetByKey: function (_0x7949bc72) {
                return null;
            },
            /*SC._0xb1611680.GetByKey end.*/

            /*SC._0xb1611680.GetChannelFuncValueByKey start.*/
            GetChannelFuncValueByKey: function (_0x0cf38551) {
                return null;
            },
            /*SC._0xb1611680.GetChannelFuncValueByKey end.*/

            /*SC._0xb1611680.UploadChannelFuncConfig start.*/
            UploadChannelFuncConfig: function () { },
            /*SC._0xb1611680.UploadChannelFuncConfig end.*/


        }
    });
    /*SC._0xb1611680 end.*/

    /*SC._0xb3912e6f start.*/
    Bridge.define("SC._0xb3912e6f", {
        methods: {
            /*SC._0xb3912e6f.GetShellVer start.*/
            GetShellVer: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetShellVer end.*/

            /*SC._0xb3912e6f.GetShellPacInfo start.*/
            GetShellPacInfo: function (_0xe9b485b6) {
                return null;
            },
            /*SC._0xb3912e6f.GetShellPacInfo end.*/

            /*SC._0xb3912e6f.GetNativePacInfo start.*/
            GetNativePacInfo: function (_0x7b3ca506) {
                return null;
            },
            /*SC._0xb3912e6f.GetNativePacInfo end.*/

            /*SC._0xb3912e6f.GetPackageInfoText start.*/
            GetPackageInfoText: function (_0xaf42f338, _0x8c6a8917) {
                return null;
            },
            /*SC._0xb3912e6f.GetPackageInfoText end.*/

            /*SC._0xb3912e6f.GetSCGameFrameWorkVersion start.*/
            GetSCGameFrameWorkVersion: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetSCGameFrameWorkVersion end.*/

            /*SC._0xb3912e6f.GetCurrentPluginInfo start.*/
            GetCurrentPluginInfo: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetCurrentPluginInfo end.*/

            /*SC._0xb3912e6f.GetPluginVersion start.*/
            GetPluginVersion: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetPluginVersion end.*/

            /*SC._0xb3912e6f.IsPortrait start.*/
            IsPortrait: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsPortrait end.*/

            /*SC._0xb3912e6f.GetCurrentGroupIndex start.*/
            GetCurrentGroupIndex: function () {
                return 0;
            },
            /*SC._0xb3912e6f.GetCurrentGroupIndex end.*/

            /*SC._0xb3912e6f.GetCurrentPluginName start.*/
            GetCurrentPluginName: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetCurrentPluginName end.*/

            /*SC._0xb3912e6f.GetCurrentChannel start.*/
            GetCurrentChannel: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetCurrentChannel end.*/

            /*SC._0xb3912e6f.Post$1 start.*/
            Post$1: function (_0x2110be13, _0xd3ae8957, _0x08f576f3) {
                return null;
            },
            /*SC._0xb3912e6f.Post$1 end.*/

            /*SC._0xb3912e6f.Post start.*/
            Post: function (T, _0x7c71f987, _0x98aefeca, _0x72d91f7d) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xb3912e6f.Post end.*/

            /*SC._0xb3912e6f.GetDownLoadUrl start.*/
            GetDownLoadUrl: function () {
                return null;
            },
            /*SC._0xb3912e6f.GetDownLoadUrl end.*/

            /*SC._0xb3912e6f.IsShowOtherGame start.*/
            IsShowOtherGame: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsShowOtherGame end.*/

            /*SC._0xb3912e6f.ExitGame start.*/
            ExitGame: function () { },
            /*SC._0xb3912e6f.ExitGame end.*/

            /*SC._0xb3912e6f.ExitGameWin start.*/
            ExitGameWin: function () { },
            /*SC._0xb3912e6f.ExitGameWin end.*/

            /*SC._0xb3912e6f.IsDebugMode start.*/
            IsDebugMode: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsDebugMode end.*/

            /*SC._0xb3912e6f.SetDisplayStats start.*/
            SetDisplayStats: function (_0x2280fd47) { },
            /*SC._0xb3912e6f.SetDisplayStats end.*/

            /*SC._0xb3912e6f.IsDisplayStats start.*/
            IsDisplayStats: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsDisplayStats end.*/

            /*SC._0xb3912e6f.IsPluginShopEnable start.*/
            IsPluginShopEnable: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsPluginShopEnable end.*/

            /*SC._0xb3912e6f.VersionCompare start.*/
            VersionCompare: function (_0x0d99af94, _0x53f56cee) {
                return 0;
            },
            /*SC._0xb3912e6f.VersionCompare end.*/

            /*SC._0xb3912e6f.GetFreeGoldCount start.*/
            GetFreeGoldCount: function () {
                return 0;
            },
            /*SC._0xb3912e6f.GetFreeGoldCount end.*/

            /*SC._0xb3912e6f.GetFreeDiamondCount start.*/
            GetFreeDiamondCount: function () {
                return 0;
            },
            /*SC._0xb3912e6f.GetFreeDiamondCount end.*/

            /*SC._0xb3912e6f.IsCanReceiveFreeDiamond start.*/
            IsCanReceiveFreeDiamond: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsCanReceiveFreeDiamond end.*/

            /*SC._0xb3912e6f.IsCanReceiveFreeGold start.*/
            IsCanReceiveFreeGold: function () {
                return false;
            },
            /*SC._0xb3912e6f.IsCanReceiveFreeGold end.*/

            /*SC._0xb3912e6f.SetPluginFreeGoldCount start.*/
            SetPluginFreeGoldCount: function (_0xb8ff89f0, _0x53792098) { },
            /*SC._0xb3912e6f.SetPluginFreeGoldCount end.*/

            /*SC._0xb3912e6f.SetPluginFreeDiamondCount start.*/
            SetPluginFreeDiamondCount: function (_0x4334d7c9, _0xe694eca1) { },
            /*SC._0xb3912e6f.SetPluginFreeDiamondCount end.*/

            /*SC._0xb3912e6f.IsExistFunction start.*/
            IsExistFunction: function (_0x34ac2e85, _0xccd2ca07) {
                return false;
            },
            /*SC._0xb3912e6f.IsExistFunction end.*/


        },
        overloads: {
            "Post(string, string, object[])": "Post$1"
        }
    });
    /*SC._0xb3912e6f end.*/

    /*SC._0xbaa9aae0 start.*/
    Bridge.define("SC._0xbaa9aae0", {
        $kind: 6,
        statics: {
            fields: {
                _0x93d49431: 0
            }
        }
    });
    /*SC._0xbaa9aae0 end.*/

    /*SC._0xbcb2c5eb start.*/
    Bridge.define("SC._0xbcb2c5eb", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _0xb2650b9c: null
            },
            methods: {
                /*SC._0xbcb2c5eb.GetInstance:static start.*/
                GetInstance: function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(SC._0xbcb2c5eb._0xb2650b9c, null)) {
                        return SC._0xbcb2c5eb._0xb2650b9c;
                    }
                    var _0xb56ec498 = new UnityEngine.GameObject.$ctor2("SCManager");
                    SC._0xbcb2c5eb._0xb2650b9c = _0xb56ec498.AddComponent(SC._0xbcb2c5eb);
                    UnityEngine.Object.DontDestroyOnLoad(_0xb56ec498);
                    SC.sc.window.AddUICanvas();
                    return SC._0xbcb2c5eb._0xb2650b9c;
                },
                /*SC._0xbcb2c5eb.GetInstance:static end.*/


            }
        },
        methods: {
            /*SC._0xbcb2c5eb.OnApplicationFocus start.*/
            OnApplicationFocus: function (_0x1c24a06f) {

            },
            /*SC._0xbcb2c5eb.OnApplicationFocus end.*/

            /*SC._0xbcb2c5eb.OnApplicationPause start.*/
            OnApplicationPause: function (_0xce353ff2) {

            },
            /*SC._0xbcb2c5eb.OnApplicationPause end.*/

            /*SC._0xbcb2c5eb.Init start.*/
            Init: function (_0xc824251b) {
                UnityEngine.Application.runInBackground = true;
                UnityEngine.Application.focusChanged = Bridge.fn.combine(UnityEngine.Application.focusChanged, Bridge.fn.cacheBind(this, this.OnApplicationFocus));
                SC.sc.web._0x5dba4681();






                var _0xdb009a41 = SC.sc.web._0x07d4f8b2();
                SC.sc.log.Info("sdk ver:2.5.9");
                SC.sc.log.Info("sdk Obfuscated:" + System.Boolean.toString(SC.sc.BObfuscated));
                SC.sc.loom.DelayTimeBackCall(function () {
                    SC.sc.log.Info("SDK Init Complete");
                    SC.sc.loom.DelayTimeBackCall(function () {
                        var _0x59257ae4 = System.String.format("More than {0} seconds have passed without calling sc.sdk.OnEnterGameSuccess() Did I forget to call it!", [Bridge.box(SC.sc.WebAdConfig.fDebugCheckEnterGameTime, System.Single, System.Single.format, System.Single.getHashCode)]);
                        if (SC.sc.bEditor) {
                            SC.sc.log.Error(_0x59257ae4);
                        } else {
                            SC.sc.log.Warning(_0x59257ae4);
                        }

                        SC.sc.web._0xd1f9d9fb("DelayTimeBackCall");
                    }, SC.sc.WebAdConfig.fDebugCheckEnterGameTime, -100);
                    if (!Bridge.staticEquals(_0xc824251b, null)) {
                        _0xc824251b();
                    }
                });
            },
            /*SC._0xbcb2c5eb.Init end.*/

            /*SC._0xbcb2c5eb.Update start.*/
            Update: function () {
                SC.sc.web.Update();
            },
            /*SC._0xbcb2c5eb.Update end.*/

            /*SC._0xbcb2c5eb.OnApplicationQuit start.*/
            OnApplicationQuit: function () {
                UnityEngine.Debug.Log$1("Application quitting");
                if (UnityEngine.MonoBehaviour.op_Inequality(this, null)) {


                }
            },
            /*SC._0xbcb2c5eb.OnApplicationQuit end.*/

            /*SC._0xbcb2c5eb.OnJSCallback start.*/
            OnJSCallback: function (_0x68c64e67) {
                SC.sc.web.OnJSCallback(_0x68c64e67);
            },
            /*SC._0xbcb2c5eb.OnJSCallback end.*/


        }
    });
    /*SC._0xbcb2c5eb end.*/

    /*SC._0xbd04323f start.*/
    Bridge.define("SC._0xbd04323f", {
        statics: {
            fields: {
                _0xdd11a10d: null
            },
            ctors: {
                init: function () {
                    this._0xdd11a10d = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.List$1(UnityEngine.AudioSource))).ctor();
                }
            },
            methods: {
                /*SC._0xbd04323f._0xbdd1f5ec:static start.*/
                _0xbdd1f5ec: function (_0xac1a718c, _0xa6bfd476, _0x5ecfd96d) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitWhile(function () {
                                                if (UnityEngine.Component.op_Equality(_0xac1a718c, null) || _0xac1a718c.isPlaying) {
                                                    return true;
                                                }

                                                return _0xac1a718c.time > 0.0;
                                            });
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        if (!_0xac1a718c.loop && !Bridge.staticEquals(_0xa6bfd476, null)) {
                                                _0xa6bfd476();
                                            }


                                            if (SC._0xbd04323f._0xdd11a10d.containsKey(_0x5ecfd96d)) {
                                                SC._0xbd04323f._0xdd11a10d.getItem(_0x5ecfd96d).remove(_0xac1a718c);
                                                if (SC._0xbd04323f._0xdd11a10d.getItem(_0x5ecfd96d).Count === 0) {
                                                    SC._0xbd04323f._0xdd11a10d.remove(_0x5ecfd96d);
                                                }
                                            }

                                            UnityEngine.Object.Destroy(_0xac1a718c.gameObject);

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*SC._0xbd04323f._0xbdd1f5ec:static end.*/

                /*SC._0xbd04323f.StopAll:static start.*/
                StopAll: function () {
                    var $t;
                    var _0x18566fe5 = UnityEngine.Object.FindObjectsOfType(UnityEngine.AudioSource);
                    $t = Bridge.getEnumerator(_0x18566fe5);
                    try {
                        while ($t.moveNext()) {
                            var audioSource = $t.Current;
                            if (System.String.startsWith(audioSource.gameObject.name, "Audio_")) {
                                audioSource.Stop();
                                UnityEngine.Object.Destroy(audioSource.gameObject);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*SC._0xbd04323f.StopAll:static end.*/


            }
        },
        methods: {
            /*SC._0xbd04323f.Play start.*/
            Play: function (_0xc16d7d8b, _0x85d951c2, _0x4afdef09) {
                if (_0x85d951c2 === void 0) { _0x85d951c2 = false; }
                if (_0x4afdef09 === void 0) { _0x4afdef09 = null; }
                var _0x4de6b84c = SC.sc.config.GetColumn(System.String, "audio", _0xc16d7d8b, "path");
                if (Bridge.referenceEquals(_0x4de6b84c, "")) {
                    if (!Bridge.staticEquals(_0x4afdef09, null)) {
                        _0x4afdef09();
                    }
                    return;
                }

                var _0xc9963f51 = UnityEngine.Resources.Load(UnityEngine.AudioClip, _0x4de6b84c);
                if (_0xc9963f51 == null) {
                    UnityEngine.Debug.Log$1(System.String.format("Audio clip '{0}' not found in audio.txt", [_0xc16d7d8b]));
                    if (!Bridge.staticEquals(_0x4afdef09, null)) {
                        _0x4afdef09();
                    }
                    return;
                }

                var _0xd29fdb79 = new UnityEngine.GameObject.$ctor2(System.String.format("Audio_{0}_{1}", _0xc16d7d8b, System.Guid.NewGuid()));
                var _0x053db16e = _0xd29fdb79.AddComponent(UnityEngine.AudioSource);
                _0x053db16e.clip = _0xc9963f51;
                _0x053db16e.loop = _0x85d951c2;
                _0x053db16e.Play();

                if (!SC._0xbd04323f._0xdd11a10d.containsKey(_0xc16d7d8b)) {
                    SC._0xbd04323f._0xdd11a10d.setItem(_0xc16d7d8b, new (System.Collections.Generic.List$1(UnityEngine.AudioSource)).ctor());
                }

                SC._0xbd04323f._0xdd11a10d.getItem(_0xc16d7d8b).add(_0x053db16e);
                SC._0x9ef9d6a5.StartCor(SC._0xbd04323f._0xbdd1f5ec(_0x053db16e, _0x4afdef09, _0xc16d7d8b));
            },
            /*SC._0xbd04323f.Play end.*/

            /*SC._0xbd04323f.Stop start.*/
            Stop: function (_0x20ddaf25) {
                var $t;
                var sources = { };
                if (SC._0xbd04323f._0xdd11a10d.tryGetValue(_0x20ddaf25, sources)) {

                    var _0xafbcac47 = new (System.Collections.Generic.List$1(UnityEngine.AudioSource)).$ctor1(sources.v);
                    $t = Bridge.getEnumerator(_0xafbcac47);
                    try {
                        while ($t.moveNext()) {
                            var source = $t.Current;
                            if (UnityEngine.Component.op_Inequality(source, null)) {
                                source.Stop();
                                UnityEngine.Object.Destroy(source.gameObject);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    SC._0xbd04323f._0xdd11a10d.remove(_0x20ddaf25);
                }
            },
            /*SC._0xbd04323f.Stop end.*/

            /*SC._0xbd04323f.Pause start.*/
            Pause: function (_0x9f3adcb8) {
                var $t;
                var sources = { };
                if (SC._0xbd04323f._0xdd11a10d.tryGetValue(_0x9f3adcb8, sources)) {
                    $t = Bridge.getEnumerator(sources.v);
                    try {
                        while ($t.moveNext()) {
                            var source = $t.Current;
                            if (UnityEngine.Component.op_Inequality(source, null)) {
                                source.Pause();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*SC._0xbd04323f.Pause end.*/

            /*SC._0xbd04323f.PauseAll start.*/
            PauseAll: function () {
                var $t, $t1;
                $t = Bridge.getEnumerator(SC._0xbd04323f._0xdd11a10d);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        $t1 = Bridge.getEnumerator(item.value);
                        try {
                            while ($t1.moveNext()) {
                                var source = $t1.Current;
                                if (UnityEngine.Component.op_Inequality(source, null)) {
                                    source.Pause();
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SC._0xbd04323f.PauseAll end.*/

            /*SC._0xbd04323f.Resume start.*/
            Resume: function (_0x4bbfa408) {
                var $t;
                var sources = { };
                if (SC._0xbd04323f._0xdd11a10d.tryGetValue(_0x4bbfa408, sources)) {
                    $t = Bridge.getEnumerator(sources.v);
                    try {
                        while ($t.moveNext()) {
                            var source = $t.Current;
                            if (UnityEngine.Component.op_Inequality(source, null)) {
                                source.Play();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*SC._0xbd04323f.Resume end.*/

            /*SC._0xbd04323f.ResumeAll start.*/
            ResumeAll: function () {
                var $t, $t1;
                $t = Bridge.getEnumerator(SC._0xbd04323f._0xdd11a10d);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        $t1 = Bridge.getEnumerator(item.value);
                        try {
                            while ($t1.moveNext()) {
                                var source = $t1.Current;
                                if (UnityEngine.Component.op_Inequality(source, null)) {
                                    source.Play();
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SC._0xbd04323f.ResumeAll end.*/

            /*SC._0xbd04323f.IsSoundAndMusicOpen start.*/
            IsSoundAndMusicOpen: function () {
                return true;
            },
            /*SC._0xbd04323f.IsSoundAndMusicOpen end.*/

            /*SC._0xbd04323f.OpenSoundAndMusicOpen start.*/
            OpenSoundAndMusicOpen: function () { },
            /*SC._0xbd04323f.OpenSoundAndMusicOpen end.*/

            /*SC._0xbd04323f.CloseSoundAndMusic start.*/
            CloseSoundAndMusic: function () { },
            /*SC._0xbd04323f.CloseSoundAndMusic end.*/

            /*SC._0xbd04323f.CloseMusic start.*/
            CloseMusic: function () { },
            /*SC._0xbd04323f.CloseMusic end.*/

            /*SC._0xbd04323f.OpenMusic start.*/
            OpenMusic: function () { },
            /*SC._0xbd04323f.OpenMusic end.*/

            /*SC._0xbd04323f.IsMusicOpen start.*/
            IsMusicOpen: function () {
                return true;
            },
            /*SC._0xbd04323f.IsMusicOpen end.*/

            /*SC._0xbd04323f.IsSoundOpen start.*/
            IsSoundOpen: function () {
                return true;
            },
            /*SC._0xbd04323f.IsSoundOpen end.*/

            /*SC._0xbd04323f.CloseSound start.*/
            CloseSound: function () { },
            /*SC._0xbd04323f.CloseSound end.*/

            /*SC._0xbd04323f.OpenSound start.*/
            OpenSound: function () { },
            /*SC._0xbd04323f.OpenSound end.*/


        }
    });
    /*SC._0xbd04323f end.*/

    /*SC._0xbed9ceeb start.*/
    Bridge.define("SC._0xbed9ceeb", {
        fields: {
            sModuleName: null,
            ILoginDay: 0,
            BNewDay: false,
            GetEnterGameCount: 0
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
                this.ILoginDay = 0;
                this.BNewDay = false;
                this.GetEnterGameCount = 0;
            }
        },
        methods: {
            /*SC._0xbed9ceeb.StartCaptureTimer start.*/
            StartCaptureTimer: function (_0x75a64c0d) {
                if (_0x75a64c0d === void 0) { _0x75a64c0d = ""; }
            },
            /*SC._0xbed9ceeb.StartCaptureTimer end.*/

            /*SC._0xbed9ceeb.CaptureTimer start.*/
            CaptureTimer: function (_0x97c6ea03) {
                if (_0x97c6ea03 === void 0) { _0x97c6ea03 = ""; }
                return System.Int64(0);
            },
            /*SC._0xbed9ceeb.CaptureTimer end.*/

            /*SC._0xbed9ceeb.SecondsFormat start.*/
            SecondsFormat: function (_0x72dfeb1d, _0xeec25119, _0x3891da02) {
                if (_0x3891da02 === void 0) { _0x3891da02 = "00"; }
                return null;
            },
            /*SC._0xbed9ceeb.SecondsFormat end.*/

            /*SC._0xbed9ceeb.IsNewDay start.*/
            IsNewDay: function (_0x6e59c4e5) {
                return false;
            },
            /*SC._0xbed9ceeb.IsNewDay end.*/

            /*SC._0xbed9ceeb.GetDateBySecond start.*/
            GetDateBySecond: function (_0xd816c590) {
                return Bridge.getDefaultValue(System.DateTime);
            },
            /*SC._0xbed9ceeb.GetDateBySecond end.*/

            /*SC._0xbed9ceeb.GetTodayZeroTime start.*/
            GetTodayZeroTime: function (_0x55a0e4db) {
                if (_0x55a0e4db === void 0) { _0x55a0e4db = 0; }
                return 0;
            },
            /*SC._0xbed9ceeb.GetTodayZeroTime end.*/

            /*SC._0xbed9ceeb.GetTodayZeroTime$1 start.*/
            GetTodayZeroTime$1: function (_0xf9f6c515) {
                return 0;
            },
            /*SC._0xbed9ceeb.GetTodayZeroTime$1 end.*/

            /*SC._0xbed9ceeb.GetWeekZeroTime start.*/
            GetWeekZeroTime: function () {
                return 0;
            },
            /*SC._0xbed9ceeb.GetWeekZeroTime end.*/

            /*SC._0xbed9ceeb.AddAdExpirationTime start.*/
            AddAdExpirationTime: function (_0x271f64fa) { },
            /*SC._0xbed9ceeb.AddAdExpirationTime end.*/

            /*SC._0xbed9ceeb.GetAdExpirationTime start.*/
            GetAdExpirationTime: function () {
                return System.Int64(0);
            },
            /*SC._0xbed9ceeb.GetAdExpirationTime end.*/


        },
        overloads: {
            "GetTodayZeroTime(string)": "GetTodayZeroTime$1"
        }
    });
    /*SC._0xbed9ceeb end.*/

    /*SC._0xc1e449cf start.*/
    Bridge.define("SC._0xc1e449cf", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*SC._0xc1e449cf.Awake start.*/
            Awake: function () {

                var _0xaac2fc2b = this.GetComponent(UnityEngine.UI.Button);
                _0xaac2fc2b.onClick.RemoveAllListeners();
                _0xaac2fc2b.onClick.AddListener(Bridge.fn.cacheBind(this, this.onClick_BtnDownload));
            },
            /*SC._0xc1e449cf.Awake end.*/

            /*SC._0xc1e449cf.onClick_BtnDownload start.*/
            onClick_BtnDownload: function () {
                SC.sc.web.GoDownload();
            },
            /*SC._0xc1e449cf.onClick_BtnDownload end.*/


        }
    });
    /*SC._0xc1e449cf end.*/

    /*SC._0xc807ab2c start.*/
    Bridge.define("SC._0xc807ab2c", {
        fields: {
            _0xa0d6e43a: null,
            _0xfd344035: 0
        },
        ctors: {
            init: function () {
                this._0xa0d6e43a = new (System.Collections.Generic.Dictionary$2(System.Int32,UnityEngine.Coroutine)).ctor();
                this._0xfd344035 = 1;
            }
        },
        methods: {
            /*SC._0xc807ab2c.DelayTimeBackCall start.*/
            DelayTimeBackCall: function (_0x6244214d, _0x1511a7e0, _0x933fbd61) {
                if (_0x1511a7e0 === void 0) { _0x1511a7e0 = 0.0; }
                if (_0x933fbd61 === void 0) { _0x933fbd61 = 0; }
                if (Bridge.staticEquals(_0x6244214d, null)) {
                    return -1;
                }
                var _0xe2379efa = _0x933fbd61 !== 0 ? _0x933fbd61 : Bridge.identity(this._0xfd344035, ((this._0xfd344035 = (this._0xfd344035 + 1) | 0)));
                if (_0x1511a7e0 > 0) {
                    var _0xda142cc6 = SC.sc.instance.StartCoroutine$1(this._0xff6a8e38(_0x6244214d, _0x1511a7e0, _0xe2379efa));
                    this._0xa0d6e43a.add(_0xe2379efa, _0xda142cc6);
                } else {
                    _0x6244214d();
                }

                return _0xe2379efa;
            },
            /*SC._0xc807ab2c.DelayTimeBackCall end.*/

            /*SC._0xc807ab2c.StopDelayedCall start.*/
            StopDelayedCall: function (_0xc6acfd86) {
                var coroutine = { };
                if (this._0xa0d6e43a.tryGetValue(_0xc6acfd86, coroutine)) {
                    SC.sc.instance.StopCoroutine$2(coroutine.v);
                    this._0xa0d6e43a.remove(_0xc6acfd86);
                    return true;
                }

                return false;
            },
            /*SC._0xc807ab2c.StopDelayedCall end.*/

            /*SC._0xc807ab2c.StopAllDelayedCalls start.*/
            StopAllDelayedCalls: function () {
                var $t;
                $t = Bridge.getEnumerator(this._0xa0d6e43a.Values);
                try {
                    while ($t.moveNext()) {
                        var coroutine = $t.Current;
                        SC.sc.instance.StopCoroutine$2(coroutine);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._0xa0d6e43a.clear();
            },
            /*SC._0xc807ab2c.StopAllDelayedCalls end.*/

            /*SC._0xc807ab2c.EndOfFrameBackCall start.*/
            EndOfFrameBackCall: function (_0xd5442c5b) {
                if (Bridge.staticEquals(_0xd5442c5b, null)) {
                    return;
                }
                SC.sc.instance.StartCoroutine$1(this._0xcf462b5a(_0xd5442c5b));
            },
            /*SC._0xc807ab2c.EndOfFrameBackCall end.*/

            /*SC._0xc807ab2c._0xcf462b5a start.*/
            _0xcf462b5a: function (_0x9a1ecbf9) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    _0x9a1ecbf9();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SC._0xc807ab2c._0xcf462b5a end.*/

            /*SC._0xc807ab2c._0xff6a8e38 start.*/
            _0xff6a8e38: function (_0xbf6a3f35, _0xd7d91697, _0x6e3e2ca4) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(_0xd7d91697);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    _0xbf6a3f35();
                                        this._0xa0d6e43a.remove(_0x6e3e2ca4);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SC._0xc807ab2c._0xff6a8e38 end.*/


        }
    });
    /*SC._0xc807ab2c end.*/

    /*SC._0xc8c6ac7c start.*/
    Bridge.define("SC._0xc8c6ac7c", {
        fields: {
            EventType: null
        },
        ctors: {
            init: function () {
                this.EventType = new SC.Events.EnumShowVideoType();
            }
        },
        methods: {
            /*SC._0xc8c6ac7c.IsEnableAd start.*/
            IsEnableAd: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsEnableAd end.*/

            /*SC._0xc8c6ac7c.IsEnableDiamondVideo start.*/
            IsEnableDiamondVideo: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsEnableDiamondVideo end.*/

            /*SC._0xc8c6ac7c.SetEnableAd start.*/
            SetEnableAd: function (_0xb6fae8a9) { },
            /*SC._0xc8c6ac7c.SetEnableAd end.*/

            /*SC._0xc8c6ac7c.GetIsShowBanner start.*/
            GetIsShowBanner: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.GetIsShowBanner end.*/

            /*SC._0xc8c6ac7c.GetIsLeftTop start.*/
            GetIsLeftTop: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.GetIsLeftTop end.*/

            /*SC._0xc8c6ac7c.HideBanner start.*/
            HideBanner: function () { },
            /*SC._0xc8c6ac7c.HideBanner end.*/

            /*SC._0xc8c6ac7c.ShowBanner start.*/
            ShowBanner: function (_0x2136afc8) { },
            /*SC._0xc8c6ac7c.ShowBanner end.*/

            /*SC._0xc8c6ac7c.SetBannerPosition start.*/
            SetBannerPosition: function (_0x77befaa8) { },
            /*SC._0xc8c6ac7c.SetBannerPosition end.*/

            /*SC._0xc8c6ac7c.ShowBannerByType start.*/
            ShowBannerByType: function (_0x9470e7b8) { },
            /*SC._0xc8c6ac7c.ShowBannerByType end.*/

            /*SC._0xc8c6ac7c.ShowNewBannerAd start.*/
            ShowNewBannerAd: function (_0x4b212fcf, _0xebc0aac7) { },
            /*SC._0xc8c6ac7c.ShowNewBannerAd end.*/

            /*SC._0xc8c6ac7c.ShowFullscreenAds start.*/
            ShowFullscreenAds: function (_0x2f707f8c) {
                if (_0x2f707f8c === void 0) { _0x2f707f8c = true; }
            },
            /*SC._0xc8c6ac7c.ShowFullscreenAds end.*/

            /*SC._0xc8c6ac7c.IsVideoReady start.*/
            IsVideoReady: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsVideoReady end.*/

            /*SC._0xc8c6ac7c.ShowVideoAdIncludeTip$1 start.*/
            ShowVideoAdIncludeTip$1: function (_0x136ccfd1, _0xc1439ec9) {
                if (_0xc1439ec9 === void 0) { _0xc1439ec9 = null; }
            },
            /*SC._0xc8c6ac7c.ShowVideoAdIncludeTip$1 end.*/

            /*SC._0xc8c6ac7c.ShowVideoAdIncludeTip start.*/
            ShowVideoAdIncludeTip: function (_0x94908bb9, _0xa9d80472) {
                if (_0xa9d80472 === void 0) { _0xa9d80472 = null; }
            },
            /*SC._0xc8c6ac7c.ShowVideoAdIncludeTip end.*/

            /*SC._0xc8c6ac7c.ShowVideoAdAutoMobClickCount start.*/
            ShowVideoAdAutoMobClickCount: function (_0x68f9a893, _0x6aaad16a, _0x7d290dc5) {
                if (_0x7d290dc5 === void 0) { _0x7d290dc5 = null; }
                return false;
            },
            /*SC._0xc8c6ac7c.ShowVideoAdAutoMobClickCount end.*/

            /*SC._0xc8c6ac7c.ShowMoreVideoRewards_Item start.*/
            ShowMoreVideoRewards_Item: function (_0xa746fb7e, _0x6363fa2b, _0x7125c2d9) {
                if (_0x7125c2d9 === void 0) { _0x7125c2d9 = null; }
            },
            /*SC._0xc8c6ac7c.ShowMoreVideoRewards_Item end.*/

            /*SC._0xc8c6ac7c.ShowMoreVideoRewards_Gift start.*/
            ShowMoreVideoRewards_Gift: function (_0x36540fae, _0x7c2d1fd1, _0xd071d589) {
                if (_0xd071d589 === void 0) { _0xd071d589 = null; }
            },
            /*SC._0xc8c6ac7c.ShowMoreVideoRewards_Gift end.*/

            /*SC._0xc8c6ac7c.IsSupportNativeAd start.*/
            IsSupportNativeAd: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsSupportNativeAd end.*/

            /*SC._0xc8c6ac7c.IsEnableNativeAdByAdType start.*/
            IsEnableNativeAdByAdType: function (_0xbf8c955e) {
                return false;
            },
            /*SC._0xc8c6ac7c.IsEnableNativeAdByAdType end.*/

            /*SC._0xc8c6ac7c.SetNativeAdPosition start.*/
            SetNativeAdPosition: function (_0xbeda5270, _0x86cc612e, _0x457eb63e, _0xa723e91b, _0xb2b51933, _0x6b58cd61, _0xa16f9d76) {
                if (_0xa16f9d76 === void 0) { _0xa16f9d76 = false; }
            },
            /*SC._0xc8c6ac7c.SetNativeAdPosition end.*/

            /*SC._0xc8c6ac7c.ShowNativeAd start.*/
            ShowNativeAd: function (_0x81d89a7b, _0xeb2d68d0, _0x5946cfba) {
                if (_0x5946cfba === void 0) { _0x5946cfba = ""; }
            },
            /*SC._0xc8c6ac7c.ShowNativeAd end.*/

            /*SC._0xc8c6ac7c.ShowDemonstrationNativeAd start.*/
            ShowDemonstrationNativeAd: function (_0xc0e0e079, _0x02aebd4c, _0xfcb8c184, _0x7b2e9442) {
                if (_0xfcb8c184 === void 0) { _0xfcb8c184 = ""; }
                if (_0x7b2e9442 === void 0) { _0x7b2e9442 = null; }
            },
            /*SC._0xc8c6ac7c.ShowDemonstrationNativeAd end.*/

            /*SC._0xc8c6ac7c.HideNativeAd start.*/
            HideNativeAd: function (_0x3e42ab3c, _0x6e583da7) { },
            /*SC._0xc8c6ac7c.HideNativeAd end.*/

            /*SC._0xc8c6ac7c.IsNativeAdReady start.*/
            IsNativeAdReady: function (_0xcdb7023d, _0xdaf973a9) {
                return false;
            },
            /*SC._0xc8c6ac7c.IsNativeAdReady end.*/

            /*SC._0xc8c6ac7c.ShowAllNativeAdByNode start.*/
            ShowAllNativeAdByNode: function (_0x3812bbd8) { },
            /*SC._0xc8c6ac7c.ShowAllNativeAdByNode end.*/

            /*SC._0xc8c6ac7c.HideAllNativeAd start.*/
            HideAllNativeAd: function () { },
            /*SC._0xc8c6ac7c.HideAllNativeAd end.*/

            /*SC._0xc8c6ac7c.IsSupportFullPicture start.*/
            IsSupportFullPicture: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsSupportFullPicture end.*/

            /*SC._0xc8c6ac7c.IsFullPictureReady start.*/
            IsFullPictureReady: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsFullPictureReady end.*/

            /*SC._0xc8c6ac7c.ShowFullPicture start.*/
            ShowFullPicture: function () { },
            /*SC._0xc8c6ac7c.ShowFullPicture end.*/

            /*SC._0xc8c6ac7c.ShowFullPicture$1 start.*/
            ShowFullPicture$1: function (_0x52bbeb7c) { },
            /*SC._0xc8c6ac7c.ShowFullPicture$1 end.*/

            /*SC._0xc8c6ac7c.SetShieldPopDemonAdWindowData start.*/
            SetShieldPopDemonAdWindowData: function (_0x96acb24a, _0xed8324f1) { },
            /*SC._0xc8c6ac7c.SetShieldPopDemonAdWindowData end.*/

            /*SC._0xc8c6ac7c.IsSupportTimeLimitedCloseAd start.*/
            IsSupportTimeLimitedCloseAd: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsSupportTimeLimitedCloseAd end.*/

            /*SC._0xc8c6ac7c.IsTimelinessADEffect start.*/
            IsTimelinessADEffect: function () {
                return false;
            },
            /*SC._0xc8c6ac7c.IsTimelinessADEffect end.*/

            /*SC._0xc8c6ac7c.AddTimeLimitedCloseAdTime start.*/
            AddTimeLimitedCloseAdTime: function (_0x6a59b49a) { },
            /*SC._0xc8c6ac7c.AddTimeLimitedCloseAdTime end.*/

            /*SC._0xc8c6ac7c.GetTimeLimitedCloseAdTime start.*/
            GetTimeLimitedCloseAdTime: function () {
                return System.Int64(0);
            },
            /*SC._0xc8c6ac7c.GetTimeLimitedCloseAdTime end.*/


        },
        overloads: {
            "ShowVideoAdIncludeTip(Action<string>, string)": "ShowVideoAdIncludeTip$1",
            "ShowFullPicture(string)": "ShowFullPicture$1"
        }
    });
    /*SC._0xc8c6ac7c end.*/

    /*SC._0xccb74242 start.*/
    Bridge.define("SC._0xccb74242", {
        methods: {
            /*SC._0xccb74242.SetImgForTarget$3 start.*/
            SetImgForTarget$3: function (_0x034ad094, _0x23b66ca9) {
                return 0;
            },
            /*SC._0xccb74242.SetImgForTarget$3 end.*/

            /*SC._0xccb74242.SetImgForTarget start.*/
            SetImgForTarget: function (_0x134e8315, _0x95cb5b76) {
                return 0;
            },
            /*SC._0xccb74242.SetImgForTarget end.*/

            /*SC._0xccb74242.SetImgForTarget$1 start.*/
            SetImgForTarget$1: function (_0xeb707c6c, _0x31b3dd93, _0x1afb5f2e) {
                return 0;
            },
            /*SC._0xccb74242.SetImgForTarget$1 end.*/

            /*SC._0xccb74242.SetImgForTarget$2 start.*/
            SetImgForTarget$2: function (_0x760316e5, _0x92880c4c, _0xbe0ee9a8, _0x6c2f1716) {
                return 0;
            },
            /*SC._0xccb74242.SetImgForTarget$2 end.*/

            /*SC._0xccb74242.SetImgForTarget$4 start.*/
            SetImgForTarget$4: function (_0x5bc175df, _0x4b2202c9) { },
            /*SC._0xccb74242.SetImgForTarget$4 end.*/

            /*SC._0xccb74242.LoadSprite start.*/
            LoadSprite: function (_0xd095f855, _0x7d26fad8) {
                return 0;
            },
            /*SC._0xccb74242.LoadSprite end.*/

            /*SC._0xccb74242.LoadTexture start.*/
            LoadTexture: function (_0x39d85a93, _0x61ba3451) {
                return 0;
            },
            /*SC._0xccb74242.LoadTexture end.*/

            /*SC._0xccb74242.CancelLoad start.*/
            CancelLoad: function (_0xfc778a29) { },
            /*SC._0xccb74242.CancelLoad end.*/


        },
        overloads: {
            "SetImgForTarget(Transform, string)": "SetImgForTarget$3",
            "SetImgForTarget(Component, string, Rect)": "SetImgForTarget$1",
            "SetImgForTarget(Component, string, Rect, UnityEngine.Vector2)": "SetImgForTarget$2",
            "SetImgForTarget(Image, string)": "SetImgForTarget$4"
        }
    });
    /*SC._0xccb74242 end.*/

    /*SC._0xd3acda1a start.*/
    Bridge.define("SC._0xd3acda1a", {
        fields: {
            AssetPool_Capacity: 0,
            AssetPool_AutoReleaseInterval: 0
        },
        ctors: {
            init: function () {
                this.AssetPool_Capacity = 0;
                this.AssetPool_AutoReleaseInterval = 0.0;
            }
        },
        methods: {
            /*SC._0xd3acda1a.LoadAssetAsync$4 start.*/
            LoadAssetAsync$4: function (T, _0x7b5a6269, _0x16446b53) { },
            /*SC._0xd3acda1a.LoadAssetAsync$4 end.*/

            /*SC._0xd3acda1a.LoadAssetAsync$5 start.*/
            LoadAssetAsync$5: function (T, _0xb08b3b3d, _0xb66e9807, _0x6b14fc2c) { },
            /*SC._0xd3acda1a.LoadAssetAsync$5 end.*/

            /*SC._0xd3acda1a.LoadAssetAsync start.*/
            LoadAssetAsync: function (_0xfa2beb8d, _0x7a0cac48) { },
            /*SC._0xd3acda1a.LoadAssetAsync end.*/

            /*SC._0xd3acda1a.LoadAssetAsync$2 start.*/
            LoadAssetAsync$2: function (_0xd7ea7545, _0xd6ffb1de) { },
            /*SC._0xd3acda1a.LoadAssetAsync$2 end.*/

            /*SC._0xd3acda1a.LoadAssetAsync$1 start.*/
            LoadAssetAsync$1: function (_0xdbee15b7, _0xb139cb5b, _0xc14a24a3) { },
            /*SC._0xd3acda1a.LoadAssetAsync$1 end.*/

            /*SC._0xd3acda1a.LoadAssetAsync$3 start.*/
            LoadAssetAsync$3: function (_0xf3018c8b, _0xfd95431e, _0xe1854758, _0x22d08548) { },
            /*SC._0xd3acda1a.LoadAssetAsync$3 end.*/

            /*SC._0xd3acda1a.LoadAsset$3 start.*/
            LoadAsset$3: function (_0xcf8be0a4) {
                return null;
            },
            /*SC._0xd3acda1a.LoadAsset$3 end.*/

            /*SC._0xd3acda1a.LoadAsset$1 start.*/
            LoadAsset$1: function (T, _0xa5b684ca) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xd3acda1a.LoadAsset$1 end.*/

            /*SC._0xd3acda1a.LoadAsset$2 start.*/
            LoadAsset$2: function (T, _0xfb5b86e8, _0x560c9477) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xd3acda1a.LoadAsset$2 end.*/

            /*SC._0xd3acda1a.LoadAsset start.*/
            LoadAsset: function (T, _0x1c13fba1, _0x0e54147d) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xd3acda1a.LoadAsset end.*/

            /*SC._0xd3acda1a.LoadAssets$1 start.*/
            LoadAssets$1: function (_0x8fbe7f20) {
                return null;
            },
            /*SC._0xd3acda1a.LoadAssets$1 end.*/

            /*SC._0xd3acda1a.LoadAssets start.*/
            LoadAssets: function (T, _0x9cf4471c) {
                return null;
            },
            /*SC._0xd3acda1a.LoadAssets end.*/

            /*SC._0xd3acda1a.LoadShader start.*/
            LoadShader: function (_0xd75825e0) {
                return null;
            },
            /*SC._0xd3acda1a.LoadShader end.*/

            /*SC._0xd3acda1a.UnloadAsset start.*/
            UnloadAsset: function (_0xd1ee9718) { },
            /*SC._0xd3acda1a.UnloadAsset end.*/


        },
        overloads: {
            "LoadAssetAsync(string, SC._0x0df97461)": "LoadAssetAsync$4",
            "LoadAssetAsync(string, SC._0x0df97461, object)": "LoadAssetAsync$5",
            "LoadAssetAsync(string, SC.LoadSuccessCallback)": "LoadAssetAsync$2",
            "LoadAssetAsync(string, SC._0x0df97461, object)": "LoadAssetAsync$1",
            "LoadAssetAsync(string, Type, SC._0x0df97461, object)": "LoadAssetAsync$3",
            "LoadAsset(string)": "LoadAsset$3",
            "LoadAsset(string)": "LoadAsset$1",
            "LoadAsset(string, string)": "LoadAsset$2",
            "LoadAssets(string)": "LoadAssets$1"
        }
    });
    /*SC._0xd3acda1a end.*/

    /*SC._0xd8ffff25 start.*/
    Bridge.define("SC._0xd8ffff25", {
        fields: {
            _0xaf8bd9a6: null,
            iEventHandlerCount: 0,
            iEventCount: 0,
            EventType: null
        },
        ctors: {
            init: function () {
                this._0xaf8bd9a6 = new (System.Collections.Generic.Dictionary$2(System.String,Function)).ctor();
                this.EventType = new SC.Events._0x69d68f1a();
            }
        },
        methods: {
            /*SC._0xd8ffff25.On start.*/
            On: function (_0x6bf70b7a, _0xe2e07b00) {
                if (this._0xaf8bd9a6.containsKey(_0x6bf70b7a)) {
                    this._0xaf8bd9a6.setItem(_0x6bf70b7a, Bridge.fn.combine(this._0xaf8bd9a6.getItem(_0x6bf70b7a), _0xe2e07b00));
                } else {
                    this._0xaf8bd9a6.setItem(_0x6bf70b7a, _0xe2e07b00);
                }
            },
            /*SC._0xd8ffff25.On end.*/

            /*SC._0xd8ffff25.Off start.*/
            Off: function (_0xfe450af3, _0x9dad3b5e) {
                if (this._0xaf8bd9a6.containsKey(_0xfe450af3)) {
                    this._0xaf8bd9a6.setItem(_0xfe450af3, Bridge.fn.remove(this._0xaf8bd9a6.getItem(_0xfe450af3), _0x9dad3b5e));
                }
            },
            /*SC._0xd8ffff25.Off end.*/

            /*SC._0xd8ffff25.Event$1 start.*/
            Event$1: function (_0xbcc1c457, _0xa5eb9873) {
                if (this._0xaf8bd9a6.containsKey(_0xbcc1c457)) {
                    if (!Bridge.staticEquals(this._0xaf8bd9a6.getItem(_0xbcc1c457), null)) {
                        this._0xaf8bd9a6.getItem(_0xbcc1c457)(_0xa5eb9873);
                    }
                }
            },
            /*SC._0xd8ffff25.Event$1 end.*/

            /*SC._0xd8ffff25.Event$2 start.*/
            Event$2: function (_0xa3ca747f, _0x40f4e5b4, _0x3d5ccaf9, _0x7f3ba858, _0xa358273d, _0x51829309) {
                if (_0x40f4e5b4 === void 0) { _0x40f4e5b4 = null; }
                if (_0x3d5ccaf9 === void 0) { _0x3d5ccaf9 = null; }
                if (_0x7f3ba858 === void 0) { _0x7f3ba858 = null; }
                if (_0xa358273d === void 0) { _0xa358273d = null; }
                if (_0x51829309 === void 0) { _0x51829309 = null; }
                if (System.String.isNullOrEmpty(_0xa3ca747f)) {
                    return;
                }

                var _0x70e201f4 = SC.SCEventArgs.Create(_0x40f4e5b4, _0x3d5ccaf9, _0x7f3ba858, _0xa358273d, _0x51829309);
                _0x70e201f4._0xb0d3dfe8 = _0xa3ca747f;
                if (this._0xaf8bd9a6.containsKey(_0xa3ca747f)) {
                    if (!Bridge.staticEquals(this._0xaf8bd9a6.getItem(_0xa3ca747f), null)) {
                        this._0xaf8bd9a6.getItem(_0xa3ca747f)(_0x70e201f4);
                    }
                }
            },
            /*SC._0xd8ffff25.Event$2 end.*/

            /*SC._0xd8ffff25.Event start.*/
            Event: function (_0x46e5a7d0) { },
            /*SC._0xd8ffff25.Event end.*/

            /*SC._0xd8ffff25.Count start.*/
            Count: function (_0x90813747) {
                return 0;
            },
            /*SC._0xd8ffff25.Count end.*/

            /*SC._0xd8ffff25.Check start.*/
            Check: function (_0x610531cb, _0x5d6cbf39) {
                return false;
            },
            /*SC._0xd8ffff25.Check end.*/

            /*SC._0xd8ffff25.SetDefaultHandler start.*/
            SetDefaultHandler: function (_0xe500354c) { },
            /*SC._0xd8ffff25.SetDefaultHandler end.*/

            /*SC._0xd8ffff25.EventNow start.*/
            EventNow: function (_0x9443da82) { },
            /*SC._0xd8ffff25.EventNow end.*/

            /*SC._0xd8ffff25.EventNow$1 start.*/
            EventNow$1: function (_0xc1f921a1, _0x61a991ef, _0xf5b1667e, _0xe567212f, _0x16d9e1d1, _0x71ec6c75) { },
            /*SC._0xd8ffff25.EventNow$1 end.*/


        },
        overloads: {
            "Event(string, SCEventArgs)": "Event$1",
            "Event(string, object, object, object, object, object)": "Event$2",
            "EventNow(System.String, System.Object, System.Object, System.Object, System.Object, System.Object)": "EventNow$1"
        }
    });
    /*SC._0xd8ffff25 end.*/

    /*SC._0xda5e030f start.*/
    Bridge.define("SC._0xda5e030f", {
        fields: {
            bEmpty: false,
            position: null,
            rotation: null,
            scale: null,
            anchoredPosition: null,
            sizeDelta: null,
            anchorMin: null,
            anchorMax: null,
            pivot: null
        },
        ctors: {
            init: function () {
                this.position = new UnityEngine.Vector3();
                this.rotation = new UnityEngine.Quaternion();
                this.scale = new UnityEngine.Vector3();
                this.anchoredPosition = new UnityEngine.Vector2();
                this.sizeDelta = new UnityEngine.Vector2();
                this.anchorMin = new UnityEngine.Vector2();
                this.anchorMax = new UnityEngine.Vector2();
                this.pivot = new UnityEngine.Vector2();
                this.bEmpty = true;
            }
        }
    });
    /*SC._0xda5e030f end.*/

    /*SC._0xde080b51 start.*/
    Bridge.define("SC._0xde080b51", {
        statics: {
            fields: {
                _0xd495fc77: null
            },
            ctors: {
                init: function () {
                    this._0xd495fc77 = "config";
                }
            }
        },
        fields: {
            _0x1de9d89e: null
        },
        props: {
            _0xd058b242: {
                get: function () {
                    if (this._0x1de9d89e == null) {
                        this._0x139f2bc2();
                    }

                    return this._0x1de9d89e;
                }
            }
        },
        methods: {
            /*SC._0xde080b51._0x139f2bc2 start.*/
            _0x139f2bc2: function () {
                var $t;
                this._0x1de9d89e = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object)))).ctor();
                var _0x8ae987df = UnityEngine.Resources.LoadAll(UnityEngine.TextAsset, SC._0xde080b51._0xd495fc77);
                $t = Bridge.getEnumerator(_0x8ae987df);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var _0x79a5d54e = item.name;
                        var _0xef89d2fc = item.text;
                        if (Bridge.referenceEquals(_0xef89d2fc, "") || System.String.contains(_0x79a5d54e,"data")) {
                            continue;
                        }


                        var _0xfb0d94d4 = SC.Utility.TExcel.ExcelToJson(_0xef89d2fc, _0x79a5d54e);
                        this._0xd058b242.add(_0x79a5d54e, _0xfb0d94d4);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SC._0xde080b51._0x139f2bc2 end.*/

            /*SC._0xde080b51.Refresh start.*/
            Refresh: function () { },
            /*SC._0xde080b51.Refresh end.*/

            /*SC._0xde080b51.GetTable start.*/
            GetTable: function (_0xda5db7f0) {
                if (this._0xd058b242.containsKey(_0xda5db7f0)) {
                    return this._0xd058b242.getItem(_0xda5db7f0);
                }

                return null;
            },
            /*SC._0xde080b51.GetTable end.*/

            /*SC._0xde080b51.GetColumn$1 start.*/
            GetColumn$1: function (_0x3556da2f, _0x19d91ef4, _0x0db0289c) {
                if (this._0xd058b242.containsKey(_0x3556da2f)) {
                    var _0x7dc842a9 = this._0xd058b242.getItem(_0x3556da2f);
                    if (_0x7dc842a9.containsKey(_0x19d91ef4)) {
                        var _0x6b98afa6 = _0x7dc842a9.getItem(_0x19d91ef4);
                        if (_0x6b98afa6.containsKey(_0x0db0289c)) {
                            return _0x6b98afa6.getItem(_0x0db0289c);
                        }
                    }
                }

                return null;
            },
            /*SC._0xde080b51.GetColumn$1 end.*/

            /*SC._0xde080b51.GetColumn start.*/
            GetColumn: function (T, _0x1aaa7a23, _0xfd5a158e, _0x0d005dc6) {
                return Bridge.cast(Bridge.unbox(this.GetColumn$1(_0x1aaa7a23, _0xfd5a158e, _0x0d005dc6), T), T);
            },
            /*SC._0xde080b51.GetColumn end.*/

            /*SC._0xde080b51.GetRow$2 start.*/
            GetRow$2: function (_0xef18f7fb, _0x47f48991) {
                return null;
            },
            /*SC._0xde080b51.GetRow$2 end.*/

            /*SC._0xde080b51.GetRow$1 start.*/
            GetRow$1: function (T, _0xcd457bf4, _0x523c0455) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xde080b51.GetRow$1 end.*/

            /*SC._0xde080b51.GetRow start.*/
            GetRow: function (T, _0x89df1f66, _0x1c93648d, _0xa7e3c2a5) {
                return Bridge.getDefaultValue(T);
            },
            /*SC._0xde080b51.GetRow end.*/

            /*SC._0xde080b51.IsExistTable start.*/
            IsExistTable: function (_0x103d4cfb) {
                return false;
            },
            /*SC._0xde080b51.IsExistTable end.*/

            /*SC._0xde080b51.GetList start.*/
            GetList: function (T, _0xd0b754f6) {
                return null;
            },
            /*SC._0xde080b51.GetList end.*/

            /*SC._0xde080b51.GetList$1 start.*/
            GetList$1: function (_0xffbfebbb, _0x7009c08e) {
                return null;
            },
            /*SC._0xde080b51.GetList$1 end.*/


        },
        overloads: {
            "GetColumn(string, string, string)": "GetColumn$1",
            "GetRow(string, string)": "GetRow$2",
            "GetRow(string, string)": "GetRow$1",
            "GetList(string, Type)": "GetList$1"
        }
    });
    /*SC._0xde080b51 end.*/

    /*SC._0xde080b51+_0x7f802bc6 start.*/
    Bridge.define("SC._0xde080b51._0x7f802bc6", {
        $kind: 1006,
        statics: {
            fields: {
                _0x2ebeaef5: 0,
                _0x29062255: 1
            }
        }
    });
    /*SC._0xde080b51+_0x7f802bc6 end.*/

    /*SC._0xe343fa14._0x2a39df3f start.*/
    Bridge.define("SC._0xe343fa14._0x2a39df3f", {
        $kind: 6,
        statics: {
            fields: {
                _0x22292fca: 0,
                _0x71487f0a: 1,
                _0x5a670925: 2
            }
        }
    });
    /*SC._0xe343fa14._0x2a39df3f end.*/

    /*SC._0xe343fa14._0x4d8eeb7d start.*/
    Bridge.define("SC._0xe343fa14._0x4d8eeb7d", {
        $kind: 6,
        statics: {
            fields: {
                _0x501c2be5: 0,
                _0xb016dcc3: 1,
                _0xd4f77999: 2
            }
        }
    });
    /*SC._0xe343fa14._0x4d8eeb7d end.*/

    /*SC._0xe343fa14._0xab423958 start.*/
    Bridge.define("SC._0xe343fa14._0xab423958", {
        $kind: 6,
        statics: {
            fields: {
                _0xdbe10c1e: 0,
                _0x45e5e73d: 1,
                _0x2a5a8248: 2,
                _0xf155878c: -1
            }
        }
    });
    /*SC._0xe343fa14._0xab423958 end.*/

    /*SC._0xe343fa14._0xba25f158 start.*/
    Bridge.define("SC._0xe343fa14._0xba25f158", {
        $kind: 6,
        statics: {
            fields: {
                _0x0f95052e: 0,
                _0x7537a158: 1,
                _0xd2956fba: 2,
                _0xbae13d54: 3
            }
        }
    });
    /*SC._0xe343fa14._0xba25f158 end.*/

    /*SC._0xe343fa14._0xd88ed2ae start.*/
    Bridge.define("SC._0xe343fa14._0xd88ed2ae", {
        $kind: 6,
        statics: {
            fields: {
                _0x837df16a: 0,
                _0x43b04c6e: 1,
                _0xf418d6d0: 2,
                _0xd8bfb16d: 3
            }
        }
    });
    /*SC._0xe343fa14._0xd88ed2ae end.*/

    /*SC._0xe343fa14._0xda32970e start.*/
    Bridge.define("SC._0xe343fa14._0xda32970e", {
        $kind: 6,
        statics: {
            fields: {
                _0xdff30e73: 0,
                _0xf41e60d6: 1,
                _0x78d48e6f: 2,
                _0x22050865: 3
            }
        }
    });
    /*SC._0xe343fa14._0xda32970e end.*/

    /*SC._0xe343fa14._0xf0ed6377 start.*/
    Bridge.define("SC._0xe343fa14._0xf0ed6377", {
        $kind: 6,
        statics: {
            fields: {
                _0x3f3b28c9: 0,
                _0xe04d8669: 1,
                _0x456e1ccd: 2,
                _0x169a8730: 3,
                _0xea93af2e: 4,
                _0x301dc6c3: 5
            }
        }
    });
    /*SC._0xe343fa14._0xf0ed6377 end.*/

    /*SC._0xe4b5de9a start.*/
    Bridge.define("SC._0xe4b5de9a", {
        fields: {
            LoadMode: 0,
            LoadSceneSuccess: null
        },
        methods: {
            /*SC._0xe4b5de9a.LoadScene start.*/
            LoadScene: function (_0x54679aef) {
                var _0xaccaec1b = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync$1(_0x54679aef, UnityEngine.SceneManagement.LoadSceneMode.Single);
                _0xaccaec1b.addcompleted(Bridge.fn.bind(this, function (_0x08647b9c) {
                    if (!Bridge.staticEquals(this.LoadSceneSuccess, null)) {
                        if (_0xaccaec1b.isDone$1) {
                            this.LoadSceneSuccess(new SC._0x40d08fac());
                        }
                    }
                }));
            },
            /*SC._0xe4b5de9a.LoadScene end.*/

            /*SC._0xe4b5de9a.LoadScene$1 start.*/
            LoadScene$1: function (_0x1eea0faa, _0xf3a74b45) {
                this.LoadScene(_0x1eea0faa);
            },
            /*SC._0xe4b5de9a.LoadScene$1 end.*/

            /*SC._0xe4b5de9a.LoadScene$2 start.*/
            LoadScene$2: function (_0x28fa5af8) {
                var _0xf22f4cec = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync$3(_0x28fa5af8, UnityEngine.SceneManagement.LoadSceneMode.Single);
                _0xf22f4cec.addcompleted(Bridge.fn.bind(this, function (_0xadd238b9) {
                    if (!Bridge.staticEquals(this.LoadSceneSuccess, null)) {
                        if (_0xf22f4cec.isDone$1) {
                            this.LoadSceneSuccess(new SC._0x40d08fac());
                        }
                    }
                }));
            },
            /*SC._0xe4b5de9a.LoadScene$2 end.*/

            /*SC._0xe4b5de9a.LoadScene$3 start.*/
            LoadScene$3: function (_0x235b1cd2, _0x727804d9) {
                this.LoadScene$2(_0x235b1cd2);
            },
            /*SC._0xe4b5de9a.LoadScene$3 end.*/

            /*SC._0xe4b5de9a.UnloadScene start.*/
            UnloadScene: function (_0x8f5664e1) {
                UnityEngine.SceneManagement.SceneManager.UnloadSceneAsync(_0x8f5664e1);
            },
            /*SC._0xe4b5de9a.UnloadScene end.*/

            /*SC._0xe4b5de9a.UnloadScene$3 start.*/
            UnloadScene$3: function (_0xd3f96f69) {
                UnityEngine.SceneManagement.SceneManager.UnloadSceneAsync$2(_0xd3f96f69);
            },
            /*SC._0xe4b5de9a.UnloadScene$3 end.*/

            /*SC._0xe4b5de9a.UnloadScene$1 start.*/
            UnloadScene$1: function (_0x973cb5e7) {
                UnityEngine.SceneManagement.SceneManager.UnloadSceneAsync$1(_0x973cb5e7);
            },
            /*SC._0xe4b5de9a.UnloadScene$1 end.*/

            /*SC._0xe4b5de9a.UnloadScene$2 start.*/
            UnloadScene$2: function (_0x655f694c, _0x21c39412) {
                this.UnloadScene$1(_0x655f694c);
            },
            /*SC._0xe4b5de9a.UnloadScene$2 end.*/


        },
        overloads: {
            "LoadScene(int, object)": "LoadScene$1",
            "LoadScene(string)": "LoadScene$2",
            "LoadScene(string, object)": "LoadScene$3",
            "UnloadScene(UnityEngine.SceneManagement.Scene)": "UnloadScene$3",
            "UnloadScene(string)": "UnloadScene$1",
            "UnloadScene(string, object)": "UnloadScene$2"
        }
    });
    /*SC._0xe4b5de9a end.*/

    /*SC._0xe4b5de9a+_0xf8fa6431 start.*/
    Bridge.define("SC._0xe4b5de9a._0xf8fa6431", {
        $kind: 1002
    });
    /*SC._0xe4b5de9a+_0xf8fa6431 end.*/

    /*SC._0xe9f3d109 start.*/
    Bridge.define("SC._0xe9f3d109", {
        statics: {
            fields: {
                Def: null
            },
            ctors: {
                init: function () {
                    this.Def = "";
                }
            }
        }
    });
    /*SC._0xe9f3d109 end.*/

    /*SC._0xea696b74 start.*/
    Bridge.define("SC._0xea696b74", {
        statics: {
            fields: {
                _0x6c391a32: null,
                _0x869be08e: false,
                _0x12c6cd40: false
            },
            props: {
                IsMaskShow: {
                    get: function () {
                        return SC._0xea696b74._0x12c6cd40;
                    }
                }
            },
            ctors: {
                init: function () {
                    this._0x6c391a32 = "SCWebSDK__StartupMask";
                    this._0x869be08e = false;
                    this._0x12c6cd40 = false;
                }
            },
            methods: {
                /*SC._0xea696b74._0x2f6a202b:static start.*/
                _0x2f6a202b: function () {
                    UnityEngine.Application.focusChanged = Bridge.fn.combine(UnityEngine.Application.focusChanged, SC._0xea696b74._0x3b584631);
                },
                /*SC._0xea696b74._0x2f6a202b:static end.*/

                /*SC._0xea696b74._0x3b584631:static start.*/
                _0x3b584631: function (_0x43e5bba7) {
                    UnityEngine.Application.focusChanged = Bridge.fn.remove(UnityEngine.Application.focusChanged, SC._0xea696b74._0x3b584631);
                    pc.stubProxy.reportMethod( 'UnityEngine.Rendering.SplashScreen.Stop', null );
                },
                /*SC._0xea696b74._0x3b584631:static end.*/

                /*SC._0xea696b74._0xfa2bc922:static start.*/
                _0xfa2bc922: function () {
                    if (!UnityEngine.Application.isEditor) {
                        return;
                    }
                    if (SC.sc.WebAdConfig.fDebugAdDuration < 0) {
                        return;
                    }
                    var _0x907ad991 = System.Enum.toString(SC.EWebPlatform, SC.sc.WebAdConfig.eDebugWebPlatform);
                    SC._0xea696b74._0x6a23e193(System.String.format("\u6a21\u62df\u64ad\u653e\u5e73\u53f0\u5e7f\u544a [{0}]\uff0c\u8bf7\u7a0d\u5019\u2026", [_0x907ad991]), SC.sc.WebAdConfig.fDebugAdDuration);
                },
                /*SC._0xea696b74._0xfa2bc922:static end.*/

                /*SC._0xea696b74._0x6a23e193:static start.*/
                _0x6a23e193: function (_0xfb40d048, _0x7f7c5192) {
                    var $t;
                    if (SC._0xea696b74._0x869be08e) {
                        return;
                    }
                    SC._0xea696b74._0x869be08e = true;
                    if (UnityEngine.GameObject.op_Inequality(UnityEngine.GameObject.Find(SC._0xea696b74._0x6c391a32), null)) {
                        return;
                    }
                    SC._0xea696b74._0x12c6cd40 = true;
                    var _0xeaa6cd4c = new UnityEngine.GameObject.$ctor2(SC._0xea696b74._0x6c391a32);
                    UnityEngine.Object.DontDestroyOnLoad(_0xeaa6cd4c);
                    var _0x505b4226 = _0xeaa6cd4c.AddComponent(UnityEngine.Canvas);
                    _0x505b4226.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                    _0x505b4226.sortingOrder = 32767;
                    var _0xb30520d5 = _0xeaa6cd4c.AddComponent(UnityEngine.UI.CanvasScaler);
                    _0xb30520d5.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                    _0xb30520d5.referenceResolution = new pc.Vec2( 1080.0, 1920.0 );
                    _0xb30520d5.matchWidthOrHeight = 0.5;
                    _0xeaa6cd4c.AddComponent(UnityEngine.UI.GraphicRaycaster);
                    var _0xbe06f5ff = new UnityEngine.GameObject.$ctor2("Mask");
                    _0xbe06f5ff.transform.SetParent(_0xeaa6cd4c.transform, false);
                    var _0x00fb7ec1 = _0xbe06f5ff.AddComponent(UnityEngine.UI.Image);
                    _0x00fb7ec1.color = new pc.Color( 0.0, 0.0, 0.0, 0.85 );
                    var _0x7a0a7013 = _0xbe06f5ff.GetComponent(UnityEngine.RectTransform);
                    _0x7a0a7013.anchorMin = pc.Vec2.ZERO.clone();
                    _0x7a0a7013.anchorMax = pc.Vec2.ONE.clone();
                    _0x7a0a7013.offsetMin = pc.Vec2.ZERO.clone();
                    _0x7a0a7013.offsetMax = pc.Vec2.ZERO.clone();
                    var _0x012aafd2 = new UnityEngine.GameObject.$ctor2("Tip");
                    _0x012aafd2.transform.SetParent(_0xbe06f5ff.transform, false);
                    var _0x84199656 = _0x012aafd2.AddComponent(UnityEngine.UI.Text);
                    _0x84199656.text = ($t = _0xfb40d048, $t != null ? $t : "");
                    _0x84199656.alignment = UnityEngine.TextAnchor.MiddleCenter;
                    _0x84199656.color = new pc.Color( 1, 1, 1, 1 );
                    _0x84199656.fontSize = 36;
                    _0x84199656.raycastTarget = false;
                    _0x84199656.font = Bridge.cast(UnityEngine.Resources.GetBuiltinResource(UnityEngine.Font, SC._0xeb7b2e5c.SBuiltFontName), UnityEngine.Font);
                    var _0x42688b85 = _0x012aafd2.GetComponent(UnityEngine.RectTransform);
                    _0x42688b85.anchorMin = pc.Vec2.ZERO.clone();
                    _0x42688b85.anchorMax = pc.Vec2.ONE.clone();
                    _0x42688b85.offsetMin = new pc.Vec2( 40.0, 40.0 );
                    _0x42688b85.offsetMax = new pc.Vec2( -40.0, -40.0 );
                    var _0x64251e15 = _0xeaa6cd4c.AddComponent(SC._0xea696b74._0xb6f88893);
                    _0x64251e15.Seconds = UnityEngine.Mathf.Max(0.01, _0x7f7c5192);
                    _0x64251e15.TipText = _0x84199656;
                    _0x64251e15.RawTip = _0xfb40d048;
                },
                /*SC._0xea696b74._0x6a23e193:static end.*/


            }
        }
    });
    /*SC._0xea696b74 end.*/

    /*SC._0xea696b74+_0xb6f88893 start.*/
    Bridge.define("SC._0xea696b74._0xb6f88893", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: 1002,
        fields: {
            Seconds: 0,
            TipText: null,
            RawTip: null
        },
        ctors: {
            init: function () {
                this.Seconds = 3.0;
            }
        },
        methods: {
            /*SC._0xea696b74+_0xb6f88893.Start start.*/
            Start: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    _0x0fa593c8,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    _0x0fa593c8 = this.Seconds;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( _0x0fa593c8 > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.TipText, null)) {
                                            this.TipText.text = System.String.format("{0} ({1}s)", this.RawTip, Bridge.box(Math.ceil(_0x0fa593c8), System.Int32));
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    _0x0fa593c8 -= UnityEngine.Time.unscaledDeltaTime;

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if ( !SC._0x0b275e47.bGameReady ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.TipText, null)) {
                                            this.TipText.text = "\u7b49\u5f85\u6e38\u620f\u51c6\u5907\u5b8c\u6210...";
                                        }

                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                                        if (SC.sc.web._0x3104f99b()) {
                                            SC.sc.log.Debug("Simulation gameStart");
                                            SC.sc.web.OnJSCallback("gameStart");
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SC._0xea696b74+_0xb6f88893.Start end.*/

            /*SC._0xea696b74+_0xb6f88893.OnDestroy start.*/
            OnDestroy: function () {
                SC._0xea696b74._0x12c6cd40 = false;
            },
            /*SC._0xea696b74+_0xb6f88893.OnDestroy end.*/


        }
    });
    /*SC._0xea696b74+_0xb6f88893 end.*/

    /*SC._0xeb7b2e5c start.*/
    Bridge.define("SC._0xeb7b2e5c", {
        statics: {
            fields: {
                _0xc9f8a974: null
            },
            props: {
                SBuiltFontName: {
                    get: function () {
                        var $t;

                        var _0xf5e7afd4 = UnityEngine.Application.unityVersion;
                        var _0x6f386b10 = System.String.indexOf(_0xf5e7afd4, String.fromCharCode(46));
                        var _0x44a200e3 = _0x6f386b10 >= 0 ? _0xf5e7afd4.substr(0, _0x6f386b10) : _0xf5e7afd4;

                        var _0xfbfd324f = new System.Text.StringBuilder();
                        $t = Bridge.getEnumerator(_0x44a200e3);
                        try {
                            while ($t.moveNext()) {
                                var c = $t.Current;
                                if (System.Char.isDigit(c)) {
                                    _0xfbfd324f.append(String.fromCharCode(c));
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }

                        _0x44a200e3 = _0xfbfd324f.toString();
                        var majorVersion = { };

                        if (System.Int32.tryParse(_0x44a200e3, majorVersion)) {
                            return majorVersion.v >= 2022 ? "LegacyRuntime.ttf" : "Arial.ttf";
                        }

                        return "Arial.ttf";
                    }
                }
            },
            ctors: {
                init: function () {
                    this._0xc9f8a974 = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                }
            },
            methods: {
                /*SC._0xeb7b2e5c.SetLayerRecursively:static start.*/
                SetLayerRecursively: function (_0x910958ab, _0x689f4e5e) {
                    var $t;
                    var _0x136f39ea = _0x910958ab.GetComponentsInChildren(UnityEngine.Transform, true);
                    SC._0xeb7b2e5c._0xc9f8a974 = ($t = UnityEngine.Transform, System.Linq.Enumerable.from(_0x136f39ea, $t).toList($t));
                    for (var _0xccc33161 = 0; _0xccc33161 < SC._0xeb7b2e5c._0xc9f8a974.Count; _0xccc33161 = (_0xccc33161 + 1) | 0) {
                        SC._0xeb7b2e5c._0xc9f8a974.getItem(_0xccc33161).gameObject.layer = _0x689f4e5e;
                    }

                    SC._0xeb7b2e5c._0xc9f8a974.clear();
                },
                /*SC._0xeb7b2e5c.SetLayerRecursively:static end.*/

                /*SC._0xeb7b2e5c.DestroyAllChildren:static start.*/
                DestroyAllChildren: function (_0xdfa59693) {
                    var _0xf6c4e70c = _0xdfa59693.transform;
                    var _0x14766a7f = _0xf6c4e70c.childCount;
                    for (var _0x43025b7d = 0; _0x43025b7d < _0x14766a7f; _0x43025b7d = (_0x43025b7d + 1) | 0) {
                        UnityEngine.Object.Destroy(_0xf6c4e70c.GetChild(_0x43025b7d).gameObject);
                    }
                },
                /*SC._0xeb7b2e5c.DestroyAllChildren:static end.*/

                /*SC._0xeb7b2e5c.SetLabelValue:static start.*/
                SetLabelValue: function (_0x47430f7f, _0x165e5871, _0x597b7d56) {
                    if (_0x597b7d56 === void 0) { _0x597b7d56 = []; }
                },
                /*SC._0xeb7b2e5c.SetLabelValue:static end.*/

                /*SC._0xeb7b2e5c.setLabelValue:static start.*/
                setLabelValue: function (_0x516ca394, _0xa8b465c6, _0xdacbd683) {
                    if (_0xdacbd683 === void 0) { _0xdacbd683 = []; }
                },
                /*SC._0xeb7b2e5c.setLabelValue:static end.*/

                /*SC._0xeb7b2e5c.GetOrAddComponent:static start.*/
                GetOrAddComponent: function (T, _0x53f56737) {
                    var _0x4d1a085a = Bridge.rValue(_0x53f56737.GetComponent(T));
                    if (Bridge.rValue(_0x4d1a085a) == null) {
                        _0x4d1a085a = Bridge.rValue(_0x53f56737.AddComponent(T));
                    }

                    return Bridge.rValue(_0x4d1a085a);
                },
                /*SC._0xeb7b2e5c.GetOrAddComponent:static end.*/

                /*SC._0xeb7b2e5c.FindObjectOfTypeInc:static start.*/
                FindObjectOfTypeInc: function (T, _0xe9698453) {
                    var $t;
                    if (!_0xe9698453) {
                        return UnityEngine.Object.FindObjectOfType(T);
                    }

                    for (var _0x191b4c0e = 0; _0x191b4c0e < UnityEngine.SceneManagement.SceneManager.sceneCount; _0x191b4c0e = (_0x191b4c0e + 1) | 0) {
                        var _0xff470828 = UnityEngine.SceneManagement.SceneManager.GetSceneAt(_0x191b4c0e);
                        if (!_0xff470828.isLoaded) {
                            continue;
                        }
                        var _0x08cd174a = _0xff470828.getRootGameObjects();
                        $t = Bridge.getEnumerator(_0x08cd174a);
                        try {
                            while ($t.moveNext()) {
                                var root = $t.Current;
                                var _0xc4548343 = Bridge.rValue(root.GetComponentInChildren(T, true));
                                if (Bridge.rValue(_0xc4548343) != null) {
                                    return Bridge.rValue(_0xc4548343);
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                    return null;
                },
                /*SC._0xeb7b2e5c.FindObjectOfTypeInc:static end.*/

                /*SC._0xeb7b2e5c.FindObjectOfTypeInc$1:static start.*/
                FindObjectOfTypeInc$1: function (_0x6bb2a779, _0x36b2a3e7) {
                    var $t;
                    if (!_0x36b2a3e7) {
                        return UnityEngine.Object.FindObjectOfType$1(_0x6bb2a779);
                    }

                    for (var _0xe536b61f = 0; _0xe536b61f < UnityEngine.SceneManagement.SceneManager.sceneCount; _0xe536b61f = (_0xe536b61f + 1) | 0) {
                        var _0x7bbfd904 = UnityEngine.SceneManagement.SceneManager.GetSceneAt(_0xe536b61f);
                        if (!_0x7bbfd904.isLoaded) {
                            continue;
                        }
                        var _0x7066807a = _0x7bbfd904.getRootGameObjects();
                        $t = Bridge.getEnumerator(_0x7066807a);
                        try {
                            while ($t.moveNext()) {
                                var root = $t.Current;
                                var _0x63d04fa6 = root.GetComponentInChildren$1(_0x6bb2a779, true);
                                if (UnityEngine.Component.op_Inequality(_0x63d04fa6, null)) {
                                    return _0x63d04fa6;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                    return null;
                },
                /*SC._0xeb7b2e5c.FindObjectOfTypeInc$1:static end.*/


            }
        }
    });
    /*SC._0xeb7b2e5c end.*/

    /*SC._0xf10be04f start.*/
    Bridge.define("SC._0xf10be04f", {
        fields: {
            ActiveWindow: false
        },
        ctors: {
            init: function () {
                this.ActiveWindow = false;
            }
        },
        methods: {
            /*SC._0xf10be04f.OnLogMessageReceived start.*/
            OnLogMessageReceived: function (_0x9b7e5ee1, _0x0804fe88, _0x43435907) { },
            /*SC._0xf10be04f.OnLogMessageReceived end.*/


        }
    });
    /*SC._0xf10be04f end.*/

    /*SC._0xf42a8601 start.*/
    Bridge.define("SC._0xf42a8601", {
        fields: {
            EventType: null,
            EventCallBackParamType: null,
            iEventHandlerCount: 0,
            iEventCount: 0
        },
        ctors: {
            init: function () {
                this.EventType = new SC.Events._0xec09438b();
                this.EventCallBackParamType = new (System.Collections.Generic.Dictionary$2(System.String,System.Array.type(System.Type))).ctor();
                this.iEventHandlerCount = 0;
                this.iEventCount = 0;
            }
        },
        methods: {
            /*SC._0xf42a8601.Count start.*/
            Count: function (_0xb1def1a7) {
                return 0;
            },
            /*SC._0xf42a8601.Count end.*/

            /*SC._0xf42a8601.Check start.*/
            Check: function (_0x7a1df249, _0x5ca4d87c) {
                return false;
            },
            /*SC._0xf42a8601.Check end.*/

            /*SC._0xf42a8601.RegisterEvent start.*/
            RegisterEvent: function (_0x05f67605, _0x56fa34d4, _0xec7524e4) {
                if (_0xec7524e4 === void 0) { _0xec7524e4 = null; }
            },
            /*SC._0xf42a8601.RegisterEvent end.*/

            /*SC._0xf42a8601.UnRegisterEvent start.*/
            UnRegisterEvent: function (_0x101f735e, _0xcc93bb11) { },
            /*SC._0xf42a8601.UnRegisterEvent end.*/

            /*SC._0xf42a8601.SetDefaultHandler start.*/
            SetDefaultHandler: function (_0x77b1a106) { },
            /*SC._0xf42a8601.SetDefaultHandler end.*/

            /*SC._0xf42a8601.OnEvent start.*/
            OnEvent: function (_0xdaf6a25f) { },
            /*SC._0xf42a8601.OnEvent end.*/

            /*SC._0xf42a8601.OnEvent$1 start.*/
            OnEvent$1: function (_0x0e0fcee7, _0x91bc3162, _0x3fc4fedc, _0x2fb3702f, _0x9a3b6ca6, _0x166425de) {
                if (_0x91bc3162 === void 0) { _0x91bc3162 = null; }
                if (_0x3fc4fedc === void 0) { _0x3fc4fedc = null; }
                if (_0x2fb3702f === void 0) { _0x2fb3702f = null; }
                if (_0x9a3b6ca6 === void 0) { _0x9a3b6ca6 = null; }
                if (_0x166425de === void 0) { _0x166425de = null; }
            },
            /*SC._0xf42a8601.OnEvent$1 end.*/

            /*SC._0xf42a8601.UnRegisterEventAll start.*/
            UnRegisterEventAll: function (_0x9aeaab87) {
                if (_0x9aeaab87 === void 0) { _0x9aeaab87 = null; }
            },
            /*SC._0xf42a8601.UnRegisterEventAll end.*/


        },
        overloads: {
            "OnEvent(string, object, object, object, object, object)": "OnEvent$1"
        }
    });
    /*SC._0xf42a8601 end.*/

    /*SC._0xf5a88c93 start.*/
    Bridge.define("SC._0xf5a88c93", {
        fields: {
            sModuleName: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
            }
        },
        methods: {
            /*SC._0xf5a88c93.GetAllType start.*/
            GetAllType: function () {
                return null;
            },
            /*SC._0xf5a88c93.GetAllType end.*/

            /*SC._0xf5a88c93.GetTableListByType start.*/
            GetTableListByType: function (_0x84871565) {
                return null;
            },
            /*SC._0xf5a88c93.GetTableListByType end.*/

            /*SC._0xf5a88c93.IsCanBuy start.*/
            IsCanBuy: function (_0x661c94ae) {
                return false;
            },
            /*SC._0xf5a88c93.IsCanBuy end.*/

            /*SC._0xf5a88c93.BuyOverCount start.*/
            BuyOverCount: function (_0xd7a041ce) {
                return 0;
            },
            /*SC._0xf5a88c93.BuyOverCount end.*/

            /*SC._0xf5a88c93.GetPaymentById start.*/
            GetPaymentById: function (_0x68e6de7b) {
                return null;
            },
            /*SC._0xf5a88c93.GetPaymentById end.*/

            /*SC._0xf5a88c93.ShowWindow start.*/
            ShowWindow: function (_0x6cfc7d16, _0x2d22ab4f) {
                if (_0x6cfc7d16 === void 0) { _0x6cfc7d16 = null; }
                if (_0x2d22ab4f === void 0) { _0x2d22ab4f = "LayerShop"; }
            },
            /*SC._0xf5a88c93.ShowWindow end.*/


        }
    });
    /*SC._0xf5a88c93 end.*/

    /*SC._0xf5db246c start.*/
    Bridge.define("SC._0xf5db246c", {
        $kind: 6,
        statics: {
            fields: {
                _0x88e19cd3: 0,
                _0x1776f5b1: 1,
                _0xd4bc700b: 2,
                _0xcd7e86b2: 3
            }
        }
    });
    /*SC._0xf5db246c end.*/

    /*SC.BaseNode start.*/
    Bridge.define("SC.BaseNode", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*SC.BaseNode.Awake start.*/
            Awake: function () {
                this.SCAwake();
            },
            /*SC.BaseNode.Awake end.*/

            /*SC.BaseNode.OnEnable start.*/
            OnEnable: function () {
                this.SCOnEnable();
            },
            /*SC.BaseNode.OnEnable end.*/

            /*SC.BaseNode.OnDisable start.*/
            OnDisable: function () {
                this.SCOnDisable();
            },
            /*SC.BaseNode.OnDisable end.*/

            /*SC.BaseNode.Start start.*/
            Start: function () {
                this.SCStart();
            },
            /*SC.BaseNode.Start end.*/

            /*SC.BaseNode.OnDestroy start.*/
            OnDestroy: function () {
                this.SCOnDestroy();
            },
            /*SC.BaseNode.OnDestroy end.*/

            /*SC.BaseNode.SCAwake start.*/
            SCAwake: function () { },
            /*SC.BaseNode.SCAwake end.*/

            /*SC.BaseNode.SCOnEnable start.*/
            SCOnEnable: function () { },
            /*SC.BaseNode.SCOnEnable end.*/

            /*SC.BaseNode.SCOnDisable start.*/
            SCOnDisable: function () { },
            /*SC.BaseNode.SCOnDisable end.*/

            /*SC.BaseNode.SCStart start.*/
            SCStart: function () { },
            /*SC.BaseNode.SCStart end.*/

            /*SC.BaseNode.Update start.*/
            Update: function () { },
            /*SC.BaseNode.Update end.*/

            /*SC.BaseNode.SCOnDestroy start.*/
            SCOnDestroy: function () { },
            /*SC.BaseNode.SCOnDestroy end.*/


        }
    });
    /*SC.BaseNode end.*/

    /*SC.Comp._0x2d5dde24._0x61ce7d29 start.*/
    Bridge.define("SC.Comp._0x2d5dde24._0x61ce7d29", {
        $kind: 6,
        statics: {
            fields: {
                _0xed70669d: 0,
                _0x6e0d9b8e: 1,
                _0xeae05075: 2,
                _0xecef81c8: 3,
                _0xb68c03b0: 4,
                _0xaaf0ec98: 5,
                _0xbc403f84: 6
            }
        }
    });
    /*SC.Comp._0x2d5dde24._0x61ce7d29 end.*/

    /*SC.Comp._0x2d5dde24._0x70caacd8 start.*/
    Bridge.define("SC.Comp._0x2d5dde24._0x70caacd8", {
        $kind: 6,
        statics: {
            fields: {
                _0x02f28aab: 0,
                _0x70b3c980: 1,
                _0xc10a347a: 2,
                _0xddd25d10: -1
            }
        }
    });
    /*SC.Comp._0x2d5dde24._0x70caacd8 end.*/

    /*SC.Comp._0x2d5dde24._0xe24af399 start.*/
    Bridge.define("SC.Comp._0x2d5dde24._0xe24af399", {
        $kind: 6,
        statics: {
            fields: {
                _0xf8c8db24: 0,
                _0xa5090ab3: 1,
                _0x6e9002d8: 2,
                _0xebd2af90: 3,
                _0xe2cb165e: 4,
                _0xd870380b: 5,
                _0x4b87a3f1: 6
            }
        }
    });
    /*SC.Comp._0x2d5dde24._0xe24af399 end.*/

    /*SC.CustomDisableAttribute start.*/
    Bridge.define("SC.CustomDisableAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            sName: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
            },
            $ctor1: function (_0x5b62492b) {
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.sName = _0x5b62492b;
            }
        }
    });
    /*SC.CustomDisableAttribute end.*/

    /*SC.CustomLabelAttribute start.*/
    Bridge.define("SC.CustomLabelAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            sName: null
        },
        ctors: {
            ctor: function (_0x45c20cfd) {
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.sName = _0x45c20cfd;
            }
        }
    });
    /*SC.CustomLabelAttribute end.*/

    /*SC.CustomMoreAttribute start.*/
    Bridge.define("SC.CustomMoreAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            sLabelName: null,
            sAttributeName: null,
            oAttributeVal: null
        },
        ctors: {
            ctor: function (_0xecbf3a57, _0x4f0748a5, _0x5593636f) {
                if (_0xecbf3a57 === void 0) { _0xecbf3a57 = ""; }
                if (_0x4f0748a5 === void 0) { _0x4f0748a5 = ""; }
                if (_0x5593636f === void 0) { _0x5593636f = null; }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.sLabelName = _0xecbf3a57 == null ? "" : _0xecbf3a57;
                this.sAttributeName = _0x4f0748a5 == null ? "" : _0x4f0748a5;
                this.oAttributeVal = _0x5593636f;
            }
        }
    });
    /*SC.CustomMoreAttribute end.*/

    /*SC.CustomRangeAttribute start.*/
    Bridge.define("SC.CustomRangeAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            min: 0,
            max: 0,
            sLabelName: null,
            sAttributeName: null,
            oAttributeVal: null
        },
        ctors: {
            ctor: function (_0x157cc63c, _0x24fc3718, _0x130c8d8e, _0x408706f0, _0x918ae610) {
                if (_0x130c8d8e === void 0) { _0x130c8d8e = ""; }
                if (_0x408706f0 === void 0) { _0x408706f0 = ""; }
                if (_0x918ae610 === void 0) { _0x918ae610 = null; }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.min = _0x157cc63c;
                this.max = _0x24fc3718;
                this.sLabelName = _0x130c8d8e == null ? "" : _0x130c8d8e;
                this.sAttributeName = _0x408706f0 == null ? "" : _0x408706f0;
                this.oAttributeVal = _0x918ae610;
            }
        }
    });
    /*SC.CustomRangeAttribute end.*/

    /*SC.CustomStringListAttribute start.*/
    Bridge.define("SC.CustomStringListAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            List: null
        },
        ctors: {
            ctor: function (_0x8f72a9bf) {
                if (_0x8f72a9bf === void 0) { _0x8f72a9bf = []; }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.List = _0x8f72a9bf;
            },
            $ctor1: function (_0xb0667214) {
                var $t, $t1;
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                var _0xe84c8325 = Bridge.createInstance(_0xb0667214);
                var _0x9abd8b07 = Bridge.Reflection.getMembers(_0xb0667214, 4, 20);
                var _0x08af6e01 = new (System.Collections.Generic.List$1(System.String)).ctor();
                $t = Bridge.getEnumerator(_0x9abd8b07);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var _0x63b58a26 = Bridge.Reflection.fieldAccess(item, Bridge.unbox(_0xe84c8325));
                        if (Bridge.referenceEquals(Bridge.getType(_0x63b58a26), System.String)) {
                            _0x08af6e01.add(Bridge.cast(_0x63b58a26, System.String));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                _0x9abd8b07 = Bridge.Reflection.getMembers(_0xb0667214, 4, 24);
                $t1 = Bridge.getEnumerator(_0x9abd8b07);
                try {
                    while ($t1.moveNext()) {
                        var item1 = $t1.Current;
                        var _0xf94863b9 = Bridge.Reflection.fieldAccess(item1, null);
                        if (Bridge.referenceEquals(Bridge.getType(_0xf94863b9), System.String)) {
                            _0x08af6e01.add(Bridge.cast(_0xf94863b9, System.String));
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                this.List = _0x08af6e01.ToArray();
            },
            $ctor2: function (_0x3fc29651, _0x3a7f9396) {
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                var _0xde652c5a = Bridge.Reflection.getMembers(_0x3fc29651, 8, 284, _0x3a7f9396);
                if (_0xde652c5a != null) {
                    this.List = Bridge.as(Bridge.Reflection.midel(_0xde652c5a, null, null)(null), System.Array.type(System.String));
                } else {
                    SC.sc.log.Error(System.String.concat("NO SUCH METHOD " + (_0x3a7f9396 || "") + " FOR ", Bridge.getTypeName(_0x3fc29651)));
                }
            }
        }
    });
    /*SC.CustomStringListAttribute end.*/

    /*SC.CustomVisibleAttribute start.*/
    Bridge.define("SC.CustomVisibleAttribute", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            sLabelName: null,
            lParamNames: null,
            type: null,
            sMethod: null
        },
        ctors: {
            ctor: function (_0x10c03117, _0x9dad94cc, _0x4d66dd8a, _0xb8af5afb) {
                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.sLabelName = _0x10c03117;
                this.type = _0x9dad94cc;
                this.sMethod = _0x4d66dd8a;
                this.lParamNames = _0xb8af5afb;
            }
        }
    });
    /*SC.CustomVisibleAttribute end.*/

    /*SC.EGraphicsAPIType start.*/
    Bridge.define("SC.EGraphicsAPIType", {
        $kind: 6,
        statics: {
            fields: {
                WebGL1: 0,
                WebGL2: 1,
                WebGL1AndWebGL2: 2
            }
        }
    });
    /*SC.EGraphicsAPIType end.*/

    /*SC.Events._0x2913d22d start.*/
    Bridge.define("SC.Events._0x2913d22d");
    /*SC.Events._0x2913d22d end.*/

    /*SC.Events._0x69d68f1a start.*/
    Bridge.define("SC.Events._0x69d68f1a", {
        fields: {
            Resolution_Change: null,
            SDK_Hide_Dialog_OnNet: null,
            Money_AddAnimStart: null,
            Money_AddAnimEnd: null,
            Video_Play_Complete: null,
            Video_Loading: null,
            Global_Event_NewDay: null,
            Game_Exit: null,
            SDK_Init_Complete: null,
            Enter_Game_Success: null,
            Plugin_Catalog_Path: null,
            _0xf4fb7811: null,
            _0x308ab6d2: null,
            Audio_OnSCAudioStateChange: null,
            _0x2d5bd09d: null,
            _0x28832bc6: null,
            _0x85db0ddc: null
        },
        ctors: {
            init: function () {
                this.Resolution_Change = "";
                this.SDK_Hide_Dialog_OnNet = "";
                this.Money_AddAnimStart = "";
                this.Money_AddAnimEnd = "";
                this.Video_Play_Complete = "";
                this.Video_Loading = "";
                this.Global_Event_NewDay = "";
                this.Game_Exit = "";
                this.SDK_Init_Complete = "";
                this.Enter_Game_Success = "";
                this.Plugin_Catalog_Path = "";
                this._0xf4fb7811 = "";
                this._0x308ab6d2 = "";
                this.Audio_OnSCAudioStateChange = "";
                this._0x2d5bd09d = "";
                this._0x28832bc6 = "";
                this._0x85db0ddc = "";
            }
        }
    });
    /*SC.Events._0x69d68f1a end.*/

    /*SC.Events._0x9e2250d3 start.*/
    Bridge.define("SC.Events._0x9e2250d3");
    /*SC.Events._0x9e2250d3 end.*/

    /*SC.Events._0xbb7416ff start.*/
    Bridge.define("SC.Events._0xbb7416ff", {
        fields: {
            Enough_Show_Tip: null,
            Enough_Show_Shop: null,
            closeAd: null,
            timeLimitCloseAd: null,
            gold: null,
            diamond: null
        },
        ctors: {
            init: function () {
                this.Enough_Show_Tip = "";
                this.Enough_Show_Shop = "";
                this.closeAd = "";
                this.timeLimitCloseAd = "";
                this.gold = "";
                this.diamond = "";
            }
        }
    });
    /*SC.Events._0xbb7416ff end.*/

    /*SC.Events._0xcba66dab start.*/
    Bridge.define("SC.Events._0xcba66dab", {
        fields: {
            None: null,
            Other: null,
            Module_Ins: null,
            DialogShop: null,
            DialogShopAD: null,
            DialogShopOfferWall: null,
            DialogShopGold: null,
            DialogShopDiamond: null,
            Subscribe: null,
            Settle: null,
            Video: null,
            _0x5cf4a891: null,
            _0xf86ff0ef: null,
            _0x48ef288d: null,
            _0x6fc2751b: null,
            MoreGame: null
        },
        ctors: {
            init: function () {
                this.None = "";
                this.Other = "";
                this.Module_Ins = "";
                this.DialogShop = "";
                this.DialogShopAD = "";
                this.DialogShopOfferWall = "";
                this.DialogShopGold = "";
                this.DialogShopDiamond = "";
                this.Subscribe = "";
                this.Settle = "";
                this.Video = "";
                this._0x5cf4a891 = "";
                this._0xf86ff0ef = "";
                this._0x48ef288d = "";
                this._0x6fc2751b = "";
                this.MoreGame = "";
            }
        }
    });
    /*SC.Events._0xcba66dab end.*/

    /*SC.Events._0xe798b30e start.*/
    Bridge.define("SC.Events._0xe798b30e", {
        statics: {
            fields: {
                NONE: null,
                TOP: null,
                BOTTOM: null
            },
            ctors: {
                init: function () {
                    this.NONE = "";
                    this.TOP = "";
                    this.BOTTOM = "";
                }
            }
        }
    });
    /*SC.Events._0xe798b30e end.*/

    /*SC.Events._0xea722ab1 start.*/
    Bridge.define("SC.Events._0xea722ab1", {
        statics: {
            fields: {
                NORMAL: null,
                HIGH: null
            },
            ctors: {
                init: function () {
                    this.NORMAL = "";
                    this.HIGH = "";
                }
            }
        }
    });
    /*SC.Events._0xea722ab1 end.*/

    /*SC.Events._0xec09438b start.*/
    Bridge.define("SC.Events._0xec09438b", {
        fields: {
            FullscreenAdClose: null,
            OnChangeCloseAdStatus: null,
            AdvertisementClose: null,
            AdvertisementRecover: null,
            onSocialShareSuccess: null,
            OnChangeGameListStatus: null,
            onNativeAdShow_Json: null,
            onNativeAdClosedByUser_Json: null,
            onNativeAdClosedByClicked_Json: null,
            UpdateProduct: null,
            onIncompletePayOrderToDeal: null,
            Opportunity_Restart: null,
            Opportunity_GiveUp: null,
            Opportunity_GameOver: null,
            OnChangeDebugModeStatus: null,
            OnDownloadMoreGameIconCompleted: null
        },
        ctors: {
            init: function () {
                this.FullscreenAdClose = "";
                this.OnChangeCloseAdStatus = "";
                this.AdvertisementClose = "";
                this.AdvertisementRecover = "";
                this.onSocialShareSuccess = "";
                this.OnChangeGameListStatus = "";
                this.onNativeAdShow_Json = "";
                this.onNativeAdClosedByUser_Json = "";
                this.onNativeAdClosedByClicked_Json = "";
                this.UpdateProduct = "";
                this.onIncompletePayOrderToDeal = "";
                this.Opportunity_Restart = "";
                this.Opportunity_GiveUp = "";
                this.Opportunity_GameOver = "";
                this.OnChangeDebugModeStatus = "";
                this.OnDownloadMoreGameIconCompleted = "";
            }
        }
    });
    /*SC.Events._0xec09438b end.*/

    /*SC.Events.EnumShowVideoType start.*/
    Bridge.define("SC.Events.EnumShowVideoType", {
        fields: {
            Success: null,
            NoFinished: null,
            NoEnoughMemory: null,
            Cancel: null,
            Loaded: null,
            Loading: null
        },
        ctors: {
            init: function () {
                this.Success = "";
                this.NoFinished = "";
                this.NoEnoughMemory = "";
                this.Cancel = "";
                this.Loaded = "";
                this.Loading = "";
            }
        }
    });
    /*SC.Events.EnumShowVideoType end.*/

    /*SC.EWebPlatform start.*/
    Bridge.define("SC.EWebPlatform", {
        $kind: 6,
        statics: {
            fields: {
                none: 0,
                mintegral: 1,
                applovin: 2,
                NewsBreak: 3,
                google: 4
            }
        }
    });
    /*SC.EWebPlatform end.*/

    /*SC.IEntity start.*/
    Bridge.define("SC.IEntity", {
        $kind: 3
    });
    /*SC.IEntity end.*/

    /*SC.IReference start.*/
    Bridge.define("SC.IReference", {
        $kind: 3
    });
    /*SC.IReference end.*/

    /*SC.LanguageCommon start.*/
    Bridge.define("SC.LanguageCommon", {
        statics: {
            props: {
                lDefLanguage: {
                    get: function () {
                        var $t;
                        var _0x250ada8b = new (System.Collections.Generic.List$1(System.String)).ctor();

                        var _0x79c24904 = System.Enum.getValues(SC.LanguageCommon.ELanguage);
                        $t = Bridge.getEnumerator(_0x79c24904);
                        try {
                            while ($t.moveNext()) {
                                var status = Bridge.cast($t.Current, SC.LanguageCommon.ELanguage);
                                _0x250ada8b.add(System.Enum.toString(SC.LanguageCommon.ELanguage, status));
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }

                        return _0x250ada8b.ToArray();
                    }
                }
            },
            methods: {
                /*SC.LanguageCommon.GetCurLanguageIdx:static start.*/
                GetCurLanguageIdx: function () {
                    var _0x3abf4843 = UnityEngine.Application.systemLanguage;
                    var _0x96b7b04f = SC.LanguageCommon.ELanguage.English;

                    switch (_0x3abf4843) {
                        case UnityEngine.SystemLanguage.English: 
                            _0x96b7b04f = SC.LanguageCommon.ELanguage.English;
                            break;
                        case UnityEngine.SystemLanguage.Chinese: 
                        case UnityEngine.SystemLanguage.ChineseSimplified: 
                        case UnityEngine.SystemLanguage.ChineseTraditional: 
                            _0x96b7b04f = SC.LanguageCommon.ELanguage.Chinese;
                            break;
                        default: 
                            _0x96b7b04f = SC.LanguageCommon.ELanguage.English;
                            break;
                    }


                    if (UnityEngine.Application.isEditor) {
                        _0x96b7b04f = SC.sc.WebAdConfig.IDebugLanguage;
                    }

                    return _0x96b7b04f;
                },
                /*SC.LanguageCommon.GetCurLanguageIdx:static end.*/


            }
        },
        fields: {
            EventType: null,
            OnLocalizeChange: null
        },
        ctors: {
            init: function () {
                this.EventType = new SC.Events._0x2913d22d();
                this.OnLocalizeChange = null;
            }
        },
        methods: {
            /*SC.LanguageCommon._0x97673d43 start.*/
            _0x97673d43: function (_0x2e82ad5c) {
                if (System.String.isNullOrEmpty(_0x2e82ad5c)) {
                    return _0x2e82ad5c;
                }

                var _0x8d86b063 = Bridge.cast(SC.sc.config.GetTable("language"), System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object)));
                if (_0x8d86b063 == null) {
                    SC.sc.log.Error(System.String.format("SCLanguage Get sKey {0}, no find table language", [_0x2e82ad5c]));
                    return _0x2e82ad5c;
                }

                var _0x7802d038 = null;
                var temp = { };
                if (_0x8d86b063.tryGetValue(_0x2e82ad5c, temp)) {

                    var _0xd8e35324 = this.GetCustomLanguage();
                    _0x7802d038 = Bridge.cast(temp.v.getItem(_0xd8e35324), System.String);
                }

                if (System.String.isNullOrEmpty(_0x7802d038)) {
                    SC.sc.log.Dev(System.String.format("SCLanguage Get sKey {0}, no find", [_0x2e82ad5c]));
                    return _0x2e82ad5c;
                } else {
                    _0x7802d038 = System.String.replaceAll(_0x7802d038, "\\n", "\n");

                    return _0x7802d038;
                }
            },
            /*SC.LanguageCommon._0x97673d43 end.*/

            /*SC.LanguageCommon.Event start.*/
            Event: function () { },
            /*SC.LanguageCommon.Event end.*/

            /*SC.LanguageCommon.GetCustomLanguageIdx start.*/
            GetCustomLanguageIdx: function () {
                return SC.sc.web.webGLLib.GetCustomLanguageIdx();
            },
            /*SC.LanguageCommon.GetCustomLanguageIdx end.*/

            /*SC.LanguageCommon.GetCustomLanguage start.*/
            GetCustomLanguage: function () {
                var $t;
                var _0x1a0b8d07 = this.GetCustomLanguageIdx();
                return ($t = SC.LanguageCommon.lDefLanguage)[_0x1a0b8d07];
            },
            /*SC.LanguageCommon.GetCustomLanguage end.*/

            /*SC.LanguageCommon.SetCustomLanguage start.*/
            SetCustomLanguage: function (_0xe3f8c84d) { },
            /*SC.LanguageCommon.SetCustomLanguage end.*/

            /*SC.LanguageCommon.Get start.*/
            Get: function (_0xd15649ac) {
                return this._0x97673d43(_0xd15649ac);
            },
            /*SC.LanguageCommon.Get end.*/

            /*SC.LanguageCommon.Get$1 start.*/
            Get$1: function (T, _0x48c2a9fd, _0xa13ef8ce) {
                return null;
            },
            /*SC.LanguageCommon.Get$1 end.*/

            /*SC.LanguageCommon.Get$2 start.*/
            Get$2: function (T1, T2, _0x9fcaef00, _0x0bd3949e, _0xf11bd728) {
                return null;
            },
            /*SC.LanguageCommon.Get$2 end.*/

            /*SC.LanguageCommon.Get$3 start.*/
            Get$3: function (T1, T2, T3, _0xa3c52e74, _0xa9917e5b, _0x56160f13, _0xdfb711e2) {
                return null;
            },
            /*SC.LanguageCommon.Get$3 end.*/

            /*SC.LanguageCommon.Get$4 start.*/
            Get$4: function (T1, T2, T3, T4, _0x5f0a3e1c, _0x333e9443, _0x2b4d2a18, _0x865900cc, _0xd6141f0f) {
                return null;
            },
            /*SC.LanguageCommon.Get$4 end.*/

            /*SC.LanguageCommon.Get$5 start.*/
            Get$5: function (T1, T2, T3, T4, T5, _0xd67f008f, _0xb6595910, _0x31603d9b, _0x000be106, _0x1d14ae21, _0x03d6a338) {
                return null;
            },
            /*SC.LanguageCommon.Get$5 end.*/

            /*SC.LanguageCommon.Get$6 start.*/
            Get$6: function (T1, T2, T3, T4, T5, T6, _0xd453b0b8, _0xd1832877, _0x96967421, _0xe75e5d0c, _0xd27475b8, _0xc7de65cc, _0x13df1d2d) {
                return null;
            },
            /*SC.LanguageCommon.Get$6 end.*/

            /*SC.LanguageCommon.Get$7 start.*/
            Get$7: function (T1, T2, T3, T4, T5, T6, T7, _0xa62cb4b4, _0x3e10da3c, _0x1a339d63, _0xbbb0e9b3, _0x2db1fd95, _0x518f871c, _0xc37ada52, _0x07292a80) {
                return null;
            },
            /*SC.LanguageCommon.Get$7 end.*/


        },
        overloads: {
            "Get(string, T)": "Get$1",
            "Get(string, T1, T2)": "Get$2",
            "Get(string, T1, T2, T3)": "Get$3",
            "Get(string, T1, T2, T3, T4)": "Get$4",
            "Get(string, T1, T2, T3, T4, T5)": "Get$5",
            "Get(string, T1, T2, T3, T4, T5, T6)": "Get$6",
            "Get(string, T1, T2, T3, T4, T5, T6, T7)": "Get$7"
        }
    });
    /*SC.LanguageCommon end.*/

    /*SC.LanguageCommon+ELanguage start.*/
    Bridge.define("SC.LanguageCommon.ELanguage", {
        $kind: 1006,
        statics: {
            fields: {
                Chinese: 0,
                English: 1
            }
        }
    });
    /*SC.LanguageCommon+ELanguage end.*/

    /*SC.MonoPInvokeCallbackAttribute start.*/
    Bridge.define("SC.MonoPInvokeCallbackAttribute", {
        inherits: [System.Attribute],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });
    /*SC.MonoPInvokeCallbackAttribute end.*/

    /*SC.PayCommon start.*/
    Bridge.define("SC.PayCommon", {
        fields: {
            sModuleName: null,
            EventType: null
        },
        ctors: {
            init: function () {
                this.sModuleName = null;
                this.EventType = new SC.Events._0xcba66dab();
            }
        },
        methods: {
            /*SC.PayCommon.GetGold start.*/
            GetGold: function () {
                return System.Int64(0);
            },
            /*SC.PayCommon.GetGold end.*/

            /*SC.PayCommon.GetDiamond start.*/
            GetDiamond: function () {
                return System.Int64(0);
            },
            /*SC.PayCommon.GetDiamond end.*/

            /*SC.PayCommon.AddGold start.*/
            AddGold: function (_0xfb21152a, _0xb0ab463c, _0x7e98461b, _0x3371e18c) {
                if (_0x7e98461b === void 0) { _0x7e98461b = null; }
                if (_0x3371e18c === void 0) { _0x3371e18c = true; }
            },
            /*SC.PayCommon.AddGold end.*/

            /*SC.PayCommon.AddDiamond start.*/
            AddDiamond: function (_0x1c34885b, _0xfc82f341, _0x19acedfc, _0xe481d12f) {
                if (_0x19acedfc === void 0) { _0x19acedfc = null; }
                if (_0xe481d12f === void 0) { _0xe481d12f = true; }
            },
            /*SC.PayCommon.AddDiamond end.*/

            /*SC.PayCommon.ReduceGold$1 start.*/
            ReduceGold$1: function (_0x4f767397, _0x74b53345) {
                if (_0x74b53345 === void 0) { _0x74b53345 = null; }
                return false;
            },
            /*SC.PayCommon.ReduceGold$1 end.*/

            /*SC.PayCommon.ReduceGold start.*/
            ReduceGold: function (_0xb09f2687, _0x1c91b099, _0x885343ef) {
                if (_0x1c91b099 === void 0) { _0x1c91b099 = false; }
                if (_0x885343ef === void 0) { _0x885343ef = null; }
                return false;
            },
            /*SC.PayCommon.ReduceGold end.*/

            /*SC.PayCommon.ReduceDiamond$1 start.*/
            ReduceDiamond$1: function (_0xb2f65758, _0xcae1f773) {
                if (_0xcae1f773 === void 0) { _0xcae1f773 = null; }
                return false;
            },
            /*SC.PayCommon.ReduceDiamond$1 end.*/

            /*SC.PayCommon.ReduceDiamond start.*/
            ReduceDiamond: function (_0xcc83bb6b, _0x221fff1a, _0x3935d4db) {
                if (_0x221fff1a === void 0) { _0x221fff1a = false; }
                if (_0x3935d4db === void 0) { _0x3935d4db = null; }
                return false;
            },
            /*SC.PayCommon.ReduceDiamond end.*/

            /*SC.PayCommon.SetGoldLevel start.*/
            SetGoldLevel: function (_0x66bc2ad7) { },
            /*SC.PayCommon.SetGoldLevel end.*/

            /*SC.PayCommon.GetGoldLevel start.*/
            GetGoldLevel: function () {
                return 0;
            },
            /*SC.PayCommon.GetGoldLevel end.*/

            /*SC.PayCommon.GetGoldRate start.*/
            GetGoldRate: function () {
                return 0.0;
            },
            /*SC.PayCommon.GetGoldRate end.*/

            /*SC.PayCommon.TransformGoldByRate start.*/
            TransformGoldByRate: function (_0xbcc641de, _0xd50c18a5) {
                if (_0xd50c18a5 === void 0) { _0xd50c18a5 = null; }
                return 0;
            },
            /*SC.PayCommon.TransformGoldByRate end.*/

            /*SC.PayCommon.AddGoldCheckGoldRate start.*/
            AddGoldCheckGoldRate: function (_0x9ec17e7e, _0xdec226d9, _0x4269b1d3, _0xba0a0088) {
                if (_0x4269b1d3 === void 0) { _0x4269b1d3 = null; }
                if (_0xba0a0088 === void 0) { _0xba0a0088 = false; }
            },
            /*SC.PayCommon.AddGoldCheckGoldRate end.*/

            /*SC.PayCommon.AddResumeOrderCB start.*/
            AddResumeOrderCB: function (_0xf2ed8040) { },
            /*SC.PayCommon.AddResumeOrderCB end.*/

            /*SC.PayCommon.QueryRestoreTransactions start.*/
            QueryRestoreTransactions: function (_0x2fb583f5, _0xb2c1bd14) {
                if (_0xb2c1bd14 === void 0) { _0xb2c1bd14 = true; }
            },
            /*SC.PayCommon.QueryRestoreTransactions end.*/

            /*SC.PayCommon.CountPayItemEvent start.*/
            CountPayItemEvent: function (_0x4a63a8d0) { },
            /*SC.PayCommon.CountPayItemEvent end.*/

            /*SC.PayCommon.GetCloseAdProductId start.*/
            GetCloseAdProductId: function () {
                return null;
            },
            /*SC.PayCommon.GetCloseAdProductId end.*/

            /*SC.PayCommon.GetProductConfig start.*/
            GetProductConfig: function (_0x49d8317b) {
                return null;
            },
            /*SC.PayCommon.GetProductConfig end.*/

            /*SC.PayCommon.HasProductConfig start.*/
            HasProductConfig: function (_0x85b2ef82) {
                return false;
            },
            /*SC.PayCommon.HasProductConfig end.*/

            /*SC.PayCommon.GetProductByID start.*/
            GetProductByID: function (_0x05d46c67) {
                return null;
            },
            /*SC.PayCommon.GetProductByID end.*/

            /*SC.PayCommon.GetGoldProductItems start.*/
            GetGoldProductItems: function () {
                return null;
            },
            /*SC.PayCommon.GetGoldProductItems end.*/

            /*SC.PayCommon.GetDiamondProductItems start.*/
            GetDiamondProductItems: function () {
                return null;
            },
            /*SC.PayCommon.GetDiamondProductItems end.*/

            /*SC.PayCommon.GetCloseAdOrder start.*/
            GetCloseAdOrder: function () {
                return null;
            },
            /*SC.PayCommon.GetCloseAdOrder end.*/


        },
        overloads: {
            "ReduceGold(Int64, string)": "ReduceGold$1",
            "ReduceDiamond(Int64, string)": "ReduceDiamond$1"
        }
    });
    /*SC.PayCommon end.*/

    /*SC.sc start.*/
    Bridge.define("SC.sc", {
        statics: {
            fields: {
                SDKVERSION: null,
                localStorage: null,
                scene: null,
                audio: null,
                language: null,
                config: null,
                BObfuscated: false,
                _0x9f76fdb7: null,
                _0x6c363c8e: null,
                _0x23b88765: null,
                _0x697c4b84: null,
                _0xf00b8908: null,
                sdk: null,
                log: null,
                engine: null,
                payEffect: null,
                channel: null,
                time: null,
                ad: null,
                prefab: null,
                ui: null,
                debug: null,
                load: null,
                mobClick: null,
                package: null,
                image: null,
                check: null,
                pay: null
            },
            props: {
                instance: {
                    get: function () {
                        return SC._0xbcb2c5eb.GetInstance();
                    }
                },
                bEditor: {
                    get: function () {
                        var _0x827c691b = UnityEngine.Application.platform === UnityEngine.RuntimePlatform.WindowsEditor || UnityEngine.Application.platform === UnityEngine.RuntimePlatform.OSXEditor || UnityEngine.Application.platform === UnityEngine.RuntimePlatform.LinuxEditor;
                        return _0x827c691b;
                    }
                },
                loom: {
                    get: function () {
                        if (SC.sc._0x9f76fdb7 == null) {
                            SC.sc._0x9f76fdb7 = new SC._0xc807ab2c();
                        }

                        return SC.sc._0x9f76fdb7;
                    }
                },
                WebAdConfig: {
                    get: function () {
                        if (SC.sc._0x6c363c8e == null) {
                            SC.sc._0x6c363c8e = UnityEngine.Resources.Load(SC.WebAdConfig, SC.WebAdConfig.sFilePath);
                            if (SC.sc._0x6c363c8e == null) {
                                SC.sc._0x6c363c8e = UnityEngine.ScriptableObject.CreateInstance(SC.WebAdConfig);
                                UnityEngine.Debug.LogWarning$1((SC.WebAdConfig.sFilePath || "") + "\u3002WebAdConfig \u4e0d\u5b58\u5728\uff0c\u4ee3\u7801\u521b\u5efa");
                            }
                        }

                        return SC.sc._0x6c363c8e;
                    }
                },
                events: {
                    get: function () {
                        if (SC.sc._0x23b88765 == null) {
                            SC.sc._0x23b88765 = new SC._0xd8ffff25();
                        }

                        return SC.sc._0x23b88765;
                    }
                },
                window: {
                    get: function () {
                        if (SC.sc._0x697c4b84 == null) {
                            SC.sc._0x697c4b84 = new SC.WindowCommon();
                        }

                        return SC.sc._0x697c4b84;
                    }
                },
                web: {
                    get: function () {
                        if (SC.sc._0xf00b8908 == null) {
                            SC.sc._0xf00b8908 = new SC._0x0b275e47();
                        }

                        return SC.sc._0xf00b8908;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.SDKVERSION = "2.5.9";
                    this.localStorage = new SC._0x44c7f1b7();
                    this.scene = new SC._0xe4b5de9a();
                    this.audio = new SC._0xbd04323f();
                    this.language = new SC.LanguageCommon();
                    this.config = new SC._0xde080b51();
                    this.BObfuscated = true;
                    this.sdk = new SC.sc._0xb1613693();
                    this.log = new SC._0x9e4216fb();
                    this.engine = new SC._0x80279dc2();
                    this.payEffect = new SC._0x39ec3c9a();
                    this.channel = new SC._0xb1611680();
                    this.time = new SC._0xbed9ceeb();
                    this.ad = new SC._0xc8c6ac7c();
                    this.prefab = new SC._0x75d7d73c();
                    this.ui = new SC._0x243e2502();
                    this.debug = new SC._0xf10be04f();
                    this.load = new SC._0xd3acda1a();
                    this.mobClick = new SC._0x5467135e();
                    this.package = new SC._0xb3912e6f();
                    this.image = new SC._0xccb74242();
                    this.check = new SC._0x1aa07f01();
                    this.pay = new SC.PayCommon();
                }
            },
            methods: {
                /*SC.sc.Init:static start.*/
                Init: function (_0x1b29e726) {
                    SC.sc.instance.Init(_0x1b29e726);
                },
                /*SC.sc.Init:static end.*/


            }
        }
    });
    /*SC.sc end.*/

    /*SC.sc+_0xb1613693 start.*/
    Bridge.define("SC.sc._0xb1613693", {
        $kind: 1002,
        methods: {
            /*SC.sc+_0xb1613693.OnPluginGameStart start.*/
            OnPluginGameStart: function () { },
            /*SC.sc+_0xb1613693.OnPluginGameStart end.*/

            /*SC.sc+_0xb1613693.OnPluginGameEnd start.*/
            OnPluginGameEnd: function () { },
            /*SC.sc+_0xb1613693.OnPluginGameEnd end.*/

            /*SC.sc+_0xb1613693.OnCommonOpportunity start.*/
            OnCommonOpportunity: function (_0x40a6f42a) { },
            /*SC.sc+_0xb1613693.OnCommonOpportunity end.*/

            /*SC.sc+_0xb1613693.OnEnterGameSuccess start.*/
            OnEnterGameSuccess: function () {
                SC.sc.web._0xd1f9d9fb("OnEnterGameSuccess");
            },
            /*SC.sc+_0xb1613693.OnEnterGameSuccess end.*/


        }
    });
    /*SC.sc+_0xb1613693 end.*/

    /*SC.sc+app start.*/
    Bridge.define("SC.sc.app", {
        $kind: 1002,
        statics: {
            props: {
                events: {
                    get: function () {
                        return new SC._0xf42a8601();
                    }
                }
            }
        }
    });
    /*SC.sc+app end.*/

    /*SC.sc+module start.*/
    Bridge.define("SC.sc.module", {
        $kind: 1002,
        statics: {
            props: {
                ins: {
                    get: function () {
                        return new SC._0x60d9f073();
                    }
                }
            }
        }
    });
    /*SC.sc+module end.*/

    /*SC.SCWebAdAdaptCanvas start.*/
    Bridge.define("SC.SCWebAdAdaptCanvas", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _0x1fecd093: null
        },
        props: {
            _0xb4a8f11c: {
                get: function () {
                    if (UnityEngine.MonoBehaviour.op_Equality(this._0x1fecd093, null)) {
                        this._0x1fecd093 = this.GetComponent(UnityEngine.UI.CanvasScaler);
                    }

                    return this._0x1fecd093;
                }
            }
        },
        methods: {
            /*SC.SCWebAdAdaptCanvas.Awake start.*/
            Awake: function () {
                this.ApplyAdapt(SC.sc.web.bPortrait);
            },
            /*SC.SCWebAdAdaptCanvas.Awake end.*/

            /*SC.SCWebAdAdaptCanvas.OnEnable start.*/
            OnEnable: function () {
                this.ApplyAdapt(SC.sc.web.bPortrait);
                SC.sc.web.addOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.ApplyAdapt));
            },
            /*SC.SCWebAdAdaptCanvas.OnEnable end.*/

            /*SC.SCWebAdAdaptCanvas.OnDisable start.*/
            OnDisable: function () {
                SC.sc.web.removeOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.ApplyAdapt));
            },
            /*SC.SCWebAdAdaptCanvas.OnDisable end.*/

            /*SC.SCWebAdAdaptCanvas.ApplyAdapt start.*/
            ApplyAdapt: function (_0x999a060c) {

                var _0x9a28f5e2 = this._0xb4a8f11c.referenceResolution.$clone();
                var _0x5b559f74 = _0x9a28f5e2.x > _0x9a28f5e2.y;
                if ((_0x999a060c && _0x5b559f74) || (!_0x999a060c && !_0x5b559f74)) {
                    this._0xb4a8f11c.referenceResolution = new pc.Vec2( _0x9a28f5e2.y, _0x9a28f5e2.x );
                }
            },
            /*SC.SCWebAdAdaptCanvas.ApplyAdapt end.*/


        }
    });
    /*SC.SCWebAdAdaptCanvas end.*/

    /*SC.SCWebAdAdaptNode start.*/
    Bridge.define("SC.SCWebAdAdaptNode", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            landscapeData: null,
            portraitData: null,
            _0x2c689f62: null
        },
        props: {
            _0x3070e37e: {
                get: function () {
                    if (UnityEngine.Component.op_Equality(this._0x2c689f62, null)) {
                        this._0x2c689f62 = this.GetComponent(UnityEngine.RectTransform);
                    }

                    return this._0x2c689f62;
                }
            }
        },
        ctors: {
            init: function () {
                this.landscapeData = new SC._0xda5e030f();
                this.portraitData = new SC._0xda5e030f();
            }
        },
        methods: {
            /*SC.SCWebAdAdaptNode.Start start.*/
            Start: function () {
                this.ApplyAdapt(SC.sc.web.bPortrait);
            },
            /*SC.SCWebAdAdaptNode.Start end.*/

            /*SC.SCWebAdAdaptNode.OnEnable start.*/
            OnEnable: function () {
                this.ApplyAdapt(SC.sc.web.bPortrait);
                SC.sc.web.addOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.ApplyAdapt));
            },
            /*SC.SCWebAdAdaptNode.OnEnable end.*/

            /*SC.SCWebAdAdaptNode.OnDisable start.*/
            OnDisable: function () {
                SC.sc.web.removeOnScreenOrientationChanged(Bridge.fn.cacheBind(this, this.ApplyAdapt));
            },
            /*SC.SCWebAdAdaptNode.OnDisable end.*/

            /*SC.SCWebAdAdaptNode.SaveData start.*/
            SaveData: function (_0x5c7b0c8a) {
                if (_0x5c7b0c8a) {
                    this.portraitData = this._0x74b2400b();
                } else {
                    this.landscapeData = this._0x74b2400b();
                }
            },
            /*SC.SCWebAdAdaptNode.SaveData end.*/

            /*SC.SCWebAdAdaptNode._0x74b2400b start.*/
            _0x74b2400b: function () {
                var $t;
                var _0x2c8fca6a = ($t = new SC._0xda5e030f(), $t.bEmpty = false, $t.position = this.transform.position.$clone(), $t.rotation = this.transform.rotation.$clone(), $t.scale = this.transform.localScale.$clone(), $t.anchoredPosition = this._0x3070e37e.anchoredPosition.$clone(), $t.sizeDelta = this._0x3070e37e.sizeDelta.$clone(), $t.anchorMin = this._0x3070e37e.anchorMin.$clone(), $t.anchorMax = this._0x3070e37e.anchorMax.$clone(), $t.pivot = this._0x3070e37e.pivot.$clone(), $t);
                return _0x2c8fca6a;
            },
            /*SC.SCWebAdAdaptNode._0x74b2400b end.*/

            /*SC.SCWebAdAdaptNode.ApplyAdapt start.*/
            ApplyAdapt: function (_0xd2abf547) {
                this._0x8c9be201(_0xd2abf547 ? this.portraitData : this.landscapeData);
            },
            /*SC.SCWebAdAdaptNode.ApplyAdapt end.*/

            /*SC.SCWebAdAdaptNode._0x8c9be201 start.*/
            _0x8c9be201: function (_0x030a4f5e) {
                if (_0x030a4f5e == null || _0x030a4f5e.bEmpty) {
                    return;
                }


                this.transform.position = _0x030a4f5e.position.$clone();
                this.transform.rotation = _0x030a4f5e.rotation.$clone();
                this.transform.localScale = _0x030a4f5e.scale.$clone();
                this._0x3070e37e.anchoredPosition = _0x030a4f5e.anchoredPosition.$clone();
                this._0x3070e37e.sizeDelta = _0x030a4f5e.sizeDelta.$clone();
                this._0x3070e37e.anchorMin = _0x030a4f5e.anchorMin.$clone();
                this._0x3070e37e.anchorMax = _0x030a4f5e.anchorMax.$clone();
                this._0x3070e37e.pivot = _0x030a4f5e.pivot.$clone();
            },
            /*SC.SCWebAdAdaptNode._0x8c9be201 end.*/


        }
    });
    /*SC.SCWebAdAdaptNode end.*/

    /*SC.UILanguage start.*/
    Bridge.define("SC.UILanguage", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            LLang: null
        },
        methods: {
            /*SC.UILanguage.Start start.*/
            Start: function () {
                var _0x20faeb77 = SC.sc.language.GetCustomLanguageIdx();
                if (UnityEngine.Object.op_Implicit(this.LLang.getItem(_0x20faeb77)) && UnityEngine.Object.op_Implicit(this.gameObject.GetComponent(UnityEngine.UI.Image))) {
                    this.gameObject.GetComponent(UnityEngine.UI.Image).sprite = this.LLang.getItem(_0x20faeb77);
                }
            },
            /*SC.UILanguage.Start end.*/

            /*SC.UILanguage.Update start.*/
            Update: function () { },
            /*SC.UILanguage.Update end.*/


        }
    });
    /*SC.UILanguage end.*/

    /*SC.Utility.TExcel start.*/
    Bridge.define("SC.Utility.TExcel", {
        statics: {
            methods: {
                /*SC.Utility.TExcel._0x776c3abb:static start.*/
                _0x776c3abb: function (_0xecbab2d1) {

                    var _0x78d4ed69 = new (System.Collections.Generic.List$1(System.String)).ctor();
                    var _0x991654d8 = "";
                    var _0xd4f3ba2f = System.String.indexOf(_0xecbab2d1, "\t");
                    while (_0xd4f3ba2f >= 0) {
                        _0x991654d8 = _0xecbab2d1.substr(0, _0xd4f3ba2f);
                        _0x78d4ed69.add(_0x991654d8);
                        _0xecbab2d1 = _0xecbab2d1.substr(((_0xd4f3ba2f + 1) | 0));
                        _0xd4f3ba2f = System.String.indexOf(_0xecbab2d1, "\t");
                    }

                    _0xecbab2d1 = System.Text.RegularExpressions.Regex.replace(_0xecbab2d1, "\\s+$", "");
                    _0x78d4ed69.add(_0xecbab2d1);
                    return _0x78d4ed69;
                },
                /*SC.Utility.TExcel._0x776c3abb:static end.*/

                /*SC.Utility.TExcel._0xf39cfe13:static start.*/
                _0xf39cfe13: function (_0x6c9f04dd) {




                    var _0xb9a8dfb2 = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(System.String))).ctor();

                    var _0x1707d479 = System.String.indexOf(_0x6c9f04dd, "\n");

                    var _0x733449f7 = "";
                    var _0x688001fc;
                    while (_0x1707d479 >= 0) {
                        _0x733449f7 = _0x6c9f04dd.substr(0, _0x1707d479);
                        _0x688001fc = SC.Utility.TExcel._0x776c3abb(_0x733449f7);
                        _0xb9a8dfb2.add(_0x688001fc);

                        if (_0x6c9f04dd.charCodeAt(0) === 10) {
                            _0x6c9f04dd = _0x6c9f04dd.substr(1);
                        } else {
                            _0x6c9f04dd = _0x6c9f04dd.substr(((_0x1707d479 + 1) | 0));
                        }

                        _0x1707d479 = System.String.indexOf(_0x6c9f04dd, "\n");
                    }

                    _0x688001fc = SC.Utility.TExcel._0x776c3abb(_0x6c9f04dd);
                    _0xb9a8dfb2.add(_0x688001fc);
                    return _0xb9a8dfb2;
                },
                /*SC.Utility.TExcel._0xf39cfe13:static end.*/

                /*SC.Utility.TExcel.ExcelToJson:static start.*/
                ExcelToJson: function (_0x58d0d446, _0x40595aa1) {

                    var _0x45c0f0f7 = SC.Utility.TExcel._0xf39cfe13(_0x58d0d446);
                    if (_0x45c0f0f7 == null || _0x45c0f0f7.Count <= 3) {
                        return null;
                    }



                    var _0x2fafa597 = _0x45c0f0f7.getItem(2);
                    var _0xd730dde2 = _0x2fafa597.Count;
                    if (_0xd730dde2 > 30) {
                        SC.sc.log.Warning(System.String.format("[{0}] has {1} fields, too many! Please check if it is needed!", _0x40595aa1, Bridge.box(_0xd730dde2, System.Int32)));
                    }

                    for (var _0xff0e3076 = 0; _0xff0e3076 < _0xd730dde2; _0xff0e3076 = (_0xff0e3076 + 1) | 0) {
                        var _0x45284634 = _0x2fafa597.getItem(_0xff0e3076).trim();
                        if (Bridge.referenceEquals(_0x45284634, "")) {
                            SC.sc.log.Error(System.String.format("[{0}] The field name of the {1} column cannot be empty", _0x40595aa1, Bridge.box(((_0xff0e3076 + 1) | 0), System.Int32)));
                            return null;
                        }
                    }

                    var _0x87351ace = _0x45c0f0f7.getItem(1);

                    if (_0xd730dde2 !== _0x87351ace.Count) {
                        SC.sc.log.Error(System.String.format("TExcel tableName:{0} 2,3 row column number is inconsistent", [_0x40595aa1]));
                        return null;
                    }


                    var _0xac1dbd8e = "string";
                    var _0x347174e0;
                    var _0x4ab838da = new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object))).ctor();
                    var _0x6b8b9074 = null;
                    var _0x632377a0 = "";
                    var _0xddef86a1 = "";
                    var _0xa93d6e22;
                    var _0xeb89d923 = 3;
                    var _0xfb4ad5f6 = 0;







                    try {
                        for (; _0xeb89d923 < _0x45c0f0f7.Count; _0xeb89d923 = (_0xeb89d923 + 1) | 0) {
                            _0x6b8b9074 = _0x45c0f0f7.getItem(_0xeb89d923);
                            if (SC.sc.bEditor) {
                                if (_0xd730dde2 !== _0x6b8b9074.Count && _0x6b8b9074.Count !== 1 && _0x6b8b9074.getItem(0).length !== 0 && !System.String.startsWith(_0x6b8b9074.getItem(0), "#")) {
                                    SC.sc.log.Error(System.String.format("TExcel tableName:{0} key field number is inconsistent with the number of columns in the {1} row", _0x40595aa1, Bridge.box(((_0xeb89d923 + 1) | 0), System.Int32)));
                                    return null;
                                }
                            }

                            var _0x4377bf79 = new (System.Collections.Generic.Dictionary$2(System.String,System.Object)).ctor();
                            _0x632377a0 = "";
                            var _0x1e3f016c = _0x6b8b9074.Count;
                            for (_0xfb4ad5f6 = 0; _0xfb4ad5f6 < _0xd730dde2; _0xfb4ad5f6 = (_0xfb4ad5f6 + 1) | 0) {
                                if (_0xfb4ad5f6 >= _0x1e3f016c) {
                                    _0xddef86a1 = "";
                                } else {
                                    _0xddef86a1 = _0x6b8b9074.getItem(_0xfb4ad5f6);
                                }

                                if (_0xddef86a1 == null) {
                                    _0xddef86a1 = "";
                                }

                                _0xa93d6e22 = _0xddef86a1.trim();
                                if (_0xfb4ad5f6 === 0) {
                                    _0x632377a0 = _0xa93d6e22;

                                    if (_0x632377a0.length === 0 || System.String.startsWith(_0x632377a0, "#")) {
                                        _0x632377a0 = "";
                                        break;
                                    }
                                }

                                if (!System.String.equals(_0xa93d6e22, _0xddef86a1)) {
                                    if (_0xfb4ad5f6 === 0 || !Bridge.referenceEquals(_0x40595aa1, "language")) {
                                        _0xddef86a1 = _0xa93d6e22;
                                    }
                                }

                                _0xac1dbd8e = _0x87351ace.getItem(_0xfb4ad5f6);
                                if (Bridge.referenceEquals(_0xac1dbd8e, "int")) {
                                    if (Bridge.referenceEquals(_0xddef86a1, "-") || Bridge.referenceEquals(_0xddef86a1, "")) {
                                        _0x347174e0 = Bridge.box(0, System.Int32);
                                    } else {
                                        _0x347174e0 = Bridge.box(System.Int32.parse(_0xddef86a1), System.Int32);
                                    }
                                } else if (Bridge.referenceEquals(_0xac1dbd8e, "long")) {
                                    if (Bridge.referenceEquals(_0xddef86a1, "-") || Bridge.referenceEquals(_0xddef86a1, "")) {
                                        _0x347174e0 = Bridge.box(0, System.Int32);
                                    } else {
                                        _0x347174e0 = System.Int64.parse(_0xddef86a1);
                                    }
                                } else if (Bridge.referenceEquals(_0xac1dbd8e, "double") || Bridge.referenceEquals(_0xac1dbd8e, "float")) {
                                    if (Bridge.referenceEquals(_0xddef86a1, "-") || Bridge.referenceEquals(_0xddef86a1, "")) {
                                        _0x347174e0 = Bridge.box(0, System.Int32);
                                    } else {
                                        var _0x5aa20dc9 = System.Double.parse(_0xddef86a1);
                                        _0x347174e0 = Bridge.box(_0x5aa20dc9, System.Double, System.Double.format, System.Double.getHashCode);
                                    }
                                } else if (Bridge.referenceEquals(_0xac1dbd8e, "list")) {
                                    if (Bridge.referenceEquals(_0xddef86a1, "-") || Bridge.referenceEquals(_0xddef86a1, "")) {
                                        _0x347174e0 = "[]";
                                    } else {
                                        _0x347174e0 = _0xddef86a1;
                                    }
                                } else if (Bridge.referenceEquals(_0xac1dbd8e, "dict")) {
                                    if (Bridge.referenceEquals(_0xddef86a1, "-") || Bridge.referenceEquals(_0xddef86a1, "")) {
                                        _0x347174e0 = "{}";
                                    } else {
                                        _0x347174e0 = _0xddef86a1;
                                    }
                                } else if (Bridge.referenceEquals(_0xac1dbd8e, "string")) {
                                    _0x347174e0 = _0xddef86a1;
                                    if (Bridge.referenceEquals(Bridge.toString(_0x347174e0), "-")) {
                                        _0x347174e0 = "";
                                    }
                                } else {
                                    if (SC.sc.bEditor) {

                                        if (!Bridge.referenceEquals(_0xac1dbd8e, "")) {
                                            SC.sc.log.Error(System.String.format("config {0}.txt type =[{1}] error \n i:{2}-- j:{3} value:{4}", _0x40595aa1, _0xac1dbd8e, Bridge.box(_0xeb89d923, System.Int32), Bridge.box(_0xfb4ad5f6, System.Int32), _0xddef86a1));
                                            return null;
                                        }
                                    }

                                    if (Bridge.referenceEquals(_0xac1dbd8e, "")) {

                                        continue;
                                    } else if (_0xfb4ad5f6 >= _0x6b8b9074.Count) {
                                        SC.sc.log.Error(System.String.format("sTableName::{0} i::{1} Incorrect number of data at least::{2}", _0x40595aa1, Bridge.box(_0xeb89d923, System.Int32), Bridge.box(_0xd730dde2, System.Int32)));
                                        break;
                                    }

                                    _0x347174e0 = _0xddef86a1;
                                    if (Bridge.referenceEquals(Bridge.toString(_0x347174e0), "-")) {
                                        _0x347174e0 = "";
                                    }
                                }

                                _0x4377bf79.setItem(_0x2fafa597.getItem(_0xfb4ad5f6), _0x347174e0);
                            }

                            if (!Bridge.referenceEquals(Bridge.toString(_0x632377a0), "")) {
                                _0x4ab838da.setItem(_0x632377a0, _0x4377bf79);
                            }
                        }
                    } catch (e) {
                        e = System.Exception.create(e);

                        if (_0x6b8b9074 != null) {
                            SC.sc.log.Error((System.String.format("sc config TExcel tableName:{0} row.length:{1} i:{2}-- j:{3}-- key:{4}-- sValue:{5} message:{6}", _0x40595aa1, Bridge.box(_0x6b8b9074.Count, System.Int32), Bridge.box(_0xeb89d923, System.Int32), Bridge.box(_0xfb4ad5f6, System.Int32), _0x632377a0, _0xddef86a1, e.Message) || "") + "\r\n\tStackTrace:" + (e.StackTrace || ""));
                        } else {
                            SC.sc.log.Error((System.String.format("sc config TExcel tableName:{0} i:{1}-- j:{2}-- key:{3}-- sValue:{4} message:{5}", _0x40595aa1, Bridge.box(_0xeb89d923, System.Int32), Bridge.box(_0xfb4ad5f6, System.Int32), _0x632377a0, _0xddef86a1, e.Message) || "") + "\r\n\tStackTrace:" + (e.StackTrace || ""));
                        }

                        throw e;
                    }

                    return _0x4ab838da;
                },
                /*SC.Utility.TExcel.ExcelToJson:static end.*/


            }
        }
    });
    /*SC.Utility.TExcel end.*/

    /*SC.WebAdConfig start.*/
    Bridge.define("SC.WebAdConfig", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            fields: {
                sFilePath: null
            },
            ctors: {
                init: function () {
                    this.sFilePath = "config/WebAdConfig";
                }
            }
        },
        fields: {
            EEditorLanguage: 0,
            _0xf7ca088e: null,
            _0xac07fcd8: null,
            WindowConfigs: null,
            BUseSCFontTtf: false,
            IAutoSettleDuration: 0,
            IDebugLanguage: 0,
            eDebugWebPlatform: 0,
            fDebugCheckEnterGameTime: 0,
            fDebugAdDuration: 0,
            EGraphicsAPI: 0
        },
        events: {
            OnEditorConfigChanged: null
        },
        ctors: {
            init: function () {
                this.EEditorLanguage = SC.LanguageCommon.ELanguage.Chinese;
                this.WindowConfigs = function (_o1) {
                        var $t;
                        _o1.add(($t = new SC.WindowConfig(), $t.winName = "LayerMainWeb", $t.prefab = null, $t));
                        _o1.add(($t = new SC.WindowConfig(), $t.winName = "LayerSettleWeb", $t.prefab = null, $t));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(SC.WindowConfig)).ctor());
                this.BUseSCFontTtf = true;
                this.IAutoSettleDuration = 10;
                this.IDebugLanguage = SC.LanguageCommon.ELanguage.English;
                this.eDebugWebPlatform = SC.EWebPlatform.applovin;
                this.fDebugCheckEnterGameTime = 10;
                this.fDebugAdDuration = 10;
                this.EGraphicsAPI = SC.EGraphicsAPIType.WebGL1AndWebGL2;
            }
        },
        methods: {
            /*SC.WebAdConfig.OnValidate start.*/
            OnValidate: function () {
                var $t, $t1;
                if (UnityEngine.Application.isPlaying) {
                    return;
                }

                if (this._0xac07fcd8 == null) {
                    this._0xac07fcd8 = Bridge.Reflection.getMembers(Bridge.getType(this), 4, 20);
                }

                if (this._0xf7ca088e == null) {
                    this._0xf7ca088e = UnityEngine.ScriptableObject.CreateInstance(SC.WebAdConfig);

                    $t = Bridge.getEnumerator(this._0xac07fcd8);
                    try {
                        while ($t.moveNext()) {
                            var field = $t.Current;
                            Bridge.Reflection.fieldAccess(field, this._0xf7ca088e, Bridge.unbox(Bridge.Reflection.fieldAccess(field, this)));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }


                $t1 = Bridge.getEnumerator(this._0xac07fcd8);
                try {
                    while ($t1.moveNext()) {
                        var field1 = $t1.Current;
                        var _0x2a24962e = Bridge.Reflection.fieldAccess(field1, this);
                        var _0x700fd221 = Bridge.Reflection.fieldAccess(field1, this._0xf7ca088e);
                        if (!Bridge.equals(_0x2a24962e, _0x700fd221)) {
                            Bridge.Reflection.fieldAccess(field1, this._0xf7ca088e, Bridge.unbox(_0x2a24962e));
                            if (!Bridge.staticEquals(this.OnEditorConfigChanged, null)) {
                                this.OnEditorConfigChanged(field1.n, _0x2a24962e);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*SC.WebAdConfig.OnValidate end.*/


        }
    });
    /*SC.WebAdConfig end.*/

    /*SC.WindowCommon start.*/
    Bridge.define("SC.WindowCommon", {
        fields: {
            _0x901c3e4a: null,
            _0xe21c6023: null,
            sModuleName: null,
            winPool_Capacity: 0,
            winPool_AutoReleaseInterval: 0,
            OpenUIFormSuccess: null,
            OpenUIFormFailure: null,
            OpenUIFormUpdate: null,
            CloseUIFormComplete: null
        },
        ctors: {
            init: function () {
                this._0x901c3e4a = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*SC.WindowCommon.AddUICanvas start.*/
            AddUICanvas: function () {
                var _0xc2159a0a = new UnityEngine.GameObject.$ctor2("UICanvas");
                SC._0xeb7b2e5c.GetOrAddComponent(UnityEngine.Canvas, _0xc2159a0a).renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                SC._0xeb7b2e5c.GetOrAddComponent(UnityEngine.Canvas, _0xc2159a0a).sortingOrder = 2;
                var _0xe0f1255d = SC._0xeb7b2e5c.GetOrAddComponent(UnityEngine.UI.CanvasScaler, _0xc2159a0a);
                _0xe0f1255d.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                _0xe0f1255d.referenceResolution = new pc.Vec2( 640, 1136 );
                SC._0xeb7b2e5c.GetOrAddComponent(UnityEngine.UI.GraphicRaycaster, _0xc2159a0a);
                SC._0xeb7b2e5c.GetOrAddComponent(UnityEngine.CanvasGroup, _0xc2159a0a);
                SC._0xeb7b2e5c.GetOrAddComponent(SC.SCWebAdAdaptCanvas, _0xc2159a0a);
                this._0xe21c6023 = _0xc2159a0a.transform;
                UnityEngine.Object.DontDestroyOnLoad(_0xc2159a0a);
            },
            /*SC.WindowCommon.AddUICanvas end.*/

            /*SC.WindowCommon._0xe6dc252a start.*/
            _0xe6dc252a: function (_0x181cc94f) {
                var _0x2d5cce1e = SC.sc.WebAdConfig.WindowConfigs.Find(function (_0xcbba8775) {
                    return Bridge.referenceEquals(_0xcbba8775.winName, _0x181cc94f);
                });
                if (_0x2d5cce1e == null) {
                    SC.sc.log.Error(System.String.format("The window page [{0}] prefab is not configured! Please configure it in WebAdConfig.asset!", [_0x181cc94f]));
                    return null;
                }

                return _0x2d5cce1e.prefab;
            },
            /*SC.WindowCommon._0xe6dc252a end.*/

            /*SC.WindowCommon.ShowWindow start.*/
            ShowWindow: function (_0x74664861, _0x267b99c2) {
                if (_0x267b99c2 === void 0) { _0x267b99c2 = null; }
                UnityEngine.Debug.Log$1(System.String.format("ShowWindow: {0}", [_0x74664861]));
                var _0xde2cb2e9 = this._0xe6dc252a(_0x74664861);
                if (UnityEngine.GameObject.op_Equality(_0xde2cb2e9, null)) {
                    if (!Bridge.staticEquals(this.OpenUIFormFailure, null)) {
                        this.OpenUIFormFailure(new SC._0xf0a09606(0, _0x74664861, System.String.format("Prefab for {0} not found", [_0x74664861]), _0x267b99c2));
                    }
                    return;
                }
                var win = { };

                if (this._0x901c3e4a.tryGetValue(_0x74664861, win)) {
                    win.v.SetActive(true);
                } else {
                    win.v = UnityEngine.Object.Instantiate(UnityEngine.GameObject, _0xde2cb2e9, this._0xe21c6023);
                    win.v.name = _0x74664861;
                    this._0x901c3e4a.add(_0x74664861, win.v);
                }

                var _0x8a799a15 = win.v.GetComponent(SC._0x62a5bf4d);
                if (!Bridge.staticEquals(this.OpenUIFormSuccess, null)) {
                    this.OpenUIFormSuccess(new SC._0x07092f78(_0x8a799a15, 0, _0x267b99c2));
                }
            },
            /*SC.WindowCommon.ShowWindow end.*/

            /*SC.WindowCommon.HideWindow start.*/
            HideWindow: function (_0xa38d467f) {
                var win = { };
                if (this._0x901c3e4a.tryGetValue(_0xa38d467f, win)) {
                    win.v.SetActive(false);
                }
            },
            /*SC.WindowCommon.HideWindow end.*/

            /*SC.WindowCommon.GetWindowConfig start.*/
            GetWindowConfig: function (_0x82cd2294) {
                return null;
            },
            /*SC.WindowCommon.GetWindowConfig end.*/

            /*SC.WindowCommon.GetWindowForm start.*/
            GetWindowForm: function (_0xc0d9ebd0) {
                return null;
            },
            /*SC.WindowCommon.GetWindowForm end.*/

            /*SC.WindowCommon.GetWindowForm$1 start.*/
            GetWindowForm$1: function (_0x206d2554) {
                return null;
            },
            /*SC.WindowCommon.GetWindowForm$1 end.*/

            /*SC.WindowCommon.CloseAllLoadingWindowForms start.*/
            CloseAllLoadingWindowForms: function () { },
            /*SC.WindowCommon.CloseAllLoadingWindowForms end.*/


        },
        overloads: {
            "GetWindowForm(System.String)": "GetWindowForm$1"
        }
    });
    /*SC.WindowCommon end.*/

    /*SC.WindowConfig start.*/
    Bridge.define("SC.WindowConfig", {
        fields: {
            winName: null,
            prefab: null
        }
    });
    /*SC.WindowConfig end.*/

    /*SCParam._0x5c71f007 start.*/
    Bridge.define("SCParam._0x5c71f007", {
        fields: {
            IShowType: 0
        },
        ctors: {
            init: function () {
                this.IShowType = 0;
            }
        }
    });
    /*SCParam._0x5c71f007 end.*/

    /*SCParam._0x5c71f007+_0x997d4720 start.*/
    Bridge.define("SCParam._0x5c71f007._0x997d4720", {
        $kind: 1006,
        statics: {
            fields: {
                _0xad51ac56: 1,
                _0x9e08a793: 2
            }
        }
    });
    /*SCParam._0x5c71f007+_0x997d4720 end.*/

    /*SCParam._0x5d77a5fd start.*/
    Bridge.define("SCParam._0x5d77a5fd", {
        fields: {
            SContnet: null,
            SImgIdBg: null
        },
        ctors: {
            init: function () {
                this.SContnet = null;
                this.SImgIdBg = null;
            }
        }
    });
    /*SCParam._0x5d77a5fd end.*/

    /*SCParam._0x96595b61 start.*/
    Bridge.define("SCParam._0x96595b61", {
        fields: {
            OnEnterStage: null,
            stageInfo: null
        }
    });
    /*SCParam._0x96595b61 end.*/

    /*SCParam._0xbd7cfdb7 start.*/
    Bridge.define("SCParam._0xbd7cfdb7", {
        fields: {
            insId: null,
            itemId: null,
            changeCount: System.Int64(0),
            curCount: System.Int64(0)
        },
        methods: {
            /*SCParam._0xbd7cfdb7.Clear start.*/
            Clear: function () {
                this.changeCount = (this.curCount = System.Int64(0));
                this.insId = null;
            },
            /*SCParam._0xbd7cfdb7.Clear end.*/


        }
    });
    /*SCParam._0xbd7cfdb7 end.*/

    /*SCParam._0xc9a7c399 start.*/
    Bridge.define("SCParam._0xc9a7c399", {
        fields: {
            sShowSign: null,
            lFilterSign: null
        }
    });
    /*SCParam._0xc9a7c399 end.*/

    /*SCParam.DialogNotifyInfo start.*/
    Bridge.define("SCParam.DialogNotifyInfo", {
        fields: {
            SContent: null,
            STitle: null,
            BNeedSelect: false,
            FunConfirm: null,
            SConfirmTxt: null,
            FunCancel: null,
            SCancelTxt: null
        },
        ctors: {
            init: function () {
                this.SContent = null;
                this.STitle = null;
                this.BNeedSelect = false;
                this.FunConfirm = null;
                this.SConfirmTxt = null;
                this.FunCancel = null;
                this.SCancelTxt = null;
            }
        }
    });
    /*SCParam.DialogNotifyInfo end.*/

    /*SCParam.NotifyBuyCloseAd start.*/
    Bridge.define("SCParam.NotifyBuyCloseAd", {
        fields: {
            fSuccess: null,
            fError: null,
            fClose: null
        }
    });
    /*SCParam.NotifyBuyCloseAd end.*/

    /*SettlementOutcomeBanner start.*/
    Bridge.define("SettlementOutcomeBanner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            banner: null,
            wonSprite: null,
            failedSprite: null,
            downloadButton: null,
            failedDownloadSprite: null,
            originalButtonSprite: null,
            originalButtonType: 0,
            originalPreserveAspect: false,
            buttonLabels: null,
            originalLabelStates: null
        },
        methods: {
            /*SettlementOutcomeBanner.OnEnable start.*/
            OnEnable: function () {
                var game = GameManager.instance;
                this.SetOutcome(UnityEngine.MonoBehaviour.op_Inequality(game, null) && game.WonThisRun, UnityEngine.MonoBehaviour.op_Inequality(game, null) && game.FailedThisRun);
            },
            /*SettlementOutcomeBanner.OnEnable end.*/

            /*SettlementOutcomeBanner.SetOutcome start.*/
            SetOutcome: function (won, failed) {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.downloadButton, null)) {
                    if (this.buttonLabels == null) {
                        this.originalButtonSprite = this.downloadButton.sprite;
                        this.originalButtonType = this.downloadButton.type;
                        this.originalPreserveAspect = this.downloadButton.preserveAspect;
                        this.buttonLabels = System.Array.init(this.downloadButton.transform.childCount, null, UnityEngine.GameObject);
                        this.originalLabelStates = System.Array.init(this.buttonLabels.length, false, System.Boolean);
                        for (var i = 0; i < this.buttonLabels.length; i = (i + 1) | 0) {
                            this.buttonLabels[i] = this.downloadButton.transform.GetChild(i).gameObject;
                            this.originalLabelStates[i] = this.buttonLabels[i].activeSelf;
                        }
                    }
                    var useDownloadArt = (won || failed) && this.failedDownloadSprite != null;
                    this.downloadButton.sprite = useDownloadArt ? this.failedDownloadSprite : this.originalButtonSprite;
                    this.downloadButton.type = useDownloadArt ? UnityEngine.UI.Image.Type.Simple : this.originalButtonType;
                    this.downloadButton.preserveAspect = useDownloadArt || this.originalPreserveAspect;
                    for (var i1 = 0; i1 < this.buttonLabels.length; i1 = (i1 + 1) | 0) {
                        this.buttonLabels[i1].SetActive(!useDownloadArt && this.originalLabelStates[i1]);
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.banner, null)) {
                    return;
                }
                this.banner.sprite = won ? this.wonSprite : failed ? this.failedSprite : null;
                this.banner.preserveAspect = true;
                this.banner.gameObject.SetActive((won || failed) && this.banner.sprite != null);
            },
            /*SettlementOutcomeBanner.SetOutcome end.*/


        }
    });
    /*SettlementOutcomeBanner end.*/

    /*ShooterState start.*/
    Bridge.define("ShooterState", {
        $kind: 6,
        statics: {
            fields: {
                Idle: 0,
                Walking: 1,
                Shooting: 2,
                Depleted: 3
            }
        }
    });
    /*ShooterState end.*/

    /*SlotOccupier start.*/
    Bridge.define("SlotOccupier", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isOccupied: false,
            isShooting: false
        },
        ctors: {
            init: function () {
                this.isOccupied = false;
                this.isShooting = false;
            }
        },
        methods: {
            /*SlotOccupier.isPlantStuck start.*/
            isPlantStuck: function () {


                return this.isOccupied && !this.isShooting;
            },
            /*SlotOccupier.isPlantStuck end.*/


        }
    });
    /*SlotOccupier end.*/

    /*SlotOverflowFailTimer start.*/
    /**
     * Tracks how long the cannon slots remain continuously blocked.
     *
     * @public
     * @class SlotOverflowFailTimer
     */
    Bridge.define("SlotOverflowFailTimer", {
        $kind: 4,
        statics: {
            fields: {
                DelaySeconds: 0
            },
            ctors: {
                init: function () {
                    this.DelaySeconds = 2.0;
                }
            },
            methods: {
                getDefaultValue: function () { return new SlotOverflowFailTimer(); }
            }
        },
        fields: {
            elapsed: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            /*SlotOverflowFailTimer.Advance start.*/
            Advance: function (slotsBlocked, deltaTime) {
                if (!slotsBlocked) {
                    this.elapsed = 0.0;
                    return false;
                }

                this.elapsed += UnityEngine.Mathf.Max(0.0, deltaTime);
                return this.elapsed >= SlotOverflowFailTimer.DelaySeconds;
            },
            /*SlotOverflowFailTimer.Advance end.*/

            /*SlotOverflowFailTimer.Reset start.*/
            Reset: function () {
                this.elapsed = 0.0;
            },
            /*SlotOverflowFailTimer.Reset end.*/

            getHashCode: function () {
                var h = Bridge.addHash([9397017108, this.elapsed]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, SlotOverflowFailTimer)) {
                    return false;
                }
                return Bridge.equals(this.elapsed, o.elapsed);
            },
            $clone: function (to) {
                var s = to || new SlotOverflowFailTimer();
                s.elapsed = this.elapsed;
                return s;
            }
        }
    });
    /*SlotOverflowFailTimer end.*/

    /*SoundManage start.*/
    Bridge.define("SoundManage", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            sfxAudioSource: null,
            MusicAudioSource: null,
            buttonClickAudio: null,
            popSoundClip: null,
            LevelWin: null,
            LevelFailed: null
        },
        props: {
            isSoundOn: {
                get: function () {
                    return SC.sc.localStorage.GetObject(System.Int32, "isSoundOn", Bridge.box(1, System.Int32)) === 1;
                },
                set: function (value) {
                    SC.sc.localStorage.SetObject("isSoundOn", Bridge.box(System.Convert.toInt32(Bridge.box(value, System.Boolean, System.Boolean.toString)), System.Int32));
                }
            },
            isMusicOn: {
                get: function () {
                    return SC.sc.localStorage.GetObject(System.Int32, "musicValue", Bridge.box(1, System.Int32)) === 1;
                },
                set: function (value) {
                    SC.sc.localStorage.SetObject("musicValue", Bridge.box(System.Convert.toInt32(Bridge.box(value, System.Boolean, System.Boolean.toString)), System.Int32));
                }
            }
        },
        methods: {
            /*SoundManage.SetMusic start.*/
            SetMusic: function (value) {
                this.isMusicOn = value;
                //if(!value)
                this.MusicAudioSource.mute = !this.isMusicOn;
            },
            /*SoundManage.SetMusic end.*/

            /*SoundManage.SetSound start.*/
            SetSound: function (value) {
                this.isSoundOn = value;
                this.sfxAudioSource.mute = !this.isSoundOn;
            },
            /*SoundManage.SetSound end.*/

            /*SoundManage.Awake start.*/
            Awake: function () {
                SoundManage.instance = this;
                UnityEngine.MonoBehaviour.DontDestroyOnLoad(this);
            },
            /*SoundManage.Awake end.*/

            /*SoundManage.PlayLevelEndSound start.*/
            PlayLevelEndSound: function (win) {
                // if (sfxAudioSource == null) {
                //     sfxAudioSource = gameObject.AddComponent<AudioSource>();
                // }
                // if (win)
                //     sfxAudioSource.clip = LevelWin;
                // else
                //     sfxAudioSource.clip = LevelFailed;
                // sfxAudioSource.Play();
            },
            /*SoundManage.PlayLevelEndSound end.*/

            /*SoundManage.PlayButtonClickSound start.*/
            PlayButtonClickSound: function () {
                // if (sfxAudioSource == null) {
                //     sfxAudioSource = gameObject.AddComponent<AudioSource>();
                // }
                // sfxAudioSource.clip = buttonClickAudio;
                // sfxAudioSource.Play();
            },
            /*SoundManage.PlayButtonClickSound end.*/

            /*SoundManage.PlayPowerupSounds start.*/
            PlayPowerupSounds: function (_clip) {
                // if (sfxAudioSource == null) {
                //     sfxAudioSource = gameObject.AddComponent<AudioSource>();
                // }
                // sfxAudioSource.clip = _clip;
                // sfxAudioSource.Play();
            },
            /*SoundManage.PlayPowerupSounds end.*/

            /*SoundManage.popSound start.*/
            popSound: function () {
                // if (sfxAudioSource == null) {
                //     sfxAudioSource = gameObject.AddComponent<AudioSource>();
                // }
                // sfxAudioSource.clip = popSoundClip;
                // sfxAudioSource.PlayOneShot(sfxAudioSource.clip);
            },
            /*SoundManage.popSound end.*/


        }
    });
    /*SoundManage end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        methods: {
            /*UIManager.Awake start.*/
            Awake: function () {
                UIManager.instance = this;
            },
            /*UIManager.Awake end.*/

            /*UIManager.OnDestroy start.*/
            OnDestroy: function () {
                UIManager.instance = null;
            },
            /*UIManager.OnDestroy end.*/

            /*UIManager.PlayGame start.*/
            PlayGame: function () {
                UnityEngine.SceneManagement.SceneManager.LoadScene(1);
                // 记录开始一局
                SC.sc.sdk.OnPluginGameStart();
            },
            /*UIManager.PlayGame end.*/


        }
    });
    /*UIManager end.*/

    /*UIRotator start.*/
    Bridge.define("UIRotator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            degreesPerSecond: 0,
            rt: null
        },
        ctors: {
            init: function () {
                this.degreesPerSecond = -18.0;
            }
        },
        methods: {
            /*UIRotator.Awake start.*/
            Awake: function () {
                this.rt = this.GetComponent(UnityEngine.RectTransform);
            },
            /*UIRotator.Awake end.*/

            /*UIRotator.Update start.*/
            Update: function () {
                this.rt.Rotate(0.0, 0.0, this.degreesPerSecond * UnityEngine.Time.unscaledDeltaTime);
            },
            /*UIRotator.Update end.*/


        }
    });
    /*UIRotator end.*/

    /*WinCelebration start.*/
    Bridge.define("WinCelebration", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            greatJobText: null,
            confettiPrefab: null,
            holdSeconds: 0,
            confettiLocalPos: null,
            confettiLocalEuler: null,
            confettiScale: 0,
            confettiEmitWidth: 0,
            confettiRateOverTime: 0,
            confettiOpeningBurst: 0,
            confettiLifetime: 0
        },
        ctors: {
            init: function () {
                this.confettiLocalPos = new UnityEngine.Vector3();
                this.confettiLocalEuler = new UnityEngine.Vector3();
                this.holdSeconds = 3.0;
                this.confettiLocalPos = new pc.Vec3( 0.0, 6.0, 8.0 );
                this.confettiLocalEuler = new pc.Vec3( 270.0, 0.0, 0.0 );
                this.confettiScale = 3.2;
                this.confettiEmitWidth = 4.5;
                this.confettiRateOverTime = 95.0;
                this.confettiOpeningBurst = 70;
                this.confettiLifetime = 5.0;
            }
        },
        methods: {
            /*WinCelebration.Play start.*/
            Play: function (onComplete) {
                this.gameObject.SetActive(true);

                if (UnityEngine.Component.op_Inequality(this.greatJobText, null)) {
                    this.greatJobText.localScale = pc.Vec3.ZERO.clone();
                    DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.greatJobText, 1.0, 0.4), DG.Tweening.Ease.OutBack), true);
                }

                if (UnityEngine.GameObject.op_Inequality(this.confettiPrefab, null) && UnityEngine.Component.op_Inequality(UnityEngine.Camera.main, null)) {
                    var c = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.confettiPrefab, UnityEngine.Camera.main.transform);
                    c.transform.localPosition = this.confettiLocalPos.$clone();
                    c.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( this.confettiLocalEuler.x, this.confettiLocalEuler.y, this.confettiLocalEuler.z );
                    c.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.confettiScale );
                    this.WidenConfetti(c);
                    this.Destroy(c, this.holdSeconds + 6.0);
                }

                this.StartCoroutine$1(this.HoldThen(onComplete));
            },
            /*WinCelebration.Play end.*/

            /*WinCelebration.WidenConfetti start.*/
            WidenConfetti: function (root) {
                var $t;
                $t = Bridge.getEnumerator(root.GetComponentsInChildren(UnityEngine.ParticleSystem, true));
                try {
                    while ($t.moveNext()) {
                        var ps = $t.Current;
                        var shape = ps.shape;
                        var s = shape.scale.$clone();
                        shape.scale = new pc.Vec3( this.confettiEmitWidth, s.y, s.z );

                        var em = ps.emission;
                        em.rateOverTime = new pc.MinMaxCurve( this.confettiRateOverTime );

                        var main = ps.main;
                        var life = main.startLifetime;
                        life.mode = UnityEngine.ParticleSystemCurveMode.Constant;
                        life.constantMax = this.confettiLifetime;
                        main.startLifetime = life;
                        main.maxParticles = UnityEngine.Mathf.Max(main.maxParticles, 1500);

                        ps.Clear();
                        ps.Play();
                        if (this.confettiOpeningBurst > 0) {
                            ps.Emit(this.confettiOpeningBurst);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*WinCelebration.WidenConfetti end.*/

            /*WinCelebration.HoldThen start.*/
            HoldThen: function (onComplete) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSecondsRealtime(this.holdSeconds);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*WinCelebration.HoldThen end.*/


        }
    });
    /*WinCelebration end.*/

    /*ZombieAligner start.*/
    Bridge.define("ZombieAligner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spacingX: 0,
            spacingZ: 0,
            spacingY: 0,
            origin: null
        },
        ctors: {
            init: function () {
                this.origin = new UnityEngine.Vector3();
                this.spacingX = 1.5;
                this.spacingZ = 1.5;
                this.spacingY = 0.8;
                this.origin = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*ZombieAligner.GetGridPosition start.*/
            /**
             * Get position for a zombie based on its column and row index.
             *
             * @instance
             * @protected
             * @this ZombieAligner
             * @memberof ZombieAligner
             * @param   {number}                 columnIndex    
             * @param   {number}                 rowIndex       
             * @param   {number}                 heightIndex
             * @return  {UnityEngine.Vector3}
             */
            GetGridPosition: function (columnIndex, rowIndex, heightIndex) {
                if (heightIndex === void 0) { heightIndex = 0; }
                return this.origin.$clone().add( new pc.Vec3( columnIndex * this.spacingX, heightIndex * this.spacingY, (rowIndex) * this.spacingZ ) );
            },
            /*ZombieAligner.GetGridPosition end.*/

            /*ZombieAligner.GetStackedGridPosition start.*/
            /**
             * Get stacked position for zombie (column -&gt; stack in Y, then new row in Z).
             * Get position in XZ rows and stacked in Y. Only increment Z when max stack height is reached.
             *
             * @instance
             * @protected
             * @this ZombieAligner
             * @memberof ZombieAligner
             * @param   {number}                 x    
             * @param   {number}                 y    
             * @param   {number}                 z
             * @return  {UnityEngine.Vector3}
             */
            GetStackedGridPosition: function (x, y, z) {
                return this.origin.$clone().add( new pc.Vec3( x * this.spacingX, y * this.spacingY, z * this.spacingZ ) );
            },
            /*ZombieAligner.GetStackedGridPosition end.*/

            /*ZombieAligner.GetStackedRowGridPosition start.*/
            /**
             * Get stacked position in Y, and shift in X after maxStackHeight. Z remains unchanged.
             * Returns position stacked in Y, shifted in X per column, and adds Z offset only after row is filled.
             * Returns position in grid stacked in Y, moves to new X column after reaching max stack height,
             and adds Z offset only after a full row of columns is filled.
             *
             * @instance
             * @protected
             * @this ZombieAligner
             * @memberof ZombieAligner
             * @param   {number}                 zombieIndex         
             * @param   {number}                 maxStackHeight      
             * @param   {number}                 maxColumnsPerRow
             * @return  {UnityEngine.Vector3}
             */
            GetStackedRowGridPosition: function (zombieIndex, maxStackHeight, maxColumnsPerRow) {
                if (maxStackHeight <= 0 || maxColumnsPerRow <= 0) {
                    UnityEngine.Debug.LogError$2("maxStackHeight and maxColumnsPerRow must be greater than 0.");
                    return this.origin.$clone();
                }

                var fullStacksCreated = (Bridge.Int.div(zombieIndex, maxStackHeight)) | 0; // Total full vertical stacks done so far
                var stackIndex = zombieIndex % maxStackHeight; // Y axis: vertical stack level
                var columnInRow = fullStacksCreated % maxColumnsPerRow; // X axis: column within the current row
                var rowIndex = (Bridge.Int.div(fullStacksCreated, maxColumnsPerRow)) | 0; // Z axis: row index (only when X fills)

                return this.origin.$clone().add( new pc.Vec3( columnInRow * this.spacingX, stackIndex * this.spacingZ, rowIndex * this.spacingZ ) );
            },
            /*ZombieAligner.GetStackedRowGridPosition end.*/


        }
    });
    /*ZombieAligner end.*/

    /*ZombieBlock start.*/
    Bridge.define("ZombieBlock", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            columnIndex: 0,
            moveDuration: 0,
            spacing: 0,
            direction: null,
            colorType: 0,
            vfx: null,
            hitEffectPrefab: null,
            isMoving: false,
            _cachedCollider: null,
            _cachedDirectionNormalized: null,
            _dead: false,
            lastPosition: null
        },
        props: {
            IsDead: {
                get: function () {
                    return this._dead;
                }
            }
        },
        ctors: {
            init: function () {
                this.direction = new UnityEngine.Vector3();
                this._cachedDirectionNormalized = new UnityEngine.Vector3();
                this.lastPosition = new UnityEngine.Vector3();
                this.moveDuration = 0.2;
                this.spacing = 1.2;
                this.direction = new pc.Vec3( 0, 0, 1 );
                this.isMoving = false;
            }
        },
        methods: {
            /*ZombieBlock.Start start.*/
            Start: function () {
                this.lastPosition = this.transform.position.$clone();
                // 缓存组件，避免重复获取
                this._cachedCollider = this.GetComponent(UnityEngine.Collider);
                this._cachedDirectionNormalized = this.direction.clone().normalize().$clone();
                // Optionally, check at start if it can move forward
                this.TryMoveForwardIfSpaceAvailable();
            },
            /*ZombieBlock.Start end.*/

            /*ZombieBlock.TryMoveForwardIfSpaceAvailable start.*/
            TryMoveForwardIfSpaceAvailable: function () {
                if (this.isMoving) {
                    return;
                }

                var frontZombie = ZombieGridManager.Instance.GetZombieInFrontOf(this, this.columnIndex);

                //if (frontZombie == null)
                //{
                //    // No one ahead � move forward
                //    Vector3 targetPos = transform.position + direction.normalized * spacing;
                //    if (!IsWallAhead(targetPos))
                //    {
                //        StartCoroutine(MoveToPosition(targetPos));
                //    }
                //}
                //else
                //{
                //    float targetZ = frontZombie.transform.position.z - spacing * Mathf.Sign(direction.z);
                //    float currentZ = transform.position.z;

                //    if (Mathf.Abs(currentZ - targetZ) > 0.01f)
                //    {
                //        Vector3 targetPos = new Vector3(transform.position.x, transform.position.y, targetZ);
                //        StartCoroutine(MoveToPosition(targetPos));
                //    }
                //}
            },
            /*ZombieBlock.TryMoveForwardIfSpaceAvailable end.*/

            /*ZombieBlock.IsWallAhead start.*/
            IsWallAhead: function (targetPos) {
                var $t;
                // 性能优化：使用非分配版本的 OverlapSphere（如果 Unity 版本支持）
                // 注意：这里使用标准版本，如果需要可以改为非分配版本
                var hits = UnityEngine.Physics.OverlapSphere(targetPos, 0.1);
                $t = Bridge.getEnumerator(hits);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current;
                        if (hit.CompareTag("wall")) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*ZombieBlock.IsWallAhead end.*/

            /*ZombieBlock.MoveToPosition start.*/
            MoveToPosition: function (targetPosition) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    column,
                    myIndex,
                    nextGO,
                    nextZombie,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isMoving = true;
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, targetPosition.$clone(), this.moveDuration), DG.Tweening.Ease.Linear));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.isMoving = false;

                                        // After move, check if this zombie should trigger next one
                                        // 优化：直接通过索引访问，避免 IndexOf 的 O(n) 查找
                                        column = ZombieGridManager.Instance.zombieColumns.getItem(this.columnIndex);
                                        myIndex = column.indexOf(this.gameObject);

                                        if (myIndex >= 0 && ((myIndex + 1) | 0) < column.Count) {
                                            nextGO = column.getItem(((myIndex + 1) | 0));
                                            // 使用缓存方法获取组件
                                            nextZombie = ZombieGridManager.Instance.GetCachedZombieBlock(nextGO);
                                            if (UnityEngine.MonoBehaviour.op_Inequality(nextZombie, null)) {
                                                nextZombie.TryMoveForwardIfSpaceAvailable();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ZombieBlock.MoveToPosition end.*/

            /*ZombieBlock.TakeDamage start.*/
            TakeDamage: function (amount) {
                var $t;
                if (this._dead) {
                    return;
                }
                this._dead = true;

                // 使用缓存的 Collider，避免重复 GetComponent
                if (UnityEngine.Component.op_Inequality(this._cachedCollider, null)) {
                    this._cachedCollider.enabled = false;
                }
                if (UnityEngine.GameObject.op_Equality(this.vfx, null) && UnityEngine.GameObject.op_Inequality(this.hitEffectPrefab, null)) {
                    this.vfx = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.hitEffectPrefab, this.transform.position, pc.Quat.IDENTITY.clone());
                    this.vfx.transform.localScale = this.transform.lossyScale.$clone();
                }
                if (UnityEngine.GameObject.op_Inequality(this.vfx, null)) {
                    // Tint the debris to this zombie's colour so the burst reads like the reference.
                    var tint = ColorHelper.GetColor(this.colorType);
                    if (UnityEngine.GameObject.op_Inequality(this.hitEffectPrefab, null)) {
                        var renderer = this.GetComponent(UnityEngine.MeshRenderer);
                        if (UnityEngine.Component.op_Inequality(renderer, null) && renderer.sharedMaterial != null) {
                            tint = renderer.sharedMaterial.color.$clone();
                        }
                    }
                    $t = Bridge.getEnumerator(this.vfx.GetComponentsInChildren(UnityEngine.ParticleSystem, true));
                    try {
                        while ($t.moveNext()) {
                            var ps = $t.Current;
                            var main = ps.main;
                            var isGlow = System.String.contains(ps.name.toLowerCase(),"glow");
                            main.startColor = new pc.MinMaxGradient( isGlow ? new pc.Color( 1.0, 1.0, 1.0, 0.6 ) : tint.$clone() );
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.vfx.SetActive(true);
                    this.vfx.transform.SetParent(null);
                    if (UnityEngine.GameObject.op_Inequality(this.hitEffectPrefab, null)) {
                        this.Destroy(this.vfx, 3.0);
                    }
                }
                DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), 0.2);

                this.Invoke("DelayedDestroy", 0.1);
            },
            /*ZombieBlock.TakeDamage end.*/

            /*ZombieBlock.DelayedDestroy start.*/
            DelayedDestroy: function () {
                // 注意：RemoveZombie 会从列表中移除，所以需要先获取下一个僵尸的引用
                var column = ZombieGridManager.Instance.zombieColumns.getItem(this.columnIndex);
                var myIndex = column.indexOf(this.gameObject);
                var nextZombieGO = null;

                // 在移除前获取下一个僵尸的引用
                if (myIndex >= 0 && ((myIndex + 1) | 0) < column.Count) {
                    nextZombieGO = column.getItem(((myIndex + 1) | 0));
                }

                ZombieGridManager.Instance.RemoveZombie(this.gameObject, this.columnIndex);

                // 触发下一个僵尸移动
                if (UnityEngine.GameObject.op_Inequality(nextZombieGO, null)) {
                    var nextZombie = ZombieGridManager.Instance.GetCachedZombieBlock(nextZombieGO);
                    if (UnityEngine.MonoBehaviour.op_Inequality(nextZombie, null)) {
                        nextZombie.TryMoveForwardIfSpaceAvailable();
                    }
                }

                ZombieGridManager.Instance.updateFrontZombiesDelay();

                // TakeDamage() started a 0.2s DOScale tween on this transform, and this
                // method fires 0.1s after that with another 0.1s destroy delay - a
                // ~0.2s vs ~0.2s race. Under real frame-time variance (worse now with
                // this many zombies fighting for DOTween's tween pool - see the "Max
                // Tweens reached" warning) DOTween can still be mid-update on this
                // Transform the instant Destroy() tears it down, logging a "Transform
                // has been destroyed but you are still trying to access it" warning.
                // Kill the tween explicitly so DOTween never touches it after this.
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                this.Destroy(this.gameObject, 0.1);
            },
            /*ZombieBlock.DelayedDestroy end.*/


        }
    });
    /*ZombieBlock end.*/

    /*ZombieData start.*/
    Bridge.define("ZombieData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            zombieName: null,
            zombieColor: 0,
            health: 0
        }
    });
    /*ZombieData end.*/

    /*MainMenuItemTable start.*/
    Bridge.define("MainMenuItemTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            menuId: null,
            name: null,
            des: null,
            loadType: null,
            yuque: null,
            param: null,
            website: null
        }
    });
    /*MainMenuItemTable end.*/

    /*MainMenuTable start.*/
    Bridge.define("MainMenuTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            name: null,
            bgColor: null
        }
    });
    /*MainMenuTable end.*/

    /*PaymentTestTable start.*/
    Bridge.define("PaymentTestTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            ID: 0,
            ViewOrder: 0,
            Name: null,
            PayType: null,
            IsNotConsumables: 0,
            Money: 0,
            MoneyText: null,
            Gold: 0,
            Ratio: 0,
            Text: null,
            Image: null,
            GameType: null,
            DscControlName: null,
            BuyType: null,
            Group: 0
        }
    });
    /*PaymentTestTable end.*/

    /*SC._0x07092f78 start.*/
    Bridge.define("SC._0x07092f78", {
        inherits: [SC.SCEventArgs],
        fields: {
            Form: null,
            Duration: 0,
            UserData: null
        },
        ctors: {
            ctor: function (_0xfc0f1af1, _0x8672df55, _0x9849b067) {
                this.$initialize();
                SC.SCEventArgs.ctor.call(this);
                this.Form = _0xfc0f1af1;
                this.Duration = _0x8672df55;
                this.UserData = _0x9849b067;
            }
        }
    });
    /*SC._0x07092f78 end.*/

    /*SC._0x40d08fac start.*/
    Bridge.define("SC._0x40d08fac", {
        inherits: [SC.SCEventArgs],
        fields: {
            SceneAssetName: null,
            Duration: 0,
            UserData: null
        }
    });
    /*SC._0x40d08fac end.*/

    /*SC._0x6948b53b start.*/
    Bridge.define("SC._0x6948b53b", {
        inherits: [SC.SCEventArgs],
        fields: {
            SerialId: 0,
            Path: null,
            Progress: 0,
            UserData: null
        }
    });
    /*SC._0x6948b53b end.*/

    /*SC._0x71b148ae start.*/
    Bridge.define("SC._0x71b148ae", {
        inherits: [SC.SCEventArgs],
        fields: {
            EntityId: 0,
            PrefabPath: null,
            ErrorMessage: null,
            UserData: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                SC.SCEventArgs.ctor.call(this);
                this.EntityId = 0;
                this.PrefabPath = null;
                this.ErrorMessage = null;
                this.UserData = null;
            }
        }
    });
    /*SC._0x71b148ae end.*/

    /*SC._0x7308c9b6 start.*/
    Bridge.define("SC._0x7308c9b6", {
        inherits: [SC.SCEventArgs],
        fields: {
            Entity: null,
            Duration: 0,
            UserData: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                SC.SCEventArgs.ctor.call(this);
                this.Entity = null;
                this.Duration = 0.0;
                this.UserData = null;
            }
        }
    });
    /*SC._0x7308c9b6 end.*/

    /*SC._0xb7a78122 start.*/
    Bridge.define("SC._0xb7a78122", {
        inherits: [SC._0xafe018ef],
        methods: {
            /*SC._0xb7a78122.scGetWebPlatform start.*/
            scGetWebPlatform: function () {
                var _0x9126b450 = SC._0x034ef5c9.scGetWebPlatformIdx();
                var _0xf8c75a69 = System.Array.init(["mintegral", "applovin", "NewsBreak", "google"], System.String);
                var _0xee6279e8 = _0x9126b450 === -1 ? "" : _0xf8c75a69[_0x9126b450];
                return _0xee6279e8;
            },
            /*SC._0xb7a78122.scGetWebPlatform end.*/

            /*SC._0xb7a78122.scGameEnd start.*/
            scGameEnd: function () {
                SC._0x034ef5c9.scGameEnd();
            },
            /*SC._0xb7a78122.scGameEnd end.*/

            /*SC._0xb7a78122.scGameReady start.*/
            scGameReady: function () {
                SC._0x034ef5c9.scGameReady();
            },
            /*SC._0xb7a78122.scGameReady end.*/

            /*SC._0xb7a78122.scGameStart start.*/
            scGameStart: function () {
                SC._0x034ef5c9.scGameStart();
            },
            /*SC._0xb7a78122.scGameStart end.*/

            /*SC._0xb7a78122.scDownloadCallBack start.*/
            scDownloadCallBack: function () {
                SC._0x034ef5c9.scDownloadCallBack();
            },
            /*SC._0xb7a78122.scDownloadCallBack end.*/

            /*SC._0xb7a78122.GetCustomLanguageIdx start.*/
            GetCustomLanguageIdx: function () {
                return SC.LanguageCommon.GetCurLanguageIdx();
            },
            /*SC._0xb7a78122.GetCustomLanguageIdx end.*/

            /*SC._0xb7a78122.scDoJSFun start.*/
            scDoJSFun: function (_0xe7543182) {
                return SC._0x034ef5c9.scDoJSFun(_0xe7543182);
            },
            /*SC._0xb7a78122.scDoJSFun end.*/


        }
    });
    /*SC._0xb7a78122 end.*/

    /*SC._0xd623588b start.*/
    Bridge.define("SC._0xd623588b", {
        inherits: [SC._0xafe018ef],
        fields: {
            _0x618d93de: null
        },
        ctors: {
            init: function () {
                this._0x618d93de = new pc.WebGLLib();
            }
        },
        methods: {
            /*SC._0xd623588b.scGetWebPlatform start.*/
            scGetWebPlatform: function () {
                return this._0x618d93de.scGetWebPlatform();
            },
            /*SC._0xd623588b.scGetWebPlatform end.*/

            /*SC._0xd623588b.scGameEnd start.*/
            scGameEnd: function () {
                this._0x618d93de.scGameEnd();
            },
            /*SC._0xd623588b.scGameEnd end.*/

            /*SC._0xd623588b.scGameReady start.*/
            scGameReady: function () {
                this._0x618d93de.scGameReady();
            },
            /*SC._0xd623588b.scGameReady end.*/

            /*SC._0xd623588b.scGameStart start.*/
            scGameStart: function () {
                this._0x618d93de.scGameStart();
            },
            /*SC._0xd623588b.scGameStart end.*/

            /*SC._0xd623588b.scDownloadCallBack start.*/
            scDownloadCallBack: function () {
                this._0x618d93de.scDownloadCallBack();
            },
            /*SC._0xd623588b.scDownloadCallBack end.*/

            /*SC._0xd623588b.GetCustomLanguageIdx start.*/
            GetCustomLanguageIdx: function () {
                return SC.LanguageCommon.GetCurLanguageIdx();
            },
            /*SC._0xd623588b.GetCustomLanguageIdx end.*/

            /*SC._0xd623588b.scDoJSFun start.*/
            scDoJSFun: function (_0x35a7fda7) {
                return this._0x618d93de.scDoJSFun(_0x35a7fda7);
            },
            /*SC._0xd623588b.scDoJSFun end.*/

            /*SC._0xd623588b.scRegisterEvent start.*/
            scRegisterEvent: function (_0x89c7c80d) {
                this._0x618d93de.scRegisterEvent(_0x89c7c80d);
            },
            /*SC._0xd623588b.scRegisterEvent end.*/


        }
    });
    /*SC._0xd623588b end.*/

    /*SC._0xda3ecde7 start.*/
    Bridge.define("SC._0xda3ecde7", {
        inherits: [SC._0xafe018ef],
        methods: {
            /*SC._0xda3ecde7.scGetWebPlatform start.*/
            scGetWebPlatform: function () {
                return System.Enum.toString(SC.EWebPlatform, SC.sc.WebAdConfig.eDebugWebPlatform);
            },
            /*SC._0xda3ecde7.scGetWebPlatform end.*/

            /*SC._0xda3ecde7.scGameEnd start.*/
            scGameEnd: function () {
                SC.sc.log.Debug("Simulation scGameEnd");
            },
            /*SC._0xda3ecde7.scGameEnd end.*/

            /*SC._0xda3ecde7.scGameReady start.*/
            scGameReady: function () {
                SC.sc.log.Debug("Simulation scGameReady");
                if (UnityEngine.Application.isEditor && SC.sc.WebAdConfig.fDebugAdDuration >= 0) {
                    return;
                }
                if (SC.sc.web._0x3104f99b()) {
                    SC.sc.loom.DelayTimeBackCall(function () {
                        SC.sc.log.Debug("Simulation gameStart");
                        SC.sc.web.OnJSCallback("gameStart");
                    }, 1);
                }
            },
            /*SC._0xda3ecde7.scGameReady end.*/

            /*SC._0xda3ecde7.scGameStart start.*/
            scGameStart: function () {
                SC.sc.log.Debug("Simulation scGameStart");
                SC.sc.web.OnJSCallback("gameStart");
            },
            /*SC._0xda3ecde7.scGameStart end.*/

            /*SC._0xda3ecde7.scDownloadCallBack start.*/
            scDownloadCallBack: function () {
                SC.sc.log.Debug("Simulation download");
            },
            /*SC._0xda3ecde7.scDownloadCallBack end.*/

            /*SC._0xda3ecde7.GetCustomLanguageIdx start.*/
            GetCustomLanguageIdx: function () {
                return SC.LanguageCommon.GetCurLanguageIdx();
            },
            /*SC._0xda3ecde7.GetCustomLanguageIdx end.*/

            /*SC._0xda3ecde7.scDoJSFun start.*/
            scDoJSFun: function (_0x54d659bc) {
                SC.sc.log.Debug("Simulation scDoJSFun:" + (_0x54d659bc || ""));
                return "";
            },
            /*SC._0xda3ecde7.scDoJSFun end.*/


        }
    });
    /*SC._0xda3ecde7 end.*/

    /*SC._0xf0a09606 start.*/
    Bridge.define("SC._0xf0a09606", {
        inherits: [SC.SCEventArgs],
        fields: {
            SerialId: 0,
            Path: null,
            ErrorMessage: null,
            UserData: null
        },
        ctors: {
            ctor: function (_0xfc991859, _0xdb1ac10b, _0xe9445143, _0x449f055e) {
                this.$initialize();
                SC.SCEventArgs.ctor.call(this);
                this.SerialId = _0xfc991859;
                this.Path = _0xdb1ac10b;
                this.ErrorMessage = _0xe9445143;
                this.UserData = _0x449f055e;
            }
        }
    });
    /*SC._0xf0a09606 end.*/

    /*SC.HideWindowCompleteEventArgs start.*/
    Bridge.define("SC.HideWindowCompleteEventArgs", {
        inherits: [SC.SCEventArgs],
        fields: {
            SerialId: 0,
            Path: null,
            UserData: null
        }
    });
    /*SC.HideWindowCompleteEventArgs end.*/

    /*SC.SCLayerAD start.*/
    Bridge.define("SC.SCLayerAD", {
        inherits: [SC.BaseNode]
    });
    /*SC.SCLayerAD end.*/

    /*SC.Singleton$1 start.*/
    Bridge.define("SC.Singleton$1", function (T) { return {
        inherits: [SC.IReference],
        statics: {
            fields: {
                _0x5ab83225: Bridge.getDefaultValue(T),
                _0x83bbe84b: null
            },
            props: {
                instance: {
                    get: function () {
                        SC.Singleton$1(T)._0x83bbe84b;
                        {
                            if (Bridge.rValue(SC.Singleton$1(T)._0x5ab83225) == null) {
                                SC.Singleton$1(T)._0x5ab83225 = Bridge.createInstance(T);
                            }

                            return Bridge.rValue(SC.Singleton$1(T)._0x5ab83225);
                        }
                    }
                }
            },
            ctors: {
                init: function () {
                    this._0x5ab83225 = Bridge.getDefaultValue(T);
                    this._0x83bbe84b = { };
                }
            },
            methods: {
                /*SC.Singleton$1.Instance:static start.*/
                Instance: function () {
                    return Bridge.rValue(SC.Singleton$1(T).instance);
                },
                /*SC.Singleton$1.Instance:static end.*/


            }
        },
        props: {
            _0xb16ed87b: {
                get: function () {
                    return true;
                }
            }
        },
        alias: ["Clear", "SC$IReference$Clear"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._0x6e4aea2b();
            }
        },
        methods: {
            /*SC.Singleton$1._0x6e4aea2b start.*/
            _0x6e4aea2b: function () { },
            /*SC.Singleton$1._0x6e4aea2b end.*/

            /*SC.Singleton$1.Clear start.*/
            Clear: function () {
                SC.Singleton$1(T)._0x5ab83225 = null;
            },
            /*SC.Singleton$1.Clear end.*/


        }
    }; });
    /*SC.Singleton$1 end.*/

    /*SC.WindowLogic start.*/
    Bridge.define("SC.WindowLogic", {
        inherits: [SC.BaseNode],
        methods: {
            /*SC.WindowLogic.SCAwake start.*/
            SCAwake: function () {
                this.OnInit(null);
            },
            /*SC.WindowLogic.SCAwake end.*/

            /*SC.WindowLogic.SCOnEnable start.*/
            SCOnEnable: function () {
                this.OnShow(null);
            },
            /*SC.WindowLogic.SCOnEnable end.*/

            /*SC.WindowLogic.SCOnDestroy start.*/
            SCOnDestroy: function () {
                SC.BaseNode.prototype.SCOnDestroy.call(this);
            },
            /*SC.WindowLogic.SCOnDestroy end.*/

            /*SC.WindowLogic.OnUpdate start.*/
            OnUpdate: function (_0x1f65cefc, _0xf3b5a33f) { },
            /*SC.WindowLogic.OnUpdate end.*/

            /*SC.WindowLogic.OnInit start.*/
            OnInit: function (_0x9cfd58b6) { },
            /*SC.WindowLogic.OnInit end.*/

            /*SC.WindowLogic.OnShow start.*/
            OnShow: function (_0x2dba71d1) { },
            /*SC.WindowLogic.OnShow end.*/

            /*SC.WindowLogic.OnHide start.*/
            OnHide: function () { },
            /*SC.WindowLogic.OnHide end.*/

            /*SC.WindowLogic.OnHide$1 start.*/
            OnHide$1: function (_0x7f117f7c) {
                if (_0x7f117f7c === void 0) { _0x7f117f7c = null; }
            },
            /*SC.WindowLogic.OnHide$1 end.*/

            /*SC.WindowLogic.OnRecycle start.*/
            OnRecycle: function () { },
            /*SC.WindowLogic.OnRecycle end.*/

            /*SC.WindowLogic.Hide$1 start.*/
            Hide$1: function (_0xae420eaf, _0x0aaef2bc) {
                this.StopAllCoroutines();
                SC.sc.window.HideWindow(this.gameObject.name);
            },
            /*SC.WindowLogic.Hide$1 end.*/

            /*SC.WindowLogic.Hide start.*/
            Hide: function (_0x43f0c5d8) {
                if (_0x43f0c5d8 === void 0) { _0x43f0c5d8 = null; }
                this.Hide$1(_0x43f0c5d8, false);
            },
            /*SC.WindowLogic.Hide end.*/


        },
        overloads: {
            "OnHide(object)": "OnHide$1",
            "Hide(object, bool)": "Hide$1"
        }
    });
    /*SC.WindowLogic end.*/

    /*SCParam._0x0bc1ed17 start.*/
    Bridge.define("SCParam._0x0bc1ed17", {
        inherits: [SCParam.SCDataBase],
        fields: {
            sectionID: 0,
            lAwardReceivedRecord: null
        },
        ctors: {
            init: function () {
                this.lAwardReceivedRecord = new (System.Collections.Generic.List$1(System.String)).ctor();
            }
        }
    });
    /*SCParam._0x0bc1ed17 end.*/

    /*SCParam._0x644cdd14 start.*/
    Bridge.define("SCParam._0x644cdd14", {
        inherits: [SCParam.SCDataBase],
        fields: {
            stageID: null,
            starNum: 0,
            _0xc5edfdd7: false,
            bPass: false
        },
        props: {
            bUnlocked: {
                get: function () {
                    return this._0xc5edfdd7 || this.bPass || this.starNum !== 0;
                },
                set: function (value) {
                    this._0xc5edfdd7 = value;
                }
            }
        }
    });
    /*SCParam._0x644cdd14 end.*/

    /*SCParam._0xa241aa20 start.*/
    Bridge.define("SCParam._0xa241aa20", {
        inherits: [SCParam.SCDataBase],
        fields: {
            itemId: null,
            count: System.Int64(0)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                SCParam.SCDataBase.ctor.call(this);
            },
            $ctor1: function (_0x11e432aa, _0xe96d2ec8) {
                if (_0xe96d2ec8 === void 0) { _0xe96d2ec8 = System.Int64(0); }

                this.$initialize();
                SCParam.SCDataBase.ctor.call(this);
                this.itemId = _0x11e432aa;
                this.count = _0xe96d2ec8;
            }
        }
    });
    /*SCParam._0xa241aa20 end.*/

    /*SCParam.AudioTable start.*/
    Bridge.define("SCParam.AudioTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            des: null,
            type: 0,
            path: null,
            volume: 0,
            interval: null
        }
    });
    /*SCParam.AudioTable end.*/

    /*SCParam.BtnSkinTable start.*/
    Bridge.define("SCParam.BtnSkinTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            normalImgId: null,
            clickImgId: null,
            disableImgId: null,
            smallImgId: null
        }
    });
    /*SCParam.BtnSkinTable end.*/

    /*SCParam.ChannelBranchFunctionTable start.*/
    Bridge.define("SCParam.ChannelBranchFunctionTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            Param: null,
            OneKeyOpenDebugAd: null,
            IsDebugShow: 0,
            DebugOrderIndex: 0,
            ModulePath: null,
            Des: null,
            OnlineParam: null,
            DefaultValue: null,
            oppo: null,
            oppo_iaa: null,
            huawei: null,
            huawei_iaa: null,
            huawei_outside: null,
            xiaomi_iaa: null,
            vivo_iaa: null,
            xingtu: null,
            appstore_cn: null,
            appstore_outside: null,
            appstore: null,
            google: null,
            slideme: null,
            mintegral: null,
            game233: null,
            game4399: null,
            edition: null
        }
    });
    /*SCParam.ChannelBranchFunctionTable end.*/

    /*SCParam.GiftTable start.*/
    Bridge.define("SCParam.GiftTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            type: null,
            extraItemId: null,
            extraItemCount: 0,
            itemIdList: null,
            itemCountList: null,
            rateList: null
        }
    });
    /*SCParam.GiftTable end.*/

    /*SCParam.GoldLevelTable start.*/
    Bridge.define("SCParam.GoldLevelTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            lv: 0,
            rate: 0
        }
    });
    /*SCParam.GoldLevelTable end.*/

    /*SCParam.ImgTable start.*/
    Bridge.define("SCParam.ImgTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            path: null,
            imagePlist: null,
            des: null
        }
    });
    /*SCParam.ImgTable end.*/

    /*SCParam.ItemTable start.*/
    Bridge.define("SCParam.ItemTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            type: null,
            nameLangId: null,
            desLangId: null,
            insLimit: 0,
            stackLimit: 0,
            imgId: null,
            prefabId: null,
            tableName: null,
            tableId: null,
            quality: 0
        }
    });
    /*SCParam.ItemTable end.*/

    /*SCParam.MergeItemTable start.*/
    Bridge.define("SCParam.MergeItemTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            itemId: null,
            mergeItemId: null,
            skinId: null,
            level: 0
        }
    });
    /*SCParam.MergeItemTable end.*/

    /*SCParam.MergeSpaceTable start.*/
    Bridge.define("SCParam.MergeSpaceTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            initLocked: 0,
            unlockType: null,
            unlockAmount: 0,
            unlockOrder: 0
        }
    });
    /*SCParam.MergeSpaceTable end.*/

    /*SCParam.PaymentTable start.*/
    Bridge.define("SCParam.PaymentTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            ID: 0,
            PayType: null,
            Name: null,
            Money: null,
            MoneyText: null,
            Gold: 0,
            Text: null,
            Group: 0,
            BuyType: null,
            DscControlName: null,
            GameType: null,
            OrgMoney: 0,
            Image: null,
            ViewOrder: 0,
            Ratio: 0,
            IsNotConsumables: 0,
            _buyCount: 0
        },
        props: {
            BuyCount: {
                get: function () {
                    if (this._buyCount === 0) {
                        System.Int32.tryParse(this.Money, Bridge.ref(this, "_buyCount"));
                    }

                    return this._buyCount;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                SCParam.SCDataBase.ctor.call(this);
            },
            $ctor1: function (ID, Image, Money, _0x64e8655a) {
                this.$initialize();
                SCParam.SCDataBase.ctor.call(this);
                this.PayType = "" + ID;
                this.ID = ID;
                this.Image = "CommonShopCoinsImg" + (Image || "");
                this.Money = Money;
                this.Gold = _0x64e8655a;
                this.BuyType = "BuyGold";
            }
        }
    });
    /*SCParam.PaymentTable end.*/

    /*SCParam.PrefabTable start.*/
    Bridge.define("SCParam.PrefabTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            path: null,
            customClassName: null,
            des: null
        }
    });
    /*SCParam.PrefabTable end.*/

    /*SCParam.ShopTable start.*/
    Bridge.define("SCParam.ShopTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            type: null,
            itemId: null,
            btnSkinId: null,
            buyType: null,
            buyItemId: null,
            buyPrice: 0,
            stock: 0,
            buyWinId: null,
            des: null
        }
    });
    /*SCParam.ShopTable end.*/

    /*SCParam.SignTable start.*/
    Bridge.define("SCParam.SignTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            days: 0,
            prizeItemId: null,
            prizeItemCount: 0,
            resignType: null,
            resignItemId: null,
            resignCost: 0
        }
    });
    /*SCParam.SignTable end.*/

    /*SCParam.SlotTable start.*/
    Bridge.define("SCParam.SlotTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            type: null,
            insId: null,
            des: null
        }
    });
    /*SCParam.SlotTable end.*/

    /*SCParam.StageLevelTable start.*/
    Bridge.define("SCParam.StageLevelTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            stageID: null,
            nameLangId: null,
            nextID: null,
            sectionID: 0,
            awardsWin: null,
            awardsWinCount: null,
            awardsLose: null,
            awardsLoseCount: null
        }
    });
    /*SCParam.StageLevelTable end.*/

    /*SCParam.StageRewardTable start.*/
    Bridge.define("SCParam.StageRewardTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            sectionID: 0,
            starNum: 0,
            awardsList: null,
            awardsCountList: null
        }
    });
    /*SCParam.StageRewardTable end.*/

    /*SCParam.WindowTable start.*/
    Bridge.define("SCParam.WindowTable", {
        inherits: [SCParam.SCDataBase],
        fields: {
            id: null,
            type: 0,
            more: 0,
            des: null,
            customClassName: null,
            order: 0,
            path: null,
            bannerType: null,
            bannerAdStyle: null,
            RefuseFullPicture: 0
        }
    });
    /*SCParam.WindowTable end.*/

    /*ZombieGridManager start.*/
    Bridge.define("ZombieGridManager", {
        inherits: [ZombieAligner],
        statics: {
            fields: {
                Instance: null,
                _colorTypes: null
            },
            ctors: {
                init: function () {
                    this._colorTypes = Bridge.cast(System.Enum.getValues(ColorType), System.Array.type(ColorType));
                }
            }
        },
        fields: {
            testMode: false,
            rowHeightGap: 0,
            spawnColumns: null,
            zombieColumns: null,
            frontZombies: null,
            _zombieBlockCache: null,
            _frontZombiesByColor: null,
            _columnsPerColor: null,
            _remainingByColor: null,
            lastColumnTargetDepth: 0,
            levelEnd: false,
            levelManager: null,
            ZombieParent: null,
            verticalSpacing: 0,
            columnSlideDuration: 0,
            columnSlideEase: 0,
            savedPositions: null,
            isZombieShifting: false,
            SlotParentTransform: null,
            MainCamera: null,
            countOfZombies: 0,
            blueCount: 0,
            redCount: 0,
            YellowCount: 0,
            GreenCount: 0
        },
        ctors: {
            init: function () {
                this.testMode = false;
                this.rowHeightGap = 0.8;
                this.zombieColumns = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(UnityEngine.GameObject))).ctor();
                this.frontZombies = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this._zombieBlockCache = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,ZombieBlock)).ctor();
                this._frontZombiesByColor = new (System.Collections.Generic.Dictionary$2(ColorType,System.Collections.Generic.List$1(ZombieBlock))).ctor();
                this._columnsPerColor = new (System.Collections.Generic.Dictionary$2(ColorType,System.Int32)).ctor();
                this._remainingByColor = new (System.Collections.Generic.Dictionary$2(ColorType,System.Int32)).ctor();
                this.lastColumnTargetDepth = 3;
                this.levelEnd = false;
                this.verticalSpacing = 1.5;
                this.columnSlideDuration = 0.16;
                this.columnSlideEase = DG.Tweening.Ease.OutQuad;
                this.savedPositions = new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(UnityEngine.Vector3))).ctor();
                this.isZombieShifting = false;
            }
        },
        methods: {
            /*ZombieGridManager.Awake start.*/
            Awake: function () {
                ZombieGridManager.Instance = this;

                this.zombieColumns.clear();
                this.savedPositions.clear();

                for (var i = 0; i < this.spawnColumns.length; i = (i + 1) | 0) {
                    this.zombieColumns.add(new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                    this.savedPositions.add(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());
                }
            },
            /*ZombieGridManager.Awake end.*/

            /*ZombieGridManager.SpawnZombieWithCoords start.*/
            SpawnZombieWithCoords: function (x, y, z) {
                var prefab = this.levelManager.GetNextZombiePrefab();
                if (!UnityEngine.Object.op_Implicit(prefab)) {
                    return;
                }

                var zombieGO = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, this.ZombieParent);
                var zombie = zombieGO.GetComponent(ZombieBlock);
                zombie.columnIndex = x;
                this.countOfZombies = (this.countOfZombies + 1) | 0;
                this._zombieBlockCache.setItem(zombieGO, zombie);

                while (this.zombieColumns.Count <= x) {
                    this.zombieColumns.add(new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                    this.savedPositions.add(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());
                }

                this.zombieColumns.getItem(x).add(zombieGO);

                this.IncrementColorCount(zombie.colorType);

                var pos = this.GetStackedGridPosition(x, y, z);
                zombieGO.transform.position = pos.$clone();

                var index = (this.zombieColumns.getItem(x).Count - 1) | 0;
                if (this.savedPositions.getItem(x).Count <= index) {
                    this.savedPositions.getItem(x).add(pos.$clone());
                } else {
                    this.savedPositions.getItem(x).setItem(index, pos.$clone());
                }

                this.UpdateFrontZombies();
            },
            /*ZombieGridManager.SpawnZombieWithCoords end.*/

            /*ZombieGridManager.SpawnPrefabMap start.*/
            SpawnPrefabMap: function () {
                var $t, $t1, $t2;
                var level = this.levelManager.currentLevelData;
                if (UnityEngine.GameObject.op_Equality(level.mapPrefab, null) || level.mapPrefabCellPitch <= 0.0) {
                    return;
                }
                // Validate before instantiating so an unassigned material cannot silently lose blocks.
                $t = Bridge.getEnumerator(level.mapPrefab.GetComponentsInChildren(UnityEngine.MeshRenderer));
                try {
                    while ($t.moveNext()) {
                        var renderer = $t.Current;
                        var color = { v : new ColorType() };
                        if (!level.TryGetMapColor(renderer.sharedMaterial, color)) {
                            UnityEngine.Debug.LogError$2(System.String.concat("Client map has an unmapped material: ", renderer.sharedMaterial), this);
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var map = UnityEngine.Object.Instantiate(UnityEngine.GameObject, level.mapPrefab, this.ZombieParent);
                map.name = "ClientMap";
                map.transform.localRotation = pc.Quat.IDENTITY.clone();
                map.transform.localScale = new pc.Vec3( this.spacingX, this.spacingX, this.spacingZ ).scale( 1.0 / ( level.mapPrefabCellPitch ) );
                map.transform.position = this.origin.$clone();
                var renderers = map.GetComponentsInChildren(UnityEngine.MeshRenderer);
                if (renderers.length === 0) {
                    return;
                }
                var minX = 3.40282347E+38, minZ = 3.40282347E+38;
                $t1 = Bridge.getEnumerator(renderers);
                try {
                    while ($t1.moveNext()) {
                        var renderer1 = $t1.Current;
                        minX = UnityEngine.Mathf.Min(minX, renderer1.transform.position.x);
                        minZ = UnityEngine.Mathf.Min(minZ, renderer1.transform.position.z);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                map.transform.position = map.transform.position.$clone().add( new pc.Vec3( this.origin.x - minX, 0.0, this.origin.z - minZ ) );
                System.Array.sort(renderers, function (a, b) {
                        return Bridge.compare(a.transform.position.z, b.transform.position.z);
                    });
                $t2 = Bridge.getEnumerator(renderers);
                try {
                    while ($t2.moveNext()) {
                        var renderer2 = $t2.Current;
                        var go = renderer2.gameObject;
                        var block = go.AddComponent(ZombieBlock);
                        level.TryGetMapColor(renderer2.sharedMaterial, Bridge.ref(block, "colorType"));
                        block.hitEffectPrefab = level.mapHitEffectPrefab;
                        block.columnIndex = Math.round((go.transform.position.x - this.origin.x) / this.spacingX);
                        go.tag = "zombie";
                        go.GetComponent(UnityEngine.BoxCollider).isTrigger = true;
                        var column = block.columnIndex;
                        while (this.zombieColumns.Count <= column) {
                            this.zombieColumns.add(new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                            this.savedPositions.add(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());
                        }
                        this.zombieColumns.getItem(column).add(go);
                        this.savedPositions.getItem(column).add(go.transform.position.$clone());
                        this._zombieBlockCache.setItem(go, block);
                        this.IncrementColorCount(block.colorType);
                        this.countOfZombies = (this.countOfZombies + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
                this.UpdateFrontZombies();
            },
            /*ZombieGridManager.SpawnPrefabMap end.*/

            /*ZombieGridManager.Update start.*/
            Update: function () {
                if (this.testMode) {
                    for (var col = 0; col < this.zombieColumns.Count; col = (col + 1) | 0) {
                        var column = this.zombieColumns.getItem(col);
                        for (var row = 0; row < column.Count; row = (row + 1) | 0) {
                            var zombieGO = column.getItem(row);
                            var newPos = this.GetGridPosition(col, row);
                            zombieGO.transform.position = newPos.$clone();
                        }
                    }
                }
            },
            /*ZombieGridManager.Update end.*/

            /*ZombieGridManager.GetRemainingCount start.*/
            GetRemainingCount: function (color) {
                var count = { };
                return this._remainingByColor.tryGetValue(color, count) ? count.v : 0;
            },
            /*ZombieGridManager.GetRemainingCount end.*/

            /*ZombieGridManager.IncrementColorCount start.*/
            IncrementColorCount: function (colorType) {
                this._remainingByColor.setItem(colorType, (this.GetRemainingCount(colorType) + 1) | 0);
                switch (colorType) {
                    case ColorType.Yellow: 
                        this.YellowCount = (this.YellowCount + 1) | 0;
                        break;
                    case ColorType.Red: 
                        this.redCount = (this.redCount + 1) | 0;
                        break;
                    case ColorType.Blue: 
                        this.blueCount = (this.blueCount + 1) | 0;
                        break;
                    case ColorType.Green: 
                        this.GreenCount = (this.GreenCount + 1) | 0;
                        break;
                }
            },
            /*ZombieGridManager.IncrementColorCount end.*/

            /*ZombieGridManager.DecrementColorCount start.*/
            DecrementColorCount: function (colorType) {
                this._remainingByColor.setItem(colorType, UnityEngine.Mathf.Max(0, ((this.GetRemainingCount(colorType) - 1) | 0)));
                switch (colorType) {
                    case ColorType.Yellow: 
                        this.YellowCount = (this.YellowCount - 1) | 0;
                        break;
                    case ColorType.Red: 
                        this.redCount = (this.redCount - 1) | 0;
                        break;
                    case ColorType.Blue: 
                        this.blueCount = (this.blueCount - 1) | 0;
                        break;
                    case ColorType.Green: 
                        this.GreenCount = (this.GreenCount - 1) | 0;
                        break;
                }
            },
            /*ZombieGridManager.DecrementColorCount end.*/

            /*ZombieGridManager.SpawnZombie start.*/
            SpawnZombie: function (columnIndex, verticalOffset) {
                if (verticalOffset === void 0) { verticalOffset = 0.0; }
                var prefab = this.levelManager.GetNextZombiePrefab();
                if (!UnityEngine.Object.op_Implicit(prefab)) {
                    return;
                }

                var zombieGO = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, this.ZombieParent);
                var zombie = zombieGO.GetComponent(ZombieBlock);
                zombie.columnIndex = columnIndex;
                this.countOfZombies = (this.countOfZombies + 1) | 0;
                this.zombieColumns.getItem(columnIndex).add(zombieGO);
                this._zombieBlockCache.setItem(zombieGO, zombie);
                this.IncrementColorCount(zombie.colorType);

                this.RepositionColumn(columnIndex);
                var index = this.zombieColumns.getItem(columnIndex).Count;
                if (this.savedPositions.getItem(columnIndex).Count < index) {
                    this.savedPositions.getItem(columnIndex).add(zombieGO.transform.position.$clone());
                } else {
                    this.savedPositions.getItem(columnIndex).setItem(index, zombieGO.transform.position.$clone());
                }

                this.UpdateFrontZombies();
            },
            /*ZombieGridManager.SpawnZombie end.*/

            /*ZombieGridManager.RemoveZombie start.*/
            RemoveZombie: function (zombieGO, columnIndex) {
                var zb = this.GetCachedZombieBlock(zombieGO);
                if (UnityEngine.MonoBehaviour.op_Inequality(zb, null)) {
                    this.DecrementColorCount(zb.colorType);
                }

                this.zombieColumns.getItem(columnIndex).remove(zombieGO);
                this.CleanupZombieCache(zombieGO);
                this.RepositionColumn$1(columnIndex, true);
                this.countOfZombies = (this.countOfZombies - 1) | 0;
                if (this.countOfZombies === 0) {
                    !Bridge.staticEquals(GameManager.GameWin, null) ? GameManager.GameWin() : null;
                }

                // Refresh the target list right away so a shooter can lock the new front
                // block on its next fireRate tick instead of idling through the delayed
                // updateFrontZombiesDelay() pass.
                this.UpdateFrontZombies();
            },
            /*ZombieGridManager.RemoveZombie end.*/

            /*ZombieGridManager.GetFrontZombie start.*/
            GetFrontZombie: function (columnIndex) {
                if (this.zombieColumns.getItem(columnIndex).Count > 0) {
                    return this.zombieColumns.getItem(columnIndex).getItem(0);
                }
                return null;
            },
            /*ZombieGridManager.GetFrontZombie end.*/

            /*ZombieGridManager.GetZombieInFrontOf start.*/
            GetZombieInFrontOf: function (zombie, columnIndex) {
                var column = this.zombieColumns.getItem(columnIndex);
                var index = column.indexOf(zombie.gameObject);
                if (index > 0) {
                    return this.GetCachedZombieBlock(column.getItem(((index - 1) | 0)));
                }
                return null;
            },
            /*ZombieGridManager.GetZombieInFrontOf end.*/

            /*ZombieGridManager.RepositionColumn start.*/
            RepositionColumn: function (columnIndex) {
                this.RepositionColumn$1(columnIndex, false);
            },
            /*ZombieGridManager.RepositionColumn end.*/

            /*ZombieGridManager.RepositionColumn$1 start.*/
            RepositionColumn$1: function (columnIndex, animate) {
                var column = this.zombieColumns.getItem(columnIndex);
                if (UnityEngine.GameObject.op_Inequality(this.levelManager.currentLevelData.mapPrefab, null)) {
                    // Slide along the client's original slots, retaining its spacing and height.
                    for (var i = 0; i < column.Count; i = (i + 1) | 0) {
                        this.MoveBlockTo(column.getItem(i).transform, this.savedPositions.getItem(columnIndex).getItem(i), animate);
                    }
                    return;
                }
                if (!this.levelManager.currentLevelData.stackMode) {
                    for (var i1 = 0; i1 < column.Count; i1 = (i1 + 1) | 0) {
                        var newPos = this.GetGridPosition(columnIndex, i1);
                        this.MoveBlockTo(column.getItem(i1).transform, newPos, animate);
                    }
                } else {
                    var stackHeight = this.levelManager.currentLevelData.stackHeight;

                    for (var i2 = 0; i2 < column.Count; i2 = (i2 + 1) | 0) {
                        var y = i2 % stackHeight;
                        var z = (Bridge.Int.div(i2, stackHeight)) | 0;

                        var newPos1 = this.GetStackedGridPosition(columnIndex, y, z);
                        this.MoveBlockTo(column.getItem(i2).transform, newPos1, animate);
                    }
                }
            },
            /*ZombieGridManager.RepositionColumn$1 end.*/

            /*ZombieGridManager.MoveBlockTo start.*/
            MoveBlockTo: function (block, newPos, animate) {
                if (UnityEngine.Component.op_Equality(block, null)) {
                    return;
                }
                if (!animate) {
                    DG.Tweening.ShortcutExtensions.DOKill(block);
                    block.position = newPos.$clone();
                    return;
                }
                if ((block.position.$clone().sub( newPos )).lengthSq() < 0.0001) {
                    return;
                }
                // Replace any in-flight slide so rapid consecutive kills chain smoothly.
                DG.Tweening.ShortcutExtensions.DOKill(block);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(block, newPos.$clone(), this.columnSlideDuration), this.columnSlideEase);
            },
            /*ZombieGridManager.MoveBlockTo end.*/

            /*ZombieGridManager.UpdateFrontZombies start.*/
            UpdateFrontZombies: function () {
                var $t;
                this.frontZombies.clear();

                this._frontZombiesByColor.clear();
                $t = Bridge.getEnumerator(ZombieGridManager._colorTypes);
                try {
                    while ($t.moveNext()) {
                        var color = $t.Current;
                        this._frontZombiesByColor.setItem(color, new (System.Collections.Generic.List$1(ZombieBlock)).ctor());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var stackMode = this.levelManager.currentLevelData.stackMode;
                var stackHeight = this.levelManager.currentLevelData.stackHeight;

                if (stackMode) {
                    for (var i = 0; i < this.zombieColumns.Count; i = (i + 1) | 0) {
                        var column = this.zombieColumns.getItem(i);
                        var limit = UnityEngine.Mathf.Min(stackHeight, column.Count);
                        for (var j = 0; j < limit; j = (j + 1) | 0) {
                            var zombie = column.getItem(j);
                            if (UnityEngine.GameObject.op_Inequality(zombie, null)) {
                                this.frontZombies.add(zombie);
                                this.CacheZombieBlock(zombie);
                            }
                        }
                    }
                } else {
                    // Non-stack: normally only a column's front block is hittable. Once a
                    // colour is down to its LAST column, expose the first few blocks of
                    // that column as targets so a shooter keeps firing at fireRate — a
                    // stream that rains into the column, like the reference ad — instead
                    // of one shot per block destroyed. Count columns per colour first.
                    for (var c = 0; c < ZombieGridManager._colorTypes.length; c = (c + 1) | 0) {
                        this._columnsPerColor.setItem(ZombieGridManager._colorTypes[c], 0);
                    }
                    for (var i1 = 0; i1 < this.zombieColumns.Count; i1 = (i1 + 1) | 0) {
                        var col = this.zombieColumns.getItem(i1);
                        if (col.Count === 0) {
                            continue;
                        }
                        var cb = this.GetCachedZombieBlock(col.getItem(0));
                        if (UnityEngine.MonoBehaviour.op_Inequality(cb, null) && this._columnsPerColor.containsKey(cb.colorType)) {
                            this._columnsPerColor.setItem(cb.colorType, (this._columnsPerColor.getItem(cb.colorType) + 1) | 0);
                        }
                    }

                    for (var i2 = 0; i2 < this.zombieColumns.Count; i2 = (i2 + 1) | 0) {
                        var col1 = this.zombieColumns.getItem(i2);
                        if (col1.Count === 0) {
                            continue;
                        }
                        var cb1 = this.GetCachedZombieBlock(col1.getItem(0));

                        var depth = 1;
                        if (UnityEngine.MonoBehaviour.op_Inequality(cb1, null)) {
                            var nCols = { };
                            this._columnsPerColor.tryGetValue(cb1.colorType, nCols);
                            if (nCols.v <= 1 && col1.Count > ((this.lastColumnTargetDepth + 1) | 0)) {
                                depth = this.lastColumnTargetDepth;
                            }
                        }

                        var limit1 = UnityEngine.Mathf.Min(depth, col1.Count);
                        for (var d = 0; d < limit1; d = (d + 1) | 0) {
                            var z = col1.getItem(d);
                            if (UnityEngine.GameObject.op_Inequality(z, null)) {
                                this.frontZombies.add(z);
                                this.CacheZombieBlock(z);
                            }
                        }
                    }
                }
            },
            /*ZombieGridManager.UpdateFrontZombies end.*/

            /*ZombieGridManager.CacheZombieBlock start.*/
            CacheZombieBlock: function (zombieGO) {
                if (UnityEngine.GameObject.op_Equality(zombieGO, null)) {
                    return;
                }
                var zb = { };

                if (!this._zombieBlockCache.tryGetValue(zombieGO, zb)) {
                    zb.v = zombieGO.GetComponent(ZombieBlock);
                    if (UnityEngine.MonoBehaviour.op_Inequality(zb.v, null)) {
                        this._zombieBlockCache.setItem(zombieGO, zb.v);
                    } else {
                        return;
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(zb.v, null) && this._frontZombiesByColor.containsKey(zb.v.colorType)) {
                    var colorList = this._frontZombiesByColor.getItem(zb.v.colorType);
                    if (!colorList.contains(zb.v)) {
                        colorList.add(zb.v);
                    }
                }
            },
            /*ZombieGridManager.CacheZombieBlock end.*/

            /*ZombieGridManager.GetFrontZombiesByColor start.*/
            GetFrontZombiesByColor: function (colorType) {
                var list = { };
                if (this._frontZombiesByColor.tryGetValue(colorType, list)) {
                    return list.v;
                }
                return new (System.Collections.Generic.List$1(ZombieBlock)).ctor();
            },
            /*ZombieGridManager.GetFrontZombiesByColor end.*/

            /*ZombieGridManager.GetCachedZombieBlock start.*/
            GetCachedZombieBlock: function (zombieGO) {
                if (UnityEngine.GameObject.op_Equality(zombieGO, null)) {
                    return null;
                }
                var zb = { };
                if (this._zombieBlockCache.tryGetValue(zombieGO, zb)) {
                    return zb.v;
                }
                zb.v = zombieGO.GetComponent(ZombieBlock);
                if (UnityEngine.MonoBehaviour.op_Inequality(zb.v, null)) {
                    this._zombieBlockCache.setItem(zombieGO, zb.v);
                }
                return zb.v;
            },
            /*ZombieGridManager.GetCachedZombieBlock end.*/

            /*ZombieGridManager.CleanupZombieCache start.*/
            CleanupZombieCache: function (zombieGO) {
                var zb = { };
                if (UnityEngine.GameObject.op_Inequality(zombieGO, null) && this._zombieBlockCache.tryGetValue(zombieGO, zb)) {
                    this._zombieBlockCache.remove(zombieGO);
                    var colorList = { };
                    if (UnityEngine.MonoBehaviour.op_Inequality(zb.v, null) && this._frontZombiesByColor.tryGetValue(zb.v.colorType, colorList)) {
                        colorList.v.remove(zb.v);
                    }
                }
            },
            /*ZombieGridManager.CleanupZombieCache end.*/

            /*ZombieGridManager.RepositionColumnFromSpawn start.*/
            RepositionColumnFromSpawn: function (columnIndex) {
                this.RepositionColumn(columnIndex);
            },
            /*ZombieGridManager.RepositionColumnFromSpawn end.*/

            /*ZombieGridManager.updateFrontZombiesDelay start.*/
            updateFrontZombiesDelay: function () {
                this.isZombieShifting = true;
                this.Invoke("FinishZombieShift", 0.05);
            },
            /*ZombieGridManager.updateFrontZombiesDelay end.*/

            /*ZombieGridManager.FinishZombieShift start.*/
            FinishZombieShift: function () {
                this.isZombieShifting = false;
                this.Invoke("UpdateFrontZombies", 0.4);
            },
            /*ZombieGridManager.FinishZombieShift end.*/


        },
        overloads: {
            "RepositionColumn(int, bool)": "RepositionColumn$1"
        }
    });
    /*ZombieGridManager end.*/

    /*SC.WindowNotify start.*/
    Bridge.define("SC.WindowNotify", {
        inherits: [SC.WindowLogic],
        methods: {
            /*SC.WindowNotify.onClick_BtnClose start.*/
            onClick_BtnClose: function () { },
            /*SC.WindowNotify.onClick_BtnClose end.*/

            /*SC.WindowNotify.Hide start.*/
            Hide: function (_0xaad38028) {
                if (_0xaad38028 === void 0) { _0xaad38028 = null; }
                this.gameObject.SetActive(false);
            },
            /*SC.WindowNotify.Hide end.*/


        }
    });
    /*SC.WindowNotify end.*/

    /*SCParam.InsTable start.*/
    Bridge.define("SCParam.InsTable", {
        inherits: [SCParam._0xa241aa20],
        fields: {
            id: null
        }
    });
    /*SCParam.InsTable end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","UnityEngine.UI","DG.Tweening","System.Collections","TMPro","SCParam","SC","System.Text","UnityEngine.SceneManagement","SC.Events","SC.Comp._0x2d5dde24","SC._0xe343fa14","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*MapCell start.*/
    $m("MapCell", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":ColorType,"sn":"color","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"column","t":4,"rt":$n[0].Int32,"sn":"column","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"row","t":4,"rt":$n[0].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MapCell end.*/

    /*MapMaterialGroup start.*/
    $m("MapMaterialGroup", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":ColorType,"sn":"color","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"}]}; }, $n);
    /*MapMaterialGroup end.*/

    /*LevelData start.*/
    $m("LevelData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "NewLevelData", menuName: "Levels/LevelData"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetExactMapCellsInSpawnOrder","t":8,"sn":"GetExactMapCellsInSpawnOrder","rt":System.Array.type(MapCell)},{"a":2,"n":"TryGetMapColor","t":8,"pi":[{"n":"material","pt":$n[1].Material,"ps":0},{"n":"color","out":true,"pt":ColorType,"ps":1}],"sn":"TryGetMapColor","rt":$n[0].Boolean,"p":[$n[1].Material,ColorType],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Column Colour Groups"),new UnityEngine.TooltipAttribute("If true, the grid is filled column-major and each contiguous group of (numberOfColumns / zombiePrefabs.Length) columns gets one colour, in prefab order. Produces the reference playable's vertical colour columns.")],"a":2,"n":"columnColorGroups","t":4,"rt":$n[0].Boolean,"sn":"columnColorGroups","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Sparse grid cells ordered by their logical column and row.")],"a":2,"n":"exactMapCells","t":4,"rt":System.Array.type(MapCell),"sn":"exactMapCells"},{"a":2,"n":"leveltimer","t":4,"rt":$n[0].Single,"sn":"leveltimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"mapHitEffectPrefab","t":4,"rt":$n[1].GameObject,"sn":"mapHitEffectPrefab"},{"a":2,"n":"mapMaterialGroups","t":4,"rt":System.Array.type(MapMaterialGroup),"sn":"mapMaterialGroups"},{"at":[new UnityEngine.HeaderAttribute("Client Prefab Map"),new UnityEngine.TooltipAttribute("When assigned, use these actual blocks instead of generating a grid.")],"a":2,"n":"mapPrefab","t":4,"rt":$n[1].GameObject,"sn":"mapPrefab"},{"a":2,"n":"mapPrefabCellPitch","t":4,"rt":$n[0].Single,"sn":"mapPrefabCellPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"numberOfColumns","t":4,"rt":$n[0].Int32,"sn":"numberOfColumns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"numberOfRows","t":4,"rt":$n[0].Int32,"sn":"numberOfRows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"randomizeZombies","t":4,"rt":$n[0].Boolean,"sn":"randomizeZombies","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"samePrefabStreak","t":4,"rt":$n[0].Int32,"sn":"samePrefabStreak","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("When stackMode is true, how many zombies tall each stack is before proceeding to next row.")],"a":2,"n":"stackHeight","t":4,"rt":$n[0].Int32,"sn":"stackHeight","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Stack Mode"),new UnityEngine.TooltipAttribute("If true, build stacks in the current row up to stackHeight before moving to the next row.")],"a":2,"n":"stackMode","t":4,"rt":$n[0].Boolean,"sn":"stackMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Exact Reference Map"),new UnityEngine.TooltipAttribute("Spawns only the serialized cells created from the reference layout.")],"a":2,"n":"useExactMap","t":4,"rt":$n[0].Boolean,"sn":"useExactMap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"zombiePrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"zombiePrefabs"}]}; }, $n);
    /*LevelData end.*/

    /*LevelManager start.*/
    $m("LevelManager", function () { return {"nested":[LevelManager.ChunkCandidate],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetAllZombiesToSpawn","t":8,"sn":"GetAllZombiesToSpawn","rt":$n[2].List$1(UnityEngine.GameObject)},{"a":2,"n":"GetFirstZombieChunkColor","t":8,"sn":"GetFirstZombieChunkColor","rt":ColorType,"box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"GetNextZombiePrefab","t":8,"sn":"GetNextZombiePrefab","rt":$n[1].GameObject},{"a":2,"n":"GetZombieColorOrder","t":8,"sn":"GetZombieColorOrder","rt":$n[2].List$1(ColorType)},{"a":2,"n":"GetZombiePrefab","t":8,"pi":[{"n":"color","pt":ColorType,"ps":0}],"sn":"GetZombiePrefab","rt":$n[1].GameObject,"p":[ColorType]},{"a":1,"n":"PrepareZombieSpawnList","t":8,"sn":"PrepareZombieSpawnList","rt":$n[0].Void},{"at":[new UnityEngine.TooltipAttribute("The single level this playable runs. Assign level4.")],"a":2,"n":"currentLevelData","t":4,"rt":LevelData,"sn":"currentLevelData"},{"a":2,"n":"possibleChunkSizes","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"possibleChunkSizes"},{"at":[new UnityEngine.HeaderAttribute("Spawn Logic")],"a":2,"n":"randomizeChunks","t":4,"rt":$n[0].Boolean,"sn":"randomizeChunks","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"spawnQueue","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"spawnQueue"}]}; }, $n);
    /*LevelManager end.*/

    /*LevelManager+ChunkCandidate start.*/
    $m("LevelManager.ChunkCandidate", function () { return {"td":LevelManager,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[0].Int32],"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"chunkSize","pt":$n[0].Int32,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"chunkSize","t":4,"rt":$n[0].Int32,"sn":"chunkSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"prefab","t":4,"rt":$n[1].GameObject,"sn":"prefab"}]}; }, $n);
    /*LevelManager+ChunkCandidate end.*/

    /*_0x77cefece start.*/
    $m("_0x77cefece", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Text),new UnityEngine.AddComponentMenu.ctor("sc-sdk/\u5e38\u7528\u7ec4\u4ef6/SCLanguageComp-\u591a\u8bed\u8a00\u652f\u6301")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":4,"n":"_0x7038096a","t":8,"sn":"_0x7038096a","rt":$n[0].Void},{"a":4,"n":"_0x769f23e9","t":8,"pi":[{"n":"_0x54031a98","pt":$n[0].String,"ps":0}],"sn":"_0x769f23e9","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"_0x21a4030c","t":4,"rt":$n[0].String,"sn":"_0x21a4030c"},{"a":1,"n":"_0x6f7ab55a","t":4,"rt":$n[3].Text,"sn":"_0x6f7ab55a"},{"a":1,"n":"_0xe04587a0","is":true,"t":4,"rt":$n[0].String,"sn":"_0xe04587a0","ro":true}]}; }, $n);
    /*_0x77cefece end.*/

    /*_0x5c9b0807 start.*/
    $m("_0x5c9b0807", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x14b4b5b8","is":true,"t":4,"rt":_0x5c9b0807,"sn":"_0x14b4b5b8","box":function ($v) { return Bridge.box($v, _0x5c9b0807, System.Enum.toStringFn(_0x5c9b0807));}},{"a":2,"n":"_0x696d5f85","is":true,"t":4,"rt":_0x5c9b0807,"sn":"_0x696d5f85","box":function ($v) { return Bridge.box($v, _0x5c9b0807, System.Enum.toStringFn(_0x5c9b0807));}}]}; }, $n);
    /*_0x5c9b0807 end.*/

    /*_0xb93849a5 start.*/
    $m("_0xb93849a5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isSc","t":4,"rt":$n[0].Boolean,"sn":"isSc","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lRewardCount","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"lRewardCount"},{"a":2,"n":"lRewardId","t":4,"rt":$n[0].Array.type(System.String),"sn":"lRewardId"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*_0xb93849a5 end.*/

    /*MainMenuItemTable start.*/
    $m("MainMenuItemTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"loadType","t":4,"rt":$n[0].String,"sn":"loadType"},{"a":2,"n":"menuId","t":4,"rt":$n[0].String,"sn":"menuId"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"},{"a":2,"n":"param","t":4,"rt":$n[2].Dictionary$2(System.String,System.Object),"sn":"param"},{"a":2,"n":"website","t":4,"rt":$n[0].String,"sn":"website"},{"a":2,"n":"yuque","t":4,"rt":$n[0].String,"sn":"yuque"}]}; }, $n);
    /*MainMenuItemTable end.*/

    /*MainMenuTable start.*/
    $m("MainMenuTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bgColor","t":4,"rt":$n[2].List$1(System.Int32),"sn":"bgColor"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"}]}; }, $n);
    /*MainMenuTable end.*/

    /*PaymentTestTable start.*/
    $m("PaymentTestTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BuyType","t":4,"rt":$n[0].String,"sn":"BuyType"},{"a":2,"n":"DscControlName","t":4,"rt":$n[0].String,"sn":"DscControlName"},{"a":2,"n":"GameType","t":4,"rt":$n[0].String,"sn":"GameType"},{"a":2,"n":"Gold","t":4,"rt":$n[0].Int32,"sn":"Gold","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Group","t":4,"rt":$n[0].Int32,"sn":"Group","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ID","t":4,"rt":$n[0].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Image","t":4,"rt":$n[0].String,"sn":"Image"},{"a":2,"n":"IsNotConsumables","t":4,"rt":$n[0].Int32,"sn":"IsNotConsumables","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Money","t":4,"rt":$n[0].Single,"sn":"Money","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"MoneyText","t":4,"rt":$n[0].String,"sn":"MoneyText"},{"a":2,"n":"Name","t":4,"rt":$n[0].String,"sn":"Name"},{"a":2,"n":"PayType","t":4,"rt":$n[0].String,"sn":"PayType"},{"a":2,"n":"Ratio","t":4,"rt":$n[0].Int32,"sn":"Ratio","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Text","t":4,"rt":$n[0].String,"sn":"Text"},{"a":2,"n":"ViewOrder","t":4,"rt":$n[0].Int32,"sn":"ViewOrder","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PaymentTestTable end.*/

    /*ColorHelper start.*/
    $m("ColorHelper", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetColor","is":true,"t":8,"pi":[{"n":"type","pt":ColorType,"ps":0}],"sn":"GetColor","rt":$n[1].Color,"p":[ColorType]}]}; }, $n);
    /*ColorHelper end.*/

    /*ColorType start.*/
    $m("ColorType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":ColorType,"sn":"Blue","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Brown","is":true,"t":4,"rt":ColorType,"sn":"Brown","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"DarkBrown","is":true,"t":4,"rt":ColorType,"sn":"DarkBrown","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Gray","is":true,"t":4,"rt":ColorType,"sn":"Gray","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Green","is":true,"t":4,"rt":ColorType,"sn":"Green","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Orange","is":true,"t":4,"rt":ColorType,"sn":"Orange","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Red","is":true,"t":4,"rt":ColorType,"sn":"Red","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Tan","is":true,"t":4,"rt":ColorType,"sn":"Tan","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"White","is":true,"t":4,"rt":ColorType,"sn":"White","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":ColorType,"sn":"Yellow","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}}]}; }, $n);
    /*ColorType end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EndToSettlement","t":8,"sn":"EndToSettlement","rt":$n[0].Void},{"a":2,"n":"Fail","t":8,"sn":"Fail","rt":$n[0].Void},{"a":1,"n":"HandleIdleSettle","t":8,"sn":"HandleIdleSettle","rt":$n[0].Void},{"a":2,"n":"MarkIdleSettlementFailed","t":8,"sn":"MarkIdleSettlementFailed","rt":$n[0].Void},{"a":2,"n":"NotifyActivity","t":8,"sn":"NotifyActivity","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Win","t":8,"sn":"Win","rt":$n[0].Void},{"a":2,"n":"FailedThisRun","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_FailedThisRun","t":8,"rt":$n[0].Boolean,"fg":"FailedThisRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"FailedThisRun"},{"a":2,"n":"WonThisRun","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_WonThisRun","t":8,"rt":$n[0].Boolean,"fg":"WonThisRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"WonThisRun"},{"a":2,"n":"ActiveShooters","is":true,"t":4,"rt":$n[2].List$1(PlantShooter),"sn":"ActiveShooters"},{"a":2,"n":"GameFail","is":true,"t":4,"rt":Function,"sn":"GameFail"},{"a":2,"n":"GameWin","is":true,"t":4,"rt":Function,"sn":"GameWin"},{"a":2,"n":"LevelText","t":4,"rt":$n[3].Text,"sn":"LevelText"},{"a":1,"n":"failedThisRun","t":4,"rt":$n[0].Boolean,"sn":"failedThisRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameHud","t":4,"rt":$n[1].GameObject,"sn":"gameHud"},{"at":[new UnityEngine.HeaderAttribute("Idle settlement"),new UnityEngine.TooltipAttribute("Seconds of no tap/touch before the playable auto-opens the settlement screen."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleSettleSeconds","t":4,"rt":$n[0].Single,"sn":"idleSettleSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"instance","is":true,"t":4,"rt":GameManager,"sn":"instance"},{"a":1,"n":"settlementStarted","t":4,"rt":$n[0].Boolean,"sn":"settlementStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winCelebration","t":4,"rt":WinCelebration,"sn":"winCelebration"},{"a":1,"n":"wonThisRun","t":4,"rt":$n[0].Boolean,"sn":"wonThisRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameManager end.*/

    /*ZombieGridManager start.*/
    $m("ZombieGridManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheZombieBlock","t":8,"pi":[{"n":"zombieGO","pt":$n[1].GameObject,"ps":0}],"sn":"CacheZombieBlock","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"CleanupZombieCache","t":8,"pi":[{"n":"zombieGO","pt":$n[1].GameObject,"ps":0}],"sn":"CleanupZombieCache","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"DecrementColorCount","t":8,"pi":[{"n":"colorType","pt":ColorType,"ps":0}],"sn":"DecrementColorCount","rt":$n[0].Void,"p":[ColorType]},{"a":1,"n":"FinishZombieShift","t":8,"sn":"FinishZombieShift","rt":$n[0].Void},{"a":2,"n":"GetCachedZombieBlock","t":8,"pi":[{"n":"zombieGO","pt":$n[1].GameObject,"ps":0}],"sn":"GetCachedZombieBlock","rt":ZombieBlock,"p":[$n[1].GameObject]},{"a":2,"n":"GetFrontZombie","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetFrontZombie","rt":$n[1].GameObject,"p":[$n[0].Int32]},{"a":2,"n":"GetFrontZombiesByColor","t":8,"pi":[{"n":"colorType","pt":ColorType,"ps":0}],"sn":"GetFrontZombiesByColor","rt":$n[2].List$1(ZombieBlock),"p":[ColorType]},{"a":2,"n":"GetRemainingCount","t":8,"pi":[{"n":"color","pt":ColorType,"ps":0}],"sn":"GetRemainingCount","rt":$n[0].Int32,"p":[ColorType],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetZombieInFrontOf","t":8,"pi":[{"n":"zombie","pt":ZombieBlock,"ps":0},{"n":"columnIndex","pt":$n[0].Int32,"ps":1}],"sn":"GetZombieInFrontOf","rt":ZombieBlock,"p":[ZombieBlock,$n[0].Int32]},{"a":1,"n":"IncrementColorCount","t":8,"pi":[{"n":"colorType","pt":ColorType,"ps":0}],"sn":"IncrementColorCount","rt":$n[0].Void,"p":[ColorType]},{"a":1,"n":"MoveBlockTo","t":8,"pi":[{"n":"block","pt":$n[1].Transform,"ps":0},{"n":"newPos","pt":$n[1].Vector3,"ps":1},{"n":"animate","pt":$n[0].Boolean,"ps":2}],"sn":"MoveBlockTo","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Boolean]},{"a":2,"n":"RemoveZombie","t":8,"pi":[{"n":"zombieGO","pt":$n[1].GameObject,"ps":0},{"n":"columnIndex","pt":$n[0].Int32,"ps":1}],"sn":"RemoveZombie","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"RepositionColumn","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0}],"sn":"RepositionColumn","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"RepositionColumn","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"animate","pt":$n[0].Boolean,"ps":1}],"sn":"RepositionColumn$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"RepositionColumnFromSpawn","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0}],"sn":"RepositionColumnFromSpawn","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SpawnPrefabMap","t":8,"sn":"SpawnPrefabMap","rt":$n[0].Void},{"a":2,"n":"SpawnZombie","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"verticalOffset","dv":0.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"SpawnZombie","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single]},{"a":2,"n":"SpawnZombieWithCoords","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1},{"n":"z","pt":$n[0].Int32,"ps":2}],"sn":"SpawnZombieWithCoords","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateFrontZombies","t":8,"sn":"UpdateFrontZombies","rt":$n[0].Void},{"a":2,"n":"updateFrontZombiesDelay","t":8,"sn":"updateFrontZombiesDelay","rt":$n[0].Void},{"a":2,"n":"GreenCount","t":4,"rt":$n[0].Int32,"sn":"GreenCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Instance","is":true,"t":4,"rt":ZombieGridManager,"sn":"Instance"},{"a":2,"n":"MainCamera","t":4,"rt":$n[1].Camera,"sn":"MainCamera"},{"a":2,"n":"SlotParentTransform","t":4,"rt":$n[1].Transform,"sn":"SlotParentTransform"},{"a":2,"n":"YellowCount","t":4,"rt":$n[0].Int32,"sn":"YellowCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ZombieParent","t":4,"rt":$n[1].Transform,"sn":"ZombieParent"},{"a":1,"n":"_colorTypes","is":true,"t":4,"rt":System.Array.type(ColorType),"sn":"_colorTypes","ro":true},{"a":1,"n":"_columnsPerColor","t":4,"rt":$n[2].Dictionary$2(ColorType,System.Int32),"sn":"_columnsPerColor"},{"a":1,"n":"_frontZombiesByColor","t":4,"rt":$n[2].Dictionary$2(ColorType,System.Collections.Generic.List$1(ZombieBlock)),"sn":"_frontZombiesByColor"},{"a":1,"n":"_remainingByColor","t":4,"rt":$n[2].Dictionary$2(ColorType,System.Int32),"sn":"_remainingByColor"},{"a":1,"n":"_zombieBlockCache","t":4,"rt":$n[2].Dictionary$2(UnityEngine.GameObject,ZombieBlock),"sn":"_zombieBlockCache"},{"a":2,"n":"blueCount","t":4,"rt":$n[0].Int32,"sn":"blueCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"columnSlideDuration","t":4,"rt":$n[0].Single,"sn":"columnSlideDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"columnSlideEase","t":4,"rt":$n[4].Ease,"sn":"columnSlideEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"countOfZombies","t":4,"rt":$n[0].Int32,"sn":"countOfZombies","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"frontZombies","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"frontZombies"},{"a":2,"n":"isZombieShifting","t":4,"rt":$n[0].Boolean,"sn":"isZombieShifting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lastColumnTargetDepth","t":4,"rt":$n[0].Int32,"sn":"lastColumnTargetDepth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"levelEnd","t":4,"rt":$n[0].Boolean,"sn":"levelEnd","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"levelManager","t":4,"rt":LevelManager,"sn":"levelManager"},{"a":2,"n":"redCount","t":4,"rt":$n[0].Int32,"sn":"redCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rowHeightGap","t":4,"rt":$n[0].Single,"sn":"rowHeightGap","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"savedPositions","t":4,"rt":$n[2].List$1(System.Collections.Generic.List$1(UnityEngine.Vector3)),"sn":"savedPositions"},{"a":2,"n":"spawnColumns","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"spawnColumns"},{"a":2,"n":"testMode","t":4,"rt":$n[0].Boolean,"sn":"testMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"verticalSpacing","t":4,"rt":$n[0].Single,"sn":"verticalSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zombieColumns","t":4,"rt":$n[2].List$1(System.Collections.Generic.List$1(UnityEngine.GameObject)),"sn":"zombieColumns"}]}; }, $n);
    /*ZombieGridManager end.*/

    /*GridZombieSpawner start.*/
    $m("GridZombieSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SpawnGridZombies","t":8,"sn":"SpawnGridZombies","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"levelManager","t":4,"rt":LevelManager,"sn":"levelManager"},{"a":2,"n":"rowHeightGap","t":4,"rt":$n[0].Single,"sn":"rowHeightGap","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zombieGridManager","t":4,"rt":ZombieGridManager,"sn":"zombieGridManager"}]}; }, $n);
    /*GridZombieSpawner end.*/

    /*HudHandler start.*/
    $m("HudHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*HudHandler end.*/

    /*MangerParent start.*/
    $m("MangerParent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void}]}; }, $n);
    /*MangerParent end.*/

    /*MenuManager start.*/
    $m("MenuManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"OnGameEndAction","t":8,"sn":"OnGameEndAction","rt":$n[0].Void},{"a":3,"n":"OnStartGameLogic","t":8,"sn":"OnStartGameLogic","rt":$n[0].Void},{"a":2,"n":"ShowMenu","t":8,"sn":"ShowMenu","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"initComplete","t":8,"sn":"initComplete","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":MenuManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":MenuManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[MenuManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"settled","t":4,"rt":$n[0].Boolean,"sn":"settled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":MenuManager,"sn":"Instance"}]}; }, $n);
    /*MenuManager end.*/

    /*OrientationController start.*/
    $m("OrientationController", function () { return {"nested":[OrientationController.CamConfig],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"pi":[{"n":"isPortrait","pt":$n[0].Boolean,"ps":0}],"sn":"Apply","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"SafePortrait","t":8,"sn":"SafePortrait","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landscape","t":4,"rt":OrientationController.CamConfig,"sn":"landscape"},{"a":1,"n":"lastAspect","t":4,"rt":$n[0].Single,"sn":"lastAspect","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastMapBounds","t":4,"rt":$n[1].Bounds,"sn":"lastMapBounds"},{"at":[new UnityEngine.HeaderAttribute("Responsive map framing"),new UnityEngine.TooltipAttribute("Map boundary renderer used to keep both sides visible when zooming in."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mapFrameRenderer","t":4,"rt":$n[1].Renderer,"sn":"mapFrameRenderer"},{"at":[new UnityEngine.RangeAttribute(0.6, 0.99),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mapTopViewport","t":4,"rt":$n[0].Single,"sn":"mapTopViewport","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movePlantQueue","t":4,"rt":$n[0].Boolean,"sn":"movePlantQueue","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plantQueueLandscapePos","t":4,"rt":$n[1].Vector3,"sn":"plantQueueLandscapePos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plantQueuePortraitPos","t":4,"rt":$n[1].Vector3,"sn":"plantQueuePortraitPos"},{"at":[new UnityEngine.HeaderAttribute("Optional world anchors"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plantQueueRoot","t":4,"rt":$n[1].Transform,"sn":"plantQueueRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"portrait","t":4,"rt":OrientationController.CamConfig,"sn":"portrait"},{"at":[new UnityEngine.RangeAttribute(0.0, 0.2),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sideMargin","t":4,"rt":$n[0].Single,"sn":"sideMargin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetCamera","t":4,"rt":$n[1].Camera,"sn":"targetCamera"}]}; }, $n);
    /*OrientationController end.*/

    /*OrientationController+CamConfig start.*/
    $m("OrientationController.CamConfig", function () { return {"td":OrientationController,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"euler","t":4,"rt":$n[1].Vector3,"sn":"euler"},{"a":2,"n":"orthoSize","t":4,"rt":$n[0].Single,"sn":"orthoSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"position","t":4,"rt":$n[1].Vector3,"sn":"position"}]}; }, $n);
    /*OrientationController+CamConfig end.*/

    /*PlantData start.*/
    $m("PlantData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "NewPlantData", menuName: "Plant"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"fireRate","t":4,"rt":$n[0].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plantColor","t":4,"rt":ColorType,"sn":"plantColor","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"plantName","t":4,"rt":$n[0].String,"sn":"plantName"}]}; }, $n);
    /*PlantData end.*/

    /*PlantProjectile start.*/
    $m("PlantProjectile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Detonate","t":8,"sn":"Detonate","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"newOwner","pt":PlantShooter,"ps":0},{"n":"zombie","pt":ZombieBlock,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[PlantShooter,ZombieBlock]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"ReleaseSelf","t":8,"sn":"ReleaseSelf","rt":$n[0].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"zombie","pt":ZombieBlock,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[ZombieBlock]},{"a":1,"n":"_trail","t":4,"rt":$n[1].TrailRenderer,"sn":"_trail"},{"a":1,"n":"hasHit","t":4,"rt":$n[0].Boolean,"sn":"hasHit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"owner","t":4,"rt":PlantShooter,"sn":"owner"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"targetZombie","t":4,"rt":ZombieBlock,"sn":"targetZombie"}]}; }, $n);
    /*PlantProjectile end.*/

    /*ShooterState start.*/
    $m("ShooterState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Depleted","is":true,"t":4,"rt":ShooterState,"sn":"Depleted","box":function ($v) { return Bridge.box($v, ShooterState, System.Enum.toStringFn(ShooterState));}},{"a":2,"n":"Idle","is":true,"t":4,"rt":ShooterState,"sn":"Idle","box":function ($v) { return Bridge.box($v, ShooterState, System.Enum.toStringFn(ShooterState));}},{"a":2,"n":"Shooting","is":true,"t":4,"rt":ShooterState,"sn":"Shooting","box":function ($v) { return Bridge.box($v, ShooterState, System.Enum.toStringFn(ShooterState));}},{"a":2,"n":"Walking","is":true,"t":4,"rt":ShooterState,"sn":"Walking","box":function ($v) { return Bridge.box($v, ShooterState, System.Enum.toStringFn(ShooterState));}}]}; }, $n);
    /*ShooterState end.*/

    /*PlantShooter start.*/
    $m("PlantShooter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplySizeMultiplier","t":8,"pi":[{"n":"multiplier","pt":$n[0].Single,"ps":0}],"sn":"ApplySizeMultiplier","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"AreAllSlotsBlocked","t":8,"sn":"AreAllSlotsBlocked","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginDepletion","t":8,"sn":"BeginDepletion","rt":$n[0].Void},{"a":1,"n":"FireProjectile","t":8,"pi":[{"n":"target","pt":ZombieBlock,"ps":0}],"sn":"FireProjectile","rt":$n[0].Void,"p":[ZombieBlock]},{"a":1,"n":"GetProjectileFromPool","t":8,"sn":"GetProjectileFromPool","rt":$n[1].GameObject},{"a":1,"n":"HandleDepletionExit","t":8,"sn":"HandleDepletionExit","rt":$n[0].Void},{"a":1,"n":"HandleShooting","t":8,"sn":"HandleShooting","rt":$n[0].Void},{"a":1,"n":"HandleTapDetection","t":8,"sn":"HandleTapDetection","rt":$n[0].Void},{"a":1,"n":"IsAnyPlantShooting","t":8,"sn":"IsAnyPlantShooting","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsShooting","t":8,"sn":"IsShooting","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LookAt","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"LookAt","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":1,"n":"MoveToTargetSlot","t":8,"sn":"MoveToTargetSlot","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnReachedSlot","t":8,"sn":"OnReachedSlot","rt":$n[0].Void},{"a":1,"n":"PeriodicFailCheck","t":8,"sn":"PeriodicFailCheck","rt":$n[5].IEnumerator},{"a":2,"n":"ReleaseProjectile","t":8,"pi":[{"n":"projectile","pt":PlantProjectile,"ps":0}],"sn":"ReleaseProjectile","rt":$n[0].Void,"p":[PlantProjectile]},{"a":2,"n":"SetMaterial","t":8,"sn":"SetMaterial","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartFailCheckLoop","t":8,"sn":"StartFailCheckLoop","rt":$n[0].Void},{"a":2,"n":"StopFailCheckLoop","t":8,"sn":"StopFailCheckLoop","rt":$n[0].Void},{"a":1,"n":"TryAssignSlotAndWalk","t":8,"sn":"TryAssignSlotAndWalk","rt":$n[0].Void},{"a":1,"n":"TryShootMatchingFrontZombie","t":8,"sn":"TryShootMatchingFrontZombie","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateShotsText","t":8,"sn":"UpdateShotsText","rt":$n[0].Void},{"a":1,"n":"_animator","t":4,"rt":$n[1].Animator,"sn":"_animator"},{"a":1,"n":"_cachedCollider","t":4,"rt":$n[1].Collider,"sn":"_cachedCollider"},{"a":1,"n":"_cachedGridManager","t":4,"rt":ZombieGridManager,"sn":"_cachedGridManager"},{"a":1,"n":"_cachedMeshRenderer","t":4,"rt":$n[1].MeshRenderer,"sn":"_cachedMeshRenderer"},{"a":1,"n":"_cachedTransform","t":4,"rt":$n[1].Transform,"sn":"_cachedTransform"},{"a":1,"n":"_lastLookTarget","t":4,"rt":$n[1].Transform,"sn":"_lastLookTarget"},{"a":1,"n":"_lastLookYAngle","t":4,"rt":$n[0].Single,"sn":"_lastLookYAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_lastTargetColumnByColor","is":true,"t":4,"rt":$n[2].Dictionary$2(ColorType,System.Int32),"sn":"_lastTargetColumnByColor"},{"a":1,"n":"_projectileComponentCache","t":4,"rt":$n[2].Dictionary$2(UnityEngine.GameObject,PlantProjectile),"sn":"_projectileComponentCache"},{"a":1,"n":"_projectilePool","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"_projectilePool","ro":true},{"a":1,"n":"_projectilePoolRoot","t":4,"rt":$n[1].Transform,"sn":"_projectilePoolRoot"},{"a":1,"n":"_slotOccupierCache","t":4,"rt":$n[2].Dictionary$2(UnityEngine.Transform,SlotOccupier),"sn":"_slotOccupierCache"},{"a":1,"n":"activeTargets","t":4,"rt":$n[2].HashSet$1(ZombieBlock),"sn":"activeTargets"},{"a":1,"n":"appliedSizeMultiplier","t":4,"rt":$n[0].Single,"sn":"appliedSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"availableSlots","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"availableSlots"},{"a":2,"n":"colorType","t":4,"rt":ColorType,"sn":"colorType","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"columnIndex","t":4,"rt":$n[0].Int32,"sn":"columnIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentSlot","t":4,"rt":SlotOccupier,"sn":"currentSlot"},{"at":[new UnityEngine.HeaderAttribute("State & Movement")],"a":2,"n":"currentState","t":4,"rt":ShooterState,"sn":"currentState","box":function ($v) { return Bridge.box($v, ShooterState, System.Enum.toStringFn(ShooterState));}},{"a":1,"n":"currentTargetSlot","t":4,"rt":$n[1].Transform,"sn":"currentTargetSlot"},{"a":2,"n":"exitDuration","t":4,"rt":$n[0].Single,"sn":"exitDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Exit Behavior After Shots")],"a":2,"n":"exitSpeed","t":4,"rt":$n[0].Single,"sn":"exitSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"exitTimer","t":4,"rt":$n[0].Single,"sn":"exitTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"failCheckRoutine","t":4,"rt":$n[1].Coroutine,"sn":"failCheckRoutine"},{"a":1,"n":"fireCooldown","t":4,"rt":$n[0].Single,"sn":"fireCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"firePoint","t":4,"rt":$n[1].Transform,"sn":"firePoint"},{"at":[new UnityEngine.HeaderAttribute("Shooting Settings")],"a":2,"n":"fireRate","t":4,"rt":$n[0].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"globallyTargetedZombies","is":true,"t":4,"rt":$n[2].HashSet$1(ZombieBlock),"sn":"globallyTargetedZombies"},{"a":1,"n":"hasReachedSlot","t":4,"rt":$n[0].Boolean,"sn":"hasReachedSlot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDepleted","t":4,"rt":$n[0].Boolean,"sn":"isDepleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFailCheckRunning","t":4,"rt":$n[0].Boolean,"sn":"isFailCheckRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isShooting","t":4,"rt":$n[0].Boolean,"sn":"isShooting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxShots","t":4,"rt":$n[0].Int32,"sn":"maxShots","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"occupiedSlot","t":4,"rt":SlotOccupier,"sn":"occupiedSlot"},{"a":2,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":2,"n":"onRemovedFromQueue","t":4,"rt":Function,"sn":"onRemovedFromQueue"},{"a":2,"n":"onStartedWalkingColumn","t":4,"rt":Function,"sn":"onStartedWalkingColumn"},{"at":[new UnityEngine.HeaderAttribute("Projectile Pooling")],"a":2,"n":"projectilePoolSize","t":4,"rt":$n[0].Int32,"sn":"projectilePoolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Projectile Setup")],"a":2,"n":"projectilePrefab","t":4,"rt":$n[1].GameObject,"sn":"projectilePrefab"},{"a":2,"n":"queueIndex","t":4,"rt":$n[0].Int32,"sn":"queueIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"shooterMat","t":4,"rt":$n[1].Material,"sn":"shooterMat"},{"a":1,"n":"shotsFired","t":4,"rt":$n[0].Int32,"sn":"shotsFired","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"slotOverflowFailTimer","t":4,"rt":SlotOverflowFailTimer,"sn":"slotOverflowFailTimer"},{"a":2,"n":"slotsParent","t":4,"rt":$n[1].Transform,"sn":"slotsParent"},{"a":1,"n":"spawner","t":4,"rt":PlantSpawner,"sn":"spawner"},{"a":2,"n":"textMesh","t":4,"rt":$n[6].TextMeshPro,"sn":"textMesh"},{"a":2,"n":"vfx","t":4,"rt":$n[1].GameObject,"sn":"vfx"},{"a":2,"n":"walkSpeed","t":4,"rt":$n[0].Single,"sn":"walkSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlantShooter end.*/

    /*PlantSpawner start.*/
    $m("PlantSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BuildQueueFromActualZombieOrder","t":8,"sn":"BuildQueueFromActualZombieOrder","rt":$n[2].List$1(System.ValueTuple$2(ColorType,System.Int32))},{"a":1,"n":"BuildQueueFromColorCount","t":8,"pi":[{"n":"colorZombieCount","pt":$n[2].Dictionary$2(ColorType,System.Int32),"ps":0}],"sn":"BuildQueueFromColorCount","rt":$n[2].List$1(System.ValueTuple$2(ColorType,System.Int32)),"p":[$n[2].Dictionary$2(ColorType,System.Int32)]},{"a":1,"n":"CountZombiesPerColor","t":8,"pi":[{"n":"levelData","pt":LevelData,"ps":0}],"sn":"CountZombiesPerColor","rt":$n[2].Dictionary$2(ColorType,System.Int32),"p":[LevelData]},{"a":1,"n":"GetColumnPosition","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"queueIndex","pt":$n[0].Int32,"ps":1}],"sn":"GetColumnPosition","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"GetRandomBulletDistributionInTens","t":8,"pi":[{"n":"totalBullets","pt":$n[0].Int32,"ps":0}],"sn":"GetRandomBulletDistributionInTens","rt":$n[2].List$1(System.Int32),"p":[$n[0].Int32]},{"a":1,"n":"MoveQueuedPlant","t":8,"pi":[{"n":"plant","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"speed","pt":$n[0].Single,"ps":2}],"sn":"MoveQueuedPlant","rt":$n[5].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"OnPlantRemoved","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"shooter","pt":PlantShooter,"ps":1}],"sn":"OnPlantRemoved","rt":$n[0].Void,"p":[$n[0].Int32,PlantShooter]},{"a":2,"n":"OnPlantStartedWalking","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"oldQueueIndex","pt":$n[0].Int32,"ps":1},{"n":"shooter","pt":PlantShooter,"ps":2},{"n":"walkSpeed","pt":$n[0].Single,"ps":3}],"sn":"OnPlantStartedWalking","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,PlantShooter,$n[0].Single]},{"a":1,"n":"SetupPrefabLookup","t":8,"sn":"SetupPrefabLookup","rt":$n[0].Void},{"a":1,"n":"Shuffle","t":8,"pi":[{"n":"list","pt":$n[2].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"Shuffle","rt":$n[0].Void,"p":[$n[2].List$1(System.Object)]},{"a":1,"n":"SpawnPlantInColumn","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"color","pt":ColorType,"ps":1},{"n":"bullets","pt":$n[0].Int32,"ps":2},{"n":"columnIndex","pt":$n[0].Int32,"ps":3}],"sn":"SpawnPlantInColumn","rt":$n[0].Void,"p":[$n[1].GameObject,ColorType,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"SpawnPlantsInColumns","t":8,"sn":"SpawnPlantsInColumns","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MainCamera","t":4,"rt":$n[1].Camera,"sn":"MainCamera"},{"a":2,"n":"PlantShootersFront","t":4,"rt":$n[2].List$1(PlantShooter),"sn":"PlantShootersFront"},{"at":[new UnityEngine.HeaderAttribute("Cannon Firing")],"a":2,"n":"cannonFireRate","t":4,"rt":$n[0].Single,"sn":"cannonFireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Cannon Size"),new UnityEngine.TooltipAttribute("Scales cannon visuals and touch colliders. 1 = original size; 1.15 = 15% larger."),new UnityEngine.RangeAttribute(0.5, 1.3)],"a":2,"n":"cannonSizeMultiplier","t":4,"rt":$n[0].Single,"sn":"cannonSizeMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"colorToPlantPrefab","t":4,"rt":$n[2].Dictionary$2(ColorType,UnityEngine.GameObject),"sn":"colorToPlantPrefab"},{"at":[new UnityEngine.HeaderAttribute("Level Reference")],"a":2,"n":"levelManager","t":4,"rt":LevelManager,"sn":"levelManager"},{"at":[new UnityEngine.HeaderAttribute("Bullet Distribution")],"a":2,"n":"maxBulletsPerPlant","t":4,"rt":$n[0].Int32,"sn":"maxBulletsPerPlant","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Grid Limits")],"a":2,"n":"maxColumns","t":4,"rt":$n[0].Int32,"sn":"maxColumns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"numColumns","t":4,"rt":$n[0].Int32,"sn":"numColumns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Plant Prefabs By Color")],"a":2,"n":"plantColorPrefabs","t":4,"rt":$n[2].List$1(PlantColorPrefab),"sn":"plantColorPrefabs"},{"a":1,"n":"plantColumns","t":4,"rt":$n[2].List$1(System.Collections.Generic.List$1(PlantShooter)),"sn":"plantColumns"},{"at":[new UnityEngine.HeaderAttribute("Grid (Columns / Depth on Z)")],"a":2,"n":"startPoint","t":4,"rt":$n[1].Vector3,"sn":"startPoint"},{"a":2,"n":"startPointTransform","t":4,"rt":$n[1].Transform,"sn":"startPointTransform"},{"a":2,"n":"xSpacing","t":4,"rt":$n[0].Single,"sn":"xSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"zSpacing","t":4,"rt":$n[0].Single,"sn":"zSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlantSpawner end.*/

    /*PlantColorPrefab start.*/
    $m("PlantColorPrefab", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"colorType","t":4,"rt":ColorType,"sn":"colorType","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"plantPrefab","t":4,"rt":$n[1].GameObject,"sn":"plantPrefab"}]}; }, $n);
    /*PlantColorPrefab end.*/

    /*PlayableAudio start.*/
    $m("PlayableAudio", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PlayCheers","t":8,"sn":"PlayCheers","rt":$n[0].Void},{"a":2,"n":"PlayCoins","t":8,"sn":"PlayCoins","rt":$n[0].Void},{"a":2,"n":"PlayExplode","t":8,"sn":"PlayExplode","rt":$n[0].Void},{"a":2,"n":"PlayLose","t":8,"sn":"PlayLose","rt":$n[0].Void},{"a":2,"n":"PlayPick","t":8,"sn":"PlayPick","rt":$n[0].Void},{"a":2,"n":"PlayWin","t":8,"sn":"PlayWin","rt":$n[0].Void},{"a":1,"n":"Sfx","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"Sfx","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopMusic","t":8,"sn":"StopMusic","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bgm","t":4,"rt":$n[1].AudioClip,"sn":"bgm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cheers","t":4,"rt":$n[1].AudioClip,"sn":"cheers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coins","t":4,"rt":$n[1].AudioClip,"sn":"coins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"explode","t":4,"rt":$n[1].AudioClip,"sn":"explode"},{"a":2,"n":"instance","is":true,"t":4,"rt":PlayableAudio,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lose","t":4,"rt":$n[1].AudioClip,"sn":"lose"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"music","t":4,"rt":$n[1].AudioSource,"sn":"music"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pick","t":4,"rt":$n[1].AudioClip,"sn":"pick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":$n[1].AudioSource,"sn":"sfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"win","t":4,"rt":$n[1].AudioClip,"sn":"win"}]}; }, $n);
    /*PlayableAudio end.*/

    /*PlayableTutorial start.*/
    $m("PlayableTutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClearableCount","is":true,"t":8,"pi":[{"n":"grid","pt":ZombieGridManager,"ps":0},{"n":"color","pt":ColorType,"ps":1}],"sn":"ClearableCount","rt":$n[0].Int32,"p":[ZombieGridManager,ColorType],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"EndGuidance","t":8,"sn":"EndGuidance","rt":$n[0].Void},{"a":1,"n":"EnsurePulse","t":8,"sn":"EnsurePulse","rt":$n[0].Void},{"a":1,"n":"FindNeededFrontPlant","t":8,"sn":"FindNeededFrontPlant","rt":PlantShooter},{"a":1,"n":"HasFreeSlot","t":8,"sn":"HasFreeSlot","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"HideFinger","t":8,"sn":"HideFinger","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ShouldRetarget","is":true,"t":8,"pi":[{"n":"current","pt":PlantShooter,"ps":0},{"n":"remaining","pt":$n[0].Int32,"ps":1}],"sn":"ShouldRetarget","rt":$n[0].Boolean,"p":[PlantShooter,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ShowFingerOn","t":8,"pi":[{"n":"t","pt":PlantShooter,"ps":0}],"sn":"ShowFingerOn","rt":$n[0].Void,"p":[PlantShooter]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasRect","t":4,"rt":$n[1].RectTransform,"sn":"canvasRect"},{"a":1,"n":"ended","t":4,"rt":$n[0].Boolean,"sn":"ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"finger","t":4,"rt":$n[1].RectTransform,"sn":"finger"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerOffset","t":4,"rt":$n[1].Vector2,"sn":"fingerOffset"},{"a":1,"n":"fingerPulse","t":4,"rt":$n[4].Tween,"sn":"fingerPulse"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerPulseScale","t":4,"rt":$n[0].Single,"sn":"fingerPulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleReHintDelay","t":4,"rt":$n[0].Single,"sn":"idleReHintDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"slots","t":4,"rt":System.Array.type(SlotOccupier),"sn":"slots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tapCard","t":4,"rt":$n[1].GameObject,"sn":"tapCard"},{"a":1,"n":"target","t":4,"rt":PlantShooter,"sn":"target"}]}; }, $n);
    /*PlayableTutorial end.*/

    /*ProgressBar start.*/
    $m("ProgressBar", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Image)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"armed","t":4,"rt":$n[0].Boolean,"sn":"armed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("The Filled image to drive. Defaults to the Image on this object.")],"a":2,"n":"fill","t":4,"rt":$n[3].Image,"sn":"fill"},{"at":[new UnityEngine.TooltipAttribute("How fast the bar catches up to the true progress (fraction per second).")],"a":2,"n":"fillSpeed","t":4,"rt":$n[0].Single,"sn":"fillSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"total","t":4,"rt":$n[0].Int32,"sn":"total","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ProgressBar end.*/

    /*SettlementOutcomeBanner start.*/
    $m("SettlementOutcomeBanner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"SetOutcome","t":8,"pi":[{"n":"won","pt":$n[0].Boolean,"ps":0},{"n":"failed","pt":$n[0].Boolean,"ps":1}],"sn":"SetOutcome","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"banner","t":4,"rt":$n[3].Image,"sn":"banner"},{"a":1,"n":"buttonLabels","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"buttonLabels"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downloadButton","t":4,"rt":$n[3].Image,"sn":"downloadButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failedDownloadSprite","t":4,"rt":$n[1].Sprite,"sn":"failedDownloadSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failedSprite","t":4,"rt":$n[1].Sprite,"sn":"failedSprite"},{"a":1,"n":"originalButtonSprite","t":4,"rt":$n[1].Sprite,"sn":"originalButtonSprite"},{"a":1,"n":"originalButtonType","t":4,"rt":$n[3].Image.Type,"sn":"originalButtonType","box":function ($v) { return Bridge.box($v, UnityEngine.UI.Image.Type, System.Enum.toStringFn(UnityEngine.UI.Image.Type));}},{"a":1,"n":"originalLabelStates","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"originalLabelStates"},{"a":1,"n":"originalPreserveAspect","t":4,"rt":$n[0].Boolean,"sn":"originalPreserveAspect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"wonSprite","t":4,"rt":$n[1].Sprite,"sn":"wonSprite"}]}; }, $n);
    /*SettlementOutcomeBanner end.*/

    /*SlotOccupier start.*/
    $m("SlotOccupier", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isPlantStuck","t":8,"sn":"isPlantStuck","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isOccupied","t":4,"rt":$n[0].Boolean,"sn":"isOccupied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isShooting","t":4,"rt":$n[0].Boolean,"sn":"isShooting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SlotOccupier end.*/

    /*SlotOverflowFailTimer start.*/
    $m("SlotOverflowFailTimer", function () { return {"att":1048841,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Advance","t":8,"pi":[{"n":"slotsBlocked","pt":$n[0].Boolean,"ps":0},{"n":"deltaTime","pt":$n[0].Single,"ps":1}],"sn":"Advance","rt":$n[0].Boolean,"p":[$n[0].Boolean,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"DelaySeconds","is":true,"t":4,"rt":$n[0].Single,"sn":"DelaySeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SlotOverflowFailTimer end.*/

    /*SoundManage start.*/
    $m("SoundManage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayButtonClickSound","t":8,"sn":"PlayButtonClickSound","rt":$n[0].Void},{"a":2,"n":"PlayLevelEndSound","t":8,"pi":[{"n":"win","pt":$n[0].Boolean,"ps":0}],"sn":"PlayLevelEndSound","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"PlayPowerupSounds","t":8,"pi":[{"n":"_clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlayPowerupSounds","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":2,"n":"SetMusic","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SetMusic","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetSound","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SetSound","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"popSound","t":8,"sn":"popSound","rt":$n[0].Void},{"a":1,"n":"isMusicOn","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_isMusicOn","t":8,"rt":$n[0].Boolean,"fg":"isMusicOn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_isMusicOn","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"isMusicOn"},"fn":"isMusicOn"},{"a":1,"n":"isSoundOn","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_isSoundOn","t":8,"rt":$n[0].Boolean,"fg":"isSoundOn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_isSoundOn","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"isSoundOn"},"fn":"isSoundOn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LevelFailed","t":4,"rt":$n[1].AudioClip,"sn":"LevelFailed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LevelWin","t":4,"rt":$n[1].AudioClip,"sn":"LevelWin"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"MusicAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"MusicAudioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonClickAudio","t":4,"rt":$n[1].AudioClip,"sn":"buttonClickAudio"},{"a":2,"n":"instance","is":true,"t":4,"rt":SoundManage,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popSoundClip","t":4,"rt":$n[1].AudioClip,"sn":"popSoundClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfxAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"sfxAudioSource"}]}; }, $n);
    /*SoundManage end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PlayGame","t":8,"sn":"PlayGame","rt":$n[0].Void},{"a":2,"n":"instance","is":true,"t":4,"rt":UIManager,"sn":"instance"}]}; }, $n);
    /*UIManager end.*/

    /*UIRotator start.*/
    $m("UIRotator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"degreesPerSecond","t":4,"rt":$n[0].Single,"sn":"degreesPerSecond","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rt","t":4,"rt":$n[1].RectTransform,"sn":"rt"}]}; }, $n);
    /*UIRotator end.*/

    /*WinCelebration start.*/
    $m("WinCelebration", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HoldThen","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"HoldThen","rt":$n[5].IEnumerator,"p":[Function]},{"a":2,"n":"Play","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"WidenConfetti","t":8,"pi":[{"n":"root","pt":$n[1].GameObject,"ps":0}],"sn":"WidenConfetti","rt":$n[0].Void,"p":[$n[1].GameObject]},{"at":[new UnityEngine.HeaderAttribute("Confetti spread (client FB5 \u2014 widen the shower)"),new UnityEngine.TooltipAttribute("Emission box width (local units) applied to every confetti PS. Bigger = spills past the well."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiEmitWidth","t":4,"rt":$n[0].Single,"sn":"confettiEmitWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiLifetime","t":4,"rt":$n[0].Single,"sn":"confettiLifetime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiLocalEuler","t":4,"rt":$n[1].Vector3,"sn":"confettiLocalEuler"},{"at":[new UnityEngine.HeaderAttribute("Confetti placement (local to Main Camera)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiLocalPos","t":4,"rt":$n[1].Vector3,"sn":"confettiLocalPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiOpeningBurst","t":4,"rt":$n[0].Int32,"sn":"confettiOpeningBurst","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiPrefab","t":4,"rt":$n[1].GameObject,"sn":"confettiPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiRateOverTime","t":4,"rt":$n[0].Single,"sn":"confettiRateOverTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiScale","t":4,"rt":$n[0].Single,"sn":"confettiScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"greatJobText","t":4,"rt":$n[1].RectTransform,"sn":"greatJobText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"holdSeconds","t":4,"rt":$n[0].Single,"sn":"holdSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*WinCelebration end.*/

    /*ZombieAligner start.*/
    $m("ZombieAligner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"GetGridPosition","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"rowIndex","pt":$n[0].Int32,"ps":1},{"n":"heightIndex","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"GetGridPosition","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32]},{"a":3,"n":"GetStackedGridPosition","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1},{"n":"z","pt":$n[0].Int32,"ps":2}],"sn":"GetStackedGridPosition","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32]},{"a":3,"n":"GetStackedRowGridPosition","t":8,"pi":[{"n":"zombieIndex","pt":$n[0].Int32,"ps":0},{"n":"maxStackHeight","pt":$n[0].Int32,"ps":1},{"n":"maxColumnsPerRow","pt":$n[0].Int32,"ps":2}],"sn":"GetStackedRowGridPosition","rt":$n[1].Vector3,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"origin","t":4,"rt":$n[1].Vector3,"sn":"origin"},{"at":[new UnityEngine.HeaderAttribute("Grid Settings")],"a":2,"n":"spacingX","t":4,"rt":$n[0].Single,"sn":"spacingX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spacingY","t":4,"rt":$n[0].Single,"sn":"spacingY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spacingZ","t":4,"rt":$n[0].Single,"sn":"spacingZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ZombieAligner end.*/

    /*ZombieBlock start.*/
    $m("ZombieBlock", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.BoxCollider)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DelayedDestroy","t":8,"sn":"DelayedDestroy","rt":$n[0].Void},{"a":1,"n":"IsWallAhead","t":8,"pi":[{"n":"targetPos","pt":$n[1].Vector3,"ps":0}],"sn":"IsWallAhead","rt":$n[0].Boolean,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MoveToPosition","t":8,"pi":[{"n":"targetPosition","pt":$n[1].Vector3,"ps":0}],"sn":"MoveToPosition","rt":$n[5].IEnumerator,"p":[$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"TryMoveForwardIfSpaceAvailable","t":8,"sn":"TryMoveForwardIfSpaceAvailable","rt":$n[0].Void},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"a":1,"n":"_cachedCollider","t":4,"rt":$n[1].Collider,"sn":"_cachedCollider"},{"a":1,"n":"_cachedDirectionNormalized","t":4,"rt":$n[1].Vector3,"sn":"_cachedDirectionNormalized"},{"a":1,"n":"_dead","t":4,"rt":$n[0].Boolean,"sn":"_dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"colorType","t":4,"rt":ColorType,"sn":"colorType","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"columnIndex","t":4,"rt":$n[0].Int32,"sn":"columnIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"direction","t":4,"rt":$n[1].Vector3,"sn":"direction"},{"a":2,"n":"hitEffectPrefab","t":4,"rt":$n[1].GameObject,"sn":"hitEffectPrefab"},{"a":1,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastPosition","t":4,"rt":$n[1].Vector3,"sn":"lastPosition"},{"a":2,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vfx","t":4,"rt":$n[1].GameObject,"sn":"vfx"}]}; }, $n);
    /*ZombieBlock end.*/

    /*ZombieData start.*/
    $m("ZombieData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "NewZombieData", menuName: "Zombie"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"health","t":4,"rt":$n[0].Int32,"sn":"health","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"zombieColor","t":4,"rt":ColorType,"sn":"zombieColor","box":function ($v) { return Bridge.box($v, ColorType, System.Enum.toStringFn(ColorType));}},{"a":2,"n":"zombieName","t":4,"rt":$n[0].String,"sn":"zombieName"}]}; }, $n);
    /*ZombieData end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SCParam._0xa241aa20 start.*/
    $m("SCParam._0xa241aa20", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Int64],"pi":[{"n":"_0x11e432aa","pt":$n[0].String,"ps":0},{"n":"_0xe96d2ec8","dv":0,"o":true,"pt":$n[0].Int64,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"count","t":4,"rt":$n[0].Int64,"sn":"count"},{"a":2,"n":"itemId","t":4,"rt":$n[0].String,"sn":"itemId"}]}; }, $n);
    /*SCParam._0xa241aa20 end.*/

    /*SCParam._0xbd7cfdb7 start.*/
    $m("SCParam._0xbd7cfdb7", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"changeCount","t":4,"rt":$n[0].Int64,"sn":"changeCount"},{"a":2,"n":"curCount","t":4,"rt":$n[0].Int64,"sn":"curCount"},{"a":2,"n":"insId","t":4,"rt":$n[0].String,"sn":"insId"},{"a":2,"n":"itemId","t":4,"rt":$n[0].String,"sn":"itemId"}]}; }, $n);
    /*SCParam._0xbd7cfdb7 end.*/

    /*SCParam._0xc9a7c399 start.*/
    $m("SCParam._0xc9a7c399", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"lFilterSign","t":4,"rt":$n[2].List$1(System.String),"sn":"lFilterSign"},{"a":2,"n":"sShowSign","t":4,"rt":$n[0].String,"sn":"sShowSign"}]}; }, $n);
    /*SCParam._0xc9a7c399 end.*/

    /*SCParam._0x644cdd14 start.*/
    $m("SCParam._0x644cdd14", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bUnlocked","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_bUnlocked","t":8,"rt":$n[0].Boolean,"fg":"bUnlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_bUnlocked","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"bUnlocked"},"fn":"bUnlocked"},{"a":1,"n":"_0xc5edfdd7","t":4,"rt":$n[0].Boolean,"sn":"_0xc5edfdd7","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bPass","t":4,"rt":$n[0].Boolean,"sn":"bPass","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"stageID","t":4,"rt":$n[0].String,"sn":"stageID"},{"a":2,"n":"starNum","t":4,"rt":$n[0].Int32,"sn":"starNum","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SCParam._0x644cdd14 end.*/

    /*SCParam._0x96595b61 start.*/
    $m("SCParam._0x96595b61", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnEnterStage","t":4,"rt":Function,"sn":"OnEnterStage"},{"a":2,"n":"stageInfo","t":4,"rt":$n[7].StageLevelTable,"sn":"stageInfo"}]}; }, $n);
    /*SCParam._0x96595b61 end.*/

    /*SCParam._0x0bc1ed17 start.*/
    $m("SCParam._0x0bc1ed17", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"lAwardReceivedRecord","t":4,"rt":$n[2].List$1(System.String),"sn":"lAwardReceivedRecord"},{"a":2,"n":"sectionID","t":4,"rt":$n[0].Int32,"sn":"sectionID","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SCParam._0x0bc1ed17 end.*/

    /*SCParam.DialogNotifyInfo start.*/
    $m("SCParam.DialogNotifyInfo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BNeedSelect","t":4,"rt":$n[0].Boolean,"sn":"BNeedSelect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"FunCancel","t":4,"rt":Function,"sn":"FunCancel"},{"a":2,"n":"FunConfirm","t":4,"rt":Function,"sn":"FunConfirm"},{"a":2,"n":"SCancelTxt","t":4,"rt":$n[0].String,"sn":"SCancelTxt"},{"a":2,"n":"SConfirmTxt","t":4,"rt":$n[0].String,"sn":"SConfirmTxt"},{"a":2,"n":"SContent","t":4,"rt":$n[0].String,"sn":"SContent"},{"a":2,"n":"STitle","t":4,"rt":$n[0].String,"sn":"STitle"}]}; }, $n);
    /*SCParam.DialogNotifyInfo end.*/

    /*SCParam._0x5c71f007 start.*/
    $m("SCParam._0x5c71f007", function () { return {"nested":[$n[7]._0x5c71f007._0x997d4720],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IShowType","t":4,"rt":$n[7]._0x5c71f007._0x997d4720,"sn":"IShowType","box":function ($v) { return Bridge.box($v, SCParam._0x5c71f007._0x997d4720, System.Enum.toStringFn(SCParam._0x5c71f007._0x997d4720));}}]}; }, $n);
    /*SCParam._0x5c71f007 end.*/

    /*SCParam._0x5c71f007+_0x997d4720 start.*/
    $m("SCParam._0x5c71f007._0x997d4720", function () { return {"td":$n[7]._0x5c71f007,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x9e08a793","is":true,"t":4,"rt":$n[7]._0x5c71f007._0x997d4720,"sn":"_0x9e08a793","box":function ($v) { return Bridge.box($v, SCParam._0x5c71f007._0x997d4720, System.Enum.toStringFn(SCParam._0x5c71f007._0x997d4720));}},{"a":2,"n":"_0xad51ac56","is":true,"t":4,"rt":$n[7]._0x5c71f007._0x997d4720,"sn":"_0xad51ac56","box":function ($v) { return Bridge.box($v, SCParam._0x5c71f007._0x997d4720, System.Enum.toStringFn(SCParam._0x5c71f007._0x997d4720));}}]}; }, $n);
    /*SCParam._0x5c71f007+_0x997d4720 end.*/

    /*SCParam._0x5d77a5fd start.*/
    $m("SCParam._0x5d77a5fd", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SContnet","t":4,"rt":$n[0].String,"sn":"SContnet"},{"a":2,"n":"SImgIdBg","t":4,"rt":$n[0].String,"sn":"SImgIdBg"}]}; }, $n);
    /*SCParam._0x5d77a5fd end.*/

    /*SCParam.AudioTable start.*/
    $m("SCParam.AudioTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"interval","t":4,"rt":$n[0].String,"sn":"interval"},{"a":2,"n":"path","t":4,"rt":$n[0].String,"sn":"path"},{"a":2,"n":"type","t":4,"rt":$n[0].Int32,"sn":"type","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"volume","t":4,"rt":$n[0].Single,"sn":"volume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SCParam.AudioTable end.*/

    /*SCParam.BtnSkinTable start.*/
    $m("SCParam.BtnSkinTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"clickImgId","t":4,"rt":$n[0].String,"sn":"clickImgId"},{"a":2,"n":"disableImgId","t":4,"rt":$n[0].String,"sn":"disableImgId"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"normalImgId","t":4,"rt":$n[0].String,"sn":"normalImgId"},{"a":2,"n":"smallImgId","t":4,"rt":$n[0].String,"sn":"smallImgId"}]}; }, $n);
    /*SCParam.BtnSkinTable end.*/

    /*SCParam.ChannelBranchFunctionTable start.*/
    $m("SCParam.ChannelBranchFunctionTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DebugOrderIndex","t":4,"rt":$n[0].Int32,"sn":"DebugOrderIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DefaultValue","t":4,"rt":$n[0].String,"sn":"DefaultValue"},{"a":2,"n":"Des","t":4,"rt":$n[0].String,"sn":"Des"},{"a":2,"n":"IsDebugShow","t":4,"rt":$n[0].Int32,"sn":"IsDebugShow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ModulePath","t":4,"rt":$n[0].String,"sn":"ModulePath"},{"a":2,"n":"OneKeyOpenDebugAd","t":4,"rt":$n[0].String,"sn":"OneKeyOpenDebugAd"},{"a":2,"n":"OnlineParam","t":4,"rt":$n[0].String,"sn":"OnlineParam"},{"a":2,"n":"Param","t":4,"rt":$n[0].String,"sn":"Param"},{"a":2,"n":"appstore","t":4,"rt":$n[0].String,"sn":"appstore"},{"a":2,"n":"appstore_cn","t":4,"rt":$n[0].String,"sn":"appstore_cn"},{"a":2,"n":"appstore_outside","t":4,"rt":$n[0].String,"sn":"appstore_outside"},{"a":2,"n":"edition","t":4,"rt":$n[0].String,"sn":"edition"},{"a":2,"n":"game233","t":4,"rt":$n[0].String,"sn":"game233"},{"a":2,"n":"game4399","t":4,"rt":$n[0].String,"sn":"game4399"},{"a":2,"n":"google","t":4,"rt":$n[0].String,"sn":"google"},{"a":2,"n":"huawei","t":4,"rt":$n[0].String,"sn":"huawei"},{"a":2,"n":"huawei_iaa","t":4,"rt":$n[0].String,"sn":"huawei_iaa"},{"a":2,"n":"huawei_outside","t":4,"rt":$n[0].String,"sn":"huawei_outside"},{"a":2,"n":"mintegral","t":4,"rt":$n[0].String,"sn":"mintegral"},{"a":2,"n":"oppo","t":4,"rt":$n[0].String,"sn":"oppo"},{"a":2,"n":"oppo_iaa","t":4,"rt":$n[0].String,"sn":"oppo_iaa"},{"a":2,"n":"slideme","t":4,"rt":$n[0].String,"sn":"slideme"},{"a":2,"n":"vivo_iaa","t":4,"rt":$n[0].String,"sn":"vivo_iaa"},{"a":2,"n":"xiaomi_iaa","t":4,"rt":$n[0].String,"sn":"xiaomi_iaa"},{"a":2,"n":"xingtu","t":4,"rt":$n[0].String,"sn":"xingtu"}]}; }, $n);
    /*SCParam.ChannelBranchFunctionTable end.*/

    /*SCParam.SCDataBase start.*/
    $m("SCParam.SCDataBase", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SCParam.SCDataBase end.*/

    /*SCParam.GiftTable start.*/
    $m("SCParam.GiftTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"extraItemCount","t":4,"rt":$n[0].Int32,"sn":"extraItemCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"extraItemId","t":4,"rt":$n[0].String,"sn":"extraItemId"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"itemCountList","t":4,"rt":$n[2].List$1(System.Int32),"sn":"itemCountList"},{"a":2,"n":"itemIdList","t":4,"rt":$n[2].List$1(System.String),"sn":"itemIdList"},{"a":2,"n":"rateList","t":4,"rt":$n[2].List$1(System.Int32),"sn":"rateList"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*SCParam.GiftTable end.*/

    /*SCParam.GoldLevelTable start.*/
    $m("SCParam.GoldLevelTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"lv","t":4,"rt":$n[0].Int32,"sn":"lv","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rate","t":4,"rt":$n[0].Single,"sn":"rate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SCParam.GoldLevelTable end.*/

    /*SCParam.ImgTable start.*/
    $m("SCParam.ImgTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"imagePlist","t":4,"rt":$n[0].String,"sn":"imagePlist"},{"a":2,"n":"path","t":4,"rt":$n[0].String,"sn":"path"}]}; }, $n);
    /*SCParam.ImgTable end.*/

    /*SCParam.InsTable start.*/
    $m("SCParam.InsTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"}]}; }, $n);
    /*SCParam.InsTable end.*/

    /*SCParam.ItemTable start.*/
    $m("SCParam.ItemTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"desLangId","t":4,"rt":$n[0].String,"sn":"desLangId"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"imgId","t":4,"rt":$n[0].String,"sn":"imgId"},{"a":2,"n":"insLimit","t":4,"rt":$n[0].Int32,"sn":"insLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"nameLangId","t":4,"rt":$n[0].String,"sn":"nameLangId"},{"a":2,"n":"prefabId","t":4,"rt":$n[0].String,"sn":"prefabId"},{"a":2,"n":"quality","t":4,"rt":$n[0].Int32,"sn":"quality","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"stackLimit","t":4,"rt":$n[0].Int32,"sn":"stackLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tableId","t":4,"rt":$n[0].String,"sn":"tableId"},{"a":2,"n":"tableName","t":4,"rt":$n[0].String,"sn":"tableName"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*SCParam.ItemTable end.*/

    /*SCParam.MergeItemTable start.*/
    $m("SCParam.MergeItemTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"itemId","t":4,"rt":$n[0].String,"sn":"itemId"},{"a":2,"n":"level","t":4,"rt":$n[0].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"mergeItemId","t":4,"rt":$n[0].String,"sn":"mergeItemId"},{"a":2,"n":"skinId","t":4,"rt":$n[0].String,"sn":"skinId"}]}; }, $n);
    /*SCParam.MergeItemTable end.*/

    /*SCParam.MergeSpaceTable start.*/
    $m("SCParam.MergeSpaceTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"initLocked","t":4,"rt":$n[0].Int32,"sn":"initLocked","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"unlockAmount","t":4,"rt":$n[0].Int32,"sn":"unlockAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"unlockOrder","t":4,"rt":$n[0].Int32,"sn":"unlockOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"unlockType","t":4,"rt":$n[0].String,"sn":"unlockType"}]}; }, $n);
    /*SCParam.MergeSpaceTable end.*/

    /*SCParam.NotifyBuyCloseAd start.*/
    $m("SCParam.NotifyBuyCloseAd", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"fClose","t":4,"rt":Function,"sn":"fClose"},{"a":2,"n":"fError","t":4,"rt":Function,"sn":"fError"},{"a":2,"n":"fSuccess","t":4,"rt":Function,"sn":"fSuccess"}]}; }, $n);
    /*SCParam.NotifyBuyCloseAd end.*/

    /*SCParam.PaymentTable start.*/
    $m("SCParam.PaymentTable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].String,$n[0].String,$n[0].Int32],"pi":[{"n":"ID","pt":$n[0].Int32,"ps":0},{"n":"Image","pt":$n[0].String,"ps":1},{"n":"Money","pt":$n[0].String,"ps":2},{"n":"_0x64e8655a","pt":$n[0].Int32,"ps":3}],"sn":"$ctor1"},{"a":2,"n":"BuyCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_BuyCount","t":8,"rt":$n[0].Int32,"fg":"BuyCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"BuyCount"},{"a":2,"n":"BuyType","t":4,"rt":$n[0].String,"sn":"BuyType"},{"a":2,"n":"DscControlName","t":4,"rt":$n[0].String,"sn":"DscControlName"},{"a":2,"n":"GameType","t":4,"rt":$n[0].String,"sn":"GameType"},{"a":2,"n":"Gold","t":4,"rt":$n[0].Int32,"sn":"Gold","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Group","t":4,"rt":$n[0].Int32,"sn":"Group","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ID","t":4,"rt":$n[0].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Image","t":4,"rt":$n[0].String,"sn":"Image"},{"a":2,"n":"IsNotConsumables","t":4,"rt":$n[0].Int32,"sn":"IsNotConsumables","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Money","t":4,"rt":$n[0].String,"sn":"Money"},{"a":2,"n":"MoneyText","t":4,"rt":$n[0].String,"sn":"MoneyText"},{"a":2,"n":"Name","t":4,"rt":$n[0].String,"sn":"Name"},{"a":2,"n":"OrgMoney","t":4,"rt":$n[0].Double,"sn":"OrgMoney","box":function ($v) { return Bridge.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},{"a":2,"n":"PayType","t":4,"rt":$n[0].String,"sn":"PayType"},{"a":2,"n":"Ratio","t":4,"rt":$n[0].Int32,"sn":"Ratio","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Text","t":4,"rt":$n[0].String,"sn":"Text"},{"a":2,"n":"ViewOrder","t":4,"rt":$n[0].Int32,"sn":"ViewOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_buyCount","t":4,"rt":$n[0].Int32,"sn":"_buyCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SCParam.PaymentTable end.*/

    /*SCParam.PrefabTable start.*/
    $m("SCParam.PrefabTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"customClassName","t":4,"rt":$n[0].String,"sn":"customClassName"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"path","t":4,"rt":$n[0].String,"sn":"path"}]}; }, $n);
    /*SCParam.PrefabTable end.*/

    /*SCParam.ShopTable start.*/
    $m("SCParam.ShopTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"btnSkinId","t":4,"rt":$n[0].String,"sn":"btnSkinId"},{"a":2,"n":"buyItemId","t":4,"rt":$n[0].String,"sn":"buyItemId"},{"a":2,"n":"buyPrice","t":4,"rt":$n[0].Int32,"sn":"buyPrice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"buyType","t":4,"rt":$n[0].String,"sn":"buyType"},{"a":2,"n":"buyWinId","t":4,"rt":$n[0].String,"sn":"buyWinId"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"itemId","t":4,"rt":$n[0].String,"sn":"itemId"},{"a":2,"n":"stock","t":4,"rt":$n[0].Int32,"sn":"stock","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*SCParam.ShopTable end.*/

    /*SCParam.SignTable start.*/
    $m("SCParam.SignTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"days","t":4,"rt":$n[0].Int32,"sn":"days","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"prizeItemCount","t":4,"rt":$n[0].Int32,"sn":"prizeItemCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"prizeItemId","t":4,"rt":$n[0].String,"sn":"prizeItemId"},{"a":2,"n":"resignCost","t":4,"rt":$n[0].Int32,"sn":"resignCost","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"resignItemId","t":4,"rt":$n[0].String,"sn":"resignItemId"},{"a":2,"n":"resignType","t":4,"rt":$n[0].String,"sn":"resignType"}]}; }, $n);
    /*SCParam.SignTable end.*/

    /*SCParam.SlotTable start.*/
    $m("SCParam.SlotTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"insId","t":4,"rt":$n[0].String,"sn":"insId"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*SCParam.SlotTable end.*/

    /*SCParam.StageLevelTable start.*/
    $m("SCParam.StageLevelTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"awardsLose","t":4,"rt":$n[2].List$1(System.String),"sn":"awardsLose"},{"a":2,"n":"awardsLoseCount","t":4,"rt":$n[2].List$1(System.Int32),"sn":"awardsLoseCount"},{"a":2,"n":"awardsWin","t":4,"rt":$n[2].List$1(System.String),"sn":"awardsWin"},{"a":2,"n":"awardsWinCount","t":4,"rt":$n[2].List$1(System.Int32),"sn":"awardsWinCount"},{"a":2,"n":"nameLangId","t":4,"rt":$n[0].String,"sn":"nameLangId"},{"a":2,"n":"nextID","t":4,"rt":$n[0].String,"sn":"nextID"},{"a":2,"n":"sectionID","t":4,"rt":$n[0].Int32,"sn":"sectionID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"stageID","t":4,"rt":$n[0].String,"sn":"stageID"}]}; }, $n);
    /*SCParam.StageLevelTable end.*/

    /*SCParam.StageRewardTable start.*/
    $m("SCParam.StageRewardTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"awardsCountList","t":4,"rt":$n[2].List$1(System.Int32),"sn":"awardsCountList"},{"a":2,"n":"awardsList","t":4,"rt":$n[2].List$1(System.String),"sn":"awardsList"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"sectionID","t":4,"rt":$n[0].Int32,"sn":"sectionID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"starNum","t":4,"rt":$n[0].Int32,"sn":"starNum","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SCParam.StageRewardTable end.*/

    /*SCParam.WindowTable start.*/
    $m("SCParam.WindowTable", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"RefuseFullPicture","t":4,"rt":$n[0].Int32,"sn":"RefuseFullPicture","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"bannerAdStyle","t":4,"rt":$n[0].String,"sn":"bannerAdStyle"},{"a":2,"n":"bannerType","t":4,"rt":$n[0].String,"sn":"bannerType"},{"a":2,"n":"customClassName","t":4,"rt":$n[0].String,"sn":"customClassName"},{"a":2,"n":"des","t":4,"rt":$n[0].String,"sn":"des"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"more","t":4,"rt":$n[0].Int32,"sn":"more","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"order","t":4,"rt":$n[0].Int32,"sn":"order","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"path","t":4,"rt":$n[0].String,"sn":"path"},{"a":2,"n":"type","t":4,"rt":$n[0].Int32,"sn":"type","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SCParam.WindowTable end.*/

    /*SC.EWebPlatform start.*/
    $m("SC.EWebPlatform", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"NewsBreak","is":true,"t":4,"rt":$n[8].EWebPlatform,"sn":"NewsBreak","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}},{"a":2,"n":"applovin","is":true,"t":4,"rt":$n[8].EWebPlatform,"sn":"applovin","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}},{"a":2,"n":"google","is":true,"t":4,"rt":$n[8].EWebPlatform,"sn":"google","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}},{"a":2,"n":"mintegral","is":true,"t":4,"rt":$n[8].EWebPlatform,"sn":"mintegral","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}},{"a":2,"n":"none","is":true,"t":4,"rt":$n[8].EWebPlatform,"sn":"none","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}}]}; }, $n);
    /*SC.EWebPlatform end.*/

    /*SC.EGraphicsAPIType start.*/
    $m("SC.EGraphicsAPIType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"WebGL1","is":true,"t":4,"rt":$n[8].EGraphicsAPIType,"sn":"WebGL1","box":function ($v) { return Bridge.box($v, SC.EGraphicsAPIType, System.Enum.toStringFn(SC.EGraphicsAPIType));}},{"a":2,"n":"WebGL1AndWebGL2","is":true,"t":4,"rt":$n[8].EGraphicsAPIType,"sn":"WebGL1AndWebGL2","box":function ($v) { return Bridge.box($v, SC.EGraphicsAPIType, System.Enum.toStringFn(SC.EGraphicsAPIType));}},{"a":2,"n":"WebGL2","is":true,"t":4,"rt":$n[8].EGraphicsAPIType,"sn":"WebGL2","box":function ($v) { return Bridge.box($v, SC.EGraphicsAPIType, System.Enum.toStringFn(SC.EGraphicsAPIType));}}]}; }, $n);
    /*SC.EGraphicsAPIType end.*/

    /*SC.WindowConfig start.*/
    $m("SC.WindowConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"prefab","t":4,"rt":$n[1].GameObject,"sn":"prefab"},{"a":2,"n":"winName","t":4,"rt":$n[0].String,"sn":"winName"}]}; }, $n);
    /*SC.WindowConfig end.*/

    /*SC.WebAdConfig start.*/
    $m("SC.WebAdConfig", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "WebAdConfig", menuName: "Configs/WebAdConfig", order: 0
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"at":[new SC.CustomLabelAttribute("\u662f\u5426\u4f7f\u7528SCFont.ttf")],"a":2,"n":"BUseSCFontTtf","t":4,"rt":$n[0].Boolean,"sn":"BUseSCFontTtf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new SC.CustomLabelAttribute("\u7f16\u8f91\u5668\u591a\u8bed\u8a00")],"a":2,"n":"EEditorLanguage","t":4,"rt":$n[8].LanguageCommon.ELanguage,"sn":"EEditorLanguage","box":function ($v) { return Bridge.box($v, SC.LanguageCommon.ELanguage, System.Enum.toStringFn(SC.LanguageCommon.ELanguage));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new SC.CustomLabelAttribute("WebGL Graphics API")],"a":2,"n":"EGraphicsAPI","t":4,"rt":$n[8].EGraphicsAPIType,"sn":"EGraphicsAPI","box":function ($v) { return Bridge.box($v, SC.EGraphicsAPIType, System.Enum.toStringFn(SC.EGraphicsAPIType));}},{"at":[new SC.CustomLabelAttribute("\u5f85\u673a\u8df3\u8f6c\u7ed3\u7b97\u65f6\u957f(\u79d2)")],"a":2,"n":"IAutoSettleDuration","t":4,"rt":$n[0].Int32,"sn":"IAutoSettleDuration","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new SC.CustomLabelAttribute("\u6a21\u62df\u8fd0\u884c\u65f6\u591a\u8bed\u8a00(\u7f16\u8f91\u5668)")],"a":2,"n":"IDebugLanguage","t":4,"rt":$n[8].LanguageCommon.ELanguage,"sn":"IDebugLanguage","box":function ($v) { return Bridge.box($v, SC.LanguageCommon.ELanguage, System.Enum.toStringFn(SC.LanguageCommon.ELanguage));}},{"at":[new SC.CustomLabelAttribute("WindowConfig")],"a":2,"n":"WindowConfigs","t":4,"rt":$n[2].List$1(SC.WindowConfig),"sn":"WindowConfigs"},{"a":1,"n":"_0xac07fcd8","t":4,"rt":System.Array.type(System.Reflection.FieldInfo),"sn":"_0xac07fcd8"},{"a":1,"n":"_0xf7ca088e","t":4,"rt":$n[8].WebAdConfig,"sn":"_0xf7ca088e"},{"at":[new SC.CustomLabelAttribute("\u6a21\u62df\u5f53\u524d\u5e73\u53f0(\u7f16\u8f91\u5668)")],"a":2,"n":"eDebugWebPlatform","t":4,"rt":$n[8].EWebPlatform,"sn":"eDebugWebPlatform","box":function ($v) { return Bridge.box($v, SC.EWebPlatform, System.Enum.toStringFn(SC.EWebPlatform));}},{"at":[new SC.CustomLabelAttribute("\u6a21\u62df\u5e7f\u544a\u64ad\u653e\u65f6\u957f(\u79d2)(\u7f16\u8f91\u5668)")],"a":2,"n":"fDebugAdDuration","t":4,"rt":$n[0].Single,"sn":"fDebugAdDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new SC.CustomLabelAttribute("\u68c0\u6d4bOnEnterGameSuccess\u65f6\u95f4(\u79d2)(\u7f16\u8f91\u5668)")],"a":2,"n":"fDebugCheckEnterGameTime","t":4,"rt":$n[0].Single,"sn":"fDebugCheckEnterGameTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sFilePath","is":true,"t":4,"rt":$n[0].String,"sn":"sFilePath"},{"a":2,"n":"OnEditorConfigChanged","t":2,"ad":{"a":2,"n":"add_OnEditorConfigChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnEditorConfigChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnEditorConfigChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnEditorConfigChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*SC.WebAdConfig end.*/

    /*SC.SCLayerAD start.*/
    $m("SC.SCLayerAD", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SC.SCLayerAD end.*/

    /*SC._0x919a0128 start.*/
    $m("SC._0x919a0128", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ConvertFormat","is":true,"t":8,"pi":[{"n":"_0xca923c49","pt":$n[0].String,"ps":0}],"sn":"ConvertFormat","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"GetAdapterNodeZoomScale","t":8,"sn":"GetAdapterNodeZoomScale","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetByteLengthString","is":true,"t":8,"pi":[{"n":"byteLength","pt":$n[0].Int64,"ps":0},{"n":"iFCount","dv":2,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"GetByteLengthString","rt":$n[0].String,"p":[$n[0].Int64,$n[0].Int32]},{"a":2,"n":"GetUseRange","t":8,"sn":"GetUseRange","rt":$n[0].String},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_0x043c7cd5","t":8,"sn":"_0x043c7cd5","rt":$n[1].Canvas},{"a":1,"n":"_0x365896fe","t":8,"pi":[{"n":"_0x07da12c5","pt":$n[1].Canvas,"ps":0}],"sn":"_0x365896fe","rt":$n[3].Text,"p":[$n[1].Canvas]},{"a":1,"n":"_0x47da96ca","is":true,"t":8,"sn":"_0x47da96ca","rt":$n[0].Void},{"a":1,"n":"_0x89231ff5","t":8,"sn":"_0x89231ff5","rt":$n[0].Void},{"a":2,"n":"format","is":true,"t":8,"pi":[{"n":"format","pt":$n[0].String,"ps":0},{"n":"_0x720b5646","pt":System.Object,"ps":1}],"tpc":1,"tprm":["T"],"sn":"format","rt":$n[0].String,"p":[$n[0].String,System.Object]},{"a":2,"n":"designSize","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_designSize","t":8,"rt":$n[1].Vector2,"fg":"designSize"},"fn":"designSize"},{"a":1,"n":"_0x03233fdf","t":4,"rt":$n[0].Single,"sn":"_0x03233fdf","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_0x1bdf477a","t":4,"rt":$n[0].Int64,"sn":"_0x1bdf477a"},{"a":1,"n":"_0x2bcf3dcc","t":4,"rt":$n[1].Vector2,"sn":"_0x2bcf3dcc"},{"a":1,"n":"_0x3d16ae21","t":4,"rt":$n[0].Single,"sn":"_0x3d16ae21","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_0x6d4c0805","t":4,"rt":$n[0].Int64,"sn":"_0x6d4c0805"},{"a":1,"n":"_0x869b7f06","is":true,"t":4,"rt":$n[9].StringBuilder,"sn":"_0x869b7f06"},{"a":1,"n":"_0xa9ad034d","t":4,"rt":$n[0].Int32,"sn":"_0xa9ad034d","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_0xb79dc8b2","t":4,"rt":$n[0].Single,"sn":"_0xb79dc8b2","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_0xbde0071f","t":4,"rt":$n[0].Int64,"sn":"_0xbde0071f"},{"a":1,"n":"_0xcbeb81d1","t":4,"rt":$n[0].String,"sn":"_0xcbeb81d1"},{"a":1,"n":"_0xf0140553","t":4,"rt":$n[3].Text,"sn":"_0xf0140553"},{"a":1,"n":"_0xf2e924eb","t":4,"rt":$n[1].Vector3,"sn":"_0xf2e924eb"},{"a":2,"n":"fUpdateDeltaTime","t":4,"rt":$n[0].Single,"sn":"fUpdateDeltaTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"textColor","t":4,"rt":$n[1].Color,"sn":"textColor"}]}; }, $n);
    /*SC._0x919a0128 end.*/

    /*SC._0xea696b74 start.*/
    $m("SC._0xea696b74", function () { return {"nested":[$n[8]._0xea696b74._0xb6f88893],"att":1048577,"a":2,"at":[new UnityEngine.Scripting.PreserveAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(3)],"a":1,"n":"_0x2f6a202b","is":true,"t":8,"sn":"_0x2f6a202b","rt":$n[0].Void},{"a":1,"n":"_0x3b584631","is":true,"t":8,"pi":[{"n":"_0x43e5bba7","pt":$n[0].Boolean,"ps":0}],"sn":"_0x3b584631","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"_0x6a23e193","is":true,"t":8,"pi":[{"n":"_0xfb40d048","pt":$n[0].String,"ps":0},{"n":"_0x7f7c5192","pt":$n[0].Single,"ps":1}],"sn":"_0x6a23e193","rt":$n[0].Void,"p":[$n[0].String,$n[0].Single]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(1)],"a":1,"n":"_0xfa2bc922","is":true,"t":8,"sn":"_0xfa2bc922","rt":$n[0].Void},{"a":2,"n":"IsMaskShow","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMaskShow","t":8,"rt":$n[0].Boolean,"fg":"IsMaskShow","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMaskShow"},{"a":1,"n":"_0x12c6cd40","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_0x12c6cd40","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0x6c391a32","is":true,"t":4,"rt":$n[0].String,"sn":"_0x6c391a32"},{"a":1,"n":"_0x869be08e","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_0x869be08e","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SC._0xea696b74 end.*/

    /*SC._0xea696b74+_0xb6f88893 start.*/
    $m("SC._0xea696b74._0xb6f88893", function () { return {"td":$n[8]._0xea696b74,"att":1048835,"a":1,"at":[new UnityEngine.Scripting.PreserveAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[5].IEnumerator},{"a":2,"n":"RawTip","t":4,"rt":$n[0].String,"sn":"RawTip"},{"a":2,"n":"Seconds","t":4,"rt":$n[0].Single,"sn":"Seconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TipText","t":4,"rt":$n[3].Text,"sn":"TipText"}]}; }, $n);
    /*SC._0xea696b74+_0xb6f88893 end.*/

    /*SC._0xc1e449cf start.*/
    $m("SC._0xc1e449cf", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"onClick_BtnDownload","t":8,"sn":"onClick_BtnDownload","rt":$n[0].Void}]}; }, $n);
    /*SC._0xc1e449cf end.*/

    /*SC.UILanguage start.*/
    $m("SC.UILanguage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Image(0.Chinese,1.English)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LLang","t":4,"rt":$n[2].List$1(UnityEngine.Sprite),"sn":"LLang"}]}; }, $n);
    /*SC.UILanguage end.*/

    /*SC._0xda5e030f start.*/
    $m("SC._0xda5e030f", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"anchorMax","t":4,"rt":$n[1].Vector2,"sn":"anchorMax"},{"a":2,"n":"anchorMin","t":4,"rt":$n[1].Vector2,"sn":"anchorMin"},{"a":2,"n":"anchoredPosition","t":4,"rt":$n[1].Vector2,"sn":"anchoredPosition"},{"a":2,"n":"bEmpty","t":4,"rt":$n[0].Boolean,"sn":"bEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pivot","t":4,"rt":$n[1].Vector2,"sn":"pivot"},{"a":2,"n":"position","t":4,"rt":$n[1].Vector3,"sn":"position"},{"a":2,"n":"rotation","t":4,"rt":$n[1].Quaternion,"sn":"rotation"},{"a":2,"n":"scale","t":4,"rt":$n[1].Vector3,"sn":"scale"},{"a":2,"n":"sizeDelta","t":4,"rt":$n[1].Vector2,"sn":"sizeDelta"}]}; }, $n);
    /*SC._0xda5e030f end.*/

    /*SC.SCWebAdAdaptCanvas start.*/
    $m("SC.SCWebAdAdaptCanvas", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("sc-sdk/Adapt/SCWebAdAdaptCanvas"),new UnityEngine.RequireComponent.ctor(UnityEngine.Canvas)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyAdapt","t":8,"pi":[{"n":"_0x999a060c","pt":$n[0].Boolean,"ps":0}],"sn":"ApplyAdapt","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":3,"n":"_0xb4a8f11c","t":16,"rt":$n[3].CanvasScaler,"g":{"a":3,"n":"get__0xb4a8f11c","t":8,"rt":$n[3].CanvasScaler,"fg":"_0xb4a8f11c"},"fn":"_0xb4a8f11c"},{"a":1,"n":"_0x1fecd093","t":4,"rt":$n[3].CanvasScaler,"sn":"_0x1fecd093"}]}; }, $n);
    /*SC.SCWebAdAdaptCanvas end.*/

    /*SC.SCWebAdAdaptNode start.*/
    $m("SC.SCWebAdAdaptNode", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("sc-sdk/Adapt/SCWebAdAdaptNode")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyAdapt","t":8,"pi":[{"n":"_0xd2abf547","pt":$n[0].Boolean,"ps":0}],"sn":"ApplyAdapt","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"SaveData","t":8,"pi":[{"n":"_0x5c7b0c8a","pt":$n[0].Boolean,"ps":0}],"sn":"SaveData","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_0x74b2400b","t":8,"sn":"_0x74b2400b","rt":$n[8]._0xda5e030f},{"a":1,"n":"_0x8c9be201","t":8,"pi":[{"n":"_0x030a4f5e","pt":$n[8]._0xda5e030f,"ps":0}],"sn":"_0x8c9be201","rt":$n[0].Void,"p":[$n[8]._0xda5e030f]},{"a":3,"n":"_0x3070e37e","t":16,"rt":$n[1].RectTransform,"g":{"a":3,"n":"get__0x3070e37e","t":8,"rt":$n[1].RectTransform,"fg":"_0x3070e37e"},"fn":"_0x3070e37e"},{"a":1,"n":"_0x2c689f62","t":4,"rt":$n[1].RectTransform,"sn":"_0x2c689f62"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"landscapeData","t":4,"rt":$n[8]._0xda5e030f,"sn":"landscapeData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"portraitData","t":4,"rt":$n[8]._0xda5e030f,"sn":"portraitData"}]}; }, $n);
    /*SC.SCWebAdAdaptNode end.*/

    /*SC._0x0b275e47 start.*/
    $m("SC._0x0b275e47", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameEnd","t":8,"sn":"GameEnd","rt":$n[0].Void},{"a":2,"n":"GoDownload","t":8,"sn":"GoDownload","rt":$n[0].Void},{"a":2,"n":"OnJSCallback","t":8,"pi":[{"n":"_0xee17f505","pt":$n[0].String,"ps":0}],"sn":"OnJSCallback","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ResetStartDownloadTimer","t":8,"sn":"ResetStartDownloadTimer","rt":$n[0].Void},{"a":4,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":4,"n":"_0x0016dd0d","t":8,"sn":"_0x0016dd0d","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"_0x07d4f8b2","t":8,"sn":"_0x07d4f8b2","rt":$n[0].String},{"a":4,"n":"_0x1be12bff","t":8,"sn":"_0x1be12bff","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"_0x3104f99b","t":8,"sn":"_0x3104f99b","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0x423fe97e","t":8,"sn":"_0x423fe97e","rt":$n[0].Void},{"a":4,"n":"_0x4c5a3e79","t":8,"sn":"_0x4c5a3e79","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0x57c702d2","t":8,"sn":"_0x57c702d2","rt":$n[0].Void},{"a":4,"n":"_0x5dba4681","t":8,"sn":"_0x5dba4681","rt":$n[0].Void},{"a":1,"n":"_0x617df61b","is":true,"t":8,"sn":"_0x617df61b","rt":$n[0].Void},{"a":4,"n":"_0x9b35e2da","t":8,"sn":"_0x9b35e2da","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0xb6877402","is":true,"t":8,"sn":"_0xb6877402","rt":$n[0].Void},{"a":4,"n":"_0xd1f9d9fb","t":8,"pi":[{"n":"_0x153021fb","pt":$n[0].String,"ps":0}],"sn":"_0xd1f9d9fb","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"_0xe50a16b2","t":8,"sn":"_0xe50a16b2","rt":$n[0].Void},{"a":4,"n":"_0xf6b7e58d","t":8,"sn":"_0xf6b7e58d","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"_0xfb4bfef0","is":true,"t":8,"sn":"_0xfb4bfef0","rt":$n[0].String},{"a":2,"n":"_initJS","is":true,"t":8,"sn":"_initJS","rt":$n[0].String},{"a":2,"n":"_scGameStart","is":true,"t":8,"sn":"_scGameStart","rt":$n[0].Void},{"a":2,"n":"_sc_startGameLogic","t":8,"sn":"_sc_startGameLogic","rt":$n[0].Void},{"a":2,"n":"eCurRunType","is":true,"t":16,"rt":_0x5c9b0807,"g":{"a":2,"n":"get_eCurRunType","t":8,"rt":_0x5c9b0807,"fg":"eCurRunType","is":true,"box":function ($v) { return Bridge.box($v, _0x5c9b0807, System.Enum.toStringFn(_0x5c9b0807));}},"fn":"eCurRunType"},{"a":1,"n":"_0x2c92b556","t":4,"rt":$n[0].Boolean,"sn":"_0x2c92b556","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0x357bb2ba","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_0x357bb2ba","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0x588c6ec3","is":true,"t":4,"rt":$n[0].String,"sn":"_0x588c6ec3"},{"a":1,"n":"_0xa147425b","is":true,"t":4,"rt":$n[0].String,"sn":"_0xa147425b"},{"a":1,"n":"_0xbfbea8ea","is":true,"t":4,"rt":$n[0].String,"sn":"_0xbfbea8ea"},{"a":1,"n":"_0xda4b0623","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_0xda4b0623","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0xf1cfe009","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_0xf1cfe009","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bGameReady","is":true,"t":4,"rt":$n[0].Boolean,"sn":"bGameReady","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bPortrait","t":4,"rt":$n[0].Boolean,"sn":"bPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bWeb","is":true,"t":4,"rt":$n[0].Boolean,"sn":"bWeb","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"idleTime","t":4,"rt":$n[0].Single,"sn":"idleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"webGLLib","t":4,"rt":$n[8]._0xafe018ef,"sn":"webGLLib"},{"a":2,"n":"OnGameCloseAction","t":2,"ad":{"a":2,"n":"add_OnGameCloseAction","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameCloseAction","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameCloseAction","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameCloseAction","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGameEndAction","t":2,"ad":{"a":2,"n":"add_OnGameEndAction","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameEndAction","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameEndAction","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameEndAction","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnScreenOrientationChanged","t":2,"ad":{"a":2,"n":"add_OnScreenOrientationChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScreenOrientationChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScreenOrientationChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScreenOrientationChanged","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnStartGameLogic","t":2,"ad":{"a":2,"n":"add_OnStartGameLogic","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnStartGameLogic","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnStartGameLogic","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnStartGameLogic","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*SC._0x0b275e47 end.*/

    /*SC.sc start.*/
    $m("SC.sc", function () { return {"nested":[$n[8].sc.app,$n[8].sc.module,$n[8].sc._0xb1613693],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","is":true,"t":8,"pi":[{"n":"_0x1b29e726","pt":Function,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"WebAdConfig","is":true,"t":16,"rt":$n[8].WebAdConfig,"g":{"a":2,"n":"get_WebAdConfig","t":8,"rt":$n[8].WebAdConfig,"fg":"WebAdConfig","is":true},"fn":"WebAdConfig"},{"a":2,"n":"bEditor","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_bEditor","t":8,"rt":$n[0].Boolean,"fg":"bEditor","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"bEditor"},{"a":2,"n":"events","is":true,"t":16,"rt":$n[8]._0xd8ffff25,"g":{"a":2,"n":"get_events","t":8,"rt":$n[8]._0xd8ffff25,"fg":"events","is":true},"fn":"events"},{"a":2,"n":"instance","is":true,"t":16,"rt":$n[8]._0xbcb2c5eb,"g":{"a":2,"n":"get_instance","t":8,"rt":$n[8]._0xbcb2c5eb,"fg":"instance","is":true},"fn":"instance"},{"a":2,"n":"loom","is":true,"t":16,"rt":$n[8]._0xc807ab2c,"g":{"a":2,"n":"get_loom","t":8,"rt":$n[8]._0xc807ab2c,"fg":"loom","is":true},"fn":"loom"},{"a":2,"n":"web","is":true,"t":16,"rt":$n[8]._0x0b275e47,"g":{"a":2,"n":"get_web","t":8,"rt":$n[8]._0x0b275e47,"fg":"web","is":true},"fn":"web"},{"a":2,"n":"window","is":true,"t":16,"rt":$n[8].WindowCommon,"g":{"a":2,"n":"get_window","t":8,"rt":$n[8].WindowCommon,"fg":"window","is":true},"fn":"window"},{"a":2,"n":"BObfuscated","is":true,"t":4,"rt":$n[0].Boolean,"sn":"BObfuscated","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SDKVERSION","is":true,"t":4,"rt":$n[0].String,"sn":"SDKVERSION"},{"a":1,"n":"_0x23b88765","is":true,"t":4,"rt":$n[8]._0xd8ffff25,"sn":"_0x23b88765"},{"a":1,"n":"_0x697c4b84","is":true,"t":4,"rt":$n[8].WindowCommon,"sn":"_0x697c4b84"},{"a":1,"n":"_0x6c363c8e","is":true,"t":4,"rt":$n[8].WebAdConfig,"sn":"_0x6c363c8e"},{"a":1,"n":"_0x9f76fdb7","is":true,"t":4,"rt":$n[8]._0xc807ab2c,"sn":"_0x9f76fdb7"},{"a":1,"n":"_0xf00b8908","is":true,"t":4,"rt":$n[8]._0x0b275e47,"sn":"_0xf00b8908"},{"a":2,"n":"ad","is":true,"t":4,"rt":$n[8]._0xc8c6ac7c,"sn":"ad"},{"a":2,"n":"audio","is":true,"t":4,"rt":$n[8]._0xbd04323f,"sn":"audio"},{"a":2,"n":"channel","is":true,"t":4,"rt":$n[8]._0xb1611680,"sn":"channel"},{"a":2,"n":"check","is":true,"t":4,"rt":$n[8]._0x1aa07f01,"sn":"check"},{"a":2,"n":"config","is":true,"t":4,"rt":$n[8]._0xde080b51,"sn":"config"},{"a":2,"n":"debug","is":true,"t":4,"rt":$n[8]._0xf10be04f,"sn":"debug"},{"a":2,"n":"engine","is":true,"t":4,"rt":$n[8]._0x80279dc2,"sn":"engine"},{"a":2,"n":"image","is":true,"t":4,"rt":$n[8]._0xccb74242,"sn":"image"},{"a":2,"n":"language","is":true,"t":4,"rt":$n[8].LanguageCommon,"sn":"language"},{"a":2,"n":"load","is":true,"t":4,"rt":$n[8]._0xd3acda1a,"sn":"load"},{"a":2,"n":"localStorage","is":true,"t":4,"rt":$n[8]._0x44c7f1b7,"sn":"localStorage"},{"a":2,"n":"log","is":true,"t":4,"rt":$n[8]._0x9e4216fb,"sn":"log"},{"a":2,"n":"mobClick","is":true,"t":4,"rt":$n[8]._0x5467135e,"sn":"mobClick"},{"a":2,"n":"package","is":true,"t":4,"rt":$n[8]._0xb3912e6f,"sn":"package"},{"a":2,"n":"pay","is":true,"t":4,"rt":$n[8].PayCommon,"sn":"pay"},{"a":2,"n":"payEffect","is":true,"t":4,"rt":$n[8]._0x39ec3c9a,"sn":"payEffect"},{"a":2,"n":"prefab","is":true,"t":4,"rt":$n[8]._0x75d7d73c,"sn":"prefab"},{"a":2,"n":"scene","is":true,"t":4,"rt":$n[8]._0xe4b5de9a,"sn":"scene"},{"a":2,"n":"sdk","is":true,"t":4,"rt":$n[8].sc._0xb1613693,"sn":"sdk"},{"a":2,"n":"time","is":true,"t":4,"rt":$n[8]._0xbed9ceeb,"sn":"time"},{"a":2,"n":"ui","is":true,"t":4,"rt":$n[8]._0x243e2502,"sn":"ui"}]}; }, $n);
    /*SC.sc end.*/

    /*SC.sc+app start.*/
    $m("SC.sc.app", function () { return {"td":$n[8].sc,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"events","is":true,"t":16,"rt":$n[8]._0xf42a8601,"g":{"a":2,"n":"get_events","t":8,"rt":$n[8]._0xf42a8601,"fg":"events","is":true},"fn":"events"}]}; }, $n);
    /*SC.sc+app end.*/

    /*SC.sc+module start.*/
    $m("SC.sc.module", function () { return {"td":$n[8].sc,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"ins","is":true,"t":16,"rt":$n[8]._0x60d9f073,"g":{"a":2,"n":"get_ins","t":8,"rt":$n[8]._0x60d9f073,"fg":"ins","is":true},"fn":"ins"}]}; }, $n);
    /*SC.sc+module end.*/

    /*SC.sc+_0xb1613693 start.*/
    $m("SC.sc._0xb1613693", function () { return {"td":$n[8].sc,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnCommonOpportunity","t":8,"pi":[{"n":"_0x40a6f42a","pt":$n[0].String,"ps":0}],"sn":"OnCommonOpportunity","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"OnEnterGameSuccess","t":8,"sn":"OnEnterGameSuccess","rt":$n[0].Void},{"a":2,"n":"OnPluginGameEnd","t":8,"sn":"OnPluginGameEnd","rt":$n[0].Void},{"a":2,"n":"OnPluginGameStart","t":8,"sn":"OnPluginGameStart","rt":$n[0].Void}]}; }, $n);
    /*SC.sc+_0xb1613693 end.*/

    /*SC._0x44c7f1b7 start.*/
    $m("SC._0x44c7f1b7", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetObject","t":8,"pi":[{"n":"_0xab4d08d9","pt":$n[0].String,"ps":0},{"n":"_0x7997b65d","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x755b6d9f","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"tpc":1,"tprm":["T"],"sn":"GetObject","rt":System.Object,"p":[$n[0].String,$n[0].Object,$n[0].Boolean]},{"a":2,"n":"GetObject","t":8,"pi":[{"n":"_0xa7328d13","pt":$n[0].Type,"ps":0},{"n":"_0xda3f1ffc","pt":$n[0].String,"ps":1},{"n":"_0x61fed657","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x02434a32","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"GetObject$1","rt":$n[0].Object,"p":[$n[0].Type,$n[0].String,$n[0].Object,$n[0].Boolean]},{"a":2,"n":"HasKey","t":8,"pi":[{"n":"_0x63dd86fc","pt":$n[0].String,"ps":0}],"sn":"HasKey","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Remove","t":8,"pi":[{"n":"_0x19bf6a10","pt":$n[0].String,"ps":0}],"sn":"Remove","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"SetObject","t":8,"pi":[{"n":"_0xde7ae990","pt":$n[0].String,"ps":0},{"n":"_0xb751a0a8","pt":$n[0].Object,"ps":1},{"n":"_0xd5d0140b","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"SetObject","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Boolean]}]}; }, $n);
    /*SC._0x44c7f1b7 end.*/

    /*SC._0x9e4216fb start.*/
    $m("SC._0x9e4216fb", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Debug","t":8,"pi":[{"n":"_0x9ba4351e","pt":$n[0].Object,"ps":0}],"sn":"Debug","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"Dev","t":8,"pi":[{"n":"_0xca64e7c3","pt":$n[0].Object,"ps":0}],"sn":"Dev","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"Error","t":8,"pi":[{"n":"_0xd2428b14","pt":$n[0].Object,"ps":0}],"sn":"Error","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"Fatal","t":8,"pi":[{"n":"_0xe08510aa","pt":$n[0].String,"ps":0}],"sn":"Fatal","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Info","t":8,"pi":[{"n":"_0xc39a972d","pt":$n[0].String,"ps":0}],"sn":"Info","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Warning","t":8,"pi":[{"n":"_0x721011e9","pt":$n[0].Object,"ps":0}],"sn":"Warning","rt":$n[0].Void,"p":[$n[0].Object]},{"a":4,"n":"_0x284d8623","t":8,"pi":[{"n":"_0x2d2b5886","pt":$n[8]._0x5e3f4dc9,"ps":0},{"n":"_0x6192aaaa","pt":$n[0].String,"ps":1}],"sn":"_0x284d8623","rt":$n[0].Void,"p":[$n[8]._0x5e3f4dc9,$n[0].String]},{"a":1,"n":"_0x5b666d81","t":8,"pi":[{"n":"_0x819da778","pt":$n[8]._0x5e3f4dc9,"ps":0},{"n":"_0xeee3333b","pt":$n[0].Object,"ps":1}],"sn":"_0x5b666d81","rt":$n[0].Void,"p":[$n[8]._0x5e3f4dc9,$n[0].Object]}]}; }, $n);
    /*SC._0x9e4216fb end.*/

    /*SC._0x5e3f4dc9 start.*/
    $m("SC._0x5e3f4dc9", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x19f4bbf5","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0x19f4bbf5","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}},{"a":2,"n":"_0x1d17c8e2","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0x1d17c8e2","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}},{"a":2,"n":"_0x427224b3","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0x427224b3","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}},{"a":2,"n":"_0x6feca38d","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0x6feca38d","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}},{"a":2,"n":"_0x79f611af","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0x79f611af","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}},{"a":2,"n":"_0xa460a6cf","is":true,"t":4,"rt":$n[8]._0x5e3f4dc9,"sn":"_0xa460a6cf","box":function ($v) { return Bridge.box($v, SC._0x5e3f4dc9, System.Enum.toStringFn(SC._0x5e3f4dc9));}}]}; }, $n);
    /*SC._0x5e3f4dc9 end.*/

    /*SC._0xe4b5de9a start.*/
    $m("SC._0xe4b5de9a", function () { return {"nested":[$n[8]._0xe4b5de9a._0xf8fa6431],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadScene","t":8,"pi":[{"n":"_0x54679aef","pt":$n[0].Int32,"ps":0}],"sn":"LoadScene","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"LoadScene","t":8,"pi":[{"n":"_0x28fa5af8","pt":$n[0].String,"ps":0}],"sn":"LoadScene$2","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"LoadScene","t":8,"pi":[{"n":"_0x1eea0faa","pt":$n[0].Int32,"ps":0},{"n":"_0xf3a74b45","pt":$n[0].Object,"ps":1}],"sn":"LoadScene$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object]},{"a":2,"n":"LoadScene","t":8,"pi":[{"n":"_0x235b1cd2","pt":$n[0].String,"ps":0},{"n":"_0x727804d9","pt":$n[0].Object,"ps":1}],"sn":"LoadScene$3","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object]},{"a":2,"n":"UnloadScene","t":8,"pi":[{"n":"_0x8f5664e1","pt":$n[0].Int32,"ps":0}],"sn":"UnloadScene","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"UnloadScene","t":8,"pi":[{"n":"_0x973cb5e7","pt":$n[0].String,"ps":0}],"sn":"UnloadScene$1","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"UnloadScene","t":8,"pi":[{"n":"_0xd3f96f69","pt":LunaUnity.Objects.Scene,"ps":0}],"sn":"UnloadScene$3","rt":$n[0].Void,"p":[LunaUnity.Objects.Scene]},{"a":2,"n":"UnloadScene","t":8,"pi":[{"n":"_0x655f694c","pt":$n[0].String,"ps":0},{"n":"_0x21c39412","pt":$n[0].Object,"ps":1}],"sn":"UnloadScene$2","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object]},{"a":2,"n":"LoadMode","t":4,"rt":$n[10].LoadSceneMode,"sn":"LoadMode","box":function ($v) { return Bridge.box($v, UnityEngine.SceneManagement.LoadSceneMode, System.Enum.toStringFn(UnityEngine.SceneManagement.LoadSceneMode));}},{"a":2,"n":"LoadSceneSuccess","t":4,"rt":Function,"sn":"LoadSceneSuccess"}]}; }, $n);
    /*SC._0xe4b5de9a end.*/

    /*SC._0xe4b5de9a+_0xf8fa6431 start.*/
    $m("SC._0xe4b5de9a._0xf8fa6431", function () { return {"td":$n[8]._0xe4b5de9a,"att":1048581,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SC._0xe4b5de9a+_0xf8fa6431 end.*/

    /*SC._0xbd04323f start.*/
    $m("SC._0xbd04323f", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CloseMusic","t":8,"sn":"CloseMusic","rt":$n[0].Void},{"a":2,"n":"CloseSound","t":8,"sn":"CloseSound","rt":$n[0].Void},{"a":2,"n":"CloseSoundAndMusic","t":8,"sn":"CloseSoundAndMusic","rt":$n[0].Void},{"a":2,"n":"IsMusicOpen","t":8,"sn":"IsMusicOpen","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSoundAndMusicOpen","t":8,"sn":"IsSoundAndMusicOpen","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSoundOpen","t":8,"sn":"IsSoundOpen","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OpenMusic","t":8,"sn":"OpenMusic","rt":$n[0].Void},{"a":2,"n":"OpenSound","t":8,"sn":"OpenSound","rt":$n[0].Void},{"a":2,"n":"OpenSoundAndMusicOpen","t":8,"sn":"OpenSoundAndMusicOpen","rt":$n[0].Void},{"a":2,"n":"Pause","t":8,"pi":[{"n":"_0x9f3adcb8","pt":$n[0].String,"ps":0}],"sn":"Pause","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"PauseAll","t":8,"sn":"PauseAll","rt":$n[0].Void},{"a":2,"n":"Play","t":8,"pi":[{"n":"_0xc16d7d8b","pt":$n[0].String,"ps":0},{"n":"_0x85d951c2","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"_0x4afdef09","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"Play","rt":$n[0].Void,"p":[$n[0].String,$n[0].Boolean,Function]},{"a":2,"n":"Resume","t":8,"pi":[{"n":"_0x4bbfa408","pt":$n[0].String,"ps":0}],"sn":"Resume","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ResumeAll","t":8,"sn":"ResumeAll","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"pi":[{"n":"_0x20ddaf25","pt":$n[0].String,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"StopAll","is":true,"t":8,"sn":"StopAll","rt":$n[0].Void},{"a":1,"n":"_0xbdd1f5ec","is":true,"t":8,"pi":[{"n":"_0xac1a718c","pt":$n[1].AudioSource,"ps":0},{"n":"_0xa6bfd476","pt":Function,"ps":1},{"n":"_0x5ecfd96d","pt":$n[0].String,"ps":2}],"sn":"_0xbdd1f5ec","rt":$n[5].IEnumerator,"p":[$n[1].AudioSource,Function,$n[0].String]},{"a":1,"n":"_0xdd11a10d","is":true,"t":4,"rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.List$1(UnityEngine.AudioSource)),"sn":"_0xdd11a10d"}]}; }, $n);
    /*SC._0xbd04323f end.*/

    /*SC._0x9ef9d6a5 start.*/
    $m("SC._0x9ef9d6a5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartCor","is":true,"t":8,"pi":[{"n":"_0xc61ef8b6","pt":$n[5].IEnumerator,"ps":0}],"sn":"StartCor","rt":$n[0].Void,"p":[$n[5].IEnumerator]},{"a":1,"n":"_0xa8256155","is":true,"t":4,"rt":$n[8]._0x9ef9d6a5,"sn":"_0xa8256155"}]}; }, $n);
    /*SC._0x9ef9d6a5 end.*/

    /*SC.LanguageCommon start.*/
    $m("SC.LanguageCommon", function () { return {"nested":[$n[8].LanguageCommon.ELanguage],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Event","t":8,"sn":"Event","rt":$n[0].Void},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0xd15649ac","pt":$n[0].String,"ps":0}],"sn":"Get","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0x48c2a9fd","pt":$n[0].String,"ps":0},{"n":"_0xa13ef8ce","pt":System.Object,"ps":1}],"tpc":1,"tprm":["T"],"sn":"Get$1","rt":$n[0].String,"p":[$n[0].String,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0x9fcaef00","pt":$n[0].String,"ps":0},{"n":"_0x0bd3949e","pt":System.Object,"ps":1},{"n":"_0xf11bd728","pt":System.Object,"ps":2}],"tpc":2,"tprm":["T1","T2"],"sn":"Get$2","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0xa3c52e74","pt":$n[0].String,"ps":0},{"n":"_0xa9917e5b","pt":System.Object,"ps":1},{"n":"_0x56160f13","pt":System.Object,"ps":2},{"n":"_0xdfb711e2","pt":System.Object,"ps":3}],"tpc":3,"tprm":["T1","T2","T3"],"sn":"Get$3","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0x5f0a3e1c","pt":$n[0].String,"ps":0},{"n":"_0x333e9443","pt":System.Object,"ps":1},{"n":"_0x2b4d2a18","pt":System.Object,"ps":2},{"n":"_0x865900cc","pt":System.Object,"ps":3},{"n":"_0xd6141f0f","pt":System.Object,"ps":4}],"tpc":4,"tprm":["T1","T2","T3","T4"],"sn":"Get$4","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object,System.Object,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0xd67f008f","pt":$n[0].String,"ps":0},{"n":"_0xb6595910","pt":System.Object,"ps":1},{"n":"_0x31603d9b","pt":System.Object,"ps":2},{"n":"_0x000be106","pt":System.Object,"ps":3},{"n":"_0x1d14ae21","pt":System.Object,"ps":4},{"n":"_0x03d6a338","pt":System.Object,"ps":5}],"tpc":5,"tprm":["T1","T2","T3","T4","T5"],"sn":"Get$5","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object,System.Object,System.Object,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0xd453b0b8","pt":$n[0].String,"ps":0},{"n":"_0xd1832877","pt":System.Object,"ps":1},{"n":"_0x96967421","pt":System.Object,"ps":2},{"n":"_0xe75e5d0c","pt":System.Object,"ps":3},{"n":"_0xd27475b8","pt":System.Object,"ps":4},{"n":"_0xc7de65cc","pt":System.Object,"ps":5},{"n":"_0x13df1d2d","pt":System.Object,"ps":6}],"tpc":6,"tprm":["T1","T2","T3","T4","T5","T6"],"sn":"Get$6","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object,System.Object,System.Object,System.Object,System.Object]},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0xa62cb4b4","pt":$n[0].String,"ps":0},{"n":"_0x3e10da3c","pt":System.Object,"ps":1},{"n":"_0x1a339d63","pt":System.Object,"ps":2},{"n":"_0xbbb0e9b3","pt":System.Object,"ps":3},{"n":"_0x2db1fd95","pt":System.Object,"ps":4},{"n":"_0x518f871c","pt":System.Object,"ps":5},{"n":"_0xc37ada52","pt":System.Object,"ps":6},{"n":"_0x07292a80","pt":System.Object,"ps":7}],"tpc":7,"tprm":["T1","T2","T3","T4","T5","T6","T7"],"sn":"Get$7","rt":$n[0].String,"p":[$n[0].String,System.Object,System.Object,System.Object,System.Object,System.Object,System.Object,System.Object]},{"a":2,"n":"GetCurLanguageIdx","is":true,"t":8,"sn":"GetCurLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetCustomLanguage","t":8,"sn":"GetCustomLanguage","rt":$n[0].String},{"a":2,"n":"GetCustomLanguageIdx","t":8,"sn":"GetCustomLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetCustomLanguage","t":8,"pi":[{"n":"_0xe3f8c84d","pt":$n[0].String,"ps":0}],"sn":"SetCustomLanguage","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"_0x97673d43","t":8,"pi":[{"n":"_0x2e82ad5c","pt":$n[0].String,"ps":0}],"sn":"_0x97673d43","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"lDefLanguage","is":true,"t":16,"rt":$n[0].Array.type(System.String),"g":{"a":2,"n":"get_lDefLanguage","t":8,"rt":$n[0].Array.type(System.String),"fg":"lDefLanguage","is":true},"fn":"lDefLanguage"},{"a":2,"n":"EventType","t":4,"rt":$n[11]._0x2913d22d,"sn":"EventType"},{"a":2,"n":"OnLocalizeChange","t":4,"rt":Function,"sn":"OnLocalizeChange"}]}; }, $n);
    /*SC.LanguageCommon end.*/

    /*SC.LanguageCommon+ELanguage start.*/
    $m("SC.LanguageCommon.ELanguage", function () { return {"td":$n[8].LanguageCommon,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Chinese","is":true,"t":4,"rt":$n[8].LanguageCommon.ELanguage,"sn":"Chinese","box":function ($v) { return Bridge.box($v, SC.LanguageCommon.ELanguage, System.Enum.toStringFn(SC.LanguageCommon.ELanguage));}},{"a":2,"n":"English","is":true,"t":4,"rt":$n[8].LanguageCommon.ELanguage,"sn":"English","box":function ($v) { return Bridge.box($v, SC.LanguageCommon.ELanguage, System.Enum.toStringFn(SC.LanguageCommon.ELanguage));}}]}; }, $n);
    /*SC.LanguageCommon+ELanguage end.*/

    /*SC._0xde080b51 start.*/
    $m("SC._0xde080b51", function () { return {"nested":[$n[8]._0xde080b51._0x7f802bc6],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetColumn","t":8,"pi":[{"n":"_0x3556da2f","pt":$n[0].String,"ps":0},{"n":"_0x19d91ef4","pt":$n[0].String,"ps":1},{"n":"_0x0db0289c","pt":$n[0].String,"ps":2}],"sn":"GetColumn$1","rt":$n[0].Object,"p":[$n[0].String,$n[0].String,$n[0].String]},{"a":2,"n":"GetColumn","t":8,"pi":[{"n":"_0x1aaa7a23","pt":$n[0].String,"ps":0},{"n":"_0xfd5a158e","pt":$n[0].String,"ps":1},{"n":"_0x0d005dc6","pt":$n[0].String,"ps":2}],"tpc":1,"tprm":["T"],"sn":"GetColumn","rt":System.Object,"p":[$n[0].String,$n[0].String,$n[0].String]},{"a":2,"n":"GetList","t":8,"pi":[{"n":"_0xd0b754f6","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetList","rt":$n[2].List$1(System.Object),"p":[$n[0].String]},{"a":2,"n":"GetList","t":8,"pi":[{"n":"_0xffbfebbb","pt":$n[0].String,"ps":0},{"n":"_0x7009c08e","pt":$n[0].Type,"ps":1}],"sn":"GetList$1","rt":$n[2].List$1(System.Object),"p":[$n[0].String,$n[0].Type]},{"a":2,"n":"GetRow","t":8,"pi":[{"n":"_0xef18f7fb","pt":$n[0].String,"ps":0},{"n":"_0x47f48991","pt":$n[0].String,"ps":1}],"sn":"GetRow$2","rt":$n[0].Object,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"GetRow","t":8,"pi":[{"n":"_0xcd457bf4","pt":$n[0].String,"ps":0},{"n":"_0x523c0455","pt":$n[0].String,"ps":1}],"tpc":1,"tprm":["T"],"sn":"GetRow$1","rt":System.Object,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"GetRow","t":8,"pi":[{"n":"_0x89df1f66","pt":$n[0].String,"ps":0},{"n":"_0x1c93648d","pt":$n[0].String,"ps":1},{"n":"_0xa7e3c2a5","pt":$n[0].Type,"ps":2}],"tpc":1,"tprm":["T"],"sn":"GetRow","rt":System.Object,"p":[$n[0].String,$n[0].String,$n[0].Type]},{"a":2,"n":"GetTable","t":8,"pi":[{"n":"_0xda5db7f0","pt":$n[0].String,"ps":0}],"sn":"GetTable","rt":$n[0].Object,"p":[$n[0].String]},{"a":2,"n":"IsExistTable","t":8,"pi":[{"n":"_0x103d4cfb","pt":$n[0].String,"ps":0}],"sn":"IsExistTable","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Refresh","t":8,"sn":"Refresh","rt":$n[0].Void},{"a":1,"n":"_0x139f2bc2","t":8,"sn":"_0x139f2bc2","rt":$n[0].Void},{"a":1,"n":"_0xd058b242","t":16,"rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object))),"g":{"a":1,"n":"get__0xd058b242","t":8,"rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object))),"fg":"_0xd058b242"},"fn":"_0xd058b242"},{"a":1,"n":"_0x1de9d89e","t":4,"rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object))),"sn":"_0x1de9d89e"},{"a":1,"n":"_0xd495fc77","is":true,"t":4,"rt":$n[0].String,"sn":"_0xd495fc77"}]}; }, $n);
    /*SC._0xde080b51 end.*/

    /*SC._0xde080b51+_0x7f802bc6 start.*/
    $m("SC._0xde080b51._0x7f802bc6", function () { return {"td":$n[8]._0xde080b51,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x29062255","is":true,"t":4,"rt":$n[8]._0xde080b51._0x7f802bc6,"sn":"_0x29062255","box":function ($v) { return Bridge.box($v, SC._0xde080b51._0x7f802bc6, System.Enum.toStringFn(SC._0xde080b51._0x7f802bc6));}},{"a":2,"n":"_0x2ebeaef5","is":true,"t":4,"rt":$n[8]._0xde080b51._0x7f802bc6,"sn":"_0x2ebeaef5","box":function ($v) { return Bridge.box($v, SC._0xde080b51._0x7f802bc6, System.Enum.toStringFn(SC._0xde080b51._0x7f802bc6));}}]}; }, $n);
    /*SC._0xde080b51+_0x7f802bc6 end.*/

    /*SC._0xd8ffff25 start.*/
    $m("SC._0xd8ffff25", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Check","t":8,"pi":[{"n":"_0x610531cb","pt":$n[0].String,"ps":0},{"n":"_0x5d6cbf39","pt":Function,"ps":1}],"sn":"Check","rt":$n[0].Boolean,"p":[$n[0].String,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Count","t":8,"pi":[{"n":"_0x90813747","pt":$n[0].String,"ps":0}],"sn":"Count","rt":$n[0].Int32,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Event","t":8,"pi":[{"n":"_0x46e5a7d0","pt":$n[8].SCEventArgs,"ps":0}],"sn":"Event","rt":$n[0].Void,"p":[$n[8].SCEventArgs]},{"a":2,"n":"Event","t":8,"pi":[{"n":"_0xbcc1c457","pt":$n[0].String,"ps":0},{"n":"_0xa5eb9873","pt":$n[8].SCEventArgs,"ps":1}],"sn":"Event$1","rt":$n[0].Void,"p":[$n[0].String,$n[8].SCEventArgs]},{"a":2,"n":"Event","t":8,"pi":[{"n":"_0xa3ca747f","pt":$n[0].String,"ps":0},{"n":"_0x40f4e5b4","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x3d5ccaf9","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x7f3ba858","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"_0xa358273d","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"_0x51829309","dv":null,"o":true,"pt":$n[0].Object,"ps":5}],"sn":"Event$2","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"EventNow","t":8,"pi":[{"n":"_0x9443da82","pt":$n[8].SCEventArgs,"ps":0}],"sn":"EventNow","rt":$n[0].Void,"p":[$n[8].SCEventArgs]},{"a":2,"n":"EventNow","t":8,"pi":[{"n":"_0xc1f921a1","pt":$n[0].String,"ps":0},{"n":"_0x61a991ef","pt":$n[0].Object,"ps":1},{"n":"_0xf5b1667e","pt":$n[0].Object,"ps":2},{"n":"_0xe567212f","pt":$n[0].Object,"ps":3},{"n":"_0x16d9e1d1","pt":$n[0].Object,"ps":4},{"n":"_0x71ec6c75","pt":$n[0].Object,"ps":5}],"sn":"EventNow$1","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"Off","t":8,"pi":[{"n":"_0xfe450af3","pt":$n[0].String,"ps":0},{"n":"_0x9dad3b5e","pt":Function,"ps":1}],"sn":"Off","rt":$n[0].Void,"p":[$n[0].String,Function]},{"a":2,"n":"On","t":8,"pi":[{"n":"_0x6bf70b7a","pt":$n[0].String,"ps":0},{"n":"_0xe2e07b00","pt":Function,"ps":1}],"sn":"On","rt":$n[0].Void,"p":[$n[0].String,Function]},{"a":2,"n":"SetDefaultHandler","t":8,"pi":[{"n":"_0xe500354c","pt":Function,"ps":0}],"sn":"SetDefaultHandler","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"EventType","t":4,"rt":$n[11]._0x69d68f1a,"sn":"EventType"},{"a":1,"n":"_0xaf8bd9a6","t":4,"rt":$n[2].Dictionary$2(System.String,Function),"sn":"_0xaf8bd9a6","ro":true},{"a":2,"n":"iEventCount","t":4,"rt":$n[0].Int32,"sn":"iEventCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"iEventHandlerCount","t":4,"rt":$n[0].Int32,"sn":"iEventHandlerCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xd8ffff25 end.*/

    /*SC.WindowNotify start.*/
    $m("SC.WindowNotify", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Hide","t":8,"pi":[{"n":"_0xaad38028","dv":null,"o":true,"pt":$n[0].Object,"ps":0}],"sn":"Hide","rt":$n[0].Void,"p":[$n[0].Object]},{"v":true,"a":3,"n":"onClick_BtnClose","t":8,"sn":"onClick_BtnClose","rt":$n[0].Void}]}; }, $n);
    /*SC.WindowNotify end.*/

    /*SC.WindowLogic start.*/
    $m("SC.WindowLogic", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Hide","t":8,"pi":[{"n":"_0x43f0c5d8","dv":null,"o":true,"pt":$n[0].Object,"ps":0}],"sn":"Hide","rt":$n[0].Void,"p":[$n[0].Object]},{"v":true,"a":2,"n":"Hide","t":8,"pi":[{"n":"_0xae420eaf","pt":$n[0].Object,"ps":0},{"n":"_0x0aaef2bc","pt":$n[0].Boolean,"ps":1}],"sn":"Hide$1","rt":$n[0].Void,"p":[$n[0].Object,$n[0].Boolean]},{"v":true,"a":2,"n":"OnHide","t":8,"sn":"OnHide","rt":$n[0].Void},{"v":true,"a":2,"n":"OnHide","t":8,"pi":[{"n":"_0x7f117f7c","dv":null,"o":true,"pt":$n[0].Object,"ps":0}],"sn":"OnHide$1","rt":$n[0].Void,"p":[$n[0].Object]},{"v":true,"a":2,"n":"OnInit","t":8,"pi":[{"n":"_0x9cfd58b6","pt":$n[0].Object,"ps":0}],"sn":"OnInit","rt":$n[0].Void,"p":[$n[0].Object]},{"v":true,"a":2,"n":"OnRecycle","t":8,"sn":"OnRecycle","rt":$n[0].Void},{"v":true,"a":2,"n":"OnShow","t":8,"pi":[{"n":"_0x2dba71d1","pt":$n[0].Object,"ps":0}],"sn":"OnShow","rt":$n[0].Void,"p":[$n[0].Object]},{"v":true,"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"_0x1f65cefc","pt":$n[0].Single,"ps":0},{"n":"_0xf3b5a33f","pt":$n[0].Single,"ps":1}],"sn":"OnUpdate","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"ov":true,"a":2,"n":"SCAwake","t":8,"sn":"SCAwake","rt":$n[0].Void},{"ov":true,"a":2,"n":"SCOnDestroy","t":8,"sn":"SCOnDestroy","rt":$n[0].Void},{"ov":true,"a":2,"n":"SCOnEnable","t":8,"sn":"SCOnEnable","rt":$n[0].Void}]}; }, $n);
    /*SC.WindowLogic end.*/

    /*SC.WindowCommon start.*/
    $m("SC.WindowCommon", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddUICanvas","t":8,"sn":"AddUICanvas","rt":$n[0].Void},{"a":2,"n":"CloseAllLoadingWindowForms","t":8,"sn":"CloseAllLoadingWindowForms","rt":$n[0].Void},{"a":2,"n":"GetWindowConfig","t":8,"pi":[{"n":"_0x82cd2294","pt":$n[0].String,"ps":0}],"sn":"GetWindowConfig","rt":$n[7].WindowTable,"p":[$n[0].String]},{"a":2,"n":"GetWindowForm","t":8,"pi":[{"n":"_0xc0d9ebd0","pt":$n[0].Int32,"ps":0}],"sn":"GetWindowForm","rt":$n[8]._0x62a5bf4d,"p":[$n[0].Int32]},{"a":2,"n":"GetWindowForm","t":8,"pi":[{"n":"_0x206d2554","pt":$n[0].String,"ps":0}],"sn":"GetWindowForm$1","rt":$n[8]._0x62a5bf4d,"p":[$n[0].String]},{"a":2,"n":"HideWindow","t":8,"pi":[{"n":"_0xa38d467f","pt":$n[0].String,"ps":0}],"sn":"HideWindow","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ShowWindow","t":8,"pi":[{"n":"_0x74664861","pt":$n[0].String,"ps":0},{"n":"_0x267b99c2","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"ShowWindow","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object]},{"a":1,"n":"_0xe6dc252a","t":8,"pi":[{"n":"_0x181cc94f","pt":$n[0].String,"ps":0}],"sn":"_0xe6dc252a","rt":$n[1].GameObject,"p":[$n[0].String]},{"a":2,"n":"CloseUIFormComplete","t":4,"rt":Function,"sn":"CloseUIFormComplete"},{"a":2,"n":"OpenUIFormFailure","t":4,"rt":Function,"sn":"OpenUIFormFailure"},{"a":2,"n":"OpenUIFormSuccess","t":4,"rt":Function,"sn":"OpenUIFormSuccess"},{"a":2,"n":"OpenUIFormUpdate","t":4,"rt":Function,"sn":"OpenUIFormUpdate"},{"a":1,"n":"_0x901c3e4a","t":4,"rt":$n[2].Dictionary$2(System.String,UnityEngine.GameObject),"sn":"_0x901c3e4a"},{"a":1,"n":"_0xe21c6023","t":4,"rt":$n[1].Transform,"sn":"_0xe21c6023"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"},{"a":2,"n":"winPool_AutoReleaseInterval","t":4,"rt":$n[0].Single,"sn":"winPool_AutoReleaseInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"winPool_Capacity","t":4,"rt":$n[0].Int32,"sn":"winPool_Capacity","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC.WindowCommon end.*/

    /*SC._0x07092f78 start.*/
    $m("SC._0x07092f78", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8]._0x62a5bf4d,$n[0].Single,$n[0].Object],"pi":[{"n":"_0xfc0f1af1","pt":$n[8]._0x62a5bf4d,"ps":0},{"n":"_0x8672df55","pt":$n[0].Single,"ps":1},{"n":"_0x9849b067","pt":$n[0].Object,"ps":2}],"sn":"ctor"},{"a":2,"n":"Duration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Duration","t":8,"rt":$n[0].Single,"fg":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Duration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Duration"},"fn":"Duration"},{"a":2,"n":"Form","t":16,"rt":$n[8]._0x62a5bf4d,"g":{"a":2,"n":"get_Form","t":8,"rt":$n[8]._0x62a5bf4d,"fg":"Form"},"s":{"a":1,"n":"set_Form","t":8,"p":[$n[8]._0x62a5bf4d],"rt":$n[0].Void,"fs":"Form"},"fn":"Form"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<Duration>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Form>k__BackingField","t":4,"rt":$n[8]._0x62a5bf4d,"sn":"Form"},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0x07092f78 end.*/

    /*SC._0xf0a09606 start.*/
    $m("SC._0xf0a09606", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].String,$n[0].String,$n[0].Object],"pi":[{"n":"_0xfc991859","pt":$n[0].Int32,"ps":0},{"n":"_0xdb1ac10b","pt":$n[0].String,"ps":1},{"n":"_0xe9445143","pt":$n[0].String,"ps":2},{"n":"_0x449f055e","pt":$n[0].Object,"ps":3}],"sn":"ctor"},{"a":2,"n":"ErrorMessage","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_ErrorMessage","t":8,"rt":$n[0].String,"fg":"ErrorMessage"},"s":{"a":1,"n":"set_ErrorMessage","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"ErrorMessage"},"fn":"ErrorMessage"},{"a":2,"n":"Path","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Path","t":8,"rt":$n[0].String,"fg":"Path"},"s":{"a":1,"n":"set_Path","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Path"},"fn":"Path"},{"a":2,"n":"SerialId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SerialId","t":8,"rt":$n[0].Int32,"fg":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_SerialId","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"SerialId"},"fn":"SerialId"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<ErrorMessage>k__BackingField","t":4,"rt":$n[0].String,"sn":"ErrorMessage"},{"a":1,"backing":true,"n":"<Path>k__BackingField","t":4,"rt":$n[0].String,"sn":"Path"},{"a":1,"backing":true,"n":"<SerialId>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0xf0a09606 end.*/

    /*SC._0x6948b53b start.*/
    $m("SC._0x6948b53b", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Path","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Path","t":8,"rt":$n[0].String,"fg":"Path"},"s":{"a":1,"n":"set_Path","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Path"},"fn":"Path"},{"a":2,"n":"Progress","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Progress","t":8,"rt":$n[0].Single,"fg":"Progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Progress","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Progress"},"fn":"Progress"},{"a":2,"n":"SerialId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SerialId","t":8,"rt":$n[0].Int32,"fg":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_SerialId","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"SerialId"},"fn":"SerialId"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<Path>k__BackingField","t":4,"rt":$n[0].String,"sn":"Path"},{"a":1,"backing":true,"n":"<Progress>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<SerialId>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0x6948b53b end.*/

    /*SC.HideWindowCompleteEventArgs start.*/
    $m("SC.HideWindowCompleteEventArgs", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Path","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Path","t":8,"rt":$n[0].String,"fg":"Path"},"s":{"a":1,"n":"set_Path","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Path"},"fn":"Path"},{"a":2,"n":"SerialId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_SerialId","t":8,"rt":$n[0].Int32,"fg":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_SerialId","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"SerialId"},"fn":"SerialId"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<Path>k__BackingField","t":4,"rt":$n[0].String,"sn":"Path"},{"a":1,"backing":true,"n":"<SerialId>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC.HideWindowCompleteEventArgs end.*/

    /*SC.SCEventArgs start.*/
    $m("SC.SCEventArgs", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Create","is":true,"t":8,"pi":[{"n":"_0x5e56c225","dv":null,"o":true,"pt":$n[0].Object,"ps":0},{"n":"_0x88363958","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x95c8845a","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x7b837dd8","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"_0x9b59b43a","dv":null,"o":true,"pt":$n[0].Object,"ps":4}],"sn":"Create","rt":$n[8].SCEventArgs,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"CreateAndID","is":true,"t":8,"pi":[{"n":"_0xb62b0881","pt":$n[0].String,"ps":0},{"n":"_0xb8085b16","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x70e9d680","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x1a3af272","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"_0x591dede4","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"_0xe0df137f","dv":null,"o":true,"pt":$n[0].Object,"ps":5}],"sn":"CreateAndID","rt":$n[8].SCEventArgs,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"FiveData","t":8,"tpc":1,"tprm":["T"],"sn":"FiveData","rt":System.Object},{"a":2,"n":"FourData","t":8,"tpc":1,"tprm":["T"],"sn":"FourData","rt":System.Object},{"a":2,"n":"OneData","t":8,"tpc":1,"tprm":["T"],"sn":"OneData","rt":System.Object},{"a":2,"n":"ThreeData","t":8,"tpc":1,"tprm":["T"],"sn":"ThreeData","rt":System.Object},{"a":2,"n":"TwoData","t":8,"tpc":1,"tprm":["T"],"sn":"TwoData","rt":System.Object},{"v":true,"a":3,"n":"_0x52eafe07","t":8,"pi":[{"n":"_0x3eafbf09","dv":null,"o":true,"pt":$n[0].Object,"ps":0},{"n":"_0xd5e9ad19","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x9b29ef56","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x9cbeb3e4","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"_0x58394439","dv":null,"o":true,"pt":$n[0].Object,"ps":4}],"sn":"_0x52eafe07","rt":$n[0].Void,"p":[$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"Id","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[0].String,"fg":"Id"},"fn":"Id"},{"a":4,"n":"_0x851e0ab9","t":16,"rt":$n[0].Object,"g":{"a":4,"n":"get__0x851e0ab9","t":8,"rt":$n[0].Object,"fg":"_0x851e0ab9"},"s":{"a":4,"n":"set__0x851e0ab9","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"_0x851e0ab9"},"fn":"_0x851e0ab9"},{"a":4,"n":"_0x86b0d058","t":16,"rt":$n[0].Object,"g":{"a":4,"n":"get__0x86b0d058","t":8,"rt":$n[0].Object,"fg":"_0x86b0d058"},"s":{"a":4,"n":"set__0x86b0d058","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"_0x86b0d058"},"fn":"_0x86b0d058"},{"a":4,"n":"_0x8f0aba03","t":16,"rt":$n[0].Object,"g":{"a":4,"n":"get__0x8f0aba03","t":8,"rt":$n[0].Object,"fg":"_0x8f0aba03"},"s":{"a":4,"n":"set__0x8f0aba03","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"_0x8f0aba03"},"fn":"_0x8f0aba03"},{"a":4,"n":"_0x954380b4","t":16,"rt":$n[0].Object,"g":{"a":4,"n":"get__0x954380b4","t":8,"rt":$n[0].Object,"fg":"_0x954380b4"},"s":{"a":4,"n":"set__0x954380b4","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"_0x954380b4"},"fn":"_0x954380b4"},{"a":4,"n":"_0xc4143096","t":16,"rt":$n[0].Object,"g":{"a":4,"n":"get__0xc4143096","t":8,"rt":$n[0].Object,"fg":"_0xc4143096"},"s":{"a":4,"n":"set__0xc4143096","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"_0xc4143096"},"fn":"_0xc4143096"},{"a":4,"n":"_0xb0d3dfe8","t":4,"rt":$n[0].String,"sn":"_0xb0d3dfe8"},{"a":1,"backing":true,"n":"<_0x851e0ab9>k__BackingField","t":4,"rt":$n[0].Object,"sn":"_0x851e0ab9"},{"a":1,"backing":true,"n":"<_0x86b0d058>k__BackingField","t":4,"rt":$n[0].Object,"sn":"_0x86b0d058"},{"a":1,"backing":true,"n":"<_0x8f0aba03>k__BackingField","t":4,"rt":$n[0].Object,"sn":"_0x8f0aba03"},{"a":1,"backing":true,"n":"<_0x954380b4>k__BackingField","t":4,"rt":$n[0].Object,"sn":"_0x954380b4"},{"a":1,"backing":true,"n":"<_0xc4143096>k__BackingField","t":4,"rt":$n[0].Object,"sn":"_0xc4143096"}]}; }, $n);
    /*SC.SCEventArgs end.*/

    /*SC._0x62a5bf4d start.*/
    $m("SC._0x62a5bf4d", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsReleaseByRecycle","t":8,"sn":"IsReleaseByRecycle","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnClose","t":8,"pi":[{"n":"isShutdown","pt":$n[0].Boolean,"ps":0},{"n":"_0x6ac50225","pt":$n[0].Object,"ps":1}],"sn":"OnClose","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Object]},{"a":2,"n":"OnDepthChanged","t":8,"pi":[{"n":"groupDepth","pt":$n[0].Int32,"ps":0},{"n":"_0x350610f5","pt":$n[0].Int32,"ps":1}],"sn":"OnDepthChanged","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"OnInit","t":8,"pi":[{"n":"serialId","pt":$n[0].Int32,"ps":0},{"n":"path","pt":$n[0].String,"ps":1},{"n":"tableData","pt":$n[7].WindowTable,"ps":2},{"n":"isNewInstance","pt":$n[0].Boolean,"ps":3},{"n":"_0xc8f9b7ad","pt":$n[0].Object,"ps":4}],"sn":"OnInit","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].String,$n[7].WindowTable,$n[0].Boolean,$n[0].Object]},{"a":2,"n":"OnOpen","t":8,"pi":[{"n":"_0xfef4bcfd","pt":$n[0].Object,"ps":0}],"sn":"OnOpen","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"OnRecycle","t":8,"sn":"OnRecycle","rt":$n[0].Void},{"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"elapseSeconds","pt":$n[0].Single,"ps":0},{"n":"_0xef876dd0","pt":$n[0].Single,"ps":1}],"sn":"OnUpdate","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Handle","t":4,"rt":$n[0].Object,"sn":"Handle"},{"a":2,"n":"Logic","t":4,"rt":$n[8].WindowLogic,"sn":"Logic"},{"a":2,"n":"OtherData","t":4,"rt":$n[0].Object,"sn":"OtherData"},{"a":2,"n":"Path","t":4,"rt":$n[0].String,"sn":"Path"},{"a":2,"n":"SerialId","t":4,"rt":$n[0].Int32,"sn":"SerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TableData","t":4,"rt":$n[7].WindowTable,"sn":"TableData"}]}; }, $n);
    /*SC._0x62a5bf4d end.*/

    /*SC.BaseNode start.*/
    $m("SC.BaseNode", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":3,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"v":true,"a":2,"n":"SCAwake","t":8,"sn":"SCAwake","rt":$n[0].Void},{"v":true,"a":2,"n":"SCOnDestroy","t":8,"sn":"SCOnDestroy","rt":$n[0].Void},{"v":true,"a":2,"n":"SCOnDisable","t":8,"sn":"SCOnDisable","rt":$n[0].Void},{"v":true,"a":2,"n":"SCOnEnable","t":8,"sn":"SCOnEnable","rt":$n[0].Void},{"v":true,"a":2,"n":"SCStart","t":8,"sn":"SCStart","rt":$n[0].Void},{"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"v":true,"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*SC.BaseNode end.*/

    /*SC.IReference start.*/
    $m("SC.IReference", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Clear","t":8,"sn":"SC$IReference$Clear","rt":$n[0].Void}]}; }, $n);
    /*SC.IReference end.*/

    /*SC.Singleton$1 start.*/
    $m("SC.Singleton$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":8,"sn":"Instance","rt":T},{"v":true,"a":4,"n":"_0x6e4aea2b","t":8,"sn":"_0x6e4aea2b","rt":$n[0].Void},{"v":true,"a":3,"n":"_0xb16ed87b","t":16,"rt":$n[0].Boolean,"g":{"v":true,"a":3,"n":"get__0xb16ed87b","t":8,"rt":$n[0].Boolean,"fg":"_0xb16ed87b","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"_0xb16ed87b"},{"a":2,"n":"instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_instance","t":8,"rt":T,"fg":"instance","is":true},"fn":"instance"},{"a":3,"n":"_0x5ab83225","is":true,"t":4,"rt":T,"sn":"_0x5ab83225"},{"a":1,"n":"_0x83bbe84b","is":true,"t":4,"rt":$n[0].Object,"sn":"_0x83bbe84b","ro":true}]}; }, $n);
    /*SC.Singleton$1 end.*/

    /*SC._0xeb7b2e5c start.*/
    $m("SC._0xeb7b2e5c", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DestroyAllChildren","is":true,"t":8,"pi":[{"n":"_0xdfa59693","pt":$n[1].GameObject,"ps":0}],"sn":"DestroyAllChildren","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"FindObjectOfTypeInc","is":true,"t":8,"pi":[{"n":"_0xe9698453","pt":$n[0].Boolean,"ps":0}],"tpc":1,"tprm":["T"],"sn":"FindObjectOfTypeInc","rt":System.Object,"p":[$n[0].Boolean]},{"a":2,"n":"FindObjectOfTypeInc","is":true,"t":8,"pi":[{"n":"_0x6bb2a779","pt":$n[0].Type,"ps":0},{"n":"_0x36b2a3e7","pt":$n[0].Boolean,"ps":1}],"sn":"FindObjectOfTypeInc$1","rt":$n[1].Object,"p":[$n[0].Type,$n[0].Boolean]},{"a":2,"n":"GetOrAddComponent","is":true,"t":8,"pi":[{"n":"_0x53f56737","pt":$n[1].GameObject,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetOrAddComponent","rt":System.Object,"p":[$n[1].GameObject]},{"a":2,"n":"SetLabelValue","is":true,"t":8,"pi":[{"n":"_0x47430f7f","pt":$n[1].Component,"ps":0},{"n":"_0x165e5871","pt":$n[0].String,"ps":1},{"n":"_0x597b7d56","ip":true,"pt":$n[0].Array.type(System.Object),"ps":2}],"sn":"SetLabelValue","rt":$n[0].Void,"p":[$n[1].Component,$n[0].String,$n[0].Array.type(System.Object)]},{"a":2,"n":"SetLayerRecursively","is":true,"t":8,"pi":[{"n":"_0x910958ab","pt":$n[1].GameObject,"ps":0},{"n":"_0x689f4e5e","pt":$n[0].Int32,"ps":1}],"sn":"SetLayerRecursively","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"setLabelValue","is":true,"t":8,"pi":[{"n":"_0x516ca394","pt":$n[3].Text,"ps":0},{"n":"_0xa8b465c6","pt":$n[0].String,"ps":1},{"n":"_0xdacbd683","ip":true,"pt":$n[0].Array.type(System.Object),"ps":2}],"sn":"setLabelValue","rt":$n[0].Void,"p":[$n[3].Text,$n[0].String,$n[0].Array.type(System.Object)]},{"a":2,"n":"SBuiltFontName","is":true,"t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_SBuiltFontName","t":8,"rt":$n[0].String,"fg":"SBuiltFontName","is":true},"fn":"SBuiltFontName"},{"a":1,"n":"_0xc9f8a974","is":true,"t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"_0xc9f8a974"}]}; }, $n);
    /*SC._0xeb7b2e5c end.*/

    /*SC._0xafe018ef start.*/
    $m("SC._0xafe018ef", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":2,"n":"GetCustomLanguageIdx","t":8,"sn":"GetCustomLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ab":true,"a":2,"n":"scDoJSFun","t":8,"pi":[{"n":"_0xf78fce4e","pt":$n[0].String,"ps":0}],"sn":"scDoJSFun","rt":$n[0].String,"p":[$n[0].String]},{"ab":true,"a":2,"n":"scDownloadCallBack","t":8,"sn":"scDownloadCallBack","rt":$n[0].Void},{"ab":true,"a":2,"n":"scGameEnd","t":8,"sn":"scGameEnd","rt":$n[0].Void},{"ab":true,"a":2,"n":"scGameReady","t":8,"sn":"scGameReady","rt":$n[0].Void},{"ab":true,"a":2,"n":"scGameStart","t":8,"sn":"scGameStart","rt":$n[0].Void},{"ab":true,"a":2,"n":"scGetWebPlatform","t":8,"sn":"scGetWebPlatform","rt":$n[0].String},{"v":true,"a":2,"n":"scRegisterEvent","t":8,"pi":[{"n":"_0x13220ddf","pt":Function,"ps":0}],"sn":"scRegisterEvent","rt":$n[0].Void,"p":[Function]}]}; }, $n);
    /*SC._0xafe018ef end.*/

    /*SC._0xd623588b start.*/
    $m("SC._0xd623588b", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"GetCustomLanguageIdx","t":8,"sn":"GetCustomLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"scDoJSFun","t":8,"pi":[{"n":"_0x35a7fda7","pt":$n[0].String,"ps":0}],"sn":"scDoJSFun","rt":$n[0].String,"p":[$n[0].String]},{"ov":true,"a":2,"n":"scDownloadCallBack","t":8,"sn":"scDownloadCallBack","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameEnd","t":8,"sn":"scGameEnd","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameReady","t":8,"sn":"scGameReady","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameStart","t":8,"sn":"scGameStart","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGetWebPlatform","t":8,"sn":"scGetWebPlatform","rt":$n[0].String},{"ov":true,"a":2,"n":"scRegisterEvent","t":8,"pi":[{"n":"_0x89c7c80d","pt":Function,"ps":0}],"sn":"scRegisterEvent","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"_0x618d93de","t":4,"rt":pc.WebGLLib,"sn":"_0x618d93de"}]}; }, $n);
    /*SC._0xd623588b end.*/

    /*SC._0xda3ecde7 start.*/
    $m("SC._0xda3ecde7", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"GetCustomLanguageIdx","t":8,"sn":"GetCustomLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"scDoJSFun","t":8,"pi":[{"n":"_0x54d659bc","pt":$n[0].String,"ps":0}],"sn":"scDoJSFun","rt":$n[0].String,"p":[$n[0].String]},{"ov":true,"a":2,"n":"scDownloadCallBack","t":8,"sn":"scDownloadCallBack","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameEnd","t":8,"sn":"scGameEnd","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameReady","t":8,"sn":"scGameReady","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameStart","t":8,"sn":"scGameStart","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGetWebPlatform","t":8,"sn":"scGetWebPlatform","rt":$n[0].String}]}; }, $n);
    /*SC._0xda3ecde7 end.*/

    /*SC._0x034ef5c9 start.*/
    $m("SC._0x034ef5c9", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"scDoJSFun","is":true,"t":8,"pi":[{"n":"_0x876eb8c2","pt":$n[0].String,"ps":0}],"sn":"scDoJSFun","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"scDownloadCallBack","is":true,"t":8,"sn":"scDownloadCallBack","rt":$n[0].Void},{"a":2,"n":"scGameEnd","is":true,"t":8,"sn":"scGameEnd","rt":$n[0].Void},{"a":2,"n":"scGameReady","is":true,"t":8,"sn":"scGameReady","rt":$n[0].Void},{"a":2,"n":"scGameStart","is":true,"t":8,"sn":"scGameStart","rt":$n[0].Void},{"a":2,"n":"scGetWebPlatformIdx","is":true,"t":8,"sn":"scGetWebPlatformIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0x034ef5c9 end.*/

    /*SC._0xb7a78122 start.*/
    $m("SC._0xb7a78122", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"GetCustomLanguageIdx","t":8,"sn":"GetCustomLanguageIdx","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"scDoJSFun","t":8,"pi":[{"n":"_0xe7543182","pt":$n[0].String,"ps":0}],"sn":"scDoJSFun","rt":$n[0].String,"p":[$n[0].String]},{"ov":true,"a":2,"n":"scDownloadCallBack","t":8,"sn":"scDownloadCallBack","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameEnd","t":8,"sn":"scGameEnd","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameReady","t":8,"sn":"scGameReady","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGameStart","t":8,"sn":"scGameStart","rt":$n[0].Void},{"ov":true,"a":2,"n":"scGetWebPlatform","t":8,"sn":"scGetWebPlatform","rt":$n[0].String}]}; }, $n);
    /*SC._0xb7a78122 end.*/

    /*SC._0xbcb2c5eb start.*/
    $m("SC._0xbcb2c5eb", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetInstance","is":true,"t":8,"sn":"GetInstance","rt":$n[8]._0xbcb2c5eb},{"a":2,"n":"Init","t":8,"pi":[{"n":"_0xc824251b","pt":Function,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"OnApplicationFocus","t":8,"pi":[{"n":"_0x1c24a06f","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationFocus","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnApplicationPause","t":8,"pi":[{"n":"_0xce353ff2","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationPause","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnApplicationQuit","t":8,"sn":"OnApplicationQuit","rt":$n[0].Void},{"a":2,"n":"OnJSCallback","t":8,"pi":[{"n":"_0x68c64e67","pt":$n[0].String,"ps":0}],"sn":"OnJSCallback","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_0xb2650b9c","is":true,"t":4,"rt":$n[8]._0xbcb2c5eb,"sn":"_0xb2650b9c"}]}; }, $n);
    /*SC._0xbcb2c5eb end.*/

    /*SC._0x80279dc2 start.*/
    $m("SC._0x80279dc2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsPlayAdsPlatform","t":8,"sn":"IsPlayAdsPlatform","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"BMultiTouchEnabled","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_BMultiTouchEnabled","t":8,"rt":$n[0].Boolean,"fg":"BMultiTouchEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_BMultiTouchEnabled","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"BMultiTouchEnabled"},"fn":"BMultiTouchEnabled"}]}; }, $n);
    /*SC._0x80279dc2 end.*/

    /*SC._0xe9f3d109 start.*/
    $m("SC._0xe9f3d109", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Def","is":true,"t":4,"rt":$n[0].String,"sn":"Def"}]}; }, $n);
    /*SC._0xe9f3d109 end.*/

    /*SC._0x0df97461 start.*/
    $m("SC._0x0df97461", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"_0x096553a4","t":4,"rt":Function,"sn":"_0x096553a4","ro":true},{"a":1,"n":"_0xdc3690fa","t":4,"rt":Function,"sn":"_0xdc3690fa","ro":true},{"a":1,"n":"_0xfc25855b","t":4,"rt":Function,"sn":"_0xfc25855b","ro":true}]}; }, $n);
    /*SC._0x0df97461 end.*/

    /*SC._0x54e540d0 start.*/
    $m("SC._0x54e540d0", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"count","t":16,"rt":$n[0].Int64,"g":{"a":2,"n":"get_count","t":8,"rt":$n[0].Int64,"fg":"count"},"s":{"a":1,"n":"set_count","t":8,"p":[$n[0].Int64],"rt":$n[0].Void,"fs":"count"},"fn":"count"},{"a":2,"n":"itemId","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_itemId","t":8,"rt":$n[0].String,"fg":"itemId"},"s":{"a":1,"n":"set_itemId","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"itemId"},"fn":"itemId"},{"a":2,"n":"userData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_userData","t":8,"rt":$n[0].Object,"fg":"userData"},"s":{"a":1,"n":"set_userData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"userData"},"fn":"userData"},{"a":1,"backing":true,"n":"<count>k__BackingField","t":4,"rt":$n[0].Int64,"sn":"count"},{"a":1,"backing":true,"n":"<itemId>k__BackingField","t":4,"rt":$n[0].String,"sn":"itemId"},{"a":1,"backing":true,"n":"<userData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"userData"}]}; }, $n);
    /*SC._0x54e540d0 end.*/

    /*SC.IEntity start.*/
    $m("SC.IEntity", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Hide","t":8,"pi":[{"n":"_0x2f2a77e2","pt":$n[0].Object,"ps":0}],"sn":"SC$IEntity$Hide","rt":$n[0].Void,"p":[$n[0].Object]},{"ab":true,"a":2,"n":"OnAddChild","t":8,"pi":[{"n":"_0x71abd978","pt":$n[8].IEntity,"ps":0},{"n":"_0xc097aa36","pt":$n[0].Object,"ps":1}],"sn":"SC$IEntity$OnAddChild","rt":$n[0].Void,"p":[$n[8].IEntity,$n[0].Object]},{"ab":true,"a":2,"n":"OnAddParent","t":8,"pi":[{"n":"_0x7d68c186","pt":$n[8].IEntity,"ps":0},{"n":"_0xbb3264f0","pt":$n[0].Object,"ps":1}],"sn":"SC$IEntity$OnAddParent","rt":$n[0].Void,"p":[$n[8].IEntity,$n[0].Object]},{"ab":true,"a":2,"n":"OnHide","t":8,"pi":[{"n":"_0x7c686cd0","dv":null,"o":true,"pt":$n[0].Object,"ps":0}],"sn":"SC$IEntity$OnHide","rt":$n[0].Void,"p":[$n[0].Object]},{"ab":true,"a":2,"n":"OnRecycle","t":8,"sn":"SC$IEntity$OnRecycle","rt":$n[0].Void},{"ab":true,"a":2,"n":"OnRemoveChild","t":8,"pi":[{"n":"_0xb53050ef","pt":$n[8].IEntity,"ps":0},{"n":"_0xadfbfb91","pt":$n[0].Object,"ps":1}],"sn":"SC$IEntity$OnRemoveChild","rt":$n[0].Void,"p":[$n[8].IEntity,$n[0].Object]},{"ab":true,"a":2,"n":"OnRemoveParent","t":8,"pi":[{"n":"_0x32eb3d24","pt":$n[8].IEntity,"ps":0},{"n":"_0x4a3cb1bd","pt":$n[0].Object,"ps":1}],"sn":"SC$IEntity$OnRemoveParent","rt":$n[0].Void,"p":[$n[8].IEntity,$n[0].Object]},{"ab":true,"a":2,"n":"OnShow","t":8,"pi":[{"n":"_0x082a1a8b","pt":$n[0].Object,"ps":0}],"sn":"SC$IEntity$OnShow","rt":$n[0].Void,"p":[$n[0].Object]},{"ab":true,"a":2,"n":"OnUpdate","t":8,"pi":[{"n":"_0xf34a79dd","pt":$n[0].Single,"ps":0},{"n":"_0xae2e2a0d","pt":$n[0].Single,"ps":1}],"sn":"SC$IEntity$OnUpdate","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"ab":true,"a":2,"n":"Handle","t":16,"rt":$n[0].Object,"g":{"ab":true,"a":2,"n":"get_Handle","t":8,"rt":$n[0].Object,"fg":"SC$IEntity$Handle"},"fn":"SC$IEntity$Handle"},{"ab":true,"a":2,"n":"Id","t":16,"rt":$n[0].Int32,"g":{"ab":true,"a":2,"n":"get_Id","t":8,"rt":$n[0].Int32,"fg":"SC$IEntity$Id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"SC$IEntity$Id"},{"ab":true,"a":2,"n":"PrefabId","t":16,"rt":$n[0].String,"g":{"ab":true,"a":2,"n":"get_PrefabId","t":8,"rt":$n[0].String,"fg":"SC$IEntity$PrefabId"},"fn":"SC$IEntity$PrefabId"},{"a":1,"backing":true,"n":"<Handle>k__BackingField","t":4,"rt":$n[0].Object,"sn":"SC$IEntity$Handle"},{"a":1,"backing":true,"n":"<Id>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"SC$IEntity$Id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<PrefabId>k__BackingField","t":4,"rt":$n[0].String,"sn":"SC$IEntity$PrefabId"}]}; }, $n);
    /*SC.IEntity end.*/

    /*SC._0x7308c9b6 start.*/
    $m("SC._0x7308c9b6", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Duration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Duration","t":8,"rt":$n[0].Single,"fg":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Duration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Duration"},"fn":"Duration"},{"a":2,"n":"Entity","t":16,"rt":$n[8].IEntity,"g":{"a":2,"n":"get_Entity","t":8,"rt":$n[8].IEntity,"fg":"Entity"},"s":{"a":1,"n":"set_Entity","t":8,"p":[$n[8].IEntity],"rt":$n[0].Void,"fs":"Entity"},"fn":"Entity"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<Duration>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Entity>k__BackingField","t":4,"rt":$n[8].IEntity,"sn":"Entity"},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0x7308c9b6 end.*/

    /*SC._0x71b148ae start.*/
    $m("SC._0x71b148ae", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EntityId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_EntityId","t":8,"rt":$n[0].Int32,"fg":"EntityId","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_EntityId","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"EntityId"},"fn":"EntityId"},{"a":2,"n":"ErrorMessage","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_ErrorMessage","t":8,"rt":$n[0].String,"fg":"ErrorMessage"},"s":{"a":1,"n":"set_ErrorMessage","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"ErrorMessage"},"fn":"ErrorMessage"},{"a":2,"n":"PrefabPath","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_PrefabPath","t":8,"rt":$n[0].String,"fg":"PrefabPath"},"s":{"a":1,"n":"set_PrefabPath","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"PrefabPath"},"fn":"PrefabPath"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<EntityId>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"EntityId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<ErrorMessage>k__BackingField","t":4,"rt":$n[0].String,"sn":"ErrorMessage"},{"a":1,"backing":true,"n":"<PrefabPath>k__BackingField","t":4,"rt":$n[0].String,"sn":"PrefabPath"},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0x71b148ae end.*/

    /*SC._0x40d08fac start.*/
    $m("SC._0x40d08fac", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Duration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Duration","t":8,"rt":$n[0].Single,"fg":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Duration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Duration"},"fn":"Duration"},{"a":2,"n":"SceneAssetName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_SceneAssetName","t":8,"rt":$n[0].String,"fg":"SceneAssetName"},"s":{"a":1,"n":"set_SceneAssetName","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"SceneAssetName"},"fn":"SceneAssetName"},{"a":2,"n":"UserData","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_UserData","t":8,"rt":$n[0].Object,"fg":"UserData"},"s":{"a":1,"n":"set_UserData","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"UserData"},"fn":"UserData"},{"a":1,"backing":true,"n":"<Duration>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<SceneAssetName>k__BackingField","t":4,"rt":$n[0].String,"sn":"SceneAssetName"},{"a":1,"backing":true,"n":"<UserData>k__BackingField","t":4,"rt":$n[0].Object,"sn":"UserData"}]}; }, $n);
    /*SC._0x40d08fac end.*/

    /*SC.MonoPInvokeCallbackAttribute start.*/
    $m("SC.MonoPInvokeCallbackAttribute", function () { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SC.MonoPInvokeCallbackAttribute end.*/

    /*SC.CustomLabelAttribute start.*/
    $m("SC.CustomLabelAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"_0x45c20cfd","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"SName","t":4,"rt":$n[0].String,"sn":"sName"}]}; }, $n);
    /*SC.CustomLabelAttribute end.*/

    /*SC.CustomDisableAttribute start.*/
    $m("SC.CustomDisableAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"_0x5b62492b","pt":$n[0].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"SName","t":4,"rt":$n[0].String,"sn":"sName"}]}; }, $n);
    /*SC.CustomDisableAttribute end.*/

    /*SC.CustomMoreAttribute start.*/
    $m("SC.CustomMoreAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].Object],"pi":[{"n":"_0xecbf3a57","dv":"","o":true,"pt":$n[0].String,"ps":0},{"n":"_0x4f0748a5","dv":"","o":true,"pt":$n[0].String,"ps":1},{"n":"_0x5593636f","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"ctor"},{"a":2,"n":"OAttributeVal","t":4,"rt":$n[0].Object,"sn":"oAttributeVal"},{"a":2,"n":"SAttributeName","t":4,"rt":$n[0].String,"sn":"sAttributeName"},{"a":2,"n":"SLabelName","t":4,"rt":$n[0].String,"sn":"sLabelName"}]}; }, $n);
    /*SC.CustomMoreAttribute end.*/

    /*SC.CustomVisibleAttribute start.*/
    $m("SC.CustomVisibleAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Type,$n[0].String,$n[0].Array.type(System.String)],"pi":[{"n":"_0x10c03117","pt":$n[0].String,"ps":0},{"n":"_0x9dad94cc","pt":$n[0].Type,"ps":1},{"n":"_0x4d66dd8a","pt":$n[0].String,"ps":2},{"n":"_0xb8af5afb","pt":$n[0].Array.type(System.String),"ps":3}],"sn":"ctor"},{"a":2,"n":"lParamNames","t":4,"rt":$n[0].Array.type(System.String),"sn":"lParamNames"},{"a":2,"n":"sLabelName","t":4,"rt":$n[0].String,"sn":"sLabelName"},{"a":2,"n":"sMethod","t":4,"rt":$n[0].String,"sn":"sMethod"},{"a":2,"n":"type","t":4,"rt":$n[0].Type,"sn":"type"}]}; }, $n);
    /*SC.CustomVisibleAttribute end.*/

    /*SC.CustomRangeAttribute start.*/
    $m("SC.CustomRangeAttribute", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].String,$n[0].String,$n[0].Object],"pi":[{"n":"_0x157cc63c","pt":$n[0].Single,"ps":0},{"n":"_0x24fc3718","pt":$n[0].Single,"ps":1},{"n":"_0x130c8d8e","dv":"","o":true,"pt":$n[0].String,"ps":2},{"n":"_0x408706f0","dv":"","o":true,"pt":$n[0].String,"ps":3},{"n":"_0x918ae610","dv":null,"o":true,"pt":$n[0].Object,"ps":4}],"sn":"ctor"},{"a":2,"n":"OAttributeVal","t":4,"rt":$n[0].Object,"sn":"oAttributeVal"},{"a":2,"n":"SAttributeName","t":4,"rt":$n[0].String,"sn":"sAttributeName"},{"a":2,"n":"SLabelName","t":4,"rt":$n[0].String,"sn":"sLabelName"},{"a":2,"n":"max","t":4,"rt":$n[0].Single,"sn":"max","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"min","t":4,"rt":$n[0].Single,"sn":"min","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SC.CustomRangeAttribute end.*/

    /*SC.CustomStringListAttribute start.*/
    $m("SC.CustomStringListAttribute", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Array.type(System.String)],"pi":[{"n":"_0x8f72a9bf","ip":true,"pt":$n[0].Array.type(System.String),"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Type],"pi":[{"n":"_0xb0667214","pt":$n[0].Type,"ps":0}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Type,$n[0].String],"pi":[{"n":"_0x3fc29651","pt":$n[0].Type,"ps":0},{"n":"_0x3a7f9396","pt":$n[0].String,"ps":1}],"sn":"$ctor2"},{"a":2,"n":"List","t":16,"rt":$n[0].Array.type(System.String),"g":{"a":2,"n":"get_List","t":8,"rt":$n[0].Array.type(System.String),"fg":"List"},"s":{"a":1,"n":"set_List","t":8,"p":[$n[0].Array.type(System.String)],"rt":$n[0].Void,"fs":"List"},"fn":"List"},{"a":1,"backing":true,"n":"<List>k__BackingField","t":4,"rt":$n[0].Array.type(System.String),"sn":"List"}]}; }, $n);
    /*SC.CustomStringListAttribute end.*/

    /*SC._0xc807ab2c start.*/
    $m("SC._0xc807ab2c", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DelayTimeBackCall","t":8,"pi":[{"n":"_0x6244214d","pt":Function,"ps":0},{"n":"_0x1511a7e0","dv":0.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"_0x933fbd61","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"DelayTimeBackCall","rt":$n[0].Int32,"p":[Function,$n[0].Single,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"EndOfFrameBackCall","t":8,"pi":[{"n":"_0xd5442c5b","pt":Function,"ps":0}],"sn":"EndOfFrameBackCall","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"StopAllDelayedCalls","t":8,"sn":"StopAllDelayedCalls","rt":$n[0].Void},{"a":2,"n":"StopDelayedCall","t":8,"pi":[{"n":"_0xc6acfd86","pt":$n[0].Int32,"ps":0}],"sn":"StopDelayedCall","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_0xcf462b5a","t":8,"pi":[{"n":"_0x9a1ecbf9","pt":Function,"ps":0}],"sn":"_0xcf462b5a","rt":$n[5].IEnumerator,"p":[Function]},{"a":1,"n":"_0xff6a8e38","t":8,"pi":[{"n":"_0xbf6a3f35","pt":Function,"ps":0},{"n":"_0xd7d91697","pt":$n[0].Single,"ps":1},{"n":"_0x6e3e2ca4","pt":$n[0].Int32,"ps":2}],"sn":"_0xff6a8e38","rt":$n[5].IEnumerator,"p":[Function,$n[0].Single,$n[0].Int32]},{"a":1,"n":"_0xa0d6e43a","t":4,"rt":$n[2].Dictionary$2(System.Int32,UnityEngine.Coroutine),"sn":"_0xa0d6e43a","ro":true},{"a":1,"n":"_0xfd344035","t":4,"rt":$n[0].Int32,"sn":"_0xfd344035","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xc807ab2c end.*/

    /*SC._0xf5a88c93 start.*/
    $m("SC._0xf5a88c93", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BuyOverCount","t":8,"pi":[{"n":"_0xd7a041ce","pt":$n[0].String,"ps":0}],"sn":"BuyOverCount","rt":$n[0].Int32,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetAllType","t":8,"sn":"GetAllType","rt":$n[2].List$1(System.String)},{"a":2,"n":"GetPaymentById","t":8,"pi":[{"n":"_0x68e6de7b","pt":$n[0].Int32,"ps":0}],"sn":"GetPaymentById","rt":$n[7].PaymentTable,"p":[$n[0].Int32]},{"a":2,"n":"GetTableListByType","t":8,"pi":[{"n":"_0x84871565","pt":$n[0].String,"ps":0}],"sn":"GetTableListByType","rt":$n[2].List$1(SCParam.ShopTable),"p":[$n[0].String]},{"a":2,"n":"IsCanBuy","t":8,"pi":[{"n":"_0x661c94ae","pt":$n[0].String,"ps":0}],"sn":"IsCanBuy","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ShowWindow","t":8,"pi":[{"n":"_0x6cfc7d16","dv":null,"o":true,"pt":$n[7]._0xc9a7c399,"ps":0},{"n":"_0x2d22ab4f","dv":"LayerShop","o":true,"pt":$n[0].String,"ps":1}],"sn":"ShowWindow","rt":$n[0].Void,"p":[$n[7]._0xc9a7c399,$n[0].String]},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0xf5a88c93 end.*/

    /*SC._0xa96fe423 start.*/
    $m("SC._0xa96fe423", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSubscribeProductByGroup","t":8,"pi":[{"n":"_0x4255db43","pt":$n[0].Int32,"ps":0}],"sn":"GetSubscribeProductByGroup","rt":$n[2].List$1(SCParam.PaymentTable),"p":[$n[0].Int32]},{"a":2,"n":"IsEnable","t":8,"sn":"IsEnable","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsGainSubscribeReward","t":8,"sn":"IsGainSubscribeReward","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ShowGainSubscribeReward","t":8,"pi":[{"n":"_0x589f9f01","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"ShowGainSubscribeReward","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowSubscribe","t":8,"pi":[{"n":"_0xc2fde79d","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"_0x7daa009d","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"ShowSubscribe","rt":$n[0].Void,"p":[$n[0].Boolean,Function]},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0xa96fe423 end.*/

    /*SC._0x39ec3c9a start.*/
    $m("SC._0x39ec3c9a", function () { return {"nested":[$n[8]._0x39ec3c9a._0x62050638],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CoinAnimPrefabPath","t":4,"rt":$n[0].String,"sn":"CoinAnimPrefabPath"},{"a":2,"n":"DiamondAnimPrefabPath","t":4,"rt":$n[0].String,"sn":"DiamondAnimPrefabPath"}]}; }, $n);
    /*SC._0x39ec3c9a end.*/

    /*SC._0x39ec3c9a+_0x62050638 start.*/
    $m("SC._0x39ec3c9a._0x62050638", function () { return {"td":$n[8]._0x39ec3c9a,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x603c1bde","is":true,"t":4,"rt":$n[8]._0x39ec3c9a._0x62050638,"sn":"_0x603c1bde","box":function ($v) { return Bridge.box($v, SC._0x39ec3c9a._0x62050638, System.Enum.toStringFn(SC._0x39ec3c9a._0x62050638));}},{"a":2,"n":"_0x714d3621","is":true,"t":4,"rt":$n[8]._0x39ec3c9a._0x62050638,"sn":"_0x714d3621","box":function ($v) { return Bridge.box($v, SC._0x39ec3c9a._0x62050638, System.Enum.toStringFn(SC._0x39ec3c9a._0x62050638));}},{"a":2,"n":"_0xe824dfa2","is":true,"t":4,"rt":$n[8]._0x39ec3c9a._0x62050638,"sn":"_0xe824dfa2","box":function ($v) { return Bridge.box($v, SC._0x39ec3c9a._0x62050638, System.Enum.toStringFn(SC._0x39ec3c9a._0x62050638));}}]}; }, $n);
    /*SC._0x39ec3c9a+_0x62050638 end.*/

    /*SC._0xb1611680 start.*/
    $m("SC._0xb1611680", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetByKey","t":8,"pi":[{"n":"_0x7949bc72","pt":$n[0].String,"ps":0}],"sn":"GetByKey","rt":$n[0].Object,"p":[$n[0].String]},{"a":2,"n":"GetChannelFuncValueByKey","t":8,"pi":[{"n":"_0x0cf38551","pt":$n[0].String,"ps":0}],"sn":"GetChannelFuncValueByKey","rt":$n[0].Object,"p":[$n[0].String]},{"a":2,"n":"UploadChannelFuncConfig","t":8,"sn":"UploadChannelFuncConfig","rt":$n[0].Void}]}; }, $n);
    /*SC._0xb1611680 end.*/

    /*SC._0x703e8fc0 start.*/
    $m("SC._0x703e8fc0", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Change","t":8,"pi":[{"n":"_0x800a1dfa","pt":$n[0].String,"ps":0},{"n":"_0xa1d9a0ff","pt":$n[0].String,"ps":1},{"n":"_0x39e60a1e","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"Change","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ChangeByItemId","t":8,"pi":[{"n":"_0x68e91318","pt":$n[0].String,"ps":0},{"n":"_0xe58857f4","pt":$n[0].String,"ps":1},{"n":"_0x74961a60","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"ChangeByItemId","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0x0c596094","pt":$n[0].String,"ps":0}],"sn":"Get","rt":$n[7].SlotTable,"p":[$n[0].String]},{"a":2,"n":"GetAll","t":8,"sn":"GetAll","rt":$n[2].List$1(SCParam.SlotTable)},{"a":2,"n":"GetBagIns","t":8,"pi":[{"n":"_0x1b53af79","pt":$n[0].String,"ps":0}],"sn":"GetBagIns","rt":$n[7].InsTable,"p":[$n[0].String]},{"a":2,"n":"GetBagInsListByType","t":8,"pi":[{"n":"_0x09002c92","pt":$n[0].String,"ps":0}],"sn":"GetBagInsListByType","rt":$n[2].List$1(SCParam.InsTable),"p":[$n[0].String]},{"a":2,"n":"GetByType","t":8,"pi":[{"n":"_0x87dff655","pt":$n[0].String,"ps":0}],"sn":"GetByType","rt":$n[2].List$1(SCParam.SlotTable),"p":[$n[0].String]},{"a":2,"n":"HideAutoChange","t":8,"sn":"HideAutoChange","rt":$n[0].Void},{"a":2,"n":"OpenAutoChange","t":8,"sn":"OpenAutoChange","rt":$n[0].Void},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0x703e8fc0 end.*/

    /*SC._0xbed9ceeb start.*/
    $m("SC._0xbed9ceeb", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddAdExpirationTime","t":8,"pi":[{"n":"_0x271f64fa","pt":$n[0].Int64,"ps":0}],"sn":"AddAdExpirationTime","rt":$n[0].Void,"p":[$n[0].Int64]},{"a":2,"n":"CaptureTimer","t":8,"pi":[{"n":"_0x97c6ea03","dv":"","o":true,"pt":$n[0].String,"ps":0}],"sn":"CaptureTimer","rt":$n[0].Int64,"p":[$n[0].String]},{"a":2,"n":"GetAdExpirationTime","t":8,"sn":"GetAdExpirationTime","rt":$n[0].Int64},{"a":2,"n":"GetDateBySecond","t":8,"pi":[{"n":"_0xd816c590","pt":$n[0].Int32,"ps":0}],"sn":"GetDateBySecond","rt":$n[0].DateTime,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.DateTime, System.DateTime.format);}},{"a":2,"n":"GetTodayZeroTime","t":8,"pi":[{"n":"_0x55a0e4db","dv":0,"o":true,"pt":$n[0].Int32,"ps":0}],"sn":"GetTodayZeroTime","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTodayZeroTime","t":8,"pi":[{"n":"_0xf9f6c515","pt":$n[0].String,"ps":0}],"sn":"GetTodayZeroTime$1","rt":$n[0].Int32,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetWeekZeroTime","t":8,"sn":"GetWeekZeroTime","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"IsNewDay","t":8,"pi":[{"n":"_0x6e59c4e5","pt":$n[0].Int32,"ps":0}],"sn":"IsNewDay","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SecondsFormat","t":8,"pi":[{"n":"_0x72dfeb1d","pt":$n[0].String,"ps":0},{"n":"_0xeec25119","pt":$n[0].Int32,"ps":1},{"n":"_0x3891da02","dv":"00","o":true,"pt":$n[0].String,"ps":2}],"sn":"SecondsFormat","rt":$n[0].String,"p":[$n[0].String,$n[0].Int32,$n[0].String]},{"a":2,"n":"StartCaptureTimer","t":8,"pi":[{"n":"_0x75a64c0d","dv":"","o":true,"pt":$n[0].String,"ps":0}],"sn":"StartCaptureTimer","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"BNewDay","t":4,"rt":$n[0].Boolean,"sn":"BNewDay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetEnterGameCount","t":4,"rt":$n[0].Int32,"sn":"GetEnterGameCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ILoginDay","t":4,"rt":$n[0].Int32,"sn":"ILoginDay","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0xbed9ceeb end.*/

    /*SC._0xc8c6ac7c start.*/
    $m("SC._0xc8c6ac7c", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddTimeLimitedCloseAdTime","t":8,"pi":[{"n":"_0x6a59b49a","pt":$n[0].Int64,"ps":0}],"sn":"AddTimeLimitedCloseAdTime","rt":$n[0].Void,"p":[$n[0].Int64]},{"a":2,"n":"GetIsLeftTop","t":8,"sn":"GetIsLeftTop","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetIsShowBanner","t":8,"sn":"GetIsShowBanner","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetTimeLimitedCloseAdTime","t":8,"sn":"GetTimeLimitedCloseAdTime","rt":$n[0].Int64},{"a":2,"n":"HideAllNativeAd","t":8,"sn":"HideAllNativeAd","rt":$n[0].Void},{"a":2,"n":"HideBanner","t":8,"sn":"HideBanner","rt":$n[0].Void},{"a":2,"n":"HideNativeAd","t":8,"pi":[{"n":"_0x3e42ab3c","pt":$n[0].Int32,"ps":0},{"n":"_0x6e583da7","pt":$n[0].Int32,"ps":1}],"sn":"HideNativeAd","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"IsEnableAd","t":8,"sn":"IsEnableAd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsEnableDiamondVideo","t":8,"sn":"IsEnableDiamondVideo","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsEnableNativeAdByAdType","t":8,"pi":[{"n":"_0xbf8c955e","pt":$n[0].Int32,"ps":0}],"sn":"IsEnableNativeAdByAdType","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsFullPictureReady","t":8,"sn":"IsFullPictureReady","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsNativeAdReady","t":8,"pi":[{"n":"_0xcdb7023d","pt":$n[0].Int32,"ps":0},{"n":"_0xdaf973a9","pt":$n[0].Int32,"ps":1}],"sn":"IsNativeAdReady","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSupportFullPicture","t":8,"sn":"IsSupportFullPicture","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSupportNativeAd","t":8,"sn":"IsSupportNativeAd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSupportTimeLimitedCloseAd","t":8,"sn":"IsSupportTimeLimitedCloseAd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsTimelinessADEffect","t":8,"sn":"IsTimelinessADEffect","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsVideoReady","t":8,"sn":"IsVideoReady","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetBannerPosition","t":8,"pi":[{"n":"_0x77befaa8","pt":$n[0].Boolean,"ps":0}],"sn":"SetBannerPosition","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetEnableAd","t":8,"pi":[{"n":"_0xb6fae8a9","pt":$n[0].Boolean,"ps":0}],"sn":"SetEnableAd","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetNativeAdPosition","t":8,"pi":[{"n":"_0xbeda5270","pt":$n[0].Int32,"ps":0},{"n":"_0x86cc612e","pt":$n[0].Int32,"ps":1},{"n":"_0x457eb63e","pt":$n[0].Int32,"ps":2},{"n":"_0xa723e91b","pt":$n[0].Int32,"ps":3},{"n":"_0xb2b51933","pt":$n[0].Int32,"ps":4},{"n":"_0x6b58cd61","pt":$n[0].Int32,"ps":5},{"n":"_0xa16f9d76","dv":false,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"SetNativeAdPosition","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"SetShieldPopDemonAdWindowData","t":8,"pi":[{"n":"_0x96acb24a","pt":$n[0].String,"ps":0},{"n":"_0xed8324f1","pt":$n[0].String,"ps":1}],"sn":"SetShieldPopDemonAdWindowData","rt":$n[0].Void,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"ShowAllNativeAdByNode","t":8,"pi":[{"n":"_0x3812bbd8","pt":$n[1].GameObject,"ps":0}],"sn":"ShowAllNativeAdByNode","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"ShowBanner","t":8,"pi":[{"n":"_0x2136afc8","pt":$n[0].Boolean,"ps":0}],"sn":"ShowBanner","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowBannerByType","t":8,"pi":[{"n":"_0x9470e7b8","pt":$n[0].String,"ps":0}],"sn":"ShowBannerByType","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ShowDemonstrationNativeAd","t":8,"pi":[{"n":"_0xc0e0e079","pt":$n[0].Int32,"ps":0},{"n":"_0x02aebd4c","pt":$n[0].Int32,"ps":1},{"n":"_0xfcb8c184","dv":"","o":true,"pt":$n[0].String,"ps":2},{"n":"_0x7b2e9442","dv":null,"o":true,"pt":$n[0].Object,"ps":3}],"sn":"ShowDemonstrationNativeAd","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].String,$n[0].Object]},{"a":2,"n":"ShowFullPicture","t":8,"sn":"ShowFullPicture","rt":$n[0].Void},{"a":2,"n":"ShowFullPicture","t":8,"pi":[{"n":"_0x52bbeb7c","pt":$n[0].String,"ps":0}],"sn":"ShowFullPicture$1","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ShowFullscreenAds","t":8,"pi":[{"n":"_0x2f707f8c","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"ShowFullscreenAds","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowMoreVideoRewards_Gift","t":8,"pi":[{"n":"_0x36540fae","pt":$n[0].String,"ps":0},{"n":"_0x7c2d1fd1","pt":$n[0].Int32,"ps":1},{"n":"_0xd071d589","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"ShowMoreVideoRewards_Gift","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32,Function]},{"a":2,"n":"ShowMoreVideoRewards_Item","t":8,"pi":[{"n":"_0xa746fb7e","pt":$n[0].String,"ps":0},{"n":"_0x6363fa2b","pt":$n[0].Int32,"ps":1},{"n":"_0x7125c2d9","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"ShowMoreVideoRewards_Item","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32,Function]},{"a":2,"n":"ShowNativeAd","t":8,"pi":[{"n":"_0x81d89a7b","pt":$n[0].Int32,"ps":0},{"n":"_0xeb2d68d0","pt":$n[0].Int32,"ps":1},{"n":"_0x5946cfba","dv":"","o":true,"pt":$n[0].String,"ps":2}],"sn":"ShowNativeAd","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].String]},{"a":2,"n":"ShowNewBannerAd","t":8,"pi":[{"n":"_0x4b212fcf","pt":$n[0].String,"ps":0},{"n":"_0xebc0aac7","pt":$n[0].Boolean,"ps":1}],"sn":"ShowNewBannerAd","rt":$n[0].Void,"p":[$n[0].String,$n[0].Boolean]},{"a":2,"n":"ShowVideoAdAutoMobClickCount","t":8,"pi":[{"n":"_0x68f9a893","pt":$n[0].String,"ps":0},{"n":"_0x6aaad16a","pt":Function,"ps":1},{"n":"_0x7d290dc5","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"ShowVideoAdAutoMobClickCount","rt":$n[0].Boolean,"p":[$n[0].String,Function,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ShowVideoAdIncludeTip","t":8,"pi":[{"n":"_0x94908bb9","pt":Function,"ps":0},{"n":"_0xa9d80472","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"ShowVideoAdIncludeTip","rt":$n[0].Void,"p":[Function,Function]},{"a":2,"n":"ShowVideoAdIncludeTip","t":8,"pi":[{"n":"_0x136ccfd1","pt":Function,"ps":0},{"n":"_0xc1439ec9","dv":null,"o":true,"pt":$n[0].String,"ps":1}],"sn":"ShowVideoAdIncludeTip$1","rt":$n[0].Void,"p":[Function,$n[0].String]},{"a":2,"n":"EventType","t":4,"rt":$n[11].EnumShowVideoType,"sn":"EventType"}]}; }, $n);
    /*SC._0xc8c6ac7c end.*/

    /*SC._0x75d7d73c start.*/
    $m("SC._0x75d7d73c", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetEntities","t":8,"pi":[{"n":"_0xdac3c622","pt":$n[0].String,"ps":0}],"sn":"GetEntities","rt":System.Array.type(SC.IEntity),"p":[$n[0].String]},{"a":2,"n":"GetEntity","t":8,"pi":[{"n":"_0xdae4ae7b","pt":$n[0].Int32,"ps":0}],"sn":"GetEntity","rt":$n[8].IEntity,"p":[$n[0].Int32]},{"a":2,"n":"GetEntity","t":8,"pi":[{"n":"_0x11820a03","pt":$n[0].String,"ps":0}],"sn":"GetEntity$1","rt":$n[8].IEntity,"p":[$n[0].String]},{"a":2,"n":"HasEntity","t":8,"pi":[{"n":"_0x31888396","pt":$n[0].Int32,"ps":0}],"sn":"HasEntity","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HideEntityByGameObj","t":8,"pi":[{"n":"_0xc9946db6","pt":$n[1].GameObject,"ps":0},{"n":"_0xa022879d","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"HideEntityByGameObj","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Object]},{"a":2,"n":"HideLoadingByPrefabId","t":8,"pi":[{"n":"_0x799766d9","pt":$n[0].String,"ps":0}],"sn":"HideLoadingByPrefabId","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"HidePrefabEntity","t":8,"pi":[{"n":"_0x5be32821","pt":$n[8].IEntity,"ps":0},{"n":"_0x0133b610","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"HidePrefabEntity","rt":$n[0].Void,"p":[$n[8].IEntity,$n[0].Object]},{"a":2,"n":"HidePrefabEntity","t":8,"pi":[{"n":"_0x89de2650","pt":$n[0].Int32,"ps":0},{"n":"_0x5cc091fc","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"HidePrefabEntity$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object]},{"a":2,"n":"HidePrefabEntity","t":8,"pi":[{"n":"_0xc6894203","pt":$n[0].Int32,"ps":0},{"n":"_0x0883a027","pt":$n[0].Object,"ps":1},{"n":"_0x66b5a752","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"HidePrefabEntity$2","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object,$n[0].Boolean]},{"a":2,"n":"ReleaseGameObject","t":8,"pi":[{"n":"_0x6de6eba1","pt":$n[1].GameObject,"ps":0}],"sn":"ReleaseGameObject","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"ShowPrefab","t":8,"pi":[{"n":"_0xf8c0c05f","pt":$n[0].String,"ps":0},{"n":"_0x3ef1a378","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"ShowPrefab$2","rt":$n[0].Int32,"p":[$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ShowPrefab","t":8,"pi":[{"n":"_0x6a6c4fd8","pt":$n[0].Int32,"ps":0},{"n":"_0x0228eb1a","pt":$n[0].String,"ps":1},{"n":"_0xfe3e77f6","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"ShowPrefab","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ShowPrefab","t":8,"pi":[{"n":"_0x749198e7","pt":$n[0].String,"ps":0},{"n":"_0x25812be5","pt":$n[1].Transform,"ps":1},{"n":"_0xcf048a70","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"ShowPrefab$3","rt":$n[0].Int32,"p":[$n[0].String,$n[1].Transform,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ShowPrefab","t":8,"pi":[{"n":"_0xcaa18d9b","pt":$n[0].Int32,"ps":0},{"n":"_0x1c6d8bc2","pt":$n[0].String,"ps":1},{"n":"_0xc359acd2","pt":$n[1].Transform,"ps":2},{"n":"_0xac53e549","dv":null,"o":true,"pt":$n[0].Object,"ps":3}],"sn":"ShowPrefab$1","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].String,$n[1].Transform,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ShowPrefabSync","t":8,"pi":[{"n":"_0xe81f1675","pt":$n[0].String,"ps":0},{"n":"_0xd4c8fdd6","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"ShowPrefabSync$1","rt":$n[8].IEntity,"p":[$n[0].String,$n[0].Object]},{"a":2,"n":"ShowPrefabSync","t":8,"pi":[{"n":"_0xf83d2050","pt":$n[0].String,"ps":0},{"n":"_0xba2235f1","pt":$n[1].Transform,"ps":1},{"n":"_0x06306504","dv":null,"o":true,"pt":$n[0].Object,"ps":2}],"sn":"ShowPrefabSync$2","rt":$n[8].IEntity,"p":[$n[0].String,$n[1].Transform,$n[0].Object]},{"a":2,"n":"ShowPrefabSync","t":8,"pi":[{"n":"_0xad36867a","pt":$n[0].Int32,"ps":0},{"n":"_0x3e4be921","pt":$n[0].String,"ps":1},{"n":"_0x3f5b40be","pt":$n[1].Transform,"ps":2},{"n":"_0x0489befa","dv":null,"o":true,"pt":$n[0].Object,"ps":3}],"sn":"ShowPrefabSync","rt":$n[8].IEntity,"p":[$n[0].Int32,$n[0].String,$n[1].Transform,$n[0].Object]},{"a":2,"n":"CreateCutSerialId","t":4,"rt":$n[0].Int32,"sn":"CreateCutSerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CreateSerialId","t":4,"rt":$n[0].Int32,"sn":"CreateSerialId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DefaultParentTransform","t":4,"rt":$n[1].Transform,"sn":"DefaultParentTransform"},{"a":2,"n":"ShowPrefabEntityFailure","t":4,"rt":Function,"sn":"ShowPrefabEntityFailure"},{"a":2,"n":"ShowPrefabEntitySuccess","t":4,"rt":Function,"sn":"ShowPrefabEntitySuccess"},{"a":2,"n":"insPool_AutoReleaseInterval","t":4,"rt":$n[0].Single,"sn":"insPool_AutoReleaseInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"insPool_Capacity","t":4,"rt":$n[0].Int32,"sn":"insPool_Capacity","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0x75d7d73c end.*/

    /*SC._0x243e2502 start.*/
    $m("SC._0x243e2502", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FindChild","t":8,"pi":[{"n":"_0x5fc19816","pt":$n[1].Transform,"ps":0},{"n":"_0x3362a896","pt":$n[0].String,"ps":1},{"n":"_0x12cdd671","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"FindChild","rt":$n[1].Transform,"p":[$n[1].Transform,$n[0].String,$n[0].Boolean]},{"a":2,"n":"FindChildComponent","t":8,"pi":[{"n":"_0x715e2467","pt":$n[1].Transform,"ps":0},{"n":"_0x28c20afa","pt":$n[0].String,"ps":1},{"n":"_0x6393aa56","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"tpc":1,"tprm":["T"],"sn":"FindChildComponent","rt":System.Object,"p":[$n[1].Transform,$n[0].String,$n[0].Boolean]},{"a":2,"n":"GetComponent","t":8,"pi":[{"n":"_0x1882e6ce","pt":$n[1].GameObject,"ps":0},{"n":"_0x39ec306e","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"tpc":1,"tprm":["T"],"sn":"GetComponent","rt":System.Object,"p":[$n[1].GameObject,$n[0].Boolean]},{"a":2,"n":"HideOnNet","t":8,"sn":"HideOnNet","rt":$n[0].Void},{"a":2,"n":"ShowDialogNotify","t":8,"pi":[{"n":"_0x76cfb303","pt":$n[7].DialogNotifyInfo,"ps":0}],"sn":"ShowDialogNotify","rt":$n[0].Void,"p":[$n[7].DialogNotifyInfo]},{"a":2,"n":"ShowDialogNotify","t":8,"pi":[{"n":"_0xf107f672","pt":$n[0].String,"ps":0}],"sn":"ShowDialogNotify$1","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ShowDialogShop","t":8,"pi":[{"n":"_0xc14179a5","pt":$n[7]._0x5c71f007._0x997d4720,"ps":0},{"n":"_0x093f20b0","dv":null,"o":true,"pt":Function,"ps":1},{"n":"_0xa97da2cc","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"ShowDialogShop","rt":$n[0].Void,"p":[$n[7]._0x5c71f007._0x997d4720,Function,Function]},{"a":2,"n":"ShowDialogShop","t":8,"pi":[{"n":"_0x2c7d0aed","pt":$n[0].Int32,"ps":0},{"n":"_0xbdc47276","dv":null,"o":true,"pt":Function,"ps":1},{"n":"_0x93ae9556","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"ShowDialogShop$1","rt":$n[0].Void,"p":[$n[0].Int32,Function,Function]},{"a":2,"n":"ShowOnNet","t":8,"sn":"ShowOnNet","rt":$n[0].Void},{"a":2,"n":"ShowTip","t":8,"pi":[{"n":"_0x6310aca1","pt":$n[0].String,"ps":0},{"n":"_0xf3a5e0ff","dv":"","o":true,"pt":$n[0].String,"ps":1}],"sn":"ShowTip","rt":$n[0].Void,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"StorageNodes","t":8,"pi":[{"n":"_0x7e6960a1","pt":$n[1].GameObject,"ps":0},{"n":"_0xfdda236a","dv":null,"o":true,"pt":$n[2].Dictionary$2(System.String,UnityEngine.GameObject),"ps":1},{"n":"_0xdc419f5e","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"StorageNodes","rt":$n[2].Dictionary$2(System.String,UnityEngine.GameObject),"p":[$n[1].GameObject,$n[2].Dictionary$2(System.String,UnityEngine.GameObject),$n[0].Boolean]},{"a":2,"n":"Tip","t":8,"pi":[{"n":"_0x86ca4405","pt":$n[7]._0x5d77a5fd,"ps":0}],"sn":"Tip","rt":$n[0].Void,"p":[$n[7]._0x5d77a5fd]},{"a":2,"n":"Tip","t":8,"pi":[{"n":"_0x70d89797","pt":$n[0].String,"ps":0}],"sn":"Tip$1","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"button_AudioAndMobClick","t":8,"pi":[{"n":"_0x4950c342","pt":$n[1].Transform,"ps":0},{"n":"_0x4a4f2924","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"button_AudioAndMobClick","rt":$n[0].Void,"p":[$n[1].Transform,$n[0].Boolean]},{"a":2,"n":"button_Hide_MobClick","t":8,"sn":"button_Hide_MobClick","rt":$n[0].Void},{"a":2,"n":"button_noMobClick","t":8,"pi":[{"n":"_0x55ce84be","pt":$n[8].BaseNode,"ps":0},{"n":"_0xfc6c651d","pt":$n[1].GameObject,"ps":1}],"sn":"button_noMobClick","rt":$n[0].Void,"p":[$n[8].BaseNode,$n[1].GameObject]},{"a":2,"n":"button_noMobClick","t":8,"pi":[{"n":"_0x309861ba","pt":$n[8].BaseNode,"ps":0},{"n":"_0x647bceba","pt":$n[3].Button,"ps":1}],"sn":"button_noMobClick$1","rt":$n[0].Void,"p":[$n[8].BaseNode,$n[3].Button]},{"a":2,"n":"get_sMoreSDKKey","t":8,"sn":"get_sMoreSDKKey","rt":$n[0].String},{"a":2,"n":"set_sMoreSDKKey","t":8,"pi":[{"n":"_0x46e6d367","pt":$n[0].String,"ps":0}],"sn":"set_sMoreSDKKey","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"sMoreSDKKey","t":4,"rt":$n[0].String,"sn":"sMoreSDKKey"}]}; }, $n);
    /*SC._0x243e2502 end.*/

    /*SC._0xf10be04f start.*/
    $m("SC._0xf10be04f", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnLogMessageReceived","t":8,"pi":[{"n":"_0x9b7e5ee1","pt":$n[0].String,"ps":0},{"n":"_0x0804fe88","pt":$n[0].String,"ps":1},{"n":"_0x43435907","pt":$n[1].LogType,"ps":2}],"sn":"OnLogMessageReceived","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,$n[1].LogType]},{"a":2,"n":"ActiveWindow","t":4,"rt":$n[0].Boolean,"sn":"ActiveWindow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SC._0xf10be04f end.*/

    /*SC._0xf42a8601 start.*/
    $m("SC._0xf42a8601", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Check","t":8,"pi":[{"n":"_0x7a1df249","pt":$n[0].String,"ps":0},{"n":"_0x5ca4d87c","pt":Function,"ps":1}],"sn":"Check","rt":$n[0].Boolean,"p":[$n[0].String,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Count","t":8,"pi":[{"n":"_0xb1def1a7","pt":$n[0].String,"ps":0}],"sn":"Count","rt":$n[0].Int32,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OnEvent","t":8,"pi":[{"n":"_0xdaf6a25f","pt":$n[8].SCEventArgs,"ps":0}],"sn":"OnEvent","rt":$n[0].Void,"p":[$n[8].SCEventArgs]},{"a":2,"n":"OnEvent","t":8,"pi":[{"n":"_0x0e0fcee7","pt":$n[0].String,"ps":0},{"n":"_0x91bc3162","dv":null,"o":true,"pt":$n[0].Object,"ps":1},{"n":"_0x3fc4fedc","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x2fb3702f","dv":null,"o":true,"pt":$n[0].Object,"ps":3},{"n":"_0x9a3b6ca6","dv":null,"o":true,"pt":$n[0].Object,"ps":4},{"n":"_0x166425de","dv":null,"o":true,"pt":$n[0].Object,"ps":5}],"sn":"OnEvent$1","rt":$n[0].Void,"p":[$n[0].String,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object,$n[0].Object]},{"a":2,"n":"RegisterEvent","t":8,"pi":[{"n":"_0x05f67605","pt":$n[0].String,"ps":0},{"n":"_0x56fa34d4","pt":Function,"ps":1},{"n":"_0xec7524e4","dv":null,"o":true,"pt":$n[0].Array.type(System.Type),"ps":2}],"sn":"RegisterEvent","rt":$n[0].Void,"p":[$n[0].String,Function,$n[0].Array.type(System.Type)]},{"a":2,"n":"SetDefaultHandler","t":8,"pi":[{"n":"_0x77b1a106","pt":Function,"ps":0}],"sn":"SetDefaultHandler","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"UnRegisterEvent","t":8,"pi":[{"n":"_0x101f735e","pt":$n[0].String,"ps":0},{"n":"_0xcc93bb11","pt":Function,"ps":1}],"sn":"UnRegisterEvent","rt":$n[0].Void,"p":[$n[0].String,Function]},{"a":2,"n":"UnRegisterEventAll","t":8,"pi":[{"n":"_0x9aeaab87","dv":null,"o":true,"pt":$n[0].String,"ps":0}],"sn":"UnRegisterEventAll","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"EventCallBackParamType","t":4,"rt":$n[2].Dictionary$2(System.String,System.Array.type(System.Type)),"sn":"EventCallBackParamType"},{"a":2,"n":"EventType","t":4,"rt":$n[11]._0xec09438b,"sn":"EventType"},{"a":2,"n":"iEventCount","t":4,"rt":$n[0].Int32,"sn":"iEventCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"iEventHandlerCount","t":4,"rt":$n[0].Int32,"sn":"iEventHandlerCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xf42a8601 end.*/

    /*SC._0xd3acda1a start.*/
    $m("SC._0xd3acda1a", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadAsset","t":8,"pi":[{"n":"_0xa5b684ca","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"LoadAsset$1","rt":System.Object,"p":[$n[0].String]},{"a":2,"n":"LoadAsset","t":8,"pi":[{"n":"_0xcf8be0a4","pt":$n[0].String,"ps":0}],"sn":"LoadAsset$3","rt":$n[1].Object,"p":[$n[0].String]},{"a":2,"n":"LoadAsset","t":8,"pi":[{"n":"_0x1c13fba1","pt":$n[0].String,"ps":0},{"n":"_0x0e54147d","pt":$n[0].Boolean,"ps":1}],"tpc":1,"tprm":["T"],"sn":"LoadAsset","rt":System.Object,"p":[$n[0].String,$n[0].Boolean]},{"a":2,"n":"LoadAsset","t":8,"pi":[{"n":"_0xfb5b86e8","pt":$n[0].String,"ps":0},{"n":"_0x560c9477","pt":$n[0].String,"ps":1}],"tpc":1,"tprm":["T"],"sn":"LoadAsset$2","rt":System.Object,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0xd7ea7545","pt":$n[0].String,"ps":0},{"n":"_0xd6ffb1de","pt":Function,"ps":1}],"sn":"LoadAssetAsync$2","rt":$n[0].Void,"p":[$n[0].String,Function]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0xfa2beb8d","pt":$n[0].String,"ps":0},{"n":"_0x7a0cac48","pt":$n[8]._0x0df97461,"ps":1}],"sn":"LoadAssetAsync","rt":$n[0].Void,"p":[$n[0].String,$n[8]._0x0df97461]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0x7b5a6269","pt":$n[0].String,"ps":0},{"n":"_0x16446b53","pt":$n[8]._0x0df97461,"ps":1}],"tpc":1,"tprm":["T"],"sn":"LoadAssetAsync$4","rt":$n[0].Void,"p":[$n[0].String,$n[8]._0x0df97461]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0xdbee15b7","pt":$n[0].String,"ps":0},{"n":"_0xb139cb5b","pt":$n[8]._0x0df97461,"ps":1},{"n":"_0xc14a24a3","pt":$n[0].Object,"ps":2}],"sn":"LoadAssetAsync$1","rt":$n[0].Void,"p":[$n[0].String,$n[8]._0x0df97461,$n[0].Object]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0xb08b3b3d","pt":$n[0].String,"ps":0},{"n":"_0xb66e9807","pt":$n[8]._0x0df97461,"ps":1},{"n":"_0x6b14fc2c","pt":$n[0].Object,"ps":2}],"tpc":1,"tprm":["T"],"sn":"LoadAssetAsync$5","rt":$n[0].Void,"p":[$n[0].String,$n[8]._0x0df97461,$n[0].Object]},{"a":2,"n":"LoadAssetAsync","t":8,"pi":[{"n":"_0xf3018c8b","pt":$n[0].String,"ps":0},{"n":"_0xfd95431e","pt":$n[0].Type,"ps":1},{"n":"_0xe1854758","pt":$n[8]._0x0df97461,"ps":2},{"n":"_0x22d08548","pt":$n[0].Object,"ps":3}],"sn":"LoadAssetAsync$3","rt":$n[0].Void,"p":[$n[0].String,$n[0].Type,$n[8]._0x0df97461,$n[0].Object]},{"a":2,"n":"LoadAssets","t":8,"pi":[{"n":"_0x9cf4471c","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"LoadAssets","rt":System.Array.type(System.Object),"p":[$n[0].String]},{"a":2,"n":"LoadAssets","t":8,"pi":[{"n":"_0x8fbe7f20","pt":$n[0].String,"ps":0}],"sn":"LoadAssets$1","rt":System.Array.type(UnityEngine.Object),"p":[$n[0].String]},{"a":2,"n":"LoadShader","t":8,"pi":[{"n":"_0xd75825e0","pt":$n[0].String,"ps":0}],"sn":"LoadShader","rt":$n[1].Shader,"p":[$n[0].String]},{"a":2,"n":"UnloadAsset","t":8,"pi":[{"n":"_0xd1ee9718","pt":$n[0].Object,"ps":0}],"sn":"UnloadAsset","rt":$n[0].Void,"p":[$n[0].Object]},{"a":2,"n":"AssetPool_AutoReleaseInterval","t":4,"rt":$n[0].Single,"sn":"AssetPool_AutoReleaseInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"AssetPool_Capacity","t":4,"rt":$n[0].Int32,"sn":"AssetPool_Capacity","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xd3acda1a end.*/

    /*SC._0x5467135e start.*/
    $m("SC._0x5467135e", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Event","t":8,"pi":[{"n":"_0xbec26736","pt":$n[0].String,"ps":0},{"n":"_0x537f4d4b","dv":0,"o":true,"pt":$n[0].Int32,"ps":1},{"n":"_0x17f99e16","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"_0xb9e365ad","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"Event","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"Event","t":8,"pi":[{"n":"_0x6bb7ad52","pt":$n[0].String,"ps":0},{"n":"_0x20daac36","dv":null,"o":true,"pt":$n[0].String,"ps":1},{"n":"_0xb4828593","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"_0xbcfebdea","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"Event$1","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"EventGroup","t":8,"pi":[{"n":"_0x88236e05","pt":$n[0].String,"ps":0},{"n":"_0x7f41a718","pt":$n[0].Int32,"ps":1},{"n":"_0xde087889","pt":$n[0].Int32,"ps":2},{"n":"_0x0b2c0120","pt":$n[0].Int32,"ps":3},{"n":"_0xf7de1b52","dv":null,"o":true,"pt":$n[0].String,"ps":4}],"sn":"EventGroup","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32,$n[0].Int32,$n[0].Int32,$n[0].String]},{"a":2,"n":"GetSimulationMap","t":8,"sn":"GetSimulationMap","rt":$n[0].Object},{"a":2,"n":"OnVideoAD","t":8,"pi":[{"n":"_0xcdbaaea7","pt":$n[0].String,"ps":0}],"sn":"OnVideoAD","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"ResetSimulation","t":8,"sn":"ResetSimulation","rt":$n[0].Void}]}; }, $n);
    /*SC._0x5467135e end.*/

    /*SC._0x30b81eb5 start.*/
    $m("SC._0x30b81eb5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AllowResign","t":8,"pi":[{"n":"_0x8a83dad6","pt":$n[0].Int32,"ps":0}],"sn":"AllowResign","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"AllowShowLaunchButton","t":8,"sn":"AllowShowLaunchButton","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"AllowSignIn","t":8,"pi":[{"n":"_0x84922566","pt":$n[0].Int32,"ps":0}],"sn":"AllowSignIn","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetCurDays","t":8,"sn":"GetCurDays","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetMaxDays","t":8,"sn":"GetMaxDays","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HasSignIn","t":8,"pi":[{"n":"_0x069b3862","pt":$n[0].Int32,"ps":0}],"sn":"HasSignIn","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CurSignInDays","t":4,"rt":$n[0].Int32,"sn":"CurSignInDays","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CurSignInStartTime","t":4,"rt":$n[0].Int64,"sn":"CurSignInStartTime"},{"a":2,"n":"lSignInConfigs","t":4,"rt":$n[2].List$1(SCParam.SignTable),"sn":"lSignInConfigs"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0x30b81eb5 end.*/

    /*SC._0x51201c30 start.*/
    $m("SC._0x51201c30", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x18ca4715","is":true,"t":4,"rt":$n[8]._0x51201c30,"sn":"_0x18ca4715","box":function ($v) { return Bridge.box($v, SC._0x51201c30, System.Enum.toStringFn(SC._0x51201c30));}},{"a":2,"n":"_0x22c2a3e3","is":true,"t":4,"rt":$n[8]._0x51201c30,"sn":"_0x22c2a3e3","box":function ($v) { return Bridge.box($v, SC._0x51201c30, System.Enum.toStringFn(SC._0x51201c30));}}]}; }, $n);
    /*SC._0x51201c30 end.*/

    /*SC._0x64e992e7 start.*/
    $m("SC._0x64e992e7", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x35d9f93c","is":true,"t":4,"rt":$n[8]._0x64e992e7,"sn":"_0x35d9f93c","box":function ($v) { return Bridge.box($v, SC._0x64e992e7, System.Enum.toStringFn(SC._0x64e992e7));}},{"a":2,"n":"_0x781b9215","is":true,"t":4,"rt":$n[8]._0x64e992e7,"sn":"_0x781b9215","box":function ($v) { return Bridge.box($v, SC._0x64e992e7, System.Enum.toStringFn(SC._0x64e992e7));}}]}; }, $n);
    /*SC._0x64e992e7 end.*/

    /*SC._0x78f64d15 start.*/
    $m("SC._0x78f64d15", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x49f42d0e","is":true,"t":4,"rt":$n[8]._0x78f64d15,"sn":"_0x49f42d0e","box":function ($v) { return Bridge.box($v, SC._0x78f64d15, System.Enum.toStringFn(SC._0x78f64d15));}},{"a":2,"n":"_0x5e50ef31","is":true,"t":4,"rt":$n[8]._0x78f64d15,"sn":"_0x5e50ef31","box":function ($v) { return Bridge.box($v, SC._0x78f64d15, System.Enum.toStringFn(SC._0x78f64d15));}},{"a":2,"n":"_0xb21ceaff","is":true,"t":4,"rt":$n[8]._0x78f64d15,"sn":"_0xb21ceaff","box":function ($v) { return Bridge.box($v, SC._0x78f64d15, System.Enum.toStringFn(SC._0x78f64d15));}}]}; }, $n);
    /*SC._0x78f64d15 end.*/

    /*SC._0x3eb64809 start.*/
    $m("SC._0x3eb64809", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x13cc5bed","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x13cc5bed","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}},{"a":2,"n":"_0x3b5bab23","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x3b5bab23","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}},{"a":2,"n":"_0x5782580a","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x5782580a","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}},{"a":2,"n":"_0x6e4577ec","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x6e4577ec","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}},{"a":2,"n":"_0x7ec290c9","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x7ec290c9","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}},{"a":2,"n":"_0x96cc9bc4","is":true,"t":4,"rt":$n[8]._0x3eb64809,"sn":"_0x96cc9bc4","box":function ($v) { return Bridge.box($v, SC._0x3eb64809, System.Enum.toStringFn(SC._0x3eb64809));}}]}; }, $n);
    /*SC._0x3eb64809 end.*/

    /*SC._0x8677e429 start.*/
    $m("SC._0x8677e429", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x0628880e","is":true,"t":4,"rt":$n[8]._0x8677e429,"sn":"_0x0628880e","box":function ($v) { return Bridge.box($v, SC._0x8677e429, System.Enum.toStringFn(SC._0x8677e429));}},{"a":2,"n":"_0x4b891e82","is":true,"t":4,"rt":$n[8]._0x8677e429,"sn":"_0x4b891e82","box":function ($v) { return Bridge.box($v, SC._0x8677e429, System.Enum.toStringFn(SC._0x8677e429));}},{"a":2,"n":"_0xd2814de2","is":true,"t":4,"rt":$n[8]._0x8677e429,"sn":"_0xd2814de2","box":function ($v) { return Bridge.box($v, SC._0x8677e429, System.Enum.toStringFn(SC._0x8677e429));}}]}; }, $n);
    /*SC._0x8677e429 end.*/

    /*SC._0x4c1a0baf start.*/
    $m("SC._0x4c1a0baf", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x63c3a05c","is":true,"t":4,"rt":$n[8]._0x4c1a0baf,"sn":"_0x63c3a05c","box":function ($v) { return Bridge.box($v, SC._0x4c1a0baf, System.Enum.toStringFn(SC._0x4c1a0baf));}},{"a":2,"n":"_0x8f084ac9","is":true,"t":4,"rt":$n[8]._0x4c1a0baf,"sn":"_0x8f084ac9","box":function ($v) { return Bridge.box($v, SC._0x4c1a0baf, System.Enum.toStringFn(SC._0x4c1a0baf));}},{"a":2,"n":"_0xc205dea8","is":true,"t":4,"rt":$n[8]._0x4c1a0baf,"sn":"_0xc205dea8","box":function ($v) { return Bridge.box($v, SC._0x4c1a0baf, System.Enum.toStringFn(SC._0x4c1a0baf));}}]}; }, $n);
    /*SC._0x4c1a0baf end.*/

    /*SC._0xf5db246c start.*/
    $m("SC._0xf5db246c", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x1776f5b1","is":true,"t":4,"rt":$n[8]._0xf5db246c,"sn":"_0x1776f5b1","box":function ($v) { return Bridge.box($v, SC._0xf5db246c, System.Enum.toStringFn(SC._0xf5db246c));}},{"a":2,"n":"_0x88e19cd3","is":true,"t":4,"rt":$n[8]._0xf5db246c,"sn":"_0x88e19cd3","box":function ($v) { return Bridge.box($v, SC._0xf5db246c, System.Enum.toStringFn(SC._0xf5db246c));}},{"a":2,"n":"_0xcd7e86b2","is":true,"t":4,"rt":$n[8]._0xf5db246c,"sn":"_0xcd7e86b2","box":function ($v) { return Bridge.box($v, SC._0xf5db246c, System.Enum.toStringFn(SC._0xf5db246c));}},{"a":2,"n":"_0xd4bc700b","is":true,"t":4,"rt":$n[8]._0xf5db246c,"sn":"_0xd4bc700b","box":function ($v) { return Bridge.box($v, SC._0xf5db246c, System.Enum.toStringFn(SC._0xf5db246c));}}]}; }, $n);
    /*SC._0xf5db246c end.*/

    /*SC._0xbaa9aae0 start.*/
    $m("SC._0xbaa9aae0", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x93d49431","is":true,"t":4,"rt":$n[8]._0xbaa9aae0,"sn":"_0x93d49431","box":function ($v) { return Bridge.box($v, SC._0xbaa9aae0, System.Enum.toStringFn(SC._0xbaa9aae0));}}]}; }, $n);
    /*SC._0xbaa9aae0 end.*/

    /*SC._0x25f2984c start.*/
    $m("SC._0x25f2984c", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x16992405","is":true,"t":4,"rt":$n[8]._0x25f2984c,"sn":"_0x16992405","box":function ($v) { return Bridge.box($v, SC._0x25f2984c, System.Enum.toStringFn(SC._0x25f2984c));}},{"a":2,"n":"_0x83c0e208","is":true,"t":4,"rt":$n[8]._0x25f2984c,"sn":"_0x83c0e208","box":function ($v) { return Bridge.box($v, SC._0x25f2984c, System.Enum.toStringFn(SC._0x25f2984c));}}]}; }, $n);
    /*SC._0x25f2984c end.*/

    /*SC._0xb3912e6f start.*/
    $m("SC._0xb3912e6f", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ExitGame","t":8,"sn":"ExitGame","rt":$n[0].Void},{"a":2,"n":"ExitGameWin","t":8,"sn":"ExitGameWin","rt":$n[0].Void},{"a":2,"n":"GetCurrentChannel","t":8,"sn":"GetCurrentChannel","rt":$n[0].String},{"a":2,"n":"GetCurrentGroupIndex","t":8,"sn":"GetCurrentGroupIndex","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetCurrentPluginInfo","t":8,"sn":"GetCurrentPluginInfo","rt":$n[0].String},{"a":2,"n":"GetCurrentPluginName","t":8,"sn":"GetCurrentPluginName","rt":$n[0].String},{"a":2,"n":"GetDownLoadUrl","t":8,"sn":"GetDownLoadUrl","rt":$n[0].String},{"a":2,"n":"GetFreeDiamondCount","t":8,"sn":"GetFreeDiamondCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetFreeGoldCount","t":8,"sn":"GetFreeGoldCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetNativePacInfo","t":8,"pi":[{"n":"_0x7b3ca506","pt":$n[0].String,"ps":0}],"sn":"GetNativePacInfo","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"GetPackageInfoText","t":8,"pi":[{"n":"_0xaf42f338","pt":$n[0].String,"ps":0},{"n":"_0x8c6a8917","pt":$n[0].String,"ps":1}],"sn":"GetPackageInfoText","rt":$n[0].String,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"GetPluginVersion","t":8,"sn":"GetPluginVersion","rt":$n[0].String},{"a":2,"n":"GetSCGameFrameWorkVersion","t":8,"sn":"GetSCGameFrameWorkVersion","rt":$n[0].String},{"a":2,"n":"GetShellPacInfo","t":8,"pi":[{"n":"_0xe9b485b6","pt":$n[0].String,"ps":0}],"sn":"GetShellPacInfo","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"GetShellVer","t":8,"sn":"GetShellVer","rt":$n[0].String},{"a":2,"n":"IsCanReceiveFreeDiamond","t":8,"sn":"IsCanReceiveFreeDiamond","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsCanReceiveFreeGold","t":8,"sn":"IsCanReceiveFreeGold","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsDebugMode","t":8,"sn":"IsDebugMode","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsDisplayStats","t":8,"sn":"IsDisplayStats","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsExistFunction","t":8,"pi":[{"n":"_0x34ac2e85","pt":$n[0].String,"ps":0},{"n":"_0xccd2ca07","pt":$n[0].String,"ps":1}],"sn":"IsExistFunction","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsPluginShopEnable","t":8,"sn":"IsPluginShopEnable","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsPortrait","t":8,"sn":"IsPortrait","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsShowOtherGame","t":8,"sn":"IsShowOtherGame","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Post","t":8,"pi":[{"n":"_0x2110be13","pt":$n[0].String,"ps":0},{"n":"_0xd3ae8957","pt":$n[0].String,"ps":1},{"n":"_0x08f576f3","pt":$n[0].Array.type(System.Object),"ps":2}],"sn":"Post$1","rt":$n[0].String,"p":[$n[0].String,$n[0].String,$n[0].Array.type(System.Object)]},{"a":2,"n":"Post","t":8,"pi":[{"n":"_0x7c71f987","pt":$n[0].String,"ps":0},{"n":"_0x98aefeca","pt":$n[0].String,"ps":1},{"n":"_0x72d91f7d","pt":$n[0].Array.type(System.Object),"ps":2}],"tpc":1,"tprm":["T"],"sn":"Post","rt":System.Object,"p":[$n[0].String,$n[0].String,$n[0].Array.type(System.Object)]},{"a":2,"n":"SetDisplayStats","t":8,"pi":[{"n":"_0x2280fd47","pt":$n[0].Boolean,"ps":0}],"sn":"SetDisplayStats","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetPluginFreeDiamondCount","t":8,"pi":[{"n":"_0x4334d7c9","pt":$n[0].Int32,"ps":0},{"n":"_0xe694eca1","pt":$n[0].Boolean,"ps":1}],"sn":"SetPluginFreeDiamondCount","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"SetPluginFreeGoldCount","t":8,"pi":[{"n":"_0xb8ff89f0","pt":$n[0].Int32,"ps":0},{"n":"_0x53792098","pt":$n[0].Boolean,"ps":1}],"sn":"SetPluginFreeGoldCount","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"VersionCompare","t":8,"pi":[{"n":"_0x0d99af94","pt":$n[0].String,"ps":0},{"n":"_0x53f56cee","pt":$n[0].String,"ps":1}],"sn":"VersionCompare","rt":$n[0].Int32,"p":[$n[0].String,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xb3912e6f end.*/

    /*SC._0xccb74242 start.*/
    $m("SC._0xccb74242", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CancelLoad","t":8,"pi":[{"n":"_0xfc778a29","pt":$n[0].Int32,"ps":0}],"sn":"CancelLoad","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"LoadSprite","t":8,"pi":[{"n":"_0xd095f855","pt":$n[0].String,"ps":0},{"n":"_0x7d26fad8","pt":Function,"ps":1}],"sn":"LoadSprite","rt":$n[0].Int32,"p":[$n[0].String,Function],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LoadTexture","t":8,"pi":[{"n":"_0x39d85a93","pt":$n[0].String,"ps":0},{"n":"_0x61ba3451","pt":Function,"ps":1}],"sn":"LoadTexture","rt":$n[0].Int32,"p":[$n[0].String,Function],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetImgForTarget","t":8,"pi":[{"n":"_0x134e8315","pt":$n[1].Component,"ps":0},{"n":"_0x95cb5b76","pt":$n[0].String,"ps":1}],"sn":"SetImgForTarget","rt":$n[0].Int32,"p":[$n[1].Component,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetImgForTarget","t":8,"pi":[{"n":"_0x034ad094","pt":$n[1].Transform,"ps":0},{"n":"_0x23b66ca9","pt":$n[0].String,"ps":1}],"sn":"SetImgForTarget$3","rt":$n[0].Int32,"p":[$n[1].Transform,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetImgForTarget","t":8,"pi":[{"n":"_0x5bc175df","pt":$n[3].Image,"ps":0},{"n":"_0x4b2202c9","pt":$n[0].String,"ps":1}],"sn":"SetImgForTarget$4","rt":$n[0].Void,"p":[$n[3].Image,$n[0].String]},{"a":2,"n":"SetImgForTarget","t":8,"pi":[{"n":"_0xeb707c6c","pt":$n[1].Component,"ps":0},{"n":"_0x31b3dd93","pt":$n[0].String,"ps":1},{"n":"_0x1afb5f2e","pt":$n[1].Rect,"ps":2}],"sn":"SetImgForTarget$1","rt":$n[0].Int32,"p":[$n[1].Component,$n[0].String,$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetImgForTarget","t":8,"pi":[{"n":"_0x760316e5","pt":$n[1].Component,"ps":0},{"n":"_0x92880c4c","pt":$n[0].String,"ps":1},{"n":"_0xbe0ee9a8","pt":$n[1].Rect,"ps":2},{"n":"_0x6c2f1716","pt":$n[1].Vector2,"ps":3}],"sn":"SetImgForTarget$2","rt":$n[0].Int32,"p":[$n[1].Component,$n[0].String,$n[1].Rect,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SC._0xccb74242 end.*/

    /*SC._0x1aa07f01 start.*/
    $m("SC._0x1aa07f01", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0x1aa07f01 end.*/

    /*SC._0x5fb9d77b start.*/
    $m("SC._0x5fb9d77b", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNextStageInfo","t":8,"sn":"GetNextStageInfo","rt":$n[7].StageLevelTable},{"a":2,"n":"GetSectionLocalState","t":8,"pi":[{"n":"_0xd7f39911","pt":$n[0].Int32,"ps":0}],"sn":"GetSectionLocalState","rt":$n[7]._0x0bc1ed17,"p":[$n[0].Int32]},{"a":2,"n":"GetSectionStarsNum","t":8,"pi":[{"n":"_0x7c9e26a5","pt":$n[0].Int32,"ps":0}],"sn":"GetSectionStarsNum","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetStageLocalState","t":8,"pi":[{"n":"_0x830657be","pt":$n[0].String,"ps":0}],"sn":"GetStageLocalState","rt":$n[7]._0x644cdd14,"p":[$n[0].String]},{"a":2,"n":"GetTotalStarsNum","t":8,"sn":"GetTotalStarsNum","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OnStagePass","t":8,"pi":[{"n":"_0xf9ff2c6e","pt":$n[0].String,"ps":0},{"n":"_0x0cedecec","pt":$n[0].Int32,"ps":1}],"sn":"OnStagePass","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32]},{"a":2,"n":"OnStageUnlocked","t":8,"pi":[{"n":"_0x98d2ef41","pt":$n[0].String,"ps":0}],"sn":"OnStageUnlocked","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"OnStageUnlocked","t":8,"pi":[{"n":"_0xefa2f825","pt":$n[0].Array.type(System.String),"ps":0}],"sn":"OnStageUnlocked$1","rt":$n[0].Void,"p":[$n[0].Array.type(System.String)]},{"a":2,"n":"ShowWindow","t":8,"pi":[{"n":"_0x94ee64e9","dv":null,"o":true,"pt":$n[7]._0x96595b61,"ps":0},{"n":"_0x7c0b2361","dv":"LayerStageLevel","o":true,"pt":$n[0].String,"ps":1}],"sn":"ShowWindow","rt":$n[0].Void,"p":[$n[7]._0x96595b61,$n[0].String]},{"a":2,"n":"SkipStageTo","t":8,"pi":[{"n":"_0xe62f1087","pt":$n[0].String,"ps":0}],"sn":"SkipStageTo","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"curStageID","t":4,"rt":$n[0].String,"sn":"curStageID"},{"a":2,"n":"events_onSectionProgressAwardReceived","t":4,"rt":$n[0].String,"sn":"events_onSectionProgressAwardReceived"},{"a":2,"n":"events_onStageDataChanged","t":4,"rt":$n[0].String,"sn":"events_onStageDataChanged"},{"a":2,"n":"events_onStagePass","t":4,"rt":$n[0].String,"sn":"events_onStagePass"},{"a":2,"n":"events_onStageUnlocked","t":4,"rt":$n[0].String,"sn":"events_onStageUnlocked"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0x5fb9d77b end.*/

    /*SC._0x60d9f073 start.*/
    $m("SC._0x60d9f073", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddByItemId","t":8,"pi":[{"n":"_0x32d113c0","pt":$n[0].String,"ps":0},{"n":"_0x5dd4101f","pt":$n[0].Int64,"ps":1},{"n":"_0x556c208c","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x77fa8f04","dv":null,"o":true,"pt":$n[0].String,"ps":3}],"sn":"AddByItemId","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].Int64,$n[0].Object,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"AddByItemList","t":8,"pi":[{"n":"_0x7f64238a","pt":$n[2].List$1(SCParam._0xa241aa20),"ps":0},{"n":"_0x34d8b3f5","dv":"NotifyAddInsList","o":true,"pt":$n[0].String,"ps":1},{"n":"_0x1bdce1ba","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0xe0a5490f","dv":null,"o":true,"pt":$n[0].String,"ps":3}],"sn":"AddByItemList","rt":$n[0].Boolean,"p":[$n[2].List$1(SCParam._0xa241aa20),$n[0].String,$n[0].Object,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"AddByItemList","t":8,"pi":[{"n":"_0x745274aa","pt":$n[2].List$1(SCParam._0xa241aa20),"ps":0},{"n":"_0x553ba855","pt":Function,"ps":1},{"n":"_0x794a0724","pt":$n[0].String,"ps":2},{"n":"_0x5c8a9376","pt":$n[0].Object,"ps":3},{"n":"_0x9ab5a018","pt":$n[0].String,"ps":4}],"sn":"AddByItemList$1","rt":$n[0].Void,"p":[$n[2].List$1(SCParam._0xa241aa20),Function,$n[0].String,$n[0].Object,$n[0].String]},{"a":2,"n":"CheckInsEnough","t":8,"pi":[{"n":"_0xed78cd5f","pt":$n[0].String,"ps":0},{"n":"_0x3f09ef5c","pt":$n[0].Int64,"ps":1},{"n":"_0x6676398d","dv":null,"o":true,"pt":$n[0].String,"ps":2},{"n":"_0x5d42f503","dv":null,"o":true,"pt":$n[0].Object,"ps":3}],"sn":"CheckInsEnough","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].Int64,$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CutByItemId","t":8,"pi":[{"n":"_0xd9c30111","pt":$n[0].String,"ps":0},{"n":"_0x4dcd2554","pt":$n[0].Int64,"ps":1},{"n":"_0xb04a96c5","dv":null,"o":true,"pt":$n[0].Object,"ps":2},{"n":"_0x03e398b4","dv":null,"o":true,"pt":$n[0].String,"ps":3}],"sn":"CutByItemId","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].Int64,$n[0].Object,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Delete","t":8,"pi":[{"n":"_0x841bd8e1","pt":$n[0].String,"ps":0},{"n":"_0x16b8ce75","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"Delete","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Get","t":8,"pi":[{"n":"_0x5d69c18b","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Get","rt":System.Object,"p":[$n[0].String]},{"a":2,"n":"GetAll","t":8,"pi":[{"n":"_0xc83dee77","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetAll","rt":$n[2].List$1(System.Object),"p":[$n[0].Boolean]},{"a":2,"n":"GetCanAddCount","t":8,"pi":[{"n":"_0x567f1b85","pt":$n[0].String,"ps":0}],"sn":"GetCanAddCount","rt":$n[0].Int64,"p":[$n[0].String]},{"a":2,"n":"GetCanCutCount","t":8,"pi":[{"n":"_0x6b5eee27","pt":$n[0].String,"ps":0}],"sn":"GetCanCutCount","rt":$n[0].Int64,"p":[$n[0].String]},{"a":2,"n":"GetCountByItemId","t":8,"pi":[{"n":"_0xe9bef309","pt":$n[0].String,"ps":0}],"sn":"GetCountByItemId","rt":$n[0].Int64,"p":[$n[0].String]},{"a":2,"n":"GetFirstByItemId","t":8,"pi":[{"n":"_0xfdbe07d5","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetFirstByItemId","rt":System.Object,"p":[$n[0].String]},{"a":2,"n":"GetListByItemId","t":8,"pi":[{"n":"_0x86000317","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"GetListByItemId","rt":$n[2].List$1(System.Object),"p":[$n[0].String]},{"a":2,"n":"IsMoneyByItemId","t":8,"pi":[{"n":"_0x07aa0723","pt":$n[0].String,"ps":0},{"n":"_0xa78fc491","dv":null,"o":true,"pt":$n[0].String,"ps":1}],"sn":"IsMoneyByItemId","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"EventType","t":4,"rt":$n[11]._0xbb7416ff,"sn":"EventType"},{"a":2,"n":"InsAddChangeEventHandler","t":4,"rt":Function,"sn":"InsAddChangeEventHandler"},{"a":2,"n":"InsCutChangeEvenHandler","t":4,"rt":Function,"sn":"InsCutChangeEvenHandler"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC._0x60d9f073 end.*/

    /*SC.PayCommon start.*/
    $m("SC.PayCommon", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddDiamond","t":8,"pi":[{"n":"_0x1c34885b","pt":$n[0].Int64,"ps":0},{"n":"_0xfc82f341","pt":$n[0].String,"ps":1},{"n":"_0x19acedfc","dv":null,"o":true,"pt":Function,"ps":2},{"n":"_0xe481d12f","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"AddDiamond","rt":$n[0].Void,"p":[$n[0].Int64,$n[0].String,Function,$n[0].Boolean]},{"a":2,"n":"AddGold","t":8,"pi":[{"n":"_0xfb21152a","pt":$n[0].Int64,"ps":0},{"n":"_0xb0ab463c","pt":$n[0].String,"ps":1},{"n":"_0x7e98461b","dv":null,"o":true,"pt":Function,"ps":2},{"n":"_0x3371e18c","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"AddGold","rt":$n[0].Void,"p":[$n[0].Int64,$n[0].String,Function,$n[0].Boolean]},{"a":2,"n":"AddGoldCheckGoldRate","t":8,"pi":[{"n":"_0x9ec17e7e","pt":$n[0].Int32,"ps":0},{"n":"_0xdec226d9","pt":$n[0].String,"ps":1},{"n":"_0x4269b1d3","dv":null,"o":true,"pt":Function,"ps":2},{"n":"_0xba0a0088","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"AddGoldCheckGoldRate","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].String,Function,$n[0].Boolean]},{"a":2,"n":"AddResumeOrderCB","t":8,"pi":[{"n":"_0xf2ed8040","pt":Function,"ps":0}],"sn":"AddResumeOrderCB","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"CountPayItemEvent","t":8,"pi":[{"n":"_0x4a63a8d0","pt":$n[0].String,"ps":0}],"sn":"CountPayItemEvent","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"GetCloseAdOrder","t":8,"sn":"GetCloseAdOrder","rt":$n[7].PaymentTable},{"a":2,"n":"GetCloseAdProductId","t":8,"sn":"GetCloseAdProductId","rt":$n[0].String},{"a":2,"n":"GetDiamond","t":8,"sn":"GetDiamond","rt":$n[0].Int64},{"a":2,"n":"GetDiamondProductItems","t":8,"sn":"GetDiamondProductItems","rt":$n[2].List$1(SCParam.PaymentTable)},{"a":2,"n":"GetGold","t":8,"sn":"GetGold","rt":$n[0].Int64},{"a":2,"n":"GetGoldLevel","t":8,"sn":"GetGoldLevel","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetGoldProductItems","t":8,"sn":"GetGoldProductItems","rt":$n[2].List$1(SCParam.PaymentTable)},{"a":2,"n":"GetGoldRate","t":8,"sn":"GetGoldRate","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetProductByID","t":8,"pi":[{"n":"_0x05d46c67","pt":$n[0].Int32,"ps":0}],"sn":"GetProductByID","rt":$n[7].PaymentTable,"p":[$n[0].Int32]},{"a":2,"n":"GetProductConfig","t":8,"pi":[{"n":"_0x49d8317b","pt":$n[0].String,"ps":0}],"sn":"GetProductConfig","rt":$n[7].PaymentTable,"p":[$n[0].String]},{"a":2,"n":"HasProductConfig","t":8,"pi":[{"n":"_0x85b2ef82","pt":$n[0].String,"ps":0}],"sn":"HasProductConfig","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"QueryRestoreTransactions","t":8,"pi":[{"n":"_0x2fb583f5","pt":Function,"ps":0},{"n":"_0xb2c1bd14","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"QueryRestoreTransactions","rt":$n[0].Void,"p":[Function,$n[0].Boolean]},{"a":2,"n":"ReduceDiamond","t":8,"pi":[{"n":"_0xb2f65758","pt":$n[0].Int64,"ps":0},{"n":"_0xcae1f773","dv":null,"o":true,"pt":$n[0].String,"ps":1}],"sn":"ReduceDiamond$1","rt":$n[0].Boolean,"p":[$n[0].Int64,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ReduceDiamond","t":8,"pi":[{"n":"_0xcc83bb6b","pt":$n[0].Int64,"ps":0},{"n":"_0x221fff1a","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"_0x3935d4db","dv":null,"o":true,"pt":$n[0].String,"ps":2}],"sn":"ReduceDiamond","rt":$n[0].Boolean,"p":[$n[0].Int64,$n[0].Boolean,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ReduceGold","t":8,"pi":[{"n":"_0x4f767397","pt":$n[0].Int64,"ps":0},{"n":"_0x74b53345","dv":null,"o":true,"pt":$n[0].String,"ps":1}],"sn":"ReduceGold$1","rt":$n[0].Boolean,"p":[$n[0].Int64,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ReduceGold","t":8,"pi":[{"n":"_0xb09f2687","pt":$n[0].Int64,"ps":0},{"n":"_0x1c91b099","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"_0x885343ef","dv":null,"o":true,"pt":$n[0].String,"ps":2}],"sn":"ReduceGold","rt":$n[0].Boolean,"p":[$n[0].Int64,$n[0].Boolean,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetGoldLevel","t":8,"pi":[{"n":"_0x66bc2ad7","pt":$n[0].Int32,"ps":0}],"sn":"SetGoldLevel","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"TransformGoldByRate","t":8,"pi":[{"n":"_0xbcc641de","pt":$n[0].Single,"ps":0},{"n":"_0xd50c18a5","dv":null,"o":true,"pt":$n[0].String,"ps":1}],"sn":"TransformGoldByRate","rt":$n[0].Int32,"p":[$n[0].Single,$n[0].String],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"EventType","t":4,"rt":$n[11]._0xcba66dab,"sn":"EventType"},{"a":2,"n":"sModuleName","t":4,"rt":$n[0].String,"sn":"sModuleName"}]}; }, $n);
    /*SC.PayCommon end.*/

    /*SC.Comp._0x2d5dde24._0x70caacd8 start.*/
    $m("SC.Comp._0x2d5dde24._0x70caacd8", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x02f28aab","is":true,"t":4,"rt":$n[12]._0x70caacd8,"sn":"_0x02f28aab","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x70caacd8, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x70caacd8));}},{"a":2,"n":"_0x70b3c980","is":true,"t":4,"rt":$n[12]._0x70caacd8,"sn":"_0x70b3c980","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x70caacd8, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x70caacd8));}},{"a":2,"n":"_0xc10a347a","is":true,"t":4,"rt":$n[12]._0x70caacd8,"sn":"_0xc10a347a","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x70caacd8, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x70caacd8));}},{"a":2,"n":"_0xddd25d10","is":true,"t":4,"rt":$n[12]._0x70caacd8,"sn":"_0xddd25d10","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x70caacd8, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x70caacd8));}}]}; }, $n);
    /*SC.Comp._0x2d5dde24._0x70caacd8 end.*/

    /*SC.Comp._0x2d5dde24._0xe24af399 start.*/
    $m("SC.Comp._0x2d5dde24._0xe24af399", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x4b87a3f1","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0x4b87a3f1","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0x6e9002d8","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0x6e9002d8","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0xa5090ab3","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0xa5090ab3","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0xd870380b","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0xd870380b","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0xe2cb165e","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0xe2cb165e","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0xebd2af90","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0xebd2af90","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}},{"a":2,"n":"_0xf8c8db24","is":true,"t":4,"rt":$n[12]._0xe24af399,"sn":"_0xf8c8db24","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0xe24af399, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0xe24af399));}}]}; }, $n);
    /*SC.Comp._0x2d5dde24._0xe24af399 end.*/

    /*SC.Comp._0x2d5dde24._0x61ce7d29 start.*/
    $m("SC.Comp._0x2d5dde24._0x61ce7d29", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x6e0d9b8e","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0x6e0d9b8e","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xaaf0ec98","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xaaf0ec98","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xb68c03b0","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xb68c03b0","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xbc403f84","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xbc403f84","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xeae05075","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xeae05075","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xecef81c8","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xecef81c8","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}},{"a":2,"n":"_0xed70669d","is":true,"t":4,"rt":$n[12]._0x61ce7d29,"sn":"_0xed70669d","box":function ($v) { return Bridge.box($v, SC.Comp._0x2d5dde24._0x61ce7d29, System.Enum.toStringFn(SC.Comp._0x2d5dde24._0x61ce7d29));}}]}; }, $n);
    /*SC.Comp._0x2d5dde24._0x61ce7d29 end.*/

    /*SC._0xe343fa14._0x4d8eeb7d start.*/
    $m("SC._0xe343fa14._0x4d8eeb7d", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x501c2be5","is":true,"t":4,"rt":$n[13]._0x4d8eeb7d,"sn":"_0x501c2be5","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x4d8eeb7d, System.Enum.toStringFn(SC._0xe343fa14._0x4d8eeb7d));}},{"a":2,"n":"_0xb016dcc3","is":true,"t":4,"rt":$n[13]._0x4d8eeb7d,"sn":"_0xb016dcc3","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x4d8eeb7d, System.Enum.toStringFn(SC._0xe343fa14._0x4d8eeb7d));}},{"a":2,"n":"_0xd4f77999","is":true,"t":4,"rt":$n[13]._0x4d8eeb7d,"sn":"_0xd4f77999","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x4d8eeb7d, System.Enum.toStringFn(SC._0xe343fa14._0x4d8eeb7d));}}]}; }, $n);
    /*SC._0xe343fa14._0x4d8eeb7d end.*/

    /*SC._0xe343fa14._0x2a39df3f start.*/
    $m("SC._0xe343fa14._0x2a39df3f", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x22292fca","is":true,"t":4,"rt":$n[13]._0x2a39df3f,"sn":"_0x22292fca","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x2a39df3f, System.Enum.toStringFn(SC._0xe343fa14._0x2a39df3f));}},{"a":2,"n":"_0x5a670925","is":true,"t":4,"rt":$n[13]._0x2a39df3f,"sn":"_0x5a670925","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x2a39df3f, System.Enum.toStringFn(SC._0xe343fa14._0x2a39df3f));}},{"a":2,"n":"_0x71487f0a","is":true,"t":4,"rt":$n[13]._0x2a39df3f,"sn":"_0x71487f0a","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0x2a39df3f, System.Enum.toStringFn(SC._0xe343fa14._0x2a39df3f));}}]}; }, $n);
    /*SC._0xe343fa14._0x2a39df3f end.*/

    /*SC._0xe343fa14._0xba25f158 start.*/
    $m("SC._0xe343fa14._0xba25f158", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x0f95052e","is":true,"t":4,"rt":$n[13]._0xba25f158,"sn":"_0x0f95052e","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xba25f158, System.Enum.toStringFn(SC._0xe343fa14._0xba25f158));}},{"a":2,"n":"_0x7537a158","is":true,"t":4,"rt":$n[13]._0xba25f158,"sn":"_0x7537a158","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xba25f158, System.Enum.toStringFn(SC._0xe343fa14._0xba25f158));}},{"a":2,"n":"_0xbae13d54","is":true,"t":4,"rt":$n[13]._0xba25f158,"sn":"_0xbae13d54","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xba25f158, System.Enum.toStringFn(SC._0xe343fa14._0xba25f158));}},{"a":2,"n":"_0xd2956fba","is":true,"t":4,"rt":$n[13]._0xba25f158,"sn":"_0xd2956fba","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xba25f158, System.Enum.toStringFn(SC._0xe343fa14._0xba25f158));}}]}; }, $n);
    /*SC._0xe343fa14._0xba25f158 end.*/

    /*SC._0xe343fa14._0xf0ed6377 start.*/
    $m("SC._0xe343fa14._0xf0ed6377", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x169a8730","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0x169a8730","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}},{"a":2,"n":"_0x301dc6c3","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0x301dc6c3","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}},{"a":2,"n":"_0x3f3b28c9","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0x3f3b28c9","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}},{"a":2,"n":"_0x456e1ccd","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0x456e1ccd","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}},{"a":2,"n":"_0xe04d8669","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0xe04d8669","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}},{"a":2,"n":"_0xea93af2e","is":true,"t":4,"rt":$n[13]._0xf0ed6377,"sn":"_0xea93af2e","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xf0ed6377, System.Enum.toStringFn(SC._0xe343fa14._0xf0ed6377));}}]}; }, $n);
    /*SC._0xe343fa14._0xf0ed6377 end.*/

    /*SC._0xe343fa14._0xab423958 start.*/
    $m("SC._0xe343fa14._0xab423958", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x2a5a8248","is":true,"t":4,"rt":$n[13]._0xab423958,"sn":"_0x2a5a8248","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xab423958, System.Enum.toStringFn(SC._0xe343fa14._0xab423958));}},{"a":2,"n":"_0x45e5e73d","is":true,"t":4,"rt":$n[13]._0xab423958,"sn":"_0x45e5e73d","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xab423958, System.Enum.toStringFn(SC._0xe343fa14._0xab423958));}},{"a":2,"n":"_0xdbe10c1e","is":true,"t":4,"rt":$n[13]._0xab423958,"sn":"_0xdbe10c1e","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xab423958, System.Enum.toStringFn(SC._0xe343fa14._0xab423958));}},{"a":2,"n":"_0xf155878c","is":true,"t":4,"rt":$n[13]._0xab423958,"sn":"_0xf155878c","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xab423958, System.Enum.toStringFn(SC._0xe343fa14._0xab423958));}}]}; }, $n);
    /*SC._0xe343fa14._0xab423958 end.*/

    /*SC._0xe343fa14._0xda32970e start.*/
    $m("SC._0xe343fa14._0xda32970e", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x22050865","is":true,"t":4,"rt":$n[13]._0xda32970e,"sn":"_0x22050865","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xda32970e, System.Enum.toStringFn(SC._0xe343fa14._0xda32970e));}},{"a":2,"n":"_0x78d48e6f","is":true,"t":4,"rt":$n[13]._0xda32970e,"sn":"_0x78d48e6f","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xda32970e, System.Enum.toStringFn(SC._0xe343fa14._0xda32970e));}},{"a":2,"n":"_0xdff30e73","is":true,"t":4,"rt":$n[13]._0xda32970e,"sn":"_0xdff30e73","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xda32970e, System.Enum.toStringFn(SC._0xe343fa14._0xda32970e));}},{"a":2,"n":"_0xf41e60d6","is":true,"t":4,"rt":$n[13]._0xda32970e,"sn":"_0xf41e60d6","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xda32970e, System.Enum.toStringFn(SC._0xe343fa14._0xda32970e));}}]}; }, $n);
    /*SC._0xe343fa14._0xda32970e end.*/

    /*SC._0xe343fa14._0xd88ed2ae start.*/
    $m("SC._0xe343fa14._0xd88ed2ae", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_0x43b04c6e","is":true,"t":4,"rt":$n[13]._0xd88ed2ae,"sn":"_0x43b04c6e","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xd88ed2ae, System.Enum.toStringFn(SC._0xe343fa14._0xd88ed2ae));}},{"a":2,"n":"_0x837df16a","is":true,"t":4,"rt":$n[13]._0xd88ed2ae,"sn":"_0x837df16a","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xd88ed2ae, System.Enum.toStringFn(SC._0xe343fa14._0xd88ed2ae));}},{"a":2,"n":"_0xd8bfb16d","is":true,"t":4,"rt":$n[13]._0xd88ed2ae,"sn":"_0xd8bfb16d","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xd88ed2ae, System.Enum.toStringFn(SC._0xe343fa14._0xd88ed2ae));}},{"a":2,"n":"_0xf418d6d0","is":true,"t":4,"rt":$n[13]._0xd88ed2ae,"sn":"_0xf418d6d0","box":function ($v) { return Bridge.box($v, SC._0xe343fa14._0xd88ed2ae, System.Enum.toStringFn(SC._0xe343fa14._0xd88ed2ae));}}]}; }, $n);
    /*SC._0xe343fa14._0xd88ed2ae end.*/

    /*SC.Events._0x2913d22d start.*/
    $m("SC.Events._0x2913d22d", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SC.Events._0x2913d22d end.*/

    /*SC.Events._0xec09438b start.*/
    $m("SC.Events._0xec09438b", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AdvertisementClose","t":4,"rt":$n[0].String,"sn":"AdvertisementClose"},{"a":2,"n":"AdvertisementRecover","t":4,"rt":$n[0].String,"sn":"AdvertisementRecover"},{"a":2,"n":"FullscreenAdClose","t":4,"rt":$n[0].String,"sn":"FullscreenAdClose"},{"a":2,"n":"OnChangeCloseAdStatus","t":4,"rt":$n[0].String,"sn":"OnChangeCloseAdStatus"},{"a":2,"n":"OnChangeDebugModeStatus","t":4,"rt":$n[0].String,"sn":"OnChangeDebugModeStatus"},{"a":2,"n":"OnChangeGameListStatus","t":4,"rt":$n[0].String,"sn":"OnChangeGameListStatus"},{"a":2,"n":"OnDownloadMoreGameIconCompleted","t":4,"rt":$n[0].String,"sn":"OnDownloadMoreGameIconCompleted"},{"a":2,"n":"Opportunity_GameOver","t":4,"rt":$n[0].String,"sn":"Opportunity_GameOver"},{"a":2,"n":"Opportunity_GiveUp","t":4,"rt":$n[0].String,"sn":"Opportunity_GiveUp"},{"a":2,"n":"Opportunity_Restart","t":4,"rt":$n[0].String,"sn":"Opportunity_Restart"},{"a":2,"n":"UpdateProduct","t":4,"rt":$n[0].String,"sn":"UpdateProduct"},{"a":2,"n":"onIncompletePayOrderToDeal","t":4,"rt":$n[0].String,"sn":"onIncompletePayOrderToDeal"},{"a":2,"n":"onNativeAdClosedByClicked_Json","t":4,"rt":$n[0].String,"sn":"onNativeAdClosedByClicked_Json"},{"a":2,"n":"onNativeAdClosedByUser_Json","t":4,"rt":$n[0].String,"sn":"onNativeAdClosedByUser_Json"},{"a":2,"n":"onNativeAdShow_Json","t":4,"rt":$n[0].String,"sn":"onNativeAdShow_Json"},{"a":2,"n":"onSocialShareSuccess","t":4,"rt":$n[0].String,"sn":"onSocialShareSuccess"}]}; }, $n);
    /*SC.Events._0xec09438b end.*/

    /*SC.Events._0xbb7416ff start.*/
    $m("SC.Events._0xbb7416ff", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Enough_Show_Shop","t":4,"rt":$n[0].String,"sn":"Enough_Show_Shop"},{"a":2,"n":"Enough_Show_Tip","t":4,"rt":$n[0].String,"sn":"Enough_Show_Tip"},{"a":2,"n":"closeAd","t":4,"rt":$n[0].String,"sn":"closeAd"},{"a":2,"n":"diamond","t":4,"rt":$n[0].String,"sn":"diamond"},{"a":2,"n":"gold","t":4,"rt":$n[0].String,"sn":"gold"},{"a":2,"n":"timeLimitCloseAd","t":4,"rt":$n[0].String,"sn":"timeLimitCloseAd"}]}; }, $n);
    /*SC.Events._0xbb7416ff end.*/

    /*SC.Events._0xe798b30e start.*/
    $m("SC.Events._0xe798b30e", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BOTTOM","is":true,"t":4,"rt":$n[0].String,"sn":"BOTTOM"},{"a":2,"n":"NONE","is":true,"t":4,"rt":$n[0].String,"sn":"NONE"},{"a":2,"n":"TOP","is":true,"t":4,"rt":$n[0].String,"sn":"TOP"}]}; }, $n);
    /*SC.Events._0xe798b30e end.*/

    /*SC.Events._0xea722ab1 start.*/
    $m("SC.Events._0xea722ab1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HIGH","is":true,"t":4,"rt":$n[0].String,"sn":"HIGH"},{"a":2,"n":"NORMAL","is":true,"t":4,"rt":$n[0].String,"sn":"NORMAL"}]}; }, $n);
    /*SC.Events._0xea722ab1 end.*/

    /*SC.Events.EnumShowVideoType start.*/
    $m("SC.Events.EnumShowVideoType", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cancel","t":4,"rt":$n[0].String,"sn":"Cancel"},{"a":2,"n":"Loaded","t":4,"rt":$n[0].String,"sn":"Loaded"},{"a":2,"n":"Loading","t":4,"rt":$n[0].String,"sn":"Loading"},{"a":2,"n":"NoEnoughMemory","t":4,"rt":$n[0].String,"sn":"NoEnoughMemory"},{"a":2,"n":"NoFinished","t":4,"rt":$n[0].String,"sn":"NoFinished"},{"a":2,"n":"Success","t":4,"rt":$n[0].String,"sn":"Success"}]}; }, $n);
    /*SC.Events.EnumShowVideoType end.*/

    /*SC.Events._0xcba66dab start.*/
    $m("SC.Events._0xcba66dab", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DialogShop","t":4,"rt":$n[0].String,"sn":"DialogShop"},{"a":2,"n":"DialogShopAD","t":4,"rt":$n[0].String,"sn":"DialogShopAD"},{"a":2,"n":"DialogShopDiamond","t":4,"rt":$n[0].String,"sn":"DialogShopDiamond"},{"a":2,"n":"DialogShopGold","t":4,"rt":$n[0].String,"sn":"DialogShopGold"},{"a":2,"n":"DialogShopOfferWall","t":4,"rt":$n[0].String,"sn":"DialogShopOfferWall"},{"a":2,"n":"Module_Ins","t":4,"rt":$n[0].String,"sn":"Module_Ins"},{"a":2,"n":"MoreGame","t":4,"rt":$n[0].String,"sn":"MoreGame"},{"a":2,"n":"None","t":4,"rt":$n[0].String,"sn":"None"},{"a":2,"n":"Other","t":4,"rt":$n[0].String,"sn":"Other"},{"a":2,"n":"Settle","t":4,"rt":$n[0].String,"sn":"Settle"},{"a":2,"n":"Subscribe","t":4,"rt":$n[0].String,"sn":"Subscribe"},{"a":2,"n":"Video","t":4,"rt":$n[0].String,"sn":"Video"},{"a":4,"n":"_0x48ef288d","t":4,"rt":$n[0].String,"sn":"_0x48ef288d"},{"a":4,"n":"_0x5cf4a891","t":4,"rt":$n[0].String,"sn":"_0x5cf4a891"},{"a":4,"n":"_0x6fc2751b","t":4,"rt":$n[0].String,"sn":"_0x6fc2751b"},{"a":4,"n":"_0xf86ff0ef","t":4,"rt":$n[0].String,"sn":"_0xf86ff0ef"}]}; }, $n);
    /*SC.Events._0xcba66dab end.*/

    /*SC.Events._0x69d68f1a start.*/
    $m("SC.Events._0x69d68f1a", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Audio_OnSCAudioStateChange","t":4,"rt":$n[0].String,"sn":"Audio_OnSCAudioStateChange"},{"a":2,"n":"Enter_Game_Success","t":4,"rt":$n[0].String,"sn":"Enter_Game_Success"},{"a":2,"n":"Game_Exit","t":4,"rt":$n[0].String,"sn":"Game_Exit"},{"a":2,"n":"Global_Event_NewDay","t":4,"rt":$n[0].String,"sn":"Global_Event_NewDay"},{"a":2,"n":"Money_AddAnimEnd","t":4,"rt":$n[0].String,"sn":"Money_AddAnimEnd"},{"a":2,"n":"Money_AddAnimStart","t":4,"rt":$n[0].String,"sn":"Money_AddAnimStart"},{"a":2,"n":"Plugin_Catalog_Path","t":4,"rt":$n[0].String,"sn":"Plugin_Catalog_Path"},{"a":2,"n":"Resolution_Change","t":4,"rt":$n[0].String,"sn":"Resolution_Change"},{"a":2,"n":"SDK_Hide_Dialog_OnNet","t":4,"rt":$n[0].String,"sn":"SDK_Hide_Dialog_OnNet"},{"a":2,"n":"SDK_Init_Complete","t":4,"rt":$n[0].String,"sn":"SDK_Init_Complete"},{"a":2,"n":"Video_Loading","t":4,"rt":$n[0].String,"sn":"Video_Loading"},{"a":2,"n":"Video_Play_Complete","t":4,"rt":$n[0].String,"sn":"Video_Play_Complete"},{"a":4,"n":"_0x28832bc6","t":4,"rt":$n[0].String,"sn":"_0x28832bc6"},{"a":4,"n":"_0x2d5bd09d","t":4,"rt":$n[0].String,"sn":"_0x2d5bd09d"},{"a":4,"n":"_0x308ab6d2","t":4,"rt":$n[0].String,"sn":"_0x308ab6d2"},{"a":4,"n":"_0x85db0ddc","t":4,"rt":$n[0].String,"sn":"_0x85db0ddc"},{"a":4,"n":"_0xf4fb7811","t":4,"rt":$n[0].String,"sn":"_0xf4fb7811"}]}; }, $n);
    /*SC.Events._0x69d68f1a end.*/

    /*SC.Events._0x9e2250d3 start.*/
    $m("SC.Events._0x9e2250d3", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SC.Events._0x9e2250d3 end.*/

    /*SC.Utility.TExcel start.*/
    $m("SC.Utility.TExcel", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ExcelToJson","is":true,"t":8,"pi":[{"n":"_0x58d0d446","pt":$n[0].String,"ps":0},{"n":"_0x40595aa1","pt":$n[0].String,"ps":1}],"sn":"ExcelToJson","rt":$n[2].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.Object)),"p":[$n[0].String,$n[0].String]},{"a":1,"n":"_0x776c3abb","is":true,"t":8,"pi":[{"n":"_0xecbab2d1","pt":$n[0].String,"ps":0}],"sn":"_0x776c3abb","rt":$n[2].List$1(System.String),"p":[$n[0].String]},{"a":1,"n":"_0xf39cfe13","is":true,"t":8,"pi":[{"n":"_0x6c9f04dd","pt":$n[0].String,"ps":0}],"sn":"_0xf39cfe13","rt":$n[2].List$1(System.Collections.Generic.List$1(System.String)),"p":[$n[0].String]}]}; }, $n);
    /*SC.Utility.TExcel end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[14].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[14].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[14].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[14].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[14].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[14].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[16].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[4].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[15].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[4].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[16].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[4].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[15].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[4].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[4].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[3].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[4].Tweener,"p":[$n[3].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[4].Tweener,"p":[$n[3].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[17].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[15].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[3].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[17].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[3].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[4].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[4].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[4].Tweener,"p":[$n[3].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[4].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[4].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[4].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[4].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[15].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[3].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[4].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[4].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[4].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[4].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[4].DOTweenCYInstruction.WaitForCompletion,$n[4].DOTweenCYInstruction.WaitForRewind,$n[4].DOTweenCYInstruction.WaitForKill,$n[4].DOTweenCYInstruction.WaitForElapsedLoops,$n[4].DOTweenCYInstruction.WaitForPosition,$n[4].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[4].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[4].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[16].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[4].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[16].Path,$n[0].Single,$n[4].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[18].PathOptions,"ps":0},{"n":"t","pt":$n[4].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[18].PathOptions,$n[4].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[4].DOTweenAnimation.AnimationType,$n[4].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[4].Tween},{"a":2,"n":"CreateTween","t":8,"sn":"CreateTween","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[4].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[4].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[1].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[2].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[4].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenCreated","t":4,"rt":$n[0].Boolean,"sn":"_tweenCreated","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[4].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[1].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[1].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[1].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[1].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[1].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[4].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[4].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[4].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[1].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[1].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[4].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[4].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[4].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[4].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[4].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[4].Tweener,"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[4].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[4].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral$1","rt":$n[4].Tweener,"p":[$n[1].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[4].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    }});
