(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-parcelable-js-ir.js', './Decompose-decompose-js-ir.js', './Reaktive-reaktive-js-ir.js', './Essenty-instance-keeper-js-ir.js', './Essenty-lifecycle-js-ir.js', './Decompose-feature1Impl.js', './Decompose-feature2Impl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-parcelable-js-ir.js'), require('./Decompose-decompose-js-ir.js'), require('./Reaktive-reaktive-js-ir.js'), require('./Essenty-instance-keeper-js-ir.js'), require('./Essenty-lifecycle-js-ir.js'), require('./Decompose-feature1Impl.js'), require('./Decompose-feature2Impl.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Essenty-parcelable-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Essenty-parcelable-js-ir' was not found. Please, check whether 'Essenty-parcelable-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Decompose-decompose-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Decompose-decompose-js-ir' was not found. Please, check whether 'Decompose-decompose-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Reaktive-reaktive-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Reaktive-reaktive-js-ir' was not found. Please, check whether 'Reaktive-reaktive-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Essenty-instance-keeper-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Essenty-instance-keeper-js-ir' was not found. Please, check whether 'Essenty-instance-keeper-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Essenty-lifecycle-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Essenty-lifecycle-js-ir' was not found. Please, check whether 'Essenty-lifecycle-js-ir' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Decompose-feature1Impl'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Decompose-feature1Impl' was not found. Please, check whether 'Decompose-feature1Impl' is loaded prior to 'Decompose-shared'.");
    }
    if (typeof this['Decompose-feature2Impl'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-shared'. Its dependency 'Decompose-feature2Impl' was not found. Please, check whether 'Decompose-feature2Impl' is loaded prior to 'Decompose-shared'.");
    }
    root['Decompose-shared'] = factory(typeof this['Decompose-shared'] === 'undefined' ? {} : this['Decompose-shared'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-parcelable-js-ir'], this['Decompose-decompose-js-ir'], this['Reaktive-reaktive-js-ir'], this['Essenty-instance-keeper-js-ir'], this['Essenty-lifecycle-js-ir'], this['Decompose-feature1Impl'], this['Decompose-feature2Impl']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_parcelable, kotlin_com_arkivanov_decompose_decompose, kotlin_com_badoo_reaktive_reaktive, kotlin_com_arkivanov_essenty_instance_keeper, kotlin_com_arkivanov_essenty_lifecycle, kotlin_Decompose_sample_shared_dynamic_features_feature1Impl, kotlin_Decompose_sample_shared_dynamic_features_feature2Impl) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.db;
  var listOf = kotlin_kotlin.$_$.j5;
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var toString = kotlin_kotlin.$_$.v8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var Parcelable = kotlin_com_arkivanov_essenty_parcelable.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var checkIndexOverflow = kotlin_kotlin.$_$.u3;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var listOf_0 = kotlin_kotlin.$_$.i5;
  var minus = kotlin_kotlin.$_$.n5;
  var plus = kotlin_kotlin.$_$.t5;
  var StackNavigation = kotlin_com_arkivanov_decompose_decompose.$_$.h;
  var getKClass = kotlin_kotlin.$_$.c;
  var childStack = kotlin_com_arkivanov_decompose_decompose.$_$.j;
  var navigate = kotlin_com_arkivanov_decompose_decompose.$_$.l;
  var get_items = kotlin_com_arkivanov_decompose_decompose.$_$.k;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var compareTo = kotlin_kotlin.$_$.s7;
  var push = kotlin_com_arkivanov_decompose_decompose.$_$.n;
  var pop = kotlin_com_arkivanov_decompose_decompose.$_$.m;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var update = kotlin_com_arkivanov_decompose_decompose.$_$.r;
  var BehaviorSubject = kotlin_com_badoo_reaktive_reaktive.$_$.i;
  var observableInterval = kotlin_com_badoo_reaktive_reaktive.$_$.e;
  var subscribe = kotlin_com_badoo_reaktive_reaktive.$_$.f;
  var Instance = kotlin_com_arkivanov_essenty_instance_keeper.$_$.a;
  var get_mainScheduler = kotlin_com_badoo_reaktive_reaktive.$_$.g;
  var disposableScope = kotlin_com_badoo_reaktive_reaktive.$_$.a;
  var MutableValue = kotlin_com_arkivanov_decompose_decompose.$_$.q;
  var subscribe_0 = kotlin_com_arkivanov_essenty_lifecycle.$_$.n;
  var subscribeScoped$default = kotlin_com_badoo_reaktive_reaktive.$_$.j;
  var subscribeScoped$default_0 = kotlin_com_badoo_reaktive_reaktive.$_$.k;
  var DisposableScope = kotlin_com_badoo_reaktive_reaktive.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var padStart = kotlin_kotlin.$_$.ja;
  var dismiss = kotlin_com_arkivanov_decompose_decompose.$_$.g;
  var map = kotlin_com_arkivanov_decompose_decompose.$_$.p;
  var SlotNavigation = kotlin_com_arkivanov_decompose_decompose.$_$.d;
  var childSlot = kotlin_com_arkivanov_decompose_decompose.$_$.f;
  var activate = kotlin_com_arkivanov_decompose_decompose.$_$.e;
  var Enum = kotlin_kotlin.$_$.ya;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var Status_INACTIVE_getInstance = kotlin_com_arkivanov_decompose_decompose.$_$.v;
  var Status_ACTIVE_getInstance = kotlin_com_arkivanov_decompose_decompose.$_$.u;
  var SimpleChildNavState = kotlin_com_arkivanov_decompose_decompose.$_$.a;
  var hashCode = kotlin_kotlin.$_$.c8;
  var equals = kotlin_kotlin.$_$.u7;
  var Created = kotlin_com_arkivanov_decompose_decompose.$_$.s;
  var parcelableContainer = kotlin_com_arkivanov_essenty_parcelable.$_$.a;
  var consumeRequired = kotlin_com_arkivanov_essenty_parcelable.$_$.c;
  var shuffled = kotlin_kotlin.$_$.b6;
  var SimpleNavigation = kotlin_com_arkivanov_decompose_decompose.$_$.b;
  var children = kotlin_com_arkivanov_decompose_decompose.$_$.c;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var Default_getInstance = kotlin_kotlin.$_$.s2;
  var replaceCurrent = kotlin_com_arkivanov_decompose_decompose.$_$.o;
  var notNull = kotlin_com_badoo_reaktive_reaktive.$_$.d;
  var map_0 = kotlin_com_badoo_reaktive_reaktive.$_$.c;
  var listOfNotNull = kotlin_kotlin.$_$.h5;
  var toString_0 = kotlin_kotlin.$_$.ic;
  var isInterface = kotlin_kotlin.$_$.h8;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var charSequenceLength = kotlin_kotlin.$_$.p7;
  var charSequenceGet = kotlin_kotlin.$_$.o7;
  var toString_1 = kotlin_kotlin.$_$.c2;
  var toLong = kotlin_kotlin.$_$.t8;
  var joinToString = kotlin_kotlin.$_$.z4;
  var mapCapacity = kotlin_kotlin.$_$.k5;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var getValue = kotlin_kotlin.$_$.t4;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var random = kotlin_kotlin.$_$.v5;
  var onCreate = kotlin_com_arkivanov_essenty_lifecycle.$_$.a;
  var onStart = kotlin_com_arkivanov_essenty_lifecycle.$_$.d;
  var onResume = kotlin_com_arkivanov_essenty_lifecycle.$_$.c;
  var onPause = kotlin_com_arkivanov_essenty_lifecycle.$_$.b;
  var onStop = kotlin_com_arkivanov_essenty_lifecycle.$_$.e;
  var Callbacks = kotlin_com_arkivanov_essenty_lifecycle.$_$.f;
  var removePrefix = kotlin_kotlin.$_$.ka;
  var bringToFront = kotlin_com_arkivanov_decompose_decompose.$_$.i;
  var singleOf = kotlin_com_badoo_reaktive_reaktive.$_$.h;
  var Feature1Component = kotlin_Decompose_sample_shared_dynamic_features_feature1Impl.$_$.a;
  var Feature2Component = kotlin_Decompose_sample_shared_dynamic_features_feature2Impl.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultCardsComponent, 'DefaultCardsComponent', classMeta);
  setMetadataFor(Model, 'Model', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Handler, 'Handler', classMeta, VOID, [Instance]);
  setMetadataFor(SavedState, 'SavedState', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultCardComponent, 'DefaultCardComponent', classMeta, VOID, [DisposableScope]);
  setMetadataFor(Config_0, 'Config', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultCountersComponent, 'DefaultCountersComponent', classMeta);
  setMetadataFor(Model_0, 'Model', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(State, 'State', classMeta, VOID, [Parcelable]);
  setMetadataFor(DialogConfig, 'DialogConfig', classMeta, VOID, [Parcelable]);
  setMetadataFor(Handler_0, 'Handler', classMeta, VOID, [Instance, DisposableScope]);
  setMetadataFor(DefaultCounterComponent, 'DefaultCounterComponent', classMeta);
  setMetadataFor(Children, 'Children', classMeta);
  setMetadataFor(Mode, 'Mode', classMeta, Enum);
  setMetadataFor(CustomNavigationComponent, 'CustomNavigationComponent', interfaceMeta);
  setMetadataFor(Config_1, 'Config', classMeta, VOID, [Parcelable]);
  setMetadataFor(NavigationState, 'NavigationState', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultCustomNavigationComponent, 'DefaultCustomNavigationComponent', classMeta, VOID, [CustomNavigationComponent]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(State_0, 'State', classMeta, VOID, [Parcelable]);
  setMetadataFor(Handler_1, 'Handler', classMeta, VOID, [Instance]);
  setMetadataFor(DefaultKittenComponent, 'DefaultKittenComponent', classMeta);
  setMetadataFor(Model_1, 'Model', classMeta);
  setMetadataFor(ImageType, 'ImageType', classMeta, Enum);
  setMetadataFor(DefaultDialogComponent, 'DefaultDialogComponent', classMeta);
  setMetadataFor(Config_2, 'Config', interfaceMeta, VOID, [Parcelable]);
  setMetadataFor(Feature1, 'Feature1', objectMeta, VOID, [Config_2]);
  setMetadataFor(Feature2, 'Feature2', classMeta, VOID, [Config_2]);
  setMetadataFor(DefaultDynamicFeaturesComponent, 'DefaultDynamicFeaturesComponent', classMeta);
  setMetadataFor(Child, 'Child', classMeta);
  setMetadataFor(Feature1Child, 'Feature1Child', classMeta, Child);
  setMetadataFor(Feature2Child, 'Feature2Child', classMeta, Child);
  setMetadataFor(Config_3, 'Config', interfaceMeta, VOID, [Parcelable]);
  setMetadataFor(Loading, 'Loading', objectMeta, VOID, [Config_3]);
  setMetadataFor(Feature, 'Feature', objectMeta, VOID, [Config_3]);
  setMetadataFor(Error_0, 'Error', objectMeta, VOID, [Config_3]);
  setMetadataFor(DefaultDynamicFeatureComponent, 'DefaultDynamicFeatureComponent', classMeta);
  setMetadataFor(Child_0, 'Child', classMeta);
  setMetadataFor(LoadingChild, 'LoadingChild', classMeta, Child_0);
  setMetadataFor(FeatureChild, 'FeatureChild', classMeta, Child_0);
  setMetadataFor(ErrorChild, 'ErrorChild', classMeta, Child_0);
  setMetadataFor(Installed, 'Installed', objectMeta);
  setMetadataFor(Cancelled, 'Cancelled', objectMeta);
  setMetadataFor(Error_1, 'Error', objectMeta);
  setMetadataFor(List, 'List', objectMeta, VOID, [Parcelable]);
  setMetadataFor(Details, 'Details', classMeta, VOID, [Parcelable]);
  setMetadataFor(NavigationState_0, 'NavigationState', classMeta, VOID, [Parcelable]);
  setMetadataFor(DefaultMultiPaneComponent, 'DefaultMultiPaneComponent', classMeta, VOID, [DisposableScope]);
  setMetadataFor(Children_0, 'Children', classMeta);
  setMetadataFor(ArticleEntity, 'ArticleEntity', classMeta);
  setMetadataFor(DefaultArticleDatabase, 'DefaultArticleDatabase', classMeta);
  setMetadataFor(LorenIpsumGenerator, 'LorenIpsumGenerator', objectMeta);
  setMetadataFor(Model_2, 'Model', classMeta);
  setMetadataFor(Article, 'Article', classMeta);
  setMetadataFor(ArticleDetailsComponent, 'ArticleDetailsComponent', interfaceMeta);
  setMetadataFor(DefaultArticleDetailsComponent, 'DefaultArticleDetailsComponent', classMeta, VOID, [ArticleDetailsComponent, DisposableScope]);
  setMetadataFor(Model_3, 'Model', classMeta);
  setMetadataFor(Article_0, 'Article', classMeta);
  setMetadataFor(ArticleListComponent, 'ArticleListComponent', interfaceMeta);
  setMetadataFor(DefaultArticleListComponent, 'DefaultArticleListComponent', classMeta, VOID, [ArticleListComponent, DisposableScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Callbacks]);
  setMetadataFor(Config_4, 'Config', interfaceMeta, VOID, [Parcelable]);
  setMetadataFor(Counters, 'Counters', objectMeta, VOID, [Config_4]);
  setMetadataFor(Cards, 'Cards', objectMeta, VOID, [Config_4]);
  setMetadataFor(MultiPane, 'MultiPane', objectMeta, VOID, [Config_4]);
  setMetadataFor(DynamicFeatures, 'DynamicFeatures', objectMeta, VOID, [Config_4]);
  setMetadataFor(CustomNavigation, 'CustomNavigation', objectMeta, VOID, [Config_4]);
  setMetadataFor(None, 'None', objectMeta);
  setMetadataFor(Web, 'Web', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DefaultRootComponent, 'DefaultRootComponent', classMeta);
  setMetadataFor(Child_1, 'Child', classMeta);
  setMetadataFor(CountersChild, 'CountersChild', classMeta, Child_1);
  setMetadataFor(CardsChild, 'CardsChild', classMeta, Child_1);
  setMetadataFor(MultiPaneChild, 'MultiPaneChild', classMeta, Child_1);
  setMetadataFor(DynamicFeaturesChild, 'DynamicFeaturesChild', classMeta, Child_1);
  setMetadataFor(CustomNavigationChild, 'CustomNavigationChild', classMeta, Child_1);
  setMetadataFor(DefaultFeatureInstaller, 'DefaultFeatureInstaller', objectMeta);
  //endregion
  function card($this, config, componentContext) {
    return new DefaultCardComponent(componentContext, config.jag_1, config.kag_1);
  }
  function Companion() {
    Companion_instance = this;
    this.lag_1 = listOf([new Long(-14057287, 0), new Long(-1618884, 0), new Long(-14176672, 0), new Long(-812014, 0)]);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Config(color, number) {
    this.jag_1 = color;
    this.kag_1 = number;
  }
  protoOf(Config).toString = function () {
    return 'Config(color=' + toString(this.jag_1) + ', number=' + this.kag_1 + ')';
  };
  protoOf(Config).hashCode = function () {
    var result = this.jag_1.hashCode();
    result = imul(result, 31) + this.kag_1 | 0;
    return result;
  };
  protoOf(Config).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Config))
      return false;
    var tmp0_other_with_cast = other instanceof Config ? other : THROW_CCE();
    if (!this.jag_1.equals(tmp0_other_with_cast.jag_1))
      return false;
    if (!(this.kag_1 === tmp0_other_with_cast.kag_1))
      return false;
    return true;
  };
  function DefaultCardsComponent$_stack$lambda() {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp1_mapIndexed = Companion_getInstance().lag_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_mapIndexed, 10));
    var index = 0;
    var tmp0_iterator = tmp1_mapIndexed.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.cards.DefaultCardsComponent._stack.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      tmp$ret$0 = new Config(item, tmp2__anonymous__z9zvc9 + 1 | 0);
      tmp0_mapIndexedTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapIndexedTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function DefaultCardsComponent$card$ref($boundThis) {
    var l = function (p0, p1) {
      return card($boundThis, p0, p1);
    };
    l.callableName = 'card';
    return l;
  }
  function DefaultCardsComponent$onCardSwiped$lambda($index) {
    return function (stack) {
      var config = stack.g($index);
      return plus(listOf_0(config), minus(stack, config));
    };
  }
  function DefaultCardsComponent(componentContext) {
    Companion_getInstance();
    this.mag_1 = componentContext;
    this.nag_1 = StackNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.childStack' call
    var tmp0_childStack = this.nag_1;
    var tmp1_childStack = DefaultCardsComponent$_stack$lambda;
    var tmp2_childStack = DefaultCardsComponent$card$ref(this);
    tmp$ret$0 = childStack(this, tmp0_childStack, tmp1_childStack, getKClass(Config), 'DefaultChildStack', true, false, tmp2_childStack);
    tmp.oag_1 = tmp$ret$0;
    this.pag_1 = this.oag_1;
  }
  protoOf(DefaultCardsComponent).pi = function () {
    return this.mag_1.pi();
  };
  protoOf(DefaultCardsComponent).oi = function () {
    return this.mag_1.oi();
  };
  protoOf(DefaultCardsComponent).mi = function () {
    return this.mag_1.mi();
  };
  protoOf(DefaultCardsComponent).ni = function () {
    return this.mag_1.ni();
  };
  protoOf(DefaultCardsComponent).qag = function () {
    return this.pag_1;
  };
  protoOf(DefaultCardsComponent).rag = function (index) {
    navigate(this.nag_1, DefaultCardsComponent$onCardSwiped$lambda(index));
  };
  protoOf(DefaultCardsComponent).sag = function () {
    if (get_items(this.oag_1).f() >= 10) {
      return Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.maxOf' call
    var tmp0_maxOf = get_items(this.oag_1);
    var iterator = tmp0_maxOf.c();
    if (!iterator.d())
      throw NoSuchElementException_init_$Create$();
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.cards.DefaultCardsComponent.onAddClicked.<anonymous>' call
    var tmp1__anonymous__uwfjfc = iterator.e();
    tmp$ret$0 = tmp1__anonymous__uwfjfc.di_1.kag_1;
    var maxValue = tmp$ret$0;
    while (iterator.d()) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.sample.shared.cards.DefaultCardsComponent.onAddClicked.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iterator.e();
      tmp$ret$1 = tmp2__anonymous__z9zvc9.di_1.kag_1;
      var v = tmp$ret$1;
      if (compareTo(maxValue, v) < 0) {
        maxValue = v;
      }
    }
    tmp$ret$2 = maxValue;
    var maxNumber = tmp$ret$2;
    push(this.nag_1, new Config(Companion_getInstance().lag_1.g(maxNumber % Companion_getInstance().lag_1.f() | 0), maxNumber + 1 | 0));
  };
  protoOf(DefaultCardsComponent).tag = function () {
    pop(this.nag_1);
  };
  function Model(color, title, status, text) {
    status = status === VOID ? '' : status;
    text = text === VOID ? '' : text;
    this.uag_1 = color;
    this.vag_1 = title;
    this.wag_1 = status;
    this.xag_1 = text;
  }
  protoOf(Model).yag = function (color, title, status, text) {
    return new Model(color, title, status, text);
  };
  protoOf(Model).zag = function (color, title, status, text, $super) {
    color = color === VOID ? this.uag_1 : color;
    title = title === VOID ? this.vag_1 : title;
    status = status === VOID ? this.wag_1 : status;
    text = text === VOID ? this.xag_1 : text;
    return $super === VOID ? this.yag(color, title, status, text) : $super.yag.call(this, color, title, status, text);
  };
  protoOf(Model).toString = function () {
    return 'Model(color=' + toString(this.uag_1) + ', title=' + this.vag_1 + ', status=' + this.wag_1 + ', text=' + this.xag_1 + ')';
  };
  protoOf(Model).hashCode = function () {
    var result = this.uag_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.vag_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.wag_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xag_1) | 0;
    return result;
  };
  protoOf(Model).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model))
      return false;
    var tmp0_other_with_cast = other instanceof Model ? other : THROW_CCE();
    if (!this.uag_1.equals(tmp0_other_with_cast.uag_1))
      return false;
    if (!(this.vag_1 === tmp0_other_with_cast.vag_1))
      return false;
    if (!(this.wag_1 === tmp0_other_with_cast.wag_1))
      return false;
    if (!(this.xag_1 === tmp0_other_with_cast.xag_1))
      return false;
    return true;
  };
  function DefaultCardComponent$Handler$start$lambda(this$0) {
    return function (it) {
      this$0.bah_1.jab(this$0.bah_1.b2() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function setStatus($this, status) {
    update($this.hah_1, DefaultCardComponent$setStatus$lambda(status));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.jah_1 = 'SAVED_STATE';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Handler(initialCount, tickScheduler) {
    this.aah_1 = tickScheduler;
    this.bah_1 = BehaviorSubject(initialCount);
    this.cah_1 = this.bah_1;
    this.dah_1 = null;
  }
  protoOf(Handler).aj = function () {
    var tmp = this;
    var tmp_0 = observableInterval(new Long(250, 0), this.aah_1);
    tmp.dah_1 = subscribe(tmp_0, VOID, VOID, VOID, VOID, DefaultCardComponent$Handler$start$lambda(this));
  };
  protoOf(Handler).bj = function () {
    var tmp0_safe_receiver = this.dah_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
    this.dah_1 = null;
  };
  protoOf(Handler).kg = function () {
    this.bj();
  };
  function SavedState(count) {
    this.kah_1 = count;
  }
  function DefaultCardComponent$lambda(this$0) {
    return function () {
      return new SavedState(this$0.gah_1.cah_1.b2());
    };
  }
  function DefaultCardComponent$lambda$lambda($count) {
    return function (it) {
      return it.zag(VOID, VOID, VOID, 'Count: ' + $count);
    };
  }
  function DefaultCardComponent$lambda_0(this$0) {
    return function (count) {
      update(this$0.hah_1, DefaultCardComponent$lambda$lambda(count));
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_1(this$0) {
    return function () {
      setStatus(this$0, 'Created');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_2(this$0) {
    return function () {
      setStatus(this$0, 'Started');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_3(this$0) {
    return function () {
      setStatus(this$0, 'Resumed');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_4(this$0) {
    return function () {
      setStatus(this$0, 'Paused');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_5(this$0) {
    return function () {
      setStatus(this$0, 'Stopped');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$lambda_6(this$0) {
    return function () {
      setStatus(this$0, 'Destroyed');
      return Unit_getInstance();
    };
  }
  function DefaultCardComponent$Handler$start$ref($boundThis) {
    var l = function () {
      $boundThis.aj();
      return Unit_getInstance();
    };
    l.callableName = 'start';
    return l;
  }
  function DefaultCardComponent$Handler$stop$ref($boundThis) {
    var l = function () {
      $boundThis.bj();
      return Unit_getInstance();
    };
    l.callableName = 'stop';
    return l;
  }
  function DefaultCardComponent$setStatus$lambda($status) {
    return function (it) {
      return it.zag(VOID, VOID, 'Status: ' + $status);
    };
  }
  function DefaultCardComponent(componentContext, color, number, tickScheduler) {
    Companion_getInstance_0();
    tickScheduler = tickScheduler === VOID ? get_mainScheduler() : tickScheduler;
    this.eah_1 = componentContext;
    this.fah_1 = disposableScope();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'com.arkivanov.essenty.instancekeeper.getOrCreate' call
    var tmp1_getOrCreate = this.oi();
    var tmp$ret$2;
    // Inline function 'com.arkivanov.essenty.instancekeeper.getOrCreate' call
    var tmp0_getOrCreate = getKClass(Handler);
    var tmp_0 = tmp1_getOrCreate.kh(tmp0_getOrCreate);
    var instance = (tmp_0 == null ? true : tmp_0 instanceof Handler) ? tmp_0 : THROW_CCE();
    if (instance == null) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.sample.shared.cards.card.DefaultCardComponent.handler.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.statekeeper.consume' call
      var tmp0_consume = this.ni();
      Companion_getInstance_0();
      var tmp1_consume = 'SAVED_STATE';
      tmp$ret$0 = tmp0_consume.eh(tmp1_consume, getKClass(SavedState));
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kah_1;
      tmp$ret$1 = new Handler(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, tickScheduler);
      instance = tmp$ret$1;
      tmp1_getOrCreate.lh(tmp0_getOrCreate, instance);
    }
    tmp$ret$2 = instance;
    tmp$ret$3 = tmp$ret$2;
    tmp.gah_1 = tmp$ret$3;
    this.hah_1 = MutableValue(new Model(color, number.toString()));
    this.iah_1 = this.hah_1;
    var tmp_1 = this.ni();
    Companion_getInstance_0();
    tmp_1.fh('SAVED_STATE', DefaultCardComponent$lambda(this));
    this.bab(this.gah_1.cah_1, VOID, VOID, VOID, VOID, DefaultCardComponent$lambda_0(this));
    var tmp_2 = this.mi();
    var tmp_3 = DefaultCardComponent$lambda_1(this);
    var tmp_4 = DefaultCardComponent$lambda_2(this);
    var tmp_5 = DefaultCardComponent$lambda_3(this);
    var tmp_6 = DefaultCardComponent$lambda_4(this);
    var tmp_7 = DefaultCardComponent$lambda_5(this);
    subscribe_0(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, DefaultCardComponent$lambda_6(this));
    var tmp_8 = this.mi();
    var tmp_9 = DefaultCardComponent$Handler$start$ref(this.gah_1);
    subscribe_0(tmp_8, VOID, tmp_9, VOID, VOID, DefaultCardComponent$Handler$stop$ref(this.gah_1));
  }
  protoOf(DefaultCardComponent).pi = function () {
    return this.eah_1.pi();
  };
  protoOf(DefaultCardComponent).oi = function () {
    return this.eah_1.oi();
  };
  protoOf(DefaultCardComponent).mi = function () {
    return this.eah_1.mi();
  };
  protoOf(DefaultCardComponent).ni = function () {
    return this.eah_1.ni();
  };
  protoOf(DefaultCardComponent).o1s = function () {
    return this.fah_1.o1s();
  };
  protoOf(DefaultCardComponent).wp = function () {
    this.fah_1.wp();
  };
  protoOf(DefaultCardComponent).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.fah_1.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  };
  protoOf(DefaultCardComponent).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.fah_1.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  };
  protoOf(DefaultCardComponent).lah = function () {
    return this.iah_1;
  };
  function child($this, config, componentContext) {
    var tmp = 'Counter ' + config.mah_1;
    var tmp_0 = DefaultCountersComponent$child$lambda($this, config);
    return new DefaultCounterComponent(componentContext, tmp, config.nah_1, tmp_0, DefaultCountersComponent$child$pop$ref($this.pah_1));
  }
  function Config_0(index, isBackEnabled) {
    this.mah_1 = index;
    this.nah_1 = isBackEnabled;
  }
  protoOf(Config_0).toString = function () {
    return 'Config(index=' + this.mah_1 + ', isBackEnabled=' + this.nah_1 + ')';
  };
  protoOf(Config_0).hashCode = function () {
    var result = this.mah_1;
    result = imul(result, 31) + (this.nah_1 | 0) | 0;
    return result;
  };
  protoOf(Config_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Config_0))
      return false;
    var tmp0_other_with_cast = other instanceof Config_0 ? other : THROW_CCE();
    if (!(this.mah_1 === tmp0_other_with_cast.mah_1))
      return false;
    if (!(this.nah_1 === tmp0_other_with_cast.nah_1))
      return false;
    return true;
  };
  function child$pop(receiver) {
    pop(receiver);
  }
  function DefaultCountersComponent$child$ref($boundThis) {
    var l = function (p0, p1) {
      return child($boundThis, p0, p1);
    };
    l.callableName = 'child';
    return l;
  }
  function DefaultCountersComponent$_childStack$lambda($tmp1_childStack) {
    return function () {
      return listOf_0($tmp1_childStack);
    };
  }
  function DefaultCountersComponent$child$lambda(this$0, $config) {
    return function () {
      push(this$0.pah_1, new Config_0($config.mah_1 + 1 | 0, true));
      return Unit_getInstance();
    };
  }
  function DefaultCountersComponent$child$pop$ref($boundThis) {
    return function () {
      child$pop($boundThis);
      return Unit_getInstance();
    };
  }
  function DefaultCountersComponent(componentContext) {
    this.oah_1 = componentContext;
    this.pah_1 = StackNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.childStack' call
    var tmp0_childStack = this.pah_1;
    var tmp1_childStack = new Config_0(0, false);
    var tmp2_childStack = DefaultCountersComponent$child$ref(this);
    tmp$ret$0 = childStack(this, tmp0_childStack, DefaultCountersComponent$_childStack$lambda(tmp1_childStack), getKClass(Config_0), 'DefaultChildStack', true, false, tmp2_childStack);
    tmp.qah_1 = tmp$ret$0;
  }
  protoOf(DefaultCountersComponent).pi = function () {
    return this.oah_1.pi();
  };
  protoOf(DefaultCountersComponent).oi = function () {
    return this.oah_1.oi();
  };
  protoOf(DefaultCountersComponent).mi = function () {
    return this.oah_1.mi();
  };
  protoOf(DefaultCountersComponent).ni = function () {
    return this.oah_1.ni();
  };
  protoOf(DefaultCountersComponent).rah = function () {
    return this.qah_1;
  };
  function Model_0(title, text, isBackEnabled) {
    title = title === VOID ? '' : title;
    text = text === VOID ? '' : text;
    isBackEnabled = isBackEnabled === VOID ? false : isBackEnabled;
    this.sah_1 = title;
    this.tah_1 = text;
    this.uah_1 = isBackEnabled;
  }
  protoOf(Model_0).toString = function () {
    return 'Model(title=' + this.sah_1 + ', text=' + this.tah_1 + ', isBackEnabled=' + this.uah_1 + ')';
  };
  protoOf(Model_0).hashCode = function () {
    var result = getStringHashCode(this.sah_1);
    result = imul(result, 31) + getStringHashCode(this.tah_1) | 0;
    result = imul(result, 31) + (this.uah_1 | 0) | 0;
    return result;
  };
  protoOf(Model_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model_0))
      return false;
    var tmp0_other_with_cast = other instanceof Model_0 ? other : THROW_CCE();
    if (!(this.sah_1 === tmp0_other_with_cast.sah_1))
      return false;
    if (!(this.tah_1 === tmp0_other_with_cast.tah_1))
      return false;
    if (!(this.uah_1 === tmp0_other_with_cast.uah_1))
      return false;
    return true;
  };
  function DefaultCounterComponent$Handler$lambda$lambda(it) {
    return it.wah(it.vah_1 + 1 | 0);
  }
  function DefaultCounterComponent$Handler$lambda(this$0) {
    return function (it) {
      update(this$0.yah_1, DefaultCounterComponent$Handler$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function toModel(_this__u8e3s4, $this) {
    return new Model_0($this.zah_1, formatCount($this, _this__u8e3s4.vah_1), $this.aai_1);
  }
  function formatCount($this, count) {
    return padStart(count.toString(), 3, _Char___init__impl__6a9atx(48));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.jai_1 = 'STATE';
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function State(count) {
    count = count === VOID ? 0 : count;
    this.vah_1 = count;
  }
  protoOf(State).wah = function (count) {
    return new State(count);
  };
  protoOf(State).toString = function () {
    return 'State(count=' + this.vah_1 + ')';
  };
  protoOf(State).hashCode = function () {
    return this.vah_1;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!(this.vah_1 === tmp0_other_with_cast.vah_1))
      return false;
    return true;
  };
  function DialogConfig(count) {
    this.kai_1 = count;
  }
  protoOf(DialogConfig).toString = function () {
    return 'DialogConfig(count=' + this.kai_1 + ')';
  };
  protoOf(DialogConfig).hashCode = function () {
    return this.kai_1;
  };
  protoOf(DialogConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DialogConfig))
      return false;
    var tmp0_other_with_cast = other instanceof DialogConfig ? other : THROW_CCE();
    if (!(this.kai_1 === tmp0_other_with_cast.kai_1))
      return false;
    return true;
  };
  function Handler_0(initialState, tickScheduler) {
    this.xah_1 = disposableScope();
    this.yah_1 = MutableValue(initialState);
    var tmp = observableInterval(new Long(250, 0), tickScheduler);
    this.bab(tmp, VOID, VOID, VOID, VOID, DefaultCounterComponent$Handler$lambda(this));
  }
  protoOf(Handler_0).o1s = function () {
    return this.xah_1.o1s();
  };
  protoOf(Handler_0).wp = function () {
    this.xah_1.wp();
  };
  protoOf(Handler_0).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.xah_1.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  };
  protoOf(Handler_0).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.xah_1.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  };
  protoOf(Handler_0).kg = function () {
    this.wp();
  };
  function DefaultCounterComponent$model$lambda(this$0) {
    return function (it) {
      return toModel(it, this$0);
    };
  }
  function invoke$dismiss(receiver) {
    dismiss(receiver);
  }
  function DefaultCounterComponent$_dialogSlot$lambda$dismiss$ref($boundThis) {
    return function () {
      invoke$dismiss($boundThis);
      return Unit_getInstance();
    };
  }
  function DefaultCounterComponent$_dialogSlot$lambda(this$0) {
    return function (config, _anonymous_parameter_1__qggqgd) {
      var tmp = 'Value: ' + formatCount(this$0, config.kai_1);
      return new DefaultDialogComponent('Counter', tmp, DefaultCounterComponent$_dialogSlot$lambda$dismiss$ref(this$0.gai_1));
    };
  }
  function DefaultCounterComponent$_dialogSlot$lambda_0() {
    return null;
  }
  function DefaultCounterComponent$lambda(this$0) {
    return function () {
      return this$0.eai_1.yah_1.b2();
    };
  }
  function DefaultCounterComponent(componentContext, title, isBackEnabled, onNext, onPrev, tickScheduler) {
    Companion_getInstance_1();
    tickScheduler = tickScheduler === VOID ? get_mainScheduler() : tickScheduler;
    this.zah_1 = title;
    this.aai_1 = isBackEnabled;
    this.bai_1 = onNext;
    this.cai_1 = onPrev;
    this.dai_1 = componentContext;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'com.arkivanov.essenty.instancekeeper.getOrCreate' call
    var tmp0_getOrCreate = this.oi();
    Companion_getInstance_1();
    var tmp1_getOrCreate = 'STATE';
    var tmp_0 = tmp0_getOrCreate.kh(tmp1_getOrCreate);
    var instance = (tmp_0 == null ? true : tmp_0 instanceof Handler_0) ? tmp_0 : THROW_CCE();
    if (instance == null) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.sample.shared.counters.counter.DefaultCounterComponent.handler.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.statekeeper.consume' call
      var tmp0_consume = this.ni();
      Companion_getInstance_1();
      var tmp1_consume = 'STATE';
      tmp$ret$0 = tmp0_consume.eh(tmp1_consume, getKClass(State));
      var tmp0_elvis_lhs = tmp$ret$0;
      tmp$ret$1 = new Handler_0(tmp0_elvis_lhs == null ? new State() : tmp0_elvis_lhs, tickScheduler);
      instance = tmp$ret$1;
      tmp0_getOrCreate.lh(tmp1_getOrCreate, instance);
    }
    tmp$ret$2 = instance;
    tmp.eai_1 = tmp$ret$2;
    var tmp_1 = this;
    tmp_1.fai_1 = map(this.eai_1.yah_1, DefaultCounterComponent$model$lambda(this));
    this.gai_1 = SlotNavigation();
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'com.arkivanov.decompose.router.slot.childSlot' call
    var tmp0_childSlot = this.gai_1;
    var tmp1_childSlot = DefaultCounterComponent$_dialogSlot$lambda(this);
    var tmp2_childSlot = DefaultCounterComponent$_dialogSlot$lambda_0;
    tmp$ret$3 = childSlot(this, tmp0_childSlot, getKClass(DialogConfig), 'DefaultChildSlot', tmp2_childSlot, false, true, tmp1_childSlot);
    tmp_2.hai_1 = tmp$ret$3;
    this.iai_1 = this.hai_1;
    var tmp_3 = this.ni();
    Companion_getInstance_1();
    tmp_3.fh('STATE', DefaultCounterComponent$lambda(this));
  }
  protoOf(DefaultCounterComponent).pi = function () {
    return this.dai_1.pi();
  };
  protoOf(DefaultCounterComponent).oi = function () {
    return this.dai_1.oi();
  };
  protoOf(DefaultCounterComponent).mi = function () {
    return this.dai_1.mi();
  };
  protoOf(DefaultCounterComponent).ni = function () {
    return this.dai_1.ni();
  };
  protoOf(DefaultCounterComponent).lah = function () {
    return this.fai_1;
  };
  protoOf(DefaultCounterComponent).lai = function () {
    return this.iai_1;
  };
  protoOf(DefaultCounterComponent).mai = function () {
    activate(this.gai_1, new DialogConfig(this.eai_1.yah_1.b2().vah_1));
  };
  protoOf(DefaultCounterComponent).nai = function () {
    this.bai_1();
  };
  protoOf(DefaultCounterComponent).oai = function () {
    this.cai_1();
  };
  var Mode_CAROUSEL_instance;
  var Mode_PAGER_instance;
  var Mode_entriesInitialized;
  function Mode_initEntries() {
    if (Mode_entriesInitialized)
      return Unit_getInstance();
    Mode_entriesInitialized = true;
    Mode_CAROUSEL_instance = new Mode('CAROUSEL', 0);
    Mode_PAGER_instance = new Mode('PAGER', 1);
  }
  function Children(items, index, mode) {
    this.pai_1 = items;
    this.qai_1 = index;
    this.rai_1 = mode;
  }
  function Mode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Mode_CAROUSEL_getInstance() {
    Mode_initEntries();
    return Mode_CAROUSEL_instance;
  }
  function Mode_PAGER_getInstance() {
    Mode_initEntries();
    return Mode_PAGER_instance;
  }
  function CustomNavigationComponent() {
  }
  function Config_1(imageType) {
    this.xai_1 = imageType;
  }
  protoOf(Config_1).toString = function () {
    return 'Config(imageType=' + this.xai_1 + ')';
  };
  protoOf(Config_1).hashCode = function () {
    return this.xai_1.hashCode();
  };
  protoOf(Config_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Config_1))
      return false;
    var tmp0_other_with_cast = other instanceof Config_1 ? other : THROW_CCE();
    if (!this.xai_1.equals(tmp0_other_with_cast.xai_1))
      return false;
    return true;
  };
  function NavigationState(configurations, index, mode) {
    this.yai_1 = configurations;
    this.zai_1 = index;
    this.aaj_1 = mode;
  }
  protoOf(NavigationState).jk = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp1_mapIndexed = this.yai_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var tmp0_mapIndexedTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_mapIndexed, 10));
    var index = 0;
    var tmp0_iterator = tmp1_mapIndexed.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.NavigationState.<get-children>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      tmp$ret$0 = new SimpleChildNavState(item, tmp2__anonymous__z9zvc9 === this.zai_1 ? Status_ACTIVE_getInstance() : Status_INACTIVE_getInstance());
      tmp0_mapIndexedTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapIndexedTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(NavigationState).baj = function (configurations, index, mode) {
    return new NavigationState(configurations, index, mode);
  };
  protoOf(NavigationState).caj = function (configurations, index, mode, $super) {
    configurations = configurations === VOID ? this.yai_1 : configurations;
    index = index === VOID ? this.zai_1 : index;
    mode = mode === VOID ? this.aaj_1 : mode;
    return $super === VOID ? this.baj(configurations, index, mode) : $super.baj.call(this, configurations, index, mode);
  };
  protoOf(NavigationState).toString = function () {
    return 'NavigationState(configurations=' + this.yai_1 + ', index=' + this.zai_1 + ', mode=' + this.aaj_1 + ')';
  };
  protoOf(NavigationState).hashCode = function () {
    var result = hashCode(this.yai_1);
    result = imul(result, 31) + this.zai_1 | 0;
    result = imul(result, 31) + this.aaj_1.hashCode() | 0;
    return result;
  };
  protoOf(NavigationState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationState))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationState ? other : THROW_CCE();
    if (!equals(this.yai_1, tmp0_other_with_cast.yai_1))
      return false;
    if (!(this.zai_1 === tmp0_other_with_cast.zai_1))
      return false;
    if (!this.aaj_1.equals(tmp0_other_with_cast.aaj_1))
      return false;
    return true;
  };
  function DefaultCustomNavigationComponent$_children$lambda() {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = values();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.length);
    var indexedObject = tmp1_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent._children.<anonymous>.<anonymous>' call
      tmp$ret$0 = new Config_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new NavigationState(tmp$ret$2, 0, Mode_CAROUSEL_getInstance());
  }
  function DefaultCustomNavigationComponent$_children$lambda_0(state, transformer) {
    return transformer(state);
  }
  function DefaultCustomNavigationComponent$_children$lambda_1(state, children) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(children, 10));
    var tmp0_iterator = children.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent._children.<anonymous>.<anonymous>' call
      tmp$ret$0 = item instanceof Created ? item : THROW_CCE();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new Children(tmp$ret$2, state.zai_1, state.aaj_1);
  }
  function DefaultCustomNavigationComponent$_children$lambda_2(it) {
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent._children.<anonymous>.<anonymous>' call
    tmp$ret$0 = it.zai_1 > 0;
    if (tmp$ret$0) {
      tmp = it;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent._children.<anonymous>.<anonymous>' call
      tmp$ret$2 = DefaultCustomNavigationComponent$_children$lambda$lambda(tmp0_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    return tmp_0;
  }
  function DefaultCustomNavigationComponent$_children$lambda$lambda($tmp0_safe_receiver) {
    return function () {
      return $tmp0_safe_receiver.caj(VOID, $tmp0_safe_receiver.zai_1 - 1 | 0);
    };
  }
  function DefaultCustomNavigationComponent$_children$lambda_3(config, componentContext) {
    return new DefaultKittenComponent(componentContext, config.xai_1);
  }
  function DefaultCustomNavigationComponent$_children$lambda_4(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function DefaultCustomNavigationComponent$_children$lambda_5(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    return Unit_getInstance();
  }
  function DefaultCustomNavigationComponent$_children$lambda_6(it) {
    return parcelableContainer(it);
  }
  function DefaultCustomNavigationComponent$_children$lambda_7(it) {
    return consumeRequired(it, getKClass(NavigationState));
  }
  function DefaultCustomNavigationComponent$onSwitchToPagerClicked$lambda(state) {
    return state.caj(VOID, VOID, Mode_PAGER_getInstance());
  }
  function DefaultCustomNavigationComponent$onSwitchToCarouselClicked$lambda(state) {
    return state.caj(VOID, VOID, Mode_CAROUSEL_getInstance());
  }
  function DefaultCustomNavigationComponent$onForwardClicked$lambda(state) {
    return state.caj(VOID, (state.zai_1 + 1 | 0) % state.yai_1.f() | 0);
  }
  function DefaultCustomNavigationComponent$onBackwardClicked$lambda(state) {
    var size = state.yai_1.f();
    return state.caj(VOID, ((size + state.zai_1 | 0) - 1 | 0) % size | 0);
  }
  function DefaultCustomNavigationComponent$onShuffleClicked$lambda(state) {
    return state.caj(shuffled(state.yai_1));
  }
  function DefaultCustomNavigationComponent(componentContext) {
    this.daj_1 = componentContext;
    this.eaj_1 = new SimpleNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.children.children' call
    var tmp0_children = this.eaj_1;
    var tmp1_children = DefaultCustomNavigationComponent$_children$lambda;
    var tmp2_children = DefaultCustomNavigationComponent$_children$lambda_0;
    var tmp3_children = DefaultCustomNavigationComponent$_children$lambda_1;
    var tmp4_children = DefaultCustomNavigationComponent$_children$lambda_2;
    var tmp5_children = DefaultCustomNavigationComponent$_children$lambda_3;
    var tmp6_children = DefaultCustomNavigationComponent$_children$lambda_4;
    var tmp7_children = DefaultCustomNavigationComponent$_children$lambda_5;
    var tmp_0 = DefaultCustomNavigationComponent$_children$lambda_6;
    tmp$ret$0 = children(this, tmp0_children, 'carousel', tmp1_children, tmp_0, DefaultCustomNavigationComponent$_children$lambda_7, tmp2_children, tmp3_children, tmp6_children, tmp7_children, tmp4_children, tmp5_children);
    tmp.faj_1 = tmp$ret$0;
    this.gaj_1 = this.faj_1;
  }
  protoOf(DefaultCustomNavigationComponent).pi = function () {
    return this.daj_1.pi();
  };
  protoOf(DefaultCustomNavigationComponent).oi = function () {
    return this.daj_1.oi();
  };
  protoOf(DefaultCustomNavigationComponent).mi = function () {
    return this.daj_1.mi();
  };
  protoOf(DefaultCustomNavigationComponent).ni = function () {
    return this.daj_1.ni();
  };
  protoOf(DefaultCustomNavigationComponent).jk = function () {
    return this.gaj_1;
  };
  protoOf(DefaultCustomNavigationComponent).sai = function () {
    this.eaj_1.gl(DefaultCustomNavigationComponent$onSwitchToPagerClicked$lambda);
  };
  protoOf(DefaultCustomNavigationComponent).tai = function () {
    this.eaj_1.gl(DefaultCustomNavigationComponent$onSwitchToCarouselClicked$lambda);
  };
  protoOf(DefaultCustomNavigationComponent).uai = function () {
    this.eaj_1.gl(DefaultCustomNavigationComponent$onForwardClicked$lambda);
  };
  protoOf(DefaultCustomNavigationComponent).vai = function () {
    this.eaj_1.gl(DefaultCustomNavigationComponent$onBackwardClicked$lambda);
  };
  protoOf(DefaultCustomNavigationComponent).wai = function () {
    this.eaj_1.gl(DefaultCustomNavigationComponent$onShuffleClicked$lambda);
  };
  function DefaultKittenComponent$Handler$resume$lambda$lambda(it) {
    return it.wah(it.haj_1 + 1 | 0);
  }
  function DefaultKittenComponent$Handler$resume$lambda(this$0) {
    return function (it) {
      update(this$0.iaj_1, DefaultKittenComponent$Handler$resume$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function toModel_0(_this__u8e3s4, $this) {
    return new Model_1($this.kaj_1, padStart(_this__u8e3s4.haj_1.toString(), 3, _Char___init__impl__6a9atx(48)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.oaj_1 = 'STATE';
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function State_0(count) {
    count = count === VOID ? 0 : count;
    this.haj_1 = count;
  }
  protoOf(State_0).wah = function (count) {
    return new State_0(count);
  };
  protoOf(State_0).toString = function () {
    return 'State(count=' + this.haj_1 + ')';
  };
  protoOf(State_0).hashCode = function () {
    return this.haj_1;
  };
  protoOf(State_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State_0))
      return false;
    var tmp0_other_with_cast = other instanceof State_0 ? other : THROW_CCE();
    if (!(this.haj_1 === tmp0_other_with_cast.haj_1))
      return false;
    return true;
  };
  function Handler_1(initialState) {
    this.iaj_1 = MutableValue(initialState);
    this.jaj_1 = null;
  }
  protoOf(Handler_1).paj = function () {
    var tmp0_safe_receiver = this.jaj_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
    var tmp = this;
    var tmp_0 = observableInterval(new Long(250, 0), get_mainScheduler());
    tmp.jaj_1 = subscribe(tmp_0, true, VOID, VOID, VOID, DefaultKittenComponent$Handler$resume$lambda(this));
  };
  protoOf(Handler_1).qaj = function () {
    var tmp0_safe_receiver = this.jaj_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
    this.jaj_1 = null;
  };
  protoOf(Handler_1).kg = function () {
    this.qaj();
  };
  function DefaultKittenComponent$model$lambda(this$0) {
    return function (it) {
      return toModel_0(it, this$0);
    };
  }
  function DefaultKittenComponent$Handler$resume$ref($boundThis) {
    var l = function () {
      $boundThis.paj();
      return Unit_getInstance();
    };
    l.callableName = 'resume';
    return l;
  }
  function DefaultKittenComponent$Handler$pause$ref($boundThis) {
    var l = function () {
      $boundThis.qaj();
      return Unit_getInstance();
    };
    l.callableName = 'pause';
    return l;
  }
  function DefaultKittenComponent$lambda(this$0) {
    return function () {
      return this$0.maj_1.iaj_1.b2();
    };
  }
  function DefaultKittenComponent(componentContext, imageType) {
    Companion_getInstance_2();
    this.kaj_1 = imageType;
    this.laj_1 = componentContext;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'com.arkivanov.essenty.instancekeeper.getOrCreate' call
    var tmp0_getOrCreate = this.oi();
    Companion_getInstance_2();
    var tmp1_getOrCreate = 'STATE';
    var tmp_0 = tmp0_getOrCreate.kh(tmp1_getOrCreate);
    var instance = (tmp_0 == null ? true : tmp_0 instanceof Handler_1) ? tmp_0 : THROW_CCE();
    if (instance == null) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.DefaultKittenComponent.handler.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.essenty.statekeeper.consume' call
      var tmp0_consume = this.ni();
      Companion_getInstance_2();
      var tmp1_consume = 'STATE';
      tmp$ret$0 = tmp0_consume.eh(tmp1_consume, getKClass(State_0));
      var tmp0_elvis_lhs = tmp$ret$0;
      tmp$ret$1 = new Handler_1(tmp0_elvis_lhs == null ? new State_0() : tmp0_elvis_lhs);
      instance = tmp$ret$1;
      tmp0_getOrCreate.lh(tmp1_getOrCreate, instance);
    }
    tmp$ret$2 = instance;
    tmp.maj_1 = tmp$ret$2;
    var tmp_1 = this;
    tmp_1.naj_1 = map(this.maj_1.iaj_1, DefaultKittenComponent$model$lambda(this));
    var tmp_2 = this.mi();
    var tmp_3 = DefaultKittenComponent$Handler$resume$ref(this.maj_1);
    subscribe_0(tmp_2, VOID, tmp_3, VOID, VOID, DefaultKittenComponent$Handler$pause$ref(this.maj_1));
    var tmp_4 = this.ni();
    Companion_getInstance_2();
    tmp_4.fh('STATE', DefaultKittenComponent$lambda(this));
  }
  protoOf(DefaultKittenComponent).pi = function () {
    return this.laj_1.pi();
  };
  protoOf(DefaultKittenComponent).oi = function () {
    return this.laj_1.oi();
  };
  protoOf(DefaultKittenComponent).mi = function () {
    return this.laj_1.mi();
  };
  protoOf(DefaultKittenComponent).ni = function () {
    return this.laj_1.ni();
  };
  protoOf(DefaultKittenComponent).lah = function () {
    return this.naj_1;
  };
  var ImageType_CAT_1_instance;
  var ImageType_CAT_2_instance;
  var ImageType_CAT_3_instance;
  var ImageType_CAT_4_instance;
  var ImageType_CAT_5_instance;
  function values() {
    return [ImageType_CAT_1_getInstance(), ImageType_CAT_2_getInstance(), ImageType_CAT_3_getInstance(), ImageType_CAT_4_getInstance(), ImageType_CAT_5_getInstance()];
  }
  var ImageType_entriesInitialized;
  function ImageType_initEntries() {
    if (ImageType_entriesInitialized)
      return Unit_getInstance();
    ImageType_entriesInitialized = true;
    ImageType_CAT_1_instance = new ImageType('CAT_1', 0);
    ImageType_CAT_2_instance = new ImageType('CAT_2', 1);
    ImageType_CAT_3_instance = new ImageType('CAT_3', 2);
    ImageType_CAT_4_instance = new ImageType('CAT_4', 3);
    ImageType_CAT_5_instance = new ImageType('CAT_5', 4);
  }
  function Model_1(imageType, text) {
    this.raj_1 = imageType;
    this.saj_1 = text;
  }
  protoOf(Model_1).toString = function () {
    return 'Model(imageType=' + this.raj_1 + ', text=' + this.saj_1 + ')';
  };
  protoOf(Model_1).hashCode = function () {
    var result = this.raj_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.saj_1) | 0;
    return result;
  };
  protoOf(Model_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model_1))
      return false;
    var tmp0_other_with_cast = other instanceof Model_1 ? other : THROW_CCE();
    if (!this.raj_1.equals(tmp0_other_with_cast.raj_1))
      return false;
    if (!(this.saj_1 === tmp0_other_with_cast.saj_1))
      return false;
    return true;
  };
  function ImageType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ImageType_CAT_1_getInstance() {
    ImageType_initEntries();
    return ImageType_CAT_1_instance;
  }
  function ImageType_CAT_2_getInstance() {
    ImageType_initEntries();
    return ImageType_CAT_2_instance;
  }
  function ImageType_CAT_3_getInstance() {
    ImageType_initEntries();
    return ImageType_CAT_3_instance;
  }
  function ImageType_CAT_4_getInstance() {
    ImageType_initEntries();
    return ImageType_CAT_4_instance;
  }
  function ImageType_CAT_5_getInstance() {
    ImageType_initEntries();
    return ImageType_CAT_5_instance;
  }
  function DefaultDialogComponent(title, message, onDismissed) {
    this.taj_1 = title;
    this.uaj_1 = message;
    this.vaj_1 = onDismissed;
  }
  protoOf(DefaultDialogComponent).waj = function () {
    return this.taj_1;
  };
  protoOf(DefaultDialogComponent).l8 = function () {
    return this.uaj_1;
  };
  protoOf(DefaultDialogComponent).xaj = function () {
    this.vaj_1();
  };
  function Feature1() {
    Feature1_instance = this;
  }
  var Feature1_instance;
  function Feature1_getInstance() {
    if (Feature1_instance == null)
      new Feature1();
    return Feature1_instance;
  }
  function Feature2(magicNumber) {
    this.yaj_1 = magicNumber;
  }
  protoOf(Feature2).toString = function () {
    return 'Feature2(magicNumber=' + this.yaj_1 + ')';
  };
  protoOf(Feature2).hashCode = function () {
    return this.yaj_1;
  };
  protoOf(Feature2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Feature2))
      return false;
    var tmp0_other_with_cast = other instanceof Feature2 ? other : THROW_CCE();
    if (!(this.yaj_1 === tmp0_other_with_cast.yaj_1))
      return false;
    return true;
  };
  function child_0($this, config, componentContext) {
    var tmp0_subject = config;
    var tmp;
    if (tmp0_subject instanceof Feature1) {
      tmp = new Feature1Child(feature1($this, componentContext));
    } else {
      if (tmp0_subject instanceof Feature2) {
        tmp = new Feature2Child(feature2($this, config, componentContext));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function feature1($this, componentContext) {
    return new DefaultDynamicFeatureComponent(componentContext, 'feature1Impl', $this.zaj_1, DefaultDynamicFeaturesComponent$feature1$lambda($this));
  }
  function feature2($this, config, componentContext) {
    return new DefaultDynamicFeatureComponent(componentContext, 'feature2Impl', $this.zaj_1, DefaultDynamicFeaturesComponent$feature2$lambda(config, $this));
  }
  function Config_2() {
  }
  function DefaultDynamicFeaturesComponent$child$ref($boundThis) {
    var l = function (p0, p1) {
      return child_0($boundThis, p0, p1);
    };
    l.callableName = 'child';
    return l;
  }
  function DefaultDynamicFeaturesComponent$stack$lambda($tmp1_childStack) {
    return function () {
      return listOf_0($tmp1_childStack);
    };
  }
  function DefaultDynamicFeaturesComponent$feature1$lambda$lambda(this$0) {
    return function () {
      push(this$0.bak_1, new Feature2(Default_getInstance().u4()));
      return Unit_getInstance();
    };
  }
  function DefaultDynamicFeaturesComponent$feature1$lambda(this$0) {
    return function (featureComponentContext) {
      return Feature1_0(featureComponentContext, DefaultDynamicFeaturesComponent$feature1$lambda$lambda(this$0));
    };
  }
  function invoke$pop(receiver) {
    pop(receiver);
  }
  function DefaultDynamicFeaturesComponent$feature2$lambda$pop$ref($boundThis) {
    return function () {
      invoke$pop($boundThis);
      return Unit_getInstance();
    };
  }
  function DefaultDynamicFeaturesComponent$feature2$lambda($config, this$0) {
    return function (featureComponentContext) {
      return Feature2_0(featureComponentContext, $config.yaj_1, DefaultDynamicFeaturesComponent$feature2$lambda$pop$ref(this$0.bak_1));
    };
  }
  function DefaultDynamicFeaturesComponent(componentContext, featureInstaller) {
    this.zaj_1 = featureInstaller;
    this.aak_1 = componentContext;
    this.bak_1 = StackNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.childStack' call
    var tmp0_childStack = this.bak_1;
    var tmp1_childStack = Feature1_getInstance();
    var tmp2_childStack = DefaultDynamicFeaturesComponent$child$ref(this);
    tmp$ret$0 = childStack(this, tmp0_childStack, DefaultDynamicFeaturesComponent$stack$lambda(tmp1_childStack), getKClass(Config_2), 'DefaultChildStack', true, true, tmp2_childStack);
    tmp.cak_1 = tmp$ret$0;
  }
  protoOf(DefaultDynamicFeaturesComponent).pi = function () {
    return this.aak_1.pi();
  };
  protoOf(DefaultDynamicFeaturesComponent).oi = function () {
    return this.aak_1.oi();
  };
  protoOf(DefaultDynamicFeaturesComponent).mi = function () {
    return this.aak_1.mi();
  };
  protoOf(DefaultDynamicFeaturesComponent).ni = function () {
    return this.aak_1.ni();
  };
  protoOf(DefaultDynamicFeaturesComponent).rah = function () {
    return this.cak_1;
  };
  function Feature1Child(feature1) {
    Child.call(this);
    this.dak_1 = feature1;
  }
  function Feature2Child(feature2) {
    Child.call(this);
    this.eak_1 = feature2;
  }
  function Child() {
  }
  function Loading() {
    Loading_instance = this;
  }
  var Loading_instance;
  function Loading_getInstance() {
    if (Loading_instance == null)
      new Loading();
    return Loading_instance;
  }
  function Feature() {
    Feature_instance = this;
  }
  var Feature_instance;
  function Feature_getInstance() {
    if (Feature_instance == null)
      new Feature();
    return Feature_instance;
  }
  function Error_0() {
    Error_instance = this;
  }
  var Error_instance;
  function Error_getInstance() {
    if (Error_instance == null)
      new Error_0();
    return Error_instance;
  }
  function child_1($this, config, componentContext) {
    var tmp0_subject = config;
    var tmp;
    if (tmp0_subject instanceof Loading) {
      tmp = loading($this, componentContext);
    } else {
      if (tmp0_subject instanceof Feature) {
        tmp = new FeatureChild($this.hak_1(componentContext));
      } else {
        if (tmp0_subject instanceof Error_0) {
          tmp = new ErrorChild($this.fak_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function loading($this, componentContext) {
    var tmp$ret$1;
    // Inline function 'com.badoo.reaktive.disposable.scope.disposableScope' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = disposableScope();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultDynamicFeatureComponent.loading.<anonymous>' call
    var tmp = componentContext.mi();
    var tmp_0 = DefaultDynamicFeatureComponent$loading$lambda($this, tmp0_apply);
    subscribe_0(tmp, tmp_0, VOID, VOID, VOID, VOID, DisposableScope$dispose$ref(tmp0_apply));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0;
    return new LoadingChild($this.fak_1);
  }
  function loadFeature(_this__u8e3s4, $this) {
    var tmp = $this.gak_1.lak($this.fak_1);
    _this__u8e3s4.dab(tmp, VOID, VOID, VOID, DefaultDynamicFeatureComponent$loadFeature$lambda($this));
  }
  function Config_3() {
  }
  function DefaultDynamicFeatureComponent$child$ref($boundThis) {
    var l = function (p0, p1) {
      return child_1($boundThis, p0, p1);
    };
    l.callableName = 'child';
    return l;
  }
  function DefaultDynamicFeatureComponent$stack$lambda($tmp1_childStack) {
    return function () {
      return listOf_0($tmp1_childStack);
    };
  }
  function DefaultDynamicFeatureComponent$loading$lambda(this$0, $tmp0_apply) {
    return function () {
      loadFeature($tmp0_apply, this$0);
      return Unit_getInstance();
    };
  }
  function DisposableScope$dispose$ref($boundThis) {
    var l = function () {
      $boundThis.wp();
      return Unit_getInstance();
    };
    l.callableName = 'dispose';
    return l;
  }
  function DefaultDynamicFeatureComponent$loadFeature$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_subject = it;
      var tmp;
      if (tmp0_subject instanceof Installed) {
        replaceCurrent(this$0.jak_1, Feature_getInstance());
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if (tmp0_subject instanceof Cancelled) {
          tmp_0 = true;
        } else {
          tmp_0 = tmp0_subject instanceof Error_1;
        }
        if (tmp_0) {
          replaceCurrent(this$0.jak_1, Error_getInstance());
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
      var tmp0_let = tmp;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultDynamicFeatureComponent.loadFeature.<anonymous>.<anonymous>' call
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function DefaultDynamicFeatureComponent(componentContext, name, featureInstaller, factory) {
    this.fak_1 = name;
    this.gak_1 = featureInstaller;
    this.hak_1 = factory;
    this.iak_1 = componentContext;
    this.jak_1 = StackNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.childStack' call
    var tmp0_childStack = this.jak_1;
    var tmp1_childStack = Loading_getInstance();
    var tmp2_childStack = DefaultDynamicFeatureComponent$child$ref(this);
    tmp$ret$0 = childStack(this, tmp0_childStack, DefaultDynamicFeatureComponent$stack$lambda(tmp1_childStack), getKClass(Config_3), 'DefaultChildStack', true, false, tmp2_childStack);
    tmp.kak_1 = tmp$ret$0;
  }
  protoOf(DefaultDynamicFeatureComponent).pi = function () {
    return this.iak_1.pi();
  };
  protoOf(DefaultDynamicFeatureComponent).oi = function () {
    return this.iak_1.oi();
  };
  protoOf(DefaultDynamicFeatureComponent).mi = function () {
    return this.iak_1.mi();
  };
  protoOf(DefaultDynamicFeatureComponent).ni = function () {
    return this.iak_1.ni();
  };
  protoOf(DefaultDynamicFeatureComponent).rah = function () {
    return this.kak_1;
  };
  function LoadingChild(name) {
    Child_0.call(this);
    this.mak_1 = name;
  }
  function FeatureChild(feature) {
    Child_0.call(this);
    this.nak_1 = feature;
  }
  function ErrorChild(name) {
    Child_0.call(this);
    this.oak_1 = name;
  }
  function Child_0() {
  }
  function Installed() {
    Installed_instance = this;
  }
  var Installed_instance;
  function Installed_getInstance() {
    if (Installed_instance == null)
      new Installed();
    return Installed_instance;
  }
  function Cancelled() {
  }
  function Error_1() {
  }
  function List() {
    List_instance = this;
  }
  var List_instance;
  function List_getInstance() {
    if (List_instance == null)
      new List();
    return List_instance;
  }
  function Details(articleId) {
    this.pak_1 = articleId;
  }
  protoOf(Details).toString = function () {
    return 'Details(articleId=' + toString(this.pak_1) + ')';
  };
  protoOf(Details).hashCode = function () {
    return this.pak_1.hashCode();
  };
  protoOf(Details).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Details))
      return false;
    var tmp0_other_with_cast = other instanceof Details ? other : THROW_CCE();
    if (!this.pak_1.equals(tmp0_other_with_cast.pak_1))
      return false;
    return true;
  };
  function child_2($this, config, componentContext) {
    var tmp0_subject = config;
    var tmp;
    if (tmp0_subject instanceof List) {
      tmp = listComponent($this, componentContext);
    } else {
      if (tmp0_subject instanceof Details) {
        tmp = detailsComponent($this, config, componentContext);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function listComponent($this, componentContext) {
    var tmp = notNull($this.uak_1);
    var tmp_0 = map_0(tmp, DefaultMultiPaneComponent$listComponent$lambda);
    return new DefaultArticleListComponent(componentContext, $this.sak_1, tmp_0, DefaultMultiPaneComponent$listComponent$lambda_0($this));
  }
  function detailsComponent($this, config, componentContext) {
    var tmp = notNull($this.uak_1);
    var tmp_0 = map_0(tmp, DefaultMultiPaneComponent$detailsComponent$lambda);
    return new DefaultArticleDetailsComponent(componentContext, $this.sak_1, config.pak_1, tmp_0, DefaultMultiPaneComponent$detailsComponent$lambda_0($this));
  }
  function NavigationState_0(isMultiPane, articleId) {
    isMultiPane = isMultiPane === VOID ? false : isMultiPane;
    articleId = articleId === VOID ? null : articleId;
    this.wak_1 = isMultiPane;
    this.xak_1 = articleId;
  }
  protoOf(NavigationState_0).jk = function () {
    return listOfNotNull([new SimpleChildNavState(List_getInstance(), (this.wak_1 ? true : this.xak_1 == null) ? Status_ACTIVE_getInstance() : Status_INACTIVE_getInstance()), !(this.xak_1 == null) ? new SimpleChildNavState(new Details(this.xak_1), Status_ACTIVE_getInstance()) : null]);
  };
  protoOf(NavigationState_0).yak = function (isMultiPane, articleId) {
    return new NavigationState_0(isMultiPane, articleId);
  };
  protoOf(NavigationState_0).zak = function (isMultiPane, articleId, $super) {
    isMultiPane = isMultiPane === VOID ? this.wak_1 : isMultiPane;
    articleId = articleId === VOID ? this.xak_1 : articleId;
    return $super === VOID ? this.yak(isMultiPane, articleId) : $super.yak.call(this, isMultiPane, articleId);
  };
  protoOf(NavigationState_0).toString = function () {
    return 'NavigationState(isMultiPane=' + this.wak_1 + ', articleId=' + toString_0(this.xak_1) + ')';
  };
  protoOf(NavigationState_0).hashCode = function () {
    var result = this.wak_1 | 0;
    result = imul(result, 31) + (this.xak_1 == null ? 0 : this.xak_1.hashCode()) | 0;
    return result;
  };
  protoOf(NavigationState_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigationState_0))
      return false;
    var tmp0_other_with_cast = other instanceof NavigationState_0 ? other : THROW_CCE();
    if (!(this.wak_1 === tmp0_other_with_cast.wak_1))
      return false;
    if (!equals(this.xak_1, tmp0_other_with_cast.xak_1))
      return false;
    return true;
  };
  function children$lambda() {
    return new NavigationState_0();
  }
  function DefaultMultiPaneComponent$children$_init_$ref_qpgthd() {
    return function () {
      return children$lambda();
    };
  }
  function DefaultMultiPaneComponent$children$lambda(navState, event) {
    return event(navState);
  }
  function DefaultMultiPaneComponent$children$lambda_0(navState, children) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = children.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.multipane.DefaultMultiPaneComponent.children.<anonymous>.<anonymous>' call
        var tmp = element.fi();
        tmp$ret$0 = !(tmp == null) ? isInterface(tmp, ArticleListComponent) : false;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$_0('Collection contains no element matching the predicate.');
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = tmp_0 instanceof Created ? tmp_0 : THROW_CCE();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = children.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        var tmp$ret$2;
        // Inline function 'com.arkivanov.sample.shared.multipane.DefaultMultiPaneComponent.children.<anonymous>.<anonymous>' call
        var tmp_2 = element_0.fi();
        tmp$ret$2 = !(tmp_2 == null) ? isInterface(tmp_2, ArticleDetailsComponent) : false;
        if (tmp$ret$2) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    tmp$ret$4 = tmp$ret$3;
    var tmp_3 = tmp$ret$4;
    return new Children_0(navState.wak_1, tmp_1, (tmp_3 == null ? true : tmp_3 instanceof Created) ? tmp_3 : THROW_CCE());
  }
  function DefaultMultiPaneComponent$children$lambda_1(this$0) {
    return function (newState, _anonymous_parameter_1__qggqgd) {
      this$0.uak_1.jab(newState);
      return Unit_getInstance();
    };
  }
  function DefaultMultiPaneComponent$child$ref($boundThis) {
    var l = function (p0, p1) {
      return child_2($boundThis, p0, p1);
    };
    l.callableName = 'child';
    return l;
  }
  function DefaultMultiPaneComponent$children$lambda_2(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    return Unit_getInstance();
  }
  function DefaultMultiPaneComponent$children$lambda_3(it) {
    return null;
  }
  function DefaultMultiPaneComponent$children$lambda_4(it) {
    return parcelableContainer(it);
  }
  function DefaultMultiPaneComponent$children$lambda_5(it) {
    return consumeRequired(it, getKClass(NavigationState_0));
  }
  function DefaultMultiPaneComponent$listComponent$lambda(it) {
    return it.wak_1 ? it.xak_1 : null;
  }
  function DefaultMultiPaneComponent$listComponent$lambda$lambda($id) {
    return function (it) {
      return it.zak(VOID, $id);
    };
  }
  function DefaultMultiPaneComponent$listComponent$lambda_0(this$0) {
    return function (id) {
      this$0.tak_1.gl(DefaultMultiPaneComponent$listComponent$lambda$lambda(id));
      return Unit_getInstance();
    };
  }
  function DefaultMultiPaneComponent$detailsComponent$lambda(it) {
    return !it.wak_1;
  }
  function DefaultMultiPaneComponent$detailsComponent$lambda$lambda(it) {
    return it.zak(VOID, null);
  }
  function DefaultMultiPaneComponent$detailsComponent$lambda_0(this$0) {
    return function () {
      this$0.tak_1.gl(DefaultMultiPaneComponent$detailsComponent$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function DefaultMultiPaneComponent$setMultiPane$lambda($isMultiPane) {
    return function (it) {
      return it.zak($isMultiPane);
    };
  }
  function DefaultMultiPaneComponent(componentContext) {
    this.qak_1 = componentContext;
    this.rak_1 = disposableScope_0(componentContext);
    this.sak_1 = new DefaultArticleDatabase();
    this.tak_1 = new SimpleNavigation();
    this.uak_1 = BehaviorSubject(null);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.children.children' call
    var tmp0_children = this.tak_1;
    var tmp1_children = DefaultMultiPaneComponent$children$_init_$ref_qpgthd();
    var tmp2_children = DefaultMultiPaneComponent$children$lambda;
    var tmp3_children = DefaultMultiPaneComponent$children$lambda_0;
    var tmp4_children = DefaultMultiPaneComponent$children$lambda_1(this);
    var tmp5_children = DefaultMultiPaneComponent$child$ref(this);
    var tmp6_children = DefaultMultiPaneComponent$children$lambda_2;
    var tmp7_children = DefaultMultiPaneComponent$children$lambda_3;
    var tmp_0 = DefaultMultiPaneComponent$children$lambda_4;
    tmp$ret$0 = children(this, tmp0_children, 'children', tmp1_children, tmp_0, DefaultMultiPaneComponent$children$lambda_5, tmp2_children, tmp3_children, tmp4_children, tmp6_children, tmp7_children, tmp5_children);
    tmp.vak_1 = tmp$ret$0;
  }
  protoOf(DefaultMultiPaneComponent).pi = function () {
    return this.qak_1.pi();
  };
  protoOf(DefaultMultiPaneComponent).oi = function () {
    return this.qak_1.oi();
  };
  protoOf(DefaultMultiPaneComponent).mi = function () {
    return this.qak_1.mi();
  };
  protoOf(DefaultMultiPaneComponent).ni = function () {
    return this.qak_1.ni();
  };
  protoOf(DefaultMultiPaneComponent).o1s = function () {
    return this.rak_1.o1s();
  };
  protoOf(DefaultMultiPaneComponent).wp = function () {
    this.rak_1.wp();
  };
  protoOf(DefaultMultiPaneComponent).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.rak_1.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  };
  protoOf(DefaultMultiPaneComponent).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.rak_1.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  };
  protoOf(DefaultMultiPaneComponent).jk = function () {
    return this.vak_1;
  };
  protoOf(DefaultMultiPaneComponent).aal = function (isMultiPane) {
    this.tak_1.gl(DefaultMultiPaneComponent$setMultiPane$lambda(isMultiPane));
  };
  function Children_0(isMultiPane, listChild, detailsChild) {
    this.bal_1 = isMultiPane;
    this.cal_1 = listChild;
    this.dal_1 = detailsChild;
  }
  protoOf(Children_0).toString = function () {
    return 'Children(isMultiPane=' + this.bal_1 + ', listChild=' + this.cal_1 + ', detailsChild=' + this.dal_1 + ')';
  };
  protoOf(Children_0).hashCode = function () {
    var result = this.bal_1 | 0;
    result = imul(result, 31) + this.cal_1.hashCode() | 0;
    result = imul(result, 31) + (this.dal_1 == null ? 0 : this.dal_1.hashCode()) | 0;
    return result;
  };
  protoOf(Children_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Children_0))
      return false;
    var tmp0_other_with_cast = other instanceof Children_0 ? other : THROW_CCE();
    if (!(this.bal_1 === tmp0_other_with_cast.bal_1))
      return false;
    if (!this.cal_1.equals(tmp0_other_with_cast.cal_1))
      return false;
    if (!equals(this.dal_1, tmp0_other_with_cast.dal_1))
      return false;
    return true;
  };
  function ArticleEntity(id, title, text) {
    this.eal_1 = id;
    this.fal_1 = title;
    this.gal_1 = text;
  }
  protoOf(ArticleEntity).toString = function () {
    return 'ArticleEntity(id=' + toString(this.eal_1) + ', title=' + this.fal_1 + ', text=' + this.gal_1 + ')';
  };
  protoOf(ArticleEntity).hashCode = function () {
    var result = this.eal_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.fal_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.gal_1) | 0;
    return result;
  };
  protoOf(ArticleEntity).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArticleEntity))
      return false;
    var tmp0_other_with_cast = other instanceof ArticleEntity ? other : THROW_CCE();
    if (!this.eal_1.equals(tmp0_other_with_cast.eal_1))
      return false;
    if (!(this.fal_1 === tmp0_other_with_cast.fal_1))
      return false;
    if (!(this.gal_1 === tmp0_other_with_cast.gal_1))
      return false;
    return true;
  };
  function DefaultArticleDatabase$articles$lambda(it) {
    var tmp$ret$6;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(it) > 0;
    if (tmp$ret$0) {
      var tmp$ret$3;
      // Inline function 'kotlin.text.uppercase' call
      var tmp2_uppercase = charSequenceGet(it, 0);
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString_1(tmp2_uppercase);
      tmp$ret$1 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$1.toUpperCase();
      tmp$ret$2 = tmp1_unsafeCast;
      tmp$ret$3 = tmp$ret$2;
      var tmp_0 = toString(tmp$ret$3);
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = it;
      tmp$ret$5 = tmp$ret$4.substring(1);
      tmp = tmp_0 + tmp$ret$5;
    } else {
      tmp = it;
    }
    tmp$ret$6 = tmp;
    return tmp$ret$6;
  }
  function DefaultArticleDatabase() {
    var tmp = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(50);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 50)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'com.arkivanov.sample.shared.multipane.database.DefaultArticleDatabase.articles.<anonymous>' call
        var tmp_0 = toLong(index).r7(new Long(1, 0));
        var tmp_1 = LorenIpsumGenerator_getInstance().ial(Default_getInstance().v6(3, 7), 3);
        var tmp_2 = joinToString(tmp_1, ' ', VOID, VOID, VOID, VOID, DefaultArticleDatabase$articles$lambda);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.List' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.MutableList' call
        var list_0 = ArrayList_init_$Create$(50);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 50)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            var tmp$ret$0;
            // Inline function 'com.arkivanov.sample.shared.multipane.database.DefaultArticleDatabase.articles.<anonymous>.<anonymous>' call
            tmp$ret$0 = LorenIpsumGenerator_getInstance().jal();
            list_0.a(tmp$ret$0);
          }
           while (inductionVariable_0 < 50);
        tmp$ret$1 = list_0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = new ArticleEntity(tmp_0, tmp_2, joinToString(tmp$ret$2, ' '));
        list.a(tmp$ret$3);
      }
       while (inductionVariable < 50);
    tmp$ret$4 = list;
    tmp$ret$5 = tmp$ret$4;
    tmp.kal_1 = tmp$ret$5;
    var tmp_3 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp1_associateBy = this.kal_1;
    var tmp2_associateBy = id$factory();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp1_associateBy, 10)), 16);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp1_associateBy.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      tmp0_associateByTo.h4(tmp2_associateBy(element), element);
    }
    tmp$ret$6 = tmp0_associateByTo;
    tmp$ret$7 = tmp$ret$6;
    tmp_3.lal_1 = tmp$ret$7;
  }
  protoOf(DefaultArticleDatabase).mal = function () {
    return this.kal_1;
  };
  protoOf(DefaultArticleDatabase).nal = function (id) {
    return getValue(this.lal_1, id);
  };
  function id$factory() {
    return getPropertyCallableRef('id', 1, KProperty1, function (receiver) {
      return receiver.eal_1;
    }, null);
  }
  function LorenIpsumGenerator() {
    LorenIpsumGenerator_instance = this;
    this.hal_1 = listOf(['a', 'ab', 'abducat', 'abest', 'abhorreant', 'ac', 'accedere', 'accedis', 'accedit', 'accedunt', 'accessio', 'accommodare', 'accurate', 'accuratius', 'accusamus', 'accusantibus', 'accusantium', 'accusata', 'accusator', 'acri', 'acute', 'acuti', 'acutum', 'acutus', 'ad', 'adamare', 'addidisti', 'adduci', 'adest', 'adhaesiones', 'adhibenda', 'adhibuit', 'adhuc', 'adiit', 'adipiscendarum', 'adipisci', 'adipiscuntur', 'adiungimus', 'adiuvet', 'administrari', 'admirer', 'admissum', 'admodum', 'admonere', 'admonitionem', 'adolescens', 'adoptionem', 'adquiescere', 'adversa', 'adversantur', 'adversarium', 'aegritudine', 'aegritudinem', 'aegritudines', 'aegritudo', 'aeque', 'aequi', 'aequitate', 'aequitatem', 'aequo', 'aequum', 'aetatis', 'aeterno', 'aeternum', 'affecta', 'affecti', 'affectus', 'afferat', 'afferre', 'afferrent', 'affert', 'afficit', 'afficitur', 'affirmatis', 'afflueret', 'afranius', 'agam', 'agatur', 'aiebat', 'ait', 'aiunt', 'albam', 'albuci', 'albucius', 'alia', 'aliae', 'aliam', 'alias', 'aliena', 'alienae', 'alienum', 'alienus', 'alii', 'alios', 'aliqua', 'aliquam', 'aliquando', 'aliquem', 'aliquid', 'aliquo', 'aliquod', 'aliquos', 'aliter', 'aliud', 'allevatio', 'alliciat', 'allicit', 'altera', 'alteram', 'alterum', 'amaret', 'amarissimam', 'amatoriis', 'ambigua', 'amentur', 'amet', 'amice', 'amici', 'amicis', 'amicitia', 'amicitiae', 'amicitiam', 'amicitias', 'amicorum', 'amicos', 'amicum', 'amorem', 'amori', 'amoris', 'amotio', 'amplificarique', 'amputata', 'an', 'ancillae', 'andriam', 'angatur', 'angere', 'angore', 'angoribus', 'angusta', 'angusti', 'animadversionem', 'animadversionis', 'animadvertat', 'animal', 'animi', 'animis', 'animo', 'animos', 'animum', 'animumque', 'animus', 'ante', 'anteponant', 'antiopam', 'antipatrum', 'antiqua', 'antiquis', 'antiquitate', 'apeirian', 'aperiam', 'aperiri', 'aperta', 'apertam', 'appareat', 'appellant', 'appellantur', 'appellat', 'appetendi', 'appetendum', 'appetere', 'approbantibus', 'apte', 'aptior', 'aptissimum', 'aptius', 'apud', 'arare', 'arbitramur', 'arbitrantur', 'arbitrarer', 'arbitraretur', 'arbitratu', 'arbitrer', 'arbitrium', 'arbitror', 'architecto', 'ardore', 'arguerent', 'argumentandum', 'argumentum', 'aristippi', 'aristippus', 'aristotele', 'aristotelem', 'aristoteli', 'armatum', 'arridens', 'ars', 'arte', 'artem', 'artes', 'artibus', 'artifex', 'artis', 'asperiores', 'aspernandum', 'aspernari', 'aspernatur', 'asperner', 'asperum', 'assecutus', 'assentiar', 'assentior', 'assidua', 'assiduitas', 'assueverit', 'assumenda', 'astris', 'at', 'athenis', 'atilii', 'atomi', 'atomis', 'atomorum', 'atomos', 'atomum', 'atomus', 'atque', 'atqui', 'attento', 'attico', 'attingere', 'attulit', 'auctori', 'audaces', 'audeam', 'audiam', 'audiebam', 'audiebamus', 'audire', 'audita', 'audivi', 'augendas', 'augeri', 'aut', 'autem', 'avocent', 'beata', 'beatae', 'beatam', 'beate', 'beateque', 'beatus', 'bella', 'bello', 'bene', 'benivole', 'benivolentiam', 'bestiae', 'blanditiis', 'bona', 'bonae', 'bonarum', 'bonas', 'bonis', 'bono', 'bonorum', 'bonum', 'brevi', 'brevis', 'breviter', 'brute', 'brutus', 'c', 'cadere', 'caecilii', 'caeco', 'caelo', 'calere', 'campum', 'canes', 'captet', 'capti', 'captiosa', 'careat', 'carere', 'careret', 'caret', 'caritatem', 'carum', 'causa', 'causae', 'causam', 'causas', 'cedentem', 'celeritas', 'censes', 'censet', 'centurionum', 'cepisse', 'ceramico', 'cernantur', 'cernimus', 'certa', 'certae', 'certamen', 'certe', 'certissimam', 'ceteris', 'cetero', 'ceterorum', 'chaere', 'choro', 'chorusque', 'chremes', 'chrysippe', 'chrysippi', 'chrysippo', 'cibo', 'circumcisaque', 'cives', 'civibus', 'civitas', 'civitatis', 'civium', 'clamat', 'clariora', 'claris', 'clarorum', 'claudicare', 'cn', 'coercendi', 'coerceri', 'cogitarent', 'cogitavisse', 'cogitemus', 'cognita', 'cognitio', 'cognitione', 'cognitionem', 'cognitionis', 'cognitioque', 'cognomen', 'cognoscerem', 'cognosci', 'cohaerescant', 'cohaerescent', 'collaudata', 'collegi', 'collegisti', 'comit', 'commemorandis', 'commenticiam', 'commodi', 'commodis', 'commodius', 'commune', 'comparandae', 'comparare', 'comparat', 'comparaverit', 'complectitur', 'complexiones', 'compluribus', 'compositis', 'comprehenderit', 'comprobavit', 'concederetur', 'concedo', 'concertationesque', 'concessum', 'conciliant', 'concludaturque', 'conclusionemque', 'conclusum', 'concordia', 'concupiscunt', 'concursio', 'concursionibus', 'conducunt', 'conectitur', 'conetur', 'confectum', 'conferebamus', 'conficiuntque', 'conficiuntur', 'confidam', 'confidere', 'confidet', 'confirmare', 'confirmat', 'confirmatur', 'confirmavit', 'conflixisse', 'conformavit', 'congressus', 'coniuncta', 'coniunctione', 'conquirendae', 'conquisitis', 'conscientia', 'conscientiam', 'consectetur', 'consecutionem', 'consecutus', 'consedit', 'consentaneum', 'consentientis', 'consentinis', 'consequamur', 'consequantur', 'consequatur', 'consequentis', 'consequentium', 'consequi', 'consequuntur', 'consilia', 'consiliisque', 'consilio', 'consistat', 'consoletur', 'conspectum', 'conspiratione', 'constantia', 'constituam', 'constituamus', 'constituant', 'constituit', 'constituto', 'constringendos', 'consuetudine', 'consuetudinum', 'consuevit', 'consul', 'consulatu', 'consule', 'consumere', 'consumeret', 'contemnentes', 'contemnere', 'contemnit', 'contenta', 'contentam', 'contentiones', 'contentus', 'contereret', 'continens', 'continent', 'contineret', 'contineri', 'contra', 'contrariis', 'controversia', 'contumeliae', 'conturbamur', 'convenire', 'conveniunt', 'conversa', 'conversam', 'convicia', 'convincere', 'copiosae', 'copulatas', 'copulationes', 'copulationesque', 'corpora', 'corpore', 'corporis', 'corporisque', 'corporum', 'corpus', 'correcta', 'corrigere', 'corrumpit', 'corrupisti', 'corrupte', 'corrupti', 'cotidie', 'cotidieque', 'credere', 'credo', 'cruciantur', 'crudeli', 'crudelis', 'cui', 'cuiquam', 'cuius', 'culpa', 'cum', 'cumanum', 'cumque', 'cupiditate', 'cupiditates', 'cupiditatibus', 'cupiditatibusque', 'cupiditatum', 'cupio', 'cur', 'cura', 'curiosi', 'curis', 'cursu', 'cyrenaicisque', 'cyrenaicos', 'd', 'damna', 'dare', 'data', 'de', 'debemus', 'debent', 'debeo', 'debet', 'debilitatem', 'debilitati', 'debitis', 'declarant', 'declinabunt', 'declinare', 'declinatio', 'declinationem', 'decore', 'dedecora', 'dediti', 'deditum', 'dedocendi', 'dedocere', 'deduceret', 'defatigatio', 'defendere', 'defendit', 'defenditur', 'defensa', 'definitiones', 'defuit', 'defuturum', 'degendae', 'dein', 'deinde', 'delapsa', 'delectamur', 'delectant', 'delectari', 'delectat', 'delectatio', 'delectatum', 'delectet', 'delectu', 'delectus', 'deleniti', 'delicata', 'delicatissimi', 'democritea', 'democriti', 'democrito', 'democritum', 'democritus', 'denique', 'deorsum', 'deorsus', 'deorum', 'depravare', 'depravata', 'depravate', 'depravatum', 'depulsa', 'derepta', 'derigatur', 'deserere', 'deseruisse', 'deserunt', 'desiderabile', 'desiderant', 'desiderare', 'desideraret', 'desiderat', 'desideraturam', 'desiderent', 'desideret', 'desistemus', 'desistunt', 'desperantes', 'despicationes', 'deteriora', 'deterius', 'deterret', 'deterritum', 'deterruisset', 'detracta', 'detractio', 'detractis', 'detracto', 'detraxisse', 'detraxit', 'detrimenti', 'dialectica', 'dicam', 'dicant', 'dicantur', 'dicas', 'dicat', 'dicebas', 'dicemus', 'dicenda', 'dicendum', 'dicent', 'dicere', 'diceret', 'diceretur', 'dices', 'dici', 'dicit', 'dicitis', 'dicitur', 'dicta', 'dictas', 'dictum', 'dicturam', 'dicturum', 'dicunt', 'didicerimus', 'didicisse', 'didicisset', 'diesque', 'difficile', 'difficilem', 'difficiles', 'difficilius', 'dignissimos', 'dignitatis', 'diis', 'diligamus', 'diligant', 'diligenter', 'diligi', 'diogenem', 'directam', 'dirigentur', 'discedere', 'discenda', 'discere', 'discidia', 'disciplina', 'disciplinae', 'disciplinam', 'disciplinis', 'discordans', 'discordant', 'discordia', 'discordiae', 'displicet', 'disputando', 'disputandum', 'disputari', 'disputata', 'disputatione', 'disputationi', 'disputatum', 'dissensio', 'dissentias', 'dissentientium', 'dissentiet', 'dissentio', 'dissentiunt', 'disserendi', 'disserendum', 'disseretur', 'disseruerunt', 'disserui', 'disserunt', 'dissidens', 'dissident', 'distinctio', 'distinguantur', 'distinguique', 'distrahi', 'diu', 'diuturnitatem', 'diuturnum', 'divelli', 'dividendo', 'divina', 'divinum', 'divitiarum', 'divitias', 'dixeris', 'dixerit', 'dixi', 'dixissem', 'dixisset', 'dixit', 'doceat', 'docendi', 'docere', 'docet', 'docti', 'doctiores', 'doctissimos', 'doctrina', 'doctrinis', 'doctus', 'docui', 'doleamus', 'dolemus', 'dolendum', 'dolere', 'dolor', 'dolore', 'dolorem', 'doloremque', 'dolores', 'doloribus', 'doloris', 'dolorum', 'domesticarum', 'dominationis', 'dominorum', 'dominos', 'domo', 'domus', 'dubio', 'dubitat', 'dubitemus', 'dubium', 'duce', 'ducem', 'ducimus', 'dulce', 'dum', 'duo', 'durissimis', 'duxit', 'e', 'ea', 'eadem', 'eademque', 'eae', 'eam', 'eamque', 'eaque', 'earum', 'earumque', 'eas', 'easque', 'ecce', 'effecerit', 'effectrices', 'efficere', 'efficerent', 'efficeret', 'efficeretur', 'effici', 'efficiantur', 'efficiat', 'efficiatur', 'efficiendi', 'efficit', 'efficitur', 'efflorescere', 'effluere', 'effugiendorum', 'ego', 'egregios', 'ei', 'eidola', 'eisque', 'eitam', 'eius', 'eiusdem', 'elaborare', 'elaboraret', 'electis', 'electram', 'elegans', 'elegantis', 'eligendi', 'eloquentiam', 'emancipaverat', 'emolumenti', 'emolumento', 'enim', 'ennii', 'ennius', 'eo', 'eodem', 'eoque', 'eorum', 'eorumque', 'eos', 'eosdem', 'eosque', 'epicurei', 'epicureis', 'epicureum', 'epicuri', 'epicuro', 'epicurum', 'epicurus', 'epularum', 'equidem', 'equos', 'eram', 'erant', 'erat', 'erga', 'ergo', 'erigimur', 'eriguntur', 'erimus', 'eripuit', 'erit', 'ero', 'errata', 'errem', 'error', 'errore', 'errorem', 'erroribus', 'eruditi', 'eruditionem', 'erudito', 'eruditus', 'erunt', 'esse', 'essent', 'esset', 'est', 'et', 'etenim', 'etiam', 'etiamsi', 'etsi', 'eum', 'eumque', 'euripidis', 'eveniet', 'eveniunt', 'eventurum', 'everti', 'evertitur', 'evertunt', 'evolutio', 'evolvendis', 'ex', 'exaudita', 'excelsus', 'excepturi', 'excruciant', 'exeamus', 'exedunt', 'exeduntur', 'exercendi', 'exercitationem', 'exercitumque', 'exercitus', 'exhorrescere', 'exiguam', 'eximiae', 'existimant', 'existimare', 'existimavit', 'existimo', 'existunt', 'exitum', 'exorsus', 'expectamus', 'expectant', 'expectat', 'expectata', 'expedire', 'expedita', 'expediunt', 'expetenda', 'expetendam', 'expetendas', 'expetendis', 'expetendum', 'expeteremus', 'expeteretur', 'expetitur', 'expleantur', 'explentur', 'explicabo', 'explicari', 'explicatam', 'explicatis', 'explicavi', 'expressas', 'exquirere', 'exquisitaque', 'exquisitis', 'extremo', 'extremum', 'exultat', 'fabellas', 'fabulae', 'fabulas', 'fabulis', 'facere', 'facerem', 'facete', 'faciam', 'faciant', 'faciendi', 'faciendum', 'faciendumve', 'facile', 'facilis', 'facilius', 'facillime', 'facillimis', 'facimus', 'facio', 'faciunt', 'facta', 'factis', 'factorum', 'facultas', 'fallare', 'falli', 'falsarum', 'falsi', 'falsis', 'falso', 'fama', 'fames', 'familiarem', 'familiari', 'familiaritatem', 'familias', 'fana', 'fastidii', 'fastidium', 'fatemur', 'fatendum', 'fautrices', 'fecerint', 'fecerit', 'feci', 'fecisse', 'fecit', 'ferae', 'feramus', 'ferant', 'ferantur', 'fere', 'ferentur', 'ferre', 'ferrentur', 'ferreum', 'ferri', 'ficta', 'fictae', 'fidelissimae', 'fidem', 'fieri', 'filio', 'filium', 'fingi', 'fingitur', 'finibus', 'finiri', 'finis', 'finitas', 'finitum', 'finxerat', 'firmam', 'firme', 'firmissima', 'firmissimum', 'firmitatem', 'fit', 'flagitem', 'fodere', 'foedus', 'fonte', 'fore', 'forensibus', 'foris', 'formidines', 'formidinum', 'fortasse', 'forte', 'fortibus', 'fortitudinem', 'fortitudinis', 'fortitudo', 'fortunae', 'fortunam', 'frequenter', 'fructu', 'fructuosam', 'fruenda', 'fruentem', 'frui', 'fruitur', 'frustra', 'fruuntur', 'fuerit', 'fuga', 'fugiamus', 'fugiat', 'fugienda', 'fugiendam', 'fugiendis', 'fugiendum', 'fugiendus', 'fugit', 'fuisse', 'fuissent', 'fuisset', 'fuit', 'fungimur', 'futura', 'futuris', 'futuros', 'futurove', 'gaudeat', 'gaudemus', 'gaudere', 'generibusque', 'generis', 'genuit', 'genus', 'geometria', 'geometriaque', 'geometrica', 'gerendarum', 'gessisse', 'gloriae', 'gloriatur', 'gloriosis', 'graeca', 'graecam', 'graece', 'graeci', 'graecis', 'graeco', 'graecos', 'graecum', 'grata', 'grate', 'gratia', 'gratiam', 'gratissimo', 'gravioribus', 'gravis', 'gravissimas', 'gravissimis', 'gravissimo', 'gravitate', 'graviter', 'graviterque', 'greges', 'gubernatoris', 'gustare', 'gymnasia', 'habeat', 'habeatur', 'habemus', 'habendus', 'habent', 'habeo', 'habere', 'habet', 'habuit', 'hac', 'hae', 'haec', 'haeret', 'hanc', 'harum', 'has', 'hausta', 'hic', 'hinc', 'his', 'historiae', 'hoc', 'homero', 'homine', 'hominem', 'homines', 'homini', 'hominibus', 'hominum', 'homo', 'honesta', 'honestatis', 'honeste', 'honesto', 'honestum', 'honoris', 'horreat', 'horrent', 'horribiles', 'horrida', 'hortatore', 'hortensio', 'horum', 'hostem', 'hosti', 'hostis', 'huc', 'huic', 'huius', 'humili', 'hunc', 'iactant', 'iactare', 'iam', 'ibidem', 'id', 'idcirco', 'idem', 'idque', 'igitur', 'ignavi', 'ignavia', 'ignaviamque', 'ignem', 'ignorant', 'ignorare', 'ignoratione', 'ignota', 'ii', 'iis', 'iisque', 'illa', 'illaberetur', 'illae', 'illam', 'illas', 'ille', 'illi', 'illis', 'illius', 'illo', 'illud', 'illum', 'illustribus', 'illustriora', 'imagines', 'imbutus', 'imitarentur', 'impediente', 'impediri', 'impedit', 'impeditur', 'impendere', 'impendet', 'impensa', 'imperii', 'imperiis', 'imperio', 'imperitorum', 'imperitos', 'impetu', 'impetum', 'impetus', 'importari', 'improbe', 'improbis', 'improborum', 'in', 'inane', 'inanes', 'inani', 'inanitate', 'inanium', 'inbecilloque', 'incidant', 'inciderint', 'inciderit', 'incidunt', 'inclusae', 'incommoda', 'incorrupte', 'incorruptis', 'inculta', 'incurreret', 'incurrunt', 'incursione', 'indicaverunt', 'indignae', 'indignius', 'individua', 'indocti', 'indoctis', 'indoctum', 'inducitur', 'industria', 'industriae', 'inermis', 'inertissimae', 'ineruditus', 'inesse', 'infantes', 'infanti', 'inferiorem', 'infimum', 'infinitio', 'infinitis', 'infinito', 'infinitum', 'inflammat', 'inflammati', 'ingenia', 'ingenii', 'ingeniis', 'inhaererent', 'inhumanus', 'inimicus', 'initia', 'initiis', 'iniucundus', 'iniuria', 'iniurias', 'iniuste', 'inliberali', 'inmensae', 'inmortalibus', 'innumerabiles', 'inopem', 'inpendente', 'inportuno', 'inpotenti', 'inprobis', 'inprobitas', 'inprobitatem', 'inquam', 'inquit', 'insatiabiles', 'inscientia', 'insequitur', 'insidiarum', 'insipientiam', 'insitam', 'insolens', 'instituendarum', 'instituit', 'institutionem', 'instructior', 'instructus', 'integre', 'integris', 'intellegam', 'intellegamus', 'intellegaturque', 'intellegebat', 'intellegentium', 'intellegere', 'intellegerem', 'intelleges', 'intellegi', 'intellegimus', 'intellegitur', 'intellegunt', 'intemperantes', 'intemperantiam', 'inter', 'intercapedo', 'interdictum', 'interea', 'intereant', 'interesse', 'interesset', 'interiret', 'interpretaris', 'interpretum', 'interrogare', 'interrogari', 'intervalla', 'intervenire', 'intuemur', 'intus', 'inutile', 'inveneris', 'invenerit', 'invenire', 'inveniri', 'inventore', 'investigandi', 'invidi', 'invidia', 'invidiae', 'invidus', 'invitat', 'inviti', 'involuta', 'ipsa', 'ipsam', 'ipsarum', 'ipsas', 'ipse', 'ipsi', 'ipsis', 'ipsius', 'ipso', 'ipsos', 'ipsum', 'iracundia', 'iracundiae', 'irridente', 'is', 'isdem', 'ista', 'istae', 'istam', 'iste', 'isti', 'istis', 'istius', 'ita', 'itaque', 'iuberet', 'iucunda', 'iucunde', 'iucunditas', 'iucunditate', 'iucunditatem', 'iucunditatis', 'iucundius', 'iucundo', 'iucundum', 'iudex', 'iudicabit', 'iudicandum', 'iudicant', 'iudicante', 'iudicare', 'iudicari', 'iudicat', 'iudicatum', 'iudicem', 'iudicia', 'iudicio', 'iudiciorumque', 'iudicium', 'iudico', 'iure', 'ius', 'iuste', 'iusteque', 'iustioribus', 'iustitia', 'iustitiam', 'iustius', 'iusto', 'iuvaret', 'l', 'labefactant', 'labefactetur', 'labitur', 'labor', 'laboramus', 'laborat', 'labore', 'labores', 'laboribus', 'laboriosam', 'laborum', 'laetamur', 'laetetur', 'laetitia', 'laetitiam', 'late', 'latina', 'latinam', 'latinas', 'latine', 'latinis', 'laudabilis', 'laudandis', 'laudantium', 'laudari', 'laudatum', 'laudatur', 'laudem', 'laus', 'lectorem', 'legam', 'legant', 'legantur', 'legat', 'legatis', 'legemus', 'legendam', 'legendi', 'legendis', 'legendos', 'legendum', 'legendus', 'legere', 'legerint', 'legimus', 'legum', 'leguntur', 'leniat', 'leniter', 'levamur', 'leviora', 'levis', 'levitatibus', 'levius', 'libenter', 'liber', 'liberabuntur', 'liberae', 'liberalitati', 'liberamur', 'liberatione', 'liberavisse', 'liberemus', 'liberiusque', 'libero', 'liberos', 'libidinem', 'libidinibus', 'libidinosarum', 'libidinum', 'libido', 'libris', 'libro', 'licebit', 'licet', 'lictores', 'lineam', 'linguam', 'liquidae', 'litterae', 'litteras', 'litteris', 'loca', 'locatus', 'locis', 'loco', 'locos', 'locum', 'locupletiorem', 'locus', 'logikh', 'longinquitate', 'loquerer', 'loqueretur', 'loqui', 'loquuntur', 'lucifugi', 'lucilius', 'ludicra', 'ludus', 'm', 'macedonum', 'maerores', 'maestitiam', 'magis', 'magistra', 'magna', 'magnam', 'magni', 'magnis', 'magnitudinem', 'magnopere', 'magnos', 'magnosque', 'magnum', 'magnus', 'maiestatis', 'maior', 'maiora', 'maiorem', 'maiores', 'maioribus', 'maiorum', 'maius', 'mala', 'malarum', 'male', 'maledici', 'maledicta', 'malint', 'malis', 'malit', 'malivoli', 'malle', 'malo', 'malorum', 'maluisset', 'maluisti', 'malum', 'malunt', 'mandamus', 'mandaremus', 'manilium', 'manu', 'manum', 'manus', 'materia', 'maximam', 'maximasque', 'maxime', 'maximeque', 'maximi', 'maximis', 'maximisque', 'maximo', 'maximos', 'me', 'mea', 'meam', 'medeam', 'medicorum', 'mediocrem', 'mediocris', 'mediocritatem', 'mediocriterne', 'mediocrium', 'medium', 'mei', 'meis', 'mel', 'meliore', 'melius', 'meminerimus', 'meminerit', 'meminerunt', 'meminit', 'memoria', 'memoriter', 'menandri', 'menandro', 'mens', 'mente', 'mentitum', 'meo', 'meque', 'mererer', 'metrodorus', 'metu', 'metuamus', 'metum', 'metuque', 'metus', 'mi', 'migrare', 'mihi', 'militaris', 'minima', 'minime', 'minimum', 'minorem', 'minuendas', 'minuit', 'minus', 'minuti', 'miraretur', 'mirari', 'miser', 'miseram', 'miserius', 'miserum', 'misisti', 'mnesarchum', 'moderatio', 'moderatius', 'modi', 'modice', 'modis', 'modo', 'modum', 'modus', 'molestia', 'molestiae', 'molestiam', 'molestias', 'molestum', 'molita', 'mollis', 'mollitia', 'momenti', 'monet', 'monstret', 'monstruosi', 'morati', 'morbi', 'morbis', 'morborum', 'morbos', 'moribus', 'mors', 'morte', 'mortem', 'mortis', 'motu', 'motum', 'motus', 'moveat', 'movere', 'movet', 'mox', 'mucius', 'multa', 'multam', 'multavit', 'multi', 'multis', 'multitudinem', 'multo', 'multoque', 'multos', 'mundi', 'mundus', 'munere', 'municipem', 'muniti', 'musicis', 'mutae', 'mutans', 'mutat', 'nacti', 'nam', 'nasci', 'nascuntur', 'nati', 'natum', 'natura', 'naturae', 'naturalem', 'naturales', 'naturam', 'natus', 'navigandi', 'ne', 'nec', 'necessariae', 'necessariam', 'necessarius', 'necesse', 'necessitatibus', 'negant', 'negarent', 'negat', 'negent', 'neglegentur', 'neglegit', 'neglexerit', 'nemini', 'nemo', 'nemore', 'neque', 'nescio', 'nesciunt', 'nescius', 'nihil', 'nihilo', 'nimis', 'nimium', 'nisi', 'nivem', 'nixam', 'nobis', 'nocet', 'noctesque', 'nollem', 'nominant', 'nominata', 'nominavi', 'nomine', 'nomini', 'nominis', 'non', 'nondum', 'nonne', 'noris', 'nos', 'nosmet', 'nosque', 'noster', 'nostra', 'nostram', 'nostras', 'nostri', 'nostris', 'nostro', 'nostros', 'nostrum', 'notae', 'notionem', 'notissima', 'novi', 'novum', 'nudus', 'nulla', 'nullae', 'nullam', 'nullas', 'nulli', 'nullo', 'nullus', 'num', 'numen', 'numeranda', 'numeris', 'numquam', 'numquid', 'numquidnam', 'nunc', 'nusquam', 'nutu', 'o', 'ob', 'obcaecati', 'obiecta', 'obligantur', 'oblique', 'oblivione', 'obruamus', 'occulta', 'occultarum', 'occulte', 'occultum', 'octavio', 'oculis', 'ocurreret', 'oderis', 'oderit', 'odia', 'odio', 'odioque', 'odit', 'offendimur', 'offendit', 'officia', 'officii', 'officiis', 'omittam', 'omittantur', 'omittendis', 'omne', 'omnem', 'omnes', 'omnesque', 'omni', 'omnia', 'omnibus', 'omnino', 'omnis', 'omnisque', 'omnium', 'opera', 'operam', 'operis', 'operosam', 'opes', 'opibus', 'opinemur', 'opinionum', 'opinor', 'oporteat', 'oportere', 'oportet', 'optabilem', 'optari', 'optime', 'optimi', 'optimum', 'optimus', 'optinere', 'optio', 'opus', 'oratio', 'oratione', 'orationis', 'oratoribus', 'ordiamur', 'ordinem', 'orestem', 'oriantur', 'oritur', 'ornamenta', 'ornateque', 'ornatum', 'ornatus', 'ortum', 'ostendis', 'ostendit', 'otiosum', 'p', 'pacem', 'pacto', 'pacuvii', 'paene', 'panaetium', 'parabilis', 'paranda', 'pararetur', 'paratus', 'parendum', 'parentes', 'paria', 'pariant', 'pariatur', 'pariendarum', 'pariter', 'pariuntur', 'pars', 'parta', 'parte', 'partem', 'partes', 'partiendo', 'partis', 'partitio', 'partus', 'parum', 'parvam', 'parvos', 'pater', 'patet', 'patiatur', 'patientia', 'patientiamque', 'patre', 'patria', 'patriam', 'patrioque', 'patrius', 'pauca', 'paulo', 'peccandi', 'peccant', 'pecuniae', 'pecunias', 'pedalis', 'pellat', 'pendet', 'penitus', 'per', 'perciperet', 'percipi', 'percipiatur', 'percipit', 'percipitur', 'percurri', 'percussit', 'perdiderunt', 'perdiscere', 'perfecto', 'perferendis', 'perfruique', 'perfunctio', 'pericula', 'periculis', 'periculum', 'perinde', 'permagna', 'permanentes', 'permulta', 'perpauca', 'perpaulum', 'perpessio', 'perpetiuntur', 'perpetua', 'perpetuam', 'perpetuis', 'persecuti', 'persequeretur', 'persequeris', 'persius', 'personae', 'perspecta', 'perspexit', 'perspici', 'perspiciatis', 'perspicuum', 'pertinaces', 'pertinacia', 'pertinax', 'pertineant', 'pertinerent', 'perturbari', 'perturbatur', 'pervenias', 'perveniri', 'petat', 'petentium', 'petulantes', 'phaedrum', 'philosophari', 'philosophi', 'philosophia', 'philosophiae', 'philosophis', 'philosopho', 'philosophorum', 'physici', 'physicis', 'physico', 'placatae', 'placeat', 'placebit', 'placet', 'placuit', 'plane', 'plato', 'platone', 'platonem', 'platonis', 'plena', 'pleniorem', 'plerique', 'plerisque', 'plerumque', 'plura', 'pluribus', 'plurimum', 'plus', 'plusque', 'poena', 'poenis', 'poetae', 'poetarum', 'poetis', 'politus', 'polyaeno', 'ponatur', 'pondere', 'ponderum', 'ponendam', 'ponit', 'ponti', 'ponunt', 'populo', 'porrecta', 'porro', 'posidonium', 'posse', 'possent', 'posset', 'possim', 'possimus', 'possint', 'possit', 'possum', 'possumus', 'possunt', 'postea', 'posteri', 'postremo', 'postulant', 'postulet', 'posuit', 'poterimus', 'poterit', 'potest', 'potiendi', 'potione', 'potiora', 'potitur', 'potius', 'potuimus', 'praebeat', 'praeceptrice', 'praeclara', 'praeclaram', 'praeclare', 'praeclarorum', 'praeda', 'praesens', 'praesenti', 'praesentibus', 'praesentium', 'praesertim', 'praesidia', 'praesidium', 'praestabiliorem', 'praeter', 'praeterea', 'praetereat', 'praeterierunt', 'praeterita', 'praeteritas', 'praetermissum', 'praetermittatur', 'praetermittenda', 'praetor', 'praetore', 'praetorem', 'praetulerit', 'prima', 'primis', 'primisque', 'primo', 'primorum', 'primos', 'primum', 'primus', 'principes', 'principio', 'privamur', 'privatio', 'privatione', 'privavisse', 'priventur', 'pro', 'probabis', 'probabo', 'probamus', 'probant', 'probantur', 'probarem', 'probarent', 'probarentur', 'probaretur', 'probatum', 'probaturum', 'probatus', 'probes', 'probet', 'probo', 'procedat', 'profecta', 'profecto', 'profectus', 'proficiscuntur', 'progrediens', 'prohiberet', 'prompta', 'pronuntiaret', 'propemodum', 'proposita', 'propositum', 'propriae', 'proprius', 'propter', 'propterea', 'prorsus', 'prosperum', 'prospexit', 'protervi', 'provident', 'provincia', 'provincias', 'provocarem', 'provocatus', 'publicam', 'pueri', 'puerilis', 'pueriliter', 'pueros', 'pugnantibus', 'pugnare', 'pulcherrimum', 'pulchraeque', 'putamus', 'putanda', 'putant', 'putarent', 'putas', 'putat', 'putavisset', 'putem', 'putemus', 'putent', 'putet', 'puto', 'qua', 'quadam', 'quae', 'quaedam', 'quaeque', 'quaerat', 'quaerenda', 'quaerendi', 'quaerendum', 'quaeri', 'quaerimus', 'quaeritur', 'quaeso', 'quaestionem', 'quale', 'quales', 'qualisque', 'quam', 'quamquam', 'quamque', 'quamvis', 'quandam', 'quando', 'quanta', 'quantaque', 'quanti', 'quanto', 'quantum', 'quantumcumque', 'quantus', 'quapropter', 'quarum', 'quas', 'quasi', 'que', 'quem', 'queo', 'qui', 'quia', 'quibus', 'quibusdam', 'quicquam', 'quicquid', 'quid', 'quidam', 'quiddam', 'quidem', 'quidque', 'quietae', 'quiete', 'quietem', 'quieti', 'quietus', 'quin', 'quippe', 'quippiam', 'quis', 'quisquam', 'quisque', 'quisquis', 'quo', 'quocirca', 'quod', 'quoddam', 'quodsi', 'quondam', 'quoniam', 'quoque', 'quoquo', 'quorum', 'quos', 'quosdam', 'quosque', 'quosvis', 'quot', 'ratio', 'ratione', 'rationem', 'rationibus', 'rationis', 're', 'rebus', 'recordamur', 'recordatione', 'recta', 'rectas', 'recte', 'recteque', 'recusabo', 'recusandae', 'reddidisti', 'redeamus', 'referatur', 'referenda', 'referri', 'refert', 'referta', 'referuntur', 'reformidans', 'refugiendi', 'regione', 'regula', 'reici', 'reiciat', 'reiciendis', 'religionis', 'relinqueret', 'reliquaque', 'reliquarum', 'reliquerunt', 'reliqui', 'reliquisti', 'rem', 'remissius', 'remotis', 'renovata', 'repellat', 'repellendus', 'repellere', 'reperietur', 'reperire', 'reperiri', 'reperiuntur', 'repetitis', 'reprehenderit', 'reprehendunt', 'reprehensa', 'reprehensione', 'reprehensiones', 'reprimique', 'repudiandae', 'repugnantibus', 'repugnantiumve', 'reque', 'requietis', 'requirere', 'rerum', 'res', 'respirare', 'respondendum', 'responsum', 'restat', 'restincto', 'retinent', 'retinere', 'robustus', 'rogatiuncula', 'romano', 'romanum', 'ruant', 'rudem', 'ruinae', 'rutilius', 'sabinum', 'saepe', 'saepti', 'sale', 'salutandi', 'salutatus', 'saluti', 'saluto', 'sanciret', 'sane', 'sanguinem', 'sanos', 'saperet', 'sapiens', 'sapiente', 'sapienter', 'sapientes', 'sapienti', 'sapientia', 'sapientiam', 'sapientiamque', 'sapientium', 'satis', 'satisfacit', 'saxum', 'scaevola', 'scaevolam', 'scientia', 'scientiam', 'scilicet', 'scipio', 'sciscat', 'scribendi', 'scribentur', 'scribere', 'scribi', 'scribimus', 'scripserit', 'scripta', 'scriptorem', 'scriptum', 'se', 'secumque', 'secunda', 'secundum', 'securi', 'secutus', 'sed', 'sedatio', 'sedentis', 'seditione', 'seditiones', 'sedulitatem', 'segniorem', 'segnitiae', 'seiunctum', 'seiungi', 'semel', 'semper', 'sempiternum', 'senectutem', 'senserit', 'sensibus', 'sensu', 'sensum', 'sensus', 'sensuum', 'sententia', 'sententiae', 'sententiam', 'sentiamus', 'sentiant', 'sentio', 'sentire', 'sentiri', 'sentit', 'sentiunt', 'sequamur', 'sequatur', 'seque', 'sequi', 'sequimur', 'sequitur', 'sermo', 'sermone', 'sero', 'servare', 'servata', 'servire', 'severa', 'severitatem', 'si', 'sibi', 'sic', 'sicine', 'siculis', 'sicut', 'signiferumque', 'significet', 'silano', 'similia', 'similique', 'simplicem', 'simul', 'simulent', 'sin', 'sinat', 'sine', 'singulis', 'singulos', 'sinit', 'sint', 'sis', 'sit', 'sitisque', 'sitne', 'situm', 'sive', 'sol', 'sola', 'solam', 'sole', 'soleat', 'solemus', 'solent', 'solet', 'solida', 'soliditatem', 'solido', 'solis', 'solitudo', 'sollicitant', 'sollicitare', 'sollicitudines', 'solum', 'soluta', 'solvantur', 'sophocles', 'spatio', 'spe', 'specie', 'spernat', 'splendide', 'splendido', 'splendore', 'sponte', 'stabilem', 'stabilique', 'stabilitas', 'stare', 'statim', 'statu', 'statua', 'statuam', 'statuat', 'statue', 'statuerunt', 'status', 'stoici', 'stoicis', 'stoicos', 'studia', 'studiis', 'studio', 'studiose', 'studium', 'studuisse', 'stulti', 'stultorum', 'stultus', 'sua', 'suam', 'suapte', 'suas', 'suavitate', 'suaviter', 'sublata', 'sublatum', 'subtilius', 'successerit', 'successionem', 'succumbere', 'suis', 'sum', 'sumitur', 'summa', 'summam', 'summis', 'summo', 'summum', 'summumque', 'sumus', 'sunt', 'suo', 'superstitio', 'superstitione', 'suppetet', 'supplicii', 'susceperant', 'suscepi', 'suscipere', 'susciperet', 'suscipiantur', 'suscipiet', 'suscipit', 'suspicio', 'suspicor', 'sustulisti', 'suum', 'synephebos', 't', 'tale', 'talem', 'tali', 'tam', 'tamen', 'tamquam', 'tamque', 'tandem', 'tanta', 'tantalo', 'tantam', 'tantas', 'tantis', 'tantopere', 'tantum', 'tarentinis', 'te', 'telos', 'temeritas', 'temeritate', 'temperantia', 'temperantiam', 'temperantiamque', 'tempora', 'tempore', 'temporibus', 'temporis', 'tempus', 'teneam', 'tenebimus', 'tenebo', 'tenent', 'tenere', 'tenetur', 'tenuit', 'terentianus', 'terentii', 'terminari', 'terminatas', 'terrore', 'terroribus', 'tertio', 'tertium', 'testibus', 'texit', 'theatro', 'theophrasti', 'theophrastus', 'theseo', 'tibi', 'tibique', 'timeam', 'timentis', 'timeret', 'timidiores', 'timiditatem', 'timorem', 'tite', 'titillaret', 'tolerabiles', 'tollatur', 'tollit', 'tollitur', 'tollunt', 'torquate', 'torquatis', 'torquato', 'torquatos', 'torquatum', 'torquatus', 'torqueantur', 'torquem', 'torquentur', 'tot', 'tota', 'totam', 'totum', 'totus', 'tractat', 'tractatas', 'tractatos', 'tractavissent', 'tradere', 'tradidisse', 'tradit', 'traditur', 'tradunt', 'tranquillae', 'tranquillat', 'tranquilli', 'tranquillitate', 'tranquillitatem', 'transferam', 'transferre', 'transferrem', 'tria', 'triari', 'triario', 'triarium', 'triarius', 'tribuat', 'tribus', 'tritani', 'tu', 'tua', 'tuemur', 'tuentur', 'tueri', 'tum', 'tuo', 'turbent', 'turbulenta', 'turbulentaeque', 'turma', 'turpe', 'turpis', 'turpius', 'tutiorem', 'tuum', 'uberiora', 'uberius', 'ubi', 'ulla', 'ullam', 'ullius', 'ullo', 'ullum', 'ullus', 'ultima', 'ultimum', 'umbram', 'umquam', 'una', 'unam', 'unde', 'universas', 'unum', 'urbane', 'urbanitas', 'urbes', 'usque', 'usu', 'usus', 'ut', 'utamur', 'utens', 'uterque', 'uti', 'utilior', 'utilitas', 'utilitate', 'utilitatibus', 'utinam', 'utramque', 'utraque', 'utrisque', 'utriusque', 'utroque', 'utrum', 'utrumque', 'utrumvis', 'utuntur', 'vacare', 'vacillare', 'vacuitate', 'valetudinis', 'variari', 'varias', 'variis', 'vel', 'velim', 'velint', 'velit', 'vellem', 'venandi', 'vendibiliora', 'veniam', 'veniamus', 'veniat', 'venire', 'venisset', 'venustate', 'vera', 'verbi', 'verbis', 'verborum', 'verbum', 'verear', 'verentur', 'veri', 'verissimum', 'veritatis', 'veritus', 'veriusque', 'vero', 'versatur', 'versuum', 'verterem', 'verterunt', 'verum', 'veserim', 'vester', 'vestra', 'vestrae', 'veterum', 'vetuit', 'vexetur', 'vi', 'via', 'viam', 'vias', 'vicinum', 'victi', 'vide', 'videamus', 'videantur', 'videatur', 'videbitur', 'videmus', 'videntur', 'video', 'videor', 'videre', 'viderer', 'videretur', 'videri', 'videro', 'videtis', 'videtisne', 'videtur', 'vidisse', 'vidit', 'vigiliae', 'vim', 'vindicet', 'viris', 'viros', 'virtus', 'virtute', 'virtutem', 'virtutes', 'virtutibus', 'virtutum', 'vis', 'vita', 'vitae', 'vitam', 'vitiis', 'vitium', 'vituperandae', 'vituperari', 'vituperata', 'vituperatoribus', 'vituperatum', 'vivamus', 'vivatur', 'vivendi', 'vivendo', 'vivendum', 'vivere', 'viveremus', 'vivi', 'vix', 'vocant', 'voce', 'vocent', 'vocet', 'voluerint', 'voluit', 'volumus', 'volunt', 'voluntates', 'voluptaria', 'voluptas', 'voluptate', 'voluptatem', 'voluptates', 'voluptati', 'voluptatibus', 'voluptatis', 'voluptatum', 'vos', 'vulgo', 'vult', 'zenonem']);
  }
  protoOf(LorenIpsumGenerator).ial = function (count, minWordLength) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.List' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(count);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'com.arkivanov.sample.shared.multipane.database.LorenIpsumGenerator.generate.<anonymous>' call
        var word;
        do {
          var tmp$ret$0;
          // Inline function 'kotlin.collections.random' call
          var tmp0_random = LorenIpsumGenerator_getInstance().hal_1;
          tmp$ret$0 = random(tmp0_random, Default_getInstance());
          word = tmp$ret$0;
        }
         while (word.length < minWordLength);
        tmp$ret$1 = word;
        list.a(tmp$ret$1);
      }
       while (inductionVariable < count);
    tmp$ret$2 = list;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(LorenIpsumGenerator).oal = function (count, minWordLength, $super) {
    minWordLength = minWordLength === VOID ? 1 : minWordLength;
    return $super === VOID ? this.ial(count, minWordLength) : $super.ial.call(this, count, minWordLength);
  };
  protoOf(LorenIpsumGenerator).jal = function () {
    var tmp = this.oal(Default_getInstance().v6(1, 15));
    var tmp$ret$7;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.random' call
    var tmp0_random = this.hal_1;
    tmp$ret$0 = random(tmp0_random, Default_getInstance());
    var tmp1_replaceFirstChar = tmp$ret$0;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$1 = charSequenceLength(tmp1_replaceFirstChar) > 0;
    if (tmp$ret$1) {
      var tmp$ret$4;
      // Inline function 'kotlin.text.uppercase' call
      var tmp4_uppercase = charSequenceGet(tmp1_replaceFirstChar, 0);
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2_asDynamic = toString_1(tmp4_uppercase);
      tmp$ret$2 = tmp2_asDynamic;
      var tmp3_unsafeCast = tmp$ret$2.toUpperCase();
      tmp$ret$3 = tmp3_unsafeCast;
      tmp$ret$4 = tmp$ret$3;
      var tmp_1 = toString(tmp$ret$4);
      var tmp$ret$6;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp1_replaceFirstChar;
      tmp$ret$6 = tmp$ret$5.substring(1);
      tmp_0 = tmp_1 + tmp$ret$6;
    } else {
      tmp_0 = tmp1_replaceFirstChar;
    }
    tmp$ret$7 = tmp_0;
    return joinToString(tmp, ' ', tmp$ret$7, '.');
  };
  var LorenIpsumGenerator_instance;
  function LorenIpsumGenerator_getInstance() {
    if (LorenIpsumGenerator_instance == null)
      new LorenIpsumGenerator();
    return LorenIpsumGenerator_instance;
  }
  function Model_2(isToolbarVisible, article) {
    this.pal_1 = isToolbarVisible;
    this.qal_1 = article;
  }
  protoOf(Model_2).ral = function (isToolbarVisible, article) {
    return new Model_2(isToolbarVisible, article);
  };
  protoOf(Model_2).sal = function (isToolbarVisible, article, $super) {
    isToolbarVisible = isToolbarVisible === VOID ? this.pal_1 : isToolbarVisible;
    article = article === VOID ? this.qal_1 : article;
    return $super === VOID ? this.ral(isToolbarVisible, article) : $super.ral.call(this, isToolbarVisible, article);
  };
  protoOf(Model_2).toString = function () {
    return 'Model(isToolbarVisible=' + this.pal_1 + ', article=' + this.qal_1 + ')';
  };
  protoOf(Model_2).hashCode = function () {
    var result = this.pal_1 | 0;
    result = imul(result, 31) + this.qal_1.hashCode() | 0;
    return result;
  };
  protoOf(Model_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model_2))
      return false;
    var tmp0_other_with_cast = other instanceof Model_2 ? other : THROW_CCE();
    if (!(this.pal_1 === tmp0_other_with_cast.pal_1))
      return false;
    if (!this.qal_1.equals(tmp0_other_with_cast.qal_1))
      return false;
    return true;
  };
  function Article(title, text) {
    this.tal_1 = title;
    this.ual_1 = text;
  }
  protoOf(Article).toString = function () {
    return 'Article(title=' + this.tal_1 + ', text=' + this.ual_1 + ')';
  };
  protoOf(Article).hashCode = function () {
    var result = getStringHashCode(this.tal_1);
    result = imul(result, 31) + getStringHashCode(this.ual_1) | 0;
    return result;
  };
  protoOf(Article).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Article))
      return false;
    var tmp0_other_with_cast = other instanceof Article ? other : THROW_CCE();
    if (!(this.tal_1 === tmp0_other_with_cast.tal_1))
      return false;
    if (!(this.ual_1 === tmp0_other_with_cast.ual_1))
      return false;
    return true;
  };
  function ArticleDetailsComponent() {
  }
  function toArticle(_this__u8e3s4, $this) {
    return new Article(_this__u8e3s4.fal_1, _this__u8e3s4.gal_1);
  }
  function DefaultArticleDetailsComponent$lambda$lambda($isVisible) {
    return function (it) {
      return it.sal($isVisible);
    };
  }
  function DefaultArticleDetailsComponent$lambda(this$0) {
    return function (isVisible) {
      update(this$0.aam_1, DefaultArticleDetailsComponent$lambda$lambda(isVisible));
      return Unit_getInstance();
    };
  }
  function DefaultArticleDetailsComponent(componentContext, database, articleId, isToolbarVisible, onFinished) {
    this.xal_1 = onFinished;
    this.yal_1 = componentContext;
    this.zal_1 = disposableScope_0(componentContext);
    this.aam_1 = MutableValue(new Model_2(false, toArticle(database.nal(articleId), this)));
    this.bam_1 = this.aam_1;
    this.bab(isToolbarVisible, VOID, VOID, VOID, VOID, DefaultArticleDetailsComponent$lambda(this));
  }
  protoOf(DefaultArticleDetailsComponent).pi = function () {
    return this.yal_1.pi();
  };
  protoOf(DefaultArticleDetailsComponent).oi = function () {
    return this.yal_1.oi();
  };
  protoOf(DefaultArticleDetailsComponent).mi = function () {
    return this.yal_1.mi();
  };
  protoOf(DefaultArticleDetailsComponent).ni = function () {
    return this.yal_1.ni();
  };
  protoOf(DefaultArticleDetailsComponent).o1s = function () {
    return this.zal_1.o1s();
  };
  protoOf(DefaultArticleDetailsComponent).wp = function () {
    this.zal_1.wp();
  };
  protoOf(DefaultArticleDetailsComponent).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.zal_1.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  };
  protoOf(DefaultArticleDetailsComponent).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.zal_1.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  };
  protoOf(DefaultArticleDetailsComponent).val = function () {
    return this.bam_1;
  };
  protoOf(DefaultArticleDetailsComponent).wal = function () {
    this.xal_1();
  };
  function Model_3(articles, selectedArticleId) {
    this.cam_1 = articles;
    this.dam_1 = selectedArticleId;
  }
  protoOf(Model_3).eam = function (articles, selectedArticleId) {
    return new Model_3(articles, selectedArticleId);
  };
  protoOf(Model_3).fam = function (articles, selectedArticleId, $super) {
    articles = articles === VOID ? this.cam_1 : articles;
    selectedArticleId = selectedArticleId === VOID ? this.dam_1 : selectedArticleId;
    return $super === VOID ? this.eam(articles, selectedArticleId) : $super.eam.call(this, articles, selectedArticleId);
  };
  protoOf(Model_3).toString = function () {
    return 'Model(articles=' + this.cam_1 + ', selectedArticleId=' + toString_0(this.dam_1) + ')';
  };
  protoOf(Model_3).hashCode = function () {
    var result = hashCode(this.cam_1);
    result = imul(result, 31) + (this.dam_1 == null ? 0 : this.dam_1.hashCode()) | 0;
    return result;
  };
  protoOf(Model_3).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model_3))
      return false;
    var tmp0_other_with_cast = other instanceof Model_3 ? other : THROW_CCE();
    if (!equals(this.cam_1, tmp0_other_with_cast.cam_1))
      return false;
    if (!equals(this.dam_1, tmp0_other_with_cast.dam_1))
      return false;
    return true;
  };
  function Article_0(id, title) {
    this.gam_1 = id;
    this.ham_1 = title;
  }
  protoOf(Article_0).toString = function () {
    return 'Article(id=' + toString(this.gam_1) + ', title=' + this.ham_1 + ')';
  };
  protoOf(Article_0).hashCode = function () {
    var result = this.gam_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.ham_1) | 0;
    return result;
  };
  protoOf(Article_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Article_0))
      return false;
    var tmp0_other_with_cast = other instanceof Article_0 ? other : THROW_CCE();
    if (!this.gam_1.equals(tmp0_other_with_cast.gam_1))
      return false;
    if (!(this.ham_1 === tmp0_other_with_cast.ham_1))
      return false;
    return true;
  };
  function ArticleListComponent() {
  }
  function toArticle_0(_this__u8e3s4, $this) {
    return new Article_0(_this__u8e3s4.eal_1, _this__u8e3s4.fal_1);
  }
  function DefaultArticleListComponent$lambda$lambda($id) {
    return function (it) {
      return it.fam(VOID, $id);
    };
  }
  function DefaultArticleListComponent$lambda(this$0) {
    return function (id) {
      update(this$0.mam_1, DefaultArticleListComponent$lambda$lambda(id));
      return Unit_getInstance();
    };
  }
  function DefaultArticleListComponent(componentContext, database, selectedArticleId, onArticleSelected) {
    this.jam_1 = onArticleSelected;
    this.kam_1 = componentContext;
    this.lam_1 = disposableScope_0(componentContext);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = database.mal();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.multipane.list.DefaultArticleListComponent._models.<anonymous>' call
      tmp$ret$0 = toArticle_0(item, this);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.mam_1 = MutableValue(new Model_3(tmp$ret$2, null));
    this.nam_1 = this.mam_1;
    this.bab(selectedArticleId, VOID, VOID, VOID, VOID, DefaultArticleListComponent$lambda(this));
  }
  protoOf(DefaultArticleListComponent).pi = function () {
    return this.kam_1.pi();
  };
  protoOf(DefaultArticleListComponent).oi = function () {
    return this.kam_1.oi();
  };
  protoOf(DefaultArticleListComponent).mi = function () {
    return this.kam_1.mi();
  };
  protoOf(DefaultArticleListComponent).ni = function () {
    return this.kam_1.ni();
  };
  protoOf(DefaultArticleListComponent).o1s = function () {
    return this.lam_1.o1s();
  };
  protoOf(DefaultArticleListComponent).wp = function () {
    this.lam_1.wp();
  };
  protoOf(DefaultArticleListComponent).aab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext) {
    return this.lam_1.aab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onComplete, onNext);
  };
  protoOf(DefaultArticleListComponent).cab = function (_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess) {
    return this.lam_1.cab(_this__u8e3s4, isThreadLocal, onSubscribe, onError, onSuccess);
  };
  protoOf(DefaultArticleListComponent).val = function () {
    return this.nam_1;
  };
  protoOf(DefaultArticleListComponent).iam = function (id) {
    this.jam_1(id);
  };
  function disposableScope_0(_this__u8e3s4) {
    var scope = disposableScope();
    // Inline function 'com.arkivanov.essenty.lifecycle.doOnDestroy' call
    var tmp0_doOnDestroy = _this__u8e3s4.mi();
    tmp0_doOnDestroy.lg(new _no_name_provided__qut3iv(scope));
    return scope;
  }
  function _no_name_provided__qut3iv($scope) {
    this.oam_1 = $scope;
  }
  protoOf(_no_name_provided__qut3iv).kg = function () {
    this.oam_1.wp();
  };
  function getInitialStack($this, deepLink) {
    var tmp0_subject = deepLink;
    var tmp;
    if (tmp0_subject instanceof None) {
      tmp = listOf_0(Counters_getInstance());
    } else {
      if (tmp0_subject instanceof Web) {
        tmp = listOf_0(getConfigForPath($this, deepLink.pam_1));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function getPathForConfig($this, config) {
    var tmp0_subject = config;
    var tmp;
    if (equals(tmp0_subject, Counters_getInstance())) {
      tmp = '/counters';
    } else if (equals(tmp0_subject, Cards_getInstance())) {
      tmp = '/cards';
    } else if (equals(tmp0_subject, MultiPane_getInstance())) {
      tmp = '/multi-pane';
    } else if (equals(tmp0_subject, DynamicFeatures_getInstance())) {
      tmp = '/dynamic-features';
    } else if (equals(tmp0_subject, CustomNavigation_getInstance())) {
      tmp = '/custom-navigation';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function getConfigForPath($this, path) {
    var tmp0_subject = removePrefix(path, '/');
    switch (tmp0_subject) {
      case 'counters':
        return Counters_getInstance();
      case 'cards':
        return Cards_getInstance();
      case 'multi-pane':
        return MultiPane_getInstance();
      case 'dynamic-features':
        return DynamicFeatures_getInstance();
      case 'custom-navigation':
        return CustomNavigation_getInstance();
      default:
        return Counters_getInstance();
    }
  }
  function Counters() {
    Counters_instance = this;
  }
  var Counters_instance;
  function Counters_getInstance() {
    if (Counters_instance == null)
      new Counters();
    return Counters_instance;
  }
  function Cards() {
    Cards_instance = this;
  }
  var Cards_instance;
  function Cards_getInstance() {
    if (Cards_instance == null)
      new Cards();
    return Cards_instance;
  }
  function MultiPane() {
    MultiPane_instance = this;
  }
  var MultiPane_instance;
  function MultiPane_getInstance() {
    if (MultiPane_instance == null)
      new MultiPane();
    return MultiPane_instance;
  }
  function DynamicFeatures() {
    DynamicFeatures_instance = this;
  }
  var DynamicFeatures_instance;
  function DynamicFeatures_getInstance() {
    if (DynamicFeatures_instance == null)
      new DynamicFeatures();
    return DynamicFeatures_instance;
  }
  function CustomNavigation() {
    CustomNavigation_instance = this;
  }
  var CustomNavigation_instance;
  function CustomNavigation_getInstance() {
    if (CustomNavigation_instance == null)
      new CustomNavigation();
    return CustomNavigation_instance;
  }
  function None() {
    None_instance = this;
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function Web() {
  }
  function child_3($this, config, componentContext) {
    var tmp0_subject = config;
    var tmp;
    if (tmp0_subject instanceof Counters) {
      tmp = new CountersChild(new DefaultCountersComponent(componentContext));
    } else {
      if (tmp0_subject instanceof Cards) {
        tmp = new CardsChild(new DefaultCardsComponent(componentContext));
      } else {
        if (tmp0_subject instanceof MultiPane) {
          tmp = new MultiPaneChild(new DefaultMultiPaneComponent(componentContext));
        } else {
          if (tmp0_subject instanceof DynamicFeatures) {
            tmp = new DynamicFeaturesChild(new DefaultDynamicFeaturesComponent(componentContext, $this.qam_1));
          } else {
            if (tmp0_subject instanceof CustomNavigation) {
              tmp = new CustomNavigationChild(new DefaultCustomNavigationComponent(componentContext));
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.vam_1 = 'counters';
    this.wam_1 = 'cards';
    this.xam_1 = 'multi-pane';
    this.yam_1 = 'dynamic-features';
    this.zam_1 = 'custom-navigation';
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Config_4() {
  }
  function DefaultRootComponent$stack$lambda($deepLink) {
    return function () {
      return getInitialStack(Companion_getInstance_3(), $deepLink);
    };
  }
  function DefaultRootComponent$child$ref($boundThis) {
    var l = function (p0, p1) {
      return child_3($boundThis, p0, p1);
    };
    l.callableName = 'child';
    return l;
  }
  function DefaultRootComponent$Companion$getPathForConfig$ref($boundThis) {
    var l = function (p0) {
      return getPathForConfig($boundThis, p0);
    };
    l.callableName = 'getPathForConfig';
    return l;
  }
  function DefaultRootComponent$Companion$getConfigForPath$ref($boundThis) {
    var l = function (p0) {
      return getConfigForPath($boundThis, p0);
    };
    l.callableName = 'getConfigForPath';
    return l;
  }
  function DefaultRootComponent(componentContext, featureInstaller, deepLink, webHistoryController) {
    Companion_getInstance_3();
    deepLink = deepLink === VOID ? None_getInstance() : deepLink;
    webHistoryController = webHistoryController === VOID ? null : webHistoryController;
    this.qam_1 = featureInstaller;
    this.ram_1 = componentContext;
    this.sam_1 = StackNavigation();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'com.arkivanov.decompose.router.stack.childStack' call
    var tmp0_childStack = this.sam_1;
    var tmp1_childStack = DefaultRootComponent$stack$lambda(deepLink);
    var tmp2_childStack = DefaultRootComponent$child$ref(this);
    tmp$ret$0 = childStack(this, tmp0_childStack, tmp1_childStack, getKClass(Config_4), 'DefaultChildStack', true, false, tmp2_childStack);
    tmp.tam_1 = tmp$ret$0;
    this.uam_1 = this.tam_1;
    var tmp0_safe_receiver = webHistoryController;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp_0 = DefaultRootComponent$Companion$getPathForConfig$ref(Companion_getInstance_3());
      tmp0_safe_receiver.aan(this.sam_1, this.tam_1, tmp_0, DefaultRootComponent$Companion$getConfigForPath$ref(Companion_getInstance_3()));
    }
  }
  protoOf(DefaultRootComponent).pi = function () {
    return this.ram_1.pi();
  };
  protoOf(DefaultRootComponent).oi = function () {
    return this.ram_1.oi();
  };
  protoOf(DefaultRootComponent).mi = function () {
    return this.ram_1.mi();
  };
  protoOf(DefaultRootComponent).ni = function () {
    return this.ram_1.ni();
  };
  protoOf(DefaultRootComponent).rah = function () {
    return this.uam_1;
  };
  protoOf(DefaultRootComponent).ban = function () {
    bringToFront(this.sam_1, Counters_getInstance());
  };
  protoOf(DefaultRootComponent).can = function () {
    bringToFront(this.sam_1, Cards_getInstance());
  };
  protoOf(DefaultRootComponent).dan = function () {
    bringToFront(this.sam_1, MultiPane_getInstance());
  };
  protoOf(DefaultRootComponent).ean = function () {
    bringToFront(this.sam_1, DynamicFeatures_getInstance());
  };
  protoOf(DefaultRootComponent).fan = function () {
    bringToFront(this.sam_1, CustomNavigation_getInstance());
  };
  function CountersChild(component) {
    Child_1.call(this);
    this.gan_1 = component;
  }
  function CardsChild(component) {
    Child_1.call(this);
    this.han_1 = component;
  }
  function MultiPaneChild(component) {
    Child_1.call(this);
    this.ian_1 = component;
  }
  function DynamicFeaturesChild(component) {
    Child_1.call(this);
    this.jan_1 = component;
  }
  function CustomNavigationChild(component) {
    Child_1.call(this);
    this.kan_1 = component;
  }
  function Child_1() {
  }
  var uniqueId;
  function DefaultFeatureInstaller() {
    DefaultFeatureInstaller_instance = this;
  }
  protoOf(DefaultFeatureInstaller).lak = function (name) {
    return singleOf(Installed_getInstance());
  };
  var DefaultFeatureInstaller_instance;
  function DefaultFeatureInstaller_getInstance() {
    if (DefaultFeatureInstaller_instance == null)
      new DefaultFeatureInstaller();
    return DefaultFeatureInstaller_instance;
  }
  function Feature1_0(componentContext, onFeature2) {
    return new Feature1Component(componentContext, onFeature2);
  }
  function Feature2_0(componentContext, magicNumber, onFinished) {
    return new Feature2Component(componentContext, magicNumber, onFinished);
  }
  //region block: post-declaration
  protoOf(DefaultCardComponent).bab = subscribeScoped$default;
  protoOf(DefaultCardComponent).dab = subscribeScoped$default_0;
  protoOf(Handler_0).bab = subscribeScoped$default;
  protoOf(Handler_0).dab = subscribeScoped$default_0;
  protoOf(DefaultMultiPaneComponent).bab = subscribeScoped$default;
  protoOf(DefaultMultiPaneComponent).dab = subscribeScoped$default_0;
  protoOf(DefaultArticleDetailsComponent).bab = subscribeScoped$default;
  protoOf(DefaultArticleDetailsComponent).dab = subscribeScoped$default_0;
  protoOf(DefaultArticleListComponent).bab = subscribeScoped$default;
  protoOf(DefaultArticleListComponent).dab = subscribeScoped$default_0;
  protoOf(_no_name_provided__qut3iv).fg = onCreate;
  protoOf(_no_name_provided__qut3iv).gg = onStart;
  protoOf(_no_name_provided__qut3iv).hg = onResume;
  protoOf(_no_name_provided__qut3iv).ig = onPause;
  protoOf(_no_name_provided__qut3iv).jg = onStop;
  //endregion
  //region block: init
  uniqueId = new Long(0, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CustomNavigationComponent;
  _.$_$.b = ErrorChild;
  _.$_$.c = FeatureChild;
  _.$_$.d = LoadingChild;
  _.$_$.e = Feature1Child;
  _.$_$.f = Feature2Child;
  _.$_$.g = DefaultRootComponent;
  _.$_$.h = CardsChild;
  _.$_$.i = CountersChild;
  _.$_$.j = CustomNavigationChild;
  _.$_$.k = DynamicFeaturesChild;
  _.$_$.l = MultiPaneChild;
  _.$_$.m = Mode_CAROUSEL_getInstance;
  _.$_$.n = DefaultFeatureInstaller_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-shared.js.map
