(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './Essenty-utils-internal-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Essenty-utils-internal-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-parcelable-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Essenty-parcelable-js-ir'.");
    }
    if (typeof this['Essenty-utils-internal-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Essenty-parcelable-js-ir'. Its dependency 'Essenty-utils-internal-js-ir' was not found. Please, check whether 'Essenty-utils-internal-js-ir' is loaded prior to 'Essenty-parcelable-js-ir'.");
    }
    root['Essenty-parcelable-js-ir'] = factory(typeof this['Essenty-parcelable-js-ir'] === 'undefined' ? {} : this['Essenty-parcelable-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['Essenty-utils-internal-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_arkivanov_essenty_utils_internal) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var ensureNeverFrozen = kotlin_com_arkivanov_essenty_utils_internal.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isInterface = kotlin_kotlin.$_$.h8;
  var protoOf = kotlin_kotlin.$_$.r8;
  var classMeta = kotlin_kotlin.$_$.r7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Parcelable, 'Parcelable', interfaceMeta);
  setMetadataFor(SimpleParcelableContainer, 'SimpleParcelableContainer', classMeta, VOID, [Parcelable]);
  //endregion
  function consumeRequired(_this__u8e3s4, clazz) {
    var tmp$ret$2;
    // Inline function 'kotlin.requireNotNull' call
    var tmp0_requireNotNull = _this__u8e3s4.wg(clazz);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_requireNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Parcelable() {
  }
  function parcelableContainer(value) {
    value = value === VOID ? null : value;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new SimpleParcelableContainer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.arkivanov.essenty.parcelable.ParcelableContainer.<anonymous>' call
    if (!(value == null)) {
      tmp0_apply.yg(value);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function SimpleParcelableContainer() {
    ensureNeverFrozen(this);
    this.xg_1 = null;
  }
  protoOf(SimpleParcelableContainer).wg = function (clazz) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp = this.xg_1;
    var tmp0_also = (tmp == null ? true : isInterface(tmp, Parcelable)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.arkivanov.essenty.parcelable.SimpleParcelableContainer.consume.<anonymous>' call
    this.xg_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SimpleParcelableContainer).yg = function (value) {
    this.xg_1 = value;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = parcelableContainer;
  _.$_$.b = Parcelable;
  _.$_$.c = consumeRequired;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-parcelable-js-ir.js.map
