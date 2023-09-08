(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-api'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-api'.");
    }
    root['Decompose-api'] = factory(typeof this['Decompose-api'] === 'undefined' ? {} : this['Decompose-api'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Model, 'Model', classMeta);
  setMetadataFor(Feature1, 'Feature1', interfaceMeta);
  setMetadataFor(Model_0, 'Model', classMeta);
  setMetadataFor(Feature2, 'Feature2', interfaceMeta);
  //endregion
  function Model(title) {
    this.jaa_1 = title;
  }
  protoOf(Model).toString = function () {
    return 'Model(title=' + this.jaa_1 + ')';
  };
  protoOf(Model).hashCode = function () {
    return getStringHashCode(this.jaa_1);
  };
  protoOf(Model).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model))
      return false;
    var tmp0_other_with_cast = other instanceof Model ? other : THROW_CCE();
    if (!(this.jaa_1 === tmp0_other_with_cast.jaa_1))
      return false;
    return true;
  };
  function Feature1() {
  }
  function Model_0(title, text) {
    this.kaa_1 = title;
    this.laa_1 = text;
  }
  protoOf(Model_0).toString = function () {
    return 'Model(title=' + this.kaa_1 + ', text=' + this.laa_1 + ')';
  };
  protoOf(Model_0).hashCode = function () {
    var result = getStringHashCode(this.kaa_1);
    result = imul(result, 31) + getStringHashCode(this.laa_1) | 0;
    return result;
  };
  protoOf(Model_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Model_0))
      return false;
    var tmp0_other_with_cast = other instanceof Model_0 ? other : THROW_CCE();
    if (!(this.kaa_1 === tmp0_other_with_cast.kaa_1))
      return false;
    if (!(this.laa_1 === tmp0_other_with_cast.laa_1))
      return false;
    return true;
  };
  function Feature2() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Model;
  _.$_$.b = Feature1;
  _.$_$.c = Model_0;
  _.$_$.d = Feature2;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-api.js.map
