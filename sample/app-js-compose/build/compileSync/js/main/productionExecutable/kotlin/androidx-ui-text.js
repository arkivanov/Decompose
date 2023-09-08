(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui-graphics.js', './androidx-ui-geometry.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-runtime.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-geometry.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-runtime.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-text'.");
    }
    root['androidx-ui-text'] = factory(typeof this['androidx-ui-text'] === 'undefined' ? {} : this['androidx-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui-graphics'], this['androidx-ui-geometry'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-runtime'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var emptyList = kotlin_kotlin.$_$.f4;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var VOID = kotlin_kotlin.$_$.mc;
  var toString = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var hashCode = kotlin_kotlin.$_$.c8;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var equals = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var compareValues = kotlin_kotlin.$_$.o6;
  var sortedWith = kotlin_kotlin.$_$.f6;
  var charSequenceGet = kotlin_kotlin.$_$.o7;
  var CharSequence = kotlin_kotlin.$_$.ua;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var coerceIn = kotlin_kotlin.$_$.m9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var addAll = kotlin_kotlin.$_$.o3;
  var plus = kotlin_kotlin.$_$.t5;
  var last = kotlin_kotlin.$_$.f5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.y7;
  var compareTo = kotlin_kotlin.$_$.s7;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.wb;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toString_0 = kotlin_kotlin.$_$.ic;
  var Char = kotlin_kotlin.$_$.va;
  var isCharSequence = kotlin_kotlin.$_$.g8;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var first = kotlin_kotlin.$_$.o4;
  var Map = kotlin_kotlin.$_$.j3;
  var isInterface = kotlin_kotlin.$_$.h8;
  var MutableMap = kotlin_kotlin.$_$.m3;
  var MutableCollection = kotlin_kotlin.$_$.k3;
  var isObject = kotlin_kotlin.$_$.i8;
  var println = kotlin_kotlin.$_$.i7;
  var copyOf = kotlin_kotlin.$_$.c4;
  var copyOf_0 = kotlin_kotlin.$_$.b4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var arrayCopy = kotlin_kotlin.$_$.p3;
  var ClassCastException = kotlin_kotlin.$_$.wa;
  var NullPointerException = kotlin_kotlin.$_$.gb;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var Long = kotlin_kotlin.$_$.db;
  var List = kotlin_kotlin.$_$.h3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var Exception = kotlin_kotlin.$_$.ab;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.u6;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get = kotlin_kotlin.$_$.b7;
  var fold = kotlin_kotlin.$_$.a7;
  var minusKey = kotlin_kotlin.$_$.c7;
  var plus_0 = kotlin_kotlin.$_$.e7;
  var Element = kotlin_kotlin.$_$.d7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.n2;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var get_indices = kotlin_kotlin.$_$.x4;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CancellationException = kotlin_kotlin.$_$.q6;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var to = kotlin_kotlin.$_$.jc;
  var mutableListOf = kotlin_kotlin.$_$.p5;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.pb;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.f2;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var listOf = kotlin_kotlin.$_$.j5;
  var Comparable = kotlin_kotlin.$_$.xa;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Collection = kotlin_kotlin.$_$.g3;
  var Enum = kotlin_kotlin.$_$.ya;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var isNaN_0 = kotlin_kotlin.$_$.ub;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var NotImplementedError = kotlin_kotlin.$_$.fb;
  var listOf_0 = kotlin_kotlin.$_$.i5;
  var lazy_0 = kotlin_kotlin.$_$.xb;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var mapOf = kotlin_kotlin.$_$.l5;
  var KProperty0 = kotlin_kotlin.$_$.t9;
  var getObjectHashCode = kotlin_kotlin.$_$.z7;
  var isArray = kotlin_kotlin.$_$.f8;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.m4;
  var first_0 = kotlin_kotlin.$_$.p4;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.ia;
  var lastOrNull = kotlin_kotlin.$_$.e5;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var getOrNull = kotlin_kotlin.$_$.r4;
  var getOrNull_0 = kotlin_kotlin.$_$.ga;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var copyToArray = kotlin_kotlin.$_$.d4;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var Shadow = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ec;
  var sortWith = kotlin_kotlin.$_$.d6;
  var asReversed = kotlin_kotlin.$_$.s3;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y6;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.q7;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var coerceIn_0 = kotlin_kotlin.$_$.l9;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
  setMetadataFor(MultiParagraph, 'MultiParagraph', classMeta);
  setMetadataFor(ParagraphInfo, 'ParagraphInfo', classMeta);
  function get_hasStaleResolvedFonts() {
    return false;
  }
  setMetadataFor(ParagraphIntrinsics, 'ParagraphIntrinsics', interfaceMeta);
  setMetadataFor(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo', classMeta);
  setMetadataFor(ParagraphStyle_0, 'ParagraphStyle', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(TextPainter, 'TextPainter', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_19().d44_1;
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  setMetadataFor(PlatformResolveInterceptor, 'PlatformResolveInterceptor', interfaceMeta);
  setMetadataFor(PlatformResolveInterceptor$Companion$Default$1, VOID, classMeta, VOID, [PlatformResolveInterceptor]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(Immutable, 'Immutable', classMeta);
  setMetadataFor(Async, 'Async', classMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, VOID, VOID, [4]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(CommitTextCommand, 'CommitTextCommand', classMeta);
  setMetadataFor(PlatformTextInputPluginRegistryImpl, 'PlatformTextInputPluginRegistryImpl', classMeta);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextDirection, 'TextDirection', classMeta);
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.y36();
      tmp = new BrushStyle(other.g4b_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.e3z(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(JsLocale, 'JsLocale', classMeta);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(typefacesCache$1, VOID, classMeta);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(WeakHashMap, 'WeakHashMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(FontCache, 'FontCache', classMeta);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta);
  setMetadataFor(LoadedFont, 'LoadedFont', classMeta, PlatformFont);
  setMetadataFor(FontLoader, 'FontLoader', classMeta);
  setMetadataFor(ComputedStyle, 'ComputedStyle', classMeta);
  setMetadataFor(Op, 'Op', classMeta);
  setMetadataFor(StyleAdd, 'StyleAdd', classMeta, Op);
  setMetadataFor(PutPlaceholder, 'PutPlaceholder', classMeta, Op);
  setMetadataFor(EndPlaceholder, 'EndPlaceholder', classMeta, Op);
  setMetadataFor(Cut, 'Cut', classMeta);
  setMetadataFor(StyleAdd_0, 'StyleAdd', classMeta, Cut);
  setMetadataFor(StyleRemove, 'StyleRemove', classMeta, Cut);
  setMetadataFor(PutPlaceholder_0, 'PutPlaceholder', classMeta, Cut);
  setMetadataFor(EndPlaceholder_0, 'EndPlaceholder', classMeta, Cut);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(TextMotion, 'TextMotion', classMeta);
  //endregion
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.l()) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp$ret$2 = null;
      tmp_1 = tmp$ret$2;
    } else {
      tmp_1 = spanStyles;
    }
    tmp$ret$3 = tmp_1;
    var tmp_2 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.l()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp$ret$4 = null;
      tmp_3 = tmp$ret$4;
    } else {
      tmp_3 = paragraphStyles;
    }
    tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.y3t_1 = item;
    this.z3t_1 = start;
    this.a3u_1 = end;
    this.b3u_1 = tag;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.z3t_1 <= this.a3u_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      tmp$ret$0 = 'Reversed range is not supported';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.c3u_1 = 0;
  }
  protoOf(Range).f4 = function () {
    return this.y3t_1;
  };
  protoOf(Range).g4 = function () {
    return this.z3t_1;
  };
  protoOf(Range).r3l = function () {
    return this.a3u_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.y3t_1 + ', start=' + this.z3t_1 + ', end=' + this.a3u_1 + ', tag=' + this.b3u_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.y3t_1 == null ? 0 : hashCode(this.y3t_1);
    result = imul(result, 31) + this.z3t_1 | 0;
    result = imul(result, 31) + this.a3u_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.b3u_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.y3t_1, tmp0_other_with_cast.y3t_1))
      return false;
    if (!(this.z3t_1 === tmp0_other_with_cast.z3t_1))
      return false;
    if (!(this.a3u_1 === tmp0_other_with_cast.a3u_1))
      return false;
    if (!(this.b3u_1 === tmp0_other_with_cast.b3u_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.d3u_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ud = function (a, b) {
    return this.d3u_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ud(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$0 = a.z3t_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$1 = b.z3t_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.e3u_1 = text;
    this.f3u_1 = spanStylesOrNull;
    this.g3u_1 = paragraphStylesOrNull;
    this.h3u_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.g3u_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sortedBy' call
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp$ret$1 = sortedWith(tmp0_safe_receiver, tmp$ret$0);
      tmp = tmp$ret$1;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.g(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          var tmp0_require = item.z3t_1 >= lastStyleEnd;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'ParagraphStyle should not overlap';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          var tmp1_require = item.a3u_1 <= this.e3u_1.length;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_require) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            tmp$ret$3 = 'ParagraphStyle range [' + item.z3t_1 + ', ' + item.a3u_1 + ')' + ' is out of boundary';
            var message_0 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.a3u_1;
        }
         while (inductionVariable <= last);
    }
    this.i3u_1 = 0;
  }
  protoOf(AnnotatedString).j3u = function () {
    var tmp0_elvis_lhs = this.f3u_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).x8 = function () {
    return this.e3u_1.length;
  };
  protoOf(AnnotatedString).y8 = function (index) {
    return charSequenceGet(this.e3u_1, index);
  };
  protoOf(AnnotatedString).z8 = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startIndex <= endIndex;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      tmp$ret$0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.e3u_1.length : false)
      return this;
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = this.e3u_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1_substring;
    tmp$ret$2 = tmp$ret$1.substring(startIndex, endIndex);
    var text = tmp$ret$2;
    return new AnnotatedString(text, filterRanges(this.f3u_1, startIndex, endIndex), filterRanges(this.g3u_1, startIndex, endIndex), filterRanges(this.h3u_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.e3u_1 === other.e3u_1))
      return false;
    if (!equals(this.f3u_1, other.f3u_1))
      return false;
    if (!equals(this.g3u_1, other.g3u_1))
      return false;
    if (!equals(this.h3u_1, other.h3u_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.e3u_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.f3u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.g3u_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.h3u_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.e3u_1;
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    var tmp0_require = start <= end;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp$ret$0 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = ranges;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var nonNullRange = tmp;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(nonNullRange.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        tmp$ret$1 = intersect(start, end, item.z3t_1, item.a3u_1);
        if (tmp$ret$1) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    var tmp1_fastMap = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp1_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp1_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp1_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = item_0.z3t_1;
        tmp$ret$3 = Math.max(start, tmp0_maxOf);
        var tmp_0 = tmp$ret$3 - start | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = item_0.a3u_1;
        tmp$ret$4 = Math.min(end, tmp1_minOf);
        tmp$ret$5 = new Range(item_0.y3t_1, tmp_0, tmp$ret$4 - start | 0, item_0.b3u_1);
        var tmp0_plusAssign = tmp$ret$5;
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$6 = target_0;
    var tmp2_ifEmpty = tmp$ret$6;
    var tmp_1;
    if (tmp2_ifEmpty.l()) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp$ret$7 = null;
      tmp_1 = tmp$ret$7;
    } else {
      tmp_1 = tmp2_ifEmpty;
    }
    tmp$ret$8 = tmp_1;
    return tmp$ret$8;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(lStart, rStart);
    var tmp_1 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$1 = Math.min(lEnd, rEnd);
    if (tmp_1 < tmp$ret$1) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.f3u_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.e3u_1.length : false) {
      return spanStyles;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(spanStyles.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        tmp$ret$0 = intersect(start, end, item.z3t_1, item.a3u_1);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_fastMap = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp0_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        tmp$ret$2 = Range_init_$Create$(item_0.y3t_1, coerceIn(item_0.z3t_1, start, end) - start | 0, coerceIn(item_0.a3u_1, start, end) - start | 0);
        var tmp0_plusAssign = tmp$ret$2;
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$3 = target_0;
    return tmp$ret$3;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = _this__u8e3s4.e3u_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(start, end);
      tmp = tmp$ret$1;
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.e3u_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.g3u_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var result = tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.g(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.f4();
        var start = item.g4();
        var end = item.r3l();
        if (!(start === lastOffset)) {
          result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.a(Range_init_$Create$(defaultParagraphStyle.x3u(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.l()) {
      result.a(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (properties_initialized_AnnotatedString_kt_um06op) {
    } else {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.e3v_1.y3u_1;
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = 0 <= lineIndex ? lineIndex < $this.j3v_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      tmp$ret$0 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.j3v_1 + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.e3v_1 = intrinsics;
    this.f3v_1 = maxLines;
    // Inline function 'kotlin.require' call
    var tmp0_require = _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      tmp$ret$0 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$_0();
    var paragraphInfoList = tmp$ret$1;
    var infoList = this.e3v_1.c3v_1;
    var inductionVariable = 0;
    var last = infoList.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.g(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.n3v_1, Constraints(VOID, tmp, VOID, tmp_0), this.f3v_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.y2j();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.q3v() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.a(new ParagraphInfo(paragraph, paragraphInfo.o3v_1, paragraphInfo.p3v_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.r3v() ? true : endLineIndex === this.f3v_1 ? !(index === get_lastIndex(this.e3v_1.c3v_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.i3v_1 = currentHeight;
    this.j3v_1 = currentLineCount;
    this.g3v_1 = didExceedMaxLines;
    this.l3v_1 = paragraphInfoList;
    this.h3v_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.let' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.g(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var tmp0_fastMap = item.s3v_1.z3v();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = tmp0_fastMap.g(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver = item_0;
            tmp$ret$2 = tmp0_safe_receiver == null ? null : item.a3w(tmp0_safe_receiver);
            var tmp0_plusAssign = tmp$ret$2;
            target_0.a(tmp0_plusAssign);
          }
           while (inductionVariable_1 <= last_1);
        tmp$ret$3 = target_0;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        var list = tmp$ret$6;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$7 = target;
    var tmp1_let = tmp$ret$7;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (tmp1_let.f() < this.e3v_1.z3u_1.f()) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this.e3v_1.z3u_1.f() - tmp1_let.f() | 0;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.MutableList' call
      var list_0 = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < tmp0_List)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          tmp$ret$8 = null;
          list_0.a(tmp$ret$8);
        }
         while (inductionVariable_2 < tmp0_List);
      tmp$ret$9 = list_0;
      tmp$ret$10 = tmp$ret$9;
      tmp_2 = plus(tmp1_let, tmp$ret$10);
    } else {
      tmp_2 = tmp1_let;
    }
    tmp$ret$11 = tmp_2;
    tmp$ret$12 = tmp$ret$11;
    tmp_1.k3v_1 = tmp$ret$12;
    this.m3v_1 = 0;
  }
  protoOf(MultiParagraph).b3w = function () {
    var tmp;
    if (this.l3v_1.l()) {
      tmp = 0.0;
    } else {
      tmp = this.l3v_1.g(0).s3v_1.b3w();
    }
    return tmp;
  };
  protoOf(MultiParagraph).c3w = function () {
    var tmp;
    if (this.l3v_1.l()) {
      tmp = 0.0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = last(this.l3v_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_with.d3w(tmp0_with.s3v_1.c3w());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(MultiParagraph).e3w = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.c3a();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.l3v_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.s3v_1.e3w(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.f3a(0.0, item.s3v_1.y2j());
      }
       while (inductionVariable <= last);
    canvas.d3a();
  };
  protoOf(MultiParagraph).f3w = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().n39_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().q3f_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e3w(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e3w.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).g3w = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).h3w = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().q3f_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.g3w(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.g3w.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).i3w = function (start, end) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).e3u_1.length : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).e3u_1.length + '),' + ' or start > end!';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.l3v_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.l3v_1.f();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.l3v_1.g(i);
        if (p.t3v_1 >= end)
          break $l$loop_0;
        if (p.t3v_1 === p.u3v_1)
          continue $l$loop_0;
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        path.m3g(p.k3w(p.s3v_1.i3w(p.j3w(start), p.j3w(end))));
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable < last);
    return path;
  };
  protoOf(MultiParagraph).l3w = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.i3v_1 ? get_lastIndex(this.l3v_1) : findParagraphByY(this.l3v_1, vertical);
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l3v_1.g(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.x8() === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.t3v_1 - 1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_max);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_with.n3w(tmp0_with.s3v_1.l3w(tmp0_with.m3w(vertical)));
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(MultiParagraph).o3w = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.i3v_1 ? get_lastIndex(this.l3v_1) : findParagraphByY(this.l3v_1, _Offset___get_y__impl__8bzhra(position));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l3v_1.g(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.x8() === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.t3v_1 - 1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_max);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_with.q3w(tmp0_with.s3v_1.o3w(tmp0_with.p3w(position)));
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(MultiParagraph).r3w = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.l3v_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l3v_1.g(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    tmp$ret$0 = tmp0_with.d3w(tmp0_with.s3v_1.r3w(tmp0_with.s3w(lineIndex)));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(MultiParagraph).t3w = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.l3v_1, lineIndex);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l3v_1.g(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    tmp$ret$0 = tmp0_with.q3w(tmp0_with.s3v_1.t3w(tmp0_with.s3w(lineIndex), visibleEnd));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.s3v_1 = paragraph;
    this.t3v_1 = startIndex;
    this.u3v_1 = endIndex;
    this.v3v_1 = startLineIndex;
    this.w3v_1 = endLineIndex;
    this.x3v_1 = top;
    this.y3v_1 = bottom;
  }
  protoOf(ParagraphInfo).x8 = function () {
    return this.u3v_1 - this.t3v_1 | 0;
  };
  protoOf(ParagraphInfo).j3w = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.t3v_1, this.u3v_1) - this.t3v_1 | 0;
  };
  protoOf(ParagraphInfo).q3w = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.t3v_1 | 0;
  };
  protoOf(ParagraphInfo).s3w = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.v3v_1 | 0;
  };
  protoOf(ParagraphInfo).n3w = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.v3v_1 | 0;
  };
  protoOf(ParagraphInfo).d3w = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.x3v_1;
  };
  protoOf(ParagraphInfo).m3w = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.x3v_1;
  };
  protoOf(ParagraphInfo).p3w = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.x3v_1);
  };
  protoOf(ParagraphInfo).a3w = function (_this__u8e3s4) {
    return _this__u8e3s4.a2k(Offset(0.0, this.x3v_1));
  };
  protoOf(ParagraphInfo).k3w = function (_this__u8e3s4) {
    _this__u8e3s4.n3g(Offset(0.0, this.x3v_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.s3v_1 + ', startIndex=' + this.t3v_1 + ', endIndex=' + this.u3v_1 + ', startLineIndex=' + this.v3v_1 + ', endLineIndex=' + this.w3v_1 + ', top=' + this.x3v_1 + ', bottom=' + this.y3v_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.s3v_1);
    result = imul(result, 31) + this.t3v_1 | 0;
    result = imul(result, 31) + this.u3v_1 | 0;
    result = imul(result, 31) + this.v3v_1 | 0;
    result = imul(result, 31) + this.w3v_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3v_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3v_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.s3v_1, tmp0_other_with_cast.s3v_1))
      return false;
    if (!(this.t3v_1 === tmp0_other_with_cast.t3v_1))
      return false;
    if (!(this.u3v_1 === tmp0_other_with_cast.u3v_1))
      return false;
    if (!(this.v3v_1 === tmp0_other_with_cast.v3v_1))
      return false;
    if (!(this.w3v_1 === tmp0_other_with_cast.w3v_1))
      return false;
    if (!equals(this.x3v_1, tmp0_other_with_cast.x3v_1))
      return false;
    if (!equals(this.y3v_1, tmp0_other_with_cast.y3v_1))
      return false;
    return true;
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.g(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        tmp$ret$0 = midVal.t3v_1 > index ? 1 : midVal.u3v_1 <= index ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.g(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        tmp$ret$0 = midVal.x3v_1 > y ? 1 : midVal.y3v_1 <= y ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.g(mid);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        tmp$ret$0 = midVal.v3v_1 > lineIndex ? 1 : midVal.w3v_1 <= lineIndex ? -1 : 0;
        var cmp = tmp$ret$0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style.l3u_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      tmp$ret$0 = style;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? style.u3w(VOID, defaultStyle.l3u_1) : tmp1_elvis_lhs;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.c3v_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.l()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.g(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.n3v_1.s2z();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.g(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.n3v_1.s2z();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n3v_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s2z();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.c3v_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.l()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.g(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$1 = tmp1__anonymous__uwfjfc.n3v_1.t2z();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.g(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.n3v_1.t2z();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n3v_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t2z();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.y3u_1 = annotatedString;
    this.z3u_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.a3v_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.b3v_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.z3w();
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var tmp1_mapEachParagraphStyle = this.y3u_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(tmp1_mapEachParagraphStyle, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.g(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(tmp1_mapEachParagraphStyle, item.z3t_1, item.a3u_1);
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.y3t_1, paragraphStyle);
        tmp$ret$0 = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.e3u_1, style.a3x(currentParagraphStyle), annotatedString_0.j3u(), getLocalPlaceholders(this.z3u_1, item.z3t_1, item.a3u_1), density, fontFamilyResolver), item.z3t_1, item.a3u_1);
        tmp$ret$1 = tmp$ret$0;
        var tmp0_plusAssign = tmp$ret$1;
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp$ret$2 = target;
    tmp$ret$3 = tmp$ret$2;
    tmp_3.c3v_1 = tmp$ret$3;
    this.d3v_1 = 0;
  }
  protoOf(MultiParagraphIntrinsics).s2z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = minIntrinsicWidth$factory();
    tmp$ret$0 = this.a3v_1.b2();
    return tmp$ret$0;
  };
  protoOf(MultiParagraphIntrinsics).t2z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = maxIntrinsicWidth$factory();
    tmp$ret$0 = this.b3v_1.b2();
    return tmp$ret$0;
  };
  protoOf(MultiParagraphIntrinsics).b3x = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = this.c3v_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.g(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          tmp$ret$0 = item.n3v_1.b3x();
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.n3v_1 = intrinsics;
    this.o3v_1 = startIndex;
    this.p3v_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.n3v_1 + ', startIndex=' + this.o3v_1 + ', endIndex=' + this.p3v_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.n3v_1);
    result = imul(result, 31) + this.o3v_1 | 0;
    result = imul(result, 31) + this.p3v_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.n3v_1, tmp0_other_with_cast.n3v_1))
      return false;
    if (!(this.o3v_1 === tmp0_other_with_cast.o3v_1))
      return false;
    if (!(this.p3v_1 === tmp0_other_with_cast.p3v_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        tmp$ret$0 = intersect(start, end, item.z3t_1, item.a3u_1);
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_fastMap = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp0_fastMap.g(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        var tmp0_require = start <= item_0.z3t_1 ? item_0.a3u_1 <= end : false;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          tmp$ret$2 = 'placeholder can not overlap with paragraph.';
          var message = tmp$ret$2;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp$ret$3 = Range_init_$Create$(item_0.y3t_1, item_0.z3t_1 - start | 0, item_0.a3u_1 - start | 0);
        var tmp0_plusAssign = tmp$ret$3;
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$4 = target_0;
    return tmp$ret$4;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.s2z();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.t2z();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().x2m_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function mergePlatformStyle($this, other) {
    if ($this.o3u_1 == null)
      return other;
    if (other == null)
      return $this.o3u_1;
    return $this.o3u_1.d3x(other);
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().x2m_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.k3u_1 = textAlign;
    this.l3u_1 = textDirection;
    this.m3u_1 = lineHeight;
    this.n3u_1 = textIndent;
    this.o3u_1 = platformStyle;
    this.p3u_1 = lineHeightStyle;
    this.q3u_1 = lineBreak;
    this.r3u_1 = hyphens;
    this.s3u_1 = textMotion;
    var tmp = this;
    var tmp0_elvis_lhs = this.k3u_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_27().i3x_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.t3u_1 = tmp_0;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = this.q3u_1;
    var tmp_3;
    var tmp_4 = tmp0_elvis_lhs_0;
    if ((tmp_4 == null ? null : new LineBreak(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_35().k3x_1;
    } else {
      tmp_3 = tmp0_elvis_lhs_0;
    }
    tmp_2.u3u_1 = tmp_3;
    var tmp_5 = this;
    var tmp0_elvis_lhs_1 = this.r3u_1;
    var tmp_6;
    var tmp_7 = tmp0_elvis_lhs_1;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_26().n3x_1;
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    tmp_5.v3u_1 = tmp_6;
    if (!equals(this.m3u_1, Companion_getInstance_1().x2m_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = _TextUnit___get_value__impl__hpbx0k(this.m3u_1) >= 0.0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.m3u_1) + ')';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    this.w3u_1 = 0;
  }
  protoOf(ParagraphStyle_0).x3u = function (other) {
    if (other == null)
      return this;
    var tmp;
    if (get_isUnspecified(other.m3u_1)) {
      tmp = this.m3u_1;
    } else {
      tmp = other.m3u_1;
    }
    var tmp7_lineHeight = tmp;
    var tmp2_elvis_lhs = other.n3u_1;
    var tmp8_textIndent = tmp2_elvis_lhs == null ? this.n3u_1 : tmp2_elvis_lhs;
    var tmp0_elvis_lhs = other.k3u_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = this.k3u_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp9_textAlign = tmp_0;
    var tmp1_elvis_lhs = other.l3u_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = this.l3u_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp10_textDirection = tmp_2;
    var tmp11_platformStyle = mergePlatformStyle(this, other.o3u_1);
    var tmp3_elvis_lhs = other.p3u_1;
    var tmp12_lineHeightStyle = tmp3_elvis_lhs == null ? this.p3u_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = other.q3u_1;
    var tmp_4;
    var tmp_5 = tmp4_elvis_lhs;
    if ((tmp_5 == null ? null : new LineBreak(tmp_5)) == null) {
      tmp_4 = this.q3u_1;
    } else {
      tmp_4 = tmp4_elvis_lhs;
    }
    var tmp13_lineBreak = tmp_4;
    var tmp5_elvis_lhs = other.r3u_1;
    var tmp_6;
    var tmp_7 = tmp5_elvis_lhs;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = this.r3u_1;
    } else {
      tmp_6 = tmp5_elvis_lhs;
    }
    var tmp14_hyphens = tmp_6;
    var tmp6_elvis_lhs = other.s3u_1;
    var tmp15_textMotion = tmp6_elvis_lhs == null ? this.s3u_1 : tmp6_elvis_lhs;
    return new ParagraphStyle_0(tmp9_textAlign, tmp10_textDirection, tmp7_lineHeight, tmp8_textIndent, tmp11_platformStyle, tmp12_lineHeightStyle, tmp13_lineBreak, tmp14_hyphens, tmp15_textMotion);
  };
  protoOf(ParagraphStyle_0).p3x = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, this.s3u_1);
  };
  protoOf(ParagraphStyle_0).u3w = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    textAlign = textAlign === VOID ? this.k3u_1 : textAlign;
    textDirection = textDirection === VOID ? this.l3u_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.m3u_1 : lineHeight;
    textIndent = textIndent === VOID ? this.n3u_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.o3u_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.p3u_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.q3u_1 : lineBreak;
    hyphens = hyphens === VOID ? this.r3u_1 : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.p3x(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.p3x;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = new TextUnit(lineHeight);
      var tmp_6 = lineBreak;
      var tmp_7 = tmp_6 == null ? null : new LineBreak(tmp_6);
      var tmp_8 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, tmp_5, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8 == null ? null : new Hyphens(tmp_8));
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.k3u_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.k3u_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.l3u_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.l3u_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.m3u_1, other.m3u_1))
      return false;
    if (!equals(this.n3u_1, other.n3u_1))
      return false;
    if (!equals(this.o3u_1, other.o3u_1))
      return false;
    if (!equals(this.p3u_1, other.p3u_1))
      return false;
    var tmp_5 = this.q3u_1;
    var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
    var tmp_7 = other.q3u_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new LineBreak(tmp_7)))
      return false;
    var tmp_8 = this.r3u_1;
    var tmp_9 = tmp_8 == null ? null : new Hyphens(tmp_8);
    var tmp_10 = other.r3u_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Hyphens(tmp_10)))
      return false;
    if (!equals(this.s3u_1, other.s3u_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var tmp0_safe_receiver = this.k3u_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = TextAlign__hashCode_impl_s8g35y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.l3u_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.m3u_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.n3u_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.o3u_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.p3u_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.q3u_1;
    var tmp_8;
    var tmp_9 = tmp10_safe_receiver;
    if ((tmp_9 == null ? null : new LineBreak(tmp_9)) == null) {
      tmp_8 = null;
    } else {
      tmp_8 = LineBreak__hashCode_impl_ybksn(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_8;
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_10 = imul(31, result);
    var tmp12_safe_receiver = this.r3u_1;
    var tmp_11;
    var tmp_12 = tmp12_safe_receiver;
    if ((tmp_12 == null ? null : new Hyphens(tmp_12)) == null) {
      tmp_11 = null;
    } else {
      tmp_11 = Hyphens__hashCode_impl_yb7t8v(tmp12_safe_receiver);
    }
    var tmp13_elvis_lhs = tmp_11;
    result = tmp_10 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.s3u_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : hashCode(tmp14_safe_receiver);
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    var tmp = this.k3u_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.l3u_1;
    var tmp_2 = tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.m3u_1) + ', ') + ('textIndent=' + this.n3u_1 + ', ') + ('platformStyle=' + this.o3u_1 + ', ') + ('lineHeightStyle=' + this.p3u_1 + ', ');
    var tmp_3 = this.q3u_1;
    var tmp_4 = tmp_2 + ('lineBreak=' + (tmp_3 == null ? null : new LineBreak(tmp_3)) + ', ');
    var tmp_5 = this.r3u_1;
    return tmp_4 + ('hyphens=' + (tmp_5 == null ? null : new Hyphens(tmp_5)) + ', ') + ('textMotion=' + this.s3u_1) + ')';
  };
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = resolveTextDirection_0(direction, style.l3u_1);
    var tmp_0 = get_isUnspecified(style.m3u_1) ? get_DefaultLineHeight() : style.m3u_1;
    var tmp0_elvis_lhs = style.n3u_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_32().q3x_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.s3u_1;
    return new ParagraphStyle_0(style.t3u_1, tmp, tmp_0, tmp_1, style.o3u_1, style.p3u_1, style.u3u_1, style.v3u_1, tmp1_elvis_lhs == null ? Companion_getInstance_36().r3x_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (properties_initialized_ParagraphStyle_kt_y6w405) {
    } else {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().x2m_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.t3x_1, other.t3x_1))
      return false;
    if (!equals(this.u3x_1, other.u3x_1))
      return false;
    if (!(this.v3x_1 === other.v3x_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.t3x_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u3x_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.v3x_1) | 0;
    return result;
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.w3x_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.x3x_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.y3x_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.z3x_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.a3y_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.b3y_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.c3y_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance;
  function Companion_getInstance_13() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    color = color === VOID ? Companion_getInstance().n39_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().x2m_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().x2m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().n39_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    SpanStyle.call($this, Companion_getInstance_30().d3y(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().x2m_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().x2m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().n39_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_30().e3y(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function mergePlatformStyle_0($this, other) {
    if ($this.t3y_1 == null)
      return other;
    if (other == null)
      return $this.t3y_1;
    return $this.t3y_1.x3y(other);
  }
  function hasSameNonLayoutAttributes($this, other) {
    if (!equals($this.f3y_1, other.f3y_1))
      return false;
    if (!equals($this.r3y_1, other.r3y_1))
      return false;
    if (!equals($this.s3y_1, other.s3y_1))
      return false;
    if (!equals($this.u3y_1, other.u3y_1))
      return false;
    return true;
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().x2m_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().x2m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().n39_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.f3y_1 = textForegroundStyle;
    this.g3y_1 = fontSize;
    this.h3y_1 = fontWeight;
    this.i3y_1 = fontStyle;
    this.j3y_1 = fontSynthesis;
    this.k3y_1 = fontFamily;
    this.l3y_1 = fontFeatureSettings;
    this.m3y_1 = letterSpacing;
    this.n3y_1 = baselineShift;
    this.o3y_1 = textGeometricTransform;
    this.p3y_1 = localeList;
    this.q3y_1 = background;
    this.r3y_1 = textDecoration;
    this.s3y_1 = shadow;
    this.t3y_1 = platformStyle;
    this.u3y_1 = drawStyle;
    this.v3y_1 = 0;
  }
  protoOf(SpanStyle).p39 = function () {
    return this.f3y_1.p39();
  };
  protoOf(SpanStyle).y3y = function () {
    return this.f3y_1.y3y();
  };
  protoOf(SpanStyle).y36 = function () {
    return this.f3y_1.y36();
  };
  protoOf(SpanStyle).z3y = function (other) {
    if (other == null)
      return this;
    var tmp11_textForegroundStyle = this.f3y_1.a3z(other.f3y_1);
    var tmp3_elvis_lhs = other.k3y_1;
    var tmp12_fontFamily = tmp3_elvis_lhs == null ? this.k3y_1 : tmp3_elvis_lhs;
    var tmp13_fontSize = !get_isUnspecified(other.g3y_1) ? other.g3y_1 : this.g3y_1;
    var tmp0_elvis_lhs = other.h3y_1;
    var tmp14_fontWeight = tmp0_elvis_lhs == null ? this.h3y_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = other.i3y_1;
    var tmp;
    var tmp_0 = tmp1_elvis_lhs;
    if ((tmp_0 == null ? null : new FontStyle(tmp_0)) == null) {
      tmp = this.i3y_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp15_fontStyle = tmp;
    var tmp2_elvis_lhs = other.j3y_1;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new FontSynthesis(tmp_2)) == null) {
      tmp_1 = this.j3y_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp16_fontSynthesis = tmp_1;
    var tmp4_elvis_lhs = other.l3y_1;
    var tmp17_fontFeatureSettings = tmp4_elvis_lhs == null ? this.l3y_1 : tmp4_elvis_lhs;
    var tmp_3;
    if (!get_isUnspecified(other.m3y_1)) {
      tmp_3 = other.m3y_1;
    } else {
      tmp_3 = this.m3y_1;
    }
    var tmp18_letterSpacing = tmp_3;
    var tmp5_elvis_lhs = other.n3y_1;
    var tmp_4;
    var tmp_5 = tmp5_elvis_lhs;
    if ((tmp_5 == null ? null : new BaselineShift(tmp_5)) == null) {
      tmp_4 = this.n3y_1;
    } else {
      tmp_4 = tmp5_elvis_lhs;
    }
    var tmp19_baselineShift = tmp_4;
    var tmp6_elvis_lhs = other.o3y_1;
    var tmp20_textGeometricTransform = tmp6_elvis_lhs == null ? this.o3y_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = other.p3y_1;
    var tmp21_localeList = tmp7_elvis_lhs == null ? this.p3y_1 : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = other.q3y_1;
    var tmp_6;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$0) {
      tmp_6 = tmp0_takeOrElse;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SpanStyle.merge.<anonymous>' call
      tmp$ret$1 = this.q3y_1;
      tmp_6 = tmp$ret$1;
    }
    tmp$ret$2 = tmp_6;
    var tmp22_background = tmp$ret$2;
    var tmp8_elvis_lhs = other.r3y_1;
    var tmp23_textDecoration = tmp8_elvis_lhs == null ? this.r3y_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = other.s3y_1;
    var tmp24_shadow = tmp9_elvis_lhs == null ? this.s3y_1 : tmp9_elvis_lhs;
    var tmp25_platformStyle = mergePlatformStyle_0(this, other.t3y_1);
    var tmp10_elvis_lhs = other.u3y_1;
    var tmp26_drawStyle = tmp10_elvis_lhs == null ? this.u3y_1 : tmp10_elvis_lhs;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  };
  protoOf(SpanStyle).b3z = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.p39())) {
      tmp = this.f3y_1;
    } else {
      tmp = Companion_getInstance_30().d3y(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).c3z = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.p39() : color;
    fontSize = fontSize === VOID ? this.g3y_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.h3y_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.i3y_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.j3y_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.k3y_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.l3y_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.m3y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.n3y_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.o3y_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.p3y_1 : localeList;
    background = background === VOID ? this.q3y_1 : background;
    textDecoration = textDecoration === VOID ? this.r3y_1 : textDecoration;
    shadow = shadow === VOID ? this.s3y_1 : shadow;
    platformStyle = platformStyle === VOID ? this.t3y_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.u3y_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.b3z(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.b3z;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_8 == null ? null : new BaselineShift(tmp_8), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.d3z(other) ? hasSameNonLayoutAttributes(this, other) : false;
  };
  protoOf(SpanStyle).d3z = function (other) {
    if (this === other)
      return true;
    if (!equals(this.g3y_1, other.g3y_1))
      return false;
    if (!equals(this.h3y_1, other.h3y_1))
      return false;
    var tmp = this.i3y_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.i3y_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.j3y_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.j3y_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.k3y_1, other.k3y_1))
      return false;
    if (!(this.l3y_1 == other.l3y_1))
      return false;
    if (!equals(this.m3y_1, other.m3y_1))
      return false;
    var tmp_5 = this.n3y_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.n3y_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.o3y_1, other.o3y_1))
      return false;
    if (!equals(this.p3y_1, other.p3y_1))
      return false;
    if (!equals(this.q3y_1, other.q3y_1))
      return false;
    if (!equals(this.t3y_1, other.t3y_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.p39());
    var tmp = imul(31, result);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.y3y();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = tmp + tmp$ret$0 | 0;
    result = imul(31, result) + getNumberHashCode(this.y36()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g3y_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.h3y_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.i3y_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.j3y_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.k3y_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.l3y_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.m3y_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.n3y_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.o3y_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.p3y_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.q3y_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.r3y_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.s3y_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.t3y_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.u3y_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.p39()) + ', ') + ('brush=' + this.y3y() + ', ') + ('alpha=' + this.y36() + ', ') + ('fontSize=' + new TextUnit(this.g3y_1) + ', ') + ('fontWeight=' + this.h3y_1 + ', ');
    var tmp_0 = this.i3y_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.j3y_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.k3y_1 + ', ') + ('fontFeatureSettings=' + this.l3y_1 + ', ') + ('letterSpacing=' + new TextUnit(this.m3y_1) + ', ');
    var tmp_4 = this.n3y_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.o3y_1 + ', ') + ('localeList=' + this.p3y_1 + ', ') + ('background=' + new Color(this.q3y_1) + ', ') + ('textDecoration=' + this.r3y_1 + ', ') + ('shadow=' + this.s3y_1 + ', ') + ('platformStyle=' + this.t3y_1 + ', ') + ('drawStyle=' + this.u3y_1) + ')';
  };
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.f3y_1.e3z(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.g3y_1) ? get_DefaultFontSize() : style.g3y_1;
    var tmp0_elvis_lhs = style.h3y_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().r3z_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.i3y_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().y3z_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.j3y_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().b40_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.k3y_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().e40_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.l3y_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.m3y_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.m3y_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.n3y_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_25().l40_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.o3y_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_31().m40_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.p3y_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_24().m1b() : tmp7_elvis_lhs;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = style.q3y_1;
    var tmp_17;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$0) {
      tmp_17 = tmp0_takeOrElse;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp$ret$1 = get_DefaultBackgroundColor();
      tmp_17 = tmp$ret$1;
    }
    tmp$ret$2 = tmp_17;
    var tmp_18 = tmp$ret$2;
    var tmp8_elvis_lhs = style.r3y_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_28().n40_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.s3y_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().z3g_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.u3y_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.t3y_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_getInstance_30().d3y(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (properties_initialized_SpanStyle_kt_cqbdlj) {
    } else {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().m39_1;
      DefaultColor = Companion_getInstance().b39_1;
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.g(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.n7(element.m7_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.q40_1 = layoutInput;
    this.r40_1 = multiParagraph;
    this.s40_1 = size;
    this.t40_1 = this.r40_1.b3w();
    this.u40_1 = this.r40_1.c3w();
    this.v40_1 = this.r40_1.k3v_1;
    this.w40_1 = 8;
  }
  protoOf(TextLayoutResult).x40 = function () {
    return this.r40_1.g3v_1 ? true : _IntSize___get_height__impl__prv63b(this.s40_1) < this.r40_1.i3v_1;
  };
  protoOf(TextLayoutResult).y40 = function () {
    return _IntSize___get_width__impl__d9yl4o(this.s40_1) < this.r40_1.h3v_1;
  };
  protoOf(TextLayoutResult).z40 = function () {
    return this.y40() ? true : this.x40();
  };
  protoOf(TextLayoutResult).q3v = function () {
    return this.r40_1.j3v_1;
  };
  protoOf(TextLayoutResult).t3w = function (lineIndex, visibleEnd) {
    return this.r40_1.t3w(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).r3w = function (lineIndex) {
    return this.r40_1.r3w(lineIndex);
  };
  protoOf(TextLayoutResult).l3w = function (vertical) {
    return this.r40_1.l3w(vertical);
  };
  protoOf(TextLayoutResult).o3w = function (position) {
    return this.r40_1.o3w(position);
  };
  protoOf(TextLayoutResult).a41 = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.r40_1, size);
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.q40_1.equals(other.q40_1))
      return false;
    if (!equals(this.r40_1, other.r40_1))
      return false;
    if (!equals(this.s40_1, other.s40_1))
      return false;
    if (!(this.t40_1 === other.t40_1))
      return false;
    if (!(this.u40_1 === other.u40_1))
      return false;
    if (!equals(this.v40_1, other.v40_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.q40_1.hashCode();
    result = imul(31, result) + hashCode(this.r40_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.s40_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.t40_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.u40_1) | 0;
    result = imul(31, result) + hashCode(this.v40_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.q40_1 + ', ') + ('multiParagraph=' + this.r40_1 + ', ') + ('size=' + new IntSize(this.s40_1) + ', ') + ('firstBaseline=' + this.t40_1 + ', ') + ('lastBaseline=' + this.u40_1 + ', ') + ('placeholderRects=' + this.v40_1) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.b41_1 = text;
    this.c41_1 = style;
    this.d41_1 = placeholders;
    this.e41_1 = maxLines;
    this.f41_1 = softWrap;
    this.g41_1 = overflow;
    this.h41_1 = density;
    this.i41_1 = layoutDirection;
    this.j41_1 = fontFamilyResolver;
    this.k41_1 = constraints;
    this.l41_1 = resourceLoader;
    this.m41_1 = 8;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.b41_1.equals(other.b41_1))
      return false;
    if (!this.c41_1.equals(other.c41_1))
      return false;
    if (!equals(this.d41_1, other.d41_1))
      return false;
    if (!(this.e41_1 === other.e41_1))
      return false;
    if (!(this.f41_1 === other.f41_1))
      return false;
    if (!(this.g41_1 === other.g41_1))
      return false;
    if (!equals(this.h41_1, other.h41_1))
      return false;
    if (!this.i41_1.equals(other.i41_1))
      return false;
    if (!equals(this.j41_1, other.j41_1))
      return false;
    if (!equals(this.k41_1, other.k41_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.b41_1.hashCode();
    result = imul(31, result) + this.c41_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.d41_1) | 0;
    result = imul(31, result) + this.e41_1 | 0;
    result = imul(31, result) + (this.f41_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.g41_1) | 0;
    result = imul(31, result) + hashCode(this.h41_1) | 0;
    result = imul(31, result) + this.i41_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.j41_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.k41_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.b41_1 + ', ') + ('style=' + this.c41_1 + ', ') + ('placeholders=' + this.d41_1 + ', ') + ('maxLines=' + this.e41_1 + ', ') + ('softWrap=' + this.f41_1 + ', ') + ('overflow=' + new TextOverflow(this.g41_1) + ', ') + ('density=' + this.h41_1 + ', ') + ('layoutDirection=' + this.i41_1 + ', ') + ('fontFamilyResolver=' + this.j41_1 + ', ') + ('constraints=' + new Constraints_0(this.k41_1)) + ')';
  };
  var DefaultCacheSize;
  function TextPainter() {
    TextPainter_instance = this;
    this.n41_1 = 0;
  }
  protoOf(TextPainter).o41 = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.z40() ? !(textLayoutResult.q40_1.g41_1 === Companion_getInstance_33().r41_1) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.s40_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.s40_1);
      var bounds = Rect(Companion_getInstance_3().m2j_1, Size(width, height));
      canvas.c3a();
      canvas.k3a(bounds);
    }
    var style = textLayoutResult.q40_1.c41_1.v3w_1;
    var tmp0_elvis_lhs = style.r3y_1;
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_28().n40_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.s3y_1;
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().z3g_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.u3y_1;
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.y3y();
      if (!(brush == null)) {
        var tmp;
        if (!(style.f3y_1 === Unspecified_getInstance())) {
          tmp = style.f3y_1.y36();
        } else {
          tmp = 1.0;
        }
        var alpha = tmp;
        textLayoutResult.r40_1.h3w(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_0;
        if (!(style.f3y_1 === Unspecified_getInstance())) {
          tmp_0 = style.f3y_1.p39();
        } else {
          tmp_0 = Companion_getInstance().b39_1;
        }
        var color = tmp_0;
        textLayoutResult.r40_1.f3w(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.d3a();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.t3y_1, paragraphStyle.o3u_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    color = color === VOID ? Companion_getInstance().n39_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().x2m_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().x2m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().n39_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().x2m_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s41_1);
    var tmp1_safe_receiver = platformStyle;
    TextStyle.call($this, tmp, ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t41_1, lineHeightStyle, lineBreak, hyphens), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(TextStyle)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.v41_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_0;
  function Companion_getInstance_14() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_14();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.v3w_1 = spanStyle;
    this.w3w_1 = paragraphStyle;
    this.x3w_1 = platformStyle;
    this.y3w_1 = 0;
  }
  protoOf(TextStyle).w41 = function () {
    return this.v3w_1;
  };
  protoOf(TextStyle).z3w = function () {
    return this.w3w_1;
  };
  protoOf(TextStyle).x41 = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_14().v41_1))
      return this;
    return TextStyle_init_$Create$_0(this.w41().z3y(other.w41()), this.z3w().x3u(other.z3w()));
  };
  protoOf(TextStyle).a3x = function (other) {
    return TextStyle_init_$Create$_0(this.w41(), this.z3w().x3u(other));
  };
  protoOf(TextStyle).y41 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp;
    if (equals(color, this.v3w_1.p39())) {
      tmp = this.v3w_1.f3y_1;
    } else {
      tmp = Companion_getInstance_30().d3y(color);
    }
    var tmp_0 = tmp;
    var tmp0_safe_receiver = platformStyle;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s41_1, this.z41());
    var tmp1_safe_receiver = platformStyle;
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t41_1, lineHeightStyle, lineBreak, hyphens, this.a42()), platformStyle);
  };
  protoOf(TextStyle).b42 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    color = color === VOID ? this.v3w_1.p39() : color;
    fontSize = fontSize === VOID ? this.v3w_1.g3y_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.v3w_1.h3y_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.v3w_1.i3y_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.v3w_1.j3y_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.v3w_1.k3y_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.v3w_1.l3y_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.v3w_1.m3y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.v3w_1.n3y_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.v3w_1.o3y_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.v3w_1.p3y_1 : localeList;
    background = background === VOID ? this.v3w_1.q3y_1 : background;
    textDecoration = textDecoration === VOID ? this.v3w_1.r3y_1 : textDecoration;
    shadow = shadow === VOID ? this.v3w_1.s3y_1 : shadow;
    textAlign = textAlign === VOID ? this.w3w_1.k3u_1 : textAlign;
    textDirection = textDirection === VOID ? this.w3w_1.l3u_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.w3w_1.m3u_1 : lineHeight;
    textIndent = textIndent === VOID ? this.w3w_1.n3u_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.x3w_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.w3w_1.p3u_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.w3w_1.q3u_1 : lineBreak;
    hyphens = hyphens === VOID ? this.w3w_1.r3u_1 : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.y41(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.y41;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      var tmp_9 = tmp_8 == null ? null : new BaselineShift(tmp_8);
      var tmp_10 = new Color(background);
      var tmp_11 = textAlign;
      var tmp_12 = tmp_11 == null ? null : new TextAlign(tmp_11);
      var tmp_13 = textDirection;
      var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
      var tmp_15 = new TextUnit(lineHeight);
      var tmp_16 = lineBreak;
      var tmp_17 = tmp_16 == null ? null : new LineBreak(tmp_16);
      var tmp_18 = hyphens;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_9, textGeometricTransform, localeList, tmp_10, textDecoration, shadow, tmp_12, tmp_14, tmp_15, textIndent, platformStyle, lineHeightStyle, tmp_17, tmp_18 == null ? null : new Hyphens(tmp_18));
    }
    return tmp;
  };
  protoOf(TextStyle).c42 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp0_safe_receiver = platformStyle;
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s41_1, drawStyle);
    var tmp1_safe_receiver = platformStyle;
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t41_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).d42 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.v3w_1.y36() : alpha;
    fontSize = fontSize === VOID ? this.v3w_1.g3y_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.v3w_1.h3y_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.v3w_1.i3y_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.v3w_1.j3y_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.v3w_1.k3y_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.v3w_1.l3y_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.v3w_1.m3y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.v3w_1.n3y_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.v3w_1.o3y_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.v3w_1.p3y_1 : localeList;
    background = background === VOID ? this.v3w_1.q3y_1 : background;
    textDecoration = textDecoration === VOID ? this.v3w_1.r3y_1 : textDecoration;
    shadow = shadow === VOID ? this.v3w_1.s3y_1 : shadow;
    drawStyle = drawStyle === VOID ? this.v3w_1.u3y_1 : drawStyle;
    textAlign = textAlign === VOID ? this.w3w_1.k3u_1 : textAlign;
    textDirection = textDirection === VOID ? this.w3w_1.l3u_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.w3w_1.m3u_1 : lineHeight;
    textIndent = textIndent === VOID ? this.w3w_1.n3u_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.x3w_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.w3w_1.p3u_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.w3w_1.q3u_1 : lineBreak;
    hyphens = hyphens === VOID ? this.w3w_1.r3u_1 : hyphens;
    textMotion = textMotion === VOID ? this.w3w_1.s3u_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.c42(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.c42;
      var tmp_1 = new TextUnit(fontSize);
      var tmp_2 = fontStyle;
      var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
      var tmp_4 = fontSynthesis;
      var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
      var tmp_6 = new TextUnit(letterSpacing);
      var tmp_7 = baselineShift;
      var tmp_8 = tmp_7 == null ? null : new BaselineShift(tmp_7);
      var tmp_9 = new Color(background);
      var tmp_10 = textAlign;
      var tmp_11 = tmp_10 == null ? null : new TextAlign(tmp_10);
      var tmp_12 = textDirection;
      var tmp_13 = tmp_12 == null ? null : new TextDirection(tmp_12);
      var tmp_14 = new TextUnit(lineHeight);
      var tmp_15 = lineBreak;
      var tmp_16 = tmp_15 == null ? null : new LineBreak(tmp_15);
      var tmp_17 = hyphens;
      tmp = tmp_0.call(this, brush, alpha, tmp_1, fontWeight, tmp_3, tmp_5, fontFamily, fontFeatureSettings, tmp_6, tmp_8, textGeometricTransform, localeList, tmp_9, textDecoration, shadow, drawStyle, tmp_11, tmp_13, tmp_14, textIndent, platformStyle, lineHeightStyle, tmp_16, tmp_17 == null ? null : new Hyphens(tmp_17), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).y3y = function () {
    return this.v3w_1.y3y();
  };
  protoOf(TextStyle).p39 = function () {
    return this.v3w_1.p39();
  };
  protoOf(TextStyle).y36 = function () {
    return this.v3w_1.y36();
  };
  protoOf(TextStyle).e42 = function () {
    return this.v3w_1.g3y_1;
  };
  protoOf(TextStyle).f42 = function () {
    return this.v3w_1.h3y_1;
  };
  protoOf(TextStyle).g42 = function () {
    return this.v3w_1.i3y_1;
  };
  protoOf(TextStyle).h42 = function () {
    return this.v3w_1.j3y_1;
  };
  protoOf(TextStyle).i42 = function () {
    return this.v3w_1.k3y_1;
  };
  protoOf(TextStyle).j42 = function () {
    return this.v3w_1.l3y_1;
  };
  protoOf(TextStyle).k42 = function () {
    return this.v3w_1.m3y_1;
  };
  protoOf(TextStyle).l42 = function () {
    return this.v3w_1.n3y_1;
  };
  protoOf(TextStyle).m42 = function () {
    return this.v3w_1.o3y_1;
  };
  protoOf(TextStyle).n42 = function () {
    return this.v3w_1.p3y_1;
  };
  protoOf(TextStyle).o42 = function () {
    return this.v3w_1.q3y_1;
  };
  protoOf(TextStyle).p42 = function () {
    return this.v3w_1.r3y_1;
  };
  protoOf(TextStyle).q42 = function () {
    return this.v3w_1.s3y_1;
  };
  protoOf(TextStyle).z41 = function () {
    return this.v3w_1.u3y_1;
  };
  protoOf(TextStyle).r42 = function () {
    return this.w3w_1.k3u_1;
  };
  protoOf(TextStyle).s42 = function () {
    return this.w3w_1.l3u_1;
  };
  protoOf(TextStyle).t42 = function () {
    return this.w3w_1.m3u_1;
  };
  protoOf(TextStyle).u42 = function () {
    return this.w3w_1.n3u_1;
  };
  protoOf(TextStyle).v42 = function () {
    return this.w3w_1.p3u_1;
  };
  protoOf(TextStyle).w42 = function () {
    return this.w3w_1.r3u_1;
  };
  protoOf(TextStyle).x42 = function () {
    return this.w3w_1.q3u_1;
  };
  protoOf(TextStyle).a42 = function () {
    return this.w3w_1.s3u_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.v3w_1.equals(other.v3w_1))
      return false;
    if (!this.w3w_1.equals(other.w3w_1))
      return false;
    if (!equals(this.x3w_1, other.x3w_1))
      return false;
    return true;
  };
  protoOf(TextStyle).y42 = function (other) {
    return this === other ? true : this.w3w_1.equals(other.w3w_1) ? this.v3w_1.d3z(other.v3w_1) : false;
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.v3w_1.hashCode();
    result = imul(31, result) + this.w3w_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.x3w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.p39()) + ', ') + ('brush=' + this.y3y() + ', ') + ('alpha=' + this.y36() + ', ') + ('fontSize=' + new TextUnit(this.e42()) + ', ') + ('fontWeight=' + this.f42() + ', ');
    var tmp_0 = this.g42();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.h42();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.i42() + ', ') + ('fontFeatureSettings=' + this.j42() + ', ') + ('letterSpacing=' + new TextUnit(this.k42()) + ', ');
    var tmp_4 = this.l42();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.m42() + ', ') + ('localeList=' + this.n42() + ', ') + ('background=' + new Color(this.o42()) + ', ') + ('textDecoration=' + this.p42() + ', ') + ('shadow=' + this.q42() + ', ') + ('drawStyle=' + this.z41() + ', ');
    var tmp_6 = this.r42();
    var tmp_7 = tmp_5 + ('textAlign=' + (tmp_6 == null ? null : new TextAlign(tmp_6)) + ', ');
    var tmp_8 = this.s42();
    var tmp_9 = tmp_7 + ('textDirection=' + (tmp_8 == null ? null : new TextDirection(tmp_8)) + ', ') + ('lineHeight=' + new TextUnit(this.t42()) + ', ') + ('textIndent=' + this.u42() + ', ') + ('platformStyle=' + this.x3w_1 + ', ') + ('lineHeightStyle=' + this.v42() + ', ');
    var tmp_10 = this.x42();
    var tmp_11 = tmp_9 + ('lineBreak=' + (tmp_10 == null ? null : new LineBreak(tmp_10)) + ', ');
    var tmp_12 = this.w42();
    return tmp_11 + ('hyphens=' + (tmp_12 == null ? null : new Hyphens(tmp_12)) + ', ') + ('textMotion=' + this.a42()) + ')';
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.v3w_1), resolveParagraphStyleDefaults(style.w3w_1, direction), style.x3w_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp0_subject = textDirection;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_29().b43_1))) {
      var tmp1_subject = layoutDirection;
      var tmp0 = tmp1_subject.k6_1;
      var tmp_1;
      switch (tmp0) {
        case 0:
          tmp_1 = Companion_getInstance_29().c43_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_29().d43_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = tmp0_subject;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp2_subject = layoutDirection;
        var tmp0_0 = tmp2_subject.k6_1;
        var tmp_3;
        switch (tmp0_0) {
          case 0:
            tmp_3 = Companion_getInstance_29().z42_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_29().a43_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        tmp = textDirection;
      }
    }
    return tmp;
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (properties_initialized_ContainerHelpers_kt_9fe6be) {
    } else {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_OBJECTS = tmp$ret$0;
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = maxSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      tmp$ret$0 = 'maxSize <= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.i43_1 = maxSize;
    $this.f43_1 = HashMap_init_$Create$(0, 0.75);
    $this.g43_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.o43(key, value);
    // Inline function 'kotlin.check' call
    var tmp0_check = result >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      tmp$ret$0 = 'Negative size: ' + key + '=' + value;
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).f = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.e43_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return this.h43_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(LruCache).q2 = function (key) {
    var mapValue = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.e43_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.f43_1.q2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.g43_1.j3(key);
      this.g43_1.a(key);
      var tmp0_this = this;
      var tmp1 = tmp0_this.m43_1;
      tmp0_this.m43_1 = tmp1 + 1 | 0;
      return mapValue;
    } else {
      var tmp2_this = this;
      var tmp3 = tmp2_this.n43_1;
      tmp2_this.n43_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var createdValue = this.p43(key);
    if (createdValue == null) {
      return null;
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.e43_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_this_0 = this;
    var tmp1_0 = tmp0_this_0.k43_1;
    tmp0_this_0.k43_1 = tmp1_0 + 1 | 0;
    var previousValue = this.f43_1.h4(key, createdValue);
    this.g43_1.j3(key);
    this.g43_1.a(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.f43_1.h4(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      var tmp2_this_0 = this;
      tmp2_this_0.h43_1 = tmp2_this_0.f() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    if (!(mapValue == null)) {
      this.r43(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.q43(this.i43_1);
      return createdValue;
    }
  };
  protoOf(LruCache).h4 = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.e43_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.j43_1;
    tmp0_this.j43_1 = tmp1 + 1 | 0;
    var tmp2_this = this;
    tmp2_this.h43_1 = tmp2_this.f() + safeSizeOf(this, key, value) | 0;
    previous = this.f43_1.h4(key, value);
    if (!(previous == null)) {
      var tmp3_this = this;
      tmp3_this.h43_1 = tmp3_this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.g43_1.m(key)) {
      this.g43_1.j3(key);
    }
    tmp$ret$0 = this.g43_1.a(key);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (!(previous == null)) {
      this.r43(false, key, ensureNotNull(previous), value);
    }
    this.q43(this.i43_1);
    return previous;
  };
  protoOf(LruCache).q43 = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this.e43_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      if ((this.f() < 0 ? true : this.f43_1.l() ? !(this.f() === 0) : false) ? true : !(this.f43_1.l() === this.g43_1.l())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.f() > maxSize ? !this.f43_1.l() : false) {
        key = first(this.g43_1);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = this.f43_1;
        var tmp1_get = key;
        tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).q2(tmp1_get);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.remove' call
        var tmp2_remove = this.f43_1;
        var tmp3_remove = key;
        tmp$ret$1 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).s4(tmp3_remove);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.remove' call
        var tmp4_remove = this.g43_1;
        var tmp5_remove = key;
        tmp$ret$2 = (isInterface(tmp4_remove, MutableCollection) ? tmp4_remove : THROW_CCE()).j3(tmp5_remove);
        var tmp1_this = this;
        tmp1_this.h43_1 = tmp1_this.f() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        var tmp2_this = this;
        var tmp3 = tmp2_this.l43_1;
        tmp2_this.l43_1 = tmp3 + 1 | 0;
        tmp = Unit_getInstance();
      }
      tmp$ret$3 = tmp;
      tmp$ret$4 = tmp$ret$3;
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.r43(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).s4 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.e43_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    previous = this.f43_1.s4(key);
    this.g43_1.j3(key);
    var tmp;
    if (!(previous == null)) {
      var tmp0_this = this;
      tmp0_this.h43_1 = tmp0_this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    if (!(previous == null)) {
      this.r43(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).r43 = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).p43 = function (key) {
    return null;
  };
  protoOf(LruCache).o43 = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.e43_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var accesses = this.m43_1 + this.n43_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.m43_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.i43_1 + ',hits=' + this.m43_1 + ',misses=' + this.n43_1 + ',' + ('hitRate=' + hitPercent + '%]');
    tmp$ret$1 = tmp$ret$0;
  };
  function LruCache() {
    this.e43_1 = createSynchronizedObject();
    this.h43_1 = 0;
    this.i43_1 = 0;
    this.j43_1 = 0;
    this.k43_1 = 0;
    this.l43_1 = 0;
    this.m43_1 = 0;
    this.n43_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.s43_1 = get_EMPTY_INTS();
      $this.t43_1 = get_EMPTY_OBJECTS();
    } else {
      $this.s43_1 = new Int32Array(capacity);
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = capacity << 1;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp.t43_1 = tmp$ret$0;
    }
    $this.u43_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).v43 = function (key, hash) {
    var N = this.u43_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.s43_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.t43_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.s43_1[end] === hash : false) {
      if (equals(key, this.t43_1[end << 1]))
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.s43_1[i] === hash : false) {
      if (equals(key, this.t43_1[i << 1]))
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).w43 = function () {
    var N = this.u43_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.s43_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.t43_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.s43_1[end] === 0 : false) {
      if (null == this.t43_1[end << 1])
        return end;
      var tmp0 = end;
      end = tmp0 + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.s43_1[i] === 0 : false) {
      if (null == this.t43_1[i << 1])
        return i;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).k2 = function (key) {
    return this.x43(key) >= 0;
  };
  protoOf(SimpleArrayMap).x43 = function (key) {
    return key == null ? this.w43() : this.v43(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).q2 = function (key) {
    var index = this.x43(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.t43_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).y43 = function (index) {
    var tmp = this.t43_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).z43 = function (index) {
    var tmp = this.t43_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).l = function () {
    return this.u43_1 <= 0;
  };
  protoOf(SimpleArrayMap).h4 = function (key, value) {
    var osize = this.u43_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.w43();
    } else {
      hash = hashCode(key);
      index = this.v43(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.t43_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.t43_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.s43_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.s43_1.length + ' to ' + n);
      }
      this.s43_1 = copyOf(this.s43_1, n);
      this.t43_1 = copyOf_0(this.t43_1, n << 1);
      if (!(osize === this.u43_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.s43_1;
      var tmp1_copyInto = this.s43_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = index;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyInto;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp_0, tmp$ret$3, tmp2_copyInto, tmp3_copyInto, osize);
      tmp$ret$4 = tmp1_copyInto;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.t43_1;
      var tmp5_copyInto = this.t43_1;
      var tmp6_copyInto = (index + 1 | 0) << 1;
      var tmp7_copyInto = index << 1;
      var tmp8_copyInto = this.u43_1 << 1;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, tmp8_copyInto);
      tmp$ret$5 = tmp5_copyInto;
    }
    {
      if (!(osize === this.u43_1) ? true : index >= this.s43_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    this.s43_1[index] = hash;
    this.t43_1[index << 1] = key;
    this.t43_1[(index << 1) + 1 | 0] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.u43_1;
    tmp0_this.u43_1 = tmp1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.u43_1 === map.u43_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.u43_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.y43(i);
            var mine = this.z43(i);
            var theirs = map.q2(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.k2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this.u43_1 === map_0.f())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.u43_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.y43(i_0);
              var mine_0 = this.z43(i_0);
              var tmp$ret$0;
              // Inline function 'kotlin.collections.get' call
              var tmp0_get = map_0;
              tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).q2(key_0);
              var theirs_0 = tmp$ret$0;
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  var tmp$ret$1;
                  // Inline function 'kotlin.collections.containsKey' call
                  var tmp1_containsKey = map_0;
                  tmp$ret$1 = (isInterface(tmp1_containsKey, Map) ? tmp1_containsKey : THROW_CCE()).k2(key_0);
                  tmp = !tmp$ret$1;
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.s43_1;
    var array = this.t43_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.u43_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.u43_1, 28));
    buffer.n7(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.u43_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.hd(', ');
        }
        var key = this.y43(i);
        if (!(key === this)) {
          buffer.gd(key);
        } else {
          buffer.hd('(this Map)');
        }
        buffer.n7(_Char___init__impl__6a9atx(61));
        var value = this.z43(i);
        if (!(value === this)) {
          buffer.gd(value);
        } else {
          buffer.hd('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.n7(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.u43_1 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.a44_1 = new Long(15000, 0);
  }
  var Companion_instance_1;
  function Companion_getInstance_15() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Font() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e40_1 = new DefaultFontFamily();
    this.f40_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.g40_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.h40_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.i40_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_2;
  function Companion_getInstance_16() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.g44_1 = canLoadSynchronously;
    this.h44_1 = 0;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.k44_1 = 0;
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.o44_1 = name;
    this.p44_1 = fontFamilyName;
    this.q44_1 = 0;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.p44_1;
  };
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function FontListFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function resolve($this, typefaceRequest) {
    var result = $this.t44_1.z44(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.f45(null)).b2();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.u44_1.i45($typefaceRequest, this$0.r44_1, onAsyncCompletion, this$0.w44_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.v44_1.i45($typefaceRequest, this$0.r44_1, onAsyncCompletion, this$0.w44_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().j45_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.r44_1 = platformFontLoader;
    this.s44_1 = platformResolveInterceptor;
    this.t44_1 = typefaceRequestCache;
    this.u44_1 = fontListFontFamilyTypefaceAdapter;
    this.v44_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.w44_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).k45 = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.s44_1.l45(fontFamily), this.s44_1.m45(fontWeight), this.s44_1.n45(fontStyle), this.s44_1.o45(fontSynthesis), this.r44_1.p45()));
  };
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this$0.x44_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp;
      if (finalResult.q45()) {
        this$0.y44_1.h4($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.y44_1.s4($typefaceRequest);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.x44_1 = createSynchronizedObject();
    this.y44_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).z44 = function (typefaceRequest, resolveTypeface) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.x44_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.y44_1.q2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.q45()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.y44_1.s4(typefaceRequest);
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$_0('Could not load font', cause);
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var currentTypefaceResult = tmp_1;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp1_synchronized = this.x44_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp_3;
    if (this.y44_1.q2(typefaceRequest) == null ? currentTypefaceResult.q45() : false) {
      this.y44_1.h4(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    tmp$ret$5 = tmp_3;
    tmp$ret$6 = tmp$ret$5;
    return currentTypefaceResult;
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.j45_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_3;
  function Companion_getInstance_17() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PlatformResolveInterceptor() {
  }
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.a45_1 = fontFamily;
    this.b45_1 = fontWeight;
    this.c45_1 = fontStyle;
    this.d45_1 = fontSynthesis;
    this.e45_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).r45 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).f45 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.a45_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.b45_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c45_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.d45_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.e45_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.r45(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.r45.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.a45_1 + ', fontWeight=' + this.b45_1 + ', fontStyle=' + new FontStyle(this.c45_1) + ', fontSynthesis=' + new FontSynthesis(this.d45_1) + ', resourceLoaderCacheKey=' + toString_0(this.e45_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.a45_1 == null ? 0 : hashCode(this.a45_1);
    result = imul(result, 31) + this.b45_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.c45_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.d45_1) | 0;
    result = imul(result, 31) + (this.e45_1 == null ? 0 : hashCode(this.e45_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.a45_1, tmp0_other_with_cast.a45_1))
      return false;
    if (!this.b45_1.equals(tmp0_other_with_cast.b45_1))
      return false;
    if (!(this.c45_1 === tmp0_other_with_cast.c45_1))
      return false;
    if (!(this.d45_1 === tmp0_other_with_cast.d45_1))
      return false;
    if (!equals(this.e45_1, tmp0_other_with_cast.e45_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.s45_1 = value;
    this.t45_1 = cacheable;
    this.u45_1 = 0;
  }
  protoOf(Immutable).b2 = function () {
    return this.s45_1;
  };
  protoOf(Immutable).q45 = function () {
    return this.t45_1;
  };
  function Async(current) {
    this.v45_1 = current;
    this.w45_1 = 0;
  }
  protoOf(Async).b2 = function () {
    return this.v45_1.b2();
  };
  protoOf(Async).q45 = function () {
    return this.v45_1.d46_1;
  };
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (properties_initialized_FontFamilyResolver_kt_43uw85) {
    } else {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.e46_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.e46_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.e46_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.e46_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.e46_1, other);
  };
  function Key(font, loaderKey) {
    this.f46_1 = font;
    this.g46_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.f46_1 + ', loaderKey=' + toString_0(this.g46_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.f46_1);
    result = imul(result, 31) + (this.g46_1 == null ? 0 : hashCode(this.g46_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.f46_1, tmp0_other_with_cast.f46_1))
      return false;
    if (!equals(this.g46_1, tmp0_other_with_cast.g46_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p46_1 = _this__u8e3s4;
    this.q46_1 = font;
    this.r46_1 = platformFontLoader;
    this.s46_1 = forever;
    this.t46_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.u46_1 = new Key(this.q46_1, this.r46_1.p45());
            var tmp0_synchronized = this.p46_1.y46_1;
            var tmp0_elvis_lhs = this.p46_1.w46_1.q2(this.u46_1);
            var priorResult = tmp0_elvis_lhs == null ? this.p46_1.x46_1.q2(this.u46_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.e46_1);
            }

            this.jf_1 = 1;
            suspendResult = this.t46_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also = suspendResult;
            var tmp0_synchronized_0 = this.p46_1.y46_1;
            if (tmp1_also == null) {
              this.p46_1.x46_1.h4(this.u46_1, new AsyncTypefaceResult(this.p46_1.v46_1));
            } else if (this.s46_1) {
              this.p46_1.x46_1.h4(this.u46_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            } else {
              this.p46_1.w46_1.h4(this.u46_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            }

            return tmp1_also;
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function AsyncTypefaceCache() {
    this.v46_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.w46_1 = LruCache_init_$Create$(16);
    this.x46_1 = SimpleArrayMap_init_$Create$();
    this.y46_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).z46 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.p45());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.y46_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.x46_1.h4(key, new AsyncTypefaceResult(this.v46_1));
    } else if (forever) {
      tmp = this.x46_1.h4(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.w46_1.h4(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(AsyncTypefaceCache).a47 = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.z46(font, platformFontLoader, result, forever);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.z46.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).b47 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.p45());
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    var tmp0_synchronized = this.y46_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.w46_1.q2(key);
    tmp$ret$0 = tmp0_elvis_lhs == null ? this.x46_1.q2(key) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(AsyncTypefaceCache).c47 = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).ss = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.e47_1 = new FontMatcher();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    tmp.f47_1 = tmp$ret$0;
  }
  var Companion_instance_4;
  function Companion_getInstance_18() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.o47_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).p1x = function ($this$launch, $completion) {
    var tmp = this.q1x($this$launch, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.o47_1.q47(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).q1x = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.o47_1, completion);
    i.p47_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.g45_1 = asyncTypefaceCache;
    this.h45_1 = CoroutineScope_0(Companion_getInstance_18().f47_1.e6(injectedContext).e6(SupervisorJob(injectedContext.x5(Key_getInstance_0()))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).i45 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.a45_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().e47_1.u47(typefaceRequest.a45_1.t47_1, typefaceRequest.b45_1, typefaceRequest.c45_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.g45_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.f4();
    var synthesizedTypeface = tmp0_container.g4();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.g45_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.h45_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0_setValue = value$factory();
    return $this.c46_1.kk(_set____db54di);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation) {
    this.d48_1 = this$0;
    this.e48_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).f48 = function ($completion) {
    var tmp = this.g48($completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AsyncFontListLoader$load$slambda).h48 = function ($completion) {
    return this.f48($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.d48_1.i48(this.e48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$load$slambda).g48 = function (completion) {
    var i = new AsyncFontListLoader$load$slambda(this.d48_1, this.e48_1, completion);
    return i;
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $item, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation);
    var l = function ($completion) {
      return i.f48($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.r48_1 = this$0;
    this.s48_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).u48 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.q1x($this$withTimeoutOrNull, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).eg = function (p1, $completion) {
    return this.u48((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.r48_1.b46_1.v48(this.s48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 2) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).q1x = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.r48_1, this.s48_1, completion);
    i.t48_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.u48($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e49_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 12;
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.jf_1 = 2;
            continue $sm;
          case 2:
            this.kf_1 = 11;
            var tmp_0 = this;
            tmp_0.h49_1 = this.e49_1.x45_1;
            this.i49_1 = get_indices(this.h49_1).c();
            this.jf_1 = 3;
            continue $sm;
          case 3:
            if (!this.i49_1.d()) {
              this.jf_1 = 9;
              continue $sm;
            }

            this.j49_1 = this.i49_1.e();
            this.k49_1 = this.h49_1.g(this.j49_1);
            if (this.k49_1.c44() === Companion_getInstance_19().f44_1) {
              this.jf_1 = 4;
              suspendResult = this.e49_1.z45_1.c47(this.k49_1, this.e49_1.b46_1, false, AsyncFontListLoader$load$slambda_0(this.e49_1, this.k49_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 7;
              continue $sm;
            }

            break;
          case 4:
            this.l49_1 = suspendResult;
            if (!(this.l49_1 == null)) {
              _set_value__lx0xdg(this.e49_1, synthesizeTypeface(this.e49_1.y45_1.d45_1, this.l49_1, this.k49_1, this.e49_1.y45_1.b45_1, this.e49_1.y45_1.c45_1));
              this.g49_1 = Unit_getInstance();
              this.kf_1 = 12;
              this.jf_1 = 8;
              continue $sm;
            } else {
              this.jf_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 5:
            this.jf_1 = 6;
            continue $sm;
          case 6:
            this.jf_1 = 7;
            continue $sm;
          case 7:
            this.jf_1 = 3;
            continue $sm;
          case 8:
            var shouldCache = get_isActive(this.h5());
            this.e49_1.d46_1 = false;
            this.e49_1.a46_1(new Immutable(this.e49_1.b2(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.f49_1 = Unit_getInstance();
            this.kf_1 = 12;
            this.jf_1 = 10;
            continue $sm;
          case 10:
            var shouldCache_0 = get_isActive(this.h5());
            this.e49_1.d46_1 = false;
            this.e49_1.a46_1(new Immutable(this.e49_1.b2(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.kf_1 = 12;
            var t = this.mf_1;
            var shouldCache_1 = get_isActive(this.h5());
            this.e49_1.d46_1 = false;
            this.e49_1.a46_1(new Immutable(this.e49_1.b2(), shouldCache_1));
            throw t;
          case 12:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 12) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u49_1 = _this__u8e3s4;
    this.v49_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            this.kf_1 = 2;
            this.jf_1 = 1;
            Companion_getInstance_15();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.u49_1, this.v49_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w49_1 = suspendResult;
            this.kf_1 = 3;
            this.jf_1 = 4;
            continue $sm;
          case 2:
            this.kf_1 = 3;
            var tmp_1 = this.mf_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.mf_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.h5())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.w49_1 = tmp_3;
              this.jf_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.mf_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.mf_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.h5().x5(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.ss(this.h5(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.v49_1, uncaughtFontLoadException));
                }
                tmp_5.w49_1 = null;
                this.jf_1 = 4;
                continue $sm;
              } else {
                throw this.mf_1;
              }
            }

            break;
          case 3:
            throw this.mf_1;
          case 4:
            this.kf_1 = 3;
            return this.w49_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 3) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.x45_1 = fontList;
    this.y45_1 = typefaceRequest;
    this.z45_1 = asyncTypefaceCache;
    this.a46_1 = onCompletion;
    this.b46_1 = platformFontLoader;
    this.c46_1 = mutableStateOf(initialType);
    this.d46_1 = true;
  }
  protoOf(AsyncFontListLoader).b2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.c46_1.b2();
    return tmp$ret$0;
  };
  protoOf(AsyncFontListLoader).q47 = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AsyncFontListLoader).i48 = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.g(idx);
        var tmp1_subject = font.c44();
        if (tmp1_subject === Companion_getInstance_19().d44_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp0_synchronized = asyncTypefaceCache.y46_1;
            var tmp$ret$1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key = new Key(font, platformFontLoader.p45());
            var tmp0_elvis_lhs = asyncTypefaceCache.w46_1.q2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.x46_1.q2(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.e46_1);
              break $l$block;
            }
            tmp$ret$1 = tmp;
            tmp$ret$2 = tmp$ret$1;
            var tmp$ret$4;
            // Inline function 'kotlin.also' call
            var tmp$ret$3;
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.x49(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, cause);
              } else {
                throw $p;
              }
              tmp_0 = tmp_1;
            }
            tmp$ret$3 = tmp_0;
            var tmp1_also = tmp$ret$3;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.a47(font, platformFontLoader, tmp1_also);
            tmp$ret$4 = tmp1_also;
            tmp$ret$0 = tmp$ret$4;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.d45_1, result, font, typefaceRequest.b45_1, typefaceRequest.c45_1));
        } else if (tmp1_subject === Companion_getInstance_19().e44_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            var tmp$ret$7;
            // Inline function 'androidx.compose.ui.text.synchronized' call
            var tmp2_synchronized = asyncTypefaceCache.y46_1;
            var tmp$ret$6;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key_0 = new Key(font, platformFontLoader.p45());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.w46_1.q2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.x46_1.q2(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.e46_1);
              break $l$block_0;
            }
            tmp$ret$6 = tmp_3;
            tmp$ret$7 = tmp$ret$6;
            var tmp$ret$14;
            // Inline function 'kotlin.also' call
            var tmp$ret$13;
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp$ret$12;
            // Inline function 'kotlin.Result.getOrNull' call
            var tmp$ret$11;
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              var tmp$ret$9;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success = Companion_getInstance_4();
              var tmp$ret$8;
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              tmp$ret$8 = platformFontLoader.x49(font);
              var tmp1_success = tmp$ret$8;
              tmp$ret$9 = _Result___init__impl__xyqfz8(tmp1_success);
              tmp_4 = tmp$ret$9;
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                var tmp$ret$10;
                // Inline function 'kotlin.Companion.failure' call
                var tmp2_failure = Companion_getInstance_4();
                tmp$ret$10 = _Result___init__impl__xyqfz8(createFailure(e));
                tmp_5 = tmp$ret$10;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            tmp$ret$11 = tmp_4;
            var tmp3_getOrNull = tmp$ret$11;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(tmp3_getOrNull)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(tmp3_getOrNull);
              tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
            }
            tmp$ret$12 = tmp_6;
            tmp$ret$13 = tmp$ret$12;
            var tmp3_also = tmp$ret$13;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.a47(font, platformFontLoader, tmp3_also);
            tmp$ret$14 = tmp3_also;
            tmp$ret$5 = tmp$ret$14;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.d45_1, result_0, font, typefaceRequest.b45_1, typefaceRequest.c45_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().f44_1) {
          var cacheResult = asyncTypefaceCache.b47(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.a(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.e46_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.e46_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.d45_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.e46_1), font, typefaceRequest.b45_1, typefaceRequest.c45_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.b2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_19().d44_1 ? 'Blocking' : tmp0_subject === Companion_getInstance_19().e44_1 ? 'Optional' : tmp0_subject === Companion_getInstance_19().f44_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.d44_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.e44_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.f44_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_5;
  function Companion_getInstance_19() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    var tmp0_other_with_cast = other instanceof FontLoadingStrategy ? other.y49_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_19();
    this.y49_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.y49_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.y49_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.y49_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).u47 = function (fontList, fontWeight, fontStyle) {
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.g(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$0 = item.s2s().equals(fontWeight) ? item.b44() === fontStyle : false;
        if (tmp$ret$0) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    tmp$ret$1 = target;
    var tmp0_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$2 = !tmp0_let.l();
    if (tmp$ret$2) {
      return tmp0_let;
    }
    tmp$ret$3 = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.g(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        tmp$ret$4 = item_0.b44() === fontStyle;
        if (tmp$ret$4) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.a(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    tmp$ret$5 = target_0;
    var tmp1_ifEmpty = tmp$ret$5;
    var tmp_0;
    if (tmp1_ifEmpty.l()) {
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp$ret$6 = fontList;
      tmp_0 = tmp$ret$6;
    } else {
      tmp_0 = tmp1_ifEmpty;
    }
    tmp$ret$7 = tmp_0;
    var fontsToSearch = tmp$ret$7;
    var tmp_1;
    if (fontWeight.b4a(Companion_getInstance_22().i3z_1) < 0) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.g(index_1);
          var possibleWeight = font.s2s();
          if (!(null == null) ? possibleWeight.b4a(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.b4a(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.b4a(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.b4a(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.b4a(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.b4a(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      }
      var bestWeight = tmp_2;
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.g(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$8 = item_1.s2s().equals(bestWeight);
          if (tmp$ret$8) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.a(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp$ret$9 = target_1;
      tmp$ret$10 = tmp$ret$9;
      tmp_1 = tmp$ret$10;
    } else if (fontWeight.b4a(Companion_getInstance_22().j3z_1) > 0) {
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.g(index_3);
          var possibleWeight_0 = font_0.s2s();
          if (!(null == null) ? possibleWeight_0.b4a(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.b4a(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.b4a(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.b4a(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.b4a(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.b4a(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs == null ? bestWeightBelow_0 : tmp2_elvis_lhs;
      }
      var bestWeight_0 = tmp_3;
      var tmp$ret$12;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.g(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$11;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$11 = item_2.s2s().equals(bestWeight_0);
          if (tmp$ret$11) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.a(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp$ret$12 = target_2;
      tmp$ret$13 = tmp$ret$12;
      tmp_1 = tmp$ret$13;
    } else {
      var tmp$ret$21;
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var tmp2_filterByClosestWeight = Companion_getInstance_22().j3z_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.g(index_5);
          var possibleWeight_1 = font_1.s2s();
          if (!(null == null) ? possibleWeight_1.b4a(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(tmp2_filterByClosestWeight == null) ? possibleWeight_1.b4a(tmp2_filterByClosestWeight) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.b4a(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.b4a(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.b4a(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.b4a(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_0;
      }
      var bestWeight_1 = tmp_4;
      var tmp$ret$15;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.g(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          var tmp$ret$14;
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          tmp$ret$14 = item_3.s2s().equals(bestWeight_1);
          if (tmp$ret$14) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.a(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      tmp$ret$15 = target_3;
      tmp$ret$16 = tmp$ret$15;
      var tmp3_ifEmpty = tmp$ret$16;
      var tmp_5;
      if (tmp3_ifEmpty.l()) {
        var tmp$ret$20;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        var tmp$ret$19;
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var tmp0_filterByClosestWeight = Companion_getInstance_22().j3z_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.g(index_7);
            var possibleWeight_2 = font_2.s2s();
            if (!(tmp0_filterByClosestWeight == null) ? possibleWeight_2.b4a(tmp0_filterByClosestWeight) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.b4a(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.b4a(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.b4a(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.b4a(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.b4a(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_1 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_1;
        }
        var bestWeight_2 = tmp_6;
        var tmp$ret$18;
        // Inline function 'androidx.compose.ui.text.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$(fontsToSearch.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.g(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            var tmp$ret$17;
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            tmp$ret$17 = item_4.s2s().equals(bestWeight_2);
            if (tmp$ret$17) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.a(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp$ret$18 = target_4;
        tmp$ret$19 = tmp$ret$18;
        tmp$ret$20 = tmp$ret$19;
        tmp_5 = tmp$ret$20;
      } else {
        tmp_5 = tmp3_ifEmpty;
      }
      tmp$ret$21 = tmp_5;
      tmp_1 = tmp$ret$21;
    }
    var result = tmp_1;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_20().y3z_1 ? 'Normal' : tmp0_subject === Companion_getInstance_20().z3z_1 ? 'Italic' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.y3z_1 = _FontStyle___init__impl__jcnduf(0);
    this.z3z_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_6;
  function Companion_getInstance_20() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    var tmp0_other_with_cast = other instanceof FontStyle ? other.c4a_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.c4a_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.c4a_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.c4a_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.c4a_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_21().a40_1 ? 'None' : tmp0_subject === Companion_getInstance_21().b40_1 ? 'All' : tmp0_subject === Companion_getInstance_21().c40_1 ? 'Weight' : tmp0_subject === Companion_getInstance_21().d40_1 ? 'Style' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.a40_1 = _FontSynthesis___init__impl__n397bg(0);
    this.b40_1 = _FontSynthesis___init__impl__n397bg(1);
    this.c40_1 = _FontSynthesis___init__impl__n397bg(2);
    this.d40_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_7;
  function Companion_getInstance_21() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    var tmp0_other_with_cast = other instanceof FontSynthesis ? other.d4a_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.d4a_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.d4a_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.d4a_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.d4a_1, other);
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.f3z_1 = new FontWeight(100);
    this.g3z_1 = new FontWeight(200);
    this.h3z_1 = new FontWeight(300);
    this.i3z_1 = new FontWeight(400);
    this.j3z_1 = new FontWeight(500);
    this.k3z_1 = new FontWeight(600);
    this.l3z_1 = new FontWeight(700);
    this.m3z_1 = new FontWeight(800);
    this.n3z_1 = new FontWeight(900);
    this.o3z_1 = this.f3z_1;
    this.p3z_1 = this.g3z_1;
    this.q3z_1 = this.h3z_1;
    this.r3z_1 = this.i3z_1;
    this.s3z_1 = this.j3z_1;
    this.t3z_1 = this.k3z_1;
    this.u3z_1 = this.l3z_1;
    this.v3z_1 = this.m3z_1;
    this.w3z_1 = this.n3z_1;
    this.x3z_1 = listOf([this.f3z_1, this.g3z_1, this.h3z_1, this.i3z_1, this.j3z_1, this.k3z_1, this.l3z_1, this.m3z_1, this.n3z_1]);
  }
  var Companion_instance_8;
  function Companion_getInstance_22() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.z49_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.z49_1;
    var tmp0_require = 1 <= containsArg ? containsArg <= 1000 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.z49_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a4a_1 = 0;
  }
  protoOf(FontWeight).b4a = function (other) {
    return compareTo(this.z49_1, other.z49_1);
  };
  protoOf(FontWeight).u8 = function (other) {
    return this.b4a(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.z49_1 === other.z49_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.z49_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.z49_1 + ')';
  };
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.e4a_1 = annotatedString;
    this.f4a_1 = newCursorPosition;
    this.g4a_1 = 0;
  }
  protoOf(CommitTextCommand).h4a = function () {
    return this.e4a_1.e3u_1;
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.h4a() === other.h4a()))
      return false;
    if (!(this.f4a_1 === other.f4a_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.h4a());
    result = imul(31, result) + this.f4a_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.h4a() + "', newCursorPosition=" + this.f4a_1 + ')';
  };
  function PlatformTextInputPluginRegistryImpl(factory) {
    this.i4a_1 = factory;
    this.j4a_1 = mutableStateMapOf();
    this.k4a_1 = false;
    this.l4a_1 = null;
    this.m4a_1 = 0;
  }
  function TextInputService(platformTextInputService) {
    this.n4a_1 = platformTextInputService;
    this.o4a_1 = new AtomicReference(null);
    this.p4a_1 = 8;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  var Companion_instance_9;
  function Companion_getInstance_23() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Locale(platformLocale) {
    Companion_getInstance_23();
    this.q4a_1 = platformLocale;
    this.r4a_1 = 0;
  }
  protoOf(Locale).s4a = function () {
    return this.q4a_1.s4a();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.s4a() === other.s4a();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.s4a());
  };
  protoOf(Locale).toString = function () {
    return this.s4a();
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).m1b = function () {
    return get_platformLocaleDelegate().m1b();
  };
  var Companion_instance_10;
  function Companion_getInstance_24() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function LocaleList(localeList) {
    Companion_getInstance_24();
    this.t4a_1 = localeList;
    this.u4a_1 = this.t4a_1.f();
    this.v4a_1 = 0;
  }
  protoOf(LocaleList).f = function () {
    return this.u4a_1;
  };
  protoOf(LocaleList).w4a = function (element) {
    return this.t4a_1.m(element);
  };
  protoOf(LocaleList).m = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.w4a(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).x4a = function (elements) {
    return this.t4a_1.d1(elements);
  };
  protoOf(LocaleList).d1 = function (elements) {
    return this.x4a(elements);
  };
  protoOf(LocaleList).l = function () {
    return this.t4a_1.l();
  };
  protoOf(LocaleList).c = function () {
    return this.t4a_1.c();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.t4a_1, other.t4a_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.t4a_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.t4a_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (properties_initialized_PlatformLocale_kt_ya8ii9) {
    } else {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.j40_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.k40_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.l40_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_11;
  function Companion_getInstance_25() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.y4a_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.y4a_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.y4a_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.y4a_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.y4a_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.n3x_1 = _Hyphens___init__impl__m2cvg8(1);
    this.o3x_1 = _Hyphens___init__impl__m2cvg8(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_26() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_26().n3x_1 ? 'Hyphens.None' : tmp0_subject === Companion_getInstance_26().o3x_1 ? 'Hyphens.Auto' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    var tmp0_other_with_cast = other instanceof Hyphens ? other.z4a_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.z4a_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.z4a_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.z4a_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.z4a_1, other);
  };
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_27().e3x_1 ? 'Left' : tmp0_subject === Companion_getInstance_27().f3x_1 ? 'Right' : tmp0_subject === Companion_getInstance_27().g3x_1 ? 'Center' : tmp0_subject === Companion_getInstance_27().h3x_1 ? 'Justify' : tmp0_subject === Companion_getInstance_27().i3x_1 ? 'Start' : tmp0_subject === Companion_getInstance_27().j3x_1 ? 'End' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.e3x_1 = _TextAlign___init__impl__99wz4v(1);
    this.f3x_1 = _TextAlign___init__impl__99wz4v(2);
    this.g3x_1 = _TextAlign___init__impl__99wz4v(3);
    this.h3x_1 = _TextAlign___init__impl__99wz4v(4);
    this.i3x_1 = _TextAlign___init__impl__99wz4v(5);
    this.j3x_1 = _TextAlign___init__impl__99wz4v(6);
  }
  var Companion_instance_13;
  function Companion_getInstance_27() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    var tmp0_other_with_cast = other instanceof TextAlign ? other.a4b_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_27();
    this.a4b_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.a4b_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.a4b_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.a4b_1, other);
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.n40_1 = new TextDecoration(0);
    this.o40_1 = new TextDecoration(1);
    this.p40_1 = new TextDecoration(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_28() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TextDecoration(mask) {
    Companion_getInstance_28();
    this.b4b_1 = mask;
    this.c4b_1 = 0;
  }
  protoOf(TextDecoration).d4b = function (other) {
    return (this.b4b_1 | other.b4b_1) === this.b4b_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.b4b_1 === 0) {
      return 'TextDecoration.None';
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var values = tmp$ret$0;
    if (!((this.b4b_1 & Companion_getInstance_28().o40_1.b4b_1) === 0)) {
      values.a('Underline');
    }
    if (!((this.b4b_1 & Companion_getInstance_28().p40_1.b4b_1) === 0)) {
      values.a('LineThrough');
    }
    if (values.f() === 1) {
      return 'TextDecoration.' + values.g(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.b4b_1 === other.b4b_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.b4b_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_29().z42_1 ? 'Ltr' : tmp0_subject === Companion_getInstance_29().a43_1 ? 'Rtl' : tmp0_subject === Companion_getInstance_29().b43_1 ? 'Content' : tmp0_subject === Companion_getInstance_29().c43_1 ? 'ContentOrLtr' : tmp0_subject === Companion_getInstance_29().d43_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.z42_1 = _TextDirection___init__impl__lh8lzt(1);
    this.a43_1 = _TextDirection___init__impl__lh8lzt(2);
    this.b43_1 = _TextDirection___init__impl__lh8lzt(3);
    this.c43_1 = _TextDirection___init__impl__lh8lzt(4);
    this.d43_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  var Companion_instance_15;
  function Companion_getInstance_29() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    var tmp0_other_with_cast = other instanceof TextDirection ? other.e4b_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_29();
    this.e4b_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.e4b_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.e4b_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.e4b_1, other);
  };
  function Unspecified() {
    Unspecified_instance = this;
    this.f4b_1 = 0;
  }
  protoOf(Unspecified).p39 = function () {
    return Companion_getInstance().n39_1;
  };
  protoOf(Unspecified).y3y = function () {
    return null;
  };
  protoOf(Unspecified).y36 = function () {
    FloatCompanionObject_getInstance();
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).d3y = function (color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$0) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  protoOf(Companion_16).e3y = function (brush, alpha) {
    var tmp0_subject = brush;
    var tmp;
    if (tmp0_subject == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (tmp0_subject instanceof SolidColor) {
        tmp = this.d3y(modulate(brush.t39_1, alpha));
      } else {
        if (tmp0_subject instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_30() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.y36();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.g4b_1 = value;
    this.h4b_1 = alpha;
  }
  protoOf(BrushStyle).y36 = function () {
    return this.h4b_1;
  };
  protoOf(BrushStyle).p39 = function () {
    return Companion_getInstance().n39_1;
  };
  protoOf(BrushStyle).y3y = function () {
    return this.g4b_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.g4b_1 + ', alpha=' + this.h4b_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.g4b_1);
    result = imul(result, 31) + getNumberHashCode(this.h4b_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.g4b_1, tmp0_other_with_cast.g4b_1))
      return false;
    if (!equals(this.h4b_1, tmp0_other_with_cast.h4b_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.i4b_1 = value;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = this.i4b_1;
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    var tmp1_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      tmp$ret$1 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).p39 = function () {
    return this.i4b_1;
  };
  protoOf(ColorStyle).y3y = function () {
    return null;
  };
  protoOf(ColorStyle).y36 = function () {
    return _Color___get_alpha__impl__wcfyv1(this.p39());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.i4b_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.i4b_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.i4b_1, tmp0_other_with_cast.i4b_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return (isNaN_0(alpha) ? true : alpha >= 1.0) ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.m40_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_17;
  function Companion_getInstance_31() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_31();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.j4b_1 = scaleX;
    this.k4b_1 = skewX;
    this.l4b_1 = 0;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.j4b_1 === other.j4b_1))
      return false;
    if (!(this.k4b_1 === other.k4b_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.j4b_1);
    result = imul(31, result) + getNumberHashCode(this.k4b_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.j4b_1 + ', skewX=' + this.k4b_1 + ')';
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.q3x_1 = new TextIndent_0();
  }
  var Companion_instance_18;
  function Companion_getInstance_32() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_32();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.m4b_1 = firstLine;
    this.n4b_1 = restLine;
    this.o4b_1 = 0;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.m4b_1, other.m4b_1))
      return false;
    if (!equals(this.n4b_1, other.n4b_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.m4b_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.n4b_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.m4b_1) + ', restLine=' + new TextUnit(this.n4b_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_33().p41_1 ? 'Clip' : tmp0_subject === Companion_getInstance_33().q41_1 ? 'Ellipsis' : tmp0_subject === Companion_getInstance_33().r41_1 ? 'Visible' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.p41_1 = _TextOverflow___init__impl__obguoe(1);
    this.q41_1 = _TextOverflow___init__impl__obguoe(2);
    this.r41_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_19;
  function Companion_getInstance_33() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    var tmp0_other_with_cast = other instanceof TextOverflow ? other.p4b_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_33();
    this.p4b_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.p4b_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.p4b_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.p4b_1, other);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function createPlatformLocaleDelegate() {
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale(locale) {
    this.q4b_1 = locale;
  }
  protoOf(JsLocale).s4a = function () {
    throw new NotImplementedError('An operation is not implemented: implement native toLanguageTag');
  };
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).m1b = function () {
    return new LocaleList(listOf_0(new Locale(new JsLocale(new Object()))));
  };
  function get_GenericFontFamiliesMapping() {
    _init_properties_JsFont_js_kt__oyv8zx();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = GenericFontFamiliesMapping$factory();
    tmp$ret$0 = GenericFontFamiliesMapping$delegate.b2();
    return tmp$ret$0;
  }
  var GenericFontFamiliesMapping$delegate;
  var typefacesCache;
  function Platform$Companion$Current$delegate$lambda() {
    println('TODO: selecting MacOS unconditionally');
    return Platform_MacOS_getInstance();
  }
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_Unknown_instance;
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    tmp.r4b_1 = lazy_0(Platform$Companion$Current$delegate$lambda);
  }
  protoOf(Companion_20).s4b = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Current$factory();
    tmp$ret$0 = this.r4b_1.b2();
    return tmp$ret$0;
  };
  var Companion_instance_20;
  function Companion_getInstance_34() {
    Platform_initEntries();
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Linux_instance = new Platform('Linux', 0);
    Platform_Windows_instance = new Platform('Windows', 1);
    Platform_MacOS_instance = new Platform('MacOS', 2);
    Platform_Unknown_instance = new Platform('Unknown', 3);
    Companion_getInstance_34();
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function loadFromTypefacesCache(font) {
    _init_properties_JsFont_js_kt__oyv8zx();
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp0_subject = font;
    var tmp;
    if (tmp0_subject instanceof LoadedFont) {
      tmp = Companion_getInstance_5().c2y(Companion_getInstance_6().o2q(font.t4b_1));
    } else {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_JsFont_js_kt__oyv8zx();
    var tmp0_subject = Companion_getInstance_34().s4b();
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().f40_1.o44_1, listOf_0('Arial')), to(Companion_getInstance_16().g40_1.o44_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().h40_1.o44_1, listOf_0('Consolas')), to(Companion_getInstance_16().i40_1.o44_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().f40_1.o44_1, listOf(['Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().g40_1.o44_1, listOf_0('Times')), to(Companion_getInstance_16().h40_1.o44_1, listOf_0('Courier')), to(Companion_getInstance_16().i40_1.o44_1, listOf_0('Apple Chancery'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().f40_1.o44_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_16().g40_1.o44_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().h40_1.o44_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_16().i40_1.o44_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
        tmp = mapOf([to(Companion_getInstance_16().f40_1.o44_1, listOf_0('Arial')), to(Companion_getInstance_16().g40_1.o44_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().h40_1.o44_1, listOf_0('Consolas')), to(Companion_getInstance_16().i40_1.o44_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function typefacesCache$1() {
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  function Current$factory() {
    return getPropertyCallableRef('Current', 1, KProperty1, function (receiver) {
      return receiver.s4b();
    }, null);
  }
  var properties_initialized_JsFont_js_kt_uv7ahb;
  function _init_properties_JsFont_js_kt__oyv8zx() {
    if (properties_initialized_JsFont_js_kt_uv7ahb) {
    } else {
      properties_initialized_JsFont_js_kt_uv7ahb = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
      typefacesCache = new typefacesCache$1();
    }
  }
  function contentBasedTextDirection(_this__u8e3s4) {
    return null;
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).p45 = function () {
    println('TODO: implement proper js PlatformFont.cacheKey');
    return this.u4b();
  };
  function WeakHashMap() {
  }
  protoOf(WeakHashMap).c2 = function () {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).s2 = function () {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).r2 = function () {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).f = function () {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).k2 = function (key) {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).v4b = function () {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).l3 = function () {
    return this.v4b();
  };
  protoOf(WeakHashMap).q2 = function (key) {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).h4 = function (key, value) {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).ia = function (from) {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).s4 = function (key) {
    throw new NotImplementedError();
  };
  protoOf(WeakHashMap).l = function () {
    throw new NotImplementedError();
  };
  function getOrPut(_this__u8e3s4, key, default_0) {
    return default_0(key);
  }
  function isNeutralDirectionality(_this__u8e3s4) {
    println('TODO: implement Char.isNeutralDirectionality in jsNativeMain');
    return false;
  }
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.s41_1 = spanStyle;
    $this.t41_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.t41_1, other.t41_1))
      return false;
    if (!equals(this.s41_1, other.s41_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.u41_1 = 0;
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function _get_text__de5ose($this) {
    return $this.k4c_1.w4b_1;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = _get_lineMetrics__5iiuki($this);
      var indexedObject = tmp0_firstOrNull;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
        tmp$ret$0 = vertical < element.l2z_1 + element.g2z_1;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp;
    if (_get_text__de5ose($this) === '') {
      var metrics = $this.l4c_1.r4c().c2r();
      var ascent = -metrics.w2r_1;
      var descent = metrics.x2r_1;
      var baseline = $this.m4c_1.u2z();
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.l4c_1.s4c().v30();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var tmp_0;
      if (((tmp0_with.th() ? !tmp0_with.u31() : false) ? tmp0_with.x31() : false) ? tmp0_with.q31() > 0.0 : false) {
        tmp_0 = tmp0_with.y2j() * tmp0_with.q31();
      } else {
        tmp_0 = ascent + descent;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      var height = tmp$ret$1;
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_arrayOf;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    } else {
      var tmp_1 = $this.m4c_1.b30();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    var from = offset - 1 | 0;
    var isRtl = $this.k4c_1.c4c_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.m4c_1.y2z(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (equals(new Char(charSequenceGet(_get_text__de5ose($this), from)), new Char(_Char___init__impl__6a9atx(10)))) {
        var tmp;
        if (!isRtl) {
          var bottom = box.y31_1.q2o_1 + box.y31_1.q2o_1 - box.y31_1.o2o_1;
          var rect = new Rect_0(0.0, box.y31_1.q2o_1, 0.0, bottom);
          return new TextBox(rect, box.a32());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose($this))) {
            var bottom_0 = box.y31_1.q2o_1 + box.y31_1.q2o_1 - box.y31_1.o2o_1;
            var rect_0 = new Rect_0($this.x2j(), box.y31_1.q2o_1, $this.x2j(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.a32());
          } else {
            var nextBox = first_0($this.m4c_1.y2z(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.y31_1.n2o_1, nextBox.y31_1.o2o_1, nextBox.y31_1.n2o_1, nextBox.y31_1.q2o_1);
            tmp_0 = new TextBox(rect_1, nextBox.a32());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.g4c_1 = maxLines;
    this.h4c_1 = ellipsis;
    this.i4c_1 = constraints;
    this.j4c_1 = this.h4c_1 ? '\u2026' : '';
    var tmp = this;
    tmp.k4c_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.k4c_1.t4c();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    tmp0_apply.u4c(this.g4c_1, this.j4c_1);
    tmp$ret$0 = tmp0_apply;
    tmp_0.l4c_1 = tmp$ret$0;
    this.m4c_1 = this.l4c_1.v4c(this.x2j());
    this.m4c_1.w2z(this.x2j());
  }
  protoOf(SkiaParagraph).x2j = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.i4c_1);
  };
  protoOf(SkiaParagraph).y2j = function () {
    return this.m4c_1.y2j();
  };
  protoOf(SkiaParagraph).s2z = function () {
    return this.k4c_1.e4c_1;
  };
  protoOf(SkiaParagraph).b3w = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.l2z_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).c3w = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.l2z_1;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).r3v = function () {
    return this.m4c_1.v2z();
  };
  protoOf(SkiaParagraph).q3v = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' ? true : this.m4c_1.c30() < 1) {
      tmp = 1;
    } else {
      tmp = this.m4c_1.c30();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).z3v = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.m4c_1.z2z();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.length);
    var indexedObject = tmp1_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      tmp$ret$0 = toComposeRect(item.y31_1);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(SkiaParagraph).i3w = function (start, end) {
    var boxes = this.m4c_1.y2z(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var indexedObject = boxes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).y2v(b.y31_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).r3w = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.l2z_1 - tmp0_safe_receiver.f2z_1;
      tmp$ret$0 = Math.floor(tmp0_floor);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).t3w = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 ? metrics.a2z_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].b2z_1 : false) {
        tmp_1 = metrics.b2z_1;
      } else if (metrics.a2z_1 < _get_text__de5ose(this).length ? equals(new Char(charSequenceGet(_get_text__de5ose(this), metrics.a2z_1)), new Char(_Char___init__impl__6a9atx(10))) : false) {
        tmp_1 = metrics.a2z_1;
      } else {
        tmp_1 = metrics.c2z_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.b2z_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).l3w = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2z_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).o3w = function (position) {
    var glyphPosition = this.m4c_1.a30(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).e31_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.a2z_1 < expectedLine.b2z_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.k2z_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.n2z() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.m4c_1.y2z(expectedLine.a2z_1, expectedLine.e2z_1 ? expectedLine.b2z_1 : expectedLine.b2z_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp1_safe_receiver = rects;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y31_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.n2o_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.k2z_1 : tmp4_elvis_lhs;
    var tmp5_safe_receiver = rects;
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : lastOrNull(tmp5_safe_receiver);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.y31_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.p2o_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.n2z() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.m4c_1.a30(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).e31_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.m4c_1.a30(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).e31_1;
      var tmp9_safe_receiver = getOrNull_0(_get_text__de5ose(this), correctedGlyphPosition);
      var tmp_1;
      var tmp_2 = tmp9_safe_receiver;
      if ((tmp_2 == null ? null : new Char(tmp_2)) == null) {
        tmp_1 = null;
      } else {
        tmp_1 = isNeutralDirectionality(tmp9_safe_receiver);
      }
      var tmp10_elvis_lhs = tmp_1;
      var isNeutralChar = tmp10_elvis_lhs == null ? false : tmp10_elvis_lhs;
      var tmp_3;
      if (!isNeutralChar) {
        var tmp11_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_3 = equals(tmp11_safe_receiver == null ? null : tmp11_safe_receiver.a32(), Direction_RTL_getInstance());
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).e3w = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l4c_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.w4c(color, shadow, textDecoration);
    tmp0_with.x4c(drawStyle);
    tmp0_with.y4c(blendMode);
    tmp$ret$0 = tmp0_with.v4c(this.x2j());
    tmp$ret$1 = tmp$ret$0;
    tmp.m4c_1 = tmp$ret$1;
    this.m4c_1.x2z(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).g3w = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.l4c_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.z4c(brush, Size(this.x2j(), this.y2j()), alpha, shadow, textDecoration);
    tmp0_with.x4c(drawStyle);
    tmp0_with.y4c(blendMode);
    tmp$ret$0 = tmp0_with.v4c(this.x2j());
    tmp$ret$1 = tmp$ret$0;
    tmp.m4c_1 = tmp$ret$1;
    this.m4c_1.x2z(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function createFontFamilyResolver() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function createFontFamilyResolver_0(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).i45 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.a45_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.a45_1;
    var result = skiaFontLoader.c4d(tmp0_elvis_lhs == null ? Companion_getInstance_16().e40_1 : tmp0_elvis_lhs, typefaceRequest.b45_1, typefaceRequest.c45_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.a4d_1 = fontCache;
    this.b4d_1 = this.a4d_1;
  }
  protoOf(SkiaFontLoader).d4d = function () {
    return this.a4d_1.e4d_1;
  };
  protoOf(SkiaFontLoader).x49 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.c44() === Companion_getInstance_19().e44_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.c44();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().d44_1) {
      tmp = this.a4d_1.h4d(font);
    } else if (tmp0_subject === Companion_getInstance_19().e44_1) {
      var tmp$ret$4;
      // Inline function 'kotlin.Result.getOrNull' call
      var tmp$ret$3;
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_4();
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        tmp$ret$0 = this.a4d_1.h4d(font);
        var tmp1_success = tmp$ret$0;
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
        tmp_0 = tmp$ret$1;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$2;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_4();
          tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
          tmp_1 = tmp$ret$2;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$3 = tmp_0;
      var tmp3_getOrNull = tmp$ret$3;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(tmp3_getOrNull)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(tmp3_getOrNull);
        tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      }
      tmp$ret$4 = tmp_2;
      tmp = tmp$ret$4;
    } else if (tmp0_subject === Companion_getInstance_19().f44_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.c44()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).c4d = function (fontFamily, fontWeight, fontStyle) {
    return this.a4d_1.c4d(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).i4d = function (font, $completion) {
    return this.x49(font);
  };
  protoOf(SkiaFontLoader).v48 = function (font, $completion) {
    return this.i4d(font, $completion);
  };
  protoOf(SkiaFontLoader).p45 = function () {
    return this.b4d_1;
  };
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.n4c_1 = text;
    this.o4c_1 = new ParagraphBuilder_0(fontFamilyResolver, this.n4c_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.p4c_1 = null;
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.q4c_1 = NaN;
  }
  protoOf(ParagraphLayouter).r4c = function () {
    return this.o4c_1.r4c();
  };
  protoOf(ParagraphLayouter).s4c = function () {
    return this.o4c_1.s4c();
  };
  protoOf(ParagraphLayouter).u4c = function (maxLines, ellipsis) {
    if (!(this.o4c_1.o4d_1 === maxLines) ? true : !(this.o4c_1.n4d_1 === ellipsis)) {
      this.o4c_1.o4d_1 = maxLines;
      this.o4c_1.n4d_1 = ellipsis;
      this.p4c_1 = null;
    }
  };
  protoOf(ParagraphLayouter).w4c = function (color, shadow, textDecoration) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$0) {
      tmp = color;
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp$ret$1 = this.o4c_1.l4d_1.p39();
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    var actualColor = tmp$ret$2;
    if ((!equals(this.o4c_1.l4d_1.p39(), actualColor) ? true : !equals(this.o4c_1.l4d_1.q42(), shadow)) ? true : !equals(this.o4c_1.l4d_1.p42(), textDecoration)) {
      this.o4c_1.l4d_1 = this.o4c_1.l4d_1.b42(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.p4c_1 = null;
    }
  };
  protoOf(ParagraphLayouter).z4c = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.o4c_1.m4d_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.o4c_1.l4d_1.y3y(), brush)) {
      tmp_4 = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp$ret$0 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().q2k_1));
      tmp_4 = tmp$ret$0;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(this.o4c_1.l4d_1.y36(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.o4c_1.l4d_1.q42(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.o4c_1.l4d_1.p42(), textDecoration);
    }
    if (tmp) {
      this.o4c_1.l4d_1 = this.o4c_1.l4d_1.d42(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.o4c_1.m4d_1 = brushSize;
      this.p4c_1 = null;
    }
  };
  protoOf(ParagraphLayouter).x4c = function (drawStyle) {
    if (!equals(this.o4c_1.t4d_1, drawStyle)) {
      this.o4c_1.t4d_1 = drawStyle;
      this.p4c_1 = null;
    }
  };
  protoOf(ParagraphLayouter).y4c = function (blendMode) {
    if (!(this.o4c_1.u4d_1 === blendMode)) {
      this.o4c_1.u4d_1 = blendMode;
      this.p4c_1 = null;
    }
  };
  protoOf(ParagraphLayouter).v4c = function (width) {
    var paragraph = this.p4c_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.q4c_1, width)) {
        this.q4c_1 = width;
        paragraph.w2z(width);
      }
      tmp = paragraph;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = this.o4c_1.a1j();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.p4c_1 = tmp0_apply;
      tmp0_apply.w2z(width);
      tmp$ret$0 = tmp0_apply;
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = _this__u8e3s4 - other;
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0 < 1.0E-5;
  }
  function FontLoadResult(typeface, aliases) {
    this.b4e_1 = typeface;
    this.c4e_1 = aliases;
    this.d4e_1 = 8;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().q2(generic.o44_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Unknown generic font family ' + generic.o44_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.g4d_1.m(key)) {
      $this.f4d_1.a33(typeface, key);
      $this.g4d_1.a(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp0_subject = fontFamily;
    var tmp;
    if (tmp0_subject instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (tmp0_subject instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.g4e_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.h4e_1;
        var alias = tmp1_elvis_lhs == null ? typeface.i4e_1.f2y() : tmp1_elvis_lhs;
        if (!$this.g4d_1.m(alias)) {
          $this.f4d_1.a33(typeface.i4e_1, alias);
          $this.g4d_1.a(alias);
        }
        tmp = listOf_0(alias);
      } else {
        if (tmp0_subject instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(tmp0_subject, Companion_getInstance_16().e40_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_16().f40_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache() {
    this.e4d_1 = FontCollection_init_$Create$();
    this.f4d_1 = new TypefaceFontProvider();
    this.e4d_1.s2y(Companion_getInstance_8().m2s_1);
    this.e4d_1.r2y(this.f4d_1);
    this.g4d_1 = HashSet_init_$Create$();
  }
  protoOf(FontCache).h4d = function (font) {
    var typeface = loadFromTypefacesCache(font);
    ensureRegistered(this, typeface, font.p45());
    return new FontLoadResult(typeface, listOf_0(font.p45()));
  };
  protoOf(FontCache).c4d = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).t2s(fontWeight.z49_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.e4d_1.u2y(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function LoadedFont() {
  }
  function FontLoader() {
    this.j4e_1 = new FontCache();
    this.k4e_1 = createFontFamilyResolver_0(this.j4e_1);
    this.l4e_1 = 8;
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_9().n37_1 : blendMode;
    canvas.c3a();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = _this__u8e3s4.l3v_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.s3v_1.g3w(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.f3a(0.0, item.s3v_1.y2j());
      }
       while (inductionVariable <= last);
    canvas.d3a();
  }
  function get_DefaultFontSize_0() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_20().z3z_1 ? Companion_getInstance_10().q2s_1 : Companion_getInstance_10().o2s_1;
  }
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_7().q2k_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().q3f_1 : blendMode;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    tmp$ret$0 = density.r2l(spanStyle.g3y_1);
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp_0;
    if (get_isUnspecified(spanStyle.m3y_1)) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp$ret$2 = density.r2l(spanStyle.m3y_1);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    ComputedStyle.call($this, spanStyle.f3y_1, brushSize, tmp, spanStyle.h3y_1, spanStyle.i3y_1, spanStyle.j3y_1, spanStyle.k3y_1, spanStyle.l3y_1, tmp_0, spanStyle.n3y_1, spanStyle.o3y_1, spanStyle.p3y_1, spanStyle.q3y_1, spanStyle.r3y_1, spanStyle.s3y_1, spanStyle.u3y_1, blendMode);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, objectCreate(protoOf(ComputedStyle)));
  }
  function toTextPaint($this) {
    var tmp$ret$4;
    // Inline function 'kotlin.let' call
    var tmp0_let = Paint_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp0_with = asComposePaint(tmp0_let);
      // Inline function 'kotlin.contracts.contract' call
      tmp0_with.o39($this.m4e_1.p39());
      applyBrush(tmp0_with, $this.m4e_1.y3y(), $this.n4e_1, $this.m4e_1.y36());
      applyDrawStyle(tmp0_with, $this.b4f_1);
      tmp0_with.j3l($this.c4f_1);
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = (!(tmp0_with.q39() == null) ? true : !(tmp0_with.g3s() === Companion_getInstance_11().z3f_1)) ? true : !tmp0_let.c2v();
      if (tmp$ret$0) {
        tmp = tmp0_let;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      break $l$block;
      tmp$ret$2 = tmp$ret$3;
    }
    tmp$ret$4 = tmp$ret$2;
    return tmp$ret$4;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode) {
    background = background === VOID ? Companion_getInstance().n39_1 : background;
    this.m4e_1 = textForegroundStyle;
    this.n4e_1 = brushSize;
    this.o4e_1 = fontSize;
    this.p4e_1 = fontWeight;
    this.q4e_1 = fontStyle;
    this.r4e_1 = fontSynthesis;
    this.s4e_1 = fontFamily;
    this.t4e_1 = fontFeatureSettings;
    this.u4e_1 = letterSpacing;
    this.v4e_1 = baselineShift;
    this.w4e_1 = textGeometricTransform;
    this.x4e_1 = localeList;
    this.y4e_1 = background;
    this.z4e_1 = textDecoration;
    this.a4f_1 = shadow;
    this.b4f_1 = drawStyle;
    this.c4f_1 = blendMode;
  }
  protoOf(ComputedStyle).d4f = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = this.m4e_1.p39();
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$0) {
      res.r2u(toArgb(this.m4e_1.p39()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.f32(foreground);
    }
    var tmp0_safe_receiver = this.q4e_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.l32(toSkFontStyle(tmp0_safe_receiver));
      tmp$ret$1 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.z4e_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.j32(toSkDecorationStyle(tmp1_safe_receiver, this.m4e_1.p39()));
      tmp$ret$2 = Unit_getInstance();
    }
    if (!equals(this.y4e_1, Companion_getInstance().n39_1)) {
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp1_also = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp1_also.r2u(toArgb(this.y4e_1));
      tmp$ret$3 = tmp1_also;
      res.h32(tmp$ret$3);
    }
    var tmp2_safe_receiver = this.p4e_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.l32(res.n32().t2s(tmp2_safe_receiver.z49_1));
      tmp$ret$4 = Unit_getInstance();
    }
    var tmp3_safe_receiver = this.a4f_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp$ret$5 = res.o32(toSkShadow(tmp3_safe_receiver));
      tmp$ret$6 = tmp$ret$5;
    }
    var tmp4_safe_receiver = this.u4e_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.t32(tmp4_safe_receiver);
      tmp$ret$7 = Unit_getInstance();
    }
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$8;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp2_orEmpty = this.t4e_1;
    var tmp0_elvis_lhs = tmp2_orEmpty;
    tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.q32(tmp_0.o2r(tmp$ret$8));
    res.o31(this.o4e_1);
    var tmp5_safe_receiver = this.s4e_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.p4e_1;
      var tmp_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().r3z_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.q4e_1;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_20().y3z_1;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_2;
      var tmp2_elvis_lhs = this.r4e_1;
      var tmp_5;
      var tmp_6 = tmp2_elvis_lhs;
      if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_21().a40_1;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var tmp_7 = fontFamilyResolver.k45(tmp5_safe_receiver, tmp_1, tmp_4, tmp_5).b2();
      var resolved = tmp_7 instanceof FontLoadResult ? tmp_7 : THROW_CCE();
      var tmp$ret$9;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = resolved.c4e_1;
      tmp$ret$9 = copyToArray(tmp0_toTypedArray);
      res.r32(tmp$ret$9);
      tmp$ret$10 = Unit_getInstance();
    }
    var tmp6_safe_receiver = this.v4e_1;
    var tmp_8 = tmp6_safe_receiver;
    if ((tmp_8 == null ? null : new BaselineShift(tmp_8)) == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var fontMetrics = res.x32();
      res.v32(_BaselineShift___get_multiplier__impl__qhmjek(tmp6_safe_receiver) * fontMetrics.w2r_1);
      tmp$ret$11 = Unit_getInstance();
    }
    return res;
  };
  protoOf(ComputedStyle).e4f = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.o4e_1, other.g3y_1);
    this.m4e_1 = this.m4e_1.a3z(other.f3y_1);
    var tmp0_safe_receiver = other.k3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.s4e_1 = tmp0_safe_receiver;
      tmp$ret$0 = Unit_getInstance();
    }
    this.o4e_1 = fontSize;
    var tmp1_safe_receiver = other.h3y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.p4e_1 = tmp1_safe_receiver;
      tmp$ret$1 = Unit_getInstance();
    }
    var tmp2_safe_receiver = other.i3y_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.q4e_1 = tmp2_safe_receiver;
      tmp$ret$2 = Unit_getInstance();
    }
    var tmp3_safe_receiver = other.j3y_1;
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.r4e_1 = tmp3_safe_receiver;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp4_safe_receiver = other.l3y_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.t4e_1 = tmp4_safe_receiver;
      tmp$ret$4 = Unit_getInstance();
    }
    if (!get_isUnspecified(other.m3y_1)) {
      var tmp_1 = this;
      var tmp$ret$8;
      // Inline function 'kotlin.with' call
      var tmp0_with = other.m3y_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp_2;
      if (_TextUnit___get_isEm__impl__esrmtl(tmp0_with)) {
        tmp_2 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp0_with);
      } else if (_TextUnit___get_isSp__impl__8c3r6q(tmp0_with)) {
        var tmp$ret$6;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        tmp$ret$5 = density.r2l(tmp0_with);
        tmp$ret$6 = tmp$ret$5;
        tmp_2 = tmp$ret$6;
      } else {
        throw UnsupportedOperationException_init_$Create$_0();
      }
      tmp$ret$7 = tmp_2;
      tmp$ret$8 = tmp$ret$7;
      tmp_1.u4e_1 = tmp$ret$8;
    }
    var tmp5_safe_receiver = other.n3y_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.v4e_1 = tmp5_safe_receiver;
      tmp$ret$9 = Unit_getInstance();
    }
    var tmp6_safe_receiver = other.o3y_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.w4e_1 = tmp6_safe_receiver;
      tmp$ret$10 = Unit_getInstance();
    }
    var tmp7_safe_receiver = other.p3y_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.x4e_1 = tmp7_safe_receiver;
      tmp$ret$11 = Unit_getInstance();
    }
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp1__get_isSpecified__qc5rve = other.q3y_1;
    tmp$ret$12 = !equals(_Color___get_value__impl__1pls5m(tmp1__get_isSpecified__qc5rve), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
    if (tmp$ret$12) {
      this.y4e_1 = other.q3y_1;
    }
    var tmp8_safe_receiver = other.r3y_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z4e_1 = tmp8_safe_receiver;
      tmp$ret$13 = Unit_getInstance();
    }
    var tmp9_safe_receiver = other.s3y_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.a4f_1 = tmp9_safe_receiver;
      tmp$ret$14 = Unit_getInstance();
    }
    var tmp10_safe_receiver = other.u3y_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$15;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.b4f_1 = tmp10_safe_receiver;
      tmp$ret$15 = Unit_getInstance();
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.m4e_1;
    var tmp_0 = new Size_0(this.n4e_1);
    var tmp_1 = this.o4e_1;
    var tmp_2 = this.p4e_1;
    var tmp_3 = this.q4e_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.r4e_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.s4e_1;
    var tmp_8 = this.t4e_1;
    var tmp_9 = this.u4e_1;
    var tmp_10 = this.v4e_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + (tmp_10 == null ? null : new BaselineShift(tmp_10)) + ', textGeometricTransform=' + this.w4e_1 + ', localeList=' + this.x4e_1 + ', background=' + new Color(this.y4e_1) + ', textDecoration=' + this.z4e_1 + ', shadow=' + this.a4f_1 + ', drawStyle=' + this.b4f_1 + ', blendMode=' + new BlendMode(this.c4f_1) + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.m4e_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.n4e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o4e_1) | 0;
    result = imul(result, 31) + (this.p4e_1 == null ? 0 : this.p4e_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.q4e_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.q4e_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.r4e_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.r4e_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.s4e_1 == null ? 0 : hashCode(this.s4e_1)) | 0;
    result = imul(result, 31) + (this.t4e_1 == null ? 0 : getStringHashCode(this.t4e_1)) | 0;
    result = imul(result, 31) + (this.u4e_1 == null ? 0 : getNumberHashCode(this.u4e_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.v4e_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.v4e_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.w4e_1 == null ? 0 : this.w4e_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x4e_1 == null ? 0 : this.x4e_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.y4e_1) | 0;
    result = imul(result, 31) + (this.z4e_1 == null ? 0 : this.z4e_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a4f_1 == null ? 0 : this.a4f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b4f_1 == null ? 0 : hashCode(this.b4f_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.c4f_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.m4e_1, tmp0_other_with_cast.m4e_1))
      return false;
    if (!equals(this.n4e_1, tmp0_other_with_cast.n4e_1))
      return false;
    if (!equals(this.o4e_1, tmp0_other_with_cast.o4e_1))
      return false;
    if (!equals(this.p4e_1, tmp0_other_with_cast.p4e_1))
      return false;
    var tmp = this.q4e_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.q4e_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.r4e_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.r4e_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.s4e_1, tmp0_other_with_cast.s4e_1))
      return false;
    if (!(this.t4e_1 == tmp0_other_with_cast.t4e_1))
      return false;
    if (!equals(this.u4e_1, tmp0_other_with_cast.u4e_1))
      return false;
    var tmp_5 = this.v4e_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.v4e_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.w4e_1, tmp0_other_with_cast.w4e_1))
      return false;
    if (!equals(this.x4e_1, tmp0_other_with_cast.x4e_1))
      return false;
    if (!equals(this.y4e_1, tmp0_other_with_cast.y4e_1))
      return false;
    if (!equals(this.z4e_1, tmp0_other_with_cast.z4e_1))
      return false;
    if (!equals(this.a4f_1, tmp0_other_with_cast.a4f_1))
      return false;
    if (!equals(this.b4f_1, tmp0_other_with_cast.b4f_1))
      return false;
    if (!(this.c4f_1 === tmp0_other_with_cast.c4f_1))
      return false;
    return true;
  };
  function toSkDecorationStyle(_this__u8e3s4, color) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.d4b(Companion_getInstance_28().o40_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.d4b(Companion_getInstance_28().p40_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow(toArgb(_this__u8e3s4.a3h_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.b3h_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.b3h_1), _this__u8e3s4.c3h_1);
  }
  function fontSizeInHierarchy(density, base, other) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      tmp = base * _TextUnit___get_value__impl__hpbx0k(other);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(other)) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.platform.fontSizeInHierarchy.<anonymous>' call
      tmp$ret$0 = density.r2l(other);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      throw IllegalStateException_init_$Create$('Unexpected size in fontSizeInHierarchy');
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.f4f_1 = position;
    this.g4f_1 = style;
    this.h4f_1 = 8;
  }
  protoOf(StyleAdd).i4f = function () {
    return this.f4f_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.f4f_1 + ', style=' + this.g4f_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.f4f_1;
    result = imul(result, 31) + this.g4f_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.f4f_1 === tmp0_other_with_cast.f4f_1))
      return false;
    if (!this.g4f_1.equals(tmp0_other_with_cast.g4f_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.j4f_1 = cut;
    this.k4f_1 = width;
    this.l4f_1 = height;
    this.m4f_1 = position$factory(this.j4f_1);
    this.n4f_1 = 8;
  }
  protoOf(PutPlaceholder).i4f = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_0();
    tmp$ret$0 = this.m4f_1.get();
    return tmp$ret$0;
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.j4f_1 + ', width=' + this.k4f_1 + ', height=' + this.l4f_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.j4f_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.k4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l4f_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.j4f_1.equals(tmp0_other_with_cast.j4f_1))
      return false;
    if (!equals(this.k4f_1, tmp0_other_with_cast.k4f_1))
      return false;
    if (!equals(this.l4f_1, tmp0_other_with_cast.l4f_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.o4f_1 = cut;
    this.p4f_1 = position$factory_1(this.o4f_1);
    this.q4f_1 = 8;
  }
  protoOf(EndPlaceholder).i4f = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = position$factory_2();
    tmp$ret$0 = this.p4f_1.get();
    return tmp$ret$0;
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.o4f_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.o4f_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.o4f_1.equals(tmp0_other_with_cast.o4f_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.r4f_1 = position;
    this.s4f_1 = style;
    this.t4f_1 = 0;
  }
  protoOf(StyleAdd_0).i4f = function () {
    return this.r4f_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.r4f_1 + ', style=' + this.s4f_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.r4f_1;
    result = imul(result, 31) + this.s4f_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.r4f_1 === tmp0_other_with_cast.r4f_1))
      return false;
    if (!this.s4f_1.equals(tmp0_other_with_cast.s4f_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.u4f_1 = position;
    this.v4f_1 = style;
    this.w4f_1 = 0;
  }
  protoOf(StyleRemove).i4f = function () {
    return this.u4f_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.u4f_1 + ', style=' + this.v4f_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.u4f_1;
    result = imul(result, 31) + this.v4f_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.u4f_1 === tmp0_other_with_cast.u4f_1))
      return false;
    if (!this.v4f_1.equals(tmp0_other_with_cast.v4f_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.x4f_1 = position;
    this.y4f_1 = placeholder;
    this.z4f_1 = 0;
  }
  protoOf(PutPlaceholder_0).i4f = function () {
    return this.x4f_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.x4f_1 + ', placeholder=' + this.y4f_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.x4f_1;
    result = imul(result, 31) + this.y4f_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.x4f_1 === tmp0_other_with_cast.x4f_1))
      return false;
    if (!this.y4f_1.equals(tmp0_other_with_cast.y4f_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.a4g_1 = position;
    this.b4g_1 = 0;
  }
  protoOf(EndPlaceholder_0).i4f = function () {
    return this.a4g_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.a4g_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.a4g_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.a4g_1 === tmp0_other_with_cast.a4g_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.v4d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.w4d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.y4d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var cuts = tmp$ret$0;
    var tmp0_iterator = spans.c();
    while (tmp0_iterator.d()) {
      var span = tmp0_iterator.e();
      cuts.a(new StyleAdd_0(span.z3t_1, span.y3t_1));
      cuts.a(new StyleRemove(span.a3u_1, span.y3t_1));
    }
    var tmp1_iterator = placeholders.c();
    while (tmp1_iterator.d()) {
      var placeholder = tmp1_iterator.e();
      cuts.a(new PutPlaceholder_0(placeholder.z3t_1, placeholder.y3t_1));
      cuts.a(new EndPlaceholder_0(placeholder.a3u_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.f() > 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.c();
    while (tmp2_iterator.d()) {
      var cut = tmp2_iterator.e();
      if (cut instanceof StyleAdd_0) {
        activeStyles.a(cut.s4f_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.i4f(), ops);
        if (prev == null) {
          var tmp_0 = cut.i4f();
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp0_also = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          tmp0_also.e4f($this.r4d_1, cut.s4f_1);
          tmp$ret$2 = tmp0_also;
          ops.a(new StyleAdd(tmp_0, tmp$ret$2));
        } else {
          prev.g4f_1.e4f($this.r4d_1, cut.s4f_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.j3(cut.v4f_1);
          ops.a(new StyleAdd(cut.i4f(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.r4d_1, currentStyle.o4e_1, cut.y4f_1.t3x_1), fontSizeInHierarchy($this.r4d_1, currentStyle.o4e_1, cut.y4f_1.u3x_1));
            ops.a(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.a(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.r4d_1, activeStyles.g(0), $this.m4d_1, $this.u4d_1);
    var inductionVariable = 1;
    var last = activeStyles.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.e4f($this.r4d_1, activeStyles.g(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).c();
    while (tmp0_iterator.d()) {
      var prevOp = tmp0_iterator.e();
      if (prevOp.i4f() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.w30(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.r42();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      pStyle.y30(toSkAlignment(tmp0_safe_receiver));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var tmp0__get_isSpecified__cddt7f = style.t42();
    tmp$ret$1 = !get_isUnspecified(tmp0__get_isSpecified__cddt7f);
    if (tmp$ret$1) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.sh(true);
      strutStyle.v31(true);
      var tmp$ret$3;
      // Inline function 'kotlin.with' call
      var tmp1_with = $this.r4d_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      tmp$ret$2 = tmp1_with.r2l(orDefaultFontSize(style.e42()));
      tmp$ret$3 = tmp$ret$2;
      var fontSize = tmp$ret$3;
      var tmp$ret$7;
      // Inline function 'kotlin.with' call
      var tmp2_with = style.t42();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var tmp_0;
      if (_TextUnit___get_isSp__impl__8c3r6q(tmp2_with)) {
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this.r4d_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
        tmp$ret$4 = tmp0_with.r2l(tmp2_with);
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      } else if (_TextUnit___get_isEm__impl__esrmtl(tmp2_with)) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp2_with);
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      tmp$ret$6 = tmp_0;
      tmp$ret$7 = tmp$ret$6;
      var lineHeight = tmp$ret$7;
      strutStyle.r31(lineHeight / fontSize);
      strutStyle.o31(fontSize);
      pStyle.u30(strutStyle);
    }
    pStyle.x30(toSkDirection($this.s4d_1));
    var tmp1_safe_receiver = $this.l4d_1.u42();
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'kotlin.with' call
      var tmp0_with_0 = $this.r4d_1;
      // Inline function 'kotlin.contracts.contract' call
      pStyle.b31(new TextIndent(tmp0_with_0.r2l(tmp1_safe_receiver.m4b_1), tmp0_with_0.r2l(tmp1_safe_receiver.n4b_1)));
      tmp$ret$8 = Unit_getInstance();
      tmp$ret$9 = tmp$ret$8;
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return getOrPut(tmp, style, ParagraphBuilder$makeSkTextStyle$lambda(style, $this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.c4g_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).ud = function (a, b) {
    return this.c4g_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.ud(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$0 = a.i4f();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$1 = b.i4f();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ParagraphBuilder$makeSkTextStyle$lambda($style, this$0) {
    return function (it) {
      return $style.d4f(this$0.j4d_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.l4d_1.i42();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.l4d_1.f42();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().r3z_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.l4d_1.g42();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_20().y3z_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.l4d_1.h42();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_21().b40_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.j4d_1.k45(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).b2();
        tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b4e_1, _get_defaultStyle__bt02u3(this$0).o4e_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.r4c().c2r().y2j();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_7().q2k_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().q3f_1 : blendMode;
    this.j4d_1 = fontFamilyResolver;
    this.k4d_1 = text;
    this.l4d_1 = textStyle;
    this.m4d_1 = brushSize;
    this.n4d_1 = ellipsis;
    this.o4d_1 = maxLines;
    this.p4d_1 = spanStyles;
    this.q4d_1 = placeholders;
    this.r4d_1 = density;
    this.s4d_1 = textDirection;
    this.t4d_1 = drawStyle;
    this.u4d_1 = blendMode;
    var tmp = this;
    tmp.z4d_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.a4e_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).s4c = function () {
    var tmp = this.x4d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  protoOf(ParagraphBuilder_0).a1j = function () {
    this.v4d_1 = copyWithDefaultFontSize(this.l4d_1.w41(), this.t4d_1);
    this.w4d_1 = ComputedStyle_init_$Create$(this.r4d_1, _get_initialStyle__6to25e(this), this.m4d_1, this.u4d_1);
    this.y4d_1 = makeOps(this, this.p4d_1, this.q4d_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.l4d_1, _get_defaultStyle__bt02u3(this));
    this.x4d_1 = ps;
    if (!(this.o4d_1 === IntCompanionObject_getInstance().MAX_VALUE)) {
      ps.z30(this.o4d_1);
      ps.a31(this.n4d_1);
    }
    var tmp = this.j4d_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).r44_1;
    var tmp0_subject = platformFontLoader;
    var tmp_0;
    if (tmp0_subject instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.d4d();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).c();
    while (tmp1_iterator.d()) {
      var op = tmp1_iterator.e();
      if (addText ? pos < op.i4f() : false) {
        pb.i30(toString(charSequenceSubSequence(this.k4d_1, pos, op.i4f())));
      }
      var tmp2_subject = op;
      if (tmp2_subject instanceof StyleAdd) {
        var tmp_1 = op.g4f_1.s4e_1;
        var tmp3_elvis_lhs = op.g4f_1.p4e_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().r3z_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.g4f_1.q4e_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().y3z_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.g4f_1.r4e_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().b40_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.j4d_1.k45(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.h30(makeSkTextStyle(this, op.g4f_1));
      } else {
        if (tmp2_subject instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.k4f_1, op.l4f_1, toSkPlaceholderAlignment(op.j4f_1.y4f_1.v3x_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.j30(placeholderStyle);
          addText = false;
        } else {
          if (tmp2_subject instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.i4f();
    }
    if (addText ? pos < this.k4d_1.length : false) {
      pb.i30(toString(charSequenceSubSequence(this.k4d_1, pos, this.k4d_1.length)));
    }
    return pb.a1j();
  };
  protoOf(ParagraphBuilder_0).r4c = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = defaultFont$factory();
    tmp$ret$0 = this.z4d_1.b2();
    return tmp$ret$0;
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.g3y_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.m3y_1)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.m3y_1);
      checkArithmetic(fontSize);
      tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * tmp0_times);
      tmp = tmp$ret$0;
    } else {
      tmp = _this__u8e3s4.m3y_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.c3z(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject === Companion_getInstance_13().w3x_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().a3y_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().b3y_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().c3y_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().x3x_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().y3x_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (tmp0_subject === Companion_getInstance_13().z3x_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid PlaceholderVerticalAlign.');
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject === Companion_getInstance_27().e3x_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_27().f3x_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (tmp0_subject === Companion_getInstance_27().g3x_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (tmp0_subject === Companion_getInstance_27().h3x_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (tmp0_subject === Companion_getInstance_27().i3x_1) {
      tmp = Alignment_START_getInstance();
    } else if (tmp0_subject === Companion_getInstance_27().j3x_1) {
      tmp = Alignment_END_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextAlign');
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = get_DefaultFontSize_0();
      var tmp1_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(tmp0_times);
      tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_times), _TextUnit___get_value__impl__hpbx0k(tmp0_times) * tmp1_times);
      tmp = tmp$ret$0;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.x4f_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.i4f();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.a4g_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.i4f();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.r4c();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function _init_properties_SkiaParagraph_skiko_kt__cbqn0t() {
    if (properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
    } else {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new WeakHashMap();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.w4b_1, $this.c4c_1, $this.x4b_1, $this.y4b_1, $this.z4b_1, $this.a4c_1, $this.b4c_1);
  }
  function resolveTextDirection_1($this, direction) {
    var tmp0_subject = direction;
    var tmp;
    var tmp_0 = tmp0_subject;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_29().z42_1))) {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      if (equals(tmp_1 == null ? null : new TextDirection(tmp_1), new TextDirection(Companion_getInstance_29().a43_1))) {
        tmp = ResolvedTextDirection_Rtl_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        if (equals(tmp_2 == null ? null : new TextDirection(tmp_2), new TextDirection(Companion_getInstance_29().b43_1))) {
          var tmp1_elvis_lhs = contentBasedTextDirection_0($this);
          tmp = tmp1_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp1_elvis_lhs;
        } else {
          var tmp_3 = tmp0_subject;
          if (equals(tmp_3 == null ? null : new TextDirection(tmp_3), new TextDirection(Companion_getInstance_29().c43_1))) {
            var tmp2_elvis_lhs = contentBasedTextDirection_0($this);
            tmp = tmp2_elvis_lhs == null ? ResolvedTextDirection_Ltr_getInstance() : tmp2_elvis_lhs;
          } else {
            var tmp_4 = tmp0_subject;
            if (equals(tmp_4 == null ? null : new TextDirection(tmp_4), new TextDirection(Companion_getInstance_29().d43_1))) {
              var tmp3_elvis_lhs = contentBasedTextDirection_0($this);
              tmp = tmp3_elvis_lhs == null ? ResolvedTextDirection_Rtl_getInstance() : tmp3_elvis_lhs;
            } else {
              tmp = ResolvedTextDirection_Ltr_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function contentBasedTextDirection_0($this) {
    return contentBasedTextDirection($this.w4b_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.w4b_1 = text;
    this.x4b_1 = style;
    this.y4b_1 = spanStyles;
    this.z4b_1 = placeholders;
    this.a4c_1 = density;
    this.b4c_1 = fontFamilyResolver;
    this.c4c_1 = resolveTextDirection_1(this, this.x4b_1.s42());
    this.d4c_1 = newLayouter(this);
    this.e4c_1 = 0.0;
    this.f4c_1 = 0.0;
    var tmp = ensureNotNull(this.d4c_1);
    FloatCompanionObject_getInstance();
    var para = tmp.v4c(Infinity);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = para.s2z();
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    tmp_0.e4c_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    var tmp1_ceil = para.t2z();
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    tmp_1.f4c_1 = tmp$ret$1;
  }
  protoOf(SkiaParagraphIntrinsics).t4c = function () {
    var tmp0_elvis_lhs = this.d4c_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.d4c_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).s2z = function () {
    return this.e4c_1;
  };
  protoOf(SkiaParagraphIntrinsics).t2z = function () {
    return this.f4c_1;
  };
  function applyBrush(_this__u8e3s4, brush, size, alpha) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    var tmp_0;
    var tmp_1;
    if (brush instanceof SolidColor) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var tmp0__get_isSpecified__cddt7f = brush.t39_1;
      tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0__get_isSpecified__cddt7f), _Color___get_value__impl__1pls5m(Companion_getInstance().n39_1));
      tmp_1 = tmp$ret$0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_2;
      if (brush instanceof ShaderBrush) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp$ret$1 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().q2k_1));
        tmp_2 = tmp$ret$1;
      } else {
        tmp_2 = false;
      }
      tmp_0 = tmp_2;
    }
    if (tmp_0) {
      brush.w38(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.y2u(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    var tmp0_subject = drawStyle;
    if (equals(tmp0_subject, Fill_getInstance()) ? true : tmp0_subject == null) {
      _this__u8e3s4.t3k(Companion_getInstance_11().z3f_1);
    } else {
      if (tmp0_subject instanceof Stroke) {
        _this__u8e3s4.t3k(Companion_getInstance_11().a3g_1);
        _this__u8e3s4.t2u(drawStyle.u3k_1);
        _this__u8e3s4.b3l(drawStyle.v3k_1);
        _this__u8e3s4.d3l(drawStyle.x3k_1);
        _this__u8e3s4.z3k(drawStyle.w3k_1);
        _this__u8e3s4.f3l(drawStyle.y3k_1);
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.k3x_1 = _LineBreak___init__impl__o5i11q(1);
    this.l3x_1 = _LineBreak___init__impl__o5i11q(2);
    this.m3x_1 = _LineBreak___init__impl__o5i11q(3);
  }
  var Companion_instance_21;
  function Companion_getInstance_35() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    var tmp0_other_with_cast = other instanceof LineBreak ? other.d4g_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_35();
    this.d4g_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.d4g_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.d4g_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.d4g_1, other);
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.r3x_1 = new TextMotion();
    this.s3x_1 = new TextMotion();
  }
  var Companion_instance_22;
  function Companion_getInstance_36() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function TextMotion() {
    Companion_getInstance_36();
    this.e4g_1 = 0;
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).l45 = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).m45 = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).n45 = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).o45 = interceptFontSynthesis;
  protoOf(_no_name_provided__qut3iv).x5 = get;
  protoOf(_no_name_provided__qut3iv).d6 = fold;
  protoOf(_no_name_provided__qut3iv).c6 = minusKey;
  protoOf(_no_name_provided__qut3iv).e6 = plus_0;
  protoOf(Unspecified).a3z = merge;
  protoOf(Unspecified).e3z = takeOrElse;
  protoOf(BrushStyle).a3z = merge;
  protoOf(BrushStyle).e3z = takeOrElse;
  protoOf(ColorStyle).a3z = merge;
  protoOf(ColorStyle).e3z = takeOrElse;
  protoOf(SkiaParagraphIntrinsics).b3x = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontSynthesis;
  _.$_$.c = createFontFamilyResolver;
  _.$_$.d = PlatformTextInputPluginRegistryImpl;
  _.$_$.e = TextInputService;
  _.$_$.f = FontLoader;
  _.$_$.g = TextAlign;
  _.$_$.h = TextOverflow;
  _.$_$.i = MultiParagraphIntrinsics;
  _.$_$.j = MultiParagraph;
  _.$_$.k = Paragraph_0;
  _.$_$.l = TextLayoutResult;
  _.$_$.m = resolveDefaults;
  _.$_$.n = CommitTextCommand_init_$Create$;
  _.$_$.o = AnnotatedString_init_$Create$;
  _.$_$.p = TextLayoutInput_init_$Create$;
  _.$_$.q = TextStyle_init_$Create$_1;
  _.$_$.r = _TextOverflow___init__impl__obguoe;
  _.$_$.s = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.t = Companion_getInstance_16;
  _.$_$.u = Companion_getInstance_20;
  _.$_$.v = Companion_getInstance_21;
  _.$_$.w = Companion_getInstance_22;
  _.$_$.x = Companion_getInstance_27;
  _.$_$.y = Companion_getInstance_33;
  _.$_$.z = TextPainter_getInstance;
  _.$_$.a1 = Companion_getInstance_14;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-text.js.map
