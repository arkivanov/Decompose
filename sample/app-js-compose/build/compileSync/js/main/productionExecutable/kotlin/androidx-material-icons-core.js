(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-ui-graphics.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material-icons-core'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-icons-core'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material-icons-core'.");
    }
    root['androidx-material-icons-core'] = factory(typeof this['androidx-material-icons-core'] === 'undefined' ? {} : this['androidx-material-icons-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-ui-graphics']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var get_DefaultFillType = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var get_DefaultPathName = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Filled, 'Filled', objectMeta);
  setMetadataFor(Icons, 'Icons', objectMeta);
  //endregion
  function Filled() {
    Filled_instance = this;
    this.xau_1 = 0;
  }
  var Filled_instance;
  function Filled_getInstance() {
    if (Filled_instance == null)
      new Filled();
    return Filled_instance;
  }
  function Icons() {
    Icons_instance = this;
    this.yau_1 = Filled_getInstance();
    this.zau_1 = 0;
  }
  var Icons_instance;
  function Icons_getInstance() {
    if (Icons_instance == null)
      new Icons();
    return Icons_instance;
  }
  function get_MaterialIconDimension() {
    return MaterialIconDimension;
  }
  var MaterialIconDimension;
  var _accountBox;
  function get_AccountBox(_this__u8e3s4) {
    if (!(_accountBox == null)) {
      return ensureNotNull(_accountBox);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-AccountBox>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.AccountBox', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-AccountBox>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(19.0, 3.0);
    tmp0_with.i3n(5.0);
    tmp0_with.m3n(3.9, 3.0, 3.0, 3.9, 3.0, 5.0);
    tmp0_with.l3n(14.0);
    tmp0_with.n3n(0.0, 1.1, 0.9, 2.0, 2.0, 2.0);
    tmp0_with.j3n(14.0);
    tmp0_with.n3n(1.1, 0.0, 2.0, -0.9, 2.0, -2.0);
    tmp0_with.k3n(5.0);
    tmp0_with.m3n(21.0, 3.9, 20.1, 3.0, 19.0, 3.0);
    tmp0_with.g3n();
    tmp0_with.o2v(12.0, 6.0);
    tmp0_with.n3n(1.93, 0.0, 3.5, 1.57, 3.5, 3.5);
    tmp0_with.n3n(0.0, 1.93, -1.57, 3.5, -3.5, 3.5);
    tmp0_with.p3n(-3.5, -1.57, -3.5, -3.5);
    tmp0_with.m3n(8.5, 7.57, 10.07, 6.0, 12.0, 6.0);
    tmp0_with.g3n();
    tmp0_with.o2v(19.0, 19.0);
    tmp0_with.i3n(5.0);
    tmp0_with.l3n(-0.23);
    tmp0_with.n3n(0.0, -0.62, 0.28, -1.2, 0.76, -1.58);
    tmp0_with.m3n(7.47, 15.82, 9.64, 15.0, 12.0, 15.0);
    tmp0_with.p3n(4.53, 0.82, 6.24, 2.19);
    tmp0_with.n3n(0.48, 0.38, 0.76, 0.97, 0.76, 1.58);
    tmp0_with.k3n(19.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _accountBox = tmp$ret$8;
    return ensureNotNull(_accountBox);
  }
  var _accountCircle;
  var _add;
  function get_Add(_this__u8e3s4) {
    if (!(_add == null)) {
      return ensureNotNull(_add);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Add>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Add', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Add>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(19.0, 13.0);
    tmp0_with.j3n(-6.0);
    tmp0_with.l3n(6.0);
    tmp0_with.j3n(-2.0);
    tmp0_with.l3n(-6.0);
    tmp0_with.i3n(5.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.j3n(6.0);
    tmp0_with.k3n(5.0);
    tmp0_with.j3n(2.0);
    tmp0_with.l3n(6.0);
    tmp0_with.j3n(6.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _add = tmp$ret$8;
    return ensureNotNull(_add);
  }
  var _addCircle;
  var _arrowBack;
  function get_ArrowBack(_this__u8e3s4) {
    if (!(_arrowBack == null)) {
      return ensureNotNull(_arrowBack);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-ArrowBack>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.ArrowBack', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-ArrowBack>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(20.0, 11.0);
    tmp0_with.i3n(7.83);
    tmp0_with.h3n(5.59, -5.59);
    tmp0_with.q2v(12.0, 4.0);
    tmp0_with.h3n(-8.0, 8.0);
    tmp0_with.h3n(8.0, 8.0);
    tmp0_with.h3n(1.41, -1.41);
    tmp0_with.q2v(7.83, 13.0);
    tmp0_with.i3n(20.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _arrowBack = tmp$ret$8;
    return ensureNotNull(_arrowBack);
  }
  var _arrowDropDown;
  var _arrowForward;
  var _build;
  var _call;
  function get_Call(_this__u8e3s4) {
    if (!(_call == null)) {
      return ensureNotNull(_call);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Call>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Call', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Call>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(20.01, 15.38);
    tmp0_with.n3n(-1.23, 0.0, -2.42, -0.2, -3.53, -0.56);
    tmp0_with.n3n(-0.35, -0.12, -0.74, -0.03, -1.01, 0.24);
    tmp0_with.h3n(-1.57, 1.97);
    tmp0_with.n3n(-2.83, -1.35, -5.48, -3.9, -6.89, -6.83);
    tmp0_with.h3n(1.95, -1.66);
    tmp0_with.n3n(0.27, -0.28, 0.35, -0.67, 0.24, -1.02);
    tmp0_with.n3n(-0.37, -1.11, -0.56, -2.3, -0.56, -3.53);
    tmp0_with.n3n(0.0, -0.54, -0.45, -0.99, -0.99, -0.99);
    tmp0_with.i3n(4.19);
    tmp0_with.m3n(3.65, 3.0, 3.0, 3.24, 3.0, 3.99);
    tmp0_with.m3n(3.0, 13.28, 10.73, 21.0, 20.01, 21.0);
    tmp0_with.n3n(0.71, 0.0, 0.99, -0.63, 0.99, -1.18);
    tmp0_with.l3n(-3.45);
    tmp0_with.n3n(0.0, -0.54, -0.45, -0.99, -0.99, -0.99);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _call = tmp$ret$8;
    return ensureNotNull(_call);
  }
  var _check;
  function get_Check(_this__u8e3s4) {
    if (!(_check == null)) {
      return ensureNotNull(_check);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Check>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Check', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Check>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(9.0, 16.17);
    tmp0_with.q2v(4.83, 12.0);
    tmp0_with.h3n(-1.42, 1.41);
    tmp0_with.q2v(9.0, 19.0);
    tmp0_with.q2v(21.0, 7.0);
    tmp0_with.h3n(-1.41, -1.41);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _check = tmp$ret$8;
    return ensureNotNull(_check);
  }
  var _checkCircle;
  var _clear;
  function get_Clear(_this__u8e3s4) {
    if (!(_clear == null)) {
      return ensureNotNull(_clear);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Clear>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Clear', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Clear>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(19.0, 6.41);
    tmp0_with.q2v(17.59, 5.0);
    tmp0_with.q2v(12.0, 10.59);
    tmp0_with.q2v(6.41, 5.0);
    tmp0_with.q2v(5.0, 6.41);
    tmp0_with.q2v(10.59, 12.0);
    tmp0_with.q2v(5.0, 17.59);
    tmp0_with.q2v(6.41, 19.0);
    tmp0_with.q2v(12.0, 13.41);
    tmp0_with.q2v(17.59, 19.0);
    tmp0_with.q2v(19.0, 17.59);
    tmp0_with.q2v(13.41, 12.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _clear = tmp$ret$8;
    return ensureNotNull(_clear);
  }
  var _close;
  var _create;
  var _dateRange;
  var _delete;
  function get_Delete(_this__u8e3s4) {
    if (!(_delete == null)) {
      return ensureNotNull(_delete);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Delete>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Delete', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Delete>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(6.0, 19.0);
    tmp0_with.n3n(0.0, 1.1, 0.9, 2.0, 2.0, 2.0);
    tmp0_with.j3n(8.0);
    tmp0_with.n3n(1.1, 0.0, 2.0, -0.9, 2.0, -2.0);
    tmp0_with.k3n(7.0);
    tmp0_with.i3n(6.0);
    tmp0_with.l3n(12.0);
    tmp0_with.g3n();
    tmp0_with.o2v(19.0, 4.0);
    tmp0_with.j3n(-3.5);
    tmp0_with.h3n(-1.0, -1.0);
    tmp0_with.j3n(-5.0);
    tmp0_with.h3n(-1.0, 1.0);
    tmp0_with.i3n(5.0);
    tmp0_with.l3n(2.0);
    tmp0_with.j3n(14.0);
    tmp0_with.k3n(4.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _delete = tmp$ret$8;
    return ensureNotNull(_delete);
  }
  var _done;
  var _edit;
  var _email;
  var _exitToApp;
  var _face;
  var _favorite;
  function get_Favorite(_this__u8e3s4) {
    if (!(_favorite == null)) {
      return ensureNotNull(_favorite);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Favorite>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Favorite', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Favorite>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(12.0, 21.35);
    tmp0_with.h3n(-1.45, -1.32);
    tmp0_with.m3n(5.4, 15.36, 2.0, 12.28, 2.0, 8.5);
    tmp0_with.m3n(2.0, 5.42, 4.42, 3.0, 7.5, 3.0);
    tmp0_with.n3n(1.74, 0.0, 3.41, 0.81, 4.5, 2.09);
    tmp0_with.m3n(13.09, 3.81, 14.76, 3.0, 16.5, 3.0);
    tmp0_with.m3n(19.58, 3.0, 22.0, 5.42, 22.0, 8.5);
    tmp0_with.n3n(0.0, 3.78, -3.4, 6.86, -8.55, 11.54);
    tmp0_with.q2v(12.0, 21.35);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _favorite = tmp$ret$8;
    return ensureNotNull(_favorite);
  }
  var _favoriteBorder;
  var _home;
  var _info;
  function get_Info(_this__u8e3s4) {
    if (!(_info == null)) {
      return ensureNotNull(_info);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Info>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Info', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Info>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(12.0, 2.0);
    tmp0_with.m3n(6.48, 2.0, 2.0, 6.48, 2.0, 12.0);
    tmp0_with.p3n(4.48, 10.0, 10.0, 10.0);
    tmp0_with.p3n(10.0, -4.48, 10.0, -10.0);
    tmp0_with.o3n(17.52, 2.0, 12.0, 2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(13.0, 17.0);
    tmp0_with.j3n(-2.0);
    tmp0_with.l3n(-6.0);
    tmp0_with.j3n(2.0);
    tmp0_with.l3n(6.0);
    tmp0_with.g3n();
    tmp0_with.o2v(13.0, 9.0);
    tmp0_with.j3n(-2.0);
    tmp0_with.q2v(11.0, 7.0);
    tmp0_with.j3n(2.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _info = tmp$ret$8;
    return ensureNotNull(_info);
  }
  var _keyboardArrowDown;
  var _keyboardArrowLeft;
  var _keyboardArrowRight;
  var _keyboardArrowUp;
  var _list;
  function get_List(_this__u8e3s4) {
    if (!(_list == null)) {
      return ensureNotNull(_list);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-List>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.List', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-List>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(3.0, 13.0);
    tmp0_with.j3n(2.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.q2v(3.0, 11.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(3.0, 17.0);
    tmp0_with.j3n(2.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.q2v(3.0, 15.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(3.0, 9.0);
    tmp0_with.j3n(2.0);
    tmp0_with.q2v(5.0, 7.0);
    tmp0_with.q2v(3.0, 7.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(7.0, 13.0);
    tmp0_with.j3n(14.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.q2v(7.0, 11.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(7.0, 17.0);
    tmp0_with.j3n(14.0);
    tmp0_with.l3n(-2.0);
    tmp0_with.q2v(7.0, 15.0);
    tmp0_with.l3n(2.0);
    tmp0_with.g3n();
    tmp0_with.o2v(7.0, 7.0);
    tmp0_with.l3n(2.0);
    tmp0_with.j3n(14.0);
    tmp0_with.q2v(21.0, 7.0);
    tmp0_with.q2v(7.0, 7.0);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _list = tmp$ret$8;
    return ensureNotNull(_list);
  }
  var _locationOn;
  function get_LocationOn(_this__u8e3s4) {
    if (!(_locationOn == null)) {
      return ensureNotNull(_locationOn);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-LocationOn>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.LocationOn', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-LocationOn>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(12.0, 2.0);
    tmp0_with.m3n(8.13, 2.0, 5.0, 5.13, 5.0, 9.0);
    tmp0_with.n3n(0.0, 5.25, 7.0, 13.0, 7.0, 13.0);
    tmp0_with.p3n(7.0, -7.75, 7.0, -13.0);
    tmp0_with.n3n(0.0, -3.87, -3.13, -7.0, -7.0, -7.0);
    tmp0_with.g3n();
    tmp0_with.o2v(12.0, 11.5);
    tmp0_with.n3n(-1.38, 0.0, -2.5, -1.12, -2.5, -2.5);
    tmp0_with.p3n(1.12, -2.5, 2.5, -2.5);
    tmp0_with.p3n(2.5, 1.12, 2.5, 2.5);
    tmp0_with.p3n(-1.12, 2.5, -2.5, 2.5);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _locationOn = tmp$ret$8;
    return ensureNotNull(_locationOn);
  }
  var _lock;
  var _mailOutline;
  var _menu;
  var _moreVert;
  var _notifications;
  var _person;
  var _phone;
  var _place;
  var _playArrow;
  var _refresh;
  function get_Refresh(_this__u8e3s4) {
    if (!(_refresh == null)) {
      return ensureNotNull(_refresh);
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.material.icons.filled.<get-Refresh>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.Refresh', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var tmp$ret$6;
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var tmp5_materialPath = get_DefaultFillType();
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp1_path = new SolidColor(Companion_getInstance().b39_1);
    var tmp2_path = Companion_getInstance_0().d3h_1;
    var tmp3_path = Companion_getInstance_1().j3h_1;
    var tmp4_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'androidx.compose.material.icons.filled.<get-Refresh>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(17.65, 6.35);
    tmp0_with.m3n(16.2, 4.9, 14.21, 4.0, 12.0, 4.0);
    tmp0_with.n3n(-4.42, 0.0, -7.99, 3.58, -7.99, 8.0);
    tmp0_with.p3n(3.57, 8.0, 7.99, 8.0);
    tmp0_with.n3n(3.73, 0.0, 6.84, -2.55, 7.73, -6.0);
    tmp0_with.j3n(-2.08);
    tmp0_with.n3n(-0.82, 2.33, -3.04, 4.0, -5.65, 4.0);
    tmp0_with.n3n(-3.31, 0.0, -6.0, -2.69, -6.0, -6.0);
    tmp0_with.p3n(2.69, -6.0, 6.0, -6.0);
    tmp0_with.n3n(1.66, 0.0, 3.14, 0.69, 4.22, 1.78);
    tmp0_with.q2v(13.0, 11.0);
    tmp0_with.j3n(7.0);
    tmp0_with.k3n(4.0);
    tmp0_with.h3n(-2.35, 2.35);
    tmp0_with.g3n();
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    _refresh = tmp$ret$8;
    return ensureNotNull(_refresh);
  }
  var _search;
  var _send;
  var _settings;
  var _share;
  var _shoppingCart;
  var _star;
  var _thumbUp;
  var _warning;
  var _accountBox_0;
  var _accountCircle_0;
  var _add_0;
  var _addCircle_0;
  var _arrowBack_0;
  var _arrowDropDown_0;
  var _arrowForward_0;
  var _build_0;
  var _call_0;
  var _check_0;
  var _checkCircle_0;
  var _clear_0;
  var _close_0;
  var _create_0;
  var _dateRange_0;
  var _delete_0;
  var _done_0;
  var _edit_0;
  var _email_0;
  var _exitToApp_0;
  var _face_0;
  var _favorite_0;
  var _favoriteBorder_0;
  var _home_0;
  var _info_0;
  var _keyboardArrowDown_0;
  var _keyboardArrowLeft_0;
  var _keyboardArrowRight_0;
  var _keyboardArrowUp_0;
  var _list_0;
  var _locationOn_0;
  var _lock_0;
  var _mailOutline_0;
  var _menu_0;
  var _moreVert_0;
  var _notifications_0;
  var _person_0;
  var _phone_0;
  var _place_0;
  var _playArrow_0;
  var _refresh_0;
  var _search_0;
  var _send_0;
  var _settings_0;
  var _share_0;
  var _shoppingCart_0;
  var _star_0;
  var _thumbUp_0;
  var _warning_0;
  var _accountBox_1;
  var _accountCircle_1;
  var _add_1;
  var _addCircle_1;
  var _arrowBack_1;
  var _arrowDropDown_1;
  var _arrowForward_1;
  var _build_1;
  var _call_1;
  var _check_1;
  var _checkCircle_1;
  var _clear_1;
  var _close_1;
  var _create_1;
  var _dateRange_1;
  var _delete_1;
  var _done_1;
  var _edit_1;
  var _email_1;
  var _exitToApp_1;
  var _face_1;
  var _favorite_1;
  var _favoriteBorder_1;
  var _home_1;
  var _info_1;
  var _keyboardArrowDown_1;
  var _keyboardArrowLeft_1;
  var _keyboardArrowRight_1;
  var _keyboardArrowUp_1;
  var _list_1;
  var _locationOn_1;
  var _lock_1;
  var _mailOutline_1;
  var _menu_1;
  var _moreVert_1;
  var _notifications_1;
  var _person_1;
  var _phone_1;
  var _place_1;
  var _playArrow_1;
  var _refresh_1;
  var _search_1;
  var _send_1;
  var _settings_1;
  var _share_1;
  var _shoppingCart_1;
  var _star_1;
  var _thumbUp_1;
  var _warning_1;
  var _accountBox_2;
  var _accountCircle_2;
  var _add_2;
  var _addCircle_2;
  var _arrowBack_2;
  var _arrowDropDown_2;
  var _arrowForward_2;
  var _build_2;
  var _call_2;
  var _check_2;
  var _checkCircle_2;
  var _clear_2;
  var _close_2;
  var _create_2;
  var _dateRange_2;
  var _delete_2;
  var _done_2;
  var _edit_2;
  var _email_2;
  var _exitToApp_2;
  var _face_2;
  var _favorite_2;
  var _favoriteBorder_2;
  var _home_2;
  var _info_2;
  var _keyboardArrowDown_2;
  var _keyboardArrowLeft_2;
  var _keyboardArrowRight_2;
  var _keyboardArrowUp_2;
  var _list_2;
  var _locationOn_2;
  var _lock_2;
  var _mailOutline_2;
  var _menu_2;
  var _moreVert_2;
  var _notifications_2;
  var _person_2;
  var _phone_2;
  var _place_2;
  var _playArrow_2;
  var _refresh_2;
  var _search_2;
  var _send_2;
  var _settings_2;
  var _share_2;
  var _shoppingCart_2;
  var _star_2;
  var _thumbUp_2;
  var _warning_2;
  var _accountBox_3;
  var _accountCircle_3;
  var _add_3;
  var _addCircle_3;
  var _arrowBack_3;
  var _arrowDropDown_3;
  var _arrowForward_3;
  var _build_3;
  var _call_3;
  var _check_3;
  var _checkCircle_3;
  var _clear_3;
  var _close_3;
  var _create_3;
  var _dateRange_3;
  var _delete_3;
  var _done_3;
  var _edit_3;
  var _email_3;
  var _exitToApp_3;
  var _face_3;
  var _favorite_3;
  var _favoriteBorder_3;
  var _home_3;
  var _info_3;
  var _keyboardArrowDown_3;
  var _keyboardArrowLeft_3;
  var _keyboardArrowRight_3;
  var _keyboardArrowUp_3;
  var _list_3;
  var _locationOn_3;
  var _lock_3;
  var _mailOutline_3;
  var _menu_3;
  var _moreVert_3;
  var _notifications_3;
  var _person_3;
  var _phone_3;
  var _place_3;
  var _playArrow_3;
  var _refresh_3;
  var _search_3;
  var _send_3;
  var _settings_3;
  var _share_3;
  var _shoppingCart_3;
  var _star_3;
  var _thumbUp_3;
  var _warning_3;
  //region block: init
  MaterialIconDimension = 24.0;
  _accountBox = null;
  _accountCircle = null;
  _add = null;
  _addCircle = null;
  _arrowBack = null;
  _arrowDropDown = null;
  _arrowForward = null;
  _build = null;
  _call = null;
  _check = null;
  _checkCircle = null;
  _clear = null;
  _close = null;
  _create = null;
  _dateRange = null;
  _delete = null;
  _done = null;
  _edit = null;
  _email = null;
  _exitToApp = null;
  _face = null;
  _favorite = null;
  _favoriteBorder = null;
  _home = null;
  _info = null;
  _keyboardArrowDown = null;
  _keyboardArrowLeft = null;
  _keyboardArrowRight = null;
  _keyboardArrowUp = null;
  _list = null;
  _locationOn = null;
  _lock = null;
  _mailOutline = null;
  _menu = null;
  _moreVert = null;
  _notifications = null;
  _person = null;
  _phone = null;
  _place = null;
  _playArrow = null;
  _refresh = null;
  _search = null;
  _send = null;
  _settings = null;
  _share = null;
  _shoppingCart = null;
  _star = null;
  _thumbUp = null;
  _warning = null;
  _accountBox_0 = null;
  _accountCircle_0 = null;
  _add_0 = null;
  _addCircle_0 = null;
  _arrowBack_0 = null;
  _arrowDropDown_0 = null;
  _arrowForward_0 = null;
  _build_0 = null;
  _call_0 = null;
  _check_0 = null;
  _checkCircle_0 = null;
  _clear_0 = null;
  _close_0 = null;
  _create_0 = null;
  _dateRange_0 = null;
  _delete_0 = null;
  _done_0 = null;
  _edit_0 = null;
  _email_0 = null;
  _exitToApp_0 = null;
  _face_0 = null;
  _favorite_0 = null;
  _favoriteBorder_0 = null;
  _home_0 = null;
  _info_0 = null;
  _keyboardArrowDown_0 = null;
  _keyboardArrowLeft_0 = null;
  _keyboardArrowRight_0 = null;
  _keyboardArrowUp_0 = null;
  _list_0 = null;
  _locationOn_0 = null;
  _lock_0 = null;
  _mailOutline_0 = null;
  _menu_0 = null;
  _moreVert_0 = null;
  _notifications_0 = null;
  _person_0 = null;
  _phone_0 = null;
  _place_0 = null;
  _playArrow_0 = null;
  _refresh_0 = null;
  _search_0 = null;
  _send_0 = null;
  _settings_0 = null;
  _share_0 = null;
  _shoppingCart_0 = null;
  _star_0 = null;
  _thumbUp_0 = null;
  _warning_0 = null;
  _accountBox_1 = null;
  _accountCircle_1 = null;
  _add_1 = null;
  _addCircle_1 = null;
  _arrowBack_1 = null;
  _arrowDropDown_1 = null;
  _arrowForward_1 = null;
  _build_1 = null;
  _call_1 = null;
  _check_1 = null;
  _checkCircle_1 = null;
  _clear_1 = null;
  _close_1 = null;
  _create_1 = null;
  _dateRange_1 = null;
  _delete_1 = null;
  _done_1 = null;
  _edit_1 = null;
  _email_1 = null;
  _exitToApp_1 = null;
  _face_1 = null;
  _favorite_1 = null;
  _favoriteBorder_1 = null;
  _home_1 = null;
  _info_1 = null;
  _keyboardArrowDown_1 = null;
  _keyboardArrowLeft_1 = null;
  _keyboardArrowRight_1 = null;
  _keyboardArrowUp_1 = null;
  _list_1 = null;
  _locationOn_1 = null;
  _lock_1 = null;
  _mailOutline_1 = null;
  _menu_1 = null;
  _moreVert_1 = null;
  _notifications_1 = null;
  _person_1 = null;
  _phone_1 = null;
  _place_1 = null;
  _playArrow_1 = null;
  _refresh_1 = null;
  _search_1 = null;
  _send_1 = null;
  _settings_1 = null;
  _share_1 = null;
  _shoppingCart_1 = null;
  _star_1 = null;
  _thumbUp_1 = null;
  _warning_1 = null;
  _accountBox_2 = null;
  _accountCircle_2 = null;
  _add_2 = null;
  _addCircle_2 = null;
  _arrowBack_2 = null;
  _arrowDropDown_2 = null;
  _arrowForward_2 = null;
  _build_2 = null;
  _call_2 = null;
  _check_2 = null;
  _checkCircle_2 = null;
  _clear_2 = null;
  _close_2 = null;
  _create_2 = null;
  _dateRange_2 = null;
  _delete_2 = null;
  _done_2 = null;
  _edit_2 = null;
  _email_2 = null;
  _exitToApp_2 = null;
  _face_2 = null;
  _favorite_2 = null;
  _favoriteBorder_2 = null;
  _home_2 = null;
  _info_2 = null;
  _keyboardArrowDown_2 = null;
  _keyboardArrowLeft_2 = null;
  _keyboardArrowRight_2 = null;
  _keyboardArrowUp_2 = null;
  _list_2 = null;
  _locationOn_2 = null;
  _lock_2 = null;
  _mailOutline_2 = null;
  _menu_2 = null;
  _moreVert_2 = null;
  _notifications_2 = null;
  _person_2 = null;
  _phone_2 = null;
  _place_2 = null;
  _playArrow_2 = null;
  _refresh_2 = null;
  _search_2 = null;
  _send_2 = null;
  _settings_2 = null;
  _share_2 = null;
  _shoppingCart_2 = null;
  _star_2 = null;
  _thumbUp_2 = null;
  _warning_2 = null;
  _accountBox_3 = null;
  _accountCircle_3 = null;
  _add_3 = null;
  _addCircle_3 = null;
  _arrowBack_3 = null;
  _arrowDropDown_3 = null;
  _arrowForward_3 = null;
  _build_3 = null;
  _call_3 = null;
  _check_3 = null;
  _checkCircle_3 = null;
  _clear_3 = null;
  _close_3 = null;
  _create_3 = null;
  _dateRange_3 = null;
  _delete_3 = null;
  _done_3 = null;
  _edit_3 = null;
  _email_3 = null;
  _exitToApp_3 = null;
  _face_3 = null;
  _favorite_3 = null;
  _favoriteBorder_3 = null;
  _home_3 = null;
  _info_3 = null;
  _keyboardArrowDown_3 = null;
  _keyboardArrowLeft_3 = null;
  _keyboardArrowRight_3 = null;
  _keyboardArrowUp_3 = null;
  _list_3 = null;
  _locationOn_3 = null;
  _lock_3 = null;
  _mailOutline_3 = null;
  _menu_3 = null;
  _moreVert_3 = null;
  _notifications_3 = null;
  _person_3 = null;
  _phone_3 = null;
  _place_3 = null;
  _playArrow_3 = null;
  _refresh_3 = null;
  _search_3 = null;
  _send_3 = null;
  _settings_3 = null;
  _share_3 = null;
  _shoppingCart_3 = null;
  _star_3 = null;
  _thumbUp_3 = null;
  _warning_3 = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_AccountBox;
  _.$_$.b = get_Add;
  _.$_$.c = get_ArrowBack;
  _.$_$.d = get_Call;
  _.$_$.e = get_Check;
  _.$_$.f = get_Clear;
  _.$_$.g = get_Delete;
  _.$_$.h = get_Favorite;
  _.$_$.i = get_Info;
  _.$_$.j = get_List;
  _.$_$.k = get_LocationOn;
  _.$_$.l = get_Refresh;
  _.$_$.m = get_MaterialIconDimension;
  _.$_$.n = Filled_getInstance;
  _.$_$.o = Icons_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material-icons-core.js.map
