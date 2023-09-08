(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['androidx-ui-util'] = factory(typeof this['androidx-ui-util'] === 'undefined' ? {} : this['androidx-ui-util']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = lerp;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-util.js.map
