(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Reaktive-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Reaktive-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Reaktive-reaktive-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Reaktive-reaktive-js-ir'.");
    }
    if (typeof this['Reaktive-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Reaktive-reaktive-js-ir'. Its dependency 'Reaktive-utils-js-ir' was not found. Please, check whether 'Reaktive-utils-js-ir' is loaded prior to 'Reaktive-reaktive-js-ir'.");
    }
    root['Reaktive-reaktive-js-ir'] = factory(typeof this['Reaktive-reaktive-js-ir'] === 'undefined' ? {} : this['Reaktive-reaktive-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Reaktive-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_badoo_reaktive_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var protoOf = kotlin_kotlin.$_$.r8;
  var VOID = kotlin_kotlin.$_$.mc;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var Long = kotlin_kotlin.$_$.db;
  var AtomicLong = kotlin_com_badoo_reaktive_utils.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var isInterface = kotlin_kotlin.$_$.h8;
  var lazy = kotlin_kotlin.$_$.xb;
  var AtomicReference = kotlin_com_badoo_reaktive_utils.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var toString = kotlin_kotlin.$_$.v8;
  var hashCode = kotlin_kotlin.$_$.c8;
  var equals = kotlin_kotlin.$_$.u7;
  var Comparable = kotlin_kotlin.$_$.xa;
  var AtomicBoolean = kotlin_com_badoo_reaktive_utils.$_$.a;
  var DefaultClock_getInstance = kotlin_com_badoo_reaktive_utils.$_$.f;
  var printStack = kotlin_com_badoo_reaktive_utils.$_$.e;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var isArray = kotlin_kotlin.$_$.f8;
  var arrayCopy = kotlin_kotlin.$_$.p3;
  var get_lastIndex = kotlin_kotlin.$_$.b5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var RuntimeException = kotlin_kotlin.$_$.ib;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList = kotlin_kotlin.$_$.f3;
  var ArrayList_init_$Init$ = kotlin_kotlin.$_$.i;
  var List = kotlin_kotlin.$_$.h3;
  var MutableCollection = kotlin_kotlin.$_$.k3;
  var copyOf = kotlin_kotlin.$_$.b4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var removeAll = kotlin_kotlin.$_$.w5;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var AtomicInt = kotlin_com_badoo_reaktive_utils.$_$.b;
  //endregion
  //region block: pre-declaration
  function subscribeScoped$default(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext, $super) {
    isThreadLocal = isThreadLocal === VOID ? false : isThreadLocal;
    onSubscribe = onSubscribe === VOID ? null : onSubscribe;
    onError = onError === VOID ? null : onError;
    onComplete = onComplete === VOID ? null : onComplete;
    onNext = onNext === VOID ? null : onNext;
    return $super === VOID ? this.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) : $super.aab.call(this, _this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  }
  function subscribeScoped$default_0(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess, $super) {
    isThreadLocal = isThreadLocal === VOID ? false : isThreadLocal;
    onSubscribe = onSubscribe === VOID ? null : onSubscribe;
    onError = onError === VOID ? null : onError;
    onSuccess = onSuccess === VOID ? null : onSuccess;
    return $super === VOID ? this.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) : $super.cab.call(this, _this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  }
  setMetadataFor(DisposableScope, 'DisposableScope', interfaceMeta);
  setMetadataFor(CompositeDisposable, 'CompositeDisposable', classMeta);
  setMetadataFor(DisposableScopeImpl, 'DisposableScopeImpl', classMeta, CompositeDisposable, [DisposableScope, CompositeDisposable]);
  setMetadataFor(ObservableObserver, 'ObservableObserver', interfaceMeta);
  setMetadataFor(map$1$1, VOID, classMeta, VOID, [ObservableObserver]);
  setMetadataFor(notNull$1$1, VOID, classMeta, VOID, [ObservableObserver]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(subscribe$1, VOID, classMeta, VOID, [ObservableObserver]);
  setMetadataFor(threadLocal$1$1, VOID, classMeta, VOID, [ObservableObserver]);
  function onAssembleObservable(observable) {
    return observable;
  }
  function onAssembleSingle(single) {
    return single;
  }
  setMetadataFor(ReaktivePlugin, 'ReaktivePlugin', interfaceMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Task, 'Task', classMeta, VOID, [Comparable]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(SerializerImpl, 'SerializerImpl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, SerializerImpl);
  setMetadataFor(ExecutorImpl, 'ExecutorImpl', classMeta);
  setMetadataFor(TrampolineScheduler, 'TrampolineScheduler', classMeta);
  setMetadataFor(SingleObserver, 'SingleObserver', interfaceMeta);
  setMetadataFor(subscribe$1_0, VOID, classMeta, VOID, [SingleObserver]);
  setMetadataFor(threadLocal$1$1_0, VOID, classMeta, VOID, [SingleObserver]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(Event, 'Event', classMeta);
  setMetadataFor(OnSubscribe, 'OnSubscribe', classMeta, Event);
  setMetadataFor(OnUnsubscribe, 'OnUnsubscribe', classMeta, Event);
  setMetadataFor(OnComplete, 'OnComplete', objectMeta, Event);
  setMetadataFor(OnError, 'OnError', classMeta, Event);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, SerializerImpl);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta);
  setMetadataFor(DefaultSubject, 'DefaultSubject', classMeta);
  setMetadataFor(Status, 'Status', classMeta);
  setMetadataFor(Active, 'Active', objectMeta, Status);
  setMetadataFor(Completed, 'Completed', objectMeta, Status);
  setMetadataFor(Error_0, 'Error', classMeta, Status);
  setMetadataFor(BehaviorSubject$1, VOID, classMeta, DefaultSubject);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ArrayQueue$iterator$1, VOID, classMeta);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(CompositeException, 'CompositeException', classMeta, RuntimeException);
  setMetadataFor(SimpleDisposable, 'SimpleDisposable', classMeta);
  setMetadataFor(SerialDisposable, 'SerialDisposable', classMeta);
  setMetadataFor(observable$1$emitter$1, VOID, classMeta, SerialDisposable);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta);
  setMetadataFor(MainThreadExecutor, 'MainThreadExecutor', classMeta);
  setMetadataFor(MainScheduler, 'MainScheduler', classMeta);
  setMetadataFor(single$1$emitter$1, VOID, classMeta, SerialDisposable);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta);
  setMetadataFor(SharedList, 'SharedList', classMeta, ArrayList, [ArrayList, List, MutableCollection]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(PriorityQueue$iterator$1, VOID, classMeta);
  setMetadataFor(PriorityQueue, 'PriorityQueue', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(IsolatedReference, 'IsolatedReference', classMeta);
  //endregion
  function subscribeSafe(_this__u8e3s4, observer) {
    try {
      _this__u8e3s4.uaa(observer);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        handleReaktiveError(e, ErrorCallback$onError$ref(observer));
      } else {
        throw $p;
      }
    }
  }
  function ErrorCallback$onError$ref($boundThis) {
    var l = function (p0) {
      $boundThis.vaa(p0);
      return Unit_getInstance();
    };
    l.callableName = 'onError';
    return l;
  }
  function plusAssign(_this__u8e3s4, disposable) {
    _this__u8e3s4.yaa(disposable);
  }
  function minusAssign(_this__u8e3s4, disposable) {
    _this__u8e3s4.zaa(disposable);
  }
  function DisposableScope() {
  }
  function disposableScope() {
    return new DisposableScopeImpl();
  }
  function DisposableScopeImpl() {
    CompositeDisposable.call(this);
  }
  protoOf(DisposableScopeImpl).gab = function (_this__u8e3s4) {
    this.hab();
    this.yaa(_this__u8e3s4);
    return _this__u8e3s4;
  };
  protoOf(DisposableScopeImpl).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.gab(subscribe(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext));
  };
  protoOf(DisposableScopeImpl).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.gab(subscribe_0(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess));
  };
  function observableInterval(periodMillis, scheduler) {
    return observableInterval_0(periodMillis, periodMillis, scheduler);
  }
  function observableInterval_0(startDelayMillis, periodMillis, scheduler) {
    return observable(observableInterval$lambda(scheduler, startDelayMillis, periodMillis));
  }
  function observableInterval$lambda$lambda($emitter, $count) {
    return function () {
      $emitter.jab($count.qaa(new Long(1, 0)));
      return Unit_getInstance();
    };
  }
  function observableInterval$lambda($scheduler, $startDelayMillis, $periodMillis) {
    return function (emitter) {
      var executor = $scheduler.kab();
      emitter.lab(executor);
      var count = new AtomicLong(new Long(-1, -1));
      executor.mab($startDelayMillis, $periodMillis, observableInterval$lambda$lambda(emitter, count));
      return Unit_getInstance();
    };
  }
  function map(_this__u8e3s4, mapper) {
    return observable(map$lambda(_this__u8e3s4, mapper));
  }
  function ErrorCallback$onError$ref_0($boundThis) {
    var l = function (p0) {
      $boundThis.vaa(p0);
      return Unit_getInstance();
    };
    l.callableName = 'onError';
    return l;
  }
  function map$1$1($emitter, $mapper) {
    this.oab_1 = $emitter;
    this.pab_1 = $mapper;
    this.nab_1 = $emitter;
  }
  protoOf(map$1$1).qab = function () {
    this.nab_1.qab();
  };
  protoOf(map$1$1).vaa = function (error) {
    this.nab_1.vaa(error);
  };
  protoOf(map$1$1).rab = function (disposable) {
    this.oab_1.lab(disposable);
  };
  protoOf(map$1$1).jab = function (value) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'com.badoo.reaktive.base.tryCatch' call
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp;
      try {
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.observable.<no name provided>.onNext.<anonymous>' call
        tmp$ret$0 = this.pab_1(value);
        tmp = tmp$ret$0;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$1;
          // Inline function 'com.badoo.reaktive.base.tryCatch.<anonymous>' call
          tmp$ret$1 = e;
          var tmp_1 = tmp$ret$1;
          handleReaktiveError(tmp_1, ErrorCallback$onError$ref_0(this.oab_1));
          tmp$ret$2 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var tmp0_also = tmp;
      // Inline function 'kotlin.contracts.contract' call
      this.oab_1.jab(tmp0_also);
      tmp$ret$3 = tmp0_also;
    }
  };
  function map$lambda($this_map, $mapper) {
    return function (emitter) {
      $this_map.uaa(new map$1$1(emitter, $mapper));
      return Unit_getInstance();
    };
  }
  function notNull(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.observable.observableUnsafe' call
    tmp$ret$0 = onAssembleObservable_0(new _no_name_provided__qut3iv(_this__u8e3s4));
    return tmp$ret$0;
  }
  function notNull$1$1($observer) {
    this.uab_1 = $observer;
    this.sab_1 = $observer;
    this.tab_1 = $observer;
  }
  protoOf(notNull$1$1).rab = function (disposable) {
    this.sab_1.rab(disposable);
  };
  protoOf(notNull$1$1).qab = function () {
    this.tab_1.qab();
  };
  protoOf(notNull$1$1).vaa = function (error) {
    this.tab_1.vaa(error);
  };
  protoOf(notNull$1$1).vab = function (value) {
    if (!(value == null)) {
      this.uab_1.jab(value);
    }
  };
  protoOf(notNull$1$1).jab = function (value) {
    return this.vab((value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function _no_name_provided__qut3iv($this_notNull) {
    this.wab_1 = $this_notNull;
  }
  protoOf(_no_name_provided__qut3iv).xab = function (observer) {
    // Inline function 'com.badoo.reaktive.observable.notNull.<anonymous>' call
    subscribeSafe(this.wab_1, new notNull$1$1(observer));
  };
  protoOf(_no_name_provided__qut3iv).uaa = function (observer) {
    return this.xab(isInterface(observer, ObservableObserver) ? observer : THROW_CCE());
  };
  function ObservableObserver() {
  }
  function subscribe(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    isThreadLocal = isThreadLocal === VOID ? false : isThreadLocal;
    onSubscribe = onSubscribe === VOID ? null : onSubscribe;
    onError = onError === VOID ? null : onError;
    onComplete = onComplete === VOID ? null : onComplete;
    onNext = onNext === VOID ? null : onNext;
    var serialDisposable = new SerialDisposable();
    try {
      var tmp0_safe_receiver = onSubscribe;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(serialDisposable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        try {
          handleReaktiveError(e, onError);
        }finally {
          serialDisposable.wp();
        }
        return serialDisposable;
      } else {
        throw $p;
      }
    }
    var source = isThreadLocal ? threadLocal(_this__u8e3s4) : _this__u8e3s4;
    subscribeSafe(source, new subscribe$1(serialDisposable, onNext, onComplete, onError));
    return serialDisposable;
  }
  function subscribe$1($serialDisposable, $onNext, $onComplete, $onError) {
    this.aac_1 = $serialDisposable;
    this.bac_1 = $onNext;
    this.cac_1 = $onComplete;
    this.dac_1 = $onError;
  }
  protoOf(subscribe$1).rab = function (disposable) {
    this.aac_1.eac(disposable);
  };
  protoOf(subscribe$1).jab = function (value) {
    // Inline function 'com.badoo.reaktive.disposable.doIfNotDisposed' call
    if (!this.aac_1.o1s()) {
      try {
        // Inline function 'com.badoo.reaktive.observable.<no name provided>.onNext.<anonymous>' call
        try {
          var tmp0_safe_receiver = this.bac_1;
          if (tmp0_safe_receiver == null)
            null;
          else
            tmp0_safe_receiver(value);
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            this.vaa(e);
          } else {
            throw $p;
          }
        }
      }finally {
        if (false) {
          this.aac_1.wp();
        }
      }
    }
  };
  protoOf(subscribe$1).qab = function () {
    // Inline function 'com.badoo.reaktive.disposable.doIfNotDisposed' call
    if (!this.aac_1.o1s()) {
      try {
        // Inline function 'com.badoo.reaktive.observable.<no name provided>.onComplete.<anonymous>' call
        try {
          var tmp0_safe_receiver = this.cac_1;
          if (tmp0_safe_receiver == null)
            null;
          else
            tmp0_safe_receiver();
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            handleReaktiveError(e);
          } else {
            throw $p;
          }
        }
      }finally {
        {
          this.aac_1.wp();
        }
      }
    }
  };
  protoOf(subscribe$1).vaa = function (error) {
    // Inline function 'com.badoo.reaktive.disposable.doIfNotDisposed' call
    if (!this.aac_1.o1s()) {
      try {
        // Inline function 'com.badoo.reaktive.observable.<no name provided>.onError.<anonymous>' call
        handleReaktiveError(error, this.dac_1);
      }finally {
        {
          this.aac_1.wp();
        }
      }
    }
  };
  function threadLocal(_this__u8e3s4) {
    return observable(threadLocal$lambda(_this__u8e3s4));
  }
  function getEmitter($this, existingError) {
    var tmp;
    try {
      tmp = $this.gac_1.bc();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        handleReaktiveError(existingError == null ? e : new CompositeException(existingError, e));
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function getEmitter$default($this, existingError, $super) {
    existingError = existingError === VOID ? null : existingError;
    return getEmitter($this, existingError);
  }
  function threadLocal$1$1($disposables, $emitterRef) {
    this.fac_1 = $disposables;
    this.gac_1 = $emitterRef;
  }
  protoOf(threadLocal$1$1).rab = function (disposable) {
    plusAssign(this.fac_1, disposable);
  };
  protoOf(threadLocal$1$1).jab = function (value) {
    var tmp0_safe_receiver = getEmitter$default(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jab(value);
    }
  };
  protoOf(threadLocal$1$1).qab = function () {
    var tmp0_safe_receiver = getEmitter$default(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qab();
    }
  };
  protoOf(threadLocal$1$1).vaa = function (error) {
    var tmp0_safe_receiver = getEmitter(this, error);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vaa(error);
    }
  };
  function threadLocal$lambda($this_threadLocal) {
    return function (it) {
      var disposables = new CompositeDisposable();
      it.lab(disposables);
      var emitterRef = new IsolatedReference(it);
      plusAssign(disposables, emitterRef);
      $this_threadLocal.uaa(new threadLocal$1$1(disposables, emitterRef));
      return Unit_getInstance();
    };
  }
  function ReaktivePlugin() {
  }
  function onAssembleObservable_0(observable) {
    var tmp0_safe_receiver = get_plugins();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = observable;
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.plugin.onAssembleObservable.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = element.jac(tmp0__anonymous__q1qw7t);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? observable : tmp1_elvis_lhs;
  }
  function onAssembleSingle_0(single) {
    var tmp0_safe_receiver = get_plugins();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = single;
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.plugin.onAssembleSingle.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = element.kac(tmp0__anonymous__q1qw7t);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? single : tmp1_elvis_lhs;
  }
  function get_mainSchedulerFactory() {
    _init_properties_Schedulers_kt__lqd720();
    return mainSchedulerFactory;
  }
  var mainSchedulerFactory;
  var computationSchedulerFactory;
  var ioSchedulerFactory;
  var trampolineSchedulerFactory;
  var singleSchedulerFactory;
  var newThreadSchedulerFactory;
  function get_mainScheduler() {
    _init_properties_Schedulers_kt__lqd720();
    return get_mainSchedulerFactory().raa_1.b2();
  }
  function createMainScheduler$ref() {
    var l = function () {
      return createMainScheduler();
    };
    l.callableName = 'createMainScheduler';
    return l;
  }
  function createComputationScheduler$ref() {
    var l = function () {
      return createComputationScheduler();
    };
    l.callableName = 'createComputationScheduler';
    return l;
  }
  function createIoScheduler$ref() {
    var l = function () {
      return createIoScheduler();
    };
    l.callableName = 'createIoScheduler';
    return l;
  }
  function createTrampolineScheduler$ref() {
    var l = function () {
      return createTrampolineScheduler();
    };
    l.callableName = 'createTrampolineScheduler';
    return l;
  }
  function createSingleScheduler$ref() {
    var l = function () {
      return createSingleScheduler();
    };
    l.callableName = 'createSingleScheduler';
    return l;
  }
  function createNewThreadScheduler$ref() {
    var l = function () {
      return createNewThreadScheduler();
    };
    l.callableName = 'createNewThreadScheduler';
    return l;
  }
  var properties_initialized_Schedulers_kt_44pujq;
  function _init_properties_Schedulers_kt__lqd720() {
    if (properties_initialized_Schedulers_kt_44pujq) {
    } else {
      properties_initialized_Schedulers_kt_44pujq = true;
      mainSchedulerFactory = new AtomicReference(lazy(createMainScheduler$ref()));
      computationSchedulerFactory = new AtomicReference(lazy(createComputationScheduler$ref()));
      ioSchedulerFactory = new AtomicReference(lazy(createIoScheduler$ref()));
      trampolineSchedulerFactory = new AtomicReference(lazy(createTrampolineScheduler$ref()));
      singleSchedulerFactory = new AtomicReference(lazy(createSingleScheduler$ref()));
      newThreadSchedulerFactory = new AtomicReference(lazy(createNewThreadScheduler$ref()));
    }
  }
  function Companion() {
    Companion_instance = this;
    this.lac_1 = new AtomicLong();
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function submit($this, startDelayMillis, periodMillis, task) {
    submit_0($this, new Task($this.nac_1.taa().r7(startDelayMillis), periodMillis, task));
  }
  function submit_0($this, task) {
    if (!$this.o1s()) {
      $this.pac_1.xi(task);
    }
  }
  function execute($this, task) {
    if ($this.o1s()) {
      return false;
    }
    var delay = task.rac_1.s7($this.nac_1.taa());
    if (delay.u(new Long(0, 0)) > 0 ? !$this.oac_1(delay) : false) {
      return false;
    }
    if ($this.o1s()) {
      return false;
    }
    var nextStartMillis = task.sac_1.u(new Long(0, 0)) >= 0 ? $this.nac_1.taa().r7(task.sac_1) : new Long(-1, -1);
    task.tac_1();
    if (task.sac_1.u(new Long(0, 0)) >= 0) {
      submit_0($this, task.vac(nextStartMillis));
    }
    return true;
  }
  function Task(startTime, periodMillis, task) {
    Companion_getInstance();
    this.rac_1 = startTime;
    this.sac_1 = periodMillis;
    this.tac_1 = task;
    this.uac_1 = Companion_getInstance().lac_1.qaa(new Long(1, 0));
  }
  protoOf(Task).wac = function (other) {
    var tmp;
    if (this === other) {
      tmp = 0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeUnless' call
      var tmp0_takeUnless = this.rac_1.u(other.rac_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'com.badoo.reaktive.scheduler.Task.compareTo.<anonymous>' call
      tmp$ret$0 = tmp0_takeUnless === 0;
      if (!tmp$ret$0) {
        tmp_0 = tmp0_takeUnless;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      var tmp0_elvis_lhs = tmp$ret$1;
      tmp = tmp0_elvis_lhs == null ? this.uac_1.u(other.uac_1) : tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Task).u8 = function (other) {
    return this.wac(other instanceof Task ? other : THROW_CCE());
  };
  protoOf(Task).xac = function (startTime, periodMillis, task) {
    return new Task(startTime, periodMillis, task);
  };
  protoOf(Task).vac = function (startTime, periodMillis, task, $super) {
    startTime = startTime === VOID ? this.rac_1 : startTime;
    periodMillis = periodMillis === VOID ? this.sac_1 : periodMillis;
    task = task === VOID ? this.tac_1 : task;
    return $super === VOID ? this.xac(startTime, periodMillis, task) : $super.xac.call(this, startTime, periodMillis, task);
  };
  protoOf(Task).toString = function () {
    return 'Task(startTime=' + toString(this.rac_1) + ', periodMillis=' + toString(this.sac_1) + ', task=' + this.tac_1 + ')';
  };
  protoOf(Task).hashCode = function () {
    var result = this.rac_1.hashCode();
    result = imul(result, 31) + this.sac_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.tac_1) | 0;
    return result;
  };
  protoOf(Task).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Task))
      return false;
    var tmp0_other_with_cast = other instanceof Task ? other : THROW_CCE();
    if (!this.rac_1.equals(tmp0_other_with_cast.rac_1))
      return false;
    if (!this.sac_1.equals(tmp0_other_with_cast.sac_1))
      return false;
    if (!equals(this.tac_1, tmp0_other_with_cast.tac_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.yac_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ud = function (a, b) {
    return this.yac_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ud(a, b);
  };
  function TrampolineScheduler$ExecutorImpl$Task$compareTo$ref() {
    var l = function (p0, p1) {
      return p0.wac(p1);
    };
    l.callableName = 'compareTo';
    return l;
  }
  function _no_name_provided__qut3iv_0($tmp0_serializer, this$0) {
    this.cad_1 = this$0;
    SerializerImpl.call(this, new PriorityQueue($tmp0_serializer));
  }
  protoOf(_no_name_provided__qut3iv_0).dad = function (value) {
    return execute(this.cad_1, value);
  };
  protoOf(_no_name_provided__qut3iv_0).ead = function (value) {
    return this.dad(value instanceof Task ? value : THROW_CCE());
  };
  function ExecutorImpl(disposables, clock, sleep) {
    this.mac_1 = disposables;
    this.nac_1 = clock;
    this.oac_1 = sleep;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.utils.serializer.serializer' call
    var tmp_0 = TrampolineScheduler$ExecutorImpl$Task$compareTo$ref();
    var tmp0_serializer = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$0 = new _no_name_provided__qut3iv_0(tmp0_serializer, this);
    tmp.pac_1 = tmp$ret$0;
    this.qac_1 = new AtomicBoolean();
    var tmp0_this = this;
    plusAssign(tmp0_this.mac_1, this);
  }
  protoOf(ExecutorImpl).o1s = function () {
    return this.qac_1.maa_1;
  };
  protoOf(ExecutorImpl).wp = function () {
    if (this.qac_1.naa(false, true)) {
      this.pac_1.l3();
      var tmp0_this = this;
      minusAssign(tmp0_this.mac_1, this);
    }
  };
  protoOf(ExecutorImpl).mab = function (startDelayMillis, periodMillis, task) {
    submit(this, startDelayMillis, periodMillis, task);
  };
  function TrampolineScheduler(clock, sleep) {
    clock = clock === VOID ? DefaultClock_getInstance() : clock;
    this.iad_1 = clock;
    this.jad_1 = sleep;
    this.kad_1 = new CompositeDisposable();
  }
  protoOf(TrampolineScheduler).kab = function () {
    return new ExecutorImpl(this.kad_1, this.iad_1, this.jad_1);
  };
  function SingleObserver() {
  }
  function subscribe_0(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    isThreadLocal = isThreadLocal === VOID ? false : isThreadLocal;
    onSubscribe = onSubscribe === VOID ? null : onSubscribe;
    onError = onError === VOID ? null : onError;
    onSuccess = onSuccess === VOID ? null : onSuccess;
    var serialDisposable = new SerialDisposable();
    try {
      var tmp0_safe_receiver = onSubscribe;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(serialDisposable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        try {
          handleReaktiveError(e, onError);
        }finally {
          serialDisposable.wp();
        }
        return serialDisposable;
      } else {
        throw $p;
      }
    }
    var source = isThreadLocal ? threadLocal_0(_this__u8e3s4) : _this__u8e3s4;
    subscribeSafe(source, new subscribe$1_0(serialDisposable, onSuccess, onError));
    return serialDisposable;
  }
  function subscribe$1_0($serialDisposable, $onSuccess, $onError) {
    this.mad_1 = $serialDisposable;
    this.nad_1 = $onSuccess;
    this.oad_1 = $onError;
  }
  protoOf(subscribe$1_0).rab = function (disposable) {
    this.mad_1.eac(disposable);
  };
  protoOf(subscribe$1_0).lad = function (value) {
    // Inline function 'com.badoo.reaktive.disposable.doIfNotDisposed' call
    if (!this.mad_1.o1s()) {
      try {
        // Inline function 'com.badoo.reaktive.single.<no name provided>.onSuccess.<anonymous>' call
        try {
          var tmp0_safe_receiver = this.nad_1;
          if (tmp0_safe_receiver == null)
            null;
          else
            tmp0_safe_receiver(value);
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            handleReaktiveError(e);
          } else {
            throw $p;
          }
        }
      }finally {
        {
          this.mad_1.wp();
        }
      }
    }
  };
  protoOf(subscribe$1_0).vaa = function (error) {
    // Inline function 'com.badoo.reaktive.disposable.doIfNotDisposed' call
    if (!this.mad_1.o1s()) {
      try {
        // Inline function 'com.badoo.reaktive.single.<no name provided>.onError.<anonymous>' call
        handleReaktiveError(error, this.oad_1);
      }finally {
        {
          this.mad_1.wp();
        }
      }
    }
  };
  function threadLocal_0(_this__u8e3s4) {
    return single(threadLocal$lambda_0(_this__u8e3s4));
  }
  function getEmitter_0($this, existingError) {
    var tmp;
    try {
      tmp = $this.qad_1.bc();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        handleReaktiveError(existingError == null ? e : new CompositeException(existingError, e));
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function getEmitter$default_0($this, existingError, $super) {
    existingError = existingError === VOID ? null : existingError;
    return getEmitter_0($this, existingError);
  }
  function threadLocal$1$1_0($disposables, $emitterRef) {
    this.pad_1 = $disposables;
    this.qad_1 = $emitterRef;
  }
  protoOf(threadLocal$1$1_0).rab = function (disposable) {
    plusAssign(this.pad_1, disposable);
  };
  protoOf(threadLocal$1$1_0).lad = function (value) {
    var tmp0_safe_receiver = getEmitter$default_0(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.lad(value);
    }
  };
  protoOf(threadLocal$1$1_0).vaa = function (error) {
    var tmp0_safe_receiver = getEmitter_0(this, error);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vaa(error);
    }
  };
  function threadLocal$lambda_0($this_threadLocal) {
    return function (it) {
      var disposables = new CompositeDisposable();
      it.lab(disposables);
      var emitterRef = new IsolatedReference(it);
      plusAssign(disposables, emitterRef);
      $this_threadLocal.uaa(new threadLocal$1$1_0(disposables, emitterRef));
      return Unit_getInstance();
    };
  }
  var singleOfNever$delegate;
  function singleOf(value) {
    _init_properties_Various_kt__133ynt();
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.single.singleUnsafe' call
    tmp$ret$0 = onAssembleSingle_0(new _no_name_provided__qut3iv_2(value));
    return tmp$ret$0;
  }
  function singleOfNever$delegate$lambda() {
    _init_properties_Various_kt__133ynt();
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.single.singleUnsafe' call
    tmp$ret$0 = onAssembleSingle_0(new _no_name_provided__qut3iv_1());
    return tmp$ret$0;
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).rad = function (observer) {
    // Inline function 'com.badoo.reaktive.single.singleOfNever$delegate.<anonymous>.<anonymous>' call
    observer.rab(disposable());
  };
  protoOf(_no_name_provided__qut3iv_1).uaa = function (observer) {
    return this.rad(isInterface(observer, SingleObserver) ? observer : THROW_CCE());
  };
  function _no_name_provided__qut3iv_2($value) {
    this.sad_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv_2).tad = function (observer) {
    // Inline function 'com.badoo.reaktive.single.singleOf.<anonymous>' call
    var disposable_0 = disposable();
    observer.rab(disposable_0);
    if (!disposable_0.o1s()) {
      observer.lad(this.sad_1);
    }
  };
  protoOf(_no_name_provided__qut3iv_2).uaa = function (observer) {
    return this.tad(isInterface(observer, SingleObserver) ? observer : THROW_CCE());
  };
  var properties_initialized_Various_kt_jt6y11;
  function _init_properties_Various_kt__133ynt() {
    if (properties_initialized_Various_kt_jt6y11) {
    } else {
      properties_initialized_Various_kt_jt6y11 = true;
      singleOfNever$delegate = lazy(singleOfNever$delegate$lambda);
    }
  }
  function OnSubscribe(observer) {
    Event.call(this);
    this.uad_1 = observer;
  }
  function OnUnsubscribe(observer) {
    Event.call(this);
    this.vad_1 = observer;
  }
  function OnComplete() {
  }
  function OnError(error) {
    Event.call(this);
    this.wad_1 = error;
  }
  function onSerializedValue($this, value) {
    if (value instanceof Event) {
      var event = value instanceof Event ? value : THROW_CCE();
      var tmp0_subject = event;
      if (tmp0_subject instanceof OnSubscribe) {
        onSerializedSubscribe($this, event.uad_1);
      } else {
        if (tmp0_subject instanceof OnUnsubscribe) {
          onSerializedUnsubscribe($this, event.vad_1);
        } else {
          if (tmp0_subject instanceof OnComplete) {
            onSerializedComplete($this);
          } else {
            if (tmp0_subject instanceof OnError) {
              onSerializedError($this, event.wad_1);
            }
          }
        }
      }
    } else {
      onSerializedNext($this, (value == null ? true : isObject(value)) ? value : THROW_CCE());
    }
    return true;
  }
  function onSerializedSubscribe($this, observer) {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.disposable.Disposable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_4($this, observer);
    var disposable = tmp$ret$0;
    observer.rab(disposable);
    if (disposable.o1s()) {
      return Unit_getInstance();
    }
    if (!$this.aae(observer)) {
      return Unit_getInstance();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.uk();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.badoo.reaktive.subject.DefaultSubject.onSerializedSubscribe.<anonymous>' call
    var tmp0_subject = tmp0_also;
    if (tmp0_subject instanceof Completed) {
      observer.qab();
      return Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Error_0) {
        observer.vaa(tmp0_also.bae_1);
        return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof Active) {
        }
      }
    }
    tmp$ret$1 = tmp0_also;
    var tmp0_this = $this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.xad_1;
    tmp1_plusAssign.a(observer);
    $this.cae(observer);
  }
  function onSerializedUnsubscribe($this, observer) {
    var tmp0_this = $this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.xad_1;
    tmp0_minusAssign.j3(observer);
    $this.dae(observer);
  }
  function onSerializedNext($this, value) {
    if (get_isActive($this)) {
      $this.eae(value);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this.xad_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.badoo.reaktive.subject.DefaultSubject.onSerializedNext.<anonymous>' call
        element.jab(value);
      }
    }
  }
  function onSerializedComplete($this) {
    if (get_isActive($this)) {
      $this.fae(Completed_getInstance());
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this.xad_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        element.qab();
      }
    }
  }
  function onSerializedError($this, error) {
    if (get_isActive($this)) {
      $this.fae(new Error_0(error));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this.xad_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'com.badoo.reaktive.subject.DefaultSubject.onSerializedError.<anonymous>' call
        element.vaa(error);
      }
    }
  }
  function Event() {
  }
  function _no_name_provided__qut3iv_3(this$0) {
    this.jae_1 = this$0;
    SerializerImpl.call(this, new ArrayQueue());
  }
  protoOf(_no_name_provided__qut3iv_3).kae = function (value) {
    return onSerializedValue(this.jae_1, value);
  };
  protoOf(_no_name_provided__qut3iv_3).ead = function (value) {
    return this.kae((value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function _no_name_provided__qut3iv_4(this$0, $observer) {
    this.mae_1 = this$0;
    this.nae_1 = $observer;
    this.lae_1 = false;
  }
  protoOf(_no_name_provided__qut3iv_4).o1s = function () {
    return this.lae_1;
  };
  protoOf(_no_name_provided__qut3iv_4).wp = function () {
    if (!this.lae_1) {
      this.lae_1 = true;
      // Inline function 'com.badoo.reaktive.subject.DefaultSubject.onSerializedSubscribe.<anonymous>' call
      this.mae_1.yad_1.xi(new OnUnsubscribe(this.nae_1));
    }
  };
  function DefaultSubject() {
    this.xad_1 = new SharedList();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.utils.serializer.serializer' call
    tmp$ret$0 = new _no_name_provided__qut3iv_3(this);
    tmp.yad_1 = tmp$ret$0;
    this.zad_1 = new AtomicReference(Active_getInstance());
  }
  protoOf(DefaultSubject).fae = function (value) {
    this.zad_1.raa_1 = value;
    this.oae(value);
  };
  protoOf(DefaultSubject).uk = function () {
    return this.zad_1.raa_1;
  };
  protoOf(DefaultSubject).xab = function (observer) {
    this.yad_1.xi(new OnSubscribe(observer));
  };
  protoOf(DefaultSubject).uaa = function (observer) {
    return this.xab(isInterface(observer, ObservableObserver) ? observer : THROW_CCE());
  };
  protoOf(DefaultSubject).jab = function (value) {
    this.yad_1.xi(value);
  };
  protoOf(DefaultSubject).vaa = function (error) {
    this.yad_1.xi(new OnError(error));
  };
  protoOf(DefaultSubject).aae = function (observer) {
    return true;
  };
  protoOf(DefaultSubject).cae = function (observer) {
  };
  protoOf(DefaultSubject).dae = function (observer) {
  };
  protoOf(DefaultSubject).eae = function (value) {
  };
  protoOf(DefaultSubject).oae = function (status) {
  };
  function Active() {
    Active_instance = this;
    Status.call(this);
  }
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function Completed() {
    Completed_instance = this;
    Status.call(this);
  }
  var Completed_instance;
  function Completed_getInstance() {
    if (Completed_instance == null)
      new Completed();
    return Completed_instance;
  }
  function Error_0(error) {
    Status.call(this);
    this.bae_1 = error;
  }
  protoOf(Error_0).toString = function () {
    return 'Error(error=' + this.bae_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return hashCode(this.bae_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.bae_1, tmp0_other_with_cast.bae_1))
      return false;
    return true;
  };
  function Status() {
  }
  function get_isActive(_this__u8e3s4) {
    return get_isActive_0(_this__u8e3s4.uk());
  }
  function get_isActive_0(_this__u8e3s4) {
    return _this__u8e3s4 instanceof Active;
  }
  function BehaviorSubject(initialValue) {
    return new BehaviorSubject$1(initialValue);
  }
  function BehaviorSubject$1($initialValue) {
    DefaultSubject.call(this);
    this.sae_1 = new AtomicReference($initialValue);
  }
  protoOf(BehaviorSubject$1).b2 = function () {
    return this.sae_1.raa_1;
  };
  protoOf(BehaviorSubject$1).cae = function (observer) {
    protoOf(DefaultSubject).cae.call(this, observer);
    observer.jab(this.b2());
  };
  protoOf(BehaviorSubject$1).eae = function (value) {
    protoOf(DefaultSubject).eae.call(this, value);
    this.sae_1.raa_1 = value;
  };
  function handleReaktiveError(error, onError) {
    onError = onError === VOID ? null : onError;
    if (onError == null) {
      handleError(error);
    } else {
      handleError_0(error, onError);
    }
  }
  function handleError(error) {
    try {
      get_reaktiveUncaughtErrorHandler()(error);
    } catch ($p) {
      if ($p instanceof Error) {
        var errorDeliveryException = $p;
        printErrors('Error delivering uncaught error', error, errorDeliveryException);
      } else {
        throw $p;
      }
    }
  }
  function handleError_0(error, onError) {
    try {
      onError(error);
    } catch ($p) {
      if ($p instanceof Error) {
        var errorHandlerException = $p;
        printErrors('onError callback failed', error, errorHandlerException);
        try {
          get_reaktiveUncaughtErrorHandler()(new CompositeException(error, errorHandlerException));
        } catch ($p) {
          if ($p instanceof Error) {
            var errorDeliveryException = $p;
            printErrors('Error delivering uncaught error', error, errorDeliveryException);
          } else {
            throw $p;
          }
        }
      } else {
        throw $p;
      }
    }
  }
  function printErrors(message, outerError, innerError) {
    printError(message + ' (' + outerError + '): ' + innerError);
    printStack(outerError);
    printStack(innerError);
  }
  function get__reaktiveUncaughtErrorHandler() {
    _init_properties_UncaughtErrorHandler_kt__98v393();
    return _reaktiveUncaughtErrorHandler;
  }
  var _reaktiveUncaughtErrorHandler;
  function get_reaktiveUncaughtErrorHandler() {
    _init_properties_UncaughtErrorHandler_kt__98v393();
    return get__reaktiveUncaughtErrorHandler().raa_1;
  }
  var properties_initialized_UncaughtErrorHandler_kt_ihx0zd;
  function _init_properties_UncaughtErrorHandler_kt__98v393() {
    if (properties_initialized_UncaughtErrorHandler_kt_ihx0zd) {
    } else {
      properties_initialized_UncaughtErrorHandler_kt_ihx0zd = true;
      _reaktiveUncaughtErrorHandler = new AtomicReference(createDefaultUncaughtErrorHandler());
    }
  }
  function createArray($this, size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function ensureCapacity($this) {
    if (!$this.wae_1) {
      return Unit_getInstance();
    }
    $this.wae_1 = false;
    var arr = createArray(Companion_getInstance_0(), $this.tae_1.length << 1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.tae_1;
    var tmp1_copyInto = $this.uae_1;
    var tmp2_copyInto = $this.tae_1.length;
    arrayCopy(tmp0_copyInto, arr, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = arr;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.tae_1;
    var tmp4_copyInto = $this.tae_1.length - $this.uae_1 | 0;
    var tmp5_copyInto = $this.uae_1;
    arrayCopy(tmp3_copyInto, arr, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$1 = arr;
    $this.vae_1 = $this.tae_1.length;
    $this.uae_1 = 0;
    $this.tae_1 = arr;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.xae_1 = 8;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ArrayQueue$iterator$1(this$0) {
    this.baf_1 = this$0;
    this.yae_1 = this$0.f();
    this.zae_1 = this$0.uae_1;
    this.aaf_1 = get_lastIndex(this$0.tae_1);
  }
  protoOf(ArrayQueue$iterator$1).d = function () {
    return this.yae_1 > 0;
  };
  protoOf(ArrayQueue$iterator$1).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp = this.baf_1.tae_1[this.zae_1];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.yae_1;
    tmp0_this.yae_1 = tmp1 - 1 | 0;
    var tmp2_this = this;
    var tmp3 = tmp2_this.zae_1;
    tmp2_this.zae_1 = tmp3 + 1 | 0;
    if (this.zae_1 > this.aaf_1) {
      this.zae_1 = 0;
    }
    return item;
  };
  function ArrayQueue() {
    Companion_getInstance_0();
    var tmp = this;
    var tmp_0 = Companion_getInstance_0();
    Companion_getInstance_0();
    tmp.tae_1 = createArray(tmp_0, 8);
    this.uae_1 = 0;
    this.vae_1 = 0;
    this.wae_1 = false;
  }
  protoOf(ArrayQueue).caf = function () {
    return this.tae_1[this.uae_1];
  };
  protoOf(ArrayQueue).it = function () {
    return this.uae_1 === this.vae_1 ? !this.wae_1 : false;
  };
  protoOf(ArrayQueue).f = function () {
    return this.wae_1 ? this.tae_1.length : this.vae_1 >= this.uae_1 ? this.vae_1 - this.uae_1 | 0 : (this.tae_1.length + this.vae_1 | 0) - this.uae_1 | 0;
  };
  protoOf(ArrayQueue).daf = function (item) {
    ensureCapacity(this);
    this.tae_1[this.vae_1] = item;
    var tmp0_this = this;
    var tmp1 = tmp0_this.vae_1;
    tmp0_this.vae_1 = tmp1 + 1 | 0;
    if (this.vae_1 > get_lastIndex(this.tae_1)) {
      this.vae_1 = 0;
    }
    if (this.vae_1 === this.uae_1) {
      this.wae_1 = true;
    }
  };
  protoOf(ArrayQueue).eaf = function () {
    var value = this.caf();
    this.tae_1[this.uae_1] = null;
    if (!(this.uae_1 === this.vae_1) ? true : this.wae_1) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.uae_1;
      tmp0_this.uae_1 = tmp1 + 1 | 0;
      this.wae_1 = false;
      if (this.uae_1 > get_lastIndex(this.tae_1)) {
        this.uae_1 = 0;
      }
    }
    return value;
  };
  protoOf(ArrayQueue).l3 = function () {
    var inductionVariable = 0;
    var last = this.tae_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.tae_1[i] = null;
      }
       while (inductionVariable < last);
    this.uae_1 = 0;
    this.vae_1 = 0;
    this.wae_1 = false;
  };
  protoOf(ArrayQueue).c = function () {
    return new ArrayQueue$iterator$1(this);
  };
  function CompositeException(cause1, cause2) {
    RuntimeException_init_$Init$(this);
    captureStack(this, CompositeException);
    this.faf_1 = cause1;
    this.gaf_1 = cause2;
  }
  function disposable() {
    return new SimpleDisposable();
  }
  function SimpleDisposable() {
    this.haf_1 = false;
  }
  protoOf(SimpleDisposable).o1s = function () {
    return this.haf_1;
  };
  protoOf(SimpleDisposable).wp = function () {
    this.haf_1 = true;
  };
  function observable(onSubscribe) {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.observable.observableUnsafe' call
    tmp$ret$0 = onAssembleObservable_0(new _no_name_provided__qut3iv_5(onSubscribe));
    return tmp$ret$0;
  }
  function observable$1$emitter$1($observer) {
    this.kaf_1 = $observer;
    SerialDisposable.call(this);
  }
  protoOf(observable$1$emitter$1).lab = function (disposable) {
    this.eac(disposable);
  };
  protoOf(observable$1$emitter$1).jab = function (value) {
    if (!this.o1s()) {
      this.kaf_1.jab(value);
    }
  };
  protoOf(observable$1$emitter$1).qab = function () {
    // Inline function 'com.badoo.reaktive.observable.<no name provided>.doIfNotDisposedAndDispose' call
    var tmp0_doIfNotDisposedAndDispose = this.kaf_1;
    if (!this.o1s()) {
      var disposable = this.laf(null);
      try {
        this.wp();
        tmp0_doIfNotDisposedAndDispose.qab();
      }finally {
        var tmp0_safe_receiver = disposable;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wp();
        }
      }
    }
  };
  protoOf(observable$1$emitter$1).vaa = function (error) {
    // Inline function 'com.badoo.reaktive.observable.<no name provided>.doIfNotDisposedAndDispose' call
    if (!this.o1s()) {
      var disposable = this.laf(null);
      try {
        this.wp();
        // Inline function 'com.badoo.reaktive.observable.<no name provided>.onError.<anonymous>' call
        this.kaf_1.vaa(error);
      }finally {
        var tmp0_safe_receiver = disposable;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wp();
        }
      }
    }
  };
  function ErrorCallback$onError$ref_1($boundThis) {
    var l = function (p0) {
      $boundThis.vaa(p0);
      return Unit_getInstance();
    };
    l.callableName = 'onError';
    return l;
  }
  function _no_name_provided__qut3iv_5($onSubscribe) {
    this.maf_1 = $onSubscribe;
  }
  protoOf(_no_name_provided__qut3iv_5).xab = function (observer) {
    // Inline function 'com.badoo.reaktive.observable.observable.<anonymous>' call
    var emitter = new observable$1$emitter$1(observer);
    observer.rab(emitter);
    // Inline function 'com.badoo.reaktive.base.tryCatch' call
    try {
      // Inline function 'com.badoo.reaktive.observable.observable.<anonymous>.<anonymous>' call
      this.maf_1(emitter);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.base.tryCatch.<anonymous>' call
        tmp$ret$0 = e;
        var tmp = tmp$ret$0;
        handleReaktiveError(tmp, ErrorCallback$onError$ref_1(emitter));
      } else {
        throw $p;
      }
    }
  };
  protoOf(_no_name_provided__qut3iv_5).uaa = function (observer) {
    return this.xab(isInterface(observer, ObservableObserver) ? observer : THROW_CCE());
  };
  function createComputationScheduler() {
    return get_mainScheduler();
  }
  function createIoScheduler() {
    return get_mainScheduler();
  }
  function createMainScheduler() {
    return new MainScheduler();
  }
  function createNewThreadScheduler() {
    return get_mainScheduler();
  }
  function createSingleScheduler() {
    return get_mainScheduler();
  }
  function createTrampolineScheduler() {
    return new TrampolineScheduler(VOID, createTrampolineScheduler$lambda);
  }
  function busySleep(millis) {
    var end = DefaultClock_getInstance().taa().r7(millis);
    while (DefaultClock_getInstance().taa().u(end) < 0) {
    }
  }
  function createTrampolineScheduler$lambda(it) {
    busySleep(it);
    return true;
  }
  function MainScheduler$MainThreadExecutor$submitRepeating$lambda(this$0, $task, $periodMillis) {
    return function () {
      return this$0.qaf_1.a(globalThis.setInterval($task, $periodMillis.f8()));
    };
  }
  function MainThreadExecutor(disposables) {
    this.naf_1 = disposables;
    this.oaf_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.paf_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.qaf_1 = tmp$ret$1;
    var tmp0_this = this;
    plusAssign(tmp0_this.naf_1, this);
  }
  protoOf(MainThreadExecutor).mab = function (startDelayMillis, periodMillis, task) {
    if (!startDelayMillis.equals(new Long(0, 0))) {
      this.paf_1.a(globalThis.setTimeout(MainScheduler$MainThreadExecutor$submitRepeating$lambda(this, task, periodMillis), startDelayMillis.f8()));
    } else {
      this.qaf_1.a(globalThis.setInterval(task, periodMillis.f8()));
    }
  };
  protoOf(MainThreadExecutor).o7f = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.paf_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'com.badoo.reaktive.scheduler.MainThreadExecutor.cancel.<anonymous>' call
      globalThis.clearTimeout(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.qaf_1;
    var tmp0_iterator_0 = tmp1_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'com.badoo.reaktive.scheduler.MainThreadExecutor.cancel.<anonymous>' call
      globalThis.clearInterval(element_0);
    }
  };
  protoOf(MainThreadExecutor).o1s = function () {
    return this.oaf_1;
  };
  protoOf(MainThreadExecutor).wp = function () {
    this.o7f();
    this.oaf_1 = true;
    var tmp0_this = this;
    minusAssign(tmp0_this.naf_1, this);
  };
  function MainScheduler() {
    this.raf_1 = new CompositeDisposable();
  }
  protoOf(MainScheduler).kab = function () {
    return new MainThreadExecutor(this.raf_1);
  };
  function single(onSubscribe) {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.single.singleUnsafe' call
    tmp$ret$0 = onAssembleSingle_0(new _no_name_provided__qut3iv_6(onSubscribe));
    return tmp$ret$0;
  }
  function single$1$emitter$1($observer) {
    this.uaf_1 = $observer;
    SerialDisposable.call(this);
  }
  protoOf(single$1$emitter$1).lab = function (disposable) {
    this.eac(disposable);
  };
  protoOf(single$1$emitter$1).lad = function (value) {
    // Inline function 'com.badoo.reaktive.single.<no name provided>.doIfNotDisposedAndDispose' call
    if (!this.o1s()) {
      var disposable = this.laf(null);
      try {
        this.wp();
        // Inline function 'com.badoo.reaktive.single.<no name provided>.onSuccess.<anonymous>' call
        this.uaf_1.lad(value);
      }finally {
        var tmp0_safe_receiver = disposable;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wp();
        }
      }
    }
  };
  protoOf(single$1$emitter$1).vaa = function (error) {
    // Inline function 'com.badoo.reaktive.single.<no name provided>.doIfNotDisposedAndDispose' call
    if (!this.o1s()) {
      var disposable = this.laf(null);
      try {
        this.wp();
        // Inline function 'com.badoo.reaktive.single.<no name provided>.onError.<anonymous>' call
        this.uaf_1.vaa(error);
      }finally {
        var tmp0_safe_receiver = disposable;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wp();
        }
      }
    }
  };
  function ErrorCallback$onError$ref_2($boundThis) {
    var l = function (p0) {
      $boundThis.vaa(p0);
      return Unit_getInstance();
    };
    l.callableName = 'onError';
    return l;
  }
  function _no_name_provided__qut3iv_6($onSubscribe) {
    this.vaf_1 = $onSubscribe;
  }
  protoOf(_no_name_provided__qut3iv_6).tad = function (observer) {
    // Inline function 'com.badoo.reaktive.single.single.<anonymous>' call
    var emitter = new single$1$emitter$1(observer);
    observer.rab(emitter);
    // Inline function 'com.badoo.reaktive.base.tryCatch' call
    try {
      // Inline function 'com.badoo.reaktive.single.single.<anonymous>.<anonymous>' call
      this.vaf_1(emitter);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.base.tryCatch.<anonymous>' call
        tmp$ret$0 = e;
        var tmp = tmp$ret$0;
        handleReaktiveError(tmp, ErrorCallback$onError$ref_2(emitter));
      } else {
        throw $p;
      }
    }
  };
  protoOf(_no_name_provided__qut3iv_6).uaa = function (observer) {
    return this.tad(isInterface(observer, SingleObserver) ? observer : THROW_CCE());
  };
  function createDefaultUncaughtErrorHandler() {
    return printError$ref();
  }
  function printError$ref() {
    var l = function (p0) {
      printError(p0);
      return Unit_getInstance();
    };
    l.callableName = 'printError';
    return l;
  }
  function printError(error) {
    console.error(error);
  }
  function SharedList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 8 : initialCapacity;
    ArrayList_init_$Init$(initialCapacity, this);
  }
  function newArray($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 8;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function heapifyDown(_this__u8e3s4, $this, index, actualSize, comparator) {
    var leftChildIndex = imul(index, 2) + 1 | 0;
    if (leftChildIndex >= actualSize) {
      return Unit_getInstance();
    }
    var rightChildIndex = leftChildIndex + 1 | 0;
    var tmp;
    if (rightChildIndex >= actualSize) {
      tmp = leftChildIndex;
    } else {
      var leftChildValue = _this__u8e3s4[leftChildIndex];
      var rightChildValue = _this__u8e3s4[rightChildIndex];
      tmp = comparator.compare(leftChildValue, rightChildValue) < 0 ? leftChildIndex : rightChildIndex;
    }
    var childIndex = tmp;
    if (comparator.compare(_this__u8e3s4[childIndex], _this__u8e3s4[index]) < 0) {
      swap(_this__u8e3s4, $this, index, childIndex);
      heapifyDown(_this__u8e3s4, $this, childIndex, actualSize, comparator);
    }
  }
  function heapifyUp(_this__u8e3s4, $this, index, comparator) {
    var parentIndex = (index % 2 | 0) === 0 ? (index / 2 | 0) - 1 | 0 : index / 2 | 0;
    if (parentIndex < 0) {
      return Unit_getInstance();
    }
    if (comparator.compare(_this__u8e3s4[parentIndex], _this__u8e3s4[index]) > 0) {
      swap(_this__u8e3s4, $this, index, parentIndex);
      heapifyUp(_this__u8e3s4, $this, parentIndex, comparator);
    }
  }
  function swap(_this__u8e3s4, $this, first, second) {
    var temp = _this__u8e3s4[first];
    _this__u8e3s4[first] = _this__u8e3s4[second];
    _this__u8e3s4[second] = temp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.waf_1 = 8;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function PriorityQueue$iterator$1(this$0) {
    this.yaf_1 = this$0;
    this.xaf_1 = 0;
  }
  protoOf(PriorityQueue$iterator$1).d = function () {
    return this.xaf_1 < this.yaf_1.bag_1;
  };
  protoOf(PriorityQueue$iterator$1).e = function () {
    var tmp0_safe_receiver = this.yaf_1.aag_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'com.badoo.reaktive.utils.queue.<no name provided>.next.<anonymous>' call
      tmp$ret$0 = this.xaf_1 < this.yaf_1.bag_1;
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var arr = tmp_1;
    var tmp2_this = this;
    var tmp3 = tmp2_this.xaf_1;
    tmp2_this.xaf_1 = tmp3 + 1 | 0;
    var tmp_2 = arr[tmp3];
    return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
  };
  function PriorityQueue(comparator) {
    Companion_getInstance_1();
    this.zaf_1 = comparator;
    this.aag_1 = null;
    this.bag_1 = 0;
  }
  protoOf(PriorityQueue).it = function () {
    return this.bag_1 === 0;
  };
  protoOf(PriorityQueue).daf = function (item) {
    var arr = this.aag_1;
    if (arr == null) {
      arr = newArray(Companion_getInstance_1());
    } else if (this.bag_1 === arr.length) {
      arr = copyOf(arr, imul(this.bag_1, 2));
    }
    this.aag_1 = arr;
    var tmp0_this = this;
    var tmp1 = tmp0_this.bag_1;
    tmp0_this.bag_1 = tmp1 + 1 | 0;
    var lastIndex = tmp1;
    arr[lastIndex] = item;
    heapifyUp((!(arr == null) ? isArray(arr) : false) ? arr : THROW_CCE(), Companion_getInstance_1(), lastIndex, this.zaf_1);
  };
  protoOf(PriorityQueue).eaf = function () {
    var arr = this.aag_1;
    if (arr == null ? true : this.it()) {
      return null;
    }
    var tmp0_this = this;
    tmp0_this.bag_1 = tmp0_this.bag_1 - 1 | 0;
    var lastIndex = tmp0_this.bag_1;
    var item = arr[0];
    arr[0] = arr[lastIndex];
    arr[lastIndex] = null;
    heapifyDown((!(arr == null) ? isArray(arr) : false) ? arr : THROW_CCE(), Companion_getInstance_1(), 0, this.bag_1, this.zaf_1);
    return item;
  };
  protoOf(PriorityQueue).l3 = function () {
    this.aag_1 = null;
    this.bag_1 = 0;
  };
  protoOf(PriorityQueue).c = function () {
    return new PriorityQueue$iterator$1(this);
  };
  function ensureCollection($this) {
    var result = $this.waa_1;
    if (result == null) {
      result = ArrayList_init_$Create$();
      $this.waa_1 = result;
    } else {
      var tmp = result.f();
      Companion_getInstance_2();
      if (tmp >= 32) {
        result = LinkedHashSet_init_$Create$(result);
        $this.waa_1 = result;
      }
    }
    return result;
  }
  function resetDisposables($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.waa_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.badoo.reaktive.disposable.CompositeDisposable.resetDisposables.<anonymous>' call
    $this.waa_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.cag_1 = 32;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CompositeDisposable() {
    Companion_getInstance_2();
    this.waa_1 = null;
    this.xaa_1 = false;
  }
  protoOf(CompositeDisposable).o1s = function () {
    return this.xaa_1;
  };
  protoOf(CompositeDisposable).wp = function () {
    var tmp$ret$1;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.disposable.CompositeDisposable.dispose.<anonymous>' call
    this.xaa_1 = true;
    tmp$ret$0 = resetDisposables(this);
    tmp$ret$1 = tmp$ret$0;
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        element.wp();
      }
    }
  };
  protoOf(CompositeDisposable).yaa = function (disposable) {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp;
    if (!this.xaa_1) {
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = ensureCollection(this);
      tmp0_plusAssign.a(disposable);
      return true;
    }
    tmp$ret$0 = tmp;
    disposable.wp();
    return false;
  };
  protoOf(CompositeDisposable).iab = function (disposable, dispose) {
    var tmp$ret$1;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.disposable.CompositeDisposable.remove.<anonymous>' call
    var tmp0_safe_receiver = this.waa_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j3(disposable);
    tmp$ret$0 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    var result = tmp$ret$1;
    if (result ? dispose : false) {
      disposable.wp();
    }
    return result;
  };
  protoOf(CompositeDisposable).zaa = function (disposable, dispose, $super) {
    dispose = dispose === VOID ? false : dispose;
    return $super === VOID ? this.iab(disposable, dispose) : $super.iab.call(this, disposable, dispose);
  };
  protoOf(CompositeDisposable).hab = function () {
    var tmp$ret$1;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.disposable.CompositeDisposable.purge.<anonymous>' call
    var tmp0_safe_receiver = this.waa_1;
    tmp$ret$0 = tmp0_safe_receiver == null ? null : removeAll(tmp0_safe_receiver, isDisposed$factory());
    tmp$ret$1 = tmp$ret$0;
  };
  function isDisposed$factory() {
    return getPropertyCallableRef('isDisposed', 1, KProperty1, function (receiver) {
      return receiver.o1s();
    }, null);
  }
  function swapDisposable($this, new_0) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.zab_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.badoo.reaktive.disposable.SerialDisposable.swapDisposable.<anonymous>' call
    $this.zab_1 = new_0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function SerialDisposable() {
    this.yab_1 = false;
    this.zab_1 = null;
  }
  protoOf(SerialDisposable).o1s = function () {
    return this.yab_1;
  };
  protoOf(SerialDisposable).wp = function () {
    var tmp$ret$1;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.disposable.SerialDisposable.dispose.<anonymous>' call
    this.yab_1 = true;
    tmp$ret$0 = swapDisposable(this, null);
    tmp$ret$1 = tmp$ret$0;
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
  };
  protoOf(SerialDisposable).eac = function (disposable) {
    var tmp0_safe_receiver = this.laf(disposable);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
  };
  protoOf(SerialDisposable).laf = function (disposable) {
    var disposableToDispose = null;
    var oldDisposable = null;
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp;
    if (this.yab_1) {
      disposableToDispose = disposable;
      tmp = Unit_getInstance();
    } else {
      oldDisposable = swapDisposable(this, disposable);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    var tmp0_safe_receiver = disposableToDispose;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
    return oldDisposable;
  };
  function get_plugins() {
    return plugins;
  }
  var plugins;
  function IsolatedReference(value) {
    this.hac_1 = value;
    this.iac_1 = false;
  }
  protoOf(IsolatedReference).o1s = function () {
    return this.iac_1;
  };
  protoOf(IsolatedReference).wp = function () {
    this.iac_1 = true;
  };
  protoOf(IsolatedReference).bc = function () {
    return this.hac_1;
  };
  function drainLoop($this) {
    var missed = 1;
    $l$loop_0: while (true) {
      $l$loop: while (true) {
        var isEmpty = false;
        var value = null;
        var tmp$ret$0;
        // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
        var tmp0_synchronizedCompat = $this.fad_1;
        isEmpty = $this.fad_1.it();
        var tmp;
        if (!isEmpty) {
          value = $this.fad_1.eaf();
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
        if (isEmpty) {
          break $l$loop;
        }
        if (!$this.ead((value == null ? true : isObject(value)) ? value : THROW_CCE())) {
          $this.gad_1 = true;
          return Unit_getInstance();
        }
      }
      missed = $this.had_1.k6g(-missed | 0);
      if (missed === 0) {
        break $l$loop_0;
      }
    }
  }
  function SerializerImpl(queue) {
    this.fad_1 = queue;
    this.gad_1 = false;
    this.had_1 = new AtomicInt();
  }
  protoOf(SerializerImpl).xi = function (value) {
    if (this.gad_1) {
      return Unit_getInstance();
    }
    if (this.had_1.y6j(0, 1)) {
      if (!this.ead(value)) {
        this.gad_1 = true;
        return Unit_getInstance();
      }
      if (this.had_1.k6g(-1) === 0) {
        return Unit_getInstance();
      }
    } else {
      var tmp$ret$0;
      // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
      var tmp0_synchronizedCompat = this.fad_1;
      this.fad_1.daf(value);
      tmp$ret$0 = Unit_getInstance();
      if (this.had_1.k6g(1) > 1) {
        return Unit_getInstance();
      }
    }
    drainLoop(this);
  };
  protoOf(SerializerImpl).l3 = function () {
    var tmp$ret$0;
    // Inline function 'com.badoo.reaktive.utils.synchronizedCompat' call
    var tmp0_synchronizedCompat = this.fad_1;
    var tmp1_synchronizedCompat = this.fad_1;
    tmp1_synchronizedCompat.l3();
    tmp$ret$0 = Unit_getInstance();
  };
  //region block: post-declaration
  protoOf(DisposableScopeImpl).bab = subscribeScoped$default;
  protoOf(DisposableScopeImpl).dab = subscribeScoped$default_0;
  //endregion
  //region block: init
  plugins = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = disposableScope;
  _.$_$.b = DisposableScope;
  _.$_$.c = map;
  _.$_$.d = notNull;
  _.$_$.e = observableInterval;
  _.$_$.f = subscribe;
  _.$_$.g = get_mainScheduler;
  _.$_$.h = singleOf;
  _.$_$.i = BehaviorSubject;
  _.$_$.j = subscribeScoped$default;
  _.$_$.k = subscribeScoped$default_0;
  //endregion
  return _;
}));

//# sourceMappingURL=Reaktive-reaktive-js-ir.js.map
