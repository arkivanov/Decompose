(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-state-keeper-js-ir.js', './Essenty-instance-keeper-js-ir.js', './Essenty-back-handler-js-ir.js', './Essenty-lifecycle-js-ir.js', './Essenty-parcelable-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-state-keeper-js-ir.js'), require('./Essenty-instance-keeper-js-ir.js'), require('./Essenty-back-handler-js-ir.js'), require('./Essenty-lifecycle-js-ir.js'), require('./Essenty-parcelable-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    if (typeof this['Essenty-state-keeper-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'Essenty-state-keeper-js-ir' was not found. Please, check whether 'Essenty-state-keeper-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    if (typeof this['Essenty-instance-keeper-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'Essenty-instance-keeper-js-ir' was not found. Please, check whether 'Essenty-instance-keeper-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    if (typeof this['Essenty-back-handler-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'Essenty-back-handler-js-ir' was not found. Please, check whether 'Essenty-back-handler-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    if (typeof this['Essenty-lifecycle-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'Essenty-lifecycle-js-ir' was not found. Please, check whether 'Essenty-lifecycle-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    if (typeof this['Essenty-parcelable-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-decompose-js-ir'. Its dependency 'Essenty-parcelable-js-ir' was not found. Please, check whether 'Essenty-parcelable-js-ir' is loaded prior to 'Decompose-decompose-js-ir'.");
    }
    root['Decompose-decompose-js-ir'] = factory(typeof this['Decompose-decompose-js-ir'] === 'undefined' ? {} : this['Decompose-decompose-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-state-keeper-js-ir'], this['Essenty-instance-keeper-js-ir'], this['Essenty-back-handler-js-ir'], this['Essenty-lifecycle-js-ir'], this['Essenty-parcelable-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_state_keeper, kotlin_com_arkivanov_essenty_instance_keeper, kotlin_com_arkivanov_essenty_back_handler, kotlin_com_arkivanov_essenty_lifecycle, kotlin_com_arkivanov_essenty_parcelable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var hashCode = kotlin_kotlin.$_$.c8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var equals = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var stateKeeperDispatcher = kotlin_com_arkivanov_essenty_state_keeper.$_$.a;
  var instanceKeeperDispatcher = kotlin_com_arkivanov_essenty_instance_keeper.$_$.b;
  var backDispatcher = kotlin_com_arkivanov_essenty_back_handler.$_$.b;
  var AbstractList = kotlin_kotlin.$_$.y2;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.h;
  var emptySet = kotlin_kotlin.$_$.h4;
  var plus = kotlin_kotlin.$_$.s5;
  var minus = kotlin_kotlin.$_$.o5;
  var State_DESTROYED_getInstance = kotlin_com_arkivanov_essenty_lifecycle.$_$.p;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var toString = kotlin_kotlin.$_$.qa;
  var State_STARTED_getInstance = kotlin_com_arkivanov_essenty_lifecycle.$_$.r;
  var subscribe = kotlin_com_arkivanov_essenty_lifecycle.$_$.n;
  var Collection = kotlin_kotlin.$_$.g3;
  var isInterface = kotlin_kotlin.$_$.h8;
  var ObservableProperty = kotlin_kotlin.$_$.f9;
  var BackCallback = kotlin_com_arkivanov_essenty_back_handler.$_$.a;
  var Delegates_getInstance = kotlin_kotlin.$_$.r2;
  var toString_0 = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var onCreate = kotlin_com_arkivanov_essenty_lifecycle.$_$.a;
  var onStart = kotlin_com_arkivanov_essenty_lifecycle.$_$.d;
  var onResume = kotlin_com_arkivanov_essenty_lifecycle.$_$.c;
  var onPause = kotlin_com_arkivanov_essenty_lifecycle.$_$.b;
  var onStop = kotlin_com_arkivanov_essenty_lifecycle.$_$.e;
  var Callbacks = kotlin_com_arkivanov_essenty_lifecycle.$_$.f;
  var lifecycleRegistry = kotlin_com_arkivanov_essenty_lifecycle.$_$.g;
  var create = kotlin_com_arkivanov_essenty_lifecycle.$_$.h;
  var destroy = kotlin_com_arkivanov_essenty_lifecycle.$_$.i;
  var stop = kotlin_com_arkivanov_essenty_lifecycle.$_$.m;
  var start = kotlin_com_arkivanov_essenty_lifecycle.$_$.l;
  var pause = kotlin_com_arkivanov_essenty_lifecycle.$_$.j;
  var resume = kotlin_com_arkivanov_essenty_lifecycle.$_$.k;
  var State_CREATED_getInstance = kotlin_com_arkivanov_essenty_lifecycle.$_$.o;
  var State_RESUMED_getInstance = kotlin_com_arkivanov_essenty_lifecycle.$_$.q;
  var minOf = kotlin_kotlin.$_$.p6;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var Enum = kotlin_kotlin.$_$.ya;
  var getKClass = kotlin_kotlin.$_$.c;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ec;
  var Parcelable = kotlin_com_arkivanov_essenty_parcelable.$_$.b;
  var Instance = kotlin_com_arkivanov_essenty_instance_keeper.$_$.a;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var zip = kotlin_kotlin.$_$.n6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var asReversed = kotlin_kotlin.$_$.r3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var mapCapacity = kotlin_kotlin.$_$.k5;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var to = kotlin_kotlin.$_$.jc;
  var Pair = kotlin_kotlin.$_$.hb;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var listOf = kotlin_kotlin.$_$.i5;
  var emptyList = kotlin_kotlin.$_$.f4;
  var parcelableContainer = kotlin_com_arkivanov_essenty_parcelable.$_$.a;
  var firstOrNull = kotlin_kotlin.$_$.k4;
  var getOrNull = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var checkIndexOverflow = kotlin_kotlin.$_$.u3;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var consumeRequired = kotlin_com_arkivanov_essenty_parcelable.$_$.c;
  var List = kotlin_kotlin.$_$.h3;
  var last = kotlin_kotlin.$_$.f5;
  var dropLast = kotlin_kotlin.$_$.e4;
  var plus_0 = kotlin_kotlin.$_$.u5;
  var emptyMap = kotlin_kotlin.$_$.g4;
  var Map = kotlin_kotlin.$_$.j3;
  var plus_1 = kotlin_kotlin.$_$.r5;
  var minus_0 = kotlin_kotlin.$_$.m5;
  var get_js = kotlin_kotlin.$_$.j8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Child, 'Child', classMeta);
  setMetadataFor(Created, 'Created', classMeta, Child);
  setMetadataFor(Destroyed, 'Destroyed', classMeta, Child);
  setMetadataFor(DefaultComponentContext, 'DefaultComponentContext', classMeta);
  setMetadataFor(GettingList, 'GettingList', classMeta, AbstractList);
  setMetadataFor(Relay, 'Relay', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, ObservableProperty);
  setMetadataFor(DefaultChildBackHandler, 'DefaultChildBackHandler', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(CallbacksImpl, 'CallbacksImpl', classMeta, VOID, [Callbacks]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(MergedLifecycle, 'MergedLifecycle', classMeta);
  setMetadataFor(Created_0, 'Created', classMeta);
  setMetadataFor(Destroyed_0, 'Destroyed', classMeta);
  function invoke$default(configuration, savedState, instanceKeeperDispatcher, $super) {
    savedState = savedState === VOID ? null : savedState;
    instanceKeeperDispatcher = instanceKeeperDispatcher === VOID ? null : instanceKeeperDispatcher;
    return $super === VOID ? this.bk(configuration, savedState, instanceKeeperDispatcher) : $super.bk.call(this, configuration, savedState, instanceKeeperDispatcher);
  }
  setMetadataFor(ChildItemFactory, 'ChildItemFactory', interfaceMeta);
  setMetadataFor(Status, 'Status', classMeta, Enum);
  setMetadataFor(SavedState, 'SavedState', classMeta, VOID, [Parcelable]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(RetainedInstance, 'RetainedInstance', classMeta, VOID, [Instance]);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(ChildrenNavigator, 'ChildrenNavigator', classMeta);
  setMetadataFor(DefaultChildItemFactory, 'DefaultChildItemFactory', classMeta, VOID, [ChildItemFactory]);
  setMetadataFor(SimpleChildNavState, 'SimpleChildNavState', classMeta);
  setMetadataFor(SimpleNavigation, 'SimpleNavigation', classMeta);
  setMetadataFor(ChildSlot, 'ChildSlot', classMeta);
  setMetadataFor(SlotNavState, 'SlotNavState', classMeta);
  setMetadataFor(DefaultSlotNavigation, 'DefaultSlotNavigation', classMeta);
  setMetadataFor(Event, 'Event', classMeta);
  setMetadataFor(ChildStack, 'ChildStack', classMeta);
  setMetadataFor(StackSavedNavState, 'StackSavedNavState', classMeta, VOID, [Parcelable]);
  setMetadataFor(StackNavState, 'StackNavState', classMeta);
  setMetadataFor(DefaultStackNavigation, 'DefaultStackNavigation', classMeta);
  setMetadataFor(Event_0, 'Event', classMeta);
  setMetadataFor(Value, 'Value', classMeta);
  setMetadataFor(MutableValue, 'MutableValue', classMeta, Value);
  setMetadataFor(MutableValueImpl, 'MutableValueImpl', classMeta, MutableValue);
  setMetadataFor(MappedValue, 'MappedValue', classMeta, Value);
  setMetadataFor(Lock, 'Lock', classMeta);
  //endregion
  function Created(configuration, instance) {
    Child.call(this);
    this.di_1 = configuration;
    this.ei_1 = instance;
  }
  protoOf(Created).fi = function () {
    return this.ei_1;
  };
  protoOf(Created).f4 = function () {
    return this.di_1;
  };
  protoOf(Created).g4 = function () {
    return this.ei_1;
  };
  protoOf(Created).toString = function () {
    return 'Created(configuration=' + this.di_1 + ', instance=' + this.ei_1 + ')';
  };
  protoOf(Created).hashCode = function () {
    var result = hashCode(this.di_1);
    result = imul(result, 31) + hashCode(this.ei_1) | 0;
    return result;
  };
  protoOf(Created).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Created))
      return false;
    var tmp0_other_with_cast = other instanceof Created ? other : THROW_CCE();
    if (!equals(this.di_1, tmp0_other_with_cast.di_1))
      return false;
    if (!equals(this.ei_1, tmp0_other_with_cast.ei_1))
      return false;
    return true;
  };
  function Destroyed(configuration) {
    Child.call(this);
    this.gi_1 = configuration;
    this.hi_1 = null;
  }
  protoOf(Destroyed).fi = function () {
    return this.hi_1;
  };
  protoOf(Destroyed).toString = function () {
    return 'Destroyed(configuration=' + this.gi_1 + ')';
  };
  protoOf(Destroyed).hashCode = function () {
    return hashCode(this.gi_1);
  };
  protoOf(Destroyed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Destroyed))
      return false;
    var tmp0_other_with_cast = other instanceof Destroyed ? other : THROW_CCE();
    if (!equals(this.gi_1, tmp0_other_with_cast.gi_1))
      return false;
    return true;
  };
  function Child() {
  }
  function DefaultComponentContext_init_$Init$(lifecycle, $this) {
    DefaultComponentContext.call($this, lifecycle, null, null, null);
    return $this;
  }
  function DefaultComponentContext_init_$Create$(lifecycle) {
    return DefaultComponentContext_init_$Init$(lifecycle, objectCreate(protoOf(DefaultComponentContext)));
  }
  function DefaultComponentContext(lifecycle, stateKeeper, instanceKeeper, backHandler) {
    stateKeeper = stateKeeper === VOID ? null : stateKeeper;
    instanceKeeper = instanceKeeper === VOID ? null : instanceKeeper;
    backHandler = backHandler === VOID ? null : backHandler;
    this.ii_1 = lifecycle;
    var tmp = this;
    var tmp0_elvis_lhs = stateKeeper;
    tmp.ji_1 = tmp0_elvis_lhs == null ? stateKeeperDispatcher() : tmp0_elvis_lhs;
    var tmp_0 = this;
    var tmp0_elvis_lhs_0 = instanceKeeper;
    tmp_0.ki_1 = tmp0_elvis_lhs_0 == null ? attachTo(instanceKeeperDispatcher(), this.ii_1) : tmp0_elvis_lhs_0;
    var tmp_1 = this;
    var tmp0_elvis_lhs_1 = backHandler;
    tmp_1.li_1 = tmp0_elvis_lhs_1 == null ? backDispatcher() : tmp0_elvis_lhs_1;
  }
  protoOf(DefaultComponentContext).mi = function () {
    return this.ii_1;
  };
  protoOf(DefaultComponentContext).ni = function () {
    return this.ji_1;
  };
  protoOf(DefaultComponentContext).oi = function () {
    return this.ki_1;
  };
  protoOf(DefaultComponentContext).pi = function () {
    return this.li_1;
  };
  function GettingList(size, get) {
    AbstractList.call(this);
    this.qi_1 = size;
    this.ri_1 = get;
  }
  protoOf(GettingList).f = function () {
    return this.qi_1;
  };
  protoOf(GettingList).g = function (index) {
    return this.ri_1(index);
  };
  function drainLoop($this) {
    while (true) {
      var value;
      var observersCopy;
      var tmp$ret$1;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp0_synchronized = $this.ti_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      if ($this.ui_1.l()) {
        $this.vi_1 = false;
        return Unit_getInstance();
      }
      value = $this.ui_1.f3();
      observersCopy = $this.wi_1;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = observersCopy.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.arkivanov.decompose.Relay.drainLoop.<anonymous>' call
        element(value);
      }
    }
  }
  function Relay(isMainThreadCheckEnabled) {
    isMainThreadCheckEnabled = isMainThreadCheckEnabled === VOID ? false : isMainThreadCheckEnabled;
    this.si_1 = isMainThreadCheckEnabled;
    ensureNeverFrozen(this);
    this.ti_1 = new Lock();
    this.ui_1 = ArrayDeque_init_$Create$();
    this.vi_1 = false;
    this.wi_1 = emptySet();
  }
  protoOf(Relay).xi = function (value) {
    if (this.si_1) {
      checkMainThread();
    }
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.ti_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    this.ui_1.e3(value);
    if (this.vi_1) {
      return Unit_getInstance();
    }
    this.vi_1 = true;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    drainLoop(this);
  };
  protoOf(Relay).yi = function (observer) {
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.ti_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp0_this = this;
    tmp0_this.wi_1 = plus(tmp0_this.wi_1, observer);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Relay).zi = function (observer) {
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.ti_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp0_this = this;
    tmp0_this.wi_1 = minus(tmp0_this.wi_1, observer);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  function get_isDestroyed(_this__u8e3s4) {
    return _this__u8e3s4.sg().equals(State_DESTROYED_getInstance());
  }
  function hashString(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_uniqueName(getKClassFromExpression(_this__u8e3s4));
    return '' + (tmp0_elvis_lhs == null ? getKClassFromExpression(_this__u8e3s4).ec() : tmp0_elvis_lhs) + '_' + toString(hashCode(_this__u8e3s4), 36);
  }
  function child(_this__u8e3s4, lifecycle) {
    lifecycle = lifecycle === VOID ? null : lifecycle;
    var handler = childBackHandler(_this__u8e3s4, false);
    if (lifecycle == null) {
      handler.sh(true);
      handler.aj();
    } else if (!get_isDestroyed(lifecycle)) {
      handler.sh(lifecycle.sg().l6(State_STARTED_getInstance()) >= 0);
      handler.aj();
      var tmp = child$lambda(handler);
      var tmp_0 = child$lambda_0(handler);
      subscribe(lifecycle, VOID, tmp, VOID, VOID, tmp_0, ChildBackHandler$stop$ref(handler));
    }
    return handler;
  }
  function childBackHandler(_this__u8e3s4, isEnabled) {
    isEnabled = isEnabled === VOID ? true : isEnabled;
    return new DefaultChildBackHandler(_this__u8e3s4, isEnabled);
  }
  function child$lambda($handler) {
    return function () {
      $handler.sh(true);
      return Unit_getInstance();
    };
  }
  function child$lambda_0($handler) {
    return function () {
      $handler.sh(false);
      return Unit_getInstance();
    };
  }
  function ChildBackHandler$stop$ref($boundThis) {
    var l = function () {
      $boundThis.bj();
      return Unit_getInstance();
    };
    l.callableName = 'stop';
    return l;
  }
  function updateParentCallbackEnabledState($this) {
    var tmp;
    if ($this.th()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = $this.ej_1;
        var tmp1_any = isEnabled$factory_1();
        var tmp_0;
        if (isInterface(tmp0_any, Collection)) {
          tmp_0 = tmp0_any.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_any.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          if (tmp1_any(element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    $this.dj_1.sh(tmp);
  }
  function onBack($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.lastOrNull' call
    var tmp0_lastOrNull = $this.ej_1;
    var tmp1_lastOrNull = isEnabled$factory_2();
    var last = null;
    var tmp0_iterator = tmp0_lastOrNull.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      if (tmp1_lastOrNull(element)) {
        last = element;
      }
    }
    tmp$ret$0 = last;
    var tmp0_safe_receiver = tmp$ret$0;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.arkivanov.decompose.backhandler.DefaultChildBackHandler.onBack.<anonymous>' call
      tmp0_safe_receiver.wh();
      tmp$ret$1 = tmp0_safe_receiver;
    }
  }
  function DefaultChildBackHandler$onBack$ref($boundThis) {
    var l = function () {
      onBack($boundThis);
      return Unit_getInstance();
    };
    l.callableName = 'onBack';
    return l;
  }
  function DefaultChildBackHandler$enabledChangedListener$lambda(this$0) {
    return function (it) {
      updateParentCallbackEnabledState(this$0);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($isEnabled, this$0) {
    this.jj_1 = this$0;
    ObservableProperty.call(this, $isEnabled);
  }
  protoOf(_no_name_provided__qut3iv).ph = function (property, oldValue, newValue) {
    return updateParentCallbackEnabledState(this.jj_1);
  };
  protoOf(_no_name_provided__qut3iv).o6 = function (property, oldValue, newValue) {
    var tmp = (!(oldValue == null) ? typeof oldValue === 'boolean' : false) ? oldValue : THROW_CCE();
    return this.ph(property, tmp, (!(newValue == null) ? typeof newValue === 'boolean' : false) ? newValue : THROW_CCE());
  };
  function DefaultChildBackHandler(parent, isEnabled) {
    this.cj_1 = parent;
    var tmp = this;
    tmp.dj_1 = BackCallback(false, DefaultChildBackHandler$onBack$ref(this));
    this.ej_1 = emptySet();
    var tmp_0 = this;
    tmp_0.fj_1 = DefaultChildBackHandler$enabledChangedListener$lambda(this);
    var tmp_1 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.properties.Delegates.observable' call
    var tmp0_observable = Delegates_getInstance();
    tmp$ret$0 = new _no_name_provided__qut3iv(isEnabled, this);
    tmp_1.gj_1 = tmp$ret$0;
    this.hj_1 = false;
  }
  protoOf(DefaultChildBackHandler).sh = function (_set____db54di) {
    return this.gj_1.s6(this, isEnabled$factory(), _set____db54di);
  };
  protoOf(DefaultChildBackHandler).th = function () {
    return this.gj_1.q6(this, isEnabled$factory_0());
  };
  protoOf(DefaultChildBackHandler).aj = function () {
    if (!this.hj_1) {
      this.hj_1 = true;
      this.cj_1.bi(this.dj_1);
    }
  };
  protoOf(DefaultChildBackHandler).bj = function () {
    if (this.hj_1) {
      this.hj_1 = false;
      this.cj_1.ci(this.dj_1);
    }
  };
  protoOf(DefaultChildBackHandler).bi = function (callback) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.ej_1.m(callback);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.backhandler.DefaultChildBackHandler.register.<anonymous>' call
      tmp$ret$0 = 'Callback is already registered';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp0_this = this;
    tmp0_this.ej_1 = plus(tmp0_this.ej_1, callback);
    callback.uh(this.fj_1);
    updateParentCallbackEnabledState(this);
  };
  protoOf(DefaultChildBackHandler).ci = function (callback) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.ej_1.m(callback);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.backhandler.DefaultChildBackHandler.unregister.<anonymous>' call
      tmp$ret$0 = 'Callback is not registered';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    callback.vh(this.fj_1);
    var tmp0_this = this;
    tmp0_this.ej_1 = minus(tmp0_this.ej_1, callback);
    updateParentCallbackEnabledState(this);
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
  function isEnabled$factory_1() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.th();
    }, function (receiver, value) {
      return receiver.sh(value);
    });
  }
  function isEnabled$factory_2() {
    return getPropertyCallableRef('isEnabled', 1, KMutableProperty1, function (receiver) {
      return receiver.th();
    }, function (receiver, value) {
      return receiver.sh(value);
    });
  }
  function attachTo(_this__u8e3s4, lifecycle) {
    // Inline function 'com.arkivanov.essenty.lifecycle.doOnDestroy' call
    lifecycle.lg(new _no_name_provided__qut3iv_0(_this__u8e3s4));
    return _this__u8e3s4;
  }
  function _no_name_provided__qut3iv_0($this_attachTo) {
    this.kj_1 = $this_attachTo;
  }
  protoOf(_no_name_provided__qut3iv_0).kg = function () {
    this.kj_1.mh();
  };
  function MergedLifecycle_init_$Init$(lifecycle1, lifecycle2, $this) {
    MergedLifecycle.call($this, lifecycleRegistry(), lifecycle1, lifecycle2);
    return $this;
  }
  function MergedLifecycle_init_$Create$(lifecycle1, lifecycle2) {
    return MergedLifecycle_init_$Init$(lifecycle1, lifecycle2, objectCreate(protoOf(MergedLifecycle)));
  }
  function moveTo($this, state) {
    var tmp0_subject = state;
    var tmp0 = tmp0_subject.k6_1;
    switch (tmp0) {
      case 0:
        moveToDestroyed($this);
        ;
        break;
      case 1:
        ;
        break;
      case 2:
        moveToCreated($this);
        ;
        break;
      case 3:
        moveToStarted($this);
        ;
        break;
      case 4:
        moveToResumed($this);
        ;
        break;
    }
  }
  function moveToDestroyed($this) {
    var tmp0_subject = $this.lj_1.sg();
    var tmp0 = tmp0_subject.k6_1;
    switch (tmp0) {
      case 0:
        ;
        break;
      case 1:
        create($this.lj_1);
        destroy($this.lj_1);
        ;
        break;
      case 2:
      case 3:
      case 4:
        destroy($this.lj_1);
        ;
        break;
    }
  }
  function moveToCreated($this) {
    var tmp0_subject = $this.lj_1.sg();
    var tmp0 = tmp0_subject.k6_1;
    switch (tmp0) {
      case 0:
        ;
        break;
      case 1:
        create($this.lj_1);
        ;
        break;
      case 2:
        ;
        break;
      case 3:
      case 4:
        stop($this.lj_1);
        ;
        break;
    }
  }
  function moveToStarted($this) {
    var tmp0_subject = $this.lj_1.sg();
    var tmp0 = tmp0_subject.k6_1;
    switch (tmp0) {
      case 1:
      case 2:
        start($this.lj_1);
        ;
        break;
      case 4:
        pause($this.lj_1);
        ;
        break;
      case 0:
      case 3:
        ;
        break;
    }
  }
  function moveToResumed($this) {
    var tmp0_subject = $this.lj_1.sg();
    var tmp0 = tmp0_subject.k6_1;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        resume($this.lj_1);
        ;
        break;
      case 4:
      case 0:
        ;
        break;
    }
  }
  function CallbacksImpl(onStateChanged) {
    this.mj_1 = onStateChanged;
  }
  protoOf(CallbacksImpl).fg = function () {
    this.mj_1(State_CREATED_getInstance());
  };
  protoOf(CallbacksImpl).gg = function () {
    this.mj_1(State_STARTED_getInstance());
  };
  protoOf(CallbacksImpl).hg = function () {
    this.mj_1(State_RESUMED_getInstance());
  };
  protoOf(CallbacksImpl).ig = function () {
    this.mj_1(State_STARTED_getInstance());
  };
  protoOf(CallbacksImpl).jg = function () {
    this.mj_1(State_CREATED_getInstance());
  };
  protoOf(CallbacksImpl).kg = function () {
    this.mj_1(State_DESTROYED_getInstance());
  };
  function MergedLifecycle$lambda(this$0, $lifecycle2) {
    return function (state) {
      moveTo(this$0, minOf(state, $lifecycle2.sg()));
      return Unit_getInstance();
    };
  }
  function MergedLifecycle$lambda_0(this$0, $lifecycle1) {
    return function (state) {
      moveTo(this$0, minOf(state, $lifecycle1.sg()));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1($lifecycle1, $observer1, $lifecycle2, $observer2) {
    this.nj_1 = $lifecycle1;
    this.oj_1 = $observer1;
    this.pj_1 = $lifecycle2;
    this.qj_1 = $observer2;
  }
  protoOf(_no_name_provided__qut3iv_1).kg = function () {
    // Inline function 'com.arkivanov.decompose.lifecycle.MergedLifecycle.<anonymous>' call
    this.nj_1.vg(this.oj_1);
    this.pj_1.vg(this.qj_1);
  };
  function MergedLifecycle(registry, lifecycle1, lifecycle2) {
    this.lj_1 = registry;
    moveTo(this, minOf(lifecycle1.sg(), lifecycle2.sg()));
    if (!lifecycle1.sg().equals(State_DESTROYED_getInstance()) ? !lifecycle2.sg().equals(State_DESTROYED_getInstance()) : false) {
      var observer1 = new CallbacksImpl(MergedLifecycle$lambda(this, lifecycle2));
      var observer2 = new CallbacksImpl(MergedLifecycle$lambda_0(this, lifecycle1));
      lifecycle1.lg(observer1);
      lifecycle2.lg(observer2);
      // Inline function 'com.arkivanov.essenty.lifecycle.doOnDestroy' call
      var tmp0_doOnDestroy = this.lj_1;
      tmp0_doOnDestroy.lg(new _no_name_provided__qut3iv_1(lifecycle1, observer1, lifecycle2, observer2));
    }
  }
  protoOf(MergedLifecycle).sg = function () {
    return this.lj_1.sg();
  };
  protoOf(MergedLifecycle).lg = function (callbacks) {
    this.lj_1.lg(callbacks);
  };
  protoOf(MergedLifecycle).vg = function (callbacks) {
    this.lj_1.vg(callbacks);
  };
  function Created_0(configuration, instance, lifecycleRegistry, stateKeeperDispatcher, instanceKeeperDispatcher, backHandler) {
    this.rj_1 = configuration;
    this.sj_1 = instance;
    this.tj_1 = lifecycleRegistry;
    this.uj_1 = stateKeeperDispatcher;
    this.vj_1 = instanceKeeperDispatcher;
    this.wj_1 = backHandler;
  }
  protoOf(Created_0).xj = function () {
    return this.rj_1;
  };
  protoOf(Created_0).fi = function () {
    return this.sj_1;
  };
  protoOf(Created_0).toString = function () {
    return 'Created(configuration=' + this.rj_1 + ', instance=' + this.sj_1 + ', lifecycleRegistry=' + this.tj_1 + ', stateKeeperDispatcher=' + this.uj_1 + ', instanceKeeperDispatcher=' + this.vj_1 + ', backHandler=' + this.wj_1 + ')';
  };
  protoOf(Created_0).hashCode = function () {
    var result = hashCode(this.rj_1);
    result = imul(result, 31) + hashCode(this.sj_1) | 0;
    result = imul(result, 31) + hashCode(this.tj_1) | 0;
    result = imul(result, 31) + hashCode(this.uj_1) | 0;
    result = imul(result, 31) + hashCode(this.vj_1) | 0;
    result = imul(result, 31) + hashCode(this.wj_1) | 0;
    return result;
  };
  protoOf(Created_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Created_0))
      return false;
    var tmp0_other_with_cast = other instanceof Created_0 ? other : THROW_CCE();
    if (!equals(this.rj_1, tmp0_other_with_cast.rj_1))
      return false;
    if (!equals(this.sj_1, tmp0_other_with_cast.sj_1))
      return false;
    if (!equals(this.tj_1, tmp0_other_with_cast.tj_1))
      return false;
    if (!equals(this.uj_1, tmp0_other_with_cast.uj_1))
      return false;
    if (!equals(this.vj_1, tmp0_other_with_cast.vj_1))
      return false;
    if (!equals(this.wj_1, tmp0_other_with_cast.wj_1))
      return false;
    return true;
  };
  function Destroyed_0(configuration, savedState) {
    savedState = savedState === VOID ? null : savedState;
    this.yj_1 = configuration;
    this.zj_1 = savedState;
    this.ak_1 = null;
  }
  protoOf(Destroyed_0).xj = function () {
    return this.yj_1;
  };
  protoOf(Destroyed_0).fi = function () {
    return this.ak_1;
  };
  protoOf(Destroyed_0).toString = function () {
    return 'Destroyed(configuration=' + this.yj_1 + ', savedState=' + this.zj_1 + ')';
  };
  protoOf(Destroyed_0).hashCode = function () {
    var result = hashCode(this.yj_1);
    result = imul(result, 31) + (this.zj_1 == null ? 0 : hashCode(this.zj_1)) | 0;
    return result;
  };
  protoOf(Destroyed_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Destroyed_0))
      return false;
    var tmp0_other_with_cast = other instanceof Destroyed_0 ? other : THROW_CCE();
    if (!equals(this.yj_1, tmp0_other_with_cast.yj_1))
      return false;
    if (!equals(this.zj_1, tmp0_other_with_cast.zj_1))
      return false;
    return true;
  };
  function ChildItemFactory() {
  }
  var Status_DESTROYED_instance;
  var Status_INACTIVE_instance;
  var Status_ACTIVE_instance;
  var Status_entriesInitialized;
  function Status_initEntries() {
    if (Status_entriesInitialized)
      return Unit_getInstance();
    Status_entriesInitialized = true;
    Status_DESTROYED_instance = new Status('DESTROYED', 0);
    Status_INACTIVE_instance = new Status('INACTIVE', 1);
    Status_ACTIVE_instance = new Status('ACTIVE', 2);
  }
  function Status(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Status_INACTIVE_getInstance() {
    Status_initEntries();
    return Status_INACTIVE_instance;
  }
  function Status_ACTIVE_getInstance() {
    Status_initEntries();
    return Status_ACTIVE_instance;
  }
  function children(_this__u8e3s4, source, key, initialState, saveState, restoreState, navTransformer, stateMapper, onStateChanged, onEventComplete, backTransformer, childFactory) {
    var tmp;
    if (onStateChanged === VOID) {
      tmp = children$lambda;
    } else {
      tmp = onStateChanged;
    }
    onStateChanged = tmp;
    var tmp_0;
    if (onEventComplete === VOID) {
      tmp_0 = children$lambda_0;
    } else {
      tmp_0 = onEventComplete;
    }
    onEventComplete = tmp_0;
    var tmp_1;
    if (backTransformer === VOID) {
      tmp_1 = children$lambda_1;
    } else {
      tmp_1 = backTransformer;
    }
    backTransformer = tmp_1;
    var mainBackHandler = child(_this__u8e3s4.pi());
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.essenty.statekeeper.consume' call
    var tmp0_consume = _this__u8e3s4.ni();
    tmp$ret$0 = tmp0_consume.eh(key, getKClass(SavedState));
    var tmp1_let = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'com.arkivanov.decompose.router.children.children.<anonymous>' call
    var tmp0_safe_receiver = tmp1_let;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dk_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = restoreState(tmp1_safe_receiver);
      tmp_2 = tmp$ret$1;
    }
    var restoredNavState = tmp_2;
    var tmp_3 = _this__u8e3s4.mi();
    var tmp_4 = children$lambda_2(_this__u8e3s4, key);
    var tmp_5 = new DefaultChildItemFactory(_this__u8e3s4.mi(), child(_this__u8e3s4.pi()), childFactory);
    var tmp2_elvis_lhs = restoredNavState;
    var tmp_6 = tmp2_elvis_lhs == null ? initialState() : tmp2_elvis_lhs;
    var tmp3_safe_receiver = tmp1_let;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ek_1;
    var tmp_7;
    if (tmp4_safe_receiver == null) {
      tmp_7 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_8;
      var tmp$ret$2;
      // Inline function 'com.arkivanov.decompose.router.children.children.<anonymous>.<anonymous>' call
      tmp$ret$2 = restoredNavState == null;
      if (!tmp$ret$2) {
        tmp_8 = tmp4_safe_receiver;
      } else {
        tmp_8 = null;
      }
      tmp$ret$3 = tmp_8;
      tmp_7 = tmp$ret$3;
    }
    tmp$ret$4 = new ChildrenNavigator(tmp_3, tmp_4, tmp_5, tmp_6, tmp_7);
    tmp$ret$5 = tmp$ret$4;
    var navigator = tmp$ret$5;
    var tmp_9 = _this__u8e3s4.ni();
    tmp_9.fh(key, children$lambda_3(saveState, navigator));
    var state = MutableValue_0(stateMapper(navigator.gk_1, navigator.jk()));
    var bt = {_v: backTransformer(navigator.gk_1)};
    var backCallback = {_v: null};
    var tmp_10 = !(bt._v == null);
    backCallback._v = BackCallback(tmp_10, children$lambda_4(bt, navigator, backTransformer, backCallback, state, stateMapper, onStateChanged));
    var tmp_11;
    if (backCallback._v == null) {
      throwUninitializedPropertyAccessException('backCallback');
    } else {
      tmp_11 = backCallback._v;
    }
    mainBackHandler.bi(tmp_11);
    var eventObserver = children$lambda_5(navigator, navTransformer, onEventComplete, bt, backTransformer, backCallback, state, stateMapper, onStateChanged);
    source.yi(eventObserver);
    // Inline function 'com.arkivanov.essenty.lifecycle.doOnDestroy' call
    var tmp2_doOnDestroy = _this__u8e3s4.mi();
    tmp2_doOnDestroy.lg(new _no_name_provided__qut3iv_2(source, eventObserver, _this__u8e3s4, key, mainBackHandler, backCallback));
    onStateChanged(navigator.gk_1, null);
    return state;
  }
  function SavedState(navState, childState) {
    this.dk_1 = navState;
    this.ek_1 = childState;
  }
  function children$onAfterNavigate(bt, $backTransformer, backCallback, state, $stateMapper, navigator, $onStateChanged, newState, oldState) {
    bt._v = $backTransformer(newState);
    var tmp;
    if (backCallback._v == null) {
      throwUninitializedPropertyAccessException('backCallback');
    } else {
      tmp = backCallback._v;
    }
    tmp.sh(!(bt._v == null));
    state.kk($stateMapper(newState, navigator.jk()));
    $onStateChanged(newState, oldState);
  }
  function children$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function children$lambda_0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    return Unit_getInstance();
  }
  function children$lambda_1(it) {
    return null;
  }
  function children$lambda_2($this_children, $key) {
    return function (factory) {
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.instancekeeper.getOrCreate' call
      var tmp0_getOrCreate = $this_children.oi();
      var tmp = tmp0_getOrCreate.kh($key);
      var instance = (tmp == null ? true : isInterface(tmp, Instance)) ? tmp : THROW_CCE();
      if (instance == null) {
        instance = factory();
        tmp0_getOrCreate.lh($key, instance);
      }
      tmp$ret$0 = instance;
      return tmp$ret$0;
    };
  }
  function children$lambda_3($saveState, $navigator) {
    return function () {
      var tmp0_safe_receiver = $saveState($navigator.gk_1);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.router.children.children.<anonymous>.<anonymous>' call
        tmp$ret$0 = new SavedState(tmp0_safe_receiver, $navigator.lk());
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function children$lambda_4($bt, $navigator, $backTransformer, $backCallback, $state, $stateMapper, $onStateChanged) {
    return function () {
      var tmp0_safe_receiver = $bt._v;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.arkivanov.decompose.router.children.children.<anonymous>.<anonymous>' call
        var oldState = $navigator.gk_1;
        $navigator.mk(tmp1_safe_receiver);
        var newState = $navigator.gk_1;
        children$onAfterNavigate($bt, $backTransformer, $backCallback, $state, $stateMapper, $navigator, $onStateChanged, newState, oldState);
        tmp$ret$0 = tmp1_safe_receiver;
      }
      return Unit_getInstance();
    };
  }
  function children$lambda_5($navigator, $navTransformer, $onEventComplete, $bt, $backTransformer, $backCallback, $state, $stateMapper, $onStateChanged) {
    return function (event) {
      var oldState = $navigator.gk_1;
      $navigator.mk($navTransformer($navigator.gk_1, event));
      var newState = $navigator.gk_1;
      children$onAfterNavigate($bt, $backTransformer, $backCallback, $state, $stateMapper, $navigator, $onStateChanged, newState, oldState);
      $onEventComplete(event, newState, oldState);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_2($source, $eventObserver, $this_children, $key, $mainBackHandler, $backCallback) {
    this.nk_1 = $source;
    this.ok_1 = $eventObserver;
    this.pk_1 = $this_children;
    this.qk_1 = $key;
    this.rk_1 = $mainBackHandler;
    this.sk_1 = $backCallback;
  }
  protoOf(_no_name_provided__qut3iv_2).kg = function () {
    // Inline function 'com.arkivanov.decompose.router.children.children.<anonymous>' call
    this.nk_1.zi(this.ok_1);
    this.pk_1.ni().hh(this.qk_1);
    var tmp;
    if (this.sk_1._v == null) {
      throwUninitializedPropertyAccessException('backCallback');
    } else {
      tmp = this.sk_1._v;
    }
    this.rk_1.ci(tmp);
  };
  function restore($this, navState, savedStates) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = $this.ik_1.tk_1;
    var tmp1_associateByTo = HashMap_init_$Create$();
    var tmp2_associateByTo = configuration$factory();
    var tmp0_iterator = tmp0_associateByTo.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      tmp1_associateByTo.h4(tmp2_associateByTo(element), element);
    }
    tmp$ret$0 = tmp1_associateByTo;
    var retainedChildren = tmp$ret$0;
    $this.ik_1.tk_1.l3();
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = zip(navState.jk(), savedStates);
    var tmp0_iterator_0 = tmp3_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.restore.<anonymous>' call
      var childNavState = element_0.f4();
      var savedState = element_0.g4();
      var tmp0_this = $this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp2_plusAssign = tmp0_this.hk_1;
      var tmp1_subject = childNavState.uk();
      var tmp0 = tmp1_subject.k6_1;
      var tmp;
      switch (tmp0) {
        case 0:
          tmp = new Destroyed_0(childNavState.xj(), savedState);
          break;
        case 1:
          var tmp$ret$1;
          // Inline function 'kotlin.also' call
          var tmp_0 = childNavState.xj();
          var tmp2_safe_receiver = retainedChildren.s4(childNavState.xj());
          var tmp0_also = $this.fk_1.bk(tmp_0, savedState, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.vj_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.restore.<anonymous>.<anonymous>' call
          var tmp0_this_0 = $this.ik_1;
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = tmp0_this_0.tk_1;
          tmp0_plusAssign.a(tmp0_also);
          create(tmp0_also.tj_1);
          tmp$ret$1 = tmp0_also;

          tmp = tmp$ret$1;
          break;
        case 2:
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp_1 = childNavState.xj();
          var tmp3_safe_receiver = retainedChildren.s4(childNavState.xj());
          var tmp1_also = $this.fk_1.bk(tmp_1, savedState, tmp3_safe_receiver == null ? null : tmp3_safe_receiver.vj_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.restore.<anonymous>.<anonymous>' call
          tmp1_also.wj_1.aj();
          var tmp0_this_1 = $this.ik_1;
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign_0 = tmp0_this_1.tk_1;
          tmp0_plusAssign_0.a(tmp1_also);
          resume(tmp1_also.tj_1);
          tmp$ret$2 = tmp1_also;

          tmp = tmp$ret$2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp3_plusAssign = tmp;
      tmp2_plusAssign.a(tmp3_plusAssign);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp4_forEach = retainedChildren.s2();
    var tmp0_iterator_1 = tmp4_forEach.c();
    while (tmp0_iterator_1.d()) {
      var element_1 = tmp0_iterator_1.e();
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.restore.<anonymous>' call
      element_1.vj_1.mh();
    }
  }
  function destroy_0(_this__u8e3s4, $this) {
    _this__u8e3s4.wj_1.bj();
    destroy(_this__u8e3s4.tj_1);
    _this__u8e3s4.vj_1.mh();
  }
  function RetainedInstance() {
    this.tk_1 = ArrayList_init_$Create$();
  }
  protoOf(RetainedInstance).kg = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.tk_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.decompose.router.children.RetainedInstance.onDestroy.<anonymous>' call
      element.vj_1.mh();
    }
    this.tk_1.l3();
  };
  function ChildrenNavigator$retainedInstance$lambda() {
    return new RetainedInstance();
  }
  function _no_name_provided__qut3iv_3(this$0) {
    this.vk_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_3).kg = function () {
    // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = asReversed(this.vk_1.hk_1);
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.<anonymous>.<anonymous>' call
      var tmp0_subject = element;
      if (tmp0_subject instanceof Created_0) {
        element.wj_1.bj();
        destroy(element.tj_1);
      } else {
        if (tmp0_subject instanceof Destroyed_0)
        ;
      }
    }
  };
  function ChildrenNavigator(lifecycle, retainedInstanceSupplier, childItemFactory, navState, savedChildState) {
    this.fk_1 = childItemFactory;
    this.gk_1 = navState;
    this.hk_1 = ArrayList_init_$Create$();
    var tmp = this;
    var tmp_0 = retainedInstanceSupplier(ChildrenNavigator$retainedInstance$lambda);
    tmp.ik_1 = tmp_0 instanceof RetainedInstance ? tmp_0 : THROW_CCE();
    if (savedChildState == null) {
      this.ik_1.kg();
      this.wk(navState.jk());
    } else {
      restore(this, navState, savedChildState);
    }
    // Inline function 'com.arkivanov.essenty.lifecycle.doOnDestroy' call
    lifecycle.lg(new _no_name_provided__qut3iv_3(this));
  }
  protoOf(ChildrenNavigator).jk = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.hk_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.<get-children>.<anonymous>' call
      var instance = item.fi();
      var tmp;
      if (!(instance == null)) {
        tmp = new Created(item.xj(), instance);
      } else {
        tmp = new Destroyed(item.xj());
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(ChildrenNavigator).lk = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.hk_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.saveChildState.<anonymous>' call
      var tmp0_subject = item;
      var tmp;
      if (tmp0_subject instanceof Created_0) {
        tmp = item.uj_1.dh();
      } else {
        if (tmp0_subject instanceof Destroyed_0) {
          tmp = item.zj_1;
        } else {
          noWhenBranchMatchedException();
        }
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(ChildrenNavigator).mk = function (navState) {
    this.wk(navState.jk());
    this.gk_1 = navState;
  };
  protoOf(ChildrenNavigator).wk = function (newStates) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = HashSet_init_$Create$();
    var tmp1_mapTo = configuration$factory_0();
    var tmp0_iterator = newStates.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      tmp0_mapTo.a(tmp1_mapTo(item));
    }
    tmp$ret$0 = tmp0_mapTo;
    var newConfigurations = tmp$ret$0;
    // Inline function 'kotlin.check' call
    var tmp2_check = newConfigurations.f() === newStates.f();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.switch.<anonymous>' call
      tmp$ret$1 = 'Configurations must be unique';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp4_associateBy = this.hk_1;
    var tmp5_associateBy = configuration$factory_1();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp4_associateBy, 10)), 16);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp3_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator_0 = tmp4_associateBy.c();
    while (tmp0_iterator_0.d()) {
      var element = tmp0_iterator_0.e();
      tmp3_associateByTo.h4(tmp5_associateBy(element), element);
    }
    tmp$ret$2 = tmp3_associateByTo;
    tmp$ret$3 = tmp$ret$2;
    var oldItems = tmp$ret$3;
    var newItems = this.xk(newStates, oldItems);
    this.yk(newConfigurations, oldItems.s2());
    this.zk(newItems);
  };
  protoOf(ChildrenNavigator).xk = function (newStates, oldItems) {
    var newItems = ArrayList_init_$Create$_0(newStates.f());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = newStates.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.prepareNewItems.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var child = oldItems.q2(element.xj());
      var tmp;
      if (child instanceof Created_0) {
        tmp = to(child, element.uk());
      } else {
        if (child instanceof Destroyed_0) {
          var tmp0_subject = element.uk();
          var tmp0 = tmp0_subject.k6_1;
          var tmp_0;
          switch (tmp0) {
            case 0:
              tmp_0 = to(child, element.uk());
              break;
            case 1:
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              var tmp0_apply = this.fk_1.ck(element.xj(), child.zj_1);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.prepareNewItems.<anonymous>.<anonymous>' call
              create(tmp0_apply.tj_1);
              tmp$ret$0 = tmp0_apply;

              tmp_0 = new Pair(tmp$ret$0, element.uk());
              break;
            case 2:
              var tmp$ret$1;
              // Inline function 'kotlin.apply' call
              var tmp1_apply = this.fk_1.ck(element.xj(), child.zj_1);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.prepareNewItems.<anonymous>.<anonymous>' call
              create(tmp1_apply.tj_1);
              tmp$ret$1 = tmp1_apply;

              tmp_0 = new Pair(tmp$ret$1, element.uk());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        } else {
          if (child == null) {
            var tmp1_subject = element.uk();
            var tmp0_0 = tmp1_subject.k6_1;
            var tmp_1;
            switch (tmp0_0) {
              case 0:
                tmp_1 = to(new Destroyed_0(element.xj()), element.uk());
                break;
              case 1:
                var tmp$ret$2;
                // Inline function 'kotlin.apply' call
                var tmp2_apply = this.fk_1.ck(element.xj());
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.prepareNewItems.<anonymous>.<anonymous>' call
                create(tmp2_apply.tj_1);
                tmp$ret$2 = tmp2_apply;

                tmp_1 = new Pair(tmp$ret$2, element.uk());
                break;
              case 2:
                var tmp$ret$3;
                // Inline function 'kotlin.apply' call
                var tmp3_apply = this.fk_1.ck(element.xj());
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.prepareNewItems.<anonymous>.<anonymous>' call
                create(tmp3_apply.tj_1);
                tmp$ret$3 = tmp3_apply;

                tmp_1 = new Pair(tmp$ret$3, element.uk());
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }
            tmp = tmp_1;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp4_plusAssign = tmp;
      newItems.a(tmp4_plusAssign);
    }
    return newItems;
  };
  protoOf(ChildrenNavigator).yk = function (newConfigurations, oldItems) {
    var tmp0_iterator = oldItems.c();
    $l$loop: while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp1_elvis_lhs = item instanceof Created_0 ? item : null;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var child = tmp;
      if (!newConfigurations.m(item.xj())) {
        destroy_0(child, this);
      }
    }
  };
  protoOf(ChildrenNavigator).zk = function (newItems) {
    this.hk_1.l3();
    this.ik_1.tk_1.l3();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = newItems.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.processNewItems.<anonymous>' call
      var item = element.f4();
      var status = element.g4();
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp6_plusAssign = tmp0_this.hk_1;
      var tmp1_subject = item;
      var tmp;
      if (tmp1_subject instanceof Created_0) {
        var tmp2_subject = status;
        var tmp0 = tmp2_subject.k6_1;
        var tmp_0;
        switch (tmp0) {
          case 0:
            var savedState = item.uj_1.dh();
            destroy_0(item, this);
            tmp_0 = new Destroyed_0(item.xj(), savedState);
            break;
          case 1:
            var tmp3_this = this.ik_1;
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp0_plusAssign = tmp3_this.tk_1;
            var tmp1_plusAssign = item;
            tmp0_plusAssign.a(tmp1_plusAssign);

            var tmp$ret$1;
            // Inline function 'kotlin.takeIf' call
            var tmp2_takeIf = item;
            // Inline function 'kotlin.contracts.contract' call
            var tmp_1;
            var tmp$ret$0;
            // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.processNewItems.<anonymous>.<anonymous>' call
            tmp$ret$0 = !tmp2_takeIf.tj_1.sg().equals(State_CREATED_getInstance());
            if (tmp$ret$0) {
              tmp_1 = tmp2_takeIf;
            } else {
              tmp_1 = null;
            }
            tmp$ret$1 = tmp_1;

            var tmp4_safe_receiver = tmp$ret$1;
            var tmp_2;
            if (tmp4_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp$ret$2;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.processNewItems.<anonymous>.<anonymous>' call
              tmp4_safe_receiver.wj_1.bj();
              stop(tmp4_safe_receiver.tj_1);
              tmp$ret$2 = tmp4_safe_receiver;
              tmp_2 = tmp$ret$2;
            }

            var tmp5_elvis_lhs = tmp_2;
            tmp_0 = tmp5_elvis_lhs == null ? item : tmp5_elvis_lhs;
            break;
          case 2:
            var tmp6_this = this.ik_1;
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp3_plusAssign = tmp6_this.tk_1;
            var tmp4_plusAssign = item;
            tmp3_plusAssign.a(tmp4_plusAssign);

            var tmp$ret$4;
            // Inline function 'kotlin.takeIf' call
            var tmp5_takeIf = item;
            // Inline function 'kotlin.contracts.contract' call
            var tmp_3;
            var tmp$ret$3;
            // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.processNewItems.<anonymous>.<anonymous>' call
            tmp$ret$3 = !tmp5_takeIf.tj_1.sg().equals(State_RESUMED_getInstance());
            if (tmp$ret$3) {
              tmp_3 = tmp5_takeIf;
            } else {
              tmp_3 = null;
            }
            tmp$ret$4 = tmp_3;

            var tmp7_safe_receiver = tmp$ret$4;
            var tmp_4;
            if (tmp7_safe_receiver == null) {
              tmp_4 = null;
            } else {
              var tmp$ret$5;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.arkivanov.decompose.router.children.ChildrenNavigator.processNewItems.<anonymous>.<anonymous>' call
              tmp7_safe_receiver.wj_1.aj();
              resume(tmp7_safe_receiver.tj_1);
              tmp$ret$5 = tmp7_safe_receiver;
              tmp_4 = tmp$ret$5;
            }

            var tmp8_elvis_lhs = tmp_4;
            tmp_0 = tmp8_elvis_lhs == null ? item : tmp8_elvis_lhs;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      } else {
        if (tmp1_subject instanceof Destroyed_0) {
          tmp = item;
        } else {
          noWhenBranchMatchedException();
        }
      }
      var tmp7_plusAssign = tmp;
      tmp6_plusAssign.a(tmp7_plusAssign);
    }
  };
  function configuration$factory() {
    return getPropertyCallableRef('configuration', 1, KProperty1, function (receiver) {
      return receiver.rj_1;
    }, null);
  }
  function configuration$factory_0() {
    return getPropertyCallableRef('configuration', 1, KProperty1, function (receiver) {
      return receiver.xj();
    }, null);
  }
  function configuration$factory_1() {
    return getPropertyCallableRef('configuration', 1, KProperty1, function (receiver) {
      return receiver.xj();
    }, null);
  }
  function DefaultChildItemFactory(lifecycle, backHandler, childFactory) {
    this.al_1 = lifecycle;
    this.bl_1 = backHandler;
    this.cl_1 = childFactory;
  }
  protoOf(DefaultChildItemFactory).bk = function (configuration, savedState, instanceKeeperDispatcher_0) {
    var componentLifecycleRegistry = lifecycleRegistry();
    var mergedLifecycle = MergedLifecycle_init_$Create$(this.al_1, componentLifecycleRegistry);
    var stateKeeperDispatcher_0 = stateKeeperDispatcher(savedState);
    var tmp0_elvis_lhs = instanceKeeperDispatcher_0;
    var instanceKeeperRegistry = tmp0_elvis_lhs == null ? instanceKeeperDispatcher() : tmp0_elvis_lhs;
    var backHandler = childBackHandler(this.bl_1);
    var component = this.cl_1(configuration, new DefaultComponentContext(mergedLifecycle, stateKeeperDispatcher_0, instanceKeeperRegistry, backHandler));
    return new Created_0(configuration, component, componentLifecycleRegistry, stateKeeperDispatcher_0, instanceKeeperRegistry, backHandler);
  };
  function SimpleChildNavState(configuration, status) {
    this.dl_1 = configuration;
    this.el_1 = status;
  }
  protoOf(SimpleChildNavState).xj = function () {
    return this.dl_1;
  };
  protoOf(SimpleChildNavState).uk = function () {
    return this.el_1;
  };
  protoOf(SimpleChildNavState).toString = function () {
    return 'SimpleChildNavState(configuration=' + this.dl_1 + ', status=' + this.el_1 + ')';
  };
  protoOf(SimpleChildNavState).hashCode = function () {
    var result = hashCode(this.dl_1);
    result = imul(result, 31) + this.el_1.hashCode() | 0;
    return result;
  };
  protoOf(SimpleChildNavState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleChildNavState))
      return false;
    var tmp0_other_with_cast = other instanceof SimpleChildNavState ? other : THROW_CCE();
    if (!equals(this.dl_1, tmp0_other_with_cast.dl_1))
      return false;
    if (!this.el_1.equals(tmp0_other_with_cast.el_1))
      return false;
    return true;
  };
  function SimpleNavigation() {
    this.fl_1 = new Relay(true);
  }
  protoOf(SimpleNavigation).yi = function (observer) {
    this.fl_1.yi(observer);
  };
  protoOf(SimpleNavigation).zi = function (observer) {
    this.fl_1.zi(observer);
  };
  protoOf(SimpleNavigation).gl = function (event) {
    this.fl_1.xi(event);
  };
  function ChildSlot(child) {
    child = child === VOID ? null : child;
    this.hl_1 = child;
  }
  protoOf(ChildSlot).toString = function () {
    return 'ChildSlot(child=' + this.hl_1 + ')';
  };
  protoOf(ChildSlot).hashCode = function () {
    return this.hl_1 == null ? 0 : this.hl_1.hashCode();
  };
  protoOf(ChildSlot).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildSlot))
      return false;
    var tmp0_other_with_cast = other instanceof ChildSlot ? other : THROW_CCE();
    if (!equals(this.hl_1, tmp0_other_with_cast.hl_1))
      return false;
    return true;
  };
  function childSlot(_this__u8e3s4, source, configurationClass, key, initialConfiguration, persistent, handleBackButton, childFactory) {
    key = key === VOID ? 'DefaultChildSlot' : key;
    var tmp;
    if (initialConfiguration === VOID) {
      tmp = childSlot$lambda;
    } else {
      tmp = initialConfiguration;
    }
    initialConfiguration = tmp;
    persistent = persistent === VOID ? true : persistent;
    handleBackButton = handleBackButton === VOID ? false : handleBackButton;
    var tmp_0 = childSlot$lambda_0(persistent);
    return childSlot_0(_this__u8e3s4, source, tmp_0, childSlot$lambda_1(configurationClass), key, initialConfiguration, handleBackButton, childFactory);
  }
  function childSlot_0(_this__u8e3s4, source, saveConfiguration, restoreConfiguration, key, initialConfiguration, handleBackButton, childFactory) {
    key = key === VOID ? 'DefaultChildSlot' : key;
    var tmp;
    if (initialConfiguration === VOID) {
      tmp = childSlot$lambda_2;
    } else {
      tmp = initialConfiguration;
    }
    initialConfiguration = tmp;
    handleBackButton = handleBackButton === VOID ? false : handleBackButton;
    var tmp_0 = childSlot$lambda_3(initialConfiguration);
    var tmp_1 = childSlot$lambda_4(saveConfiguration);
    var tmp_2 = childSlot$lambda_5(restoreConfiguration);
    var tmp_3 = childSlot$lambda_6;
    var tmp_4 = childSlot$lambda_7;
    var tmp_5 = childSlot$lambda_8;
    return children(_this__u8e3s4, source, key, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, VOID, tmp_5, childSlot$lambda_9(handleBackButton), childFactory);
  }
  function SlotNavState(configuration) {
    this.il_1 = configuration;
    var tmp = this;
    var tmp_0;
    if (this.il_1 == null) {
      tmp_0 = emptyList();
    } else {
      tmp_0 = listOf(new SimpleChildNavState(this.il_1, Status_ACTIVE_getInstance()));
    }
    tmp.jl_1 = tmp_0;
  }
  protoOf(SlotNavState).jk = function () {
    return this.jl_1;
  };
  protoOf(SlotNavState).toString = function () {
    return 'SlotNavState(configuration=' + this.il_1 + ')';
  };
  protoOf(SlotNavState).hashCode = function () {
    return this.il_1 == null ? 0 : hashCode(this.il_1);
  };
  protoOf(SlotNavState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SlotNavState))
      return false;
    var tmp0_other_with_cast = other instanceof SlotNavState ? other : THROW_CCE();
    if (!equals(this.il_1, tmp0_other_with_cast.il_1))
      return false;
    return true;
  };
  function childSlot$lambda() {
    return null;
  }
  function childSlot$lambda_0($persistent) {
    return function (it) {
      return $persistent ? parcelableContainer(it) : null;
    };
  }
  function childSlot$lambda_1($configurationClass) {
    return function (it) {
      return it.wg($configurationClass);
    };
  }
  function childSlot$lambda_2() {
    return null;
  }
  function childSlot$lambda_3($initialConfiguration) {
    return function () {
      return new SlotNavState($initialConfiguration());
    };
  }
  function childSlot$lambda_4($saveConfiguration) {
    return function (it) {
      return $saveConfiguration(it.il_1);
    };
  }
  function childSlot$lambda_5($restoreConfiguration) {
    return function (it) {
      return new SlotNavState($restoreConfiguration(it));
    };
  }
  function childSlot$lambda_6(state, event) {
    return new SlotNavState(event.kl_1(state.il_1));
  }
  function childSlot$lambda_7(_anonymous_parameter_0__qggqh8, children) {
    var tmp = firstOrNull(children);
    return new ChildSlot((tmp == null ? true : tmp instanceof Created) ? tmp : null);
  }
  function childSlot$lambda_8(event, newState, oldState) {
    event.ll_1(newState.il_1, oldState.il_1);
    return Unit_getInstance();
  }
  function childSlot$lambda$lambda() {
    return new SlotNavState(null);
  }
  function childSlot$lambda_9($handleBackButton) {
    return function (state) {
      var tmp;
      if ($handleBackButton ? !(state.il_1 == null) : false) {
        tmp = childSlot$lambda$lambda;
      } else {
        tmp = null;
      }
      return tmp;
    };
  }
  function DefaultSlotNavigation() {
    this.ml_1 = new Relay(true);
  }
  protoOf(DefaultSlotNavigation).nl = function (transformer, onComplete) {
    this.ml_1.xi(new Event(transformer, onComplete));
  };
  protoOf(DefaultSlotNavigation).ol = function (observer) {
    this.ml_1.yi(observer);
  };
  protoOf(DefaultSlotNavigation).yi = function (observer) {
    return this.ol(observer);
  };
  protoOf(DefaultSlotNavigation).pl = function (observer) {
    this.ml_1.zi(observer);
  };
  protoOf(DefaultSlotNavigation).zi = function (observer) {
    return this.pl(observer);
  };
  function SlotNavigation() {
    return new DefaultSlotNavigation();
  }
  function SlotNavigationSource$Event$_init_$lambda_3tv854(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function Event(transformer, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = SlotNavigationSource$Event$_init_$lambda_3tv854;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    this.kl_1 = transformer;
    this.ll_1 = onComplete;
  }
  function dismiss(_this__u8e3s4, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = dismiss$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = dismiss$lambda_0;
    _this__u8e3s4.nl(tmp_0, dismiss$lambda_1(onComplete));
  }
  function activate(_this__u8e3s4, configuration, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = activate$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = activate$lambda_0(configuration);
    _this__u8e3s4.nl(tmp_0, activate$lambda_1(onComplete));
  }
  function dismiss$lambda(it) {
    return Unit_getInstance();
  }
  function dismiss$lambda_0(it) {
    return null;
  }
  function dismiss$lambda_1($onComplete) {
    return function (_anonymous_parameter_0__qggqh8, oldConfiguration) {
      $onComplete(!(oldConfiguration == null));
      return Unit_getInstance();
    };
  }
  function activate$lambda() {
    return Unit_getInstance();
  }
  function activate$lambda_0($configuration) {
    return function (it) {
      return $configuration;
    };
  }
  function activate$lambda_1($onComplete) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      $onComplete();
      return Unit_getInstance();
    };
  }
  function ChildStack$items$lambda(this$0) {
    return function (index) {
      var tmp0_elvis_lhs = getOrNull(this$0.rl_1, index);
      return tmp0_elvis_lhs == null ? this$0.ql_1 : tmp0_elvis_lhs;
    };
  }
  function ChildStack(active, backStack) {
    backStack = backStack === VOID ? emptyList() : backStack;
    this.ql_1 = active;
    this.rl_1 = backStack;
    var tmp = this;
    var tmp_0 = this.rl_1.f() + 1 | 0;
    tmp.sl_1 = new GettingList(tmp_0, ChildStack$items$lambda(this));
  }
  protoOf(ChildStack).toString = function () {
    return 'ChildStack(active=' + this.ql_1 + ', backStack=' + this.rl_1 + ')';
  };
  protoOf(ChildStack).hashCode = function () {
    var result = this.ql_1.hashCode();
    result = imul(result, 31) + hashCode(this.rl_1) | 0;
    return result;
  };
  protoOf(ChildStack).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildStack))
      return false;
    var tmp0_other_with_cast = other instanceof ChildStack ? other : THROW_CCE();
    if (!this.ql_1.equals(tmp0_other_with_cast.ql_1))
      return false;
    if (!equals(this.rl_1, tmp0_other_with_cast.rl_1))
      return false;
    return true;
  };
  function childStack(_this__u8e3s4, source, initialStack, configurationClass, key, persistent, handleBackButton, childFactory) {
    key = key === VOID ? 'DefaultChildStack' : key;
    persistent = persistent === VOID ? true : persistent;
    handleBackButton = handleBackButton === VOID ? false : handleBackButton;
    var tmp = childStack$lambda(persistent);
    return childStack_0(_this__u8e3s4, source, initialStack, tmp, childStack$lambda_0(configurationClass), key, handleBackButton, childFactory);
  }
  function childStack_0(_this__u8e3s4, source, initialStack, saveStack, restoreStack, key, handleBackButton, childFactory) {
    key = key === VOID ? 'DefaultChildStack' : key;
    handleBackButton = handleBackButton === VOID ? false : handleBackButton;
    var tmp = childStack$lambda_1(initialStack);
    var tmp_0 = childStack$lambda_2(saveStack);
    var tmp_1 = childStack$lambda_3(restoreStack, initialStack);
    var tmp_2 = childStack$lambda_4;
    var tmp_3 = childStack$lambda_5;
    var tmp_4 = childStack$lambda_6;
    return children(_this__u8e3s4, source, key, tmp, tmp_0, tmp_1, tmp_2, tmp_3, VOID, tmp_4, childStack$lambda_7(handleBackButton), childFactory);
  }
  function StackSavedNavState(configurations) {
    this.tl_1 = configurations;
  }
  function StackNavState(configurations) {
    this.ul_1 = configurations;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.ul_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    var tmp1_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.decompose.router.stack.StackNavState.<anonymous>' call
      tmp$ret$1 = 'Configuration stack must not be empty';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp1_mapIndexed = this.ul_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_mapIndexed, 10));
    var index = 0;
    var tmp0_iterator = tmp1_mapIndexed.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$2;
      // Inline function 'com.arkivanov.decompose.router.stack.StackNavState.children.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      tmp$ret$2 = new SimpleChildNavState(item, tmp2__anonymous__z9zvc9 === get_lastIndex(this.ul_1) ? Status_ACTIVE_getInstance() : Status_INACTIVE_getInstance());
      tmp0_mapIndexedTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapIndexedTo;
    tmp$ret$4 = tmp$ret$3;
    tmp.vl_1 = tmp$ret$4;
  }
  protoOf(StackNavState).jk = function () {
    return this.vl_1;
  };
  protoOf(StackNavState).toString = function () {
    return 'StackNavState(configurations=' + this.ul_1 + ')';
  };
  protoOf(StackNavState).hashCode = function () {
    return hashCode(this.ul_1);
  };
  protoOf(StackNavState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StackNavState))
      return false;
    var tmp0_other_with_cast = other instanceof StackNavState ? other : THROW_CCE();
    if (!equals(this.ul_1, tmp0_other_with_cast.ul_1))
      return false;
    return true;
  };
  function childStack$lambda($persistent) {
    return function (stack) {
      var tmp;
      if ($persistent) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(stack, 10));
        var tmp0_iterator = stack.c();
        while (tmp0_iterator.d()) {
          var item = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'com.arkivanov.decompose.router.stack.childStack.<anonymous>.<anonymous>' call
          tmp$ret$0 = parcelableContainer(item);
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = parcelableContainer(new StackSavedNavState(tmp$ret$2));
      } else {
        tmp = null;
      }
      return tmp;
    };
  }
  function childStack$lambda_0($configurationClass) {
    return function (container) {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.parcelable.consumeRequired' call
      tmp$ret$0 = consumeRequired(container, getKClass(StackSavedNavState));
      var tmp1_map = tmp$ret$0.tl_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator = tmp1_map.c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'com.arkivanov.decompose.router.stack.childStack.<anonymous>.<anonymous>' call
        tmp$ret$1 = consumeRequired(item, $configurationClass);
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      return tmp$ret$3;
    };
  }
  function childStack$lambda_1($initialStack) {
    return function () {
      return new StackNavState($initialStack());
    };
  }
  function childStack$lambda_2($saveStack) {
    return function (it) {
      return $saveStack(it.ul_1);
    };
  }
  function childStack$lambda_3($restoreStack, $initialStack) {
    return function (container) {
      var tmp0_elvis_lhs = $restoreStack(container);
      return new StackNavState(tmp0_elvis_lhs == null ? $initialStack() : tmp0_elvis_lhs);
    };
  }
  function childStack$lambda_4(state, event) {
    return new StackNavState(event.wl_1(state.ul_1));
  }
  function childStack$lambda_5(_anonymous_parameter_0__qggqh8, children) {
    var createdChildren = isInterface(children, List) ? children : THROW_CCE();
    return new ChildStack(last(createdChildren), dropLast(createdChildren, 1));
  }
  function childStack$lambda_6(event, newState, oldState) {
    event.xl_1(newState.ul_1, oldState.ul_1);
    return Unit_getInstance();
  }
  function childStack$lambda$lambda($state) {
    return function () {
      return new StackNavState(dropLast($state.ul_1, 1));
    };
  }
  function childStack$lambda_7($handleBackButton) {
    return function (state) {
      var tmp;
      if ($handleBackButton ? state.ul_1.f() > 1 : false) {
        tmp = childStack$lambda$lambda(state);
      } else {
        tmp = null;
      }
      return tmp;
    };
  }
  function DefaultStackNavigation() {
    this.yl_1 = new Relay(true);
  }
  protoOf(DefaultStackNavigation).zl = function (transformer, onComplete) {
    this.yl_1.xi(new Event_0(transformer, onComplete));
  };
  protoOf(DefaultStackNavigation).am = function (observer) {
    this.yl_1.yi(observer);
  };
  protoOf(DefaultStackNavigation).yi = function (observer) {
    return this.am(observer);
  };
  protoOf(DefaultStackNavigation).bm = function (observer) {
    this.yl_1.zi(observer);
  };
  protoOf(DefaultStackNavigation).zi = function (observer) {
    return this.bm(observer);
  };
  function StackNavigation() {
    return new DefaultStackNavigation();
  }
  function StackNavigationSource$Event$_init_$lambda_w6vge(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function Event_0(transformer, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = StackNavigationSource$Event$_init_$lambda_w6vge;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    this.wl_1 = transformer;
    this.xl_1 = onComplete;
  }
  function bringToFront(_this__u8e3s4, configuration, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = bringToFront$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = bringToFront$lambda_0(configuration);
    _this__u8e3s4.zl(tmp_0, bringToFront$lambda_1(onComplete));
  }
  function push(_this__u8e3s4, configuration, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = push$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = push$lambda_0(configuration);
    _this__u8e3s4.zl(tmp_0, push$lambda_1(onComplete));
  }
  function pop(_this__u8e3s4, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = pop$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = pop$lambda_0;
    _this__u8e3s4.zl(tmp_0, pop$lambda_1(onComplete));
  }
  function navigate(_this__u8e3s4, transformer) {
    _this__u8e3s4.zl(transformer, navigate$lambda);
  }
  function replaceCurrent(_this__u8e3s4, configuration, onComplete) {
    var tmp;
    if (onComplete === VOID) {
      tmp = replaceCurrent$lambda;
    } else {
      tmp = onComplete;
    }
    onComplete = tmp;
    var tmp_0 = replaceCurrent$lambda_0(configuration);
    _this__u8e3s4.zl(tmp_0, replaceCurrent$lambda_1(onComplete));
  }
  function bringToFront$lambda() {
    return Unit_getInstance();
  }
  function bringToFront$lambda_0($configuration) {
    return function (stack) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterNot' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp0_filterNotTo = ArrayList_init_$Create$();
      var tmp0_iterator = stack.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.arkivanov.decompose.router.stack.bringToFront.<anonymous>.<anonymous>' call
        tmp$ret$0 = getKClassFromExpression(element).equals(getKClassFromExpression($configuration));
        if (!tmp$ret$0) {
          tmp0_filterNotTo.a(element);
        }
      }
      tmp$ret$1 = tmp0_filterNotTo;
      tmp$ret$2 = tmp$ret$1;
      return plus_0(tmp$ret$2, $configuration);
    };
  }
  function bringToFront$lambda_1($onComplete) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      $onComplete();
      return Unit_getInstance();
    };
  }
  function push$lambda() {
    return Unit_getInstance();
  }
  function push$lambda_0($configuration) {
    return function (it) {
      return plus_0(it, $configuration);
    };
  }
  function push$lambda_1($onComplete) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      $onComplete();
      return Unit_getInstance();
    };
  }
  function pop$lambda(it) {
    return Unit_getInstance();
  }
  function pop$lambda_0(stack) {
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.pop.<anonymous>.<anonymous>' call
    tmp$ret$0 = stack.f() > 1;
    if (tmp$ret$0) {
      tmp = stack;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : dropLast(tmp0_safe_receiver, 1);
    return tmp1_elvis_lhs == null ? stack : tmp1_elvis_lhs;
  }
  function pop$lambda_1($onComplete) {
    return function (newStack, oldStack) {
      $onComplete(newStack.f() < oldStack.f());
      return Unit_getInstance();
    };
  }
  function navigate$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function replaceCurrent$lambda() {
    return Unit_getInstance();
  }
  function replaceCurrent$lambda_0($configuration) {
    return function (it) {
      return plus_0(dropLast(it, 1), $configuration);
    };
  }
  function replaceCurrent$lambda_1($onComplete) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      $onComplete();
      return Unit_getInstance();
    };
  }
  function get_items(_this__u8e3s4) {
    return _this__u8e3s4.b2().sl_1;
  }
  function MutableValue() {
    Value.call(this);
  }
  function MutableValue_0(initialValue) {
    return new MutableValueImpl(initialValue);
  }
  function emit($this) {
    while (true) {
      var value;
      var observersCopy;
      var tmp$ret$1;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp0_synchronized = $this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      value = $this.em_1;
      observersCopy = $this.gm_1;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$2 = observersCopy.c2().c();
      var tmp0_iterator = tmp$ret$2;
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.emit.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$3 = element.z1();
        var observer = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$4 = element.b2();
        var isEnabled = tmp$ret$4;
        if (isEnabled) {
          observer(value);
        }
      }
      var tmp$ret$6;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp1_synchronized = $this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      var tmp;
      if (value === $this.em_1) {
        $this.fm_1 = false;
        return Unit_getInstance();
      }
      tmp$ret$5 = tmp;
      tmp$ret$6 = tmp$ret$5;
    }
  }
  function MutableValueImpl(initialValue) {
    MutableValue.call(this);
    ensureNeverFrozen(this);
    this.dm_1 = new Lock();
    this.em_1 = initialValue;
    this.fm_1 = false;
    this.gm_1 = emptyMap();
  }
  protoOf(MutableValueImpl).kk = function (value) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.setValue' call
      var tmp$ret$3;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp0_synchronized = this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.setValue.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.em_1;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      this.em_1 = value;
      if (this.fm_1) {
        tmp$ret$1 = true;
        break $l$block_0;
      }
      this.fm_1 = true;
      tmp$ret$2 = Unit_getInstance();
      tmp$ret$3 = tmp$ret$2;
      emit(this);
      tmp$ret$1 = true;
    }
  };
  protoOf(MutableValueImpl).b2 = function () {
    var tmp$ret$2;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.dm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.<get-value>.<anonymous>' call
    tmp$ret$0 = this.em_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(MutableValueImpl).cm = function (expected, new_0) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.setValue' call
      var tmp$ret$3;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp0_synchronized = this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.compareAndSet.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.em_1;
      tmp$ret$0 = tmp1__anonymous__uwfjfc === expected;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      this.em_1 = new_0;
      if (this.fm_1) {
        tmp$ret$1 = true;
        break $l$block_0;
      }
      this.fm_1 = true;
      tmp$ret$2 = Unit_getInstance();
      tmp$ret$3 = tmp$ret$2;
      emit(this);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  };
  protoOf(MutableValueImpl).yi = function (observer) {
    var tmp$ret$3;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.dm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.gm_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(observer);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.gm_1 = plus_1(tmp0_this.gm_1, to(observer, false));
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
    while (true) {
      var tmp$ret$6;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp1_synchronized = this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      var tmp$ret$4;
      // Inline function 'com.arkivanov.decompose.value.MutableValueImpl.subscribe.<anonymous>' call
      tmp$ret$4 = this.em_1;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var value = tmp$ret$6;
      observer(value);
      var tmp$ret$10;
      // Inline function 'com.arkivanov.decompose.synchronized' call
      var tmp2_synchronized = this.dm_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains_0 = this.gm_1;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$7 = (isInterface(tmp0_contains_0, Map) ? tmp0_contains_0 : THROW_CCE()).k2(observer);
      tmp$ret$8 = tmp$ret$7;
      if (!tmp$ret$8) {
        return Unit_getInstance();
      }
      var tmp;
      if (value === this.em_1) {
        var tmp0_this_0 = this;
        tmp0_this_0.gm_1 = plus_1(tmp0_this_0.gm_1, to(observer, true));
        return Unit_getInstance();
      }
      tmp$ret$9 = tmp;
      tmp$ret$10 = tmp$ret$9;
    }
  };
  protoOf(MutableValueImpl).zi = function (observer) {
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.dm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp0_this = this;
    tmp0_this.gm_1 = minus_0(tmp0_this.gm_1, observer);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  function update(_this__u8e3s4, function_0) {
    updateAndGet(_this__u8e3s4, function_0);
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var prevValue = _this__u8e3s4.b2();
      var nextValue = function_0(prevValue);
      if (_this__u8e3s4.cm(prevValue, nextValue)) {
        return nextValue;
      }
    }
  }
  function Value() {
  }
  function map(_this__u8e3s4, mapper) {
    return new MappedValue(_this__u8e3s4, mapper);
  }
  function mapCached($this, value) {
    var tmp$ret$2;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = $this.jm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.value.operator.MappedValue.mapCached.<anonymous>' call
    if (!(value === $this.km_1)) {
      $this.km_1 = value;
      $this.lm_1 = $this.im_1(value);
    }
    tmp$ret$0 = $this.lm_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function MappedValue$subscribe$lambda($observer, this$0) {
    return function (value) {
      $observer(mapCached(this$0, value));
      return Unit_getInstance();
    };
  }
  function MappedValue(upstream, mapper) {
    Value.call(this);
    this.hm_1 = upstream;
    this.im_1 = mapper;
    this.jm_1 = new Lock();
    this.km_1 = this.hm_1.b2();
    this.lm_1 = this.im_1(this.km_1);
    this.mm_1 = HashMap_init_$Create$();
  }
  protoOf(MappedValue).b2 = function () {
    return mapCached(this, this.hm_1.b2());
  };
  protoOf(MappedValue).nm = function (observer) {
    var upstreamObserver = MappedValue$subscribe$lambda(observer, this);
    var tmp$ret$3;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.jm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.mm_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(observer);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      return Unit_getInstance();
    }
    var tmp1_set = this.mm_1;
    tmp1_set.h4(observer, upstreamObserver);
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
    this.hm_1.yi(upstreamObserver);
  };
  protoOf(MappedValue).yi = function (observer) {
    return this.nm(observer);
  };
  protoOf(MappedValue).om = function (observer) {
    var tmp$ret$2;
    // Inline function 'com.arkivanov.decompose.synchronized' call
    var tmp0_synchronized = this.jm_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.decompose.Lock.synchronizedImpl' call
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.value.operator.MappedValue.unsubscribe.<anonymous>' call
    tmp$ret$0 = this.mm_1.s4(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var upstreamObserver = tmp;
    this.hm_1.zi(upstreamObserver);
  };
  protoOf(MappedValue).zi = function (observer) {
    return this.om(observer);
  };
  function Lock() {
  }
  function get_uniqueName(_this__u8e3s4) {
    return get_js(_this__u8e3s4).name;
  }
  function checkMainThread() {
  }
  function ensureNeverFrozen(_this__u8e3s4) {
  }
  //region block: post-declaration
  protoOf(_no_name_provided__qut3iv_0).fg = onCreate;
  protoOf(_no_name_provided__qut3iv_0).gg = onStart;
  protoOf(_no_name_provided__qut3iv_0).hg = onResume;
  protoOf(_no_name_provided__qut3iv_0).ig = onPause;
  protoOf(_no_name_provided__qut3iv_0).jg = onStop;
  protoOf(_no_name_provided__qut3iv_1).fg = onCreate;
  protoOf(_no_name_provided__qut3iv_1).gg = onStart;
  protoOf(_no_name_provided__qut3iv_1).hg = onResume;
  protoOf(_no_name_provided__qut3iv_1).ig = onPause;
  protoOf(_no_name_provided__qut3iv_1).jg = onStop;
  protoOf(_no_name_provided__qut3iv_2).fg = onCreate;
  protoOf(_no_name_provided__qut3iv_2).gg = onStart;
  protoOf(_no_name_provided__qut3iv_2).hg = onResume;
  protoOf(_no_name_provided__qut3iv_2).ig = onPause;
  protoOf(_no_name_provided__qut3iv_2).jg = onStop;
  protoOf(_no_name_provided__qut3iv_3).fg = onCreate;
  protoOf(_no_name_provided__qut3iv_3).gg = onStart;
  protoOf(_no_name_provided__qut3iv_3).hg = onResume;
  protoOf(_no_name_provided__qut3iv_3).ig = onPause;
  protoOf(_no_name_provided__qut3iv_3).jg = onStop;
  protoOf(DefaultChildItemFactory).ck = invoke$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleChildNavState;
  _.$_$.b = SimpleNavigation;
  _.$_$.c = children;
  _.$_$.d = SlotNavigation;
  _.$_$.e = activate;
  _.$_$.f = childSlot;
  _.$_$.g = dismiss;
  _.$_$.h = StackNavigation;
  _.$_$.i = bringToFront;
  _.$_$.j = childStack;
  _.$_$.k = get_items;
  _.$_$.l = navigate;
  _.$_$.m = pop;
  _.$_$.n = push;
  _.$_$.o = replaceCurrent;
  _.$_$.p = map;
  _.$_$.q = MutableValue_0;
  _.$_$.r = update;
  _.$_$.s = Created;
  _.$_$.t = hashString;
  _.$_$.u = Status_ACTIVE_getInstance;
  _.$_$.v = Status_INACTIVE_getInstance;
  _.$_$.w = DefaultComponentContext_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-decompose-js-ir.js.map
