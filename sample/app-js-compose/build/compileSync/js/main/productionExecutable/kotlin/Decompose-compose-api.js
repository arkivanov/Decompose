(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Decompose-compose-api'] = factory(typeof this['Decompose-compose-api'] === 'undefined' ? {} : this['Decompose-compose-api']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-compose-api.js.map
