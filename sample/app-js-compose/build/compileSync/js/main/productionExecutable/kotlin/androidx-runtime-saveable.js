(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime-saveable'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-runtime-saveable'.");
    }
    root['androidx-runtime-saveable'] = factory(typeof this['androidx-runtime-saveable'] === 'undefined' ? {} : this['androidx-runtime-saveable'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.p7;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toString_0 = kotlin_kotlin.$_$.qa;
  var isInterface = kotlin_kotlin.$_$.h8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isObject = kotlin_kotlin.$_$.i8;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var toString_1 = kotlin_kotlin.$_$.ic;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var toMutableMap = kotlin_kotlin.$_$.l6;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var Map = kotlin_kotlin.$_$.j3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_reuseKey = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var isBlank = kotlin_kotlin.$_$.ha;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var arrayListOf = kotlin_kotlin.$_$.q3;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RegistryHolder, 'RegistryHolder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(SaveableStateHolderImpl, 'SaveableStateHolderImpl', classMeta);
  setMetadataFor(SaveableStateRegistryImpl$registerProvider$3, VOID, classMeta);
  setMetadataFor(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', classMeta);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.g(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            var tmp0_require = $this$Saver.t3s(item);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_require) {
              var tmp$ret$0;
              // Inline function 'kotlin.require.<anonymous>' call
              tmp$ret$0 = 'Failed requirement.';
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$1 = !list.l();
      if (tmp$ret$1) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.s1c(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.s1c(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = key_0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (!tmp$ret$0) {
      tmp = key_0;
    } else {
      tmp = toString_0($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.u1c();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false)
      tmp_0;
    else
      THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalSaveableStateRegistry();
    var tmp2_$get_current$$composable_g4n2vl = $composer_0;
    var $composer_1 = tmp2_$get_current$$composable_g4n2vl;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$1 = tmp0;
    var registry = tmp$ret$1;
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = inputs.slice();
    var tmp7_remember$composable = $composer_0;
    var $composer_2 = tmp7_remember$composable;
    $composer_2.s1c(-1603429786);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp6_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key_1 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.x1h(key_1));
    }
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = invalid;
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance().k1j_1) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp0_safe_receiver = registry;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3s(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = saver_0._v.v3s(tmp1_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
        tmp_2 = tmp$ret$3;
      }
      var restored = tmp_2;
      var tmp2_elvis_lhs = restored;
      tmp$ret$4 = tmp2_elvis_lhs == null ? init() : tmp2_elvis_lhs;
      var value = tmp$ret$4;
      tmp4_cache.p1q(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_3 = tmp$ret$6;
    tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.u1c();
    tmp$ret$8 = tmp0_0;
    var value_0 = tmp$ret$8;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    var tmp0_1 = value_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.t3s(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.g1u() === neverEqualPolicy()) ? !(value.g1u() === structuralEqualityPolicy()) : false) ? !(value.g1u() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.b2()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.w3s_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).t3s = function (value) {
    return this.w3s_1(value);
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.t3s(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $saverState.b2();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      tmp$ret$0 = tmp0_with.x3s(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.b2());
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.y3s_1 = $entry;
  }
  protoOf(_no_name_provided__qut3iv).wp = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.y3s_1.z3s();
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.a3t($finalKey, valueProvider);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(entry);
      return tmp$ret$0;
    };
  }
  function rememberSaveableStateHolder$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1658217662);
    sourceInformation($composer_0, 'C(rememberSaveableStateHolder$composable)*61@2439L41,59@2369L111,64@2554L7:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(-1658217662, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable (SaveableStateHolder.kt:58)');
    }
    var tmp$ret$6;
    // Inline function 'kotlin.apply' call
    var tmp = Companion_getInstance_0().b3t_1;
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
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
      tmp$ret$0 = rememberSaveableStateHolder$composable$lambda;
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
    var tmp3_apply = rememberSaveable$composable([], tmp, null, tmp$ret$4, $composer_0, 8, 4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
    var tmp_2 = tmp3_apply;
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalSaveableStateRegistry();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$5 = tmp0_0;
    tmp_2.e3t_1 = tmp$ret$5;
    tmp$ret$6 = tmp3_apply;
    var tmp1_group = tmp$ret$6;
    var tmp0_1 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_1;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.e3t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3s(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = toMutableMap($this.c3t_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.d3t_1.s2();
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.j3t(map);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.l()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp$ret$0 = null;
      tmp = tmp$ret$0;
    } else {
      tmp = map;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  }
  function RegistryHolder($outer, key) {
    this.i3t_1 = $outer;
    this.f3t_1 = key;
    this.g3t_1 = true;
    var tmp = this;
    var tmp_0 = this.i3t_1.c3t_1.q2(this.f3t_1);
    tmp.h3t_1 = SaveableStateRegistry(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.i3t_1));
  }
  protoOf(RegistryHolder).j3t = function (map) {
    if (this.g3t_1) {
      var savedData = this.h3t_1.k3t();
      if (savedData.l()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp0_minusAssign = this.f3t_1;
        map.s4(tmp0_minusAssign);
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = this.f3t_1;
        map.h4(tmp1_set, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.b3t_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _no_name_provided__qut3iv_0($registryHolder, this$0, $key) {
    this.l3t_1 = $registryHolder;
    this.m3t_1 = this$0;
    this.n3t_1 = $key;
  }
  protoOf(_no_name_provided__qut3iv_0).wp = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.l3t_1.j3t(this.m3t_1.c3t_1);
    var tmp0_this = this.m3t_1;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.d3t_1;
    tmp0_minusAssign.s4(this.n3t_1);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this$0.d3t_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2($key);
      tmp$ret$1 = tmp$ret$0;
      var tmp1_require = !tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp1_require) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$2 = 'Key ' + toString($key) + ' was used multiple times ';
        var message = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_this = this$0;
      var tmp2_minusAssign = tmp0_this.c3t_1;
      tmp2_minusAssign.s4($key);
      var tmp3_set = this$0.d3t_1;
      tmp3_set.h4($key, $registryHolder);
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$3 = new _no_name_provided__qut3iv_0($registryHolder, this$0, $key);
      return tmp$ret$3;
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.o3t($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.c3t_1 = savedStates;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.d3t_1 = tmp$ret$1;
    this.e3t_1 = null;
  }
  protoOf(SaveableStateHolderImpl).p3t = function (key) {
    var registryHolder = this.d3t_1.q2(key);
    if (!(registryHolder == null)) {
      registryHolder.g3t_1 = false;
    } else {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.minusAssign' call
      var tmp0_minusAssign = tmp0_this.c3t_1;
      tmp0_minusAssign.s4(key);
    }
  };
  protoOf(SaveableStateHolderImpl).o3t = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1898146948);
    sourceInformation($composer_0, 'C(SaveableStateProvider$composable)P(1)75@2967L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(1898146948, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable (SaveableStateHolder.kt:74)');
    }
    // Inline function 'androidx.compose.runtime.ReusableContent$composable' call
    var tmp0_ReusableContent$composable = $composer_0;
    var tmp1_ReusableContent$composable = 14 & $dirty;
    var $composer_1 = tmp0_ReusableContent$composable;
    $composer_1.s1c(1346827672);
    sourceInformation($composer_1, 'CC(ReusableContent$composable)P(1)145@5313L9:Composables.kt#9igjgp');
    $composer_1.j1p(get_reuseKey(), key);
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = $composer_1;
    var tmp3__anonymous__ufb84q = 14 & tmp1_ReusableContent$composable >> 3;
    var $composer_2 = tmp2__anonymous__z9zvc9;
    sourceInformationMarkerStart($composer_2, -65727059, 'C76@3023L321,83@3357L150,87@3520L360:SaveableStateHolder.kt#r2ddri');
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_2;
    var $composer_3 = tmp2_remember$composable;
    $composer_3.s1c(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_3;
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().k1j_1) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_safe_receiver = this.e3t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t3s(key);
      var tmp0_require = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = new RegistryHolder(this, key);
      var value = tmp$ret$1;
      tmp1_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$4;
    $composer_3.u1c();
    tmp$ret$5 = tmp0;
    var registryHolder = tmp$ret$5;
    CompositionLocalProvider$composable([get_LocalSaveableStateRegistry().t1t(registryHolder.h3t_1)], content, $composer_2, 112 & $dirty);
    DisposableEffect$composable_0(Unit_getInstance(), SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this, key, registryHolder), $composer_2, 6);
    sourceInformationMarkerEnd($composer_2);
    $composer_1.k1p();
    $composer_1.u1c();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0(tmp0_rcvr, key, content, $changed));
    }
  };
  function rememberSaveableStateHolder$composable$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$3(this$0, $key, $valueProvider) {
    this.q3t_1 = this$0;
    this.r3t_1 = $key;
    this.s3t_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$3).z3s = function () {
    var list = this.q3t_1.v3t_1.s4(this.r3t_1);
    var tmp0_safe_receiver = list;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.j3(this.s3t_1);
    var tmp;
    if (!(list == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !list.l();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.q3t_1.v3t_1;
      tmp0_set.h4(this.r3t_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.t3t_1 = canBeSaved;
    var tmp = this;
    var tmp0_safe_receiver = restored;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toMutableMap(tmp0_safe_receiver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.u3t_1 = tmp_0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_1.v3t_1 = tmp$ret$1;
  }
  protoOf(SaveableStateRegistryImpl).t3s = function (value) {
    return this.t3t_1(value);
  };
  protoOf(SaveableStateRegistryImpl).u3s = function (key) {
    var list = this.u3t_1.s4(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !list.l();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.f() > 1) {
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = this.u3t_1;
        var tmp1_set = list.k1(1, list.f());
        tmp0_set.h4(key, tmp1_set);
      }
      tmp = list.g(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).a3t = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(key);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      tmp$ret$1 = 'Registered key is empty or blank';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.v3t_1;
    var value = tmp1_getOrPut.q2(key);
    var tmp;
    if (value == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$2 = ArrayList_init_$Create$_0();
      tmp$ret$3 = tmp$ret$2;
      var answer = tmp$ret$3;
      tmp1_getOrPut.h4(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$4 = tmp;
    tmp$ret$4.a(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$3(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).k3t = function () {
    var map = toMutableMap(this.u3t_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.v3t_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.c2().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.z1();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.b2();
      var list = tmp$ret$2;
      if (list.f() === 1) {
        var value = list.g(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          var tmp0_check = this.t3s(value);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$3;
            // Inline function 'kotlin.check.<anonymous>' call
            tmp$ret$3 = 'Check failed.';
            var message = tmp$ret$3;
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var tmp1_set = arrayListOf([value]);
          map.h4(key, tmp1_set);
        }
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.List' call
        var tmp2_List = list.f();
        var tmp$ret$6;
        // Inline function 'kotlin.collections.MutableList' call
        var list_0 = ArrayList_init_$Create$_1(tmp2_List);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < tmp2_List)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            var tmp$ret$5;
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_0 = list.g(index)();
            if (!(value_0 == null)) {
              // Inline function 'kotlin.check' call
              var tmp0_check_0 = this.t3s(value_0);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check_0) {
                var tmp$ret$4;
                // Inline function 'kotlin.check.<anonymous>' call
                tmp$ret$4 = 'Check failed.';
                var message_0 = tmp$ret$4;
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            tmp$ret$5 = value_0;
            list_0.a(tmp$ret$5);
          }
           while (inductionVariable < tmp2_List);
        tmp$ret$6 = list_0;
        tmp$ret$7 = tmp$ret$6;
        var tmp3_set = tmp$ret$7;
        map.h4(key, tmp3_set);
      }
    }
    return map;
  };
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
    } else {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.w3t_1 = $save;
    this.x3t_1 = $restore;
  }
  protoOf(Saver$1).x3s = function (_this__u8e3s4, value) {
    return this.w3t_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).v3s = function (value) {
    return this.x3t_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (properties_initialized_Saver_kt_ch40dh) {
    } else {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry;
  _.$_$.c = Saver_0;
  _.$_$.d = listSaver;
  _.$_$.e = rememberSaveable$composable;
  _.$_$.f = rememberSaveableStateHolder$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime-saveable.js.map
