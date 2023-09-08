(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-wrappers-kotlin-browser-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-browser-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-browser-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-browser-js-ir.js.map
