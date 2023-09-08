(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui-graphics.js', './androidx-ui-unit.js', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js', './androidx-foundation-layout.js', './androidx-foundation.js', './androidx-material-ripple.js', './androidx-animation-core.js', './androidx-ui-text.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui-graphics.js'), require('./androidx-ui-unit.js'), require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'), require('./androidx-foundation-layout.js'), require('./androidx-foundation.js'), require('./androidx-material-ripple.js'), require('./androidx-animation-core.js'), require('./androidx-ui-text.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-geometry.js'));
  else {
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-material-ripple' was not found. Please, check whether 'androidx-material-ripple' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-material'.");
    }
    root['androidx-material'] = factory(typeof this['androidx-material'] === 'undefined' ? {} : this['androidx-material'], this['androidx-ui-graphics'], this['androidx-ui-unit'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui'], this['androidx-foundation-layout'], this['androidx-foundation'], this['androidx-material-ripple'], this['androidx-animation-core'], this['androidx-ui-text'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-geometry']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.k2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var protoOf = kotlin_kotlin.$_$.r8;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var isInterface = kotlin_kotlin.$_$.h8;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var Spacer$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var rememberRipple$composable = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var selectable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var animateFloatAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var roundToInt = kotlin_kotlin.$_$.b9;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r7;
  var KProperty0 = kotlin_kotlin.$_$.t9;
  var THROW_ISE = kotlin_kotlin.$_$.kb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x7;
  var selectableGroup = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var equals = kotlin_kotlin.$_$.u7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var Long = kotlin_kotlin.$_$.db;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var lastOrNull = kotlin_kotlin.$_$.d5;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var toolingGraphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var isInfinite = kotlin_kotlin.$_$.tb;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var DpSize__hashCode_impl_jvpgaj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var hashCode = kotlin_kotlin.$_$.c8;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var objectCreate = kotlin_kotlin.$_$.p8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppBarKt, 'ComposableSingletons$AppBarKt', objectMeta);
  setMetadataFor(AppBarDefaults, 'AppBarDefaults', objectMeta);
  setMetadataFor(BottomNavigationDefaults, 'BottomNavigationDefaults', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta);
  setMetadataFor(ButtonDefaults, 'ButtonDefaults', objectMeta);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda$slambda, 'DefaultButtonElevation$elevation$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda_1, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda_3, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation, 'DefaultButtonElevation', classMeta);
  setMetadataFor(DefaultButtonColors, 'DefaultButtonColors', classMeta);
  setMetadataFor(Colors, 'Colors', classMeta);
  setMetadataFor(ContentAlpha, 'ContentAlpha', objectMeta);
  setMetadataFor(HighContrastContentAlpha, 'HighContrastContentAlpha', objectMeta);
  setMetadataFor(LowContrastContentAlpha, 'LowContrastContentAlpha', objectMeta);
  setMetadataFor(ElevationDefaults, 'ElevationDefaults', objectMeta);
  setMetadataFor($animateElevationCOROUTINE$0, '$animateElevationCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(DefaultElevationOverlay, 'DefaultElevationOverlay', objectMeta);
  setMetadataFor(MinimumInteractiveComponentSizeModifier, 'MinimumInteractiveComponentSizeModifier', classMeta, VOID, [LayoutModifier]);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(Shapes, 'Shapes', classMeta);
  setMetadataFor(Surface$composable$lambda$slambda, 'Surface$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Typography, 'Typography', classMeta);
  //endregion
  function get_AppBarHeight() {
    _init_properties_AppBar_kt__51suc2();
    return AppBarHeight;
  }
  var AppBarHeight;
  function get_AppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return AppBarHorizontalPadding;
  }
  var AppBarHorizontalPadding;
  function get_TitleInsetWithoutIcon() {
    _init_properties_AppBar_kt__51suc2();
    return TitleInsetWithoutIcon;
  }
  var TitleInsetWithoutIcon;
  function get_TitleIconModifier() {
    _init_properties_AppBar_kt__51suc2();
    return TitleIconModifier;
  }
  var TitleIconModifier;
  var BottomAppBarCutoutOffset;
  var BottomAppBarRoundedEdgeRadius;
  function TopAppBar$composable(title, modifier, navigationIcon, actions, backgroundColor, contentColor, elevation, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var navigationIcon_0 = {_v: navigationIcon};
    var actions_0 = {_v: actions};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1532757466);
    sourceInformation($composer_0, 'C(TopAppBar$composable)P(6,4,5!1,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.unit.Dp)81@3902L6,82@3951L32,85@4047L1254:AppBar.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(title) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(navigationIcon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(actions_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.a3c_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.a3c_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(elevation_0._v.f2m_1)) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          navigationIcon_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          actions_0._v = ComposableSingletons$AppBarKt_getInstance().aav_1;
        }
        if (!(($default & 16) === 0)) {
          backgroundColor_0._v = new Color(get_primarySurface(MaterialTheme_getInstance().cav($composer_0, 6)));
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(backgroundColor_0._v.a3c_1, $composer_0, 14 & $dirty >> 12));
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          elevation_0._v = new Dp(AppBarDefaults_getInstance().dav_1);
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(1532757466, $dirty, -1, 'androidx.compose.material.TopAppBar$composable (AppBar.kt:76)');
      }
      var tmp = backgroundColor_0._v.a3c_1;
      var tmp_0 = contentColor_0._v.a3c_1;
      var tmp_1 = elevation_0._v.f2m_1;
      var tmp_2 = AppBarDefaults_getInstance().fav_1;
      var tmp_3 = get_RectangleShape();
      var tmp_4 = modifier_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -1484077694, true, TopAppBar$composable$lambda(navigationIcon_0, $dirty, title, actions_0));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_6 = value;
      } else {
        tmp_6 = tmp0_let;
      }
      tmp$ret$1 = tmp_6;
      tmp$ret$2 = tmp$ret$1;
      var tmp_7 = tmp$ret$2;
      tmp$ret$3 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      AppBar$composable(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$6, $composer_0, 1600512 | 14 & $dirty >> 12 | 112 & $dirty >> 12 | 896 & $dirty >> 12 | 458752 & $dirty << 12, 0);
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
      tmp0_safe_receiver.y1t(TopAppBar$composable$lambda_0(title, modifier_0, navigationIcon_0, actions_0, backgroundColor_0, contentColor_0, elevation_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#jmzs0o');
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-771938130, $changed, -1, 'androidx.compose.material.ComposableSingletons$AppBarKt.lambda-1.<anonymous> (AppBar.kt:80)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppBarKt() {
    ComposableSingletons$AppBarKt_instance = this;
    var tmp = this;
    tmp.aav_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-771938130, false, ComposableSingletons$AppBarKt$lambda_1$lambda_nfq8oq));
  }
  var ComposableSingletons$AppBarKt_instance;
  function ComposableSingletons$AppBarKt_getInstance() {
    if (ComposableSingletons$AppBarKt_instance == null)
      new ComposableSingletons$AppBarKt();
    return ComposableSingletons$AppBarKt_instance;
  }
  function AppBarDefaults() {
    AppBarDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
    tmp.dav_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    tmp_0.eav_1 = tmp$ret$1;
    this.fav_1 = PaddingValues(get_AppBarHorizontalPadding(), VOID, get_AppBarHorizontalPadding());
    this.gav_1 = 0;
  }
  var AppBarDefaults_instance;
  function AppBarDefaults_getInstance() {
    if (AppBarDefaults_instance == null)
      new AppBarDefaults();
    return AppBarDefaults_instance;
  }
  function AppBar$composable(backgroundColor, contentColor, elevation, contentPadding, shape, modifier, content, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-934723715);
    sourceInformation($composer_0, 'C(AppBar$composable)P(0:c#ui.graphics.Color,2:c#ui.graphics.Color,4:c#ui.unit.Dp,3,6,5)513@22344L583:AppBar.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor))) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(elevation)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(contentPadding) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(shape) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.k1o()) {
      if (!(($default & 32) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(-934723715, $dirty, -1, 'androidx.compose.material.AppBar$composable (AppBar.kt:504)');
      }
      var tmp = modifier_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.AppBar$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1027830352, true, AppBar$composable$lambda(contentPadding, $dirty, content));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.AppBar$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Surface$composable(tmp, shape, backgroundColor, contentColor, null, elevation, tmp$ret$6, $composer_0, 1572864 | 14 & $dirty >> 15 | 112 & $dirty >> 9 | 896 & $dirty << 6 | 7168 & $dirty << 6 | 458752 & $dirty << 9, 16);
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
      tmp0_safe_receiver.y1t(AppBar$composable$lambda_0(backgroundColor, contentColor, elevation, contentPadding, shape, modifier_0, content, $changed, $default));
    }
  }
  function TopAppBar$composable$lambda$lambda($title, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C110@4890L4,109@4804L145:AppBar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-2021518195, $changed, -1, 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous> (AppBar.kt:108)');
        }
        CompositionLocalProvider$composable([get_LocalContentAlpha().t1t(ContentAlpha_getInstance().iav($composer_0, 6))], $title, $composer_0, 112 & $$dirty << 3);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function TopAppBar$composable$lambda$lambda_0($actions, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C117@5070L215:AppBar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1157662914, $changed, -1, 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous> (AppBar.kt:116)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp16_Row$composable = fillMaxHeight(Companion_getInstance());
        var tmp17_Row$composable = Arrangement_getInstance().s7m_1;
        var tmp18_Row$composable = Companion_getInstance_1().p4g_1;
        var tmp19_Row$composable = $actions._v;
        var tmp20_Row$composable = $composer_0;
        var tmp21_Row$composable = 438 | 7168 & $$dirty;
        var modifier = tmp16_Row$composable;
        var horizontalArrangement = tmp17_Row$composable;
        var verticalAlignment = tmp18_Row$composable;
        var $composer_1 = tmp20_Row$composable;
        $composer_1.s1c(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().r7m_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_1().o4g_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp21_Row$composable >> 3 | 112 & tmp21_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 112 & tmp21_Row$composable << 3;
        var modifier_0 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.t1o();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.e1p();
        if ($composer_6.c1p()) {
          $composer_6.f1p(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
        tmp19_Row$composable(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp21_Row$composable >> 6);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function TopAppBar$composable$lambda($navigationIcon, $$dirty, $title, $actions) {
    return function ($this$AppBar, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C104@4595L378,116@5048L6,116@4983L312:AppBar.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h($this$AppBar) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1484077694, $changed, -1, 'androidx.compose.material.TopAppBar$composable.<anonymous> (AppBar.kt:92)');
        }
        if ($navigationIcon._v == null) {
          $composer_0.s1c(-2044897818);
          sourceInformation($composer_0, '94@4259L29');
          Spacer$composable(get_TitleInsetWithoutIcon(), $composer_0, 6);
          $composer_0.u1c();
        } else {
          $composer_0.s1c(-2044897759);
          sourceInformation($composer_0, '96@4318L257');
          // Inline function 'androidx.compose.foundation.layout.Row$composable' call
          var tmp16_Row$composable = get_TitleIconModifier();
          var tmp17_Row$composable = null;
          var tmp18_Row$composable = Companion_getInstance_1().p4g_1;
          var tmp19_Row$composable = $composer_0;
          var modifier = tmp16_Row$composable;
          var horizontalArrangement = tmp17_Row$composable;
          var verticalAlignment = tmp18_Row$composable;
          var $composer_1 = tmp19_Row$composable;
          $composer_1.s1c(-636825856);
          sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
          if (!(0 === 0))
            modifier = Companion_getInstance();
          if (!(2 === 0))
            horizontalArrangement = Arrangement_getInstance().r7m_1;
          if (!(0 === 0))
            verticalAlignment = Companion_getInstance_1().o4g_1;
          var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 48);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp11_Layout$composable = modifier;
          var tmp12_Layout$composable = $composer_1;
          var tmp13_Layout$composable = 48;
          var modifier_0 = tmp11_Layout$composable;
          var $composer_2 = tmp12_Layout$composable;
          $composer_2.s1c(1725976829);
          sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_0 = Companion_getInstance();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww = $composer_2;
          var $composer_3 = tmp1_$get_current$$composable_gn3xww;
          sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp$ret$0 = tmp0;
          var density = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua = $composer_2;
          var $composer_4 = tmp3_$get_current$$composable_fm67ua;
          sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
          sourceInformationMarkerEnd($composer_4);
          tmp$ret$1 = tmp0_0;
          var layoutDirection = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro = $composer_2;
          var $composer_5 = tmp5_$get_current$$composable_el8hro;
          sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
          sourceInformationMarkerEnd($composer_5);
          tmp$ret$2 = tmp0_1;
          var viewConfiguration = tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
          var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
          var tmp8_ReusableComposeNode$composable = $composer_2;
          var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
          var $composer_6 = tmp8_ReusableComposeNode$composable;
          var tmp_1 = $composer_6.t1o();
          if (!isInterface(tmp_1, Applier)) {
            invalidApplier();
          }
          $composer_6.e1p();
          if ($composer_6.c1p()) {
            $composer_6.f1p(tmp6_ReusableComposeNode$composable);
          } else {
            $composer_6.h1p();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
          tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
          $composer_6.s1c(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
          var tmp14__anonymous__f0seaw = $composer_6;
          var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
          var $composer_7 = tmp14__anonymous__f0seaw;
          sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
          // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp20__anonymous__q2j3lv = RowScopeInstance_getInstance();
          var tmp21__anonymous__l7ugec = $composer_7;
          var tmp22__anonymous__gd5t6t = 6;
          var $composer_8 = tmp21__anonymous__l7ugec;
          sourceInformationMarkerStart($composer_8, -1010178263, 'C98@4493L4,97@4407L154:AppBar.kt#jmzs0o');
          CompositionLocalProvider$composable([get_LocalContentAlpha().t1t(ContentAlpha_getInstance().iav($composer_8, 6))], $navigationIcon._v, $composer_8, 112 & $$dirty >> 3);
          sourceInformationMarkerEnd($composer_8);
          sourceInformationMarkerEnd($composer_7);
          $composer_6.u1c();
          $composer_6.i1p();
          $composer_2.u1c();
          $composer_1.u1c();
          $composer_0.u1c();
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp39_Row$composable = $this$AppBar.l7p(fillMaxHeight(Companion_getInstance()), 1.0);
        var tmp40_Row$composable = null;
        var tmp41_Row$composable = Companion_getInstance_1().p4g_1;
        var tmp42_Row$composable = $composer_0;
        var modifier_1 = tmp39_Row$composable;
        var horizontalArrangement_0 = tmp40_Row$composable;
        var verticalAlignment_0 = tmp41_Row$composable;
        var $composer_9 = tmp42_Row$composable;
        $composer_9.s1c(-636825856);
        sourceInformation($composer_9, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        if (!(2 === 0))
          horizontalArrangement_0 = Arrangement_getInstance().r7m_1;
        if (!(0 === 0))
          verticalAlignment_0 = Companion_getInstance_1().o4g_1;
        var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_9, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp34_Layout$composable = modifier_1;
        var tmp35_Layout$composable = $composer_9;
        var tmp36_Layout$composable = 0;
        var modifier_2 = tmp34_Layout$composable;
        var $composer_10 = tmp35_Layout$composable;
        $composer_10.s1c(1725976829);
        sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp23_$get_current$$composable_7brzgu = get_LocalDensity();
        var tmp24_$get_current$$composable_6tb4fj = $composer_10;
        var $composer_11 = tmp24_$get_current$$composable_6tb4fj;
        sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_11.w1p(tmp23_$get_current$$composable_7brzgu);
        sourceInformationMarkerEnd($composer_11);
        tmp$ret$3 = tmp0_2;
        var density_0 = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp25_$get_current$$composable_6au9e8 = get_LocalLayoutDirection();
        var tmp26_$get_current$$composable_5sdecx = $composer_10;
        var $composer_12 = tmp26_$get_current$$composable_5sdecx;
        sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_12.w1p(tmp25_$get_current$$composable_6au9e8);
        sourceInformationMarkerEnd($composer_12);
        tmp$ret$4 = tmp0_3;
        var layoutDirection_0 = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp27_$get_current$$composable_59wjbm = get_LocalViewConfiguration();
        var tmp28_$get_current$$composable_4rfoab = $composer_10;
        var $composer_13 = tmp28_$get_current$$composable_4rfoab;
        sourceInformationMarkerStart($composer_13, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_13.w1p(tmp27_$get_current$$composable_59wjbm);
        sourceInformationMarkerEnd($composer_13);
        tmp$ret$5 = tmp0_4;
        var viewConfiguration_0 = tmp$ret$5;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp29_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp30_ReusableComposeNode$composable = materializerOf(modifier_2);
        var tmp31_ReusableComposeNode$composable = $composer_10;
        var tmp32_ReusableComposeNode$composable = 6 | 7168 & tmp36_Layout$composable << 9;
        var $composer_14 = tmp31_ReusableComposeNode$composable;
        var tmp_2 = $composer_14.t1o();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_14.e1p();
        if ($composer_14.c1p()) {
          $composer_14.f1p(tmp29_ReusableComposeNode$composable);
        } else {
          $composer_14.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp33__anonymous__35hag5 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, measurePolicy_0, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, density_0, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, layoutDirection_0, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, viewConfiguration_0, Companion_getInstance_2().k5n_1);
        tmp30_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp32_ReusableComposeNode$composable >> 3);
        $composer_14.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp37__anonymous__g99adz = $composer_14;
        var tmp38__anonymous__l3xxli = 14 & tmp32_ReusableComposeNode$composable >> 9;
        var $composer_15 = tmp37__anonymous__g99adz;
        sourceInformationMarkerStart($composer_15, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
        // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp43__anonymous__57il30 = RowScopeInstance_getInstance();
        var tmp44__anonymous__a278aj = $composer_15;
        var tmp45__anonymous__ewvvi2 = 6;
        var $composer_16 = tmp44__anonymous__a278aj;
        sourceInformationMarkerStart($composer_16, -1010177938, 'C108@4771L10,108@4732L231:AppBar.kt#jmzs0o');
        var tmp_3 = MaterialTheme_getInstance().xav($composer_16, 6).oav_1;
        var tmp$ret$12;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_16;
        var dispatchReceiver = composableLambda(tmp_4, -2021518195, true, TopAppBar$composable$lambda$lambda($title, $$dirty));
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_16;
        var $composer_17 = tmp3_remember$composable;
        $composer_17.s1c(-838505973);
        sourceInformation($composer_17, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_17;
        var tmp2_cache = $composer_17.x1h(dispatchReceiver);
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value = tmp$ret$6;
          tmp1_cache.p1q(value);
          tmp_5 = value;
        } else {
          tmp_5 = tmp0_let;
        }
        tmp$ret$7 = tmp_5;
        tmp$ret$8 = tmp$ret$7;
        var tmp_6 = tmp$ret$8;
        tmp$ret$9 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_5 = tmp$ret$9;
        $composer_17.u1c();
        tmp$ret$10 = tmp0_5;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        ProvideTextStyle$composable(tmp_3, tmp$ret$12, $composer_16, 48);
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.u1c();
        $composer_14.i1p();
        $composer_10.u1c();
        $composer_9.u1c();
        var tmp_7 = [get_LocalContentAlpha().t1t(ContentAlpha_getInstance().yav($composer_0, 6))];
        var tmp$ret$19;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_8, 1157662914, true, TopAppBar$composable$lambda$lambda_0($actions, $$dirty));
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_0;
        var $composer_18 = tmp3_remember$composable_0;
        $composer_18.s1c(-838505973);
        sourceInformation($composer_18, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_18;
        var tmp2_cache_0 = $composer_18.x1h(dispatchReceiver_0);
        var tmp$ret$15;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().k1j_1) {
          var tmp$ret$13;
          // Inline function 'androidx.compose.material.TopAppBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$13 = ComposableLambda$invoke$ref_1(dispatchReceiver_0);
          var value_0 = tmp$ret$13;
          tmp1_cache_0.p1q(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = tmp0_let_0;
        }
        tmp$ret$14 = tmp_9;
        tmp$ret$15 = tmp$ret$14;
        var tmp_10 = tmp$ret$15;
        tmp$ret$16 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_6 = tmp$ret$16;
        $composer_18.u1c();
        tmp$ret$17 = tmp0_6;
        tmp$ret$18 = tmp$ret$17;
        tmp$ret$19 = tmp$ret$18;
        CompositionLocalProvider$composable(tmp_7, tmp$ret$19, $composer_0, 48);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp_0 = tmp_11;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function TopAppBar$composable$lambda_0($title, $modifier, $navigationIcon, $actions, $backgroundColor, $contentColor, $elevation, $$changed, $$default) {
    return function ($composer, $force) {
      TopAppBar$composable($title, $modifier._v, $navigationIcon._v, $actions._v, $backgroundColor._v.a3c_1, $contentColor._v.a3c_1, $elevation._v.f2m_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppBar$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C521@22608L303:AppBar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1296061040, $changed, -1, 'androidx.compose.material.AppBar$composable.<anonymous>.<anonymous> (AppBar.kt:520)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp16_Row$composable = height(padding(fillMaxWidth(Companion_getInstance()), $contentPadding), get_AppBarHeight());
        var tmp17_Row$composable = Arrangement_getInstance().r7m_1;
        var tmp18_Row$composable = Companion_getInstance_1().p4g_1;
        var tmp19_Row$composable = $composer_0;
        var tmp20_Row$composable = 432 | 7168 & $$dirty >> 9;
        var modifier = tmp16_Row$composable;
        var horizontalArrangement = tmp17_Row$composable;
        var verticalAlignment = tmp18_Row$composable;
        var $composer_1 = tmp19_Row$composable;
        $composer_1.s1c(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().r7m_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_1().o4g_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp20_Row$composable >> 3 | 112 & tmp20_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 112 & tmp20_Row$composable << 3;
        var modifier_0 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.t1o();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.e1p();
        if ($composer_6.c1p()) {
          $composer_6.f1p(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp20_Row$composable >> 6);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AppBar$composable$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C520@22586L6,520@22521L400:AppBar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1027830352, $changed, -1, 'androidx.compose.material.AppBar$composable.<anonymous> (AppBar.kt:519)');
        }
        var tmp_0 = [get_LocalContentAlpha().t1t(ContentAlpha_getInstance().yav($composer_0, 6))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.AppBar$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1296061040, true, AppBar$composable$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.x1h(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.AppBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.p1q(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.u1c();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AppBar$composable$lambda_0($backgroundColor, $contentColor, $elevation, $contentPadding, $shape, $modifier, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AppBar$composable($backgroundColor, $contentColor, $elevation, $contentPadding, $shape, $modifier._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (properties_initialized_AppBar_kt_if00s4) {
    } else {
      properties_initialized_AppBar_kt_if00s4 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      AppBarHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      AppBarHorizontalPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus = tmp$ret$0_1;
      var tmp1_minus = get_AppBarHorizontalPadding();
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      TitleInsetWithoutIcon = width(tmp, tmp$ret$1);
      var tmp_0 = fillMaxHeight(Companion_getInstance());
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(72);
      var tmp0_minus_0 = tmp$ret$0_2;
      var tmp1_minus_0 = get_AppBarHorizontalPadding();
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      TitleIconModifier = width(tmp_0, tmp$ret$1_0);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(8);
      BottomAppBarCutoutOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(4);
      BottomAppBarRoundedEdgeRadius = tmp$ret$0_4;
    }
  }
  function get_BottomNavigationAnimationSpec() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationAnimationSpec;
  }
  var BottomNavigationAnimationSpec;
  function get_BottomNavigationHeight() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationHeight;
  }
  var BottomNavigationHeight;
  function get_BottomNavigationItemHorizontalPadding() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationItemHorizontalPadding;
  }
  var BottomNavigationItemHorizontalPadding;
  function get_CombinedItemTextBaseline() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return CombinedItemTextBaseline;
  }
  var CombinedItemTextBaseline;
  function BottomNavigation$composable(modifier, backgroundColor, contentColor, elevation, content, $composer, $changed, $default) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var modifier_0 = {_v: modifier};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(143106444);
    sourceInformation($composer_0, 'C(BottomNavigation$composable)P(4,0:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.unit.Dp)91@4097L6,92@4146L32,96@4289L403:BottomNavigation.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.a3c_1))) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.a3c_1))) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(elevation_0._v.f2m_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          backgroundColor_0._v = new Color(get_primarySurface(MaterialTheme_getInstance().cav($composer_0, 6)));
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(backgroundColor_0._v.a3c_1, $composer_0, 14 & $dirty >> 3));
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          elevation_0._v = new Dp(BottomNavigationDefaults_getInstance().zav_1);
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(143106444, $dirty, -1, 'androidx.compose.material.BottomNavigation$composable (BottomNavigation.kt:89)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = backgroundColor_0._v.a3c_1;
      var tmp_1 = contentColor_0._v.a3c_1;
      var tmp_2 = elevation_0._v.f2m_1;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.BottomNavigation$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 678339930, true, BottomNavigation$composable$lambda($dirty, content));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.BottomNavigation$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      tmp$ret$1 = tmp_4;
      tmp$ret$2 = tmp$ret$1;
      var tmp_5 = tmp$ret$2;
      tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Surface$composable(tmp, null, tmp_0, tmp_1, null, tmp_2, tmp$ret$6, $composer_0, 1572864 | 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3 | 458752 & $dirty << 6, 18);
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
      tmp0_safe_receiver.y1t(BottomNavigation$composable$lambda_0(modifier_0, backgroundColor_0, contentColor_0, elevation_0, content, $changed, $default));
    }
  }
  function BottomNavigationItem$composable(_this__u8e3s4, selected, onClick, icon, modifier, enabled, label, alwaysShowLabel, interactionSource, selectedContentColor, unselectedContentColor, $composer, $changed, $changed1, $default) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var label_0 = {_v: label};
    var alwaysShowLabel_0 = {_v: alwaysShowLabel};
    var interactionSource_0 = {_v: interactionSource};
    var selectedContentColor_0 = {_v: new Color(selectedContentColor)};
    var unselectedContentColor_0 = {_v: new Color(unselectedContentColor)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1817780854);
    sourceInformation($composer_0, 'C(BottomNavigationItem$composable)P(7,6,2,5,1,4!2,8:c#ui.graphics.Color,9:c#ui.graphics.Color)154@7016L39,155@7109L7,156@7201L6,167@7704L61,169@7771L804:BottomNavigation.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n1p(selected) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(onClick) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(icon) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.n1p(enabled_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.m1p(label_0._v) ? 1048576 : 524288);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.n1p(alwaysShowLabel_0._v) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.x1h(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (($changed & 1879048192) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(selectedContentColor_0._v.a3c_1))) : false) ? 536870912 : 268435456);
    if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ((($default & 512) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(unselectedContentColor_0._v.a3c_1))) : false) ? 4 : 2);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 11) === 2)) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          alwaysShowLabel_0._v = true;
        }
        if (!(($default & 128) === 0)) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.s1c(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
            var value = tmp$ret$0;
            tmp1_cache.p1q(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$1 = tmp;
          tmp$ret$2 = tmp$ret$1;
          var tmp_0 = tmp$ret$2;
          tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.u1c();
          tmp$ret$4 = tmp0;
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -234881025;
        }
        if (!(($default & 256) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp3_$get_current$$composable_fm67ua = get_LocalContentColor();
          var tmp4_$get_current$$composable_f3pcsz = $composer_0;
          var $composer_2 = tmp4_$get_current$$composable_f3pcsz;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.w1p(tmp3_$get_current$$composable_fm67ua);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0.a3c_1;
          selectedContentColor_0._v = new Color(tmp$ret$5);
          $dirty = $dirty & -1879048193;
        }
        if (!(($default & 512) === 0)) {
          unselectedContentColor_0._v = new Color(Color__copy$default_impl_ectz3s(selectedContentColor_0._v.a3c_1, ContentAlpha_getInstance().yav($composer_0, 6)));
          $dirty1 = $dirty1 & -15;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 128) === 0))
          $dirty = $dirty & -234881025;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -1879048193;
        if (!(($default & 512) === 0))
          $dirty1 = $dirty1 & -15;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-1817780854, $dirty, $dirty1, 'androidx.compose.material.BottomNavigationItem$composable (BottomNavigation.kt:146)');
      }
      var tmp0_safe_receiver = label_0._v;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1343298261, true, BottomNavigationItem$composable$lambda(label_0, $dirty));
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_3 = tmp3_remember$composable;
        $composer_3.s1c(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_3;
        var tmp2_cache = $composer_3.x1h(dispatchReceiver);
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().k1j_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          var value_0 = tmp$ret$6;
          tmp1_cache_0.p1q(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = tmp0_let_0;
        }
        tmp$ret$7 = tmp_3;
        tmp$ret$8 = tmp$ret$7;
        var tmp_4 = tmp$ret$8;
        tmp$ret$9 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0_1 = tmp$ret$9;
        $composer_3.u1c();
        tmp$ret$10 = tmp0_1;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        var tmp0_return = tmp$ret$12;
        tmp$ret$13 = tmp0_return;
        tmp$ret$14 = tmp$ret$13;
        tmp_1 = tmp$ret$14;
      }
      var styledLabel = tmp_1;
      var ripple = rememberRipple$composable(false, _Dp___init__impl__ms3zkb(0.0), selectedContentColor_0._v.a3c_1, $composer_0, 6 | 896 & $dirty >> 21, 2);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp1_role = Companion_getInstance_3().f6i_1;
      var tmp21_Box$composable = _this__u8e3s4.l7p(selectable(modifier_0._v, selected, interactionSource_0._v, ripple, enabled_0._v, tmp1_role, onClick), 1.0);
      var tmp22_Box$composable = Companion_getInstance_1().j4g_1;
      var tmp23_Box$composable = false;
      var tmp24_Box$composable = $composer_0;
      var modifier_1 = tmp21_Box$composable;
      var contentAlignment = tmp22_Box$composable;
      var propagateMinConstraints = tmp23_Box$composable;
      var $composer_4 = tmp24_Box$composable;
      $composer_4.s1c(1330882304);
      sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_1().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp16_Layout$composable = modifier_1;
      var tmp17_Layout$composable = $composer_4;
      var tmp18_Layout$composable = 0;
      var modifier_2 = tmp16_Layout$composable;
      var $composer_5 = tmp17_Layout$composable;
      $composer_5.s1c(1725976829);
      sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalDensity();
      var tmp6_$get_current$$composable_e2rmqd = $composer_5;
      var $composer_6 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1p(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$15 = tmp0_2;
      var density = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp7_$get_current$$composable_dkarp2 = get_LocalLayoutDirection();
      var tmp8_$get_current$$composable_d1twnr = $composer_5;
      var $composer_7 = tmp8_$get_current$$composable_d1twnr;
      sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_7.w1p(tmp7_$get_current$$composable_dkarp2);
      sourceInformationMarkerEnd($composer_7);
      tmp$ret$16 = tmp0_3;
      var layoutDirection = tmp$ret$16;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp9_$get_current$$composable_cjd1mg = get_LocalViewConfiguration();
      var tmp10_$get_current$$composable_orpap8 = $composer_5;
      var $composer_8 = tmp10_$get_current$$composable_orpap8;
      sourceInformationMarkerStart($composer_8, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_8.w1p(tmp9_$get_current$$composable_cjd1mg);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$17 = tmp0_4;
      var viewConfiguration = tmp$ret$17;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp11_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp12_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp13_ReusableComposeNode$composable = $composer_5;
      var tmp14_ReusableComposeNode$composable = 6 | 7168 & tmp18_Layout$composable << 9;
      var $composer_9 = tmp13_ReusableComposeNode$composable;
      var tmp_5 = $composer_9.t1o();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_9.e1p();
      if ($composer_9.c1p()) {
        $composer_9.f1p(tmp11_ReusableComposeNode$composable);
      } else {
        $composer_9.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp15__anonymous__a63r3d = _Updater___init__impl__rbfxm8($composer_9);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, measurePolicy, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, density, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, layoutDirection, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, viewConfiguration, Companion_getInstance_2().k5n_1);
      tmp12_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp14_ReusableComposeNode$composable >> 3);
      $composer_9.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp19__anonymous__98mtqr = $composer_9;
      var tmp20__anonymous__q2j3lv = 14 & tmp14_ReusableComposeNode$composable >> 9;
      var $composer_10 = tmp19__anonymous__98mtqr;
      sourceInformationMarkerStart($composer_10, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>' call
      var tmp25__anonymous__1t3vk8 = BoxScopeInstance_getInstance();
      var tmp26__anonymous__31krnb = $composer_10;
      var tmp27__anonymous__7w9euu = 6;
      var $composer_11 = tmp26__anonymous__31krnb;
      sourceInformationMarkerStart($composer_11, -1569767268, 'C182@8148L421:BottomNavigation.kt#jmzs0o');
      var tmp_6 = selectedContentColor_0._v.a3c_1;
      var tmp_7 = unselectedContentColor_0._v.a3c_1;
      var tmp$ret$24;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$23;
      // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous>' call
      var tmp_8 = $composer_11;
      var dispatchReceiver_0 = composableLambda(tmp_8, -1411872801, true, BottomNavigationItem$composable$lambda_0(alwaysShowLabel_0, icon, styledLabel, $dirty));
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_11;
      var $composer_12 = tmp3_remember$composable_0;
      $composer_12.s1c(-838505973);
      sourceInformation($composer_12, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_12;
      var tmp2_cache_0 = $composer_12.x1h(dispatchReceiver_0);
      var tmp$ret$20;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().k1j_1) {
        var tmp$ret$18;
        // Inline function 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$18 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
        var value_1 = tmp$ret$18;
        tmp1_cache_1.p1q(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = tmp0_let_1;
      }
      tmp$ret$19 = tmp_9;
      tmp$ret$20 = tmp$ret$19;
      var tmp_10 = tmp$ret$20;
      tmp$ret$21 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_5 = tmp$ret$21;
      $composer_12.u1c();
      tmp$ret$22 = tmp0_5;
      tmp$ret$23 = tmp$ret$22;
      tmp$ret$24 = tmp$ret$23;
      BottomNavigationTransition$composable(tmp_6, tmp_7, selected, tmp$ret$24, $composer_11, 3072 | 14 & $dirty >> 27 | 112 & $dirty1 << 3 | 896 & $dirty << 3);
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerEnd($composer_10);
      $composer_9.u1c();
      $composer_9.i1p();
      $composer_5.u1c();
      $composer_4.u1c();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp0_safe_receiver_0 = $composer_0.b1q();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.y1t(BottomNavigationItem$composable$lambda_1(_this__u8e3s4, selected, onClick, icon, modifier_0, enabled_0, label_0, alwaysShowLabel_0, interactionSource_0, selectedContentColor_0, unselectedContentColor_0, $changed, $changed1, $default));
    }
  }
  function BottomNavigationDefaults() {
    BottomNavigationDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
    tmp.zav_1 = tmp$ret$0;
    this.aaw_1 = 0;
  }
  var BottomNavigationDefaults_instance;
  function BottomNavigationDefaults_getInstance() {
    if (BottomNavigationDefaults_instance == null)
      new BottomNavigationDefaults();
    return BottomNavigationDefaults_instance;
  }
  function BottomNavigationTransition$composable(activeColor, inactiveColor, selected, content, $composer, $changed) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-821574218);
    sourceInformation($composer_0, 'C(BottomNavigationTransition$composable)P(0:c#ui.graphics.Color,2:c#ui.graphics.Color,3)227@9693L128,234@9896L181:BottomNavigation.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(activeColor))) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(inactiveColor))) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1p(selected) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-821574218, $dirty, -1, 'androidx.compose.material.BottomNavigationTransition$composable (BottomNavigation.kt:221)');
      }
      var tmp = selected ? 1.0 : 0.0;
      var tmp_0 = get_BottomNavigationAnimationSpec();
      var animationProgress$delegate = animateFloatAsState$composable(tmp, tmp_0, 0.0, null, null, $composer_0, 48, 28);
      var color = lerp(inactiveColor, activeColor, BottomNavigationTransition$composable$lambda(animationProgress$delegate));
      var tmp_1 = [get_LocalContentColor().t1t(new Color(Color__copy$default_impl_ectz3s(color, 1.0))), get_LocalContentAlpha().t1t(_Color___get_alpha__impl__wcfyv1(color))];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.BottomNavigationTransition$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -138092754, true, BottomNavigationTransition$composable$lambda_0(content, $dirty, animationProgress$delegate));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.BottomNavigationTransition$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      tmp$ret$1 = tmp_3;
      tmp$ret$2 = tmp$ret$1;
      var tmp_4 = tmp$ret$2;
      tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp_1, tmp$ret$6, $composer_0, 48);
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
      tmp0_safe_receiver.y1t(BottomNavigationTransition$composable$lambda_1(activeColor, inactiveColor, selected, content, $changed));
    }
  }
  function BottomNavigationItemBaselineLayout$composable(icon, label, iconPositionAnimationProgress, $composer, $changed) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1580286841);
    sourceInformation($composer_0, 'C(BottomNavigationItemBaselineLayout$composable)P(!1,2)271@11155L798,259@10750L1203:BottomNavigation.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(icon) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(label) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1p(iconPositionAnimationProgress) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1580286841, $dirty, -1, 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable (BottomNavigation.kt:253)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp16_Layout$composable = null;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $dirty >> 3 | 112 & $dirty >> 3;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.x1h(label) | $composer_1.x1h(iconPositionAnimationProgress));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>' call
        tmp$ret$0 = BottomNavigationItemBaselineLayout$composable$lambda(label, iconPositionAnimationProgress);
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      var tmp_1 = tmp$ret$4;
      var tmp17_Layout$composable = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_1);
      var tmp18_Layout$composable = $composer_0;
      var modifier = tmp16_Layout$composable;
      var $composer_2 = tmp18_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(2 === 0))
        modifier = Companion_getInstance();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalDensity();
      var tmp6_$get_current$$composable_e2rmqd = $composer_2;
      var $composer_3 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_3.w1p(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$5 = tmp0_0;
      var density = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp7_$get_current$$composable_dkarp2 = get_LocalLayoutDirection();
      var tmp8_$get_current$$composable_d1twnr = $composer_2;
      var $composer_4 = tmp8_$get_current$$composable_d1twnr;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_4.w1p(tmp7_$get_current$$composable_dkarp2);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$6 = tmp0_1;
      var layoutDirection = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp9_$get_current$$composable_cjd1mg = get_LocalViewConfiguration();
      var tmp10_$get_current$$composable_orpap8 = $composer_2;
      var $composer_5 = tmp10_$get_current$$composable_orpap8;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_5.w1p(tmp9_$get_current$$composable_cjd1mg);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$7 = tmp0_2;
      var viewConfiguration = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp11_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp12_ReusableComposeNode$composable = materializerOf(modifier);
      var tmp13_ReusableComposeNode$composable = $composer_2;
      var tmp14_ReusableComposeNode$composable = 6;
      var $composer_6 = tmp13_ReusableComposeNode$composable;
      var tmp_2 = $composer_6.t1o();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_6.e1p();
      if ($composer_6.c1p()) {
        $composer_6.f1p(tmp11_ReusableComposeNode$composable);
      } else {
        $composer_6.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp15__anonymous__a63r3d = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, tmp17_Layout$composable, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, density, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, layoutDirection, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, viewConfiguration, Companion_getInstance_2().k5n_1);
      tmp12_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp14_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>' call
      var tmp19__anonymous__98mtqr = $composer_6;
      var tmp20__anonymous__q2j3lv = 14 & tmp14_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp19__anonymous__98mtqr;
      sourceInformationMarkerStart($composer_7, -920044077, 'C261@10780L41:BottomNavigation.kt#jmzs0o');
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = layoutId(Companion_getInstance(), 'icon');
      var tmp17_Box$composable = null;
      var tmp18_Box$composable = false;
      var tmp19_Box$composable = $composer_7;
      var modifier_0 = tmp16_Box$composable;
      var contentAlignment = tmp17_Box$composable;
      var propagateMinConstraints = tmp18_Box$composable;
      var $composer_8 = tmp19_Box$composable;
      $composer_8.s1c(1330882304);
      sourceInformation($composer_8, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_1().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_8, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0;
      var tmp12_Layout$composable = $composer_8;
      var tmp13_Layout$composable = 48;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_9 = tmp12_Layout$composable;
      $composer_9.s1c(1725976829);
      sourceInformation($composer_9, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_9;
      var $composer_10 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_10, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_10.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$8 = tmp0_3;
      var density_0 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_9;
      var $composer_11 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_11.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_11);
      tmp$ret$9 = tmp0_4;
      var layoutDirection_0 = tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro_0 = $composer_9;
      var $composer_12 = tmp5_$get_current$$composable_el8hro_0;
      sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_12.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_12);
      tmp$ret$10 = tmp0_5;
      var viewConfiguration_0 = tmp$ret$10;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_9;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_13 = tmp8_ReusableComposeNode$composable;
      var tmp_3 = $composer_13.t1o();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_13.e1p();
      if ($composer_13.c1p()) {
        $composer_13.f1p(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_13.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density_0, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection_0, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration_0, Companion_getInstance_2().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_13.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_13;
      var tmp15__anonymous__a63r3d_0 = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_14 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_14, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>.<anonymous>' call
      var tmp20__anonymous__q2j3lv_0 = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_14;
      var tmp22__anonymous__gd5t6t = 6;
      var $composer_15 = tmp21__anonymous__l7ugec;
      sourceInformationMarkerStart($composer_15, 1170564501, 'C261@10813L6:BottomNavigation.kt#jmzs0o');
      icon($composer_15, 14 & $dirty);
      sourceInformationMarkerEnd($composer_15);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.u1c();
      $composer_13.i1p();
      $composer_9.u1c();
      $composer_8.u1c();
      $composer_0.s1c(-297833240);
      sourceInformation($composer_0, '263@10871L253');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp39_Box$composable = padding_0(alpha(layoutId(Companion_getInstance(), 'label'), iconPositionAnimationProgress), get_BottomNavigationItemHorizontalPadding());
        var tmp40_Box$composable = null;
        var tmp41_Box$composable = false;
        var tmp42_Box$composable = $composer_7;
        var modifier_2 = tmp39_Box$composable;
        var contentAlignment_0 = tmp40_Box$composable;
        var propagateMinConstraints_0 = tmp41_Box$composable;
        var $composer_16 = tmp42_Box$composable;
        $composer_16.s1c(1330882304);
        sourceInformation($composer_16, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment_0 = Companion_getInstance_1().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_16, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp34_Layout$composable = modifier_2;
        var tmp35_Layout$composable = $composer_16;
        var tmp36_Layout$composable = 0;
        var modifier_3 = tmp34_Layout$composable;
        var $composer_17 = tmp35_Layout$composable;
        $composer_17.s1c(1725976829);
        sourceInformation($composer_17, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance();
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp23_$get_current$$composable_7brzgu = get_LocalDensity();
        var tmp24_$get_current$$composable_6tb4fj = $composer_17;
        var $composer_18 = tmp24_$get_current$$composable_6tb4fj;
        sourceInformationMarkerStart($composer_18, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_6 = $composer_18.w1p(tmp23_$get_current$$composable_7brzgu);
        sourceInformationMarkerEnd($composer_18);
        tmp$ret$11 = tmp0_6;
        var density_1 = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp25_$get_current$$composable_6au9e8 = get_LocalLayoutDirection();
        var tmp26_$get_current$$composable_5sdecx = $composer_17;
        var $composer_19 = tmp26_$get_current$$composable_5sdecx;
        sourceInformationMarkerStart($composer_19, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_7 = $composer_19.w1p(tmp25_$get_current$$composable_6au9e8);
        sourceInformationMarkerEnd($composer_19);
        tmp$ret$12 = tmp0_7;
        var layoutDirection_1 = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp27_$get_current$$composable_59wjbm = get_LocalViewConfiguration();
        var tmp28_$get_current$$composable_4rfoab = $composer_17;
        var $composer_20 = tmp28_$get_current$$composable_4rfoab;
        sourceInformationMarkerStart($composer_20, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_8 = $composer_20.w1p(tmp27_$get_current$$composable_59wjbm);
        sourceInformationMarkerEnd($composer_20);
        tmp$ret$13 = tmp0_8;
        var viewConfiguration_1 = tmp$ret$13;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp29_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp30_ReusableComposeNode$composable = materializerOf(modifier_3);
        var tmp31_ReusableComposeNode$composable = $composer_17;
        var tmp32_ReusableComposeNode$composable = 6 | 7168 & tmp36_Layout$composable << 9;
        var $composer_21 = tmp31_ReusableComposeNode$composable;
        var tmp_4 = $composer_21.t1o();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_21.e1p();
        if ($composer_21.c1p()) {
          $composer_21.f1p(tmp29_ReusableComposeNode$composable);
        } else {
          $composer_21.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp33__anonymous__35hag5 = _Updater___init__impl__rbfxm8($composer_21);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, measurePolicy_0, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, density_1, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, layoutDirection_1, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, viewConfiguration_1, Companion_getInstance_2().k5n_1);
        tmp30_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_21)), $composer_21, 112 & tmp32_ReusableComposeNode$composable >> 3);
        $composer_21.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp37__anonymous__g99adz = $composer_21;
        var tmp38__anonymous__l3xxli = 14 & tmp32_ReusableComposeNode$composable >> 9;
        var $composer_22 = tmp37__anonymous__g99adz;
        sourceInformationMarkerStart($composer_22, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>.<anonymous>' call
        var tmp43__anonymous__57il30 = BoxScopeInstance_getInstance();
        var tmp44__anonymous__a278aj = $composer_22;
        var tmp45__anonymous__ewvvi2 = 6;
        var $composer_23 = tmp44__anonymous__a278aj;
        sourceInformationMarkerStart($composer_23, 1170564803, 'C268@11115L7:BottomNavigation.kt#jmzs0o');
        label($composer_23, 14 & $dirty >> 3);
        sourceInformationMarkerEnd($composer_23);
        sourceInformationMarkerEnd($composer_22);
        $composer_21.u1c();
        $composer_21.i1p();
        $composer_17.u1c();
        $composer_16.u1c();
      }
      $composer_0.u1c();
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(BottomNavigationItemBaselineLayout$composable$lambda_0(icon, label, iconPositionAnimationProgress, $changed));
    }
  }
  function placeIcon(_this__u8e3s4, iconPlaceable, constraints) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var iconY = (height - iconPlaceable.n4l_1 | 0) / 2 | 0;
    var tmp = iconPlaceable.m4l_1;
    return _this__u8e3s4.r4l(tmp, height, VOID, placeIcon$lambda(iconPlaceable, iconY));
  }
  function placeLabelAndIcon(_this__u8e3s4, labelPlaceable, iconPlaceable, constraints, iconPositionAnimationProgress) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var baseline = labelPlaceable.p5r(get_LastBaseline());
    var baselineOffset = _this__u8e3s4.q2l(get_CombinedItemTextBaseline());
    var labelY = (height - baseline | 0) - baselineOffset | 0;
    var unselectedIconY = (height - iconPlaceable.n4l_1 | 0) / 2 | 0;
    var selectedIconY = (height - imul(baselineOffset, 2) | 0) - iconPlaceable.n4l_1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = labelPlaceable.m4l_1;
    var tmp1_max = iconPlaceable.m4l_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var containerWidth = tmp$ret$0;
    var labelX = (containerWidth - labelPlaceable.m4l_1 | 0) / 2 | 0;
    var iconX = (containerWidth - iconPlaceable.m4l_1 | 0) / 2 | 0;
    var iconDistance = unselectedIconY - selectedIconY | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt = iconDistance * (1 - iconPositionAnimationProgress);
    tmp$ret$1 = roundToInt(tmp2_roundToInt);
    var offset = tmp$ret$1;
    return _this__u8e3s4.r4l(containerWidth, height, VOID, placeLabelAndIcon$lambda(iconPositionAnimationProgress, labelPlaceable, labelX, labelY, offset, iconPlaceable, iconX, selectedIconY));
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.baw_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).s5r = function (_this__u8e3s4, measurables, constraints) {
    return this.baw_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function BottomNavigationTransition$composable$lambda($animationProgress$delegate) {
    _init_properties_BottomNavigation_kt__nco6o1();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animationProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animationProgress$delegate.b2();
    return tmp$ret$0;
  }
  function BottomNavigation$composable$lambda($$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C102@4443L243:BottomNavigation.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(678339930, $changed, -1, 'androidx.compose.material.BottomNavigation$composable.<anonymous> (BottomNavigation.kt:101)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp16_Row$composable = selectableGroup(height(fillMaxWidth(Companion_getInstance()), get_BottomNavigationHeight()));
        var tmp17_Row$composable = Arrangement_getInstance().x7m_1;
        var tmp18_Row$composable = null;
        var tmp19_Row$composable = $composer_0;
        var tmp20_Row$composable = 48 | 7168 & $$dirty >> 3;
        var modifier = tmp16_Row$composable;
        var horizontalArrangement = tmp17_Row$composable;
        var verticalAlignment = tmp18_Row$composable;
        var $composer_1 = tmp19_Row$composable;
        $composer_1.s1c(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().r7m_1;
        if (!(4 === 0))
          verticalAlignment = Companion_getInstance_1().o4g_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp20_Row$composable >> 3 | 112 & tmp20_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 112 & tmp20_Row$composable << 3;
        var modifier_0 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.t1o();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.e1p();
        if ($composer_6.c1p()) {
          $composer_6.f1p(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp20_Row$composable >> 6);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function BottomNavigation$composable$lambda_0($modifier, $backgroundColor, $contentColor, $elevation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      BottomNavigation$composable($modifier._v, $backgroundColor._v.a3c_1, $contentColor._v.a3c_1, $elevation._v.f2m_1, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BottomNavigationItem$composable$lambda($label, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C160@7335L10,161@7401L40:BottomNavigation.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1343298261, $changed, -1, 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous> (BottomNavigation.kt:159)');
        }
        var style = MaterialTheme_getInstance().xav($composer_0, 6).uav_1.b42(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_4().g3x_1);
        ProvideTextStyle$composable(style, $label._v, $composer_0, 112 & $$dirty >> 15);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function BottomNavigationItem$composable$lambda_0($alwaysShowLabel, $icon, $styledLabel, $$dirty) {
    return function (progress, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C189@8378L181:BottomNavigation.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.o1p(progress) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1411872801, $changed, -1, 'androidx.compose.material.BottomNavigationItem$composable.<anonymous>.<anonymous> (BottomNavigation.kt:186)');
        }
        var animationProgress = $alwaysShowLabel._v ? 1.0 : progress;
        BottomNavigationItemBaselineLayout$composable($icon, $styledLabel, animationProgress, $composer_0, 14 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function BottomNavigationItem$composable$lambda_1($this_BottomNavigationItem$composable, $selected, $onClick, $icon, $modifier, $enabled, $label, $alwaysShowLabel, $interactionSource, $selectedContentColor, $unselectedContentColor, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      BottomNavigationItem$composable($this_BottomNavigationItem$composable, $selected, $onClick, $icon, $modifier._v, $enabled._v, $label._v, $alwaysShowLabel._v, $interactionSource._v, $selectedContentColor._v.a3c_1, $unselectedContentColor._v.a3c_1, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function BottomNavigationTransition$composable$lambda_0($content, $$dirty, $animationProgress$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C238@10045L26:BottomNavigation.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-138092754, $changed, -1, 'androidx.compose.material.BottomNavigationTransition$composable.<anonymous> (BottomNavigation.kt:237)');
        }
        $content(BottomNavigationTransition$composable$lambda($animationProgress$delegate), $composer_0, 112 & $$dirty >> 6);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function BottomNavigationTransition$composable$lambda_1($activeColor, $inactiveColor, $selected, $content, $$changed) {
    return function ($composer, $force) {
      BottomNavigationTransition$composable($activeColor, $inactiveColor, $selected, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BottomNavigationItemBaselineLayout$composable$lambda($label, $iconPositionAnimationProgress) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator = measurables.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(get_layoutId(element), 'icon');
          if (tmp$ret$0) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var iconPlaceable = tmp$ret$1.l4l(constraints.k2l_1);
      var tmp0_safe_receiver = $label;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.collections.first' call
          var tmp0_iterator_0 = measurables.c();
          while (tmp0_iterator_0.d()) {
            var element_0 = tmp0_iterator_0.e();
            var tmp$ret$2;
            // Inline function 'androidx.compose.material.BottomNavigationItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$2 = equals(get_layoutId(element_0), 'label');
            if (tmp$ret$2) {
              tmp$ret$3 = element_0;
              break $l$block_0;
            }
          }
          throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
        }
        tmp$ret$4 = tmp$ret$3.l4l(Constraints__copy$default_impl_f452rp(constraints.k2l_1, VOID, VOID, 0));
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      var labelPlaceable = tmp;
      var tmp_0;
      if ($label == null) {
        tmp_0 = placeIcon($this$Layout, iconPlaceable, constraints.k2l_1);
      } else {
        tmp_0 = placeLabelAndIcon($this$Layout, ensureNotNull(labelPlaceable), iconPlaceable, constraints.k2l_1, $iconPositionAnimationProgress);
      }
      return tmp_0;
    };
  }
  function BottomNavigationItemBaselineLayout$composable$lambda_0($icon, $label, $iconPositionAnimationProgress, $$changed) {
    return function ($composer, $force) {
      BottomNavigationItemBaselineLayout$composable($icon, $label, $iconPositionAnimationProgress, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function placeIcon$lambda($iconPlaceable, $iconY) {
    return function ($this$layout) {
      $this$layout.j4l($iconPlaceable, 0, $iconY);
      return Unit_getInstance();
    };
  }
  function placeLabelAndIcon$lambda($iconPositionAnimationProgress, $labelPlaceable, $labelX, $labelY, $offset, $iconPlaceable, $iconX, $selectedIconY) {
    return function ($this$layout) {
      var tmp;
      if (!($iconPositionAnimationProgress === 0.0)) {
        $this$layout.j4l($labelPlaceable, $labelX, $labelY + $offset | 0);
        tmp = Unit_getInstance();
      }
      $this$layout.j4l($iconPlaceable, $iconX, $selectedIconY + $offset | 0);
      return Unit_getInstance();
    };
  }
  var properties_initialized_BottomNavigation_kt_6l9ewv;
  function _init_properties_BottomNavigation_kt__nco6o1() {
    if (properties_initialized_BottomNavigation_kt_6l9ewv) {
    } else {
      properties_initialized_BottomNavigation_kt_6l9ewv = true;
      BottomNavigationAnimationSpec = new TweenSpec(300, VOID, get_FastOutSlowInEasing());
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      BottomNavigationHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      BottomNavigationItemHorizontalPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(12);
      CombinedItemTextBaseline = tmp$ret$0_1;
    }
  }
  function Button$composable(onClick, modifier, enabled, interactionSource, elevation, shape, border, colors, contentPadding, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var elevation_0 = {_v: elevation};
    var shape_0 = {_v: shape};
    var border_0 = {_v: border};
    var colors_0 = {_v: colors};
    var contentPadding_0 = {_v: contentPadding};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1097700753);
    sourceInformation($composer_0, 'C(Button$composable)P(8,7,5,6,4,9!2,3)97@4664L39,98@4754L11,99@4800L6,101@4890L14,105@5053L21,108@5153L22,111@5250L24,106@5079L1119:Button.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1p(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.x1h(interactionSource_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.x1h(elevation_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.x1h(shape_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.x1h(border_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.x1h(colors_0._v) : false) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.x1h(contentPadding_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.s1c(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
            var value = tmp$ret$0;
            tmp1_cache.p1q(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$1 = tmp;
          tmp$ret$2 = tmp$ret$1;
          var tmp_0 = tmp$ret$2;
          tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.u1c();
          tmp$ret$4 = tmp0;
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp_1 = ButtonDefaults_getInstance();
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_1.oaw(tmp_2, tmp_3, tmp_4, tmp_5, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = MaterialTheme_getInstance().taw($composer_0, 6).paw_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp_6 = ButtonDefaults_getInstance();
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_6.uaw(tmp_7, tmp_8, tmp_9, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().eaw_1;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-1097700753, $dirty, -1, 'androidx.compose.material.Button$composable (Button.kt:93)');
      }
      var contentColor$delegate = colors_0._v.vaw(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18);
      var tmp_10 = modifier_0._v;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_2 = tmp5_remember$composable;
      $composer_2.s1c(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (false ? true : tmp3_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
        tmp$ret$5 = Button$composable$lambda_0;
        var value_0 = tmp$ret$5;
        tmp4_cache.p1q(value_0);
        tmp_11 = value_0;
      } else {
        tmp_11 = tmp3_let;
      }
      tmp$ret$6 = tmp_11;
      tmp$ret$7 = tmp$ret$6;
      var tmp_12 = tmp$ret$7;
      tmp$ret$8 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.u1c();
      tmp$ret$9 = tmp0_0;
      var tmp_13 = semantics(tmp_10, VOID, tmp$ret$9);
      var tmp_14 = enabled_0._v;
      var tmp_15 = shape_0._v;
      var tmp_16 = colors_0._v.waw(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18).b2().a3c_1;
      var tmp_17 = Color__copy$default_impl_ectz3s(Button$composable$lambda(contentColor$delegate), 1.0);
      var tmp_18 = border_0._v;
      var tmp0_safe_receiver = elevation_0._v;
      $composer_0.s1c(1967139223);
      sourceInformation($composer_0, '114@5392L37');
      var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xaw(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 6 | 896 & $dirty >> 6);
      $composer_0.u1c();
      var tmp1_safe_receiver = tmp0_group;
      var tmp_19;
      if (tmp1_safe_receiver == null) {
        tmp_19 = null;
      } else {
        var tmp_20 = tmp1_safe_receiver.b2();
        tmp_19 = tmp_20 == null ? null : tmp_20.f2m_1;
      }
      var tmp2_elvis_lhs = tmp_19;
      var tmp_21;
      var tmp_22 = tmp2_elvis_lhs;
      if ((tmp_22 == null ? null : new Dp(tmp_22)) == null) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$10 = _Dp___init__impl__ms3zkb(0);
        tmp_21 = tmp$ret$10;
      } else {
        tmp_21 = tmp2_elvis_lhs;
      }
      var tmp_23 = tmp_21;
      var tmp_24 = interactionSource_0._v;
      var tmp$ret$17;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
      var tmp_25 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_25, 7524271, true, Button$composable$lambda_1(contentColor$delegate, contentPadding_0, $dirty, content));
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.x1h(dispatchReceiver);
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_26;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().k1j_1) {
        var tmp$ret$11;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>' call
        tmp$ret$11 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        var value_1 = tmp$ret$11;
        tmp1_cache_0.p1q(value_1);
        tmp_26 = value_1;
      } else {
        tmp_26 = tmp0_let_0;
      }
      tmp$ret$12 = tmp_26;
      tmp$ret$13 = tmp$ret$12;
      var tmp_27 = tmp$ret$13;
      tmp$ret$14 = (tmp_27 == null ? true : isObject(tmp_27)) ? tmp_27 : THROW_CCE();
      var tmp0_1 = tmp$ret$14;
      $composer_3.u1c();
      tmp$ret$15 = tmp0_1;
      tmp$ret$16 = tmp$ret$15;
      tmp$ret$17 = tmp$ret$16;
      Surface$composable_0(onClick, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_23, tmp_24, tmp$ret$17, $composer_0, 805306368 | 14 & $dirty | 896 & $dirty | 7168 & $dirty >> 6 | 3670016 & $dirty | 234881024 & $dirty << 15, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp1_safe_receiver_0 = $composer_0.b1q();
    if (tmp1_safe_receiver_0 === null)
      null;
    else {
      tmp1_safe_receiver_0.y1t(Button$composable$lambda_2(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $changed, $default));
    }
  }
  function TextButton$composable(onClick, modifier, enabled, interactionSource, elevation, shape, border, colors, contentPadding, content, $composer, $changed, $default) {
    var modifier_0 = modifier;
    var enabled_0 = enabled;
    var interactionSource_0 = interactionSource;
    var elevation_0 = elevation;
    var shape_0 = shape;
    var border_0 = border;
    var colors_0 = colors;
    var contentPadding_0 = contentPadding;
    var $composer_0 = $composer;
    $composer_0.s1c(-44905150);
    sourceInformation($composer_0, 'C(TextButton$composable)P(8,7,5,6,4,9!2,3)225@10691L39,227@10805L6,229@10895L18,232@11041L270:Button.kt#jmzs0o');
    if (!(($default & 2) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 4) === 0))
      enabled_0 = true;
    if (!(($default & 8) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.s1c(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.TextButton$composable.<anonymous>' call
        tmp$ret$0 = funMutableInteractionSource();
        var value = tmp$ret$0;
        tmp1_cache.p1q(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.u1c();
      tmp$ret$4 = tmp0;
      interactionSource_0 = tmp$ret$4;
    }
    if (!(($default & 16) === 0))
      elevation_0 = null;
    if (!(($default & 32) === 0))
      shape_0 = MaterialTheme_getInstance().taw($composer_0, 6).paw_1;
    if (!(($default & 64) === 0))
      border_0 = null;
    if (!(($default & 128) === 0)) {
      var tmp_1 = ButtonDefaults_getInstance();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      colors_0 = tmp_1.yaw(tmp_2, tmp_3, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072, 7);
    }
    if (!(($default & 256) === 0))
      contentPadding_0 = ButtonDefaults_getInstance().maw_1;
    if (isTraceInProgress()) {
      traceEventStart(-44905150, $changed, -1, 'androidx.compose.material.TextButton$composable (Button.kt:221)');
    }
    Button$composable(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed | 458752 & $changed | 3670016 & $changed | 29360128 & $changed | 234881024 & $changed | 1879048192 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
    tmp.caw_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    tmp_0.daw_1 = tmp$ret$1;
    this.eaw_1 = PaddingValues(this.caw_1, this.daw_1, this.caw_1, this.daw_1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(64);
    tmp_1.faw_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(36);
    tmp_2.gaw_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(18);
    tmp_3.haw_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(8);
    tmp_4.iaw_1 = tmp$ret$5;
    this.jaw_1 = 0.12;
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(1);
    tmp_5.kaw_1 = tmp$ret$6;
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(8);
    tmp_6.law_1 = tmp$ret$7;
    this.maw_1 = PaddingValues(this.law_1, this.eaw_1.f7p(), this.law_1, this.eaw_1.g7p());
    this.naw_1 = 0;
  }
  protoOf(ButtonDefaults).oaw = function (defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation, $composer, $changed, $default) {
    var defaultElevation_0 = {_v: new Dp(defaultElevation)};
    var pressedElevation_0 = {_v: new Dp(pressedElevation)};
    var disabledElevation_0 = {_v: new Dp(disabledElevation)};
    var hoveredElevation_0 = {_v: new Dp(hoveredElevation)};
    var focusedElevation_0 = {_v: new Dp(focusedElevation)};
    var $composer_0 = $composer;
    $composer_0.s1c(-292886193);
    sourceInformation($composer_0, 'C(elevation$composable)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,1:c#ui.unit.Dp,3:c#ui.unit.Dp,2:c#ui.unit.Dp)378@15799L497:Button.kt#jmzs0o');
    if (!(($default & 1) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      defaultElevation_0._v = new Dp(tmp$ret$0);
    }
    if (!(($default & 2) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      pressedElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 4) === 0)) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      disabledElevation_0._v = new Dp(tmp$ret$2);
    }
    if (!(($default & 8) === 0)) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
      hoveredElevation_0._v = new Dp(tmp$ret$3);
    }
    if (!(($default & 16) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$4 = _Dp___init__impl__ms3zkb(4);
      focusedElevation_0._v = new Dp(tmp$ret$4);
    }
    if (isTraceInProgress()) {
      traceEventStart(-292886193, $changed, -1, 'androidx.compose.material.ButtonDefaults.elevation$composable (Button.kt:371)');
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = [defaultElevation_0._v, pressedElevation_0._v, disabledElevation_0._v, hoveredElevation_0._v, focusedElevation_0._v];
    var tmp4_remember$composable = $composer_0;
    var $composer_1 = tmp4_remember$composable;
    $composer_1.s1c(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp3_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.x1h(key));
    }
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.ButtonDefaults.elevation$composable.<anonymous>' call
      tmp$ret$5 = new DefaultButtonElevation(defaultElevation_0._v.f2m_1, pressedElevation_0._v.f2m_1, disabledElevation_0._v.f2m_1, hoveredElevation_0._v.f2m_1, focusedElevation_0._v.f2m_1);
      var value = tmp$ret$5;
      tmp1_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$6 = tmp;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    tmp$ret$8 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$8;
    $composer_1.u1c();
    tmp$ret$9 = tmp0;
    var tmp0_0 = tmp$ret$9;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  };
  protoOf(ButtonDefaults).uaw = function (backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledBackgroundColor_0 = disabledBackgroundColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.s1c(688397153);
    sourceInformation($composer_0, 'C(buttonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)406@16865L6,407@16911L32,408@17000L6,409@17078L6,410@17147L6,411@17203L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().cav($composer_0, 6).nax();
    if (!(($default & 2) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed);
    if (!(($default & 4) === 0))
      disabledBackgroundColor_0 = compositeOver(Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().cav($composer_0, 6).oax(), 0.12), MaterialTheme_getInstance().cav($composer_0, 6).pax());
    if (!(($default & 8) === 0))
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().cav($composer_0, 6).oax(), ContentAlpha_getInstance().qax($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventStart(688397153, $changed, -1, 'androidx.compose.material.ButtonDefaults.buttonColors$composable (Button.kt:405)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, disabledBackgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  protoOf(ButtonDefaults).yaw = function (backgroundColor, contentColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.s1c(605145892);
    sourceInformation($composer_0, 'C(textButtonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color)451@18901L6,452@18969L6,453@19025L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = Companion_getInstance_5().m39_1;
    if (!(($default & 2) === 0))
      contentColor_0 = MaterialTheme_getInstance().cav($composer_0, 6).nax();
    if (!(($default & 4) === 0))
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().cav($composer_0, 6).oax(), ContentAlpha_getInstance().qax($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventStart(605145892, $changed, -1, 'androidx.compose.material.ButtonDefaults.textButtonColors$composable (Button.kt:449)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, backgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.zax_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).c87 = function (interaction, $completion) {
    var tmp = this.d87(interaction, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).eg = function (p1, $completion) {
    return this.c87((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          var tmp0_subject = this.aay_1;
          if (tmp0_subject instanceof Enter) {
            this.zax_1.h1r(this.aay_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.zax_1.n22(this.aay_1.z9h_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.zax_1.h1r(this.aay_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.zax_1.n22(this.aay_1.y9g_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.zax_1.h1r(this.aay_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.zax_1.n22(this.aay_1.c9j_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.zax_1.n22(this.aay_1.e9j_1);
                      }
                    }
                  }
                }
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).d87 = function (interaction, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda(this.zax_1, completion);
    i.aay_1 = interaction;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.c87(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.bay_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).c14 = function (value, $completion) {
    var tmp0 = this.bay_1(value, $completion);
    return tmp0;
  };
  function DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.kay_1 = $interactionSource;
    this.lay_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp_0 = this.kay_1.n86();
            var tmp_1 = DefaultButtonElevation$elevation$composable$slambda$slambda_0(this.lay_1, null);
            suspendResult = tmp_0.k13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda).q1x = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda(this.kay_1, this.lay_1, completion);
    i.may_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation) {
    this.vay_1 = $animatable;
    this.way_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.vay_1.b79(new Dp(this.way_1), this);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).q1x = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1(this.vay_1, this.way_1, completion);
    i.xay_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_2($animatable, $target, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation) {
    this.gaz_1 = $animatable;
    this.haz_1 = this$0;
    this.iaz_1 = $target;
    this.jaz_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).p1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1x($this$LaunchedEffect, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            var tmp_0 = this;
            var tmp0_subject = this.gaz_1.k78().f2m_1;
            tmp_0.laz_1 = equals(tmp0_subject, this.haz_1.naz_1) ? new Press(Companion_getInstance_6().m2j_1) : equals(tmp0_subject, this.haz_1.paz_1) ? new Enter() : equals(tmp0_subject, this.haz_1.qaz_1) ? new Focus() : null;
            this.jf_1 = 1;
            suspendResult = animateElevation(this.gaz_1, this.iaz_1, this.laz_1, this.jaz_1, this);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).q1x = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3(this.gaz_1, this.haz_1, this.iaz_1, this.jaz_1, completion);
    i.kaz_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_4($animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation(defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation) {
    this.maz_1 = defaultElevation;
    this.naz_1 = pressedElevation;
    this.oaz_1 = disabledElevation;
    this.paz_1 = hoveredElevation;
    this.qaz_1 = focusedElevation;
  }
  protoOf(DefaultButtonElevation).xaw = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1494019001);
    sourceInformation($composer_0, 'C(elevation$composable)506@20624L46,507@20713L1077,507@20679L1111,548@22239L51:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1494019001, $changed, -1, 'androidx.compose.material.DefaultButtonElevation.elevation$composable (Button.kt:505)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.s1c(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$0 = mutableStateListOf();
      var value = tmp$ret$0;
      tmp1_cache.p1q(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.u1c();
    tmp$ret$4 = tmp0;
    var interactions = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = $composer_0;
    var tmp7_remember$composable = 14 & $changed >> 3;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.s1c(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = !!($composer_2.x1h(interactionSource) | $composer_2.x1h(interactions));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$5 = DefaultButtonElevation$elevation$composable$slambda_0(interactionSource, interactions, null);
      var value_0 = tmp$ret$5;
      tmp4_cache.p1q(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.u1c();
    tmp$ret$9 = tmp0_0;
    LaunchedEffect$composable(interactionSource, tmp$ret$9, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = this.oaz_1;
    } else {
      var tmp0_subject = interaction;
      var tmp_4;
      if (tmp0_subject instanceof Press) {
        tmp_4 = this.naz_1;
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp_4 = this.paz_1;
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp_4 = this.qaz_1;
          } else {
            tmp_4 = this.maz_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    var tmp$ret$14;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp10_remember$composable = $composer_0;
    var $composer_3 = tmp10_remember$composable;
    $composer_3.s1c(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp9_cache = $composer_3;
    var tmp$ret$12;
    // Inline function 'kotlin.let' call
    var tmp8_let = tmp9_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_5;
    if (false ? true : tmp8_let === Companion_getInstance_0().k1j_1) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      tmp$ret$10 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_7()));
      var value_1 = tmp$ret$10;
      tmp9_cache.p1q(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = tmp8_let;
    }
    tmp$ret$11 = tmp_5;
    tmp$ret$12 = tmp$ret$11;
    var tmp_6 = tmp$ret$12;
    tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
    var tmp0_1 = tmp$ret$13;
    $composer_3.u1c();
    tmp$ret$14 = tmp0_1;
    var animatable = tmp$ret$14;
    if (!enabled) {
      $composer_0.s1c(-1895906632);
      sourceInformation($composer_0, '552@22412L57,552@22389L80');
      var tmp_7 = new Dp(target);
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp14_remember$composable = $composer_0;
      var $composer_4 = tmp14_remember$composable;
      $composer_4.s1c(-1124426577);
      sourceInformation($composer_4, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp12_cache = $composer_4;
      var tmp13_cache = !!($composer_4.x1h(animatable) | $composer_4.x1h(new Dp(target)));
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp11_let = tmp12_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp13_cache ? true : tmp11_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$15;
        // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
        tmp$ret$15 = DefaultButtonElevation$elevation$composable$slambda_2(animatable, target, null);
        var value_2 = tmp$ret$15;
        tmp12_cache.p1q(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp11_let;
      }
      tmp$ret$16 = tmp_8;
      tmp$ret$17 = tmp$ret$16;
      var tmp_9 = tmp$ret$17;
      tmp$ret$18 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.u1c();
      tmp$ret$19 = tmp0_2;
      LaunchedEffect$composable(tmp_7, tmp$ret$19, $composer_0, 0);
      $composer_0.u1c();
    } else {
      $composer_0.s1c(-1895906461);
      sourceInformation($composer_0, '556@22499L546');
      var tmp_10 = new Dp(target);
      LaunchedEffect$composable(tmp_10, DefaultButtonElevation$elevation$composable$slambda_4(animatable, this, target, interaction, null), $composer_0, 0);
      $composer_0.u1c();
    }
    var tmp0_3 = animatable.c79();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_3;
  };
  function DefaultButtonColors(backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor) {
    this.raz_1 = backgroundColor;
    this.saz_1 = contentColor;
    this.taz_1 = disabledBackgroundColor;
    this.uaz_1 = disabledContentColor;
  }
  protoOf(DefaultButtonColors).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof DefaultButtonColors)
      other;
    else
      THROW_CCE();
    if (!equals(this.raz_1, other.raz_1))
      return false;
    if (!equals(this.saz_1, other.saz_1))
      return false;
    if (!equals(this.taz_1, other.taz_1))
      return false;
    if (!equals(this.uaz_1, other.uaz_1))
      return false;
    return true;
  };
  protoOf(DefaultButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.raz_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.saz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.taz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.uaz_1) | 0;
    return result;
  };
  protoOf(DefaultButtonColors).waw = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(717515014);
    sourceInformation($composer_0, 'C(backgroundColor$composable)587@23484L79:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(717515014, $changed, -1, 'androidx.compose.material.DefaultButtonColors.backgroundColor$composable (Button.kt:586)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.raz_1 : this.taz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  protoOf(DefaultButtonColors).vaw = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1065735709);
    sourceInformation($composer_0, 'C(contentColor$composable)592@23666L73:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1065735709, $changed, -1, 'androidx.compose.material.DefaultButtonColors.contentColor$composable (Button.kt:591)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.saz_1 : this.uaz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  function Button$composable$lambda($contentColor$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('contentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $contentColor$delegate.b2().a3c_1;
    return tmp$ret$0;
  }
  function Button$composable$lambda_0($this$semantics) {
    set_role($this$semantics, Companion_getInstance_3().b6i_1);
    return Unit_getInstance();
  }
  function Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C121@5701L467:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-630330208, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous> (Button.kt:120)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp16_Row$composable = padding(defaultMinSize(Companion_getInstance(), ButtonDefaults_getInstance().faw_1, ButtonDefaults_getInstance().gaw_1), $contentPadding._v);
        var tmp17_Row$composable = Arrangement_getInstance().v7m_1;
        var tmp18_Row$composable = Companion_getInstance_1().p4g_1;
        var tmp19_Row$composable = $composer_0;
        var tmp20_Row$composable = 432 | 7168 & $$dirty >> 18;
        var modifier = tmp16_Row$composable;
        var horizontalArrangement = tmp17_Row$composable;
        var verticalAlignment = tmp18_Row$composable;
        var $composer_1 = tmp19_Row$composable;
        $composer_1.s1c(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().r7m_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_1().o4g_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp20_Row$composable >> 3 | 112 & tmp20_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 112 & tmp20_Row$composable << 3;
        var modifier_0 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_2;
        var $composer_3 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_3);
        tmp$ret$0 = tmp0;
        var density = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua = $composer_2;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var layoutDirection = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro = $composer_2;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var viewConfiguration = tmp$ret$2;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp8_ReusableComposeNode$composable = $composer_2;
        var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
        var $composer_6 = tmp8_ReusableComposeNode$composable;
        var tmp_0 = $composer_6.t1o();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_6.e1p();
        if ($composer_6.c1p()) {
          $composer_6.f1p(tmp6_ReusableComposeNode$composable);
        } else {
          $composer_6.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_getInstance(), $composer_7, 6 | 112 & tmp20_Row$composable >> 6);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Button$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C119@5651L10,118@5595L587:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1699085201, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous> (Button.kt:117)');
        }
        var tmp_0 = MaterialTheme_getInstance().xav($composer_0, 6).tav_1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -630330208, true, Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.x1h(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.p1q(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.u1c();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Button$composable$lambda_1($contentColor$delegate, $contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C117@5509L683:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(7524271, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous> (Button.kt:116)');
        }
        var tmp_0 = [get_LocalContentAlpha().t1t(_Color___get_alpha__impl__wcfyv1(Button$composable$lambda($contentColor$delegate)))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1699085201, true, Button$composable$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.x1h(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.p1q(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.u1c();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Button$composable$lambda_2($onClick, $modifier, $enabled, $interactionSource, $elevation, $shape, $border, $colors, $contentPadding, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $elevation._v, $shape._v, $border._v, $colors._v, $contentPadding._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_LocalColors() {
    _init_properties_Colors_kt__dgoqts();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.zaw_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.aax_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.bax_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.cax_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.dax_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.eax_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.fax_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.gax_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.hax_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.iax_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.jax_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.kax_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.lax_1 = mutableStateOf(isLight, structuralEqualityPolicy());
    this.max_1 = 0;
  }
  protoOf(Colors).vaz = function (_set____db54di) {
    var tmp0_setValue = primary$factory();
    return this.zaw_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).nax = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primary$factory_0();
    tmp$ret$0 = this.zaw_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).waz = function (_set____db54di) {
    var tmp0_setValue = primaryVariant$factory();
    return this.aax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).xaz = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primaryVariant$factory_0();
    tmp$ret$0 = this.aax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).yaz = function (_set____db54di) {
    var tmp0_setValue = secondary$factory();
    return this.bax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).zaz = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondary$factory_0();
    tmp$ret$0 = this.bax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).ab0 = function (_set____db54di) {
    var tmp0_setValue = secondaryVariant$factory();
    return this.cax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).bb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondaryVariant$factory_0();
    tmp$ret$0 = this.cax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).cb0 = function (_set____db54di) {
    var tmp0_setValue = background$factory();
    return this.dax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).o42 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = background$factory_0();
    tmp$ret$0 = this.dax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).db0 = function (_set____db54di) {
    var tmp0_setValue = surface$factory();
    return this.eax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).pax = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surface$factory_0();
    tmp$ret$0 = this.eax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).eb0 = function (_set____db54di) {
    var tmp0_setValue = error$factory();
    return this.fax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).fb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = error$factory_0();
    tmp$ret$0 = this.fax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).gb0 = function (_set____db54di) {
    var tmp0_setValue = onPrimary$factory();
    return this.gax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).hb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimary$factory_0();
    tmp$ret$0 = this.gax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).ib0 = function (_set____db54di) {
    var tmp0_setValue = onSecondary$factory();
    return this.hax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).jb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondary$factory_0();
    tmp$ret$0 = this.hax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).kb0 = function (_set____db54di) {
    var tmp0_setValue = onBackground$factory();
    return this.iax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).lb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onBackground$factory_0();
    tmp$ret$0 = this.iax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).mb0 = function (_set____db54di) {
    var tmp0_setValue = onSurface$factory();
    return this.jax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).oax = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurface$factory_0();
    tmp$ret$0 = this.jax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).nb0 = function (_set____db54di) {
    var tmp0_setValue = onError$factory();
    return this.kax_1.kk(new Color(_set____db54di));
  };
  protoOf(Colors).ob0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onError$factory_0();
    tmp$ret$0 = this.kax_1.b2().a3c_1;
    return tmp$ret$0;
  };
  protoOf(Colors).pb0 = function (_set____db54di) {
    var tmp0_setValue = isLight$factory();
    return this.lax_1.kk(_set____db54di);
  };
  protoOf(Colors).qb0 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isLight$factory_0();
    tmp$ret$0 = this.lax_1.b2();
    return tmp$ret$0;
  };
  protoOf(Colors).toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.nax()) + ', ') + ('primaryVariant=' + new Color(this.xaz()) + ', ') + ('secondary=' + new Color(this.zaz()) + ', ') + ('secondaryVariant=' + new Color(this.bb0()) + ', ') + ('background=' + new Color(this.o42()) + ', ') + ('surface=' + new Color(this.pax()) + ', ') + ('error=' + new Color(this.fb0()) + ', ') + ('onPrimary=' + new Color(this.hb0()) + ', ') + ('onSecondary=' + new Color(this.jb0()) + ', ') + ('onBackground=' + new Color(this.lb0()) + ', ') + ('onSurface=' + new Color(this.oax()) + ', ') + ('onError=' + new Color(this.ob0()) + ', ') + ('isLight=' + this.qb0()) + ')';
  };
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    primary = primary === VOID ? Color_0(new Long(-10354450, 0)) : primary;
    primaryVariant = primaryVariant === VOID ? Color_0(new Long(-13172557, 0)) : primaryVariant;
    secondary = secondary === VOID ? Color_0(new Long(-16524602, 0)) : secondary;
    secondaryVariant = secondaryVariant === VOID ? Color_0(new Long(-16676986, 0)) : secondaryVariant;
    background = background === VOID ? Companion_getInstance_5().f39_1 : background;
    surface = surface === VOID ? Companion_getInstance_5().f39_1 : surface;
    error = error === VOID ? Color_0(new Long(-5242848, 0)) : error;
    onPrimary = onPrimary === VOID ? Companion_getInstance_5().f39_1 : onPrimary;
    onSecondary = onSecondary === VOID ? Companion_getInstance_5().b39_1 : onSecondary;
    onBackground = onBackground === VOID ? Companion_getInstance_5().b39_1 : onBackground;
    onSurface = onSurface === VOID ? Companion_getInstance_5().b39_1 : onSurface;
    onError = onError === VOID ? Companion_getInstance_5().f39_1 : onError;
    _init_properties_Colors_kt__dgoqts();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_Colors_kt__dgoqts();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -62582793, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*296@11462L6,296@11533L7:Colors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-62582793, $changed, -1, 'androidx.compose.material.contentColorFor$composable (Colors.kt:295)');
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().cav($composer_0, 6), backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().n39_1));
    if (tmp$ret$0) {
      tmp = tmp0_takeOrElse;
    } else {
      var tmp$ret$2;
      // Inline function 'androidx.compose.material.contentColorFor$composable.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.a3c_1;
      var tmp0_return = tmp$ret$1;
      tmp$ret$2 = tmp0_return;
      tmp = tmp$ret$2;
    }
    tmp$ret$3 = tmp;
    var tmp1_group = tmp$ret$3;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_Colors_kt__dgoqts();
    var tmp0_subject = backgroundColor;
    return equals(tmp0_subject, _this__u8e3s4.nax()) ? _this__u8e3s4.hb0() : equals(tmp0_subject, _this__u8e3s4.xaz()) ? _this__u8e3s4.hb0() : equals(tmp0_subject, _this__u8e3s4.zaz()) ? _this__u8e3s4.jb0() : equals(tmp0_subject, _this__u8e3s4.bb0()) ? _this__u8e3s4.jb0() : equals(tmp0_subject, _this__u8e3s4.o42()) ? _this__u8e3s4.lb0() : equals(tmp0_subject, _this__u8e3s4.pax()) ? _this__u8e3s4.oax() : equals(tmp0_subject, _this__u8e3s4.fb0()) ? _this__u8e3s4.ob0() : Companion_getInstance_5().n39_1;
  }
  function get_primarySurface(_this__u8e3s4) {
    _init_properties_Colors_kt__dgoqts();
    return _this__u8e3s4.qb0() ? _this__u8e3s4.nax() : _this__u8e3s4.pax();
  }
  function LocalColors$lambda() {
    _init_properties_Colors_kt__dgoqts();
    return lightColors();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.nax());
    }, function (receiver, value) {
      return receiver.vaz(value.a3c_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.nax());
    }, function (receiver, value) {
      return receiver.vaz(value.a3c_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.xaz());
    }, function (receiver, value) {
      return receiver.waz(value.a3c_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.xaz());
    }, function (receiver, value) {
      return receiver.waz(value.a3c_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.zaz());
    }, function (receiver, value) {
      return receiver.yaz(value.a3c_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.zaz());
    }, function (receiver, value) {
      return receiver.yaz(value.a3c_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.bb0());
    }, function (receiver, value) {
      return receiver.ab0(value.a3c_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.bb0());
    }, function (receiver, value) {
      return receiver.ab0(value.a3c_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.o42());
    }, function (receiver, value) {
      return receiver.cb0(value.a3c_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.o42());
    }, function (receiver, value) {
      return receiver.cb0(value.a3c_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pax());
    }, function (receiver, value) {
      return receiver.db0(value.a3c_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pax());
    }, function (receiver, value) {
      return receiver.db0(value.a3c_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.fb0());
    }, function (receiver, value) {
      return receiver.eb0(value.a3c_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.fb0());
    }, function (receiver, value) {
      return receiver.eb0(value.a3c_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.hb0());
    }, function (receiver, value) {
      return receiver.gb0(value.a3c_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.hb0());
    }, function (receiver, value) {
      return receiver.gb0(value.a3c_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.jb0());
    }, function (receiver, value) {
      return receiver.ib0(value.a3c_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.jb0());
    }, function (receiver, value) {
      return receiver.ib0(value.a3c_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lb0());
    }, function (receiver, value) {
      return receiver.kb0(value.a3c_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lb0());
    }, function (receiver, value) {
      return receiver.kb0(value.a3c_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.oax());
    }, function (receiver, value) {
      return receiver.mb0(value.a3c_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.oax());
    }, function (receiver, value) {
      return receiver.mb0(value.a3c_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ob0());
    }, function (receiver, value) {
      return receiver.nb0(value.a3c_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ob0());
    }, function (receiver, value) {
      return receiver.nb0(value.a3c_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.qb0();
    }, function (receiver, value) {
      return receiver.pb0(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.qb0();
    }, function (receiver, value) {
      return receiver.pb0(value);
    });
  }
  var properties_initialized_Colors_kt_23tfjm;
  function _init_properties_Colors_kt__dgoqts() {
    if (properties_initialized_Colors_kt_23tfjm) {
    } else {
      properties_initialized_Colors_kt_23tfjm = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda);
    }
  }
  function get_LocalContentAlpha() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function contentAlpha$composable($this, highContrastAlpha, lowContrastAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-198048456);
    sourceInformation($composer_0, 'C(contentAlpha$composable)76@2623L7,77@2670L6:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-198048456, $changed, -1, 'androidx.compose.material.ContentAlpha.contentAlpha$composable (ContentAlpha.kt:70)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.a3c_1;
    var contentColor = tmp$ret$0;
    var lightTheme = MaterialTheme_getInstance().cav($composer_0, 6).qb0();
    var tmp;
    if (lightTheme) {
      tmp = luminance(contentColor) > 0.5 ? highContrastAlpha : lowContrastAlpha;
    } else {
      tmp = luminance(contentColor) < 0.5 ? highContrastAlpha : lowContrastAlpha;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function ContentAlpha() {
    ContentAlpha_instance = this;
    this.hav_1 = 0;
  }
  protoOf(ContentAlpha).iav = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1959843334);
    sourceInformation($composer_0, 'C($get-high$$composable)34@1107L146:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1959843334, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-high$$composable (ContentAlpha.kt:34)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 1.0, 0.87, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  protoOf(ContentAlpha).yav = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-277492921);
    sourceInformation($composer_0, 'C($get-medium$$composable)45@1458L150:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-277492921, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-medium$$composable (ContentAlpha.kt:45)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.74, 0.6, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  protoOf(ContentAlpha).qax = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(856927968);
    sourceInformation($composer_0, 'C($get-disabled$$composable)56@1805L154:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(856927968, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-disabled$$composable (ContentAlpha.kt:56)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.38, 0.38, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  var ContentAlpha_instance;
  function ContentAlpha_getInstance() {
    if (ContentAlpha_instance == null)
      new ContentAlpha();
    return ContentAlpha_instance;
  }
  function HighContrastContentAlpha() {
    HighContrastContentAlpha_instance = this;
    this.rb0_1 = 1.0;
    this.sb0_1 = 0.74;
    this.tb0_1 = 0.38;
  }
  var HighContrastContentAlpha_instance;
  function HighContrastContentAlpha_getInstance() {
    if (HighContrastContentAlpha_instance == null)
      new HighContrastContentAlpha();
    return HighContrastContentAlpha_instance;
  }
  function LowContrastContentAlpha() {
    LowContrastContentAlpha_instance = this;
    this.ub0_1 = 0.87;
    this.vb0_1 = 0.6;
    this.wb0_1 = 0.38;
  }
  var LowContrastContentAlpha_instance;
  function LowContrastContentAlpha_getInstance() {
    if (LowContrastContentAlpha_instance == null)
      new LowContrastContentAlpha();
    return LowContrastContentAlpha_instance;
  }
  function LocalContentAlpha$lambda() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return 1.0;
  }
  var properties_initialized_ContentAlpha_kt_tnmwxz;
  function _init_properties_ContentAlpha_kt__y2n6o5() {
    if (properties_initialized_ContentAlpha_kt_tnmwxz) {
    } else {
      properties_initialized_ContentAlpha_kt_tnmwxz = true;
      LocalContentAlpha = compositionLocalOf(VOID, LocalContentAlpha$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_5().b39_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (properties_initialized_ContentColor_kt_sc8rw) {
    } else {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function Divider$composable(modifier, color, thickness, startIndent, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var thickness_0 = {_v: new Dp(thickness)};
    var startIndent_0 = {_v: new Dp(startIndent)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-147125126);
    sourceInformation($composer_0, 'C(Divider$composable)P(1,0:c#ui.graphics.Color,3:c#ui.unit.Dp,2:c#ui.unit.Dp)45@1819L6,59@2200L147:Divider.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.a3c_1))) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(thickness_0._v.f2m_1)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(startIndent_0._v.f2m_1)) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          color_0._v = new Color(Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().cav($composer_0, 6).oax(), 0.12));
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
          thickness_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 8) === 0)) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
          startIndent_0._v = new Dp(tmp$ret$1);
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-147125126, $changed, -1, 'androidx.compose.material.Divider$composable (Divider.kt:43)');
      }
      var tmp;
      if (!(_Dp___get_value__impl__geb1vb(startIndent_0._v.f2m_1) === 0.0)) {
        tmp = padding_1(Companion_getInstance(), startIndent_0._v.f2m_1);
      } else {
        tmp = Companion_getInstance();
      }
      var indentMod = tmp;
      $composer_0.s1c(1699001858);
      sourceInformation($composer_0, '*55@2139L7');
      var tmp_0;
      if (thickness_0._v.equals(new Dp(Companion_getInstance_7().c2m_1))) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$2 = tmp0;
        var tmp2__get_dp__vme20t = 1.0 / tmp$ret$2.n2l();
        tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp2__get_dp__vme20t);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = thickness_0._v.f2m_1;
      }
      var tmp0_group = tmp_0;
      $composer_0.u1c();
      var targetThickness = tmp0_group;
      Box$composable(background(height(fillMaxWidth(modifier_0._v.e4h(indentMod)), targetThickness), color_0._v.a3c_1), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(Divider$composable$lambda(modifier_0, color_0, thickness_0, startIndent_0, $changed, $default));
    }
  }
  function Divider$composable$lambda($modifier, $color, $thickness, $startIndent, $$changed, $$default) {
    return function ($composer, $force) {
      Divider$composable($modifier._v, $color._v.a3c_1, $thickness._v.f2m_1, $startIndent._v.f2m_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function ElevationDefaults() {
    ElevationDefaults_instance = this;
  }
  protoOf(ElevationDefaults).kb1 = function (interaction) {
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (tmp0_subject instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).lb1 = function (interaction) {
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (tmp0_subject instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (tmp0_subject instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (tmp0_subject instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    if (ElevationDefaults_instance == null)
      new ElevationDefaults();
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fb1_1 = _this__u8e3s4;
    this.gb1_1 = target;
    this.hb1_1 = from;
    this.ib1_1 = to;
  }
  protoOf($animateElevationCOROUTINE$0).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 4;
            this.jb1_1 = !(this.ib1_1 == null) ? ElevationDefaults_getInstance().kb1(this.ib1_1) : !(this.hb1_1 == null) ? ElevationDefaults_getInstance().lb1(this.hb1_1) : null;
            if (!(this.jb1_1 == null)) {
              this.jf_1 = 2;
              suspendResult = this.fb1_1.a79(new Dp(this.gb1_1), this.jb1_1, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 1;
              suspendResult = this.fb1_1.b79(new Dp(this.gb1_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.jf_1 = 3;
            continue $sm;
          case 2:
            ;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 4) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (properties_initialized_Elevation_kt_70s6ab) {
    } else {
      properties_initialized_Elevation_kt_70s6ab = true;
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
      HoveredOutgoingSpec = new TweenSpec(120, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
    }
  }
  function get_LocalElevationOverlay() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalElevationOverlay;
  }
  var LocalElevationOverlay;
  function get_LocalAbsoluteElevation() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalAbsoluteElevation;
  }
  var LocalAbsoluteElevation;
  function DefaultElevationOverlay() {
    DefaultElevationOverlay_instance = this;
  }
  protoOf(DefaultElevationOverlay).mb1 = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1758936578, 'C(apply$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)69@2742L6,71@2841L42:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1758936578, $changed, -1, 'androidx.compose.material.DefaultElevationOverlay.apply$composable (ElevationOverlay.kt:68)');
    }
    var colors = MaterialTheme_getInstance().cav($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors.qb0();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var foregroundColor = calculateForegroundColor$composable(color, elevation, $composer_0, 14 & $changed | 112 & $changed);
      tmp = compositeOver(foregroundColor, color);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var DefaultElevationOverlay_instance;
  function DefaultElevationOverlay_getInstance() {
    if (DefaultElevationOverlay_instance == null)
      new DefaultElevationOverlay();
    return DefaultElevationOverlay_instance;
  }
  function calculateForegroundColor$composable(backgroundColor, elevation, $composer, $changed) {
    _init_properties_ElevationOverlay_kt__499xhv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1391092752, 'C(calculateForegroundColor$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)88@3446L32:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1391092752, $changed, -1, 'androidx.compose.material.calculateForegroundColor$composable (ElevationOverlay.kt:86)');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    tmp$ret$0 = Math.log(tmp0_ln);
    var alpha = (4.5 * tmp$ret$0 + 2.0) / 100.0;
    var baseForegroundColor = contentColorFor$composable(backgroundColor, $composer_0, 14 & $changed);
    var tmp0 = Color__copy$default_impl_ectz3s(baseForegroundColor, alpha);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalElevationOverlay$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return DefaultElevationOverlay_getInstance();
  }
  function LocalAbsoluteElevation$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_ElevationOverlay_kt_xrg85x;
  function _init_properties_ElevationOverlay_kt__499xhv() {
    if (properties_initialized_ElevationOverlay_kt_xrg85x) {
    } else {
      properties_initialized_ElevationOverlay_kt_xrg85x = true;
      LocalElevationOverlay = staticCompositionLocalOf(LocalElevationOverlay$lambda);
      LocalAbsoluteElevation = compositionLocalOf(VOID, LocalAbsoluteElevation$lambda);
    }
  }
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon$composable(imageVector, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = modifier;
    var tint_0 = tint;
    var $composer_0 = $composer;
    $composer_0.s1c(-1798234707);
    sourceInformation($composer_0, 'C(Icon$composable)P(1!,3:c#ui.graphics.Color)65@3149L7,65@3188L7,68@3229L34,67@3205L163:Icon.kt#jmzs0o');
    if (!(($default & 4) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 8) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0.a3c_1;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      tint_0 = Color__copy$default_impl_ectz3s(tmp, tmp$ret$1);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1798234707, $changed, -1, 'androidx.compose.material.Icon$composable (Icon.kt:61)');
    }
    Icon$composable_0(rememberVectorPainter$composable(imageVector, $composer_0, 14 & $changed), contentDescription, modifier_0, tint_0, $composer_0, 112 & $changed | 896 & $changed | 7168 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function Icon$composable_0(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1405370588);
    sourceInformation($composer_0, 'C(Icon$composable)P(2!,3:c#ui.graphics.Color)133@6456L7,133@6495L7,145@6878L253:Icon.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(painter) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.a3c_1))) : false) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var tmp1_$get_current$$composable_gn3xww = $composer_0;
          var $composer_1 = tmp1_$get_current$$composable_gn3xww;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_1);
          tmp$ret$0 = tmp0.a3c_1;
          var tmp = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
          var tmp3_$get_current$$composable_fm67ua = $composer_0;
          var $composer_2 = tmp3_$get_current$$composable_fm67ua;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.w1p(tmp2_$get_current$$composable_g4n2vl);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$1 = tmp0_0;
          tint_0._v = new Color(Color__copy$default_impl_ectz3s(tmp, tmp$ret$1));
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-1405370588, $dirty, -1, 'androidx.compose.material.Icon$composable (Icon.kt:129)');
      }
      var colorFilter = tint_0._v.equals(new Color(Companion_getInstance_5().n39_1)) ? null : Companion_getInstance_8().h3d(tint_0._v.a3c_1);
      $composer_0.s1c(1651962591);
      sourceInformation($composer_0, '138@6734L103');
      var tmp_0;
      if (!(contentDescription == null)) {
        var tmp_1 = Companion_getInstance();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp7_remember$composable = $composer_0;
        var tmp8_remember$composable = 14 & $dirty >> 3;
        var $composer_3 = tmp7_remember$composable;
        $composer_3.s1c(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp5_cache = $composer_3;
        var tmp6_cache = $composer_3.x1h(contentDescription);
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        var tmp4_let = tmp5_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp6_cache ? true : tmp4_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$2;
          // Inline function 'androidx.compose.material.Icon$composable.<anonymous>' call
          tmp$ret$2 = Icon$composable$lambda(contentDescription);
          var value = tmp$ret$2;
          tmp5_cache.p1q(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp4_let;
        }
        tmp$ret$3 = tmp_2;
        tmp$ret$4 = tmp$ret$3;
        var tmp_3 = tmp$ret$4;
        tmp$ret$5 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_1 = tmp$ret$5;
        $composer_3.u1c();
        tmp$ret$6 = tmp0_1;
        tmp_0 = semantics(tmp_1, VOID, tmp$ret$6);
      } else {
        tmp_0 = Companion_getInstance();
      }
      var tmp0_group = tmp_0;
      $composer_0.u1c();
      var semantics_0 = tmp0_group;
      var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
      var tmp1_contentScale = Companion_getInstance_9().b4k_1;
      Box$composable(paint(tmp0_$receiver, painter, VOID, VOID, tmp1_contentScale, VOID, colorFilter).e4h(semantics_0), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(Icon$composable$lambda_0(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    if (equals(painter.c3n(), Companion_getInstance_10().q2k_1) ? true : isInfinite_0(painter.c3n())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_getInstance();
    }
    return _this__u8e3s4.e4h(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    _init_properties_Icon_kt__pgqcnt();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) ? isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4)) : false;
  }
  function Icon$composable$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_3().g6i_1);
      return Unit_getInstance();
    };
  }
  function Icon$composable$lambda_0($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon$composable_0($painter, $contentDescription, $modifier._v, $tint._v.a3c_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (properties_initialized_Icon_kt_u3g1lx) {
    } else {
      properties_initialized_Icon_kt_u3g1lx = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function get_RippleRadius() {
    _init_properties_IconButton_kt__dm2lqt();
    return RippleRadius;
  }
  var RippleRadius;
  function IconButton$composable(onClick, modifier, enabled, interactionSource, content, $composer, $changed, $default) {
    _init_properties_IconButton_kt__dm2lqt();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1115064840);
    sourceInformation($composer_0, 'C(IconButton$composable)P(4,3,1,2)62@2761L39,73@3140L54,65@2846L607:IconButton.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1p(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.x1h(interactionSource_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.s1c(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
            tmp$ret$0 = funMutableInteractionSource();
            var value = tmp$ret$0;
            tmp1_cache.p1q(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$1 = tmp;
          tmp$ret$2 = tmp$ret$1;
          var tmp_0 = tmp$ret$2;
          tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.u1c();
          tmp$ret$4 = tmp0;
          interactionSource_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-1115064840, $dirty, -1, 'androidx.compose.material.IconButton$composable (IconButton.kt:58)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_$receiver = minimumInteractiveComponentSize_0(modifier_0._v);
      var tmp1_role = Companion_getInstance_3().b6i_1;
      var tmp_1 = get_RippleRadius();
      var tmp2_indication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 54, 4);
      var tmp19_Box$composable = clickable(tmp0_$receiver, interactionSource_0._v, tmp2_indication, enabled_0._v, VOID, tmp1_role, onClick);
      var tmp20_Box$composable = Companion_getInstance_1().j4g_1;
      var tmp21_Box$composable = false;
      var tmp22_Box$composable = $composer_0;
      var modifier_1 = tmp19_Box$composable;
      var contentAlignment = tmp20_Box$composable;
      var propagateMinConstraints = tmp21_Box$composable;
      var $composer_2 = tmp22_Box$composable;
      $composer_2.s1c(1330882304);
      sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_1().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp14_Layout$composable = modifier_1;
      var tmp15_Layout$composable = $composer_2;
      var tmp16_Layout$composable = 0;
      var modifier_2 = tmp14_Layout$composable;
      var $composer_3 = tmp15_Layout$composable;
      $composer_3.s1c(1725976829);
      sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp3_$get_current$$composable_fm67ua = get_LocalDensity();
      var tmp4_$get_current$$composable_f3pcsz = $composer_3;
      var $composer_4 = tmp4_$get_current$$composable_f3pcsz;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp3_$get_current$$composable_fm67ua);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$5 = tmp0_0;
      var density = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalLayoutDirection();
      var tmp6_$get_current$$composable_e2rmqd = $composer_3;
      var $composer_5 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$6 = tmp0_1;
      var layoutDirection = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp7_$get_current$$composable_dkarp2 = get_LocalViewConfiguration();
      var tmp8_$get_current$$composable_d1twnr = $composer_3;
      var $composer_6 = tmp8_$get_current$$composable_d1twnr;
      sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1p(tmp7_$get_current$$composable_dkarp2);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$7 = tmp0_2;
      var viewConfiguration = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp9_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
      var tmp10_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp11_ReusableComposeNode$composable = $composer_3;
      var tmp12_ReusableComposeNode$composable = 6 | 7168 & tmp16_Layout$composable << 9;
      var $composer_7 = tmp11_ReusableComposeNode$composable;
      var tmp_2 = $composer_7.t1o();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_7.e1p();
      if ($composer_7.c1p()) {
        $composer_7.f1p(tmp9_ReusableComposeNode$composable);
      } else {
        $composer_7.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp13__anonymous__jvh1if = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp13__anonymous__jvh1if, measurePolicy, Companion_getInstance_2().i5n_1);
      Updater__set_impl_v7kwss(tmp13__anonymous__jvh1if, density, Companion_getInstance_2().h5n_1);
      Updater__set_impl_v7kwss(tmp13__anonymous__jvh1if, layoutDirection, Companion_getInstance_2().j5n_1);
      Updater__set_impl_v7kwss(tmp13__anonymous__jvh1if, viewConfiguration, Companion_getInstance_2().k5n_1);
      tmp10_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp12_ReusableComposeNode$composable >> 3);
      $composer_7.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp17__anonymous__gqgob = $composer_7;
      var tmp18__anonymous__4dy6j8 = 14 & tmp12_ReusableComposeNode$composable >> 9;
      var $composer_8 = tmp17__anonymous__gqgob;
      sourceInformationMarkerStart($composer_8, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
      var tmp23__anonymous__bih5za = BoxScopeInstance_getInstance();
      var tmp24__anonymous__6nsirr = $composer_8;
      var tmp25__anonymous__1t3vk8 = 6;
      var $composer_9 = tmp24__anonymous__6nsirr;
      sourceInformationMarkerStart($composer_9, -1248994105, 'C78@3363L84:IconButton.kt#jmzs0o');
      var tmp_3;
      if (enabled_0._v) {
        $composer_9.s1c(-1248994055);
        sourceInformation($composer_9, '77@3320L7');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentAlpha();
        var tmp1_$get_current$$composable_gn3xww = $composer_9;
        var $composer_10 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_10, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_10.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_10);
        tmp$ret$8 = tmp0_3;
        var tmp0_group = tmp$ret$8;
        $composer_9.u1c();
        tmp_3 = tmp0_group;
      } else {
        $composer_9.s1c(-1248994029);
        sourceInformation($composer_9, '77@3346L8');
        var tmp1_group = ContentAlpha_getInstance().qax($composer_9, 6);
        $composer_9.u1c();
        tmp_3 = tmp1_group;
      }
      var contentAlpha = tmp_3;
      CompositionLocalProvider$composable([get_LocalContentAlpha().t1t(contentAlpha)], content, $composer_9, 112 & $dirty >> 9);
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      $composer_7.u1c();
      $composer_7.i1p();
      $composer_3.u1c();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(IconButton$composable$lambda(onClick, modifier_0, enabled_0, interactionSource_0, content, $changed, $default));
    }
  }
  function IconButton$composable$lambda($onClick, $modifier, $enabled, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_IconButton_kt_ws0bv7;
  function _init_properties_IconButton_kt__dm2lqt() {
    if (properties_initialized_IconButton_kt_ws0bv7) {
    } else {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      RippleRadius = tmp$ret$0;
    }
  }
  function get_LocalMinimumInteractiveComponentEnforcement() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentEnforcement;
  }
  var LocalMinimumInteractiveComponentEnforcement;
  var LocalMinimumTouchTargetEnforcement;
  function get_minimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return minimumInteractiveComponentSize;
  }
  var minimumInteractiveComponentSize;
  function minimumInteractiveComponentSize_0(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = minimumInteractiveComponentSize$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, minimumInteractiveComponentSize$lambda_0);
  }
  function MinimumInteractiveComponentSizeModifier$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = ($width - $placeable.m4l_1 | 0) / 2.0;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var centerX = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = ($height - $placeable.n4l_1 | 0) / 2.0;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var centerY = tmp$ret$1;
      $this$layout.z5q($placeable, centerX, centerY);
      return Unit_getInstance();
    };
  }
  function MinimumInteractiveComponentSizeModifier(size) {
    this.nb1_1 = size;
  }
  protoOf(MinimumInteractiveComponentSizeModifier).k4l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l4l(constraints);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = placeable.m4l_1;
    var tmp1_maxOf = _this__u8e3s4.q2l(_DpSize___get_width__impl__o3d5gt(this.nb1_1));
    tmp$ret$0 = Math.max(tmp0_maxOf, tmp1_maxOf);
    var width = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = placeable.n4l_1;
    var tmp3_maxOf = _this__u8e3s4.q2l(_DpSize___get_height__impl__5xueo2(this.nb1_1));
    tmp$ret$1 = Math.max(tmp2_maxOf, tmp3_maxOf);
    var height = tmp$ret$1;
    return _this__u8e3s4.r4l(width, height, VOID, MinimumInteractiveComponentSizeModifier$measure$lambda(width, placeable, height));
  };
  protoOf(MinimumInteractiveComponentSizeModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof MinimumInteractiveComponentSizeModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.nb1_1, otherModifier.nb1_1);
  };
  protoOf(MinimumInteractiveComponentSizeModifier).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.nb1_1);
  };
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function minimumInteractiveComponentSize$lambda($this$null) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.material.minimumInteractiveComponentSize.<anonymous>' call
    $this$null.t4j_1 = 'minimumInteractiveComponentSize';
    $this$null.v4j_1.z4j('README', 'Reserves at least 48.dp in size to disambiguate touch interactions if the element would measure smaller');
    return Unit_getInstance();
  }
  function minimumInteractiveComponentSize$lambda_0($this$composed, $composer, $changed) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    var $composer_0 = $composer;
    $composer_0.s1c(1964721376);
    sourceInformation($composer_0, 'C56@2556L7:InteractiveComponentSize.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1964721376, $changed, -1, 'androidx.compose.material.minimumInteractiveComponentSize.<anonymous> (InteractiveComponentSize.kt:55)');
    }
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalMinimumInteractiveComponentEnforcement();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    if (tmp$ret$0) {
      tmp = new MinimumInteractiveComponentSizeModifier(get_minimumInteractiveComponentSize());
    } else {
      tmp = Companion_getInstance();
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (properties_initialized_InteractiveComponentSize_kt_3r58bm) {
    } else {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumTouchTargetEnforcement = get_LocalMinimumInteractiveComponentEnforcement();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      minimumInteractiveComponentSize = DpSize(tmp, tmp$ret$1);
    }
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.bav_1 = 0;
  }
  protoOf(MaterialTheme).cav = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 273761861, 'C($get-colors$$composable)102@4462L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(273761861, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-colors$$composable (MaterialTheme.kt:102)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColors();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  protoOf(MaterialTheme).xav = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1858445221, 'C($get-typography$$composable)112@4763L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1858445221, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:112)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalTypography();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  protoOf(MaterialTheme).taw = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 493638021, 'C($get-shapes$$composable)120@4971L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(493638021, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:120)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalShapes();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes(small, medium, large) {
    var tmp;
    if (small === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = RoundedCornerShape(tmp$ret$0);
    } else {
      tmp = small;
    }
    small = tmp;
    var tmp_0;
    if (medium === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = RoundedCornerShape(tmp$ret$0_1);
    } else {
      tmp_0 = medium;
    }
    medium = tmp_0;
    var tmp_1;
    if (large === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = RoundedCornerShape(tmp$ret$0_2);
    } else {
      tmp_1 = large;
    }
    large = tmp_1;
    this.paw_1 = small;
    this.qaw_1 = medium;
    this.raw_1 = large;
    this.saw_1 = 0;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.paw_1, other.paw_1))
      return false;
    if (!equals(this.qaw_1, other.qaw_1))
      return false;
    if (!equals(this.raw_1, other.raw_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.paw_1);
    result = imul(31, result) + hashCode(this.qaw_1) | 0;
    result = imul(31, result) + hashCode(this.raw_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(small=' + this.paw_1 + ', medium=' + this.qaw_1 + ', large=' + this.raw_1 + ')';
  };
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (properties_initialized_Shapes_kt_91wqbw) {
    } else {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function Surface$composable(modifier, shape, color, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(353896921);
    sourceInformation($composer_0, 'C(Surface$composable)P(5,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)107@5308L6,108@5350L22,*113@5525L7,114@5549L849:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(shape_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.a3c_1))) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.a3c_1))) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(border_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(elevation_0._v.f2m_1)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().cav($composer_0, 6).pax());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.a3c_1, $composer_0, 14 & $dirty >> 6));
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(353896921, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:104)');
      }
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalAbsoluteElevation();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.f2m_1;
      var tmp2_plus = tmp$ret$1;
      var tmp3_plus = elevation_0._v.f2m_1;
      tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
      var absoluteElevation = tmp$ret$2;
      var tmp = [get_LocalContentColor().t1t(contentColor_0._v), get_LocalAbsoluteElevation().t1t(new Dp(absoluteElevation))];
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1822160838, true, Surface$composable$lambda(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, content));
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_2 = tmp3_remember$composable;
      $composer_2.s1c(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp2_cache = $composer_2.x1h(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.p1q(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$4 = tmp_1;
      tmp$ret$5 = tmp$ret$4;
      var tmp_2 = tmp$ret$5;
      tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$6;
      $composer_2.u1c();
      tmp$ret$7 = tmp0_0;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      CompositionLocalProvider$composable(tmp, tmp$ret$9, $composer_0, 48);
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
      tmp0_safe_receiver.y1t(Surface$composable$lambda_0(modifier_0, shape_0, color_0, contentColor_0, border_0, elevation_0, content, $changed, $default));
    }
  }
  function Surface$composable_0(onClick, modifier, enabled, shape, color, contentColor, border, elevation, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1747901218);
    sourceInformation($composer_0, 'C(Surface$composable)P(8,7,5,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp,6)215@10749L6,216@10791L22,219@10925L39,*222@11057L7,223@11081L982:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.n1p(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1h(shape_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.a3c_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.a3c_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.x1h(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.o1p(_Dp___get_value__impl__geb1vb(elevation_0._v.f2m_1)) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.x1h(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 16) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().cav($composer_0, 6).pax());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.a3c_1, $composer_0, 14 & $dirty >> 12));
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 256) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.s1c(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$1;
            // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
            tmp$ret$1 = funMutableInteractionSource();
            var value = tmp$ret$1;
            tmp1_cache.p1q(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          tmp$ret$2 = tmp;
          tmp$ret$3 = tmp$ret$2;
          var tmp_0 = tmp$ret$3;
          tmp$ret$4 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          var tmp0 = tmp$ret$4;
          $composer_1.u1c();
          tmp$ret$5 = tmp0;
          interactionSource_0._v = tmp$ret$5;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(-1747901218, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:210)');
      }
      var tmp$ret$7;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp3_$get_current$$composable_fm67ua = get_LocalAbsoluteElevation();
      var tmp4_$get_current$$composable_f3pcsz = $composer_0;
      var $composer_2 = tmp4_$get_current$$composable_f3pcsz;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.w1p(tmp3_$get_current$$composable_fm67ua);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$6 = tmp0_0.f2m_1;
      var tmp5_plus = tmp$ret$6;
      var tmp6_plus = elevation_0._v.f2m_1;
      tmp$ret$7 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5_plus) + _Dp___get_value__impl__geb1vb(tmp6_plus));
      var absoluteElevation = tmp$ret$7;
      var tmp_1 = [get_LocalContentColor().t1t(contentColor_0._v), get_LocalAbsoluteElevation().t1t(new Dp(absoluteElevation))];
      var tmp$ret$14;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2031491085, true, Surface$composable$lambda_1(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, interactionSource_0, enabled_0, onClick, content));
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.x1h(dispatchReceiver);
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_0().k1j_1) {
        var tmp$ret$8;
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$8 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        var value_0 = tmp$ret$8;
        tmp1_cache_0.p1q(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$9 = tmp_3;
      tmp$ret$10 = tmp$ret$9;
      var tmp_4 = tmp$ret$10;
      tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$11;
      $composer_3.u1c();
      tmp$ret$12 = tmp0_1;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      CompositionLocalProvider$composable(tmp_1, tmp$ret$14, $composer_0, 48);
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
      tmp0_safe_receiver.y1t(Surface$composable$lambda_2(onClick, modifier_0, enabled_0, shape_0, color_0, contentColor_0, border_0, elevation_0, interactionSource_0, content, $changed, $default));
    }
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, elevation) {
    return clip(background(shadow(_this__u8e3s4, elevation, shape, false).e4h(!(border_0 == null) ? border(Companion_getInstance(), border_0, shape) : Companion_getInstance()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevationOverlay, absoluteElevation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-112085913);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(1:c#ui.graphics.Color,2,0:c#ui.unit.Dp)634@31048L6,635@31119L31:Surface.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-112085913, $changed, -1, 'androidx.compose.material.surfaceColorAtElevation$composable (Surface.kt:629)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().cav($composer_0, 6).pax()) ? !(elevationOverlay == null) : false) {
      tmp = elevationOverlay.mb1(color, absoluteElevation, $composer_0, 14 & $changed | 112 & $changed >> 3 | 896 & $changed << 3);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    set_isContainer($this$semantics, true);
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$slambda).x5g = function ($this$pointerInput, $completion) {
    var tmp = this.y5g($this$pointerInput, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Surface$composable$lambda$slambda).eg = function (p1, $completion) {
    return this.x5g((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$slambda).y5g = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.wb1_1 = $this$pointerInput;
    return i;
  };
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x5g($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C124@5963L7,122@5834L221,130@6207L58,133@6302L2,118@5698L694:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1822160838, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:117)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.a3c_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 6), $border._v, $elevation._v.f2m_1);
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_2 = tmp4_remember$composable;
        $composer_2.s1c(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp3_cache = $composer_2;
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp2_let = tmp3_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp2_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = Surface$composable$lambda$lambda;
          var value = tmp$ret$1;
          tmp3_cache.p1q(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp2_let;
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;
        var tmp_5 = tmp$ret$3;
        tmp$ret$4 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$4;
        $composer_2.u1c();
        tmp$ret$5 = tmp0_0;
        var tmp_6 = semantics(tmp_3, false, tmp$ret$5);
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp7_remember$composable = $composer_0;
        var $composer_3 = tmp7_remember$composable;
        $composer_3.s1c(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp6_cache = $composer_3;
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp5_let = tmp6_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (false ? true : tmp5_let === Companion_getInstance_0().k1j_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$6;
          tmp6_cache.p1q(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp5_let;
        }
        tmp$ret$7 = tmp_7;
        tmp$ret$8 = tmp$ret$7;
        var tmp_8 = tmp$ret$8;
        tmp$ret$9 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_1 = tmp$ret$9;
        $composer_3.u1c();
        tmp$ret$10 = tmp0_1;
        var tmp24_Box$composable = pointerInput(tmp_6, Unit_getInstance(), tmp$ret$10);
        var tmp25_Box$composable = null;
        var tmp26_Box$composable = $composer_0;
        var modifier = tmp24_Box$composable;
        var contentAlignment = tmp25_Box$composable;
        var propagateMinConstraints = true;
        var $composer_4 = tmp26_Box$composable;
        $composer_4.s1c(1330882304);
        sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_1().f4g_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp19_Layout$composable = modifier;
        var tmp20_Layout$composable = $composer_4;
        var tmp21_Layout$composable = 0;
        var modifier_0 = tmp19_Layout$composable;
        var $composer_5 = tmp20_Layout$composable;
        $composer_5.s1c(1725976829);
        sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp8_$get_current$$composable_d1twnr = get_LocalDensity();
        var tmp9_$get_current$$composable_cjd1mg = $composer_5;
        var $composer_6 = tmp9_$get_current$$composable_cjd1mg;
        sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.w1p(tmp8_$get_current$$composable_d1twnr);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$11 = tmp0_2;
        var density = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp10_$get_current$$composable_orpap8 = get_LocalLayoutDirection();
        var tmp11_$get_current$$composable_o98fnx = $composer_5;
        var $composer_7 = tmp11_$get_current$$composable_o98fnx;
        sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_7.w1p(tmp10_$get_current$$composable_orpap8);
        sourceInformationMarkerEnd($composer_7);
        tmp$ret$12 = tmp0_3;
        var layoutDirection = tmp$ret$12;
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp12_$get_current$$composable_nqrkmm = get_LocalViewConfiguration();
        var tmp13_$get_current$$composable_n8aplb = $composer_5;
        var $composer_8 = tmp13_$get_current$$composable_n8aplb;
        sourceInformationMarkerStart($composer_8, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_8.w1p(tmp12_$get_current$$composable_nqrkmm);
        sourceInformationMarkerEnd($composer_8);
        tmp$ret$13 = tmp0_4;
        var viewConfiguration = tmp$ret$13;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp14_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp15_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp16_ReusableComposeNode$composable = $composer_5;
        var tmp17_ReusableComposeNode$composable = 6 | 7168 & tmp21_Layout$composable << 9;
        var $composer_9 = tmp16_ReusableComposeNode$composable;
        var tmp_9 = $composer_9.t1o();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_9.e1p();
        if ($composer_9.c1p()) {
          $composer_9.f1p(tmp14_ReusableComposeNode$composable);
        } else {
          $composer_9.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp18__anonymous__4dy6j8 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss(tmp18__anonymous__4dy6j8, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp18__anonymous__4dy6j8, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp18__anonymous__4dy6j8, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp18__anonymous__4dy6j8, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp15_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp17_ReusableComposeNode$composable >> 3);
        $composer_9.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp22__anonymous__gd5t6t = $composer_9;
        var tmp23__anonymous__bih5za = 14 & tmp17_ReusableComposeNode$composable >> 9;
        var $composer_10 = tmp22__anonymous__gd5t6t;
        sourceInformationMarkerStart($composer_10, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp27__anonymous__7w9euu = BoxScopeInstance_getInstance();
        var tmp28__anonymous__cqy22d = $composer_10;
        var tmp29__anonymous__hlmp9w = 6;
        var $composer_11 = tmp28__anonymous__cqy22d;
        sourceInformationMarkerStart($composer_11, 517749533, 'C136@6373L9:Surface.kt#jmzs0o');
        $content($composer_11, 14 & $$dirty >> 18);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.u1c();
        $composer_9.i1p();
        $composer_5.u1c();
        $composer_4.u1c();
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Surface$composable$lambda_0($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $shape._v, $color._v.a3c_1, $contentColor._v.a3c_1, $border._v, $elevation._v.f2m_1, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda_1($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C234@11546L7,232@11417L221,242@11857L16,227@11230L827:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(2031491085, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:226)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = minimumInteractiveComponentSize_0($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.a3c_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 12), $border._v, $elevation._v.f2m_1);
        var tmp_4 = $interactionSource._v;
        var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
        var tmp18_Box$composable = clickable(tmp_3, tmp_4, rememberRipple$composable(false, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, VOID, $onClick);
        var tmp19_Box$composable = null;
        var tmp20_Box$composable = $composer_0;
        var modifier = tmp18_Box$composable;
        var contentAlignment = tmp19_Box$composable;
        var propagateMinConstraints = true;
        var $composer_2 = tmp20_Box$composable;
        $composer_2.s1c(1330882304);
        sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_1().f4g_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp13_Layout$composable = modifier;
        var tmp14_Layout$composable = $composer_2;
        var tmp15_Layout$composable = 0;
        var modifier_0 = tmp13_Layout$composable;
        var $composer_3 = tmp14_Layout$composable;
        $composer_3.s1c(1725976829);
        sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalDensity();
        var tmp3_$get_current$$composable_fm67ua = $composer_3;
        var $composer_4 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$1 = tmp0_0;
        var density = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz = get_LocalLayoutDirection();
        var tmp5_$get_current$$composable_el8hro = $composer_3;
        var $composer_5 = tmp5_$get_current$$composable_el8hro;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$2 = tmp0_1;
        var layoutDirection = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp6_$get_current$$composable_e2rmqd = get_LocalViewConfiguration();
        var tmp7_$get_current$$composable_dkarp2 = $composer_3;
        var $composer_6 = tmp7_$get_current$$composable_dkarp2;
        sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.w1p(tmp6_$get_current$$composable_e2rmqd);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$3 = tmp0_2;
        var viewConfiguration = tmp$ret$3;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp8_ReusableComposeNode$composable = Companion_getInstance_2().e5n_1;
        var tmp9_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp10_ReusableComposeNode$composable = $composer_3;
        var tmp11_ReusableComposeNode$composable = 6 | 7168 & tmp15_Layout$composable << 9;
        var $composer_7 = tmp10_ReusableComposeNode$composable;
        var tmp_6 = $composer_7.t1o();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_7.e1p();
        if ($composer_7.c1p()) {
          $composer_7.f1p(tmp8_ReusableComposeNode$composable);
        } else {
          $composer_7.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp12__anonymous__oq5opy = _Updater___init__impl__rbfxm8($composer_7);
        Updater__set_impl_v7kwss(tmp12__anonymous__oq5opy, measurePolicy, Companion_getInstance_2().i5n_1);
        Updater__set_impl_v7kwss(tmp12__anonymous__oq5opy, density, Companion_getInstance_2().h5n_1);
        Updater__set_impl_v7kwss(tmp12__anonymous__oq5opy, layoutDirection, Companion_getInstance_2().j5n_1);
        Updater__set_impl_v7kwss(tmp12__anonymous__oq5opy, viewConfiguration, Companion_getInstance_2().k5n_1);
        tmp9_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp11_ReusableComposeNode$composable >> 3);
        $composer_7.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp16__anonymous__5bf3vu = $composer_7;
        var tmp17__anonymous__gqgob = 14 & tmp11_ReusableComposeNode$composable >> 9;
        var $composer_8 = tmp16__anonymous__5bf3vu;
        sourceInformationMarkerStart($composer_8, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp21__anonymous__l7ugec = BoxScopeInstance_getInstance();
        var tmp22__anonymous__gd5t6t = $composer_8;
        var tmp23__anonymous__bih5za = 6;
        var $composer_9 = tmp22__anonymous__gd5t6t;
        sourceInformationMarkerStart($composer_9, 517755198, 'C248@12038L9:Surface.kt#jmzs0o');
        $content($composer_9, 14 & $$dirty >> 27);
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        $composer_7.u1c();
        $composer_7.i1p();
        $composer_3.u1c();
        $composer_2.u1c();
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function Surface$composable$lambda_2($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable_0($onClick, $modifier._v, $enabled._v, $shape._v, $color._v.a3c_1, $contentColor._v.a3c_1, $border._v, $elevation._v.f2m_1, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(66730249);
    sourceInformation($composer_0, 'C(Text$composable)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)108@5663L2,109@5705L7,132@6463L247:Text.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.p1p(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.a3c_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.p1p(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.z2m_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x1h(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.x1h(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.x1h(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.p1p(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.z2m_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.x1h(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.x1h(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.p1p(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.z2m_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.q1p(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.p4b_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.n1p(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.q1p(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.q1p(minLines_0._v) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.m1p(onTextLayout_0._v) : false) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.x1h(style_0._v) : false) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.k1o()) {
      $composer_0.w1o();
      if (($changed & 1) === 0 ? true : $composer_0.a1p()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_5().n39_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_11().x2m_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_11().x2m_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_11().x2m_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_12().p41_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.s1c(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.o1q();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().k1j_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
            tmp$ret$0 = Text$composable$lambda;
            var value = tmp$ret$0;
            tmp1_cache.p1q(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.u1c();
          tmp$ret$4 = tmp0;
          onTextLayout_0._v = tmp$ret$4;
          $dirty1 = $dirty1 & -458753;
        }
        if (!(($default & 65536) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp3_$get_current$$composable_fm67ua = get_LocalTextStyle();
          var tmp4_$get_current$$composable_f3pcsz = $composer_0;
          var $composer_2 = tmp4_$get_current$$composable_f3pcsz;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.w1p(tmp3_$get_current$$composable_fm67ua);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          style_0._v = tmp$ret$5;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.f1j();
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.x1o();
      if (isTraceInProgress()) {
        traceEventStart(66730249, $dirty, $dirty1, 'androidx.compose.material.Text$composable (Text.kt:92)');
      }
      $composer_0.s1c(1330678258);
      sourceInformation($composer_0, '*114@5820L7,114@5859L7');
      var tmp$ret$13;
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp5_takeOrElse = color_0._v.a3c_1;
      var tmp_3;
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      tmp$ret$6 = !equals(_Color___get_value__impl__1pls5m(tmp5_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().n39_1));
      if (tmp$ret$6) {
        tmp_3 = tmp5_takeOrElse;
      } else {
        var tmp$ret$12;
        // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp0_takeOrElse = style_0._v.p39();
        var tmp_4;
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp$ret$7 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_5().n39_1));
        if (tmp$ret$7) {
          tmp_4 = tmp0_takeOrElse;
        } else {
          var tmp$ret$10;
          // Inline function 'androidx.compose.material.Text$composable.<anonymous>.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var tmp1_$get_current$$composable_gn3xww = $composer_0;
          var $composer_3 = tmp1_$get_current$$composable_gn3xww;
          sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp$ret$8 = tmp0_1.a3c_1;
          var tmp_5 = tmp$ret$8;
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_0;
          var $composer_4 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
          sourceInformationMarkerEnd($composer_4);
          tmp$ret$9 = tmp0_2;
          var tmp0_return = Color__copy$default_impl_ectz3s(tmp_5, tmp$ret$9);
          tmp$ret$10 = tmp0_return;
          tmp_4 = tmp$ret$10;
        }
        tmp$ret$11 = tmp_4;
        var tmp0_group = tmp$ret$11;
        var tmp1_return = tmp0_group;
        tmp$ret$12 = tmp1_return;
        tmp_3 = tmp$ret$12;
      }
      tmp$ret$13 = tmp_3;
      var tmp0_group_0 = tmp$ret$13;
      $composer_0.u1c();
      var textColor = tmp0_group_0;
      var tmp_6 = style_0._v;
      var tmp_7 = fontSize_0._v.z2m_1;
      var tmp_8 = fontWeight_0._v;
      var tmp_9 = fontStyle_0._v;
      var tmp_10 = tmp_9 == null ? null : tmp_9.c4a_1;
      var tmp_11 = fontFamily_0._v;
      var tmp_12 = letterSpacing_0._v.z2m_1;
      var tmp_13 = textDecoration_0._v;
      var tmp_14 = textAlign_0._v;
      var mergedStyle = tmp_6.x41(TextStyle_init_$Create$(textColor, tmp_7, tmp_8, tmp_10, VOID, tmp_11, VOID, tmp_12, VOID, VOID, VOID, VOID, tmp_13, VOID, tmp_14 == null ? null : tmp_14.a4b_1, VOID, lineHeight_0._v.z2m_1));
      BasicText$composable(text, modifier_0._v, mergedStyle, onTextLayout_0._v, overflow_0._v.p4b_1, softWrap_0._v, maxLines_0._v, minLines_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp1_safe_receiver = $composer_0.b1q();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.y1t(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1131319997);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)361@15397L7,362@15422L80:Text.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1131319997, $dirty, -1, 'androidx.compose.material.ProvideTextStyle$composable (Text.kt:360)');
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var mergedStyle = tmp$ret$0.x41(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().t1t(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.y1t(ProvideTextStyle$composable$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return Companion_getInstance_13().v41_1;
  }
  function Text$composable$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    return Unit_getInstance();
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v.a3c_1;
      var tmp_1 = $fontSize._v.z2m_1;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.c4a_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v.z2m_1;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.a4b_1, $lineHeight._v.z2m_1, $overflow._v.p4b_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle$composable($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (properties_initialized_Text_kt_kgdrtb) {
    } else {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    defaultFontFamily = defaultFontFamily === VOID ? Companion_getInstance_14().e40_1 : defaultFontFamily;
    var tmp;
    if (h1 === VOID) {
      var tmp0_fontWeight = Companion_getInstance_15().q3z_1;
      var tmp1_fontSize = get_sp(96);
      var tmp2_letterSpacing = get_sp_0(-1.5);
      tmp = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp0_fontWeight, VOID, VOID, VOID, VOID, tmp2_letterSpacing);
    } else {
      tmp = h1;
    }
    h1 = tmp;
    var tmp_0;
    if (h2 === VOID) {
      var tmp3_fontWeight = Companion_getInstance_15().q3z_1;
      var tmp4_fontSize = get_sp(60);
      var tmp5_letterSpacing = get_sp_0(-0.5);
      tmp_0 = TextStyle_init_$Create$(VOID, tmp4_fontSize, tmp3_fontWeight, VOID, VOID, VOID, VOID, tmp5_letterSpacing);
    } else {
      tmp_0 = h2;
    }
    h2 = tmp_0;
    var tmp_1;
    if (h3 === VOID) {
      var tmp6_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp7_fontSize = get_sp(48);
      var tmp8_letterSpacing = get_sp(0);
      tmp_1 = TextStyle_init_$Create$(VOID, tmp7_fontSize, tmp6_fontWeight, VOID, VOID, VOID, VOID, tmp8_letterSpacing);
    } else {
      tmp_1 = h3;
    }
    h3 = tmp_1;
    var tmp_2;
    if (h4 === VOID) {
      var tmp9_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp10_fontSize = get_sp(34);
      var tmp11_letterSpacing = get_sp_0(0.25);
      tmp_2 = TextStyle_init_$Create$(VOID, tmp10_fontSize, tmp9_fontWeight, VOID, VOID, VOID, VOID, tmp11_letterSpacing);
    } else {
      tmp_2 = h4;
    }
    h4 = tmp_2;
    var tmp_3;
    if (h5 === VOID) {
      var tmp12_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp13_fontSize = get_sp(24);
      var tmp14_letterSpacing = get_sp(0);
      tmp_3 = TextStyle_init_$Create$(VOID, tmp13_fontSize, tmp12_fontWeight, VOID, VOID, VOID, VOID, tmp14_letterSpacing);
    } else {
      tmp_3 = h5;
    }
    h5 = tmp_3;
    var tmp_4;
    if (h6 === VOID) {
      var tmp15_fontWeight = Companion_getInstance_15().s3z_1;
      var tmp16_fontSize = get_sp(20);
      var tmp17_letterSpacing = get_sp_0(0.15);
      tmp_4 = TextStyle_init_$Create$(VOID, tmp16_fontSize, tmp15_fontWeight, VOID, VOID, VOID, VOID, tmp17_letterSpacing);
    } else {
      tmp_4 = h6;
    }
    h6 = tmp_4;
    var tmp_5;
    if (subtitle1 === VOID) {
      var tmp18_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp19_fontSize = get_sp(16);
      var tmp20_letterSpacing = get_sp_0(0.15);
      tmp_5 = TextStyle_init_$Create$(VOID, tmp19_fontSize, tmp18_fontWeight, VOID, VOID, VOID, VOID, tmp20_letterSpacing);
    } else {
      tmp_5 = subtitle1;
    }
    subtitle1 = tmp_5;
    var tmp_6;
    if (subtitle2 === VOID) {
      var tmp21_fontWeight = Companion_getInstance_15().s3z_1;
      var tmp22_fontSize = get_sp(14);
      var tmp23_letterSpacing = get_sp_0(0.1);
      tmp_6 = TextStyle_init_$Create$(VOID, tmp22_fontSize, tmp21_fontWeight, VOID, VOID, VOID, VOID, tmp23_letterSpacing);
    } else {
      tmp_6 = subtitle2;
    }
    subtitle2 = tmp_6;
    var tmp_7;
    if (body1 === VOID) {
      var tmp24_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp25_fontSize = get_sp(16);
      var tmp26_letterSpacing = get_sp_0(0.5);
      tmp_7 = TextStyle_init_$Create$(VOID, tmp25_fontSize, tmp24_fontWeight, VOID, VOID, VOID, VOID, tmp26_letterSpacing);
    } else {
      tmp_7 = body1;
    }
    body1 = tmp_7;
    var tmp_8;
    if (body2 === VOID) {
      var tmp27_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp28_fontSize = get_sp(14);
      var tmp29_letterSpacing = get_sp_0(0.25);
      tmp_8 = TextStyle_init_$Create$(VOID, tmp28_fontSize, tmp27_fontWeight, VOID, VOID, VOID, VOID, tmp29_letterSpacing);
    } else {
      tmp_8 = body2;
    }
    body2 = tmp_8;
    var tmp_9;
    if (button === VOID) {
      var tmp30_fontWeight = Companion_getInstance_15().s3z_1;
      var tmp31_fontSize = get_sp(14);
      var tmp32_letterSpacing = get_sp_0(1.25);
      tmp_9 = TextStyle_init_$Create$(VOID, tmp31_fontSize, tmp30_fontWeight, VOID, VOID, VOID, VOID, tmp32_letterSpacing);
    } else {
      tmp_9 = button;
    }
    button = tmp_9;
    var tmp_10;
    if (caption === VOID) {
      var tmp33_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp34_fontSize = get_sp(12);
      var tmp35_letterSpacing = get_sp_0(0.4);
      tmp_10 = TextStyle_init_$Create$(VOID, tmp34_fontSize, tmp33_fontWeight, VOID, VOID, VOID, VOID, tmp35_letterSpacing);
    } else {
      tmp_10 = caption;
    }
    caption = tmp_10;
    var tmp_11;
    if (overline === VOID) {
      var tmp36_fontWeight = Companion_getInstance_15().r3z_1;
      var tmp37_fontSize = get_sp(10);
      var tmp38_letterSpacing = get_sp_0(1.5);
      tmp_11 = TextStyle_init_$Create$(VOID, tmp37_fontSize, tmp36_fontWeight, VOID, VOID, VOID, VOID, tmp38_letterSpacing);
    } else {
      tmp_11 = overline;
    }
    overline = tmp_11;
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, objectCreate(protoOf(Typography)));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.jav_1 = h1;
    this.kav_1 = h2;
    this.lav_1 = h3;
    this.mav_1 = h4;
    this.nav_1 = h5;
    this.oav_1 = h6;
    this.pav_1 = subtitle1;
    this.qav_1 = subtitle2;
    this.rav_1 = body1;
    this.sav_1 = body2;
    this.tav_1 = button;
    this.uav_1 = caption;
    this.vav_1 = overline;
    this.wav_1 = 0;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.jav_1.equals(other.jav_1))
      return false;
    if (!this.kav_1.equals(other.kav_1))
      return false;
    if (!this.lav_1.equals(other.lav_1))
      return false;
    if (!this.mav_1.equals(other.mav_1))
      return false;
    if (!this.nav_1.equals(other.nav_1))
      return false;
    if (!this.oav_1.equals(other.oav_1))
      return false;
    if (!this.pav_1.equals(other.pav_1))
      return false;
    if (!this.qav_1.equals(other.qav_1))
      return false;
    if (!this.rav_1.equals(other.rav_1))
      return false;
    if (!this.sav_1.equals(other.sav_1))
      return false;
    if (!this.tav_1.equals(other.tav_1))
      return false;
    if (!this.uav_1.equals(other.uav_1))
      return false;
    if (!this.vav_1.equals(other.vav_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.jav_1.hashCode();
    result = imul(31, result) + this.kav_1.hashCode() | 0;
    result = imul(31, result) + this.lav_1.hashCode() | 0;
    result = imul(31, result) + this.mav_1.hashCode() | 0;
    result = imul(31, result) + this.nav_1.hashCode() | 0;
    result = imul(31, result) + this.oav_1.hashCode() | 0;
    result = imul(31, result) + this.pav_1.hashCode() | 0;
    result = imul(31, result) + this.qav_1.hashCode() | 0;
    result = imul(31, result) + this.rav_1.hashCode() | 0;
    result = imul(31, result) + this.sav_1.hashCode() | 0;
    result = imul(31, result) + this.tav_1.hashCode() | 0;
    result = imul(31, result) + this.uav_1.hashCode() | 0;
    result = imul(31, result) + this.vav_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(h1=' + this.jav_1 + ', h2=' + this.kav_1 + ', h3=' + this.lav_1 + ', h4=' + this.mav_1 + ', h5=' + this.nav_1 + ', h6=' + this.oav_1 + ', ' + ('subtitle1=' + this.pav_1 + ', subtitle2=' + this.qav_1 + ', body1=' + this.rav_1 + ', ') + ('body2=' + this.sav_1 + ', button=' + this.tav_1 + ', caption=' + this.uav_1 + ', overline=' + this.vav_1 + ')');
  };
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    _init_properties_Typography_kt__rm3fch();
    return !(_this__u8e3s4.i42() == null) ? _this__u8e3s4 : _this__u8e3s4.b42(VOID, VOID, VOID, VOID, VOID, default_0);
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (properties_initialized_Typography_kt_bpd27j) {
    } else {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  //region block: post-declaration
  protoOf(MinimumInteractiveComponentSizeModifier).j4h = foldIn;
  protoOf(MinimumInteractiveComponentSizeModifier).k4h = all;
  protoOf(MinimumInteractiveComponentSizeModifier).e4h = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BottomNavigation$composable;
  _.$_$.b = BottomNavigationItem$composable;
  _.$_$.c = Button$composable;
  _.$_$.d = Divider$composable;
  _.$_$.e = Icon$composable;
  _.$_$.f = IconButton$composable;
  _.$_$.g = get_LocalContentAlpha;
  _.$_$.h = get_LocalContentColor;
  _.$_$.i = ProvideTextStyle$composable;
  _.$_$.j = Surface$composable;
  _.$_$.k = Text$composable;
  _.$_$.l = TextButton$composable;
  _.$_$.m = TopAppBar$composable;
  _.$_$.n = ContentAlpha_getInstance;
  _.$_$.o = MaterialTheme_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material.js.map
