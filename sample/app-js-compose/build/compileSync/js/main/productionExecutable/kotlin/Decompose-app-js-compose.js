(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './Essenty-lifecycle-js-ir.js', './Decompose-decompose-js-ir.js', './Decompose-shared.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './androidx-ui.js', './androidx-foundation-layout.js', './Decompose-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./Essenty-lifecycle-js-ir.js'), require('./Decompose-decompose-js-ir.js'), require('./Decompose-shared.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./androidx-ui.js'), require('./androidx-foundation-layout.js'), require('./Decompose-compose.js'));
  else {
    if (typeof this['Essenty-lifecycle-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'Essenty-lifecycle-js-ir' was not found. Please, check whether 'Essenty-lifecycle-js-ir' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['Decompose-decompose-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'Decompose-decompose-js-ir' was not found. Please, check whether 'Decompose-decompose-js-ir' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['Decompose-shared'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'Decompose-shared' was not found. Please, check whether 'Decompose-shared' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'Decompose-app-js-compose'.");
    }
    if (typeof this['Decompose-compose'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-app-js-compose'. Its dependency 'Decompose-compose' was not found. Please, check whether 'Decompose-compose' is loaded prior to 'Decompose-app-js-compose'.");
    }
    root['Decompose-app-js-compose'] = factory(typeof this['Decompose-app-js-compose'] === 'undefined' ? {} : this['Decompose-app-js-compose'], this['Essenty-lifecycle-js-ir'], this['Decompose-decompose-js-ir'], this['Decompose-shared'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['androidx-ui'], this['androidx-foundation-layout'], this['Decompose-compose']);
  }
}(this, function (_, kotlin_com_arkivanov_essenty_lifecycle, kotlin_com_arkivanov_decompose_decompose, kotlin_Decompose_sample_shared_shared, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_Decompose_sample_shared_compose) {
  'use strict';
  //region block: imports
  var lifecycleRegistry = kotlin_com_arkivanov_essenty_lifecycle.$_$.g;
  var DefaultComponentContext_init_$Create$ = kotlin_com_arkivanov_decompose_decompose.$_$.w;
  var DefaultFeatureInstaller_getInstance = kotlin_Decompose_sample_shared_shared.$_$.n;
  var DefaultRootComponent = kotlin_Decompose_sample_shared_shared.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var stop = kotlin_com_arkivanov_essenty_lifecycle.$_$.m;
  var resume = kotlin_com_arkivanov_essenty_lifecycle.$_$.k;
  var equals = kotlin_kotlin.$_$.u7;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var RootContent$composable = kotlin_Decompose_sample_shared_compose.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Window$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var lifecycle = lifecycleRegistry();
    var root = new DefaultRootComponent(DefaultComponentContext_init_$Create$(lifecycle), DefaultFeatureInstaller_getInstance());
    attachToDocument(lifecycle);
    onWasmReady(main$lambda(root));
  }
  function attachToDocument(_this__u8e3s4) {
    attachToDocument$onVisibilityChanged(_this__u8e3s4);
    var tmp = document;
    var tmp$ret$2;
    // Inline function 'web.events.EventType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'visibilitychange';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp.addEventListener(tmp_0, attachToDocument$lambda(_this__u8e3s4));
  }
  function attachToDocument$onVisibilityChanged($this_attachToDocument) {
    if (equals(document.visibilityState, (/*union*/{hidden: 'hidden', visible: 'visible'}/*union*/).visible)) {
      resume($this_attachToDocument);
    } else {
      stop($this_attachToDocument);
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function main$lambda$lambda($root) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1997416903, $changed, -1, 'com.arkivanov.decompose.sample.app.main.<anonymous>.<anonymous> (Main.kt:29)');
        }
        RootContent$composable($root, fillMaxSize(Companion_getInstance()), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main$lambda($root) {
    return function () {
      Window$composable('Decompose Sample', ComposableLambda$invoke$ref(composableLambdaInstance(1997416903, true, main$lambda$lambda($root))));
      return Unit_getInstance();
    };
  }
  function attachToDocument$lambda($this_attachToDocument) {
    return function (it) {
      attachToDocument$onVisibilityChanged($this_attachToDocument);
      return Unit_getInstance();
    };
  }
  main();
  return _;
}));

//# sourceMappingURL=Decompose-app-js-compose.js.map
