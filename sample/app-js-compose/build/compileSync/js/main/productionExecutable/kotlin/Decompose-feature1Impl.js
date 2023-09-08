(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './Decompose-api.js', './Decompose-decompose-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./Decompose-api.js'), require('./Decompose-decompose-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['Decompose-api'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature1Impl'. Its dependency 'Decompose-api' was not found. Please, check whether 'Decompose-api' is loaded prior to 'Decompose-feature1Impl'.");
    }
    if (typeof this['Decompose-decompose-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature1Impl'. Its dependency 'Decompose-decompose-js-ir' was not found. Please, check whether 'Decompose-decompose-js-ir' is loaded prior to 'Decompose-feature1Impl'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-feature1Impl'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-feature1Impl'.");
    }
    root['Decompose-feature1Impl'] = factory(typeof this['Decompose-feature1Impl'] === 'undefined' ? {} : this['Decompose-feature1Impl'], this['Decompose-api'], this['Decompose-decompose-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_Decompose_sample_shared_dynamic_features_api, kotlin_com_arkivanov_decompose_decompose, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Model = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.a;
  var MutableValue = kotlin_com_arkivanov_decompose_decompose.$_$.q;
  var protoOf = kotlin_kotlin.$_$.r8;
  var Feature1 = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Feature1Component, 'Feature1Component', classMeta, VOID, [Feature1]);
  //endregion
  function Feature1Component(componentContext, onFeature2) {
    this.dag_1 = onFeature2;
    this.eag_1 = componentContext;
    this.fag_1 = MutableValue(new Model('Hello from Feature1!'));
  }
  protoOf(Feature1Component).pi = function () {
    return this.eag_1.pi();
  };
  protoOf(Feature1Component).oi = function () {
    return this.eag_1.oi();
  };
  protoOf(Feature1Component).mi = function () {
    return this.eag_1.mi();
  };
  protoOf(Feature1Component).ni = function () {
    return this.eag_1.ni();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Feature1Component;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-feature1Impl.js.map
