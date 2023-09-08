(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Reaktive-utils-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Reaktive-utils-js-ir'.");
    }
    root['Reaktive-utils-js-ir'] = factory(typeof this['Reaktive-utils-js-ir'] === 'undefined' ? {} : this['Reaktive-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Long = kotlin_kotlin.$_$.db;
  var VOID = kotlin_kotlin.$_$.mc;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var numberToLong = kotlin_kotlin.$_$.o8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(AtomicLong, 'AtomicLong', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(DefaultClock, 'DefaultClock', objectMeta);
  //endregion
  function get_NANOS_IN_MILLI() {
    return NANOS_IN_MILLI;
  }
  var NANOS_IN_MILLI;
  function get_MILLIS_IN_SECOND() {
    return MILLIS_IN_SECOND;
  }
  var MILLIS_IN_SECOND;
  var currentThreadId;
  var currentThreadName;
  function printStack(_this__u8e3s4) {
    console.log(_this__u8e3s4.toString());
  }
  function AtomicBoolean(initialValue) {
    initialValue = initialValue === VOID ? false : initialValue;
    this.maa_1 = initialValue;
  }
  protoOf(AtomicBoolean).naa = function (expectedValue, newValue) {
    var tmp;
    if (this.maa_1 === expectedValue) {
      this.maa_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function AtomicInt(initialValue) {
    initialValue = initialValue === VOID ? 0 : initialValue;
    this.oaa_1 = initialValue;
  }
  protoOf(AtomicInt).k6g = function (delta) {
    var tmp0_this = this;
    tmp0_this.oaa_1 = tmp0_this.oaa_1 + delta | 0;
    return this.oaa_1;
  };
  protoOf(AtomicInt).y6j = function (expectedValue, newValue) {
    var tmp;
    if (this.oaa_1 === expectedValue) {
      this.oaa_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function AtomicLong(initialValue) {
    initialValue = initialValue === VOID ? new Long(0, 0) : initialValue;
    this.paa_1 = initialValue;
  }
  protoOf(AtomicLong).qaa = function (delta) {
    var tmp0_this = this;
    tmp0_this.paa_1 = tmp0_this.paa_1.r7(delta);
    return this.paa_1;
  };
  function AtomicReference(initialValue) {
    this.raa_1 = initialValue;
  }
  function _get_hrTimeMillis__4b7s26($this) {
    var t = process.hrtime();
    var tmp = t[0];
    var tmp_0 = numberToLong((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()).q7(get_MILLIS_IN_SECOND());
    var tmp_1 = t[1];
    return tmp_0.r7(numberToLong((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()).p7(get_NANOS_IN_MILLI()));
  }
  function DefaultClock() {
    DefaultClock_instance = this;
    this.saa_1 = !(typeof window === 'undefined');
  }
  protoOf(DefaultClock).taa = function () {
    return this.saa_1 ? numberToLong(window.performance.now()) : _get_hrTimeMillis__4b7s26(this);
  };
  var DefaultClock_instance;
  function DefaultClock_getInstance() {
    if (DefaultClock_instance == null)
      new DefaultClock();
    return DefaultClock_instance;
  }
  //region block: init
  NANOS_IN_MILLI = new Long(1000000, 0);
  MILLIS_IN_SECOND = new Long(1000, 0);
  currentThreadId = new Long(0, 0);
  currentThreadName = 'main';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AtomicBoolean;
  _.$_$.b = AtomicInt;
  _.$_$.c = AtomicLong;
  _.$_$.d = AtomicReference;
  _.$_$.e = printStack;
  _.$_$.f = DefaultClock_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Reaktive-utils-js-ir.js.map
