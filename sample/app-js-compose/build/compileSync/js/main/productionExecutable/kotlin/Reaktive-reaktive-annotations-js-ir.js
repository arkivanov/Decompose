(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Reaktive-reaktive-annotations-js-ir'] = factory(typeof this['Reaktive-reaktive-annotations-js-ir'] === 'undefined' ? {} : this['Reaktive-reaktive-annotations-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Reaktive-reaktive-annotations-js-ir.js.map
