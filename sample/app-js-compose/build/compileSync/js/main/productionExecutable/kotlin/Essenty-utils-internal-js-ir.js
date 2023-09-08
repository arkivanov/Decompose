(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Essenty-utils-internal-js-ir'] = factory(typeof this['Essenty-utils-internal-js-ir'] === 'undefined' ? {} : this['Essenty-utils-internal-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function ensureNeverFrozen(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ensureNeverFrozen;
  //endregion
  return _;
}));

//# sourceMappingURL=Essenty-utils-internal-js-ir.js.map
