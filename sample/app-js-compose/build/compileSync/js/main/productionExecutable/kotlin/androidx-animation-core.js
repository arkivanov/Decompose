(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-animation-core'.");
    }
    root['androidx-animation-core'] = factory(typeof this['androidx-animation-core'] === 'undefined' ? {} : this['androidx-animation-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var equals = kotlin_kotlin.$_$.u7;
  var VOID = kotlin_kotlin.$_$.mc;
  var coerceIn = kotlin_kotlin.$_$.l9;
  var Long = kotlin_kotlin.$_$.db;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var protoOf = kotlin_kotlin.$_$.r8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var CancellationException = kotlin_kotlin.$_$.q6;
  var classMeta = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var KProperty0 = kotlin_kotlin.$_$.t9;
  var THROW_ISE = kotlin_kotlin.$_$.kb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.h8;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var isNaN_0 = kotlin_kotlin.$_$.ub;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var Enum = kotlin_kotlin.$_$.ya;
  var hashCode = kotlin_kotlin.$_$.c8;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var to = kotlin_kotlin.$_$.jc;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ec;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var toLong = kotlin_kotlin.$_$.t8;
  var coerceIn_0 = kotlin_kotlin.$_$.n9;
  var numberToLong = kotlin_kotlin.$_$.o8;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Key_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.w;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isFinite = kotlin_kotlin.$_$.rb;
  var isNaN_1 = kotlin_kotlin.$_$.vb;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var toBits = kotlin_kotlin.$_$.fc;
  var Key_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var roundToInt = kotlin_kotlin.$_$.b9;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var until = kotlin_kotlin.$_$.q9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var mapOf = kotlin_kotlin.$_$.l5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Animatable$runAnimation$slambda, 'Animatable$runAnimation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable$snapTo$slambda, 'Animatable$snapTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable, 'Animatable', classMeta, VOID, VOID, VOID, VOID, [4, 3, 1, 0]);
  setMetadataFor(AnimationResult, 'AnimationResult', classMeta);
  setMetadataFor(animateValueAsState$composable$slambda$slambda, 'animateValueAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(animateValueAsState$composable$slambda, 'animateValueAsState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.u(this.d7b()) >= 0;
  }
  setMetadataFor(Animation, 'Animation', interfaceMeta);
  setMetadataFor(TargetBasedAnimation, 'TargetBasedAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(DecayAnimation, 'DecayAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(AnimationEndReason, 'AnimationEndReason', classMeta, Enum);
  setMetadataFor(FiniteAnimationSpec, 'FiniteAnimationSpec', interfaceMeta);
  setMetadataFor(SpringSpec, 'SpringSpec', classMeta, VOID, [FiniteAnimationSpec]);
  setMetadataFor(TweenSpec, 'TweenSpec', classMeta, VOID, [FiniteAnimationSpec]);
  setMetadataFor(AnimationConstants, 'AnimationConstants', objectMeta);
  setMetadataFor(SnapSpec, 'SnapSpec', classMeta, VOID, [FiniteAnimationSpec]);
  setMetadataFor(AnimationState, 'AnimationState', classMeta);
  setMetadataFor(AnimationScope, 'AnimationScope', classMeta);
  setMetadataFor(AnimationVector, 'AnimationVector', classMeta);
  setMetadataFor(AnimationVector1D, 'AnimationVector1D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector2D, 'AnimationVector2D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector4D, 'AnimationVector4D', classMeta, AnimationVector);
  setMetadataFor(ComplexDouble, 'ComplexDouble', classMeta);
  setMetadataFor(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl', classMeta);
  setMetadataFor(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec', classMeta);
  setMetadataFor(CubicBezierEasing, 'CubicBezierEasing', classMeta);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', classMeta);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.s7d(this.u7d(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  setMetadataFor(FloatAnimationSpec, 'FloatAnimationSpec', interfaceMeta);
  setMetadataFor(FloatSpringSpec, 'FloatSpringSpec', classMeta, VOID, [FloatAnimationSpec]);
  setMetadataFor(FloatTweenSpec, 'FloatTweenSpec', classMeta, VOID, [FloatAnimationSpec]);
  setMetadataFor(withInfiniteAnimationFrameNanos$slambda, 'withInfiniteAnimationFrameNanos$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor($withInfiniteAnimationFrameNanosCOROUTINE$0, '$withInfiniteAnimationFrameNanosCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(Mutator, 'Mutator', classMeta);
  setMetadataFor(MutatorMutex$mutate$slambda, 'MutatorMutex$mutate$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex, 'MutatorMutex', classMeta, VOID, VOID, VOID, VOID, [2, 3]);
  setMetadataFor(MutatePriority, 'MutatePriority', classMeta, Enum);
  setMetadataFor(SpringSimulation, 'SpringSimulation', classMeta);
  setMetadataFor($animateCOROUTINE$1, '$animateCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($callWithFrameNanosCOROUTINE$2, '$callWithFrameNanosCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(MutableTransitionState, 'MutableTransitionState', classMeta);
  setMetadataFor(DeferredAnimationData, 'DeferredAnimationData', classMeta);
  setMetadataFor(TransitionAnimationState, 'TransitionAnimationState', classMeta);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.l7i()) ? equals(targetState, this.r7h()) : false;
  }
  setMetadataFor(Segment, 'Segment', interfaceMeta);
  setMetadataFor(SegmentImpl, 'SegmentImpl', classMeta, VOID, [Segment]);
  setMetadataFor(DeferredAnimation, 'DeferredAnimation', classMeta);
  setMetadataFor(Transition$animateTo$composable$slambda, 'Transition$animateTo$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(TwoWayConverterImpl, 'TwoWayConverterImpl', classMeta);
  setMetadataFor(Spring, 'Spring', objectMeta);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.f7b(this.w7a(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  setMetadataFor(VectorizedAnimationSpec, 'VectorizedAnimationSpec', interfaceMeta);
  function get_isInfinite() {
    return false;
  }
  setMetadataFor(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', interfaceMeta, VOID, [VectorizedAnimationSpec]);
  setMetadataFor(VectorizedSpringSpec, 'VectorizedSpringSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedFloatAnimationSpec$1, VOID, classMeta);
  setMetadataFor(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.a7m() + this.z7l() | 0).q7(get_MillisToNanos());
  }
  setMetadataFor(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', interfaceMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedTweenSpec, 'VectorizedTweenSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(VectorizedSnapSpec, 'VectorizedSnapSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(createSpringAnimations$1, VOID, classMeta);
  setMetadataFor(createSpringAnimations$2, VOID, classMeta);
  //endregion
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.j76_1);
      var clamped = clampToBounds(this$0, $this$animate.b2());
      var tmp;
      if (!equals(clamped, $this$animate.b2())) {
        this$0.j76_1.kk(clamped);
        $endState.kk(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.m77();
        $clampingNeeded._v = true;
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0_setValue = isRunning$factory();
    return $this.k76_1.kk(_set____db54di);
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory();
    return $this.l76_1.kk(_set____db54di);
  }
  function createVector(_this__u8e3s4, $this, value) {
    var newVector = $this.g76_1.n77()(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.u5m(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.j76_1.i77_1;
    var tmp0 = $this.o76_1.r77(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
    return tmp0;
  }
  function clampToBounds($this, value) {
    if (equals($this.s76_1, $this.q76_1) ? equals($this.t76_1, $this.r76_1) : false) {
      return value;
    }
    var valueVector = $this.g76_1.n77()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.g(i) < $this.s76_1.g(i) ? true : valueVector.g(i) > $this.t76_1.g(i)) {
          clamped = true;
          valueVector.u5m(i, coerceIn(valueVector.g(i), $this.s76_1.g(i), $this.t76_1.g(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.g76_1.s77()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = $this.j76_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    tmp0_apply.h77_1.k1r();
    var tmp = tmp0_apply;
    AnimationConstants_getInstance();
    tmp.i77_1 = new Long(0, -2147483648);
    tmp$ret$0 = tmp0_apply;
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.b78_1 = this$0;
    this.c78_1 = $initialVelocity;
    this.d78_1 = $animation;
    this.e78_1 = $startTime;
    this.f78_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).j78 = function ($completion) {
    var tmp = this.g48($completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Animatable$runAnimation$slambda).h48 = function ($completion) {
    return this.j78($completion);
  };
  protoOf(Animatable$runAnimation$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            this.kf_1 = 2;
            this.b78_1.j76_1.h77_1 = this.b78_1.g76_1.n77()(this.c78_1);
            _set_targetValue__aqsk0r(this.b78_1, this.d78_1.k78());
            _set_isRunning__kpbg34(this.b78_1, true);
            var tmp_0 = this;
            AnimationConstants_getInstance();
            tmp_0.h78_1 = copy(this.b78_1.j76_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.i78_1 = {_v: false};
            this.jf_1 = 1;
            suspendResult = animate(this.h78_1, this.d78_1, this.e78_1, Animatable$runAnimation$slambda$lambda(this.b78_1, this.h78_1, this.f78_1, this.i78_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.i78_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.b78_1);
            this.g78_1 = new AnimationResult(this.h78_1, endReason);
            this.kf_1 = 3;
            this.jf_1 = 4;
            continue $sm;
          case 2:
            this.kf_1 = 3;
            var tmp_1 = this.mf_1;
            if (tmp_1 instanceof CancellationException) {
              var e = this.mf_1;
              var tmp_2 = this;
              endAnimation(this.b78_1);
              throw e;
            } else {
              throw this.mf_1;
            }

            break;
          case 3:
            throw this.mf_1;
          case 4:
            this.kf_1 = 3;
            return this.g78_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.kf_1 === 3) {
          throw e_0;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).g48 = function (completion) {
    var i = new Animatable$runAnimation$slambda(this.b78_1, this.c78_1, this.d78_1, this.e78_1, this.f78_1, completion);
    return i;
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.j78($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.t78_1 = this$0;
    this.u78_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).v78 = function ($completion) {
    var tmp = this.g48($completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Animatable$snapTo$slambda).h48 = function ($completion) {
    return this.v78($completion);
  };
  protoOf(Animatable$snapTo$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          endAnimation(this.t78_1);
          var clampedValue = clampToBounds(this.t78_1, this.u78_1);
          this.t78_1.j76_1.kk(clampedValue);
          _set_targetValue__aqsk0r(this.t78_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).g48 = function (completion) {
    var i = new Animatable$snapTo$slambda(this.t78_1, this.u78_1, completion);
    return i;
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.v78($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.g76_1 = typeConverter;
    this.h76_1 = visibilityThreshold;
    this.i76_1 = label;
    this.j76_1 = new AnimationState(this.g76_1, initialValue);
    this.k76_1 = mutableStateOf(false);
    this.l76_1 = mutableStateOf(initialValue);
    this.m76_1 = null;
    this.n76_1 = null;
    this.o76_1 = new MutatorMutex();
    this.p76_1 = new SpringSpec(VOID, VOID, this.h76_1);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.q76_1 = createVector(initialValue, this, -Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.r76_1 = createVector(initialValue, this, Infinity);
    this.s76_1 = this.q76_1;
    this.t76_1 = this.r76_1;
    this.u76_1 = 8;
  }
  protoOf(Animatable).b2 = function () {
    return this.j76_1.b2();
  };
  protoOf(Animatable).w78 = function () {
    return this.j76_1.h77_1;
  };
  protoOf(Animatable).x78 = function () {
    return this.g76_1.s77()(this.w78());
  };
  protoOf(Animatable).y78 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_0();
    tmp$ret$0 = this.k76_1.b2();
    return tmp$ret$0;
  };
  protoOf(Animatable).k78 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_0();
    tmp$ret$0 = this.l76_1.b2();
    return tmp$ret$0;
  };
  protoOf(Animatable).z78 = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.b2();
    var tmp1_typeConverter = this.g76_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    var tmp0 = runAnimation(this, anim, initialVelocity, block, $completion);
    return tmp0;
  };
  protoOf(Animatable).a79 = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.p76_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.x78() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.z78(targetValue, animationSpec, initialVelocity, block, $completion) : $super.z78.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).b79 = function (targetValue, $completion) {
    var tmp0 = this.o76_1.r77(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
    return tmp0;
  };
  protoOf(Animatable).c79 = function () {
    return this.j76_1;
  };
  function AnimationResult(endState, endReason) {
    this.d79_1 = endState;
    this.e79_1 = endReason;
    this.f79_1 = 0;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.e79_1 + ', endState=' + this.d79_1 + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      Spring_getInstance();
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    return new Animatable(initialValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.k78();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.k78();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  var sizeDefaultSpring;
  function get_offsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  function get_intOffsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateOffsetAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.s1c(-2036752662);
    sourceInformation($composer_0, 'C(animateOffsetAsState$composable)P(3:c#ui.geometry.Offset!1,2)195@8761L169:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_offsetDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'OffsetAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-2036752662, $changed, -1, 'androidx.compose.animation.core.animateOffsetAsState$composable (AnimateAsState.kt:189)');
    }
    var tmp = new Offset(targetValue);
    var tmp_0 = get_VectorConverter_5(Companion_getInstance());
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState$composable(tmp, tmp_0, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function animateFloatAsState$composable(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.s1c(-298361457);
    sourceInformation($composer_0, 'C(animateFloatAsState$composable)P(3!1,4,2)75@3368L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0)) {
      visibilityThreshold_0._v = 0.01;
    }
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-298361457, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState$composable (AnimateAsState.kt:62)');
    }
    $composer_0.s1c(-143091539);
    sourceInformation($composer_0, '71@3220L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = visibilityThreshold_0._v;
      var tmp4_remember$composable = $composer_0;
      var tmp5_remember$composable = 14 & $changed >> 6;
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.animateFloatAsState$composable.<anonymous>' call
        tmp$ret$0 = spring(VOID, VOID, visibilityThreshold_0._v);
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
      tmp = tmp$ret$4;
    } else {
      tmp = animationSpec_0;
    }
    var tmp1_group = tmp;
    $composer_0.u1c();
    var resolvedAnimSpec = tmp1_group;
    var tmp0_0 = animateValueAsState$composable(targetValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), resolvedAnimSpec, visibilityThreshold_0._v, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function animateIntOffsetAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.s1c(942328661);
    sourceInformation($composer_0, 'C(animateIntOffsetAsState$composable)P(3:c#ui.unit.IntOffset!1,2)314@14224L172:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_intOffsetDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'IntOffsetAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(942328661, $changed, -1, 'androidx.compose.animation.core.animateIntOffsetAsState$composable (AnimateAsState.kt:308)');
    }
    var tmp = new IntOffset(targetValue);
    var tmp_0 = get_VectorConverter_1(Companion_getInstance_1());
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState$composable(tmp, tmp_0, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function animateDpAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.s1c(-686158507);
    sourceInformation($composer_0, 'C(animateDpAsState$composable)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-686158507, $changed, -1, 'androidx.compose.animation.core.animateDpAsState$composable (AnimateAsState.kt:108)');
    }
    var tmp = new Dp(targetValue);
    var tmp_0 = get_VectorConverter_6(Companion_getInstance_2());
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState$composable(tmp, tmp_0, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function animateValueAsState$composable(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = {_v: label};
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.s1c(-1860487620);
    sourceInformation($composer_0, 'C(animateValueAsState$composable)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18861L55,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
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
        // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
        tmp$ret$0 = spring();
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
      animationSpec_0 = tmp$ret$4;
    }
    if (!(($default & 8) === 0)) {
      visibilityThreshold_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      label_0._v = 'ValueAnimation';
    }
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1860487620, $changed, -1, 'androidx.compose.animation.core.animateValueAsState$composable (AnimateAsState.kt:390)');
    }
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
    if (false ? true : tmp3_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      tmp$ret$5 = mutableStateOf(null);
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
    var toolingOverride = tmp$ret$9;
    var tmp$ret$14;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp8_remember$composable = $composer_0;
    var $composer_3 = tmp8_remember$composable;
    $composer_3.s1c(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp7_cache = $composer_3;
    var tmp$ret$12;
    // Inline function 'kotlin.let' call
    var tmp6_let = tmp7_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_3;
    if (false ? true : tmp6_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      tmp$ret$10 = new Animatable(targetValue, typeConverter, visibilityThreshold_0._v, label_0._v);
      var value_1 = tmp$ret$10;
      tmp7_cache.p1q(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = tmp6_let;
    }
    tmp$ret$11 = tmp_3;
    tmp$ret$12 = tmp$ret$11;
    var tmp_4 = tmp$ret$12;
    tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
    var tmp0_1 = tmp$ret$13;
    $composer_3.u1c();
    tmp$ret$14 = tmp0_1;
    var animatable = tmp$ret$14;
    var listener$delegate = rememberUpdatedState$composable(finishedListener_0, $composer_0, 14 & $changed >> 15);
    var tmp$ret$16;
    // Inline function 'kotlin.run' call
    var tmp9_run = animationSpec_0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$15;
    // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0._v == null)) {
      tmp_7 = tmp9_run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals(tmp9_run.i79_1, visibilityThreshold_0._v);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring(tmp9_run.g79_1, tmp9_run.h79_1, visibilityThreshold_0._v);
    } else {
      tmp_5 = tmp9_run;
    }
    var tmp0_return = tmp_5;
    tmp$ret$15 = tmp0_return;
    tmp$ret$16 = tmp$ret$15;
    var animSpec$delegate = rememberUpdatedState$composable(tmp$ret$16, $composer_0, 0);
    var tmp$ret$21;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp12_remember$composable = $composer_0;
    var $composer_4 = tmp12_remember$composable;
    $composer_4.s1c(547886695);
    sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$20;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp11_cache = $composer_4;
    var tmp$ret$19;
    // Inline function 'kotlin.let' call
    var tmp10_let = tmp11_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$18;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_8;
    if (false ? true : tmp10_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$17;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      Factory_getInstance();
      tmp$ret$17 = Channel(-1);
      var value_2 = tmp$ret$17;
      tmp11_cache.p1q(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = tmp10_let;
    }
    tmp$ret$18 = tmp_8;
    tmp$ret$19 = tmp$ret$18;
    var tmp_9 = tmp$ret$19;
    tmp$ret$20 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
    var tmp0_2 = tmp$ret$20;
    $composer_4.u1c();
    tmp$ret$21 = tmp0_2;
    var channel = tmp$ret$21;
    SideEffect$composable(animateValueAsState$composable$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect$composable(channel, animateValueAsState$composable$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.b2();
    var tmp0_3 = tmp0_elvis_lhs == null ? animatable.c79() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_3;
  }
  function animateValueAsState$composable$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $listener$delegate.b2();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animSpec$delegate.b2();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_1($channel, $targetValue) {
    return function () {
      $channel.w11($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.s79_1 = $newTarget;
    this.t79_1 = $animatable;
    this.u79_1 = $animSpec$delegate;
    this.v79_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(animateValueAsState$composable$slambda$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            if (!equals(this.s79_1, this.t79_1.k78())) {
              this.jf_1 = 1;
              suspendResult = this.t79_1.a79(this.s79_1, animateValueAsState$composable$lambda_0(this.u79_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            var tmp0_safe_receiver = animateValueAsState$composable$lambda(this.v79_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.t79_1.b2());
            ;
            this.jf_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.mf_1;
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
  protoOf(animateValueAsState$composable$slambda$slambda).q1x = function ($this$launch, completion) {
    var i = new animateValueAsState$composable$slambda$slambda(this.s79_1, this.t79_1, this.u79_1, this.v79_1, completion);
    i.w79_1 = $this$launch;
    return i;
  };
  function animateValueAsState$composable$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.f7a_1 = $channel;
    this.g7a_1 = $animatable;
    this.h7a_1 = $animSpec$delegate;
    this.i7a_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(animateValueAsState$composable$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 4;
            this.k7a_1 = this.f7a_1.c();
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.jf_1 = 2;
            suspendResult = this.k7a_1.d10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.jf_1 = 3;
              continue $sm;
            }

            var target = this.k7a_1.e();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.f7a_1.m11());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.j7a_1, VOID, VOID, animateValueAsState$composable$slambda$slambda_0(newTarget, this.g7a_1, this.h7a_1, this.i7a_1, null));
            ;
            this.jf_1 = 1;
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
  protoOf(animateValueAsState$composable$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$composable$slambda(this.f7a_1, this.g7a_1, this.h7a_1, this.i7a_1, completion);
    i.j7a_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$composable$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (properties_initialized_AnimateAsState_kt_bq3rmo) {
    } else {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance_2())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_3())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_4()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_getInstance()));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_1())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.l7a(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.m7a_1 = animationSpec;
    this.n7a_1 = typeConverter;
    this.o7a_1 = initialValue;
    this.p7a_1 = targetValue;
    this.q7a_1 = this.n7a_1.n77()(this.o7a_1);
    this.r7a_1 = this.n7a_1.n77()(this.p7a_1);
    var tmp = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp.s7a_1 = tmp1_elvis_lhs == null ? newInstance(this.n7a_1.n77()(this.o7a_1)) : tmp1_elvis_lhs;
    this.t7a_1 = this.m7a_1.w7a(this.q7a_1, this.r7a_1, this.s7a_1);
    this.u7a_1 = this.m7a_1.x7a(this.q7a_1, this.r7a_1, this.s7a_1);
    this.v7a_1 = 0;
  }
  protoOf(TargetBasedAnimation).y7a = function () {
    return this.n7a_1;
  };
  protoOf(TargetBasedAnimation).k78 = function () {
    return this.p7a_1;
  };
  protoOf(TargetBasedAnimation).z7a = function () {
    return this.m7a_1.z7a();
  };
  protoOf(TargetBasedAnimation).a7b = function (playTimeNanos) {
    var tmp;
    if (!this.c7b(playTimeNanos)) {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.m7a_1.b7b(playTimeNanos, this.q7a_1, this.r7a_1, this.s7a_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var inductionVariable = 0;
      var last = tmp0_let.f();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          var tmp0_check = !isNaN_0(tmp0_let.g(i));
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + tmp0_let + '. Animation: ' + this + ',' + (' playTimeNanos: ' + toString(playTimeNanos));
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
         while (inductionVariable < last);
      tmp$ret$1 = this.n7a_1.s77()(tmp0_let);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      tmp = this.p7a_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).d7b = function () {
    return this.t7a_1;
  };
  protoOf(TargetBasedAnimation).e7b = function (playTimeNanos) {
    var tmp;
    if (!this.c7b(playTimeNanos)) {
      tmp = this.m7a_1.f7b(playTimeNanos, this.q7a_1, this.r7a_1, this.s7a_1);
    } else {
      tmp = this.u7a_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + this.o7a_1 + ' -> ' + this.p7a_1 + ',' + ('initial velocity: ' + this.s7a_1 + ', duration: ' + toString(get_durationMillis(this)) + ' ms,') + ('animationSpec: ' + this.m7a_1);
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.n77()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.l7a(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.g7b_1 = animationSpec;
    this.h7b_1 = typeConverter;
    this.i7b_1 = initialValue;
    this.j7b_1 = this.h7b_1.n77()(this.i7b_1);
    this.k7b_1 = copy_0(initialVelocityVector);
    this.m7b_1 = this.h7b_1.s77()(this.g7b_1.q7b(this.j7b_1, initialVelocityVector));
    this.o7b_1 = false;
    this.n7b_1 = this.g7b_1.r7b(this.j7b_1, initialVelocityVector);
    this.l7b_1 = copy_0(this.g7b_1.s7b(this.n7b_1, this.j7b_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.l7b_1.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.l7b_1.u5m(i, coerceIn(this.l7b_1.g(i), -this.g7b_1.t7b(), this.g7b_1.t7b()));
      }
       while (inductionVariable < last);
    this.p7b_1 = 0;
  }
  protoOf(DecayAnimation).y7a = function () {
    return this.h7b_1;
  };
  protoOf(DecayAnimation).k78 = function () {
    return this.m7b_1;
  };
  protoOf(DecayAnimation).d7b = function () {
    return this.n7b_1;
  };
  protoOf(DecayAnimation).z7a = function () {
    return this.o7b_1;
  };
  protoOf(DecayAnimation).a7b = function (playTimeNanos) {
    if (!this.c7b(playTimeNanos)) {
      return this.h7b_1.s77()(this.g7b_1.u7b(playTimeNanos, this.j7b_1, this.k7b_1));
    } else {
      return this.m7b_1;
    }
  };
  protoOf(DecayAnimation).e7b = function (playTimeNanos) {
    if (!this.c7b(playTimeNanos)) {
      return this.g7b_1.s7b(playTimeNanos, this.j7b_1, this.k7b_1);
    } else {
      return this.l7b_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.d7b().p7(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.g79_1 = dampingRatio;
    this.h79_1 = stiffness;
    this.i79_1 = visibilityThreshold;
    this.j79_1 = 0;
  }
  protoOf(SpringSpec).l7a = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.g79_1, this.h79_1, convert(converter, this.i79_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.g79_1 === this.g79_1 ? other.h79_1 === this.h79_1 : false) ? equals(other.i79_1, this.i79_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.i79_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.g79_1) | 0, 31) + getNumberHashCode(this.h79_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function FiniteAnimationSpec() {
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.n77()(data);
    }
  }
  function TweenSpec(durationMillis, delay, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.v7b_1 = durationMillis;
    this.w7b_1 = delay;
    this.x7b_1 = easing;
    this.y7b_1 = 0;
  }
  protoOf(TweenSpec).l7a = function (converter) {
    return new VectorizedTweenSpec(this.v7b_1, this.w7b_1, this.x7b_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.v7b_1 === this.v7b_1 ? other.w7b_1 === this.w7b_1 : false) ? equals(other.x7b_1, this.x7b_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.v7b_1, 31) + hashCode(this.x7b_1) | 0, 31) + this.w7b_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.z7b_1 = 300;
    this.a7c_1 = new Long(0, -2147483648);
    this.b7c_1 = 0;
  }
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function SnapSpec(delay) {
    delay = delay === VOID ? 0 : delay;
    this.c7c_1 = delay;
    this.d7c_1 = 0;
  }
  protoOf(SnapSpec).l7a = function (converter) {
    return new VectorizedSnapSpec(this.c7c_1);
  };
  protoOf(SnapSpec).equals = function (other) {
    var tmp;
    if (other instanceof SnapSpec) {
      tmp = other.c7c_1 === this.c7c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapSpec).hashCode = function () {
    return this.c7c_1;
  };
  function snap(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    return new SnapSpec(delayMillis);
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    this.f77_1 = typeConverter;
    this.g77_1 = mutableStateOf(initialValue);
    var tmp_1 = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp_1.h77_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.f77_1, initialValue) : tmp1_elvis_lhs;
    this.i77_1 = lastFrameTimeNanos;
    this.j77_1 = finishedTimeNanos;
    this.k77_1 = isRunning;
    this.l77_1 = 0;
  }
  protoOf(AnimationState).kk = function (_set____db54di) {
    var tmp0_setValue = value$factory();
    return this.g77_1.kk(_set____db54di);
  };
  protoOf(AnimationState).b2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.g77_1.b2();
    return tmp$ret$0;
  };
  protoOf(AnimationState).x78 = function () {
    return this.f77_1.s77()(this.h77_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + this.b2() + ', ') + ('velocity=' + this.x78() + ', ') + ('isRunning=' + this.k77_1 + ', ') + ('lastFrameTimeNanos=' + toString(this.i77_1) + ', ') + ('finishedTimeNanos=' + toString(this.j77_1)) + ')';
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.b2() : value;
    velocityVector = velocityVector === VOID ? copy_0(_this__u8e3s4.h77_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.i77_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.j77_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.k77_1 : isRunning;
    return new AnimationState(_this__u8e3s4.f77_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.v76_1 = typeConverter;
    this.w76_1 = targetValue;
    this.x76_1 = startTimeNanos;
    this.y76_1 = onCancel;
    this.z76_1 = mutableStateOf(initialValue);
    this.a77_1 = copy_0(initialVelocityVector);
    this.b77_1 = lastFrameTimeNanos;
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.c77_1 = new Long(0, -2147483648);
    this.d77_1 = mutableStateOf(isRunning);
    this.e77_1 = 8;
  }
  protoOf(AnimationScope).kk = function (_set____db54di) {
    var tmp0_setValue = value$factory_1();
    return this.z76_1.kk(_set____db54di);
  };
  protoOf(AnimationScope).b2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_2();
    tmp$ret$0 = this.z76_1.b2();
    return tmp$ret$0;
  };
  protoOf(AnimationScope).e7c = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_1();
    return this.d77_1.kk(_set____db54di);
  };
  protoOf(AnimationScope).y78 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_2();
    tmp$ret$0 = this.d77_1.b2();
    return tmp$ret$0;
  };
  protoOf(AnimationScope).x78 = function () {
    return this.v76_1.s77()(this.a77_1);
  };
  protoOf(AnimationScope).m77 = function () {
    this.e7c(false);
    this.y76_1();
  };
  function createZeroVectorFrom(_this__u8e3s4, value) {
    return newInstance(_this__u8e3s4.n77()(value));
  }
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter_2(FloatCompanionObject_getInstance()), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function get_isFinished(_this__u8e3s4) {
    var tmp = _this__u8e3s4.j77_1;
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return receiver.e7c(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return receiver.e7c(value);
    });
  }
  function AnimationVector() {
    this.o77_1 = 0;
  }
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.h7c_1 = initVal;
    this.i7c_1 = 1;
    this.j7c_1 = 8;
  }
  protoOf(AnimationVector1D).k1r = function () {
    this.h7c_1 = 0.0;
  };
  protoOf(AnimationVector1D).f7c = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).g = function (index) {
    if (index === 0) {
      return this.h7c_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).u5m = function (index, value) {
    if (index === 0) {
      this.h7c_1 = value;
    }
  };
  protoOf(AnimationVector1D).f = function () {
    return this.i7c_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.h7c_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.h7c_1 === this.h7c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.h7c_1);
  };
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.l7c_1 = v1;
    this.m7c_1 = v2;
    this.n7c_1 = 2;
    this.o7c_1 = 8;
  }
  protoOf(AnimationVector2D).k1r = function () {
    this.l7c_1 = 0.0;
    this.m7c_1 = 0.0;
  };
  protoOf(AnimationVector2D).f7c = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).g = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.l7c_1;
      case 1:
        return this.m7c_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).u5m = function (index, value) {
    var tmp0_subject = index;
    if (tmp0_subject === 0)
      this.l7c_1 = value;
    else if (tmp0_subject === 1)
      this.m7c_1 = value;
  };
  protoOf(AnimationVector2D).f = function () {
    return this.n7c_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.l7c_1 + ', v2 = ' + this.m7c_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.l7c_1 === this.l7c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.m7c_1 === this.m7c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.l7c_1), 31) + getNumberHashCode(this.m7c_1) | 0;
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.q7c_1 = v1;
    this.r7c_1 = v2;
    this.s7c_1 = v3;
    this.t7c_1 = v4;
    this.u7c_1 = 4;
    this.v7c_1 = 8;
  }
  protoOf(AnimationVector4D).k1r = function () {
    this.q7c_1 = 0.0;
    this.r7c_1 = 0.0;
    this.s7c_1 = 0.0;
    this.t7c_1 = 0.0;
  };
  protoOf(AnimationVector4D).f7c = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).g = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.q7c_1;
      case 1:
        return this.r7c_1;
      case 2:
        return this.s7c_1;
      case 3:
        return this.t7c_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).u5m = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.q7c_1 = value;
        break;
      case 1:
        this.r7c_1 = value;
        break;
      case 2:
        this.s7c_1 = value;
        break;
      case 3:
        this.t7c_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).f = function () {
    return this.u7c_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.q7c_1 + ', v2 = ' + this.r7c_1 + ', v3 = ' + this.s7c_1 + ', v4 = ' + this.t7c_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.q7c_1 === this.q7c_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.r7c_1 === this.r7c_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.s7c_1 === this.s7c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.t7c_1 === this.t7c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.q7c_1), 31) + getNumberHashCode(this.r7c_1) | 0, 31) + getNumberHashCode(this.s7c_1) | 0, 31) + getNumberHashCode(this.t7c_1) | 0;
  };
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.f7c();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.u5m(i, _this__u8e3s4.g(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.u5m(i, source.g(i));
      }
       while (inductionVariable < last);
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function ComplexDouble(_real, _imaginary) {
    this.w7c_1 = _real;
    this.x7c_1 = _imaginary;
  }
  protoOf(ComplexDouble).y7c = function () {
    return this.w7c_1;
  };
  protoOf(ComplexDouble).z7c = function () {
    return this.x7c_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.w7c_1 + ', _imaginary=' + this.x7c_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.w7c_1);
    result = imul(result, 31) + getNumberHashCode(this.x7c_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.w7c_1, tmp0_other_with_cast.w7c_1))
      return false;
    if (!equals(this.x7c_1, tmp0_other_with_cast.x7c_1))
      return false;
    return true;
  };
  function complexQuadraticFormula(a, b, c) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.div' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp0_plus = -b;
    var tmp1_plus = complexSqrt(b * b - 4.0 * a * c);
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this = tmp1_plus;
    tmp0_this.w7c_1 = tmp0_this.w7c_1 + tmp0_plus;
    tmp$ret$0 = tmp1_plus;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_div = tmp$ret$1;
    var tmp3_div = 2.0 * a;
    var tmp0_this_0 = tmp2_div;
    tmp0_this_0.w7c_1 = tmp0_this_0.w7c_1 / tmp3_div;
    var tmp1_this = tmp2_div;
    tmp1_this.x7c_1 = tmp1_this.x7c_1 / tmp3_div;
    tmp$ret$2 = tmp2_div;
    var firstRoot = tmp$ret$2;
    var tmp$ret$7;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.div' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.animation.core.minus' call
    var tmp5_minus = -b;
    var tmp6_minus = complexSqrt(b * b - 4.0 * a * c);
    var tmp$ret$5;
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var tmp0_this_1 = tmp6_minus;
    tmp0_this_1.w7c_1 = tmp0_this_1.w7c_1 * -1;
    var tmp1_this_0 = tmp6_minus;
    tmp1_this_0.x7c_1 = tmp1_this_0.x7c_1 * -1;
    tmp$ret$3 = tmp6_minus;
    var tmp4_plus = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this_2 = tmp4_plus;
    tmp0_this_2.w7c_1 = tmp0_this_2.w7c_1 + tmp5_minus;
    tmp$ret$4 = tmp4_plus;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp7_div = tmp$ret$6;
    var tmp8_div = 2.0 * a;
    var tmp0_this_3 = tmp7_div;
    tmp0_this_3.w7c_1 = tmp0_this_3.w7c_1 / tmp8_div;
    var tmp1_this_1 = tmp7_div;
    tmp1_this_1.x7c_1 = tmp1_this_1.x7c_1 / tmp8_div;
    tmp$ret$7 = tmp7_div;
    var secondRoot = tmp$ret$7;
    return to(firstRoot, secondRoot);
  }
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      tmp$ret$0 = Math.abs(num);
      var tmp0_sqrt = tmp$ret$0;
      tmp$ret$1 = Math.sqrt(tmp0_sqrt);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.a7d_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).l7a = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.a7d_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.c7d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.d7d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.e7d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.b7d_1 = floatDecaySpec;
    this.f7d_1 = this.b7d_1.t7b();
  }
  protoOf(VectorizedFloatDecaySpec).t7b = function () {
    return this.f7d_1;
  };
  protoOf(VectorizedFloatDecaySpec).u7b = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.c7d_1 == null)) {
      this.c7d_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).u5m(i, this.b7d_1.g7d(playTimeNanos, initialValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).r7b = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.d7d_1 == null)) {
      this.d7d_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.b7d_1.h7d(initialValue.g(i), initialVelocity.g(i));
        tmp$ret$0 = tmp0_maxOf.u(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        maxDuration = tmp$ret$0;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).s7b = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.d7d_1 == null)) {
      this.d7d_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).u5m(i, this.b7d_1.i7d(playTimeNanos, initialValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).q7b = function (initialValue, initialVelocity) {
    if (!!(this.e7d_1 == null)) {
      this.e7d_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).u5m(i, this.b7d_1.j7d(initialValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.k7d_1 = a;
    this.l7d_1 = b;
    this.m7d_1 = c;
    this.n7d_1 = d;
    // Inline function 'kotlin.require' call
    var tmp0_require = ((!isNaN_0(this.k7d_1) ? !isNaN_0(this.l7d_1) : false) ? !isNaN_0(this.m7d_1) : false) ? !isNaN_0(this.n7d_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.k7d_1 + ', ' + this.l7d_1 + ', ' + this.m7d_1 + ', ' + this.n7d_1 + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o7d_1 = 0;
  }
  protoOf(CubicBezierEasing).p7d = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.k7d_1, this.m7d_1, midpoint);
        var tmp$ret$0;
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp0__get_absoluteValue__nukmtt = fraction - estimate;
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__nukmtt);
        if (tmp$ret$0 < 0.001)
          return evaluateCubic(this, this.l7d_1, this.n7d_1, midpoint);
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.k7d_1 === other.k7d_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.l7d_1 === other.l7d_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.m7d_1 === other.m7d_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.n7d_1 === other.n7d_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.k7d_1), 31) + getNumberHashCode(this.l7d_1) | 0, 31) + getNumberHashCode(this.m7d_1) | 0, 31) + getNumberHashCode(this.n7d_1) | 0;
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.q7d_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).p7d = function (fraction) {
    return this.q7d_1(fraction);
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (properties_initialized_Easing_kt_af4f4d) {
    } else {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      Spring_getInstance();
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.w7d_1 = dampingRatio;
    this.x7d_1 = stiffness;
    this.y7d_1 = visibilityThreshold;
    var tmp_2 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    tmp0_also.i7e(this.w7d_1);
    tmp0_also.j7e(this.x7d_1);
    tmp$ret$0 = tmp0_also;
    tmp_2.z7d_1 = tmp$ret$0;
    this.a7e_1 = 8;
  }
  protoOf(FloatSpringSpec).r7d = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(get_MillisToNanos());
    this.z7d_1.b7e_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.z7d_1.k7e(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).s7d = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(get_MillisToNanos());
    this.z7d_1.b7e_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.z7d_1.k7e(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).t7d = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).u7d = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.z7d_1.l7e();
    var tmp1_dampingRatio = this.z7d_1.h7e_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.y7d_1;
    var tmp3_initialVelocity = initialVelocity / this.y7d_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).q7(get_MillisToNanos());
  };
  protoOf(FloatSpringSpec).l7a = function (converter) {
    return this.v7d(converter);
  };
  function clampPlayTime($this, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = $this.n7e_1;
    tmp$ret$0 = playTime.s7(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.m7e_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    var tmp;
    if (duration === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = duration;
    }
    duration = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.m7e_1 = duration;
    this.n7e_1 = delay;
    this.o7e_1 = easing;
    this.p7e_1 = 0;
  }
  protoOf(FloatTweenSpec).r7d = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.m7e_1 === 0) {
      tmp = 1.0;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.m7e_1;
      tmp$ret$0 = clampedPlayTime.ff() / tmp0_div;
      tmp = tmp$ret$0;
    }
    var rawFraction = tmp;
    var fraction = this.o7e_1.p7d(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).u7d = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.n7e_1 + this.m7e_1 | 0).q7(get_MillisToNanos());
  };
  protoOf(FloatTweenSpec).s7d = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.p7(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.u(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.s7(new Long(1, 0));
    var startNum = this.r7d(tmp$ret$0.q7(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.r7d(clampedPlayTime.q7(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).l7a = function (converter) {
    return this.v7d(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.j7f_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).h48 = function ($completion) {
    var tmp = this.g48($completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = withFrameNanos(this.j7f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).g48 = function (completion) {
    var i = new withInfiniteAnimationFrameNanos$slambda(this.j7f_1, completion);
    return i;
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.h48($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7e_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 4;
            var tmp_0 = this;
            tmp_0.z7e_1 = this.h5().x5(Key_getInstance());
            if (this.z7e_1 == null) {
              this.jf_1 = 2;
              suspendResult = withFrameNanos(this.y7e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 1;
              suspendResult = this.z7e_1.k7f(withInfiniteAnimationFrameNanos$slambda_0(this.y7e_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.a7f_1 = suspendResult;
            this.jf_1 = 3;
            continue $sm;
          case 2:
            this.a7f_1 = suspendResult;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            return this.a7f_1;
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
  function Mutator(priority, job) {
    this.l7f_1 = priority;
    this.m7f_1 = job;
  }
  protoOf(Mutator).n7f = function (other) {
    return this.l7f_1.l6(other.l7f_1) >= 0;
  };
  protoOf(Mutator).o7f = function () {
    return this.m7f_1.fo();
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.p77_1.pt();
      if (oldMutator == null ? true : mutator.n7f(oldMutator)) {
        if ($this.p77_1.s1s(oldMutator, mutator)) {
          var tmp0_safe_receiver = oldMutator;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.o7f();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.x7f_1 = $priority;
    this.y7f_1 = this$0;
    this.z7f_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).g7g = function ($this$coroutineScope, $completion) {
    var tmp = this.q1x($this$coroutineScope, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(MutatorMutex$mutate$slambda).eg = function (p1, $completion) {
    return this.g7g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 13;
            this.b7g_1 = new Mutator(this.x7f_1, ensureNotNull(this.a7g_1.zm().x5(Key_getInstance_0())));
            tryMutateOrCancel(this.y7f_1, this.b7g_1);
            this.jf_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.d7g_1 = this.y7f_1.q77_1;
            this.jf_1 = 2;
            suspendResult = this.d7g_1.k18(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.jf_1 = 4;
            continue $sm;
          case 4:
            this.kf_1 = 12;
            this.jf_1 = 5;
            continue $sm;
          case 5:
            this.kf_1 = 11;
            this.jf_1 = 6;
            suspendResult = this.z7f_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.f7g_1 = suspendResult;
            this.jf_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.f7g_1;
            this.y7f_1.p77_1.s1s(this.b7g_1, null);
            ;
            this.e7g_1 = tmp_1;
            this.kf_1 = 13;
            this.jf_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.e7g_1;
            this.d7g_1.m18(null);
            ;
            this.c7g_1 = tmp_3;
            this.jf_1 = 10;
            continue $sm;
          case 9:
            this.d7g_1.m18(null);
            ;
            if (false) {
              this.jf_1 = 1;
              continue $sm;
            }

            this.jf_1 = 10;
            continue $sm;
          case 10:
            return this.c7g_1;
          case 11:
            this.kf_1 = 12;
            var t = this.mf_1;
            this.y7f_1.p77_1.s1s(this.b7g_1, null);
            ;
            throw t;
          case 12:
            this.kf_1 = 13;
            var t_0 = this.mf_1;
            this.d7g_1.m18(null);
            ;
            throw t_0;
          case 13:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 13) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).q1x = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.x7f_1, this.y7f_1, this.z7f_1, completion);
    i.a7g_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.g7g($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.p77_1 = new AtomicReference(null);
    this.q77_1 = Mutex();
  }
  protoOf(MutatorMutex).h7g = function (priority, block, $completion) {
    var tmp0 = coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
    return tmp0;
  };
  protoOf(MutatorMutex).r77 = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.h7g(priority, block, $completion) : $super.h7g.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$0 = Math.sqrt(stiffness);
    var dampingCoefficient = tmp * tmp$ret$0;
    var roots = complexQuadraticFormula(1.0, dampingCoefficient, stiffness);
    return estimateDurationInternal(roots, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(roots, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialPosition);
    var p0 = tmp$ret$0;
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(roots, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(roots, p0, v0, delta) : estimateCriticallyDamped(roots, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(roots, p0, v0, delta) {
    var r1 = roots.d4_1.y7c();
    var r2 = roots.e4_1.y7c();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$0;
    tmp$ret$1 = Math.log(tmp1_ln);
    var t1 = tmp$ret$1 / r1;
    var tmp$ret$3;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = delta / c2;
    tmp$ret$2 = Math.abs(tmp2_abs);
    var tmp3_ln = tmp$ret$2;
    tmp$ret$3 = Math.log(tmp3_ln);
    var t2 = tmp$ret$3 / r2;
    var tmp;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    tmp$ret$4 = !isFinite(t1);
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      tmp$ret$5 = !isFinite(t2);
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.math.max' call
        tmp$ret$6 = Math.max(t1, t2);
        tmp = tmp$ret$6;
      }
    }
    var tCurr = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.math.ln' call
    var tmp4_ln = c1 * r1 / (-c2 * r2);
    tmp$ret$7 = Math.log(tmp4_ln);
    var tInflection = tmp$ret$7 / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.math.ln' call
      var tmp5_ln = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tmp$ret$8 = Math.log(tmp5_ln);
      var tConcavChange = tmp$ret$8 / (r1 - r2);
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateOverDamped$lambda(c1, r1, c2, r2, signedDelta);
    var fnPrime = estimateOverDamped$lambda_0(c1, r1, c2, r2);
    var tmp$ret$9;
    // Inline function 'kotlin.math.abs' call
    var tmp6_abs = fn(tCurr);
    tmp$ret$9 = Math.abs(tmp6_abs);
    if (tmp$ret$9 < 1.0E-4) {
      return tCurr;
    }
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      var tLast = tCurr;
      var tmp$ret$10;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp7_iterateNewtonsMethod = tCurr;
      tmp$ret$10 = tmp7_iterateNewtonsMethod - fn(tmp7_iterateNewtonsMethod) / fnPrime(tmp7_iterateNewtonsMethod);
      tCurr = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.math.abs' call
      var tmp8_abs = tLast - tCurr;
      tmp$ret$11 = Math.abs(tmp8_abs);
      tDelta = tmp$ret$11;
    }
    return tCurr;
  }
  function estimateUnderDamped(roots, p0, v0, delta) {
    var r = roots.d4_1.y7c();
    var c1 = p0;
    var c2 = (v0 - r * c1) / roots.d4_1.z7c();
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = c1 * c1 + c2 * c2;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp1_ln = delta / c;
    tmp$ret$1 = Math.log(tmp1_ln);
    return tmp$ret$1 / r;
  }
  function estimateCriticallyDamped(roots, p0, v0, delta) {
    var r = roots.d4_1.y7c();
    var c1 = p0;
    var c2 = v0 - r * c1;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$0;
    tmp$ret$1 = Math.log(tmp1_ln);
    var t1 = tmp$ret$1 / r;
    var tmp$ret$3;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = delta / c2;
    tmp$ret$2 = Math.abs(tmp2_abs);
    var tmp3_ln = tmp$ret$2;
    tmp$ret$3 = Math.log(tmp3_ln);
    var t2 = estimateCriticallyDamped$t2Iterate(tmp$ret$3, r) / r;
    var tmp;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    tmp$ret$4 = !isFinite(t1);
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      tmp$ret$5 = !isFinite(t2);
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.math.max' call
        tmp$ret$6 = Math.max(t1, t2);
        tmp = tmp$ret$6;
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateCriticallyDamped$lambda(c1, c2, r, signedDelta);
    var fnPrime = estimateCriticallyDamped$lambda_0(c2, r, c1);
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      var tLast = tCurr;
      var tmp$ret$7;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp4_iterateNewtonsMethod = tCurr;
      tmp$ret$7 = tmp4_iterateNewtonsMethod - fn(tmp4_iterateNewtonsMethod) / fnPrime(tmp4_iterateNewtonsMethod);
      tCurr = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'kotlin.math.abs' call
      var tmp5_abs = tLast - tCurr;
      tmp$ret$8 = Math.abs(tmp5_abs);
      tDelta = tmp$ret$8;
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = r1 * tInflection;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp = c1 * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = r2 * tInflection;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return tmp + c2 * tmp$ret$1;
  }
  function estimateCriticallyDamped$t2Iterate(guess, r) {
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ln' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.abs' call
        var tmp0_abs = t / r;
        tmp$ret$0 = Math.abs(tmp0_abs);
        var tmp1_ln = tmp$ret$0;
        tmp$ret$1 = Math.log(tmp1_ln);
        t = guess - tmp$ret$1;
      }
       while (inductionVariable <= 5);
    return t;
  }
  function estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = r * tInflection;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp = c1 * tmp$ret$0;
    var tmp_0 = c2 * tInflection;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = r * tInflection;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return tmp + tmp_0 * tmp$ret$1;
  }
  function estimateOverDamped$lambda($c1, $r1, $c2, $r2, $signedDelta) {
    return function (t) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r1 * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      var tmp = $c1 * tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = $r2 * t;
      tmp$ret$1 = Math.exp(tmp1_exp);
      return tmp + $c2 * tmp$ret$1 + $signedDelta;
    };
  }
  function estimateOverDamped$lambda_0($c1, $r1, $c2, $r2) {
    return function (t) {
      var tmp = $c1 * $r1;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r1 * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      var tmp_0 = tmp * tmp$ret$0;
      var tmp_1 = $c2 * $r2;
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = $r2 * t;
      tmp$ret$1 = Math.exp(tmp1_exp);
      return tmp_0 + tmp_1 * tmp$ret$1;
    };
  }
  function estimateCriticallyDamped$lambda($c1, $c2, $r, $signedDelta) {
    return function (t) {
      var tmp = $c1 + $c2 * t;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      return tmp * tmp$ret$0 + $signedDelta;
    };
  }
  function estimateCriticallyDamped$lambda_0($c2, $r, $c1) {
    return function (t) {
      var tmp = $c2 * ($r * t + 1) + $c1 * $r;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      return tmp * tmp$ret$0;
    };
  }
  var UNSET;
  function init($this) {
    if ($this.d7e_1) {
      return Unit_getInstance();
    }
    if ($this.b7e_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.h7e_1 * $this.h7e_1;
    if ($this.h7e_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.h7e_1 * $this.c7e_1;
      var tmp_1 = $this.c7e_1;
      var tmp$ret$0;
      // Inline function 'kotlin.math.sqrt' call
      var tmp0_sqrt = dampingRatioSquared - 1;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt);
      tmp.e7e_1 = tmp_0 + tmp_1 * tmp$ret$0;
      var tmp_2 = $this;
      var tmp_3 = -$this.h7e_1 * $this.c7e_1;
      var tmp_4 = $this.c7e_1;
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp1_sqrt = dampingRatioSquared - 1;
      tmp$ret$1 = Math.sqrt(tmp1_sqrt);
      tmp_2.f7e_1 = tmp_3 - tmp_4 * tmp$ret$1;
    } else if ($this.h7e_1 >= 0 ? $this.h7e_1 < 1 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.c7e_1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      var tmp2_sqrt = 1 - dampingRatioSquared;
      tmp$ret$2 = Math.sqrt(tmp2_sqrt);
      tmp_5.g7e_1 = tmp_6 * tmp$ret$2;
    }
    $this.d7e_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.b7e_1 = finalPosition;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    Spring_getInstance();
    var tmp0_sqrt = 50.0;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.c7e_1 = tmp$ret$0;
    this.d7e_1 = false;
    this.e7e_1 = 0.0;
    this.f7e_1 = 0.0;
    this.g7e_1 = 0.0;
    var tmp_0 = this;
    Spring_getInstance();
    tmp_0.h7e_1 = 1.0;
  }
  protoOf(SpringSimulation).j7e = function (value) {
    if (this.l7e() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = value;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.c7e_1 = tmp$ret$0;
    this.d7e_1 = false;
  };
  protoOf(SpringSimulation).l7e = function () {
    return this.c7e_1 * this.c7e_1;
  };
  protoOf(SpringSimulation).i7e = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.h7e_1 = value;
    this.d7e_1 = false;
  };
  protoOf(SpringSimulation).k7e = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.b7e_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = timeElapsed.w8() / 1000.0;
    var deltaT = tmp$ret$0;
    var displacement;
    var currentVelocity;
    if (this.h7e_1 > 1) {
      var coeffA = adjustedDisplacement - (this.f7e_1 * adjustedDisplacement - lastVelocity) / (this.f7e_1 - this.e7e_1);
      var coeffB = (this.f7e_1 * adjustedDisplacement - lastVelocity) / (this.f7e_1 - this.e7e_1);
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = this.f7e_1 * deltaT;
      tmp$ret$1 = Math.exp(tmp0_exp);
      var tmp = coeffA * tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = this.e7e_1 * deltaT;
      tmp$ret$2 = Math.exp(tmp1_exp);
      displacement = tmp + coeffB * tmp$ret$2;
      var tmp_0 = coeffA * this.f7e_1;
      var tmp$ret$3;
      // Inline function 'kotlin.math.exp' call
      var tmp2_exp = this.f7e_1 * deltaT;
      tmp$ret$3 = Math.exp(tmp2_exp);
      var tmp_1 = tmp_0 * tmp$ret$3;
      var tmp_2 = coeffB * this.e7e_1;
      var tmp$ret$4;
      // Inline function 'kotlin.math.exp' call
      var tmp3_exp = this.e7e_1 * deltaT;
      tmp$ret$4 = Math.exp(tmp3_exp);
      currentVelocity = tmp_1 + tmp_2 * tmp$ret$4;
    } else if (this.h7e_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.c7e_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$5;
      // Inline function 'kotlin.math.exp' call
      var tmp4_exp = -this.c7e_1 * deltaT;
      tmp$ret$5 = Math.exp(tmp4_exp);
      displacement = tmp_3 * tmp$ret$5;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$6;
      // Inline function 'kotlin.math.exp' call
      var tmp5_exp = -this.c7e_1 * deltaT;
      tmp$ret$6 = Math.exp(tmp5_exp);
      var tmp_5 = tmp_4 * tmp$ret$6 * -this.c7e_1;
      var tmp$ret$7;
      // Inline function 'kotlin.math.exp' call
      var tmp6_exp = -this.c7e_1 * deltaT;
      tmp$ret$7 = Math.exp(tmp6_exp);
      currentVelocity = tmp_5 + coeffB_0 * tmp$ret$7;
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.g7e_1 * (this.h7e_1 * this.c7e_1 * adjustedDisplacement + lastVelocity);
      var tmp$ret$8;
      // Inline function 'kotlin.math.exp' call
      var tmp7_exp = -this.h7e_1 * this.c7e_1 * deltaT;
      tmp$ret$8 = Math.exp(tmp7_exp);
      var tmp_6 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.math.cos' call
      var tmp8_cos = this.g7e_1 * deltaT;
      tmp$ret$9 = Math.cos(tmp8_cos);
      var tmp_7 = cosCoeff * tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'kotlin.math.sin' call
      var tmp9_sin = this.g7e_1 * deltaT;
      tmp$ret$10 = Math.sin(tmp9_sin);
      displacement = tmp_6 * (tmp_7 + sinCoeff * tmp$ret$10);
      var tmp_8 = displacement * -this.c7e_1 * this.h7e_1;
      var tmp$ret$11;
      // Inline function 'kotlin.math.exp' call
      var tmp10_exp = -this.h7e_1 * this.c7e_1 * deltaT;
      tmp$ret$11 = Math.exp(tmp10_exp);
      var tmp_9 = tmp$ret$11;
      var tmp_10 = -this.g7e_1 * cosCoeff;
      var tmp$ret$12;
      // Inline function 'kotlin.math.sin' call
      var tmp11_sin = this.g7e_1 * deltaT;
      tmp$ret$12 = Math.sin(tmp11_sin);
      var tmp_11 = tmp_10 * tmp$ret$12;
      var tmp_12 = this.g7e_1 * sinCoeff;
      var tmp$ret$13;
      // Inline function 'kotlin.math.cos' call
      var tmp12_cos = this.g7e_1 * deltaT;
      tmp$ret$13 = Math.cos(tmp12_cos);
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * tmp$ret$13);
    }
    var newValue = displacement + this.b7e_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp2_unpackFloat1 = _Motion___get_packedValue__impl__qymh4n($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat1.e8(32).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp2_unpackFloat2 = _Motion___get_packedValue__impl__qymh4n($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Motion(value, velocity) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(value));
    var v2 = toLong(toBits(velocity));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    var tmp;
    if (startTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = startTimeNanos;
    }
    startTimeNanos = tmp;
    var tmp_0;
    if (block === VOID) {
      tmp_0 = animate$lambda;
    } else {
      tmp_0 = block;
    }
    block = tmp_0;
    var tmp_1 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_1.lf_1 = Unit_getInstance();
    tmp_1.mf_1 = null;
    return tmp_1.sf();
  }
  function updateState(_this__u8e3s4, state) {
    state.kk(_this__u8e3s4.b2());
    copyFrom(state.h77_1, _this__u8e3s4.a77_1);
    state.j77_1 = _this__u8e3s4.c77_1;
    state.i77_1 = _this__u8e3s4.b77_1;
    state.k77_1 = _this__u8e3s4.y78();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x5(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h4i();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.check' call
    var tmp0_check = scale >= 0.0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.d7b();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = frameTimeNanos.s7(_this__u8e3s4.x76_1);
      tmp$ret$0 = tmp0_div.ff() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.b77_1 = frameTimeNanos;
    _this__u8e3s4.kk(anim.a7b(playTimeNanos));
    _this__u8e3s4.a77_1 = anim.e7b(playTimeNanos);
    var isLastFrame = anim.c7b(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.c77_1 = _this__u8e3s4.b77_1;
      _this__u8e3s4.e7c(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.b2();
    var tmp1_typeConverter = _this__u8e3s4.f77_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.h77_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.i77_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    var tmp0 = animate(_this__u8e3s4, anim, tmp_0, block, $completion);
    return tmp0;
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.b2();
    var tmp1_initialVelocityVector = _this__u8e3s4.h77_1;
    var tmp2_typeConverter = _this__u8e3s4.f77_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.i77_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    var tmp0 = animate(_this__u8e3s4, anim, tmp_0, block, $completion);
    return tmp0;
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp0 = animate_1(get_VectorConverter_2(FloatCompanionObject_getInstance()), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
    return tmp0;
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp0_safe_receiver = initialVelocity;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp$ret$0 = typeConverter.n77()(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.n77()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    var tmp0 = animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
    return tmp0;
  }
  function animate$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.k77_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp = $animation.y7a();
      var tmp_0 = $animation.k78();
      var tmp0_apply = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(tmp0_apply, it, $durationScale, $animation, $this_animate, $block);
      tmp$ret$0 = tmp0_apply;
      $lateInitScope._v = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.k77_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_AnimationDebugDurationScale();
      tmp$ret$0 = it.p7(toLong(tmp0_div));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function animateDecay$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.b2(), $typeConverter.s77()($this$animate.a77_1));
      return Unit_getInstance();
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q7g_1 = _this__u8e3s4;
    this.r7g_1 = animation;
    this.s7g_1 = startTimeNanos;
    this.t7g_1 = block;
  }
  protoOf($animateCOROUTINE$1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 7;
            this.u7g_1 = this.r7g_1.a7b(new Long(0, 0));
            this.v7g_1 = this.r7g_1.e7b(new Long(0, 0));
            this.w7g_1 = {_v: null};
            this.kf_1 = 6;
            AnimationConstants_getInstance();
            if (this.s7g_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.x7g_1 = get_durationScale(this.h5());
              this.jf_1 = 1;
              suspendResult = callWithFrameNanos(this.r7g_1, animate$lambda_0(this.w7g_1, this.u7g_1, this.r7g_1, this.v7g_1, this.x7g_1, this.q7g_1, this.t7g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.r7g_1.y7a();
              var tmp_2 = this.r7g_1.k78();
              var tmp0_apply = new AnimationScope(this.u7g_1, tmp_1, this.v7g_1, this.s7g_1, tmp_2, this.s7g_1, true, animate$lambda_1(this.q7g_1));
              doAnimationFrameWithScale(tmp0_apply, this.s7g_1, get_durationScale(this.h5()), this.r7g_1, this.q7g_1, this.t7g_1);
              this.w7g_1._v = tmp0_apply;
              this.jf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.jf_1 = 2;
            continue $sm;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.w7g_1._v).y78()) {
              this.jf_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.y7g_1 = get_durationScale(this.h5());
            this.jf_1 = 4;
            suspendResult = callWithFrameNanos(this.r7g_1, animate$lambda_2(this.w7g_1, this.y7g_1, this.r7g_1, this.q7g_1, this.t7g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.jf_1 = 3;
            continue $sm;
          case 5:
            this.kf_1 = 7;
            this.jf_1 = 8;
            continue $sm;
          case 6:
            this.kf_1 = 7;
            var tmp_4 = this.mf_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.mf_1;
              var tmp0_safe_receiver = this.w7g_1._v;
              if (tmp0_safe_receiver == null) {
              } else {
                tmp0_safe_receiver.e7c(false);
              }
              var tmp1_safe_receiver = this.w7g_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b77_1, this.q7g_1.i77_1)) {
                this.q7g_1.k77_1 = false;
              }
              throw e;
            } else {
              throw this.mf_1;
            }

            break;
          case 7:
            throw this.mf_1;
          case 8:
            this.kf_1 = 7;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.kf_1 === 7) {
          throw e_0;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h7h_1 = _this__u8e3s4;
    this.i7h_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 4;
            if (this.h7h_1.z7a()) {
              this.jf_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.i7h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.i7h_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.j7h_1 = suspendResult;
            this.jf_1 = 3;
            continue $sm;
          case 2:
            this.j7h_1 = suspendResult;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            return this.j7h_1;
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
  function MutableTransitionState(initialState) {
    this.k7h_1 = mutableStateOf(initialState);
    this.l7h_1 = mutableStateOf(initialState);
    this.m7h_1 = mutableStateOf(false);
    this.n7h_1 = 0;
  }
  protoOf(MutableTransitionState).o7h = function (_set____db54di) {
    var tmp0_setValue = currentState$factory();
    return this.k7h_1.kk(_set____db54di);
  };
  protoOf(MutableTransitionState).p7h = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = currentState$factory_0();
    tmp$ret$0 = this.k7h_1.b2();
    return tmp$ret$0;
  };
  protoOf(MutableTransitionState).q7h = function (_set____db54di) {
    var tmp0_setValue = targetState$factory();
    return this.l7h_1.kk(_set____db54di);
  };
  protoOf(MutableTransitionState).r7h = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetState$factory_0();
    tmp$ret$0 = this.l7h_1.b2();
    return tmp$ret$0;
  };
  protoOf(MutableTransitionState).e7c = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_3();
    return this.m7h_1.kk(_set____db54di);
  };
  protoOf(MutableTransitionState).y78 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_4();
    tmp$ret$0 = this.m7h_1.b2();
    return tmp$ret$0;
  };
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory_1();
    return $this.u7h_1.kk(_set____db54di);
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_2();
    tmp$ret$0 = $this.u7h_1.b2();
    return tmp$ret$0;
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0_setValue = animationSpec$factory();
    return $this.v7h_1.kk(_set____db54di);
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0_setValue = animation$factory();
    return $this.w7h_1.kk(_set____db54di);
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    var tmp0_setValue = offsetTimeNanos$factory();
    return $this.y7h_1.kk(_set____db54di);
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = offsetTimeNanos$factory_0();
    tmp$ret$0 = $this.y7h_1.b2();
    return tmp$ret$0;
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    var tmp0_setValue = needsReset$factory();
    return $this.z7h_1.kk(_set____db54di);
  }
  function _get_needsReset__mzz76h($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = needsReset$factory_0();
    tmp$ret$0 = $this.z7h_1.b2();
    return tmp$ret$0;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.e7i();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.e7i();
      } else {
        tmp_0 = $this.c7i_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.e7i();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.s7h_1, initialValue, _get_targetValue__jjlmb5($this), $this.b7i_1));
    onChildAnimationUpdated($this.d7i_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.b2() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.i7i_1 = $outer;
    this.f7i_1 = animation;
    this.g7i_1 = transitionSpec;
    this.h7i_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).j7i = function (segment) {
    var targetValue = this.h7i_1(segment.r7h());
    if (this.i7i_1.q7i_1.e7j()) {
      var initialValue = this.h7i_1(segment.l7i());
      this.f7i_1.m7i(initialValue, targetValue, this.g7i_1(segment));
    } else {
      this.f7i_1.k7i(targetValue, this.g7i_1(segment));
    }
  };
  protoOf(DeferredAnimationData).b2 = function () {
    this.j7i(this.i7i_1.q7i_1.f7j());
    return this.f7i_1.b2();
  };
  function Transition$animateTo$composable$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.e7j()) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = 1;
        tmp$ret$0 = it.p7(toLong(tmp0_div));
        this$0.g7j(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0_setValue = segment$factory();
    return $this.u7i_1.kk(_set____db54di);
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    var tmp0_setValue = startTimeNanos$factory();
    return $this.w7i_1.kk(_set____db54di);
  }
  function _get_startTimeNanos__r31kgr($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = startTimeNanos$factory_0();
    tmp$ret$0 = $this.w7i_1.b2();
    return tmp$ret$0;
  }
  function onChildAnimationUpdated($this) {
    $this.h7j(true);
    if ($this.e7j()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this.y7i_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.d7b();
        tmp$ret$0 = tmp0_max.u(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
        element.i7j($this.b7j_1);
      }
      $this.h7j(false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.d7i_1 = $outer;
    this.s7h_1 = typeConverter;
    this.t7h_1 = label;
    this.u7h_1 = mutableStateOf(initialValue);
    this.v7h_1 = mutableStateOf(spring());
    this.w7h_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.e7i(), this.s7h_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.x7h_1 = mutableStateOf(true);
    this.y7h_1 = mutableStateOf(new Long(0, 0));
    this.z7h_1 = mutableStateOf(false);
    this.a7i_1 = mutableStateOf(initialValue);
    this.b7i_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().q2(this.s7h_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.s7h_1.n77()(initialValue);
      var inductionVariable = 0;
      var last = vector.f();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.u5m(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp$ret$0 = this.s7h_1.s77()(vector);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var visibilityThreshold = tmp;
    this.c7i_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).e7i = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animationSpec$factory_0();
    tmp$ret$0 = this.v7h_1.b2();
    return tmp$ret$0;
  };
  protoOf(TransitionAnimationState).j7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animation$factory_0();
    tmp$ret$0 = this.w7h_1.b2();
    return tmp$ret$0;
  };
  protoOf(TransitionAnimationState).k7j = function (_set____db54di) {
    var tmp0_setValue = isFinished$factory();
    return this.x7h_1.kk(_set____db54di);
  };
  protoOf(TransitionAnimationState).l7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isFinished$factory_0();
    tmp$ret$0 = this.x7h_1.b2();
    return tmp$ret$0;
  };
  protoOf(TransitionAnimationState).kk = function (_set____db54di) {
    var tmp0_setValue = value$factory_3();
    return this.a7i_1.kk(_set____db54di);
  };
  protoOf(TransitionAnimationState).b2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_4();
    tmp$ret$0 = this.a7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(TransitionAnimationState).d7b = function () {
    return this.j7j().t7a_1;
  };
  protoOf(TransitionAnimationState).m7j = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = playTimeNanos.s7(_get_offsetTimeNanos__sdn5qq(this));
      tmp$ret$0 = tmp0_div.ff() / durationScale;
      var scaledTime = tmp$ret$0;
      // Inline function 'kotlin.check' call
      var tmp1_check = !isNaN_0(scaledTime);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.animation.core.TransitionAnimationState.onPlayTimeChanged.<anonymous>' call
        tmp$ret$1 = 'Duration scale adjusted time is NaN. Duration scale: ' + durationScale + ',' + ('playTimeNanos: ' + toString(playTimeNanos) + ', offsetTimeNanos: ' + toString(_get_offsetTimeNanos__sdn5qq(this)));
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = numberToLong(scaledTime);
    } else {
      tmp = this.j7j().t7a_1;
    }
    var playTime = tmp;
    this.kk(this.j7j().a7b(playTime));
    this.b7i_1 = this.j7j().e7b(playTime);
    if (this.j7j().c7b(playTime)) {
      this.k7j(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  protoOf(TransitionAnimationState).i7j = function (playTimeNanos) {
    this.kk(this.j7j().a7b(playTimeNanos));
    this.b7i_1 = this.j7j().e7b(playTimeNanos);
  };
  protoOf(TransitionAnimationState).n7j = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  protoOf(TransitionAnimationState).k7i = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, VOID, !this.l7j());
      this.k7j(false);
      _set_offsetTimeNanos__i9wy86(this, this.d7i_1.o7j());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  protoOf(TransitionAnimationState).m7i = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.j7j().o7a_1, initialValue) ? equals(this.j7j().p7a_1, targetValue) : false) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.p7j_1 = initialState;
    this.q7j_1 = targetState;
  }
  protoOf(SegmentImpl).l7i = function () {
    return this.p7j_1;
  };
  protoOf(SegmentImpl).r7h = function () {
    return this.q7j_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.p7j_1, other.l7i());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.q7j_1, other.r7h());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.p7j_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.q7j_1;
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp + tmp$ret$1 | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.q7i_1 = $outer;
    this.n7i_1 = typeConverter;
    this.o7i_1 = label;
    this.p7i_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).s7j = function (_set____db54di) {
    var tmp0_setValue = data$factory();
    return this.p7i_1.kk(_set____db54di);
  };
  protoOf(DeferredAnimation).t7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = data$factory_0();
    tmp$ret$0 = this.p7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(DeferredAnimation).u7j = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.t7j();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new DeferredAnimationData(this, new TransitionAnimationState(this.q7i_1, targetValueByState(this.q7i_1.p7h()), createZeroVectorFrom(this.n7i_1, targetValueByState(this.q7i_1.p7h())), this.n7i_1, this.o7i_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.s7j(tmp0_apply);
      this.q7i_1.v7j(tmp0_apply.f7i_1);
      tmp$ret$0 = tmp0_apply;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.h7i_1 = targetValueByState;
    animData.g7i_1 = transitionSpec;
    animData.j7i(this.q7i_1.f7j());
    tmp$ret$1 = animData;
    return tmp$ret$1;
  };
  protoOf(DeferredAnimation).w7j = function () {
    var tmp0_safe_receiver = this.t7j();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.f7i_1.m7i(tmp0_safe_receiver.h7i_1(this.q7i_1.f7j().l7i()), tmp0_safe_receiver.h7i_1(this.q7i_1.f7j().r7h()), tmp0_safe_receiver.g7i_1(this.q7i_1.f7j()));
      tmp$ret$0 = tmp0_safe_receiver;
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var tmp0_forEach = this$0.y7i_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.d7b();
        tmp$ret$0 = tmp0_max.u(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
      }
      var tmp1_forEach = this$0.z7i_1;
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max_0 = maxDurationNanos;
        var tmp1_max_0 = element_0.x7j();
        tmp$ret$1 = tmp0_max_0.u(tmp1_max_0) >= 0 ? tmp0_max_0 : tmp1_max_0;
        maxDurationNanos = tmp$ret$1;
      }
      return maxDurationNanos;
    };
  }
  function Transition$updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.y7j($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition$animateTo$composable$slambda(this$0, resultContinuation) {
    this.h7k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$composable$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Transition$animateTo$composable$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$composable$slambda).sf = function () {
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

            this.j7k_1 = get_durationScale(this.i7k_1.zm());
            this.jf_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$composable$slambda$lambda(this.h7k_1, this.j7k_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(Transition$animateTo$composable$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$composable$slambda(this.h7k_1, completion);
    i.i7k_1 = $this$LaunchedEffect;
    return i;
  };
  function Transition$animateTo$composable$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$composable$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.k7k($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, label) {
    label = label === VOID ? null : label;
    this.r7i_1 = transitionState;
    this.s7i_1 = label;
    this.t7i_1 = mutableStateOf(this.p7h());
    this.u7i_1 = mutableStateOf(new SegmentImpl(this.p7h(), this.p7h()));
    this.v7i_1 = mutableStateOf(new Long(0, 0));
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.w7i_1 = mutableStateOf(new Long(0, -2147483648));
    this.x7i_1 = mutableStateOf(true);
    this.y7i_1 = mutableStateListOf();
    this.z7i_1 = mutableStateListOf();
    this.a7j_1 = mutableStateOf(false);
    this.b7j_1 = new Long(0, 0);
    var tmp_0 = this;
    tmp_0.c7j_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.d7j_1 = 0;
  }
  protoOf(Transition).o7h = function (value) {
    this.r7i_1.o7h(value);
  };
  protoOf(Transition).p7h = function () {
    return this.r7i_1.p7h();
  };
  protoOf(Transition).q7h = function (_set____db54di) {
    var tmp0_setValue = targetState$factory_1();
    return this.t7i_1.kk(_set____db54di);
  };
  protoOf(Transition).r7h = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetState$factory_2();
    tmp$ret$0 = this.t7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).f7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = segment$factory_0();
    tmp$ret$0 = this.u7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).y78 = function () {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  };
  protoOf(Transition).l7k = function (_set____db54di) {
    var tmp0_setValue = playTimeNanos$factory();
    return this.v7i_1.kk(_set____db54di);
  };
  protoOf(Transition).o7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = playTimeNanos$factory_0();
    tmp$ret$0 = this.v7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).h7j = function (_set____db54di) {
    var tmp0_setValue = updateChildrenNeeded$factory();
    return this.x7i_1.kk(_set____db54di);
  };
  protoOf(Transition).m7k = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = updateChildrenNeeded$factory_0();
    tmp$ret$0 = this.x7i_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).n7k = function (_set____db54di) {
    var tmp0_setValue = isSeeking$factory();
    return this.a7j_1.kk(_set____db54di);
  };
  protoOf(Transition).e7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isSeeking$factory_0();
    tmp$ret$0 = this.a7j_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).x7j = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = totalDurationNanos$factory();
    tmp$ret$0 = this.c7j_1.b2();
    return tmp$ret$0;
  };
  protoOf(Transition).g7j = function (frameTimeNanos, durationScale) {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    if (tmp.equals(new Long(0, -2147483648))) {
      this.o7k(frameTimeNanos);
    }
    this.h7j(false);
    this.l7k(frameTimeNanos.s7(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.y7i_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!element.l7j()) {
        element.m7j(this.o7j(), durationScale);
      }
      if (!element.l7j()) {
        allFinished = false;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.z7i_1;
    var tmp0_iterator_0 = tmp1_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!equals(element_0.r7h(), element_0.p7h())) {
        element_0.g7j(this.o7j(), durationScale);
      }
      if (!equals(element_0.r7h(), element_0.p7h())) {
        allFinished = false;
      }
    }
    if (allFinished) {
      this.p7k();
    }
  };
  protoOf(Transition).o7k = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.r7i_1.e7c(true);
  };
  protoOf(Transition).p7k = function () {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.o7h(this.r7h());
    this.l7k(new Long(0, 0));
    this.r7i_1.e7c(false);
  };
  protoOf(Transition).q7k = function (initialState, targetState, playTimeNanos) {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.r7i_1.e7c(false);
    if ((!this.e7j() ? true : !equals(this.p7h(), initialState)) ? true : !equals(this.r7h(), targetState)) {
      this.o7h(initialState);
      this.q7h(targetState);
      this.n7k(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.z7i_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = element instanceof Transition ? element : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_let.e7j()) {
        tmp0_let.q7k(tmp0_let.p7h(), tmp0_let.r7h(), playTimeNanos);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.y7i_1;
    var tmp0_iterator_0 = tmp1_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      element_0.i7j(playTimeNanos);
    }
    this.b7j_1 = playTimeNanos;
  };
  protoOf(Transition).r7k = function (transition) {
    return this.z7i_1.h1r(transition);
  };
  protoOf(Transition).s7k = function (transition) {
    return this.z7i_1.n22(transition);
  };
  protoOf(Transition).v7j = function (animation) {
    return this.y7i_1.h1r(animation);
  };
  protoOf(Transition).t7k = function (animation) {
    this.y7i_1.n22(animation);
  };
  protoOf(Transition).u7k = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.t7j();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f7i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.t7k(tmp1_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  protoOf(Transition).y7j = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1657853547);
    sourceInformation($composer_0, 'C(updateTarget$composable):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1657853547, $changed, -1, 'androidx.compose.animation.core.Transition.updateTarget$composable (Transition.kt:399)');
      }
      if (!this.e7j()) {
        if (!equals(this.r7h(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.r7h(), targetState));
          this.o7h(this.r7h());
          this.q7h(targetState);
          if (!this.y78()) {
            this.h7j(true);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_forEach = this.y7i_1;
          var tmp0_iterator = tmp0_forEach.c();
          while (tmp0_iterator.d()) {
            var element = tmp0_iterator.e();
            // Inline function 'androidx.compose.animation.core.Transition.updateTarget$composable.<anonymous>' call
            element.n7j();
          }
        }
      }
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
      tmp1_safe_receiver.y1t(Transition$updateTarget$composable$lambda(tmp0_rcvr, targetState, $changed));
    }
  };
  protoOf(Transition).k7k = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(254343587);
    sourceInformation($composer_0, 'C(animateTo$composable)426@16622L25,430@16892L655,430@16871L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(254343587, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo$composable (Transition.kt:424)');
      }
      if (!this.e7j()) {
        this.y7j(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.p7h()) ? true : this.y78()) ? true : this.m7k()) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp3_remember$composable = $composer_0;
          var tmp4_remember$composable = 14 & $dirty >> 3;
          var $composer_1 = tmp3_remember$composable;
          $composer_1.s1c(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp2_cache = $composer_1.x1h(this);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.animation.core.Transition.animateTo$composable.<anonymous>' call
            tmp$ret$0 = Transition$animateTo$composable$slambda_0(this, null);
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
          LaunchedEffect$composable(this, tmp$ret$4, $composer_0, 14 & $dirty >> 3);
        }
      }
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
      tmp1_safe_receiver.y1t(Transition$animateTo$composable$lambda(tmp0_rcvr, targetState, $changed));
    }
  };
  function updateTransition$composable(transitionState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.s1c(-506312018);
    sourceInformation($composer_0, 'C(updateTransition$composable)P(1)153@6566L94,156@6676L38,157@6748L195,157@6719L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-506312018, $changed, -1, 'androidx.compose.animation.core.updateTransition$composable (Transition.kt:149)');
    }
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
    var tmp2_cache = $composer_1.x1h(transitionState);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$0 = new Transition(transitionState, label_0._v);
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
    var transition = tmp$ret$4;
    transition.k7k(transitionState.r7h(), $composer_0, 0);
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp8_remember$composable = $composer_0;
    var $composer_2 = tmp8_remember$composable;
    $composer_2.s1c(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp6_cache = $composer_2;
    var tmp7_cache = $composer_2.x1h(transition);
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp5_let = tmp6_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp7_cache ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$5 = updateTransition$composable$lambda(transition);
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
    DisposableEffect$composable(transition, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transition;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function createDeferredAnimation$composable(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.s1c(446615029);
    sourceInformation($composer_0, 'C(createDeferredAnimation$composable)P(1)752@29607L58,753@29670L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = 'DeferredAnimation';
    }
    if (isTraceInProgress()) {
      traceEventStart(446615029, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation$composable (Transition.kt:748)');
    }
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
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation$composable.<anonymous>' call
      tmp$ret$0 = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0._v);
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
    var lazyAnim = tmp$ret$4;
    DisposableEffect$composable(lazyAnim, createDeferredAnimation$composable$lambda(_this__u8e3s4, lazyAnim), $composer_0, 0);
    if (_this__u8e3s4.e7j()) {
      lazyAnim.w7j();
    }
    var tmp0_0 = lazyAnim;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function createChildTransitionInternal$composable(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1296656186);
    sourceInformation($composer_0, 'C(createChildTransitionInternal$composable)P(1,2)798@31582L110,802@31727L112,802@31698L141,816@32061L25:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-1296656186, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal$composable (Transition.kt:793)');
    }
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
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>' call
      tmp$ret$0 = new Transition(new MutableTransitionState(initialState), '' + _this__u8e3s4.s7i_1 + ' > ' + childLabel);
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
    var transition = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp8_remember$composable = $composer_0;
    var tmp9_remember$composable = 14 & $changed;
    var $composer_2 = tmp8_remember$composable;
    $composer_2.s1c(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp6_cache = $composer_2;
    var tmp7_cache = !!($composer_2.x1h(_this__u8e3s4) | $composer_2.x1h(transition));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp5_let = tmp6_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp7_cache ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>' call
      tmp$ret$5 = createChildTransitionInternal$composable$lambda(_this__u8e3s4, transition);
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
    DisposableEffect$composable(transition, tmp$ret$9, $composer_0, 0);
    if (_this__u8e3s4.e7j()) {
      transition.q7k(initialState, targetState, _this__u8e3s4.b7j_1);
    } else {
      transition.y7j(targetState, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 6);
      transition.n7k(false);
    }
    var tmp0_1 = transition;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1918946450);
    sourceInformation($composer_0, 'C(createTransitionAnimation$composable)P(1,3!1,4)872@34615L499,895@35498L128,895@35460L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1918946450, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation$composable (Transition.kt:865)');
    }
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
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$0 = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
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
    var transitionAnimation = tmp$ret$4;
    if (_this__u8e3s4.e7j()) {
      transitionAnimation.m7i(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.k7i(targetValue, animationSpec);
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp8_remember$composable = $composer_0;
    var tmp9_remember$composable = 14 & $changed;
    var $composer_2 = tmp8_remember$composable;
    $composer_2.s1c(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp6_cache = $composer_2;
    var tmp7_cache = !!($composer_2.x1h(_this__u8e3s4) | $composer_2.x1h(transitionAnimation));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp5_let = tmp6_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp7_cache ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$5 = createTransitionAnimation$composable$lambda(_this__u8e3s4, transitionAnimation);
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
    DisposableEffect$composable(transitionAnimation, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transitionAnimation;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function _no_name_provided__qut3iv($transition) {
    this.v7k_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv).wp = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.v7k_1.p7k();
  };
  function updateTransition$composable$lambda($transition) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($transition);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_0($this_createDeferredAnimation$composable, $lazyAnim) {
    this.w7k_1 = $this_createDeferredAnimation$composable;
    this.x7k_1 = $lazyAnim;
  }
  protoOf(_no_name_provided__qut3iv_0).wp = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation$composable.<anonymous>.<anonymous>' call
    this.w7k_1.u7k(this.x7k_1);
  };
  function createDeferredAnimation$composable$lambda($this_createDeferredAnimation$composable, $lazyAnim) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($this_createDeferredAnimation$composable, $lazyAnim);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_1($this_createChildTransitionInternal$composable, $transition) {
    this.y7k_1 = $this_createChildTransitionInternal$composable;
    this.z7k_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_1).wp = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.y7k_1.s7k(this.z7k_1);
  };
  function createChildTransitionInternal$composable$lambda($this_createChildTransitionInternal$composable, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal$composable.r7k($transition);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1($this_createChildTransitionInternal$composable, $transition);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_2($this_createTransitionAnimation$composable, $transitionAnimation) {
    this.a7l_1 = $this_createTransitionAnimation$composable;
    this.b7l_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_2).wp = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.a7l_1.t7k(this.b7l_1);
  };
  function createTransitionAnimation$composable$lambda($this_createTransitionAnimation$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation$composable.v7j($transitionAnimation);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($this_createTransitionAnimation$composable, $transitionAnimation);
      return tmp$ret$0;
    };
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.p7h();
    }, function (receiver, value) {
      return receiver.o7h(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.p7h();
    }, function (receiver, value) {
      return receiver.o7h(value);
    });
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.r7h();
    }, function (receiver, value) {
      return receiver.q7h(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.r7h();
    }, function (receiver, value) {
      return receiver.q7h(value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return receiver.e7c(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.y78();
    }, function (receiver, value) {
      return receiver.e7c(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.r7h();
    }, function (receiver, value) {
      return receiver.q7h(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.r7h();
    }, function (receiver, value) {
      return receiver.q7h(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.f7j();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.f7j();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.o7j();
    }, function (receiver, value) {
      return receiver.l7k(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.o7j();
    }, function (receiver, value) {
      return receiver.l7k(value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.m7k();
    }, function (receiver, value) {
      return receiver.h7j(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.m7k();
    }, function (receiver, value) {
      return receiver.h7j(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.e7j();
    }, function (receiver, value) {
      return receiver.n7k(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.e7j();
    }, function (receiver, value) {
      return receiver.n7k(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.x7j();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.e7i();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.e7i();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.j7j();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.j7j();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.l7j();
    }, function (receiver, value) {
      return receiver.k7j(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.l7j();
    }, function (receiver, value) {
      return receiver.k7j(value);
    });
  }
  function offsetTimeNanos$factory() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function offsetTimeNanos$factory_0() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function needsReset$factory() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function needsReset$factory_0() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return receiver.kk(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.t7j();
    }, function (receiver, value) {
      return receiver.s7j(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.t7j();
    }, function (receiver, value) {
      return receiver.s7j(value);
    });
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.c7l_1 = convertToVector;
    this.d7l_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).n77 = function () {
    return this.c7l_1;
  };
  protoOf(TwoWayConverterImpl).s77 = function () {
    return this.d7l_1;
  };
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.h7c_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.h7c_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.f2m_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.h7c_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.j2m_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.j2m_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = it.l7c_1;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = it.m7c_1;
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.r2k_1), _Size___get_height__impl__a04p02(it.r2k_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.l7c_1, it.m7c_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.p2j_1), _Offset___get_y__impl__8bzhra(it.p2j_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.l7c_1, it.m7c_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.k2m_1), _IntOffset___get_y__impl__2avpwj(it.k2m_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.l7c_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.m7c_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.v2m_1), _IntSize___get_height__impl__prv63b(it.v2m_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.l7c_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.m7c_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.s2j_1, it.t2j_1, it.u2j_1, it.v2j_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.q7c_1, it.r7c_1, it.s7c_1, it.t7c_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (properties_initialized_VectorConverters_kt_cg0a6g) {
    } else {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    Spring_instance = this;
    this.e7l_1 = 10000.0;
    this.f7l_1 = 1500.0;
    this.g7l_1 = 400.0;
    this.h7l_1 = 200.0;
    this.i7l_1 = 50.0;
    this.j7l_1 = 0.2;
    this.k7l_1 = 0.5;
    this.l7l_1 = 0.75;
    this.m7l_1 = 1.0;
    this.n7l_1 = 0.01;
    this.o7l_1 = 0;
  }
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.p7l_1 = dampingRatio;
    this.q7l_1 = stiffness;
    this.r7l_1 = new VectorizedFloatAnimationSpec(anims);
    this.s7l_1 = 8;
  }
  protoOf(VectorizedSpringSpec).z7a = function () {
    return this.r7l_1.z7a();
  };
  protoOf(VectorizedSpringSpec).w7a = function (initialValue, targetValue, initialVelocity) {
    return this.r7l_1.w7a(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).x7a = function (initialValue, targetValue, initialVelocity) {
    return this.r7l_1.x7a(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).b7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.r7l_1.b7b(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).f7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.r7l_1.f7b(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.u7l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.v7l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.w7l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.y7l_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).g = function (index) {
    return this.y7l_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.t7l_1 = anims;
    this.x7l_1 = 8;
  }
  protoOf(VectorizedFloatAnimationSpec).b7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.u7l_1 == null)) {
      this.u7l_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).u5m(i, this.t7l_1.g(i).r7d(playTimeNanos, initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).f7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.v7l_1 == null)) {
      this.v7l_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).u5m(i, this.t7l_1.g(i).s7d(playTimeNanos, initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).x7a = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.w7l_1 == null)) {
      this.w7l_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).u5m(i, this.t7l_1.g(i).t7d(initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).w7a = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(0, initialValue.f());
    var inductionVariable = tmp0_forEach.w_1;
    var last = tmp0_forEach.x_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.t7l_1.g(element).u7d(initialValue.g(element), targetValue.g(element), initialVelocity.g(element));
        tmp$ret$0 = tmp0_maxOf.u(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        maxDuration = tmp$ret$0;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function VectorizedDurationBasedAnimationSpec() {
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.b7m_1 = durationMillis;
    this.c7m_1 = delayMillis;
    this.d7m_1 = easing;
    this.e7m_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.b7m_1, this.c7m_1, this.d7m_1));
    this.f7m_1 = 8;
  }
  protoOf(VectorizedTweenSpec).z7l = function () {
    return this.b7m_1;
  };
  protoOf(VectorizedTweenSpec).a7m = function () {
    return this.c7m_1;
  };
  protoOf(VectorizedTweenSpec).b7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e7m_1.b7b(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).f7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e7m_1.f7b(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedSnapSpec(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.g7m_1 = delayMillis;
    this.h7m_1 = 0;
  }
  protoOf(VectorizedSnapSpec).a7m = function () {
    return this.g7m_1;
  };
  protoOf(VectorizedSnapSpec).b7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (playTimeNanos.u(numberToLong(this.g7m_1).q7(get_MillisToNanos())) < 0) {
      return initialValue;
    } else {
      return targetValue;
    }
  };
  protoOf(VectorizedSnapSpec).f7b = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return initialVelocity;
  };
  protoOf(VectorizedSnapSpec).z7l = function () {
    return 0;
  };
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = until(0, $visibilityThreshold.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var inductionVariable = tmp1_map.w_1;
    var last = tmp1_map.x_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.g(item));
        tmp0_mapTo.a(tmp$ret$0);
      }
       while (!(item === last));
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.i7m_1 = tmp$ret$2;
  }
  protoOf(createSpringAnimations$1).g = function (index) {
    return this.i7m_1.g(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.j7m_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).g = function (index) {
    return this.j7m_1;
  };
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = 0.1;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (properties_initialized_VisibilityThresholds_kt_k6rdp8) {
    } else {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_1()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_4()), 0.5), to(get_VectorConverter_4(Companion_getInstance_3()), 0.5), to(get_VectorConverter_5(Companion_getInstance()), 0.5), to(get_VectorConverter_6(Companion_getInstance_2()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).c7b = isFinishedFromNanos;
  protoOf(DecayAnimation).c7b = isFinishedFromNanos;
  protoOf(FloatSpringSpec).v7d = vectorize;
  protoOf(FloatTweenSpec).t7d = getEndVelocity;
  protoOf(FloatTweenSpec).v7d = vectorize;
  protoOf(SegmentImpl).r7j = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).z7a = get_isInfinite;
  protoOf(VectorizedTweenSpec).w7a = getDurationNanos;
  protoOf(VectorizedTweenSpec).z7a = get_isInfinite;
  protoOf(VectorizedTweenSpec).x7a = getEndVelocity_0;
  protoOf(VectorizedSnapSpec).w7a = getDurationNanos;
  protoOf(VectorizedSnapSpec).z7a = get_isInfinite;
  protoOf(VectorizedSnapSpec).x7a = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_0;
  _.$_$.d = AnimationVector1D;
  _.$_$.e = AnimationVector2D;
  _.$_$.f = CubicBezierEasing;
  _.$_$.g = get_FastOutSlowInEasing;
  _.$_$.h = FiniteAnimationSpec;
  _.$_$.i = get_LinearEasing;
  _.$_$.j = MutableTransitionState;
  _.$_$.k = SpringSpec;
  _.$_$.l = TweenSpec;
  _.$_$.m = TwoWayConverter;
  _.$_$.n = get_VectorConverter_1;
  _.$_$.o = get_VectorConverter_6;
  _.$_$.p = get_VectorConverter_0;
  _.$_$.q = get_VectorConverter_2;
  _.$_$.r = get_VisibilityThreshold_4;
  _.$_$.s = get_VisibilityThreshold_5;
  _.$_$.t = animateDpAsState$composable;
  _.$_$.u = animateFloatAsState$composable;
  _.$_$.v = animateIntOffsetAsState$composable;
  _.$_$.w = animateOffsetAsState$composable;
  _.$_$.x = createChildTransitionInternal$composable;
  _.$_$.y = createDeferredAnimation$composable;
  _.$_$.z = createTransitionAnimation$composable;
  _.$_$.a1 = generateDecayAnimationSpec;
  _.$_$.b1 = get_isFinished;
  _.$_$.c1 = snap;
  _.$_$.d1 = spring;
  _.$_$.e1 = tween;
  _.$_$.f1 = updateTransition$composable;
  _.$_$.g1 = animateDecay;
  _.$_$.h1 = animateTo;
  _.$_$.i1 = animate_0;
  _.$_$.j1 = AnimationConstants_getInstance;
  _.$_$.k1 = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation-core.js.map
