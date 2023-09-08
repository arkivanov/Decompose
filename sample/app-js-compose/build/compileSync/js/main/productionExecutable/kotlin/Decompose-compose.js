(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-material-icons-core.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-ui-graphics.js', './androidx-runtime.js', './Decompose-extensions-compose-jetbrains.js', './androidx-foundation-layout.js', './androidx-material.js', './androidx-animation-core.js', './androidx-ui-geometry.js', './androidx-animation.js', './androidx-foundation.js', './androidx-ui-text.js', './Decompose-shared.js', './androidx-runtime-saveable.js', './Decompose-api.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-material-icons-core.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-ui-graphics.js'), require('./androidx-runtime.js'), require('./Decompose-extensions-compose-jetbrains.js'), require('./androidx-foundation-layout.js'), require('./androidx-material.js'), require('./androidx-animation-core.js'), require('./androidx-ui-geometry.js'), require('./androidx-animation.js'), require('./androidx-foundation.js'), require('./androidx-ui-text.js'), require('./Decompose-shared.js'), require('./androidx-runtime-saveable.js'), require('./Decompose-api.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-material-icons-core' was not found. Please, check whether 'androidx-material-icons-core' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['Decompose-extensions-compose-jetbrains'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'Decompose-extensions-compose-jetbrains' was not found. Please, check whether 'Decompose-extensions-compose-jetbrains' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-material'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-material' was not found. Please, check whether 'androidx-material' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-animation'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-animation' was not found. Please, check whether 'androidx-animation' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['Decompose-shared'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'Decompose-shared' was not found. Please, check whether 'Decompose-shared' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'Decompose-compose'.");
    }
    if (typeof this['Decompose-api'] === 'undefined') {
      throw new Error("Error loading module 'Decompose-compose'. Its dependency 'Decompose-api' was not found. Please, check whether 'Decompose-api' is loaded prior to 'Decompose-compose'.");
    }
    root['Decompose-compose'] = factory(typeof this['Decompose-compose'] === 'undefined' ? {} : this['Decompose-compose'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-material-icons-core'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-ui-graphics'], this['androidx-runtime'], this['Decompose-extensions-compose-jetbrains'], this['androidx-foundation-layout'], this['androidx-material'], this['androidx-animation-core'], this['androidx-ui-geometry'], this['androidx-animation'], this['androidx-foundation'], this['androidx-ui-text'], this['Decompose-shared'], this['androidx-runtime-saveable'], this['Decompose-api']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_material_material_icons_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_arkivanov_decompose_extensions_compose_jetbrains, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material_material, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_Decompose_sample_shared_shared, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_Decompose_sample_shared_dynamic_features_api) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var get_MaterialIconDimension = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.m;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var get_DefaultFillType = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var get_DefaultPathName = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var lazy = kotlin_kotlin.$_$.xb;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var subscribeAsState$composable = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.g;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
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
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var IconButton$composable = kotlin_org_jetbrains_compose_material_material.$_$.f;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Icons_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.o;
  var get_Delete = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.g;
  var Long = kotlin_kotlin.$_$.db;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var Icon$composable = kotlin_org_jetbrains_compose_material_material.$_$.e;
  var get_Add = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.b;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var checkIndexOverflow = kotlin_kotlin.$_$.u3;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var protoOf = kotlin_kotlin.$_$.r8;
  var toString = kotlin_kotlin.$_$.v8;
  var hashCode = kotlin_kotlin.$_$.c8;
  var equals = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var mapCapacity = kotlin_kotlin.$_$.k5;
  var coerceAtLeast = kotlin_kotlin.$_$.i9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var plus = kotlin_kotlin.$_$.t5;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Offset__component1_impl_qn5q2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var Offset__component2_impl_9ljbv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var coerceIn = kotlin_kotlin.$_$.l9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var snap = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var animateOffsetAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var animateFloatAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var requiredWidthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var aspectRatio = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var scale = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var Enum = kotlin_kotlin.$_$.ya;
  var KProperty0 = kotlin_kotlin.$_$.t9;
  var THROW_ISE = kotlin_kotlin.$_$.kb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x7;
  var KMutableProperty0 = kotlin_kotlin.$_$.r9;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var scaleIn = kotlin_org_jetbrains_compose_animation_animation.$_$.e;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.c;
  var scaleOut = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var AnimatedVisibility$composable = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var positionInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var roundToInt = kotlin_kotlin.$_$.b9;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var detectDragGestures = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material_material.$_$.o;
  var Text$composable = kotlin_org_jetbrains_compose_material_material.$_$.k;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var fade = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.a;
  var scale_0 = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.c;
  var plus_0 = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.b;
  var stackAnimation = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.d;
  var Children$composable = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.e;
  var TopAppBar$composable = kotlin_org_jetbrains_compose_material_material.$_$.m;
  var Spacer$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var testTag = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var Button$composable = kotlin_org_jetbrains_compose_material_material.$_$.c;
  var get_ArrowBack = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.c;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var BoxWithConstraints$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var Mode_CAROUSEL_getInstance = kotlin_Decompose_sample_shared_shared.$_$.m;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var numberToInt = kotlin_kotlin.$_$.n8;
  var animateIntOffsetAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var animateDpAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var size_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var Image$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var get_LocalContentColor = kotlin_org_jetbrains_compose_material_material.$_$.h;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var listOf = kotlin_kotlin.$_$.j5;
  var background_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var TextButton$composable = kotlin_org_jetbrains_compose_material_material.$_$.l;
  var Feature2Child = kotlin_Decompose_sample_shared_shared.$_$.f;
  var Feature1Child = kotlin_Decompose_sample_shared_shared.$_$.e;
  var ErrorChild = kotlin_Decompose_sample_shared_shared.$_$.b;
  var FeatureChild = kotlin_Decompose_sample_shared_shared.$_$.c;
  var LoadingChild = kotlin_Decompose_sample_shared_shared.$_$.d;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var movableContentOf$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var rememberScrollState$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var verticalScroll = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var LazyColumn$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var ContentAlpha_getInstance = kotlin_org_jetbrains_compose_material_material.$_$.n;
  var selectable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var Divider$composable = kotlin_org_jetbrains_compose_material_material.$_$.d;
  var Children$composable_0 = kotlin_com_arkivanov_decompose_extensions_compose_jetbrains.$_$.f;
  var BottomNavigation$composable = kotlin_org_jetbrains_compose_material_material.$_$.a;
  var get_Refresh = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.l;
  var Filled_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.n;
  var get_List = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.j;
  var get_Favorite = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.h;
  var get_LocationOn = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.k;
  var CustomNavigationChild = kotlin_Decompose_sample_shared_shared.$_$.j;
  var DynamicFeaturesChild = kotlin_Decompose_sample_shared_shared.$_$.k;
  var MultiPaneChild = kotlin_Decompose_sample_shared_shared.$_$.l;
  var CardsChild = kotlin_Decompose_sample_shared_shared.$_$.h;
  var CountersChild = kotlin_Decompose_sample_shared_shared.$_$.i;
  var BottomNavigationItem$composable = kotlin_org_jetbrains_compose_material_material.$_$.b;
  var CustomNavigationComponent = kotlin_Decompose_sample_shared_shared.$_$.a;
  var get_PI = kotlin_kotlin.$_$.w8;
  var toBits = kotlin_kotlin.$_$.fc;
  var toLong = kotlin_kotlin.$_$.t8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var floatFromBits = kotlin_kotlin.$_$.w7;
  var get_AccountBox = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.a;
  var get_Info = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.i;
  var get_Call = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.d;
  var get_Check = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.e;
  var get_Clear = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.f;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var Feature1 = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.b;
  var Feature2 = kotlin_Decompose_sample_shared_dynamic_features_api.$_$.d;
  var Popup$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var PressGestureScope = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var detectTapGestures = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var ProvideTextStyle$composable = kotlin_org_jetbrains_compose_material_material.$_$.i;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var get_LocalContentAlpha = kotlin_org_jetbrains_compose_material_material.$_$.g;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var Surface$composable = kotlin_org_jetbrains_compose_material_material.$_$.j;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$CardsContentKt, 'ComposableSingletons$CardsContentKt', objectMeta);
  setMetadataFor(Item, 'Item', classMeta);
  setMetadataFor(Mode, 'Mode', classMeta, Enum);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(DraggableCard$composable$slambda, 'DraggableCard$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$CountersContentKt, 'ComposableSingletons$CountersContentKt', objectMeta);
  setMetadataFor(ComposableSingletons$CounterContentKt, 'ComposableSingletons$CounterContentKt', objectMeta);
  setMetadataFor(ComposableSingletons$CustomNavigationContentKt, 'ComposableSingletons$CustomNavigationContentKt', objectMeta);
  setMetadataFor(ComposableSingletons$DialogContentKt, 'ComposableSingletons$DialogContentKt', objectMeta);
  setMetadataFor(ComposableSingletons$DynamicFeaturesContentKt, 'ComposableSingletons$DynamicFeaturesContentKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta);
  setMetadataFor(ComposableSingletons$ArticleDetailsContentKt, 'ComposableSingletons$ArticleDetailsContentKt', objectMeta);
  setMetadataFor(ComposableSingletons$RootContentKt, 'ComposableSingletons$RootContentKt', objectMeta);
  setMetadataFor(feature1Content$1, VOID, classMeta);
  setMetadataFor(feature2Content$1, VOID, classMeta);
  setMetadataFor(AlertDialog$composable$1, VOID, classMeta);
  setMetadataFor(AlertDialog$composable$lambda$slambda$slambda, 'AlertDialog$composable$lambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(AlertDialog$composable$lambda$slambda, 'AlertDialog$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  //endregion
  function get_SwipeUp(_this__u8e3s4) {
    _init_properties_Icons_kt__93b06g();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = SwipeUp$factory();
    tmp$ret$0 = SwipeUp$delegate.b2();
    return tmp$ret$0;
  }
  var SwipeUp$delegate;
  function SwipeUp$delegate$lambda() {
    _init_properties_Icons_kt__93b06g();
    var tmp$ret$8;
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var tmp$ret$7;
    // Inline function 'com.arkivanov.sample.shared.SwipeUp$delegate.<anonymous>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = get_MaterialIconDimension();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = get_MaterialIconDimension();
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    var tmp2__anonymous__z9zvc9 = new Builder('Filled.SwipeUp', tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
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
    // Inline function 'com.arkivanov.sample.shared.SwipeUp$delegate.<anonymous>.<anonymous>.<anonymous>' call
    tmp0_with.o2v(2.06, 5.56);
    tmp0_with.q2v(1.0, 4.5);
    tmp0_with.q2v(4.5, 1.0);
    tmp0_with.q2v(8.0, 4.5);
    tmp0_with.q2v(6.94, 5.56);
    tmp0_with.q2v(5.32, 3.94);
    tmp0_with.m3n(5.11, 4.76, 5.0, 5.62, 5.0, 6.5);
    tmp0_with.n3n(0.0, 2.42, 0.82, 4.65, 2.2, 6.43);
    tmp0_with.q2v(6.13, 14.0);
    tmp0_with.m3n(4.49, 11.95, 3.5, 9.34, 3.5, 6.5);
    tmp0_with.n3n(0.0, -0.92, 0.1, -1.82, 0.3, -2.68);
    tmp0_with.q2v(2.06, 5.56);
    tmp0_with.g3n();
    tmp0_with.o2v(13.85, 11.62);
    tmp0_with.h3n(-2.68, -5.37);
    tmp0_with.n3n(-0.37, -0.74, -1.27, -1.04, -2.01, -0.67);
    tmp0_with.m3n(8.41, 5.96, 8.11, 6.86, 8.48, 7.6);
    tmp0_with.h3n(4.81, 9.6);
    tmp0_with.q2v(10.05, 18.0);
    tmp0_with.n3n(-0.33, 0.09, -0.59, 0.33, -0.7, 0.66);
    tmp0_with.q2v(9.0, 19.78);
    tmp0_with.h3n(6.19, 2.25);
    tmp0_with.n3n(0.5, 0.17, 1.28, 0.02, 1.75, -0.22);
    tmp0_with.h3n(5.51, -2.75);
    tmp0_with.n3n(0.89, -0.45, 1.32, -1.48, 1.0, -2.42);
    tmp0_with.h3n(-1.43, -4.27);
    tmp0_with.n3n(-0.27, -0.82, -1.04, -1.37, -1.9, -1.37);
    tmp0_with.j3n(-4.56);
    tmp0_with.n3n(-0.31, 0.0, -0.62, 0.07, -0.89, 0.21);
    tmp0_with.q2v(13.85, 11.62);
    tmp$ret$2 = tmp0_with.f3n();
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp2__anonymous__z9zvc9.q50(tmp$ret$4, tmp5_materialPath, tmp4_path, tmp1_path, 1.0, null, 1.0, 1.0, tmp2_path, tmp3_path, 1.0);
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7.a1j();
    return tmp$ret$8;
  }
  function SwipeUp$factory() {
    return getPropertyCallableRef('SwipeUp', 1, KProperty1, function (receiver) {
      return get_SwipeUp(receiver);
    }, null);
  }
  var properties_initialized_Icons_kt_9ljgxi;
  function _init_properties_Icons_kt__93b06g() {
    if (properties_initialized_Icons_kt_9ljgxi) {
    } else {
      properties_initialized_Icons_kt_9ljgxi = true;
      SwipeUp$delegate = lazy(SwipeUp$delegate$lambda);
    }
  }
  function CardsContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1861364379);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1861364379, $changed, -1, 'com.arkivanov.sample.shared.cards.CardsContent$composable (CardsContent.kt:58)');
      }
      var tmp = component.qag();
      var stack$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_0 = fillMaxSize(modifier_0._v);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      var tmp16_Box$composable = padding(tmp_0, tmp$ret$0);
      var tmp17_Box$composable = null;
      var tmp18_Box$composable = false;
      var tmp19_Box$composable = $composer_0;
      var modifier_1 = tmp16_Box$composable;
      var contentAlignment = tmp17_Box$composable;
      var propagateMinConstraints = tmp18_Box$composable;
      var $composer_1 = tmp19_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 0;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0;
      var density = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_0;
      var layoutDirection = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$3 = tmp0_1;
      var viewConfiguration = tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.cards.CardsContent$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      var tmp_2 = CardsComponent$onRemoveClicked$ref(component);
      var tmp_3 = tmp20__anonymous__q2j3lv.w7n(Companion_getInstance_2(), Companion_getInstance_3().f4g_1);
      IconButton$composable(tmp_2, tmp_3, false, null, ComposableSingletons$CardsContentKt_getInstance().xb1_1, $composer_8, 24576, 12);
      var tmp_4 = CardsComponent$onAddClicked$ref(component);
      var tmp_5 = tmp20__anonymous__q2j3lv.w7n(Companion_getInstance_2(), Companion_getInstance_3().h4g_1);
      IconButton$composable(tmp_4, tmp_5, false, null, ComposableSingletons$CardsContentKt_getInstance().yb1_1, $composer_8, 24576, 12);
      var tmp_6 = CardsContent$composable$lambda(stack$delegate).sl_1;
      DraggableCards$composable(tmp_6, CardsComponent$onCardSwiped$ref(component), fillMaxSize(Companion_getInstance_2()), $composer_8, 384, 0);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(CardsContent$composable$lambda_0(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$CardsContentKt$lambda_1$lambda_n92sve($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-718765849, $changed, -1, 'com.arkivanov.sample.shared.cards.ComposableSingletons$CardsContentKt.lambda-1.<anonymous> (CardsContent.kt:65)');
      }
      var tmp = get_Delete(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Remove', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$CardsContentKt$lambda_2$lambda_iyes1j($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(931304080, $changed, -1, 'com.arkivanov.sample.shared.cards.ComposableSingletons$CardsContentKt.lambda-2.<anonymous> (CardsContent.kt:75)');
      }
      var tmp = get_Add(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Add', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CardsContentKt() {
    ComposableSingletons$CardsContentKt_instance = this;
    var tmp = this;
    tmp.xb1_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-718765849, false, ComposableSingletons$CardsContentKt$lambda_1$lambda_n92sve));
    var tmp_0 = this;
    tmp_0.yb1_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(931304080, false, ComposableSingletons$CardsContentKt$lambda_2$lambda_iyes1j));
  }
  var ComposableSingletons$CardsContentKt_instance;
  function ComposableSingletons$CardsContentKt_getInstance() {
    if (ComposableSingletons$CardsContentKt_instance == null)
      new ComposableSingletons$CardsContentKt();
    return ComposableSingletons$CardsContentKt_instance;
  }
  function DraggableCards$composable(items, onSwiped, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1667427034);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(items) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(onSwiped) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1667427034, $dirty, -1, 'com.arkivanov.sample.shared.cards.DraggableCards$composable (CardsContent.kt:92)');
      }
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.s1c(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$3;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
        var tmp0_iterator = items.c();
        while (tmp0_iterator.d()) {
          var item = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>' call
          var configuration = item.f4();
          var instance = item.g4();
          tmp$ret$0 = new Item(configuration, instance, new MutableTransitionState(true));
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = mutableStateOf(tmp$ret$2);
        var value = tmp$ret$3;
        tmp1_cache.p1q(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$4 = tmp;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      tmp$ret$6 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$6;
      $composer_1.u1c();
      tmp$ret$7 = tmp0;
      var lastItems$delegate = tmp$ret$7;
      DisposableEffect$composable(items, DraggableCards$composable$lambda_3(items, lastItems$delegate), $composer_0, 14 & $dirty);
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_2 = tmp5_remember$composable;
      $composer_2.s1c(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp3_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$8;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>' call
        tmp$ret$8 = mutableStateOf(new IntSize(Companion_getInstance_6().u2m_1));
        var value_0 = tmp$ret$8;
        tmp4_cache.p1q(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp3_let;
      }
      tmp$ret$9 = tmp_1;
      tmp$ret$10 = tmp$ret$9;
      var tmp_2 = tmp$ret$10;
      tmp$ret$11 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$11;
      $composer_2.u1c();
      tmp$ret$12 = tmp0_0;
      var layoutSize$delegate = tmp$ret$12;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_3 = modifier_0._v;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp9_remember$composable = $composer_0;
      var $composer_3 = tmp9_remember$composable;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp7_cache = $composer_3;
      var tmp8_cache = $composer_3.x1h(layoutSize$delegate);
      var tmp$ret$15;
      // Inline function 'kotlin.let' call
      var tmp6_let = tmp7_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp8_cache ? true : tmp6_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$13;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>' call
        tmp$ret$13 = DraggableCards$composable$lambda_4(layoutSize$delegate);
        var value_1 = tmp$ret$13;
        tmp7_cache.p1q(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp6_let;
      }
      tmp$ret$14 = tmp_4;
      tmp$ret$15 = tmp$ret$14;
      var tmp_5 = tmp$ret$15;
      tmp$ret$16 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$16;
      $composer_3.u1c();
      tmp$ret$17 = tmp0_1;
      var tmp26_Box$composable = onPlaced(tmp_3, tmp$ret$17);
      var tmp27_Box$composable = Companion_getInstance_3().m4g_1;
      var tmp28_Box$composable = false;
      var tmp29_Box$composable = $composer_0;
      var modifier_1 = tmp26_Box$composable;
      var contentAlignment = tmp27_Box$composable;
      var propagateMinConstraints = tmp28_Box$composable;
      var $composer_4 = tmp29_Box$composable;
      $composer_4.s1c(1330882304);
      sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp21_Layout$composable = modifier_1;
      var tmp22_Layout$composable = $composer_4;
      var tmp23_Layout$composable = 0;
      var modifier_2 = tmp21_Layout$composable;
      var $composer_5 = tmp22_Layout$composable;
      $composer_5.s1c(1725976829);
      sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp10_$get_current$$composable_orpap8 = get_LocalDensity();
      var tmp11_$get_current$$composable_o98fnx = $composer_5;
      var $composer_6 = tmp11_$get_current$$composable_o98fnx;
      sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_6.w1p(tmp10_$get_current$$composable_orpap8);
      sourceInformationMarkerEnd($composer_6);
      tmp$ret$18 = tmp0_2;
      var density = tmp$ret$18;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp12_$get_current$$composable_nqrkmm = get_LocalLayoutDirection();
      var tmp13_$get_current$$composable_n8aplb = $composer_5;
      var $composer_7 = tmp13_$get_current$$composable_n8aplb;
      sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_3 = $composer_7.w1p(tmp12_$get_current$$composable_nqrkmm);
      sourceInformationMarkerEnd($composer_7);
      tmp$ret$19 = tmp0_3;
      var layoutDirection = tmp$ret$19;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp14_$get_current$$composable_mptuk0 = get_LocalViewConfiguration();
      var tmp15_$get_current$$composable_m7czip = $composer_5;
      var $composer_8 = tmp15_$get_current$$composable_m7czip;
      sourceInformationMarkerStart($composer_8, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_8.w1p(tmp14_$get_current$$composable_mptuk0);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$20 = tmp0_4;
      var viewConfiguration = tmp$ret$20;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp16_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp17_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp18_ReusableComposeNode$composable = $composer_5;
      var tmp19_ReusableComposeNode$composable = 6 | 7168 & tmp23_Layout$composable << 9;
      var $composer_9 = tmp18_ReusableComposeNode$composable;
      var tmp_6 = $composer_9.t1o();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_9.e1p();
      if ($composer_9.c1p()) {
        $composer_9.f1p(tmp16_ReusableComposeNode$composable);
      } else {
        $composer_9.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = _Updater___init__impl__rbfxm8($composer_9);
      Updater__set_impl_v7kwss(tmp20__anonymous__q2j3lv, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp20__anonymous__q2j3lv, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp20__anonymous__q2j3lv, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp20__anonymous__q2j3lv, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp17_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & tmp19_ReusableComposeNode$composable >> 3);
      $composer_9.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp24__anonymous__6nsirr = $composer_9;
      var tmp25__anonymous__1t3vk8 = 14 & tmp19_ReusableComposeNode$composable >> 9;
      var $composer_10 = tmp24__anonymous__6nsirr;
      sourceInformationMarkerStart($composer_10, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>' call
      var tmp30__anonymous__hpj82q = BoxScopeInstance_getInstance();
      var tmp31__anonymous__cuukv7 = $composer_10;
      var tmp32__anonymous__805xno = 6;
      var $composer_11 = tmp31__anonymous__cuukv7;
      $composer_11.s1c(-1519952954);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var tmp0_forEachIndexed = DraggableCards$composable$lambda(lastItems$delegate);
      var index = 0;
      var tmp0_iterator_0 = tmp0_forEachIndexed.c();
      while (tmp0_iterator_0.d()) {
        var item_0 = tmp0_iterator_0.e();
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
        var configuration_0 = item_0.f4();
        var instance_0 = item_0.g4();
        var transitionState = item_0.r3l();
        $composer_11.o1l(1896359898, configuration_0);
        var indexFromEnd = get_lastIndex(DraggableCards$composable$lambda(lastItems$delegate)) - tmp1__anonymous__uwfjfc | 0;
        var tmp_7 = DraggableCards$composable$lambda_1(layoutSize$delegate);
        var tmp$ret$21;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$21 = _Dp___init__impl__ms3zkb(16);
        var tmp_8 = indexFromEnd * -toPx$composable(tmp$ret$21, $composer_11, 6);
        var tmp_9 = 1.0 - indexFromEnd / 20.0;
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_11;
        var tmp4_remember$composable = 14 & $dirty >> 3;
        var $composer_12 = tmp3_remember$composable;
        $composer_12.s1c(-1124426577);
        sourceInformation($composer_12, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$25;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_12;
        var tmp2_cache = !!($composer_12.x1h(onSwiped) | $composer_12.x1h(tmp1__anonymous__uwfjfc));
        var tmp$ret$24;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$22;
          // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = DraggableCards$composable$lambda_5(onSwiped, tmp1__anonymous__uwfjfc);
          var value_2 = tmp$ret$22;
          tmp1_cache_0.p1q(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = tmp0_let_0;
        }
        tmp$ret$23 = tmp_10;
        tmp$ret$24 = tmp$ret$23;
        var tmp_11 = tmp$ret$24;
        tmp$ret$25 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_5 = tmp$ret$25;
        $composer_12.u1c();
        tmp$ret$26 = tmp0_5;
        var tmp_12 = tmp$ret$26;
        var tmp$ret$33;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$32;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_13 = $composer_11;
        var dispatchReceiver = composableLambda(tmp_13, -1078570903, true, DraggableCards$composable$lambda_6(transitionState, instance_0, lastItems$delegate, configuration_0));
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_11;
        var $composer_13 = tmp3_remember$composable_0;
        $composer_13.s1c(-838505973);
        sourceInformation($composer_13, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$30;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_13;
        var tmp2_cache_0 = $composer_13.x1h(dispatchReceiver);
        var tmp$ret$29;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$28;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$27;
          // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$27 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value_3 = tmp$ret$27;
          tmp1_cache_1.p1q(value_3);
          tmp_14 = value_3;
        } else {
          tmp_14 = tmp0_let_1;
        }
        tmp$ret$28 = tmp_14;
        tmp$ret$29 = tmp$ret$28;
        var tmp_15 = tmp$ret$29;
        tmp$ret$30 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_6 = tmp$ret$30;
        $composer_13.u1c();
        tmp$ret$31 = tmp0_6;
        tmp$ret$32 = tmp$ret$31;
        tmp$ret$33 = tmp$ret$32;
        DraggableCard$composable(tmp_7, tmp_8, tmp_9, tmp_12, tmp$ret$33, $composer_11, 24576);
        $composer_11.s1l();
      }
      $composer_11.u1c();
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
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(DraggableCards$composable$lambda_7(items, onSwiped, modifier_0, $changed, $default));
    }
  }
  function Item(configuration, instance, transitionState) {
    this.zb1_1 = configuration;
    this.ab2_1 = instance;
    this.bb2_1 = transitionState;
  }
  protoOf(Item).f4 = function () {
    return this.zb1_1;
  };
  protoOf(Item).g4 = function () {
    return this.ab2_1;
  };
  protoOf(Item).r3l = function () {
    return this.bb2_1;
  };
  protoOf(Item).toString = function () {
    return 'Item(configuration=' + toString(this.zb1_1) + ', instance=' + this.ab2_1 + ', transitionState=' + this.bb2_1 + ')';
  };
  protoOf(Item).hashCode = function () {
    var result = hashCode(this.zb1_1);
    result = imul(result, 31) + hashCode(this.ab2_1) | 0;
    result = imul(result, 31) + hashCode(this.bb2_1) | 0;
    return result;
  };
  protoOf(Item).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Item))
      return false;
    var tmp0_other_with_cast = other instanceof Item ? other : THROW_CCE();
    if (!equals(this.zb1_1, tmp0_other_with_cast.zb1_1))
      return false;
    if (!equals(this.ab2_1, tmp0_other_with_cast.ab2_1))
      return false;
    if (!equals(this.bb2_1, tmp0_other_with_cast.bb2_1))
      return false;
    return true;
  };
  function diff(_this__u8e3s4, items) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = configuration$factory();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
    var tmp0_iterator = items.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      tmp0_mapTo.a(tmp1_map(item));
    }
    tmp$ret$0 = tmp0_mapTo;
    tmp$ret$1 = tmp$ret$0;
    var configs = tmp$ret$1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filterNot' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterNotTo' call
    var tmp2_filterNotTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = _this__u8e3s4.c();
    while (tmp0_iterator_0.d()) {
      var element = tmp0_iterator_0.e();
      var tmp$ret$2;
      // Inline function 'com.arkivanov.sample.shared.cards.diff.<anonymous>' call
      tmp$ret$2 = configs.m(element.zb1_1);
      if (!tmp$ret$2) {
        tmp2_filterNotTo.a(element);
      }
    }
    tmp$ret$3 = tmp2_filterNotTo;
    tmp$ret$4 = tmp$ret$3;
    var missingItems = tmp$ret$4;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = missingItems.c();
    while (tmp0_iterator_1.d()) {
      var element_0 = tmp0_iterator_1.e();
      // Inline function 'com.arkivanov.sample.shared.cards.diff.<anonymous>' call
      element_0.bb2_1.q7h(false);
    }
    var tmp$ret$6;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp4_associateBy = configuration$factory_0();
    var tmp5_associateBy = transitionState$factory();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 10)), 16);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp3_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator_2 = _this__u8e3s4.c();
    while (tmp0_iterator_2.d()) {
      var element_1 = tmp0_iterator_2.e();
      tmp3_associateByTo.h4(tmp4_associateBy(element_1), tmp5_associateBy(element_1));
    }
    tmp$ret$5 = tmp3_associateByTo;
    tmp$ret$6 = tmp$ret$5;
    var lastTransitionStates = tmp$ret$6;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp6_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
    var tmp0_iterator_3 = items.c();
    while (tmp0_iterator_3.d()) {
      var item_0 = tmp0_iterator_3.e();
      var tmp$ret$8;
      // Inline function 'com.arkivanov.sample.shared.cards.diff.<anonymous>' call
      var configuration = item_0.f4();
      var instance = item_0.g4();
      var tmp0_elvis_lhs = lastTransitionStates.q2(configuration);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$7;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = new MutableTransitionState(false);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.arkivanov.sample.shared.cards.diff.<anonymous>.<anonymous>' call
        tmp0_apply.q7h(true);
        tmp$ret$7 = tmp0_apply;
        tmp = tmp$ret$7;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp$ret$8 = new Item(configuration, instance, tmp);
      tmp6_mapTo.a(tmp$ret$8);
    }
    tmp$ret$9 = tmp6_mapTo;
    tmp$ret$10 = tmp$ret$9;
    return plus(tmp$ret$10, missingItems);
  }
  function DraggableCard$composable(layoutSize, offsetY, scale_0, onSwiped, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-799463173);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.p1p(_IntSize___get_packedValue__impl__uho7jf(layoutSize)) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.o1p(offsetY) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.o1p(scale_0) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(onSwiped) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-799463173, $dirty, -1, 'com.arkivanov.sample.shared.cards.DraggableCard$composable (CardsContent.kt:169)');
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
      if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf(new Offset(Companion_getInstance_7().m2j_1));
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
      var cardPosition$delegate = tmp$ret$4;
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
      var tmp_1;
      if (false ? true : tmp3_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$5;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$5 = mutableStateOf(new IntSize(Companion_getInstance_6().u2m_1));
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
      var cardSize$delegate = tmp$ret$9;
      var minOffsetX = -_Offset___get_x__impl__xvi35n(DraggableCard$composable$lambda(cardPosition$delegate)) - _IntSize___get_width__impl__d9yl4o(DraggableCard$composable$lambda_1(cardSize$delegate));
      var maxOffsetX = _IntSize___get_width__impl__d9yl4o(layoutSize) - _Offset___get_x__impl__xvi35n(DraggableCard$composable$lambda(cardPosition$delegate));
      var maxOffsetY = -_Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda(cardPosition$delegate));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_3 = tmp8_remember$composable;
      $composer_3.s1c(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp7_cache = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp6_let = tmp7_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp6_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$10;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$10 = mutableStateOf(Mode_IDLE_getInstance());
        var value_1 = tmp$ret$10;
        tmp7_cache.p1q(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp6_let;
      }
      tmp$ret$11 = tmp_3;
      tmp$ret$12 = tmp$ret$11;
      var tmp_4 = tmp$ret$12;
      tmp$ret$13 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.u1c();
      tmp$ret$14 = tmp0_1;
      var mode$delegate = tmp$ret$14;
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp11_remember$composable = $composer_0;
      var $composer_4 = tmp11_remember$composable;
      $composer_4.s1c(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp10_cache = $composer_4;
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp9_let = tmp10_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp9_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$15;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$15 = mutableStateOf(new Offset(Companion_getInstance_7().m2j_1));
        var value_2 = tmp$ret$15;
        tmp10_cache.p1q(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp9_let;
      }
      tmp$ret$16 = tmp_5;
      tmp$ret$17 = tmp$ret$16;
      var tmp_6 = tmp$ret$17;
      tmp$ret$18 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.u1c();
      tmp$ret$19 = tmp0_2;
      var startTouchPosition$delegate = tmp$ret$19;
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp14_remember$composable = $composer_0;
      var $composer_5 = tmp14_remember$composable;
      $composer_5.s1c(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp13_cache = $composer_5;
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp12_let = tmp13_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp12_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$20;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$20 = mutableStateOf(new Offset(Companion_getInstance_7().m2j_1));
        var value_3 = tmp$ret$20;
        tmp13_cache.p1q(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp12_let;
      }
      tmp$ret$21 = tmp_7;
      tmp$ret$22 = tmp$ret$21;
      var tmp_8 = tmp$ret$22;
      tmp$ret$23 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.u1c();
      tmp$ret$24 = tmp0_3;
      var dragTotalOffset$delegate = tmp$ret$24;
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp17_remember$composable = $composer_0;
      var $composer_6 = tmp17_remember$composable;
      $composer_6.s1c(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$28;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp16_cache = $composer_6;
      var tmp$ret$27;
      // Inline function 'kotlin.let' call
      var tmp15_let = tmp16_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$26;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp15_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$25;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$25 = mutableStateOf(new Offset(Companion_getInstance_7().m2j_1));
        var value_4 = tmp$ret$25;
        tmp16_cache.p1q(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = tmp15_let;
      }
      tmp$ret$26 = tmp_9;
      tmp$ret$27 = tmp$ret$26;
      var tmp_10 = tmp$ret$27;
      tmp$ret$28 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_4 = tmp$ret$28;
      $composer_6.u1c();
      tmp$ret$29 = tmp0_4;
      var dragLastOffset$delegate = tmp$ret$29;
      var tmp$ret$30;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$30 = _Dp___init__impl__ms3zkb(3);
      var dragDistanceThreshold = toPx$composable(tmp$ret$30, $composer_0, 6);
      var tmp0_subject = DraggableCard$composable$lambda_3(mode$delegate);
      var tmp0_5 = tmp0_subject.k6_1;
      var tmp_11;
      switch (tmp0_5) {
        case 1:
          tmp_11 = Offset__plus_impl_c78cg0(DraggableCard$composable$lambda_7(dragTotalOffset$delegate), Offset_0(0.0, offsetY));
          break;
        case 2:
          var tmp1_container = DraggableCard$composable$lambda_7(dragTotalOffset$delegate);
          var x1 = Offset__component1_impl_qn5q2(tmp1_container);
          var y1 = Offset__component2_impl_9ljbv(tmp1_container);
          var x2 = x1 + _Offset___get_x__impl__xvi35n(DraggableCard$composable$lambda_9(dragLastOffset$delegate));
          var y2 = y1 + _Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda_9(dragLastOffset$delegate));
          var upperOffsetX = coerceIn((maxOffsetY - y1) * (x2 - x1) / (y2 - y1) + x1, minOffsetX, maxOffsetX);
          tmp_11 = Offset_0(upperOffsetX, maxOffsetY);
          break;
        case 0:
        case 3:
          tmp_11 = Offset_0(0.0, offsetY);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_12 = tmp_11;
      var tmp_13 = DraggableCard$composable$lambda_3(mode$delegate).equals(Mode_DRAG_getInstance()) ? snap() : tween();
      var animatedOffset$delegate = animateOffsetAsState$composable(tmp_12, tmp_13, null, null, $composer_0, 0, 12);
      var tmp_14 = tween();
      var animatedScale$delegate = animateFloatAsState$composable(scale_0, tmp_14, 0.0, null, null, $composer_0, 48 | 14 & $dirty >> 6, 28);
      var tmp_15 = new Offset(DraggableCard$composable$lambda_11(animatedOffset$delegate));
      var tmp_16 = DraggableCard$composable$lambda_3(mode$delegate);
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp21_remember$composable = $composer_0;
      var $composer_7 = tmp21_remember$composable;
      $composer_7.s1c(-1603429786);
      sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [mode$delegate, animatedOffset$delegate, maxOffsetY, onSwiped, offsetY];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_7.x1h(key));
      }
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp19_cache = $composer_7;
      var tmp20_cache = invalid;
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp18_let = tmp19_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_17;
      if (tmp20_cache ? true : tmp18_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$31;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$31 = DraggableCard$composable$lambda_13(maxOffsetY, onSwiped, offsetY, mode$delegate, animatedOffset$delegate);
        var value_5 = tmp$ret$31;
        tmp19_cache.p1q(value_5);
        tmp_17 = value_5;
      } else {
        tmp_17 = tmp18_let;
      }
      tmp$ret$32 = tmp_17;
      tmp$ret$33 = tmp$ret$32;
      var tmp_18 = tmp$ret$33;
      tmp$ret$34 = (tmp_18 == null ? true : isObject(tmp_18)) ? tmp_18 : THROW_CCE();
      var tmp0_6 = tmp$ret$34;
      $composer_7.u1c();
      tmp$ret$35 = tmp0_6;
      DisposableEffect$composable_0(tmp_15, tmp_16, offsetY, tmp$ret$35, $composer_0, 896 & $dirty << 3);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_19 = Companion_getInstance_2();
      var tmp$ret$40;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp25_remember$composable = $composer_0;
      var $composer_8 = tmp25_remember$composable;
      $composer_8.s1c(-1124426577);
      sourceInformation($composer_8, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$39;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp23_cache = $composer_8;
      var tmp24_cache = !!($composer_8.x1h(cardPosition$delegate) | $composer_8.x1h(cardSize$delegate));
      var tmp$ret$38;
      // Inline function 'kotlin.let' call
      var tmp22_let = tmp23_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$37;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_20;
      if (tmp24_cache ? true : tmp22_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$36;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$36 = DraggableCard$composable$lambda_14(cardPosition$delegate, cardSize$delegate);
        var value_6 = tmp$ret$36;
        tmp23_cache.p1q(value_6);
        tmp_20 = value_6;
      } else {
        tmp_20 = tmp22_let;
      }
      tmp$ret$37 = tmp_20;
      tmp$ret$38 = tmp$ret$37;
      var tmp_21 = tmp$ret$38;
      tmp$ret$39 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
      var tmp0_7 = tmp$ret$39;
      $composer_8.u1c();
      tmp$ret$40 = tmp0_7;
      var tmp_22 = onPlaced(tmp_19, tmp$ret$40);
      var tmp$ret$41;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$41 = _Dp___init__impl__ms3zkb(256);
      var tmp_23 = requiredWidthIn(tmp_22, VOID, tmp$ret$41);
      var tmp$ret$46;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp29_remember$composable = $composer_0;
      var $composer_9 = tmp29_remember$composable;
      $composer_9.s1c(-838505973);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$45;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp27_cache = $composer_9;
      var tmp28_cache = $composer_9.x1h(animatedOffset$delegate);
      var tmp$ret$44;
      // Inline function 'kotlin.let' call
      var tmp26_let = tmp27_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$43;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_24;
      if (tmp28_cache ? true : tmp26_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$42;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$42 = DraggableCard$composable$lambda_15(animatedOffset$delegate);
        var value_7 = tmp$ret$42;
        tmp27_cache.p1q(value_7);
        tmp_24 = value_7;
      } else {
        tmp_24 = tmp26_let;
      }
      tmp$ret$43 = tmp_24;
      tmp$ret$44 = tmp$ret$43;
      var tmp_25 = tmp$ret$44;
      tmp$ret$45 = (tmp_25 == null ? true : isObject(tmp_25)) ? tmp_25 : THROW_CCE();
      var tmp0_8 = tmp$ret$45;
      $composer_9.u1c();
      tmp$ret$46 = tmp0_8;
      var tmp_26 = aspectRatio(offset(tmp_23, tmp$ret$46), 1.5882353);
      var tmp$ret$51;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp33_remember$composable = $composer_0;
      var $composer_10 = tmp33_remember$composable;
      $composer_10.s1c(-1603429786);
      sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid_0 = false;
      var indexedObject_0 = [startTouchPosition$delegate, dragTotalOffset$delegate, mode$delegate, dragLastOffset$delegate, dragDistanceThreshold];
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var key_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        invalid_0 = !!(invalid_0 | $composer_10.x1h(key_0));
      }
      var tmp$ret$50;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp31_cache = $composer_10;
      var tmp32_cache = invalid_0;
      var tmp$ret$49;
      // Inline function 'kotlin.let' call
      var tmp30_let = tmp31_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$48;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_27;
      if (tmp32_cache ? true : tmp30_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$47;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$47 = DraggableCard$composable$slambda_0(startTouchPosition$delegate, dragTotalOffset$delegate, mode$delegate, dragDistanceThreshold, dragLastOffset$delegate, null);
        var value_8 = tmp$ret$47;
        tmp31_cache.p1q(value_8);
        tmp_27 = value_8;
      } else {
        tmp_27 = tmp30_let;
      }
      tmp$ret$48 = tmp_27;
      tmp$ret$49 = tmp$ret$48;
      var tmp_28 = tmp$ret$49;
      tmp$ret$50 = (tmp_28 == null ? true : isObject(tmp_28)) ? tmp_28 : THROW_CCE();
      var tmp0_9 = tmp$ret$50;
      $composer_10.u1c();
      tmp$ret$51 = tmp0_9;
      var tmp_29 = scale(pointerInput(tmp_26, Unit_getInstance(), tmp$ret$51), DraggableCard$composable$lambda_12(animatedScale$delegate));
      var tmp$ret$56;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp37_remember$composable = $composer_0;
      var $composer_11 = tmp37_remember$composable;
      $composer_11.s1c(-1603429786);
      sourceInformation($composer_11, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid_1 = false;
      var indexedObject_1 = [mode$delegate, startTouchPosition$delegate, animatedOffset$delegate, offsetY, maxOffsetY];
      var inductionVariable_1 = 0;
      var last_1 = indexedObject_1.length;
      while (inductionVariable_1 < last_1) {
        var key_1 = indexedObject_1[inductionVariable_1];
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        invalid_1 = !!(invalid_1 | $composer_11.x1h(key_1));
      }
      var tmp$ret$55;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp35_cache = $composer_11;
      var tmp36_cache = invalid_1;
      var tmp$ret$54;
      // Inline function 'kotlin.let' call
      var tmp34_let = tmp35_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$53;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_30;
      if (tmp36_cache ? true : tmp34_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$52;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
        tmp$ret$52 = DraggableCard$composable$lambda_16(offsetY, maxOffsetY, mode$delegate, startTouchPosition$delegate, animatedOffset$delegate);
        var value_9 = tmp$ret$52;
        tmp35_cache.p1q(value_9);
        tmp_30 = value_9;
      } else {
        tmp_30 = tmp34_let;
      }
      tmp$ret$53 = tmp_30;
      tmp$ret$54 = tmp$ret$53;
      var tmp_31 = tmp$ret$54;
      tmp$ret$55 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
      var tmp0_10 = tmp$ret$55;
      $composer_11.u1c();
      tmp$ret$56 = tmp0_10;
      var tmp54_Box$composable = graphicsLayer(tmp_29, tmp$ret$56);
      var tmp55_Box$composable = null;
      var tmp56_Box$composable = false;
      var tmp57_Box$composable = $composer_0;
      var modifier = tmp54_Box$composable;
      var contentAlignment = tmp55_Box$composable;
      var propagateMinConstraints = tmp56_Box$composable;
      var $composer_12 = tmp57_Box$composable;
      $composer_12.s1c(1330882304);
      sourceInformation($composer_12, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_2();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_12, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp49_Layout$composable = modifier;
      var tmp50_Layout$composable = $composer_12;
      var tmp51_Layout$composable = 0;
      var modifier_0 = tmp49_Layout$composable;
      var $composer_13 = tmp50_Layout$composable;
      $composer_13.s1c(1725976829);
      sourceInformation($composer_13, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      var tmp$ret$57;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp38_$get_current$$composable_b531u6 = get_LocalDensity();
      var tmp39_$get_current$$composable_bnjwvh = $composer_13;
      var $composer_14 = tmp39_$get_current$$composable_bnjwvh;
      sourceInformationMarkerStart($composer_14, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_11 = $composer_14.w1p(tmp38_$get_current$$composable_b531u6);
      sourceInformationMarkerEnd($composer_14);
      tmp$ret$57 = tmp0_11;
      var density = tmp$ret$57;
      var tmp$ret$58;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp40_$get_current$$composable_mxuvo7 = get_LocalLayoutDirection();
      var tmp41_$get_current$$composable_ngbqpi = $composer_13;
      var $composer_15 = tmp41_$get_current$$composable_ngbqpi;
      sourceInformationMarkerStart($composer_15, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_12 = $composer_15.w1p(tmp40_$get_current$$composable_mxuvo7);
      sourceInformationMarkerEnd($composer_15);
      tmp$ret$58 = tmp0_12;
      var layoutDirection = tmp$ret$58;
      var tmp$ret$59;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp42_$get_current$$composable_nyslqt = get_LocalViewConfiguration();
      var tmp43_$get_current$$composable_oh9gs4 = $composer_13;
      var $composer_16 = tmp43_$get_current$$composable_oh9gs4;
      sourceInformationMarkerStart($composer_16, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_13 = $composer_16.w1p(tmp42_$get_current$$composable_nyslqt);
      sourceInformationMarkerEnd($composer_16);
      tmp$ret$59 = tmp0_13;
      var viewConfiguration = tmp$ret$59;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp44_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp45_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp46_ReusableComposeNode$composable = $composer_13;
      var tmp47_ReusableComposeNode$composable = 6 | 7168 & tmp51_Layout$composable << 9;
      var $composer_17 = tmp46_ReusableComposeNode$composable;
      var tmp_32 = $composer_17.t1o();
      if (!isInterface(tmp_32, Applier)) {
        invalidApplier();
      }
      $composer_17.e1p();
      if ($composer_17.c1p()) {
        $composer_17.f1p(tmp44_ReusableComposeNode$composable);
      } else {
        $composer_17.h1p();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp48__anonymous__tgxt4n = _Updater___init__impl__rbfxm8($composer_17);
      Updater__set_impl_v7kwss(tmp48__anonymous__tgxt4n, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp48__anonymous__tgxt4n, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp48__anonymous__tgxt4n, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp48__anonymous__tgxt4n, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp45_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_17)), $composer_17, 112 & tmp47_ReusableComposeNode$composable >> 3);
      $composer_17.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp52__anonymous__8pttem = $composer_17;
      var tmp53__anonymous__dkigm5 = 14 & tmp47_ReusableComposeNode$composable >> 9;
      var $composer_18 = tmp52__anonymous__8pttem;
      sourceInformationMarkerStart($composer_18, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>' call
      var tmp58__anonymous__x76dbc = BoxScopeInstance_getInstance();
      var tmp59__anonymous__schq3t = $composer_18;
      var tmp60__anonymous__7dgeip = 6;
      var $composer_19 = tmp59__anonymous__schq3t;
      content($composer_19, 14 & $dirty >> 12);
      sourceInformationMarkerEnd($composer_18);
      $composer_17.u1c();
      $composer_17.i1p();
      $composer_13.u1c();
      $composer_12.u1c();
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
      tmp0_safe_receiver.y1t(DraggableCard$composable$lambda_17(layoutSize, offsetY, scale_0, onSwiped, content, $changed));
    }
  }
  var Mode_IDLE_instance;
  var Mode_DRAG_instance;
  var Mode_UP_instance;
  var Mode_DOWN_instance;
  var Mode_entriesInitialized;
  function Mode_initEntries() {
    if (Mode_entriesInitialized)
      return Unit_getInstance();
    Mode_entriesInitialized = true;
    Mode_IDLE_instance = new Mode('IDLE', 0);
    Mode_DRAG_instance = new Mode('DRAG', 1);
    Mode_UP_instance = new Mode('UP', 2);
    Mode_DOWN_instance = new Mode('DOWN', 3);
  }
  function Mode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CardsContent$composable$lambda($stack$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('stack', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $stack$delegate.b2();
    return tmp$ret$0;
  }
  function DraggableCards$composable$lambda($lastItems$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('lastItems', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $lastItems$delegate.b2();
    return tmp$ret$0;
  }
  function DraggableCards$composable$lambda_0($lastItems$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('lastItems', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $lastItems$delegate.kk(value);
  }
  function DraggableCards$composable$lambda_1($layoutSize$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('layoutSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $layoutSize$delegate.b2().v2m_1;
    return tmp$ret$0;
  }
  function DraggableCards$composable$lambda_2($layoutSize$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('layoutSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $layoutSize$delegate.kk(new IntSize(value));
  }
  function DraggableCard$composable$lambda($cardPosition$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('cardPosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $cardPosition$delegate.b2().p2j_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_0($cardPosition$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('cardPosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $cardPosition$delegate.kk(new Offset(value));
  }
  function DraggableCard$composable$lambda_1($cardSize$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('cardSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $cardSize$delegate.b2().v2m_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_2($cardSize$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('cardSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $cardSize$delegate.kk(new IntSize(value));
  }
  function DraggableCard$composable$lambda_3($mode$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('mode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $mode$delegate.b2();
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_4($mode$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('mode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mode$delegate.kk(value);
  }
  function DraggableCard$composable$lambda_5($startTouchPosition$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('startTouchPosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $startTouchPosition$delegate.b2().p2j_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_6($startTouchPosition$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('startTouchPosition', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $startTouchPosition$delegate.kk(new Offset(value));
  }
  function DraggableCard$composable$lambda_7($dragTotalOffset$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dragTotalOffset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dragTotalOffset$delegate.b2().p2j_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_8($dragTotalOffset$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('dragTotalOffset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $dragTotalOffset$delegate.kk(new Offset(value));
  }
  function DraggableCard$composable$lambda_9($dragLastOffset$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dragLastOffset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dragLastOffset$delegate.b2().p2j_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_10($dragLastOffset$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('dragLastOffset', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $dragLastOffset$delegate.kk(new Offset(value));
  }
  function DraggableCard$composable$lambda_11($animatedOffset$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animatedOffset', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animatedOffset$delegate.b2().p2j_1;
    return tmp$ret$0;
  }
  function DraggableCard$composable$lambda_12($animatedScale$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animatedScale', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animatedScale$delegate.b2();
    return tmp$ret$0;
  }
  function CardsComponent$onRemoveClicked$ref($boundThis) {
    var l = function () {
      $boundThis.tag();
      return Unit_getInstance();
    };
    l.callableName = 'onRemoveClicked';
    return l;
  }
  function CardsComponent$onAddClicked$ref($boundThis) {
    var l = function () {
      $boundThis.sag();
      return Unit_getInstance();
    };
    l.callableName = 'onAddClicked';
    return l;
  }
  function CardsComponent$onCardSwiped$ref($boundThis) {
    var l = function (p0) {
      $boundThis.rag(p0);
      return Unit_getInstance();
    };
    l.callableName = 'onCardSwiped';
    return l;
  }
  function CardsContent$composable$lambda_0($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CardsContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function DraggableCards$composable$lambda_3($items, $lastItems$delegate) {
    return function ($this$DisposableEffect) {
      DraggableCards$composable$lambda_0($lastItems$delegate, diff(DraggableCards$composable$lambda($lastItems$delegate), $items));
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv();
      return tmp$ret$0;
    };
  }
  function DraggableCards$composable$lambda_4($layoutSize$delegate) {
    return function (it) {
      DraggableCards$composable$lambda_2($layoutSize$delegate, it.w5d());
      return Unit_getInstance();
    };
  }
  function DraggableCards$composable$lambda_5($onSwiped, $tmp1__anonymous__6ijp4k) {
    return function () {
      $onSwiped($tmp1__anonymous__6ijp4k);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($configuration, $lastItems$delegate) {
    this.cb2_1 = $configuration;
    this.db2_1 = $lastItems$delegate;
  }
  protoOf(_no_name_provided__qut3iv_0).wp = function () {
    // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterNot' call
    var tmp1_filterNot = DraggableCards$composable$lambda(this.db2_1);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterNotTo' call
    var tmp0_filterNotTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filterNot.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = equals(element.zb1_1, this.cb2_1);
      if (!tmp$ret$0) {
        tmp0_filterNotTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterNotTo;
    tmp$ret$2 = tmp$ret$1;
    DraggableCards$composable$lambda_0(this.db2_1, tmp$ret$2);
  };
  function DraggableCards$composable$lambda$lambda$lambda($configuration, $lastItems$delegate) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($configuration, $lastItems$delegate);
      return tmp$ret$0;
    };
  }
  function DraggableCards$composable$lambda$lambda($instance, $lastItems$delegate, $configuration) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(510901393, $changed, -1, 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (CardsContent.kt:134)');
        }
        CardContent$composable($instance, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = !!($composer_1.x1h($lastItems$delegate) | $composer_1.x1h($configuration));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = DraggableCards$composable$lambda$lambda$lambda($configuration, $lastItems$delegate);
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
        DisposableEffect$composable(Unit_getInstance(), tmp$ret$4, $composer_0, 6);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function DraggableCards$composable$lambda_6($transitionState, $instance, $lastItems$delegate, $configuration) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1078570903, $changed, -1, 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (CardsContent.kt:129)');
        }
        var tmp_0 = fadeIn().i7s(scaleIn());
        var tmp_1 = fadeOut().k7s(scaleOut());
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 510901393, true, DraggableCards$composable$lambda$lambda($instance, $lastItems$delegate, $configuration));
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
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.cards.DraggableCards$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
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
        AnimatedVisibility$composable($transitionState, null, tmp_0, tmp_1, null, tmp$ret$6, $composer_0, 200064, 18);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function DraggableCards$composable$lambda_7($items, $onSwiped, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      DraggableCards$composable($items, $onSwiped, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_1() {
  }
  protoOf(_no_name_provided__qut3iv_1).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.cards.DraggableCard$composable.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function DraggableCard$composable$lambda_13($maxOffsetY, $onSwiped, $offsetY, $mode$delegate, $animatedOffset$delegate) {
    return function ($this$DisposableEffect) {
      var tmp;
      if (DraggableCard$composable$lambda_3($mode$delegate).equals(Mode_UP_getInstance()) ? _Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda_11($animatedOffset$delegate)) === $maxOffsetY : false) {
        $onSwiped();
        DraggableCard$composable$lambda_4($mode$delegate, Mode_DOWN_getInstance());
        tmp = Unit_getInstance();
      } else if (DraggableCard$composable$lambda_3($mode$delegate).equals(Mode_DOWN_getInstance()) ? _Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda_11($animatedOffset$delegate)) === $offsetY : false) {
        DraggableCard$composable$lambda_4($mode$delegate, Mode_IDLE_getInstance());
        tmp = Unit_getInstance();
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1();
      return tmp$ret$0;
    };
  }
  function DraggableCard$composable$lambda_14($cardPosition$delegate, $cardSize$delegate) {
    return function (it) {
      DraggableCard$composable$lambda_0($cardPosition$delegate, positionInParent(it));
      DraggableCard$composable$lambda_2($cardSize$delegate, it.w5d());
      return Unit_getInstance();
    };
  }
  function DraggableCard$composable$lambda_15($animatedOffset$delegate) {
    return function ($this$offset) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.round' call
      var tmp2_round = DraggableCard$composable$lambda_11($animatedOffset$delegate);
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Offset___get_x__impl__xvi35n(tmp2_round);
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Offset___get_y__impl__8bzhra(tmp2_round);
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      tmp$ret$2 = IntOffset(tmp, tmp$ret$1);
      return new IntOffset_0(tmp$ret$2);
    };
  }
  function DraggableCard$composable$slambda$lambda($startTouchPosition$delegate, $dragTotalOffset$delegate, $mode$delegate) {
    return function (position) {
      DraggableCard$composable$lambda_6($startTouchPosition$delegate, position.p2j_1);
      DraggableCard$composable$lambda_8($dragTotalOffset$delegate, Companion_getInstance_7().m2j_1);
      DraggableCard$composable$lambda_4($mode$delegate, Mode_DRAG_getInstance());
      return Unit_getInstance();
    };
  }
  function DraggableCard$composable$slambda$lambda_0($dragDistanceThreshold, $dragLastOffset$delegate, $mode$delegate) {
    return function () {
      DraggableCard$composable$lambda_4($mode$delegate, Offset__getDistance_impl_pclvxn(DraggableCard$composable$lambda_9($dragLastOffset$delegate)) > $dragDistanceThreshold ? Mode_UP_getInstance() : Mode_DOWN_getInstance());
      return Unit_getInstance();
    };
  }
  function DraggableCard$composable$slambda$lambda_1($dragTotalOffset$delegate, $dragLastOffset$delegate) {
    return function (change, dragAmount) {
      change.a5f();
      DraggableCard$composable$lambda_8($dragTotalOffset$delegate, Offset__plus_impl_c78cg0(DraggableCard$composable$lambda_7($dragTotalOffset$delegate), dragAmount.p2j_1));
      DraggableCard$composable$lambda_10($dragLastOffset$delegate, dragAmount.p2j_1);
      return Unit_getInstance();
    };
  }
  function DraggableCard$composable$slambda($startTouchPosition$delegate, $dragTotalOffset$delegate, $mode$delegate, $dragDistanceThreshold, $dragLastOffset$delegate, resultContinuation) {
    this.mb2_1 = $startTouchPosition$delegate;
    this.nb2_1 = $dragTotalOffset$delegate;
    this.ob2_1 = $mode$delegate;
    this.pb2_1 = $dragDistanceThreshold;
    this.qb2_1 = $dragLastOffset$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DraggableCard$composable$slambda).x5g = function ($this$pointerInput, $completion) {
    var tmp = this.y5g($this$pointerInput, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(DraggableCard$composable$slambda).eg = function (p1, $completion) {
    return this.x5g((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DraggableCard$composable$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp_0 = DraggableCard$composable$slambda$lambda(this.mb2_1, this.nb2_1, this.ob2_1);
            var tmp_1 = DraggableCard$composable$slambda$lambda_0(this.pb2_1, this.qb2_1, this.ob2_1);
            suspendResult = detectDragGestures(this.rb2_1, tmp_0, tmp_1, VOID, DraggableCard$composable$slambda$lambda_1(this.nb2_1, this.qb2_1), this);
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
  protoOf(DraggableCard$composable$slambda).y5g = function ($this$pointerInput, completion) {
    var i = new DraggableCard$composable$slambda(this.mb2_1, this.nb2_1, this.ob2_1, this.pb2_1, this.qb2_1, completion);
    i.rb2_1 = $this$pointerInput;
    return i;
  };
  function DraggableCard$composable$slambda_0($startTouchPosition$delegate, $dragTotalOffset$delegate, $mode$delegate, $dragDistanceThreshold, $dragLastOffset$delegate, resultContinuation) {
    var i = new DraggableCard$composable$slambda($startTouchPosition$delegate, $dragTotalOffset$delegate, $mode$delegate, $dragDistanceThreshold, $dragLastOffset$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x5g($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DraggableCard$composable$lambda_16($offsetY, $maxOffsetY, $mode$delegate, $startTouchPosition$delegate, $animatedOffset$delegate) {
    return function ($this$graphicsLayer) {
      var tmp;
      if (DraggableCard$composable$lambda_3($mode$delegate).equals(Mode_IDLE_getInstance())) {
        return Unit_getInstance();
      }
      $this$graphicsLayer.m4x(TransformOrigin(_Offset___get_x__impl__xvi35n(DraggableCard$composable$lambda_5($startTouchPosition$delegate)) / _Size___get_width__impl__58y75t($this$graphicsLayer.z2j()), _Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda_5($startTouchPosition$delegate)) / _Size___get_height__impl__a04p02($this$graphicsLayer.z2j())));
      var verticalFactor = (_Offset___get_y__impl__8bzhra(DraggableCard$composable$lambda_11($animatedOffset$delegate)) - $offsetY) / ($maxOffsetY - $offsetY);
      var horizontalFactor = _TransformOrigin___get_pivotFractionX__impl__a9pmci($this$graphicsLayer.p4y()) * 2.0 - 1.0;
      $this$graphicsLayer.k4x(verticalFactor * horizontalFactor * -30.0);
      return Unit_getInstance();
    };
  }
  function DraggableCard$composable$lambda_17($layoutSize, $offsetY, $scale, $onSwiped, $content, $$changed) {
    return function ($composer, $force) {
      DraggableCard$composable($layoutSize, $offsetY, $scale, $onSwiped, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Mode_IDLE_getInstance() {
    Mode_initEntries();
    return Mode_IDLE_instance;
  }
  function Mode_DRAG_getInstance() {
    Mode_initEntries();
    return Mode_DRAG_instance;
  }
  function Mode_UP_getInstance() {
    Mode_initEntries();
    return Mode_UP_instance;
  }
  function Mode_DOWN_getInstance() {
    Mode_initEntries();
    return Mode_DOWN_instance;
  }
  function configuration$factory() {
    return getPropertyCallableRef('configuration', 1, KProperty1, function (receiver) {
      return receiver.di_1;
    }, null);
  }
  function configuration$factory_0() {
    return getPropertyCallableRef('configuration', 1, KProperty1, function (receiver) {
      return receiver.zb1_1;
    }, null);
  }
  function transitionState$factory() {
    return getPropertyCallableRef('transitionState', 1, KProperty1, function (receiver) {
      return receiver.bb2_1;
    }, null);
  }
  function CardContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1559387814);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1559387814, $changed, -1, 'com.arkivanov.sample.shared.cards.card.CardContent$composable (CardContent.kt:28)');
      }
      var tmp = component.lah();
      var model$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp_0 = modifier_0._v;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      var tmp_1 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(16);
      var tmp_2 = background(shadow(tmp_0, tmp_1, RoundedCornerShape(tmp$ret$1), true), Color(CardContent$composable$lambda(model$delegate).uag_1));
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
      var tmp16_Column$composable = padding(tmp_2, tmp$ret$2);
      var tmp_3 = Arrangement_getInstance();
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(16);
      var tmp17_Column$composable = tmp_3.l7n(tmp$ret$3, Companion_getInstance_3().p4g_1);
      var tmp18_Column$composable = null;
      var tmp19_Column$composable = $composer_0;
      var modifier_1 = tmp16_Column$composable;
      var verticalArrangement = tmp17_Column$composable;
      var horizontalAlignment = tmp18_Column$composable;
      var $composer_1 = tmp19_Column$composable;
      $composer_1.s1c(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(0 === 0))
        verticalArrangement = Arrangement_getInstance().t7m_1;
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_3().r4g_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 0;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$4 = tmp0;
      var density = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$5 = tmp0_0;
      var layoutDirection = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$6 = tmp0_1;
      var viewConfiguration = tmp$ret$6;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp_4 = $composer_6.t1o();
      if (!isInterface(tmp_4, Applier)) {
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.cards.card.CardContent$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = ColumnScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      Title$composable(CardContent$composable$lambda(model$delegate).vag_1, $composer_8, 0);
      Row$composable(CardContent$composable$lambda(model$delegate).wag_1, $composer_8, 0, 0);
      Row$composable(CardContent$composable$lambda(model$delegate).xag_1, $composer_8, 0, 0);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(CardContent$composable$lambda_0(component, modifier_0, $changed, $default));
    }
  }
  function Title$composable(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(837197844);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(text) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(837197844, $dirty, -1, 'com.arkivanov.sample.shared.cards.card.Title$composable (CardContent.kt:57)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp = Companion_getInstance_2();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(32);
      var tmp16_Box$composable = background(size(tmp, tmp$ret$0), Color__copy$default_impl_ectz3s(Companion_getInstance().f39_1, 0.5));
      var tmp17_Box$composable = Companion_getInstance_3().j4g_1;
      var tmp18_Box$composable = false;
      var tmp19_Box$composable = $composer_0;
      var modifier = tmp16_Box$composable;
      var contentAlignment = tmp17_Box$composable;
      var propagateMinConstraints = tmp18_Box$composable;
      var $composer_1 = tmp19_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_2();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 0;
      var modifier_0 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0;
      var density = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_0;
      var layoutDirection = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$3 = tmp0_1;
      var viewConfiguration = tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.cards.card.Title$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(text, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, MaterialTheme_getInstance().xav($composer_8, 6).pav_1, $composer_8, 14 & $dirty, 0, 65534);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(Title$composable$lambda(text, $changed));
    }
  }
  function Row$composable(text, $composer, $changed, $default) {
    var text_0 = {_v: text};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-121376083);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(text_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k1o()) {
      if (!(($default & 1) === 0)) {
        text_0._v = '';
      }
      if (isTraceInProgress()) {
        traceEventStart(-121376083, $dirty, -1, 'com.arkivanov.sample.shared.cards.card.Row$composable (CardContent.kt:45)');
      }
      var tmp = text_0._v;
      var tmp_0 = background(fillMaxWidth(Companion_getInstance_2()), Color__copy$default_impl_ectz3s(Companion_getInstance().f39_1, 0.5));
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      var tmp_1 = padding(tmp_0, tmp$ret$0);
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp, tmp_1, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, MaterialTheme_getInstance().xav($composer_0, 6).uav_1, $composer_0, 14 & $dirty, 0, 65532);
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
      tmp0_safe_receiver.y1t(Row$composable$lambda(text_0, $changed, $default));
    }
  }
  function CardContent$composable$lambda($model$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('model', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $model$delegate.b2();
    return tmp$ret$0;
  }
  function CardContent$composable$lambda_0($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CardContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Title$composable$lambda($text, $$changed) {
    return function ($composer, $force) {
      Title$composable($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Row$composable$lambda($text, $$changed, $$default) {
    return function ($composer, $force) {
      Row$composable($text._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CountersContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1073955961);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1073955961, $dirty, -1, 'com.arkivanov.sample.shared.counters.CountersContent$composable (CountersContent.kt:21)');
      }
      Children$composable(component.rah(), modifier_0._v, stackAnimation(plus_0(fade(), scale_0())), ComposableSingletons$CountersContentKt_getInstance().sb2_1, $composer_0, 3072 | 112 & $dirty, 0);
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
      tmp0_safe_receiver.y1t(CountersContent$composable$lambda(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CountersContentKt$lambda_1$lambda_hqm55k(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1919001622, $changed, -1, 'com.arkivanov.sample.shared.counters.ComposableSingletons$CountersContentKt.lambda-1.<anonymous> (CountersContent.kt:34)');
      }
      CounterContent$composable(it.ei_1, background(fillMaxSize(Companion_getInstance_2()), MaterialTheme_getInstance().cav($composer_0, 6).o42()), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CountersContentKt() {
    ComposableSingletons$CountersContentKt_instance = this;
    var tmp = this;
    tmp.sb2_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1919001622, false, ComposableSingletons$CountersContentKt$lambda_1$lambda_hqm55k));
  }
  var ComposableSingletons$CountersContentKt_instance;
  function ComposableSingletons$CountersContentKt_getInstance() {
    if (ComposableSingletons$CountersContentKt_instance == null)
      new ComposableSingletons$CountersContentKt();
    return ComposableSingletons$CountersContentKt_instance;
  }
  function CountersContent$composable$lambda($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CountersContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CounterContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1592408112);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1592408112, $dirty, -1, 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable (CounterContent.kt:28)');
      }
      var tmp = component.lah();
      var model$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp16_Column$composable = modifier_0._v;
      var tmp17_Column$composable = null;
      var tmp18_Column$composable = Companion_getInstance_3().s4g_1;
      var tmp19_Column$composable = $composer_0;
      var tmp20_Column$composable = 384 | 14 & $dirty >> 3;
      var modifier_1 = tmp16_Column$composable;
      var verticalArrangement = tmp17_Column$composable;
      var horizontalAlignment = tmp18_Column$composable;
      var $composer_1 = tmp19_Column$composable;
      $composer_1.s1c(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().t7m_1;
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_3().r4g_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & tmp20_Column$composable >> 3 | 112 & tmp20_Column$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp20_Column$composable << 3;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>' call
      var tmp21__anonymous__l7ugec = ColumnScopeInstance_getInstance();
      var tmp22__anonymous__gd5t6t = $composer_7;
      var tmp23__anonymous__bih5za = 6 | 112 & tmp20_Column$composable >> 6;
      var $composer_8 = tmp22__anonymous__gd5t6t;
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_8;
      var dispatchReceiver = composableLambda(tmp_1, 554242264, true, CounterContent$composable$lambda_1(model$delegate));
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_8;
      var $composer_9 = tmp3_remember$composable;
      $composer_9.s1c(-838505973);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_9;
      var tmp2_cache = $composer_9.x1h(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$3;
        // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.p1q(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$4 = tmp_2;
      tmp$ret$5 = tmp$ret$4;
      var tmp_3 = tmp$ret$5;
      tmp$ret$6 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_2 = tmp$ret$6;
      $composer_9.u1c();
      tmp$ret$7 = tmp0_2;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      var tmp_4 = tmp$ret$9;
      var tmp$ret$11;
      // Inline function 'kotlin.takeIf' call
      var tmp0_takeIf = CounterContent$composable$lambda(model$delegate).uah_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp_5;
      var tmp$ret$10;
      // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>' call
      var tmp0_return = tmp0_takeIf;
      tmp$ret$10 = tmp0_return;
      if (tmp$ret$10) {
        tmp_5 = tmp0_takeIf;
      } else {
        tmp_5 = null;
      }
      tmp$ret$11 = tmp_5;
      var tmp0_safe_receiver = tmp$ret$11;
      var tmp_6;
      if (tmp0_safe_receiver == null) {
        tmp_6 = null;
      } else {
        var tmp$ret$20;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$19;
        // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>' call
        var tmp$ret$18;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$17;
        // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_8;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1130064075, true, CounterContent$composable$lambda_2(component));
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_8;
        var $composer_10 = tmp3_remember$composable_0;
        $composer_10.s1c(-838505973);
        sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_10;
        var tmp2_cache_0 = $composer_10.x1h(dispatchReceiver_0);
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$12;
          // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = ComposableLambda$invoke$ref_9(dispatchReceiver_0);
          var value_0 = tmp$ret$12;
          tmp1_cache_0.p1q(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = tmp0_let_0;
        }
        tmp$ret$13 = tmp_8;
        tmp$ret$14 = tmp$ret$13;
        var tmp_9 = tmp$ret$14;
        tmp$ret$15 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_3 = tmp$ret$15;
        $composer_10.u1c();
        tmp$ret$16 = tmp0_3;
        tmp$ret$17 = tmp$ret$16;
        tmp$ret$18 = tmp$ret$17;
        var tmp0_return_0 = tmp$ret$18;
        tmp$ret$19 = tmp0_return_0;
        tmp$ret$20 = tmp$ret$19;
        tmp_6 = tmp$ret$20;
      }
      var tmp_10 = tmp_6;
      var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      TopAppBar$composable(tmp_4, null, tmp_10, null, tmp_11, tmp_12, _Dp___init__impl__ms3zkb(0.0), $composer_8, 6, 122);
      Spacer$composable(tmp21__anonymous__l7ugec.g7o(Companion_getInstance_2(), 1.0), $composer_8, 0);
      var tmp_13 = CounterContent$composable$lambda(model$delegate).tah_1;
      var tmp_14 = testTag(Companion_getInstance_2(), 'text');
      var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_19 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_13, tmp_14, tmp_15, tmp_16, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, 0, null, null, $composer_8, 48, 0, 131068);
      var tmp_20 = Companion_getInstance_2();
      var tmp$ret$21;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$21 = _Dp___init__impl__ms3zkb(8);
      Spacer$composable(height(tmp_20, tmp$ret$21), $composer_8, 6);
      var tmp_21 = CounterComponent$onInfoClicked$ref(component);
      Button$composable(tmp_21, null, false, null, null, null, null, null, null, ComposableSingletons$CounterContentKt_getInstance().ub2_1, $composer_8, 805306368, 510);
      var tmp_22 = CounterComponent$onNextClicked$ref(component);
      var tmp_23 = testTag(Companion_getInstance_2(), 'next');
      Button$composable(tmp_22, tmp_23, false, null, null, null, null, null, null, ComposableSingletons$CounterContentKt_getInstance().vb2_1, $composer_8, 805306416, 508);
      var tmp_24 = CounterComponent$onPrevClicked$ref_0(component);
      var tmp_25 = testTag(Companion_getInstance_2(), 'prev');
      var tmp_26 = CounterContent$composable$lambda(model$delegate).uah_1;
      Button$composable(tmp_24, tmp_25, tmp_26, null, null, null, null, null, null, ComposableSingletons$CounterContentKt_getInstance().wb2_1, $composer_8, 805306416, 504);
      Spacer$composable(tmp21__anonymous__l7ugec.g7o(Companion_getInstance_2(), 1.0), $composer_8, 0);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
      $composer_1.u1c();
      var tmp_27 = component.lai();
      var dialogSlot$delegate = subscribeAsState$composable(tmp_27, null, $composer_0, 0, 1);
      var tmp0_safe_receiver_0 = CounterContent$composable$lambda_0(dialogSlot$delegate).hl_1;
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ei_1;
      var tmp_28;
      if (tmp1_safe_receiver == null) {
        tmp_28 = null;
      } else {
        var tmp$ret$22;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>' call
        DialogContent$composable(tmp1_safe_receiver, $composer_0, 0);
        tmp$ret$22 = tmp1_safe_receiver;
        var tmp0_group = tmp$ret$22;
        tmp_28 = tmp0_group;
      }
      var tmp1_group = tmp_28;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp2_safe_receiver = $composer_0.b1q();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.y1t(CounterContent$composable$lambda_3(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$CounterContentKt$lambda_1$lambda_b2s4nj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1686372049, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.ComposableSingletons$CounterContentKt.lambda-1.<anonymous> (CounterContent.kt:44)');
      }
      var tmp = get_ArrowBack(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Back button', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CounterContentKt$lambda_2$lambda_hquceo($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(996250124, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.ComposableSingletons$CounterContentKt.lambda-2.<anonymous> (CounterContent.kt:63)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Info', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CounterContentKt$lambda_3$lambda_ogn8i9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1386992317, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.ComposableSingletons$CounterContentKt.lambda-3.<anonymous> (CounterContent.kt:70)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Next', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CounterContentKt$lambda_4$lambda_4cz8jy($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1377221756, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.ComposableSingletons$CounterContentKt.lambda-4.<anonymous> (CounterContent.kt:78)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Prev', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CounterContentKt() {
    ComposableSingletons$CounterContentKt_instance = this;
    var tmp = this;
    tmp.tb2_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(1686372049, false, ComposableSingletons$CounterContentKt$lambda_1$lambda_b2s4nj));
    var tmp_0 = this;
    tmp_0.ub2_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(996250124, false, ComposableSingletons$CounterContentKt$lambda_2$lambda_hquceo));
    var tmp_1 = this;
    tmp_1.vb2_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1386992317, false, ComposableSingletons$CounterContentKt$lambda_3$lambda_ogn8i9));
    var tmp_2 = this;
    tmp_2.wb2_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1377221756, false, ComposableSingletons$CounterContentKt$lambda_4$lambda_4cz8jy));
  }
  var ComposableSingletons$CounterContentKt_instance;
  function ComposableSingletons$CounterContentKt_getInstance() {
    if (ComposableSingletons$CounterContentKt_instance == null)
      new ComposableSingletons$CounterContentKt();
    return ComposableSingletons$CounterContentKt_instance;
  }
  function CounterContent$composable$lambda($model$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('model', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $model$delegate.b2();
    return tmp$ret$0;
  }
  function CounterContent$composable$lambda_0($dialogSlot$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dialogSlot', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dialogSlot$delegate.b2();
    return tmp$ret$0;
  }
  function CounterContent$composable$lambda_1($model$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(554242264, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous> (CounterContent.kt:36)');
        }
        var tmp_0 = CounterContent$composable$lambda($model$delegate).sah_1;
        var tmp_1 = testTag(Companion_getInstance_2(), 'title');
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, tmp_1, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, null, $composer_0, 48, 0, 131068);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function CounterComponent$onPrevClicked$ref($boundThis) {
    var l = function () {
      $boundThis.oai();
      return Unit_getInstance();
    };
    l.callableName = 'onPrevClicked';
    return l;
  }
  function CounterContent$composable$lambda_2($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1130064075, $changed, -1, 'com.arkivanov.sample.shared.counters.counter.CounterContent$composable.<anonymous>.<anonymous>.<anonymous> (CounterContent.kt:43)');
        }
        var tmp_0 = CounterComponent$onPrevClicked$ref($component);
        IconButton$composable(tmp_0, null, false, null, ComposableSingletons$CounterContentKt_getInstance().tb2_1, $composer_0, 24576, 14);
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
  function CounterComponent$onInfoClicked$ref($boundThis) {
    var l = function () {
      $boundThis.mai();
      return Unit_getInstance();
    };
    l.callableName = 'onInfoClicked';
    return l;
  }
  function CounterComponent$onNextClicked$ref($boundThis) {
    var l = function () {
      $boundThis.nai();
      return Unit_getInstance();
    };
    l.callableName = 'onNextClicked';
    return l;
  }
  function CounterComponent$onPrevClicked$ref_0($boundThis) {
    var l = function () {
      $boundThis.oai();
      return Unit_getInstance();
    };
    l.callableName = 'onPrevClicked';
    return l;
  }
  function CounterContent$composable$lambda_3($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CounterContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CustomNavigationContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1450011513);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1450011513, $dirty, -1, 'com.arkivanov.sample.shared.customnavigation.CustomNavigationContent$composable (CustomNavigationContent.kt:44)');
      }
      var tmp = component.jk();
      var children$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = clipToBounds(modifier_0._v);
      var tmp17_Box$composable = null;
      var tmp18_Box$composable = false;
      var tmp19_Box$composable = $composer_0;
      var modifier_1 = tmp16_Box$composable;
      var contentAlignment = tmp17_Box$composable;
      var propagateMinConstraints = tmp18_Box$composable;
      var $composer_1 = tmp19_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 0;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.customnavigation.CustomNavigationContent$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      ChildItems$composable(CustomNavigationContent$composable$lambda(children$delegate), fillMaxSize(Companion_getInstance_2()), $composer_8, 48);
      Buttons$composable(component, CustomNavigationContent$composable$lambda(children$delegate).rai_1, tmp20__anonymous__q2j3lv.w7n(Companion_getInstance_2(), Companion_getInstance_3().m4g_1), $composer_8, 14 & $dirty);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(CustomNavigationContent$composable$lambda_0(component, modifier_0, $changed, $default));
    }
  }
  function ChildItems$composable(children, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(233486691);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(children) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(233486691, $dirty, -1, 'com.arkivanov.sample.shared.customnavigation.ChildItems$composable (CustomNavigationContent.kt:103)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.ChildItems$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1944832170, true, ChildItems$composable$lambda(children));
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.customnavigation.ChildItems$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
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
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      BoxWithConstraints$composable(modifier, null, false, tmp$ret$6, $composer_0, 3072 | 14 & $dirty >> 3, 6);
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
      tmp0_safe_receiver.y1t(ChildItems$composable$lambda_0(children, modifier, $changed));
    }
  }
  function Buttons$composable(component, mode, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-323400112);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(mode) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-323400112, $dirty, -1, 'com.arkivanov.sample.shared.customnavigation.Buttons$composable (CustomNavigationContent.kt:65)');
      }
      // Inline function 'androidx.compose.foundation.layout.Row$composable' call
      var tmp = Arrangement_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      var tmp16_Row$composable = tmp.k7n(tmp$ret$0, Companion_getInstance_3().s4g_1);
      var tmp17_Row$composable = null;
      var tmp18_Row$composable = $composer_0;
      var tmp19_Row$composable = 48 | 14 & $dirty >> 6;
      var modifier_0 = modifier;
      var horizontalArrangement = tmp16_Row$composable;
      var verticalAlignment = tmp17_Row$composable;
      var $composer_1 = tmp18_Row$composable;
      $composer_1.s1c(-636825856);
      sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      if (!(0 === 0))
        horizontalArrangement = Arrangement_getInstance().r7m_1;
      if (!(4 === 0))
        verticalAlignment = Companion_getInstance_3().o4g_1;
      var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp19_Row$composable >> 3 | 112 & tmp19_Row$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp19_Row$composable << 3;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.w1p(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$1 = tmp0;
      var density = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.w1p(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$2 = tmp0_0;
      var layoutDirection = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.w1p(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$3 = tmp0_1;
      var viewConfiguration = tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.customnavigation.Buttons$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = RowScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6 | 112 & tmp19_Row$composable >> 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      var tmp0_subject = mode;
      var tmp0_2 = tmp0_subject.k6_1;
      switch (tmp0_2) {
        case 0:
          $composer_8.s1c(-1454548185);
          var tmp_1 = CustomNavigationComponent$onSwitchToPagerClicked$ref(component);
          Button$composable(tmp_1, null, false, null, null, null, null, null, null, ComposableSingletons$CustomNavigationContentKt_getInstance().xb2_1, $composer_8, 805306368, 510);
          $composer_8.u1c();
          ;
          break;
        case 1:
          $composer_8.s1c(-1454548029);
          var tmp_2 = CustomNavigationComponent$onSwitchToCarouselClicked$ref(component);
          Button$composable(tmp_2, null, false, null, null, null, null, null, null, ComposableSingletons$CustomNavigationContentKt_getInstance().yb2_1, $composer_8, 805306368, 510);
          $composer_8.u1c();
          ;
          break;
        default:
          $composer_8.s1c(-1454547901);
          $composer_8.u1c();
          break;
      }
      var tmp_3 = CustomNavigationComponent$onBackwardClicked$ref(component);
      Button$composable(tmp_3, null, false, null, null, null, null, null, null, ComposableSingletons$CustomNavigationContentKt_getInstance().zb2_1, $composer_8, 805306368, 510);
      var tmp_4 = CustomNavigationComponent$onForwardClicked$ref(component);
      Button$composable(tmp_4, null, false, null, null, null, null, null, null, ComposableSingletons$CustomNavigationContentKt_getInstance().ab3_1, $composer_8, 805306368, 510);
      $composer_8.s1c(-47051534);
      if (mode.equals(Mode_CAROUSEL_getInstance())) {
        var tmp_5 = CustomNavigationComponent$onShuffleClicked$ref(component);
        Button$composable(tmp_5, null, false, null, null, null, null, null, null, ComposableSingletons$CustomNavigationContentKt_getInstance().bb3_1, $composer_8, 805306368, 510);
      }
      $composer_8.u1c();
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(Buttons$composable$lambda(component, mode, modifier, $changed));
    }
  }
  function getChildModifier$composable(activeIndex, childIndex, childCount, mode, constraints, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1459975129);
    if (isTraceInProgress()) {
      traceEventStart(-1459975129, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.getChildModifier$composable (CustomNavigationContent.kt:140)');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp1_min = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var constraintSize = tmp$ret$0;
    var centerIndex = childCount / 2 | 0;
    var tileSize = constraintSize / (childIndex === activeIndex ? 5.0 : 6.0);
    var virtualIndex = activeIndex < centerIndex ? ((childIndex + centerIndex | 0) - activeIndex | 0) % childCount | 0 : activeIndex > centerIndex ? ((childIndex - (activeIndex - centerIndex | 0) | 0) + childCount | 0) % childCount | 0 : childIndex;
    var tmp0_subject = mode;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        var angleDegrees = _Degrees___init__impl__63jcia((childIndex - activeIndex | 0) * 360.0 / childCount);
        var point = minus(plus_1(times(rotate(_Vector___init__impl__y7x4qq_0(0.0, -1.0), toRadians(angleDegrees)), constraintSize / 3.0), _Vector___init__impl__y7x4qq_0(_Constraints___get_maxWidth__impl__uuyqc(constraints) / 2.0, _Constraints___get_maxHeight__impl__dt3e8z(constraints) / 2.0)), _Vector___init__impl__y7x4qq_0(tileSize / 2.0, tileSize / 2.0));
        tmp = IntOffset(numberToInt(_Vector___get_x__impl__nxyc6t(point)), numberToInt(_Vector___get_y__impl__4vo4ve(point)));
        break;
      case 1:
        tmp = virtualIndex < centerIndex ? IntOffset(-_Constraints___get_maxWidth__impl__uuyqc(constraints) | 0, 0) : virtualIndex > centerIndex ? IntOffset(_Constraints___get_maxWidth__impl__uuyqc(constraints), 0) : IntOffset(0, 0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var targetOffset = tmp;
    var offset$delegate = animateIntOffsetAsState$composable(targetOffset, null, null, null, $composer_0, 0, 14);
    var tmp1_subject = mode;
    var tmp0_0 = tmp1_subject.k6_1;
    var tmp_0;
    switch (tmp0_0) {
      case 0:
        $composer_0.s1c(445863790);
        var tmp1_group = DpSize(toDp$composable(tileSize, $composer_0, 0), toDp$composable(tileSize, $composer_0, 0));
        $composer_0.u1c();
        tmp_0 = tmp1_group;
        break;
      case 1:
        $composer_0.s1c(445863874);
        var tmp2_group = DpSize(toDp$composable_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), $composer_0, 0), toDp$composable_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), $composer_0, 0));
        $composer_0.u1c();
        tmp_0 = tmp2_group;
        break;
      default:
        $composer_0.s1c(445857295);
        $composer_0.u1c();
        noWhenBranchMatchedException();
        break;
    }
    var targetSize = tmp_0;
    var tmp_1 = _DpSize___get_width__impl__o3d5gt(targetSize);
    var widthDp$delegate = animateDpAsState$composable(tmp_1, null, null, null, $composer_0, 0, 14);
    var tmp_2 = _DpSize___get_height__impl__5xueo2(targetSize);
    var heightDp$delegate = animateDpAsState$composable(tmp_2, null, null, null, $composer_0, 0, 14);
    var tmp2_subject = mode;
    var tmp0_1 = tmp2_subject.k6_1;
    var tmp_3;
    switch (tmp0_1) {
      case 0:
        tmp_3 = 1.0;
        break;
      case 1:
        var tmp_4;
        if (virtualIndex >= (centerIndex - 1 | 0) ? virtualIndex <= (centerIndex + 1 | 0) : false) {
          tmp_4 = 1.0;
        } else {
          tmp_4 = 0.0;
        }

        tmp_3 = tmp_4;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var targetAlpha = tmp_3;
    var alpha$delegate = animateFloatAsState$composable(targetAlpha, null, 0.0, null, null, $composer_0, 0, 30);
    var tmp_5 = size_0(Companion_getInstance_2(), getChildModifier$composable$lambda_0(widthDp$delegate), getChildModifier$composable$lambda_1(heightDp$delegate));
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp5_remember$composable = $composer_0;
    var $composer_1 = tmp5_remember$composable;
    $composer_1.s1c(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp3_cache = $composer_1;
    var tmp4_cache = $composer_1.x1h(offset$delegate);
    var tmp$ret$3;
    // Inline function 'kotlin.let' call
    var tmp2_let = tmp3_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_6;
    if (tmp4_cache ? true : tmp2_let === Companion_getInstance_5().k1j_1) {
      var tmp$ret$1;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.getChildModifier$composable.<anonymous>' call
      tmp$ret$1 = getChildModifier$composable$lambda_3(offset$delegate);
      var value = tmp$ret$1;
      tmp3_cache.p1q(value);
      tmp_6 = value;
    } else {
      tmp_6 = tmp2_let;
    }
    tmp$ret$2 = tmp_6;
    tmp$ret$3 = tmp$ret$2;
    var tmp_7 = tmp$ret$3;
    tmp$ret$4 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
    var tmp0_2 = tmp$ret$4;
    $composer_1.u1c();
    tmp$ret$5 = tmp0_2;
    var tmp0_3 = alpha(offset(tmp_5, tmp$ret$5), getChildModifier$composable$lambda_2(alpha$delegate));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_3;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CustomNavigationContentKt$lambda_1$lambda_ql4iza($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1480673493, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ComposableSingletons$CustomNavigationContentKt.lambda-1.<anonymous> (CustomNavigationContent.kt:76)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Pager', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CustomNavigationContentKt$lambda_2$lambda_28hy2x($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(2046615934, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ComposableSingletons$CustomNavigationContentKt.lambda-2.<anonymous> (CustomNavigationContent.kt:81)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Carousel', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CustomNavigationContentKt$lambda_3$lambda_v24f54($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1341861725, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ComposableSingletons$CustomNavigationContentKt.lambda-3.<anonymous> (CustomNavigationContent.kt:86)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Back', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CustomNavigationContentKt$lambda_4$lambda_b5d5rt($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-255168044, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ComposableSingletons$CustomNavigationContentKt.lambda-4.<anonymous> (CustomNavigationContent.kt:90)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Fwd', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$CustomNavigationContentKt$lambda_5$lambda_ho9bae($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1618387192, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ComposableSingletons$CustomNavigationContentKt.lambda-5.<anonymous> (CustomNavigationContent.kt:95)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Shuffle', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CustomNavigationContentKt() {
    ComposableSingletons$CustomNavigationContentKt_instance = this;
    var tmp = this;
    tmp.xb2_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1480673493, false, ComposableSingletons$CustomNavigationContentKt$lambda_1$lambda_ql4iza));
    var tmp_0 = this;
    tmp_0.yb2_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(2046615934, false, ComposableSingletons$CustomNavigationContentKt$lambda_2$lambda_28hy2x));
    var tmp_1 = this;
    tmp_1.zb2_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(1341861725, false, ComposableSingletons$CustomNavigationContentKt$lambda_3$lambda_v24f54));
    var tmp_2 = this;
    tmp_2.ab3_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-255168044, false, ComposableSingletons$CustomNavigationContentKt$lambda_4$lambda_b5d5rt));
    var tmp_3 = this;
    tmp_3.bb3_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1618387192, false, ComposableSingletons$CustomNavigationContentKt$lambda_5$lambda_ho9bae));
  }
  var ComposableSingletons$CustomNavigationContentKt_instance;
  function ComposableSingletons$CustomNavigationContentKt_getInstance() {
    if (ComposableSingletons$CustomNavigationContentKt_instance == null)
      new ComposableSingletons$CustomNavigationContentKt();
    return ComposableSingletons$CustomNavigationContentKt_instance;
  }
  function toDp$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1720784765);
    if (isTraceInProgress()) {
      traceEventStart(1720784765, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.toDp$composable (CustomNavigationContent.kt:214)');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp2_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.sample.shared.customnavigation.toDp$composable.<anonymous>' call
    var tmp0_return = tmp2_with.w2l(_this__u8e3s4);
    tmp$ret$1 = tmp0_return;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_0 = tmp$ret$2;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function toDp$composable_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1047265984);
    if (isTraceInProgress()) {
      traceEventStart(-1047265984, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.toDp$composable (CustomNavigationContent.kt:210)');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp2_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.sample.shared.customnavigation.toDp$composable.<anonymous>' call
    var tmp0_return = tmp2_with.v2l(_this__u8e3s4);
    tmp$ret$1 = tmp0_return;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_0 = tmp$ret$2;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function CustomNavigationContent$composable$lambda($children$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('children', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $children$delegate.b2();
    return tmp$ret$0;
  }
  function getChildModifier$composable$lambda($offset$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('offset', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $offset$delegate.b2().k2m_1;
    return tmp$ret$0;
  }
  function getChildModifier$composable$lambda_0($widthDp$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('widthDp', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $widthDp$delegate.b2().f2m_1;
    return tmp$ret$0;
  }
  function getChildModifier$composable$lambda_1($heightDp$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('heightDp', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $heightDp$delegate.b2().f2m_1;
    return tmp$ret$0;
  }
  function getChildModifier$composable$lambda_2($alpha$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $alpha$delegate.b2();
    return tmp$ret$0;
  }
  function CustomNavigationContent$composable$lambda_0($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CustomNavigationContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ChildItems$composable$lambda($children) {
    return function ($this$BoxWithConstraints, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1944832170, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.ChildItems$composable.<anonymous> (CustomNavigationContent.kt:107)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var tmp0_forEachIndexed = $children.pai_1;
        var index = 0;
        var tmp0_iterator = tmp0_forEachIndexed.c();
        while (tmp0_iterator.d()) {
          var item = tmp0_iterator.e();
          // Inline function 'com.arkivanov.sample.shared.customnavigation.ChildItems$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
          $composer_0.o1l(2005341822, item.di_1);
          var childModifier = getChildModifier$composable($children.qai_1, tmp1__anonymous__uwfjfc, $children.pai_1.f(), $children.rai_1, $this$BoxWithConstraints.d7o(), $composer_0, 0);
          var tmp0_subject = $children.rai_1;
          var tmp0 = tmp0_subject.k6_1;
          switch (tmp0) {
            case 0:
              $composer_0.s1c(2005342299);
              var tmp_1 = MaterialTheme_getInstance().xav($composer_0, 6).uav_1;
              var tmp$ret$0;
              // Inline function 'androidx.compose.ui.unit.dp' call
              tmp$ret$0 = _Dp___init__impl__ms3zkb(16);

              KittenContent$composable(item.ei_1, tmp_1, clip(childModifier, RoundedCornerShape(tmp$ret$0)), $composer_0, 0, 0);
              $composer_0.u1c();
              ;
              break;
            case 1:
              $composer_0.s1c(2005342622);
              KittenContent$composable(item.ei_1, MaterialTheme_getInstance().xav($composer_0, 6).oav_1, childModifier, $composer_0, 0, 0);
              $composer_0.u1c();
              ;
              break;
            default:
              $composer_0.s1c(2005342859);
              $composer_0.u1c();
              break;
          }
          $composer_0.s1l();
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ChildItems$composable$lambda_0($children, $modifier, $$changed) {
    return function ($composer, $force) {
      ChildItems$composable($children, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CustomNavigationComponent$onSwitchToPagerClicked$ref($boundThis) {
    var l = function () {
      $boundThis.sai();
      return Unit_getInstance();
    };
    l.callableName = 'onSwitchToPagerClicked';
    return l;
  }
  function CustomNavigationComponent$onSwitchToCarouselClicked$ref($boundThis) {
    var l = function () {
      $boundThis.tai();
      return Unit_getInstance();
    };
    l.callableName = 'onSwitchToCarouselClicked';
    return l;
  }
  function CustomNavigationComponent$onBackwardClicked$ref($boundThis) {
    var l = function () {
      $boundThis.vai();
      return Unit_getInstance();
    };
    l.callableName = 'onBackwardClicked';
    return l;
  }
  function CustomNavigationComponent$onForwardClicked$ref($boundThis) {
    var l = function () {
      $boundThis.uai();
      return Unit_getInstance();
    };
    l.callableName = 'onForwardClicked';
    return l;
  }
  function CustomNavigationComponent$onShuffleClicked$ref($boundThis) {
    var l = function () {
      $boundThis.wai();
      return Unit_getInstance();
    };
    l.callableName = 'onShuffleClicked';
    return l;
  }
  function Buttons$composable$lambda($component, $mode, $modifier, $$changed) {
    return function ($composer, $force) {
      Buttons$composable($component, $mode, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function getChildModifier$composable$lambda_3($offset$delegate) {
    return function ($this$offset) {
      return new IntOffset_0(getChildModifier$composable$lambda($offset$delegate));
    };
  }
  function KittenContent$composable(component, textStyle, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1225965532);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(textStyle) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1225965532, $dirty, -1, 'com.arkivanov.sample.shared.customnavigation.KittenContent$composable (KittenContent.kt:26)');
      }
      var tmp = component.lah();
      var model$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = modifier_0._v;
      var tmp17_Box$composable = null;
      var tmp18_Box$composable = false;
      var tmp19_Box$composable = $composer_0;
      var tmp20_Box$composable = 14 & $dirty >> 6;
      var modifier_1 = tmp16_Box$composable;
      var contentAlignment = tmp17_Box$composable;
      var propagateMinConstraints = tmp18_Box$composable;
      var $composer_1 = tmp19_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & tmp20_Box$composable >> 3 | 112 & tmp20_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp20_Box$composable << 3;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.customnavigation.KittenContent$composable.<anonymous>' call
      var tmp21__anonymous__l7ugec = BoxScopeInstance_getInstance();
      var tmp22__anonymous__gd5t6t = $composer_7;
      var tmp23__anonymous__bih5za = 6 | 112 & tmp20_Box$composable >> 6;
      var $composer_8 = tmp22__anonymous__gd5t6t;
      var tmp_1 = getKittenPainter$composable(KittenContent$composable$lambda(model$delegate).raj_1, $composer_8, 0);
      var tmp_2 = fillMaxSize(Companion_getInstance_2());
      var tmp_3 = Companion_getInstance_8().a4k_1;
      Image$composable(tmp_1, 'Kitten image', tmp_2, null, tmp_3, 0.0, null, $composer_8, 25008, 104);
      var tmp_4 = [get_LocalContentColor().t1t(new Color_0(Companion_getInstance().f39_1))];
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.arkivanov.sample.shared.customnavigation.KittenContent$composable.<anonymous>.<anonymous>' call
      var tmp_5 = $composer_8;
      var dispatchReceiver = composableLambda(tmp_5, -1459524377, true, KittenContent$composable$lambda_0(tmp21__anonymous__l7ugec, textStyle, $dirty, model$delegate));
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_8;
      var $composer_9 = tmp3_remember$composable;
      $composer_9.s1c(-838505973);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_9;
      var tmp2_cache = $composer_9.x1h(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$3;
        // Inline function 'com.arkivanov.sample.shared.customnavigation.KittenContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.p1q(value);
        tmp_6 = value;
      } else {
        tmp_6 = tmp0_let;
      }
      tmp$ret$4 = tmp_6;
      tmp$ret$5 = tmp$ret$4;
      var tmp_7 = tmp$ret$5;
      tmp$ret$6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_2 = tmp$ret$6;
      $composer_9.u1c();
      tmp$ret$7 = tmp0_2;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      CompositionLocalProvider$composable(tmp_4, tmp$ret$9, $composer_8, 48);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(KittenContent$composable$lambda_1(component, textStyle, modifier_0, $changed, $default));
    }
  }
  function KittenContent$composable$lambda($model$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('model', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $model$delegate.b2();
    return tmp$ret$0;
  }
  function KittenContent$composable$lambda_0($tmp21__anonymous__45z21s, $textStyle, $$dirty, $model$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1459524377, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.KittenContent$composable.<anonymous>.<anonymous> (KittenContent.kt:41)');
        }
        var tmp0_text = KittenContent$composable$lambda($model$delegate).saj_1;
        var tmp_0 = background_0(fillMaxWidth($tmp21__anonymous__45z21s.w7n(Companion_getInstance_2(), Companion_getInstance_3().g4g_1)), Companion_getInstance_9().q38(listOf([new Color_0(Color__copy$default_impl_ectz3s(Companion_getInstance().b39_1, 0.75)), new Color_0(Companion_getInstance().m39_1)])));
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
        var tmp1_modifier = padding(tmp_0, tmp$ret$0);
        var tmp2_textAlign = Companion_getInstance_10().g3x_1;
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp0_text, tmp1_modifier, tmp_1, tmp_2, null, null, null, tmp_3, null, tmp2_textAlign, tmp_4, tmp_5, false, 0, 0, null, $textStyle, $composer_0, 0, 3670016 & $$dirty << 15, 65020);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function KittenContent$composable$lambda_1($component, $textStyle, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      KittenContent$composable($component, $textStyle, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DialogContent$composable(dialogComponent, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1747506454);
    sourceInformation($composer_0, 'C(DialogContent$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(dialogComponent) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1747506454, $changed, -1, 'com.arkivanov.sample.shared.dialog.DialogContent$composable (DialogContent.kt:11)');
      }
      var tmp = Companion_getInstance_2();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(200);
      var tmp0_modifier = widthIn(tmp, tmp$ret$0);
      var tmp_0 = DialogContent$composable$lambda(dialogComponent);
      var tmp$ret$7;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 414992928, true, DialogContent$composable$lambda_0(dialogComponent));
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.s1c(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.x1h(dispatchReceiver);
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$1;
        // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>.<anonymous>' call
        tmp$ret$1 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        var value = tmp$ret$1;
        tmp1_cache.p1q(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$2 = tmp_2;
      tmp$ret$3 = tmp$ret$2;
      var tmp_3 = tmp$ret$3;
      tmp$ret$4 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$4;
      $composer_1.u1c();
      tmp$ret$5 = tmp0;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      var tmp$ret$14;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$13;
      // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_5, -1427482786, true, DialogContent$composable$lambda_1(dialogComponent));
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_2 = tmp3_remember$composable_0;
      $composer_2.s1c(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.x1h(dispatchReceiver_0);
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
        var tmp$ret$8;
        // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>.<anonymous>' call
        tmp$ret$8 = ComposableLambda$invoke$ref_19(dispatchReceiver_0);
        var value_0 = tmp$ret$8;
        tmp1_cache_0.p1q(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = tmp0_let_0;
      }
      tmp$ret$9 = tmp_6;
      tmp$ret$10 = tmp$ret$9;
      var tmp_7 = tmp$ret$10;
      tmp$ret$11 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_0 = tmp$ret$11;
      $composer_2.u1c();
      tmp$ret$12 = tmp0_0;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      var tmp_8 = tmp$ret$14;
      var tmp$ret$21;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$20;
      // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver_1 = composableLambda(tmp_9, -201236995, true, DialogContent$composable$lambda_2(dialogComponent));
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_1 = $composer_0;
      var $composer_3 = tmp3_remember$composable_1;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_1 = $composer_3.x1h(dispatchReceiver_1);
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_10;
      if (tmp2_cache_1 ? true : tmp0_let_1 === Companion_getInstance_5().k1j_1) {
        var tmp$ret$15;
        // Inline function 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous>.<anonymous>' call
        tmp$ret$15 = ComposableLambda$invoke$ref_20(dispatchReceiver_1);
        var value_1 = tmp$ret$15;
        tmp1_cache_1.p1q(value_1);
        tmp_10 = value_1;
      } else {
        tmp_10 = tmp0_let_1;
      }
      tmp$ret$16 = tmp_10;
      tmp$ret$17 = tmp$ret$16;
      var tmp_11 = tmp$ret$17;
      tmp$ret$18 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      var tmp0_1 = tmp$ret$18;
      $composer_3.u1c();
      tmp$ret$19 = tmp0_1;
      tmp$ret$20 = tmp$ret$19;
      tmp$ret$21 = tmp$ret$20;
      AlertDialog$composable(tmp_0, tmp_4, tmp0_modifier, tmp_8, tmp$ret$21, $composer_0, 28080);
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
      tmp0_safe_receiver.y1t(DialogContent$composable$lambda_3(dialogComponent, $changed));
    }
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$DialogContentKt$lambda_1$lambda_9kmht3($this$TextButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1210045123, $changed, -1, 'com.arkivanov.sample.shared.dialog.ComposableSingletons$DialogContentKt.lambda-1.<anonymous> (DialogContent.kt:27)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Dismiss', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DialogContentKt() {
    ComposableSingletons$DialogContentKt_instance = this;
    var tmp = this;
    tmp.cb3_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1210045123, false, ComposableSingletons$DialogContentKt$lambda_1$lambda_9kmht3));
  }
  var ComposableSingletons$DialogContentKt_instance;
  function ComposableSingletons$DialogContentKt_getInstance() {
    if (ComposableSingletons$DialogContentKt_instance == null)
      new ComposableSingletons$DialogContentKt();
    return ComposableSingletons$DialogContentKt_instance;
  }
  function DialogContent$composable$lambda($dialogComponent) {
    return function () {
      $dialogComponent.xaj();
      return Unit_getInstance();
    };
  }
  function DialogContent$composable$lambda$lambda($dialogComponent) {
    return function () {
      $dialogComponent.xaj();
      return Unit_getInstance();
    };
  }
  function DialogContent$composable$lambda_0($dialogComponent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(414992928, $changed, -1, 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous> (DialogContent.kt:22)');
        }
        var tmp_0 = DialogContent$composable$lambda$lambda($dialogComponent);
        TextButton$composable(tmp_0, null, false, null, null, null, null, null, null, ComposableSingletons$DialogContentKt_getInstance().cb3_1, $composer_0, 805306368, 510);
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
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function DialogContent$composable$lambda_1($dialogComponent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1427482786, $changed, -1, 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous> (DialogContent.kt:16)');
        }
        var tmp_0 = $dialogComponent.waj();
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function DialogContent$composable$lambda_2($dialogComponent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-201236995, $changed, -1, 'com.arkivanov.sample.shared.dialog.DialogContent$composable.<anonymous> (DialogContent.kt:19)');
        }
        var tmp_0 = $dialogComponent.l8();
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function DialogContent$composable$lambda_3($dialogComponent, $$changed) {
    return function ($composer, $force) {
      DialogContent$composable($dialogComponent, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DynamicFeaturesContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(709470491);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(709470491, $dirty, -1, 'com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent$composable (DynamicFeaturesContent.kt:15)');
      }
      Children$composable(component.rah(), modifier_0._v, stackAnimation(fade()), ComposableSingletons$DynamicFeaturesContentKt_getInstance().db3_1, $composer_0, 3072 | 112 & $dirty, 0);
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
      tmp0_safe_receiver.y1t(DynamicFeaturesContent$composable$lambda(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$DynamicFeaturesContentKt$lambda_1$lambda_64bxzl(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1280040172, $changed, -1, 'com.arkivanov.sample.shared.dynamicfeatures.ComposableSingletons$DynamicFeaturesContentKt.lambda-1.<anonymous> (DynamicFeaturesContent.kt:20)');
      }
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      var child = it.ei_1;
      var tmp;
      if (child instanceof Feature1Child) {
        $composer_0.s1c(-1282600196);
        var tmp_0 = fillMaxSize(Companion_getInstance_2());
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
        if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.ComposableSingletons$DynamicFeaturesContentKt.lambda-1.<anonymous>.<anonymous>' call
          tmp$ret$0 = feature1Content$ref();
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
        DynamicFeatureContent$composable(child.dak_1, tmp_0, tmp$ret$4, $composer_0, 48, 0);
        $composer_0.u1c();
        tmp = Unit_getInstance();
      } else {
        if (child instanceof Feature2Child) {
          $composer_0.s1c(-1282599946);
          var tmp_3 = fillMaxSize(Companion_getInstance_2());
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
          var tmp_4;
          if (false ? true : tmp3_let === Companion_getInstance_5().k1j_1) {
            var tmp$ret$5;
            // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.ComposableSingletons$DynamicFeaturesContentKt.lambda-1.<anonymous>.<anonymous>' call
            tmp$ret$5 = feature2Content$ref();
            var value_0 = tmp$ret$5;
            tmp4_cache.p1q(value_0);
            tmp_4 = value_0;
          } else {
            tmp_4 = tmp3_let;
          }
          tmp$ret$6 = tmp_4;
          tmp$ret$7 = tmp$ret$6;
          var tmp_5 = tmp$ret$7;
          tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
          var tmp0_0 = tmp$ret$8;
          $composer_2.u1c();
          tmp$ret$9 = tmp0_0;
          DynamicFeatureContent$composable(child.eak_1, tmp_3, tmp$ret$9, $composer_0, 48, 0);
          $composer_0.u1c();
          tmp = Unit_getInstance();
        } else {
          $composer_0.s1c(-1282601403);
          $composer_0.u1c();
          noWhenBranchMatchedException();
        }
      }
      var tmp6_let = tmp;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.ComposableSingletons$DynamicFeaturesContentKt.lambda-1.<anonymous>.<anonymous>' call
      tmp$ret$10 = Unit_getInstance();
      tmp$ret$11 = tmp$ret$10;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function feature1Content$ref() {
    var l = function () {
      return feature1Content();
    };
    l.callableName = 'feature1Content';
    return l;
  }
  function feature2Content$ref() {
    var l = function () {
      return feature2Content();
    };
    l.callableName = 'feature2Content';
    return l;
  }
  function ComposableSingletons$DynamicFeaturesContentKt() {
    ComposableSingletons$DynamicFeaturesContentKt_instance = this;
    var tmp = this;
    tmp.db3_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1280040172, false, ComposableSingletons$DynamicFeaturesContentKt$lambda_1$lambda_64bxzl));
  }
  var ComposableSingletons$DynamicFeaturesContentKt_instance;
  function ComposableSingletons$DynamicFeaturesContentKt_getInstance() {
    if (ComposableSingletons$DynamicFeaturesContentKt_instance == null)
      new ComposableSingletons$DynamicFeaturesContentKt();
    return ComposableSingletons$DynamicFeaturesContentKt_instance;
  }
  function DynamicFeaturesContent$composable$lambda($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      DynamicFeaturesContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DynamicFeatureContent$composable(component, modifier, contentSupplier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-972043405);
    sourceInformation($composer_0, 'C(DynamicFeatureContent$composable)P(!1,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m1p(contentSupplier) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-972043405, $dirty, -1, 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent$composable (DynamicFeatureContent.kt:18)');
      }
      var tmp = component.rah();
      var tmp_0 = modifier_0._v;
      var tmp_1 = stackAnimation(fade());
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1203929096, true, DynamicFeatureContent$composable$lambda($dirty, contentSupplier));
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
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
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
      Children$composable(tmp, tmp_0, tmp_1, tmp$ret$6, $composer_0, 3072 | 112 & $dirty, 0);
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
      tmp0_safe_receiver.y1t(DynamicFeatureContent$composable$lambda_0(component, modifier_0, contentSupplier, $changed, $default));
    }
  }
  function Loading$composable(name, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(131759462);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(name) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(131759462, $dirty, -1, 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.Loading$composable (DynamicFeatureContent.kt:42)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = Companion_getInstance_3().j4g_1;
      var tmp17_Box$composable = false;
      var tmp18_Box$composable = $composer_0;
      var tmp19_Box$composable = 48 | 14 & $dirty >> 3;
      var modifier_0 = modifier;
      var contentAlignment = tmp16_Box$composable;
      var propagateMinConstraints = tmp17_Box$composable;
      var $composer_1 = tmp18_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & tmp19_Box$composable >> 3 | 112 & tmp19_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp19_Box$composable << 3;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.t1o();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.Loading$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6 | 112 & tmp19_Box$composable >> 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      var tmp_0 = 'Loading ' + name + '...';
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_8, 0, 0, 131070);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(Loading$composable$lambda(name, modifier, $changed));
    }
  }
  function Error$composable(name, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1735802062);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(name) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1735802062, $dirty, -1, 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.Error$composable (DynamicFeatureContent.kt:49)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = Companion_getInstance_3().j4g_1;
      var tmp17_Box$composable = false;
      var tmp18_Box$composable = $composer_0;
      var tmp19_Box$composable = 48 | 14 & $dirty >> 3;
      var modifier_0 = modifier;
      var contentAlignment = tmp16_Box$composable;
      var propagateMinConstraints = tmp17_Box$composable;
      var $composer_1 = tmp18_Box$composable;
      $composer_1.s1c(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_2();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_3().f4g_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & tmp19_Box$composable >> 3 | 112 & tmp19_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp19_Box$composable << 3;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.t1o();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.Error$composable.<anonymous>' call
      var tmp20__anonymous__q2j3lv = BoxScopeInstance_getInstance();
      var tmp21__anonymous__l7ugec = $composer_7;
      var tmp22__anonymous__gd5t6t = 6 | 112 & tmp19_Box$composable >> 6;
      var $composer_8 = tmp21__anonymous__l7ugec;
      var tmp_0 = 'Error loading ' + name + '...';
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_8, 0, 0, 131070);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(Error$composable$lambda(name, modifier, $changed));
    }
  }
  function DynamicFeatureContent$composable$lambda($$dirty, $contentSupplier) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(it) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1203929096, $changed, -1, 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent$composable.<anonymous> (DynamicFeatureContent.kt:27)');
        }
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var child = it.ei_1;
        var tmp_1;
        if (child instanceof LoadingChild) {
          $composer_0.s1c(688377192);
          Loading$composable(child.mak_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48);
          $composer_0.u1c();
          tmp_1 = Unit_getInstance();
        } else {
          if (child instanceof FeatureChild) {
            $composer_0.s1c(688377286);
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp2_remember$composable = $composer_0;
            var tmp3_remember$composable = 14 & $$dirty >> 6;
            var $composer_1 = tmp2_remember$composable;
            $composer_1.s1c(547886695);
            sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$2;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache = $composer_1;
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp1_cache.o1q();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_2;
            if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
              var value = $contentSupplier();
              tmp1_cache.p1q(value);
              tmp_2 = value;
            } else {
              tmp_2 = tmp0_let;
            }
            tmp$ret$0 = tmp_2;
            tmp$ret$1 = tmp$ret$0;
            var tmp_3 = tmp$ret$1;
            tmp$ret$2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
            var tmp0 = tmp$ret$2;
            $composer_1.u1c();
            tmp$ret$3 = tmp0;
            var content = tmp$ret$3;
            content.eb3(child.nak_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48);
            $composer_0.u1c();
            tmp_1 = Unit_getInstance();
          } else {
            if (child instanceof ErrorChild) {
              $composer_0.s1c(688377474);
              Error$composable(child.oak_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48);
              $composer_0.u1c();
              tmp_1 = Unit_getInstance();
            } else {
              $composer_0.s1c(688375793);
              $composer_0.u1c();
              noWhenBranchMatchedException();
            }
          }
        }
        var tmp4_let = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$4 = Unit_getInstance();
        tmp$ret$5 = tmp$ret$4;
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function DynamicFeatureContent$composable$lambda_0($component, $modifier, $contentSupplier, $$changed, $$default) {
    return function ($composer, $force) {
      DynamicFeatureContent$composable($component, $modifier._v, $contentSupplier, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Loading$composable$lambda($name, $modifier, $$changed) {
    return function ($composer, $force) {
      Loading$composable($name, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Error$composable$lambda($name, $modifier, $$changed) {
    return function ($composer, $force) {
      Error$composable($name, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MultiPaneContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1933895323);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1933895323, $dirty, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable (MultiPaneContent.kt:26)');
      }
      var tmp = component.jk();
      var children$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      var listChild = MultiPaneContent$composable$lambda(children$delegate).cal_1;
      var detailsChild = MultiPaneContent$composable$lambda(children$delegate).dal_1;
      var saveableStateHolder = rememberSaveableStateHolder$composable($composer_0, 0);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>' call
        tmp$ret$0 = movableContentOf$composable(ComposableLambda$invoke$ref_23(composableLambdaInstance(1894634364, true, MultiPaneContent$composable$lambda_0(saveableStateHolder))));
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
      var listPane = tmp$ret$4;
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
      var tmp_2;
      if (false ? true : tmp3_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$5;
        // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>' call
        tmp$ret$5 = movableContentOf$composable(ComposableLambda$invoke$ref_25(composableLambdaInstance(482564996, true, MultiPaneContent$composable$lambda_1(saveableStateHolder))));
        var value_0 = tmp$ret$5;
        tmp4_cache.p1q(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp3_let;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.u1c();
      tmp$ret$9 = tmp0_0;
      var detailsPane = tmp$ret$9;
      var tmp0_safe_receiver = MultiPaneContent$composable$lambda(children$delegate).dal_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.di_1;
      OldDetailsKeyRemoved$composable(saveableStateHolder, tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver), $composer_0, 0);
      var tmp_4 = modifier_0._v;
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 314377811, true, MultiPaneContent$composable$lambda_2(listPane, detailsPane, detailsChild, listChild, children$delegate, component));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.s1c(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.x1h(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
        var tmp$ret$10;
        // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_0.p1q(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_0;
      }
      tmp$ret$11 = tmp_6;
      tmp$ret$12 = tmp$ret$11;
      var tmp_7 = tmp$ret$12;
      tmp$ret$13 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.u1c();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      BoxWithConstraints$composable(tmp_4, null, false, tmp$ret$16, $composer_0, 3072 | 14 & $dirty >> 3, 6);
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
      tmp0_safe_receiver_0.y1t(MultiPaneContent$composable$lambda_3(component, modifier_0, $changed, $default));
    }
  }
  function OldDetailsKeyRemoved$composable(_this__u8e3s4, selectedDetailsKey, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-2074834241);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(selectedDetailsKey) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-2074834241, $changed, -1, 'com.arkivanov.sample.shared.multipane.OldDetailsKeyRemoved$composable (MultiPaneContent.kt:88)');
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
      if (false ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.multipane.OldDetailsKeyRemoved$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf(selectedDetailsKey);
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
      var lastDetailsKey$delegate = tmp$ret$4;
      if (equals(selectedDetailsKey, OldDetailsKeyRemoved$composable$lambda(lastDetailsKey$delegate))) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp0_safe_receiver = $composer_0.b1q();
        if (tmp0_safe_receiver === null)
          null;
        else {
          tmp0_safe_receiver.y1t(OldDetailsKeyRemoved$composable$lambda_1(_this__u8e3s4, selectedDetailsKey, $changed));
        }
        return Unit_getInstance();
      }
      var keyToRemove = OldDetailsKeyRemoved$composable$lambda(lastDetailsKey$delegate);
      OldDetailsKeyRemoved$composable$lambda_0(lastDetailsKey$delegate, selectedDetailsKey);
      if (keyToRemove == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp1_safe_receiver = $composer_0.b1q();
        if (tmp1_safe_receiver === null)
          null;
        else {
          tmp1_safe_receiver.y1t(OldDetailsKeyRemoved$composable$lambda_2(_this__u8e3s4, selectedDetailsKey, $changed));
        }
        return Unit_getInstance();
      }
      DisposableEffect$composable(keyToRemove, OldDetailsKeyRemoved$composable$lambda_3(_this__u8e3s4, keyToRemove), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    var tmp2_safe_receiver = $composer_0.b1q();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.y1t(OldDetailsKeyRemoved$composable$lambda_4(_this__u8e3s4, selectedDetailsKey, $changed));
    }
  }
  function MultiPaneContent$composable$lambda($children$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('children', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $children$delegate.b2();
    return tmp$ret$0;
  }
  function OldDetailsKeyRemoved$composable$lambda($lastDetailsKey$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('lastDetailsKey', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $lastDetailsKey$delegate.b2();
    return tmp$ret$0;
  }
  function OldDetailsKeyRemoved$composable$lambda_0($lastDetailsKey$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('lastDetailsKey', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $lastDetailsKey$delegate.kk(value);
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function MultiPaneContent$composable$lambda$lambda($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1993518331, $changed, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous> (MultiPaneContent.kt:36)');
        }
        ArticleListContent$composable($component, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function MultiPaneContent$composable$lambda_0($saveableStateHolder) {
    return function ($name$for$destructuring$parameter$0$, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1894634364, $changed, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous> (MultiPaneContent.kt:35)');
        }
        var config = $name$for$destructuring$parameter$0$.f4();
        var component = $name$for$destructuring$parameter$0$.g4();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1993518331, true, MultiPaneContent$composable$lambda$lambda(component));
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
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
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
        $saveableStateHolder.o3t(config, tmp$ret$6, $composer_0, 48);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function MultiPaneContent$composable$lambda$lambda_0($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-12739163, $changed, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous> (MultiPaneContent.kt:48)');
        }
        ArticleDetailsContent$composable($component, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function MultiPaneContent$composable$lambda_1($saveableStateHolder) {
    return function ($name$for$destructuring$parameter$0$, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(482564996, $changed, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous> (MultiPaneContent.kt:47)');
        }
        var config = $name$for$destructuring$parameter$0$.f4();
        var component = $name$for$destructuring$parameter$0$.g4();
        var tmp_0 = hashCode(config);
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -12739163, true, MultiPaneContent$composable$lambda$lambda_0(component));
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
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
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
        $saveableStateHolder.o3t(tmp_0, tmp$ret$6, $composer_0, 48);
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
  function _no_name_provided__qut3iv_2() {
  }
  protoOf(_no_name_provided__qut3iv_2).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function MultiPaneContent$composable$lambda$lambda_1($component, $isMultiPaneRequired) {
    return function ($this$DisposableEffect) {
      $component.aal($isMultiPaneRequired);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2();
      return tmp$ret$0;
    };
  }
  function MultiPaneContent$composable$lambda_2($listPane, $detailsPane, $detailsChild, $listChild, $children$delegate, $component) {
    return function ($this$BoxWithConstraints, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(314377811, $changed, -1, 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous> (MultiPaneContent.kt:59)');
        }
        if (MultiPaneContent$composable$lambda($children$delegate).bal_1) {
          $composer_0.s1c(256373477);
          // Inline function 'androidx.compose.foundation.layout.Row$composable' call
          var tmp16_Row$composable = fillMaxSize(Companion_getInstance_2());
          var tmp17_Row$composable = null;
          var tmp18_Row$composable = null;
          var tmp19_Row$composable = $composer_0;
          var modifier = tmp16_Row$composable;
          var horizontalArrangement = tmp17_Row$composable;
          var verticalAlignment = tmp18_Row$composable;
          var $composer_1 = tmp19_Row$composable;
          $composer_1.s1c(-636825856);
          sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)78@3913L58,79@3976L130:Row.kt#2w3rfo');
          if (!(0 === 0))
            modifier = Companion_getInstance_2();
          if (!(2 === 0))
            horizontalArrangement = Arrangement_getInstance().r7m_1;
          if (!(4 === 0))
            verticalAlignment = Companion_getInstance_3().o4g_1;
          var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp11_Layout$composable = modifier;
          var tmp12_Layout$composable = $composer_1;
          var tmp13_Layout$composable = 48;
          var modifier_0 = tmp11_Layout$composable;
          var $composer_2 = tmp12_Layout$composable;
          $composer_2.s1c(1725976829);
          sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_0 = Companion_getInstance_2();
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
          var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
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
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
          tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
          $composer_6.s1c(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
          var tmp14__anonymous__f0seaw = $composer_6;
          var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
          var $composer_7 = tmp14__anonymous__f0seaw;
          sourceInformationMarkerStart($composer_7, -1568371804, 'C80@4021L9:Row.kt#2w3rfo');
          // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp20__anonymous__q2j3lv = RowScopeInstance_getInstance();
          var tmp21__anonymous__l7ugec = $composer_7;
          var tmp22__anonymous__gd5t6t = 6;
          var $composer_8 = tmp21__anonymous__l7ugec;
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp16_Box$composable = tmp20__anonymous__q2j3lv.l7p(fillMaxHeight(Companion_getInstance_2()), 0.4);
          var tmp17_Box$composable = null;
          var tmp18_Box$composable = false;
          var tmp19_Box$composable = $composer_8;
          var modifier_1 = tmp16_Box$composable;
          var contentAlignment = tmp17_Box$composable;
          var propagateMinConstraints = tmp18_Box$composable;
          var $composer_9 = tmp19_Box$composable;
          $composer_9.s1c(1330882304);
          sourceInformation($composer_9, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
          if (!(0 === 0))
            modifier_1 = Companion_getInstance_2();
          if (!(2 === 0))
            contentAlignment = Companion_getInstance_3().f4g_1;
          if (!(4 === 0))
            propagateMinConstraints = false;
          var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_9, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp11_Layout$composable_0 = modifier_1;
          var tmp12_Layout$composable_0 = $composer_9;
          var tmp13_Layout$composable_0 = 0;
          var modifier_2 = tmp11_Layout$composable_0;
          var $composer_10 = tmp12_Layout$composable_0;
          $composer_10.s1c(1725976829);
          sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_2 = Companion_getInstance_2();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
          var tmp1_$get_current$$composable_gn3xww_0 = $composer_10;
          var $composer_11 = tmp1_$get_current$$composable_gn3xww_0;
          sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_11.w1p(tmp0_$get_current$$composable_h5ksy7_0);
          sourceInformationMarkerEnd($composer_11);
          tmp$ret$3 = tmp0_2;
          var density_0 = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
          var tmp3_$get_current$$composable_fm67ua_0 = $composer_10;
          var $composer_12 = tmp3_$get_current$$composable_fm67ua_0;
          sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_3 = $composer_12.w1p(tmp2_$get_current$$composable_g4n2vl_0);
          sourceInformationMarkerEnd($composer_12);
          tmp$ret$4 = tmp0_3;
          var layoutDirection_0 = tmp$ret$4;
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
          var tmp5_$get_current$$composable_el8hro_0 = $composer_10;
          var $composer_13 = tmp5_$get_current$$composable_el8hro_0;
          sourceInformationMarkerStart($composer_13, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_4 = $composer_13.w1p(tmp4_$get_current$$composable_f3pcsz_0);
          sourceInformationMarkerEnd($composer_13);
          tmp$ret$5 = tmp0_4;
          var viewConfiguration_0 = tmp$ret$5;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_4().e5n_1;
          var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
          var tmp8_ReusableComposeNode$composable_0 = $composer_10;
          var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp13_Layout$composable_0 << 9;
          var $composer_14 = tmp8_ReusableComposeNode$composable_0;
          var tmp_2 = $composer_14.t1o();
          if (!isInterface(tmp_2, Applier)) {
            invalidApplier();
          }
          $composer_14.e1p();
          if ($composer_14.c1p()) {
            $composer_14.f1p(tmp6_ReusableComposeNode$composable_0);
          } else {
            $composer_14.h1p();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_14);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_4().i5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_4().h5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_4().j5n_1);
          Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_4().k5n_1);
          tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
          $composer_14.s1c(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var tmp14__anonymous__f0seaw_0 = $composer_14;
          var tmp15__anonymous__a63r3d_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
          var $composer_15 = tmp14__anonymous__f0seaw_0;
          sourceInformationMarkerStart($composer_15, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
          // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp20__anonymous__q2j3lv_0 = BoxScopeInstance_getInstance();
          var tmp21__anonymous__l7ugec_0 = $composer_15;
          var tmp22__anonymous__gd5t6t_0 = 6;
          var $composer_16 = tmp21__anonymous__l7ugec_0;
          $listPane(MultiPaneContent$composable$lambda($children$delegate).cal_1, $composer_16, 0);
          sourceInformationMarkerEnd($composer_15);
          $composer_14.u1c();
          $composer_14.i1p();
          $composer_10.u1c();
          $composer_9.u1c();
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp39_Box$composable = tmp20__anonymous__q2j3lv.l7p(fillMaxHeight(Companion_getInstance_2()), 0.6);
          var tmp40_Box$composable = null;
          var tmp41_Box$composable = false;
          var tmp42_Box$composable = $composer_8;
          var modifier_3 = tmp39_Box$composable;
          var contentAlignment_0 = tmp40_Box$composable;
          var propagateMinConstraints_0 = tmp41_Box$composable;
          var $composer_17 = tmp42_Box$composable;
          $composer_17.s1c(1330882304);
          sourceInformation($composer_17, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
          if (!(0 === 0))
            modifier_3 = Companion_getInstance_2();
          if (!(2 === 0))
            contentAlignment_0 = Companion_getInstance_3().f4g_1;
          if (!(4 === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_17, 0);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp34_Layout$composable = modifier_3;
          var tmp35_Layout$composable = $composer_17;
          var tmp36_Layout$composable = 0;
          var modifier_4 = tmp34_Layout$composable;
          var $composer_18 = tmp35_Layout$composable;
          $composer_18.s1c(1725976829);
          sourceInformation($composer_18, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_4 = Companion_getInstance_2();
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp23_$get_current$$composable_7brzgu = get_LocalDensity();
          var tmp24_$get_current$$composable_6tb4fj = $composer_18;
          var $composer_19 = tmp24_$get_current$$composable_6tb4fj;
          sourceInformationMarkerStart($composer_19, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_5 = $composer_19.w1p(tmp23_$get_current$$composable_7brzgu);
          sourceInformationMarkerEnd($composer_19);
          tmp$ret$6 = tmp0_5;
          var density_1 = tmp$ret$6;
          var tmp$ret$7;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp25_$get_current$$composable_6au9e8 = get_LocalLayoutDirection();
          var tmp26_$get_current$$composable_5sdecx = $composer_18;
          var $composer_20 = tmp26_$get_current$$composable_5sdecx;
          sourceInformationMarkerStart($composer_20, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_6 = $composer_20.w1p(tmp25_$get_current$$composable_6au9e8);
          sourceInformationMarkerEnd($composer_20);
          tmp$ret$7 = tmp0_6;
          var layoutDirection_1 = tmp$ret$7;
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp27_$get_current$$composable_59wjbm = get_LocalViewConfiguration();
          var tmp28_$get_current$$composable_4rfoab = $composer_18;
          var $composer_21 = tmp28_$get_current$$composable_4rfoab;
          sourceInformationMarkerStart($composer_21, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_7 = $composer_21.w1p(tmp27_$get_current$$composable_59wjbm);
          sourceInformationMarkerEnd($composer_21);
          tmp$ret$8 = tmp0_7;
          var viewConfiguration_1 = tmp$ret$8;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp29_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
          var tmp30_ReusableComposeNode$composable = materializerOf(modifier_4);
          var tmp31_ReusableComposeNode$composable = $composer_18;
          var tmp32_ReusableComposeNode$composable = 6 | 7168 & tmp36_Layout$composable << 9;
          var $composer_22 = tmp31_ReusableComposeNode$composable;
          var tmp_3 = $composer_22.t1o();
          if (!isInterface(tmp_3, Applier)) {
            invalidApplier();
          }
          $composer_22.e1p();
          if ($composer_22.c1p()) {
            $composer_22.f1p(tmp29_ReusableComposeNode$composable);
          } else {
            $composer_22.h1p();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp33__anonymous__35hag5 = _Updater___init__impl__rbfxm8($composer_22);
          Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, measurePolicy_1, Companion_getInstance_4().i5n_1);
          Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, density_1, Companion_getInstance_4().h5n_1);
          Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, layoutDirection_1, Companion_getInstance_4().j5n_1);
          Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, viewConfiguration_1, Companion_getInstance_4().k5n_1);
          tmp30_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_22)), $composer_22, 112 & tmp32_ReusableComposeNode$composable >> 3);
          $composer_22.s1c(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var tmp37__anonymous__g99adz = $composer_22;
          var tmp38__anonymous__l3xxli = 14 & tmp32_ReusableComposeNode$composable >> 9;
          var $composer_23 = tmp37__anonymous__g99adz;
          sourceInformationMarkerStart($composer_23, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
          // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp43__anonymous__57il30 = BoxScopeInstance_getInstance();
          var tmp44__anonymous__a278aj = $composer_23;
          var tmp45__anonymous__ewvvi2 = 6;
          var $composer_24 = tmp44__anonymous__a278aj;
          var tmp0_safe_receiver = MultiPaneContent$composable$lambda($children$delegate).dal_1;
          $composer_24.s1c(2115243842);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            var tmp$ret$9;
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.arkivanov.sample.shared.multipane.MultiPaneContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            $detailsPane(tmp0_safe_receiver, $composer_24, 0);
            tmp$ret$9 = tmp0_safe_receiver;
            var tmp0_group = tmp$ret$9;
            tmp_4 = tmp0_group;
          }
          var tmp1_group = tmp_4;
          $composer_24.u1c();
          sourceInformationMarkerEnd($composer_23);
          $composer_22.u1c();
          $composer_22.i1p();
          $composer_18.u1c();
          $composer_17.u1c();
          sourceInformationMarkerEnd($composer_7);
          $composer_6.u1c();
          $composer_6.i1p();
          $composer_2.u1c();
          $composer_1.u1c();
          $composer_0.u1c();
        } else if (!($detailsChild == null)) {
          $composer_0.s1c(256373947);
          $detailsPane($detailsChild, $composer_0, 0);
          $composer_0.u1c();
        } else {
          $composer_0.s1c(256373993);
          $listPane($listChild, $composer_0, 0);
          $composer_0.u1c();
        }
        var tmp_5 = $this$BoxWithConstraints.e7o();
        var tmp$ret$10;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$10 = _Dp___init__impl__ms3zkb(800);
        var isMultiPaneRequired = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$10) >= 0;
        DisposableEffect$composable(isMultiPaneRequired, MultiPaneContent$composable$lambda$lambda_1($component, isMultiPaneRequired), $composer_0, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function MultiPaneContent$composable$lambda_3($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MultiPaneContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function OldDetailsKeyRemoved$composable$lambda_1($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $$changed) {
    return function ($composer, $force) {
      OldDetailsKeyRemoved$composable($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OldDetailsKeyRemoved$composable$lambda_2($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $$changed) {
    return function ($composer, $force) {
      OldDetailsKeyRemoved$composable($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_3() {
  }
  protoOf(_no_name_provided__qut3iv_3).wp = function () {
    var tmp$ret$0;
    // Inline function 'com.arkivanov.sample.shared.multipane.OldDetailsKeyRemoved$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function OldDetailsKeyRemoved$composable$lambda_3($this_OldDetailsKeyRemoved$composable, $keyToRemove) {
    return function ($this$DisposableEffect) {
      $this_OldDetailsKeyRemoved$composable.p3t($keyToRemove);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_3();
      return tmp$ret$0;
    };
  }
  function OldDetailsKeyRemoved$composable$lambda_4($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $$changed) {
    return function ($composer, $force) {
      OldDetailsKeyRemoved$composable($this_OldDetailsKeyRemoved$composable, $selectedDetailsKey, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ArticleDetailsContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1933381032);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1933381032, $dirty, -1, 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable (ArticleDetailsContent.kt:20)');
      }
      var tmp = component.val();
      var model$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      var article = ArticleDetailsContent$composable$lambda(model$delegate).qal_1;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp16_Column$composable = modifier_0._v;
      var tmp17_Column$composable = null;
      var tmp18_Column$composable = null;
      var tmp19_Column$composable = $composer_0;
      var tmp20_Column$composable = 14 & $dirty >> 3;
      var modifier_1 = tmp16_Column$composable;
      var verticalArrangement = tmp17_Column$composable;
      var horizontalAlignment = tmp18_Column$composable;
      var $composer_1 = tmp19_Column$composable;
      $composer_1.s1c(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().t7m_1;
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_3().r4g_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & tmp20_Column$composable >> 3 | 112 & tmp20_Column$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp20_Column$composable << 3;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>' call
      var tmp21__anonymous__l7ugec = ColumnScopeInstance_getInstance();
      var tmp22__anonymous__gd5t6t = $composer_7;
      var tmp23__anonymous__bih5za = 6 | 112 & tmp20_Column$composable >> 6;
      var $composer_8 = tmp22__anonymous__gd5t6t;
      $composer_8.s1c(1647442367);
      if (ArticleDetailsContent$composable$lambda(model$delegate).pal_1) {
        var tmp$ret$9;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_8;
        var dispatchReceiver = composableLambda(tmp_1, -1727126357, true, ArticleDetailsContent$composable$lambda_0(article));
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_8;
        var $composer_9 = tmp3_remember$composable;
        $composer_9.s1c(-838505973);
        sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_9;
        var tmp2_cache = $composer_9.x1h(dispatchReceiver);
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$3;
          // Inline function 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = ComposableLambda$invoke$ref_29(dispatchReceiver);
          var value = tmp$ret$3;
          tmp1_cache.p1q(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$4 = tmp_2;
        tmp$ret$5 = tmp$ret$4;
        var tmp_3 = tmp$ret$5;
        tmp$ret$6 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_2 = tmp$ret$6;
        $composer_9.u1c();
        tmp$ret$7 = tmp0_2;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp_4 = tmp$ret$9;
        var tmp$ret$16;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_8;
        var dispatchReceiver_0 = composableLambda(tmp_5, 861711337, true, ArticleDetailsContent$composable$lambda_1(component));
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_8;
        var $composer_10 = tmp3_remember$composable_0;
        $composer_10.s1c(-838505973);
        sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_10;
        var tmp2_cache_0 = $composer_10.x1h(dispatchReceiver_0);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$10;
          // Inline function 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = ComposableLambda$invoke$ref_30(dispatchReceiver_0);
          var value_0 = tmp$ret$10;
          tmp1_cache_0.p1q(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$11 = tmp_6;
        tmp$ret$12 = tmp$ret$11;
        var tmp_7 = tmp$ret$12;
        tmp$ret$13 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_3 = tmp$ret$13;
        $composer_10.u1c();
        tmp$ret$14 = tmp0_3;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        var tmp_8 = tmp$ret$16;
        var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        TopAppBar$composable(tmp_4, null, tmp_8, null, tmp_9, tmp_10, _Dp___init__impl__ms3zkb(0.0), $composer_8, 390, 122);
      }
      $composer_8.u1c();
      var tmp_11 = fillMaxHeight(Companion_getInstance_2());
      var tmp_12 = verticalScroll(tmp_11, rememberScrollState$composable(0, $composer_8, 0, 1));
      var tmp$ret$17;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$17 = _Dp___init__impl__ms3zkb(16);
      var tmp_13 = padding(tmp_12, tmp$ret$17);
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(article.ual_1, tmp_13, tmp_14, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, null, $composer_8, 0, 0, 131068);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(ArticleDetailsContent$composable$lambda_2(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$ArticleDetailsContentKt$lambda_1$lambda_upsa9p($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-1736821299, $changed, -1, 'com.arkivanov.sample.shared.multipane.details.ComposableSingletons$ArticleDetailsContentKt.lambda-1.<anonymous> (ArticleDetailsContent.kt:29)');
      }
      var tmp = get_ArrowBack(Icons_getInstance().yau_1);
      Icon$composable(tmp, null, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ArticleDetailsContentKt() {
    ComposableSingletons$ArticleDetailsContentKt_instance = this;
    var tmp = this;
    tmp.fb3_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-1736821299, false, ComposableSingletons$ArticleDetailsContentKt$lambda_1$lambda_upsa9p));
  }
  var ComposableSingletons$ArticleDetailsContentKt_instance;
  function ComposableSingletons$ArticleDetailsContentKt_getInstance() {
    if (ComposableSingletons$ArticleDetailsContentKt_instance == null)
      new ComposableSingletons$ArticleDetailsContentKt();
    return ComposableSingletons$ArticleDetailsContentKt_instance;
  }
  function ArticleDetailsContent$composable$lambda($model$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('model', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $model$delegate.b2();
    return tmp$ret$0;
  }
  function ArticleDetailsContent$composable$lambda_0($article) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1727126357, $changed, -1, 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous> (ArticleDetailsContent.kt:27)');
        }
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text$composable($article.tal_1, null, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ArticleDetailsComponent$onCloseClicked$ref($boundThis) {
    var l = function () {
      $boundThis.wal();
      return Unit_getInstance();
    };
    l.callableName = 'onCloseClicked';
    return l;
  }
  function ArticleDetailsContent$composable$lambda_1($component) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(861711337, $changed, -1, 'com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent$composable.<anonymous>.<anonymous> (ArticleDetailsContent.kt:28)');
        }
        var tmp_0 = ArticleDetailsComponent$onCloseClicked$ref($component);
        IconButton$composable(tmp_0, null, false, null, ComposableSingletons$ArticleDetailsContentKt_getInstance().fb3_1, $composer_0, 24576, 14);
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
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ArticleDetailsContent$composable$lambda_2($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ArticleDetailsContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ArticleListContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(1839165938);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(1839165938, $changed, -1, 'com.arkivanov.sample.shared.multipane.list.ArticleListContent$composable (ArticleListContent.kt:22)');
      }
      var tmp = component.val();
      var model$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      var tmp_0 = fillMaxSize(modifier_0._v);
      LazyColumn$composable(tmp_0, null, null, false, null, null, null, false, ArticleListContent$composable$lambda_0(model$delegate, component), $composer_0, 0, 254);
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
      tmp0_safe_receiver.y1t(ArticleListContent$composable$lambda_1(component, modifier_0, $changed, $default));
    }
  }
  function selectionColor$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(2045886537);
    if (isTraceInProgress()) {
      traceEventStart(2045886537, $changed, -1, 'com.arkivanov.sample.shared.multipane.list.selectionColor$composable (ArticleListContent.kt:47)');
    }
    var tmp0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().cav($composer_0, 6).oax(), ContentAlpha_getInstance().qax($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function ArticleListContent$composable$lambda($model$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('model', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $model$delegate.b2();
    return tmp$ret$0;
  }
  function ArticleListContent$composable$lambda$lambda(it) {
    return null;
  }
  function ArticleListContent$composable$lambda$lambda_0($tmp0_items$composable) {
    return function (index) {
      return null($tmp0_items$composable.g(index));
    };
  }
  function ArticleListContent$composable$lambda$lambda_1($tmp1_items$composable, $tmp0_items$composable) {
    return function (index) {
      return $tmp1_items$composable($tmp0_items$composable.g(index));
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.c2j(p0, p1, p2, p3);
    };
  }
  function ArticleListContent$composable$lambda$lambda$lambda($component, $tmp2__anonymous__bd8cc3) {
    return function () {
      $component.iam($tmp2__anonymous__bd8cc3.gam_1);
      return Unit_getInstance();
    };
  }
  function ArticleListContent$composable$lambda$lambda_2($tmp0_items$composable, $model$delegate, $component) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C145@6530L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.q1p(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-632812321, $dirty, -1, 'androidx.compose.foundation.lazy.items$composable.<anonymous> (LazyDsl.kt:144)');
        }
        // Inline function 'com.arkivanov.sample.shared.multipane.list.ArticleListContent$composable.<anonymous>.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = $tmp0_items$composable.g(it);
        var tmp3__anonymous__ufb84q = $composer_0;
        var tmp4__anonymous__pkmkx7 = 14 & $dirty;
        var $composer_1 = tmp3__anonymous__ufb84q;
        var isSelected = tmp2__anonymous__z9zvc9.gam_1.equals(ArticleListContent$composable$lambda($model$delegate).dam_1);
        $composer_1.s1c(71326453);
        var tmp$ret$1;
        // Inline function 'kotlin.run' call
        var tmp_2 = fillMaxWidth(Companion_getInstance_2());
        var tmp0_run = selectable(tmp_2, isSelected, VOID, VOID, ArticleListContent$composable$lambda$lambda$lambda($component, tmp2__anonymous__z9zvc9));
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.multipane.list.ArticleListContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_group = isSelected ? background(tmp0_run, selectionColor$composable($composer_1, 0)) : tmp0_run;
        var tmp1_return = tmp0_group;
        tmp$ret$0 = tmp1_return;
        tmp$ret$1 = tmp$ret$0;
        var tmp0_group_0 = tmp$ret$1;
        $composer_1.u1c();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
        var tmp_3 = padding(tmp0_group_0, tmp$ret$2);
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp2__anonymous__z9zvc9.ham_1, tmp_3, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_1, 0, 0, 131068);
        var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
        Divider$composable(null, tmp_9, tmp_10, _Dp___init__impl__ms3zkb(0.0), $composer_1, 0, 15);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp_1 = tmp_11;
      } else {
        $composer_0.f1j();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ArticleListContent$composable$lambda_0($model$delegate, $component) {
    return function ($this$LazyColumn) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.lazy.items$composable' call
      var tmp0_items$composable = ArticleListContent$composable$lambda($model$delegate).cam_1;
      var tmp1_items$composable = ArticleListContent$composable$lambda$lambda;
      var tmp = tmp0_items$composable.f();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ArticleListContent$composable$lambda$lambda_0(tmp0_items$composable);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ArticleListContent$composable$lambda$lambda_1(tmp1_items$composable, tmp0_items$composable);
      $this$LazyColumn.f9k(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_31(composableLambdaInstance(-632812321, true, ArticleListContent$composable$lambda$lambda_2(tmp0_items$composable, $model$delegate, $component))));
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function ArticleListContent$composable$lambda_1($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ArticleListContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RootContent$composable(component, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-1292134663);
    sourceInformation($composer_0, 'C(RootContent$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(component) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1292134663, $dirty, -1, 'com.arkivanov.sample.shared.root.RootContent$composable (RootContent.kt:47)');
      }
      var tmp = component.rah();
      var childStack$delegate = subscribeAsState$composable(tmp, null, $composer_0, 0, 1);
      var activeComponent = RootContent$composable$lambda(childStack$delegate).ql_1.ei_1;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp16_Column$composable = modifier_0._v;
      var tmp17_Column$composable = null;
      var tmp18_Column$composable = null;
      var tmp19_Column$composable = $composer_0;
      var tmp20_Column$composable = 14 & $dirty >> 3;
      var modifier_1 = tmp16_Column$composable;
      var verticalArrangement = tmp17_Column$composable;
      var horizontalAlignment = tmp18_Column$composable;
      var $composer_1 = tmp19_Column$composable;
      $composer_1.s1c(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_2();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().t7m_1;
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_3().r4g_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & tmp20_Column$composable >> 3 | 112 & tmp20_Column$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_1;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 112 & tmp20_Column$composable << 3;
      var modifier_2 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.s1c(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance_2();
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
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_2);
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
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.s1c(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
      // Inline function 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>' call
      var tmp21__anonymous__l7ugec = ColumnScopeInstance_getInstance();
      var tmp22__anonymous__gd5t6t = $composer_7;
      var tmp23__anonymous__bih5za = 6 | 112 & tmp20_Column$composable >> 6;
      var $composer_8 = tmp22__anonymous__gd5t6t;
      var tmp_1 = RootContent$composable$lambda(childStack$delegate);
      var tmp_2 = tmp21__anonymous__l7ugec.g7o(Companion_getInstance_2(), 1.0);
      var tmp_3 = stackAnimation(fade());
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous>' call
      var tmp_4 = $composer_8;
      var dispatchReceiver = composableLambda(tmp_4, -147128416, true, RootContent$composable$lambda_0(modifier_0));
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_8;
      var $composer_9 = tmp3_remember$composable;
      $composer_9.s1c(-838505973);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_9;
      var tmp2_cache = $composer_9.x1h(dispatchReceiver);
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$3;
        // Inline function 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        var value = tmp$ret$3;
        tmp1_cache.p1q(value);
        tmp_5 = value;
      } else {
        tmp_5 = tmp0_let;
      }
      tmp$ret$4 = tmp_5;
      tmp$ret$5 = tmp$ret$4;
      var tmp_6 = tmp$ret$5;
      tmp$ret$6 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_2 = tmp$ret$6;
      $composer_9.u1c();
      tmp$ret$7 = tmp0_2;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      Children$composable_0(tmp_1, tmp_2, tmp_3, tmp$ret$9, $composer_8, 3072, 0);
      var tmp_7 = fillMaxWidth(Companion_getInstance_2());
      var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous>' call
      var tmp_11 = $composer_8;
      var dispatchReceiver_0 = composableLambda(tmp_11, 1180727941, true, RootContent$composable$lambda_1(activeComponent, component));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_8;
      var $composer_10 = tmp3_remember$composable_0;
      $composer_10.s1c(-838505973);
      sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_10;
      var tmp2_cache_0 = $composer_10.x1h(dispatchReceiver_0);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.o1q();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
        var tmp$ret$10;
        // Inline function 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_38(dispatchReceiver_0);
        var value_0 = tmp$ret$10;
        tmp1_cache_0.p1q(value_0);
        tmp_12 = value_0;
      } else {
        tmp_12 = tmp0_let_0;
      }
      tmp$ret$11 = tmp_12;
      tmp$ret$12 = tmp$ret$11;
      var tmp_13 = tmp$ret$12;
      tmp$ret$13 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      var tmp0_3 = tmp$ret$13;
      $composer_10.u1c();
      tmp$ret$14 = tmp0_3;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      BottomNavigation$composable(tmp_7, tmp_8, tmp_9, tmp_10, tmp$ret$16, $composer_8, 24582, 14);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.u1c();
      $composer_6.i1p();
      $composer_2.u1c();
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
      tmp0_safe_receiver.y1t(RootContent$composable$lambda_2(component, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$RootContentKt$lambda_1$lambda_8h0woj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(492079462, $changed, -1, 'com.arkivanov.sample.shared.root.ComposableSingletons$RootContentKt.lambda-1.<anonymous> (RootContent.kt:73)');
      }
      var tmp = get_Refresh(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Counters', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$RootContentKt$lambda_2$lambda_kclkdo($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-528020707, $changed, -1, 'com.arkivanov.sample.shared.root.ComposableSingletons$RootContentKt.lambda-2.<anonymous> (RootContent.kt:84)');
      }
      var tmp = get_SwipeUp(Filled_getInstance());
      Icon$composable(tmp, 'Cards', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$RootContentKt$lambda_3$lambda_luw0j9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-405116770, $changed, -1, 'com.arkivanov.sample.shared.root.ComposableSingletons$RootContentKt.lambda-3.<anonymous> (RootContent.kt:95)');
      }
      var tmp = get_List(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Multi-Pane', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$RootContentKt$lambda_4$lambda_6yqgiy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-282212833, $changed, -1, 'com.arkivanov.sample.shared.root.ComposableSingletons$RootContentKt.lambda-4.<anonymous> (RootContent.kt:106)');
      }
      var tmp = get_Favorite(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Dynamic Features', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$RootContentKt$lambda_5$lambda_z8r4dz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-159308896, $changed, -1, 'com.arkivanov.sample.shared.root.ComposableSingletons$RootContentKt.lambda-5.<anonymous> (RootContent.kt:117)');
      }
      var tmp = get_LocationOn(Icons_getInstance().yau_1);
      Icon$composable(tmp, 'Custom Navigation', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RootContentKt() {
    ComposableSingletons$RootContentKt_instance = this;
    var tmp = this;
    tmp.gb3_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(492079462, false, ComposableSingletons$RootContentKt$lambda_1$lambda_8h0woj));
    var tmp_0 = this;
    tmp_0.hb3_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-528020707, false, ComposableSingletons$RootContentKt$lambda_2$lambda_kclkdo));
    var tmp_1 = this;
    tmp_1.ib3_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-405116770, false, ComposableSingletons$RootContentKt$lambda_3$lambda_luw0j9));
    var tmp_2 = this;
    tmp_2.jb3_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-282212833, false, ComposableSingletons$RootContentKt$lambda_4$lambda_6yqgiy));
    var tmp_3 = this;
    tmp_3.kb3_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-159308896, false, ComposableSingletons$RootContentKt$lambda_5$lambda_z8r4dz));
  }
  var ComposableSingletons$RootContentKt_instance;
  function ComposableSingletons$RootContentKt_getInstance() {
    if (ComposableSingletons$RootContentKt_instance == null)
      new ComposableSingletons$RootContentKt();
    return ComposableSingletons$RootContentKt_instance;
  }
  function RootContent$composable$lambda($childStack$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('childStack', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $childStack$delegate.b2();
    return tmp$ret$0;
  }
  function RootContent$composable$lambda_0($modifier) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(it) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-147128416, $changed, -1, 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous> (RootContent.kt:59)');
        }
        var child = it.ei_1;
        if (child instanceof CountersChild) {
          $composer_0.s1c(37044916);
          CountersContent$composable(child.gan_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
          $composer_0.u1c();
        } else {
          if (child instanceof CardsChild) {
            $composer_0.s1c(37045029);
            CardsContent$composable(child.han_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
            $composer_0.u1c();
          } else {
            if (child instanceof MultiPaneChild) {
              $composer_0.s1c(37045143);
              MultiPaneContent$composable(child.ian_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
              $composer_0.u1c();
            } else {
              if (child instanceof DynamicFeaturesChild) {
                $composer_0.s1c(37045267);
                DynamicFeaturesContent$composable(child.jan_1, fillMaxSize(Companion_getInstance_2()), $composer_0, 48, 0);
                $composer_0.u1c();
              } else {
                if (child instanceof CustomNavigationChild) {
                  $composer_0.s1c(37045398);
                  CustomNavigationContent$composable(child.kan_1, fillMaxSize($modifier._v), $composer_0, 0, 0);
                  $composer_0.u1c();
                } else {
                  $composer_0.s1c(37045488);
                  $composer_0.u1c();
                }
              }
            }
          }
        }
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
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function RootComponent$onCountersTabClicked$ref($boundThis) {
    var l = function () {
      $boundThis.ban();
      return Unit_getInstance();
    };
    l.callableName = 'onCountersTabClicked';
    return l;
  }
  function RootComponent$onCardsTabClicked$ref($boundThis) {
    var l = function () {
      $boundThis.can();
      return Unit_getInstance();
    };
    l.callableName = 'onCardsTabClicked';
    return l;
  }
  function RootComponent$onMultiPaneTabClicked$ref($boundThis) {
    var l = function () {
      $boundThis.dan();
      return Unit_getInstance();
    };
    l.callableName = 'onMultiPaneTabClicked';
    return l;
  }
  function RootComponent$onDynamicFeaturesTabClicked$ref($boundThis) {
    var l = function () {
      $boundThis.ean();
      return Unit_getInstance();
    };
    l.callableName = 'onDynamicFeaturesTabClicked';
    return l;
  }
  function RootComponent$onCustomNavigationTabClicked$ref($boundThis) {
    var l = function () {
      $boundThis.fan();
      return Unit_getInstance();
    };
    l.callableName = 'onCustomNavigationTabClicked';
    return l;
  }
  function RootContent$composable$lambda_1($activeComponent, $component) {
    return function ($this$BottomNavigation, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h($this$BottomNavigation) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1180727941, $dirty, -1, 'com.arkivanov.sample.shared.root.RootContent$composable.<anonymous>.<anonymous> (RootContent.kt:69)');
        }
        var tmp_1 = $activeComponent instanceof CountersChild;
        var tmp_2 = RootComponent$onCountersTabClicked$ref($component);
        var tmp_3 = ComposableSingletons$RootContentKt_getInstance().gb3_1;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        BottomNavigationItem$composable($this$BottomNavigation, tmp_1, tmp_2, tmp_3, null, false, null, false, null, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072 | 14 & $dirty, 0, 1016);
        var tmp_5 = $activeComponent instanceof CardsChild;
        var tmp_6 = RootComponent$onCardsTabClicked$ref($component);
        var tmp_7 = ComposableSingletons$RootContentKt_getInstance().hb3_1;
        var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        BottomNavigationItem$composable($this$BottomNavigation, tmp_5, tmp_6, tmp_7, null, false, null, false, null, tmp_8, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072 | 14 & $dirty, 0, 1016);
        var tmp_9 = $activeComponent instanceof MultiPaneChild;
        var tmp_10 = RootComponent$onMultiPaneTabClicked$ref($component);
        var tmp_11 = ComposableSingletons$RootContentKt_getInstance().ib3_1;
        var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        BottomNavigationItem$composable($this$BottomNavigation, tmp_9, tmp_10, tmp_11, null, false, null, false, null, tmp_12, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072 | 14 & $dirty, 0, 1016);
        var tmp_13 = $activeComponent instanceof DynamicFeaturesChild;
        var tmp_14 = RootComponent$onDynamicFeaturesTabClicked$ref($component);
        var tmp_15 = ComposableSingletons$RootContentKt_getInstance().jb3_1;
        var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        BottomNavigationItem$composable($this$BottomNavigation, tmp_13, tmp_14, tmp_15, null, false, null, false, null, tmp_16, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072 | 14 & $dirty, 0, 1016);
        var tmp_17 = isInterface($activeComponent, CustomNavigationComponent);
        var tmp_18 = RootComponent$onCustomNavigationTabClicked$ref($component);
        var tmp_19 = ComposableSingletons$RootContentKt_getInstance().kb3_1;
        var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        BottomNavigationItem$composable($this$BottomNavigation, tmp_17, tmp_18, tmp_19, null, false, null, false, null, tmp_20, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 3072 | 14 & $dirty, 0, 1016);
        var tmp_21;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_21 = Unit_getInstance();
        }
        tmp_0 = tmp_21;
      } else {
        $composer_0.f1j();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function RootContent$composable$lambda_2($component, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      RootContent$composable($component, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function toPx$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1516969917);
    if (isTraceInProgress()) {
      traceEventStart(-1516969917, $changed, -1, 'com.arkivanov.sample.shared.utils.toPx$composable (Utils.kt:7)');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1p(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp2_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'com.arkivanov.sample.shared.utils.toPx$composable.<anonymous>' call
    var tmp0_return = tmp2_with.p2l(_this__u8e3s4);
    tmp$ret$1 = tmp0_return;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_0 = tmp$ret$2;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function _Degrees___init__impl__63jcia(value) {
    return value;
  }
  function _Degrees___get_value__impl__bhu7ba($this) {
    return $this;
  }
  function _Vector___init__impl__y7x4qq(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Vector___init__impl__y7x4qq_0(x, y) {
    var tmp = _Vector___init__impl__y7x4qq(packFloats(x, y));
    return tmp;
  }
  function _Vector___get_x__impl__nxyc6t($this) {
    return unpackFloat1(_get_value__a43j40($this));
  }
  function _Vector___get_y__impl__4vo4ve($this) {
    return unpackFloat2(_get_value__a43j40($this));
  }
  function minus(_this__u8e3s4, other) {
    return _Vector___init__impl__y7x4qq_0(_Vector___get_x__impl__nxyc6t(_this__u8e3s4) - _Vector___get_x__impl__nxyc6t(other), _Vector___get_y__impl__4vo4ve(_this__u8e3s4) - _Vector___get_y__impl__4vo4ve(other));
  }
  function plus_1(_this__u8e3s4, other) {
    return _Vector___init__impl__y7x4qq_0(_Vector___get_x__impl__nxyc6t(_this__u8e3s4) + _Vector___get_x__impl__nxyc6t(other), _Vector___get_y__impl__4vo4ve(_this__u8e3s4) + _Vector___get_y__impl__4vo4ve(other));
  }
  function times(_this__u8e3s4, value) {
    return _Vector___init__impl__y7x4qq_0(_Vector___get_x__impl__nxyc6t(_this__u8e3s4) * value, _Vector___get_y__impl__4vo4ve(_this__u8e3s4) * value);
  }
  function rotate(_this__u8e3s4, radians, center) {
    center = center === VOID ? _Vector___init__impl__y7x4qq_0(0.0, 0.0) : center;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sin' call
    var tmp0_sin = _Radians___get_value__impl__1n2bvp(radians);
    tmp$ret$0 = Math.sin(tmp0_sin);
    var s = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    var tmp1_cos = _Radians___get_value__impl__1n2bvp(radians);
    tmp$ret$1 = Math.cos(tmp1_cos);
    var c = tmp$ret$1;
    var tmp = minus(_this__u8e3s4, center);
    return plus_1(_Vector___init__impl__y7x4qq_0(_Vector___get_x__impl__nxyc6t(tmp) * c - _Vector___get_y__impl__4vo4ve(tmp) * s, _Vector___get_x__impl__nxyc6t(tmp) * s + _Vector___get_y__impl__4vo4ve(tmp) * c), center);
  }
  function _Radians___init__impl__nn3ny1(value) {
    return value;
  }
  function _Radians___get_value__impl__1n2bvp($this) {
    return $this;
  }
  function toRadians(_this__u8e3s4) {
    return _Radians___init__impl__nn3ny1(_Degrees___get_value__impl__bhu7ba(_this__u8e3s4) * get_PI() / 180.0);
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toBits(val1));
    var v2 = toLong(toBits(val2));
    return v1.g8(32).cf(v2.s8(new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.e8(32).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function unpackFloat2(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.s8(new Long(-1, 0)).f8();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function getKittenPainter$composable(imageType, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1103246771);
    if (isTraceInProgress()) {
      traceEventStart(-1103246771, $changed, -1, 'com.arkivanov.sample.shared.customnavigation.getKittenPainter$composable (KittenContent.js.kt:14)');
    }
    var tmp0_subject = imageType;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_AccountBox(Icons_getInstance().yau_1);
        break;
      case 1:
        tmp = get_Info(Icons_getInstance().yau_1);
        break;
      case 2:
        tmp = get_Call(Icons_getInstance().yau_1);
        break;
      case 3:
        tmp = get_Check(Icons_getInstance().yau_1);
        break;
      case 4:
        tmp = get_Clear(Icons_getInstance().yau_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp0_0 = rememberVectorPainter$composable(tmp, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function feature1Content() {
    return new feature1Content$1();
  }
  function feature1Content$1() {
  }
  protoOf(feature1Content$1).lb3 = function (component, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(646708787);
    sourceInformation($composer_0, 'C(invoke$composable)');
    if (isTraceInProgress()) {
      traceEventStart(646708787, $changed, -1, 'com.arkivanov.sample.shared.dynamicfeatures.feature1.feature1Content.<no name provided>.invoke$composable (Feature1ContentFactoryIos.kt:10)');
    }
    var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_3 = _TextOverflow___init__impl__obguoe(0);
    Text$composable('Not implemented', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  };
  protoOf(feature1Content$1).eb3 = function (component, modifier, $composer, $changed) {
    return this.lb3(isInterface(component, Feature1) ? component : THROW_CCE(), modifier, $composer, $changed);
  };
  function feature2Content() {
    return new feature2Content$1();
  }
  function feature2Content$1() {
  }
  protoOf(feature2Content$1).mb3 = function (component, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(249164339);
    sourceInformation($composer_0, 'C(invoke$composable)');
    if (isTraceInProgress()) {
      traceEventStart(249164339, $changed, -1, 'com.arkivanov.sample.shared.dynamicfeatures.feature2.feature2Content.<no name provided>.invoke$composable (Feature2ContentFactoryIos.kt:10)');
    }
    var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
    var tmp_3 = _TextOverflow___init__impl__obguoe(0);
    Text$composable('Not implemented', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  };
  protoOf(feature2Content$1).eb3 = function (component, modifier, $composer, $changed) {
    return this.mb3(isInterface(component, Feature2) ? component : THROW_CCE(), modifier, $composer, $changed);
  };
  function AlertDialog$composable(onDismissRequest, confirmButton, modifier, title, text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-377179208);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m1p(onDismissRequest) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(confirmButton) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1h(modifier) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.m1p(title) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.m1p(text) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-377179208, $dirty, -1, 'com.arkivanov.sample.shared.utils.AlertDialog$composable (AlertDialog.ios.kt:26)');
      }
      var tmp0_popupPositionProvider = new AlertDialog$composable$1();
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1920694514, true, AlertDialog$composable$lambda(onDismissRequest, $dirty, modifier, confirmButton, title, text));
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
        var tmp$ret$0;
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_42(dispatchReceiver);
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
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Popup$composable(tmp0_popupPositionProvider, onDismissRequest, null, null, true, tmp$ret$6, $composer_0, 221184 | 112 & $dirty << 3, 12);
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
      tmp0_safe_receiver.y1t(AlertDialog$composable$lambda_0(onDismissRequest, confirmButton, modifier, title, text, $changed));
    }
  }
  function AlertDialog$composable$1() {
  }
  protoOf(AlertDialog$composable$1).c76 = function (anchorBounds, windowSize, layoutDirection, popupContentSize) {
    return Companion_getInstance_11().m2m_1;
  };
  function AlertDialog$composable$lambda$slambda$slambda($onDismissRequest, resultContinuation) {
    this.vb3_1 = $onDismissRequest;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AlertDialog$composable$lambda$slambda$slambda).x7w = function ($this$detectTapGestures, it, $completion) {
    var tmp = this.y7w($this$detectTapGestures, it, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AlertDialog$composable$lambda$slambda$slambda).m1z = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.x7w(tmp, p2 instanceof Offset ? p2.p2j_1 : THROW_CCE(), $completion);
  };
  protoOf(AlertDialog$composable$lambda$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        if (tmp === 0) {
          this.kf_1 = 1;
          this.vb3_1();
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
  protoOf(AlertDialog$composable$lambda$slambda$slambda).y7w = function ($this$detectTapGestures, it, completion) {
    var i = new AlertDialog$composable$lambda$slambda$slambda(this.vb3_1, completion);
    i.wb3_1 = $this$detectTapGestures;
    i.xb3_1 = it;
    return i;
  };
  function AlertDialog$composable$lambda$slambda$slambda_0($onDismissRequest, resultContinuation) {
    var i = new AlertDialog$composable$lambda$slambda$slambda($onDismissRequest, resultContinuation);
    var l = function ($this$detectTapGestures, it, $completion) {
      return i.x7w($this$detectTapGestures, it.p2j_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AlertDialog$composable$lambda$slambda($onDismissRequest, resultContinuation) {
    this.gb4_1 = $onDismissRequest;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AlertDialog$composable$lambda$slambda).x5g = function ($this$pointerInput, $completion) {
    var tmp = this.y5g($this$pointerInput, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(AlertDialog$composable$lambda$slambda).eg = function (p1, $completion) {
    return this.x5g((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AlertDialog$composable$lambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = detectTapGestures(this.hb4_1, VOID, VOID, AlertDialog$composable$lambda$slambda$slambda_0(this.gb4_1, null), VOID, this);
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
  protoOf(AlertDialog$composable$lambda$slambda).y5g = function ($this$pointerInput, completion) {
    var i = new AlertDialog$composable$lambda$slambda(this.gb4_1, completion);
    i.hb4_1 = $this$pointerInput;
    return i;
  };
  function AlertDialog$composable$lambda$slambda_0($onDismissRequest, resultContinuation) {
    var i = new AlertDialog$composable$lambda$slambda($onDismissRequest, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x5g($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AlertDialog$composable$lambda$lambda$lambda($title, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1259624748, $changed, -1, 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.ios.kt:59)');
        }
        ProvideTextStyle$composable(MaterialTheme_getInstance().xav($composer_0, 6).pav_1, $title, $composer_0, 112 & $$dirty >> 6);
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
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AlertDialog$composable$lambda$lambda$lambda_0($text, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(686129123, $changed, -1, 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.ios.kt:65)');
        }
        ProvideTextStyle$composable(MaterialTheme_getInstance().xav($composer_0, 6).sav_1, $text, $composer_0, 112 & $$dirty >> 9);
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
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AlertDialog$composable$lambda$lambda($confirmButton, $$dirty, $title, $text) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-1087008528, $changed, -1, 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous> (AlertDialog.ios.kt:56)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp16_Column$composable = null;
        var tmp17_Column$composable = null;
        var tmp18_Column$composable = null;
        var tmp19_Column$composable = $composer_0;
        var modifier = tmp16_Column$composable;
        var verticalArrangement = tmp17_Column$composable;
        var horizontalAlignment = tmp18_Column$composable;
        var $composer_1 = tmp19_Column$composable;
        $composer_1.s1c(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)77@3913L61,78@3979L133:Column.kt#2w3rfo');
        if (!(1 === 0))
          modifier = Companion_getInstance_2();
        if (!(2 === 0))
          verticalArrangement = Arrangement_getInstance().t7m_1;
        if (!(4 === 0))
          horizontalAlignment = Companion_getInstance_3().r4g_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable = modifier;
        var tmp12_Layout$composable = $composer_1;
        var tmp13_Layout$composable = 0;
        var modifier_0 = tmp11_Layout$composable;
        var $composer_2 = tmp12_Layout$composable;
        $composer_2.s1c(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance_2();
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
        var tmp6_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
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
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_4().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_4().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_4().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_4().k5n_1);
        tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
        $composer_6.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw = $composer_6;
        var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp14__anonymous__f0seaw;
        sourceInformationMarkerStart($composer_7, 1633582135, 'C79@4027L9:Column.kt#2w3rfo');
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp20__anonymous__q2j3lv = ColumnScopeInstance_getInstance();
        var tmp21__anonymous__l7ugec = $composer_7;
        var tmp22__anonymous__gd5t6t = 6;
        var $composer_8 = tmp21__anonymous__l7ugec;
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_1 = Companion_getInstance_2();
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$3 = _Dp___init__impl__ms3zkb(24);
        var tmp_2 = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$4 = _Dp___init__impl__ms3zkb(16);
        var tmp_3 = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$5 = _Dp___init__impl__ms3zkb(24);
        var tmp16_Box$composable = padding_0(tmp_1, tmp_2, tmp_3, tmp$ret$5);
        var tmp17_Box$composable = null;
        var tmp18_Box$composable = false;
        var tmp19_Box$composable = $composer_8;
        var modifier_1 = tmp16_Box$composable;
        var contentAlignment = tmp17_Box$composable;
        var propagateMinConstraints = tmp18_Box$composable;
        var $composer_9 = tmp19_Box$composable;
        $composer_9.s1c(1330882304);
        sourceInformation($composer_9, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance_2();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_3().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_9, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp11_Layout$composable_0 = modifier_1;
        var tmp12_Layout$composable_0 = $composer_9;
        var tmp13_Layout$composable_0 = 48;
        var modifier_2 = tmp11_Layout$composable_0;
        var $composer_10 = tmp12_Layout$composable_0;
        $composer_10.s1c(1725976829);
        sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance_2();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7_0 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww_0 = $composer_10;
        var $composer_11 = tmp1_$get_current$$composable_gn3xww_0;
        sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_11.w1p(tmp0_$get_current$$composable_h5ksy7_0);
        sourceInformationMarkerEnd($composer_11);
        tmp$ret$6 = tmp0_2;
        var density_0 = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
        var tmp3_$get_current$$composable_fm67ua_0 = $composer_10;
        var $composer_12 = tmp3_$get_current$$composable_fm67ua_0;
        sourceInformationMarkerStart($composer_12, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_12.w1p(tmp2_$get_current$$composable_g4n2vl_0);
        sourceInformationMarkerEnd($composer_12);
        tmp$ret$7 = tmp0_3;
        var layoutDirection_0 = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
        var tmp5_$get_current$$composable_el8hro_0 = $composer_10;
        var $composer_13 = tmp5_$get_current$$composable_el8hro_0;
        sourceInformationMarkerStart($composer_13, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_13.w1p(tmp4_$get_current$$composable_f3pcsz_0);
        sourceInformationMarkerEnd($composer_13);
        tmp$ret$8 = tmp0_4;
        var viewConfiguration_0 = tmp$ret$8;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp6_ReusableComposeNode$composable_0 = Companion_getInstance_4().e5n_1;
        var tmp7_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
        var tmp8_ReusableComposeNode$composable_0 = $composer_10;
        var tmp9_ReusableComposeNode$composable_0 = 6 | 7168 & tmp13_Layout$composable_0 << 9;
        var $composer_14 = tmp8_ReusableComposeNode$composable_0;
        var tmp_4 = $composer_14.t1o();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_14.e1p();
        if ($composer_14.c1p()) {
          $composer_14.f1p(tmp6_ReusableComposeNode$composable_0);
        } else {
          $composer_14.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp10__anonymous__yfiz50_0 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, measurePolicy_0, Companion_getInstance_4().i5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, density_0, Companion_getInstance_4().h5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, layoutDirection_0, Companion_getInstance_4().j5n_1);
        Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50_0, viewConfiguration_0, Companion_getInstance_4().k5n_1);
        tmp7_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & tmp9_ReusableComposeNode$composable_0 >> 3);
        $composer_14.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp14__anonymous__f0seaw_0 = $composer_14;
        var tmp15__anonymous__a63r3d_0 = 14 & tmp9_ReusableComposeNode$composable_0 >> 9;
        var $composer_15 = tmp14__anonymous__f0seaw_0;
        sourceInformationMarkerStart($composer_15, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp20__anonymous__q2j3lv_0 = BoxScopeInstance_getInstance();
        var tmp21__anonymous__l7ugec_0 = $composer_15;
        var tmp22__anonymous__gd5t6t_0 = 6;
        var $composer_16 = tmp21__anonymous__l7ugec_0;
        var tmp_5 = [get_LocalContentAlpha().t1t(ContentAlpha_getInstance().iav($composer_16, 6))];
        var tmp$ret$15;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_16;
        var dispatchReceiver = composableLambda(tmp_6, 1259624748, true, AlertDialog$composable$lambda$lambda$lambda($title, $$dirty));
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_16;
        var $composer_17 = tmp3_remember$composable;
        $composer_17.s1c(-838505973);
        sourceInformation($composer_17, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_17;
        var tmp2_cache = $composer_17.x1h(dispatchReceiver);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$9;
          // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = ComposableLambda$invoke$ref_39(dispatchReceiver);
          var value = tmp$ret$9;
          tmp1_cache.p1q(value);
          tmp_7 = value;
        } else {
          tmp_7 = tmp0_let;
        }
        tmp$ret$10 = tmp_7;
        tmp$ret$11 = tmp$ret$10;
        var tmp_8 = tmp$ret$11;
        tmp$ret$12 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_5 = tmp$ret$12;
        $composer_17.u1c();
        tmp$ret$13 = tmp0_5;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        CompositionLocalProvider$composable(tmp_5, tmp$ret$15, $composer_16, 48);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.u1c();
        $composer_14.i1p();
        $composer_10.u1c();
        $composer_9.u1c();
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_9 = Companion_getInstance_2();
        var tmp$ret$16;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$16 = _Dp___init__impl__ms3zkb(24);
        var tmp_10 = tmp$ret$16;
        var tmp$ret$17;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$17 = _Dp___init__impl__ms3zkb(16);
        var tmp_11 = tmp$ret$17;
        var tmp$ret$18;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$18 = _Dp___init__impl__ms3zkb(24);
        var tmp39_Box$composable = padding_0(tmp_9, tmp_10, tmp_11, tmp$ret$18);
        var tmp40_Box$composable = null;
        var tmp41_Box$composable = false;
        var tmp42_Box$composable = $composer_8;
        var modifier_3 = tmp39_Box$composable;
        var contentAlignment_0 = tmp40_Box$composable;
        var propagateMinConstraints_0 = tmp41_Box$composable;
        var $composer_18 = tmp42_Box$composable;
        $composer_18.s1c(1330882304);
        sourceInformation($composer_18, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance_2();
        if (!(2 === 0))
          contentAlignment_0 = Companion_getInstance_3().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_18, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp34_Layout$composable = modifier_3;
        var tmp35_Layout$composable = $composer_18;
        var tmp36_Layout$composable = 48;
        var modifier_4 = tmp34_Layout$composable;
        var $composer_19 = tmp35_Layout$composable;
        $composer_19.s1c(1725976829);
        sourceInformation($composer_19, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_4 = Companion_getInstance_2();
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp23_$get_current$$composable_7brzgu = get_LocalDensity();
        var tmp24_$get_current$$composable_6tb4fj = $composer_19;
        var $composer_20 = tmp24_$get_current$$composable_6tb4fj;
        sourceInformationMarkerStart($composer_20, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_6 = $composer_20.w1p(tmp23_$get_current$$composable_7brzgu);
        sourceInformationMarkerEnd($composer_20);
        tmp$ret$19 = tmp0_6;
        var density_1 = tmp$ret$19;
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp25_$get_current$$composable_6au9e8 = get_LocalLayoutDirection();
        var tmp26_$get_current$$composable_5sdecx = $composer_19;
        var $composer_21 = tmp26_$get_current$$composable_5sdecx;
        sourceInformationMarkerStart($composer_21, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_7 = $composer_21.w1p(tmp25_$get_current$$composable_6au9e8);
        sourceInformationMarkerEnd($composer_21);
        tmp$ret$20 = tmp0_7;
        var layoutDirection_1 = tmp$ret$20;
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp27_$get_current$$composable_59wjbm = get_LocalViewConfiguration();
        var tmp28_$get_current$$composable_4rfoab = $composer_19;
        var $composer_22 = tmp28_$get_current$$composable_4rfoab;
        sourceInformationMarkerStart($composer_22, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_8 = $composer_22.w1p(tmp27_$get_current$$composable_59wjbm);
        sourceInformationMarkerEnd($composer_22);
        tmp$ret$21 = tmp0_8;
        var viewConfiguration_1 = tmp$ret$21;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp29_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
        var tmp30_ReusableComposeNode$composable = materializerOf(modifier_4);
        var tmp31_ReusableComposeNode$composable = $composer_19;
        var tmp32_ReusableComposeNode$composable = 6 | 7168 & tmp36_Layout$composable << 9;
        var $composer_23 = tmp31_ReusableComposeNode$composable;
        var tmp_12 = $composer_23.t1o();
        if (!isInterface(tmp_12, Applier)) {
          invalidApplier();
        }
        $composer_23.e1p();
        if ($composer_23.c1p()) {
          $composer_23.f1p(tmp29_ReusableComposeNode$composable);
        } else {
          $composer_23.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp33__anonymous__35hag5 = _Updater___init__impl__rbfxm8($composer_23);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, measurePolicy_1, Companion_getInstance_4().i5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, density_1, Companion_getInstance_4().h5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, layoutDirection_1, Companion_getInstance_4().j5n_1);
        Updater__set_impl_v7kwss(tmp33__anonymous__35hag5, viewConfiguration_1, Companion_getInstance_4().k5n_1);
        tmp30_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_23)), $composer_23, 112 & tmp32_ReusableComposeNode$composable >> 3);
        $composer_23.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp37__anonymous__g99adz = $composer_23;
        var tmp38__anonymous__l3xxli = 14 & tmp32_ReusableComposeNode$composable >> 9;
        var $composer_24 = tmp37__anonymous__g99adz;
        sourceInformationMarkerStart($composer_24, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp43__anonymous__57il30 = BoxScopeInstance_getInstance();
        var tmp44__anonymous__a278aj = $composer_24;
        var tmp45__anonymous__ewvvi2 = 6;
        var $composer_25 = tmp44__anonymous__a278aj;
        var tmp_13 = [get_LocalContentAlpha().t1t(ContentAlpha_getInstance().yav($composer_25, 6))];
        var tmp$ret$28;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_14 = $composer_25;
        var dispatchReceiver_0 = composableLambda(tmp_14, 686129123, true, AlertDialog$composable$lambda$lambda$lambda_0($text, $$dirty));
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_25;
        var $composer_26 = tmp3_remember$composable_0;
        $composer_26.s1c(-838505973);
        sourceInformation($composer_26, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$25;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_26;
        var tmp2_cache_0 = $composer_26.x1h(dispatchReceiver_0);
        var tmp$ret$24;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_15;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$22;
          // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = ComposableLambda$invoke$ref_40(dispatchReceiver_0);
          var value_0 = tmp$ret$22;
          tmp1_cache_0.p1q(value_0);
          tmp_15 = value_0;
        } else {
          tmp_15 = tmp0_let_0;
        }
        tmp$ret$23 = tmp_15;
        tmp$ret$24 = tmp$ret$23;
        var tmp_16 = tmp$ret$24;
        tmp$ret$25 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
        var tmp0_9 = tmp$ret$25;
        $composer_26.u1c();
        tmp$ret$26 = tmp0_9;
        tmp$ret$27 = tmp$ret$26;
        tmp$ret$28 = tmp$ret$27;
        CompositionLocalProvider$composable(tmp_13, tmp$ret$28, $composer_25, 48);
        sourceInformationMarkerEnd($composer_24);
        $composer_23.u1c();
        $composer_23.i1p();
        $composer_19.u1c();
        $composer_18.u1c();
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp0_$receiver = Companion_getInstance_2();
        var tmp$ret$29;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$29 = _Dp___init__impl__ms3zkb(8);
        var tmp1_vertical = tmp$ret$29;
        var tmp$ret$30;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$30 = _Dp___init__impl__ms3zkb(16);
        var tmp2_horizontal = tmp$ret$30;
        var tmp62_Box$composable = tmp20__anonymous__q2j3lv.h7o(padding_1(tmp0_$receiver, tmp2_horizontal, tmp1_vertical), Companion_getInstance_3().t4g_1);
        var tmp63_Box$composable = null;
        var tmp64_Box$composable = false;
        var tmp65_Box$composable = $composer_8;
        var modifier_5 = tmp62_Box$composable;
        var contentAlignment_1 = tmp63_Box$composable;
        var propagateMinConstraints_1 = tmp64_Box$composable;
        var $composer_27 = tmp65_Box$composable;
        $composer_27.s1c(1330882304);
        sourceInformation($composer_27, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_5 = Companion_getInstance_2();
        if (!(2 === 0))
          contentAlignment_1 = Companion_getInstance_3().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_27, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp57_Layout$composable = modifier_5;
        var tmp58_Layout$composable = $composer_27;
        var tmp59_Layout$composable = 0;
        var modifier_6 = tmp57_Layout$composable;
        var $composer_28 = tmp58_Layout$composable;
        $composer_28.s1c(1725976829);
        sourceInformation($composer_28, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_6 = Companion_getInstance_2();
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp46_$get_current$$composable_q0o1w1 = get_LocalDensity();
        var tmp47_$get_current$$composable_qj4wxc = $composer_28;
        var $composer_29 = tmp47_$get_current$$composable_qj4wxc;
        sourceInformationMarkerStart($composer_29, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_10 = $composer_29.w1p(tmp46_$get_current$$composable_q0o1w1);
        sourceInformationMarkerEnd($composer_29);
        tmp$ret$31 = tmp0_10;
        var density_2 = tmp$ret$31;
        var tmp$ret$32;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp48_$get_current$$composable_r1lryn = get_LocalLayoutDirection();
        var tmp49_$get_current$$composable_rk2mzy = $composer_28;
        var $composer_30 = tmp49_$get_current$$composable_rk2mzy;
        sourceInformationMarkerStart($composer_30, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_11 = $composer_30.w1p(tmp48_$get_current$$composable_r1lryn);
        sourceInformationMarkerEnd($composer_30);
        tmp$ret$32 = tmp0_11;
        var layoutDirection_2 = tmp$ret$32;
        var tmp$ret$33;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp50_$get_current$$composable_w6qg6g = get_LocalViewConfiguration();
        var tmp51_$get_current$$composable_vo9l55 = $composer_28;
        var $composer_31 = tmp51_$get_current$$composable_vo9l55;
        sourceInformationMarkerStart($composer_31, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_12 = $composer_31.w1p(tmp50_$get_current$$composable_w6qg6g);
        sourceInformationMarkerEnd($composer_31);
        tmp$ret$33 = tmp0_12;
        var viewConfiguration_2 = tmp$ret$33;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp52_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
        var tmp53_ReusableComposeNode$composable = materializerOf(modifier_6);
        var tmp54_ReusableComposeNode$composable = $composer_28;
        var tmp55_ReusableComposeNode$composable = 6 | 7168 & tmp59_Layout$composable << 9;
        var $composer_32 = tmp54_ReusableComposeNode$composable;
        var tmp_17 = $composer_32.t1o();
        if (!isInterface(tmp_17, Applier)) {
          invalidApplier();
        }
        $composer_32.e1p();
        if ($composer_32.c1p()) {
          $composer_32.f1p(tmp52_ReusableComposeNode$composable);
        } else {
          $composer_32.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp56__anonymous__s4ke8q = _Updater___init__impl__rbfxm8($composer_32);
        Updater__set_impl_v7kwss(tmp56__anonymous__s4ke8q, measurePolicy_2, Companion_getInstance_4().i5n_1);
        Updater__set_impl_v7kwss(tmp56__anonymous__s4ke8q, density_2, Companion_getInstance_4().h5n_1);
        Updater__set_impl_v7kwss(tmp56__anonymous__s4ke8q, layoutDirection_2, Companion_getInstance_4().j5n_1);
        Updater__set_impl_v7kwss(tmp56__anonymous__s4ke8q, viewConfiguration_2, Companion_getInstance_4().k5n_1);
        tmp53_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_32)), $composer_32, 112 & tmp55_ReusableComposeNode$composable >> 3);
        $composer_32.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp60__anonymous__7dgeip = $composer_32;
        var tmp61__anonymous__c851q8 = 14 & tmp55_ReusableComposeNode$composable >> 9;
        var $composer_33 = tmp60__anonymous__7dgeip;
        sourceInformationMarkerStart($composer_33, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp66__anonymous__yjjs79 = BoxScopeInstance_getInstance();
        var tmp67__anonymous__tov4zq = $composer_33;
        var tmp68__anonymous__ou6hs7 = 6;
        var $composer_34 = tmp67__anonymous__tov4zq;
        $confirmButton($composer_34, 14 & $$dirty >> 3);
        sourceInformationMarkerEnd($composer_33);
        $composer_32.u1c();
        $composer_32.i1p();
        $composer_28.u1c();
        $composer_27.u1c();
        sourceInformationMarkerEnd($composer_7);
        $composer_6.u1c();
        $composer_6.i1p();
        $composer_2.u1c();
        $composer_1.u1c();
        var tmp_18;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_18 = Unit_getInstance();
        }
        tmp = tmp_18;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AlertDialog$composable$lambda($onDismissRequest, $$dirty, $modifier, $confirmButton, $title, $text) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(1920694514, $changed, -1, 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous> (AlertDialog.ios.kt:44)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = fillMaxSize(Companion_getInstance_2());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var tmp4_remember$composable = 14 & $$dirty;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.s1c(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.x1h($onDismissRequest);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_5().k1j_1) {
          var tmp$ret$0;
          // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = AlertDialog$composable$lambda$slambda_0($onDismissRequest, null);
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
        var tmp21_Box$composable = pointerInput(tmp_0, $onDismissRequest, tmp$ret$4);
        var tmp22_Box$composable = Companion_getInstance_3().j4g_1;
        var tmp23_Box$composable = false;
        var tmp24_Box$composable = $composer_0;
        var modifier = tmp21_Box$composable;
        var contentAlignment = tmp22_Box$composable;
        var propagateMinConstraints = tmp23_Box$composable;
        var $composer_2 = tmp24_Box$composable;
        $composer_2.s1c(1330882304);
        sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance_2();
        if (!(0 === 0))
          contentAlignment = Companion_getInstance_3().f4g_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 6);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp16_Layout$composable = modifier;
        var tmp17_Layout$composable = $composer_2;
        var tmp18_Layout$composable = 0;
        var modifier_0 = tmp16_Layout$composable;
        var $composer_3 = tmp17_Layout$composable;
        $composer_3.s1c(1725976829);
        sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance_2();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp5_$get_current$$composable_el8hro = get_LocalDensity();
        var tmp6_$get_current$$composable_e2rmqd = $composer_3;
        var $composer_4 = tmp6_$get_current$$composable_e2rmqd;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_4.w1p(tmp5_$get_current$$composable_el8hro);
        sourceInformationMarkerEnd($composer_4);
        tmp$ret$5 = tmp0_0;
        var density = tmp$ret$5;
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp7_$get_current$$composable_dkarp2 = get_LocalLayoutDirection();
        var tmp8_$get_current$$composable_d1twnr = $composer_3;
        var $composer_5 = tmp8_$get_current$$composable_d1twnr;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.w1p(tmp7_$get_current$$composable_dkarp2);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$6 = tmp0_1;
        var layoutDirection = tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp9_$get_current$$composable_cjd1mg = get_LocalViewConfiguration();
        var tmp10_$get_current$$composable_orpap8 = $composer_3;
        var $composer_6 = tmp10_$get_current$$composable_orpap8;
        sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.w1p(tmp9_$get_current$$composable_cjd1mg);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$7 = tmp0_2;
        var viewConfiguration = tmp$ret$7;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp11_ReusableComposeNode$composable = Companion_getInstance_4().e5n_1;
        var tmp12_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp13_ReusableComposeNode$composable = $composer_3;
        var tmp14_ReusableComposeNode$composable = 6 | 7168 & tmp18_Layout$composable << 9;
        var $composer_7 = tmp13_ReusableComposeNode$composable;
        var tmp_3 = $composer_7.t1o();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_7.e1p();
        if ($composer_7.c1p()) {
          $composer_7.f1p(tmp11_ReusableComposeNode$composable);
        } else {
          $composer_7.h1p();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp15__anonymous__a63r3d = _Updater___init__impl__rbfxm8($composer_7);
        Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, measurePolicy, Companion_getInstance_4().i5n_1);
        Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, density, Companion_getInstance_4().h5n_1);
        Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, layoutDirection, Companion_getInstance_4().j5n_1);
        Updater__set_impl_v7kwss(tmp15__anonymous__a63r3d, viewConfiguration, Companion_getInstance_4().k5n_1);
        tmp12_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp14_ReusableComposeNode$composable >> 3);
        $composer_7.s1c(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp19__anonymous__98mtqr = $composer_7;
        var tmp20__anonymous__q2j3lv = 14 & tmp14_ReusableComposeNode$composable >> 9;
        var $composer_8 = tmp19__anonymous__98mtqr;
        sourceInformationMarkerStart($composer_8, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp25__anonymous__1t3vk8 = BoxScopeInstance_getInstance();
        var tmp26__anonymous__31krnb = $composer_8;
        var tmp27__anonymous__7w9euu = 6;
        var $composer_9 = tmp26__anonymous__31krnb;
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$8 = _Dp___init__impl__ms3zkb(24);
        var tmp0_elevation = tmp$ret$8;
        var tmp1_modifier = tmp25__anonymous__1t3vk8.w7n($modifier, Companion_getInstance_3().j4g_1);
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp$ret$15;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$14;
        // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_9;
        var dispatchReceiver = composableLambda(tmp_6, -1087008528, true, AlertDialog$composable$lambda$lambda($confirmButton, $$dirty, $title, $text));
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable_0 = $composer_9;
        var $composer_10 = tmp3_remember$composable_0;
        $composer_10.s1c(-838505973);
        sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_10;
        var tmp2_cache_0 = $composer_10.x1h(dispatchReceiver);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.o1q();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_5().k1j_1) {
          var tmp$ret$9;
          // Inline function 'com.arkivanov.sample.shared.utils.AlertDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = ComposableLambda$invoke$ref_41(dispatchReceiver);
          var value_0 = tmp$ret$9;
          tmp1_cache_0.p1q(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_7;
        tmp$ret$11 = tmp$ret$10;
        var tmp_8 = tmp$ret$11;
        tmp$ret$12 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_3 = tmp$ret$12;
        $composer_10.u1c();
        tmp$ret$13 = tmp0_3;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        Surface$composable(tmp1_modifier, null, tmp_4, tmp_5, null, tmp0_elevation, tmp$ret$15, $composer_9, 1769472, 30);
        sourceInformationMarkerEnd($composer_8);
        $composer_7.u1c();
        $composer_7.i1p();
        $composer_3.u1c();
        $composer_2.u1c();
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.f1j();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function AlertDialog$composable$lambda_0($onDismissRequest, $confirmButton, $modifier, $title, $text, $$changed) {
    return function ($composer, $force) {
      AlertDialog$composable($onDismissRequest, $confirmButton, $modifier, $title, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RootContent$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=Decompose-compose.js.map
