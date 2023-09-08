(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js', './androidx-runtime-saveable.js', './Decompose-decompose-js-ir.js', './androidx-foundation-layout.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-animation-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'), require('./androidx-runtime-saveable.js'), require('./Decompose-decompose-js-ir.js'), require('./androidx-foundation-layout.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-animation-core.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['Decompose-decompose-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'Decompose-decompose-js-ir' was not found. Please, check whether 'Decompose-decompose-js-ir' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-extensions-compose-jetbrains'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'Decompose-extensions-compose-jetbrains'.");
    }
    root['Decompose-extensions-compose-jetbrains'] = factory(typeof this['Decompose-extensions-compose-jetbrains'] === 'undefined' ? {} : this['Decompose-extensions-compose-jetbrains'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui'], this['androidx-runtime-saveable'], this['Decompose-decompose-js-ir'], this['androidx-foundation-layout'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-animation-core']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_com_arkivanov_decompose_decompose, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var hashString = kotlin_com_arkivanov_decompose_decompose.$_$.t;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var isInterface = kotlin_kotlin.$_$.h8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var listOf = kotlin_kotlin.$_$.j5;
  var listOf_0 = kotlin_kotlin.$_$.i5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var mapCapacity = kotlin_kotlin.$_$.k5;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var equals = kotlin_kotlin.$_$.u7;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.r9;
  var THROW_ISE = kotlin_kotlin.$_$.kb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x7;
  var to = kotlin_kotlin.$_$.jc;
  var plus = kotlin_kotlin.$_$.r5;
  var minus = kotlin_kotlin.$_$.m5;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var get_isFinished = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var animateTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var AnimationState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var Enum = kotlin_kotlin.$_$.ya;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var coerceIn = kotlin_kotlin.$_$.l9;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var scale = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var booleanArray = kotlin_kotlin.$_$.l7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(Keys, 'Keys', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(AbstractStackAnimation$Overlay$composable$slambda$slambda, 'AbstractStackAnimation$Overlay$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(AnimationItem, 'AnimationItem', classMeta);
  setMetadataFor(Page, 'Page', classMeta);
  setMetadataFor(AbstractStackAnimation$Overlay$composable$slambda, 'AbstractStackAnimation$Overlay$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractStackAnimation, 'AbstractStackAnimation', classMeta);
  setMetadataFor(DefaultStackAnimator$invoke$slambda, 'DefaultStackAnimator$invoke$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultStackAnimator, 'DefaultStackAnimator', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(EmptyStackAnimation, 'EmptyStackAnimation', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(EmptyStackAnimator, 'EmptyStackAnimator', objectMeta);
  setMetadataFor(SimpleStackAnimation, 'SimpleStackAnimation', classMeta, AbstractStackAnimation);
  setMetadataFor(PlusStackAnimator, 'PlusStackAnimator', classMeta);
  //endregion
  function subscribeAsState$composable(_this__u8e3s4, policy, $composer, $changed, $default) {
    var policy_0 = {_v: policy};
    var $composer_0 = $composer;
    $composer_0.s1c(250848683);
    sourceInformation($composer_0, 'C(subscribeAsState$composable)');
    if (!(($default & 1) === 0)) {
      policy_0._v = structuralEqualityPolicy();
    }
    if (isTraceInProgress()) {
      traceEventStart(250848683, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState$composable (SubscribeAsState.kt:18)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = policy_0._v;
    var tmp4_remember$composable = $composer_0;
    var tmp5_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.s1c(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.x1h(_this__u8e3s4) | $composer_1.x1h(tmp3_remember$composable));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(_this__u8e3s4.b2(), policy_0._v);
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
    var state = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp9_remember$composable = $composer_0;
    var tmp10_remember$composable = 112 & $changed << 3;
    var $composer_2 = tmp9_remember$composable;
    $composer_2.s1c(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp7_cache = $composer_2;
    var tmp8_cache = !!($composer_2.x1h(state) | $composer_2.x1h(_this__u8e3s4));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp6_let = tmp7_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp8_cache ? true : tmp6_let === Companion_getInstance().k1j_1) {
      var tmp$ret$5;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState$composable.<anonymous>' call
      tmp$ret$5 = subscribeAsState$composable$lambda(_this__u8e3s4, state);
      var value_0 = tmp$ret$5;
      tmp7_cache.p1q(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp6_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.u1c();
    tmp$ret$9 = tmp0_0;
    DisposableEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = state;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function subscribeAsState$composable$lambda$lambda($state) {
    return function (it) {
      $state.kk(it);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($this_subscribeAsState$composable, $observer) {
    this.ka8_1 = $this_subscribeAsState$composable;
    this.la8_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv).wp = function () {
    // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.ka8_1.zi(this.la8_1);
  };
  function subscribeAsState$composable$lambda($this_subscribeAsState$composable, $state) {
    return function ($this$DisposableEffect) {
      var observer = subscribeAsState$composable$lambda$lambda($state);
      $this_subscribeAsState$composable.yi(observer);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($this_subscribeAsState$composable, observer);
      return tmp$ret$0;
    };
  }
  function Children$composable(stack, modifier, animation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var animation_0 = {_v: animation};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-81630929);
    sourceInformation($composer_0, 'C(Children$composable)P(3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(stack) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(animation_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        animation_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-81630929, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable (Children.kt:17)');
      }
      var holder = rememberSaveableStateHolder$composable($composer_0, 0);
      retainStates$composable(holder, getConfigurations(stack), $composer_0, 0);
      var tmp0_elvis_lhs = animation_0._v;
      var anim = tmp0_elvis_lhs == null ? emptyStackAnimation() : tmp0_elvis_lhs;
      var tmp = modifier_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1365124430, true, Children$composable$lambda(holder, content, $dirty));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      anim.ma8(stack, tmp, tmp$ret$6, $composer_0, 384 | 14 & $dirty | 112 & $dirty);
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
      tmp0_safe_receiver.y1t(Children$composable$lambda_0(stack, modifier_0, animation_0, content, $changed, $default));
    }
  }
  function Children$composable_0(stack, modifier, animation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var animation_0 = {_v: animation};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1979882261);
    sourceInformation($composer_0, 'C(Children$composable)P(3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(stack) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(animation_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        animation_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1979882261, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable (Children.kt:37)');
      }
      var state = subscribeAsState$composable(stack, null, $composer_0, 14 & $dirty, 1);
      Children$composable(state.b2(), modifier_0._v, animation_0._v, content, $composer_0, 112 & $dirty | 896 & $dirty | 7168 & $dirty, 0);
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
      tmp0_safe_receiver.y1t(Children$composable$lambda_1(stack, modifier_0, animation_0, content, $changed, $default));
    }
  }
  function retainStates$composable(_this__u8e3s4, currentKeys, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1938001636);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(currentKeys) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1938001636, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.retainStates$composable (Children.kt:57)');
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
      var tmp2_cache = $composer_1.x1h(_this__u8e3s4);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.retainStates$composable.<anonymous>' call
        tmp$ret$0 = new Keys(currentKeys);
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
      var keys = tmp$ret$4;
      DisposableEffect$composable_0(_this__u8e3s4, currentKeys, retainStates$composable$lambda(keys, currentKeys, _this__u8e3s4), $composer_0, 14 & $dirty | 112 & $dirty);
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
      tmp0_safe_receiver.y1t(retainStates$composable$lambda_0(_this__u8e3s4, currentKeys, $changed));
    }
  }
  function getConfigurations(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = _this__u8e3s4.sl_1;
    var tmp1_mapTo = HashSet_init_$Create$();
    var tmp0_iterator = tmp0_mapTo.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.getConfigurations.<anonymous>' call
      tmp$ret$0 = hashString(item.di_1);
      tmp1_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp1_mapTo;
    return tmp$ret$1;
  }
  function Keys(set) {
    this.na8_1 = set;
  }
  function Children$composable$lambda$lambda($content, $child, $$dirty, $$dirty$1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1814980403, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous>.<anonymous> (Children.kt:30)');
        }
        $content($child, $composer_0, 14 & $$dirty | 112 & $$dirty$1 >> 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Children$composable$lambda($holder, $content, $$dirty) {
    return function (child, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(child) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1365124430, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous> (Children.kt:29)');
        }
        var tmp_1 = hashString(child.di_1);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1814980403, true, Children$composable$lambda$lambda($content, child, $dirty, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.x1h(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.p1q(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.u1c();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        $holder.o3t(tmp_1, tmp$ret$6, $composer_0, 48);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function Children$composable$lambda_0($stack, $modifier, $animation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Children$composable($stack, $modifier._v, $animation._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Children$composable$lambda_1($stack, $modifier, $animation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Children$composable_0($stack, $modifier._v, $animation._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.retainStates$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function retainStates$composable$lambda($keys, $currentKeys, $this_retainStates$composable) {
    return function ($this$DisposableEffect) {
      var tmp0_forEach = $keys.na8_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.retainStates$composable.<anonymous>.<anonymous>' call
        if (!$currentKeys.m(element)) {
          $this_retainStates$composable.p3t(element);
        }
      }
      $keys.na8_1 = $currentKeys;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0();
      return tmp$ret$0;
    };
  }
  function retainStates$composable$lambda_0($this_retainStates$composable, $currentKeys, $$changed) {
    return function ($composer, $force) {
      retainStates$composable($this_retainStates$composable, $currentKeys, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AbstractStackAnimation$Overlay$composable$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractStackAnimation$Overlay$composable$slambda$slambda).h5g = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.i5g($this$awaitPointerEventScope, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AbstractStackAnimation$Overlay$composable$slambda$slambda).eg = function (p1, $completion) {
    return this.h5g((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractStackAnimation$Overlay$composable$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            this.jf_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.jf_1 = 4;
              continue $sm;
            }

            this.jf_1 = 2;
            suspendResult = this.wa8_1.k5k(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp0_forEach = event.o5d_1;
            var tmp0_iterator = tmp0_forEach.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              element.a5f();
            }

            this.jf_1 = 1;
            continue $sm;
          case 3:
            throw this.mf_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 3) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractStackAnimation$Overlay$composable$slambda$slambda).i5g = function ($this$awaitPointerEventScope, completion) {
    var i = new AbstractStackAnimation$Overlay$composable$slambda$slambda(completion);
    i.wa8_1 = $this$awaitPointerEventScope;
    return i;
  };
  function AbstractStackAnimation$Overlay$composable$slambda$slambda_0(resultContinuation) {
    var i = new AbstractStackAnimation$Overlay$composable$slambda$slambda(resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.h5g($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function activePage(_this__u8e3s4, $this) {
    return new Page(_this__u8e3s4.ql_1, get_lastIndex(_this__u8e3s4.sl_1));
  }
  function getAnimationItems($this, newPage, oldPage) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp1_associateBy = oldPage == null ? listOf_0(new AnimationItem(newPage.xa8_1, Direction_ENTER_FRONT_getInstance(), true)) : newPage.ya8_1 >= oldPage.ya8_1 ? listOf([new AnimationItem(oldPage.xa8_1, Direction_EXIT_BACK_getInstance(), VOID, newPage.xa8_1), new AnimationItem(newPage.xa8_1, Direction_ENTER_FRONT_getInstance(), VOID, oldPage.xa8_1)]) : listOf([new AnimationItem(newPage.xa8_1, Direction_ENTER_BACK_getInstance(), VOID, oldPage.xa8_1), new AnimationItem(oldPage.xa8_1, Direction_EXIT_FRONT_getInstance(), VOID, newPage.xa8_1)]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp1_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp1_associateBy.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.getAnimationItems.<anonymous>' call
      tmp$ret$0 = element.za8_1.di_1;
      tmp0_associateByTo.h4(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function AnimationItem(child, direction, isInitial, otherChild) {
    isInitial = isInitial === VOID ? false : isInitial;
    otherChild = otherChild === VOID ? null : otherChild;
    this.za8_1 = child;
    this.aa9_1 = direction;
    this.ba9_1 = isInitial;
    this.ca9_1 = otherChild;
  }
  protoOf(AnimationItem).da9 = function (child, direction, isInitial, otherChild) {
    return new AnimationItem(child, direction, isInitial, otherChild);
  };
  protoOf(AnimationItem).ea9 = function (child, direction, isInitial, otherChild, $super) {
    child = child === VOID ? this.za8_1 : child;
    direction = direction === VOID ? this.aa9_1 : direction;
    isInitial = isInitial === VOID ? this.ba9_1 : isInitial;
    otherChild = otherChild === VOID ? this.ca9_1 : otherChild;
    return $super === VOID ? this.da9(child, direction, isInitial, otherChild) : $super.da9.call(this, child, direction, isInitial, otherChild);
  };
  protoOf(AnimationItem).toString = function () {
    return 'AnimationItem(child=' + this.za8_1 + ', direction=' + this.aa9_1 + ', isInitial=' + this.ba9_1 + ', otherChild=' + this.ca9_1 + ')';
  };
  protoOf(AnimationItem).hashCode = function () {
    var result = this.za8_1.hashCode();
    result = imul(result, 31) + this.aa9_1.hashCode() | 0;
    result = imul(result, 31) + (this.ba9_1 | 0) | 0;
    result = imul(result, 31) + (this.ca9_1 == null ? 0 : this.ca9_1.hashCode()) | 0;
    return result;
  };
  protoOf(AnimationItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnimationItem))
      return false;
    var tmp0_other_with_cast = other instanceof AnimationItem ? other : THROW_CCE();
    if (!this.za8_1.equals(tmp0_other_with_cast.za8_1))
      return false;
    if (!this.aa9_1.equals(tmp0_other_with_cast.aa9_1))
      return false;
    if (!(this.ba9_1 === tmp0_other_with_cast.ba9_1))
      return false;
    if (!equals(this.ca9_1, tmp0_other_with_cast.ca9_1))
      return false;
    return true;
  };
  function Page(child, index) {
    this.xa8_1 = child;
    this.ya8_1 = index;
  }
  function Overlay$composable($this, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1591859039);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1591859039, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.Overlay$composable (AbstractStackAnimation.kt:62)');
      }
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
      if (false ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.Overlay$composable.<anonymous>' call
        tmp$ret$0 = AbstractStackAnimation$Overlay$composable$slambda_0(null);
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
      Box$composable(pointerInput(modifier, Unit_getInstance(), tmp$ret$4), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = $this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(AbstractStackAnimation$Overlay$composable$lambda(tmp0_rcvr, modifier, $changed));
    }
  }
  function invoke$lambda($activePage$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('activePage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $activePage$delegate.b2();
    return tmp$ret$0;
  }
  function invoke$lambda_0($activePage$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('activePage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activePage$delegate.kk(value);
  }
  function invoke$lambda_1($items$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('items', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $items$delegate.b2();
    return tmp$ret$0;
  }
  function invoke$lambda_2($items$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('items', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $items$delegate.kk(value);
  }
  function AbstractStackAnimation$invoke$lambda($item, $configuration, $items$delegate) {
    return function () {
      var tmp;
      if (get_isExit($item.aa9_1)) {
        invoke$lambda_2($items$delegate, minus(invoke$lambda_1($items$delegate), $configuration));
        tmp = Unit_getInstance();
      } else {
        invoke$lambda_2($items$delegate, plus(invoke$lambda_1($items$delegate), to($configuration, $item.ea9(VOID, VOID, VOID, null))));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AbstractStackAnimation$invoke$lambda_0($tmp0_rcvr, $stack, $modifier, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.ma8($stack, $modifier, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AbstractStackAnimation$Overlay$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractStackAnimation$Overlay$composable$slambda).x5g = function ($this$pointerInput, $completion) {
    var tmp = this.y5g($this$pointerInput, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AbstractStackAnimation$Overlay$composable$slambda).eg = function (p1, $completion) {
    return this.x5g((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractStackAnimation$Overlay$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.oa9_1.z5g(AbstractStackAnimation$Overlay$composable$slambda$slambda_0(null), this);
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
  protoOf(AbstractStackAnimation$Overlay$composable$slambda).y5g = function ($this$pointerInput, completion) {
    var i = new AbstractStackAnimation$Overlay$composable$slambda(completion);
    i.oa9_1 = $this$pointerInput;
    return i;
  };
  function AbstractStackAnimation$Overlay$composable$slambda_0(resultContinuation) {
    var i = new AbstractStackAnimation$Overlay$composable$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x5g($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractStackAnimation$Overlay$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      Overlay$composable($tmp0_rcvr, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AbstractStackAnimation(disableInputDuringAnimation) {
    this.fa9_1 = disableInputDuringAnimation;
  }
  protoOf(AbstractStackAnimation).ma8 = function (stack, modifier, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1039682225);
    sourceInformation($composer_0, 'C(invoke)P(2,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(stack) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1039682225, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.invoke (AbstractStackAnimation.kt:26)');
      }
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
      if (false ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.invoke.<anonymous>' call
        tmp$ret$0 = mutableStateOf(activePage(stack, this));
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
      var activePage$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_2 = tmp5_remember$composable;
      $composer_2.s1c(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp3_let === Companion_getInstance().k1j_1) {
        var tmp$ret$5;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.invoke.<anonymous>' call
        tmp$ret$5 = mutableStateOf(getAnimationItems(this, invoke$lambda(activePage$delegate), null));
        var value_0 = tmp$ret$5;
        tmp4_cache.p1q(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp3_let;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.u1c();
      tmp$ret$9 = tmp0_0;
      var items$delegate = tmp$ret$9;
      if (!equals(stack.ql_1.di_1, invoke$lambda(activePage$delegate).xa8_1.di_1)) {
        var oldPage = invoke$lambda(activePage$delegate);
        invoke$lambda_0(activePage$delegate, activePage(stack, this));
        invoke$lambda_2(items$delegate, getAnimationItems(this, invoke$lambda(activePage$delegate), oldPage));
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp22_Box$composable = null;
      var tmp23_Box$composable = false;
      var tmp24_Box$composable = $composer_0;
      var tmp25_Box$composable = 14 & $dirty >> 3;
      var modifier_0 = modifier;
      var contentAlignment = tmp22_Box$composable;
      var propagateMinConstraints = tmp23_Box$composable;
      var $composer_3 = tmp24_Box$composable;
      $composer_3.s1c(1330882304);
      sourceInformation($composer_3, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_1().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_3, 14 & tmp25_Box$composable >> 3 | 112 & tmp25_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp17_Layout$composable = modifier_0;
      var tmp18_Layout$composable = $composer_3;
      var tmp19_Layout$composable = 112 & tmp25_Box$composable << 3;
      var modifier_1 = tmp17_Layout$composable;
      var $composer_4 = tmp18_Layout$composable;
      $composer_4.s1c(1725976829);
      sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_0();
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp6_$get_current$$composable_e2rmqd = get_LocalDensity();
      var tmp7_$get_current$$composable_dkarp2 = $composer_4;
      var $composer_5 = tmp7_$get_current$$composable_dkarp2;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp6_$get_current$$composable_e2rmqd);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$10 = tmp0_1;
      var density = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp8_$get_current$$composable_d1twnr = get_LocalLayoutDirection();
      var tmp9_$get_current$$composable_cjd1mg = $composer_4;
      var $composer_6 = tmp9_$get_current$$composable_cjd1mg;
      sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1p(tmp8_$get_current$$composable_d1twnr);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$11 = tmp0_2;
      var layoutDirection = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp10_$get_current$$composable_orpap8 = get_LocalViewConfiguration();
      var tmp11_$get_current$$composable_o98fnx = $composer_4;
      var $composer_7 = tmp11_$get_current$$composable_o98fnx;
      sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_7.w1p(tmp10_$get_current$$composable_orpap8);
      sourceInformationMarkerEnd($composer_7);
      tmp$ret$12 = tmp0_3;
      var viewConfiguration = tmp$ret$12;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp12_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp13_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp14_ReusableComposeNode$composable = $composer_4;
      var tmp15_ReusableComposeNode$composable = 6 | 7168 & tmp19_Layout$composable << 9;
      var $composer_8 = tmp14_ReusableComposeNode$composable;
      var tmp_3 = $composer_8.t1o();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_8.e1p();
      if ($composer_8.c1p()) {
        $composer_8.f1p(tmp12_ReusableComposeNode$composable);
      } else {
        $composer_8.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp16__anonymous__5bf3vu = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, measurePolicy, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, density, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, layoutDirection, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, viewConfiguration, Companion_getInstance_2().k5n_1);
      tmp13_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp15_ReusableComposeNode$composable >> 3);
      $composer_8.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = $composer_8;
      var tmp21__anonymous__l7ugec = 14 & tmp15_ReusableComposeNode$composable >> 9;
      var $composer_9 = tmp20__anonymous__q2j3lv;
      sourceInformationMarkerStart($composer_9, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.invoke.<anonymous>' call
      var tmp26__anonymous__31krnb = BoxScopeInstance_getInstance();
      var tmp27__anonymous__7w9euu = $composer_9;
      var tmp28__anonymous__cqy22d = 6 | 112 & tmp25_Box$composable >> 6;
      var $composer_10 = tmp27__anonymous__7w9euu;
      $composer_10.s1c(-115975083);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = invoke$lambda_1(items$delegate);
      var tmp$ret$13;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$13 = tmp0_forEach.c2().c();
      var tmp0_iterator = tmp$ret$13;
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.AbstractStackAnimation.invoke.<anonymous>.<anonymous>' call
        var tmp$ret$14;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$14 = element.z1();
        var configuration = tmp$ret$14;
        var tmp$ret$15;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$15 = element.b2();
        var item = tmp$ret$15;
        $composer_10.o1l(-1622366295, configuration);
        this.pa9(item, AbstractStackAnimation$invoke$lambda(item, configuration, items$delegate), content, $composer_10, 896 & $dirty | 7168 & $dirty);
        $composer_10.s1l();
      }
      $composer_10.u1c();
      $composer_10.s1c(-585553265);
      if (this.fa9_1 ? invoke$lambda_1(items$delegate).f() > 1 : false) {
        Overlay$composable(this, tmp26__anonymous__31krnb.x7n(Companion_getInstance_0()), $composer_10, 112 & $dirty >> 6);
      }
      $composer_10.u1c();
      sourceInformationMarkerEnd($composer_9);
      $composer_8.u1c();
      $composer_8.i1p();
      $composer_4.u1c();
      $composer_3.u1c();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(AbstractStackAnimation$invoke$lambda_0(tmp0_rcvr, stack, modifier, content, $changed));
    }
  };
  function DefaultStackAnimator$invoke$slambda($animationState, this$0, $onFinished, resultContinuation) {
    this.ya9_1 = $animationState;
    this.za9_1 = this$0;
    this.aaa_1 = $onFinished;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultStackAnimator$invoke$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DefaultStackAnimator$invoke$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultStackAnimator$invoke$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = animateTo(this.ya9_1, 0.0, this.za9_1.caa_1, !get_isFinished(this.ya9_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.aaa_1();
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
  protoOf(DefaultStackAnimator$invoke$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new DefaultStackAnimator$invoke$slambda(this.ya9_1, this.za9_1, this.aaa_1, completion);
    i.baa_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultStackAnimator$invoke$slambda_0($animationState, this$0, $onFinished, resultContinuation) {
    var i = new DefaultStackAnimator$invoke$slambda($animationState, this$0, $onFinished, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultStackAnimator$invoke$lambda($tmp0_rcvr, $direction, $isInitial, $onFinished, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.eaa($direction, $isInitial, $onFinished, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  protoOf(DefaultStackAnimator).eaa = function (direction, isInitial, onFinished, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(2110691009);
    sourceInformation($composer_0, 'C(invoke)P(1,2,3)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(direction) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1p(isInitial) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(onFinished) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(2110691009, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.DefaultStackAnimator.invoke (DefaultStackAnimator.kt:18)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty | 112 & $dirty;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(direction) | $composer_1.x1h(isInitial));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.DefaultStackAnimator.invoke.<anonymous>' call
        tmp$ret$0 = AnimationState(isInitial ? 0.0 : 1.0);
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
      var animationState = tmp$ret$4;
      LaunchedEffect$composable(animationState, DefaultStackAnimator$invoke$slambda_0(animationState, this, onFinished, null), $composer_0, 0);
      var tmp0_subject = direction;
      var tmp0_0 = tmp0_subject.k6_1;
      var tmp_1;
      switch (tmp0_0) {
        case 0:
          tmp_1 = animationState.b2();
          break;
        case 1:
          tmp_1 = 1.0 - animationState.b2();
          break;
        case 2:
          tmp_1 = -animationState.b2();
          break;
        case 3:
          tmp_1 = animationState.b2() - 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var factor = tmp_1;
      this.daa_1(factor, direction, content, $composer_0, 112 & $dirty << 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(DefaultStackAnimator$invoke$lambda(tmp0_rcvr, direction, isInitial, onFinished, content, $changed));
    }
  };
  function DefaultStackAnimator(animationSpec, frame) {
    animationSpec = animationSpec === VOID ? tween() : animationSpec;
    this.caa_1 = animationSpec;
    this.daa_1 = frame;
  }
  var Direction_ENTER_FRONT_instance;
  var Direction_EXIT_FRONT_instance;
  var Direction_ENTER_BACK_instance;
  var Direction_EXIT_BACK_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_ENTER_FRONT_instance = new Direction('ENTER_FRONT', 0);
    Direction_EXIT_FRONT_instance = new Direction('EXIT_FRONT', 1);
    Direction_ENTER_BACK_instance = new Direction('ENTER_BACK', 2);
    Direction_EXIT_BACK_instance = new Direction('EXIT_BACK', 3);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_isExit(_this__u8e3s4) {
    return !get_isEnter(_this__u8e3s4);
  }
  function get_isEnter(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 2:
        tmp = true;
        break;
      case 1:
      case 3:
        tmp = false;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Direction_ENTER_FRONT_getInstance() {
    Direction_initEntries();
    return Direction_ENTER_FRONT_instance;
  }
  function Direction_EXIT_FRONT_getInstance() {
    Direction_initEntries();
    return Direction_EXIT_FRONT_instance;
  }
  function Direction_ENTER_BACK_getInstance() {
    Direction_initEntries();
    return Direction_ENTER_BACK_instance;
  }
  function Direction_EXIT_BACK_getInstance() {
    Direction_initEntries();
    return Direction_EXIT_BACK_instance;
  }
  function emptyStackAnimation() {
    return new EmptyStackAnimation();
  }
  function EmptyStackAnimation$invoke$lambda($tmp0_rcvr, $stack, $modifier, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.ma8($stack, $modifier, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmptyStackAnimation() {
  }
  protoOf(EmptyStackAnimation).ma8 = function (stack, modifier, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-60413443);
    sourceInformation($composer_0, 'C(invoke)P(2,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(stack) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-60413443, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.EmptyStackAnimation.invoke (EmptyStackAnimation.kt:19)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = null;
      var tmp17_Box$composable = false;
      var tmp18_Box$composable = $composer_0;
      var tmp19_Box$composable = 14 & $dirty >> 3;
      var modifier_0 = modifier;
      var contentAlignment = tmp16_Box$composable;
      var propagateMinConstraints = tmp17_Box$composable;
      var $composer_1 = tmp18_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_1().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & tmp19_Box$composable >> 3 | 112 & tmp19_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp19_Box$composable << 3;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_0();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.t1o();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_6.e1p();
      if ($composer_6.c1p()) {
        $composer_6.f1p(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.EmptyStackAnimation.invoke.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6 | 112 & tmp19_Box$composable >> 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      content(stack.ql_1, $composer_8, 112 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
      $composer_1.u1c();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(EmptyStackAnimation$invoke$lambda(tmp0_rcvr, stack, modifier, content, $changed));
    }
  };
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.EmptyStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function EmptyStackAnimator$invoke$lambda($onFinished) {
    return function ($this$DisposableEffect) {
      $onFinished();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1();
      return tmp$ret$0;
    };
  }
  function EmptyStackAnimator$invoke$lambda_0($tmp0_rcvr, $direction, $isInitial, $onFinished, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.eaa($direction, $isInitial, $onFinished, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmptyStackAnimator() {
    EmptyStackAnimator_instance = this;
  }
  protoOf(EmptyStackAnimator).eaa = function (direction, isInitial, onFinished, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1319330945);
    sourceInformation($composer_0, 'C(invoke)P(1,2,3)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(direction) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1p(isInitial) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(onFinished) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1319330945, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.EmptyStackAnimator.invoke (EmptyStackAnimator.kt:9)');
      }
      content(Companion_getInstance_0(), $composer_0, 6 | 112 & $dirty >> 6);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty >> 6;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(onFinished);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.EmptyStackAnimator.invoke.<anonymous>' call
        tmp$ret$0 = EmptyStackAnimator$invoke$lambda(onFinished);
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
      DisposableEffect$composable_0(direction, isInitial, tmp$ret$4, $composer_0, 14 & $dirty | 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(EmptyStackAnimator$invoke$lambda_0(tmp0_rcvr, direction, isInitial, onFinished, content, $changed));
    }
  };
  var EmptyStackAnimator_instance;
  function EmptyStackAnimator_getInstance() {
    if (EmptyStackAnimator_instance == null)
      new EmptyStackAnimator();
    return EmptyStackAnimator_instance;
  }
  function fade(animationSpec, minAlpha) {
    animationSpec = animationSpec === VOID ? tween() : animationSpec;
    minAlpha = minAlpha === VOID ? 0.0 : minAlpha;
    return stackAnimator$composable(animationSpec, ComposableLambda$invoke$ref_1(composableLambdaInstance(1766180347, true, fade$lambda(minAlpha))));
  }
  function getFadeAlpha(factor, minAlpha) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(factor);
    return coerceIn(1.0 - tmp$ret$0 * (1.0 - minAlpha), 0.0, 1.0);
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.d2j(p0, p1, p2, p3, p4);
    };
  }
  function fade$lambda($minAlpha) {
    return function (factor, $anonymous$parameter$1$, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.o1p(factor) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 651) === 130) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1766180347, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.fade.<anonymous> (Fade.kt:16)');
        }
        content(alpha(Companion_getInstance_0(), getFadeAlpha(factor, $minAlpha)), $composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function scale_0(animationSpec, frontFactor, backFactor) {
    animationSpec = animationSpec === VOID ? tween() : animationSpec;
    frontFactor = frontFactor === VOID ? 1.15 : frontFactor;
    backFactor = backFactor === VOID ? 0.95 : backFactor;
    return stackAnimator$composable(animationSpec, ComposableLambda$invoke$ref_2(composableLambdaInstance(1352948153, true, scale$lambda(frontFactor, backFactor))));
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3, p4) {
      return $boundThis.d2j(p0, p1, p2, p3, p4);
    };
  }
  function scale$lambda($frontFactor, $backFactor) {
    return function (factor, $anonymous$parameter$1$, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.o1p(factor) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 651) === 130) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1352948153, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.scale.<anonymous> (Scale.kt:16)');
        }
        var tmp_1 = Companion_getInstance_0();
        var tmp_2;
        if (factor >= 0.0) {
          tmp_2 = factor * ($frontFactor - 1.0) + 1.0;
        } else {
          tmp_2 = factor * (1.0 - $backFactor) + 1.0;
        }
        content(scale(tmp_1, tmp_2), $composer_0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SimpleStackAnimation$Child$composable$lambda($content, $item, $$dirty) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(644669846, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable.<anonymous> (SimpleStackAnimation.kt:24)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp16_Box$composable = null;
        var tmp17_Box$composable = false;
        var tmp18_Box$composable = $composer_0;
        var tmp19_Box$composable = 14 & $dirty;
        var modifier_0 = modifier;
        var contentAlignment = tmp16_Box$composable;
        var propagateMinConstraints = tmp17_Box$composable;
        var $composer_1 = tmp18_Box$composable;
        $composer_1.s1c(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance_0();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_1().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & tmp19_Box$composable >> 3 | 112 & tmp19_Box$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier_0;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 112 & tmp19_Box$composable << 3;
        var modifier_1 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance_0();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_1 = $composer_6.t1o();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_6.e1p();
        if ($composer_6.c1p()) {
          $composer_6.f1p(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
        var tmp21__anonymous__l7ugec = $composer_7;
        var tmp22__anonymous__gd5t6t = 6 | 112 & tmp19_Box$composable >> 6;
        var $composer_8 = tmp21__anonymous__l7ugec;
        $content($item.za8_1, $composer_8, 112 & $$dirty >> 3);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function SimpleStackAnimation$Child$composable$lambda_0($tmp0_rcvr, $item, $onFinished, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.pa9($item, $onFinished, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SimpleStackAnimation(disableInputDuringAnimation, selector) {
    AbstractStackAnimation.call(this, disableInputDuringAnimation);
    this.gaa_1 = selector;
  }
  protoOf(SimpleStackAnimation).pa9 = function (item, onFinished, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-170646157);
    sourceInformation($composer_0, 'C(Child$composable)P(1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(item) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(onFinished) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-170646157, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable (SimpleStackAnimation.kt:13)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = item.za8_1.di_1;
      var tmp4_remember$composable = $composer_0;
      var $composer_1 = tmp4_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(tmp3_remember$composable);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable.<anonymous>' call
        var tmp0_elvis_lhs = this.gaa_1(item.za8_1);
        tmp$ret$0 = tmp0_elvis_lhs == null ? EmptyStackAnimator_getInstance() : tmp0_elvis_lhs;
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
      var animator = tmp$ret$4;
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 644669846, true, SimpleStackAnimation$Child$composable$lambda(content, item, $dirty));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_2 = tmp3_remember$composable_0;
      $composer_2.s1c(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.x1h(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().k1j_1) {
        var tmp$ret$5;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.SimpleStackAnimation.Child$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.p1q(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.u1c();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      animator.eaa(item.aa9_1, item.ba9_1, onFinished, tmp$ret$11, $composer_0, 3072 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(SimpleStackAnimation$Child$composable$lambda_0(tmp0_rcvr, item, onFinished, content, $changed));
    }
  };
  function stackAnimation(animator, disableInputDuringAnimation) {
    animator = animator === VOID ? fade() : animator;
    disableInputDuringAnimation = disableInputDuringAnimation === VOID ? true : disableInputDuringAnimation;
    return new SimpleStackAnimation(disableInputDuringAnimation, stackAnimation$lambda(animator));
  }
  function stackAnimation$lambda($animator) {
    return function (it) {
      return $animator;
    };
  }
  function plus_0(_this__u8e3s4, other) {
    return new PlusStackAnimator(_this__u8e3s4, other);
  }
  function PlusStackAnimator$invoke$lambda($finished, $onFinished) {
    return function () {
      $finished[0] = true;
      var tmp;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.all' call
        var indexedObject = $finished;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = element;
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        tmp = $onFinished();
      }
      return Unit_getInstance();
    };
  }
  function PlusStackAnimator$invoke$lambda$lambda($finished, $onFinished) {
    return function () {
      $finished[1] = true;
      var tmp;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.all' call
        var indexedObject = $finished;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = element;
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        tmp = $onFinished();
      }
      return Unit_getInstance();
    };
  }
  function PlusStackAnimator$invoke$lambda$lambda_0($content, $thisModifier, $$dirty) {
    return function (otherModifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(otherModifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(819129241, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous> (StackAnimator.kt:94)');
        }
        $content($thisModifier.e4h(otherModifier), $composer_0, 112 & $$dirty >> 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function PlusStackAnimator$invoke$lambda_0(this$0, $direction, $isInitial, $$dirty, $finished, $onFinished, $content) {
    return function (thisModifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(thisModifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(146807434, $changed, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous> (StackAnimator.kt:84)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var tmp4_remember$composable = 112 & $$dirty >> 3;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = !!($composer_1.x1h($finished) | $composer_1.x1h($onFinished));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PlusStackAnimator$invoke$lambda$lambda($finished, $onFinished);
          var value = tmp$ret$0;
          tmp1_cache.p1q(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.u1c();
        tmp$ret$4 = tmp0;
        var tmp_3 = tmp$ret$4;
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, 819129241, true, PlusStackAnimator$invoke$lambda$lambda_0($content, thisModifier, $$dirty));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_0;
        var $composer_2 = tmp3_remember$composable_0;
        $composer_2.s1c(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache_0 = $composer_2.x1h(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().k1j_1) {
          var tmp$ret$5;
          // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.p1q(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_6 = tmp$ret$7;
        tmp$ret$8 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.u1c();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        this$0.iaa_1.eaa($direction, $isInitial, tmp_3, tmp$ret$11, $composer_0, 3072 | 14 & $$dirty | 112 & $$dirty);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp_0 = tmp_7;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function PlusStackAnimator$invoke$lambda_1($tmp0_rcvr, $direction, $isInitial, $onFinished, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.eaa($direction, $isInitial, $onFinished, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PlusStackAnimator(first, second) {
    this.haa_1 = first;
    this.iaa_1 = second;
  }
  protoOf(PlusStackAnimator).eaa = function (direction, isInitial, onFinished, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(517689211);
    sourceInformation($composer_0, 'C(invoke)P(1,2,3)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(direction) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1p(isInitial) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(onFinished) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(517689211, $dirty, -1, 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke (StackAnimator.kt:67)');
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
      var tmp2_cache = $composer_1.x1h(direction);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>' call
        tmp$ret$0 = booleanArray(2);
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
      var finished = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var tmp9_remember$composable = 112 & $dirty >> 3;
      var $composer_2 = tmp8_remember$composable;
      $composer_2.s1c(-1124426577);
      sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp6_cache = $composer_2;
      var tmp7_cache = !!($composer_2.x1h(finished) | $composer_2.x1h(onFinished));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp5_let = tmp6_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp7_cache ? true : tmp5_let === Companion_getInstance().k1j_1) {
        var tmp$ret$5;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>' call
        tmp$ret$5 = PlusStackAnimator$invoke$lambda(finished, onFinished);
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
      var tmp_3 = tmp$ret$9;
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 146807434, true, PlusStackAnimator$invoke$lambda_0(this, direction, isInitial, $dirty, finished, onFinished, content));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_3 = tmp3_remember$composable_0;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache_0 = $composer_3.x1h(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().k1j_1) {
        var tmp$ret$10;
        // Inline function 'com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.PlusStackAnimator.invoke.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_0.p1q(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_0;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.u1c();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      this.haa_1.eaa(direction, isInitial, tmp_3, tmp$ret$16, $composer_0, 3072 | 14 & $dirty | 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(PlusStackAnimator$invoke$lambda_1(tmp0_rcvr, direction, isInitial, onFinished, content, $changed));
    }
  };
  function stackAnimator$composable(animationSpec, frame) {
    animationSpec = animationSpec === VOID ? tween() : animationSpec;
    return new DefaultStackAnimator(animationSpec, frame);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fade;
  _.$_$.b = plus_0;
  _.$_$.c = scale_0;
  _.$_$.d = stackAnimation;
  _.$_$.e = Children$composable_0;
  _.$_$.f = Children$composable;
  _.$_$.g = subscribeAsState$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-extensions-compose-jetbrains.js.map
