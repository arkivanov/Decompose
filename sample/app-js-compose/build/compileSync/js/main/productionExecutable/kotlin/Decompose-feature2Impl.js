(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './Decompose-api.js', './Decompose-decompose-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./Decompose-api.js'), require('./Decompose-decompose-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['Decompose-api'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature2Impl'. Its dependency 'Decompose-api' was not found. Please, check whether 'Decompose-api' is loaded prior to 'Decompose-feature2Impl'.");
    }
    if (typeof this['Decompose-decompose-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature2Impl'. Its dependency 'Decompose-decompose-js-ir' was not found. Please, check whether 'Decompose-decompose-js-ir' is loaded prior to 'Decompose-feature2Impl'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature2Impl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-feature2Impl'.");
    }
    root['Decompose-feature2Impl'] = factory(typeof this['Decompose-feature2Impl'] === 'undefined' ? {} : this['Decompose-feature2Impl'], this['Decompose-api'], this['Decompose-decompose-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_Decompose_sample_shared_dynamic_features_api, kotlin_com_arkivanov_decompose_decompose, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Model = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.c;
  var MutableValue = kotlin_com_arkivanov_decompose_decompose.$_$.q;
  var protoOf = kotlin_kotlin.$_$.r8;
  var Feature2 = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.d;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Feature2Component, 'Feature2Component', classMeta, VOID, [Feature2]);
  //endregion
  function Feature2Component(componentContext, magicNumber, onFinished) {
    this.gag_1 = onFinished;
    this.hag_1 = componentContext;
    this.iag_1 = MutableValue(new Model('Hello from Feature2!', 'Magic number: ' + magicNumber));
  }
  protoOf(Feature2Component).pi = function () {
    return this.hag_1.pi();
  };
  protoOf(Feature2Component).oi = function () {
    return this.hag_1.oi();
  };
  protoOf(Feature2Component).mi = function () {
    return this.hag_1.mi();
  };
  protoOf(Feature2Component).ni = function () {
    return this.hag_1.ni();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Feature2Component;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-feature2Impl.js.map
