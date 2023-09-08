(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-utils-internal-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-utils-internal-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-back-handler-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Essenty-back-handler-js-ir'.");
    }
    if (typeof this['Essenty-utils-internal-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-back-handler-js-ir'. Its dependency 'Essenty-utils-internal-js-ir' was not found. Please, check whether 'Essenty-utils-internal-js-ir' is loaded prior to 'Essenty-back-handler-js-ir'.");
    }
    root['Essenty-back-handler-js-ir'] = factory(typeof this['Essenty-back-handler-js-ir'] === 'undefined' ? {} : this['Essenty-back-handler-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-utils-internal-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_utils_internal) {
  'use strict';
  //region block: imports
  var ObservableProperty = kotlin_kotlin.$_$.f9;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var protoOf = kotlin_kotlin.$_$.r8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var emptySet = kotlin_kotlin.$_$.h4;
  var Delegates_getInstance = kotlin_kotlin.$_$.r2;
  var plus = kotlin_kotlin.$_$.s5;
  var minus = kotlin_kotlin.$_$.o5;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var ensureNeverFrozen = kotlin_com_arkivanov_essenty_utils_internal.$_$.a;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, ObservableProperty);
  setMetadataFor(BackCallback, 'BackCallback', classMeta);
  setMetadataFor(BackCallback$1, VOID, classMeta, BackCallback);
  setMetadataFor(DefaultBackDispatcher, 'DefaultBackDispatcher', classMeta);
  //endregion
  function _no_name_provided__qut3iv($isEnabled, this$0) {
    this.oh_1 = this$0;
    ObservableProperty.call(this, $isEnabled);
  }
  protoOf(_no_name_provided__qut3iv).ph = function (property, oldValue, newValue) {
    var tmp0_forEach = this.oh_1.qh_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.essenty.backhandler.BackCallback.isEnabled$delegate.<anonymous>.<anonymous>' call
      element(newValue);
    }
    return Unit_getInstance();
  };
  protoOf(_no_name_provided__qut3iv).o6 = function (property, oldValue, newValue) {
    var tmp = (!(oldValue == null) ? typeof oldValue === 'boolean' : false) ? oldValue : THROW_CCE();
    return this.ph(property, tmp, (!(newValue == null) ? typeof newValue === 'boolean' : false) ? newValue : THROW_CCE());
  };
  function BackCallback(isEnabled) {
    isEnabled = isEnabled === VOID ? true : isEnabled;
    this.qh_1 = emptySet();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.properties.Delegates.observable' call
    var tmp0_observable = Delegates_getInstance();
    tmp$ret$0 = new _no_name_provided__qut3iv(isEnabled, this);
    tmp.rh_1 = tmp$ret$0;
  }
  protoOf(BackCallback).sh = function (_set____db54di) {
    return this.rh_1.s6(this, isEnabled$factory(), _set____db54di);
  };
  protoOf(BackCallback).th = function () {
    return this.rh_1.q6(this, isEnabled$factory_0());
  };
  protoOf(BackCallback).uh = function (listener) {
    var tmp0_this = this;
    tmp0_this.qh_1 = plus(tmp0_this.qh_1, listener);
  };
  protoOf(BackCallback).vh = function (listener) {
    var tmp0_this = this;
    tmp0_this.qh_1 = minus(tmp0_this.qh_1, listener);
  };
  function BackCallback_0(isEnabled, onBack) {
    isEnabled = isEnabled === VOID ? true : isEnabled;
    return new BackCallback$1(isEnabled, onBack);
  }
  function BackCallback$1($isEnabled, $onBack) {
    this.zh_1 = $onBack;
    BackCallback.call(this, $isEnabled);
  }
  protoOf(BackCallback$1).wh = function () {
    this.zh_1();
  };
  function isEnabled$factory() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.th();
    }, function (receiver, value) {
      return receiver.sh(value);
    });
  }
  function isEnabled$factory_0() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.th();
    }, function (receiver, value) {
      return receiver.sh(value);
    });
  }
  function backDispatcher() {
    return new DefaultBackDispatcher();
  }
  function DefaultBackDispatcher() {
    ensureNeverFrozen(this);
    this.ai_1 = emptySet();
  }
  protoOf(DefaultBackDispatcher).bi = function (callback) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.ai_1.m(callback);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.backhandler.DefaultBackDispatcher.register.<anonymous>' call
      tmp$ret$0 = 'Callback is already registered';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.ai_1 = plus(tmp0_this.ai_1, callback);
  };
  protoOf(DefaultBackDispatcher).ci = function (callback) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.ai_1.m(callback);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.backhandler.DefaultBackDispatcher.unregister.<anonymous>' call
      tmp$ret$0 = 'Callback is not registered';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.ai_1 = minus(tmp0_this.ai_1, callback);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BackCallback_0;
  _.$_$.b = backDispatcher;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-back-handler-js-ir.js.map
