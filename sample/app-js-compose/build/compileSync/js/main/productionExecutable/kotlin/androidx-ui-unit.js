(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-geometry.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-unit'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-unit'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-unit'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-unit'.");
    }
    root['androidx-ui-unit'] = factory(typeof this['androidx-ui-unit'] === 'undefined' ? {} : this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-geometry']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Long = kotlin_kotlin.$_$.db;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.v8;
  var VOID = kotlin_kotlin.$_$.mc;
  var protoOf = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toLong = kotlin_kotlin.$_$.t8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var coerceIn = kotlin_kotlin.$_$.m9;
  var roundToInt = kotlin_kotlin.$_$.b9;
  var isInfinite = kotlin_kotlin.$_$.tb;
  var equals = kotlin_kotlin.$_$.u7;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var compareTo = kotlin_kotlin.$_$.s7;
  var isNaN_0 = kotlin_kotlin.$_$.ub;
  var Comparable = kotlin_kotlin.$_$.xa;
  var toBits = kotlin_kotlin.$_$.fc;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Enum = kotlin_kotlin.$_$.ya;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Constraints, 'Constraints', classMeta);
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.n2l();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.p2l(_this__u8e3s4);
    var tmp;
    if (isInfinite(px)) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      tmp$ret$0 = roundToInt(px);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_8().t2l_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Density.toPx.<anonymous>' call
      tmp$ret$0 = 'Only Sp can convert to Px';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.o2l() * this.n2l();
  }
  function toDp(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = _this__u8e3s4 / this.n2l();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function toDp_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = _this__u8e3s4 / this.n2l();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().z2l_1));
    if (tmp$ret$0) {
      tmp = Size(this.p2l(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.p2l(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance().q2k_1;
    }
    return tmp;
  }
  setMetadataFor(Density, 'Density', interfaceMeta);
  setMetadataFor(DensityImpl, 'DensityImpl', classMeta, VOID, [Density]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Dp, 'Dp', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DpOffset, 'DpOffset', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(IntOffset, 'IntOffset', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(IntRect, 'IntRect', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(IntSize, 'IntSize', classMeta);
  setMetadataFor(LayoutDirection, 'LayoutDirection', classMeta, Enum);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TextUnit, 'TextUnit', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(TextUnitType, 'TextUnitType', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Velocity, 'Velocity', classMeta);
  //endregion
  function bitsNeedForSize($this, size) {
    var tmp;
    if (size < 8191) {
      tmp = 13;
    } else if (size < 32767) {
      tmp = 15;
    } else if (size < 65535) {
      tmp = 16;
    } else if (size < 262143) {
      tmp = 18;
    } else {
      throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in ' + 'Constraints');
    }
    return tmp;
  }
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _get_focusIndex__7g9rf3($this) {
    var tmp = _Constraints___get_value__impl__3ah2ax($this);
    Companion_getInstance_0();
    return tmp.s8(new Long(3, 0)).f8();
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    var mask = Companion_getInstance_0().h2l_1[_get_focusIndex__7g9rf3($this)];
    return _Constraints___get_value__impl__3ah2ax($this).e8(2).f8() & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    var mask = Companion_getInstance_0().h2l_1[_get_focusIndex__7g9rf3($this)];
    var width = _Constraints___get_value__impl__3ah2ax($this).e8(33).f8() & mask;
    var tmp;
    if (width === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = width - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().i2l_1[focus];
    var offset = Companion_getInstance_0().g2l_1[focus];
    return _Constraints___get_value__impl__3ah2ax($this).e8(offset).f8() & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().i2l_1[focus];
    var offset = Companion_getInstance_0().g2l_1[focus] + 31 | 0;
    var height = _Constraints___get_value__impl__3ah2ax($this).e8(offset).f8() & mask;
    var tmp;
    if (height === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = height - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    var mask = Companion_getInstance_0().h2l_1[_get_focusIndex__7g9rf3($this)];
    return !((_Constraints___get_value__impl__3ah2ax($this).e8(33).f8() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().i2l_1[focus];
    var offset = Companion_getInstance_0().g2l_1[focus] + 31 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).e8(offset).f8() & mask) === 0);
  }
  function _Constraints___get_hasFixedWidth__impl__4p17wc($this) {
    return _Constraints___get_maxWidth__impl__uuyqc($this) === _Constraints___get_minWidth__impl__hi9lfi($this);
  }
  function _Constraints___get_hasFixedHeight__impl__y56fxx($this) {
    return _Constraints___get_maxHeight__impl__dt3e8z($this) === _Constraints___get_minHeight__impl__ev4bgx($this);
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.require' call
    var tmp0_require = minHeight >= 0 ? minWidth >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$0 = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp;
    if (maxWidth >= minWidth) {
      tmp = true;
    } else {
      Companion_getInstance_0();
      tmp = maxWidth === 2147483647;
    }
    var tmp1_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$1 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp_0;
    if (maxHeight >= minHeight) {
      tmp_0 = true;
    } else {
      Companion_getInstance_0();
      tmp_0 = maxHeight === 2147483647;
    }
    var tmp2_require = tmp_0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$2 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().j2l(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = new Constraints($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Constraints(tmp_1)).l2l.call(tmp_0, minWidth, maxWidth, minHeight, maxHeight).k2l_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var tmp;
    Companion_getInstance_0();
    if (maxWidth === 2147483647) {
      tmp = 'Infinity';
    } else {
      tmp = maxWidth.toString();
    }
    var maxWidthStr = tmp;
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var tmp_0;
    Companion_getInstance_0();
    if (maxHeight === 2147483647) {
      tmp_0 = 'Infinity';
    } else {
      tmp_0 = maxHeight.toString();
    }
    var maxHeightStr = tmp_0;
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.s2k_1 = 2147483647;
    this.t2k_1 = new Long(0, 0);
    this.u2k_1 = new Long(1, 0);
    this.v2k_1 = new Long(2, 0);
    this.w2k_1 = new Long(3, 0);
    this.x2k_1 = new Long(3, 0);
    this.y2k_1 = 16;
    this.z2k_1 = 65535;
    this.a2l_1 = 15;
    this.b2l_1 = 32767;
    this.c2l_1 = 18;
    this.d2l_1 = 262143;
    this.e2l_1 = 13;
    this.f2l_1 = 8191;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([18, 20, 17, 15]);
    tmp.g2l_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf = new Int32Array([65535, 262143, 32767, 8191]);
    tmp$ret$1 = tmp0_intArrayOf;
    tmp_0.h2l_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf_0 = new Int32Array([32767, 8191, 65535, 262143]);
    tmp$ret$2 = tmp0_intArrayOf_0;
    tmp_1.i2l_1 = tmp$ret$2;
  }
  protoOf(Companion).m2l = function (width, height) {
    // Inline function 'kotlin.require' call
    var tmp0_require = width >= 0 ? height >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Companion.fixed.<anonymous>' call
      tmp$ret$0 = 'width(' + width + ') and height(' + height + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.j2l(width, width, height, height);
  };
  protoOf(Companion).j2l = function (minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSize(this, heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSize(this, widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height ' + ('of ' + heightVal + ' in Constraints'));
    }
    var tmp0_subject = widthBits;
    var tmp;
    switch (tmp0_subject) {
      case 15:
        tmp = new Long(2, 0);
        break;
      case 16:
        tmp = new Long(0, 0);
        break;
      case 13:
        tmp = new Long(3, 0);
        break;
      case 18:
        tmp = new Long(1, 0);
        break;
      default:
        throw IllegalStateException_init_$Create$('Should only have the provided constants.');
    }
    var focus = tmp;
    var maxWidthValue = maxWidth === 2147483647 ? 0 : maxWidth + 1 | 0;
    var maxHeightValue = maxHeight === 2147483647 ? 0 : maxHeight + 1 | 0;
    var minHeightOffset = this.g2l_1[focus.f8()];
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = focus.cf(toLong(minWidth).g8(2)).cf(toLong(maxWidthValue).g8(33)).cf(toLong(minHeight).g8(minHeightOffset)).cf(toLong(maxHeightValue).g8(maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.k2l_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.k2l_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.k2l_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.k2l_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.k2l_1, other);
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    var tmp;
    if (maxWidth === VOID) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = maxWidth;
    }
    maxWidth = tmp;
    minHeight = minHeight === VOID ? 0 : minHeight;
    var tmp_0;
    if (maxHeight === VOID) {
      Companion_getInstance_0();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = maxHeight;
    }
    maxHeight = tmp_0;
    // Inline function 'kotlin.require' call
    var tmp0_require = maxWidth >= minWidth;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$0 = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = maxHeight >= minHeight;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$1 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = minWidth >= 0 ? minHeight >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$2 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().j2l(minWidth, maxWidth, minHeight, maxHeight);
  }
  function offset(_this__u8e3s4, horizontal, vertical) {
    horizontal = horizontal === VOID ? 0 : horizontal;
    vertical = vertical === VOID ? 0 : vertical;
    return Constraints_0(coerceAtLeast(_Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4) + horizontal | 0, 0), addMaxWithMinimum(_Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4), horizontal), coerceAtLeast(_Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4) + vertical | 0, 0), addMaxWithMinimum(_Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4), vertical));
  }
  function constrainWidth(_this__u8e3s4, width) {
    return coerceIn(width, _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4));
  }
  function constrainHeight(_this__u8e3s4, height) {
    return coerceIn(height, _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4));
  }
  function constrain(_this__u8e3s4, otherConstraints) {
    return Constraints_0(coerceIn(_Constraints___get_minWidth__impl__hi9lfi(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_maxWidth__impl__uuyqc(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_minHeight__impl__ev4bgx(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)), coerceIn(_Constraints___get_maxHeight__impl__dt3e8z(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    Companion_getInstance_0();
    if (max === 2147483647) {
      tmp = max;
    } else {
      tmp = coerceAtLeast(max + value | 0, 0);
    }
    return tmp;
  }
  function isSatisfiedBy(_this__u8e3s4, size) {
    var tmp;
    var containsLower = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    var containsUpper = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    var containsArg = _IntSize___get_width__impl__d9yl4o(size);
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
      var containsUpper_0 = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
      var containsArg_0 = _IntSize___get_height__impl__prv63b(size);
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constrain_0(_this__u8e3s4, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__d9yl4o(size), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_IntSize___get_height__impl__prv63b(size), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.a2m_1 = density;
    this.b2m_1 = fontScale;
  }
  protoOf(DensityImpl).n2l = function () {
    return this.a2m_1;
  };
  protoOf(DensityImpl).o2l = function () {
    return this.b2m_1;
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.a2m_1 + ', fontScale=' + this.b2m_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.a2m_1);
    result = imul(result, 31) + getNumberHashCode(this.b2m_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.a2m_1, tmp0_other_with_cast.a2m_1))
      return false;
    if (!equals(this.b2m_1, tmp0_other_with_cast.b2m_1))
      return false;
    return true;
  };
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().z2l_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-width>.<anonymous>' call
      tmp$ret$0 = 'DpSize is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _DpSize___get_packedValue__impl__jx4au8($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.e8(32).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().z2l_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-height>.<anonymous>' call
      tmp$ret$0 = 'DpSize is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _DpSize___get_packedValue__impl__jx4au8($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.y2l_1 = DpSize(tmp_0, tmp$ret$1);
    this.z2l_1 = DpSize(Companion_getInstance_2().e2m_1, Companion_getInstance_2().e2m_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DpSize__hashCode_impl_jvpgaj($this) {
    return $this.hashCode();
  }
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    var tmp = $this.f2m_1;
    return Dp__compareTo_impl_tlg3dl(tmp, other instanceof Dp ? other.f2m_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb($this));
    if (tmp$ret$0) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.c2m_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.d2m_1 = _Dp___init__impl__ms3zkb(Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.e2m_1 = _Dp___init__impl__ms3zkb(NaN);
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.f2m_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.f2m_1 = value;
  }
  protoOf(Dp).g2m = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.f2m_1, other);
  };
  protoOf(Dp).u8 = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.f2m_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.f2m_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.f2m_1, other);
  };
  function DpSize(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(width);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(height);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function _DpOffset___init__impl__yq36wy(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__7zqn8y($this) {
    return $this;
  }
  function _DpOffset___get_x__impl__uauqb5($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().i2m_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-x>.<anonymous>' call
      tmp$ret$0 = 'DpOffset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.e8(32).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().i2m_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-y>.<anonymous>' call
      tmp$ret$0 = 'DpOffset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function DpOffset__toString_impl_qqhvsu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().i2m_1));
    if (tmp$ret$0) {
      tmp = '(' + new Dp(_DpOffset___get_x__impl__uauqb5($this)) + ', ' + new Dp(_DpOffset___get_y__impl__1h898y($this)) + ')';
    } else {
      tmp = 'DpOffset.Unspecified';
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.h2m_1 = DpOffset_0(tmp_0, tmp$ret$1);
    this.i2m_1 = DpOffset_0(Companion_getInstance_2().e2m_1, Companion_getInstance_2().e2m_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DpOffset__hashCode_impl_mjg9df($this) {
    return $this.hashCode();
  }
  function DpOffset__equals_impl_7fc41d($this, other) {
    if (!(other instanceof DpOffset))
      return false;
    var tmp0_other_with_cast = other instanceof DpOffset ? other.j2m_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_3();
    this.j2m_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.j2m_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.j2m_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.j2m_1, other);
  };
  function DpOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(x);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(y);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _IntOffset___get_packedValue__impl__982pbx($this);
    tmp$ret$0 = tmp0_unpackInt1.e8(32).f8();
    return tmp$ret$0;
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp0_unpackInt2 = _IntOffset___get_packedValue__impl__982pbx($this);
    tmp$ret$0 = tmp0_unpackInt2.s8(new Long(-1, 0)).f8();
    return tmp$ret$0;
  }
  function IntOffset__copy_impl_pmdgk6($this, x, y) {
    return IntOffset_0(x, y);
  }
  function IntOffset__copy$default_impl_1y5pbb($this, x, y, $super) {
    x = x === VOID ? _IntOffset___get_x__impl__qiqr5o($this) : x;
    y = y === VOID ? _IntOffset___get_y__impl__2avpwj($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = IntOffset__copy_impl_pmdgk6($this, x, y);
    } else {
      var tmp_0 = new IntOffset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new IntOffset(tmp_1)).l2m.call(tmp_0, x, y).k2m_1;
    }
    return tmp;
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.m2m_1 = IntOffset_0(0, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.k2m_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_4();
    this.k2m_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.k2m_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.k2m_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.k2m_1, other);
  };
  function plus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) + _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) + _IntOffset___get_y__impl__2avpwj(offset));
  }
  function minus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) - _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - _IntOffset___get_y__impl__2avpwj(offset));
  }
  function IntOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(x).g8(32).cf(toLong(y).s8(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.n2m_1 = new IntRect(0, 0, 0, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_5();
    this.o2m_1 = left;
    this.p2m_1 = top;
    this.q2m_1 = right;
    this.r2m_1 = bottom;
    this.s2m_1 = 0;
  }
  protoOf(IntRect).t2m = function (offset) {
    return ((_IntOffset___get_x__impl__qiqr5o(offset) >= this.o2m_1 ? _IntOffset___get_x__impl__qiqr5o(offset) < this.q2m_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) >= this.p2m_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) < this.r2m_1 : false;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.o2m_1 + ', ') + ('' + this.p2m_1 + ', ') + ('' + this.q2m_1 + ', ') + ('' + this.r2m_1 + ')');
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.o2m_1;
    result = imul(result, 31) + this.p2m_1 | 0;
    result = imul(result, 31) + this.q2m_1 | 0;
    result = imul(result, 31) + this.r2m_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.o2m_1 === tmp0_other_with_cast.o2m_1))
      return false;
    if (!(this.p2m_1 === tmp0_other_with_cast.p2m_1))
      return false;
    if (!(this.q2m_1 === tmp0_other_with_cast.q2m_1))
      return false;
    if (!(this.r2m_1 === tmp0_other_with_cast.r2m_1))
      return false;
    return true;
  };
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset), _IntOffset___get_x__impl__qiqr5o(offset) + _IntSize___get_width__impl__d9yl4o(size) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntSize___get_height__impl__prv63b(size) | 0);
  }
  function toSize_0(_this__u8e3s4) {
    return Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4), _IntSize___get_height__impl__prv63b(_this__u8e3s4));
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _IntSize___get_packedValue__impl__uho7jf($this);
    tmp$ret$0 = tmp0_unpackInt1.e8(32).f8();
    return tmp$ret$0;
  }
  function _IntSize___get_height__impl__prv63b($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp0_unpackInt2 = _IntSize___get_packedValue__impl__uho7jf($this);
    tmp$ret$0 = tmp0_unpackInt2.s8(new Long(-1, 0)).f8();
    return tmp$ret$0;
  }
  function IntSize__toString_impl_54w9zl($this) {
    return '' + _IntSize___get_width__impl__d9yl4o($this) + ' x ' + _IntSize___get_height__impl__prv63b($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.u2m_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.v2m_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_6();
    this.v2m_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.v2m_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.v2m_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.v2m_1, other);
  };
  function IntSize_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(width).g8(32).cf(toLong(height).s8(new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_4().m2m_1, _this__u8e3s4);
  }
  function get_center(_this__u8e3s4) {
    return IntOffset_0(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4) / 2 | 0, _IntSize___get_height__impl__prv63b(_this__u8e3s4) / 2 | 0);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function LayoutDirection_Rtl_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Rtl_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_8().s2l_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_8().t2l_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_8().u2l_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new TextUnitType(Companion_getInstance_8().s2l_1), new TextUnitType(Companion_getInstance_8().t2l_1), new TextUnitType(Companion_getInstance_8().u2l_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.w2m_1 = tmp$ret$2;
    var tmp_0 = this;
    var tmp_1 = new Long(0, 0);
    FloatCompanionObject_getInstance();
    tmp_0.x2m_1 = pack(tmp_1, NaN);
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return _TextUnit___get_packedValue__impl__it60w4($this).s8(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_7().w2m_1[_TextUnit___get_rawType__impl__tu8yq5($this).v8(32).f8()].y2m_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = _TextUnit___get_packedValue__impl__it60w4($this).s8(new Long(-1, 0)).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.z2m_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_7();
    this.z2m_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.z2m_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.z2m_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.z2m_1, other);
  };
  function get_isUnspecified(_this__u8e3s4) {
    return _TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_8().s2l_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_8().t2l_1) ? 'Sp' : equals(tmp0_subject, Companion_getInstance_8().u2l_1) ? 'Em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.s2l_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.t2l_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.u2l_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.y2m_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_8();
    this.y2m_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.y2m_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.y2m_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.y2m_1, other);
  };
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function checkArithmetic(a) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !get_isUnspecified(a);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      tmp$ret$0 = 'Cannot perform operation for Unspecified type.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(unitType.cf(toLong(toBits(v)).s8(new Long(-1, 0))));
  }
  function _Velocity___init__impl__tjpg0s(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _Velocity___get_x__impl__qqcikv($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp2_unpackFloat1 = _get_packedValue__aj623s($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat1.e8(32).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _Velocity___get_y__impl__239yhc($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp2_unpackFloat2 = _get_packedValue__aj623s($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Velocity__copy_impl_c7yiyt($this, x, y) {
    return Velocity_0(x, y);
  }
  function Velocity__copy$default_impl_eql69u($this, x, y, $super) {
    x = x === VOID ? _Velocity___get_x__impl__qqcikv($this) : x;
    y = y === VOID ? _Velocity___get_y__impl__239yhc($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Velocity__copy_impl_c7yiyt($this, x, y);
    } else {
      var tmp_0 = new Velocity($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Velocity(tmp_1)).b2n.call(tmp_0, x, y).a2n_1;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.c2n_1 = Velocity_0(0.0, 0.0);
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Velocity__minus_impl_w0cg92($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) - _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) - _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__plus_impl_9g3s6u($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) + _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) + _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__times_impl_yav0ik($this, operand) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) * operand, _Velocity___get_y__impl__239yhc($this) * operand);
  }
  function Velocity__toString_impl_n5zo2k($this) {
    return '(' + _Velocity___get_x__impl__qqcikv($this) + ', ' + _Velocity___get_y__impl__239yhc($this) + ') px/sec';
  }
  function Velocity__hashCode_impl_q3yh3p($this) {
    return $this.hashCode();
  }
  function Velocity__equals_impl_327knj($this, other) {
    if (!(other instanceof Velocity))
      return false;
    var tmp0_other_with_cast = other instanceof Velocity ? other.a2n_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_9();
    this.a2n_1 = packedValue;
  }
  protoOf(Velocity).toString = function () {
    return Velocity__toString_impl_n5zo2k(this.a2n_1);
  };
  protoOf(Velocity).hashCode = function () {
    return Velocity__hashCode_impl_q3yh3p(this.a2n_1);
  };
  protoOf(Velocity).equals = function (other) {
    return Velocity__equals_impl_327knj(this.a2n_1, other);
  };
  function Velocity_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$0);
  }
  //region block: post-declaration
  protoOf(DensityImpl).p2l = toPx;
  protoOf(DensityImpl).r2l = toPx_0;
  protoOf(DensityImpl).q2l = roundToPx;
  protoOf(DensityImpl).v2l = toDp;
  protoOf(DensityImpl).w2l = toDp_0;
  protoOf(DensityImpl).x2l = toSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = toDp_0;
  _.$_$.e = toDp;
  _.$_$.f = toPx;
  _.$_$.g = toPx_0;
  _.$_$.h = toSize;
  _.$_$.i = Density_0;
  _.$_$.j = Density;
  _.$_$.k = DpOffset_0;
  _.$_$.l = DpOffset;
  _.$_$.m = DpSize;
  _.$_$.n = Dp;
  _.$_$.o = IntOffset_0;
  _.$_$.p = IntOffset;
  _.$_$.q = IntRect_0;
  _.$_$.r = IntSize_0;
  _.$_$.s = IntSize;
  _.$_$.t = TextUnit;
  _.$_$.u = Velocity_0;
  _.$_$.v = Velocity;
  _.$_$.w = get_center;
  _.$_$.x = checkArithmetic;
  _.$_$.y = constrainHeight;
  _.$_$.z = constrainWidth;
  _.$_$.a1 = constrain;
  _.$_$.b1 = constrain_0;
  _.$_$.c1 = isSatisfiedBy;
  _.$_$.d1 = get_isUnspecified;
  _.$_$.e1 = minus;
  _.$_$.f1 = offset;
  _.$_$.g1 = pack;
  _.$_$.h1 = plus;
  _.$_$.i1 = get_sp_0;
  _.$_$.j1 = get_sp;
  _.$_$.k1 = toIntRect;
  _.$_$.l1 = toSize_0;
  _.$_$.m1 = LayoutDirection_Ltr_getInstance;
  _.$_$.n1 = LayoutDirection_Rtl_getInstance;
  _.$_$.o1 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.p1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.q1 = _Constraints___get_hasFixedHeight__impl__y56fxx;
  _.$_$.r1 = _Constraints___get_hasFixedWidth__impl__4p17wc;
  _.$_$.s1 = Constraints__hashCode_impl_ij7484;
  _.$_$.t1 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.u1 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.v1 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.w1 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.x1 = _Dp___init__impl__ms3zkb;
  _.$_$.y1 = Dp__compareTo_impl_tlg3dl;
  _.$_$.z1 = Dp__hashCode_impl_sxkrra;
  _.$_$.a2 = _Dp___get_value__impl__geb1vb;
  _.$_$.b2 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.c2 = _DpOffset___get_y__impl__1h898y;
  _.$_$.d2 = DpSize__hashCode_impl_jvpgaj;
  _.$_$.e2 = _DpSize___get_height__impl__5xueo2;
  _.$_$.f2 = _DpSize___get_width__impl__o3d5gt;
  _.$_$.g2 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.h2 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.i2 = IntSize__hashCode_impl_gm9mta;
  _.$_$.j2 = _IntSize___get_height__impl__prv63b;
  _.$_$.k2 = _IntSize___get_packedValue__impl__uho7jf;
  _.$_$.l2 = _IntSize___get_width__impl__d9yl4o;
  _.$_$.m2 = _TextUnit___init__impl__r5fj1s;
  _.$_$.n2 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.o2 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.p2 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.q2 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.r2 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.s2 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.t2 = Velocity__minus_impl_w0cg92;
  _.$_$.u2 = Velocity__plus_impl_9g3s6u;
  _.$_$.v2 = Velocity__times_impl_yav0ik;
  _.$_$.w2 = _Velocity___get_x__impl__qqcikv;
  _.$_$.x2 = _Velocity___get_y__impl__239yhc;
  _.$_$.y2 = Constraints__copy$default_impl_f452rp;
  _.$_$.z2 = IntOffset__copy$default_impl_1y5pbb;
  _.$_$.a3 = Velocity__copy$default_impl_eql69u;
  _.$_$.b3 = Companion_getInstance_0;
  _.$_$.c3 = Companion_getInstance_2;
  _.$_$.d3 = Companion_getInstance_3;
  _.$_$.e3 = Companion_getInstance_1;
  _.$_$.f3 = Companion_getInstance_4;
  _.$_$.g3 = Companion_getInstance_5;
  _.$_$.h3 = Companion_getInstance_6;
  _.$_$.i3 = Companion_getInstance_7;
  _.$_$.j3 = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-unit.js.map
