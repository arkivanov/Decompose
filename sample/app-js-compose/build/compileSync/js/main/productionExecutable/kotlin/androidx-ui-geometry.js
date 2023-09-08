(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-geometry'.");
    }
    root['androidx-ui-geometry'] = factory(typeof this['androidx-ui-geometry'] === 'undefined' ? {} : this['androidx-ui-geometry'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Long = kotlin_kotlin.$_$.db;
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var toBits = kotlin_kotlin.$_$.fc;
  var toLong = kotlin_kotlin.$_$.t8;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var isFinite = kotlin_kotlin.$_$.sb;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var equals = kotlin_kotlin.$_$.u7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CornerRadius, 'CornerRadius', classMeta);
  setMetadataFor(MutableRect, 'MutableRect', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Offset, 'Offset', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoundRect, 'RoundRect', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp2_unpackFloat1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat1.e8(32).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp2_unpackFloat2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Companion() {
    Companion_instance = this;
    this.e2j_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.f2j_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.f2j_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.f2j_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.f2j_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.f2j_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    tmp$ret$0 = Math.max(digits, 0);
    var clampedDigits = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    tmp$ret$1 = Math.pow(10.0, clampedDigits);
    var pow = tmp$ret$1;
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.g2j_1 = left;
    this.h2j_1 = top;
    this.i2j_1 = right;
    this.j2j_1 = bottom;
    this.k2j_1 = 8;
  }
  protoOf(MutableRect).it = function () {
    return this.g2j_1 >= this.i2j_1 ? true : this.h2j_1 >= this.j2j_1;
  };
  protoOf(MutableRect).l2j = function (left, top, right, bottom) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.g2j_1;
    tmp$ret$0 = Math.max(left, tmp0_max);
    tmp.g2j_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = this.h2j_1;
    tmp$ret$1 = Math.max(top, tmp1_max);
    tmp_0.h2j_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = this.i2j_1;
    tmp$ret$2 = Math.min(right, tmp2_min);
    tmp_1.i2j_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = this.j2j_1;
    tmp$ret$3 = Math.min(bottom, tmp3_min);
    tmp_2.j2j_1 = tmp$ret$3;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.g2j_1, 1) + ', ') + (toStringAsFixed(this.h2j_1, 1) + ', ') + (toStringAsFixed(this.i2j_1, 1) + ', ') + (toStringAsFixed(this.j2j_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.g2j_1, _this__u8e3s4.h2j_1, _this__u8e3s4.i2j_1, _this__u8e3s4.j2j_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().o2j_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      tmp$ret$0 = 'Offset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _Offset___get_packedValue__impl__xh2k8q($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.e8(32).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().o2j_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      tmp$ret$0 = 'Offset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _Offset___get_packedValue__impl__xh2k8q($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Offset__component1_impl_qn5q2($this) {
    return _Offset___get_x__impl__xvi35n($this);
  }
  function Offset__component2_impl_9ljbv($this) {
    return _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    return Offset_0(x, y);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    x = x === VOID ? _Offset___get_x__impl__xvi35n($this) : x;
    y = y === VOID ? _Offset___get_y__impl__8bzhra($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_0 = new Offset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Offset(tmp_1)).q2j.call(tmp_0, x, y).p2j_1;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.m2j_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.n2j_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp_0.o2j_1 = Offset_0(NaN, NaN);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return Offset_0(-_Offset___get_x__impl__xvi35n($this), -_Offset___get_y__impl__8bzhra($this));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__times_impl_jz1mli($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) * operand, _Offset___get_y__impl__8bzhra($this) * operand);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) / operand, _Offset___get_y__impl__8bzhra($this) / operand);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.p2j_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.p2j_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.p2j_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.p2j_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.p2j_1, other);
  };
  function Offset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().o2j_1));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.r2j_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.s2j_1 = left;
    this.t2j_1 = top;
    this.u2j_1 = right;
    this.v2j_1 = bottom;
    this.w2j_1 = 0;
  }
  protoOf(Rect).x2j = function () {
    return this.u2j_1 - this.s2j_1;
  };
  protoOf(Rect).y2j = function () {
    return this.v2j_1 - this.t2j_1;
  };
  protoOf(Rect).z2j = function () {
    return Size_0(this.x2j(), this.y2j());
  };
  protoOf(Rect).a2k = function (offset) {
    return new Rect(this.s2j_1 + _Offset___get_x__impl__xvi35n(offset), this.t2j_1 + _Offset___get_y__impl__8bzhra(offset), this.u2j_1 + _Offset___get_x__impl__xvi35n(offset), this.v2j_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).b2k = function (translateX, translateY) {
    return new Rect(this.s2j_1 + translateX, this.t2j_1 + translateY, this.u2j_1 + translateX, this.v2j_1 + translateY);
  };
  protoOf(Rect).c2k = function (other) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.s2j_1;
    var tmp1_max = other.s2j_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp2_max = this.t2j_1;
    var tmp3_max = other.t2j_1;
    tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp4_min = this.u2j_1;
    var tmp5_min = other.u2j_1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = this.v2j_1;
    var tmp7_min = other.v2j_1;
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).d2k = function () {
    return Offset_0(this.s2j_1, this.t2j_1);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.s2j_1, 1) + ', ') + (toStringAsFixed(this.t2j_1, 1) + ', ') + (toStringAsFixed(this.u2j_1, 1) + ', ') + (toStringAsFixed(this.v2j_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.s2j_1);
    result = imul(result, 31) + getNumberHashCode(this.t2j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u2j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v2j_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.s2j_1, tmp0_other_with_cast.s2j_1))
      return false;
    if (!equals(this.t2j_1, tmp0_other_with_cast.t2j_1))
      return false;
    if (!equals(this.u2j_1, tmp0_other_with_cast.u2j_1))
      return false;
    if (!equals(this.v2j_1, tmp0_other_with_cast.v2j_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e2k_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().e2j_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().e2j_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().e2j_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().e2j_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().e2j_1 : bottomLeftCornerRadius;
    this.f2k_1 = left;
    this.g2k_1 = top;
    this.h2k_1 = right;
    this.i2k_1 = bottom;
    this.j2k_1 = topLeftCornerRadius;
    this.k2k_1 = topRightCornerRadius;
    this.l2k_1 = bottomRightCornerRadius;
    this.m2k_1 = bottomLeftCornerRadius;
    this.n2k_1 = null;
    this.o2k_1 = 0;
  }
  protoOf(RoundRect).x2j = function () {
    return this.h2k_1 - this.f2k_1;
  };
  protoOf(RoundRect).y2j = function () {
    return this.i2k_1 - this.g2k_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.j2k_1;
    var trRadius = this.k2k_1;
    var brRadius = this.l2k_1;
    var blRadius = this.m2k_1;
    var rect = toStringAsFixed(this.f2k_1, 1) + ', ' + (toStringAsFixed(this.g2k_1, 1) + ', ') + (toStringAsFixed(this.h2k_1, 1) + ', ') + toStringAsFixed(this.i2k_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.f2k_1);
    result = imul(result, 31) + getNumberHashCode(this.g2k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h2k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i2k_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.j2k_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.k2k_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.l2k_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.m2k_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.f2k_1, tmp0_other_with_cast.f2k_1))
      return false;
    if (!equals(this.g2k_1, tmp0_other_with_cast.g2k_1))
      return false;
    if (!equals(this.h2k_1, tmp0_other_with_cast.h2k_1))
      return false;
    if (!equals(this.i2k_1, tmp0_other_with_cast.i2k_1))
      return false;
    if (!equals(this.j2k_1, tmp0_other_with_cast.j2k_1))
      return false;
    if (!equals(this.k2k_1, tmp0_other_with_cast.k2k_1))
      return false;
    if (!equals(this.l2k_1, tmp0_other_with_cast.l2k_1))
      return false;
    if (!equals(this.m2k_1, tmp0_other_with_cast.m2k_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().e2j_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().e2j_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().e2j_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().e2j_1 : bottomLeft;
    return new RoundRect(rect.s2j_1, rect.t2j_1, rect.u2j_1, rect.v2j_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2k_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2k_1) : false;
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().q2k_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      tmp$ret$0 = 'Size is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _Size___get_packedValue__impl__7rlt1o($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.e8(32).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().q2k_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      tmp$ret$0 = 'Size is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _Size___get_packedValue__impl__7rlt1o($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.s8(new Long(-1, 0)).f8();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.p2k_1 = Size_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.q2k_1 = Size_0(NaN, NaN);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = _Size___get_width__impl__58y75t($this);
    tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__nukmtt);
    var tmp2_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1__get_absoluteValue__rcem8i = _Size___get_height__impl__a04p02($this);
    tmp$ret$1 = Math.abs(tmp1__get_absoluteValue__rcem8i);
    var tmp3_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
    return tmp$ret$2;
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    tmp$ret$0 = !_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().q2k_1));
    if (tmp$ret$0) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.r2k_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.r2k_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.r2k_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.r2k_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.r2k_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().m2j_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    tmp$ret$0 = v1.g8(32).cf(v2.s8(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_0;
  _.$_$.g = Rect;
  _.$_$.h = RoundRect_0;
  _.$_$.i = RoundRect;
  _.$_$.j = Size_0;
  _.$_$.k = Size;
  _.$_$.l = get_center;
  _.$_$.m = get_isFinite;
  _.$_$.n = get_isSimple;
  _.$_$.o = toRect;
  _.$_$.p = toRect_0;
  _.$_$.q = _CornerRadius___get_x__impl__1594cn;
  _.$_$.r = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.s = Offset__component1_impl_qn5q2;
  _.$_$.t = Offset__component2_impl_9ljbv;
  _.$_$.u = Offset__div_impl_eaxtg1;
  _.$_$.v = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.w = Offset__getDistance_impl_pclvxn;
  _.$_$.x = Offset__hashCode_impl_hbql41;
  _.$_$.y = Offset__minus_impl_hoj2c0;
  _.$_$.z = Offset__plus_impl_c78cg0;
  _.$_$.a1 = Offset__times_impl_jz1mli;
  _.$_$.b1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.c1 = _Offset___get_x__impl__xvi35n;
  _.$_$.d1 = _Offset___get_y__impl__8bzhra;
  _.$_$.e1 = Size__hashCode_impl_2h1qpd;
  _.$_$.f1 = _Size___get_height__impl__a04p02;
  _.$_$.g1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.h1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.i1 = _Size___get_width__impl__58y75t;
  _.$_$.j1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.k1 = Companion_getInstance;
  _.$_$.l1 = Companion_getInstance_0;
  _.$_$.m1 = Companion_getInstance_1;
  _.$_$.n1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-geometry.js.map
