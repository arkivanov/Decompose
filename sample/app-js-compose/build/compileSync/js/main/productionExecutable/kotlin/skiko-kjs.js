(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.ya;
  var equals = kotlin_kotlin.$_$.u7;
  var hashCode = kotlin_kotlin.$_$.c8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var toBits = kotlin_kotlin.$_$.fc;
  var compareTo = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isCharSequence = kotlin_kotlin.$_$.g8;
  var trim = kotlin_kotlin.$_$.sa;
  var toString = kotlin_kotlin.$_$.v8;
  var split = kotlin_kotlin.$_$.na;
  var getOrNull = kotlin_kotlin.$_$.s4;
  var toIntOrNull = kotlin_kotlin.$_$.oa;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h2;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var splitToSequence = kotlin_kotlin.$_$.ma;
  var mapNotNull = kotlin_kotlin.$_$.y9;
  var toList = kotlin_kotlin.$_$.ca;
  var copyToArray = kotlin_kotlin.$_$.d4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.i2;
  var uintCompare = kotlin_kotlin.$_$.kc;
  var Companion_getInstance = kotlin_kotlin.$_$.v2;
  var UInt = kotlin_kotlin.$_$.lb;
  var isNaN_0 = kotlin_kotlin.$_$.ub;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var charSequenceGet = kotlin_kotlin.$_$.o7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.b2;
  var numberToChar = kotlin_kotlin.$_$.m8;
  var charArrayOf = kotlin_kotlin.$_$.n7;
  var concatToString = kotlin_kotlin.$_$.ea;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var decodeToString = kotlin_kotlin.$_$.fa;
  var contentEquals = kotlin_kotlin.$_$.x3;
  var contentHashCode = kotlin_kotlin.$_$.z3;
  var contentHashCode_0 = kotlin_kotlin.$_$.y3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var NotImplementedError = kotlin_kotlin.$_$.fb;
  var last = kotlin_kotlin.$_$.g5;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var joinToString = kotlin_kotlin.$_$.y4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.f1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var until = kotlin_kotlin.$_$.q9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toBits_0 = kotlin_kotlin.$_$.gc;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var Long = kotlin_kotlin.$_$.db;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var listOf = kotlin_kotlin.$_$.i5;
  var RuntimeException = kotlin_kotlin.$_$.ib;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.a1;
  var charSequenceLength = kotlin_kotlin.$_$.p7;
  var lazy = kotlin_kotlin.$_$.xb;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var arrayIterator = kotlin_kotlin.$_$.k7;
  var toIntArray = kotlin_kotlin.$_$.i6;
  var plus = kotlin_kotlin.$_$.zb;
  var toString_0 = kotlin_kotlin.$_$.qa;
  var numberToLong = kotlin_kotlin.$_$.o8;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var setOf = kotlin_kotlin.$_$.a6;
  var defineProp = kotlin_kotlin.$_$.t7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder, '_FinalizerHolder', objectMeta);
  setMetadataFor(Native, 'Native', classMeta);
  setMetadataFor(Managed, 'Managed', classMeta, Native);
  setMetadataFor(BackendRenderTarget, 'BackendRenderTarget', classMeta, Managed);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_0, '_FinalizerHolder', objectMeta);
  function get_width() {
    return this.p2n().v2n_1;
  }
  function get_height() {
    return this.p2n().w2n_1;
  }
  function get_colorType() {
    return this.p2n().u2n_1.x2n_1;
  }
  function get_colorSpace() {
    return this.p2n().u2n_1.z2n_1;
  }
  function get_isOpaque() {
    return this.p2n().u2n_1.e2o();
  }
  setMetadataFor(IHasImageInfo, 'IHasImageInfo', interfaceMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta, Managed, [Managed, IHasImageInfo]);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_1, '_FinalizerHolder', objectMeta);
  setMetadataFor(Canvas, 'Canvas', classMeta, Managed);
  setMetadataFor(ClipMode, 'ClipMode', classMeta, Enum);
  setMetadataFor(ColorAlphaType, 'ColorAlphaType', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RefCnt, 'RefCnt', classMeta, Managed);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta, RefCnt);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorInfo, 'ColorInfo', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_2, '_FinalizerHolder', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta, Managed);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorType, 'ColorType', classMeta, Enum);
  setMetadataFor(CubicResampler, 'CubicResampler', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_3, '_FinalizerHolder', objectMeta);
  setMetadataFor(Data, 'Data', classMeta, Managed);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(DirectContext, 'DirectContext', classMeta, RefCnt);
  setMetadataFor(FilterMipmap, 'FilterMipmap', classMeta);
  setMetadataFor(FilterMode, 'FilterMode', classMeta, Enum);
  setMetadataFor(FilterTileMode, 'FilterTileMode', classMeta, Enum);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_4, '_FinalizerHolder', objectMeta);
  setMetadataFor(Font, 'Font', classMeta, Managed);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontFeature, 'FontFeature', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(FontMgr, 'FontMgr', classMeta, RefCnt);
  setMetadataFor(FontSlant, 'FontSlant', classMeta, Enum);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(GradientStyle, 'GradientStyle', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Image, 'Image', classMeta, RefCnt, [RefCnt, IHasImageInfo]);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(ImageInfo, 'ImageInfo', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_5, '_FinalizerHolder', objectMeta);
  setMetadataFor(ManagedString, 'ManagedString', classMeta, Managed);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Matrix33, 'Matrix33', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Matrix44, 'Matrix44', classMeta);
  setMetadataFor(MipmapMode, 'MipmapMode', classMeta, Enum);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_6, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paint, 'Paint', classMeta, Managed);
  setMetadataFor(PaintMode, 'PaintMode', classMeta, Enum);
  setMetadataFor(PaintStrokeCap, 'PaintStrokeCap', classMeta, Enum);
  setMetadataFor(PaintStrokeJoin, 'PaintStrokeJoin', classMeta, Enum);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_7, '_FinalizerHolder', objectMeta);
  setMetadataFor(Path, 'Path', classMeta, Managed);
  setMetadataFor(PathDirection, 'PathDirection', classMeta, Enum);
  setMetadataFor(PathFillMode, 'PathFillMode', classMeta, Enum);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_8, '_FinalizerHolder', objectMeta);
  setMetadataFor(PathMeasure, 'PathMeasure', classMeta, Managed);
  setMetadataFor(PathOp, 'PathOp', classMeta, Enum);
  setMetadataFor(PathSegment, 'PathSegment', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(PathSegmentIterator, 'PathSegmentIterator', classMeta, Managed);
  setMetadataFor(PathVerb, 'PathVerb', classMeta, Enum);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Picture, 'Picture', classMeta, RefCnt);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_9, '_FinalizerHolder', objectMeta);
  setMetadataFor(PictureRecorder, 'PictureRecorder', classMeta, Managed);
  setMetadataFor(PixelGeometry, 'PixelGeometry', classMeta, Enum);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Point3, 'Point3', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(RRect, 'RRect', classMeta, Rect);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(Shader, 'Shader', classMeta, RefCnt);
  setMetadataFor(ShadowUtils, 'ShadowUtils', objectMeta);
  setMetadataFor(ArrayDecoder, 'ArrayDecoder', classMeta);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(Surface, 'Surface', classMeta, RefCnt);
  setMetadataFor(SurfaceColorFormat, 'SurfaceColorFormat', classMeta, Enum);
  setMetadataFor(SurfaceOrigin, 'SurfaceOrigin', classMeta, Enum);
  setMetadataFor(SurfaceProps, 'SurfaceProps', classMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(Typeface, 'Typeface', classMeta, RefCnt);
  setMetadataFor(Affinity, 'Affinity', classMeta, Enum);
  setMetadataFor(Alignment, 'Alignment', classMeta, Enum);
  setMetadataFor(BaselineMode, 'BaselineMode', classMeta, Enum);
  setMetadataFor(DecorationLineStyle, 'DecorationLineStyle', classMeta, Enum);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(DecorationStyle, 'DecorationStyle', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(FontCollection, 'FontCollection', classMeta, RefCnt);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(LineMetrics, 'LineMetrics', classMeta);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_10, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paragraph, 'Paragraph', classMeta, Managed);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_11, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphBuilder, 'ParagraphBuilder', classMeta, Managed);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_12, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphStyle, 'ParagraphStyle', classMeta, Managed);
  setMetadataFor(PlaceholderAlignment, 'PlaceholderAlignment', classMeta, Enum);
  setMetadataFor(PlaceholderStyle, 'PlaceholderStyle', classMeta);
  setMetadataFor(PositionWithAffinity, 'PositionWithAffinity', classMeta);
  setMetadataFor(RectHeightMode, 'RectHeightMode', classMeta, Enum);
  setMetadataFor(RectWidthMode, 'RectWidthMode', classMeta, Enum);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_13, '_FinalizerHolder', objectMeta);
  setMetadataFor(StrutStyle, 'StrutStyle', classMeta, Managed);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(TextBox, 'TextBox', classMeta);
  setMetadataFor(TextIndent, 'TextIndent', classMeta);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_14, '_FinalizerHolder', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta, Managed);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(TypefaceFontProvider, 'TypefaceFontProvider', classMeta, FontMgr);
  setMetadataFor(SkikoKeyboardEvent, 'SkikoKeyboardEvent', classMeta);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(SkikoInputModifiers, 'SkikoInputModifiers', classMeta);
  setMetadataFor(SkikoKeyboardEventKind, 'SkikoKeyboardEventKind', classMeta, Enum);
  setMetadataFor(SkikoInputEvent, 'SkikoInputEvent', classMeta);
  setMetadataFor(SkikoPointerEvent, 'SkikoPointerEvent', classMeta);
  setMetadataFor(SkikoPointerEventKind, 'SkikoPointerEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointer, 'SkikoPointer', classMeta);
  setMetadataFor(SkikoPointerDevice, 'SkikoPointerDevice', classMeta, Enum);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(SkikoMouseButtons, 'SkikoMouseButtons', classMeta);
  setMetadataFor(GraphicsApi, 'GraphicsApi', classMeta, Enum);
  setMetadataFor(ClipboardManager, 'ClipboardManager', classMeta);
  setMetadataFor(URIManager, 'URIManager', classMeta);
  setMetadataFor(RenderException, 'RenderException', classMeta, RuntimeException);
  function onKeyboardEvent(event) {
    return Unit_getInstance();
  }
  function onPointerEvent(event) {
    return Unit_getInstance();
  }
  function get_input() {
    return Empty_getInstance();
  }
  setMetadataFor(SkikoView, 'SkikoView', interfaceMeta);
  setMetadataFor(Pattern, 'Pattern', classMeta);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(FinalizationThunk, 'FinalizationThunk', classMeta);
  setMetadataFor(InteropScope, 'InteropScope', classMeta);
  setMetadataFor(Companion_48, 'Companion', objectMeta);
  setMetadataFor(NativePointerArray, 'NativePointerArray', classMeta);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_15, '_FinalizerHolder', objectMeta);
  setMetadataFor(Stats, 'Stats', objectMeta);
  setMetadataFor(CanvasRenderer, 'CanvasRenderer', classMeta);
  setMetadataFor(SkiaLayer$attachTo$1, VOID, classMeta, CanvasRenderer);
  setMetadataFor(SkiaLayer, 'SkiaLayer', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor(SkikoKey, 'SkikoKey', classMeta, Enum);
  setMetadataFor(createWebGLContext$contextAttributes$1, VOID, classMeta);
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion).e2n = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_getInstance().f2n();
    return new BackendRenderTarget(org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.g2n_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance().g2n_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.l2n_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().l2n_1);
    this.o2n_1 = null;
  }
  protoOf(Bitmap).p2n = function () {
    var tmp;
    try {
      if (this.o2n_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_19();
        var tmp_2 = this.j2n_1;
        tmp_0.o2n_1 = tmp_1.r2n(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.o2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).s2n = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).t2n = function (info, rowBytes) {
    var tmp;
    try {
      this.o2n_1 = null;
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.j2n_1, info.v2n_1, info.w2n_1, info.u2n_1.x2n_1.k6_1, info.u2n_1.y2n_1.k6_1, getPtr(info.u2n_1.z2n_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.u2n_1.z2n_1);
    }
    return tmp;
  };
  protoOf(Bitmap).a2o = function (imageInfo) {
    return this.t2n(imageInfo, imageInfo.b2o());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_getInstance();
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.j2n_1, surfaceProps.h2o(), surfaceProps.g2o_1.k6_1), true, bitmap);
    Stats_getInstance().f2n();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.i2o_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().i2o_1, managed);
    this.l2o_1 = _owner;
  }
  protoOf(Canvas).m2o = function (r, paint) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.j2n_1, r.n2o_1, r.o2o_1, r.p2o_1, r.q2o_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).r2o = function (x, y, radius, paint) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.j2n_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).s2o = function (r, paint) {
    Stats_getInstance().f2n();
    try {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.j2n_1, r.n2o_1, r.o2o_1, r.p2o_1, r.q2o_1, tmp0__anonymous__q1qw7t.a2p(r.x2o_1), r.x2o_1.length, getPtr(paint));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).b2p = function (path, paint) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.j2n_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).c2p = function (image, src, dst, samplingMode, paint, strict) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.j2n_1, getPtr(image), src.n2o_1, src.o2o_1, src.p2o_1, src.q2o_1, dst.n2o_1, dst.o2o_1, dst.p2o_1, dst.q2o_1, samplingMode.d2p(), samplingMode.e2p(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).f2p = function (picture, matrix, paint) {
    Stats_getInstance().f2n();
    try {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp = this.j2n_1;
          var tmp_0 = getPtr(picture);
          var tmp0_safe_receiver = matrix;
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, tmp0__anonymous__q1qw7t.a2p(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2p_1), getPtr(paint));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).d2a = function (color) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.j2n_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).h2p = function () {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.j2n_1);
    return this;
  };
  protoOf(Canvas).i2p = function (r, mode, antiAlias) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Canvas__1nClipRect(this.j2n_1, r.n2o_1, r.o2o_1, r.p2o_1, r.q2o_1, mode.k6_1, antiAlias);
    return this;
  };
  protoOf(Canvas).j2p = function (r, mode, antiAlias) {
    Stats_getInstance().f2n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nClipRRect(this.j2n_1, r.n2o_1, r.o2o_1, r.p2o_1, r.q2o_1, tmp0__anonymous__q1qw7t.a2p(r.x2o_1), r.x2o_1.length, mode.k6_1, antiAlias);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).k2p = function (p, mode, antiAlias) {
    Stats_getInstance().f2n();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.j2n_1, getPtr(p), mode.k6_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).b2k = function (dx, dy) {
    return this.n2p(Companion_getInstance_21().m2p(dx, dy));
  };
  protoOf(Canvas).o2p = function (sx, sy) {
    return this.n2p(Companion_getInstance_21().p2p(sx, sy));
  };
  protoOf(Canvas).n2p = function (matrix) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().f2n();
        org_jetbrains_skia_Canvas__1nConcat(this.j2n_1, tmp0__anonymous__q1qw7t.a2p(matrix.g2p_1));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).q2p = function (matrix) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().f2n();
        org_jetbrains_skia_Canvas__1nConcat44(this.j2n_1, tmp0__anonymous__q1qw7t.a2p(matrix.r2p_1));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).dh = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).s2p = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.j2n_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).t2p = function () {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Canvas__1nRestore(this.j2n_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_getInstance();
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_getInstance();
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_getInstance_48().d2n();
    this.u2p_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.v2p_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_2).w2p = function (color, mode) {
    Stats_getInstance().f2n();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.k6_1));
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.a2q_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.x2n_1 = colorType;
    this.y2n_1 = alphaType;
    this.z2n_1 = colorSpace;
  }
  protoOf(ColorInfo).e2o = function () {
    return this.y2n_1.equals(ColorAlphaType_OPAQUE_getInstance()) ? true : this.x2n_1.d2q();
  };
  protoOf(ColorInfo).e2q = function () {
    return this.x2n_1.e2q();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.x2n_1.equals(other.x2n_1))
      return false;
    if (!this.y2n_1.equals(other.y2n_1))
      return false;
    return equals(this.z2n_1, other.z2n_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.x2n_1.hashCode() | 0;
    result = imul(result, prime) + this.y2n_1.hashCode() | 0;
    var tmp = imul(result, prime);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.z2n_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.x2n_1 + ', _alphaType=' + this.y2n_1 + ', _colorSpace=' + this.z2n_1 + ')';
  };
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_getInstance_48().d2n();
    this.f2q_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.g2q_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.h2q_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().i2q_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().i2q_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.i2q_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_5() {
    Companion_instance_5 = this;
    this.j2q_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_getInstance();
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 11);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 12);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 13);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 14);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 15);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 16);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 17);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 18);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 19);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 20);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).e2q = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 1;
        break;
      case 12:
        tmp = 8;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 16;
        break;
      case 15:
        tmp = 2;
        break;
      case 18:
        tmp = 2;
        break;
      case 19:
        tmp = 4;
        break;
      case 16:
        tmp = 2;
        break;
      case 17:
        tmp = 4;
        break;
      case 20:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).d2q = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.k6_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.k2q_1 = b;
    this.l2q_1 = c;
  }
  protoOf(CubicResampler).d2p = function () {
    return toBits(this.k2q_1) | -2147483648;
  };
  protoOf(CubicResampler).e2p = function () {
    return toBits(this.l2q_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.k2q_1, other.k2q_1) === 0))
      return false;
    return compareTo(this.l2q_1, other.l2q_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.k2q_1) | 0;
    result = imul(result, PRIME) + toBits(this.l2q_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.k2q_1 + ', _C=' + this.l2q_1 + ')';
  };
  function Companion_6() {
    Companion_instance_6 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_6).m2q = function (bytes, offset, length) {
    Stats_getInstance().f2n();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$0 = org_jetbrains_skia_Data__1nMakeFromBytes(tmp0__anonymous__q1qw7t.n2q(bytes), offset, length);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_6).o2q = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.m2q(bytes, offset, length) : $super.m2q.call(this, bytes, offset, length);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.p2q_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().p2q_1);
    this.s2q_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.k2n(otherData);
  };
  protoOf(Data).k2n = function (other) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Data__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_7).t2q = function () {
    Stats_getInstance().f2n();
    return new DirectContext(org_jetbrains_skia_DirectContext__1nMakeGL());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).w2q = function () {
    Stats_getInstance().f2n();
    org_jetbrains_skia_DirectContext__1nFlush(this.j2n_1);
    return this;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.x2q_1 = filterMode;
    this.y2q_1 = mipmapMode;
  }
  protoOf(FilterMipmap).d2p = function () {
    return this.x2q_1.k6_1;
  };
  protoOf(FilterMipmap).e2p = function () {
    return this.y2q_1.k6_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.x2q_1.equals(other.x2q_1))
      return false;
    return this.y2q_1.equals(other.y2q_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x2q_1.hashCode() | 0;
    result = imul(result, PRIME) + this.y2q_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.x2q_1 + ', _mipmapMode=' + this.y2q_1 + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_getInstance();
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_getInstance();
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().z2q_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_getInstance().f2n();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$(typeface, size) {
    return Font_init_$Init$_0(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.z2q_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.j2n_1, it);
      return Unit_getInstance();
    };
  }
  protoOf(Font).k2n = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).c2r = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.g(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    var tmp = Companion_getInstance_16().d2r(feature);
    Companion_getInstance_10();
    var tmp_0 = _UInt___init__impl__l7qpdl(0);
    Companion_getInstance_10();
    FontFeature.call($this, tmp, value, tmp_0, _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.e2r_1 = _UInt___init__impl__l7qpdl(0);
    this.f2r_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(0), null);
    tmp.g2r_1 = tmp$ret$0;
    this.h2r_1 = compilePattern('\\s+');
    this.i2r_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.j2r_1 = 1;
    this.k2r_1 = 2;
    this.l2r_1 = 3;
    this.m2r_1 = 4;
    this.n2r_1 = 5;
  }
  protoOf(Companion_9).o2r = function (str) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var tmp0_toTypedArray = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$0;
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.p2r_1 = _tag;
    this.q2r_1 = value;
    this.r2r_1 = start;
    this.s2r_1 = end;
  }
  protoOf(FontFeature).t2r = function () {
    return Companion_getInstance_16().u2r(this.p2r_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.compareTo' call
    var tmp0_compareTo = this.r2r_1;
    tmp$ret$0 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0)));
    if (tmp$ret$0 > 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp1_compareTo = this.s2r_1;
      Companion_getInstance();
      var tmp2_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp$ret$1 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp1_compareTo), _UInt___get_data__impl__f0vqqw(tmp2_compareTo));
      tmp = tmp$ret$1 < 0;
    }
    if (tmp) {
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp3_compareTo = this.r2r_1;
      tmp$ret$2 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp3_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0)));
      if (tmp$ret$2 > 0) {
        tmp_0 = new UInt(this.r2r_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      var tmp$ret$3;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp4_compareTo = this.s2r_1;
      Companion_getInstance();
      var tmp5_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp$ret$3 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp4_compareTo), _UInt___get_data__impl__f0vqqw(tmp5_compareTo));
      if (tmp$ret$3 < 0) {
        tmp_2 = new UInt(this.s2r_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.q2r_1 === 0)
      valuePrefix = '-';
    else if (this.q2r_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.q2r_1;
    return 'FontFeature(' + valuePrefix + this.p2r_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.t2r() === other.t2r()))
      return false;
    if (!(this.q2r_1 === other.q2r_1))
      return false;
    if (!(this.r2r_1 === other.r2r_1))
      return false;
    return this.s2r_1 === other.s2r_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.p2r_1 | 0;
    result = imul(result, PRIME) + this.q2r_1 | 0;
    var tmp = imul(result, PRIME);
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.xor' call
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = this.r2r_1;
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> 16 | 0);
    var tmp1_xor = tmp$ret$0;
    var tmp2_xor = this.r2r_1;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_xor) ^ _UInt___get_data__impl__f0vqqw(tmp2_xor));
    var tmp3_toInt = tmp$ret$1;
    tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp3_toInt);
    result = tmp + tmp$ret$2 | 0;
    var tmp_0 = imul(result, PRIME);
    var tmp$ret$5;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.xor' call
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.shr' call
    var tmp4_shr = this.s2r_1;
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> 16 | 0);
    var tmp5_xor = tmp$ret$3;
    var tmp6_xor = this.s2r_1;
    tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_xor) ^ _UInt___get_data__impl__f0vqqw(tmp6_xor));
    var tmp7_toInt = tmp$ret$4;
    tmp$ret$5 = _UInt___get_data__impl__f0vqqw(tmp7_toInt);
    result = tmp_0 + tmp$ret$5 | 0;
    return result;
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    Companion_getInstance_11();
    this.v2r_1 = top;
    this.w2r_1 = ascent;
    this.x2r_1 = descent;
    this.y2r_1 = bottom;
    this.z2r_1 = leading;
    this.a2s_1 = avgCharWidth;
    this.b2s_1 = maxCharWidth;
    this.c2s_1 = xMin;
    this.d2s_1 = xMax;
    this.e2s_1 = xHeight;
    this.f2s_1 = capHeight;
    this.g2s_1 = underlineThickness;
    this.h2s_1 = underlinePosition;
    this.i2s_1 = strikeoutThickness;
    this.j2s_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).y2j = function () {
    return this.x2r_1 - this.w2r_1;
  };
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.v2r_1, other.v2r_1) === 0))
      return false;
    if (!(compareTo(this.w2r_1, other.w2r_1) === 0))
      return false;
    if (!(compareTo(this.x2r_1, other.x2r_1) === 0))
      return false;
    if (!(compareTo(this.y2r_1, other.y2r_1) === 0))
      return false;
    if (!(compareTo(this.z2r_1, other.z2r_1) === 0))
      return false;
    if (!(compareTo(this.a2s_1, other.a2s_1) === 0))
      return false;
    if (!(compareTo(this.b2s_1, other.b2s_1) === 0))
      return false;
    if (!(compareTo(this.c2s_1, other.c2s_1) === 0))
      return false;
    if (!(compareTo(this.d2s_1, other.d2s_1) === 0))
      return false;
    if (!(compareTo(this.e2s_1, other.e2s_1) === 0))
      return false;
    if (!(compareTo(this.f2s_1, other.f2s_1) === 0))
      return false;
    if (this.g2s_1 == null ? !(other.g2s_1 == null) : !(this.g2s_1 == other.g2s_1))
      return false;
    if (this.h2s_1 == null ? !(other.h2s_1 == null) : !(this.h2s_1 == other.h2s_1))
      return false;
    if (this.i2s_1 == null ? !(other.i2s_1 == null) : !(this.i2s_1 == other.i2s_1))
      return false;
    return !(this.j2s_1 == null ? !(other.j2s_1 == null) : !(this.j2s_1 == other.j2s_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.v2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.w2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.x2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.y2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.z2r_1) | 0;
    result = imul(result, PRIME) + toBits(this.a2s_1) | 0;
    result = imul(result, PRIME) + toBits(this.b2s_1) | 0;
    result = imul(result, PRIME) + toBits(this.c2s_1) | 0;
    result = imul(result, PRIME) + toBits(this.d2s_1) | 0;
    result = imul(result, PRIME) + toBits(this.e2s_1) | 0;
    result = imul(result, PRIME) + toBits(this.f2s_1) | 0;
    var tmp = imul(result, PRIME);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.g2s_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    var tmp_0 = imul(result, PRIME);
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.h2s_1;
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    result = tmp_0 + tmp$ret$1 | 0;
    var tmp_1 = imul(result, PRIME);
    var tmp$ret$2;
    // Inline function 'kotlin.hashCode' call
    var tmp2_hashCode = this.i2s_1;
    var tmp0_safe_receiver_1 = tmp2_hashCode;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    result = tmp_1 + tmp$ret$2 | 0;
    var tmp_2 = imul(result, PRIME);
    var tmp$ret$3;
    // Inline function 'kotlin.hashCode' call
    var tmp3_hashCode = this.j2s_1;
    var tmp0_safe_receiver_2 = tmp3_hashCode;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    result = tmp_2 + tmp$ret$3 | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.v2r_1 + ', _ascent=' + this.w2r_1 + ', _descent=' + this.x2r_1 + ', _bottom=' + this.y2r_1 + ', _leading=' + this.z2r_1 + ', _avgCharWidth=' + this.a2s_1 + ', _maxCharWidth=' + this.b2s_1 + ', _xMin=' + this.c2s_1 + ', _xMax=' + this.d2s_1 + ', _xHeight=' + this.e2s_1 + ', _capHeight=' + this.f2s_1 + ', _underlineThickness=' + this.g2s_1 + ', _underlinePosition=' + this.h2s_1 + ', _strikeoutThickness=' + this.i2s_1 + ', _strikeoutPosition=' + this.j2s_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Float32Array(15);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.k2s(tmp1_withResult);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.l2s(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return fromRawData(_this__u8e3s4, tmp$ret$2);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    var tmp$ret$0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp0_asNumberOrNull = rawData[11];
    tmp$ret$0 = isNaN_0(tmp0_asNumberOrNull) ? null : tmp0_asNumberOrNull;
    var tmp_10 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp1_asNumberOrNull = rawData[12];
    tmp$ret$1 = isNaN_0(tmp1_asNumberOrNull) ? null : tmp1_asNumberOrNull;
    var tmp_11 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp2_asNumberOrNull = rawData[13];
    tmp$ret$2 = isNaN_0(tmp2_asNumberOrNull) ? null : tmp2_asNumberOrNull;
    var tmp_12 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp3_asNumberOrNull = rawData[14];
    tmp$ret$3 = isNaN_0(tmp3_asNumberOrNull) ? null : tmp3_asNumberOrNull;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    Companion_getInstance_48().d2n();
    this.m2s_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  function FontMgr() {
    Companion_getInstance_12();
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_getInstance();
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.n2s_1 = weight & 65535 | (width & 255) << 16 | slant.k6_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.n2s_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp.o2s_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_0.p2s_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_1.q2s_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_2.r2s_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  protoOf(FontStyle).s2s = function () {
    return this.n2s_1 & 65535;
  };
  protoOf(FontStyle).t2s = function (weight) {
    return FontStyle_init_$Create$(weight, this.x2j(), this.u2s());
  };
  protoOf(FontStyle).x2j = function () {
    return this.n2s_1 >> 16 & 255;
  };
  protoOf(FontStyle).u2s = function () {
    return values_2()[this.n2s_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.s2s() + ', width=' + this.x2j() + ', slant=' + this.u2s() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.n2s_1 === other.n2s_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.n2s_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.v2s_1 = 0;
    this.w2s_1 = 100;
    this.x2s_1 = 200;
    this.y2s_1 = 300;
    this.z2s_1 = 400;
    this.a2t_1 = 500;
    this.b2t_1 = 600;
    this.c2t_1 = 700;
    this.d2t_1 = 800;
    this.e2t_1 = 900;
    this.f2t_1 = 1000;
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.g2t_1 = 1;
    this.h2t_1 = 2;
    this.i2t_1 = 3;
    this.j2t_1 = 4;
    this.k2t_1 = 5;
    this.l2t_1 = 6;
    this.m2t_1 = 7;
    this.n2t_1 = 8;
    this.o2t_1 = 9;
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).d2r = function (name) {
    // Inline function 'kotlin.require' call
    var tmp0_require = name.length === 4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      tmp$ret$0 = "Name must be exactly 4 symbols, got: '" + name + "'";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    var tmp1__get_code__adl84j = charSequenceGet(name, 0);
    tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
    var tmp = (tmp$ret$1 & 255) << 24;
    var tmp$ret$2;
    // Inline function 'kotlin.code' call
    var tmp2__get_code__cifwzm = charSequenceGet(name, 1);
    tmp$ret$2 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
    var tmp_0 = tmp | (tmp$ret$2 & 255) << 16;
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    var tmp3__get_code__enalup = charSequenceGet(name, 2);
    tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
    var tmp_1 = tmp_0 | (tmp$ret$3 & 255) << 8;
    var tmp$ret$4;
    // Inline function 'kotlin.code' call
    var tmp4__get_code__gs5aps = charSequenceGet(name, 3);
    tmp$ret$4 = Char__toInt_impl_vasixd(tmp4__get_code__gs5aps);
    return tmp_1 | tmp$ret$4 & 255;
  };
  protoOf(Companion_15).u2r = function (tag) {
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    var tmp0_charArrayOf = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    tmp$ret$0 = tmp0_charArrayOf;
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.p2t_1 = 1;
    this.q2t_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_17();
    this.r2t_1 = tileMode;
    this.s2t_1 = isPremul;
    this.t2t_1 = localMatrix;
  }
  protoOf(GradientStyle).h2o = function () {
    return 0 | (this.s2t_1 ? Companion_getInstance_17().p2t_1 : 0);
  };
  protoOf(GradientStyle).u2t = function () {
    var tmp0_safe_receiver = this.t2t_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2p_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.s2t_1 === other.s2t_1))
      return false;
    if (!this.r2t_1.equals(other.r2t_1))
      return false;
    return !(this.t2t_1 == null ? !(other.t2t_1 == null) : !equals(this.t2t_1, other.t2t_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.s2t_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.r2t_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.t2t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.r2t_1 + ', _premul=' + this.s2t_1 + ', _localMatrix=' + this.t2t_1 + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_17() {
    Companion_instance_17 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_17).v2t = function (bitmap) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_getInstance_50().w2t())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap);
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.z2t_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_19();
        var tmp_2 = this$0.j2n_1;
        tmp_0.z2t_1 = tmp_1.r2n(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image(ptr) {
    Companion_getInstance_18();
    RefCnt_init_$Init$(ptr, this);
    this.z2t_1 = null;
  }
  protoOf(Image).p2n = function () {
    var tmp;
    try {
      if (this.z2t_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.z2t_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_getInstance_50().w2t() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.q2n_1 = new ImageInfo(Companion_getInstance_4().a2q_1, 0, 0);
  }
  protoOf(Companion_18).r2n = function (_ptr, _nGetImageInfo) {
    Stats_getInstance().f2n();
    var colorSpacePtr = null;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp$ret$5;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Int32Array(4);
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$3;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.a2u(tmp1_withResult);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var tmp1_withResult_0 = new NativePointerArray(1);
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0_0 + 1 | 0);
            var tmp$ret$0;
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var handle_0 = tmp0__anonymous__q1qw7t_0.b2u(tmp1_withResult_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            tmp0__anonymous__q1qw7t_0.c2u(handle_0, tmp1_withResult_0);
            tmp$ret$0 = tmp1_withResult_0;
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
            }
          }
        }
        tmp$ret$2 = tmp$ret$1;
        colorSpacePtr = tmp$ret$2.g(0);
        tmp0__anonymous__q1qw7t.e2u(handle, tmp1_withResult);
        tmp$ret$3 = tmp1_withResult;
        tmp$ret$4 = tmp$ret$3;
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    tmp$ret$5 = tmp$ret$4;
    var tmp2_let = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    tmp$ret$6 = ImageInfo_init_$Create$(tmp2_let[0], tmp2_let[1], tmp2_let[2], tmp2_let[3], ensureNotNull(colorSpacePtr));
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_19();
    this.u2n_1 = colorInfo;
    this.v2n_1 = width;
    this.w2n_1 = height;
  }
  protoOf(ImageInfo).b2o = function () {
    return imul(this.v2n_1, this.e2q());
  };
  protoOf(ImageInfo).e2q = function () {
    return this.u2n_1.e2q();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.v2n_1 === other.v2n_1))
      return false;
    if (!(this.w2n_1 === other.w2n_1))
      return false;
    return this.u2n_1.equals(other.u2n_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.v2n_1 | 0;
    result = imul(result, PRIME) + this.w2n_1 | 0;
    result = imul(result, PRIME) + this.u2n_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.u2n_1 + ', _width=' + this.v2n_1 + ', _height=' + this.w2n_1 + ')';
  };
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$0 = org_jetbrains_skia_ManagedString__1nMake(tmp0__anonymous__q1qw7t.f2u(s));
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_getInstance().f2n();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.g2u_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_20();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().g2u_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.j2n_1);
      var tmp$ret$2;
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var tmp1_withResult = new Int8Array(size);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var handle = tmp0__anonymous__q1qw7t.h2u(tmp1_withResult);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.j2n_1, handle, size);
          tmp0__anonymous__q1qw7t.i2u(handle, tmp1_withResult);
          tmp$ret$0 = tmp1_withResult;
          tmp$ret$1 = tmp$ret$0;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp = decodeToString(tmp$ret$2);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).l2u = function (s) {
    Stats_getInstance().f2n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_ManagedString__1nAppend(this.j2n_1, tmp0__anonymous__q1qw7t.f2u(s));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.l2p_1 = this.m2p(0.0, 0.0);
  }
  protoOf(Companion_20).m2p = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  protoOf(Companion_20).p2p = function (sx, sy) {
    return new Matrix33(new Float32Array([sx, 0.0, 0.0, 0.0, sy, 0.0, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix33(mat) {
    Companion_getInstance_21();
    // Inline function 'kotlin.require' call
    var tmp0_require = mat.length === 9;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      tmp$ret$0 = 'Expected 9 elements, got ' + mat.length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.g2p_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.g2p_1, other.g2p_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.g2p_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + this.g2p_1 + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    this.m2u_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Matrix44(mat) {
    Companion_getInstance_22();
    // Inline function 'kotlin.require' call
    var tmp0_require = mat.length === 16;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      tmp$ret$0 = 'Expected 16 elements, got ' + mat.length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.r2p_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.r2p_1, other.r2p_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.r2p_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + this.r2p_1 + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_getInstance();
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.n2u_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_6().n2u_1);
    Paint.call($this);
    Stats_getInstance().f2n();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).k2n = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).q2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetMode(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetColor(this.j2n_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s2u = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.j2n_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u2u = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.j2n_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).w2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).x2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).y2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetShader(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).z2u = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).a2v = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).b2v = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.j2n_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).c2v = function () {
    return this.b2v().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).d2v = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).e2v = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_23();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_getInstance();
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_23).f2v = function (one, two, op) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.k6_1);
      tmp = ptr === Companion_getInstance_50().w2t() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.g2v_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.j2n_1, it);
      return Unit_getInstance();
    };
  }
  function Path(ptr) {
    Companion_getInstance_24();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().g2v_1);
  }
  protoOf(Path).k2n = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).j2v = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Path__1nSetFillMode(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).k2v = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = values_3()[org_jetbrains_skia_Path__1nGetFillMode(this.j2n_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).l2v = function () {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nReset(this.j2n_1);
    return this;
  };
  protoOf(Path).it = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).m2v = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp_0 = Companion_getInstance_31();
      tmp = tmp_0.n2v(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).o2v = function (x, y) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nMoveTo(this.j2n_1, x, y);
    return this;
  };
  protoOf(Path).p2v = function (dx, dy) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nRMoveTo(this.j2n_1, dx, dy);
    return this;
  };
  protoOf(Path).q2v = function (x, y) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nLineTo(this.j2n_1, x, y);
    return this;
  };
  protoOf(Path).r2v = function (dx, dy) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nRLineTo(this.j2n_1, dx, dy);
    return this;
  };
  protoOf(Path).s2v = function (x1, y1, x2, y2) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nQuadTo(this.j2n_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).t2v = function (dx1, dy1, dx2, dy2) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nRQuadTo(this.j2n_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).u2v = function (x1, y1, x2, y2, x3, y3) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nCubicTo(this.j2n_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).v2v = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nRCubicTo(this.j2n_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).w2v = function () {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nClosePath(this.j2n_1);
    return this;
  };
  protoOf(Path).x2v = function (rect, dir, start) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_Path__1nAddRect(this.j2n_1, rect.n2o_1, rect.o2o_1, rect.p2o_1, rect.q2o_1, dir.k6_1, start);
    return this;
  };
  protoOf(Path).y2v = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.x2v(rect, dir, start) : $super.x2v.call(this, rect, dir, start);
  };
  protoOf(Path).z2v = function (rrect, dir, start) {
    Stats_getInstance().f2n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Path__1nAddRRect(this.j2n_1, rrect.n2o_1, rrect.o2o_1, rrect.p2o_1, rrect.q2o_1, tmp0__anonymous__q1qw7t.a2p(rrect.x2o_1), rrect.x2o_1.length, dir.k6_1, start);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(Path).a2w = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.z2v(rrect, dir, start) : $super.z2v.call(this, rrect, dir, start);
  };
  protoOf(Path).b2w = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Path__1nAddPathOffset(this.j2n_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).c2w = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.b2w(src, dx, dy, extend) : $super.b2w.call(this, src, dx, dy, extend);
  };
  protoOf(Path).d2w = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Path__1nTransform(this.j2n_1, tmp0__anonymous__q1qw7t.a2p(matrix.g2p_1), getPtr(dst), applyPerspectiveClip);
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).e2w = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.d2w(matrix, dst, applyPerspectiveClip) : $super.d2w.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).c = function () {
    return this.f2w(false);
  };
  protoOf(Path).f2w = function (forceClose) {
    return Companion_getInstance_26().g2w(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_getInstance();
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_3() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_getInstance();
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.h2w_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_25();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_8().h2w_1);
  }
  protoOf(PathMeasure).k2w = function (path, forceClosed) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.j2n_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).x8 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).l2w = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.j2n_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_getInstance();
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_4()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    var tmp0_require = verbOrdinal === PathVerb_MOVE_getInstance().k6_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().k6_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      tmp$ret$0 = 'Expected MOVE or CLOSE, got ' + values_4()[verbOrdinal];
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.m2w_1 = verb;
    this.n2w_1 = p0;
    this.o2w_1 = p1;
    this.p2w_1 = p2;
    this.q2w_1 = p3;
    this.r2w_1 = conicWeight;
    this.s2w_1 = isCloseLine;
    this.t2w_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.m2w_1 + (!this.m2w_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.n2w_1 : '') + ((((this.m2w_1.equals(PathVerb_LINE_getInstance()) ? true : this.m2w_1.equals(PathVerb_QUAD_getInstance())) ? true : this.m2w_1.equals(PathVerb_CONIC_getInstance())) ? true : this.m2w_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.o2w_1 : '') + (((this.m2w_1.equals(PathVerb_QUAD_getInstance()) ? true : this.m2w_1.equals(PathVerb_CONIC_getInstance())) ? true : this.m2w_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.p2w_1 : '') + (this.m2w_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.q2w_1 : '') + (this.m2w_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.r2w_1 : '') + (this.m2w_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.s2w_1 : '') + (!this.m2w_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.t2w_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.m2w_1.equals(other.m2w_1) ? !this.m2w_1.equals(PathVerb_DONE_getInstance()) ? equals(this.n2w_1, other.n2w_1) : true : false) ? (((this.m2w_1.equals(PathVerb_LINE_getInstance()) ? true : this.m2w_1.equals(PathVerb_QUAD_getInstance())) ? true : this.m2w_1.equals(PathVerb_CONIC_getInstance())) ? true : this.m2w_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.o2w_1, other.o2w_1) : true : false) ? ((this.m2w_1.equals(PathVerb_QUAD_getInstance()) ? true : this.m2w_1.equals(PathVerb_CONIC_getInstance())) ? true : this.m2w_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.p2w_1, other.p2w_1) : true : false) ? this.m2w_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.q2w_1, other.q2w_1) : true : false) ? this.m2w_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.r2w_1, this.r2w_1) === 0 : true : false) ? this.m2w_1.equals(PathVerb_LINE_getInstance()) ? this.s2w_1 === other.s2w_1 : true : false) ? !this.m2w_1.equals(PathVerb_DONE_getInstance()) ? this.t2w_1 === other.t2w_1 : true : false;
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp0_subject = this.m2w_1;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 6:
        tmp = objectHashes([this.m2w_1]);
        break;
      case 0:
        tmp = objectHashes([this.m2w_1, this.n2w_1, this.t2w_1]);
        break;
      case 1:
        tmp = objectHashes([this.m2w_1, this.n2w_1, this.o2w_1, this.s2w_1, this.t2w_1]);
        break;
      case 2:
        tmp = objectHashes([this.m2w_1, this.n2w_1, this.o2w_1, this.p2w_1, this.t2w_1]);
        break;
      case 3:
        tmp = objectHashes([this.m2w_1, this.n2w_1, this.o2w_1, this.p2w_1, this.r2w_1, this.t2w_1]);
        break;
      case 4:
        tmp = objectHashes([this.m2w_1, this.n2w_1, this.o2w_1, this.p2w_1, this.q2w_1, this.t2w_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_25).g2w = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.x2w_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function nextSegment($this) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Int32Array(10);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.a2u(tmp1_withResult);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.j2n_1, handle);
        tmp0__anonymous__q1qw7t.e2u(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    return pathSegmentFromIntArray(tmp$ret$2);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.w2w_1 = _path;
    this.x2w_1 = null;
    Stats_getInstance().f2n();
  }
  protoOf(PathSegmentIterator).e = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.x2w_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2w_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.x2w_1;
      this.x2w_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).d = function () {
    var tmp0_safe_receiver = this.x2w_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2w_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).t4 = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp0_subject = values_4()[verb];
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
      case 5:
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        var tmp1_fromBits = points[0];
        tmp$ret$0 = floatFromBits(tmp1_fromBits);

        var tmp_0 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.fromBits' call
        var tmp2_fromBits = FloatCompanionObject_getInstance();
        var tmp3_fromBits = points[1];
        tmp$ret$1 = floatFromBits(tmp3_fromBits);

        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        var tmp$ret$2;
        // Inline function 'kotlin.fromBits' call
        var tmp4_fromBits = FloatCompanionObject_getInstance();
        var tmp5_fromBits = points[0];
        tmp$ret$2 = floatFromBits(tmp5_fromBits);

        var tmp_1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.fromBits' call
        var tmp6_fromBits = FloatCompanionObject_getInstance();
        var tmp7_fromBits = points[1];
        tmp$ret$3 = floatFromBits(tmp7_fromBits);

        var tmp_2 = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.fromBits' call
        var tmp8_fromBits = FloatCompanionObject_getInstance();
        var tmp9_fromBits = points[2];
        tmp$ret$4 = floatFromBits(tmp9_fromBits);

        var tmp_3 = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'kotlin.fromBits' call
        var tmp10_fromBits = FloatCompanionObject_getInstance();
        var tmp11_fromBits = points[3];
        tmp$ret$5 = floatFromBits(tmp11_fromBits);

        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        var tmp$ret$6;
        // Inline function 'kotlin.fromBits' call
        var tmp12_fromBits = FloatCompanionObject_getInstance();
        var tmp13_fromBits = points[0];
        tmp$ret$6 = floatFromBits(tmp13_fromBits);

        var tmp_4 = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.fromBits' call
        var tmp14_fromBits = FloatCompanionObject_getInstance();
        var tmp15_fromBits = points[1];
        tmp$ret$7 = floatFromBits(tmp15_fromBits);

        var tmp_5 = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.fromBits' call
        var tmp16_fromBits = FloatCompanionObject_getInstance();
        var tmp17_fromBits = points[2];
        tmp$ret$8 = floatFromBits(tmp17_fromBits);

        var tmp_6 = tmp$ret$8;
        var tmp$ret$9;
        // Inline function 'kotlin.fromBits' call
        var tmp18_fromBits = FloatCompanionObject_getInstance();
        var tmp19_fromBits = points[3];
        tmp$ret$9 = floatFromBits(tmp19_fromBits);

        var tmp_7 = tmp$ret$9;
        var tmp$ret$10;
        // Inline function 'kotlin.fromBits' call
        var tmp20_fromBits = FloatCompanionObject_getInstance();
        var tmp21_fromBits = points[4];
        tmp$ret$10 = floatFromBits(tmp21_fromBits);

        var tmp_8 = tmp$ret$10;
        var tmp$ret$11;
        // Inline function 'kotlin.fromBits' call
        var tmp22_fromBits = FloatCompanionObject_getInstance();
        var tmp23_fromBits = points[5];
        tmp$ret$11 = floatFromBits(tmp23_fromBits);

        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        var tmp$ret$12;
        // Inline function 'kotlin.fromBits' call
        var tmp24_fromBits = FloatCompanionObject_getInstance();
        var tmp25_fromBits = points[0];
        tmp$ret$12 = floatFromBits(tmp25_fromBits);

        var tmp_9 = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'kotlin.fromBits' call
        var tmp26_fromBits = FloatCompanionObject_getInstance();
        var tmp27_fromBits = points[1];
        tmp$ret$13 = floatFromBits(tmp27_fromBits);

        var tmp_10 = tmp$ret$13;
        var tmp$ret$14;
        // Inline function 'kotlin.fromBits' call
        var tmp28_fromBits = FloatCompanionObject_getInstance();
        var tmp29_fromBits = points[2];
        tmp$ret$14 = floatFromBits(tmp29_fromBits);

        var tmp_11 = tmp$ret$14;
        var tmp$ret$15;
        // Inline function 'kotlin.fromBits' call
        var tmp30_fromBits = FloatCompanionObject_getInstance();
        var tmp31_fromBits = points[3];
        tmp$ret$15 = floatFromBits(tmp31_fromBits);

        var tmp_12 = tmp$ret$15;
        var tmp$ret$16;
        // Inline function 'kotlin.fromBits' call
        var tmp32_fromBits = FloatCompanionObject_getInstance();
        var tmp33_fromBits = points[4];
        tmp$ret$16 = floatFromBits(tmp33_fromBits);

        var tmp_13 = tmp$ret$16;
        var tmp$ret$17;
        // Inline function 'kotlin.fromBits' call
        var tmp34_fromBits = FloatCompanionObject_getInstance();
        var tmp35_fromBits = points[5];
        tmp$ret$17 = floatFromBits(tmp35_fromBits);

        var tmp_14 = tmp$ret$17;
        var tmp$ret$18;
        // Inline function 'kotlin.fromBits' call
        var tmp36_fromBits = FloatCompanionObject_getInstance();
        var tmp37_fromBits = points[8];
        tmp$ret$18 = floatFromBits(tmp37_fromBits);

        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        var tmp$ret$19;
        // Inline function 'kotlin.fromBits' call
        var tmp38_fromBits = FloatCompanionObject_getInstance();
        var tmp39_fromBits = points[0];
        tmp$ret$19 = floatFromBits(tmp39_fromBits);

        var tmp_15 = tmp$ret$19;
        var tmp$ret$20;
        // Inline function 'kotlin.fromBits' call
        var tmp40_fromBits = FloatCompanionObject_getInstance();
        var tmp41_fromBits = points[1];
        tmp$ret$20 = floatFromBits(tmp41_fromBits);

        var tmp_16 = tmp$ret$20;
        var tmp$ret$21;
        // Inline function 'kotlin.fromBits' call
        var tmp42_fromBits = FloatCompanionObject_getInstance();
        var tmp43_fromBits = points[2];
        tmp$ret$21 = floatFromBits(tmp43_fromBits);

        var tmp_17 = tmp$ret$21;
        var tmp$ret$22;
        // Inline function 'kotlin.fromBits' call
        var tmp44_fromBits = FloatCompanionObject_getInstance();
        var tmp45_fromBits = points[3];
        tmp$ret$22 = floatFromBits(tmp45_fromBits);

        var tmp_18 = tmp$ret$22;
        var tmp$ret$23;
        // Inline function 'kotlin.fromBits' call
        var tmp46_fromBits = FloatCompanionObject_getInstance();
        var tmp47_fromBits = points[4];
        tmp$ret$23 = floatFromBits(tmp47_fromBits);

        var tmp_19 = tmp$ret$23;
        var tmp$ret$24;
        // Inline function 'kotlin.fromBits' call
        var tmp48_fromBits = FloatCompanionObject_getInstance();
        var tmp49_fromBits = points[5];
        tmp$ret$24 = floatFromBits(tmp49_fromBits);

        var tmp_20 = tmp$ret$24;
        var tmp$ret$25;
        // Inline function 'kotlin.fromBits' call
        var tmp50_fromBits = FloatCompanionObject_getInstance();
        var tmp51_fromBits = points[6];
        tmp$ret$25 = floatFromBits(tmp51_fromBits);

        var tmp_21 = tmp$ret$25;
        var tmp$ret$26;
        // Inline function 'kotlin.fromBits' call
        var tmp52_fromBits = FloatCompanionObject_getInstance();
        var tmp53_fromBits = points[7];
        tmp$ret$26 = floatFromBits(tmp53_fromBits);

        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_4() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_getInstance();
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Picture(ptr) {
    Companion_getInstance_27();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.y2w_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().y2w_1);
  }
  protoOf(PictureRecorder).b2x = function (bounds) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.j2n_1, bounds.n2o_1, bounds.o2o_1, bounds.p2o_1, bounds.q2o_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).c2x = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.j2n_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_getInstance();
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.d2x_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Point(x, y) {
    Companion_getInstance_29();
    this.e2x_1 = x;
    this.f2x_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.e2x_1, other.e2x_1) === 0))
      return false;
    return compareTo(this.f2x_1, other.f2x_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.e2x_1) | 0;
    result = imul(result, PRIME) + toBits(this.f2x_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.e2x_1 + ', _y=' + this.f2x_1 + ')';
  };
  function Point3(x, y, z) {
    this.g2x_1 = x;
    this.h2x_1 = y;
    this.i2x_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.g2x_1, other.g2x_1) === 0))
      return false;
    if (!(compareTo(this.h2x_1, other.h2x_1) === 0))
      return false;
    return compareTo(this.i2x_1, other.i2x_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.g2x_1) | 0;
    result = imul(result, PRIME) + toBits(this.h2x_1) | 0;
    result = imul(result, PRIME) + toBits(this.i2x_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.g2x_1 + ', _y=' + this.h2x_1 + ', _z=' + this.i2x_1 + ')';
  };
  function Companion_29() {
    Companion_instance_29 = this;
  }
  protoOf(Companion_29).j2x = function (l, t, r, b, xRad, yRad) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_29).k2x = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function RRect(l, t, r, b, radii) {
    Companion_getInstance_30();
    Rect.call(this, l, t, r, b);
    this.x2o_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.n2o_1 + ', _top=' + this.o2o_1 + ', _right=' + this.p2o_1 + ', _bottom=' + this.q2o_1 + ', _radii=' + joinToString(this.x2o_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.x2o_1.length === other.x2o_1.length) {
      tmp = contentEquals(this.x2o_1, other.x2o_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.x2o_1), normalizeRadii(other.x2o_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.x2o_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp0_subject = radii.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = 8;
        var tmp_2 = new Float32Array(tmp_1);
        while (tmp_0 < tmp_1) {
          var tmp_3 = tmp_0;
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$0 = 0.0;
          tmp_2[tmp_3] = tmp$ret$0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_2;
        break;
      case 1:
        var tmp_4 = 0;
        var tmp_5 = 8;
        var tmp_6 = new Float32Array(tmp_5);
        while (tmp_4 < tmp_5) {
          var tmp_7 = tmp_4;
          var tmp$ret$1;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$1 = radii[0];
          tmp_6[tmp_7] = tmp$ret$1;
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_6;
        break;
      case 2:
        var tmp_8 = 0;
        var tmp_9 = 8;
        var tmp_10 = new Float32Array(tmp_9);
        while (tmp_8 < tmp_9) {
          var tmp_11 = tmp_8;
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$2 = radii[tmp_11 % 2 | 0];
          tmp_10[tmp_11] = tmp$ret$2;
          tmp_8 = tmp_8 + 1 | 0;
        }

        tmp = tmp_10;
        break;
      case 4:
        var tmp_12 = 0;
        var tmp_13 = 8;
        var tmp_14 = new Float32Array(tmp_13);
        while (tmp_12 < tmp_13) {
          var tmp_15 = tmp_12;
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.normalizeRadii.<anonymous>' call
          tmp$ret$3 = radii[tmp_15 / 2 | 0];
          tmp_14[tmp_15] = tmp$ret$3;
          tmp_12 = tmp_12 + 1 | 0;
        }

        tmp = tmp_14;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).l2x = function (l, t, r, b) {
    // Inline function 'kotlin.require' call
    var tmp0_require = l <= r;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      tmp$ret$0 = 'Rect::makeLTRB expected l <= r, got ' + l + ' > ' + r;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = t <= b;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      tmp$ret$1 = 'Rect::makeLTRB expected t <= b, got ' + t + ' > ' + b;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_30).m2x = function (l, t, w, h) {
    // Inline function 'kotlin.require' call
    var tmp0_require = w >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      tmp$ret$0 = 'Rect::makeXYWH expected w >= 0, got: ' + w;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = h >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      tmp$ret$1 = 'Rect::makeXYWH expected h >= 0, got: ' + h;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_30).n2v = function (block) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp1_withResult = new Float32Array(4);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0__anonymous__q1qw7t.k2s(tmp1_withResult);
        block(tmp0__anonymous__q1qw7t, handle);
        tmp0__anonymous__q1qw7t.l2s(handle, tmp1_withResult);
        tmp$ret$0 = tmp1_withResult;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var result = tmp$ret$2;
    return new Rect(result[0], result[1], result[2], result[3]);
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_31();
    this.n2o_1 = left;
    this.o2o_1 = top;
    this.p2o_1 = right;
    this.q2o_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.n2o_1, other.n2o_1) === 0))
      return false;
    if (!(compareTo(this.o2o_1, other.o2o_1) === 0))
      return false;
    if (!(compareTo(this.p2o_1, other.p2o_1) === 0))
      return false;
    return compareTo(this.q2o_1, other.q2o_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.n2o_1) | 0;
    result = imul(result, PRIME) + toBits(this.o2o_1) | 0;
    result = imul(result, PRIME) + toBits(this.p2o_1) | 0;
    result = imul(result, PRIME) + toBits(this.q2o_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.n2o_1 + ', _top=' + this.o2o_1 + ', _right=' + this.p2o_1 + ', _bottom=' + this.q2o_1 + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_31).n2x = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    var tmp0_require = positions == null ? true : colors.length === positions.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
      tmp$ret$0 = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_getInstance().f2n();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp$ret$1;
        // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
        var tmp1__anonymous__uwfjfc = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, tmp1__anonymous__uwfjfc.o2x(colors), tmp1__anonymous__uwfjfc.a2p(positions), colors.length, style.r2t_1.k6_1, style.h2o(), tmp1__anonymous__uwfjfc.a2p(style.u2t()));
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Shader(ptr) {
    Companion_getInstance_32();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(ShadowUtils).p2x = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_getInstance().f2n();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.g2x_1, zPlaneParams.h2x_1, zPlaneParams.i2x_1, lightPos.g2x_1, lightPos.h2x_1, lightPos.i2x_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.q2x_1 = ptr;
    this.r2x_1 = disposePtr;
  }
  protoOf(ArrayDecoder).wp = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.q2x_1, this.r2x_1);
  };
  protoOf(ArrayDecoder).s2x = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.q2x_1, index);
  };
  protoOf(ArrayDecoder).f = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.q2x_1);
  };
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_32).t2x = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$0;
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          var tmp0_safe_receiver = surfaceProps;
          tmp$ret$0 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.k6_1, colorFormat.k6_1, tmp_2, tmp0__anonymous__q1qw7t.o2x(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2x()));
          tmp$ret$1 = tmp$ret$0;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_getInstance_50().w2t() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.x2x_1 = context;
    $this.y2x_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).z2x = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.j2n_1);
      var tmp_0;
      if (ptr === Companion_getInstance_50().w2t()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).a2y = function () {
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.j2n_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_33();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_getInstance();
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_getInstance();
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.g2o_1.k6_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.f2o_1 = isDeviceIndependentFonts;
    this.g2o_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).h2o = function () {
    return 0 | (this.f2o_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.f2o_1 === other.f2o_1))
      return false;
    return this.g2o_1.equals(other.g2o_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.f2o_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.g2o_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.f2o_1 + ', _pixelGeometry=' + this.g2o_1 + ')';
  };
  protoOf(SurfaceProps).u2x = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf = new Int32Array([this.h2o(), _getPixelGeometryOrdinal(this)]);
    tmp$ret$0 = tmp0_intArrayOf;
    return tmp$ret$0;
  };
  function Companion_33() {
    Companion_instance_33 = this;
    Companion_getInstance_48().d2n();
  }
  protoOf(Companion_33).b2y = function (data, index) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      var tmp0_require = !(ptr === Companion_getInstance_50().w2t());
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        tmp$ret$0 = 'Failed to create Typeface from data ' + data;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(Companion_33).c2y = function (data, index, $super) {
    index = index === VOID ? 0 : index;
    return $super === VOID ? this.b2y(data, index) : $super.b2y.call(this, data, index);
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Typeface(ptr) {
    Companion_getInstance_34();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).k2n = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).f2y = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$3;
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      var tmp$ret$2;
      // Inline function 'org.jetbrains.skia.impl.use' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.j2n_1);
      var tmp0_use = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp$ret$1 = tmp0_use.toString();
        tmp_0 = tmp$ret$1;
      }finally {
        tmp0_use.o1i();
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function getPtr(n) {
    var tmp0_safe_receiver = n;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2n_1;
    return tmp1_elvis_lhs == null ? Companion_getInstance_50().w2t() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_getInstance();
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_getInstance();
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_getInstance();
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_getInstance();
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    this.g2y_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_35();
    this.h2y_1 = _underline;
    this.i2y_1 = _overline;
    this.j2y_1 = _lineThrough;
    this.k2y_1 = _gaps;
    this.l2y_1 = color;
    this.m2y_1 = lineStyle;
    this.n2y_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).o2y = function () {
    return this.m2y_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.h2y_1 === other.h2y_1))
      return false;
    if (!(this.i2y_1 === other.i2y_1))
      return false;
    if (!(this.j2y_1 === other.j2y_1))
      return false;
    if (!(this.k2y_1 === other.k2y_1))
      return false;
    if (!(this.l2y_1 === other.l2y_1))
      return false;
    if (!(compareTo(this.n2y_1, other.n2y_1) === 0))
      return false;
    return this.o2y().equals(other.o2y());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.h2y_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.i2y_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.j2y_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.k2y_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.l2y_1 | 0;
    result = imul(result, PRIME) + toBits(this.n2y_1) | 0;
    result = imul(result, PRIME) + this.o2y().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.h2y_1 + ', _overline=' + this.i2y_1 + ', _lineThrough=' + this.j2y_1 + ', _gaps=' + this.k2y_1 + ', _color=' + this.l2y_1 + ', _lineStyle=' + this.o2y() + ', _thicknessMultiplier=' + this.n2y_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_5() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_36();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).r2y = function (fontMgr) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.j2n_1, getPtr(fontMgr), Companion_getInstance_50().w2t());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).s2y = function (fontMgr) {
    return this.t2y(fontMgr, null);
  };
  protoOf(FontCollection).t2y = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.j2n_1, getPtr(fontMgr), tmp0__anonymous__q1qw7t.f2u(defaultFamilyName));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).u2y = function (familyNames, style) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$8;
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            var tmp$ret$0;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp_1 = this.j2n_1;
            var tmp_2 = tmp0__anonymous__q1qw7t.v2y(familyNames);
            var tmp0_safe_receiver = familyNames;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
            tmp$ret$0 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.n2s_1);
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
            }
          }
        }
        tmp$ret$2 = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        arrayDecoder = tmp$ret$2;
        var tmp$ret$7;
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp0__anonymous__q1qw7t_0 = arrayDecoder;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp1_map = until(0, tmp0__anonymous__q1qw7t_0.f());
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
        var inductionVariable = tmp1_map.w_1;
        var last = tmp1_map.x_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$3;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            tmp$ret$3 = new Typeface(tmp0__anonymous__q1qw7t_0.s2x(item));
            tmp0_mapTo.a(tmp$ret$3);
          }
           while (!(item === last));
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        var tmp2_toTypedArray = tmp$ret$5;
        tmp$ret$6 = copyToArray(tmp2_toTypedArray);
        tmp$ret$7 = tmp$ret$6;
        tmp_0 = tmp$ret$7;
      }finally {
        var tmp0_safe_receiver_0 = arrayDecoder;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          tmp0_safe_receiver_0.wp();
        }
      }
      tmp$ret$8 = tmp_0;
      tmp = tmp$ret$8;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_36() {
    Companion_instance_36 = this;
  }
  protoOf(Companion_36).w2y = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_36).x2y = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_36).y2y = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, tmp0__anonymous__q1qw7t.o2x(intArray), tmp0__anonymous__q1qw7t.z2y(doubleArray));
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    Companion_getInstance_37();
    this.a2z_1 = startIndex;
    this.b2z_1 = endIndex;
    this.c2z_1 = endExcludingWhitespaces;
    this.d2z_1 = endIncludingNewline;
    this.e2z_1 = isHardBreak;
    this.f2z_1 = ascent;
    this.g2z_1 = descent;
    this.h2z_1 = unscaledAscent;
    this.i2z_1 = height;
    this.j2z_1 = width;
    this.k2z_1 = left;
    this.l2z_1 = baseline;
    this.m2z_1 = lineNumber;
  }
  protoOf(LineMetrics).n2z = function () {
    return this.k2z_1 + this.j2z_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.a2z_1 === other.a2z_1))
      return false;
    if (!(this.b2z_1 === other.b2z_1))
      return false;
    if (!(this.c2z_1 === other.c2z_1))
      return false;
    if (!(this.d2z_1 === other.d2z_1))
      return false;
    if (!(this.e2z_1 === other.e2z_1))
      return false;
    if (!(compareTo(this.f2z_1, other.f2z_1) === 0))
      return false;
    if (!(compareTo(this.g2z_1, other.g2z_1) === 0))
      return false;
    if (!(compareTo(this.h2z_1, other.h2z_1) === 0))
      return false;
    if (!(compareTo(this.i2z_1, other.i2z_1) === 0))
      return false;
    if (!(compareTo(this.j2z_1, other.j2z_1) === 0))
      return false;
    if (!(compareTo(this.k2z_1, other.k2z_1) === 0))
      return false;
    if (!(compareTo(this.l2z_1, other.l2z_1) === 0))
      return false;
    return this.m2z_1 === other.m2z_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.a2z_1 | 0;
    result = imul(result, PRIME) + this.b2z_1 | 0;
    result = imul(result, PRIME) + this.c2z_1 | 0;
    result = imul(result, PRIME) + this.d2z_1 | 0;
    result = imul(result, PRIME) + (this.e2z_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.f2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.g2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.h2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.i2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.j2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.k2z_1).f8() | 0;
    result = imul(result, PRIME) + toBits_0(this.l2z_1).f8() | 0;
    result = imul(result, PRIME) + this.m2z_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.a2z_1 + ', _endIndex=' + this.b2z_1 + ', _endExcludingWhitespaces=' + this.c2z_1 + ', _endIncludingNewline=' + this.d2z_1 + ', _hardBreak=' + this.e2z_1 + ', _ascent=' + this.f2z_1 + ', _descent=' + this.g2z_1 + ', _unscaledAscent=' + this.h2z_1 + ', _height=' + this.i2z_1 + ', _width=' + this.j2z_1 + ', _left=' + this.k2z_1 + ', _baseline=' + this.l2z_1 + ', _lineNumber=' + this.m2z_1 + ')';
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.o2z_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_38();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().o2z_1);
    Stats_getInstance().f2n();
    this.r2z_1 = text;
  }
  protoOf(Paragraph).o1i = function () {
    if (!(this.r2z_1 == null)) {
      ensureNotNull(this.r2z_1).o1i();
      this.r2z_1 = null;
    }
    protoOf(Managed).o1i.call(this);
  };
  protoOf(Paragraph).y2j = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).s2z = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).t2z = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).u2z = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).v2z = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).w2z = function (width) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.j2n_1, width);
    return this;
  };
  protoOf(Paragraph).x2z = function (canvas, x, y) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.j2n_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).y2z = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.j2n_1, start, end, rectHeightMode.k6_1, rectWidthMode.k6_1);
          var tmp1_fromInterop = Companion_getInstance_43();
          var size = tmp1_fromInterop.w2y(tmp0_fromInterop);
          var tmp_0 = 0;
          var tmp_1 = size;
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
          var tmp_2 = tmp$ret$0;
          while (tmp_0 < tmp_1) {
            var tmp_3 = tmp_0;
            var tmp$ret$1;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
            tmp$ret$1 = tmp1_fromInterop.y2y(tmp0_fromInterop, tmp_3);
            tmp_2[tmp_3] = tmp$ret$1;
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_2;
          tmp1_fromInterop.x2y(tmp0_fromInterop);
          tmp$ret$2 = result;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = tmp$ret$4;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).z2z = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp$ret$3;
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp$ret$2;
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.j2n_1);
          var tmp1_fromInterop = Companion_getInstance_43();
          var size = tmp1_fromInterop.w2y(tmp0_fromInterop);
          var tmp_0 = 0;
          var tmp_1 = size;
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
          var tmp_2 = tmp$ret$0;
          while (tmp_0 < tmp_1) {
            var tmp_3 = tmp_0;
            var tmp$ret$1;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
            tmp$ret$1 = tmp1_fromInterop.y2y(tmp0_fromInterop, tmp_3);
            tmp_2[tmp_3] = tmp$ret$1;
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_2;
          tmp1_fromInterop.x2y(tmp0_fromInterop);
          tmp$ret$2 = result;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = tmp$ret$4;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).a30 = function (dx, dy) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.j2n_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).b30 = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.r2z_1 == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = [];
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      } else {
        Stats_getInstance().f2n();
        var tmp$ret$7;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            var tmp$ret$6;
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp$ret$5;
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.j2n_1, getPtr(this.r2z_1));
            var tmp1_fromInterop = Companion_getInstance_37();
            var size = tmp1_fromInterop.w2y(tmp0_fromInterop);
            var tmp_1 = 0;
            var tmp_2 = size;
            var tmp$ret$3;
            // Inline function 'kotlin.arrayOfNulls' call
            tmp$ret$3 = fillArrayVal(Array(tmp_2), null);
            var tmp_3 = tmp$ret$3;
            while (tmp_1 < tmp_2) {
              var tmp_4 = tmp_1;
              var tmp$ret$4;
              // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop.<anonymous>' call
              tmp$ret$4 = tmp1_fromInterop.y2y(tmp0_fromInterop, tmp_4);
              tmp_3[tmp_4] = tmp$ret$4;
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_3;
            tmp1_fromInterop.x2y(tmp0_fromInterop);
            tmp$ret$5 = result;
            tmp$ret$6 = tmp$ret$5;
            tmp$ret$7 = tmp$ret$6;
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
            }
          }
        }
        tmp_0 = tmp$ret$7;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.r2z_1);
    }
    return tmp;
  };
  protoOf(Paragraph).c30 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_38() {
    Companion_instance_38 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.d30_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_39();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_11().d30_1);
    this.g30_1 = null;
  }
  protoOf(ParagraphBuilder).h30 = function (style) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.j2n_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).i30 = function (text) {
    Stats_getInstance().f2n();
    try {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.j2n_1, tmp0__anonymous__q1qw7t.f2u(text));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.g30_1 == null)
      this.g30_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.g30_1).l2u(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).j30 = function (style) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.j2n_1, style.k30_1, style.l30_1, style.p30().k6_1, style.q30().k6_1, style.o30_1);
    return this;
  };
  protoOf(ParagraphBuilder).a1j = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.j2n_1), this.g30_1);
      this.g30_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_getInstance().f2n();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.r30_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function ParagraphStyle() {
    Companion_getInstance_40();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_12().r30_1);
    Stats_getInstance().f2n();
  }
  protoOf(ParagraphStyle).k2n = function (other) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).u30 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).v30 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = new StrutStyle(org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle(this.j2n_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).w30 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.j2n_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).x30 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).y30 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.j2n_1, value.k6_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).z30 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.j2n_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).a31 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.j2n_1, tmp0__anonymous__q1qw7t.f2u(value));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = tmp$ret$0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).b31 = function (value) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.j2n_1, value.c31_1, value.d31_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_getInstance();
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.k30_1 = width;
    this.l30_1 = height;
    this.m30_1 = alignment;
    this.n30_1 = baselineMode;
    this.o30_1 = baseline;
  }
  protoOf(PlaceholderStyle).p30 = function () {
    return this.m30_1;
  };
  protoOf(PlaceholderStyle).q30 = function () {
    return this.n30_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.k30_1, other.k30_1) === 0))
      return false;
    if (!(compareTo(this.l30_1, other.l30_1) === 0))
      return false;
    if (!(compareTo(this.o30_1, other.o30_1) === 0))
      return false;
    if (!this.p30().equals(other.p30()))
      return false;
    return this.q30().equals(other.q30());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.k30_1) | 0;
    result = imul(result, PRIME) + toBits(this.l30_1) | 0;
    result = imul(result, PRIME) + toBits(this.o30_1) | 0;
    result = imul(result, PRIME) + this.p30().hashCode() | 0;
    result = imul(result, PRIME) + this.q30().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.k30_1 + ', _height=' + this.l30_1 + ', _alignment=' + this.p30() + ', _baselineMode=' + this.q30() + ', _baseline=' + this.o30_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.e31_1 = position;
    this.f31_1 = affinity;
  }
  protoOf(PositionWithAffinity).g31 = function () {
    return this.f31_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.e31_1 === other.e31_1))
      return false;
    return this.g31().equals(other.g31());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.e31_1 | 0;
    result = imul(result, PRIME) + this.g31().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.e31_1 + ', _affinity=' + this.g31() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_getInstance();
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_getInstance();
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_40() {
    Companion_instance_40 = this;
  }
  var Companion_instance_40;
  function Companion_getInstance_41() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    Companion_getInstance_41();
    this.h31_1 = color;
    this.i31_1 = offsetX;
    this.j31_1 = offsetY;
    this.k31_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.h31_1 === other.h31_1))
      return false;
    if (!(compareTo(this.i31_1, other.i31_1) === 0))
      return false;
    if (!(compareTo(this.j31_1, other.j31_1) === 0))
      return false;
    return compareTo(this.k31_1, other.k31_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.h31_1 | 0;
    result = imul(result, PRIME) + toBits(this.i31_1) | 0;
    result = imul(result, PRIME) + toBits(this.j31_1) | 0;
    var blurSigma = toBits_0(this.k31_1);
    result = imul(result, PRIME) + blurSigma.v8(32).df(blurSigma).f8() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.h31_1 + ', _offsetX=' + this.i31_1 + ', _offsetY=' + this.j31_1 + ', _blurSigma=' + this.k31_1 + ')';
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_41;
  function Companion_getInstance_42() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function StrutStyle_init_$Init$($this) {
    StrutStyle.call($this, org_jetbrains_skia_paragraph_StrutStyle__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function StrutStyle_init_$Create$() {
    return StrutStyle_init_$Init$(objectCreate(protoOf(StrutStyle)));
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.l31_1 = org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function StrutStyle(ptr) {
    Companion_getInstance_42();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().l31_1);
  }
  protoOf(StrutStyle).k2n = function (other) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(StrutStyle).o31 = function (value) {
    this.p31(value);
  };
  protoOf(StrutStyle).q31 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).p31 = function (value) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize(this.j2n_1, value);
    return this;
  };
  protoOf(StrutStyle).r31 = function (value) {
    this.s31(value);
  };
  protoOf(StrutStyle).y2j = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).s31 = function (value) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight(this.j2n_1, value);
    return this;
  };
  protoOf(StrutStyle).sh = function (value) {
    this.t31(value);
  };
  protoOf(StrutStyle).th = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).t31 = function (value) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled(this.j2n_1, value);
    return this;
  };
  protoOf(StrutStyle).u31 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).v31 = function (value) {
    this.w31(value);
  };
  protoOf(StrutStyle).x31 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden(this.j2n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).w31 = function (value) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden(this.j2n_1, value);
    return this;
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_getInstance_31().l2x(l, t, r, b), values_5()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_42() {
    Companion_instance_42 = this;
  }
  protoOf(Companion_42).y2y = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var rectPtr = tmp0__anonymous__q1qw7t.a2p(rect);
        var directionPtr = tmp0__anonymous__q1qw7t.o2x(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        tmp0__anonymous__q1qw7t.l2s(rectPtr, rect);
        tmp0__anonymous__q1qw7t.e2u(directionPtr, direction);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_42).w2y = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_42).x2y = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_42;
  function Companion_getInstance_43() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function TextBox(rect, direction) {
    Companion_getInstance_43();
    this.y31_1 = rect;
    this.z31_1 = direction;
  }
  protoOf(TextBox).a32 = function () {
    return this.z31_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.y31_1.equals(other.y31_1))
      return false;
    return this.a32().equals(other.a32());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.y31_1.hashCode() | 0;
    result = imul(result, PRIME) + this.a32().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.y31_1 + ', _direction=' + this.a32() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.c31_1 = firstLine;
    this.d31_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.c31_1 + ', restLine=' + this.d31_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.c31_1);
    result = imul(result, 31) + getNumberHashCode(this.d31_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.c31_1, tmp0_other_with_cast.c31_1))
      return false;
    if (!equals(this.d31_1, tmp0_other_with_cast.d31_1))
      return false;
    return true;
  };
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_43;
  function Companion_getInstance_44() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_getInstance().f2n();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.b32_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.j2n_1, it);
      return Unit_getInstance();
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_44();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_14().b32_1);
  }
  protoOf(TextStyle).k2n = function (other) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.j2n_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).r2u = function (value) {
    this.e32(value);
  };
  protoOf(TextStyle).e32 = function (color) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.j2n_1, color);
    return this;
  };
  protoOf(TextStyle).f32 = function (value) {
    this.g32(value);
  };
  protoOf(TextStyle).g32 = function (paint) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.j2n_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).h32 = function (value) {
    this.i32(value);
  };
  protoOf(TextStyle).i32 = function (paint) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.j2n_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).j32 = function (value) {
    this.k32(value);
  };
  protoOf(TextStyle).k32 = function (d) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.j2n_1, d.h2y_1, d.i2y_1, d.j2y_1, d.k2y_1, d.l2y_1, d.m2y_1.k6_1, d.n2y_1);
    return this;
  };
  protoOf(TextStyle).l32 = function (value) {
    this.m32(value);
  };
  protoOf(TextStyle).n32 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.j2n_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).m32 = function (s) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.j2n_1, s.n2s_1);
    return this;
  };
  protoOf(TextStyle).o32 = function (s) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.j2n_1, s.h31_1, s.i31_1, s.j31_1, s.k31_1);
    return this;
  };
  protoOf(TextStyle).p32 = function (f) {
    Stats_getInstance().f2n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.j2n_1, tmp0__anonymous__q1qw7t.f2u(f.t2r()), f.q2r_1);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).q32 = function (FontFeatures) {
    var indexedObject = FontFeatures;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var s = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.p32(s);
    }
    return this;
  };
  protoOf(TextStyle).o31 = function (value) {
    this.p31(value);
  };
  protoOf(TextStyle).p31 = function (size) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.j2n_1, size);
    return this;
  };
  protoOf(TextStyle).r32 = function (value) {
    this.s32(value);
  };
  protoOf(TextStyle).s32 = function (families) {
    Stats_getInstance().f2n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.j2n_1;
        var tmp_0 = tmp0__anonymous__q1qw7t.v2y(families);
        var tmp0_safe_receiver = families;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).t32 = function (value) {
    this.u32(value);
  };
  protoOf(TextStyle).u32 = function (letterSpacing) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.j2n_1, letterSpacing);
    return this;
  };
  protoOf(TextStyle).v32 = function (value) {
    this.w32(value);
  };
  protoOf(TextStyle).w32 = function (baselineShift) {
    Stats_getInstance().f2n();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.j2n_1, baselineShift);
    return this;
  };
  protoOf(TextStyle).x32 = function () {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_44() {
    Companion_instance_44 = this;
    Companion_getInstance_48().d2n();
  }
  var Companion_instance_44;
  function Companion_getInstance_45() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_45();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_getInstance().f2n();
  }
  protoOf(TypefaceFontProvider).a33 = function (typeface, alias) {
    var tmp;
    try {
      Stats_getInstance().f2n();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0__anonymous__q1qw7t = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.j2n_1, getPtr(typeface), tmp0__anonymous__q1qw7t.f2u(alias));
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().rs();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_46().b33_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    this.g33_1 = key;
    this.h33_1 = modifiers;
    this.i33_1 = kind;
    this.j33_1 = timestamp;
    this.k33_1 = platform;
  }
  protoOf(SkikoKeyboardEvent).toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.g33_1 + ', modifiers=' + new SkikoInputModifiers(this.h33_1) + ', kind=' + this.i33_1 + ', timestamp=' + toString(this.j33_1) + ', platform=' + this.k33_1 + ')';
  };
  protoOf(SkikoKeyboardEvent).hashCode = function () {
    var result = this.g33_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.h33_1) | 0;
    result = imul(result, 31) + this.i33_1.hashCode() | 0;
    result = imul(result, 31) + this.j33_1.hashCode() | 0;
    result = imul(result, 31) + (this.k33_1 == null ? 0 : hashCode(this.k33_1)) | 0;
    return result;
  };
  protoOf(SkikoKeyboardEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.g33_1.equals(tmp0_other_with_cast.g33_1))
      return false;
    if (!(this.h33_1 === tmp0_other_with_cast.h33_1))
      return false;
    if (!this.i33_1.equals(tmp0_other_with_cast.i33_1))
      return false;
    if (!this.j33_1.equals(tmp0_other_with_cast.j33_1))
      return false;
    if (!equals(this.k33_1, tmp0_other_with_cast.k33_1))
      return false;
    return true;
  };
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_45() {
    Companion_instance_45 = this;
    this.b33_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.c33_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.d33_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.e33_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.f33_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  var Companion_instance_45;
  function Companion_getInstance_46() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_46().c33_1)) {
      tmp0_apply.a('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_46().d33_1)) {
      tmp0_apply.a('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_46().e33_1)) {
      tmp0_apply.a('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_46().f33_1)) {
      tmp0_apply.a('SHIFT');
    }
    tmp$ret$1 = tmp0_apply;
    var result = tmp$ret$1;
    return !result.l() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputModifiers ? other.l33_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_46();
    this.l33_1 = value;
  }
  protoOf(SkikoInputModifiers).toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.l33_1);
  };
  protoOf(SkikoInputModifiers).hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.l33_1);
  };
  protoOf(SkikoInputModifiers).equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.l33_1, other);
  };
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 0);
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 1);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 2);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoInputEvent(input, key, modifiers, kind, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_46().b33_1 : modifiers;
    this.m33_1 = input;
    this.n33_1 = key;
    this.o33_1 = modifiers;
    this.p33_1 = kind;
    this.q33_1 = platform;
  }
  protoOf(SkikoInputEvent).toString = function () {
    return 'SkikoInputEvent(input=' + this.m33_1 + ', key=' + this.n33_1 + ', modifiers=' + new SkikoInputModifiers(this.o33_1) + ', kind=' + this.p33_1 + ', platform=' + this.q33_1 + ')';
  };
  protoOf(SkikoInputEvent).hashCode = function () {
    var result = getStringHashCode(this.m33_1);
    result = imul(result, 31) + this.n33_1.hashCode() | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.o33_1) | 0;
    result = imul(result, 31) + this.p33_1.hashCode() | 0;
    result = imul(result, 31) + (this.q33_1 == null ? 0 : hashCode(this.q33_1)) | 0;
    return result;
  };
  protoOf(SkikoInputEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoInputEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputEvent ? other : THROW_CCE();
    if (!(this.m33_1 === tmp0_other_with_cast.m33_1))
      return false;
    if (!this.n33_1.equals(tmp0_other_with_cast.n33_1))
      return false;
    if (!(this.o33_1 === tmp0_other_with_cast.o33_1))
      return false;
    if (!this.p33_1.equals(tmp0_other_with_cast.p33_1))
      return false;
    if (!equals(this.q33_1, tmp0_other_with_cast.q33_1))
      return false;
    return true;
  };
  function SkikoPointerEvent(x, y, kind, deltaX, deltaY, pressedButtons, button, modifiers, timestamp, pointers, platform) {
    deltaX = deltaX === VOID ? 0.0 : deltaX;
    deltaY = deltaY === VOID ? 0.0 : deltaY;
    pressedButtons = pressedButtons === VOID ? Companion_getInstance_47().r33_1 : pressedButtons;
    button = button === VOID ? Companion_getInstance_47().r33_1 : button;
    modifiers = modifiers === VOID ? Companion_getInstance_46().b33_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    pointers = pointers === VOID ? listOf(new SkikoPointer(new Long(0, 0), x, y, SkikoMouseButtons__has_impl_481exw(pressedButtons, Companion_getInstance_47().s33_1))) : pointers;
    platform = platform === VOID ? null : platform;
    this.d34_1 = x;
    this.e34_1 = y;
    this.f34_1 = kind;
    this.g34_1 = deltaX;
    this.h34_1 = deltaY;
    this.i34_1 = pressedButtons;
    this.j34_1 = button;
    this.k34_1 = modifiers;
    this.l34_1 = timestamp;
    this.m34_1 = pointers;
    this.n34_1 = platform;
  }
  protoOf(SkikoPointerEvent).toString = function () {
    return 'SkikoPointerEvent(x=' + this.d34_1 + ', y=' + this.e34_1 + ', kind=' + this.f34_1 + ', deltaX=' + this.g34_1 + ', deltaY=' + this.h34_1 + ', pressedButtons=' + new SkikoMouseButtons(this.i34_1) + ', button=' + new SkikoMouseButtons(this.j34_1) + ', modifiers=' + new SkikoInputModifiers(this.k34_1) + ', timestamp=' + toString(this.l34_1) + ', pointers=' + this.m34_1 + ', platform=' + this.n34_1 + ')';
  };
  protoOf(SkikoPointerEvent).hashCode = function () {
    var result = getNumberHashCode(this.d34_1);
    result = imul(result, 31) + getNumberHashCode(this.e34_1) | 0;
    result = imul(result, 31) + this.f34_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.g34_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h34_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.i34_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.j34_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.k34_1) | 0;
    result = imul(result, 31) + this.l34_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.m34_1) | 0;
    result = imul(result, 31) + (this.n34_1 == null ? 0 : hashCode(this.n34_1)) | 0;
    return result;
  };
  protoOf(SkikoPointerEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.d34_1, tmp0_other_with_cast.d34_1))
      return false;
    if (!equals(this.e34_1, tmp0_other_with_cast.e34_1))
      return false;
    if (!this.f34_1.equals(tmp0_other_with_cast.f34_1))
      return false;
    if (!equals(this.g34_1, tmp0_other_with_cast.g34_1))
      return false;
    if (!equals(this.h34_1, tmp0_other_with_cast.h34_1))
      return false;
    if (!(this.i34_1 === tmp0_other_with_cast.i34_1))
      return false;
    if (!(this.j34_1 === tmp0_other_with_cast.j34_1))
      return false;
    if (!(this.k34_1 === tmp0_other_with_cast.k34_1))
      return false;
    if (!this.l34_1.equals(tmp0_other_with_cast.l34_1))
      return false;
    if (!equals(this.m34_1, tmp0_other_with_cast.m34_1))
      return false;
    if (!equals(this.n34_1, tmp0_other_with_cast.n34_1))
      return false;
    return true;
  };
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 0);
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 1);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 2);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 3);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 4);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 5);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 6);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointer(id, x, y, pressed, device, pressure) {
    device = device === VOID ? SkikoPointerDevice_MOUSE_getInstance() : device;
    pressure = pressure === VOID ? 1.0 : pressure;
    this.o34_1 = id;
    this.p34_1 = x;
    this.q34_1 = y;
    this.r34_1 = pressed;
    this.s34_1 = device;
    this.t34_1 = pressure;
  }
  protoOf(SkikoPointer).toString = function () {
    return 'SkikoPointer(id=' + toString(this.o34_1) + ', x=' + this.p34_1 + ', y=' + this.q34_1 + ', pressed=' + this.r34_1 + ', device=' + this.s34_1 + ', pressure=' + this.t34_1 + ')';
  };
  protoOf(SkikoPointer).hashCode = function () {
    var result = this.o34_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.p34_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q34_1) | 0;
    result = imul(result, 31) + (this.r34_1 | 0) | 0;
    result = imul(result, 31) + this.s34_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.t34_1) | 0;
    return result;
  };
  protoOf(SkikoPointer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointer))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointer ? other : THROW_CCE();
    if (!this.o34_1.equals(tmp0_other_with_cast.o34_1))
      return false;
    if (!equals(this.p34_1, tmp0_other_with_cast.p34_1))
      return false;
    if (!equals(this.q34_1, tmp0_other_with_cast.q34_1))
      return false;
    if (!(this.r34_1 === tmp0_other_with_cast.r34_1))
      return false;
    if (!this.s34_1.equals(tmp0_other_with_cast.s34_1))
      return false;
    if (!equals(this.t34_1, tmp0_other_with_cast.t34_1))
      return false;
    return true;
  };
  var SkikoPointerDevice_UNKNOWN_instance;
  var SkikoPointerDevice_MOUSE_instance;
  var SkikoPointerDevice_TOUCH_instance;
  var SkikoPointerDevice_entriesInitialized;
  function SkikoPointerDevice_initEntries() {
    if (SkikoPointerDevice_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerDevice_entriesInitialized = true;
    SkikoPointerDevice_UNKNOWN_instance = new SkikoPointerDevice('UNKNOWN', 0);
    SkikoPointerDevice_MOUSE_instance = new SkikoPointerDevice('MOUSE', 1);
    SkikoPointerDevice_TOUCH_instance = new SkikoPointerDevice('TOUCH', 2);
  }
  function SkikoPointerDevice(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_46() {
    Companion_instance_46 = this;
    this.r33_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.s33_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.t33_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.u33_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.v33_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.w33_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.x33_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.y33_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.z33_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.a34_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.b34_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.c34_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  var Companion_instance_46;
  function Companion_getInstance_47() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().s33_1)) {
      tmp0_apply.a('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().t33_1)) {
      tmp0_apply.a('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().u33_1)) {
      tmp0_apply.a('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().y33_1)) {
      tmp0_apply.a('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().z33_1)) {
      tmp0_apply.a('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().a34_1)) {
      tmp0_apply.a('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().b34_1)) {
      tmp0_apply.a('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_47().c34_1)) {
      tmp0_apply.a('BUTTON_8');
    }
    tmp$ret$1 = tmp0_apply;
    var result = tmp$ret$1;
    return !result.l() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoMouseButtons ? other.u34_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_47();
    this.u34_1 = value;
  }
  protoOf(SkikoMouseButtons).toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.u34_1);
  };
  protoOf(SkikoMouseButtons).hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.u34_1);
  };
  protoOf(SkikoMouseButtons).equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.u34_1, other);
  };
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoKeyboardEventKind_TYPE_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_TYPE_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  function SkikoPointerDevice_MOUSE_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_MOUSE_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_getInstance();
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoView() {
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.z34_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$0 = charSequenceLength(lang) === 0;
      tmp_0 = tmp$ret$0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (properties_initialized_Actuals_js_kt_fw1oy4) {
    } else {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_47() {
    Companion_instance_47 = this;
  }
  protoOf(Companion_47).d2n = function () {
  };
  var Companion_instance_47;
  function Companion_getInstance_48() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function FinalizationThunk(finalizer, obj) {
    this.a35_1 = finalizer;
    this.b35_1 = obj;
  }
  protoOf(FinalizationThunk).c35 = function () {
    if (!(this.b35_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.a35_1, this.b35_1);
    }
    this.b35_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.i2n_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      var tmp0_require = !(ptr === 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        tmp$ret$0 = 'Managed ptr is 0';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = !(finalizer === 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        tmp$ret$1 = 'Managed finalizer is 0';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.i2n_1 = thunk;
    }
  }
  protoOf(Managed).o1i = function () {
    if (Companion_getInstance_50().w2t() === this.j2n_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).ec() + ', _ptr=' + this.j2n_1);
    else if (null == this.i2n_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).ec() + ', _ptr=' + this.j2n_1);
    else {
      unregister(this);
      ensureNotNull(this.i2n_1).c35();
      this.i2n_1 = null;
      this.j2n_1 = 0;
    }
  };
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.c35();
    return Unit_getInstance();
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (properties_initialized_Managed_js_kt_llxy4m) {
    } else {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.y2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.y2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.y2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = array.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.y2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) ? array.f() > 0 : false) {
      var data = _malloc(imul(array.f(), 4));
      $this.y2o_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array.d2u_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.y2o_1 = tmp$ret$0;
    this.z2o_1 = false;
  }
  protoOf(InteropScope).f2u = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.y2o_1.a(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).n2q = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).h2u = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).e2u = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).o2x = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).a2u = function (array) {
    return toInterop_0(this, array, false);
  };
  protoOf(InteropScope).l2s = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).a2p = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).k2s = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).z2y = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).i2u = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).b2u = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).c2u = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.d2u_1);
  };
  protoOf(InteropScope).v2y = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = stringArray.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(stringArray.length);
      var tmp0_iterator = arrayIterator(stringArray);
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        tmp$ret$2 = this.f2u(item);
        tmp0_mapTo.a(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var ptrs = toIntArray(tmp$ret$4);
      tmp = this.o2x(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).rs = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.y2o_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.y2o_1.l3();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.z2o_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.z2o_1 = false;
    }
  };
  function toWasm(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU8.set(src, dest);
  }
  function fromWasm(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_js_kt__80argu();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = result;
    tmp$ret$0.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function Companion_48() {
    Companion_instance_48 = this;
  }
  var Companion_instance_48;
  function Companion_getInstance_49() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function NativePointerArray(size) {
    Companion_getInstance_49();
    this.d2u_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).g = function (index) {
    return this.d2u_1[index];
  };
  protoOf(NativePointerArray).f = function () {
    return this.d2u_1.length;
  };
  function Companion_49() {
    Companion_instance_49 = this;
  }
  protoOf(Companion_49).w2t = function () {
    return 0;
  };
  var Companion_instance_49;
  function Companion_getInstance_50() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function Native(ptr) {
    Companion_getInstance_50();
    if (ptr === Companion_getInstance_50().w2t())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.j2n_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.j2n_1 === other.j2n_1 ? true : this.k2n(other);
  };
  protoOf(Native).hashCode = function () {
    return this.j2n_1;
  };
  protoOf(Native).k2n = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).ec(), '(_ptr=0x') + toString_0(this.j2n_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _releaseLocalCallbackScope();
  }
  function _set_interopScopeCounter_$accessor$wmqves_ygusxq(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$wmqves_umgosu() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$wmqves_peku9r() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (properties_initialized_Native_js_kt_fdhhkg) {
    } else {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_15().d35_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_15().d35_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).z2p = function () {
    Stats_getInstance().f2n();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.j2n_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = s.length - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = s;
    tmp$ret$1 = tmp$ret$0.substring(0, tmp0_substring);
    return tmp$ret$1 + ', refCount=' + this.z2p() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.d35_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function Stats() {
    Stats_instance = this;
  }
  protoOf(Stats).f2n = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    if (Stats_instance == null)
      new Stats();
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.h35_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o1i();
    }
    $this.h35_1 = null;
    var tmp1_safe_receiver = $this.i35_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.o1i();
    }
    $this.i35_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.k35_1 = false;
      GL.makeContextCurrent(this$0.f35_1);
      var tmp0_safe_receiver = this$0.j35_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d2a(-1);
      var tmp1_safe_receiver = this$0.j35_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.h2p();
      this$0.l35(timestamp);
      var tmp2_safe_receiver = this$0.h35_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.a2y();
      }
      this$0.g35_1.w2q();
      return Unit_getInstance();
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.e35_1 = htmlCanvas;
    this.f35_1 = createWebGLContext(this.e35_1);
    this.h35_1 = null;
    this.i35_1 = null;
    this.j35_1 = null;
    GL.makeContextCurrent(this.f35_1);
    this.g35_1 = Companion_getInstance_8().t2q();
    this.k35_1 = false;
  }
  protoOf(CanvasRenderer).x2j = function () {
    return this.e35_1.width;
  };
  protoOf(CanvasRenderer).y2j = function () {
    return this.e35_1.height;
  };
  protoOf(CanvasRenderer).m35 = function (desiredWidth, desiredHeight, scale, pixelGeometry) {
    disposeCanvas(this);
    this.e35_1.width = numberToInt(desiredWidth * scale);
    this.e35_1.height = numberToInt(desiredHeight * scale);
    this.i35_1 = Companion_getInstance_0().e2n(this.x2j(), this.y2j(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_33().t2x(this.g35_1, ensureNotNull(this.i35_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_5().f2q_1, new SurfaceProps(VOID, pixelGeometry));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.h35_1 = tmp_0;
    this.j35_1 = ensureNotNull(this.h35_1).z2x();
  };
  protoOf(CanvasRenderer).n35 = function () {
    if (this.k35_1) {
      return Unit_getInstance();
    }
    this.k35_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_SPECIAL_KEYS() {
    _init_properties_Convertors_js_kt__upzh8o();
    return SPECIAL_KEYS;
  }
  var SPECIAL_KEYS;
  function set_buttonsFlags(_set____db54di) {
    _init_properties_Convertors_js_kt__upzh8o();
    buttonsFlags = _set____db54di;
  }
  function get_buttonsFlags() {
    _init_properties_Convertors_js_kt__upzh8o();
    return buttonsFlags;
  }
  var buttonsFlags;
  function toSkikoEvent(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = toSkikoPressedMouseButtons(event, kind);
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp5_timestamp, VOID, event);
  }
  function toSkikoDragEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_kind = SkikoPointerEventKind_DRAG_getInstance();
    var tmp6_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp5_kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp6_timestamp, VOID, event);
  }
  function toSkikoScrollEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_deltaX = event.deltaX;
    var tmp3_deltaY = event.deltaY;
    var tmp4_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp5_button = Companion_getInstance_47().r33_1;
    var tmp6_modifiers = toSkikoModifiers(event);
    var tmp7_kind = SkikoPointerEventKind_SCROLL_getInstance();
    var tmp8_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp7_kind, tmp2_deltaX, tmp3_deltaY, tmp4_pressedButtons, tmp5_button, tmp6_modifiers, tmp8_timestamp, VOID, event);
  }
  function toSkikoEvent_0(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    return new SkikoKeyboardEvent(Companion_getInstance_51().o35(toSkikoKey(event)), toSkikoModifiers_0(event), kind, numberToLong(event.timeStamp), event);
  }
  function toSkikoTypeEvent(character, event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp;
    if (get_SPECIAL_KEYS().m(character)) {
      tmp = null;
    } else {
      var tmp0_subject = character;
      {
        var input;
        switch (tmp0_subject) {
          case 'Enter':
            input = '\n';
            break;
          case 'Tab':
            input = '\t';
            break;
          default:
            input = character;
            break;
        }
      }
      var key = !(event == null) ? Companion_getInstance_51().o35(event.keyCode) : SkikoKey_KEY_UNKNOWN_getInstance();
      var modifiers = !(event == null) ? toSkikoModifiers_0(event) : Companion_getInstance_46().b33_1;
      tmp = new SkikoInputEvent(input, key, modifiers, SkikoKeyboardEventKind_TYPE_getInstance(), event);
    }
    return tmp;
  }
  function toSkikoPressedMouseButtons(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var button = event.button;
    if (kind.equals(SkikoPointerEventKind_DOWN_getInstance())) {
      set_buttonsFlags(get_buttonsFlags() | getSkikoButtonValue(button));
      return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    }
    set_buttonsFlags(get_buttonsFlags() ^ getSkikoButtonValue(button));
    return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
  }
  function toSkikoMouseButton(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    return _SkikoMouseButtons___init__impl__kylsco(getSkikoButtonValue(event.button));
  }
  function toSkikoModifiers(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().e33_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().f33_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().d33_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().c33_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function toSkikoKey(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var key = event.keyCode;
    var side = event.location;
    if (side === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      if ((key === SkikoKey_KEY_LEFT_CONTROL_getInstance().r35_1 ? true : key === SkikoKey_KEY_LEFT_SHIFT_getInstance().r35_1) ? true : key === SkikoKey_KEY_LEFT_META_getInstance().r35_1)
        key = key | -2147483648;
    }
    return key;
  }
  function toSkikoModifiers_0(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().e33_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().f33_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().d33_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_46().c33_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function getSkikoButtonValue(button) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_subject = button;
    switch (tmp0_subject) {
      case 0:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_47().s33_1);
      case 1:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_47().u33_1);
      case 2:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_47().t33_1);
      case 3:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_47().y33_1);
      case 4:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_47().z33_1);
      default:
        return 0;
    }
  }
  var properties_initialized_Convertors_js_kt_vbq0oa;
  function _init_properties_Convertors_js_kt__upzh8o() {
    if (properties_initialized_Convertors_js_kt_vbq0oa) {
    } else {
      properties_initialized_Convertors_js_kt_vbq0oa = true;
      SPECIAL_KEYS = setOf(['Unidentified', 'Alt', 'AltGraph', 'Backspace', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Help', 'Home', 'Delete', 'End', 'PageUp', 'PageDown', 'Escape', 'Clear', 'Clear']);
      buttonsFlags = 0;
    }
  }
  var onContentScaleChanged;
  function setOnChangeScaleNotifier($this) {
    var tmp0_safe_receiver = $this.s35_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m35($this.w35_1, $this.x35_1, $this.z35(), $this.a36());
    }
    var tmp = window.matchMedia('(resolution: ' + $this.z35() + 'dppx)');
    tmp.addEventListener('change', SkiaLayer$setOnChangeScaleNotifier$lambda($this), true);
    var tmp1_safe_receiver = onContentScaleChanged;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver($this.z35());
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.i36_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  protoOf(SkiaLayer$attachTo$1).l35 = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.i36_1.u35_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y34(ensureNotNull(this.j35_1), this.x2j(), this.y2j(), numberToLong(currentNanos));
    }
  };
  function SkiaLayer$attachTo$lambda(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.v35_1 = true;
      var tmp0_safe_receiver = this$0.u35_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w34(toSkikoEvent(event, SkikoPointerEventKind_DOWN_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_0(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.v35_1 = false;
      var tmp0_safe_receiver = this$0.u35_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w34(toSkikoEvent(event, SkikoPointerEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_1(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      var tmp;
      if (this$0.v35_1) {
        var tmp0_safe_receiver = this$0.u35_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.w34(toSkikoDragEvent(event));
        }
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = this$0.u35_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.w34(toSkikoEvent(event, SkikoPointerEventKind_MOVE_getInstance()));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_2(this$0) {
    return function (event) {
      if (event instanceof WheelEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u35_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w34(toSkikoScrollEvent(event));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_3(event) {
    event.preventDefault();
    return Unit_getInstance();
  }
  function SkiaLayer$attachTo$lambda_4(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u35_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v34(toSkikoEvent_0(event, SkikoKeyboardEventKind_DOWN_getInstance()));
      }
      var tmp1_safe_receiver = toSkikoTypeEvent(event.key, event);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_safe_receiver_0 = this$0.u35_1;
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x34();
        if (tmp1_safe_receiver_0 == null)
          null;
        else {
          tmp1_safe_receiver_0.j36(tmp1_safe_receiver);
        }
        tmp$ret$0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_5(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u35_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v34(toSkikoEvent_0(event, SkikoKeyboardEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$setOnChangeScaleNotifier$lambda(this$0) {
    return function (it) {
      setOnChangeScaleNotifier(this$0);
      return Unit_getInstance();
    };
  }
  function SkiaLayer() {
    this.s35_1 = null;
    this.t35_1 = GraphicsApi_WEBGL_getInstance();
    this.u35_1 = null;
    this.v35_1 = false;
    this.w35_1 = 0;
    this.x35_1 = 0;
    this.y35_1 = null;
  }
  protoOf(SkiaLayer).z35 = function () {
    return window.devicePixelRatio;
  };
  protoOf(SkiaLayer).n35 = function () {
    var tmp0_safe_receiver = this.s35_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n35();
    }
  };
  protoOf(SkiaLayer).k36 = function (htmlCanvas, autoDetach) {
    this.y35_1 = htmlCanvas;
    this.w35_1 = htmlCanvas.width;
    this.x35_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + this.w35_1 + 'px';
    htmlCanvas.style.height = '' + this.x35_1 + 'px';
    setOnChangeScaleNotifier(this);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new SkiaLayer$attachTo$1(htmlCanvas, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    tmp0_apply.m35(this.w35_1, this.x35_1, this.z35(), this.a36());
    tmp$ret$0 = tmp0_apply;
    tmp.s35_1 = tmp$ret$0;
    htmlCanvas.addEventListener('mousedown', SkiaLayer$attachTo$lambda(this));
    htmlCanvas.addEventListener('mouseup', SkiaLayer$attachTo$lambda_0(this));
    htmlCanvas.addEventListener('mousemove', SkiaLayer$attachTo$lambda_1(this));
    htmlCanvas.addEventListener('wheel', SkiaLayer$attachTo$lambda_2(this));
    htmlCanvas.addEventListener('contextmenu', SkiaLayer$attachTo$lambda_3);
    htmlCanvas.addEventListener('keydown', SkiaLayer$attachTo$lambda_4(this));
    htmlCanvas.addEventListener('keyup', SkiaLayer$attachTo$lambda_5(this));
  };
  protoOf(SkiaLayer).l36 = function (htmlCanvas, autoDetach, $super) {
    autoDetach = autoDetach === VOID ? true : autoDetach;
    var tmp;
    if ($super === VOID) {
      this.k36(htmlCanvas, autoDetach);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.k36.call(this, htmlCanvas, autoDetach);
    }
    return tmp;
  };
  protoOf(SkiaLayer).a36 = function () {
    return PixelGeometry_UNKNOWN_getInstance();
  };
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).j36 = function (event) {
    return Unit_getInstance();
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_50() {
    Companion_instance_50 = this;
  }
  protoOf(Companion_50).o35 = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = values_6();
      var indexedObject = tmp0_firstOrNull;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        tmp$ret$0 = element.r35_1 === platformKeyCode;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_50;
  function Companion_getInstance_51() {
    SkikoKey_initEntries();
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function values_6() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_getInstance();
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
    Companion_getInstance_51();
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.r35_1 = platformKeyCode;
  }
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    var tmp0_safe_receiver = _this__u8e3s4.alpha;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = jsObject.alpha = _this__u8e3s4.alpha;
    }
    var tmp1_safe_receiver = _this__u8e3s4.depth;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = jsObject.depth = _this__u8e3s4.depth;
    }
    var tmp2_safe_receiver = _this__u8e3s4.stencil;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$2 = jsObject.stencil = _this__u8e3s4.stencil;
    }
    var tmp3_safe_receiver = _this__u8e3s4.antialias;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$3 = jsObject.antialias = _this__u8e3s4.antialias;
    }
    var tmp4_safe_receiver = _this__u8e3s4.premultipliedAlpha;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$4 = jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    var tmp5_safe_receiver = _this__u8e3s4.preserveDrawingBuffer;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$5 = jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    var tmp6_safe_receiver = _this__u8e3s4.preferLowPowerToHighPerformance;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$6 = jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    var tmp7_safe_receiver = _this__u8e3s4.failIfMajorPerformanceCaveat;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$7 = jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    var tmp8_safe_receiver = _this__u8e3s4.enableExtensionsByDefault;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$8 = jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    var tmp9_safe_receiver = _this__u8e3s4.explicitSwapControl;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$9 = jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    var tmp10_safe_receiver = _this__u8e3s4.renderViaOffscreenBackBuffer;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$10 = jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    var tmp11_safe_receiver = _this__u8e3s4.majorVersion;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$11 = jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp0_safe_receiver = $attr;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alpha;
    tmp.m36_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp0_safe_receiver_0 = $attr;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.depth;
    tmp_0.n36_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_1 = $attr;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.stencil;
    tmp_1.o36_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp0_safe_receiver_2 = $attr;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.antialias;
    tmp_2.p36_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp0_safe_receiver_3 = $attr;
    var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : tmp0_safe_receiver_3.premultipliedAlpha;
    tmp_3.q36_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp0_safe_receiver_4 = $attr;
    var tmp1_elvis_lhs_4 = tmp0_safe_receiver_4 == null ? null : tmp0_safe_receiver_4.preserveDrawingBuffer;
    tmp_4.r36_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp0_safe_receiver_5 = $attr;
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_5 == null ? null : tmp0_safe_receiver_5.preferLowPowerToHighPerformance;
    tmp_5.s36_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp0_safe_receiver_6 = $attr;
    var tmp1_elvis_lhs_6 = tmp0_safe_receiver_6 == null ? null : tmp0_safe_receiver_6.failIfMajorPerformanceCaveat;
    tmp_6.t36_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp0_safe_receiver_7 = $attr;
    var tmp1_elvis_lhs_7 = tmp0_safe_receiver_7 == null ? null : tmp0_safe_receiver_7.enableExtensionsByDefault;
    tmp_7.u36_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp0_safe_receiver_8 = $attr;
    var tmp1_elvis_lhs_8 = tmp0_safe_receiver_8 == null ? null : tmp0_safe_receiver_8.explicitSwapControl;
    tmp_8.v36_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp0_safe_receiver_9 = $attr;
    var tmp1_elvis_lhs_9 = tmp0_safe_receiver_9 == null ? null : tmp0_safe_receiver_9.renderViaOffscreenBackBuffer;
    tmp_9.w36_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp0_safe_receiver_10 = $attr;
    var tmp1_elvis_lhs_10 = tmp0_safe_receiver_10 == null ? null : tmp0_safe_receiver_10.majorVersion;
    tmp_10.x36_1 = tmp1_elvis_lhs_10 == null ? 1 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).y36 = function () {
    return this.m36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).z36 = function () {
    return this.n36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a37 = function () {
    return this.o36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b37 = function () {
    return this.p36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c37 = function () {
    return this.q36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).d37 = function () {
    return this.r36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).e37 = function () {
    return this.s36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f37 = function () {
    return this.t36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g37 = function () {
    return this.u36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).h37 = function () {
    return this.v36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i37 = function () {
    return this.w36_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j37 = function () {
    return this.x36_1;
  };
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.y36();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.z36();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.a37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.b37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.c37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.d37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.e37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.f37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.g37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.h37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.i37();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.j37();
  });
  //region block: post-declaration
  protoOf(Bitmap).x2j = get_width;
  protoOf(Bitmap).y2j = get_height;
  protoOf(Bitmap).c2o = get_colorType;
  protoOf(Bitmap).d2o = get_colorSpace;
  protoOf(Bitmap).e2o = get_isOpaque;
  //endregion
  //region block: init
  onContentScaleChanged = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_SOLID_getInstance;
  _.$_$.i = Direction_LTR_getInstance;
  _.$_$.j = Direction_RTL_getInstance;
  _.$_$.k = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o = RectHeightMode_MAX_getInstance;
  _.$_$.p = RectHeightMode_STRUT_getInstance;
  _.$_$.q = RectWidthMode_TIGHT_getInstance;
  _.$_$.r = BlendMode_CLEAR_getInstance;
  _.$_$.s = BlendMode_COLOR_BURN_getInstance;
  _.$_$.t = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.u = BlendMode_COLOR_getInstance;
  _.$_$.v = BlendMode_DARKEN_getInstance;
  _.$_$.w = BlendMode_DIFFERENCE_getInstance;
  _.$_$.x = BlendMode_DST_ATOP_getInstance;
  _.$_$.y = BlendMode_DST_IN_getInstance;
  _.$_$.z = BlendMode_DST_OUT_getInstance;
  _.$_$.a1 = BlendMode_DST_OVER_getInstance;
  _.$_$.b1 = BlendMode_DST_getInstance;
  _.$_$.c1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.d1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.e1 = BlendMode_HUE_getInstance;
  _.$_$.f1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.g1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.h1 = BlendMode_MODULATE_getInstance;
  _.$_$.i1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.j1 = BlendMode_OVERLAY_getInstance;
  _.$_$.k1 = BlendMode_PLUS_getInstance;
  _.$_$.l1 = BlendMode_SATURATION_getInstance;
  _.$_$.m1 = BlendMode_SCREEN_getInstance;
  _.$_$.n1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.p1 = BlendMode_SRC_IN_getInstance;
  _.$_$.q1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.r1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.s1 = BlendMode_SRC_getInstance;
  _.$_$.t1 = BlendMode_XOR_getInstance;
  _.$_$.u1 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.v1 = ClipMode_INTERSECT_getInstance;
  _.$_$.w1 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.x1 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.y1 = ColorType_ALPHA_8_getInstance;
  _.$_$.z1 = ColorType_RGBA_F16_getInstance;
  _.$_$.a2 = ColorType_RGB_565_getInstance;
  _.$_$.b2 = FilterMode_LINEAR_getInstance;
  _.$_$.c2 = FilterMode_NEAREST_getInstance;
  _.$_$.d2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.e2 = FilterTileMode_DECAL_getInstance;
  _.$_$.f2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.g2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.h2 = MipmapMode_NEAREST_getInstance;
  _.$_$.i2 = MipmapMode_NONE_getInstance;
  _.$_$.j2 = PaintMode_FILL_getInstance;
  _.$_$.k2 = PaintMode_STROKE_getInstance;
  _.$_$.l2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.m2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.n2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.o2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.p2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.q2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.r2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.s2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.t2 = PathFillMode_WINDING_getInstance;
  _.$_$.u2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.v2 = PathOp_INTERSECT_getInstance;
  _.$_$.w2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.x2 = PathOp_UNION_getInstance;
  _.$_$.y2 = PathOp_XOR_getInstance;
  _.$_$.z2 = SkikoKey_KEY_0_getInstance;
  _.$_$.a3 = SkikoKey_KEY_1_getInstance;
  _.$_$.b3 = SkikoKey_KEY_2_getInstance;
  _.$_$.c3 = SkikoKey_KEY_3_getInstance;
  _.$_$.d3 = SkikoKey_KEY_4_getInstance;
  _.$_$.e3 = SkikoKey_KEY_5_getInstance;
  _.$_$.f3 = SkikoKey_KEY_6_getInstance;
  _.$_$.g3 = SkikoKey_KEY_7_getInstance;
  _.$_$.h3 = SkikoKey_KEY_8_getInstance;
  _.$_$.i3 = SkikoKey_KEY_9_getInstance;
  _.$_$.j3 = SkikoKey_KEY_A_getInstance;
  _.$_$.k3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.l3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.m3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.n3 = SkikoKey_KEY_B_getInstance;
  _.$_$.o3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.p3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.q3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.r3 = SkikoKey_KEY_C_getInstance;
  _.$_$.s3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.t3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.u3 = SkikoKey_KEY_D_getInstance;
  _.$_$.v3 = SkikoKey_KEY_END_getInstance;
  _.$_$.w3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.x3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.y3 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.z3 = SkikoKey_KEY_E_getInstance;
  _.$_$.a4 = SkikoKey_KEY_F10_getInstance;
  _.$_$.b4 = SkikoKey_KEY_F11_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F12_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F1_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.j4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.k4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.l4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.m4 = SkikoKey_KEY_F_getInstance;
  _.$_$.n4 = SkikoKey_KEY_G_getInstance;
  _.$_$.o4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.p4 = SkikoKey_KEY_H_getInstance;
  _.$_$.q4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.r4 = SkikoKey_KEY_I_getInstance;
  _.$_$.s4 = SkikoKey_KEY_J_getInstance;
  _.$_$.t4 = SkikoKey_KEY_K_getInstance;
  _.$_$.u4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.v4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.w4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.x4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.y4 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.z4 = SkikoKey_KEY_L_getInstance;
  _.$_$.a5 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.b5 = SkikoKey_KEY_M_getInstance;
  _.$_$.c5 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.d5 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.o5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.p5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.q5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.r5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.s5 = SkikoKey_KEY_N_getInstance;
  _.$_$.t5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.u5 = SkikoKey_KEY_O_getInstance;
  _.$_$.v5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.w5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.x5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.y5 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.z5 = SkikoKey_KEY_P_getInstance;
  _.$_$.a6 = SkikoKey_KEY_Q_getInstance;
  _.$_$.b6 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.c6 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.d6 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.e6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.f6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.g6 = SkikoKey_KEY_R_getInstance;
  _.$_$.h6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.i6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.j6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.k6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.l6 = SkikoKey_KEY_S_getInstance;
  _.$_$.m6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.n6 = SkikoKey_KEY_T_getInstance;
  _.$_$.o6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.p6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.q6 = SkikoKey_KEY_U_getInstance;
  _.$_$.r6 = SkikoKey_KEY_V_getInstance;
  _.$_$.s6 = SkikoKey_KEY_W_getInstance;
  _.$_$.t6 = SkikoKey_KEY_X_getInstance;
  _.$_$.u6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.v6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.w6 = SkikoPointerEventKind_SCROLL_getInstance;
  _.$_$.x6 = FontCollection_init_$Create$;
  _.$_$.y6 = StrutStyle_init_$Create$;
  _.$_$.z6 = TextStyle_init_$Create$;
  _.$_$.a7 = Bitmap_init_$Create$;
  _.$_$.b7 = Canvas_init_$Create$;
  _.$_$.c7 = Font_init_$Create$;
  _.$_$.d7 = Paint_init_$Create$;
  _.$_$.e7 = Path_init_$Create$;
  _.$_$.f7 = PathMeasure_init_$Create$;
  _.$_$.g7 = PictureRecorder_init_$Create$;
  _.$_$.h7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.i7 = Companion_getInstance_3;
  _.$_$.j7 = Companion_getInstance_5;
  _.$_$.k7 = Companion_getInstance_6;
  _.$_$.l7 = Companion_getInstance_7;
  _.$_$.m7 = Companion_getInstance_10;
  _.$_$.n7 = Companion_getInstance_12;
  _.$_$.o7 = Companion_getInstance_13;
  _.$_$.p7 = Companion_getInstance_18;
  _.$_$.q7 = Companion_getInstance_21;
  _.$_$.r7 = Companion_getInstance_24;
  _.$_$.s7 = Companion_getInstance_30;
  _.$_$.t7 = Companion_getInstance_31;
  _.$_$.u7 = Companion_getInstance_32;
  _.$_$.v7 = ShadowUtils_getInstance;
  _.$_$.w7 = Companion_getInstance_34;
  _.$_$.x7 = Companion_getInstance_46;
  _.$_$.y7 = DecorationStyle;
  _.$_$.z7 = LineMetrics;
  _.$_$.a8 = ParagraphBuilder;
  _.$_$.b8 = ParagraphStyle;
  _.$_$.c8 = PlaceholderStyle;
  _.$_$.d8 = Shadow;
  _.$_$.e8 = TextBox;
  _.$_$.f8 = TextIndent;
  _.$_$.g8 = TypefaceFontProvider;
  _.$_$.h8 = ColorInfo;
  _.$_$.i8 = CubicResampler;
  _.$_$.j8 = FilterMipmap;
  _.$_$.k8 = GradientStyle;
  _.$_$.l8 = ImageInfo;
  _.$_$.m8 = Matrix33;
  _.$_$.n8 = Matrix44;
  _.$_$.o8 = Point3;
  _.$_$.p8 = Rect;
  _.$_$.q8 = ClipboardManager;
  _.$_$.r8 = SkiaLayer;
  _.$_$.s8 = SkikoPointerEvent;
  _.$_$.t8 = SkikoView;
  _.$_$.u8 = URIManager;
  _.$_$.v8 = currentNanoTime;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
