(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlinx-atomicfu-runtime-js-ir'] = factory(typeof this['kotlin-kotlinx-atomicfu-runtime-js-ir'] === 'undefined' ? {} : this['kotlin-kotlinx-atomicfu-runtime-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlinx-atomicfu-runtime-js-ir.js.map
