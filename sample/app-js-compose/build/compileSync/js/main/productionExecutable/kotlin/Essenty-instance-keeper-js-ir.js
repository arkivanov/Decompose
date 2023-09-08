(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-utils-internal-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-utils-internal-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-instance-keeper-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Essenty-instance-keeper-js-ir'.");
    }
    if (typeof this['Essenty-utils-internal-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-instance-keeper-js-ir'. Its dependency 'Essenty-utils-internal-js-ir' was not found. Please, check whether 'Essenty-utils-internal-js-ir' is loaded prior to 'Essenty-instance-keeper-js-ir'.");
    }
    root['Essenty-instance-keeper-js-ir'] = factory(typeof this['Essenty-instance-keeper-js-ir'] === 'undefined' ? {} : this['Essenty-instance-keeper-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-utils-internal-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_utils_internal) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ensureNeverFrozen = kotlin_com_arkivanov_essenty_utils_internal.$_$.a;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var protoOf = kotlin_kotlin.$_$.r8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var Map = kotlin_kotlin.$_$.j3;
  var isInterface = kotlin_kotlin.$_$.h8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DefaultInstanceKeeperDispatcher, 'DefaultInstanceKeeperDispatcher', classMeta);
  setMetadataFor(Instance, 'Instance', interfaceMeta);
  //endregion
  function checkIsNotDestroyed($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !$this.jh_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.instancekeeper.DefaultInstanceKeeperDispatcher.checkIsNotDestroyed.<anonymous>' call
      tmp$ret$0 = 'InstanceKeeper is destroyed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function DefaultInstanceKeeperDispatcher() {
    ensureNeverFrozen(this);
    this.ih_1 = HashMap_init_$Create$();
    this.jh_1 = false;
  }
  protoOf(DefaultInstanceKeeperDispatcher).kh = function (key) {
    checkIsNotDestroyed(this);
    return this.ih_1.q2(key);
  };
  protoOf(DefaultInstanceKeeperDispatcher).lh = function (key, instance) {
    checkIsNotDestroyed(this);
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.ih_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(key);
    tmp$ret$1 = tmp$ret$0;
    var tmp1_check = !tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.arkivanov.essenty.instancekeeper.DefaultInstanceKeeperDispatcher.put.<anonymous>' call
      tmp$ret$2 = 'Another instance is already associated with the key: ' + toString(key);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.ih_1;
    tmp2_set.h4(key, instance);
  };
  protoOf(DefaultInstanceKeeperDispatcher).mh = function () {
    checkIsNotDestroyed(this);
    this.jh_1 = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.ih_1.s2();
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.kg();
    }
    this.ih_1.l3();
  };
  function Instance() {
  }
  function instanceKeeperDispatcher() {
    return new DefaultInstanceKeeperDispatcher();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Instance;
  _.$_$.b = instanceKeeperDispatcher;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-instance-keeper-js-ir.js.map
