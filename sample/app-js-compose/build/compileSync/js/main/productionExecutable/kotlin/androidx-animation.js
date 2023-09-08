(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './androidx-ui.js', './androidx-animation-core.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./androidx-ui.js'), require('./androidx-animation-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-animation'.");
    }
    root['androidx-animation'] = factory(typeof this['androidx-animation'] === 'undefined' ? {} : this['androidx-animation'], this['androidx-runtime'], this['androidx-ui'], this['androidx-animation-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var updateTransition$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var createChildTransitionInternal$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var isInterface = kotlin_kotlin.$_$.h8;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Enum = kotlin_kotlin.$_$.ya;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var compareTo = kotlin_kotlin.$_$.s7;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.y4;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var equals = kotlin_kotlin.$_$.u7;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var hashCode = kotlin_kotlin.$_$.c8;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.u4;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var KMutableProperty0 = kotlin_kotlin.$_$.r9;
  var THROW_ISE = kotlin_kotlin.$_$.kb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x7;
  var KProperty0 = kotlin_kotlin.$_$.t9;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.w4;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var createDeferredAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var Long = kotlin_kotlin.$_$.db;
  var toString = kotlin_kotlin.$_$.v8;
  var numberToLong = kotlin_kotlin.$_$.o8;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EnterExitState, 'EnterExitState', classMeta, Enum);
  setMetadataFor(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl', classMeta);
  setMetadataFor(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', classMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(AnimatedEnterExitImpl$composable$slambda$slambda, 'AnimatedEnterExitImpl$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(AnimatedEnterExitImpl$composable$slambda, 'AnimatedEnterExitImpl$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(LayoutModifierWithPassThroughIntrinsics, 'LayoutModifierWithPassThroughIntrinsics', classMeta, VOID, [LayoutModifier]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(ExpandShrinkModifier, 'ExpandShrinkModifier', classMeta, LayoutModifierWithPassThroughIntrinsics);
  setMetadataFor(SlideModifier, 'SlideModifier', classMeta, LayoutModifierWithPassThroughIntrinsics);
  setMetadataFor(FlingInfo, 'FlingInfo', classMeta);
  setMetadataFor(FlingCalculator, 'FlingCalculator', classMeta);
  setMetadataFor(FlingResult, 'FlingResult', classMeta);
  setMetadataFor(AndroidFlingSpline, 'AndroidFlingSpline', objectMeta);
  setMetadataFor(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', classMeta);
  //endregion
  function AnimatedVisibility$composable(visibleState, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1391157692);
    sourceInformation($composer_0, 'C(AnimatedVisibility$composable)P(5,4,1,2,3)381@20708L37,382@20784L6,382@20750L73:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(visibleState) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(enter_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(exit_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(label_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().i7s(expandIn());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().k7s(shrinkOut());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(-1391157692, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility$composable (AnimatedVisibility.kt:373)');
      }
      var transition = updateTransition$composable(visibleState, label_0._v, $composer_0, 14 & $dirty | 112 & $dirty >> 9, 0);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.s1c(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.AnimatedVisibility$composable.<anonymous>' call
        tmp$ret$0 = AnimatedVisibility$composable$lambda;
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
      AnimatedEnterExitImpl$composable(transition, tmp$ret$4, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3 | 458752 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(AnimatedVisibility$composable$lambda_0(visibleState, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedEnterExitImpl$composable(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(704138694);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl$composable)P(4,5,3,1,2)734@39380L85,739@39603L116,743@39761L270,743@39729L302,752@40041L165:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(transition) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(visible) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(enter) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(exit) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(704138694, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable (AnimatedVisibility.kt:726)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(transition);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf(visible(transition.p7h()));
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
      var isAnimationVisible = tmp$ret$4;
      if ((visible(transition.r7h()) ? true : isAnimationVisible.b2()) ? true : transition.e7j()) {
        var tmp$ret$12;
        // Inline function 'androidx.compose.animation.core.createChildTransition$composable' call
        var tmp10_createChildTransition$composable = $composer_0;
        var tmp11_createChildTransition$composable = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_2 = tmp10_createChildTransition$composable;
        $composer_2.s1c(-1355654750);
        sourceInformation($composer_2, 'CC(createChildTransition$composable)785@31111L36,786@31171L74,787@31268L39,788@31319L63:Transition.kt#pdpnli');
        if (!(0 === 0))
          label = 'ChildTransition';
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp8_remember$composable = $composer_2;
        var tmp9_remember$composable = 14 & tmp11_createChildTransition$composable;
        var $composer_3 = tmp8_remember$composable;
        $composer_3.s1c(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp6_cache = $composer_3;
        var tmp7_cache = $composer_3.x1h(transition);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp5_let = tmp6_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp7_cache ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.animation.core.createChildTransition$composable.<anonymous>' call
          tmp$ret$5 = transition.p7h();
          var value_0 = tmp$ret$5;
          tmp6_cache.p1q(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = tmp5_let;
        }
        tmp$ret$6 = tmp_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_2 = tmp$ret$7;
        tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_3.u1c();
        tmp$ret$9 = tmp0_0;
        var initialParentState = tmp$ret$9;
        var tmp$ret$10;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        var tmp12__anonymous__oq5opy = transition.e7j() ? transition.p7h() : initialParentState;
        var tmp13__anonymous__jvh1if = $composer_2;
        var tmp14__anonymous__f0seaw = 112 & tmp11_createChildTransition$composable >> 3;
        var $composer_4 = tmp13__anonymous__jvh1if;
        $composer_4.s1c(-1220581778);
        sourceInformation($composer_4, 'C740@39681L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-1220581778, tmp14__anonymous__f0seaw, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous> (AnimatedVisibility.kt:739)');
        }
        var tmp0_1 = targetEnterExit$composable(transition, visible, tmp12__anonymous__oq5opy, $composer_4, 14 & $dirty | 112 & $dirty | 896 & tmp14__anonymous__f0seaw << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_4.u1c();
        tmp$ret$10 = tmp0_1;
        var initialState = tmp$ret$10;
        var tmp$ret$11;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        var tmp15__anonymous__a63r3d = transition.r7h();
        var tmp16__anonymous__5bf3vu = $composer_2;
        var tmp17__anonymous__gqgob = 112 & tmp11_createChildTransition$composable >> 3;
        var $composer_5 = tmp16__anonymous__5bf3vu;
        $composer_5.s1c(-1220581778);
        sourceInformation($composer_5, 'C740@39681L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-1220581778, tmp17__anonymous__gqgob, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous> (AnimatedVisibility.kt:739)');
        }
        var tmp0_2 = targetEnterExit$composable(transition, visible, tmp15__anonymous__a63r3d, $composer_5, 14 & $dirty | 112 & $dirty | 896 & tmp17__anonymous__gqgob << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_5.u1c();
        tmp$ret$11 = tmp0_2;
        var targetState = tmp$ret$11;
        var tmp0_3 = createChildTransitionInternal$composable(transition, initialState, targetState, label, $composer_2, 14 & tmp11_createChildTransition$composable | 7168 & tmp11_createChildTransition$composable << 6);
        $composer_2.u1c();
        tmp$ret$12 = tmp0_3;
        var childTransition = tmp$ret$12;
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp21_remember$composable = $composer_0;
        var $composer_6 = tmp21_remember$composable;
        $composer_6.s1c(-1124426577);
        sourceInformation($composer_6, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp19_cache = $composer_6;
        var tmp20_cache = !!($composer_6.x1h(childTransition) | $composer_6.x1h(isAnimationVisible));
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp18_let = tmp19_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp20_cache ? true : tmp18_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$13;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
          tmp$ret$13 = AnimatedEnterExitImpl$composable$slambda_0(childTransition, isAnimationVisible, null);
          var value_1 = tmp$ret$13;
          tmp19_cache.p1q(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = tmp18_let;
        }
        tmp$ret$14 = tmp_3;
        tmp$ret$15 = tmp$ret$14;
        var tmp_4 = tmp$ret$15;
        tmp$ret$16 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0_4 = tmp$ret$16;
        $composer_6.u1c();
        tmp$ret$17 = tmp0_4;
        LaunchedEffect$composable(childTransition, tmp$ret$17, $composer_0, 0);
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable' call
        var tmp46_AnimatedEnterExitImpl$composable = $composer_0;
        var tmp47_AnimatedEnterExitImpl$composable = 112 & $dirty >> 3 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3;
        var $composer_7 = tmp46_AnimatedEnterExitImpl$composable;
        $composer_7.s1c(2042374348);
        sourceInformation($composer_7, 'CC(AnimatedEnterExitImpl$composable)P(4,3,1,2)777@40847L64,780@41019L39,781@41089L50,778@40920L229:AnimatedVisibility.kt#xbi5r1');
        if (childTransition.p7h().equals(EnterExitState_Visible_getInstance()) ? true : childTransition.r7h().equals(EnterExitState_Visible_getInstance())) {
          var tmp$ret$22;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp25_remember$composable = $composer_7;
          var tmp26_remember$composable = 14 & tmp47_AnimatedEnterExitImpl$composable;
          var $composer_8 = tmp25_remember$composable;
          $composer_8.s1c(-838505973);
          sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$21;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp23_cache = $composer_8;
          var tmp24_cache = $composer_8.x1h(childTransition);
          var tmp$ret$20;
          // Inline function 'kotlin.let' call
          var tmp22_let = tmp23_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$19;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_5;
          if (tmp24_cache ? true : tmp22_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$18;
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
            tmp$ret$18 = new AnimatedVisibilityScopeImpl(childTransition);
            var value_2 = tmp$ret$18;
            tmp23_cache.p1q(value_2);
            tmp_5 = value_2;
          } else {
            tmp_5 = tmp22_let;
          }
          tmp$ret$19 = tmp_5;
          tmp$ret$20 = tmp$ret$19;
          var tmp_6 = tmp$ret$20;
          tmp$ret$21 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
          var tmp0_5 = tmp$ret$21;
          $composer_8.u1c();
          tmp$ret$22 = tmp0_5;
          var scope = tmp$ret$22;
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp41_Layout$composable = modifier.e4h(createModifier$composable(childTransition, enter, exit, 'Built-in', $composer_7, 3072 | 14 & tmp47_AnimatedEnterExitImpl$composable | 112 & tmp47_AnimatedEnterExitImpl$composable >> 3 | 896 & tmp47_AnimatedEnterExitImpl$composable >> 3));
          var tmp$ret$27;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp29_remember$composable = $composer_7;
          var $composer_9 = tmp29_remember$composable;
          $composer_9.s1c(547886695);
          sourceInformation($composer_9, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$26;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp28_cache = $composer_9;
          var tmp$ret$25;
          // Inline function 'kotlin.let' call
          var tmp27_let = tmp28_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$24;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_7;
          if (false ? true : tmp27_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$23;
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
            tmp$ret$23 = new AnimatedEnterExitMeasurePolicy(scope);
            var value_3 = tmp$ret$23;
            tmp28_cache.p1q(value_3);
            tmp_7 = value_3;
          } else {
            tmp_7 = tmp27_let;
          }
          tmp$ret$24 = tmp_7;
          tmp$ret$25 = tmp$ret$24;
          var tmp_8 = tmp$ret$25;
          tmp$ret$26 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
          var tmp0_6 = tmp$ret$26;
          $composer_9.u1c();
          tmp$ret$27 = tmp0_6;
          var tmp42_Layout$composable = tmp$ret$27;
          var tmp43_Layout$composable = $composer_7;
          var modifier_0 = tmp41_Layout$composable;
          var $composer_10 = tmp43_Layout$composable;
          $composer_10.s1c(1725976829);
          sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_0 = Companion_getInstance();
          var tmp$ret$28;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp30_$get_current$$composable_71c5jq = get_LocalDensity();
          var tmp31_$get_current$$composable_7jt0l1 = $composer_10;
          var $composer_11 = tmp31_$get_current$$composable_7jt0l1;
          sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_7 = $composer_11.w1p(tmp30_$get_current$$composable_71c5jq);
          sourceInformationMarkerEnd($composer_11);
          tmp$ret$28 = tmp0_7;
          var density = tmp$ret$28;
          var tmp$ret$29;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp32_$get_current$$composable_829vmc = get_LocalLayoutDirection();
          var tmp33_$get_current$$composable_8kqqnn = $composer_10;
          var $composer_12 = tmp33_$get_current$$composable_8kqqnn;
          sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_8 = $composer_12.w1p(tmp32_$get_current$$composable_829vmc);
          sourceInformationMarkerEnd($composer_12);
          tmp$ret$29 = tmp0_8;
          var layoutDirection = tmp$ret$29;
          var tmp$ret$30;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp34_$get_current$$composable_937loy = get_LocalViewConfiguration();
          var tmp35_$get_current$$composable_9logq9 = $composer_10;
          var $composer_13 = tmp35_$get_current$$composable_9logq9;
          sourceInformationMarkerStart($composer_13, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_9 = $composer_13.w1p(tmp34_$get_current$$composable_937loy);
          sourceInformationMarkerEnd($composer_13);
          tmp$ret$30 = tmp0_9;
          var viewConfiguration = tmp$ret$30;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp36_ReusableComposeNode$composable = Companion_getInstance_1().e5n_1;
          var tmp37_ReusableComposeNode$composable = materializerOf(modifier_0);
          var tmp38_ReusableComposeNode$composable = $composer_10;
          var tmp39_ReusableComposeNode$composable = 6;
          var $composer_14 = tmp38_ReusableComposeNode$composable;
          var tmp_9 = $composer_14.t1o();
          if (!isInterface(tmp_9, Applier)) {
            invalidApplier();
          }
          $composer_14.e1p();
          if ($composer_14.c1p()) {
            $composer_14.f1p(tmp36_ReusableComposeNode$composable);
          } else {
            $composer_14.h1p();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp40__anonymous__9cjcjl = _Updater___init__impl__rbfxm8($composer_14);
          Updater__set_impl_v7kwss(tmp40__anonymous__9cjcjl, tmp42_Layout$composable, Companion_getInstance_1().i5n_1);
          Updater__set_impl_v7kwss(tmp40__anonymous__9cjcjl, density, Companion_getInstance_1().h5n_1);
          Updater__set_impl_v7kwss(tmp40__anonymous__9cjcjl, layoutDirection, Companion_getInstance_1().j5n_1);
          Updater__set_impl_v7kwss(tmp40__anonymous__9cjcjl, viewConfiguration, Companion_getInstance_1().k5n_1);
          tmp37_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp39_ReusableComposeNode$composable >> 3);
          $composer_14.s1c(2058660585);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
          var tmp44__anonymous__a278aj = $composer_14;
          var tmp45__anonymous__ewvvi2 = 14 & tmp39_ReusableComposeNode$composable >> 9;
          var $composer_15 = tmp44__anonymous__a278aj;
          sourceInformationMarkerStart($composer_15, 699977616, 'C779@40958L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_15, 8 | 112 & tmp47_AnimatedEnterExitImpl$composable >> 9);
          sourceInformationMarkerEnd($composer_15);
          $composer_14.u1c();
          $composer_14.i1p();
          $composer_10.u1c();
        }
        $composer_7.u1c();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(AnimatedEnterExitImpl$composable$lambda(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_getInstance();
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function targetEnterExit$composable(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(409529084);
    sourceInformation($composer_0, 'C(targetEnterExit$composable)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(409529084, $changed, -1, 'androidx.compose.animation.targetEnterExit$composable (AnimatedVisibility.kt:830)');
    }
    $composer_0.o1l(1486622691, _this__u8e3s4);
    sourceInformation($composer_0, '846@43297L34');
    var tmp;
    if (_this__u8e3s4.e7j()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.p7h())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.s1c(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.targetEnterExit$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf(false);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$1 = tmp_2;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      var hasBeenVisible = tmp$ret$4;
      if (visible(_this__u8e3s4.p7h())) {
        hasBeenVisible.kk(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.b2()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp2_group = tmp;
    var tmp1 = tmp2_group;
    $composer_0.s1l();
    var tmp0_0 = tmp1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.l7s_1 = transition;
    this.m7s_1 = mutableStateOf(new IntSize(Companion_getInstance_2().u2m_1));
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $placeables.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $placeables.g(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.z5q(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.n7s_1 = scope;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).s5r = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(measurables, 10));
    var tmp0_iterator = measurables.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      tmp$ret$0 = item.l4l(constraints);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var placeables = tmp$ret$2;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.l()) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var maxElem = placeables.g(0);
      var tmp$ret$4;
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var tmp1__anonymous__uwfjfc = maxElem;
      tmp$ret$4 = tmp1__anonymous__uwfjfc.m4l_1;
      var maxValue = tmp$ret$4;
      var inductionVariable = 1;
      var last = get_lastIndex(placeables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = placeables.g(i);
          var tmp$ret$5;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          tmp$ret$5 = e.m4l_1;
          var v = tmp$ret$5;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last));
      tmp$ret$3 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m4l_1;
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.l()) {
        tmp$ret$6 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.g(0);
      var tmp$ret$7;
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = maxElem_0;
      tmp$ret$7 = tmp2__anonymous__z9zvc9.n4l_1;
      var maxValue_0 = tmp$ret$7;
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e_0 = placeables.g(i_0);
          var tmp$ret$8;
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          tmp$ret$8 = e_0.n4l_1;
          var v_0 = tmp$ret$8;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_0));
      tmp$ret$6 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$6;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.n4l_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    this.n7s_1.m7s_1.kk(new IntSize(IntSize_0(maxWidth, maxHeight)));
    return _this__u8e3s4.r4l(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  function AnimatedVisibility$composable$lambda(it) {
    return it;
  }
  function AnimatedVisibility$composable$lambda_0($visibleState, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility$composable($visibleState, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.o7s_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).c14 = function (value, $completion) {
    var tmp0 = this.o7s_1(value, $completion);
    return tmp0;
  };
  function AnimatedEnterExitImpl$composable$slambda$lambda($childTransition) {
    return function () {
      return $childTransition.p7h().equals(EnterExitState_Visible_getInstance()) ? true : $childTransition.r7h().equals(EnterExitState_Visible_getInstance());
    };
  }
  function AnimatedEnterExitImpl$composable$slambda$slambda($isAnimationVisible, resultContinuation) {
    this.x7s_1 = $isAnimationVisible;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).z7s = function (it, $completion) {
    var tmp = this.a7t(it, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).eg = function (p1, $completion) {
    return this.z7s((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          this.x7s_1.kk(this.y7s_1);
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
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).a7t = function (it, completion) {
    var i = new AnimatedEnterExitImpl$composable$slambda$slambda(this.x7s_1, completion);
    i.y7s_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$composable$slambda$slambda_0($isAnimationVisible, resultContinuation) {
    var i = new AnimatedEnterExitImpl$composable$slambda$slambda($isAnimationVisible, resultContinuation);
    var l = function (it, $completion) {
      return i.z7s(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$composable$slambda($childTransition, $isAnimationVisible, resultContinuation) {
    this.j7t_1 = $childTransition;
    this.k7t_1 = $isAnimationVisible;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$composable$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$composable$slambda$lambda(this.j7t_1));
            var tmp_1 = AnimatedEnterExitImpl$composable$slambda$slambda_0(this.k7t_1, null);
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
  protoOf(AnimatedEnterExitImpl$composable$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new AnimatedEnterExitImpl$composable$slambda(this.j7t_1, this.k7t_1, completion);
    i.l7t_1 = $this$LaunchedEffect;
    return i;
  };
  function AnimatedEnterExitImpl$composable$slambda_0($childTransition, $isAnimationVisible, resultContinuation) {
    var i = new AnimatedEnterExitImpl$composable$slambda($childTransition, $isAnimationVisible, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$composable$lambda($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl$composable($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function LayoutModifierWithPassThroughIntrinsics() {
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlpha() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function Companion() {
    Companion_instance = this;
    this.m7t_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EnterTransition() {
    Companion_getInstance_6();
    this.h7s_1 = 0;
  }
  protoOf(EnterTransition).i7s = function (enter) {
    var tmp0_elvis_lhs = this.t7j().n7t_1;
    var tmp = tmp0_elvis_lhs == null ? enter.t7j().n7t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.t7j().o7t_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.t7j().o7t_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.t7j().p7t_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.t7j().p7t_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.t7j().q7t_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.t7j().q7t_1 : tmp3_elvis_lhs));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_6().m7t_1)) {
      tmp = 'EnterTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.t7j();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.n7t_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.o7t_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.p7t_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.q7t_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.t7j().equals(this.t7j());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.t7j().hashCode();
  };
  function scaleIn(animationSpec, initialScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialScale = initialScale === VOID ? 0.0 : initialScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_3().f4v_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(initialScale, transformOrigin, animationSpec)));
  }
  function fadeIn(animationSpec, initialAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.r7t_1 = new ExitTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExitTransition() {
    Companion_getInstance_7();
    this.j7s_1 = 0;
  }
  protoOf(ExitTransition).k7s = function (exit) {
    var tmp0_elvis_lhs = this.t7j().n7t_1;
    var tmp = tmp0_elvis_lhs == null ? exit.t7j().n7t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.t7j().o7t_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.t7j().o7t_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.t7j().p7t_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.t7j().p7t_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.t7j().q7t_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.t7j().q7t_1 : tmp3_elvis_lhs));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.t7j().equals(this.t7j());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_7().r7t_1)) {
      tmp = 'ExitTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.t7j();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.n7t_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.o7t_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.p7t_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.q7t_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.t7j().hashCode();
  };
  function scaleOut(animationSpec, targetScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetScale = targetScale === VOID ? 0.0 : targetScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_3().f4v_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(targetScale, transformOrigin, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_4().n4g_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialSize === VOID) {
      tmp_0 = expandIn$lambda;
    } else {
      tmp_0 = initialSize;
    }
    initialSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_4().n4g_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetSize === VOID) {
      tmp_0 = shrinkOut$lambda;
    } else {
      tmp_0 = targetSize;
    }
    targetSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function createModifier$composable(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(814792410);
    sourceInformation($composer_0, 'C(createModifier$composable)832@36300L38,833@36348L37,837@36443L43,838@36496L42,845@36867L40,846@36938L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(814792410, $changed, -1, 'androidx.compose.animation.createModifier$composable (EnterExitTransition.kt:820)');
    }
    var modifier = Companion_getInstance();
    modifier = shrinkExpand(slideInOut(modifier, _this__u8e3s4, rememberUpdatedState$composable(enter.t7j().o7t_1, $composer_0, 0), rememberUpdatedState$composable(exit.t7j().o7t_1, $composer_0, 0), label), _this__u8e3s4, rememberUpdatedState$composable(enter.t7j().p7t_1, $composer_0, 0), rememberUpdatedState$composable(exit.t7j().p7t_1, $composer_0, 0), label);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.x1h(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(false);
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
    var shouldAnimateAlpha$delegate = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp8_remember$composable = $composer_0;
    var tmp9_remember$composable = 14 & $changed;
    var $composer_2 = tmp8_remember$composable;
    $composer_2.s1c(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp6_cache = $composer_2;
    var tmp7_cache = $composer_2.x1h(_this__u8e3s4);
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp5_let = tmp6_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp7_cache ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      tmp$ret$5 = mutableStateOf(false);
      var value_0 = tmp$ret$5;
      tmp6_cache.p1q(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp5_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.u1c();
    tmp$ret$9 = tmp0_0;
    var shouldAnimateScale$delegate = tmp$ret$9;
    if (_this__u8e3s4.p7h().equals(_this__u8e3s4.r7h()) ? !_this__u8e3s4.e7j() : false) {
      createModifier$composable$lambda_0(shouldAnimateAlpha$delegate, false);
      createModifier$composable$lambda_2(shouldAnimateScale$delegate, false);
    } else {
      if (!(enter.t7j().n7t_1 == null) ? true : !(exit.t7j().n7t_1 == null)) {
        createModifier$composable$lambda_0(shouldAnimateAlpha$delegate, true);
      }
      if (!(enter.t7j().q7t_1 == null) ? true : !(exit.t7j().q7t_1 == null)) {
        createModifier$composable$lambda_2(shouldAnimateScale$delegate, true);
      }
    }
    $composer_0.s1c(1760095428);
    sourceInformation($composer_0, '870@37922L27,860@37401L796');
    var tmp_3;
    if (createModifier$composable$lambda(shouldAnimateAlpha$delegate)) {
      var tmp$ret$18;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp18_animateFloat$composable = createModifier$composable$lambda_6(enter, exit);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp12_remember$composable = $composer_0;
      var $composer_3 = tmp12_remember$composable;
      $composer_3.s1c(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp11_cache = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp10_let = tmp11_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp10_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        tmp$ret$10 = label + ' alpha';
        var value_1 = tmp$ret$10;
        tmp11_cache.p1q(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp10_let;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.u1c();
      tmp$ret$14 = tmp0_1;
      var tmp19_animateFloat$composable = tmp$ret$14;
      var tmp20_animateFloat$composable = $composer_0;
      var tmp21_animateFloat$composable = 14 & $changed;
      var transitionSpec = tmp18_animateFloat$composable;
      var label_0 = tmp19_animateFloat$composable;
      var $composer_4 = tmp20_animateFloat$composable;
      $composer_4.s1c(1610198356);
      sourceInformation($composer_4, 'CC(animateFloat$composable)P(2)938@37489L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = createModifier$composable$lambda_7;
      }
      if (!(0 === 0))
        label_0 = 'FloatAnimation';
      var tmp$ret$17;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp13_animateValue$composable = get_VectorConverter(FloatCompanionObject_getInstance());
      var tmp14_animateValue$composable = transitionSpec;
      var tmp15_animateValue$composable = label_0;
      var tmp16_animateValue$composable = $composer_4;
      var tmp17_animateValue$composable = 14 & tmp21_animateFloat$composable | 896 & tmp21_animateFloat$composable << 3 | 7168 & tmp21_animateFloat$composable << 3 | 57344 & tmp21_animateFloat$composable << 3;
      var transitionSpec_0 = tmp14_animateValue$composable;
      var label_1 = tmp15_animateValue$composable;
      var $composer_5 = tmp16_animateValue$composable;
      $composer_5.s1c(-1940744337);
      sourceInformation($composer_5, 'CC(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = createModifier$composable$lambda_8;
      }
      if (!(0 === 0))
        label_1 = 'ValueAnimation';
      var tmp$ret$15;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp22__anonymous__gd5t6t = _this__u8e3s4.p7h();
      var tmp23__anonymous__bih5za = $composer_5;
      var tmp24__anonymous__6nsirr = 112 & tmp17_animateValue$composable >> 9;
      var $composer_6 = tmp23__anonymous__bih5za;
      $composer_6.s1c(755689166);
      sourceInformation($composer_6, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(755689166, tmp24__anonymous__6nsirr, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:871)');
      }
      var tmp0_subject = tmp22__anonymous__gd5t6t;
      var tmp0_2 = tmp0_subject.k6_1;
      var tmp_6;
      switch (tmp0_2) {
        case 1:
          tmp_6 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = enter.t7j().n7t_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s7t_1;
          tmp_6 = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = exit.t7j().n7t_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s7t_1;
          tmp_6 = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_3 = tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_6.u1c();
      tmp$ret$15 = tmp0_3;
      var initialValue = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp25__anonymous__1t3vk8 = _this__u8e3s4.r7h();
      var tmp26__anonymous__31krnb = $composer_5;
      var tmp27__anonymous__7w9euu = 112 & tmp17_animateValue$composable >> 9;
      var $composer_7 = tmp26__anonymous__31krnb;
      $composer_7.s1c(755689166);
      sourceInformation($composer_7, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(755689166, tmp27__anonymous__7w9euu, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:871)');
      }
      var tmp0_subject_0 = tmp25__anonymous__1t3vk8;
      var tmp0_4 = tmp0_subject_0.k6_1;
      var tmp_7;
      switch (tmp0_4) {
        case 1:
          tmp_7 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_0 = enter.t7j().n7t_1;
          var tmp2_elvis_lhs_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.s7t_1;
          tmp_7 = tmp2_elvis_lhs_0 == null ? 1.0 : tmp2_elvis_lhs_0;
          break;
        case 2:
          var tmp3_safe_receiver_0 = exit.t7j().n7t_1;
          var tmp4_elvis_lhs_0 = tmp3_safe_receiver_0 == null ? null : tmp3_safe_receiver_0.s7t_1;
          tmp_7 = tmp4_elvis_lhs_0 == null ? 1.0 : tmp4_elvis_lhs_0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_5 = tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.u1c();
      tmp$ret$16 = tmp0_5;
      var targetValue = tmp$ret$16;
      var animationSpec = transitionSpec_0(_this__u8e3s4.f7j(), $composer_5, 112 & tmp17_animateValue$composable >> 3);
      var tmp0_6 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp13_animateValue$composable, label_1, $composer_5, 14 & tmp17_animateValue$composable | 57344 & tmp17_animateValue$composable << 9 | 458752 & tmp17_animateValue$composable << 6);
      $composer_5.u1c();
      tmp$ret$17 = tmp0_6;
      var tmp0_7 = tmp$ret$17;
      $composer_4.u1c();
      tmp$ret$18 = tmp0_7;
      tmp_3 = tmp$ret$18;
    } else {
      tmp_3 = get_DefaultAlpha();
    }
    var tmp1_group = tmp_3;
    $composer_0.u1c();
    var alpha$delegate = tmp1_group;
    if (createModifier$composable$lambda_1(shouldAnimateScale$delegate)) {
      $composer_0.s1c(1760096328);
      sourceInformation($composer_0, '893@38813L27,883@38290L800,909@39583L536,922@40163L157');
      var tmp$ret$27;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp36_animateFloat$composable = createModifier$composable$lambda_9(enter, exit);
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp30_remember$composable = $composer_0;
      var $composer_8 = tmp30_remember$composable;
      $composer_8.s1c(547886695);
      sourceInformation($composer_8, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp29_cache = $composer_8;
      var tmp$ret$21;
      // Inline function 'kotlin.let' call
      var tmp28_let = tmp29_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp28_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$19;
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        tmp$ret$19 = label + ' scale';
        var value_2 = tmp$ret$19;
        tmp29_cache.p1q(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp28_let;
      }
      tmp$ret$20 = tmp_8;
      tmp$ret$21 = tmp$ret$20;
      var tmp_9 = tmp$ret$21;
      tmp$ret$22 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_8 = tmp$ret$22;
      $composer_8.u1c();
      tmp$ret$23 = tmp0_8;
      var tmp37_animateFloat$composable = tmp$ret$23;
      var tmp38_animateFloat$composable = $composer_0;
      var tmp39_animateFloat$composable = 14 & $changed;
      var transitionSpec_1 = tmp36_animateFloat$composable;
      var label_2 = tmp37_animateFloat$composable;
      var $composer_9 = tmp38_animateFloat$composable;
      $composer_9.s1c(1610198356);
      sourceInformation($composer_9, 'CC(animateFloat$composable)P(2)938@37489L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_1 = createModifier$composable$lambda_10;
      }
      if (!(0 === 0))
        label_2 = 'FloatAnimation';
      var tmp$ret$26;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp31_animateValue$composable = get_VectorConverter(FloatCompanionObject_getInstance());
      var tmp32_animateValue$composable = transitionSpec_1;
      var tmp33_animateValue$composable = label_2;
      var tmp34_animateValue$composable = $composer_9;
      var tmp35_animateValue$composable = 14 & tmp39_animateFloat$composable | 896 & tmp39_animateFloat$composable << 3 | 7168 & tmp39_animateFloat$composable << 3 | 57344 & tmp39_animateFloat$composable << 3;
      var transitionSpec_2 = tmp32_animateValue$composable;
      var label_3 = tmp33_animateValue$composable;
      var $composer_10 = tmp34_animateValue$composable;
      $composer_10.s1c(-1940744337);
      sourceInformation($composer_10, 'CC(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_2 = createModifier$composable$lambda_11;
      }
      if (!(0 === 0))
        label_3 = 'ValueAnimation';
      var tmp$ret$24;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp40__anonymous__9cjcjl = _this__u8e3s4.p7h();
      var tmp41__anonymous__4hupc2 = $composer_10;
      var tmp42__anonymous__ctxvh = 112 & tmp35_animateValue$composable >> 9;
      var $composer_11 = tmp41__anonymous__4hupc2;
      $composer_11.s1c(-596129937);
      sourceInformation($composer_11, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-596129937, tmp42__anonymous__ctxvh, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:894)');
      }
      var tmp0_subject_1 = tmp40__anonymous__9cjcjl;
      var tmp0_9 = tmp0_subject_1.k6_1;
      var tmp_10;
      switch (tmp0_9) {
        case 1:
          tmp_10 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_1 = enter.t7j().q7t_1;
          var tmp2_elvis_lhs_1 = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.u7t_1;
          tmp_10 = tmp2_elvis_lhs_1 == null ? 1.0 : tmp2_elvis_lhs_1;
          break;
        case 2:
          var tmp3_safe_receiver_1 = exit.t7j().q7t_1;
          var tmp4_elvis_lhs_1 = tmp3_safe_receiver_1 == null ? null : tmp3_safe_receiver_1.u7t_1;
          tmp_10 = tmp4_elvis_lhs_1 == null ? 1.0 : tmp4_elvis_lhs_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_10 = tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_11.u1c();
      tmp$ret$24 = tmp0_10;
      var initialValue_0 = tmp$ret$24;
      var tmp$ret$25;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp43__anonymous__57il30 = _this__u8e3s4.r7h();
      var tmp44__anonymous__a278aj = $composer_10;
      var tmp45__anonymous__ewvvi2 = 112 & tmp35_animateValue$composable >> 9;
      var $composer_12 = tmp44__anonymous__a278aj;
      $composer_12.s1c(-596129937);
      sourceInformation($composer_12, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-596129937, tmp45__anonymous__ewvvi2, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:894)');
      }
      var tmp0_subject_2 = tmp43__anonymous__57il30;
      var tmp0_11 = tmp0_subject_2.k6_1;
      var tmp_11;
      switch (tmp0_11) {
        case 1:
          tmp_11 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_2 = enter.t7j().q7t_1;
          var tmp2_elvis_lhs_2 = tmp1_safe_receiver_2 == null ? null : tmp1_safe_receiver_2.u7t_1;
          tmp_11 = tmp2_elvis_lhs_2 == null ? 1.0 : tmp2_elvis_lhs_2;
          break;
        case 2:
          var tmp3_safe_receiver_2 = exit.t7j().q7t_1;
          var tmp4_elvis_lhs_2 = tmp3_safe_receiver_2 == null ? null : tmp3_safe_receiver_2.u7t_1;
          tmp_11 = tmp4_elvis_lhs_2 == null ? 1.0 : tmp4_elvis_lhs_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_12 = tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_12.u1c();
      tmp$ret$25 = tmp0_12;
      var targetValue_0 = tmp$ret$25;
      var animationSpec_0 = transitionSpec_2(_this__u8e3s4.f7j(), $composer_10, 112 & tmp35_animateValue$composable >> 3);
      var tmp0_13 = createTransitionAnimation$composable(_this__u8e3s4, initialValue_0, targetValue_0, animationSpec_0, tmp31_animateValue$composable, label_3, $composer_10, 14 & tmp35_animateValue$composable | 57344 & tmp35_animateValue$composable << 9 | 458752 & tmp35_animateValue$composable << 6);
      $composer_10.u1c();
      tmp$ret$26 = tmp0_13;
      var tmp0_14 = tmp$ret$26;
      $composer_9.u1c();
      tmp$ret$27 = tmp0_14;
      var scale$delegate = tmp$ret$27;
      var tmp_12;
      if (_this__u8e3s4.p7h().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp0_safe_receiver = enter.t7j().q7t_1;
        var tmp2_elvis_lhs_3 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v7t_1;
        var tmp_13;
        var tmp_14 = tmp2_elvis_lhs_3;
        if ((tmp_14 == null ? null : new TransformOrigin(tmp_14)) == null) {
          var tmp1_safe_receiver_3 = exit.t7j().q7t_1;
          tmp_13 = tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3.v7t_1;
        } else {
          tmp_13 = tmp2_elvis_lhs_3;
        }
        tmp_12 = tmp_13;
      } else {
        var tmp3_safe_receiver_3 = exit.t7j().q7t_1;
        var tmp5_elvis_lhs = tmp3_safe_receiver_3 == null ? null : tmp3_safe_receiver_3.v7t_1;
        var tmp_15;
        var tmp_16 = tmp5_elvis_lhs;
        if ((tmp_16 == null ? null : new TransformOrigin(tmp_16)) == null) {
          var tmp4_safe_receiver = enter.t7j().q7t_1;
          tmp_15 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v7t_1;
        } else {
          tmp_15 = tmp5_elvis_lhs;
        }
        tmp_12 = tmp_15;
      }
      var transformOriginWhenVisible = tmp_12;
      var tmp$ret$30;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp46_animateValue$composable = get_TransformOriginVectorConverter();
      var tmp47_animateValue$composable = null;
      var tmp48_animateValue$composable = $composer_0;
      var tmp49_animateValue$composable = 3072 | 14 & $changed;
      var transitionSpec_3 = tmp47_animateValue$composable;
      var label_4 = 'TransformOriginInterruptionHandling';
      var $composer_13 = tmp48_animateValue$composable;
      $composer_13.s1c(-1940744337);
      sourceInformation($composer_13, 'CC(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
      if (!(2 === 0)) {
        transitionSpec_3 = createModifier$composable$lambda_12;
      }
      if (!(0 === 0))
        label_4 = 'ValueAnimation';
      var tmp$ret$28;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp50__anonymous__zjh0g = _this__u8e3s4.p7h();
      var tmp51__anonymous__3v5673 = $composer_13;
      var tmp52__anonymous__8pttem = 112 & tmp49_animateValue$composable >> 9;
      var $composer_14 = tmp51__anonymous__3v5673;
      $composer_14.s1c(-288165413);
      sourceInformation($composer_14, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-288165413, tmp52__anonymous__8pttem, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:912)');
      }
      var tmp0_subject_3 = tmp50__anonymous__zjh0g;
      var tmp0_15 = tmp0_subject_3.k6_1;
      var tmp_17;
      switch (tmp0_15) {
        case 1:
          tmp_17 = transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver_4 = enter.t7j().q7t_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver_4 == null ? null : tmp1_safe_receiver_4.v7t_1;
          var tmp_18;
          var tmp_19 = tmp3_elvis_lhs;
          if ((tmp_19 == null ? null : new TransformOrigin(tmp_19)) == null) {
            var tmp2_safe_receiver = exit.t7j().q7t_1;
            tmp_18 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v7t_1;
          } else {
            tmp_18 = tmp3_elvis_lhs;
          }

          tmp_17 = tmp_18;
          break;
        case 2:
          var tmp4_safe_receiver_0 = exit.t7j().q7t_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver_0 == null ? null : tmp4_safe_receiver_0.v7t_1;
          var tmp_20;
          var tmp_21 = tmp6_elvis_lhs;
          if ((tmp_21 == null ? null : new TransformOrigin(tmp_21)) == null) {
            var tmp5_safe_receiver = enter.t7j().q7t_1;
            tmp_20 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.v7t_1;
          } else {
            tmp_20 = tmp6_elvis_lhs;
          }

          tmp_17 = tmp_20;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp_17;
      var tmp_22;
      var tmp_23 = tmp7_elvis_lhs;
      if ((tmp_23 == null ? null : new TransformOrigin(tmp_23)) == null) {
        tmp_22 = Companion_getInstance_3().f4v_1;
      } else {
        tmp_22 = tmp7_elvis_lhs;
      }
      var tmp0_16 = tmp_22;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_14.u1c();
      tmp$ret$28 = tmp0_16;
      var initialValue_1 = tmp$ret$28;
      var tmp$ret$29;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp53__anonymous__dkigm5 = _this__u8e3s4.r7h();
      var tmp54__anonymous__if73to = $composer_13;
      var tmp55__anonymous__n9vr17 = 112 & tmp49_animateValue$composable >> 9;
      var $composer_15 = tmp54__anonymous__if73to;
      $composer_15.s1c(-288165413);
      sourceInformation($composer_15, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-288165413, tmp55__anonymous__n9vr17, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:912)');
      }
      var tmp0_subject_4 = tmp53__anonymous__dkigm5;
      var tmp0_17 = tmp0_subject_4.k6_1;
      var tmp_24;
      switch (tmp0_17) {
        case 1:
          tmp_24 = transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver_5 = enter.t7j().q7t_1;
          var tmp3_elvis_lhs_0 = tmp1_safe_receiver_5 == null ? null : tmp1_safe_receiver_5.v7t_1;
          var tmp_25;
          var tmp_26 = tmp3_elvis_lhs_0;
          if ((tmp_26 == null ? null : new TransformOrigin(tmp_26)) == null) {
            var tmp2_safe_receiver_0 = exit.t7j().q7t_1;
            tmp_25 = tmp2_safe_receiver_0 == null ? null : tmp2_safe_receiver_0.v7t_1;
          } else {
            tmp_25 = tmp3_elvis_lhs_0;
          }

          tmp_24 = tmp_25;
          break;
        case 2:
          var tmp4_safe_receiver_1 = exit.t7j().q7t_1;
          var tmp6_elvis_lhs_0 = tmp4_safe_receiver_1 == null ? null : tmp4_safe_receiver_1.v7t_1;
          var tmp_27;
          var tmp_28 = tmp6_elvis_lhs_0;
          if ((tmp_28 == null ? null : new TransformOrigin(tmp_28)) == null) {
            var tmp5_safe_receiver_0 = enter.t7j().q7t_1;
            tmp_27 = tmp5_safe_receiver_0 == null ? null : tmp5_safe_receiver_0.v7t_1;
          } else {
            tmp_27 = tmp6_elvis_lhs_0;
          }

          tmp_24 = tmp_27;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs_0 = tmp_24;
      var tmp_29;
      var tmp_30 = tmp7_elvis_lhs_0;
      if ((tmp_30 == null ? null : new TransformOrigin(tmp_30)) == null) {
        tmp_29 = Companion_getInstance_3().f4v_1;
      } else {
        tmp_29 = tmp7_elvis_lhs_0;
      }
      var tmp0_18 = tmp_29;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_15.u1c();
      tmp$ret$29 = tmp0_18;
      var targetValue_1 = tmp$ret$29;
      var animationSpec_1 = transitionSpec_3(_this__u8e3s4.f7j(), $composer_13, 112 & tmp49_animateValue$composable >> 3);
      var tmp0_19 = createTransitionAnimation$composable(_this__u8e3s4, new TransformOrigin(initialValue_1), new TransformOrigin(targetValue_1), animationSpec_1, tmp46_animateValue$composable, label_4, $composer_13, 14 & tmp49_animateValue$composable | 57344 & tmp49_animateValue$composable << 9 | 458752 & tmp49_animateValue$composable << 6);
      $composer_13.u1c();
      tmp$ret$30 = tmp0_19;
      var transformOrigin$delegate = tmp$ret$30;
      var tmp_31 = modifier;
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp59_remember$composable = $composer_0;
      var $composer_16 = tmp59_remember$composable;
      $composer_16.s1c(-1058148781);
      sourceInformation($composer_16, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp57_cache = $composer_16;
      var tmp58_cache = !!(!!($composer_16.x1h(alpha$delegate) | $composer_16.x1h(scale$delegate)) | $composer_16.x1h(transformOrigin$delegate));
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp56_let = tmp57_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_32;
      if (tmp58_cache ? true : tmp56_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$31;
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        tmp$ret$31 = createModifier$composable$lambda_13(alpha$delegate, scale$delegate, transformOrigin$delegate);
        var value_3 = tmp$ret$31;
        tmp57_cache.p1q(value_3);
        tmp_32 = value_3;
      } else {
        tmp_32 = tmp56_let;
      }
      tmp$ret$32 = tmp_32;
      tmp$ret$33 = tmp$ret$32;
      var tmp_33 = tmp$ret$33;
      tmp$ret$34 = (tmp_33 == null ? true : isObject(tmp_33)) ? tmp_33 : THROW_CCE();
      var tmp0_20 = tmp$ret$34;
      $composer_16.u1c();
      tmp$ret$35 = tmp0_20;
      modifier = graphicsLayer(tmp_31, tmp$ret$35);
      $composer_0.u1c();
    } else if (createModifier$composable$lambda(shouldAnimateAlpha$delegate)) {
      $composer_0.s1c(1760098417);
      sourceInformation($composer_0, '929@40400L42');
      var tmp_34 = modifier;
      var tmp$ret$40;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp63_remember$composable = $composer_0;
      var $composer_17 = tmp63_remember$composable;
      $composer_17.s1c(-838505973);
      sourceInformation($composer_17, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$39;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp61_cache = $composer_17;
      var tmp62_cache = $composer_17.x1h(alpha$delegate);
      var tmp$ret$38;
      // Inline function 'kotlin.let' call
      var tmp60_let = tmp61_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$37;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_35;
      if (tmp62_cache ? true : tmp60_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$36;
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        tmp$ret$36 = createModifier$composable$lambda_14(alpha$delegate);
        var value_4 = tmp$ret$36;
        tmp61_cache.p1q(value_4);
        tmp_35 = value_4;
      } else {
        tmp_35 = tmp60_let;
      }
      tmp$ret$37 = tmp_35;
      tmp$ret$38 = tmp$ret$37;
      var tmp_36 = tmp$ret$38;
      tmp$ret$39 = (tmp_36 == null ? true : isObject(tmp_36)) ? tmp_36 : THROW_CCE();
      var tmp0_21 = tmp$ret$39;
      $composer_17.u1c();
      tmp$ret$40 = tmp0_21;
      modifier = graphicsLayer(tmp_34, tmp$ret$40);
      $composer_0.u1c();
    } else {
      $composer_0.s1c(1760098509);
      $composer_0.u1c();
    }
    var tmp0_22 = modifier;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_22;
  }
  function TransitionData(fade, slide, changeSize, scale) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    this.n7t_1 = fade;
    this.o7t_1 = slide;
    this.p7t_1 = changeSize;
    this.q7t_1 = scale;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.n7t_1 + ', slide=' + this.o7t_1 + ', changeSize=' + this.p7t_1 + ', scale=' + this.q7t_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.n7t_1 == null ? 0 : this.n7t_1.hashCode();
    result = imul(result, 31) + (this.o7t_1 == null ? 0 : this.o7t_1.hashCode()) | 0;
    result = imul(result, 31) + (this.p7t_1 == null ? 0 : this.p7t_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q7t_1 == null ? 0 : this.q7t_1.hashCode()) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.n7t_1, tmp0_other_with_cast.n7t_1))
      return false;
    if (!equals(this.o7t_1, tmp0_other_with_cast.o7t_1))
      return false;
    if (!equals(this.p7t_1, tmp0_other_with_cast.p7t_1))
      return false;
    if (!equals(this.q7t_1, tmp0_other_with_cast.q7t_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.y7t_1 = data;
  }
  protoOf(EnterTransitionImpl).t7j = function () {
    return this.y7t_1;
  };
  function Fade(alpha, animationSpec) {
    this.s7t_1 = alpha;
    this.t7t_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.s7t_1 + ', animationSpec=' + this.t7t_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.s7t_1);
    result = imul(result, 31) + hashCode(this.t7t_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.s7t_1, tmp0_other_with_cast.s7t_1))
      return false;
    if (!equals(this.t7t_1, tmp0_other_with_cast.t7t_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.z7t_1 = alignment;
    this.a7u_1 = size;
    this.b7u_1 = animationSpec;
    this.c7u_1 = clip;
  }
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.z7t_1 + ', size=' + this.a7u_1 + ', animationSpec=' + this.b7u_1 + ', clip=' + this.c7u_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.z7t_1);
    result = imul(result, 31) + hashCode(this.a7u_1) | 0;
    result = imul(result, 31) + hashCode(this.b7u_1) | 0;
    result = imul(result, 31) + (this.c7u_1 | 0) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.z7t_1, tmp0_other_with_cast.z7t_1))
      return false;
    if (!equals(this.a7u_1, tmp0_other_with_cast.a7u_1))
      return false;
    if (!equals(this.b7u_1, tmp0_other_with_cast.b7u_1))
      return false;
    if (!(this.c7u_1 === tmp0_other_with_cast.c7u_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.u7t_1 = scale;
    this.v7t_1 = transformOrigin;
    this.w7t_1 = animationSpec;
  }
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.u7t_1 + ', transformOrigin=' + new TransformOrigin(this.v7t_1) + ', animationSpec=' + this.w7t_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.u7t_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.v7t_1) | 0;
    result = imul(result, 31) + hashCode(this.w7t_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.u7t_1, tmp0_other_with_cast.u7t_1))
      return false;
    if (!equals(this.v7t_1, tmp0_other_with_cast.v7t_1))
      return false;
    if (!equals(this.w7t_1, tmp0_other_with_cast.w7t_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.e7u_1 = data;
  }
  protoOf(ExitTransitionImpl).t7j = function () {
    return this.e7u_1;
  };
  function shrinkExpand(_this__u8e3s4, transition, expand, shrink, labelPrefix) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return composed$composable(_this__u8e3s4, VOID, shrinkExpand$lambda(transition, expand, shrink, labelPrefix));
  }
  function slideInOut(_this__u8e3s4, transition, slideIn, slideOut, labelPrefix) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return composed$composable(_this__u8e3s4, VOID, slideInOut$lambda(transition, slideIn, slideOut, labelPrefix));
  }
  function ExpandShrinkModifier$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.r7j(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.h7u_1.b2();
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b7u_1;
      } else if ($this$null.r7j(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.i7u_1.b2();
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b7u_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function ExpandShrinkModifier$measure$lambda(this$0, $measuredSize) {
    return function (it) {
      return new IntSize(this$0.m7u(it, $measuredSize));
    };
  }
  function ExpandShrinkModifier$measure$lambda_0($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function ExpandShrinkModifier$measure$lambda_1(this$0, $measuredSize) {
    return function (it) {
      return new IntOffset(this$0.n7u(it, $measuredSize));
    };
  }
  function ExpandShrinkModifier$measure$lambda_2($placeable, $offset, $offsetDelta) {
    return function ($this$layout) {
      $this$layout.z5q($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0);
      return Unit_getInstance();
    };
  }
  function ExpandShrinkModifier(sizeAnimation, offsetAnimation, expand, shrink, alignment) {
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.f7u_1 = sizeAnimation;
    this.g7u_1 = offsetAnimation;
    this.h7u_1 = expand;
    this.i7u_1 = shrink;
    this.j7u_1 = alignment;
    this.k7u_1 = null;
    var tmp = this;
    tmp.l7u_1 = ExpandShrinkModifier$sizeTransitionSpec$lambda(this);
  }
  protoOf(ExpandShrinkModifier).m7u = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.h7u_1.b2();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.ExpandShrinkModifier.sizeByState.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.a7u_1(new IntSize(fullSize)).v2m_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new IntSize(tmp_1)) == null) {
      tmp_0 = fullSize;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var preEnterSize = tmp_0;
    var tmp2_safe_receiver = this.i7u_1.b2();
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.animation.ExpandShrinkModifier.sizeByState.<anonymous>' call
      tmp$ret$2 = tmp2_safe_receiver.a7u_1(new IntSize(fullSize)).v2m_1;
      tmp$ret$3 = tmp$ret$2;
      tmp_2 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp_3;
    var tmp_4 = tmp3_elvis_lhs;
    if ((tmp_4 == null ? null : new IntSize(tmp_4)) == null) {
      tmp_3 = fullSize;
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var postExitSize = tmp_3;
    var tmp4_subject = targetState;
    var tmp0 = tmp4_subject.k6_1;
    var tmp_5;
    switch (tmp0) {
      case 1:
        tmp_5 = fullSize;
        break;
      case 0:
        tmp_5 = preEnterSize;
        break;
      case 2:
        tmp_5 = postExitSize;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_5;
  };
  protoOf(ExpandShrinkModifier).n7u = function (targetState, fullSize) {
    var tmp;
    if (this.k7u_1 == null) {
      tmp = Companion_getInstance_5().m2m_1;
    } else if (this.j7u_1.b2() == null) {
      tmp = Companion_getInstance_5().m2m_1;
    } else if (equals(this.k7u_1, this.j7u_1.b2())) {
      tmp = Companion_getInstance_5().m2m_1;
    } else {
      var tmp0_subject = targetState;
      var tmp0 = tmp0_subject.k6_1;
      var tmp_0;
      switch (tmp0) {
        case 1:
          tmp_0 = Companion_getInstance_5().m2m_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_5().m2m_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.i7u_1.b2();
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.animation.ExpandShrinkModifier.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.a7u_1(new IntSize(fullSize)).v2m_1;
            var targetOffset = ensureNotNull(this.j7u_1.b2()).d4h(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.k7u_1).d4h(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var tmp$ret$0;
            // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
            tmp$ret$0 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetOffset) - _IntOffset___get_x__impl__qiqr5o(currentOffset) | 0, _IntOffset___get_y__impl__2avpwj(targetOffset) - _IntOffset___get_y__impl__2avpwj(currentOffset) | 0);
            tmp$ret$1 = tmp$ret$0;
            tmp$ret$2 = tmp$ret$1;
            tmp_1 = tmp$ret$2;
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_5().m2m_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ExpandShrinkModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l4l(constraints);
    var measuredSize = IntSize_0(placeable.m4l_1, placeable.n4l_1);
    var currentSize = this.f7u_1.u7j(this.l7u_1, ExpandShrinkModifier$measure$lambda(this, measuredSize)).b2().v2m_1;
    var tmp = ExpandShrinkModifier$measure$lambda_0;
    var offsetDelta = this.g7u_1.u7j(tmp, ExpandShrinkModifier$measure$lambda_1(this, measuredSize)).b2().k2m_1;
    var tmp0_safe_receiver = this.k7u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d4h(measuredSize, currentSize, LayoutDirection_Ltr_getInstance());
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new IntOffset(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_5().m2m_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var offset = tmp_0;
    var tmp_2 = _IntSize___get_width__impl__d9yl4o(currentSize);
    var tmp_3 = _IntSize___get_height__impl__prv63b(currentSize);
    return _this__u8e3s4.r4l(tmp_2, tmp_3, VOID, ExpandShrinkModifier$measure$lambda_2(placeable, offset, offsetDelta));
  };
  function SlideModifier$transitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.r7j(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.p7u_1.b2();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7u_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.r7j(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.q7u_1.b2();
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t7u_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function SlideModifier$measure$lambda$lambda(this$0, $measuredSize) {
    return function (it) {
      return new IntOffset(this$0.u7u(it, $measuredSize));
    };
  }
  function SlideModifier$measure$lambda(this$0, $placeable, $measuredSize) {
    return function ($this$layout) {
      var slideOffset = this$0.o7u_1.u7j(this$0.r7u_1, SlideModifier$measure$lambda$lambda(this$0, $measuredSize));
      $this$layout.i5r($placeable, slideOffset.b2().k2m_1);
      return Unit_getInstance();
    };
  }
  function SlideModifier(lazyAnimation, slideIn, slideOut) {
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.o7u_1 = lazyAnimation;
    this.p7u_1 = slideIn;
    this.q7u_1 = slideOut;
    var tmp = this;
    tmp.r7u_1 = SlideModifier$transitionSpec$lambda(this);
  }
  protoOf(SlideModifier).u7u = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.p7u_1.b2();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s7u_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.k2m_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_5().m2m_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.q7u_1.b2();
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s7u_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.k2m_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_5().m2m_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp6_subject = targetState;
    var tmp0 = tmp6_subject.k6_1;
    var tmp_7;
    switch (tmp0) {
      case 1:
        tmp_7 = Companion_getInstance_5().m2m_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  protoOf(SlideModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l4l(constraints);
    var measuredSize = IntSize_0(placeable.m4l_1, placeable.n4l_1);
    var tmp = placeable.m4l_1;
    var tmp_0 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp, tmp_0, VOID, SlideModifier$measure$lambda(this, placeable, measuredSize));
  };
  function createModifier$composable$lambda($shouldAnimateAlpha$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('shouldAnimateAlpha', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $shouldAnimateAlpha$delegate.b2();
    return tmp$ret$0;
  }
  function createModifier$composable$lambda_0($shouldAnimateAlpha$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_setValue = getLocalDelegateReference('shouldAnimateAlpha', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateAlpha$delegate.kk(value);
  }
  function createModifier$composable$lambda_1($shouldAnimateScale$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('shouldAnimateScale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $shouldAnimateScale$delegate.b2();
    return tmp$ret$0;
  }
  function createModifier$composable$lambda_2($shouldAnimateScale$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_setValue = getLocalDelegateReference('shouldAnimateScale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateScale$delegate.kk(value);
  }
  function createModifier$composable$lambda_3($alpha$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $alpha$delegate.b2();
    return tmp$ret$0;
  }
  function createModifier$composable$lambda_4($scale$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('scale', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $scale$delegate.b2();
    return tmp$ret$0;
  }
  function createModifier$composable$lambda_5($transformOrigin$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('transformOrigin', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $transformOrigin$delegate.b2().j4z_1;
    return tmp$ret$0;
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.j4z_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.j4z_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.l7c_1, it.m7c_1));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function createModifier$composable$lambda_6($enter, $exit) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1c(-57153604);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-57153604, $changed, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:861)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($this$animateFloat.r7j(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.t7j().n7t_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7t_1;
        tmp_0 = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animateFloat.r7j(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.t7j().n7t_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.t7t_1;
        tmp_0 = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp_0 = get_DefaultAlphaAndScaleSpring();
      }
      var tmp0 = tmp_0;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.u1c();
      return tmp0;
    };
  }
  function createModifier$composable$lambda_7($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:934)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function createModifier$composable$lambda_8($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function createModifier$composable$lambda_9($enter, $exit) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1c(-53984035);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-53984035, $changed, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:884)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($this$animateFloat.r7j(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.t7j().q7t_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w7t_1;
        tmp_0 = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animateFloat.r7j(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.t7j().q7t_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.w7t_1;
        tmp_0 = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp_0 = get_DefaultAlphaAndScaleSpring();
      }
      var tmp0 = tmp_0;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.u1c();
      return tmp0;
    };
  }
  function createModifier$composable$lambda_10($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:934)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function createModifier$composable$lambda_11($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function createModifier$composable$lambda_12($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.s1c(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function createModifier$composable$lambda_13($alpha$delegate, $scale$delegate, $transformOrigin$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.r39(createModifier$composable$lambda_3($alpha$delegate));
      $this$graphicsLayer.e4x(createModifier$composable$lambda_4($scale$delegate));
      $this$graphicsLayer.f4x(createModifier$composable$lambda_4($scale$delegate));
      $this$graphicsLayer.m4x(createModifier$composable$lambda_5($transformOrigin$delegate));
      return Unit_getInstance();
    };
  }
  function createModifier$composable$lambda_14($alpha$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.r39(createModifier$composable$lambda_3($alpha$delegate));
      return Unit_getInstance();
    };
  }
  function invoke$lambda($shouldAnimate$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $shouldAnimate$delegate.b2();
    return tmp$ret$0;
  }
  function invoke$lambda_0($shouldAnimate$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_setValue = getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.kk(value);
  }
  function shrinkExpand$lambda($transition, $expand, $shrink, $labelPrefix) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1c(-140634085);
      sourceInformation($composer_0, 'C1037@44387L46,1047@44741L396,1060@45251L41,1058@45177L125,1069@45612L218:EnterExitTransition.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-140634085, $changed, -1, 'androidx.compose.animation.shrinkExpand.<anonymous> (EnterExitTransition.kt:1033)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h($transition);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf(false);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      var shouldAnimate$delegate = tmp$ret$4;
      var tmp_2;
      if ($transition.p7h().equals($transition.r7h()) ? !$transition.e7j() : false) {
        invoke$lambda_0(shouldAnimate$delegate, false);
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if (!($expand.b2() == null) ? true : !($shrink.b2() == null)) {
          invoke$lambda_0(shouldAnimate$delegate, true);
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      var tmp_4;
      if (invoke$lambda(shouldAnimate$delegate)) {
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp$ret$6;
        // Inline function 'kotlin.with' call
        var tmp4_with = $transition.f7j();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        var tmp0_return = tmp4_with.r7j(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance());
        tmp$ret$5 = tmp0_return;
        tmp$ret$6 = tmp$ret$5;
        var tmp5_let = tmp$ret$6;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        var tmp_5;
        if (tmp5_let) {
          var tmp0_safe_receiver = $expand.b2();
          var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z7t_1;
          var tmp_6;
          if (tmp2_elvis_lhs == null) {
            var tmp1_safe_receiver = $shrink.b2();
            tmp_6 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z7t_1;
          } else {
            tmp_6 = tmp2_elvis_lhs;
          }
          tmp_5 = tmp_6;
        } else {
          var tmp3_safe_receiver = $shrink.b2();
          var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.z7t_1;
          var tmp_7;
          if (tmp5_elvis_lhs == null) {
            var tmp4_safe_receiver = $expand.b2();
            tmp_7 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z7t_1;
          } else {
            tmp_7 = tmp5_elvis_lhs;
          }
          tmp_5 = tmp_7;
        }
        var tmp0_return_0 = tmp_5;
        tmp$ret$7 = tmp0_return_0;
        tmp$ret$8 = tmp$ret$7;
        var alignment = rememberUpdatedState$composable(tmp$ret$8, $composer_0, 0);
        var tmp_8 = get_VectorConverter_0(Companion_getInstance_2());
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp8_remember$composable = $composer_0;
        var $composer_2 = tmp8_remember$composable;
        $composer_2.s1c(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp7_cache = $composer_2;
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp6_let = tmp7_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (false ? true : tmp6_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$9;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$9 = $labelPrefix + ' shrink/expand';
          var value_0 = tmp$ret$9;
          tmp7_cache.p1q(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = tmp6_let;
        }
        tmp$ret$10 = tmp_9;
        tmp$ret$11 = tmp$ret$10;
        var tmp_10 = tmp$ret$11;
        tmp$ret$12 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_2.u1c();
        tmp$ret$13 = tmp0_0;
        var sizeAnimation = createDeferredAnimation$composable($transition, tmp_8, tmp$ret$13, $composer_0, 0, 0);
        $composer_0.o1l(-1553213624, $transition.p7h().equals($transition.r7h()));
        sourceInformation($composer_0, '1065@45497L54,1063@45413L152');
        var tmp_11 = get_VectorConverter_1(Companion_getInstance_5());
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp11_remember$composable = $composer_0;
        var $composer_3 = tmp11_remember$composable;
        $composer_3.s1c(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp10_cache = $composer_3;
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp9_let = tmp10_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (false ? true : tmp9_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$14;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$14 = $labelPrefix + ' InterruptionHandlingOffset';
          var value_1 = tmp$ret$14;
          tmp10_cache.p1q(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = tmp9_let;
        }
        tmp$ret$15 = tmp_12;
        tmp$ret$16 = tmp$ret$15;
        var tmp_13 = tmp$ret$16;
        tmp$ret$17 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_3.u1c();
        tmp$ret$18 = tmp0_1;
        var tmp1 = createDeferredAnimation$composable($transition, tmp_11, tmp$ret$18, $composer_0, 0, 0);
        $composer_0.s1l();
        var offsetAnimation = tmp1;
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp15_remember$composable = $composer_0;
        var $composer_4 = tmp15_remember$composable;
        $composer_4.s1c(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$22;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp13_cache = $composer_4;
        var tmp14_cache = $composer_4.x1h($transition);
        var tmp$ret$21;
        // Inline function 'kotlin.let' call
        var tmp12_let = tmp13_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (tmp14_cache ? true : tmp12_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$19;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$19 = new ExpandShrinkModifier(sizeAnimation, offsetAnimation, $expand, $shrink, alignment);
          var value_2 = tmp$ret$19;
          tmp13_cache.p1q(value_2);
          tmp_14 = value_2;
        } else {
          tmp_14 = tmp12_let;
        }
        tmp$ret$20 = tmp_14;
        tmp$ret$21 = tmp$ret$20;
        var tmp_15 = tmp$ret$21;
        tmp$ret$22 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_2 = tmp$ret$22;
        $composer_4.u1c();
        tmp$ret$23 = tmp0_2;
        var expandShrinkModifier = tmp$ret$23;
        if ($transition.p7h().equals($transition.r7h())) {
          expandShrinkModifier.k7u_1 = null;
        } else if (expandShrinkModifier.k7u_1 == null) {
          var tmp_16 = expandShrinkModifier;
          var tmp0_elvis_lhs = alignment.b2();
          tmp_16.k7u_1 = tmp0_elvis_lhs == null ? Companion_getInstance_4().f4g_1 : tmp0_elvis_lhs;
        }
        var tmp_17;
        var tmp1_safe_receiver_0 = $expand.b2();
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.c7u_1) === false) {
          tmp_17 = true;
        } else {
          var tmp2_safe_receiver = $shrink.b2();
          tmp_17 = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.c7u_1) === false;
        }
        var disableClip = tmp_17;
        tmp_4 = $this$composed.e4h(disableClip ? Companion_getInstance() : clipToBounds(Companion_getInstance())).e4h(expandShrinkModifier);
      } else {
        tmp_4 = $this$composed;
      }
      var tmp2_group = tmp_4;
      var tmp0_3 = tmp2_group;
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_getInstance();
      }
      $composer_0.u1c();
      return tmp0_3;
    };
  }
  function invoke$lambda_1($shouldAnimate$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $shouldAnimate$delegate.b2();
    return tmp$ret$0;
  }
  function invoke$lambda_2($shouldAnimate$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_setValue = getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.kk(value);
  }
  function slideInOut$lambda($transition, $slideIn, $slideOut, $labelPrefix) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1c(158379472);
      sourceInformation($composer_0, 'C954@41309L46,966@41734L33,964@41658L119,968@41801L88:EnterExitTransition.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(158379472, $changed, -1, 'androidx.compose.animation.slideInOut.<anonymous> (EnterExitTransition.kt:951)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h($transition);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf(false);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      var shouldAnimate$delegate = tmp$ret$4;
      var tmp_2;
      if ($transition.p7h().equals($transition.r7h()) ? !$transition.e7j() : false) {
        invoke$lambda_2(shouldAnimate$delegate, false);
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if (!($slideIn.b2() == null) ? true : !($slideOut.b2() == null)) {
          invoke$lambda_2(shouldAnimate$delegate, true);
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      var tmp_4;
      if (invoke$lambda_1(shouldAnimate$delegate)) {
        var tmp_5 = get_VectorConverter_1(Companion_getInstance_5());
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_2 = tmp6_remember$composable;
        $composer_2.s1c(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp5_cache = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp4_let = tmp5_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp4_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
          tmp$ret$5 = $labelPrefix + ' slide';
          var value_0 = tmp$ret$5;
          tmp5_cache.p1q(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp4_let;
        }
        tmp$ret$6 = tmp_6;
        tmp$ret$7 = tmp$ret$6;
        var tmp_7 = tmp$ret$7;
        tmp$ret$8 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.u1c();
        tmp$ret$9 = tmp0_0;
        var animation = createDeferredAnimation$composable($transition, tmp_5, tmp$ret$9, $composer_0, 0, 0);
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp10_remember$composable = $composer_0;
        var $composer_3 = tmp10_remember$composable;
        $composer_3.s1c(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp8_cache = $composer_3;
        var tmp9_cache = $composer_3.x1h($transition);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp7_let = tmp8_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp9_cache ? true : tmp7_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$10;
          // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
          tmp$ret$10 = new SlideModifier(animation, $slideIn, $slideOut);
          var value_1 = tmp$ret$10;
          tmp8_cache.p1q(value_1);
          tmp_8 = value_1;
        } else {
          tmp_8 = tmp7_let;
        }
        tmp$ret$11 = tmp_8;
        tmp$ret$12 = tmp$ret$11;
        var tmp_9 = tmp$ret$12;
        tmp$ret$13 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.u1c();
        tmp$ret$14 = tmp0_1;
        var modifier = tmp$ret$14;
        tmp_4 = $this$composed.e4h(modifier);
      } else {
        tmp_4 = $this$composed;
      }
      var tmp1_group = tmp_4;
      var tmp0_2 = tmp1_group;
      var tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_10 = Unit_getInstance();
      }
      $composer_0.u1c();
      return tmp0_2;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (properties_initialized_EnterExitTransition_kt_te1nvp) {
    } else {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlpha = mutableStateOf(1.0);
      Spring_getInstance();
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      Spring_getInstance();
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_5())));
      Spring_getInstance();
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.n2l());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().b7v(velocity, $this.v7u_1 * $this.x7u_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.c7v_1 = initialVelocity;
    this.d7v_1 = distance;
    this.e7v_1 = duration;
    this.f7v_1 = 0;
  }
  protoOf(FlingInfo).g7v = function (time) {
    var tmp;
    if (this.e7v_1.u(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.e7v_1.ff();
      tmp$ret$0 = time.ff() / tmp0_div;
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.c7v_1;
    tmp$ret$1 = sign(tmp1_sign);
    return this.d7v_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().k7v(splinePos).h7v_1;
  };
  protoOf(FlingInfo).l7v = function (time) {
    var tmp;
    if (this.e7v_1.u(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.e7v_1.ff();
      tmp$ret$0 = time.ff() / tmp0_div;
      tmp = tmp$ret$0;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().k7v(splinePos).i7v_1;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.c7v_1;
    tmp$ret$1 = sign(tmp1_sign);
    return tmp_0 * tmp$ret$1 * this.d7v_1 / this.e7v_1.ff() * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.c7v_1 + ', distance=' + this.d7v_1 + ', duration=' + toString(this.e7v_1) + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.c7v_1);
    result = imul(result, 31) + getNumberHashCode(this.d7v_1) | 0;
    result = imul(result, 31) + this.e7v_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.c7v_1, tmp0_other_with_cast.c7v_1))
      return false;
    if (!equals(this.d7v_1, tmp0_other_with_cast.d7v_1))
      return false;
    if (!this.e7v_1.equals(tmp0_other_with_cast.e7v_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.v7u_1 = friction;
    this.w7u_1 = density;
    this.x7u_1 = computeDeceleration(this, this.w7u_1);
  }
  protoOf(FlingCalculator).m7v = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = l / decelMinusOne;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).n7v = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.v7u_1 * this.x7u_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return tmp * tmp$ret$0;
  };
  protoOf(FlingCalculator).o7v = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.v7u_1 * this.x7u_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp_0 = tmp * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = l / decelMinusOne;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (properties_initialized_FlingCalculator_kt_aw7aky) {
    } else {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$0 = Math.log(0.78);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$1 = Math.log(0.9);
      DecelerationRate = tmp / tmp$ret$1;
    }
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.h7v_1 = distanceCoefficient;
    this.i7v_1 = velocityCoefficient;
    this.j7v_1 = 0;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.h7v_1 + ', velocityCoefficient=' + this.i7v_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.h7v_1);
    result = imul(result, 31) + getNumberHashCode(this.i7v_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.h7v_1, tmp0_other_with_cast.h7v_1))
      return false;
    if (!equals(this.i7v_1, tmp0_other_with_cast.i7v_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.y7u_1 = 100;
    this.z7u_1 = new Float32Array(101);
    this.a7v_1 = new Float32Array(101);
    computeSplineInfo(this.z7u_1, this.a7v_1, 100);
  }
  protoOf(AndroidFlingSpline).k7v = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.z7u_1[index];
      var dSup = this.z7u_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).b7v = function (velocity, friction) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(velocity);
    var tmp0_ln = 0.35 * tmp$ret$0 / friction;
    tmp$ret$1 = Math.log(tmp0_ln);
    return tmp$ret$1;
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          var tmp$ret$0;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = tx - alpha;
          tmp$ret$0 = Math.abs(tmp0_abs);
          if (tmp$ret$0 < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          var tmp$ret$1;
          // Inline function 'kotlin.math.abs' call
          var tmp1_abs = dy - alpha;
          tmp$ret$1 = Math.abs(tmp1_abs);
          if (tmp$ret$1 < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.p7v_1.n7v(startVelocity);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    tmp$ret$0 = sign(startVelocity);
    return tmp * tmp$ret$0;
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.p7v_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
    this.q7v_1 = 0;
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).t7b = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).j7d = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).g7d = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(new Long(1000000, 0));
    return initialValue + this.p7v_1.o7v(initialVelocity).g7v(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).h7d = function (initialValue, initialVelocity) {
    return this.p7v_1.m7v(initialVelocity).q7(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).i7d = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(new Long(1000000, 0));
    return this.p7v_1.o7v(initialVelocity).l7v(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(802798862, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay$composable (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp5_remember$composable = density.n2l();
    var tmp6_remember$composable = $composer_0;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.s1c(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp3_cache = $composer_2;
    var tmp4_cache = $composer_2.x1h(tmp5_remember$composable);
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp2_let = tmp3_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp4_cache ? true : tmp2_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay$composable.<anonymous>' call
      tmp$ret$1 = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      var value = tmp$ret$1;
      tmp3_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp2_let;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0_0 = tmp$ret$4;
    $composer_2.u1c();
    tmp$ret$5 = tmp0_0;
    var tmp0_1 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  //region block: post-declaration
  protoOf(LayoutModifierWithPassThroughIntrinsics).j4h = foldIn;
  protoOf(LayoutModifierWithPassThroughIntrinsics).k4h = all;
  protoOf(LayoutModifierWithPassThroughIntrinsics).e4h = then;
  protoOf(ExpandShrinkModifier).j4h = foldIn;
  protoOf(ExpandShrinkModifier).k4h = all;
  protoOf(ExpandShrinkModifier).e4h = then;
  protoOf(SlideModifier).j4h = foldIn;
  protoOf(SlideModifier).k4h = all;
  protoOf(SlideModifier).e4h = then;
  //endregion
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedVisibility$composable;
  _.$_$.b = fadeIn;
  _.$_$.c = fadeOut;
  _.$_$.d = rememberSplineBasedDecay$composable;
  _.$_$.e = scaleIn;
  _.$_$.f = scaleOut;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation.js.map
