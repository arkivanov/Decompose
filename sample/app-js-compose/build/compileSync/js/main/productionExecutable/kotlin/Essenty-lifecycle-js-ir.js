(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-utils-internal-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-utils-internal-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-lifecycle-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Essenty-lifecycle-js-ir'.");
    }
    if (typeof this['Essenty-utils-internal-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-lifecycle-js-ir'. Its dependency 'Essenty-utils-internal-js-ir' was not found. Please, check whether 'Essenty-utils-internal-js-ir' is loaded prior to 'Essenty-lifecycle-js-ir'.");
    }
    root['Essenty-lifecycle-js-ir'] = factory(typeof this['Essenty-lifecycle-js-ir'] === 'undefined' ? {} : this['Essenty-lifecycle-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-utils-internal-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_utils_internal) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Enum = kotlin_kotlin.$_$.ya;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ensureNeverFrozen = kotlin_com_arkivanov_essenty_utils_internal.$_$.a;
  var emptySet = kotlin_kotlin.$_$.h4;
  var plus = kotlin_kotlin.$_$.s5;
  var minus = kotlin_kotlin.$_$.o5;
  var reversed = kotlin_kotlin.$_$.z5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(State, 'State', classMeta, Enum);
  function onCreate() {
  }
  function onStart() {
  }
  function onResume() {
  }
  function onPause() {
  }
  function onStop() {
  }
  function onDestroy() {
  }
  setMetadataFor(Callbacks, 'Callbacks', interfaceMeta);
  setMetadataFor(subscribe$1, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(LifecycleRegistryImpl, 'LifecycleRegistryImpl', classMeta, VOID, [Callbacks]);
  //endregion
  var State_DESTROYED_instance;
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_DESTROYED_instance = new State('DESTROYED', 0);
    State_INITIALIZED_instance = new State('INITIALIZED', 1);
    State_CREATED_instance = new State('CREATED', 2);
    State_STARTED_instance = new State('STARTED', 3);
    State_RESUMED_instance = new State('RESUMED', 4);
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Callbacks() {
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function subscribe(_this__u8e3s4, onCreate, onStart, onResume, onPause, onStop, onDestroy) {
    onCreate = onCreate === VOID ? null : onCreate;
    onStart = onStart === VOID ? null : onStart;
    onResume = onResume === VOID ? null : onResume;
    onPause = onPause === VOID ? null : onPause;
    onStop = onStop === VOID ? null : onStop;
    onDestroy = onDestroy === VOID ? null : onDestroy;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new subscribe$1(onCreate, onStart, onResume, onPause, onStop, onDestroy);
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.lg(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function subscribe$1($onCreate, $onStart, $onResume, $onPause, $onStop, $onDestroy) {
    this.mg_1 = $onCreate;
    this.ng_1 = $onStart;
    this.og_1 = $onResume;
    this.pg_1 = $onPause;
    this.qg_1 = $onStop;
    this.rg_1 = $onDestroy;
  }
  protoOf(subscribe$1).fg = function () {
    var tmp0_safe_receiver = this.mg_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(subscribe$1).gg = function () {
    var tmp0_safe_receiver = this.ng_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(subscribe$1).hg = function () {
    var tmp0_safe_receiver = this.og_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(subscribe$1).ig = function () {
    var tmp0_safe_receiver = this.pg_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(subscribe$1).jg = function () {
    var tmp0_safe_receiver = this.qg_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  protoOf(subscribe$1).kg = function () {
    var tmp0_safe_receiver = this.rg_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  function lifecycleRegistry() {
    return LifecycleRegistry(State_INITIALIZED_getInstance());
  }
  function LifecycleRegistry(initialState) {
    return new LifecycleRegistryImpl(initialState);
  }
  function resume(_this__u8e3s4) {
    start(_this__u8e3s4);
    if (_this__u8e3s4.sg().equals(State_STARTED_getInstance())) {
      _this__u8e3s4.hg();
    }
  }
  function stop(_this__u8e3s4) {
    pause(_this__u8e3s4);
    if (_this__u8e3s4.sg().equals(State_STARTED_getInstance())) {
      _this__u8e3s4.jg();
    }
  }
  function start(_this__u8e3s4) {
    create(_this__u8e3s4);
    if (_this__u8e3s4.sg().equals(State_CREATED_getInstance())) {
      _this__u8e3s4.gg();
    }
  }
  function pause(_this__u8e3s4) {
    if (_this__u8e3s4.sg().equals(State_RESUMED_getInstance())) {
      _this__u8e3s4.ig();
    }
  }
  function create(_this__u8e3s4) {
    if (_this__u8e3s4.sg().equals(State_INITIALIZED_getInstance())) {
      _this__u8e3s4.fg();
    }
  }
  function destroy(_this__u8e3s4) {
    stop(_this__u8e3s4);
    if (_this__u8e3s4.sg().equals(State_CREATED_getInstance())) {
      _this__u8e3s4.kg();
    }
  }
  function checkState($this, required) {
    // Inline function 'kotlin.check' call
    var tmp0_check = $this.ug_1.equals(required);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.lifecycle.LifecycleRegistryImpl.checkState.<anonymous>' call
      tmp$ret$0 = 'Expected state ' + required + ' but was ' + $this.ug_1;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function LifecycleRegistryImpl(initialState) {
    ensureNeverFrozen(this);
    this.tg_1 = emptySet();
    this.ug_1 = initialState;
  }
  protoOf(LifecycleRegistryImpl).sg = function () {
    return this.ug_1;
  };
  protoOf(LifecycleRegistryImpl).lg = function (callbacks) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.tg_1.m(callbacks);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.lifecycle.LifecycleRegistryImpl.subscribe.<anonymous>' call
      tmp$ret$0 = 'Already subscribed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.tg_1 = plus(tmp0_this.tg_1, callbacks);
    var state = this.ug_1;
    if (state.l6(State_CREATED_getInstance()) >= 0) {
      callbacks.fg();
    }
    if (state.l6(State_STARTED_getInstance()) >= 0) {
      callbacks.gg();
    }
    if (state.l6(State_RESUMED_getInstance()) >= 0) {
      callbacks.hg();
    }
  };
  protoOf(LifecycleRegistryImpl).vg = function (callbacks) {
    var tmp0_this = this;
    tmp0_this.tg_1 = minus(tmp0_this.tg_1, callbacks);
  };
  protoOf(LifecycleRegistryImpl).fg = function () {
    checkState(this, State_INITIALIZED_getInstance());
    this.ug_1 = State_CREATED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.tg_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.fg();
    }
  };
  protoOf(LifecycleRegistryImpl).gg = function () {
    checkState(this, State_CREATED_getInstance());
    this.ug_1 = State_STARTED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.tg_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.gg();
    }
  };
  protoOf(LifecycleRegistryImpl).hg = function () {
    checkState(this, State_STARTED_getInstance());
    this.ug_1 = State_RESUMED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.tg_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.hg();
    }
  };
  protoOf(LifecycleRegistryImpl).ig = function () {
    checkState(this, State_RESUMED_getInstance());
    this.ug_1 = State_STARTED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = reversed(this.tg_1);
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.ig();
    }
  };
  protoOf(LifecycleRegistryImpl).jg = function () {
    checkState(this, State_STARTED_getInstance());
    this.ug_1 = State_CREATED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = reversed(this.tg_1);
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.jg();
    }
  };
  protoOf(LifecycleRegistryImpl).kg = function () {
    checkState(this, State_CREATED_getInstance());
    this.ug_1 = State_DESTROYED_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = reversed(this.tg_1);
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      element.kg();
    }
    this.tg_1 = emptySet();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = onCreate;
  _.$_$.b = onPause;
  _.$_$.c = onResume;
  _.$_$.d = onStart;
  _.$_$.e = onStop;
  _.$_$.f = Callbacks;
  _.$_$.g = lifecycleRegistry;
  _.$_$.h = create;
  _.$_$.i = destroy;
  _.$_$.j = pause;
  _.$_$.k = resume;
  _.$_$.l = start;
  _.$_$.m = stop;
  _.$_$.n = subscribe;
  _.$_$.o = State_CREATED_getInstance;
  _.$_$.p = State_DESTROYED_getInstance;
  _.$_$.q = State_RESUMED_getInstance;
  _.$_$.r = State_STARTED_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-lifecycle-js-ir.js.map
