(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-parcelable-js-ir.js', './Essenty-utils-internal-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-parcelable-js-ir.js'), require('./Essenty-utils-internal-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Essenty-state-keeper-js-ir'.");
    }
    if (typeof this['Essenty-parcelable-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-ir'. Its dependency 'Essenty-parcelable-js-ir' was not found. Please, check whether 'Essenty-parcelable-js-ir' is loaded prior to 'Essenty-state-keeper-js-ir'.");
    }
    if (typeof this['Essenty-utils-internal-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-state-keeper-js-ir'. Its dependency 'Essenty-utils-internal-js-ir' was not found. Please, check whether 'Essenty-utils-internal-js-ir' is loaded prior to 'Essenty-state-keeper-js-ir'.");
    }
    root['Essenty-state-keeper-js-ir'] = factory(typeof this['Essenty-state-keeper-js-ir'] === 'undefined' ? {} : this['Essenty-state-keeper-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-parcelable-js-ir'], this['Essenty-utils-internal-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_parcelable, kotlin_com_arkivanov_essenty_utils_internal) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var Parcelable = kotlin_com_arkivanov_essenty_parcelable.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var parcelableContainer = kotlin_com_arkivanov_essenty_parcelable.$_$.a;
  var ensureNeverFrozen = kotlin_com_arkivanov_essenty_utils_internal.$_$.a;
  var getKClass = kotlin_kotlin.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var Map = kotlin_kotlin.$_$.j3;
  var isInterface = kotlin_kotlin.$_$.h8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SavedState, 'SavedState', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultStateKeeperDispatcher, 'DefaultStateKeeperDispatcher', classMeta);
  //endregion
  function DefaultStateKeeperDispatcher_init_$Init$(savedState, $this) {
    DefaultStateKeeperDispatcher.call($this, savedState, DefaultStateKeeperDispatcher$_init_$lambda_enu3a6);
    return $this;
  }
  function DefaultStateKeeperDispatcher_init_$Create$(savedState) {
    return DefaultStateKeeperDispatcher_init_$Init$(savedState, objectCreate(protoOf(DefaultStateKeeperDispatcher)));
  }
  function SavedState(map) {
    this.zg_1 = map;
  }
  function DefaultStateKeeperDispatcher$_init_$lambda_enu3a6(it) {
    return parcelableContainer(it);
  }
  function DefaultStateKeeperDispatcher(savedState, parcelableContainerFactory) {
    this.ah_1 = parcelableContainerFactory;
    ensureNeverFrozen(this);
    var tmp = this;
    var tmp0_safe_receiver = savedState;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.parcelable.consume' call
      tmp$ret$0 = tmp0_safe_receiver.wg(getKClass(SavedState));
      tmp_0 = tmp$ret$0;
    }
    var tmp1_safe_receiver = tmp_0;
    tmp.bh_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zg_1;
    this.ch_1 = HashMap_init_$Create$();
  }
  protoOf(DefaultStateKeeperDispatcher).dh = function () {
    var map = HashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.ch_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.c2().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.essenty.statekeeper.DefaultStateKeeperDispatcher.save.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.z1();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.b2();
      var supplier = tmp$ret$2;
      var tmp0_safe_receiver = supplier();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.arkivanov.essenty.statekeeper.DefaultStateKeeperDispatcher.save.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = this.ah_1(tmp0_safe_receiver);
        map.h4(key, tmp0_set);
        tmp$ret$3 = tmp0_safe_receiver;
      }
    }
    return parcelableContainer(new SavedState(map));
  };
  protoOf(DefaultStateKeeperDispatcher).eh = function (key, clazz) {
    var tmp0_safe_receiver = this.bh_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4(key);
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wg(clazz);
  };
  protoOf(DefaultStateKeeperDispatcher).fh = function (key, supplier) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.gh(key);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.statekeeper.DefaultStateKeeperDispatcher.register.<anonymous>' call
      tmp$ret$0 = 'Another supplier is already registered with the key: ' + key;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.ch_1;
    tmp1_set.h4(key, supplier);
  };
  protoOf(DefaultStateKeeperDispatcher).hh = function (key) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.gh(key);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.statekeeper.DefaultStateKeeperDispatcher.unregister.<anonymous>' call
      tmp$ret$0 = 'No supplier is registered with the key: ' + key;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp1_minusAssign = tmp0_this.ch_1;
    tmp1_minusAssign.s4(key);
  };
  protoOf(DefaultStateKeeperDispatcher).gh = function (key) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.ch_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(key);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function stateKeeperDispatcher(savedState) {
    savedState = savedState === VOID ? null : savedState;
    return DefaultStateKeeperDispatcher_init_$Create$(savedState);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = stateKeeperDispatcher;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-state-keeper-js-ir.js.map
