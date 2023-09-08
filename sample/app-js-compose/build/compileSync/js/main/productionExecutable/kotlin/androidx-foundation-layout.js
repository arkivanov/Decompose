(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation-layout'.");
    }
    root['androidx-foundation-layout'] = factory(typeof this['androidx-foundation-layout'] === 'undefined' ? {} : this['androidx-foundation-layout'], this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var protoOf = kotlin_kotlin.$_$.r8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var hashCode = kotlin_kotlin.$_$.c8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var equals = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.r7;
  var roundToInt = kotlin_kotlin.$_$.b9;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var isSatisfiedBy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var InspectorValueInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isObject = kotlin_kotlin.$_$.i8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var isInterface = kotlin_kotlin.$_$.h8;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var SubcomposeLayout$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Enum = kotlin_kotlin.$_$.ya;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var until = kotlin_kotlin.$_$.q9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_sign = kotlin_kotlin.$_$.d9;
  var coerceAtMost = kotlin_kotlin.$_$.j9;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var coerceIn = kotlin_kotlin.$_$.m9;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var coerceAtLeast = kotlin_kotlin.$_$.h9;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.i9;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  function get_spacing_0() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(AspectRatioModifier, 'AspectRatioModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(BoxChildData, 'BoxChildData', classMeta, InspectorValueInfo, [ParentDataModifier, InspectorValueInfo]);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta);
  setMetadataFor(BoxWithConstraintsScopeImpl, 'BoxWithConstraintsScopeImpl', classMeta);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.f7o(_this__u8e3s4, weight, fill) : $super.f7o.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(OffsetPxModifier, 'OffsetPxModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(PaddingModifier, 'PaddingModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(PaddingValuesModifier, 'PaddingValuesModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.f7o(_this__u8e3s4, weight, fill) : $super.f7o.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(LayoutWeightImpl, 'LayoutWeightImpl', classMeta, InspectorValueInfo, [ParentDataModifier, InspectorValueInfo]);
  setMetadataFor(HorizontalAlignModifier, 'HorizontalAlignModifier', classMeta, InspectorValueInfo, [ParentDataModifier, InspectorValueInfo]);
  setMetadataFor(rowColumnMeasurePolicy$1, VOID, classMeta);
  setMetadataFor(RowColumnMeasurementHelper, 'RowColumnMeasurementHelper', classMeta);
  setMetadataFor(RowColumnMeasureHelperResult, 'RowColumnMeasureHelperResult', classMeta);
  setMetadataFor(FillModifier, 'FillModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(WrapContentModifier, 'WrapContentModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(SizeModifier, 'SizeModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(UnspecifiedConstraintsModifier, 'UnspecifiedConstraintsModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(SpacerMeasurePolicy, 'SpacerMeasurePolicy', objectMeta);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.n7m_1 = space;
    this.o7m_1 = rtlMirror;
    this.p7m_1 = alignment;
    this.q7m_1 = this.n7m_1;
  }
  protoOf(SpacedAligned).k7m = function () {
    return this.q7m_1;
  };
  protoOf(SpacedAligned).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = sizes.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.q2l(this.n7m_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.o7m_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    var tmp0_forEachIndexed = Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = sizes;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = occupied;
        var tmp1_min = totalSize - item | 0;
        tmp$ret$1 = Math.min(tmp0_min, tmp1_min);
        outPositions[tmp1__anonymous__uwfjfc] = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp2_min = (totalSize - outPositions[tmp1__anonymous__uwfjfc] | 0) - item | 0;
        tmp$ret$2 = Math.min(spacePx, tmp2_min);
        lastSpace = tmp$ret$2;
        occupied = (outPositions[tmp1__anonymous__uwfjfc] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = sizes[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = occupied;
          var tmp1_min_0 = totalSize - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$3 = Math.min(tmp0_min_0, tmp1_min_0);
          outPositions[i] = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.math.min' call
          var tmp2_min_0 = (totalSize - outPositions[i] | 0) - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$4 = Math.min(spacePx, tmp2_min_0);
          lastSpace = tmp$ret$4;
          occupied = (outPositions[i] + tmp2__anonymous__z9zvc9 | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.p7m_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.p7m_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var tmp1_array = outPositions;
          var tmp2_index0 = index_0;
          tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.l7m(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.o7m_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.n7m_1) + ', ' + this.p7m_1 + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.n7m_1);
    result = imul(result, 31) + (this.o7m_1 | 0) | 0;
    result = imul(result, 31) + (this.p7m_1 == null ? 0 : hashCode(this.p7m_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.n7m_1, tmp0_other_with_cast.n7m_1))
      return false;
    if (!(this.o7m_1 === tmp0_other_with_cast.o7m_1))
      return false;
    if (!equals(this.p7m_1, tmp0_other_with_cast.p7m_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().b7n(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().a7n(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().a7n(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().b7n(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().b7n(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().a7n(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.c7n_1 = tmp$ret$0;
  }
  protoOf(Arrangement$Center$1).k7m = function () {
    return this.c7n_1;
  };
  protoOf(Arrangement$Center$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().d7n(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().d7n(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().d7n(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.e7n_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceEvenly$1).k7m = function () {
    return this.e7n_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().f7n(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().f7n(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().f7n(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.g7n_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceBetween$1).k7m = function () {
    return this.g7n_1;
  };
  protoOf(Arrangement$SpaceBetween$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().h7n(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().h7n(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().h7n(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.i7n_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceAround$1).k7m = function () {
    return this.i7n_1;
  };
  protoOf(Arrangement$SpaceAround$1).l7m = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().j7n(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().j7n(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).m7m = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().j7n(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.w4g(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.z4g(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.r7m_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.s7m_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.t7m_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.u7m_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.v7m_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.w7m_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.x7m_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.y7m_1 = new Arrangement$SpaceAround$1();
    this.z7m_1 = 0;
  }
  protoOf(Arrangement).k7n = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda(alignment));
  };
  protoOf(Arrangement).l7n = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).a7n = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        outPosition[tmp1__anonymous__uwfjfc] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          outPosition[i] = current;
          current = current + tmp2__anonymous__z9zvc9 | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).b7n = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        outPosition[tmp0__anonymous__q1qw7t] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var tmp1__anonymous__uwfjfc = size[i];
          outPosition[i] = current;
          current = current + tmp1__anonymous__uwfjfc | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).d7n = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + tmp2__anonymous__z9zvc9;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).f7n = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).h7n = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    if (size.length > 1) {
      tmp = (totalSize - consumedSize | 0) / (size.length - 1 | 0);
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = 0.0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).j7n = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$2 = size.length === 0;
    tmp$ret$3 = !tmp$ret$2;
    if (tmp$ret$3) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$4;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$4 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$4;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$5 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$5;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function aspectRatio(_this__u8e3s4, ratio, matchHeightConstraintsFirst) {
    matchHeightConstraintsFirst = matchHeightConstraintsFirst === VOID ? false : matchHeightConstraintsFirst;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = aspectRatio$lambda(ratio, matchHeightConstraintsFirst);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new AspectRatioModifier(ratio, matchHeightConstraintsFirst, tmp$ret$0));
  }
  function findSize(_this__u8e3s4, $this) {
    if (!$this.q7n_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = tryMaxWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp0_also, Companion_getInstance().u2m_1))
        return tmp0_also;
      tmp$ret$0 = tmp0_also;
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = tryMaxHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp1_also, Companion_getInstance().u2m_1))
        return tmp1_also;
      tmp$ret$1 = tmp1_also;
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp2_also = tryMinWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp2_also, Companion_getInstance().u2m_1))
        return tmp2_also;
      tmp$ret$2 = tmp2_also;
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp3_also = tryMinHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp3_also, Companion_getInstance().u2m_1))
        return tmp3_also;
      tmp$ret$3 = tmp3_also;
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp4_also = tryMaxWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp4_also, Companion_getInstance().u2m_1))
        return tmp4_also;
      tmp$ret$4 = tmp4_also;
      var tmp$ret$5;
      // Inline function 'kotlin.also' call
      var tmp5_also = tryMaxHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp5_also, Companion_getInstance().u2m_1))
        return tmp5_also;
      tmp$ret$5 = tmp5_also;
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp6_also = tryMinWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp6_also, Companion_getInstance().u2m_1))
        return tmp6_also;
      tmp$ret$6 = tmp6_also;
      var tmp$ret$7;
      // Inline function 'kotlin.also' call
      var tmp7_also = tryMinHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp7_also, Companion_getInstance().u2m_1))
        return tmp7_also;
      tmp$ret$7 = tmp7_also;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.also' call
      var tmp8_also = tryMaxHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp8_also, Companion_getInstance().u2m_1))
        return tmp8_also;
      tmp$ret$8 = tmp8_also;
      var tmp$ret$9;
      // Inline function 'kotlin.also' call
      var tmp9_also = tryMaxWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp9_also, Companion_getInstance().u2m_1))
        return tmp9_also;
      tmp$ret$9 = tmp9_also;
      var tmp$ret$10;
      // Inline function 'kotlin.also' call
      var tmp10_also = tryMinHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp10_also, Companion_getInstance().u2m_1))
        return tmp10_also;
      tmp$ret$10 = tmp10_also;
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp11_also = tryMinWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp11_also, Companion_getInstance().u2m_1))
        return tmp11_also;
      tmp$ret$11 = tmp11_also;
      var tmp$ret$12;
      // Inline function 'kotlin.also' call
      var tmp12_also = tryMaxHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp12_also, Companion_getInstance().u2m_1))
        return tmp12_also;
      tmp$ret$12 = tmp12_also;
      var tmp$ret$13;
      // Inline function 'kotlin.also' call
      var tmp13_also = tryMaxWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp13_also, Companion_getInstance().u2m_1))
        return tmp13_also;
      tmp$ret$13 = tmp13_also;
      var tmp$ret$14;
      // Inline function 'kotlin.also' call
      var tmp14_also = tryMinHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp14_also, Companion_getInstance().u2m_1))
        return tmp14_also;
      tmp$ret$14 = tmp14_also;
      var tmp$ret$15;
      // Inline function 'kotlin.also' call
      var tmp15_also = tryMinWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.findSize.<anonymous>' call
      if (!equals(tmp15_also, Companion_getInstance().u2m_1))
        return tmp15_also;
      tmp$ret$15 = tmp15_also;
    }
    return Companion_getInstance().u2m_1;
  }
  function tryMaxWidth(_this__u8e3s4, $this, enforceConstraints) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    Companion_getInstance_0();
    if (!(maxWidth === 2147483647)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = maxWidth / $this.p7n_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var height = tmp$ret$0;
      if (height > 0) {
        var size = IntSize(maxWidth, height);
        if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance().u2m_1;
  }
  function tryMaxWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMaxHeight(_this__u8e3s4, $this, enforceConstraints) {
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    Companion_getInstance_0();
    if (!(maxHeight === 2147483647)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = maxHeight * $this.p7n_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = tmp$ret$0;
      if (width > 0) {
        var size = IntSize(width, maxHeight);
        if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance().u2m_1;
  }
  function tryMaxHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinWidth(_this__u8e3s4, $this, enforceConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = minWidth / $this.p7n_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var height = tmp$ret$0;
    if (height > 0) {
      var size = IntSize(minWidth, height);
      if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance().u2m_1;
  }
  function tryMinWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinHeight(_this__u8e3s4, $this, enforceConstraints) {
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = minHeight * $this.p7n_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var width = tmp$ret$0;
    if (width > 0) {
      var size = IntSize(width, minHeight);
      if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance().u2m_1;
  }
  function tryMinHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function AspectRatioModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.j4l($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function AspectRatioModifier(aspectRatio, matchHeightConstraintsFirst, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.p7n_1 = aspectRatio;
    this.q7n_1 = matchHeightConstraintsFirst;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.p7n_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.AspectRatioModifier.<anonymous>' call
      tmp$ret$0 = 'aspectRatio ' + this.p7n_1 + ' must be > 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AspectRatioModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var size = findSize(constraints, this);
    var tmp;
    if (!equals(size, Companion_getInstance().u2m_1)) {
      tmp = Companion_getInstance_0().m2l(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
    } else {
      tmp = constraints;
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.l4l(wrappedConstraints);
    var tmp_0 = placeable.m4l_1;
    var tmp_1 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp_0, tmp_1, VOID, AspectRatioModifier$measure$lambda(placeable));
  };
  protoOf(AspectRatioModifier).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AspectRatioModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.p7n_1 === otherModifier.p7n_1 ? this.q7n_1 === other.q7n_1 : false;
  };
  protoOf(AspectRatioModifier).hashCode = function () {
    return imul(getNumberHashCode(this.p7n_1), 31) + (this.q7n_1 | 0) | 0;
  };
  protoOf(AspectRatioModifier).toString = function () {
    return 'AspectRatioModifier(aspectRatio=' + this.p7n_1 + ')';
  };
  function aspectRatio$lambda($ratio, $matchHeightConstraintsFirst) {
    return function ($this$null) {
      $this$null.t4j_1 = 'aspectRatio';
      $this$null.v4j_1.z4j('ratio', $ratio);
      $this$null.v4j_1.z4j('matchHeightConstraintsFirst', $matchHeightConstraintsFirst);
      return Unit_getInstance();
    };
  }
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildData(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v7n_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildData(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u7n_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.d4h(IntSize(placeable.m4l_1, placeable.n4l_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.b5r(placeable, position);
  }
  function BoxChildData(alignment, matchParentSize, inspectorInfo) {
    matchParentSize = matchParentSize === VOID ? false : matchParentSize;
    inspectorInfo = inspectorInfo === VOID ? get_NoInspectorInfo() : inspectorInfo;
    InspectorValueInfo.call(this, inspectorInfo);
    this.u7n_1 = alignment;
    this.v7n_1 = matchParentSize;
  }
  protoOf(BoxChildData).g5o = function (_this__u8e3s4, parentData) {
    return this;
  };
  protoOf(BoxChildData).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildData ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.u7n_1, otherModifier.u7n_1) ? this.v7n_1 === otherModifier.v7n_1 : false;
  };
  protoOf(BoxChildData).hashCode = function () {
    var result = hashCode(this.u7n_1);
    result = imul(31, result) + (this.v7n_1 | 0) | 0;
    return result;
  };
  protoOf(BoxChildData).toString = function () {
    return 'BoxChildData(alignment=' + this.u7n_1 + ', matchParentSize=' + this.v7n_1 + ')';
  };
  function get_boxChildData(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.o5n();
    return tmp instanceof BoxChildData ? tmp : null;
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.s1c(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)86@3713L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:80)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance_2().f4g_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(alignment) | $composer_1.x1h(propagateMinConstraints));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        tmp$ret$0 = boxMeasurePolicy(alignment, propagateMinConstraints);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.t4j_1 = 'align';
      $this$null.u4j_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.t4j_1 = 'matchParentSize';
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).w7n = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new BoxChildData(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).x7n = function (_this__u8e3s4) {
    var tmp = Companion_getInstance_2().j4g_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp_0;
    return _this__u8e3s4.e4h(new BoxChildData(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function Box$composable(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)200@7989L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:199)');
      }
      var tmp0_measurePolicy = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = $composer_0;
      var tmp12_Layout$composable = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_1 = tmp11_Layout$composable;
      $composer_1.s1c(1725976829);
      sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_3();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_1;
      var $composer_2 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_1;
      var $composer_3 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_3.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_1;
      var $composer_4 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_4.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_1;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp12_Layout$composable << 9;
      var $composer_5 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_5.t1o();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_5.e1p();
      if ($composer_5.c1p()) {
        $composer_5.f1p(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_5.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_5.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp13__anonymous__jvh1if = $composer_5;
      var tmp14__anonymous__f0seaw = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_6 = tmp13__anonymous__jvh1if;
      sourceInformationMarkerStart($composer_6, -1851532242, 'C:Box.kt#2w3rfo');
      sourceInformationMarkerEnd($composer_6);
      $composer_5.u1c();
      $composer_5.i1p();
      $composer_1.u1c();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(Box$composable$lambda(modifier, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.y7n_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).s5r = function (_this__u8e3s4, measurables, constraints) {
    return this.y7n_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.z7n_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).s5r = function (_this__u8e3s4, measurables, constraints) {
    return this.z7n_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1);
    return $this$MeasurePolicy.r4l(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.x3l(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.g(tmp0__anonymous__q1qw7t);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.x3l(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.l()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1);
        return $this$MeasurePolicy.r4l(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.k2l_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.k2l_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.f() === 1) {
        var measurable = measurables.g(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.l4l(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1);
          var tmp1_max = placeable.m4l_1;
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1);
          var tmp3_max = placeable.n4l_1;
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1);
          placeable = measurable.l4l(Companion_getInstance_0().m2l(_Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1)));
        }
        return $this$MeasurePolicy.r4l(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.f();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.k2l_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.k2l_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.f() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.g(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.l4l(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.m4l_1;
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.n4l_1;
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_getInstance();
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp_6;
        var tmp_7 = boxWidth_0._v;
        Companion_getInstance_0();
        if (!(tmp_7 === 2147483647)) {
          tmp_6 = boxWidth_0._v;
        } else {
          tmp_6 = 0;
        }
        var tmp0_minWidth = tmp_6;
        var tmp_8;
        var tmp_9 = boxHeight_0._v;
        Companion_getInstance_0();
        if (!(tmp_9 === 2147483647)) {
          tmp_8 = boxHeight_0._v;
        } else {
          tmp_8 = 0;
        }
        var tmp1_minHeight = tmp_8;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.f() - 1 | 0;
        var tmp_10;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.g(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.l4l(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_10 = Unit_getInstance();
        }
        tmp_5 = tmp_10;
      }
      var tmp_11 = boxWidth_0._v;
      var tmp_12 = boxHeight_0._v;
      return $this$MeasurePolicy.r4l(tmp_11, tmp_12, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  function Box$composable$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (properties_initialized_Box_kt_kr8cbp) {
    } else {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance_2().f4g_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function BoxWithConstraints$composable(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var propagateMinConstraints_0 = {_v: propagateMinConstraints};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1571730894);
    sourceInformation($composer_0, 'C(BoxWithConstraints$composable)P(2,1,3)65@3186L67,66@3285L218,66@3258L245:BoxWithConstraints.kt#2w3rfo');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1p(propagateMinConstraints_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance_2().f4g_1;
      }
      if (!(($default & 4) === 0)) {
        propagateMinConstraints_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1571730894, $dirty, -1, 'androidx.compose.foundation.layout.BoxWithConstraints$composable (BoxWithConstraints.kt:58)');
      }
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0._v, propagateMinConstraints_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 3);
      var tmp = modifier_0._v;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty >> 9;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(content) | $composer_1.x1h(measurePolicy));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>' call
        tmp$ret$0 = BoxWithConstraints$composable$lambda(measurePolicy, content, $dirty);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      SubcomposeLayout$composable(tmp, tmp$ret$4, $composer_0, 14 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(BoxWithConstraints$composable$lambda_0(modifier_0, contentAlignment_0, propagateMinConstraints_0, content, $changed, $default));
    }
  }
  function BoxWithConstraintsScopeImpl(density, constraints) {
    this.a7o_1 = density;
    this.b7o_1 = constraints;
    this.c7o_1 = BoxScopeInstance_getInstance();
  }
  protoOf(BoxWithConstraintsScopeImpl).d7o = function () {
    return this.b7o_1;
  };
  protoOf(BoxWithConstraintsScopeImpl).w7n = function (_this__u8e3s4, alignment) {
    return this.c7o_1.w7n(_this__u8e3s4, alignment);
  };
  protoOf(BoxWithConstraintsScopeImpl).x7n = function (_this__u8e3s4) {
    return this.c7o_1.x7n(_this__u8e3s4);
  };
  protoOf(BoxWithConstraintsScopeImpl).e7o = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.a7o_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.BoxWithConstraintsScopeImpl.<get-maxWidth>.<anonymous>' call
    tmp$ret$0 = _Constraints___get_hasBoundedWidth__impl__7hd0wr(this.b7o_1) ? tmp0_with.v2l(_Constraints___get_maxWidth__impl__uuyqc(this.b7o_1)) : Companion_getInstance_5().d2m_1;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(BoxWithConstraintsScopeImpl).toString = function () {
    return 'BoxWithConstraintsScopeImpl(density=' + this.a7o_1 + ', constraints=' + new Constraints(this.b7o_1) + ')';
  };
  protoOf(BoxWithConstraintsScopeImpl).hashCode = function () {
    var result = hashCode(this.a7o_1);
    result = imul(result, 31) + Constraints__hashCode_impl_ij7484(this.b7o_1) | 0;
    return result;
  };
  protoOf(BoxWithConstraintsScopeImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxWithConstraintsScopeImpl))
      return false;
    var tmp0_other_with_cast = other instanceof BoxWithConstraintsScopeImpl ? other : THROW_CCE();
    if (!equals(this.a7o_1, tmp0_other_with_cast.a7o_1))
      return false;
    if (!equals(this.b7o_1, tmp0_other_with_cast.b7o_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function BoxWithConstraints$composable$lambda$lambda($content, $scope, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3420L9:BoxWithConstraints.kt#2w3rfo');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1945019079, $changed, -1, 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>.<anonymous>.<anonymous> (BoxWithConstraints.kt:68)');
        }
        $content($scope, $composer_0, 112 & $$dirty >> 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BoxWithConstraints$composable$lambda($measurePolicy, $content, $$dirty) {
    return function ($this$SubcomposeLayout, constraints) {
      var scope = new BoxWithConstraintsScopeImpl($this$SubcomposeLayout, constraints.k2l_1);
      var measurables = $this$SubcomposeLayout.z5s(Unit_getInstance(), ComposableLambda$invoke$ref(composableLambdaInstance(-1945019079, true, BoxWithConstraints$composable$lambda$lambda($content, scope, $$dirty))));
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.BoxWithConstraints$composable.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = $measurePolicy.s5r($this$SubcomposeLayout, measurables, constraints.k2l_1);
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function BoxWithConstraints$composable$lambda_0($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default) {
    return function ($composer, $force) {
      BoxWithConstraints$composable($modifier._v, $contentAlignment._v, $propagateMinConstraints._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function ColumnScope() {
  }
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    $composer_0.s1c(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)104@4854L562:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:98)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().t7m_1) ? equals(horizontalAlignment, Companion_getInstance_2().r4g_1) : false) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(verticalArrangement) | $composer_1.x1h(horizontalAlignment));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.k7m();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().l7o(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp$ret$0 = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function ColumnScopeInstance$weight$lambda($weight, $fill) {
    return function ($this$null) {
      $this$null.t4j_1 = 'weight';
      $this$null.u4j_1 = $weight;
      $this$null.v4j_1.z4j('weight', $weight);
      $this$null.v4j_1.z4j('fill', $fill);
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.t4j_1 = 'align';
      $this$null.u4j_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  protoOf(ColumnScopeInstance).f7o = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    var tmp0_require = weight > 0.0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      tmp$ret$0 = 'invalid weight ' + weight + '; must be greater than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$weight$lambda(weight, fill);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$1 = tmp;
    return _this__u8e3s4.e4h(new LayoutWeightImpl(weight, fill, tmp$ret$1));
  };
  protoOf(ColumnScopeInstance).h7o = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = ColumnScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new HorizontalAlignModifier(alignment, tmp$ret$0));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    _init_properties_Column_kt__s1zb92();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().t7m_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.m7m(density, totalSize, size, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.m7m(density, totalSize, size, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (properties_initialized_Column_kt_nm4x4) {
    } else {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().t7m_1.k7m();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().l7o(Companion_getInstance_2().r4g_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function offset_0(_this__u8e3s4, offset) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = offset$lambda(offset);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new OffsetPxModifier(offset, true, tmp$ret$0));
  }
  function OffsetPxModifier$measure$lambda(this$0, $this_measure, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.p7o_1($this_measure).k2m_1;
      var tmp;
      if (this$0.q7o_1) {
        $this$layout.f5r($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_getInstance();
      } else {
        $this$layout.p4x($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetPxModifier(offset, rtlAware, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.p7o_1 = offset;
    this.q7o_1 = rtlAware;
  }
  protoOf(OffsetPxModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l4l(constraints);
    var tmp = placeable.m4l_1;
    var tmp_0 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp, tmp_0, VOID, OffsetPxModifier$measure$lambda(this, _this__u8e3s4, placeable));
  };
  protoOf(OffsetPxModifier).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetPxModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.p7o_1, otherModifier.p7o_1) ? this.q7o_1 === otherModifier.q7o_1 : false;
  };
  protoOf(OffsetPxModifier).hashCode = function () {
    var result = hashCode(this.p7o_1);
    result = imul(31, result) + (this.q7o_1 | 0) | 0;
    return result;
  };
  protoOf(OffsetPxModifier).toString = function () {
    return 'OffsetPxModifier(offset=' + this.p7o_1 + ', rtlAware=' + this.q7o_1 + ')';
  };
  function offset$lambda($offset) {
    return function ($this$null) {
      $this$null.t4j_1 = 'offset';
      $this$null.v4j_1.z4j('offset', $offset);
      return Unit_getInstance();
    };
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_3;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_3 = padding$lambda(start, top, end, bottom);
    } else {
      tmp_3 = get_NoInspectorInfo();
    }
    tmp$ret$4 = tmp_3;
    return _this__u8e3s4.e4h(new PaddingModifier(start, top, end, bottom, true, tmp$ret$4));
  }
  function PaddingModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.y7o_1) {
        $this$layout.j4l($placeable, $this_measure.q2l(this$0.u7o_1), $this_measure.q2l(this$0.v7o_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.z5q($placeable, $this_measure.q2l(this$0.u7o_1), $this_measure.q2l(this$0.v7o_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingModifier(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    InspectorValueInfo.call(this, inspectorInfo);
    this.u7o_1 = start;
    this.v7o_1 = top;
    this.w7o_1 = end;
    this.x7o_1 = bottom;
    this.y7o_1 = rtlAware;
    // Inline function 'kotlin.require' call
    var tmp0_require = (((_Dp___get_value__impl__geb1vb(this.u7o_1) >= 0.0 ? true : equals(this.u7o_1, Companion_getInstance_5().e2m_1)) ? _Dp___get_value__impl__geb1vb(this.v7o_1) >= 0.0 ? true : equals(this.v7o_1, Companion_getInstance_5().e2m_1) : false) ? _Dp___get_value__impl__geb1vb(this.w7o_1) >= 0.0 ? true : equals(this.w7o_1, Companion_getInstance_5().e2m_1) : false) ? _Dp___get_value__impl__geb1vb(this.x7o_1) >= 0.0 ? true : equals(this.x7o_1, Companion_getInstance_5().e2m_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingModifier.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.q2l(this.u7o_1) + _this__u8e3s4.q2l(this.w7o_1) | 0;
    var vertical = _this__u8e3s4.q2l(this.v7o_1) + _this__u8e3s4.q2l(this.x7o_1) | 0;
    var placeable = measurable.l4l(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.m4l_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.n4l_1 + vertical | 0);
    return _this__u8e3s4.r4l(width, height, VOID, PaddingModifier$measure$lambda(this, placeable, _this__u8e3s4));
  };
  protoOf(PaddingModifier).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.u7o_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.v7o_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.w7o_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.x7o_1) | 0;
    result = imul(31, result) + (this.y7o_1 | 0) | 0;
    return result;
  };
  protoOf(PaddingModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (((equals(this.u7o_1, otherModifier.u7o_1) ? equals(this.v7o_1, otherModifier.v7o_1) : false) ? equals(this.w7o_1, otherModifier.w7o_1) : false) ? equals(this.x7o_1, otherModifier.x7o_1) : false) ? this.y7o_1 === otherModifier.y7o_1 : false;
  };
  function padding_0(_this__u8e3s4, all) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda_0(all);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new PaddingModifier(all, all, all, all, true, tmp$ret$0));
  }
  function padding_1(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_1;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_1 = padding$lambda_1(horizontal, vertical);
    } else {
      tmp_1 = get_NoInspectorInfo();
    }
    tmp$ret$2 = tmp_1;
    return _this__u8e3s4.e4h(new PaddingModifier(horizontal, vertical, horizontal, vertical, true, tmp$ret$2));
  }
  function padding_2(_this__u8e3s4, paddingValues) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = padding$lambda_2(paddingValues);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new PaddingValuesModifier(paddingValues, tmp$ret$0));
  }
  function PaddingValues(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.a7p(layoutDirection);
    } else {
      tmp = _this__u8e3s4.z7o(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.z7o(layoutDirection);
    } else {
      tmp = _this__u8e3s4.a7p(layoutDirection);
    }
    return tmp;
  }
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.z5q($placeable, $this_measure.q2l(this$0.e7p_1.a7p($this_measure.x3l())), $this_measure.q2l(this$0.e7p_1.f7p()));
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.e7p_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.e7p_1.a7p(_this__u8e3s4.x3l());
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.e7p_1.f7p();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.e7p_1.z7o(_this__u8e3s4.x3l());
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.e7p_1.g7p();
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.q2l(this.e7p_1.a7p(_this__u8e3s4.x3l())) + _this__u8e3s4.q2l(this.e7p_1.z7o(_this__u8e3s4.x3l())) | 0;
    var vertical = _this__u8e3s4.q2l(this.e7p_1.f7p()) + _this__u8e3s4.q2l(this.e7p_1.g7p()) | 0;
    var placeable = measurable.l4l(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.m4l_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.n4l_1 + vertical | 0);
    return _this__u8e3s4.r4l(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  protoOf(PaddingValuesModifier).hashCode = function () {
    return hashCode(this.e7p_1);
  };
  protoOf(PaddingValuesModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.e7p_1, otherModifier.e7p_1);
  };
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.h7p_1 = start;
    this.i7p_1 = top;
    this.j7p_1 = end;
    this.k7p_1 = bottom;
  }
  protoOf(PaddingValuesImpl).a7p = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.h7p_1 : this.j7p_1;
  };
  protoOf(PaddingValuesImpl).f7p = function () {
    return this.i7p_1;
  };
  protoOf(PaddingValuesImpl).z7o = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.j7p_1 : this.h7p_1;
  };
  protoOf(PaddingValuesImpl).g7p = function () {
    return this.k7p_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.h7p_1, other.h7p_1) ? equals(this.i7p_1, other.i7p_1) : false) ? equals(this.j7p_1, other.j7p_1) : false) ? equals(this.k7p_1, other.k7p_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.h7p_1), 31) + Dp__hashCode_impl_sxkrra(this.i7p_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.j7p_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.k7p_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.h7p_1) + ', top=' + new Dp(this.i7p_1) + ', end=' + new Dp(this.j7p_1) + ', bottom=' + new Dp(this.k7p_1) + ')';
  };
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$null) {
      $this$null.t4j_1 = 'padding';
      $this$null.v4j_1.z4j('start', new Dp($start));
      $this$null.v4j_1.z4j('top', new Dp($top));
      $this$null.v4j_1.z4j('end', new Dp($end));
      $this$null.v4j_1.z4j('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$null) {
      $this$null.t4j_1 = 'padding';
      $this$null.u4j_1 = new Dp($all);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($horizontal, $vertical) {
    return function ($this$null) {
      $this$null.t4j_1 = 'padding';
      $this$null.v4j_1.z4j('horizontal', new Dp($horizontal));
      $this$null.v4j_1.z4j('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($paddingValues) {
    return function ($this$null) {
      $this$null.t4j_1 = 'padding';
      $this$null.v4j_1.z4j('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function RowScope() {
  }
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    $composer_0.s1c(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)108@4971L639:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:102)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().r7m_1) ? equals(verticalAlignment, Companion_getInstance_2().o4g_1) : false) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(horizontalArrangement) | $composer_1.x1h(verticalAlignment));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.k7m();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().m7p(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        tmp$ret$0 = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function RowScopeInstance$weight$lambda($weight, $fill) {
    return function ($this$null) {
      $this$null.t4j_1 = 'weight';
      $this$null.u4j_1 = $weight;
      $this$null.v4j_1.z4j('weight', $weight);
      $this$null.v4j_1.z4j('fill', $fill);
      return Unit_getInstance();
    };
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  protoOf(RowScopeInstance).f7o = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    var tmp0_require = weight > 0.0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      tmp$ret$0 = 'invalid weight ' + weight + '; must be greater than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = RowScopeInstance$weight$lambda(weight, fill);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$1 = tmp;
    return _this__u8e3s4.e4h(new LayoutWeightImpl(weight, fill, tmp$ret$1));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    _init_properties_Row_kt__jenljs();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().r7m_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.l7m(density, totalSize, size, layoutDirection, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.l7m(density, totalSize, size, layoutDirection, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (properties_initialized_Row_kt_sbxnna) {
    } else {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().r7m_1.k7m();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().m7p(Companion_getInstance_2().o4g_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    this.i7o_1 = CenterCrossAxisAlignment_getInstance();
    this.j7o_1 = StartCrossAxisAlignment_getInstance();
    this.k7o_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).m7p = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).l7o = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).n7p = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).n7p = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).n7p = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.q7p_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).n7p = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.q7p_1.z4g(0, size);
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.r7p_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).n7p = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.r7p_1.w4g(0, size, layoutDirection);
  };
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  protoOf(CrossAxisAlignment).o7p = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).p7p = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment);
  }
  function get_weight(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s7p_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.s7p_1 = weight;
    this.t7p_1 = fill;
    this.u7p_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.s7p_1 + ', fill=' + this.t7p_1 + ', crossAxisAlignment=' + this.u7p_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.s7p_1);
    result = imul(result, 31) + (this.t7p_1 | 0) | 0;
    result = imul(result, 31) + (this.u7p_1 == null ? 0 : hashCode(this.u7p_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.s7p_1, tmp0_other_with_cast.s7p_1))
      return false;
    if (!(this.t7p_1 === tmp0_other_with_cast.t7p_1))
      return false;
    if (!equals(this.u7p_1, tmp0_other_with_cast.u7p_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.o5n();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function OrientationIndependentConstraints_init_$Init$(c, orientation, $this) {
    OrientationIndependentConstraints.call($this, orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
    return $this;
  }
  function OrientationIndependentConstraints_init_$Create$(c, orientation) {
    return OrientationIndependentConstraints_init_$Init$(c, orientation, objectCreate(protoOf(OrientationIndependentConstraints)));
  }
  function OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    this.v7p_1 = mainAxisMin;
    this.w7p_1 = mainAxisMax;
    this.x7p_1 = crossAxisMin;
    this.y7p_1 = crossAxisMax;
  }
  protoOf(OrientationIndependentConstraints).z7p = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = Constraints_0(this.v7p_1, this.w7p_1, this.x7p_1, this.y7p_1);
    } else {
      tmp = Constraints_0(this.x7p_1, this.y7p_1, this.v7p_1, this.w7p_1);
    }
    return tmp;
  };
  protoOf(OrientationIndependentConstraints).a7q = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return new OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  protoOf(OrientationIndependentConstraints).b7q = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    mainAxisMin = mainAxisMin === VOID ? this.v7p_1 : mainAxisMin;
    mainAxisMax = mainAxisMax === VOID ? this.w7p_1 : mainAxisMax;
    crossAxisMin = crossAxisMin === VOID ? this.x7p_1 : crossAxisMin;
    crossAxisMax = crossAxisMax === VOID ? this.y7p_1 : crossAxisMax;
    return $super === VOID ? this.a7q(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) : $super.a7q.call(this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  protoOf(OrientationIndependentConstraints).toString = function () {
    return 'OrientationIndependentConstraints(mainAxisMin=' + this.v7p_1 + ', mainAxisMax=' + this.w7p_1 + ', crossAxisMin=' + this.x7p_1 + ', crossAxisMax=' + this.y7p_1 + ')';
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    var result = this.v7p_1;
    result = imul(result, 31) + this.w7p_1 | 0;
    result = imul(result, 31) + this.x7p_1 | 0;
    result = imul(result, 31) + this.y7p_1 | 0;
    return result;
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other : THROW_CCE();
    if (!(this.v7p_1 === tmp0_other_with_cast.v7p_1))
      return false;
    if (!(this.w7p_1 === tmp0_other_with_cast.w7p_1))
      return false;
    if (!(this.x7p_1 === tmp0_other_with_cast.x7p_1))
      return false;
    if (!(this.y7p_1 === tmp0_other_with_cast.y7p_1))
      return false;
    return true;
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o7p();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7p_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u7p_1;
  }
  function LayoutWeightImpl(weight, fill, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.f7q_1 = weight;
    this.g7q_1 = fill;
  }
  protoOf(LayoutWeightImpl).g5o = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightImpl.modifyParentData.<anonymous>' call
    tmp0_also.s7p_1 = this.f7q_1;
    tmp0_also.t7p_1 = this.g7q_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(LayoutWeightImpl).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightImpl ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.f7q_1 === otherModifier.f7q_1 ? this.g7q_1 === otherModifier.g7q_1 : false;
  };
  protoOf(LayoutWeightImpl).hashCode = function () {
    var result = getNumberHashCode(this.f7q_1);
    result = imul(31, result) + (this.g7q_1 | 0) | 0;
    return result;
  };
  protoOf(LayoutWeightImpl).toString = function () {
    return 'LayoutWeightImpl(weight=' + this.f7q_1 + ', fill=' + this.g7q_1 + ')';
  };
  function HorizontalAlignModifier(horizontal, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.k7q_1 = horizontal;
  }
  protoOf(HorizontalAlignModifier).g5o = function (_this__u8e3s4, parentData) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignModifier.modifyParentData.<anonymous>' call
    tmp0_also.u7p_1 = Companion_getInstance_7().l7o(this.k7q_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(HorizontalAlignModifier).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.k7q_1, otherModifier.k7q_1);
  };
  protoOf(HorizontalAlignModifier).hashCode = function () {
    return hashCode(this.k7q_1);
  };
  protoOf(HorizontalAlignModifier).toString = function () {
    return 'HorizontalAlignModifier(horizontal=' + this.k7q_1 + ')';
  };
  function rowColumnMeasurePolicy$o$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.t7q($this$layout, $measureResult, 0, $this_measure.x3l());
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangement, $arrangementSpacing, $crossAxisSize, $crossAxisAlignment) {
    this.u7q_1 = $orientation;
    this.v7q_1 = $arrangement;
    this.w7q_1 = $arrangementSpacing;
    this.x7q_1 = $crossAxisSize;
    this.y7q_1 = $crossAxisAlignment;
  }
  protoOf(rowColumnMeasurePolicy$1).s5r = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.f();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var placeables = tmp$ret$0;
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.u7q_1, this.v7q_1, this.w7q_1, this.x7q_1, this.y7q_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.z7q(_this__u8e3s4, constraints, 0, measurables.f());
    var layoutWidth;
    var layoutHeight;
    if (this.u7q_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.b7r_1;
      layoutHeight = measureResult.a7r_1;
    } else {
      layoutWidth = measureResult.a7r_1;
      layoutHeight = measureResult.b7r_1;
    }
    return _this__u8e3s4.r4l(layoutWidth, layoutHeight, VOID, rowColumnMeasurePolicy$o$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    $this.m7q_1(mainAxisLayoutSize, childrenMainAxisSize, measureScope.x3l(), measureScope, mainAxisPositions);
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp0_safe_receiver = parentData;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u7p_1;
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.p7q_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.g7r(placeable) | 0;
    var tmp_0;
    if ($this.l7q_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.n7p(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.l7q_1 = orientation;
    this.m7q_1 = arrangement;
    this.n7q_1 = arrangementSpacing;
    this.o7q_1 = crossAxisSize;
    this.p7q_1 = crossAxisAlignment;
    this.q7q_1 = measurables;
    this.r7q_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.q7q_1.f();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.rowColumnParentData.<anonymous>' call
      tmp$ret$1 = get_rowColumnParentData(this.q7q_1.g(tmp_3));
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s7q_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).h7r = function (_this__u8e3s4) {
    return this.l7q_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.m4l_1 : _this__u8e3s4.n4l_1;
  };
  protoOf(RowColumnMeasurementHelper).g7r = function (_this__u8e3s4) {
    return this.l7q_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.n4l_1 : _this__u8e3s4.m4l_1;
  };
  protoOf(RowColumnMeasurementHelper).z7q = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = OrientationIndependentConstraints_init_$Create$(constraints, this.l7q_1);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    tmp$ret$0 = measureScope.q2l(this.n7q_1);
    tmp$ret$1 = tmp$ret$0;
    var arrangementSpacingPx = tmp$ret$1;
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = this.q7q_1.g(i);
        var parentData = this.s7q_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var mainAxisMax = constraints_0.w7p_1;
          var tmp1_elvis_lhs = this.r7q_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            Companion_getInstance_0();
            if (mainAxisMax === 2147483647) {
              Companion_getInstance_0();
              tmp_0 = 2147483647;
            } else {
              tmp_0 = mainAxisMax - fixedSpace | 0;
            }
            tmp = child.l4l(constraints_0.b7q(0, tmp_0, 0).z7p(this.l7q_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          var tmp$ret$2;
          // Inline function 'kotlin.math.min' call
          var tmp0_min = (mainAxisMax - fixedSpace | 0) - this.h7r(placeable) | 0;
          tmp$ret$2 = Math.min(arrangementSpacingPx, tmp0_min);
          spaceAfterLastNoWeight = tmp$ret$2;
          fixedSpace = fixedSpace + (this.h7r(placeable) + spaceAfterLastNoWeight | 0) | 0;
          var tmp$ret$3;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = crossAxisSpace;
          var tmp2_max = this.g7r(placeable);
          tmp$ret$3 = Math.max(tmp1_max, tmp2_max);
          crossAxisSpace = tmp$ret$3;
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.r7q_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_1;
      var tmp_2;
      if (totalWeight > 0.0) {
        Companion_getInstance_0();
        tmp_2 = !(constraints_0.w7p_1 === 2147483647);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = constraints_0.w7p_1;
      } else {
        tmp_1 = constraints_0.v7p_1;
      }
      var targetSpace = tmp_1;
      var remainingToTarget = (targetSpace - fixedSpace | 0) - imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0;
      var weightUnitSpace = totalWeight > 0 ? remainingToTarget / totalWeight : 0.0;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp3_sumOf = until(startIndex, endIndex);
      var sum = 0;
      var inductionVariable_0 = tmp3_sumOf.w_1;
      var last = tmp3_sumOf.x_1;
      if (inductionVariable_0 <= last)
        do {
          var element = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_3 = sum;
          var tmp$ret$5;
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = weightUnitSpace * get_weight(this.s7q_1[element]);
          tmp$ret$4 = roundToInt(tmp0_roundToInt);
          tmp$ret$5 = tmp$ret$4;
          sum = tmp_3 + tmp$ret$5 | 0;
        }
         while (!(element === last));
      tmp$ret$6 = sum;
      var remainder = remainingToTarget - tmp$ret$6 | 0;
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (this.r7q_1[i_0] == null) {
            var child_0 = this.q7q_1.g(i_0);
            var parentData_0 = this.s7q_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            var tmp4_check = weight_0 > 0;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp4_check) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              tmp$ret$7 = 'All weights <= 0 should have placeables';
              var message = tmp$ret$7;
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            remainder = remainder - remainderUnit | 0;
            var tmp$ret$9;
            // Inline function 'kotlin.math.max' call
            var tmp$ret$8;
            // Inline function 'kotlin.math.roundToInt' call
            var tmp5_roundToInt = weightUnitSpace * weight_0;
            tmp$ret$8 = roundToInt(tmp5_roundToInt);
            var tmp6_max = tmp$ret$8 + remainderUnit | 0;
            tmp$ret$9 = Math.max(0, tmp6_max);
            var childMainAxisSize = tmp$ret$9;
            var tmp_4;
            var tmp_5;
            if (get_fill(parentData_0)) {
              Companion_getInstance_0();
              tmp_5 = !(childMainAxisSize === 2147483647);
            } else {
              tmp_5 = false;
            }
            if (tmp_5) {
              tmp_4 = childMainAxisSize;
            } else {
              tmp_4 = 0;
            }
            var placeable_0 = child_0.l4l((new OrientationIndependentConstraints(tmp_4, childMainAxisSize, 0, constraints_0.y7p_1)).z7p(this.l7q_1));
            weightedSpace = weightedSpace + this.h7r(placeable_0) | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.math.max' call
            var tmp7_max = crossAxisSpace;
            var tmp8_max = this.g7r(placeable_0);
            tmp$ret$10 = Math.max(tmp7_max, tmp8_max);
            crossAxisSpace = tmp$ret$10;
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.r7q_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceAtMost(weightedSpace + imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0, constraints_0.w7p_1 - fixedSpace | 0);
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(this.r7q_1[i_1]);
          var parentData_1 = this.s7q_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.p7p(placeable_1);
          if (!(alignmentLinePosition == null)) {
            var tmp$ret$13;
            // Inline function 'kotlin.math.max' call
            var tmp9_max = beforeCrossAxisAlignmentLine;
            var tmp$ret$12;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$11;
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_6;
            Companion_getInstance_6();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_6 = alignmentLinePosition;
            } else {
              tmp_6 = 0;
            }
            tmp$ret$11 = tmp_6;
            tmp$ret$12 = tmp$ret$11;
            var tmp10_max = tmp$ret$12;
            tmp$ret$13 = Math.max(tmp9_max, tmp10_max);
            beforeCrossAxisAlignmentLine = tmp$ret$13;
            var tmp$ret$16;
            // Inline function 'kotlin.math.max' call
            var tmp11_max = afterCrossAxisAlignmentLine;
            var tmp_7 = this.g7r(placeable_1);
            var tmp$ret$15;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$14;
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_8;
            Companion_getInstance_6();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_8 = alignmentLinePosition;
            } else {
              tmp_8 = this.g7r(placeable_1);
            }
            tmp$ret$14 = tmp_8;
            tmp$ret$15 = tmp$ret$14;
            var tmp12_max = tmp_7 - tmp$ret$15 | 0;
            tmp$ret$16 = Math.max(tmp11_max, tmp12_max);
            afterCrossAxisAlignmentLine = tmp$ret$16;
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    var tmp$ret$17;
    // Inline function 'kotlin.math.max' call
    var tmp13_max = fixedSpace + weightedSpace | 0;
    var tmp14_max = constraints_0.v7p_1;
    tmp$ret$17 = Math.max(tmp13_max, tmp14_max);
    var mainAxisLayoutSize = tmp$ret$17;
    var tmp_9;
    var tmp_10;
    Companion_getInstance_0();
    if (!(constraints_0.y7p_1 === 2147483647)) {
      tmp_10 = this.o7q_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_10 = false;
    }
    if (tmp_10) {
      tmp_9 = constraints_0.y7p_1;
    } else {
      var tmp$ret$19;
      // Inline function 'kotlin.math.max' call
      var tmp17_max = crossAxisSpace;
      var tmp$ret$18;
      // Inline function 'kotlin.math.max' call
      var tmp15_max = constraints_0.x7p_1;
      var tmp16_max = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      tmp$ret$18 = Math.max(tmp15_max, tmp16_max);
      var tmp18_max = tmp$ret$18;
      tmp$ret$19 = Math.max(tmp17_max, tmp18_max);
      tmp_9 = tmp$ret$19;
    }
    var crossAxisLayoutSize = tmp_9;
    var tmp_11 = 0;
    var tmp_12 = subSize;
    var tmp_13 = new Int32Array(tmp_12);
    while (tmp_11 < tmp_12) {
      var tmp_14 = tmp_11;
      var tmp$ret$20;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
      tmp$ret$20 = 0;
      tmp_13[tmp_14] = tmp$ret$20;
      tmp_11 = tmp_11 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_13;
    var tmp_15 = 0;
    var tmp_16 = subSize;
    var tmp_17 = new Int32Array(tmp_16);
    while (tmp_15 < tmp_16) {
      var tmp_18 = tmp_15;
      var tmp$ret$21;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
      tmp$ret$21 = this.h7r(ensureNotNull(this.r7q_1[tmp_18 + startIndex | 0]));
      tmp_17[tmp_18] = tmp$ret$21;
      tmp_15 = tmp_15 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_17;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).t7q = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.c7r_1;
    var last = measureResult.d7r_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.r7q_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.f7r_1;
        var tmp_0 = this.q7q_1.g(i).o5n();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.a7r_1, layoutDirection, measureResult.e7r_1) + crossAxisOffset | 0;
        if (this.l7q_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.z5q(placeable, mainAxisPositions[i - measureResult.c7r_1 | 0], crossAxisPosition);
        } else {
          placeableScope.z5q(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.c7r_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.a7r_1 = crossAxisSize;
    this.b7r_1 = mainAxisSize;
    this.c7r_1 = startIndex;
    this.d7r_1 = endIndex;
    this.e7r_1 = beforeCrossAxisAlignmentLine;
    this.f7r_1 = mainAxisPositions;
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function FillModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.j4l($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillModifier(direction, fraction, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.l7r_1 = direction;
    this.m7r_1 = fraction;
  }
  protoOf(FillModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.l7r_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.m7r_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.l7r_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.m7r_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.l4l(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.m4l_1;
    var tmp_0 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp, tmp_0, VOID, FillModifier$measure$lambda(placeable));
  };
  protoOf(FillModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FillModifier) {
      tmp_0 = this.l7r_1.equals(other.l7r_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.m7r_1 === other.m7r_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FillModifier).hashCode = function () {
    return imul(this.l7r_1.hashCode(), 31) + getNumberHashCode(this.m7r_1) | 0;
  };
  function createFillWidthModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Horizontal_getInstance();
    return new FillModifier(tmp, fraction, createFillWidthModifier$lambda(fraction));
  }
  function createFillHeightModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Vertical_getInstance();
    return new FillModifier(tmp, fraction, createFillHeightModifier$lambda(fraction));
  }
  function createFillSizeModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Both_getInstance();
    return new FillModifier(tmp, fraction, createFillSizeModifier$lambda(fraction));
  }
  function WrapContentModifier$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.s7r_1(new IntSize_0(IntSize($wrapperWidth - $placeable.m4l_1 | 0, $wrapperHeight - $placeable.n4l_1 | 0)), $this_measure.x3l()).k2m_1;
      $this$layout.b5r($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentModifier(direction, unbounded, alignmentCallback, align, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.q7r_1 = direction;
    this.r7r_1 = unbounded;
    this.s7r_1 = alignmentCallback;
    this.t7r_1 = align;
  }
  protoOf(WrapContentModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.q7r_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.q7r_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.q7r_1.equals(Direction_Vertical_getInstance()) ? this.r7r_1 : false) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.q7r_1.equals(Direction_Horizontal_getInstance()) ? this.r7r_1 : false) {
      Companion_getInstance_0();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.l4l(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.m4l_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.n4l_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.r4l(wrapperWidth, wrapperHeight, VOID, WrapContentModifier$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  protoOf(WrapContentModifier).equals = function (other) {
    if (!(other instanceof WrapContentModifier))
      return false;
    return (this.q7r_1.equals(other.q7r_1) ? this.r7r_1 === other.r7r_1 : false) ? equals(this.t7r_1, other.t7r_1) : false;
  };
  protoOf(WrapContentModifier).hashCode = function () {
    return imul(imul(this.q7r_1.hashCode(), 31) + (this.r7r_1 | 0) | 0, 31) + hashCode(this.t7r_1) | 0;
  };
  function createWrapContentWidthModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Horizontal_getInstance();
    var tmp_0 = createWrapContentWidthModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentWidthModifier$lambda_0(align, unbounded));
  }
  function createWrapContentHeightModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Vertical_getInstance();
    var tmp_0 = createWrapContentHeightModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentHeightModifier$lambda_0(align, unbounded));
  }
  function createWrapContentSizeModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Both_getInstance();
    var tmp_0 = createWrapContentSizeModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentSizeModifier$lambda_0(align, unbounded));
  }
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new SizeModifier(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e4h(fraction === 1.0 ? get_FillWholeMaxHeight() : createFillHeightModifier(fraction));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__u8e3s4.e4h(new SizeModifier(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_5().e2m_1 : min;
    max = max === VOID ? Companion_getInstance_5().e2m_1 : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new SizeModifier(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_5().e2m_1 : min;
    max = max === VOID ? Companion_getInstance_5().e2m_1 : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new SizeModifier(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_5().e2m_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_5().e2m_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = defaultMinSize$lambda(minWidth, minHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new UnspecifiedConstraintsModifier(minWidth, minHeight, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e4h(fraction === 1.0 ? get_FillWholeMaxSize() : createFillSizeModifier(fraction));
  }
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.z7r_1, Companion_getInstance_5().e2m_1)) {
      var tmp_0 = new Dp($this.z7r_1);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp = _this__u8e3s4.q2l(coerceAtLeast(tmp_0, new Dp(tmp$ret$0)).f2m_1);
    } else {
      Companion_getInstance_0();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_1;
    if (!equals($this.a7s_1, Companion_getInstance_5().e2m_1)) {
      var tmp_2 = new Dp($this.a7s_1);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = _this__u8e3s4.q2l(coerceAtLeast(tmp_2, new Dp(tmp$ret$1)).f2m_1);
    } else {
      Companion_getInstance_0();
      tmp_1 = 2147483647;
    }
    var maxHeight = tmp_1;
    var tmp_3;
    if (!equals($this.x7r_1, Companion_getInstance_5().e2m_1)) {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.q2l($this.x7r_1), maxWidth), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      var tmp_4;
      Companion_getInstance_0();
      if (!(tmp0_let === 2147483647)) {
        tmp_4 = tmp0_let;
      } else {
        tmp_4 = 0;
      }
      tmp$ret$2 = tmp_4;
      tmp$ret$3 = tmp$ret$2;
      tmp_3 = tmp$ret$3;
    } else {
      tmp_3 = 0;
    }
    var minWidth = tmp_3;
    var tmp_5;
    if (!equals($this.y7r_1, Companion_getInstance_5().e2m_1)) {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.q2l($this.y7r_1), maxHeight), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      var tmp_6;
      Companion_getInstance_0();
      if (!(tmp1_let === 2147483647)) {
        tmp_6 = tmp1_let;
      } else {
        tmp_6 = 0;
      }
      tmp$ret$4 = tmp_6;
      tmp$ret$5 = tmp$ret$4;
      tmp_5 = tmp$ret$5;
    } else {
      tmp_5 = 0;
    }
    var minHeight = tmp_5;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.j4l($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeModifier(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_5().e2m_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_5().e2m_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_5().e2m_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_5().e2m_1 : maxHeight;
    InspectorValueInfo.call(this, inspectorInfo);
    this.x7r_1 = minWidth;
    this.y7r_1 = minHeight;
    this.z7r_1 = maxWidth;
    this.a7s_1 = maxHeight;
    this.b7s_1 = enforceIncoming;
  }
  protoOf(SizeModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SizeModifier.measure.<anonymous>' call
    var tmp;
    if (this.b7s_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.x7r_1, Companion_getInstance_5().e2m_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.z7r_1, Companion_getInstance_5().e2m_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.y7r_1, Companion_getInstance_5().e2m_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.a7s_1, Companion_getInstance_5().e2m_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(tmp0_let));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var wrappedConstraints = tmp$ret$1;
    var placeable = measurable.l4l(wrappedConstraints);
    var tmp_4 = placeable.m4l_1;
    var tmp_5 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp_4, tmp_5, VOID, SizeModifier$measure$lambda(placeable));
  };
  protoOf(SizeModifier).equals = function (other) {
    if (!(other instanceof SizeModifier))
      return false;
    return (((equals(this.x7r_1, other.x7r_1) ? equals(this.y7r_1, other.y7r_1) : false) ? equals(this.z7r_1, other.z7r_1) : false) ? equals(this.a7s_1, other.a7s_1) : false) ? this.b7s_1 === other.b7s_1 : false;
  };
  protoOf(SizeModifier).hashCode = function () {
    return imul(imul(imul(imul(Dp__hashCode_impl_sxkrra(this.x7r_1), 31) + Dp__hashCode_impl_sxkrra(this.y7r_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.z7r_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.a7s_1) | 0, 31);
  };
  function UnspecifiedConstraintsModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.j4l($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsModifier(minWidth, minHeight, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_5().e2m_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_5().e2m_1 : minHeight;
    InspectorValueInfo.call(this, inspectorInfo);
    this.f7s_1 = minWidth;
    this.g7s_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.f7s_1, Companion_getInstance_5().e2m_1) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.q2l(this.f7s_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.g7s_1, Companion_getInstance_5().e2m_1) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.q2l(this.g7s_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.l4l(wrappedConstraints);
    var tmp_3 = placeable.m4l_1;
    var tmp_4 = placeable.n4l_1;
    return _this__u8e3s4.r4l(tmp_3, tmp_4, VOID, UnspecifiedConstraintsModifier$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsModifier).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsModifier))
      return false;
    return equals(this.f7s_1, other.f7s_1) ? equals(this.g7s_1, other.g7s_1) : false;
  };
  protoOf(UnspecifiedConstraintsModifier).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.f7s_1), 31) + Dp__hashCode_impl_sxkrra(this.g7s_1) | 0;
  };
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e4h(fraction === 1.0 ? get_FillWholeMaxWidth() : createFillWidthModifier(fraction));
  }
  function requiredWidthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_5().e2m_1 : min;
    max = max === VOID ? Companion_getInstance_5().e2m_1 : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredWidthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new SizeModifier(min, VOID, max, VOID, false, tmp$ret$0));
  }
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__u8e3s4.e4h(new SizeModifier(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.e4h(new SizeModifier(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function createFillWidthModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'fillMaxWidth';
      $this$$receiver.v4j_1.z4j('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillHeightModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'fillMaxHeight';
      $this$$receiver.v4j_1.z4j('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillSizeModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'fillMaxSize';
      $this$$receiver.v4j_1.z4j('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createWrapContentWidthModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.w4g(0, _IntSize___get_width__impl__d9yl4o(size.v2m_1), layoutDirection), 0));
    };
  }
  function createWrapContentWidthModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'wrapContentWidth';
      $this$$receiver.v4j_1.z4j('align', $align);
      $this$$receiver.v4j_1.z4j('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentHeightModifier$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.z4g(0, _IntSize___get_height__impl__prv63b(size.v2m_1))));
    };
  }
  function createWrapContentHeightModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'wrapContentHeight';
      $this$$receiver.v4j_1.z4j('align', $align);
      $this$$receiver.v4j_1.z4j('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentSizeModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.d4h(Companion_getInstance().u2m_1, size.v2m_1, layoutDirection));
    };
  }
  function createWrapContentSizeModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.t4j_1 = 'wrapContentSize';
      $this$$receiver.v4j_1.z4j('align', $align);
      $this$$receiver.v4j_1.z4j('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.t4j_1 = 'width';
      $this$null.u4j_1 = new Dp($width);
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.t4j_1 = 'size';
      $this$null.u4j_1 = new Dp($size);
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.t4j_1 = 'heightIn';
      $this$null.v4j_1.z4j('min', new Dp($min));
      $this$null.v4j_1.z4j('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.t4j_1 = 'widthIn';
      $this$null.v4j_1.z4j('min', new Dp($min));
      $this$null.v4j_1.z4j('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function defaultMinSize$lambda($minWidth, $minHeight) {
    return function ($this$null) {
      $this$null.t4j_1 = 'defaultMinSize';
      $this$null.v4j_1.z4j('minWidth', new Dp($minWidth));
      $this$null.v4j_1.z4j('minHeight', new Dp($minHeight));
      return Unit_getInstance();
    };
  }
  function requiredWidthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.t4j_1 = 'requiredWidthIn';
      $this$null.v4j_1.z4j('min', new Dp($min));
      $this$null.v4j_1.z4j('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.t4j_1 = 'size';
      $this$null.v4j_1.z4j('width', new Dp($width));
      $this$null.v4j_1.z4j('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.t4j_1 = 'height';
      $this$null.u4j_1 = new Dp($height);
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (properties_initialized_Size_kt_x7rk2r) {
    } else {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = createFillWidthModifier(1.0);
      FillWholeMaxHeight = createFillHeightModifier(1.0);
      FillWholeMaxSize = createFillSizeModifier(1.0);
      WrapContentWidthCenter = createWrapContentWidthModifier(Companion_getInstance_2().s4g_1, false);
      WrapContentWidthStart = createWrapContentWidthModifier(Companion_getInstance_2().r4g_1, false);
      WrapContentHeightCenter = createWrapContentHeightModifier(Companion_getInstance_2().p4g_1, false);
      WrapContentHeightTop = createWrapContentHeightModifier(Companion_getInstance_2().o4g_1, false);
      WrapContentSizeCenter = createWrapContentSizeModifier(Companion_getInstance_2().j4g_1, false);
      WrapContentSizeTopStart = createWrapContentSizeModifier(Companion_getInstance_2().f4g_1, false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(344887062);
    sourceInformation($composer_0, 'C(Spacer$composable)39@1433L68:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(344887062, $changed, -1, 'androidx.compose.foundation.layout.Spacer$composable (Spacer.kt:38)');
    }
    var tmp0_measurePolicy = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp11_Layout$composable = $composer_0;
    var tmp12_Layout$composable = 384 | 112 & $changed << 3;
    var modifier_0 = modifier;
    var $composer_1 = tmp11_Layout$composable;
    $composer_1.s1c(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_0 = Companion_getInstance_3();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.w1p(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.w1p(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp12_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.t1o();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.e1p();
    if ($composer_5.c1p()) {
      $composer_5.f1p(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.h1p();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, tmp0_measurePolicy, Companion_getInstance_4().i5n_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.s1c(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var tmp13__anonymous__jvh1if = $composer_5;
    var tmp14__anonymous__f0seaw = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp13__anonymous__jvh1if;
    sourceInformationMarkerStart($composer_6, 918629639, 'C:Spacer.kt#2w3rfo');
    sourceInformationMarkerEnd($composer_6);
    $composer_5.u1c();
    $composer_5.i1p();
    $composer_1.u1c();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  protoOf(SpacerMeasurePolicy).s5r = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    tmp$ret$0 = _this__u8e3s4.r4l(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).k7m = get_spacing;
  protoOf(Arrangement$End$1).k7m = get_spacing;
  protoOf(Arrangement$Top$1).k7m = get_spacing_0;
  protoOf(Arrangement$Bottom$1).k7m = get_spacing_0;
  protoOf(AspectRatioModifier).j4h = foldIn;
  protoOf(AspectRatioModifier).k4h = all;
  protoOf(AspectRatioModifier).e4h = then;
  protoOf(BoxChildData).j4h = foldIn;
  protoOf(BoxChildData).k4h = all;
  protoOf(BoxChildData).e4h = then;
  protoOf(ColumnScopeInstance).g7o = weight$default;
  protoOf(OffsetPxModifier).j4h = foldIn;
  protoOf(OffsetPxModifier).k4h = all;
  protoOf(OffsetPxModifier).e4h = then;
  protoOf(PaddingModifier).j4h = foldIn;
  protoOf(PaddingModifier).k4h = all;
  protoOf(PaddingModifier).e4h = then;
  protoOf(PaddingValuesModifier).j4h = foldIn;
  protoOf(PaddingValuesModifier).k4h = all;
  protoOf(PaddingValuesModifier).e4h = then;
  protoOf(RowScopeInstance).l7p = weight$default_0;
  protoOf(LayoutWeightImpl).j4h = foldIn;
  protoOf(LayoutWeightImpl).k4h = all;
  protoOf(LayoutWeightImpl).e4h = then;
  protoOf(HorizontalAlignModifier).j4h = foldIn;
  protoOf(HorizontalAlignModifier).k4h = all;
  protoOf(HorizontalAlignModifier).e4h = then;
  protoOf(FillModifier).j4h = foldIn;
  protoOf(FillModifier).k4h = all;
  protoOf(FillModifier).e4h = then;
  protoOf(WrapContentModifier).j4h = foldIn;
  protoOf(WrapContentModifier).k4h = all;
  protoOf(WrapContentModifier).e4h = then;
  protoOf(SizeModifier).j4h = foldIn;
  protoOf(SizeModifier).k4h = all;
  protoOf(SizeModifier).e4h = then;
  protoOf(UnspecifiedConstraintsModifier).j4h = foldIn;
  protoOf(UnspecifiedConstraintsModifier).k4h = all;
  protoOf(UnspecifiedConstraintsModifier).e4h = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = BoxWithConstraints$composable;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = PaddingValues;
  _.$_$.e = Spacer$composable;
  _.$_$.f = aspectRatio;
  _.$_$.g = calculateEndPadding;
  _.$_$.h = calculateStartPadding;
  _.$_$.i = columnMeasurePolicy$composable;
  _.$_$.j = defaultMinSize;
  _.$_$.k = fillMaxHeight;
  _.$_$.l = fillMaxSize;
  _.$_$.m = fillMaxWidth;
  _.$_$.n = heightIn;
  _.$_$.o = height;
  _.$_$.p = offset_0;
  _.$_$.q = padding_0;
  _.$_$.r = padding_2;
  _.$_$.s = padding;
  _.$_$.t = padding_1;
  _.$_$.u = rememberBoxMeasurePolicy$composable;
  _.$_$.v = requiredWidthIn;
  _.$_$.w = rowMeasurePolicy$composable;
  _.$_$.x = size_0;
  _.$_$.y = size;
  _.$_$.z = widthIn;
  _.$_$.a1 = width;
  _.$_$.b1 = Arrangement_getInstance;
  _.$_$.c1 = BoxScopeInstance_getInstance;
  _.$_$.d1 = ColumnScopeInstance_getInstance;
  _.$_$.e1 = RowScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation-layout.js.map
