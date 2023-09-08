(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-geometry.js', './androidx-ui-util.js', './androidx-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-util.js'), require('./androidx-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-util' was not found. Please, check whether 'androidx-ui-util' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-graphics'.");
    }
    root['androidx-ui-graphics'] = factory(typeof this['androidx-ui-graphics'] === 'undefined' ? {} : this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-geometry'], this['androidx-ui-util'], this['androidx-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var equals = kotlin_kotlin.$_$.u7;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var hashCode = kotlin_kotlin.$_$.c8;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.k2;
  var Long = kotlin_kotlin.$_$.db;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j2;
  var ulongToDouble = kotlin_kotlin.$_$.lc;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.l2;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var toLong = kotlin_kotlin.$_$.t8;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var toRawBits = kotlin_kotlin.$_$.hc;
  var toShort = kotlin_kotlin.$_$.u8;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var isFinite = kotlin_kotlin.$_$.sb;
  var trimIndent = kotlin_kotlin.$_$.ra;
  var get_PI = kotlin_kotlin.$_$.w8;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var charSequenceLength = kotlin_kotlin.$_$.p7;
  var toBits = kotlin_kotlin.$_$.fc;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var withSign = kotlin_kotlin.$_$.e9;
  var compareTo = kotlin_kotlin.$_$.s7;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var coerceIn = kotlin_kotlin.$_$.l9;
  var arrayCopy = kotlin_kotlin.$_$.p3;
  var coerceIn_0 = kotlin_kotlin.$_$.k9;
  var contentEquals = kotlin_kotlin.$_$.x3;
  var contentHashCode = kotlin_kotlin.$_$.z3;
  var isNaN_0 = kotlin_kotlin.$_$.vb;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b7;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.h8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a7;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var toFloatArray = kotlin_kotlin.$_$.h6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.j3a(rect.s2j_1, rect.t2j_1, rect.u2j_1, rect.v2j_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m3a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.i3a(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m3a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.n3a(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.n3a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.q3a(rect.s2j_1, rect.t2j_1, rect.u2j_1, rect.v2j_1, paint);
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().m2j_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.l3g(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.l3g.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PathFillType, 'PathFillType', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TileMode, 'TileMode', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta);
  function get_center_0() {
    return get_center(this.y3l().z2j());
  }
  function get_size() {
    return this.y3l().z2j();
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().m2j_1 : topLeft;
    size = size === VOID ? offsetSize(this.z2j(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.y3f(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.y3f.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().m2j_1 : topLeft;
    size = size === VOID ? offsetSize(this.z2j(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.v3f(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.v3f.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.c3m(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().m2m_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.x2j(), image.y2j()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().m2m_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().r3f_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.b3m(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().m2j_1 : topLeft;
    size = size === VOID ? offsetSize(this.z2j(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().e2j_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.x3f(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.x3f.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z2j()) / 2.0 : radius;
    center = center === VOID ? this.i3m() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e3m(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e3m.call(this, new Color(color), radius, new Offset_0(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.t3f(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.t3f.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.w3f(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.w3f.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m3a_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.n3a(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.n3a.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  setMetadataFor(DrawTransform, 'DrawTransform', interfaceMeta);
  setMetadataFor(asDrawTransform$1, VOID, classMeta, VOID, [DrawTransform]);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(Painter, 'Painter', classMeta);
  setMetadataFor(PathBuilder, 'PathBuilder', classMeta);
  setMetadataFor(PathNode, 'PathNode', classMeta);
  setMetadataFor(Close, 'Close', objectMeta, PathNode);
  setMetadataFor(RelativeMoveTo, 'RelativeMoveTo', classMeta, PathNode);
  setMetadataFor(MoveTo, 'MoveTo', classMeta, PathNode);
  setMetadataFor(RelativeLineTo, 'RelativeLineTo', classMeta, PathNode);
  setMetadataFor(LineTo, 'LineTo', classMeta, PathNode);
  setMetadataFor(RelativeHorizontalTo, 'RelativeHorizontalTo', classMeta, PathNode);
  setMetadataFor(HorizontalTo, 'HorizontalTo', classMeta, PathNode);
  setMetadataFor(RelativeVerticalTo, 'RelativeVerticalTo', classMeta, PathNode);
  setMetadataFor(VerticalTo, 'VerticalTo', classMeta, PathNode);
  setMetadataFor(RelativeCurveTo, 'RelativeCurveTo', classMeta, PathNode);
  setMetadataFor(CurveTo, 'CurveTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(ReflectiveCurveTo, 'ReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(RelativeQuadTo, 'RelativeQuadTo', classMeta, PathNode);
  setMetadataFor(QuadTo, 'QuadTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(ReflectiveQuadTo, 'ReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(RelativeArcTo, 'RelativeArcTo', classMeta, PathNode);
  setMetadataFor(ArcTo, 'ArcTo', classMeta, PathNode);
  setMetadataFor(PathPoint, 'PathPoint', classMeta);
  setMetadataFor(PathParser, 'PathParser', classMeta);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path]);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta);
  setMetadataFor(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', classMeta);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.k37_1 = _BlendMode___init__impl__q6jalh(0);
    this.l37_1 = _BlendMode___init__impl__q6jalh(1);
    this.m37_1 = _BlendMode___init__impl__q6jalh(2);
    this.n37_1 = _BlendMode___init__impl__q6jalh(3);
    this.o37_1 = _BlendMode___init__impl__q6jalh(4);
    this.p37_1 = _BlendMode___init__impl__q6jalh(5);
    this.q37_1 = _BlendMode___init__impl__q6jalh(6);
    this.r37_1 = _BlendMode___init__impl__q6jalh(7);
    this.s37_1 = _BlendMode___init__impl__q6jalh(8);
    this.t37_1 = _BlendMode___init__impl__q6jalh(9);
    this.u37_1 = _BlendMode___init__impl__q6jalh(10);
    this.v37_1 = _BlendMode___init__impl__q6jalh(11);
    this.w37_1 = _BlendMode___init__impl__q6jalh(12);
    this.x37_1 = _BlendMode___init__impl__q6jalh(13);
    this.y37_1 = _BlendMode___init__impl__q6jalh(14);
    this.z37_1 = _BlendMode___init__impl__q6jalh(15);
    this.a38_1 = _BlendMode___init__impl__q6jalh(16);
    this.b38_1 = _BlendMode___init__impl__q6jalh(17);
    this.c38_1 = _BlendMode___init__impl__q6jalh(18);
    this.d38_1 = _BlendMode___init__impl__q6jalh(19);
    this.e38_1 = _BlendMode___init__impl__q6jalh(20);
    this.f38_1 = _BlendMode___init__impl__q6jalh(21);
    this.g38_1 = _BlendMode___init__impl__q6jalh(22);
    this.h38_1 = _BlendMode___init__impl__q6jalh(23);
    this.i38_1 = _BlendMode___init__impl__q6jalh(24);
    this.j38_1 = _BlendMode___init__impl__q6jalh(25);
    this.k38_1 = _BlendMode___init__impl__q6jalh(26);
    this.l38_1 = _BlendMode___init__impl__q6jalh(27);
    this.m38_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_12().k37_1 ? 'Clear' : tmp0_subject === Companion_getInstance_12().l37_1 ? 'Src' : tmp0_subject === Companion_getInstance_12().m37_1 ? 'Dst' : tmp0_subject === Companion_getInstance_12().n37_1 ? 'SrcOver' : tmp0_subject === Companion_getInstance_12().o37_1 ? 'DstOver' : tmp0_subject === Companion_getInstance_12().p37_1 ? 'SrcIn' : tmp0_subject === Companion_getInstance_12().q37_1 ? 'DstIn' : tmp0_subject === Companion_getInstance_12().r37_1 ? 'SrcOut' : tmp0_subject === Companion_getInstance_12().s37_1 ? 'DstOut' : tmp0_subject === Companion_getInstance_12().t37_1 ? 'SrcAtop' : tmp0_subject === Companion_getInstance_12().u37_1 ? 'DstAtop' : tmp0_subject === Companion_getInstance_12().v37_1 ? 'Xor' : tmp0_subject === Companion_getInstance_12().w37_1 ? 'Plus' : tmp0_subject === Companion_getInstance_12().x37_1 ? 'Modulate' : tmp0_subject === Companion_getInstance_12().y37_1 ? 'Screen' : tmp0_subject === Companion_getInstance_12().z37_1 ? 'Overlay' : tmp0_subject === Companion_getInstance_12().a38_1 ? 'Darken' : tmp0_subject === Companion_getInstance_12().b38_1 ? 'Lighten' : tmp0_subject === Companion_getInstance_12().c38_1 ? 'ColorDodge' : tmp0_subject === Companion_getInstance_12().d38_1 ? 'ColorBurn' : tmp0_subject === Companion_getInstance_12().e38_1 ? 'HardLight' : tmp0_subject === Companion_getInstance_12().f38_1 ? 'Softlight' : tmp0_subject === Companion_getInstance_12().g38_1 ? 'Difference' : tmp0_subject === Companion_getInstance_12().h38_1 ? 'Exclusion' : tmp0_subject === Companion_getInstance_12().i38_1 ? 'Multiply' : tmp0_subject === Companion_getInstance_12().j38_1 ? 'Hue' : tmp0_subject === Companion_getInstance_12().k38_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_12().l38_1 ? 'Color' : tmp0_subject === Companion_getInstance_12().m38_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    var tmp0_other_with_cast = other instanceof BlendMode ? other.n38_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_12();
    this.n38_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.n38_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.n38_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.n38_1, other);
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).o38 = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).p38 = function (colors, startY, endY, tileMode) {
    return this.o38(colors, Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  protoOf(Companion_0).q38 = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    var tmp;
    if (endY === VOID) {
      FloatCompanionObject_getInstance();
      tmp = Infinity;
    } else {
      tmp = endY;
    }
    endY = tmp;
    tileMode = tileMode === VOID ? Companion_getInstance_27().r38_1 : tileMode;
    return $super === VOID ? this.p38(colors, startY, endY, tileMode) : $super.p38.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_13();
    this.v38_1 = Companion_getInstance().q2k_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.y38_1 = null;
    this.z38_1 = Companion_getInstance().q2k_1;
  }
  protoOf(ShaderBrush).w38 = function (size, p, alpha) {
    var shader = this.y38_1;
    if (shader == null ? true : !equals(this.z38_1, size)) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.a39(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
      this.y38_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      shader = tmp$ret$0;
      this.z38_1 = size;
    }
    if (!equals(p.p39(), Companion_getInstance_15().b39_1)) {
      p.o39(Companion_getInstance_15().b39_1);
    }
    if (!equals(p.q39(), shader)) {
      p.y2u(shader);
    }
    if (!(p.y36() === alpha)) {
      p.r39(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.t39_1 = value;
  }
  protoOf(SolidColor).w38 = function (size, p, alpha) {
    p.r39(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.t39_1, _Color___get_alpha__impl__wcfyv1(this.t39_1) * alpha);
    } else {
      tmp = this.t39_1;
    }
    p.o39(tmp);
    if (!(p.q39() == null)) {
      p.y2u(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.t39_1, other.t39_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.t39_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + new Color(this.t39_1) + ')';
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().r38_1 : tileMode;
    ShaderBrush.call(this);
    this.x39_1 = colors;
    this.y39_1 = stops;
    this.z39_1 = start;
    this.a3a_1 = end;
    this.b3a_1 = tileMode;
  }
  protoOf(LinearGradient).a39 = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.z39_1);
    FloatCompanionObject_getInstance();
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.z39_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.z39_1);
    FloatCompanionObject_getInstance();
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.z39_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.a3a_1);
    FloatCompanionObject_getInstance();
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.a3a_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.a3a_1);
    FloatCompanionObject_getInstance();
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.a3a_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.x39_1;
    var tmp1_colorStops = this.y39_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.b3a_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.x39_1, other.x39_1))
      return false;
    if (!equals(this.y39_1, other.y39_1))
      return false;
    if (!equals(this.z39_1, other.z39_1))
      return false;
    if (!equals(this.a3a_1, other.a3a_1))
      return false;
    if (!(this.b3a_1 === other.b3a_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.x39_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.y39_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.z39_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.a3a_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.b3a_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.z39_1) ? 'start=' + new Offset_0(this.z39_1) + ', ' : '';
    var endValue = get_isFinite(this.a3a_1) ? 'end=' + new Offset_0(this.a3a_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.x39_1 + ', ' + ('stops=' + this.y39_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.b3a_1) + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.l3a_1 = _ClipOp___init__impl__pqwwy8(0);
    this.m3a_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_14().l3a_1 ? 'Difference' : tmp0_subject === Companion_getInstance_14().m3a_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    var tmp0_other_with_cast = other instanceof ClipOp ? other.v3a_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_14();
    this.v3a_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.v3a_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.v3a_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.v3a_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var tmp2_getColorSpace = ColorSpaces_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).f8();
    var tmp3_getColorSpace = tmp$ret$1;
    tmp$ret$2 = tmp2_getColorSpace.s3b_1[tmp3_getColorSpace];
    return tmp$ret$2;
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.z3b(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).v8(48));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).v8(48));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ef();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).v8(40));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).v8(32));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ef();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).v8(32));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).v8(16));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ef();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).v8(56));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).v8(6));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      var tmp6_toFloat = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$7 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat));
      tmp$ret$8 = tmp$ret$7;
      tmp = tmp$ret$8 / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = new Color($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Color(tmp_1)).b3c.call(tmp_0, alpha, red, green, blue).a3c_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).c3c_1 + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.b39_1 = Color_1(new Long(-16777216, 0));
    this.c39_1 = Color_1(new Long(-12303292, 0));
    this.d39_1 = Color_1(new Long(-7829368, 0));
    this.e39_1 = Color_1(new Long(-3355444, 0));
    this.f39_1 = Color_1(new Long(-1, 0));
    this.g39_1 = Color_1(new Long(-65536, 0));
    this.h39_1 = Color_1(new Long(-16711936, 0));
    this.i39_1 = Color_1(new Long(-16776961, 0));
    this.j39_1 = Color_1(new Long(-256, 0));
    this.k39_1 = Color_1(new Long(-16711681, 0));
    this.l39_1 = Color_1(new Long(-65281, 0));
    this.m39_1 = Color_2(0);
    this.n39_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().q3b_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.a3c_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_15();
    this.a3c_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.a3c_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.a3c_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.a3c_1, other);
  };
  function toArgb(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().a3b_1));
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).v8(32));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).f8();
    return tmp$ret$1;
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().a3b_1 : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.f3c(0);
    if (red <= colorSpace.g3c(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.f3c(1);
      tmp_1 = green <= colorSpace.g3c(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.f3c(2);
      tmp_0 = blue <= colorSpace.g3c(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$0 = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.h3c()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp1_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      var tmp2_shl = tmp$ret$2;
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).g8(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = colorSpace.i3c() === 3;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$4 = 'Color only works with ColorSpaces with 3 components';
      var message_0 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.e3c_1;
    // Inline function 'kotlin.require' call
    Companion_getInstance_30();
    var tmp4_require = !(id === -1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$5 = 'Unknown color space, please use a color space in ColorSpaces';
      var message_1 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.min' call
    tmp$ret$6 = Math.min(alpha, 1.0);
    var tmp5_max = tmp$ret$6;
    tmp$ret$7 = Math.max(0.0, tmp5_max);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$22;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$18;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$14;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$10;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$9;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$8;
    // Inline function 'kotlin.toULong' call
    var tmp6_toULong = _Float16___get_halfValue__impl__89tmwx(r);
    tmp$ret$8 = _ULong___init__impl__c78o9k(toLong(tmp6_toULong));
    var tmp7_and = tmp$ret$8;
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp8_shl = tmp$ret$9;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).g8(48));
    var tmp12_or = tmp$ret$10;
    var tmp$ret$13;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$12;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$11;
    // Inline function 'kotlin.toULong' call
    var tmp9_toULong = _Float16___get_halfValue__impl__89tmwx(g);
    tmp$ret$11 = _ULong___init__impl__c78o9k(toLong(tmp9_toULong));
    var tmp10_and = tmp$ret$11;
    tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp11_shl = tmp$ret$12;
    tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).g8(32));
    var tmp13_or = tmp$ret$13;
    tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).cf(_ULong___get_data__impl__fggpzb(tmp13_or)));
    var tmp17_or = tmp$ret$14;
    var tmp$ret$17;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$16;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$15;
    // Inline function 'kotlin.toULong' call
    var tmp14_toULong = _Float16___get_halfValue__impl__89tmwx(b);
    tmp$ret$15 = _ULong___init__impl__c78o9k(toLong(tmp14_toULong));
    var tmp15_and = tmp$ret$15;
    tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp16_shl = tmp$ret$16;
    tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).g8(16));
    var tmp18_or = tmp$ret$17;
    tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).cf(_ULong___get_data__impl__fggpzb(tmp18_or)));
    var tmp21_or = tmp$ret$18;
    var tmp$ret$21;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$20;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$19;
    // Inline function 'kotlin.toULong' call
    tmp$ret$19 = _ULong___init__impl__c78o9k(toLong(a));
    var tmp19_and = tmp$ret$19;
    tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp20_shl = tmp$ret$20;
    tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).g8(6));
    var tmp22_or = tmp$ret$21;
    tmp$ret$22 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).cf(_ULong___get_data__impl__fggpzb(tmp22_or)));
    var tmp24_or = tmp$ret$22;
    var tmp$ret$24;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$23;
    // Inline function 'kotlin.toULong' call
    tmp$ret$23 = _ULong___init__impl__c78o9k(toLong(id));
    var tmp23_and = tmp$ret$23;
    tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp25_or = tmp$ret$24;
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).cf(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(color);
    var tmp0_and = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).s8(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    var tmp1_shl = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).g8(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    var tmp0_require = equals(colorSpace.d3c_1, Companion_getInstance_29().j3c_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.d3c_1));
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).c3d_1;
    var r = eotf.f3d(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.f3d(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.f3d(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp0_compositeComponent = _Color___get_red__impl__cwrsk6(fg);
    var tmp1_compositeComponent = _Color___get_red__impl__cwrsk6(background);
    tmp$ret$0 = a === 0.0 ? 0.0 : (tmp0_compositeComponent * fgA + tmp1_compositeComponent * bgA * (1.0 - fgA)) / a;
    var r = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp2_compositeComponent = _Color___get_green__impl__bta9rs(fg);
    var tmp3_compositeComponent = _Color___get_green__impl__bta9rs(background);
    tmp$ret$1 = a === 0.0 ? 0.0 : (tmp2_compositeComponent * fgA + tmp3_compositeComponent * bgA * (1.0 - fgA)) / a;
    var g = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp4_compositeComponent = _Color___get_blue__impl__xwez13(fg);
    var tmp5_compositeComponent = _Color___get_blue__impl__xwez13(background);
    tmp$ret$2 = a === 0.0 ? 0.0 : (tmp4_compositeComponent * fgA + tmp5_compositeComponent * bgA * (1.0 - fgA)) / a;
    var b = tmp$ret$2;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(color) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp0_shl = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).g8(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function lerp_0(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().r3b_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    var tmp0_alpha = lerp(startAlpha, endAlpha, fraction);
    var tmp1_red = lerp(startL, endL, fraction);
    var tmp2_green = lerp(startA, endA, fraction);
    var tmp3_blue = lerp(startB, endB, fraction);
    var interpolated = Color_0(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).g3d = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  protoOf(Companion_3).h3d = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_12().p37_1 : blendMode;
    return $super === VOID ? this.g3d(color, blendMode) : $super.g3d.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_16();
    this.i3d_1 = nativeColorFilter;
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.j3d_1 = _FilterQuality___init__impl__nv51aq(0);
    this.k3d_1 = _FilterQuality___init__impl__nv51aq(1);
    this.l3d_1 = _FilterQuality___init__impl__nv51aq(2);
    this.m3d_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e < -10) {
        } else {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          var tmp0 = out;
          out = tmp0 + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp = _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_18(), value));
    return tmp;
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_18();
    var s = bits & 32768;
    Companion_getInstance_18();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_18();
    var e = tmp & 31;
    Companion_getInstance_18();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        Companion_getInstance_18();
        var tmp1_fromBits = 1056964608 + m | 0;
        tmp$ret$0 = floatFromBits(tmp1_fromBits);
        var o = tmp$ret$0;
        o = o - Companion_getInstance_18().r3e_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_18();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_18();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_18();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_18();
    var out = tmp_2 | tmp_3 << 23 | outM;
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    tmp$ret$1 = floatFromBits(out);
    return tmp$ret$1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.n3d_1 = 16;
    this.o3d_1 = _Float16___init__impl__fckrew(5120);
    this.p3d_1 = 15;
    this.q3d_1 = -14;
    this.r3d_1 = _Float16___init__impl__fckrew(-1025);
    this.s3d_1 = _Float16___init__impl__fckrew(31743);
    this.t3d_1 = _Float16___init__impl__fckrew(1024);
    this.u3d_1 = _Float16___init__impl__fckrew(1);
    this.v3d_1 = _Float16___init__impl__fckrew(32256);
    this.w3d_1 = _Float16___init__impl__fckrew(-1024);
    this.x3d_1 = _Float16___init__impl__fckrew(-32768);
    this.y3d_1 = _Float16___init__impl__fckrew(31744);
    this.z3d_1 = _Float16___init__impl__fckrew(0);
    this.a3e_1 = _Float16___init__impl__fckrew_0(1.0);
    this.b3e_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.c3e_1 = 15;
    this.d3e_1 = 32768;
    this.e3e_1 = 10;
    this.f3e_1 = 31;
    this.g3e_1 = 1023;
    this.h3e_1 = 15;
    this.i3e_1 = 32767;
    this.j3e_1 = 31744;
    this.k3e_1 = 31;
    this.l3e_1 = 23;
    this.m3e_1 = 255;
    this.n3e_1 = 8388607;
    this.o3e_1 = 127;
    this.p3e_1 = 4194304;
    this.q3e_1 = 1056964608;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp.r3e_1 = tmp$ret$0;
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.s3e_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.t3e_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.u3e_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.v3e_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.w3e_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_19().s3e_1 ? 'Argb8888' : tmp0_subject === Companion_getInstance_19().t3e_1 ? 'Alpha8' : tmp0_subject === Companion_getInstance_19().u3e_1 ? 'Rgb565' : tmp0_subject === Companion_getInstance_19().v3e_1 ? 'F16' : tmp0_subject === Companion_getInstance_19().w3e_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    var tmp0_other_with_cast = other instanceof ImageBitmapConfig ? other.x3e_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_19();
    this.x3e_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.x3e_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.x3e_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.x3e_1, other);
  };
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_19().s3e_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().a3b_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[15];
    var z = tmp_0 + tmp$ret$2;
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp_1 = tmp$ret$3 * x;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_2 = tmp_1 + tmp$ret$4 * y;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_3 = pZ * (tmp_2 + tmp$ret$5);
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_4 = tmp$ret$6 * x;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_5 = tmp_4 + tmp$ret$7 * y;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.g2j_1, rect.h2j_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.g2j_1, rect.j2j_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.i2j_1, rect.h2j_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.i2j_1, rect.j2j_1));
    var tmp = rect;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var tmp4_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$1 = Math.min(tmp2_min, tmp3_min);
    var tmp5_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    tmp.g2j_1 = tmp$ret$2;
    var tmp_0 = rect;
    var tmp$ret$5;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    var tmp10_min = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$4 = Math.min(tmp8_min, tmp9_min);
    var tmp11_min = tmp$ret$4;
    tmp$ret$5 = Math.min(tmp10_min, tmp11_min);
    tmp_0.h2j_1 = tmp$ret$5;
    var tmp_1 = rect;
    var tmp$ret$8;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$6 = Math.max(tmp12_max, tmp13_max);
    var tmp16_max = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$7 = Math.max(tmp14_max, tmp15_max);
    var tmp17_max = tmp$ret$7;
    tmp$ret$8 = Math.max(tmp16_max, tmp17_max);
    tmp_1.i2j_1 = tmp$ret$8;
    var tmp_2 = rect;
    var tmp$ret$11;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$9;
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$9 = Math.max(tmp18_max, tmp19_max);
    var tmp22_max = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$10 = Math.max(tmp20_max, tmp21_max);
    var tmp23_max = tmp$ret$10;
    tmp$ret$11 = Math.max(tmp22_max, tmp23_max);
    tmp_2.j2j_1 = tmp$ret$11;
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[11] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__invert_impl_9xyo46($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var a23 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var a33 = tmp$ret$15;
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp0_set = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp1_set = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[1] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp2_set = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[2] = tmp2_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp3_set = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[3] = tmp3_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp4_set = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[4] = tmp4_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp5_set = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[5] = tmp5_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp6_set = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[6] = tmp6_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp7_set = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[7] = tmp7_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp8_set = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[8] = tmp8_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp9_set = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[9] = tmp9_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp10_set = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[10] = tmp10_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp11_set = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[11] = tmp11_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp12_set = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[12] = tmp12_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp13_set = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[13] = tmp13_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp14_set = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[14] = tmp14_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp15_set = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[15] = tmp15_set;
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var tmp0_set = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = tmp0_set;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__setFrom_impl_5fylsu($this, matrix) {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _Matrix___get_values__impl__fblr7b($this)[i] = _Matrix___get_values__impl__fblr7b(matrix)[i];
      }
       while (inductionVariable <= 15);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$3;
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$7;
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$9;
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    var tmp0_array = $this;
    var tmp1_index0 = 0;
    var tmp2_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0];
    var tmp0_set = tmp$ret$0 * x;
    _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0] = tmp0_set;
    var tmp3_array = $this;
    var tmp4_index0 = 0;
    var tmp5_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0];
    var tmp1_set = tmp$ret$1 * x;
    _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0] = tmp1_set;
    var tmp6_array = $this;
    var tmp7_index0 = 0;
    var tmp8_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0];
    var tmp2_set = tmp$ret$2 * x;
    _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0] = tmp2_set;
    var tmp9_array = $this;
    var tmp10_index0 = 0;
    var tmp11_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0];
    var tmp3_set = tmp$ret$3 * x;
    _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0] = tmp3_set;
    var tmp12_array = $this;
    var tmp13_index0 = 1;
    var tmp14_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0];
    var tmp4_set = tmp$ret$4 * y;
    _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0] = tmp4_set;
    var tmp15_array = $this;
    var tmp16_index0 = 1;
    var tmp17_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0];
    var tmp5_set = tmp$ret$5 * y;
    _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0] = tmp5_set;
    var tmp18_array = $this;
    var tmp19_index0 = 1;
    var tmp20_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0];
    var tmp6_set = tmp$ret$6 * y;
    _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0] = tmp6_set;
    var tmp21_array = $this;
    var tmp22_index0 = 1;
    var tmp23_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0];
    var tmp7_set = tmp$ret$7 * y;
    _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0] = tmp7_set;
    var tmp24_array = $this;
    var tmp25_index0 = 2;
    var tmp26_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0];
    var tmp8_set = tmp$ret$8 * z;
    _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0] = tmp8_set;
    var tmp27_array = $this;
    var tmp28_index0 = 2;
    var tmp29_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0];
    var tmp9_set = tmp$ret$9 * z;
    _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0] = tmp9_set;
    var tmp30_array = $this;
    var tmp31_index0 = 2;
    var tmp32_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0];
    var tmp10_set = tmp$ret$10 * z;
    _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0] = tmp10_set;
    var tmp33_array = $this;
    var tmp34_index0 = 2;
    var tmp35_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0];
    var tmp11_set = tmp$ret$11 * z;
    _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0] = tmp11_set;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).z3e.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_1 = tmp_0 + tmp$ret$2 * z;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[12];
    var t1 = tmp_1 + tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_2 = tmp$ret$4 * x;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_3 = tmp_2 + tmp$ret$5 * y;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_4 = tmp_3 + tmp$ret$6 * z;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[13];
    var t2 = tmp_4 + tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_5 = tmp$ret$8 * x;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_6 = tmp_5 + tmp$ret$9 * y;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_7 = tmp_6 + tmp$ret$10 * z;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[14];
    var t3 = tmp_7 + tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_8 = tmp$ret$12 * x;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_9 = tmp_8 + tmp$ret$13 * y;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp_9 + tmp$ret$14 * z;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var t4 = tmp_10 + tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).a3f.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.b3f_1 = 0;
    this.c3f_1 = 1;
    this.d3f_1 = 3;
    this.e3f_1 = 4;
    this.f3f_1 = 5;
    this.g3f_1 = 7;
    this.h3f_1 = 10;
    this.i3f_1 = 12;
    this.j3f_1 = 13;
    this.k3f_1 = 14;
    this.l3f_1 = 15;
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.y3e_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_20();
    this.y3e_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.y3e_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.y3e_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.y3e_1, other);
  };
  function dot(m1, row, m2, column) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(m2)[0 + column | 0];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(m2)[4 + column | 0];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(m2)[8 + column | 0];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(m2)[12 + column | 0];
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            var tmp$ret$0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0];
            if (!(tmp$ret$0 === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.m3f_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.m3f_1.equals(other.m3f_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.m3f_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.n3f_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.n3f_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.p3f(this.n3f_1);
      tmp$ret$0 = tmp0_apply;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = null;
    }
    tmp.o3f_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.n3f_1.equals(other.n3f_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.n3f_1.hashCode();
  };
  function Generic() {
  }
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2k_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2k_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2k_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2k_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2k_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2k_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2k_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.m3f_1;
      _this__u8e3s4.v3f(color, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.o3f_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.t3f(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.n3f_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.m2k_1);
          var tmp0_topLeft = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp1_size = size_0(tmp1__anonymous__uwfjfc);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.u3f(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.s3f_1;
          _this__u8e3s4.t3f(tmp2__anonymous__z9zvc9, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_36().q3f_1 : blendMode;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.m3f_1;
      _this__u8e3s4.y3f(brush, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.o3f_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.w3f(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.n3f_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.m2k_1);
          _this__u8e3s4.x3f(brush, topLeft_0(tmp1__anonymous__uwfjfc), size_0(tmp1__anonymous__uwfjfc), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.s3f_1;
          _this__u8e3s4.w3f(tmp2__anonymous__z9zvc9, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.s2j_1, _this__u8e3s4.t2j_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.x2j(), _this__u8e3s4.y2j());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.f2k_1, _this__u8e3s4.g2k_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.x2j(), _this__u8e3s4.y2j());
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.z3f_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.a3g_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.q3g_1 = _PathFillType___init__impl__d59lzz(0);
    this.r3g_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_22().q3g_1 ? 'NonZero' : tmp0_subject === Companion_getInstance_22().r3g_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    var tmp0_other_with_cast = other instanceof PathFillType ? other.s3g_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_22();
    this.s3g_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.s3g_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.s3g_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.s3g_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.t3g_1 = _PathOperation___init__impl__8ddeif(0);
    this.u3g_1 = _PathOperation___init__impl__8ddeif(1);
    this.v3g_1 = _PathOperation___init__impl__8ddeif(2);
    this.w3g_1 = _PathOperation___init__impl__8ddeif(3);
    this.x3g_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).y3g = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (properties_initialized_RectangleShape_kt_h73j90) {
    } else {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_27().r38_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.z3g_1 = new Shadow();
  }
  var Companion_instance_11;
  function Companion_getInstance_24() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_24();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().m2j_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.a3h_1 = color;
    this.b3h_1 = offset;
    this.c3h_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.a3h_1, other.a3h_1))
      return false;
    if (!equals(this.b3h_1, other.b3h_1))
      return false;
    if (!(this.c3h_1 === other.c3h_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.a3h_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.b3h_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.c3h_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.a3h_1) + ', offset=' + new Offset_0(this.b3h_1) + ', blurRadius=' + this.c3h_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.d3h_1 = _StrokeCap___init__impl__kfgr27(0);
    this.e3h_1 = _StrokeCap___init__impl__kfgr27(1);
    this.f3h_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_25() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_25().d3h_1 ? 'Butt' : tmp0_subject === Companion_getInstance_25().e3h_1 ? 'Round' : tmp0_subject === Companion_getInstance_25().f3h_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeCap ? other.g3h_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_25();
    this.g3h_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.g3h_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.g3h_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.g3h_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.h3h_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.i3h_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.j3h_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_26() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_26().h3h_1 ? 'Miter' : tmp0_subject === Companion_getInstance_26().i3h_1 ? 'Round' : tmp0_subject === Companion_getInstance_26().j3h_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeJoin ? other.k3h_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_26();
    this.k3h_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.k3h_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.k3h_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.k3h_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.r38_1 = _TileMode___init__impl__syhjao(0);
    this.s38_1 = _TileMode___init__impl__syhjao(1);
    this.t38_1 = _TileMode___init__impl__syhjao(2);
    this.u38_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_14;
  function Companion_getInstance_27() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_27().r38_1 ? 'Clamp' : tmp0_subject === Companion_getInstance_27().s38_1 ? 'Repeated' : tmp0_subject === Companion_getInstance_27().t38_1 ? 'Mirror' : tmp0_subject === Companion_getInstance_27().u38_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    var tmp0_other_with_cast = other instanceof TileMode ? other.l3h_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_27();
    this.l3h_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.l3h_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.l3h_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.l3h_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    tmp.m3h_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.n3h_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.o3h_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_15;
  function Companion_getInstance_28() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Adaptation(transform) {
    Companion_getInstance_28();
    this.p3h_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _ColorModel___get_packedValue__impl__uvxrhj($this);
    tmp$ret$0 = tmp0_unpackInt1.e8(32).f8();
    return tmp$ret$0;
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.j3c_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.k3c_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.l3c_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.m3c_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_16;
  function Companion_getInstance_29() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function ColorModel__toString_impl_msukd7($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_29().j3c_1) ? 'Rgb' : equals(tmp0_subject, Companion_getInstance_29().k3c_1) ? 'Xyz' : equals(tmp0_subject, Companion_getInstance_29().l3c_1) ? 'Lab' : equals(tmp0_subject, Companion_getInstance_29().m3c_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.q3h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_29();
    this.q3h_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.q3h_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.q3h_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.q3h_1, other);
  };
  function Companion_17() {
    Companion_instance_17 = this;
    this.r3h_1 = -1;
    this.s3h_1 = 63;
  }
  var Companion_instance_17;
  function Companion_getInstance_30() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_30();
    this.c3c_1 = name;
    this.d3c_1 = model;
    this.e3c_1 = id;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.c3c_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_30();
    if (this.e3c_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_30();
      tmp = this.e3c_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_30();
      Companion_getInstance_30();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  protoOf(ColorSpace).i3c = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.d3c_1);
  };
  protoOf(ColorSpace).h3c = function () {
    return false;
  };
  protoOf(ColorSpace).t3h = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.u3h(tmp$ret$0);
  };
  protoOf(ColorSpace).v3h = function (v0, v1, v2) {
    var xyz = this.t3h(v0, v1, v2);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = xyz[0];
    var tmp1_packFloats = xyz[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.g8(32).cf(v2_0.s8(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(ColorSpace).w3h = function (v0, v1, v2) {
    var xyz = this.t3h(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).x3h = function (x, y, z, a, colorSpace) {
    var colors = this.y3h(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).y3h = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.d3c_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.z3h(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.c3c_1 + ' (id=' + this.e3c_1 + ', model=' + new ColorModel(this.d3c_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.e3c_1 === that.e3c_1))
      return false;
    return !(this.c3c_1 === that.c3c_1) ? false : equals(this.d3c_1, that.d3c_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.c3c_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.d3c_1) | 0;
    result = imul(31, result) + this.e3c_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().a3b_1 : destination;
    intent = intent === VOID ? Companion_getInstance_34().a3i_1 : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().a3b_1) {
      if (destination === ColorSpaces_getInstance().a3b_1) {
        return Companion_getInstance_31().e3i_1;
      }
      if (destination === ColorSpaces_getInstance().r3b_1 ? intent === Companion_getInstance_34().a3i_1 : false) {
        return Companion_getInstance_31().f3i_1;
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().r3b_1 ? destination === ColorSpaces_getInstance().a3b_1 : false) ? intent === Companion_getInstance_34().a3i_1 : false) {
      return Companion_getInstance_31().g3i_1;
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_31().h3i(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.d3c_1, Companion_getInstance_29().j3c_1) ? equals(destination.d3c_1, Companion_getInstance_29().j3c_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_28().m3h_1 : adaptation;
    if (equals(_this__u8e3s4.d3c_1, Companion_getInstance_29().j3c_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.q3c_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.k3i();
      var adaptationTransform = chromaticAdaptation(adaptation.p3h_1, rgb.q3c_1.k3i(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.v3c_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          var tmp$ret$0;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = a[i] - b[i];
          tmp$ret$0 = Math.abs(tmp0_abs);
          tmp = tmp$ret$0 > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.i3i_1 - b.i3i_1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    if (tmp$ret$0 < 0.001) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.j3i_1 - b.j3i_1;
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp = tmp$ret$1 < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var LMS = tmp$ret$0;
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x - e;
      var tmp1_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0;
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0 + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.l3i_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).f3d = function (double) {
    return this.l3i_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp.w3a_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    tmp_0.x3a_1 = tmp$ret$1;
    this.y3a_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.z3a_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.a3b_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.w3a_1, Illuminant_getInstance().s3i_1, this.y3a_1, 0);
    this.b3b_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.w3a_1, Illuminant_getInstance().s3i_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().s3i_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.c3b_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.w3a_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.y3a_1, 2);
    this.d3b_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.w3a_1, Illuminant_getInstance().s3i_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.e3b_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().s3i_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.f3b_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().s3i_1, new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.g3b_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.h3b_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().s3i_1, this.y3a_1, 7);
    this.i3b_1 = Rgb_init_$Create$('NTSC (1953)', this.x3a_1, Illuminant_getInstance().o3i_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.j3b_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().s3i_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.k3b_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().s3i_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.l3b_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().p3i_1, new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.m3b_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().r3i_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.n3b_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().r3i_1, 1.0, -65504.0, 65504.0, 13);
    this.o3b_1 = new Xyz('Generic XYZ', 14);
    this.p3b_1 = new Lab('Generic L*a*b*', 15);
    this.q3b_1 = Rgb_init_$Create$('None', this.w3a_1, Illuminant_getInstance().s3i_1, this.z3a_1, 16);
    this.r3b_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.a3b_1, this.b3b_1, this.c3b_1, this.d3b_1, this.e3b_1, this.f3b_1, this.g3b_1, this.h3b_1, this.i3b_1, this.j3b_1, this.k3b_1, this.l3b_1, this.m3b_1, this.n3b_1, this.o3b_1, this.p3b_1, this.q3b_1, this.r3b_1];
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = tmp0_arrayOf;
    tmp$ret$12 = tmp$ret$11;
    tmp$ret$13 = tmp$ret$12;
    tmp_15.s3b_1 = tmp$ret$13;
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.q3c_1, destination.q3c_1)) {
      return mul3x3(destination.w3c_1, source.v3c_1);
    } else {
      var transform = source.v3c_1;
      var inverseTransform = destination.w3c_1;
      var srcXYZ = source.q3c_1.k3i();
      var dstXYZ = destination.q3c_1.k3i();
      if (!compare_0(source.q3c_1, Illuminant_getInstance().p3i_1)) {
        var tmp = Companion_getInstance_28().m3h_1.p3h_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = Illuminant_getInstance().v3i_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_copyOf;
        tmp$ret$1 = tmp$ret$0.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.v3c_1);
      }
      if (!compare_0(destination.q3c_1, Illuminant_getInstance().p3i_1)) {
        var tmp_0 = Companion_getInstance_28().m3h_1.p3h_1;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp1_copyOf = Illuminant_getInstance().v3i_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.v3c_1));
      }
      if (intent === Companion_getInstance_34().d3i_1) {
        var tmp$ret$4;
        // Inline function 'kotlin.floatArrayOf' call
        var tmp2_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        tmp$ret$4 = tmp2_floatArrayOf;
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_34().d3i_1))
      return null;
    var srcRGB = equals(source.d3c_1, Companion_getInstance_29().j3c_1);
    var dstRGB = equals(destination.d3c_1, Companion_getInstance_29().j3c_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.q3c_1.k3i() : Illuminant_getInstance().v3i_1;
      var dstXYZ = dstRGB ? rgb.q3c_1.k3i() : Illuminant_getInstance().v3i_1;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      var tmp0_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
      tmp$ret$0 = tmp0_floatArrayOf;
      return tmp$ret$0;
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_34().b3i_1, this);
  }
  protoOf(Connector$Companion$identity$1).z3b = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.u3b_1);
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.d3c_1, Companion_getInstance_29().j3c_1) ? adapt(source, Illuminant_getInstance().p3i_1) : source;
    var tmp_0;
    if (equals(destination.d3c_1, Companion_getInstance_29().j3c_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().p3i_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_31(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.i3j_1 = mSource;
    this.j3j_1 = mDestination;
    this.k3j_1 = computeTransform(this, this.i3j_1, this.j3j_1, intent);
  }
  protoOf(RgbConnector).z3b = function (r, g, b, a) {
    var v0 = this.i3j_1.c3d_1.f3d(r);
    var v1 = this.i3j_1.c3d_1.f3d(g);
    var v2 = this.i3j_1.c3d_1.f3d(b);
    var v01 = mul3x3Float3_0(this.k3j_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.k3j_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.k3j_1, v0, v1, v2);
    var v02 = this.j3j_1.z3c_1.f3d(v01);
    var v12 = this.j3j_1.z3c_1.f3d(v11);
    var v22 = this.j3j_1.z3c_1.f3d(v21);
    return Color_0(v02, v12, v22, a, this.j3j_1);
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.e3i_1 = this.h3i(ColorSpaces_getInstance().a3b_1);
    this.f3i_1 = Connector_init_$Create$(ColorSpaces_getInstance().a3b_1, ColorSpaces_getInstance().r3b_1, Companion_getInstance_34().a3i_1);
    this.g3i_1 = Connector_init_$Create$(ColorSpaces_getInstance().r3b_1, ColorSpaces_getInstance().a3b_1, Companion_getInstance_34().a3i_1);
  }
  protoOf(Companion_18).h3i = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_18;
  function Companion_getInstance_31() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_31();
    this.t3b_1 = source;
    this.u3b_1 = destination;
    this.v3b_1 = transformSource;
    this.w3b_1 = transformDestination;
    this.x3b_1 = renderIntent;
    this.y3b_1 = transform;
  }
  protoOf(Connector).z3b = function (r, g, b, a) {
    var packed = this.v3b_1.v3h(r, g, b);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = packed.e8(32).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    var x = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp$ret$2;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    var tmp3_fromBits = packed.s8(new Long(-1, 0)).f8();
    tmp$ret$2 = floatFromBits(tmp3_fromBits);
    tmp$ret$3 = tmp$ret$2;
    var y = tmp$ret$3;
    var z = this.v3b_1.w3h(r, g, b);
    if (!(this.y3b_1 == null)) {
      x = x * this.y3b_1[0];
      y = y * this.y3b_1[1];
      z = z * this.y3b_1[2];
    }
    return this.w3b_1.x3h(x, y, z, a, this.u3b_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.m3i_1 = new WhitePoint(0.44757, 0.40745);
    this.n3i_1 = new WhitePoint(0.34842, 0.35161);
    this.o3i_1 = new WhitePoint(0.31006, 0.31616);
    this.p3i_1 = new WhitePoint(0.34567, 0.3585);
    this.q3i_1 = new WhitePoint(0.33242, 0.34743);
    this.r3i_1 = new WhitePoint(0.32168, 0.33767);
    this.s3i_1 = new WhitePoint(0.31271, 0.32902);
    this.t3i_1 = new WhitePoint(0.29902, 0.31485);
    this.u3i_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.964212, 1.0, 0.825188]);
    tmp.v3i_1 = tmp$ret$0;
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.l3j_1 = 0.008856452;
    this.m3j_1 = 7.787037;
    this.n3j_1 = 0.13793103;
    this.o3j_1 = 0.20689656;
  }
  var Companion_instance_19;
  function Companion_getInstance_32() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Lab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_29().l3c_1, id);
  }
  protoOf(Lab).f3c = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).g3c = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).u3h = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_32();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_32();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_32();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_32();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_32();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_32();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().v3i_1[0];
    v[1] = y * Illuminant_getInstance().v3i_1[1];
    v[2] = z * Illuminant_getInstance().v3i_1[2];
    return v;
  };
  protoOf(Lab).v3h = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v0, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    Companion_getInstance_32();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_32();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_32();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_32();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = x * Illuminant_getInstance().v3i_1[0];
    var tmp1_packFloats = y * Illuminant_getInstance().v3i_1[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.g8(32).cf(v2_0.s8(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Lab).w3h = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    Companion_getInstance_32();
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      Companion_getInstance_32();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_32();
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().v3i_1[2];
  };
  protoOf(Lab).x3h = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().v3i_1[0];
    var y1 = y / Illuminant_getInstance().v3i_1[1];
    var z1 = z / Illuminant_getInstance().v3i_1[2];
    var tmp;
    Companion_getInstance_32();
    if (x1 > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x1, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_32();
      var tmp_0 = 7.787037 * x1;
      Companion_getInstance_32();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_32();
    if (y1 > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y1, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_32();
      var tmp_2 = 7.787037 * y1;
      Companion_getInstance_32();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_32();
    if (z1 > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z1, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_32();
      var tmp_4 = 7.787037 * z1;
      Companion_getInstance_32();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).z3h = function (v) {
    var x = v[0] / Illuminant_getInstance().v3i_1[0];
    var y = v[1] / Illuminant_getInstance().v3i_1[1];
    var z = v[2] / Illuminant_getInstance().v3i_1[2];
    var tmp;
    Companion_getInstance_32();
    if (x > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_32();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_32();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_32();
    if (y > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_32();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_32();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_32();
    if (z > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_32();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_32();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.s3j_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_28().m3h_1.p3h_1, Illuminant_getInstance().p3i_1.k3i(), Illuminant_getInstance().s3i_1.k3i()));
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    tmp_0.t3j_1 = tmp$ret$1;
    this.u3j_1 = inverse3x3(this.s3j_1);
    this.v3j_1 = inverse3x3(this.t3j_1);
  }
  var Companion_instance_20;
  function Companion_getInstance_33() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Oklab(name, id) {
    Companion_getInstance_33();
    ColorSpace.call(this, name, Companion_getInstance_29().l3c_1, id);
  }
  protoOf(Oklab).f3c = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).g3c = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).u3h = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_33().v3j_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_33().u3j_1, v);
    return v;
  };
  protoOf(Oklab).v3h = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_33().u3j_1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_33().u3j_1, v02, v12, v22);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(v03));
    var v2_0 = toLong(toBits(v13));
    tmp$ret$0 = v1_0.g8(32).cf(v2_0.s8(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Oklab).w3h = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_33().v3j_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_33().u3j_1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).x3h = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_33().s3j_1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_33().s3j_1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_33().s3j_1, x, y, z);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v0;
    tmp$ret$0 = sign(tmp0_sign);
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v0;
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp2_pow = tmp$ret$1;
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp2_pow, tmp3_pow);
    v0 = tmp * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v1;
    tmp$ret$3 = sign(tmp4_sign);
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v1;
    tmp$ret$4 = Math.abs(tmp5_abs);
    var tmp6_pow = tmp$ret$4;
    var tmp7_pow = 1.0 / 3.0;
    tmp$ret$5 = Math.pow(tmp6_pow, tmp7_pow);
    v1 = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v2;
    tmp$ret$6 = sign(tmp8_sign);
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$7;
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v2;
    tmp$ret$7 = Math.abs(tmp9_abs);
    var tmp10_pow = tmp$ret$7;
    var tmp11_pow = 1.0 / 3.0;
    tmp$ret$8 = Math.pow(tmp10_pow, tmp11_pow);
    v2 = tmp_1 * tmp$ret$8;
    var v01 = mul3x3Float3_0(Companion_getInstance_33().t3j_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_33().t3j_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_33().t3j_1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).z3h = function (v) {
    mul3x3Float3(Companion_getInstance_33().s3j_1, v);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v[0];
    tmp$ret$0 = sign(tmp0_sign);
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v[0];
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp2_pow = tmp$ret$1;
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp2_pow, tmp3_pow);
    v[0] = tmp * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v[1];
    tmp$ret$3 = sign(tmp4_sign);
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v[1];
    tmp$ret$4 = Math.abs(tmp5_abs);
    var tmp6_pow = tmp$ret$4;
    var tmp7_pow = 1.0 / 3.0;
    tmp$ret$5 = Math.pow(tmp6_pow, tmp7_pow);
    v[1] = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v[2];
    tmp$ret$6 = sign(tmp8_sign);
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$7;
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v[2];
    tmp$ret$7 = Math.abs(tmp9_abs);
    var tmp10_pow = tmp$ret$7;
    var tmp11_pow = 1.0 / 3.0;
    tmp$ret$8 = Math.pow(tmp10_pow, tmp11_pow);
    v[2] = tmp_1 * tmp$ret$8;
    mul3x3Float3(Companion_getInstance_33().t3j_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.a3i_1 = _RenderIntent___init__impl__jceahd(0);
    this.b3i_1 = _RenderIntent___init__impl__jceahd(1);
    this.c3i_1 = _RenderIntent___init__impl__jceahd(2);
    this.d3i_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_21;
  function Companion_getInstance_34() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().w3a_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().s3i_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().a3b_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.x3c_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.a3d_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.f3d(point);
    var rB = b.f3d(point);
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0 <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().x3a_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().w3a_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var p0 = tmp$ret$0;
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = primaries;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = xyPrimaries;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, 6);
      tmp$ret$4 = xyPrimaries;
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.i3i_1;
    var wy = whitePoint.j3i_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.z3j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).f3d = function (double) {
    return this.z3j_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.f3k_1 === 0.0 ? function_0.g3k_1 === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.f3k_1 === 0.0 ? function_0.g3k_1 === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_35().h3k_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_35().h3k_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Companion_getInstance_30();
    Rgb.call($this, colorSpace.c3c_1, colorSpace.u3c_1, whitePoint, transform, colorSpace.x3c_1, colorSpace.a3d_1, colorSpace.r3c_1, colorSpace.s3c_1, colorSpace.t3c_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.h3k_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_22;
  function Companion_getInstance_35() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.i3k_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).f3d = function (double) {
    return this.i3k_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.j3k_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).f3d = function (double) {
    return this.j3k_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.k3k_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).f3d = function (double) {
    return this.k3k_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.l3k_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).f3d = function (double) {
    return this.l3k_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.x3c_1.f3d(x), this$0.r3c_1, this$0.s3c_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.x3c_1.f3d(x), this$0.r3c_1, this$0.s3c_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.a3d_1.f3d(coerceIn_0(x, this$0.r3c_1, this$0.s3c_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.a3d_1.f3d(coerceIn_0(x, this$0.r3c_1, this$0.s3c_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.b3k_1, $function.c3k_1, $function.d3k_1, $function.e3k_1, $function.a3k_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.b3k_1, $function.c3k_1, $function.d3k_1, $function.e3k_1, $function.f3k_1, $function.g3k_1, $function.a3k_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.b3k_1, $function.c3k_1, $function.d3k_1, $function.e3k_1, $function.a3k_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.b3k_1, $function.c3k_1, $function.d3k_1, $function.e3k_1, $function.f3k_1, $function.g3k_1, $function.a3k_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      var tmp1_pow = 1.0 / $gamma;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      tmp$ret$0 = Math.pow(tmp0_pow, $gamma);
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_35();
    ColorSpace.call(this, name, Companion_getInstance_29().j3c_1, id);
    this.q3c_1 = whitePoint;
    this.r3c_1 = min;
    this.s3c_1 = max;
    this.t3c_1 = transferParameters;
    this.x3c_1 = oetf;
    var tmp = this;
    tmp.y3c_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.z3c_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.a3d_1 = eotf;
    var tmp_2 = this;
    tmp_2.b3d_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.c3d_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.r3c_1 >= this.s3c_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.r3c_1 + ', max=' + this.s3c_1 + '; min must ' + 'be strictly < max');
    }
    this.u3c_1 = xyPrimaries(Companion_getInstance_35(), primaries);
    if (transform == null) {
      this.v3c_1 = computeXYZMatrix(Companion_getInstance_35(), this.u3c_1, this.q3c_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.v3c_1 = transform;
    }
    this.w3c_1 = inverse3x3(this.v3c_1);
    this.d3d_1 = isWideGamut(Companion_getInstance_35(), this.u3c_1, this.r3c_1, this.s3c_1);
    this.e3d_1 = isSrgb(Companion_getInstance_35(), this.u3c_1, this.q3c_1, oetf, eotf, this.r3c_1, this.s3c_1, id);
  }
  protoOf(Rgb).h3c = function () {
    return this.e3d_1;
  };
  protoOf(Rgb).f3c = function (component) {
    return this.r3c_1;
  };
  protoOf(Rgb).g3c = function (component) {
    return this.s3c_1;
  };
  protoOf(Rgb).u3h = function (v) {
    v[0] = this.c3d_1.f3d(v[0]);
    v[1] = this.c3d_1.f3d(v[1]);
    v[2] = this.c3d_1.f3d(v[2]);
    return mul3x3Float3(this.v3c_1, v);
  };
  protoOf(Rgb).v3h = function (v0, v1, v2) {
    var v00 = this.c3d_1.f3d(v0);
    var v10 = this.c3d_1.f3d(v1);
    var v20 = this.c3d_1.f3d(v2);
    var x = mul3x3Float3_0(this.v3c_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.v3c_1, v00, v10, v20);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(x));
    var v2_0 = toLong(toBits(y));
    tmp$ret$0 = v1_0.g8(32).cf(v2_0.s8(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Rgb).w3h = function (v0, v1, v2) {
    var v00 = this.c3d_1.f3d(v0);
    var v10 = this.c3d_1.f3d(v1);
    var v20 = this.c3d_1.f3d(v2);
    var z = mul3x3Float3_2(this.v3c_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).x3h = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.w3c_1, x, y, z);
    var v1 = mul3x3Float3_1(this.w3c_1, x, y, z);
    var v2 = mul3x3Float3_2(this.w3c_1, x, y, z);
    v0 = this.z3c_1.f3d(v0);
    v1 = this.z3c_1.f3d(v1);
    v2 = this.z3c_1.f3d(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).z3h = function (v) {
    mul3x3Float3(this.w3c_1, v);
    v[0] = this.z3c_1.f3d(v[0]);
    v[1] = this.z3c_1.f3d(v[1]);
    v[2] = this.z3c_1.f3d(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.r3c_1, this.r3c_1) === 0))
      return false;
    if (!(compareTo(rgb.s3c_1, this.s3c_1) === 0))
      return false;
    if (!this.q3c_1.equals(rgb.q3c_1))
      return false;
    if (!contentEquals(this.u3c_1, rgb.u3c_1))
      return false;
    if (!(this.t3c_1 == null)) {
      return equals(this.t3c_1, rgb.t3c_1);
    } else if (rgb.t3c_1 == null) {
      return true;
    }
    return !equals(this.x3c_1, rgb.x3c_1) ? false : equals(this.a3d_1, rgb.a3d_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.q3c_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.u3c_1) | 0;
    result = imul(31, result) + (!(this.r3c_1 === 0.0) ? toBits(this.r3c_1) : 0) | 0;
    result = imul(31, result) + (!(this.s3c_1 === 0.0) ? toBits(this.s3c_1) : 0) | 0;
    result = imul(31, result) + (!(this.t3c_1 == null) ? this.t3c_1.hashCode() : 0) | 0;
    if (this.t3c_1 == null) {
      result = imul(31, result) + hashCode(this.x3c_1) | 0;
      result = imul(31, result) + hashCode(this.a3d_1) | 0;
    }
    return result;
  };
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.a3k_1 = gamma;
    this.b3k_1 = a;
    this.c3k_1 = b;
    this.d3k_1 = c;
    this.e3k_1 = d;
    this.f3k_1 = e;
    this.g3k_1 = f;
    if ((((((isNaN_0(this.b3k_1) ? true : isNaN_0(this.c3k_1)) ? true : isNaN_0(this.d3k_1)) ? true : isNaN_0(this.e3k_1)) ? true : isNaN_0(this.f3k_1)) ? true : isNaN_0(this.g3k_1)) ? true : isNaN_0(this.a3k_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.e3k_1 >= 0.0 ? this.e3k_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.e3k_1));
    }
    if (this.e3k_1 === 0.0 ? this.b3k_1 === 0.0 ? true : this.a3k_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.e3k_1 >= 1.0 ? this.d3k_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.b3k_1 === 0.0 ? true : this.a3k_1 === 0.0) ? this.d3k_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.d3k_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.b3k_1 < 0.0 ? true : this.a3k_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.a3k_1 + ', a=' + this.b3k_1 + ', b=' + this.c3k_1 + ', c=' + this.d3k_1 + ', d=' + this.e3k_1 + ', e=' + this.f3k_1 + ', f=' + this.g3k_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.a3k_1);
    result = imul(result, 31) + getNumberHashCode(this.b3k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c3k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d3k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e3k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f3k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g3k_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.a3k_1, tmp0_other_with_cast.a3k_1))
      return false;
    if (!equals(this.b3k_1, tmp0_other_with_cast.b3k_1))
      return false;
    if (!equals(this.c3k_1, tmp0_other_with_cast.c3k_1))
      return false;
    if (!equals(this.d3k_1, tmp0_other_with_cast.d3k_1))
      return false;
    if (!equals(this.e3k_1, tmp0_other_with_cast.e3k_1))
      return false;
    if (!equals(this.f3k_1, tmp0_other_with_cast.f3k_1))
      return false;
    if (!equals(this.g3k_1, tmp0_other_with_cast.g3k_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.i3i_1 = x;
    this.j3i_1 = y;
  }
  protoOf(WhitePoint).k3i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([this.i3i_1 / this.j3i_1, 1.0, (1.0 - this.i3i_1 - this.j3i_1) / this.j3i_1]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.i3i_1 + ', y=' + this.j3i_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.i3i_1);
    result = imul(result, 31) + getNumberHashCode(this.j3i_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.i3i_1, tmp0_other_with_cast.i3i_1))
      return false;
    if (!equals(this.j3i_1, tmp0_other_with_cast.j3i_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_29().k3c_1, id);
  }
  protoOf(Xyz).f3c = function (component) {
    return -2.0;
  };
  protoOf(Xyz).g3c = function (component) {
    return 2.0;
  };
  protoOf(Xyz).u3h = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).v3h = function (v0, v1, v2) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = clamp(this, v0);
    var tmp1_packFloats = clamp(this, v1);
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.g8(32).cf(v2_0.s8(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Xyz).w3h = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).x3h = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).z3h = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function get_DefaultDensity() {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return DefaultDensity;
  }
  var DefaultDensity;
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.r3k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.t3k(Companion_getInstance_21().z3f_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.r3k_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.s3k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.t3k(Companion_getInstance_21().a3g_1);
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.s3k_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp0_subject = drawStyle;
    var tmp;
    if (equals(tmp0_subject, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (tmp0_subject instanceof Stroke) {
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(tmp0_apply.u2u() === drawStyle.u3k_1)) {
          tmp0_apply.t2u(drawStyle.u3k_1);
        }
        if (!(tmp0_apply.a3l() === drawStyle.w3k_1)) {
          tmp0_apply.z3k(drawStyle.w3k_1);
        }
        if (!(tmp0_apply.c3l() === drawStyle.v3k_1)) {
          tmp0_apply.b3l(drawStyle.v3k_1);
        }
        if (!(tmp0_apply.e3l() === drawStyle.x3k_1)) {
          tmp0_apply.d3l(drawStyle.x3k_1);
        }
        if (!equals(tmp0_apply.g3l(), drawStyle.y3k_1)) {
          tmp0_apply.f3l(drawStyle.y3k_1);
        }
        tmp$ret$0 = tmp0_apply;
        tmp = tmp$ret$0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.w38($this.z2j(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.y36() === alpha)) {
      tmp0_apply.r39(alpha);
    }
    if (!equals(tmp0_apply.i3l(), colorFilter)) {
      tmp0_apply.h3l(colorFilter);
    }
    if (!(tmp0_apply.k3l() === blendMode)) {
      tmp0_apply.j3l(blendMode);
    }
    if (!(tmp0_apply.m3l() === filterQuality)) {
      tmp0_apply.l3l(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().r3f_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.p39(), targetColor)) {
      tmp0_apply.o39(targetColor);
    }
    if (!(tmp0_apply.q39() == null)) {
      tmp0_apply.y2u(null);
    }
    if (!equals(tmp0_apply.i3l(), colorFilter)) {
      tmp0_apply.h3l(colorFilter);
    }
    if (!(tmp0_apply.k3l() === blendMode)) {
      tmp0_apply.j3l(blendMode);
    }
    if (!(tmp0_apply.m3l() === filterQuality)) {
      tmp0_apply.l3l(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_36().r3f_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance().p2k_1 : size;
    this.n3l_1 = density;
    this.o3l_1 = layoutDirection;
    this.p3l_1 = canvas;
    this.q3l_1 = size;
  }
  protoOf(DrawParams).f4 = function () {
    return this.n3l_1;
  };
  protoOf(DrawParams).g4 = function () {
    return this.o3l_1;
  };
  protoOf(DrawParams).r3l = function () {
    return this.p3l_1;
  };
  protoOf(DrawParams).s3l = function () {
    return this.q3l_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.n3l_1 + ', layoutDirection=' + this.o3l_1 + ', canvas=' + this.p3l_1 + ', size=' + new Size_0(this.q3l_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.n3l_1);
    result = imul(result, 31) + this.o3l_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.p3l_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.q3l_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.n3l_1, tmp0_other_with_cast.n3l_1))
      return false;
    if (!this.o3l_1.equals(tmp0_other_with_cast.o3l_1))
      return false;
    if (!equals(this.p3l_1, tmp0_other_with_cast.p3l_1))
      return false;
    if (!equals(this.q3l_1, tmp0_other_with_cast.q3l_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.u3l_1 = this$0;
    this.t3l_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).z2x = function () {
    return this.u3l_1.p3k_1.p3l_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).v3l = function (value) {
    this.u3l_1.p3k_1.q3l_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z2j = function () {
    return this.u3l_1.p3k_1.q3l_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).w3l = function () {
    return this.t3l_1;
  };
  function CanvasDrawScope() {
    this.p3k_1 = new DrawParams();
    var tmp = this;
    tmp.q3k_1 = new CanvasDrawScope$drawContext$1(this);
    this.r3k_1 = null;
    this.s3k_1 = null;
  }
  protoOf(CanvasDrawScope).x3l = function () {
    return this.p3k_1.o3l_1;
  };
  protoOf(CanvasDrawScope).n2l = function () {
    return this.p3k_1.n3l_1.n2l();
  };
  protoOf(CanvasDrawScope).o2l = function () {
    return this.p3k_1.n3l_1.o2l();
  };
  protoOf(CanvasDrawScope).y3l = function () {
    return this.q3k_1;
  };
  protoOf(CanvasDrawScope).y3f = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.q3a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).v3f = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.q3a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).b3m = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.p3k_1.p3l_1.u3a(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).x3f = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.r3a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).u3f = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.r3a(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).e3m = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.s3a(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).t3f = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.t3a(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).w3f = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.p3k_1.p3l_1.t3a(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.j3m_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).z2j = function () {
    return this.j3m_1.z2j();
  };
  protoOf(asDrawTransform$1).k3m = function (left, top, right, bottom) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.j3m_1.z2x();
    // Inline function 'kotlin.contracts.contract' call
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.z2j()) - (left + right), _Size___get_height__impl__a04p02(this.z2j()) - (top + bottom));
    // Inline function 'kotlin.require' call
    var tmp0_require = _Size___get_width__impl__58y75t(updatedSize) >= 0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Width and height must be greater than or equal to zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j3m_1.v3l(updatedSize);
    tmp0_let.f3a(left, top);
    tmp$ret$1 = Unit_getInstance();
  };
  protoOf(asDrawTransform$1).j3a = function (left, top, right, bottom, clipOp) {
    this.j3m_1.z2x().j3a(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).n3a = function (path, clipOp) {
    this.j3m_1.z2x().n3a(path, clipOp);
  };
  protoOf(asDrawTransform$1).f3a = function (left, top) {
    this.j3m_1.z2x().f3a(left, top);
  };
  protoOf(asDrawTransform$1).m3m = function (scaleX, scaleY, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.j3m_1.z2x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.f3a(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.g3a(scaleX, scaleY);
    tmp0_apply.f3a(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  protoOf(asDrawTransform$1).n3m = function (matrix) {
    this.j3m_1.z2x().h3a(matrix);
  };
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function _init_properties_CanvasDrawScope_kt__90zepm() {
    if (properties_initialized_CanvasDrawScope_kt_93ztlk) {
    } else {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.q3f_1 = Companion_getInstance_12().n37_1;
    this.r3f_1 = Companion_getInstance_17().k3d_1;
  }
  var Companion_instance_23;
  function Companion_getInstance_36() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.o3m_1 = 0.0;
    this.p3m_1 = 4.0;
    this.q3m_1 = Companion_getInstance_25().d3h_1;
    this.r3m_1 = Companion_getInstance_26().h3h_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_37() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_37();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_37();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_37().q3m_1 : cap;
    join = join === VOID ? Companion_getInstance_37().r3m_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.u3k_1 = width;
    this.v3k_1 = miter;
    this.w3k_1 = cap;
    this.x3k_1 = join;
    this.y3k_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.u3k_1 === other.u3k_1))
      return false;
    if (!(this.v3k_1 === other.v3k_1))
      return false;
    if (!(this.w3k_1 === other.w3k_1))
      return false;
    if (!(this.x3k_1 === other.x3k_1))
      return false;
    if (!equals(this.y3k_1, other.y3k_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.u3k_1);
    result = imul(31, result) + getNumberHashCode(this.v3k_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.w3k_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.x3k_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.y3k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.u3k_1 + ', miter=' + this.v3k_1 + ', cap=' + new StrokeCap(this.w3k_1) + ', join=' + new StrokeJoin(this.x3k_1) + ', pathEffect=' + this.y3k_1 + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).c3a = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).d3a = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).e3a = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f3a = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g3a = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h3a = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j3a = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).n3a = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q3a = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).r3a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s3a = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).t3a = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u3a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function obtainPaint($this) {
    var target = $this.s3m_1;
    if (target == null) {
      target = Paint();
      $this.s3m_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.u3m_1, colorFilter)) {
      var consumedColorFilter = $this.y3m(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.s3m_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.h3l(null);
          }
          $this.t3m_1 = false;
        } else {
          obtainPaint($this).h3l(colorFilter);
          $this.t3m_1 = true;
        }
      }
      $this.u3m_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.v3m_1 === alpha)) {
      var consumed = $this.z3m(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.s3m_1;
          if (tmp0_safe_receiver == null) {
          } else {
            tmp0_safe_receiver.r39(alpha);
          }
          $this.t3m_1 = false;
        } else {
          obtainPaint($this).r39(alpha);
          $this.t3m_1 = true;
        }
      }
      $this.v3m_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.w3m_1.equals(rtl)) {
      $this.a3n(rtl);
      $this.w3m_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.b3n($this$null);
      return Unit_getInstance();
    };
  }
  function Painter() {
    this.s3m_1 = null;
    this.t3m_1 = false;
    this.u3m_1 = null;
    this.v3m_1 = get_DefaultAlpha();
    this.w3m_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.x3m_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).z3m = function (alpha) {
    return false;
  };
  protoOf(Painter).y3m = function (colorFilter) {
    return false;
  };
  protoOf(Painter).a3n = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).d3n = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.x3l());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var tmp0_inset = _Size___get_width__impl__58y75t(_this__u8e3s4.z2j()) - _Size___get_width__impl__58y75t(size);
    var tmp1_inset = _Size___get_height__impl__a04p02(_this__u8e3s4.z2j()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.y3l().w3l().k3m(0.0, 0.0, tmp0_inset, tmp1_inset);
    // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
    if ((alpha > 0.0 ? _Size___get_width__impl__58y75t(size) > 0 : false) ? _Size___get_height__impl__a04p02(size) > 0 : false) {
      if (this.t3m_1) {
        var layerRect = Rect(Companion_getInstance_0().m2j_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.y3l().z2x();
        var tmp0_withSaveLayer = obtainPaint(this);
        var tmp;
        try {
          tmp0__anonymous__q1qw7t.e3a(layerRect, tmp0_withSaveLayer);
          this.b3n(_this__u8e3s4);
          tmp = Unit_getInstance();
        }finally {
          tmp0__anonymous__q1qw7t.d3a();
        }
        tmp$ret$0 = tmp;
      } else {
        this.b3n(_this__u8e3s4);
      }
    }
    _this__u8e3s4.y3l().w3l().k3m(-0.0, -0.0, -tmp0_inset, -tmp1_inset);
  };
  function addNode($this, node) {
    $this.e3n_1.a(node);
    return $this;
  }
  function PathBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.e3n_1 = tmp$ret$0;
  }
  protoOf(PathBuilder).f3n = function () {
    return this.e3n_1;
  };
  protoOf(PathBuilder).g3n = function () {
    return addNode(this, Close_getInstance());
  };
  protoOf(PathBuilder).o2v = function (x, y) {
    return addNode(this, new MoveTo(x, y));
  };
  protoOf(PathBuilder).q2v = function (x, y) {
    return addNode(this, new LineTo(x, y));
  };
  protoOf(PathBuilder).h3n = function (dx, dy) {
    return addNode(this, new RelativeLineTo(dx, dy));
  };
  protoOf(PathBuilder).i3n = function (x) {
    return addNode(this, new HorizontalTo(x));
  };
  protoOf(PathBuilder).j3n = function (dx) {
    return addNode(this, new RelativeHorizontalTo(dx));
  };
  protoOf(PathBuilder).k3n = function (y) {
    return addNode(this, new VerticalTo(y));
  };
  protoOf(PathBuilder).l3n = function (dy) {
    return addNode(this, new RelativeVerticalTo(dy));
  };
  protoOf(PathBuilder).m3n = function (x1, y1, x2, y2, x3, y3) {
    return addNode(this, new CurveTo(x1, y1, x2, y2, x3, y3));
  };
  protoOf(PathBuilder).n3n = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return addNode(this, new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
  };
  protoOf(PathBuilder).o3n = function (x1, y1, x2, y2) {
    return addNode(this, new ReflectiveCurveTo(x1, y1, x2, y2));
  };
  protoOf(PathBuilder).p3n = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo() {
  }
  function MoveTo(x, y) {
    PathNode.call(this);
    this.s3n_1 = x;
    this.t3n_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.s3n_1 + ', y=' + this.t3n_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.s3n_1);
    result = imul(result, 31) + getNumberHashCode(this.t3n_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.s3n_1, tmp0_other_with_cast.s3n_1))
      return false;
    if (!equals(this.t3n_1, tmp0_other_with_cast.t3n_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.w3n_1 = dx;
    this.x3n_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.w3n_1 + ', dy=' + this.x3n_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.w3n_1);
    result = imul(result, 31) + getNumberHashCode(this.x3n_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.w3n_1, tmp0_other_with_cast.w3n_1))
      return false;
    if (!equals(this.x3n_1, tmp0_other_with_cast.x3n_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.a3o_1 = x;
    this.b3o_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.a3o_1 + ', y=' + this.b3o_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.a3o_1);
    result = imul(result, 31) + getNumberHashCode(this.b3o_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.a3o_1, tmp0_other_with_cast.a3o_1))
      return false;
    if (!equals(this.b3o_1, tmp0_other_with_cast.b3o_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.e3o_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.e3o_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.e3o_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.e3o_1, tmp0_other_with_cast.e3o_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.h3o_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.h3o_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.h3o_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.h3o_1, tmp0_other_with_cast.h3o_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.k3o_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.k3o_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.k3o_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.k3o_1, tmp0_other_with_cast.k3o_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.n3o_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.n3o_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.n3o_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.n3o_1, tmp0_other_with_cast.n3o_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.q3o_1 = dx1;
    this.r3o_1 = dy1;
    this.s3o_1 = dx2;
    this.t3o_1 = dy2;
    this.u3o_1 = dx3;
    this.v3o_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.q3o_1 + ', dy1=' + this.r3o_1 + ', dx2=' + this.s3o_1 + ', dy2=' + this.t3o_1 + ', dx3=' + this.u3o_1 + ', dy3=' + this.v3o_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.q3o_1);
    result = imul(result, 31) + getNumberHashCode(this.r3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v3o_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.q3o_1, tmp0_other_with_cast.q3o_1))
      return false;
    if (!equals(this.r3o_1, tmp0_other_with_cast.r3o_1))
      return false;
    if (!equals(this.s3o_1, tmp0_other_with_cast.s3o_1))
      return false;
    if (!equals(this.t3o_1, tmp0_other_with_cast.t3o_1))
      return false;
    if (!equals(this.u3o_1, tmp0_other_with_cast.u3o_1))
      return false;
    if (!equals(this.v3o_1, tmp0_other_with_cast.v3o_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.y3o_1 = x1;
    this.z3o_1 = y1;
    this.a3p_1 = x2;
    this.b3p_1 = y2;
    this.c3p_1 = x3;
    this.d3p_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.y3o_1 + ', y1=' + this.z3o_1 + ', x2=' + this.a3p_1 + ', y2=' + this.b3p_1 + ', x3=' + this.c3p_1 + ', y3=' + this.d3p_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.y3o_1);
    result = imul(result, 31) + getNumberHashCode(this.z3o_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d3p_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.y3o_1, tmp0_other_with_cast.y3o_1))
      return false;
    if (!equals(this.z3o_1, tmp0_other_with_cast.z3o_1))
      return false;
    if (!equals(this.a3p_1, tmp0_other_with_cast.a3p_1))
      return false;
    if (!equals(this.b3p_1, tmp0_other_with_cast.b3p_1))
      return false;
    if (!equals(this.c3p_1, tmp0_other_with_cast.c3p_1))
      return false;
    if (!equals(this.d3p_1, tmp0_other_with_cast.d3p_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.g3p_1 = dx1;
    this.h3p_1 = dy1;
    this.i3p_1 = dx2;
    this.j3p_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.g3p_1 + ', dy1=' + this.h3p_1 + ', dx2=' + this.i3p_1 + ', dy2=' + this.j3p_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.g3p_1);
    result = imul(result, 31) + getNumberHashCode(this.h3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j3p_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.g3p_1, tmp0_other_with_cast.g3p_1))
      return false;
    if (!equals(this.h3p_1, tmp0_other_with_cast.h3p_1))
      return false;
    if (!equals(this.i3p_1, tmp0_other_with_cast.i3p_1))
      return false;
    if (!equals(this.j3p_1, tmp0_other_with_cast.j3p_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.m3p_1 = x1;
    this.n3p_1 = y1;
    this.o3p_1 = x2;
    this.p3p_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.m3p_1 + ', y1=' + this.n3p_1 + ', x2=' + this.o3p_1 + ', y2=' + this.p3p_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.m3p_1);
    result = imul(result, 31) + getNumberHashCode(this.n3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o3p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p3p_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.m3p_1, tmp0_other_with_cast.m3p_1))
      return false;
    if (!equals(this.n3p_1, tmp0_other_with_cast.n3p_1))
      return false;
    if (!equals(this.o3p_1, tmp0_other_with_cast.o3p_1))
      return false;
    if (!equals(this.p3p_1, tmp0_other_with_cast.p3p_1))
      return false;
    return true;
  };
  function RelativeQuadTo() {
  }
  function QuadTo() {
  }
  function RelativeReflectiveQuadTo() {
  }
  function ReflectiveQuadTo() {
  }
  function RelativeArcTo() {
  }
  function ArcTo() {
  }
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.q3p_1 = isCurve;
    this.r3p_1 = isQuad;
  }
  function PathPoint(x, y) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    this.s3p_1 = x;
    this.t3p_1 = y;
  }
  protoOf(PathPoint).k1r = function () {
    this.s3p_1 = 0.0;
    this.t3p_1 = 0.0;
  };
  protoOf(PathPoint).toString = function () {
    return 'PathPoint(x=' + this.s3p_1 + ', y=' + this.t3p_1 + ')';
  };
  protoOf(PathPoint).hashCode = function () {
    var result = getNumberHashCode(this.s3p_1);
    result = imul(result, 31) + getNumberHashCode(this.t3p_1) | 0;
    return result;
  };
  protoOf(PathPoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathPoint))
      return false;
    var tmp0_other_with_cast = other instanceof PathPoint ? other : THROW_CCE();
    if (!equals(this.s3p_1, tmp0_other_with_cast.s3p_1))
      return false;
    if (!equals(this.t3p_1, tmp0_other_with_cast.t3p_1))
      return false;
    return true;
  };
  function close($this, target) {
    $this.v3p_1.s3p_1 = $this.x3p_1.s3p_1;
    $this.v3p_1.t3p_1 = $this.x3p_1.t3p_1;
    $this.w3p_1.s3p_1 = $this.x3p_1.s3p_1;
    $this.w3p_1.t3p_1 = $this.x3p_1.t3p_1;
    target.o1i();
    target.c3g($this.v3p_1.s3p_1, $this.v3p_1.t3p_1);
  }
  function relativeMoveTo(_this__u8e3s4, $this, target) {
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.b3q_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.c3q_1;
    target.d3g(_this__u8e3s4.b3q_1, _this__u8e3s4.c3q_1);
    $this.x3p_1.s3p_1 = $this.v3p_1.s3p_1;
    $this.x3p_1.t3p_1 = $this.v3p_1.t3p_1;
  }
  function moveTo(_this__u8e3s4, $this, target) {
    $this.v3p_1.s3p_1 = _this__u8e3s4.s3n_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.t3n_1;
    target.c3g(_this__u8e3s4.s3n_1, _this__u8e3s4.t3n_1);
    $this.x3p_1.s3p_1 = $this.v3p_1.s3p_1;
    $this.x3p_1.t3p_1 = $this.v3p_1.t3p_1;
  }
  function relativeLineTo(_this__u8e3s4, $this, target) {
    target.f3g(_this__u8e3s4.w3n_1, _this__u8e3s4.x3n_1);
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.w3n_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.x3n_1;
  }
  function lineTo(_this__u8e3s4, $this, target) {
    target.e3g(_this__u8e3s4.a3o_1, _this__u8e3s4.b3o_1);
    $this.v3p_1.s3p_1 = _this__u8e3s4.a3o_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.b3o_1;
  }
  function relativeHorizontalTo(_this__u8e3s4, $this, target) {
    target.f3g(_this__u8e3s4.e3o_1, 0.0);
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.e3o_1;
  }
  function horizontalTo(_this__u8e3s4, $this, target) {
    target.e3g(_this__u8e3s4.h3o_1, $this.v3p_1.t3p_1);
    $this.v3p_1.s3p_1 = _this__u8e3s4.h3o_1;
  }
  function relativeVerticalTo(_this__u8e3s4, $this, target) {
    target.f3g(0.0, _this__u8e3s4.k3o_1);
    var tmp0_this = $this.v3p_1;
    tmp0_this.t3p_1 = tmp0_this.t3p_1 + _this__u8e3s4.k3o_1;
  }
  function verticalTo(_this__u8e3s4, $this, target) {
    target.e3g($this.v3p_1.s3p_1, _this__u8e3s4.n3o_1);
    $this.v3p_1.t3p_1 = _this__u8e3s4.n3o_1;
  }
  function relativeCurveTo(_this__u8e3s4, $this, target) {
    target.j3g(_this__u8e3s4.q3o_1, _this__u8e3s4.r3o_1, _this__u8e3s4.s3o_1, _this__u8e3s4.t3o_1, _this__u8e3s4.u3o_1, _this__u8e3s4.v3o_1);
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1 + _this__u8e3s4.s3o_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1 + _this__u8e3s4.t3o_1;
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.u3o_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.v3o_1;
  }
  function curveTo(_this__u8e3s4, $this, target) {
    target.i3g(_this__u8e3s4.y3o_1, _this__u8e3s4.z3o_1, _this__u8e3s4.a3p_1, _this__u8e3s4.b3p_1, _this__u8e3s4.c3p_1, _this__u8e3s4.d3p_1);
    $this.w3p_1.s3p_1 = _this__u8e3s4.a3p_1;
    $this.w3p_1.t3p_1 = _this__u8e3s4.b3p_1;
    $this.v3p_1.s3p_1 = _this__u8e3s4.c3p_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.d3p_1;
  }
  function relativeReflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.y3p_1.s3p_1 = $this.v3p_1.s3p_1 - $this.w3p_1.s3p_1;
      $this.y3p_1.t3p_1 = $this.v3p_1.t3p_1 - $this.w3p_1.t3p_1;
    } else {
      $this.y3p_1.k1r();
    }
    target.j3g($this.y3p_1.s3p_1, $this.y3p_1.t3p_1, _this__u8e3s4.g3p_1, _this__u8e3s4.h3p_1, _this__u8e3s4.i3p_1, _this__u8e3s4.j3p_1);
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1 + _this__u8e3s4.g3p_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1 + _this__u8e3s4.h3p_1;
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.i3p_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.j3p_1;
  }
  function reflectiveCurveTo(_this__u8e3s4, $this, prevIsCurve, target) {
    if (prevIsCurve) {
      $this.y3p_1.s3p_1 = 2 * $this.v3p_1.s3p_1 - $this.w3p_1.s3p_1;
      $this.y3p_1.t3p_1 = 2 * $this.v3p_1.t3p_1 - $this.w3p_1.t3p_1;
    } else {
      $this.y3p_1.s3p_1 = $this.v3p_1.s3p_1;
      $this.y3p_1.t3p_1 = $this.v3p_1.t3p_1;
    }
    target.i3g($this.y3p_1.s3p_1, $this.y3p_1.t3p_1, _this__u8e3s4.m3p_1, _this__u8e3s4.n3p_1, _this__u8e3s4.o3p_1, _this__u8e3s4.p3p_1);
    $this.w3p_1.s3p_1 = _this__u8e3s4.m3p_1;
    $this.w3p_1.t3p_1 = _this__u8e3s4.n3p_1;
    $this.v3p_1.s3p_1 = _this__u8e3s4.o3p_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.p3p_1;
  }
  function relativeQuadTo(_this__u8e3s4, $this, target) {
    target.h3g(_this__u8e3s4.f3q_1, _this__u8e3s4.g3q_1, _this__u8e3s4.h3q_1, _this__u8e3s4.i3q_1);
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1 + _this__u8e3s4.f3q_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1 + _this__u8e3s4.g3q_1;
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.h3q_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.i3q_1;
  }
  function quadTo(_this__u8e3s4, $this, target) {
    target.g3g(_this__u8e3s4.l3q_1, _this__u8e3s4.m3q_1, _this__u8e3s4.n3q_1, _this__u8e3s4.o3q_1);
    $this.w3p_1.s3p_1 = _this__u8e3s4.l3q_1;
    $this.w3p_1.t3p_1 = _this__u8e3s4.m3q_1;
    $this.v3p_1.s3p_1 = _this__u8e3s4.n3q_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.o3q_1;
  }
  function relativeReflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.y3p_1.s3p_1 = $this.v3p_1.s3p_1 - $this.w3p_1.s3p_1;
      $this.y3p_1.t3p_1 = $this.v3p_1.t3p_1 - $this.w3p_1.t3p_1;
    } else {
      $this.y3p_1.k1r();
    }
    target.h3g($this.y3p_1.s3p_1, $this.y3p_1.t3p_1, _this__u8e3s4.r3q_1, _this__u8e3s4.s3q_1);
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1 + $this.y3p_1.s3p_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1 + $this.y3p_1.t3p_1;
    var tmp0_this = $this.v3p_1;
    tmp0_this.s3p_1 = tmp0_this.s3p_1 + _this__u8e3s4.r3q_1;
    var tmp1_this = $this.v3p_1;
    tmp1_this.t3p_1 = tmp1_this.t3p_1 + _this__u8e3s4.s3q_1;
  }
  function reflectiveQuadTo(_this__u8e3s4, $this, prevIsQuad, target) {
    if (prevIsQuad) {
      $this.y3p_1.s3p_1 = 2 * $this.v3p_1.s3p_1 - $this.w3p_1.s3p_1;
      $this.y3p_1.t3p_1 = 2 * $this.v3p_1.t3p_1 - $this.w3p_1.t3p_1;
    } else {
      $this.y3p_1.s3p_1 = $this.v3p_1.s3p_1;
      $this.y3p_1.t3p_1 = $this.v3p_1.t3p_1;
    }
    target.g3g($this.y3p_1.s3p_1, $this.y3p_1.t3p_1, _this__u8e3s4.v3q_1, _this__u8e3s4.w3q_1);
    $this.w3p_1.s3p_1 = $this.y3p_1.s3p_1;
    $this.w3p_1.t3p_1 = $this.y3p_1.t3p_1;
    $this.v3p_1.s3p_1 = _this__u8e3s4.v3q_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.w3q_1;
  }
  function relativeArcTo(_this__u8e3s4, $this, target) {
    var arcStartX = _this__u8e3s4.e3r_1 + $this.v3p_1.s3p_1;
    var arcStartY = _this__u8e3s4.f3r_1 + $this.v3p_1.t3p_1;
    drawArc($this, target, $this.v3p_1.s3p_1, $this.v3p_1.t3p_1, arcStartX, arcStartY, _this__u8e3s4.z3q_1, _this__u8e3s4.a3r_1, _this__u8e3s4.b3r_1, _this__u8e3s4.c3r_1, _this__u8e3s4.d3r_1);
    $this.v3p_1.s3p_1 = arcStartX;
    $this.v3p_1.t3p_1 = arcStartY;
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1;
  }
  function arcTo(_this__u8e3s4, $this, target) {
    drawArc($this, target, $this.v3p_1.s3p_1, $this.v3p_1.t3p_1, _this__u8e3s4.n3r_1, _this__u8e3s4.o3r_1, _this__u8e3s4.i3r_1, _this__u8e3s4.j3r_1, _this__u8e3s4.k3r_1, _this__u8e3s4.l3r_1, _this__u8e3s4.m3r_1);
    $this.v3p_1.s3p_1 = _this__u8e3s4.n3r_1;
    $this.v3p_1.t3p_1 = _this__u8e3s4.o3r_1;
    $this.w3p_1.s3p_1 = $this.v3p_1.s3p_1;
    $this.w3p_1.t3p_1 = $this.v3p_1.t3p_1;
  }
  function drawArc($this, p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    var thetaD = toRadians(theta, $this);
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(thetaD);
    var cosTheta = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(thetaD);
    var sinTheta = tmp$ret$1;
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_getInstance();
    }
    var disc = 1.0 / dsq - 0.25;
    if (disc < 0.0) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(dsq);
      var adjust = tmp$ret$2 / 1.99999;
      drawArc($this, p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$3 = Math.sqrt(disc);
    var s = tmp$ret$3;
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.math.atan2' call
    var tmp0_atan2 = y0p - cy;
    var tmp1_atan2 = x0p - cx;
    tmp$ret$4 = Math.atan2(tmp0_atan2, tmp1_atan2);
    var eta0 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.atan2' call
    var tmp2_atan2 = y1p - cy;
    var tmp3_atan2 = x1p - cx;
    tmp$ret$5 = Math.atan2(tmp2_atan2, tmp3_atan2);
    var eta1 = tmp$ret$5;
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0.0)) {
      if (sweep > 0.0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier($this, p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier($this, p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    var eta1x = e1x;
    var eta1y = e1y;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = sweep * 4 / get_PI();
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ceil = tmp$ret$0;
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    var tmp$ret$2;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$2 = Math.cos(theta);
    var cosTheta = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$3 = Math.sin(theta);
    var sinTheta = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.cos' call
    var tmp2_cos = eta1;
    tmp$ret$4 = Math.cos(tmp2_cos);
    var cosEta1 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.math.sin' call
    var tmp3_sin = eta1;
    tmp$ret$5 = Math.sin(tmp3_sin);
    var sinEta1 = tmp$ret$5;
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        var tmp$ret$6;
        // Inline function 'kotlin.math.sin' call
        tmp$ret$6 = Math.sin(eta2);
        var sinEta2 = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.math.cos' call
        tmp$ret$7 = Math.cos(eta2);
        var cosEta2 = tmp$ret$7;
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        var tmp$ret$8;
        // Inline function 'kotlin.math.tan' call
        var tmp4_tan = (eta2 - eta1) / 2;
        tmp$ret$8 = Math.tan(tmp4_tan);
        var tanDiff2 = tmp$ret$8;
        var tmp$ret$9;
        // Inline function 'kotlin.math.sin' call
        var tmp5_sin = eta2 - eta1;
        tmp$ret$9 = Math.sin(tmp5_sin);
        var tmp = tmp$ret$9;
        var tmp$ret$10;
        // Inline function 'kotlin.math.sqrt' call
        var tmp6_sqrt = 4 + 3.0 * tanDiff2 * tanDiff2;
        tmp$ret$10 = Math.sqrt(tmp6_sqrt);
        var alpha = tmp * (tmp$ret$10 - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.i3g(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  function toRadians(_this__u8e3s4, $this) {
    return _this__u8e3s4 / 180 * get_PI();
  }
  function PathParser() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.u3p_1 = tmp$ret$0;
    this.v3p_1 = new PathPoint();
    this.w3p_1 = new PathPoint();
    this.x3p_1 = new PathPoint();
    this.y3p_1 = new PathPoint();
  }
  protoOf(PathParser).l3 = function () {
    this.u3p_1.l3();
  };
  protoOf(PathParser).p3r = function (nodes) {
    this.u3p_1.k(nodes);
    return this;
  };
  protoOf(PathParser).q3r = function (target) {
    target.k1r();
    this.v3p_1.k1r();
    this.w3p_1.k1r();
    this.x3p_1.k1r();
    this.y3p_1.k1r();
    var previousNode = null;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.u3p_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.graphics.vector.PathParser.toPath.<anonymous>' call
        if (previousNode == null)
          previousNode = item;
        var tmp0_subject = item;
        if (tmp0_subject instanceof Close) {
          close(this, target);
        } else {
          if (tmp0_subject instanceof RelativeMoveTo) {
            relativeMoveTo(item, this, target);
          } else {
            if (tmp0_subject instanceof MoveTo) {
              moveTo(item, this, target);
            } else {
              if (tmp0_subject instanceof RelativeLineTo) {
                relativeLineTo(item, this, target);
              } else {
                if (tmp0_subject instanceof LineTo) {
                  lineTo(item, this, target);
                } else {
                  if (tmp0_subject instanceof RelativeHorizontalTo) {
                    relativeHorizontalTo(item, this, target);
                  } else {
                    if (tmp0_subject instanceof HorizontalTo) {
                      horizontalTo(item, this, target);
                    } else {
                      if (tmp0_subject instanceof RelativeVerticalTo) {
                        relativeVerticalTo(item, this, target);
                      } else {
                        if (tmp0_subject instanceof VerticalTo) {
                          verticalTo(item, this, target);
                        } else {
                          if (tmp0_subject instanceof RelativeCurveTo) {
                            relativeCurveTo(item, this, target);
                          } else {
                            if (tmp0_subject instanceof CurveTo) {
                              curveTo(item, this, target);
                            } else {
                              if (tmp0_subject instanceof RelativeReflectiveCurveTo) {
                                relativeReflectiveCurveTo(item, this, ensureNotNull(previousNode).q3p_1, target);
                              } else {
                                if (tmp0_subject instanceof ReflectiveCurveTo) {
                                  reflectiveCurveTo(item, this, ensureNotNull(previousNode).q3p_1, target);
                                } else {
                                  if (tmp0_subject instanceof RelativeQuadTo) {
                                    relativeQuadTo(item, this, target);
                                  } else {
                                    if (tmp0_subject instanceof QuadTo) {
                                      quadTo(item, this, target);
                                    } else {
                                      if (tmp0_subject instanceof RelativeReflectiveQuadTo) {
                                        relativeReflectiveQuadTo(item, this, ensureNotNull(previousNode).r3p_1, target);
                                      } else {
                                        if (tmp0_subject instanceof ReflectiveQuadTo) {
                                          reflectiveQuadTo(item, this, ensureNotNull(previousNode).r3p_1, target);
                                        } else {
                                          if (tmp0_subject instanceof RelativeArcTo) {
                                            relativeArcTo(item, this, target);
                                          } else {
                                            if (tmp0_subject instanceof ArcTo) {
                                              arcTo(item, this, target);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  };
  function toSkia(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_12().k37_1 ? BlendMode_CLEAR_getInstance() : tmp0_subject === Companion_getInstance_12().l37_1 ? BlendMode_SRC_getInstance() : tmp0_subject === Companion_getInstance_12().m37_1 ? BlendMode_DST_getInstance() : tmp0_subject === Companion_getInstance_12().n37_1 ? BlendMode_SRC_OVER_getInstance() : tmp0_subject === Companion_getInstance_12().o37_1 ? BlendMode_DST_OVER_getInstance() : tmp0_subject === Companion_getInstance_12().p37_1 ? BlendMode_SRC_IN_getInstance() : tmp0_subject === Companion_getInstance_12().q37_1 ? BlendMode_DST_IN_getInstance() : tmp0_subject === Companion_getInstance_12().r37_1 ? BlendMode_SRC_OUT_getInstance() : tmp0_subject === Companion_getInstance_12().s37_1 ? BlendMode_DST_OUT_getInstance() : tmp0_subject === Companion_getInstance_12().t37_1 ? BlendMode_SRC_ATOP_getInstance() : tmp0_subject === Companion_getInstance_12().u37_1 ? BlendMode_DST_ATOP_getInstance() : tmp0_subject === Companion_getInstance_12().v37_1 ? BlendMode_XOR_getInstance() : tmp0_subject === Companion_getInstance_12().w37_1 ? BlendMode_PLUS_getInstance() : tmp0_subject === Companion_getInstance_12().x37_1 ? BlendMode_MODULATE_getInstance() : tmp0_subject === Companion_getInstance_12().y37_1 ? BlendMode_SCREEN_getInstance() : tmp0_subject === Companion_getInstance_12().z37_1 ? BlendMode_OVERLAY_getInstance() : tmp0_subject === Companion_getInstance_12().a38_1 ? BlendMode_DARKEN_getInstance() : tmp0_subject === Companion_getInstance_12().b38_1 ? BlendMode_LIGHTEN_getInstance() : tmp0_subject === Companion_getInstance_12().c38_1 ? BlendMode_COLOR_DODGE_getInstance() : tmp0_subject === Companion_getInstance_12().d38_1 ? BlendMode_COLOR_BURN_getInstance() : tmp0_subject === Companion_getInstance_12().e38_1 ? BlendMode_HARD_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_12().f38_1 ? BlendMode_SOFT_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_12().g38_1 ? BlendMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_12().h38_1 ? BlendMode_EXCLUSION_getInstance() : tmp0_subject === Companion_getInstance_12().i38_1 ? BlendMode_MULTIPLY_getInstance() : tmp0_subject === Companion_getInstance_12().j38_1 ? BlendMode_HUE_getInstance() : tmp0_subject === Companion_getInstance_12().k38_1 ? BlendMode_SATURATION_getInstance() : tmp0_subject === Companion_getInstance_12().l38_1 ? BlendMode_COLOR_getInstance() : tmp0_subject === Companion_getInstance_12().m38_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().l2x(_this__u8e3s4.s2j_1, _this__u8e3s4.t2j_1, _this__u8e3s4.u2j_1, _this__u8e3s4.v2j_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j2k_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j2k_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k2k_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k2k_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l2k_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l2k_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m2k_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m2k_1);
    return Companion_getInstance_4().k2x(_this__u8e3s4.f2k_1, _this__u8e3s4.g2k_1, _this__u8e3s4.h2k_1, _this__u8e3s4.i2k_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.n2o_1, _this__u8e3s4.o2o_1, _this__u8e3s4.p2o_1, _this__u8e3s4.q2o_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).r3r_1;
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).s3r_1 = value;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    tmp0_apply.e3s($this.s3r_1);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.t3r_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().v2t(bitmap);
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp$ret$0 = $this.r3r_1.c2p(tmp0_use, Companion_getInstance_3().m2x(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().m2x(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.m3l(), $this), _get_skia__ddpejf(paint, $this), true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_use.o1i();
    }
    tmp$ret$1 = tmp;
  }
  function toSkia_0(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_14().l3a_1 ? ClipMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_14().m3a_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[4];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[8];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[12];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[1];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[9];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[13];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[2];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[6];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[14];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[3];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[7];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[11];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[15];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_17().k3d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : tmp0_subject === Companion_getInstance_17().l3d_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : tmp0_subject === Companion_getInstance_17().m3d_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.r3r_1 = skia;
    this.s3r_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).c3a = function () {
    this.r3r_1.dh();
  };
  protoOf(SkiaBackedCanvas).d3a = function () {
    this.r3r_1.t2p();
  };
  protoOf(SkiaBackedCanvas).e3a = function (bounds, paint) {
    this.r3r_1.s2p(bounds.s2j_1, bounds.t2j_1, bounds.u2j_1, bounds.v2j_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).f3a = function (dx, dy) {
    this.r3r_1.b2k(dx, dy);
  };
  protoOf(SkiaBackedCanvas).g3a = function (sx, sy) {
    this.r3r_1.o2p(sx, sy);
  };
  protoOf(SkiaBackedCanvas).h3a = function (matrix) {
    if (!isIdentity(matrix)) {
      this.r3r_1.q2p(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).j3a = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.r3r_1.i2p(Companion_getInstance_3().l2x(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).n3a = function (path, clipOp) {
    var antiAlias = true;
    this.r3r_1.k2p(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).q3a = function (left, top, right, bottom, paint) {
    this.r3r_1.m2o(Companion_getInstance_3().l2x(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).r3a = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.r3r_1.s2o(Companion_getInstance_4().j2x(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).s3a = function (center, radius, paint) {
    this.r3r_1.r2o(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).t3a = function (path, paint) {
    this.r3r_1.b2p(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).u3a = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    var tmp0_require = !skiaBitmap.s2n();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      tmp$ret$0 = 'Cannot draw on immutable ImageBitmap';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.t3r_1.r2u(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.t3r_1.s2u()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.y36() : alpha;
    multiplier = multiplier === VOID ? $this.u3r_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_21().z3f_1 ? PaintMode_FILL_getInstance() : tmp0_subject === Companion_getInstance_21().a3g_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_25().d3h_1 ? PaintStrokeCap_BUTT_getInstance() : tmp0_subject === Companion_getInstance_25().e3h_1 ? PaintStrokeCap_ROUND_getInstance() : tmp0_subject === Companion_getInstance_25().f3h_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_26().h3h_1 ? PaintStrokeJoin_MITER_getInstance() : tmp0_subject === Companion_getInstance_26().i3h_1 ? PaintStrokeJoin_ROUND_getInstance() : tmp0_subject === Companion_getInstance_26().j3h_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.t3r_1 = skia;
    this.u3r_1 = 1.0;
    this.v3r_1 = Companion_getInstance_12().n37_1;
    this.w3r_1 = Companion_getInstance_21().z3f_1;
    this.x3r_1 = Companion_getInstance_25().d3h_1;
    this.y3r_1 = Companion_getInstance_26().i3h_1;
    this.z3r_1 = 0.0;
    this.a3s_1 = Companion_getInstance_17().l3d_1;
    this.b3s_1 = null;
    this.c3s_1 = null;
    this.d3s_1 = null;
  }
  protoOf(SkiaBackedPaint).f3s = function () {
    return this.t3r_1;
  };
  protoOf(SkiaBackedPaint).e3s = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.u3r_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).r39 = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).y36 = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.t3r_1.s2u()));
  };
  protoOf(SkiaBackedPaint).o39 = function (color) {
    this.t3r_1.r2u(toArgb(color));
  };
  protoOf(SkiaBackedPaint).p39 = function () {
    return Color_2(this.t3r_1.s2u());
  };
  protoOf(SkiaBackedPaint).j3l = function (value) {
    this.t3r_1.a2v(toSkia(value));
    this.v3r_1 = value;
  };
  protoOf(SkiaBackedPaint).k3l = function () {
    return this.v3r_1;
  };
  protoOf(SkiaBackedPaint).t3k = function (value) {
    this.t3r_1.q2u(toSkia_3(value, this));
    this.w3r_1 = value;
  };
  protoOf(SkiaBackedPaint).g3s = function () {
    return this.w3r_1;
  };
  protoOf(SkiaBackedPaint).t2u = function (value) {
    this.t3r_1.t2u(value);
  };
  protoOf(SkiaBackedPaint).u2u = function () {
    return this.t3r_1.u2u();
  };
  protoOf(SkiaBackedPaint).z3k = function (value) {
    this.t3r_1.w2u(toSkia_4(value, this));
    this.x3r_1 = value;
  };
  protoOf(SkiaBackedPaint).a3l = function () {
    return this.x3r_1;
  };
  protoOf(SkiaBackedPaint).d3l = function (value) {
    this.t3r_1.x2u(toSkia_5(value, this));
    this.y3r_1 = value;
  };
  protoOf(SkiaBackedPaint).e3l = function () {
    return this.y3r_1;
  };
  protoOf(SkiaBackedPaint).b3l = function (value) {
    this.t3r_1.v2u(value);
    this.z3r_1 = value;
  };
  protoOf(SkiaBackedPaint).c3l = function () {
    return this.z3r_1;
  };
  protoOf(SkiaBackedPaint).l3l = function (_set____db54di) {
    this.a3s_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).m3l = function () {
    return this.a3s_1;
  };
  protoOf(SkiaBackedPaint).y2u = function (value) {
    this.t3r_1.y2u(value);
    this.b3s_1 = value;
  };
  protoOf(SkiaBackedPaint).q39 = function () {
    return this.b3s_1;
  };
  protoOf(SkiaBackedPaint).h3l = function (value) {
    var tmp0_safe_receiver = value;
    this.t3r_1.z2u(tmp0_safe_receiver == null ? null : asSkiaColorFilter(tmp0_safe_receiver));
    this.c3s_1 = value;
  };
  protoOf(SkiaBackedPaint).i3l = function () {
    return this.c3s_1;
  };
  protoOf(SkiaBackedPaint).f3l = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.t3r_1.d2v(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.d3s_1 = value;
  };
  protoOf(SkiaBackedPaint).g3l = function () {
    return this.d3s_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_23().t3g_1 ? PathOp_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_23().u3g_1 ? PathOp_INTERSECT_getInstance() : tmp0_subject === Companion_getInstance_23().v3g_1 ? PathOp_UNION_getInstance() : tmp0_subject === Companion_getInstance_23().w3g_1 ? PathOp_XOR_getInstance() : tmp0_subject === Companion_getInstance_23().x3g_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.h3s_1 = internalPath;
  }
  protoOf(SkiaBackedPath).b3g = function (value) {
    var tmp = this.h3s_1;
    var tmp_0;
    if (value === Companion_getInstance_22().r3g_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.j2v(tmp_0);
  };
  protoOf(SkiaBackedPath).i3s = function () {
    if (this.h3s_1.k2v().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_22().r3g_1;
    } else {
      return Companion_getInstance_22().q3g_1;
    }
  };
  protoOf(SkiaBackedPath).c3g = function (x, y) {
    this.h3s_1.o2v(x, y);
  };
  protoOf(SkiaBackedPath).d3g = function (dx, dy) {
    this.h3s_1.p2v(dx, dy);
  };
  protoOf(SkiaBackedPath).e3g = function (x, y) {
    this.h3s_1.q2v(x, y);
  };
  protoOf(SkiaBackedPath).f3g = function (dx, dy) {
    this.h3s_1.r2v(dx, dy);
  };
  protoOf(SkiaBackedPath).g3g = function (x1, y1, x2, y2) {
    this.h3s_1.s2v(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).h3g = function (dx1, dy1, dx2, dy2) {
    this.h3s_1.t2v(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).i3g = function (x1, y1, x2, y2, x3, y3) {
    this.h3s_1.u2v(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).j3g = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.h3s_1.v2v(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).k3g = function (rect) {
    this.h3s_1.y2v(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).p3f = function (roundRect) {
    this.h3s_1.a2w(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).l3g = function (path, offset) {
    this.h3s_1.c2w(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).o1i = function () {
    this.h3s_1.w2v();
  };
  protoOf(SkiaBackedPath).k1r = function () {
    var fillType = this.i3s();
    this.h3s_1.l2v();
    this.b3g(fillType);
  };
  protoOf(SkiaBackedPath).n3g = function (offset) {
    this.h3s_1.e2w(Companion_getInstance_6().m2p(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).o3g = function () {
    var bounds = this.h3s_1.m2v();
    return new Rect_0(bounds.n2o_1, bounds.o2o_1, bounds.p2o_1, bounds.q2o_1);
  };
  protoOf(SkiaBackedPath).p3g = function (path1, path2, operation) {
    var path = Companion_getInstance_7().f2v(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    var tmp0_elvis_lhs = path;
    tmp.h3s_1 = tmp0_elvis_lhs == null ? this.h3s_1 : tmp0_elvis_lhs;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).it = function () {
    return this.h3s_1.it();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.h3s_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).j3s_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.k3s_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).l3s = function (path, forceClosed) {
    var tmp0_safe_receiver = path;
    this.k3s_1.k2w(tmp0_safe_receiver == null ? null : asSkiaPath(tmp0_safe_receiver), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).m3s = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.k3s_1.l2w(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).x8 = function () {
    return this.k3s_1.x8();
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.i3d_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_8().w2p(toArgb(color), toSkia(blendMode)));
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.n3s_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.n3s_1 = bitmap;
    this.o3s_1 = toComposeColorSpace(this.n3s_1.d2o());
    this.p3s_1 = toComposeConfig(this.n3s_1.c2o());
    this.q3s_1 = !this.n3s_1.e2o();
  }
  protoOf(SkiaBackedImageBitmap).r3s = function () {
    return this.p3s_1;
  };
  protoOf(SkiaBackedImageBitmap).y2j = function () {
    return this.n3s_1.y2j();
  };
  protoOf(SkiaBackedImageBitmap).x2j = function () {
    return this.n3s_1.x2j();
  };
  protoOf(SkiaBackedImageBitmap).s3s = function () {
    return Unit_getInstance();
  };
  function toComposeColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_9().f2q_1) ? ColorSpaces_getInstance().a3b_1 : equals(tmp0_subject, Companion_getInstance_9().g2q_1) ? ColorSpaces_getInstance().b3b_1 : equals(tmp0_subject, Companion_getInstance_9().h2q_1) ? ColorSpaces_getInstance().h3b_1 : ColorSpaces_getInstance().a3b_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(Companion_getInstance_10().j2q_1) ? Companion_getInstance_19().s3e_1 : tmp0_subject.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_19().t3e_1 : tmp0_subject.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_19().u3e_1 : tmp0_subject.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_19().v3e_1 : Companion_getInstance_19().s3e_1;
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.a2o(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_19().s3e_1 ? Companion_getInstance_10().j2q_1 : tmp0_subject === Companion_getInstance_19().t3e_1 ? ColorType_ALPHA_8_getInstance() : tmp0_subject === Companion_getInstance_19().u3e_1 ? ColorType_RGB_565_getInstance() : tmp0_subject === Companion_getInstance_19().v3e_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_10().j2q_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(ColorSpaces_getInstance().a3b_1) ? Companion_getInstance_9().f2q_1 : tmp0_subject.equals(ColorSpaces_getInstance().b3b_1) ? Companion_getInstance_9().g2q_1 : tmp0_subject.equals(ColorSpaces_getInstance().h3b_1) ? Companion_getInstance_9().h2q_1 : Companion_getInstance_9().f2q_1;
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_11();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.n2x(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.f() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.f() === colorStops.f())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.f();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.toIntArray.<anonymous>' call
      tmp$ret$0 = toArgb(_this__u8e3s4.g(tmp_2).a3c_1);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_27().r38_1 ? FilterTileMode_CLAMP_getInstance() : tmp0_subject === Companion_getInstance_27().s38_1 ? FilterTileMode_REPEAT_getInstance() : tmp0_subject === Companion_getInstance_27().t38_1 ? FilterTileMode_MIRROR_getInstance() : tmp0_subject === Companion_getInstance_27().u38_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).z3l = drawRect$default;
  protoOf(CanvasDrawScope).a3m = drawRect$default_0;
  protoOf(CanvasDrawScope).c3m = drawImage$default;
  protoOf(CanvasDrawScope).d3m = drawRoundRect$default;
  protoOf(CanvasDrawScope).f3m = drawCircle$default;
  protoOf(CanvasDrawScope).g3m = drawPath$default;
  protoOf(CanvasDrawScope).h3m = drawPath$default_0;
  protoOf(CanvasDrawScope).i3m = get_center_0;
  protoOf(CanvasDrawScope).z2j = get_size;
  protoOf(CanvasDrawScope).p2l = toPx;
  protoOf(CanvasDrawScope).r2l = toPx_0;
  protoOf(CanvasDrawScope).q2l = roundToPx;
  protoOf(CanvasDrawScope).v2l = toDp;
  protoOf(CanvasDrawScope).w2l = toDp_0;
  protoOf(CanvasDrawScope).x2l = toSize;
  protoOf(asDrawTransform$1).l3m = clipPath$default_0;
  protoOf(EmptyCanvas).o3a = clipPath$default;
  protoOf(EmptyCanvas).i3a = clipRect;
  protoOf(EmptyCanvas).k3a = clipRect$default;
  protoOf(EmptyCanvas).p3a = drawRect;
  protoOf(SkiaBackedCanvas).o3a = clipPath$default;
  protoOf(SkiaBackedCanvas).i3a = clipRect;
  protoOf(SkiaBackedCanvas).k3a = clipRect$default;
  protoOf(SkiaBackedCanvas).p3a = drawRect;
  protoOf(SkiaBackedPath).m3g = addPath$default;
  //endregion
  //region block: init
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = Painter;
  _.$_$.e = PathBuilder;
  _.$_$.f = PathParser;
  _.$_$.g = BlendMode;
  _.$_$.h = Canvas_0;
  _.$_$.i = Color_1;
  _.$_$.j = Color;
  _.$_$.k = get_DefaultAlpha;
  _.$_$.l = ImageBitmapConfig;
  _.$_$.m = ImageBitmap;
  _.$_$.n = Matrix;
  _.$_$.o = Generic;
  _.$_$.p = Rectangle;
  _.$_$.q = Rounded;
  _.$_$.r = Paint;
  _.$_$.s = PathFillType;
  _.$_$.t = PathMeasure;
  _.$_$.u = Path_0;
  _.$_$.v = get_RectangleShape;
  _.$_$.w = ShaderBrush;
  _.$_$.x = SolidColor;
  _.$_$.y = StrokeCap;
  _.$_$.z = StrokeJoin;
  _.$_$.a1 = set_alphaMultiplier;
  _.$_$.b1 = asComposeCanvas;
  _.$_$.c1 = asComposePaint;
  _.$_$.d1 = asSkiaPath;
  _.$_$.e1 = compositeOver;
  _.$_$.f1 = drawOutline;
  _.$_$.g1 = drawOutline_0;
  _.$_$.h1 = lerp_0;
  _.$_$.i1 = luminance;
  _.$_$.j1 = get_nativeCanvas;
  _.$_$.k1 = toArgb;
  _.$_$.l1 = toComposeRect;
  _.$_$.m1 = toSkiaRRect;
  _.$_$.n1 = toSkiaRect;
  _.$_$.o1 = drawCircle$default;
  _.$_$.p1 = drawImage$default;
  _.$_$.q1 = drawPath$default_0;
  _.$_$.r1 = drawPath$default;
  _.$_$.s1 = drawRect$default;
  _.$_$.t1 = drawRect$default_0;
  _.$_$.u1 = drawRoundRect$default;
  _.$_$.v1 = BlendMode__hashCode_impl_93ceri;
  _.$_$.w1 = _Color___init__impl__r6cqi2;
  _.$_$.x1 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.y1 = Color__hashCode_impl_vjyivj;
  _.$_$.z1 = _Color___get_value__impl__1pls5m;
  _.$_$.a2 = _Matrix___init__impl__q3kp4w;
  _.$_$.b2 = Matrix__invert_impl_9xyo46;
  _.$_$.c2 = Matrix__map_impl_7meu7m;
  _.$_$.d2 = Matrix__map_impl_7meu7m_0;
  _.$_$.e2 = Matrix__reset_impl_4l49i7;
  _.$_$.f2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.g2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.h2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.i2 = Matrix__scale_impl_6w89a4;
  _.$_$.j2 = Matrix__setFrom_impl_5fylsu;
  _.$_$.k2 = Matrix__timesAssign_impl_oas521;
  _.$_$.l2 = _Matrix___get_values__impl__fblr7b;
  _.$_$.m2 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.n2 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.o2 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.p2 = Color__copy$default_impl_ectz3s;
  _.$_$.q2 = Matrix__scale$default_impl_snaws9;
  _.$_$.r2 = Matrix__translate$default_impl_10t8ql;
  _.$_$.s2 = Companion_getInstance_36;
  _.$_$.t2 = Fill_getInstance;
  _.$_$.u2 = Companion_getInstance_12;
  _.$_$.v2 = Companion_getInstance_13;
  _.$_$.w2 = Companion_getInstance_14;
  _.$_$.x2 = Companion_getInstance_15;
  _.$_$.y2 = Companion_getInstance_16;
  _.$_$.z2 = Companion_getInstance_19;
  _.$_$.a3 = Companion_getInstance_21;
  _.$_$.b3 = Companion_getInstance_22;
  _.$_$.c3 = Companion_getInstance_23;
  _.$_$.d3 = Companion_getInstance_24;
  _.$_$.e3 = Companion_getInstance_25;
  _.$_$.f3 = Companion_getInstance_26;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-graphics.js.map
