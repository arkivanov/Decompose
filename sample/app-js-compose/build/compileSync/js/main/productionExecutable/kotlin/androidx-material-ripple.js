(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-unit.js', './androidx-foundation.js', './androidx-animation-core.js', './androidx-ui-geometry.js', './androidx-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-foundation.js'), require('./androidx-animation-core.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-util.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-util' was not found. Please, check whether 'androidx-ui-util' is loaded prior to 'androidx-material-ripple'.");
    }
    root['androidx-material-ripple'] = factory(typeof this['androidx-material-ripple'] === 'undefined' ? {} : this['androidx-material-ripple'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-unit'], this['androidx-foundation'], this['androidx-animation-core'], this['androidx-ui-geometry'], this['androidx-ui-util']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.h8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var equals = kotlin_kotlin.$_$.u7;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var hashCode = kotlin_kotlin.$_$.c8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var lastOrNull = kotlin_kotlin.$_$.d5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var isNaN_0 = kotlin_kotlin.$_$.ub;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Ripple, 'Ripple', classMeta);
  setMetadataFor(CommonRipple, 'CommonRipple', classMeta, Ripple);
  setMetadataFor(CommonRippleIndicationInstance$addRipple$slambda, 'CommonRippleIndicationInstance$addRipple$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleIndicationInstance, 'RippleIndicationInstance', classMeta);
  setMetadataFor(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', classMeta, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda_1, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer, 'StateLayer', classMeta);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_1, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_3, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda$slambda, 'RippleAnimation$fadeOut$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda, 'RippleAnimation$fadeIn$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda, 'RippleAnimation$fadeOut$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($animateCOROUTINE$0, '$animateCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($fadeInCOROUTINE$1, '$fadeInCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fadeOutCOROUTINE$2, '$fadeOutCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(RippleAnimation, 'RippleAnimation', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DebugRippleTheme, 'DebugRippleTheme', objectMeta);
  setMetadataFor(RippleAlpha, 'RippleAlpha', classMeta);
  //endregion
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).oan = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1340080932);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance$composable)P(2!1,3:c#ui.unit.Dp)53@1880L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1340080932, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable (CommonRipple.kt:46)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed | 112 & $changed >> 12;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.x1h(interactionSource) | $composer_1.x1h(this));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable.<anonymous>' call
      tmp$ret$0 = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
      var value = tmp$ret$0;
      tmp1_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.u1c();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  };
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.xan_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.c2().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.b2();
      var ripple = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.wan_1.b2().bao_1;
      var tmp;
      if (!(alpha === 0.0)) {
        ripple.pao(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
        tmp = Unit_getInstance();
      }
      tmp$ret$2 = tmp;
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.yao_1 = $rippleAnimation;
    this.zao_1 = this$0;
    this.aap_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 5;
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 4;
            this.jf_1 = 2;
            suspendResult = this.yao_1.dap(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.cap_1 = suspendResult;
            this.kf_1 = 5;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.zao_1.xan_1.s4(this.aap_1);
            ;
            return Unit_getInstance();
          case 4:
            this.kf_1 = 5;
            var t = this.mf_1;
            this.zao_1.xan_1.s4(this.aap_1);
            ;
            throw t;
          case 5:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 5) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).q1x = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.yao_1, this.zao_1, this.aap_1, completion);
    i.bap_1 = $this$launch;
    return i;
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.tan_1 = bounded;
    this.uan_1 = radius;
    this.van_1 = color;
    this.wan_1 = rippleAlpha;
    this.xan_1 = mutableStateMapOf();
  }
  protoOf(CommonRippleIndicationInstance).k86 = function (_this__u8e3s4) {
    var color = this.van_1.b2().a3c_1;
    _this__u8e3s4.r4j();
    this.fap(_this__u8e3s4, this.uan_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).gap = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.xan_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.c2().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.b2();
      var ripple = tmp$ret$1;
      ripple.hap();
    }
    var origin = this.tan_1 ? interaction.a9j_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.uan_1, this.tan_1);
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.xan_1;
    tmp1_set.h4(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).iap = function (interaction) {
    var tmp0_safe_receiver = this.xan_1.q2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hap();
    }
  };
  protoOf(CommonRippleIndicationInstance).s1m = function () {
  };
  protoOf(CommonRippleIndicationInstance).u1m = function () {
    this.xan_1.l3();
  };
  protoOf(CommonRippleIndicationInstance).t1m = function () {
    this.xan_1.l3();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function rememberRipple$composable(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = {_v: bounded};
    var radius_0 = {_v: new Dp(radius)};
    var color_0 = color;
    var $composer_0 = $composer;
    $composer_0.s1c(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance_0().e2m_1);
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_1().n39_1;
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = bounded_0._v;
    var tmp4_remember$composable = radius_0._v.f2m_1;
    var tmp5_remember$composable = $composer_0;
    var tmp6_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp5_remember$composable;
    $composer_1.s1c(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.x1h(tmp3_remember$composable) | $composer_1.x1h(new Dp(tmp4_remember$composable)));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      tmp$ret$0 = new CommonRipple(bounded_0._v, radius_0._v.f2m_1, colorState);
      var value = tmp$ret$0;
      tmp1_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.u1c();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.sap_1 = $instance;
    this.tap_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).c87 = function (interaction, $completion) {
    var tmp = this.d87(interaction, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).eg = function (p1, $completion) {
    return this.c87((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          var tmp0_subject = this.uap_1;
          if (tmp0_subject instanceof Press) {
            this.sap_1.gap(this.uap_1, this.tap_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.sap_1.iap(this.uap_1.c9j_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.sap_1.iap(this.uap_1.e9j_1);
              } else {
                this.sap_1.jap(this.uap_1, this.tap_1);
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).d87 = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda(this.sap_1, this.tap_1, completion);
    i.uap_1 = interaction;
    return i;
  };
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.c87(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.vap_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).c14 = function (value, $completion) {
    var tmp0 = this.vap_1(value, $completion);
    return tmp0;
  };
  function Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation) {
    this.eaq_1 = $interactionSource;
    this.faq_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp_0 = this.eaq_1.n86();
            var tmp_1 = Ripple$rememberUpdatedInstance$composable$slambda$slambda_0(this.faq_1, this.gaq_1, null);
            suspendResult = tmp_0.k13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda(this.eaq_1, this.faq_1, completion);
    i.gaq_1 = $this$LaunchedEffect;
    return i;
  };
  function Ripple$rememberUpdatedInstance$composable$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.pan_1 = bounded;
    this.qan_1 = radius;
    this.ran_1 = color;
  }
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.pan_1 === other.pan_1))
      return false;
    if (!equals(this.qan_1, other.qan_1))
      return false;
    if (!equals(this.ran_1, other.ran_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = this.pan_1 | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.qan_1) | 0;
    result = imul(31, result) + hashCode(this.ran_1) | 0;
    return result;
  };
  protoOf(Ripple).l86 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1363498422);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)116@5361L7,117@5389L174,124@5617L13,124@5590L41,126@5656L155,134@5821L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1363498422, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance$composable (Ripple.kt:113)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalRippleTheme();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var theme = tmp$ret$0;
    $composer_0.s1c(2051856795);
    sourceInformation($composer_0, '121@5525L14');
    var tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp2__get_isSpecified__uq6bfr = this.ran_1.b2().a3c_1;
    tmp$ret$1 = !equals(_Color___get_value__impl__1pls5m(tmp2__get_isSpecified__uq6bfr), _Color___get_value__impl__1pls5m(Companion_getInstance_1().n39_1));
    if (tmp$ret$1) {
      tmp = this.ran_1.b2().a3c_1;
    } else {
      tmp = theme.haq($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.u1c();
    var color = rememberUpdatedState$composable(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState$composable(theme.iaq($composer_0, 0), $composer_0, 0);
    var instance = this.oan(interactionSource, this.pan_1, this.qan_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    LaunchedEffect$composable(instance, interactionSource, Ripple$rememberUpdatedInstance$composable$slambda_0(interactionSource, instance, null), $composer_0, 8 | 112 & $changed << 3);
    var tmp0_0 = instance;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  };
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.eap_1 = new StateLayer(bounded, rippleAlpha);
  }
  protoOf(RippleIndicationInstance).jap = function (interaction, scope) {
    this.eap_1.oaq(interaction, scope);
  };
  protoOf(RippleIndicationInstance).fap = function (_this__u8e3s4, radius, color) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.eap_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.fap(_this__u8e3s4, radius, color);
    tmp$ret$0 = Unit_getInstance();
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.xaq_1 = this$0;
    this.yaq_1 = $targetAlpha;
    this.zaq_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(StateLayer$handleInteraction$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.xaq_1.laq_1.a79(this.yaq_1, this.zaq_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda).q1x = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.xaq_1, this.yaq_1, this.zaq_1, completion);
    i.aar_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.jar_1 = this$0;
    this.kar_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.jar_1.laq_1.a79(0.0, this.kar_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).q1x = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.jar_1, this.kar_1, completion);
    i.lar_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.jaq_1 = bounded;
    this.kaq_1 = rippleAlpha;
    this.laq_1 = Animatable(0.0);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.maq_1 = tmp$ret$0;
    this.naq_1 = null;
  }
  protoOf(StateLayer).oaq = function (interaction, scope) {
    var tmp0_subject = interaction;
    if (tmp0_subject instanceof Enter) {
      this.maq_1.a(interaction);
    } else {
      if (tmp0_subject instanceof Exit) {
        this.maq_1.j3(interaction.z9h_1);
      } else {
        if (tmp0_subject instanceof Focus) {
          this.maq_1.a(interaction);
        } else {
          if (tmp0_subject instanceof Unfocus) {
            this.maq_1.j3(interaction.y9g_1);
          } else {
            if (tmp0_subject instanceof Start) {
              this.maq_1.a(interaction);
            } else {
              if (tmp0_subject instanceof Stop) {
                this.maq_1.j3(interaction.t9g_1);
              } else {
                if (tmp0_subject instanceof Cancel_0) {
                  this.maq_1.j3(interaction.v9g_1);
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.maq_1);
    if (!equals(this.naq_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var tmp1_subject = interaction;
        var tmp;
        if (tmp1_subject instanceof Enter) {
          tmp = this.kaq_1.b2().aao_1;
        } else {
          if (tmp1_subject instanceof Focus) {
            tmp = this.kaq_1.b2().zan_1;
          } else {
            if (tmp1_subject instanceof Start) {
              tmp = this.kaq_1.b2().yan_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.naq_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.naq_1 = newInteraction;
    }
  };
  protoOf(StateLayer).fap = function (_this__u8e3s4, radius, color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(radius));
    if (tmp$ret$0) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.jaq_1, _this__u8e3s4.z2j());
    } else {
      tmp = _this__u8e3s4.p2l(radius);
    }
    var targetRadius = tmp;
    var alpha = this.laq_1.b2();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.jaq_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp2_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.z2j());
        var tmp3_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.z2j());
        var tmp4_clipRect = Companion_getInstance_2().m3a_1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        var tmp0_with = _this__u8e3s4.y3l();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.z2j();
        tmp0_with.z2x().c3a();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_with.w3l();
        tmp1__anonymous__uwfjfc.j3a(0.0, 0.0, tmp2_clipRect, tmp3_clipRect, tmp4_clipRect);
        // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
        _this__u8e3s4.f3m(modulatedColor, targetRadius);
        tmp0_with.z2x().d3a();
        tmp0_with.v3l(previousSize);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
      } else {
        _this__u8e3s4.f3m(modulatedColor, targetRadius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (tmp0_subject instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (tmp0_subject instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (tmp0_subject instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (tmp0_subject instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (properties_initialized_Ripple_kt_3wqvym) {
    } else {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.uar_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.uar_1.jao_1.a79(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).q1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.uar_1, completion);
    i.var_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.eas_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.eas_1.kao_1.a79(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).q1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.eas_1, completion);
    i.fas_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.oas_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.oas_1.lao_1.a79(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).q1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.oas_1, completion);
    i.pas_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.yas_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.yas_1.jao_1.a79(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).q1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.yas_1, completion);
    i.zas_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0_setValue = finishedFadingIn$factory();
    return $this.nao_1.kk(_set____db54di);
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishedFadingIn$factory_0();
    tmp$ret$0 = $this.nao_1.b2();
    return tmp$ret$0;
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0_setValue = finishRequested$factory();
    return $this.oao_1.kk(_set____db54di);
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishRequested$factory_0();
    tmp$ret$0 = $this.oao_1.b2();
    return tmp$ret$0;
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.aau_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).ba1 = function ($this$coroutineScope, $completion) {
    var tmp = this.q1x($this$coroutineScope, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeIn$slambda).eg = function (p1, $completion) {
    return this.ba1((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          launch(this.bau_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.aau_1, null));
          launch(this.bau_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.aau_1, null));
          return launch(this.bau_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.aau_1, null));
        } else if (tmp === 1) {
          throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).q1x = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.aau_1, completion);
    i.bau_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.ba1($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.kau_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).ba1 = function ($this$coroutineScope, $completion) {
    var tmp = this.q1x($this$coroutineScope, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation$fadeOut$slambda).eg = function (p1, $completion) {
    return this.ba1((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          return launch(this.lau_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.kau_1, null));
        } else if (tmp === 1) {
          throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).q1x = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.kau_1, completion);
    i.lau_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.ba1($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uau_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 4;
            this.jf_1 = 1;
            suspendResult = fadeIn(this.uau_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.uau_1, true);
            this.jf_1 = 2;
            suspendResult = this.uau_1.mao_1.is(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jf_1 = 3;
            suspendResult = fadeOut(this.uau_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 4) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iat_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.iat_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rat_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.rat_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function RippleAnimation(origin, radius, bounded) {
    this.dao_1 = origin;
    this.eao_1 = radius;
    this.fao_1 = bounded;
    this.gao_1 = null;
    this.hao_1 = null;
    this.iao_1 = null;
    this.jao_1 = Animatable(0.0);
    this.kao_1 = Animatable(0.0);
    this.lao_1 = Animatable(0.0);
    this.mao_1 = CompletableDeferred(null);
    this.nao_1 = mutableStateOf(false);
    this.oao_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).dap = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(RippleAnimation).hap = function () {
    _set_finishRequested__u52oy2(this, true);
    this.mao_1.js(Unit_getInstance());
  };
  protoOf(RippleAnimation).pao = function (_this__u8e3s4, color) {
    if (this.gao_1 == null) {
      this.gao_1 = getRippleStartRadius(_this__u8e3s4.z2j());
    }
    if (this.hao_1 == null) {
      var tmp = this;
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var tmp0__get_isUnspecified__bfzg5a = this.eao_1;
      tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(tmp0__get_isUnspecified__bfzg5a));
      if (tmp$ret$0) {
        tmp_0 = getRippleEndRadius(_this__u8e3s4, this.fao_1, _this__u8e3s4.z2j());
      } else {
        tmp_0 = _this__u8e3s4.p2l(this.eao_1);
      }
      tmp.hao_1 = tmp_0;
    }
    var tmp_1 = this.dao_1;
    if ((tmp_1 == null ? null : new Offset(tmp_1)) == null) {
      this.dao_1 = _this__u8e3s4.i3m();
    }
    var tmp_2 = this.iao_1;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      this.iao_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.z2j()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.z2j()) / 2.0);
    }
    var tmp_3;
    if (_get_finishRequested__usb5ii(this) ? !_get_finishedFadingIn__pzmnej(this) : false) {
      tmp_3 = 1.0;
    } else {
      tmp_3 = this.jao_1.b2();
    }
    var alpha = tmp_3;
    var radius = lerp(ensureNotNull(this.gao_1), ensureNotNull(this.hao_1), this.kao_1.b2());
    var tmp_4 = this.dao_1;
    var tmp_5 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).p2j_1);
    var tmp_6 = this.iao_1;
    var tmp_7 = lerp(tmp_5, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).p2j_1), this.lao_1.b2());
    var tmp_8 = this.dao_1;
    var tmp_9 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).p2j_1);
    var tmp_10 = this.iao_1;
    var centerOffset = Offset_0(tmp_7, lerp(tmp_9, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_10 == null ? null : new Offset(tmp_10)).p2j_1), this.lao_1.b2()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.fao_1) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp3_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.z2j());
      var tmp4_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.z2j());
      var tmp5_clipRect = Companion_getInstance_2().m3a_1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp1_with = _this__u8e3s4.y3l();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp1_with.z2j();
      tmp1_with.z2x().c3a();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp1_with.w3l();
      tmp2__anonymous__z9zvc9.j3a(0.0, 0.0, tmp3_clipRect, tmp4_clipRect, tmp5_clipRect);
      // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
      _this__u8e3s4.f3m(modulatedColor, radius, centerOffset);
      tmp1_with.z2x().d3a();
      tmp1_with.v3l(previousSize);
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
    } else {
      _this__u8e3s4.f3m(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.p2l(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _Size___get_width__impl__58y75t(size);
    var tmp1_max = _Size___get_height__impl__a04p02(size);
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    return tmp$ret$0 * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (properties_initialized_RippleAnimation_kt_4ja21o) {
    } else {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
      BoundedRippleExtraRadius = tmp$ret$0;
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).vau = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance_1().f39_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).wau = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  protoOf(DebugRippleTheme).haq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1423573606, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor$composable (RippleTheme.kt:214)');
    }
    var tmp0 = Companion_getInstance_3().vau(Companion_getInstance_1().b39_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  protoOf(DebugRippleTheme).iaq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2071239027, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha$composable (RippleTheme.kt:217)');
    }
    var tmp0 = Companion_getInstance_3().wau(Companion_getInstance_1().b39_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.yan_1 = draggedAlpha;
    this.zan_1 = focusedAlpha;
    this.aao_1 = hoveredAlpha;
    this.bao_1 = pressedAlpha;
    this.cao_1 = 0;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.yan_1 === other.yan_1))
      return false;
    if (!(this.zan_1 === other.zan_1))
      return false;
    if (!(this.aao_1 === other.aao_1))
      return false;
    if (!(this.bao_1 === other.bao_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.yan_1);
    result = imul(31, result) + getNumberHashCode(this.zan_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.aao_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.bao_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.yan_1 + ', focusedAlpha=' + this.zan_1 + ', ' + ('hoveredAlpha=' + this.aao_1 + ', pressedAlpha=' + this.bao_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (properties_initialized_RippleTheme_kt_m09bsn) {
    } else {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = rememberRipple$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material-ripple.js.map
