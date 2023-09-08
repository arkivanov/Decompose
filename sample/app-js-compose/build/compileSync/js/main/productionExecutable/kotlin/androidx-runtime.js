(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    root['androidx-runtime'] = factory(typeof this['androidx-runtime'] === 'undefined' ? {} : this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.v8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.pb;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ec;
  var intercepted = kotlin_kotlin.$_$.t6;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var get = kotlin_kotlin.$_$.b7;
  var fold = kotlin_kotlin.$_$.a7;
  var minusKey = kotlin_kotlin.$_$.c7;
  var plus = kotlin_kotlin.$_$.e7;
  var isInterface = kotlin_kotlin.$_$.h8;
  var equals = kotlin_kotlin.$_$.u7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var fill = kotlin_kotlin.$_$.i4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var rotateLeft = kotlin_kotlin.$_$.bc;
  var hashCode = kotlin_kotlin.$_$.c8;
  var Enum = kotlin_kotlin.$_$.ya;
  var emptyList = kotlin_kotlin.$_$.f4;
  var toMutableList = kotlin_kotlin.$_$.k6;
  var MutableCollection = kotlin_kotlin.$_$.k3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var rotateRight = kotlin_kotlin.$_$.cc;
  var sortWith = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var to = kotlin_kotlin.$_$.jc;
  var compareValues = kotlin_kotlin.$_$.o6;
  var Long = kotlin_kotlin.$_$.db;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var IllegalStateException = kotlin_kotlin.$_$.cb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var defineProp = kotlin_kotlin.$_$.t7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var lazy = kotlin_kotlin.$_$.xb;
  var firstOrNull = kotlin_kotlin.$_$.l4;
  var compareTo = kotlin_kotlin.$_$.s7;
  var KMutableProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var isArray = kotlin_kotlin.$_$.f8;
  var Set = kotlin_kotlin.$_$.n3;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var plus_0 = kotlin_kotlin.$_$.q5;
  var Exception = kotlin_kotlin.$_$.ab;
  var copyToArray = kotlin_kotlin.$_$.d4;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var toString_0 = kotlin_kotlin.$_$.ic;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Element = kotlin_kotlin.$_$.d7;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var Collection = kotlin_kotlin.$_$.g3;
  var addAll = kotlin_kotlin.$_$.o3;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var toList = kotlin_kotlin.$_$.j6;
  var flatten = kotlin_kotlin.$_$.q4;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var CancellationException = kotlin_kotlin.$_$.q6;
  var addSuppressed = kotlin_kotlin.$_$.nb;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var removeFirst = kotlin_kotlin.$_$.x5;
  var arrayCopy = kotlin_kotlin.$_$.p3;
  var fill_0 = kotlin_kotlin.$_$.j4;
  var first = kotlin_kotlin.$_$.n4;
  var last = kotlin_kotlin.$_$.f5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var copyOf = kotlin_kotlin.$_$.c4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var copyOf_0 = kotlin_kotlin.$_$.b4;
  var List = kotlin_kotlin.$_$.h3;
  var checkIndexOverflow = kotlin_kotlin.$_$.u3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var sortWith_0 = kotlin_kotlin.$_$.e6;
  var AbstractList = kotlin_kotlin.$_$.y2;
  var Map = kotlin_kotlin.$_$.j3;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var coerceAtMost = kotlin_kotlin.$_$.j9;
  var arrayIterator = kotlin_kotlin.$_$.k7;
  var AbstractMutableList = kotlin_kotlin.$_$.b3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var indexOf = kotlin_kotlin.$_$.u4;
  var lastIndexOf = kotlin_kotlin.$_$.c5;
  var AbstractMap = kotlin_kotlin.$_$.z2;
  var AbstractMutableMap = kotlin_kotlin.$_$.c3;
  var MutableMap = kotlin_kotlin.$_$.m3;
  var MutableEntry = kotlin_kotlin.$_$.l3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var AbstractMutableSet = kotlin_kotlin.$_$.d3;
  var AbstractMutableCollection = kotlin_kotlin.$_$.a3;
  var Entry = kotlin_kotlin.$_$.i3;
  var AbstractSet = kotlin_kotlin.$_$.e3;
  var AbstractCollection = kotlin_kotlin.$_$.x2;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var until = kotlin_kotlin.$_$.q9;
  var step = kotlin_kotlin.$_$.p9;
  var countOneBits = kotlin_kotlin.$_$.ob;
  var takeLowestOneBit = kotlin_kotlin.$_$.dc;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var longArray = kotlin_kotlin.$_$.k8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var Char = kotlin_kotlin.$_$.va;
  var isCharSequence = kotlin_kotlin.$_$.g8;
  var contains = kotlin_kotlin.$_$.w3;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var singleOrNull = kotlin_kotlin.$_$.c6;
  var SequenceScope = kotlin_kotlin.$_$.v9;
  var intArrayIterator = kotlin_kotlin.$_$.d8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var toIntArray = kotlin_kotlin.$_$.i6;
  var sequence = kotlin_kotlin.$_$.ba;
  var anyToString = kotlin_kotlin.$_$.j7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var toSet = kotlin_kotlin.$_$.m6;
  var listOf = kotlin_kotlin.$_$.i5;
  var plus_1 = kotlin_kotlin.$_$.t5;
  var listOf_0 = kotlin_kotlin.$_$.j5;
  var println = kotlin_kotlin.$_$.i7;
  var printStackTrace = kotlin_kotlin.$_$.ac;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.ta;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.z1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionContextImpl, 'CompositionContextImpl', classMeta, CompositionContext);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  function changed(value) {
    return this.n1p(value);
  }
  function changed_0(value) {
    return this.q1p(value);
  }
  function changed_1(value) {
    return this.o1p(value);
  }
  function changed_2(value) {
    return this.p1p(value);
  }
  function changedInstance(value) {
    return this.x1h(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(SkippableUpdater, 'SkippableUpdater', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(ResultRecord, 'ResultRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(DerivedSnapshotState, 'DerivedSnapshotState', classMeta, VOID, [StateObject, DerivedState]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  setMetadataFor(snapshotFlow$slambda, 'snapshotFlow$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(NeverEqualPolicy, 'NeverEqualPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(ReferentialEqualityPolicy, 'ReferentialEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableState, 'SnapshotMutableState', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject, SnapshotMutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta);
  setMetadataFor(IntStack, 'IntStack', classMeta);
  setMetadataFor(Stack, 'Stack', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set]);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta);
  setMetadataFor(VectorListIterator, 'VectorListIterator', classMeta);
  setMetadataFor(MutableVectorList, 'MutableVectorList', classMeta, VOID, [List, MutableCollection]);
  setMetadataFor(SubList, 'SubList', classMeta, VOID, [List, MutableCollection]);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  function subList(fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  }
  setMetadataFor(ImmutableList, 'ImmutableList', interfaceMeta, VOID, [List, Collection]);
  setMetadataFor(SubList_0, 'SubList', classMeta, AbstractList, [ImmutableList, AbstractList]);
  setMetadataFor(PersistentMap, 'PersistentMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(SingleElementListIterator, 'SingleElementListIterator', classMeta, AbstractListIterator);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [ImmutableList, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [ImmutableList, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, List, MutableCollection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [ImmutableList, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, PersistentMap]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [Set, MutableCollection, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [MutableCollection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(TransparentObserverMutableSnapshot, 'TransparentObserverMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedReadonlySnapshot, 'NestedReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(ReadonlySnapshot, 'ReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(TransparentObserverSnapshot, 'TransparentObserverSnapshot', classMeta, Snapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [List, MutableCollection, StateObject]);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SubList$listIterator$1, VOID, classMeta);
  setMetadataFor(SubList_1, 'SubList', classMeta, VOID, [List, MutableCollection]);
  setMetadataFor(StateMapStateRecord, 'StateMapStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateMap, 'SnapshotStateMap', classMeta, VOID, [MutableMap, StateObject]);
  setMetadataFor(SnapshotMapSet, 'SnapshotMapSet', classMeta, VOID, [Set, MutableCollection]);
  setMetadataFor(SnapshotMapEntrySet, 'SnapshotMapEntrySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapKeySet, 'SnapshotMapKeySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapValueSet, 'SnapshotMapValueSet', classMeta, SnapshotMapSet);
  setMetadataFor(StateMapMutableEntriesIterator$next$1, VOID, classMeta, VOID, [MutableEntry]);
  setMetadataFor(StateMapMutableIterator, 'StateMapMutableIterator', classMeta);
  setMetadataFor(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(ObservedScopeMap, 'ObservedScopeMap', classMeta);
  setMetadataFor(SnapshotStateObserver, 'SnapshotStateObserver', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.v1b_1 = applier;
    this.w1b_1 = offset;
    this.x1b_1 = 0;
  }
  protoOf(OffsetApplier).m1b = function () {
    return this.v1b_1.m1b();
  };
  protoOf(OffsetApplier).p1b = function (node) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.x1b_1;
    tmp0_this.x1b_1 = tmp1 + 1 | 0;
    this.v1b_1.p1b(node);
  };
  protoOf(OffsetApplier).q1b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.x1b_1 > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.x1b_1;
    tmp0_this.x1b_1 = tmp1 - 1 | 0;
    this.v1b_1.q1b();
  };
  protoOf(OffsetApplier).r1b = function (index, instance) {
    this.v1b_1.r1b(index + (this.x1b_1 === 0 ? this.w1b_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).s1b = function (index, instance) {
    this.v1b_1.s1b(index + (this.x1b_1 === 0 ? this.w1b_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).t1b = function (index, count) {
    this.v1b_1.t1b(index + (this.x1b_1 === 0 ? this.w1b_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).u1b = function (from, to, count) {
    var effectiveOffset = this.x1b_1 === 0 ? this.w1b_1 : 0;
    this.v1b_1.u1b(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  protoOf(OffsetApplier).l3 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
      tmp$ret$0 = 'Clear is not valid on OffsetApplier';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  };
  function AbstractApplier(root) {
    this.y1b_1 = root;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.z1b_1 = tmp$ret$0;
    this.a1c_1 = this.y1b_1;
    this.b1c_1 = 8;
  }
  protoOf(AbstractApplier).c1c = function (_set____db54di) {
    this.a1c_1 = _set____db54di;
  };
  protoOf(AbstractApplier).m1b = function () {
    return this.a1c_1;
  };
  protoOf(AbstractApplier).d1c = function (node) {
    this.z1b_1.a(this.m1b());
    this.c1c(node);
  };
  protoOf(AbstractApplier).p1b = function (node) {
    return this.d1c((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).q1b = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.z1b_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c1c(this.z1b_1.k3(this.z1b_1.f() - 1 | 0));
  };
  protoOf(AbstractApplier).l3 = function () {
    this.z1b_1.l3();
    this.c1c(this.y1b_1);
    this.e1c();
  };
  function FrameAwaiter(onFrame, continuation) {
    this.f1c_1 = onFrame;
    this.g1c_1 = continuation;
  }
  protoOf(FrameAwaiter).h1c = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      tmp$ret$0 = this.f1c_1(timeNanos);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(e));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.g1c_1.f5(tmp$ret$3);
  };
  function fail($this, cause) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1c_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.k1c_1 == null))
      return Unit_getInstance();
    $this.k1c_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.l1c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp1_resumeWithException = item.g1c_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp1_resumeWithException.f5(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable <= last);
    $this.l1c_1.l3();
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.j1c_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.l1c_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.j3(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.i1c_1 = onNewAwaiters;
    this.j1c_1 = createSynchronizedObject();
    this.k1c_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.l1c_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.m1c_1 = tmp$ret$1;
    this.n1c_1 = 8;
  }
  protoOf(BroadcastFrameClock).o1c = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1c_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.l1c_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(BroadcastFrameClock).p1c = function (timeNanos) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1c_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.l1c_1;
    this.l1c_1 = this.m1c_1;
    this.m1c_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.g(i).h1c(timeNanos);
      }
       while (inductionVariable < last);
    toResume.l3();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(BroadcastFrameClock).q1c = function (onFrame, $completion) {
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this.j1c_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.k1c_1;
      if (!(cause == null)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.f5(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.l1c_1;
      tmp$ret$3 = !tmp1_isNotEmpty.l();
      var hadAwaiters = tmp$ret$3;
      var tmp = this.l1c_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      tmp$ret$4 = !hadAwaiters;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var hasNewAwaiters = tmp$ret$6;
      cancellable.rp(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.i1c_1 == null) : false) {
        try {
          this.i1c_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    tmp$ret$7 = cancellable.xo();
    var tmp0 = tmp$ret$7;
    return tmp0;
  };
  function $get_currentCompositeKeyHash$$composable_u3vbzj($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1422486212, $changed, -1, 'androidx.compose.runtime.$get-currentCompositeKeyHash$$composable (Composables.kt:224)');
    }
    var tmp0 = $composer_0.r1c();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function rememberCompositionContext$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(1739317627);
    sourceInformation($composer_0, 'C(rememberCompositionContext$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1739317627, $changed, -1, 'androidx.compose.runtime.rememberCompositionContext$composable (Composables.kt:480)');
    }
    var tmp0 = $composer_0.t1c();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.t1d();
    tmp$ret$0 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.d()) {
      var slot = tmp0_iterator_0.e();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.u1d(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.v1d(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        var composition = slot.x1d_1;
        if (!(composition == null)) {
          composition.q1e_1 = true;
          slot.rs();
        }
      }
    }
    _this__u8e3s4.y1e();
  }
  function _set_compositionLocalScope__ya1b9q($this, _set____db54di) {
    var tmp0_setValue = compositionLocalScope$factory();
    return $this.e1f_1.kk(_set____db54di);
  }
  function _get_compositionLocalScope__ulge9q($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = compositionLocalScope$factory_0();
    tmp$ret$0 = $this.e1f_1.b2();
    return tmp$ret$0;
  }
  function startRoot($this) {
    $this.n1g_1 = $this.i1f_1.q1h();
    startGroup($this, 100);
    $this.h1f_1.s1h();
    $this.a1g_1 = $this.h1f_1.t1h();
    $this.d1g_1.w1h(asInt($this.c1g_1));
    $this.c1g_1 = $this.x1h($this.a1g_1);
    $this.r1g_1 = null;
    if (!$this.v1f_1) {
      $this.v1f_1 = $this.h1f_1.y1h();
    }
    var tmp0_safe_receiver = resolveCompositionLocal($this, get_LocalInspectionTables(), $this.a1g_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.i1f_1);
      $this.h1f_1.z1h(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    startGroup($this, $this.h1f_1.a1i());
  }
  function endRoot($this) {
    endGroup($this);
    $this.h1f_1.b1i();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.n1g_1.o1i();
    $this.w1f_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.n1f_1.l3();
    $this.q1f_1.l3();
    $this.s1f_1.l3();
    $this.z1f_1.l3();
    $this.d1g_1.l3();
    $this.b1g_1.l3();
    if (!$this.n1g_1.h1i_1) {
      $this.n1g_1.o1i();
    }
    if (!$this.p1g_1.r1d_1) {
      $this.p1g_1.o1i();
    }
    createFreshInsertTable($this);
    $this.w1g_1 = 0;
    $this.g1g_1 = 0;
    $this.x1f_1 = false;
    $this.v1g_1 = false;
    $this.e1g_1 = false;
    $this.l1g_1 = false;
    $this.w1f_1 = false;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().r1i_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().r1i_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    var tmp0_this = $this;
    tmp0_this.r1f_1 = tmp0_this.r1f_1 + $this.n1g_1.u1i() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.r1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.n1g_1.k1i_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.v1g_1 ? $this.q1g_1 : false) {
      var current = $this.p1g_1.q1d_1;
      while (current > 0) {
        if ($this.p1g_1.x1i(current) === 202 ? equals($this.p1g_1.w1i(current), get_compositionLocalMap()) : false) {
          var tmp = $this.p1g_1.v1i(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
          $this.r1g_1 = providers;
          return providers;
        }
        current = $this.p1g_1.y1i(current);
      }
    }
    if ($this.n1g_1.f() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.n1g_1.x1i(current_0) === 202 ? equals($this.n1g_1.w1i(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.b1g_1.g(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.n1g_1.v1i(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.r1g_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.n1g_1.y1i(current_0);
      }
    }
    $this.r1g_1 = $this.a1g_1;
    return $this.a1g_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.z1i();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.ia(currentProviders);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.a1j();
    var providerScope = tmp$ret$1;
    startGroup_0($this, 204, get_providerMaps());
    $this.x1h(providerScope);
    $this.x1h(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function resolveCompositionLocal($this, key, scope) {
    var tmp;
    if (contains_0(scope, key)) {
      tmp = getValueOf(scope, key);
    } else {
      tmp = key.b1j_1.b2();
    }
    return tmp;
  }
  function ensureWriter($this) {
    if ($this.p1g_1.r1d_1) {
      $this.p1g_1 = $this.o1g_1.e1j();
      $this.p1g_1.f1j();
      $this.q1g_1 = false;
      $this.r1g_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.p1g_1.r1d_1);
    $this.o1g_1 = new SlotTable();
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.o1g_1.e1j();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.o1i();
    tmp$ret$0 = tmp0_also;
    tmp.p1g_1 = tmp$ret$0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.n1g_1.i1j();
    } else {
      if (!(data == null) ? !($this.n1g_1.g1j() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.n1g_1.h1j();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    tmp$ret$0 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().r1i_1));
    var isNode = tmp$ret$0;
    if ($this.v1g_1) {
      $this.n1g_1.j1j();
      var startIndex = $this.p1g_1.p1d_1;
      if (isNode) {
        $this.p1g_1.n1j(key, Companion_getInstance_1().k1j_1);
      } else if (!(data == null)) {
        var tmp = $this.p1g_1;
        var tmp0_elvis_lhs = objectKey;
        tmp.m1j(key, tmp0_elvis_lhs == null ? Companion_getInstance_1().k1j_1 : tmp0_elvis_lhs, data);
      } else {
        var tmp_0 = $this.p1g_1;
        var tmp1_elvis_lhs = objectKey;
        tmp_0.l1j(key, tmp1_elvis_lhs == null ? Companion_getInstance_1().k1j_1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = $this.o1f_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.u1j(insertKeyInfo, $this.p1f_1 - tmp2_safe_receiver.p1j_1 | 0);
        tmp$ret$1 = tmp2_safe_receiver.v1j(insertKeyInfo);
        tmp$ret$2 = tmp$ret$1;
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    tmp$ret$3 = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().s1i_1));
    if (!tmp$ret$3) {
      tmp_1 = $this.e1g_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.o1f_1 == null) {
      var slotKey = $this.n1g_1.w1j();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.n1g_1.y1j()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.o1f_1 = new Pending($this.n1g_1.x1j(), $this.p1f_1);
      }
    }
    var pending = $this.o1f_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.z1j(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.v1j(keyInfo);
        var location = keyInfo.e1k_1;
        $this.p1f_1 = pending.h1k(keyInfo) + pending.p1j_1 | 0;
        var relativePosition = pending.i1k(keyInfo);
        var currentRelativePosition = relativePosition - pending.q1j_1 | 0;
        pending.j1k(relativePosition, pending.q1j_1);
        recordReaderMoving($this, location);
        $this.n1g_1.k1k(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.n1g_1.j1j();
        $this.v1g_1 = true;
        $this.r1g_1 = null;
        ensureWriter($this);
        $this.p1g_1.a1k();
        var startIndex_0 = $this.p1g_1.p1d_1;
        if (isNode) {
          $this.p1g_1.n1j(key, Companion_getInstance_1().k1j_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.p1g_1;
          var tmp3_elvis_lhs = objectKey;
          tmp_2.m1j(key, tmp3_elvis_lhs == null ? Companion_getInstance_1().k1j_1 : tmp3_elvis_lhs, data);
        } else {
          var tmp_3 = $this.p1g_1;
          var tmp4_elvis_lhs = objectKey;
          tmp_3.l1j(key, tmp4_elvis_lhs == null ? Companion_getInstance_1().k1j_1 : tmp4_elvis_lhs);
        }
        $this.t1g_1 = $this.p1g_1.b1k(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.u1j(insertKeyInfo_0, $this.p1f_1 - pending.p1j_1 | 0);
        pending.v1j(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.p1f_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.n1f_1.l1k($this.o1f_1);
    $this.o1f_1 = newPending;
    $this.q1f_1.w1h($this.p1f_1);
    if (isNode)
      $this.p1f_1 = 0;
    $this.s1f_1.w1h($this.r1f_1);
    $this.r1f_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.n1f_1.m1k();
    if (!(previousPending == null) ? !inserting : false) {
      var tmp0_this = previousPending;
      var tmp1 = tmp0_this.q1j_1;
      tmp0_this.q1j_1 = tmp1 + 1 | 0;
    }
    $this.o1f_1 = previousPending;
    $this.p1f_1 = $this.q1f_1.m1k() + expectedNodeCount | 0;
    $this.r1f_1 = $this.s1f_1.m1k() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.v1g_1) {
      var parent = $this.p1g_1.q1d_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.p1g_1.x1i(parent), $this.p1g_1.w1i(parent), $this.p1g_1.v1i(parent));
    } else {
      var parent_0 = $this.n1g_1.k1i_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.n1g_1.x1i(parent_0), $this.n1g_1.w1i(parent_0), $this.n1g_1.v1i(parent_0));
    }
    var expectedNodeCount = $this.r1f_1;
    var pending = $this.o1f_1;
    if (!(pending == null) ? pending.o1j_1.f() > 0 : false) {
      var previous = pending.o1j_1;
      var current = pending.n1k();
      var usedKeys = fastToSet(current);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var placedKeys = tmp$ret$0;
      var currentIndex = 0;
      var currentEnd = current.f();
      var previousIndex = 0;
      var previousEnd = previous.f();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.g(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.h1k(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.p1j_1 | 0, previousInfo.f1k_1);
          pending.o1k(previousInfo.e1k_1, 0);
          recordReaderMoving($this, previousInfo.e1k_1);
          $this.n1g_1.k1k(previousInfo.e1k_1);
          recordDelete($this);
          $this.n1g_1.u1i();
          removeRange($this.y1f_1, previousInfo.e1k_1, previousInfo.e1k_1 + $this.n1g_1.p1k(previousInfo.e1k_1) | 0);
          var tmp0 = previousIndex;
          previousIndex = tmp0 + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          var tmp1 = previousIndex;
          previousIndex = tmp1 + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.g(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.h1k(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.q1k(currentInfo);
              recordMoveNode($this, nodePosition + pending.p1j_1 | 0, nodeOffset + pending.p1j_1 | 0, updatedCount);
              pending.r1k(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            var tmp2 = previousIndex;
            previousIndex = tmp2 + 1 | 0;
          }
          var tmp3 = currentIndex;
          currentIndex = tmp3 + 1 | 0;
          nodeOffset = nodeOffset + pending.q1k(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.n1g_1.s1k());
        $this.n1g_1.f1j();
      }
    }
    var removeIndex = $this.p1f_1;
    while (!$this.n1g_1.t1k()) {
      var startSlot = $this.n1g_1.i1i_1;
      recordDelete($this);
      var nodesToRemove = $this.n1g_1.u1i();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.y1f_1, startSlot, $this.n1g_1.i1i_1);
    }
    var inserting = $this.v1g_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.n1g_1.v1k();
      var parentGroup = $this.p1g_1.q1d_1;
      $this.p1g_1.w1k();
      if (!$this.n1g_1.y1k()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.p1g_1.x1k();
        $this.p1g_1.o1i();
        recordInsert($this, $this.t1g_1);
        $this.v1g_1 = false;
        if (!$this.i1f_1.it()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.n1g_1.k1i_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.n1g_1.u1k();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.l1g_1;
    $this.l1g_1 = true;
    var recomposed = false;
    var parent = $this.n1g_1.k1i_1;
    var end = parent + $this.n1g_1.p1k(parent) | 0;
    var recomposeIndex = $this.p1f_1;
    var recomposeCompoundKey = $this.w1g_1;
    var oldGroupNodeCount = $this.r1f_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.y1f_1, $this.n1g_1.i1i_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.a1l_1;
      removeLocation($this.y1f_1, location);
      if (firstInRange_0.f1l()) {
        recomposed = true;
        $this.n1g_1.k1k(location);
        var newGroup = $this.n1g_1.i1i_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.p1f_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.w1g_1 = compoundKeyOf($this, $this.n1g_1.y1i(newGroup), parent, recomposeCompoundKey);
        $this.r1g_1 = null;
        firstInRange_0.z1k_1.d1l($this);
        $this.r1g_1 = null;
        $this.n1g_1.e1l(parent);
      } else {
        $this.k1g_1.l1k(firstInRange_0.z1k_1);
        firstInRange_0.z1k_1.c1l();
        $this.k1g_1.m1k();
      }
      firstInRange_0 = firstInRange($this.y1f_1, $this.n1g_1.i1i_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.n1g_1.f1j();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.p1f_1 = recomposeIndex + parentGroupNodes | 0;
      $this.r1f_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.w1g_1 = recomposeCompoundKey;
    $this.l1g_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.n1f_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.n1f_1.g1l(pendingIndex);
            if (!(pending == null) ? pending.o1k(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.n1g_1.k1i_1;
        } else {
          if ($this.n1g_1.h1l(current))
            break $l$loop_0;
          current = $this.n1g_1.y1i(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.n1g_1.y1i(group);
    $l$loop: while (!(anchorGroup === recomposeGroup)) {
      if ($this.n1g_1.h1l(anchorGroup))
        break $l$loop;
      anchorGroup = $this.n1g_1.y1i(anchorGroup);
    }
    var index = $this.n1g_1.h1l(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.n1g_1.i1l(group) | 0) | 0;
    loop: while (index < nodeIndexLimit) {
      if (current === groupLocation)
        break loop;
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.n1g_1.p1k(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.u1f_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp$ret$0 = tmp0_safe_receiver.q2(group);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.t1f_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.n1g_1.i1l(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.u1f_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.u1f_1 = newCounts;
          tmp$ret$0 = newCounts;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.h4(group, count);
      } else {
        var tmp1_elvis_lhs = $this.t1f_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$3;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.n1g_1.f());
          fill(newCounts_0, -1);
          $this.t1f_1 = newCounts_0;
          tmp$ret$2 = newCounts_0;
          tmp$ret$3 = tmp$ret$2;
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.t1f_1 = null;
    $this.u1f_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.n1g_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.h1l(current)) {
        recordUp($this);
      }
      current = reader.y1i(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.n1g_1.y1i(group), nearestCommonRoot);
      if ($this.n1g_1.h1l(group)) {
        recordDown($this, nodeAt($this.n1g_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.n1g_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.n1g_1.y1i(group), recomposeGroup, recomposeKey);
        tmp$ret$0 = rotateLeft(tmp0_rol, 3);
        tmp_0 = tmp$ret$0 ^ groupKey;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.j1l(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.w1i(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp0_subject = tmp0_safe_receiver;
        var tmp_1;
        if (tmp0_subject instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.k6_1;
        } else {
          if (tmp0_subject instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.x1i(group);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.v1i(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().k1j_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
          tmp$ret$3 = tmp$ret$2;
          tmp_3 = tmp$ret$3;
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$4 = tmp_2;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.r1f_1 = $this.n1g_1.k1l();
    $this.n1g_1.f1j();
  }
  function addRecomposeScope($this) {
    if ($this.v1g_1) {
      var tmp = $this.m1f_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.k1g_1.l1k(scope);
      $this.l1l(scope);
      scope.n1l($this.i1g_1);
    } else {
      var invalidation = removeLocation($this.y1f_1, $this.n1g_1.k1i_1);
      var slot = $this.n1g_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().k1j_1)) {
        var tmp_1 = $this.m1f_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.l1l(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.m1l(!(invalidation == null));
      $this.k1g_1.l1k(scope_0);
      scope_0.n1l($this.i1g_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.o1l(get_movableContentKey(), content);
    $this.x1h(parameter);
    var savedCompoundKeyHash = $this.w1g_1;
    try {
      $this.w1g_1 = get_movableContentKey();
      if ($this.v1g_1) {
        $this.p1g_1.p1l();
      }
      var providersChanged = $this.v1g_1 ? false : !equals($this.n1g_1.g1j(), locals);
      if (providersChanged) {
        $this.b1g_1.q1l($this.n1g_1.i1i_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().r1i_1, locals);
      if ($this.v1g_1 ? !force : false) {
        $this.q1g_1 = true;
        $this.r1g_1 = null;
        var anchor = $this.p1g_1.b1k($this.p1g_1.y1i($this.p1g_1.q1d_1));
        var reference = new MovableContentStateReference(content, parameter, $this.m1f_1, $this.o1g_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.h1f_1.r1l(reference);
      } else {
        var savedProvidersInvalid = $this.c1g_1;
        $this.c1g_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(694380496, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.c1g_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.w1g_1 = savedCompoundKeyHash;
      $this.s1l();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.l1f_1;
      var savedChanges = $this.k1f_1;
      try {
        $this.k1f_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.f4();
            var from = item.g4();
            var anchor = to.x1l_1;
            var location = to.w1l_1.b1m(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.w1l_1;
              if (equals(toSlotTable, $this.o1g_1)) {
                createFreshInsertTable($this);
              }
              var tmp$ret$4;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp1_read = to.w1l_1;
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              var tmp0_let = tmp1_read.q1h();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.k1k(location);
                $this.z1g_1 = location;
                var tmp$ret$0;
                // Inline function 'kotlin.collections.mutableListOf' call
                tmp$ret$0 = ArrayList_init_$Create$();
                var offsetChanges = tmp$ret$0;
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to));
                var tmp_0;
                var tmp$ret$1;
                // Inline function 'kotlin.collections.isNotEmpty' call
                tmp$ret$1 = !offsetChanges.l();
                if (tmp$ret$1) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.o1i();
              }
              tmp$ret$2 = tmp;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
            } else {
              var resolvedState = $this.h1f_1.c1m(from);
              var tmp0_safe_receiver = resolvedState;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1m_1;
              var fromTable = tmp1_elvis_lhs == null ? from.w1l_1 : tmp1_elvis_lhs;
              var tmp2_safe_receiver = resolvedState;
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.d1m_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.b1k(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.x1l_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              var tmp$ret$5;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$5 = !nodesToInsert.l();
              if (tmp$ret$5) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.w1l_1, $this.i1f_1)) {
                  var group = $this.i1f_1.b1m(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              var tmp$ret$12;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp$ret$11;
              // Inline function 'kotlin.let' call
              var tmp2_let = fromTable.q1h();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$10;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.n1g_1;
                  var savedCountOverrides = $this.t1f_1;
                  $this.t1f_1 = null;
                  try {
                    $this.n1g_1 = tmp2_let;
                    var newLocation = fromTable.b1m(fromAnchor);
                    tmp2_let.k1k(newLocation);
                    $this.z1g_1 = newLocation;
                    var tmp$ret$6;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    tmp$ret$6 = ArrayList_init_$Create$();
                    var offsetChanges_0 = tmp$ret$6;
                    var tmp$ret$7;
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.k1f_1;
                      try {
                        $this.k1f_1 = offsetChanges_0;
                        var tmp_2 = tmp2_let.i1i_1;
                        tmp$ret$7 = recomposeMovableContent($this, from.v1l_1, to.v1l_1, tmp_2, from.y1l_1, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.k1f_1 = savedChanges_0;
                      }
                    }
                    var tmp_3;
                    var tmp$ret$8;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    tmp$ret$8 = !offsetChanges_0.l();
                    if (tmp$ret$8) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_3 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_3;
                    break $l$block_0;
                  }finally {
                    $this.n1g_1 = savedReader;
                    $this.t1f_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp2_let.o1i();
              }
              tmp$ret$10 = tmp_1;
              tmp$ret$11 = tmp$ret$10;
              tmp$ret$12 = tmp$ret$11;
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.z1g_1 = 0;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_1;
      }finally {
        $this.k1f_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.b1h_1;
    var savedIsComposing = $this.l1g_1;
    var savedNodeIndex = $this.p1f_1;
    try {
      $this.b1h_1 = false;
      $this.l1g_1 = true;
      $this.p1f_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.g(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.f4();
          var instances = item.g4();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            var last_0 = instances.g1m_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp0__anonymous__q1qw7t = instances.g(i);
                $this.f1m(scope, tmp0__anonymous__q1qw7t);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.f1m(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp1_safe_receiver = from;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = index;
        tmp = tmp1_safe_receiver.i1m(to, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.b1h_1 = savedImplicitRootStart;
      $this.l1g_1 = savedIsComposing;
      $this.p1f_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.j1m(_this__u8e3s4.k1i_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.j1m(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.x1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.x1f_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.x1f_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.k1f_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.x1g_1;
    if (count > 0) {
      $this.x1g_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.y1g_1.k1m()) {
      realizeDowns($this, $this.y1g_1.n3());
      $this.y1g_1.l3();
    }
  }
  function recordDown($this, node) {
    $this.y1g_1.l1k(node);
  }
  function recordUp($this) {
    if ($this.y1g_1.k1m()) {
      $this.y1g_1.m1k();
    } else {
      var tmp0_this = $this;
      var tmp1 = tmp0_this.x1g_1;
      tmp0_this.x1g_1 = tmp1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.n1g_1.k1i_1 : $this.n1g_1.i1i_1;
    var distance = location - $this.z1g_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = distance >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      tmp$ret$0 = 'Tried to seek backward';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.z1g_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.u1g_1.l()) {
      var insertTable = $this.o1g_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.u1g_1);
      $this.u1g_1.l3();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.o1g_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.u1g_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.d1h_1.l1k(change);
  }
  function registerInsertUpFixup($this) {
    $this.u1g_1.a($this.d1h_1.m1k());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.n1g_1.i1i_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    var tmp0_this = $this;
    tmp0_this.z1g_1 = tmp0_this.z1g_1 + $this.n1g_1.l1m() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.e1j();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp0_let.a1k();
      tmp0_let.l1j(get_movableContentKey(), reference.t1l_1);
      tmp0_let.p1l();
      tmp0_let.m1m(reference.u1l_1);
      slots.n1m(reference.x1l_1, 1, tmp0_let);
      tmp0_let.u1i();
      tmp0_let.w1k();
      tmp0_let.x1k();
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var state = new MovableContentState(slotTable);
    $this.h1f_1.o1m(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.i1f_1.p1m()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var changes = tmp$ret$0;
      $this.s1g_1 = changes;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      var tmp1_read = $this.i1f_1;
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_read.q1h();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.n1g_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.k1f_1;
          try {
            $this.k1f_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.a1h_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.k1f_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.o1i();
      }
      tmp$ret$2 = tmp;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.n1g_1.i1i_1 - $this.z1g_1 | 0;
    $this.z1g_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.n1g_1.f() > 0) {
      var reader = $this.n1g_1;
      var location = reader.k1i_1;
      if (!($this.c1h_1.q1m(-2) === location)) {
        if (!$this.a1h_1 ? $this.b1h_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.a1h_1 = true;
        }
        if (location > 0) {
          var anchor = reader.b1k(location);
          $this.c1h_1.w1h(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.n1g_1.k1i_1;
    var currentStartedGroup = $this.c1h_1.q1m(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = currentStartedGroup <= location;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      tmp$ret$0 = 'Missed recording an endGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if ($this.c1h_1.q1m(-1) === location) {
      $this.c1h_1.m1k();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.a1h_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.a1h_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.n1f_1.l();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$0 = 'Start/end imbalance';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = $this.c1h_1.l();
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$1 = 'Missed recording an endGroup()';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.o1f_1 = null;
    $this.p1f_1 = 0;
    $this.r1f_1 = 0;
    $this.z1g_1 = 0;
    $this.w1g_1 = 0;
    $this.x1f_1 = false;
    $this.a1h_1 = false;
    $this.c1h_1.l3();
    $this.k1g_1.l3();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = nodeIndex >= 0;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      if ($this.e1h_1 === nodeIndex) {
        var tmp0_this = $this;
        tmp0_this.h1h_1 = tmp0_this.h1h_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.e1h_1 = nodeIndex;
        $this.h1h_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.h1h_1 > 0 ? $this.f1h_1 === (from - $this.h1h_1 | 0) : false) ? $this.g1h_1 === (to - $this.h1h_1 | 0) : false) {
        var tmp0_this = $this;
        tmp0_this.h1h_1 = tmp0_this.h1h_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.f1h_1 = from;
        $this.g1h_1 = to;
        $this.h1h_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.h1h_1;
    $this.h1h_1 = 0;
    if (count > 0) {
      if ($this.e1h_1 >= 0) {
        var removeIndex = $this.e1h_1;
        $this.e1h_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.f1h_1;
        $this.f1h_1 = -1;
        var to = $this.g1h_1;
        $this.g1h_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder(ref) {
    this.r1m_1 = ref;
  }
  protoOf(CompositionContextHolder).s1m = function () {
  };
  protoOf(CompositionContextHolder).t1m = function () {
    this.r1m_1.wp();
  };
  protoOf(CompositionContextHolder).u1m = function () {
    this.r1m_1.wp();
  };
  function CompositionContextImpl($outer, compoundHashKey, collectingParameterInformation) {
    this.f1f_1 = $outer;
    CompositionContext.call(this);
    this.a1f_1 = compoundHashKey;
    this.b1f_1 = collectingParameterInformation;
    this.c1f_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.d1f_1 = tmp$ret$0;
    this.e1f_1 = mutableStateOf(persistentHashMapOf());
  }
  protoOf(CompositionContextImpl).a1i = function () {
    return this.a1f_1;
  };
  protoOf(CompositionContextImpl).y1h = function () {
    return this.b1f_1;
  };
  protoOf(CompositionContextImpl).wp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.d1f_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      var tmp0_safe_receiver = this.c1f_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_iterator = this.d1f_1.c();
        while (tmp0_iterator.d()) {
          var composer = tmp0_iterator.e();
          var tmp1_iterator = tmp0_safe_receiver.c();
          while (tmp1_iterator.d()) {
            var table = tmp1_iterator.e();
            table.j3(composer.i1f_1);
          }
        }
        tmp$ret$1 = Unit_getInstance();
      }
      this.d1f_1.l3();
    }
  };
  protoOf(CompositionContextImpl).v1m = function (composer) {
    protoOf(CompositionContext).v1m.call(this, composer instanceof ComposerImpl ? composer : THROW_CCE());
    this.d1f_1.a(composer);
  };
  protoOf(CompositionContextImpl).w1m = function (composer) {
    var tmp0_safe_receiver = this.c1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.CompositionContextImpl.unregisterComposer.<anonymous>' call
        element.j3((composer instanceof ComposerImpl ? composer : THROW_CCE()).i1f_1);
      }
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.remove' call
    var tmp0_remove = this.d1f_1;
    tmp$ret$0 = (isInterface(tmp0_remove, MutableCollection) ? tmp0_remove : THROW_CCE()).j3(composer);
  };
  protoOf(CompositionContextImpl).x1m = function (composition) {
    this.f1f_1.h1f_1.x1m(composition);
  };
  protoOf(CompositionContextImpl).y1m = function () {
    return this.f1f_1.h1f_1.y1m();
  };
  protoOf(CompositionContextImpl).z1m = function (composition) {
    this.f1f_1.h1f_1.z1m(this.f1f_1.m1f_1);
    this.f1f_1.h1f_1.z1m(composition);
  };
  protoOf(CompositionContextImpl).t1h = function () {
    return _get_compositionLocalScope__ulge9q(this);
  };
  protoOf(CompositionContextImpl).a1n = function (scope) {
    _set_compositionLocalScope__ya1b9q(this, scope);
  };
  protoOf(CompositionContextImpl).z1h = function (table) {
    var tmp0_elvis_lhs = this.c1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionContextImpl.recordInspectionTable.<anonymous>' call
      this.c1f_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(table);
  };
  protoOf(CompositionContextImpl).s1h = function () {
    var tmp0_this = this.f1f_1;
    var tmp1 = tmp0_this.g1g_1;
    tmp0_this.g1g_1 = tmp1 + 1 | 0;
  };
  protoOf(CompositionContextImpl).b1i = function () {
    var tmp0_this = this.f1f_1;
    var tmp1 = tmp0_this.g1g_1;
    tmp0_this.g1g_1 = tmp1 - 1 | 0;
  };
  protoOf(CompositionContextImpl).r1l = function (reference) {
    this.f1f_1.h1f_1.r1l(reference);
  };
  protoOf(CompositionContextImpl).b1n = function (reference) {
    this.f1f_1.h1f_1.b1n(reference);
  };
  protoOf(CompositionContextImpl).c1m = function (reference) {
    return this.f1f_1.h1f_1.c1m(reference);
  };
  protoOf(CompositionContextImpl).o1m = function (reference, data) {
    this.f1f_1.h1f_1.o1m(reference, data);
  };
  protoOf(CompositionContextImpl).c1n = function (composition, content) {
    this.f1f_1.h1f_1.c1n(composition, content);
  };
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().k1j_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.k6_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.w1g_1;
    tmp$ret$0 = rotateLeft(tmp0_rol, 3);
    tmp.w1g_1 = tmp$ret$0 ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().k1j_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.k6_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.w1g_1 ^ groupKey;
    tmp$ret$0 = rotateRight(tmp0_ror, 3);
    tmp.w1g_1 = tmp$ret$0;
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.l1g_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      tmp$ret$0 = 'Reentrant composition is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().d1n('Compose:recompose');
      try {
        $this.h1g_1 = currentSnapshot();
        $this.i1g_1 = $this.h1g_1.j1n();
        $this.b1g_1.l3();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.m1n_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.k1n_1[index];
            var tmp0__anonymous__q1qw7t = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.l1n_1[index];
            var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0__anonymous__q1qw7t.y1d_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1n_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.y1f_1.a(new Invalidation(tmp0__anonymous__q1qw7t, location, tmp1__anonymous__uwfjfc));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.y1f_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.p1f_1 = 0;
        var complete = false;
        $this.l1g_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.o1n();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.l1l((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          var tmp_4 = ComposerImpl$doCompose$composable$lambda_0($this);
          var tmp_5 = ComposerImpl$doCompose$composable$lambda_1($this);
          observeDerivedStateRecalculations(tmp_4, tmp_5, ComposerImpl$doCompose$composable$lambda_2(content, $this, savedContent));
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.l1g_1 = false;
          $this.y1f_1.l3();
          if (!complete) {
            abortRoot($this);
          }
        }
        tmp$ret$2 = tmp_3;
        break $l$block;
      }finally {
        Trace_getInstance().p1n(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.q1n_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ud = function (a, b) {
    return this.q1n_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ud(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.r1n(index)) {
      slots.f1j();
      if (slots.h1l(slots.q1d_1)) {
        applier.q1b();
      }
      slots.w1k();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.p1d_1;
    var current = slots.q1d_1;
    while (current >= 0 ? !slots.h1l(current) : false) {
      current = slots.y1i(current);
    }
    var index = 0;
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    while (current < original) {
      if (slots.s1n(original, current)) {
        if (slots.h1l(current))
          index = 0;
        var tmp1 = current;
        current = tmp1 + 1 | 0;
      } else {
        index = index + (slots.h1l(current) ? 1 : slots.i1l(current)) | 0;
        current = current + slots.p1k(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.b1m(anchor);
    runtimeCheck(slots.p1d_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.p1d_1 < destination) {
      if (slots.u1n(destination)) {
        if (slots.t1n()) {
          applier.p1b(slots.j1m(slots.p1d_1));
          nodeIndex = 0;
        }
        slots.h1j();
      } else
        nodeIndex = nodeIndex + slots.u1i() | 0;
    }
    runtimeCheck(slots.p1d_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.n1g_1.x1n(group)) {
      var key = this$0.n1g_1.x1i(group);
      var objectKey = this$0.n1g_1.w1i(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.n1g_1.w1n(group, 0);
        var anchor = this$0.n1g_1.b1k(group);
        var end = group + this$0.n1g_1.p1k(group) | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.y1f_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.f());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.g(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            tmp$ret$0 = to(item.z1k_1, item.b1l_1);
            var tmp0_plusAssign = tmp$ret$0;
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        tmp$ret$1 = target;
        var invalidations = tmp$ret$1;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.m1f_1, this$0.i1f_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.h1f_1.b1n(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.n1g_1.h1l(group) ? 1 : this$0.n1g_1.i1l(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.n1g_1.i1l(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.n1g_1.w1n(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.r1m_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp1_forEach = compositionContext.d1f_1;
            var tmp0_iterator = tmp1_forEach.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
            }
          }
          tmp_0 = this$0.n1g_1.i1l(group);
        } else {
          tmp_0 = this$0.n1g_1.i1l(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.n1g_1.v1n(group)) {
      var size = this$0.n1g_1.p1k(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.n1g_1.h1l(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.n1g_1.j1m(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.n1g_1.p1k(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.n1g_1.i1l(group);
    }
    return tmp;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.y1n($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.r1b($insertIndex, node);
      applier.p1b(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.z1n($groupAnchor);
      applier.q1b();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.s1b($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.m1b();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).v1c();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.m1b();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.a1o($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.a1o($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.b1o($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.v1d(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          var composition = previous.x1d_1;
          var tmp_1;
          if (!(composition == null)) {
            previous.rs();
            composition.q1e_1 = true;
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSideEffect$lambda($effect) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.c1o($effect);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.s1c(935231726);
      sourceInformation($composer_0, 'C1983@73024L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(935231726, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1982)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.u1c();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.d1o($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.e1o($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda($node) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.f1o($node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda($data, $group, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp0_runtimeCheck = equals($data, slots.g1o($group, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      rememberManager.v1d($data);
      slots.b1o($index, Companion_getInstance_1().k1j_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda_0($data, $group, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_runtimeCheck = equals($data, slots.g1o($group, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      slots.b1o($index, Companion_getInstance_1().k1j_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda_0(this$0, $group) {
    return function (index, data) {
      var tmp0_subject = data;
      var tmp;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, RememberObserver) : false) {
        this$0.n1g_1.k1k($group);
        recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda(data, $group, index));
        tmp = Unit_getInstance();
      } else {
        if (tmp0_subject instanceof RecomposeScopeImpl) {
          var composition = data.x1d_1;
          if (!(composition == null)) {
            composition.q1e_1 = true;
            data.rs();
          }
          this$0.n1g_1.k1k($group);
          recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda_0(data, $group, index));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.m1f_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112191L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(694380496, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.i1o_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.k1f_1;
        try {
          this$0.k1f_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.n1g_1;
            var savedCountOverrides = this$0.t1f_1;
            this$0.t1f_1 = null;
            try {
              this$0.n1g_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.t1l_1, $to.z1l_1, $to.u1l_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.n1g_1 = savedReader;
              this$0.t1f_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.k1f_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.s1b(base + index | 0, item);
          applier.r1b(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.h1f_1.c1m($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.l1o(1, state.d1m_1, 2);
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.l();
      if (tmp$ret$0) {
        var tmp_1 = $to.v1l_1;
        var toComposition = tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.f() - 1 | 0;
        var tmp_2;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = slots.m1o(item, 0);
            var recomposeScope = tmp_3 instanceof RecomposeScopeImpl ? tmp_3 : null;
            var tmp0_safe_receiver = recomposeScope;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.n1o(toComposition);
            }
          }
           while (inductionVariable <= last);
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.t1l_1, $to.z1l_1, $to.u1l_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.g(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (isInterface(applier, Applier))
      applier;
    else
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.w1k();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.q1b();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.p1b($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.o1o($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.a1k();
      slots.q1o($insertTable, $anchor.p1o($insertTable));
      slots.x1k();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.e1j();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.f() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.g(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.o1i();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.a1k();
      slots.q1o($insertTable, $anchor.p1o($insertTable));
      slots.x1k();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r1o($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.t1b($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.u1b($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.a1l_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.a1l_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposerImpl$doCompose$composable$lambda_0(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.g1g_1;
      tmp0_this.g1g_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_1(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.g1g_1;
      tmp0_this.g1g_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_2($content, this$0, $savedContent) {
    return function () {
      var tmp;
      if (!($content == null)) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, $content);
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else if (((this$0.w1f_1 ? true : this$0.c1g_1) ? !($savedContent == null) : false) ? !equals($savedContent, Companion_getInstance_1().k1j_1) : false) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, (!($savedContent == null) ? typeof $savedContent === 'function' : false) ? $savedContent : THROW_CCE());
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else {
        this$0.s1o();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.g1f_1 = applier;
    this.h1f_1 = parentContext;
    this.i1f_1 = slotTable;
    this.j1f_1 = abandonSet;
    this.k1f_1 = changes;
    this.l1f_1 = lateChanges;
    this.m1f_1 = composition;
    this.n1f_1 = new Stack();
    this.o1f_1 = null;
    this.p1f_1 = 0;
    this.q1f_1 = new IntStack();
    this.r1f_1 = 0;
    this.s1f_1 = new IntStack();
    this.t1f_1 = null;
    this.u1f_1 = null;
    this.v1f_1 = false;
    this.w1f_1 = false;
    this.x1f_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.y1f_1 = tmp$ret$0;
    this.z1f_1 = new IntStack();
    this.a1g_1 = persistentHashMapOf();
    this.b1g_1 = new IntMap();
    this.c1g_1 = false;
    this.d1g_1 = new IntStack();
    this.e1g_1 = false;
    this.f1g_1 = -1;
    this.g1g_1 = 0;
    this.h1g_1 = currentSnapshot();
    this.i1g_1 = 0;
    this.j1g_1 = true;
    this.k1g_1 = new Stack();
    this.l1g_1 = false;
    this.m1g_1 = false;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.i1f_1.q1h();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.o1i();
    tmp$ret$1 = tmp0_also;
    tmp_0.n1g_1 = tmp$ret$1;
    this.o1g_1 = new SlotTable();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.o1g_1.e1j();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.o1i();
    tmp$ret$2 = tmp0_also_0;
    tmp_1.p1g_1 = tmp$ret$2;
    this.q1g_1 = false;
    this.r1g_1 = null;
    this.s1g_1 = null;
    var tmp_2 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp1_read = this.o1g_1;
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_read.q1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_3;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp$ret$3 = tmp0_let.b1k(0);
      tmp_3 = tmp$ret$3;
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$4 = tmp_3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp_2.t1g_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    tmp_4.u1g_1 = tmp$ret$7;
    this.v1g_1 = false;
    this.w1g_1 = 0;
    this.x1g_1 = 0;
    this.y1g_1 = new Stack();
    this.z1g_1 = 0;
    this.a1h_1 = false;
    this.b1h_1 = true;
    this.c1h_1 = new IntStack();
    this.d1h_1 = new Stack();
    this.e1h_1 = -1;
    this.f1h_1 = -1;
    this.g1h_1 = -1;
    this.h1h_1 = 0;
  }
  protoOf(ComposerImpl).t1o = function () {
    return this.g1f_1;
  };
  protoOf(ComposerImpl).u1o = function () {
    return this.g1g_1 > 0;
  };
  protoOf(ComposerImpl).v1o = function () {
    return this.h1f_1.y1m();
  };
  protoOf(ComposerImpl).s1c = function (key) {
    return start(this, key, null, Companion_getInstance_2().r1i_1, null);
  };
  protoOf(ComposerImpl).u1c = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).w1o = function () {
    return start(this, -127, null, Companion_getInstance_2().r1i_1, null);
  };
  protoOf(ComposerImpl).x1o = function () {
    endGroup(this);
    var scope = this.y1o();
    if (!(scope == null) ? scope.n1k() : false) {
      scope.z1o(true);
    }
  };
  protoOf(ComposerImpl).a1p = function () {
    var tmp;
    if (this.c1g_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.y1o();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1p()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).o1l = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().r1i_1, null);
  };
  protoOf(ComposerImpl).s1l = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).b1p = function () {
    this.b1g_1.l3();
  };
  protoOf(ComposerImpl).c1p = function () {
    return this.v1g_1;
  };
  protoOf(ComposerImpl).k1o = function () {
    var tmp;
    var tmp_0;
    if ((!this.v1g_1 ? !this.e1g_1 : false) ? !this.c1g_1 : false) {
      var tmp0_safe_receiver = this.y1o();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1p()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.w1f_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).r1c = function () {
    return this.w1g_1;
  };
  protoOf(ComposerImpl).wp = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().d1n('Compose:Composer.dispose');
      try {
        this.h1f_1.w1m(this);
        this.k1g_1.l3();
        this.y1f_1.l3();
        this.k1f_1.l3();
        this.b1g_1.l3();
        this.g1f_1.l3();
        this.m1g_1 = true;
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }finally {
        Trace_getInstance().p1n(token);
      }
    }
  };
  protoOf(ComposerImpl).i1j = function () {
    start(this, 125, null, Companion_getInstance_2().s1i_1, null);
    this.x1f_1 = true;
  };
  protoOf(ComposerImpl).e1p = function () {
    start(this, 125, null, Companion_getInstance_2().t1i_1, null);
    this.x1f_1 = true;
  };
  protoOf(ComposerImpl).f1p = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.v1g_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      tmp$ret$0 = 'createNode() can only be called when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.q1f_1.g1p();
    var groupAnchor = this.p1g_1.b1k(this.p1g_1.q1d_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.r1f_1;
    tmp0_this.r1f_1 = tmp1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).h1p = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.v1g_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      tmp$ret$0 = 'useNode() called while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.n1g_1, this);
    recordDown(this, node);
    var tmp;
    if (this.e1g_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).i1p = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).j1p = function (key, dataKey) {
    if ((this.n1g_1.w1j() === key ? !equals(this.n1g_1.g1j(), dataKey) : false) ? this.f1g_1 < 0 : false) {
      this.f1g_1 = this.n1g_1.i1i_1;
      this.e1g_1 = true;
    }
    start(this, key, null, Companion_getInstance_2().r1i_1, dataKey);
  };
  protoOf(ComposerImpl).k1p = function () {
    if (this.e1g_1 ? this.n1g_1.k1i_1 === this.f1g_1 : false) {
      this.f1g_1 = -1;
      this.e1g_1 = false;
    }
    end(this, false);
  };
  protoOf(ComposerImpl).l1p = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.v1g_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).o1n = function () {
    var tmp;
    if (this.v1g_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().k1j_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.n1g_1.e();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp$ret$0 = this.e1g_1 ? Companion_getInstance_1().k1j_1 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ComposerImpl).x1h = function (value) {
    var tmp;
    if (!equals(this.o1n(), value)) {
      this.l1l(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).m1p = function (value) {
    var tmp;
    if (!(this.o1n() === value)) {
      this.l1l(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).n1p = function (value) {
    var next = this.o1n();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l1l(value);
    return true;
  };
  protoOf(ComposerImpl).o1p = function (value) {
    var next = this.o1n();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l1l(value);
    return true;
  };
  protoOf(ComposerImpl).p1p = function (value) {
    var next = this.o1n();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.l1l(value);
    return true;
  };
  protoOf(ComposerImpl).q1p = function (value) {
    var next = this.o1n();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l1l(value);
    return true;
  };
  protoOf(ComposerImpl).l1l = function (value) {
    if (this.v1g_1) {
      this.p1g_1.m1m(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.j1f_1.a(value);
      }
    } else {
      var groupSlotIndex = this.n1g_1.r1p() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.j1f_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).s1p = function (effect) {
    record(this, ComposerImpl$recordSideEffect$lambda(effect));
  };
  protoOf(ComposerImpl).t1p = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.v1g_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.q1g_1 = true;
    } else {
      var tmp = this.n1g_1.u1p(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.n1g_1.u1p(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.k1o() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.v1g_1 : false) {
      this.b1g_1.q1l(this.n1g_1.i1i_1, providers);
    }
    this.d1g_1.w1h(asInt(this.c1g_1));
    this.c1g_1 = invalid;
    this.r1g_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().r1i_1, providers);
  };
  protoOf(ComposerImpl).v1p = function () {
    endGroup(this);
    endGroup(this);
    this.c1g_1 = asBool(this.d1g_1.m1k());
    this.r1g_1 = null;
  };
  protoOf(ComposerImpl).w1p = function (key) {
    return resolveCompositionLocal(this, key, currentCompositionLocalScope(this));
  };
  protoOf(ComposerImpl).t1c = function () {
    startGroup_0(this, 206, get_reference());
    if (this.v1g_1) {
      this.p1g_1.p1l();
    }
    var tmp = this.o1n();
    var holder = tmp instanceof CompositionContextHolder ? tmp : null;
    if (holder == null) {
      holder = new CompositionContextHolder(new CompositionContextImpl(this, this.w1g_1, this.v1f_1));
      this.l1l(holder);
    }
    holder.r1m_1.a1n(currentCompositionLocalScope(this));
    endGroup(this);
    return holder.r1m_1;
  };
  protoOf(ComposerImpl).y1o = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.k1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    tmp$ret$0 = (this.g1g_1 === 0 ? tmp0_let.k1m() : false) ? tmp0_let.g1p() : null;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ComposerImpl).f1m = function (scope, instance) {
    var tmp0_elvis_lhs = scope.y1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var location = anchor.p1o(this.i1f_1);
    if (this.l1g_1 ? location >= this.n1g_1.i1i_1 : false) {
      insertIfMissing(this.y1f_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).s1o = function () {
    if (this.y1f_1.l()) {
      skipGroup(this);
    } else {
      var reader = this.n1g_1;
      var key = reader.w1j();
      var dataKey = reader.y1j();
      var aux = reader.g1j();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.t1n(), null);
      recomposeToGroupEnd(this);
      reader.u1k();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).f1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.r1f_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.y1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x1p();
    }
    if (this.y1f_1.l()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).y1p = function (changed) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.r1f_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling dactivateToEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (!this.v1g_1) {
      if (!changed) {
        skipReaderToGroupEnd(this);
        return Unit_getInstance();
      }
      var start = this.n1g_1.i1i_1;
      var end = this.n1g_1.j1i_1;
      var inductionVariable = start;
      if (inductionVariable < end)
        do {
          var group = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (this.n1g_1.h1l(group)) {
            var node = this.n1g_1.j1m(group);
            if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
              record(this, ComposerImpl$deactivateToEndGroup$lambda(node));
            }
          }
          var tmp = this.n1g_1;
          tmp.z1p(group, ComposerImpl$deactivateToEndGroup$lambda_0(this, group));
        }
         while (inductionVariable < end);
      removeRange(this.y1f_1, start, end);
      this.n1g_1.k1k(start);
      this.n1g_1.f1j();
    }
  };
  protoOf(ComposerImpl).a1q = function (key) {
    start(this, key, null, Companion_getInstance_2().r1i_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).b1q = function () {
    var scope = this.k1g_1.k1m() ? this.k1g_1.m1k() : null;
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.m1l(false);
    }
    var tmp1_safe_receiver = scope;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c1q(this.i1g_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp;
    if ((!(scope == null) ? !scope.e1q() : false) ? scope.n1k() ? true : this.v1f_1 : false) {
      if (scope.y1d_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.v1g_1) {
          tmp_1 = this.p1g_1.b1k(this.p1g_1.q1d_1);
        } else {
          tmp_1 = this.n1g_1.b1k(this.n1g_1.k1i_1);
        }
        tmp_0.y1d_1 = tmp_1;
      }
      scope.d1q(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).f1q = function (value, parameter) {
    invokeMovableContentLambda(this, value instanceof MovableContent ? value : THROW_CCE(), currentCompositionLocalScope(this), parameter, false);
  };
  protoOf(ComposerImpl).g1q = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).h1q = function (sourceInformation) {
    if (this.v1g_1 ? this.j1g_1 : false) {
      this.p1g_1.i1q(sourceInformation);
    }
  };
  protoOf(ComposerImpl).j1q = function (key, sourceInformation) {
    if (this.j1g_1) {
      start(this, key, null, Companion_getInstance_2().r1i_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).k1q = function () {
    if (this.j1g_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).l1q = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.l1g_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      tmp$ret$0 = 'Preparing a composition while composing is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.l1g_1 = true;
    try {
      block();
    }finally {
      this.l1g_1 = false;
    }
  };
  protoOf(ComposerImpl).m1q = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1f_1.l();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.k1m()) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.y1f_1;
      tmp$ret$1 = !tmp1_isNotEmpty.l();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.w1f_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp2_isNotEmpty = this.k1f_1;
      tmp$ret$2 = !tmp2_isNotEmpty.l();
      return tmp$ret$2;
    }
    return false;
  };
  protoOf(ComposerImpl).n1q = function () {
    return this.y1o();
  };
  protoOf(ComposerImpl).o1q = function () {
    return this.o1n();
  };
  protoOf(ComposerImpl).p1q = function (value) {
    return this.l1l(value);
  };
  protoOf(ComposerImpl).q1q = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.r1q(true);
    }
  };
  protoOf(ComposerImpl).s1q = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1f_1.l();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.k1j_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.t1l_1 = content;
    this.u1l_1 = parameter;
    this.v1l_1 = composition;
    this.w1l_1 = slotTable;
    this.x1l_1 = anchor;
    this.y1l_1 = invalidations;
    this.z1l_1 = locals;
    this.a1m_1 = 8;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      tmp$ret$0 = 'Check failed';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.d1m_1 = slotTable;
    this.e1m_1 = 8;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.h1q(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    tmp$ret$0 = !(tmp0_let == null) ? tmp0_let.t1q() : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1q(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1q();
    }
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j1q(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1q();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.w1q_1 = compositionLocal;
    this.x1q_1 = value;
    this.y1q_1 = canOverride;
    this.z1q_1 = 0;
  }
  function MovableContent(content) {
    this.i1o_1 = content;
    this.j1o_1 = 0;
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.a1r_1 = message;
  }
  protoOf(ComposeRuntimeError).l8 = function () {
    return this.a1r_1;
  };
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.l8();
  });
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.o1j_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.o1j_1.g(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.o1j_1 = keyInfos;
    this.p1j_1 = startIndex;
    this.q1j_1 = 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.p1j_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      tmp$ret$0 = 'Invalid start index';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp.r1j_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var result = tmp$ret$2;
    var inductionVariable = 0;
    var last = this.o1j_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.o1j_1.g(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.e1k_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.f1k_1);
        result.h4(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.f1k_1 | 0;
      }
       while (inductionVariable < last);
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    tmp_0.s1j_1 = tmp$ret$4;
    var tmp_1 = this;
    tmp_1.t1j_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).b1r = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyMap$factory();
    tmp$ret$0 = this.t1j_1.b2();
    return tmp$ret$0;
  };
  protoOf(Pending).z1j = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.b1r(), joinedKey);
  };
  protoOf(Pending).v1j = function (keyInfo) {
    return this.r1j_1.a(keyInfo);
  };
  protoOf(Pending).n1k = function () {
    return this.r1j_1;
  };
  protoOf(Pending).j1k = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.s1j_1.s2();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.c1r_1;
        if (position === from)
          element.c1r_1 = to;
        else if (to <= position ? position < from : false)
          element.c1r_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.s1j_1.s2();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.c1r_1;
        if (position_0 === from)
          element_0.c1r_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.c1r_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).r1k = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.s1j_1.s2();
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.d1r_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.d1r_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.d1r_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.s1j_1.s2();
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.d1r_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.d1r_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.d1r_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).u1j = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.s1j_1;
    var tmp1_set = keyInfo.e1k_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.h4(tmp1_set, tmp2_set);
  };
  protoOf(Pending).o1k = function (group, newCount) {
    var groupInfo = this.s1j_1.q2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.d1r_1;
      var difference = newCount - groupInfo.e1r_1 | 0;
      groupInfo.e1r_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.s1j_1.s2();
        var tmp0_iterator = tmp0_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.d1r_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.d1r_1 + difference | 0;
            if (newIndex >= 0)
              element.d1r_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).i1k = function (keyInfo) {
    var tmp0_safe_receiver = this.s1j_1.q2(keyInfo.e1k_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1r_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).h1k = function (keyInfo) {
    var tmp0_safe_receiver = this.s1j_1.q2(keyInfo.e1k_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1r_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).q1k = function (keyInfo) {
    var tmp0_safe_receiver = this.s1j_1.q2(keyInfo.e1k_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1r_1;
    return tmp1_elvis_lhs == null ? keyInfo.f1k_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.z1k_1 = scope;
    this.a1l_1 = location;
    this.b1l_1 = instances;
  }
  protoOf(Invalidation).f1l = function () {
    return this.z1k_1.f1r(this.b1l_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.r1i_1 = _GroupKind___init__impl__iwqg06(0);
    this.s1i_1 = _GroupKind___init__impl__iwqg06(1);
    this.t1i_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    _init_properties_Composer_kt__bmp4g0();
    var $composer_0 = $composer;
    $composer_0.s1c(692276709);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):Composer.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(692276709, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (Composer.kt:320)');
    }
    var result = persistentHashMapOf();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.z1i();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var provided = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.s1c(1391443232);
      sourceInformation($composer_0, '*330@12010L24');
      if (provided.y1q_1 ? true : !contains_0(parentScope, provided.w1q_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.w1q_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.w1q_1.g1r(provided.x1q_1, $composer_0, 0);
        tmp0_apply.h4(tmp0_set, tmp1_set);
      }
      $composer_0.u1c();
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.a1j();
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function contains_0(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.k2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.q2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.g(index);
      if (validation.a1l_1 < end) {
        _this__u8e3s4.k3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.g(index);
      if (firstInvalidation.a1l_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.k3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.y1i(a) === b)
      return b;
    if (_this__u8e3s4.y1i(b) === a)
      return a;
    if (_this__u8e3s4.y1i(a) === _this__u8e3s4.y1i(b))
      return _this__u8e3s4.y1i(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.y1i(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.y1i(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.y1i(currentA);
      currentB = _this__u8e3s4.y1i(currentB);
    }
    return currentA;
  }
  function get_reuseKey() {
    return reuseKey;
  }
  var reuseKey;
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp0_safe_receiver = instance;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.h1r(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      _this__u8e3s4.h3(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.g(index).b1l_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.g(index).b1l_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.h1r(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.q1h();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.b1m(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var invalidation = _this__u8e3s4.g(index);
      if (invalidation.a1l_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.c1r_1 = slotIndex;
    this.d1r_1 = nodeIndex;
    this.e1r_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.q2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var answer = tmp$ret$0;
      _this__u8e3s4.h4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.d1k_1 == null) ? new JoinedKey(_this__u8e3s4.c1k_1, _this__u8e3s4.d1k_1) : _this__u8e3s4.c1k_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.q2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp$ret$0 = tmp1_safe_receiver;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.g(mid);
      var cmp = compareTo(midVal.a1l_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.y1i(current);
      var tmp0 = count;
      count = tmp0 + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.q2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.j3(value);
      var tmp_0;
      if (tmp0_safe_receiver.l()) {
        _this__u8e3s4.s4(key);
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$0 = tmp_0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.c1p() ? true : !equals(tmp0_with.o1q(), value)) {
      tmp0_with.p1q(value);
      _Updater___get_composer__impl__9ty7av($this).l1p(value, block);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.i1r_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.i1r_1 = composer;
  }
  protoOf(SkippableUpdater).toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.i1r_1);
  };
  protoOf(SkippableUpdater).hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.i1r_1);
  };
  protoOf(SkippableUpdater).equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.i1r_1, other);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.h1l(group)) {
      result.a($reader.j1m(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.p1k(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.p1k(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.f1j();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.w1k();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.j1r(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.k1r();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function compositionLocalScope$factory() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function compositionLocalScope$factory_0() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.b1r();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (properties_initialized_Composer_kt_89qzc2) {
    } else {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.t1e_1.u1o();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.f1e_1.n1r(get_PendingApplyNoModifications());
    if (toRecord == null) {
    } else {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.f1e_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.f1e_1.n1r(null);
    if (equals(toRecord, get_PendingApplyNoModifications())) {
    } else {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.f1e_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (value instanceof RecomposeScopeImpl) {
        value.o1r(null);
      } else {
        addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, value);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = $this.l1e_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.g1m_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
              addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, tmp2__anonymous__z9zvc9);
            }
             while (inductionVariable < last);
        }
      }
    }
    var tmp;
    if (forgetConditionalScopes) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp3_isNotEmpty = $this.k1e_1;
      tmp$ret$0 = !tmp3_isNotEmpty.l();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp4_removeValueIf = $this.j1e_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var destinationIndex = 0;
      var inductionVariable_0 = 0;
      var last_0 = tmp4_removeValueIf.s1r_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var valueIndex = tmp4_removeValueIf.p1r_1[i_0];
          var set = ensureNotNull(tmp4_removeValueIf.r1r_1[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var destinationIndex_0 = 0;
          var inductionVariable_1 = 0;
          var last_1 = set.g1m_1;
          if (inductionVariable_1 < last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp_0 = set.h1m_1[i_1];
              var item = isObject(tmp_0) ? tmp_0 : THROW_CCE();
              var tmp$ret$3;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_1;
              if ($this.k1e_1.m(item)) {
                tmp_1 = true;
              } else {
                var tmp0_safe_receiver = invalidated._v;
                var tmp_2;
                if (tmp0_safe_receiver == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$2;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$1;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp$ret$1 = tmp0_safe_receiver.m(item);
                  tmp$ret$2 = tmp$ret$1;
                  tmp_2 = tmp$ret$2;
                }
                tmp_1 = tmp_2 === true;
              }
              tmp$ret$3 = tmp_1;
              if (!tmp$ret$3) {
                if (!(destinationIndex_0 === i_1)) {
                  set.h1m_1[destinationIndex_0] = item;
                }
                var tmp1 = destinationIndex_0;
                destinationIndex_0 = tmp1 + 1 | 0;
              }
            }
             while (inductionVariable_1 < last_1);
          var inductionVariable_2 = destinationIndex_0;
          var last_2 = set.g1m_1;
          if (inductionVariable_2 < last_2)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              set.h1m_1[i_2] = null;
            }
             while (inductionVariable_2 < last_2);
          set.g1m_1 = destinationIndex_0;
          if (set.g1m_1 > 0) {
            if (!(destinationIndex === i_0)) {
              var destinationKeyOrder = tmp4_removeValueIf.p1r_1[destinationIndex];
              tmp4_removeValueIf.p1r_1[destinationIndex] = valueIndex;
              tmp4_removeValueIf.p1r_1[i_0] = destinationKeyOrder;
            }
            var tmp1_0 = destinationIndex;
            destinationIndex = tmp1_0 + 1 | 0;
          }
        }
         while (inductionVariable_0 < last_0);
      var inductionVariable_3 = destinationIndex;
      var last_3 = tmp4_removeValueIf.s1r_1;
      if (inductionVariable_3 < last_3)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          tmp4_removeValueIf.q1r_1[tmp4_removeValueIf.p1r_1[i_3]] = null;
        }
         while (inductionVariable_3 < last_3);
      tmp4_removeValueIf.s1r_1 = destinationIndex;
      cleanUpDerivedStateObservations($this);
      $this.k1e_1.l3();
    } else {
      var tmp1_safe_receiver = invalidated._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.j1e_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var destinationIndex_1 = 0;
        var inductionVariable_4 = 0;
        var last_4 = tmp0_removeValueIf.s1r_1;
        if (inductionVariable_4 < last_4)
          do {
            var i_4 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var valueIndex_0 = tmp0_removeValueIf.p1r_1[i_4];
            var set_0 = ensureNotNull(tmp0_removeValueIf.r1r_1[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var destinationIndex_2 = 0;
            var inductionVariable_5 = 0;
            var last_5 = set_0.g1m_1;
            if (inductionVariable_5 < last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_3 = set_0.h1m_1[i_5];
                var item_0 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                var tmp$ret$4;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                tmp$ret$4 = tmp1_safe_receiver.m(item_0);
                if (!tmp$ret$4) {
                  if (!(destinationIndex_2 === i_5)) {
                    set_0.h1m_1[destinationIndex_2] = item_0;
                  }
                  var tmp1_1 = destinationIndex_2;
                  destinationIndex_2 = tmp1_1 + 1 | 0;
                }
              }
               while (inductionVariable_5 < last_5);
            var inductionVariable_6 = destinationIndex_2;
            var last_6 = set_0.g1m_1;
            if (inductionVariable_6 < last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                set_0.h1m_1[i_6] = null;
              }
               while (inductionVariable_6 < last_6);
            set_0.g1m_1 = destinationIndex_2;
            if (set_0.g1m_1 > 0) {
              if (!(destinationIndex_1 === i_4)) {
                var destinationKeyOrder_0 = tmp0_removeValueIf.p1r_1[destinationIndex_1];
                tmp0_removeValueIf.p1r_1[destinationIndex_1] = valueIndex_0;
                tmp0_removeValueIf.p1r_1[i_4] = destinationKeyOrder_0;
              }
              var tmp1_2 = destinationIndex_1;
              destinationIndex_1 = tmp1_2 + 1 | 0;
            }
          }
           while (inductionVariable_4 < last_4);
        var inductionVariable_7 = destinationIndex_1;
        var last_7 = tmp0_removeValueIf.s1r_1;
        if (inductionVariable_7 < last_7)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            tmp0_removeValueIf.q1r_1[tmp0_removeValueIf.p1r_1[i_7]] = null;
          }
           while (inductionVariable_7 < last_7);
        tmp0_removeValueIf.s1r_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
        tmp$ret$5 = Unit_getInstance();
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.l1e_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.s1r_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = tmp0_removeValueIf.p1r_1[i];
        var set = ensureNotNull(tmp0_removeValueIf.r1r_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.g1m_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.h1m_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            tmp$ret$0 = !$this.j1e_1.t1r(item);
            if (!tmp$ret$0) {
              if (!(destinationIndex_0 === i_0)) {
                set.h1m_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.g1m_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.h1m_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.g1m_1 = destinationIndex_0;
        if (set.g1m_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = tmp0_removeValueIf.p1r_1[destinationIndex];
            tmp0_removeValueIf.p1r_1[destinationIndex] = valueIndex;
            tmp0_removeValueIf.p1r_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = tmp0_removeValueIf.s1r_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        tmp0_removeValueIf.q1r_1[tmp0_removeValueIf.p1r_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    tmp0_removeValueIf.s1r_1 = destinationIndex;
    // Inline function 'androidx.compose.runtime.removeValueIf' call
    var tmp1_removeValueIf = $this.k1e_1;
    var iter = tmp1_removeValueIf.c();
    while (iter.d()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iter.e();
      tmp$ret$1 = !tmp2__anonymous__z9zvc9.u1r();
      if (tmp$ret$1) {
        iter.t4();
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = $this.j1e_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.g1m_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (tmp2__anonymous__z9zvc9.o1r(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.o1e_1.v1r(value, tmp2__anonymous__z9zvc9);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.h1e_1);
    try {
      if (changes.l())
        return Unit_getInstance();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().d1n('Compose:applyChanges');
        try {
          $this.e1e_1.n1b();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp1_write = $this.i1e_1;
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_write.e1j();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.e1e_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.g(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.l3();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.o1i();
          }
          tmp$ret$0 = tmp;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          $this.e1e_1.o1b();
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().p1n(token);
        }
      }
      manager.c1s();
      manager.d1s();
      manager.e1s();
      if ($this.q1e_1) {
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().d1n('Compose:unobserve');
          try {
            $this.q1e_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.j1e_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.s1r_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = tmp0_removeValueIf.p1r_1[i];
                var set = ensureNotNull(tmp0_removeValueIf.r1r_1[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                var last_1 = set.g1m_1;
                if (inductionVariable_1 < last_1)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = set.h1m_1[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    var tmp$ret$4;
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    tmp$ret$4 = !item_0.f1s();
                    if (!tmp$ret$4) {
                      if (!(destinationIndex_0 === i_0)) {
                        set.h1m_1[destinationIndex_0] = item_0;
                      }
                      var tmp1 = destinationIndex_0;
                      destinationIndex_0 = tmp1 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < last_1);
                var inductionVariable_2 = destinationIndex_0;
                var last_2 = set.g1m_1;
                if (inductionVariable_2 < last_2)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    set.h1m_1[i_1] = null;
                  }
                   while (inductionVariable_2 < last_2);
                set.g1m_1 = destinationIndex_0;
                if (set.g1m_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = tmp0_removeValueIf.p1r_1[destinationIndex];
                    tmp0_removeValueIf.p1r_1[destinationIndex] = valueIndex;
                    tmp0_removeValueIf.p1r_1[i] = destinationKeyOrder;
                  }
                  var tmp1_0 = destinationIndex;
                  destinationIndex = tmp1_0 + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_3 = tmp0_removeValueIf.s1r_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                tmp0_removeValueIf.q1r_1[tmp0_removeValueIf.p1r_1[i_2]] = null;
              }
               while (inductionVariable_3 < last_3);
            tmp0_removeValueIf.s1r_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            tmp$ret$5 = Unit_getInstance();
            break $l$block_0;
          }finally {
            Trace_getInstance().p1n(token_0);
          }
        }
      }
    }finally {
      if ($this.n1e_1.l()) {
        manager.g1s();
      }
    }
  }
  function abandonChanges($this) {
    $this.f1e_1.h1s(null);
    $this.m1e_1.l3();
    $this.n1e_1.l3();
    $this.h1e_1.l3();
  }
  function invalidateChecked($this, scope, anchor, instance) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.g1e_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.r1e_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.i1e_1.i1s($this.s1e_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var delegate = tmp;
    if (delegate == null) {
      if ($this.j1s() ? $this.t1e_1.f1m(scope, instance) : false) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.p1e_1.k1s(scope, null);
      } else {
        addValue($this.p1e_1, scope, instance);
      }
    }
    tmp$ret$2 = delegate;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var delegate_0 = tmp$ret$4;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.d1e_1.z1m($this);
    return $this.j1s() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.p1e_1;
    $this.p1e_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.w1r_1 = abandoning;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.x1r_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.y1r_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.z1r_1 = tmp$ret$2;
    this.a1s_1 = null;
    this.b1s_1 = null;
  }
  protoOf(RememberEventDispatcher).a1o = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.y1r_1.x1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.y1r_1.k3(tmp0_let);
      tmp = this.w1r_1.j3(instance);
    } else {
      tmp = this.x1r_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).v1d = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.x1r_1.x1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.x1r_1.k3(tmp0_let);
      tmp = this.w1r_1.j3(instance);
    } else {
      tmp = this.y1r_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(RememberEventDispatcher).c1o = function (effect) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.z1r_1;
    tmp0_plusAssign.a(effect);
  };
  protoOf(RememberEventDispatcher).f1o = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.a1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.deactivating.<anonymous>' call
      this.a1s_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_plusAssign = tmp;
    tmp1_plusAssign.a(instance);
  };
  protoOf(RememberEventDispatcher).u1d = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.b1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.b1s_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_plusAssign = tmp;
    tmp1_plusAssign.a(instance);
  };
  protoOf(RememberEventDispatcher).c1s = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.y1r_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().d1n('Compose:onForgotten');
        try {
          var inductionVariable = this.y1r_1.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.y1r_1.g(i);
              if (!this.w1r_1.m(instance)) {
                instance.u1m();
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().p1n(token);
        }
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.x1r_1;
    tmp$ret$2 = !tmp1_isNotEmpty.l();
    if (tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().d1n('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.x1r_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.w1r_1.j3(item);
              item.s1m();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().p1n(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).e1s = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.z1r_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().d1n('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.z1r_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.z1r_1.l3();
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().p1n(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).g1s = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.w1r_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().d1n('Compose:abandons');
        try {
          var iterator = this.w1r_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.t4();
            instance.t1m();
          }
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().p1n(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).d1s = function () {
    var deactivating = this.a1s_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = deactivating == null ? true : deactivating.l();
    if (!tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().d1n('Compose:deactivations');
        try {
          var inductionVariable = deactivating.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.g(i);
              instance.w1c();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().p1n(token);
        }
      }
      deactivating.l3();
    }
    var releasing = this.b1s_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$2 = releasing == null ? true : releasing.l();
    if (!tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().d1n('Compose:releases');
        try {
          var inductionVariable_0 = releasing.f() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = releasing.g(i_0);
              instance_0.x1c();
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().p1n(token_0);
        }
      }
      releasing.l3();
    }
  };
  function addPendingInvalidationsLocked$invalidate(this$0, $forgetConditionalScopes, invalidated, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = this$0.j1e_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.g1m_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          if (!this$0.o1e_1.l1s(value, tmp2__anonymous__z9zvc9) ? !tmp2__anonymous__z9zvc9.o1r(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp2__anonymous__z9zvc9.u1r() ? !$forgetConditionalScopes : false) {
              this$0.k1e_1.a(tmp2__anonymous__z9zvc9);
            } else {
              var tmp0_elvis_lhs = invalidated._v;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp$ret$0;
                // Inline function 'kotlin.also' call
                var tmp0_also = HashSet_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>.<anonymous>' call
                invalidated._v = tmp0_also;
                tmp$ret$0 = tmp0_also;
                tmp = tmp$ret$0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var set = tmp;
              set.a(tmp2__anonymous__z9zvc9);
            }
          }
        }
         while (inductionVariable < last);
    }
  }
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.d1e_1 = parent;
    this.e1e_1 = applier;
    this.f1e_1 = new AtomicReference(null);
    this.g1e_1 = createSynchronizedObject();
    this.h1e_1 = HashSet_init_$Create$();
    this.i1e_1 = new SlotTable();
    this.j1e_1 = new IdentityScopeMap();
    this.k1e_1 = HashSet_init_$Create$();
    this.l1e_1 = new IdentityScopeMap();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.m1e_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.n1e_1 = tmp$ret$1;
    this.o1e_1 = new IdentityScopeMap();
    this.p1e_1 = new IdentityArrayMap();
    this.q1e_1 = false;
    this.r1e_1 = null;
    this.s1e_1 = 0;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.e1e_1, this.d1e_1, this.i1e_1, this.h1e_1, this.m1e_1, this.n1e_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.d1e_1.v1m(tmp0_also);
    tmp$ret$2 = tmp0_also;
    tmp_1.t1e_1 = tmp$ret$2;
    this.u1e_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.d1e_1;
    tmp_2.v1e_1 = tmp_3 instanceof Recomposer;
    this.w1e_1 = false;
    this.x1e_1 = ComposableSingletons$CompositionKt_getInstance().m1s_1;
  }
  protoOf(CompositionImpl).j1s = function () {
    return this.t1e_1.l1g_1;
  };
  protoOf(CompositionImpl).o1s = function () {
    return this.w1e_1;
  };
  protoOf(CompositionImpl).wp = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (!this.w1e_1) {
      this.w1e_1 = true;
      this.p1s(ComposableSingletons$CompositionKt_getInstance().n1s_1);
      var deferredChanges = this.t1e_1.s1g_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.i1e_1.j1h_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.h1e_1;
        tmp$ret$0 = !tmp0_isNotEmpty.l();
        tmp_0 = tmp$ret$0;
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.h1e_1);
        if (nonEmptySlotTable) {
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp2_write = this.i1e_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp1_let = tmp2_write.e1j();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp_1;
          try {
            removeCurrentGroup(tmp1_let, manager);
            tmp_1 = Unit_getInstance();
          }finally {
            tmp1_let.o1i();
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          tmp$ret$3 = tmp$ret$2;
          this.e1e_1.l3();
          manager.c1s();
          manager.d1s();
        }
        manager.g1s();
      }
      this.t1e_1.wp();
      tmp = Unit_getInstance();
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    this.d1e_1.x1m(this);
  };
  protoOf(CompositionImpl).q1s = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionImpl.<get-hasInvalidations>.<anonymous>' call
    tmp$ret$0 = this.p1e_1.m1n_1 > 0;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(CompositionImpl).r1s = function (values) {
    $l$loop: while (true) {
      var old = this.f1e_1.pt();
      var tmp0_subject = old;
      var tmp;
      if (tmp0_subject == null ? true : equals(tmp0_subject, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [old, values];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          tmp = tmp$ret$2;
        } else {
          if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.f1e_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.f1e_1.s1s(old, new_0)) {
        if (old == null) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp2_synchronized = this.g1e_1;
          var tmp$ret$3;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$4 = tmp$ret$3;
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).t1s = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.j1e_1.t1r(value) ? true : this.l1e_1.t1r(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).l1q = function (block) {
    return this.t1e_1.l1q(block);
  };
  protoOf(CompositionImpl).u1s = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.t1e_1.y1o();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.r1q(true);
        this.j1e_1.v1r(value, tmp0_safe_receiver);
        if (isInterface(value, DerivedState)) {
          this.l1e_1.v1s(value);
          var indexedObject = value.w1s();
          var inductionVariable = 0;
          var last = indexedObject.length;
          $l$loop: while (inductionVariable < last) {
            var dependency = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (dependency == null)
              break $l$loop;
            this.l1e_1.v1r(dependency, value);
          }
        }
        tmp0_safe_receiver.x1s(value);
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  protoOf(CompositionImpl).y1s = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp1_forEachScopeOf = this.l1e_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.g1m_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
          invalidateScopeOfLocked(this, tmp2__anonymous__z9zvc9);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(CompositionImpl).z1s = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = this.t1e_1.m1q(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          tmp_1 = tmp$ret$1;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.p1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$2 = tmp_1;
        tmp$ret$3 = tmp$ret$2;
        var tmp0_also_0 = tmp$ret$3;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$4 = tmp0_also_0;
        tmp_0 = tmp$ret$4;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$5 = !tmp1_isNotEmpty.l();
          tmp_3 = tmp$ret$5;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$6 = tmp_0;
      tmp = tmp$ret$6;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$7 = tmp;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  protoOf(CompositionImpl).a1t = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          tmp$ret$0 = equals(item.d4_1.v1l_1, this);
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        this.t1e_1.g1q(references);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$2 = tmp0_also;
        tmp_0 = tmp$ret$2;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$3 = !tmp1_isNotEmpty.l();
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$4 = tmp_0;
      tmp = tmp$ret$4;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$5 = tmp;
  };
  protoOf(CompositionImpl).b1t = function (state) {
    var manager = new RememberEventDispatcher(this.h1e_1);
    var slotTable = state.d1m_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.e1j();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    manager.c1s();
    manager.d1s();
  };
  protoOf(CompositionImpl).c1t = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.m1e_1);
        drainPendingModificationsLocked(this);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$1 = !tmp1_isNotEmpty.l();
          tmp_1 = tmp$ret$1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$2 = tmp_0;
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
  };
  protoOf(CompositionImpl).d1t = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.n1e_1;
        tmp$ret$0 = !tmp0_isNotEmpty.l();
        if (tmp$ret$0) {
          applyChangesInLocked(this, this.n1e_1);
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$2 = !tmp1_isNotEmpty.l();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(CompositionImpl).b1p = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        this.t1e_1.b1p();
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.h1e_1;
        tmp$ret$0 = !tmp0_isNotEmpty.l();
        if (tmp$ret$0) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$2 = !tmp1_isNotEmpty.l();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(CompositionImpl).e1t = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g1e_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.i1e_1.k1h_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.f1t();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(CompositionImpl).i1m = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.r1e_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.s1e_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.r1e_1 = null;
        this.s1e_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).g1t = function (scope, instance) {
    if (scope.h1t()) {
      scope.d1q(true);
    }
    var anchor = scope.y1d_1;
    if ((anchor == null ? true : !this.i1e_1.i1t(anchor)) ? true : !anchor.f1s())
      return InvalidationResult_IGNORED_getInstance();
    if (!anchor.f1s())
      return InvalidationResult_IGNORED_getInstance();
    if (!scope.j1t())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).k1t = function (instance, scope) {
    this.j1e_1.l1s(instance, scope);
  };
  protoOf(CompositionImpl).l1t = function (state) {
    if (!this.j1e_1.t1r(state)) {
      this.l1e_1.v1s(state);
    }
  };
  protoOf(CompositionImpl).p1s = function (set__$_ezb9bk) {
    this.x1e_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).m1t = function (content) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.w1e_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      tmp$ret$0 = 'The composition is disposed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p1s(content);
    this.d1e_1.c1n(this, this.x1e_1);
  };
  protoOf(CompositionImpl).n1t = function (content) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this.g1e_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.t1e_1.s1q(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.p1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        var tmp0_also = tmp$ret$2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$3 = tmp0_also;
        tmp_0 = tmp$ret$3;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.h1e_1;
          tmp$ret$4 = !tmp1_isNotEmpty.l();
          tmp_3 = tmp$ret$4;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.h1e_1)).g1s();
        }
      }
      tmp$ret$5 = tmp_0;
      tmp = tmp$ret$5;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$6 = tmp;
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:505)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.h1o(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:596)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.f1j();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.m1s_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.n1s_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.p1t(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.o1t(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.h1r(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.h1r(value);
      tmp$ret$0 = tmp0_also;
      _this__u8e3s4.k1s(key, tmp$ret$0);
    }
  }
  function Composition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (properties_initialized_Composition_kt_u7hvq2) {
    } else {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyCompositionLocalMap;
  }
  var EmptyCompositionLocalMap;
  function CompositionContext() {
    this.r1h_1 = 0;
  }
  protoOf(CompositionContext).z1h = function (table) {
  };
  protoOf(CompositionContext).v1m = function (composer) {
  };
  protoOf(CompositionContext).w1m = function (composer) {
  };
  protoOf(CompositionContext).t1h = function () {
    return get_EmptyCompositionLocalMap();
  };
  protoOf(CompositionContext).s1h = function () {
  };
  protoOf(CompositionContext).b1i = function () {
  };
  protoOf(CompositionContext).c1m = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (properties_initialized_CompositionContext_kt_mk393b) {
    } else {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyCompositionLocalMap = persistentHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.b1j_1 = new LazyValueHolder(defaultFactory);
    this.c1j_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.s1t_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).t1t = function (value) {
    return new ProvidedValue(this, value, true);
  };
  protoOf(ProvidableCompositionLocal).u1t = function (value) {
    return new ProvidedValue(this, value, false);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).g1r = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@9992L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.t1p(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.v1p();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.b1q();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.y1t(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable_0(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1q(-221175223);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)247@10697L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1h(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m1p(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
      if (isTraceInProgress()) {
        traceEventStart(-221175223, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:246)');
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = context.z1t_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_map.f());
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp1_map.c2().c();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider$composable.<anonymous>' call
        var tmp = item.z1();
        var tmp0_return = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).t1t(item.b2().b2());
        tmp$ret$1 = tmp0_return;
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      var tmp2_toTypedArray = tmp$ret$3;
      tmp$ret$4 = copyToArray(tmp2_toTypedArray);
      CompositionLocalProvider$composable(tmp$ret$4.slice(), content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.y1t(CompositionLocalProvider$composable$lambda_0(context, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.e1u_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).g1r = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(value, this.e1u_1);
      var value_0 = tmp$ret$0;
      tmp1_cache.p1q(value_0);
      tmp = value_0;
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
    var tmp3_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp3_apply.kk(value);
    tmp$ret$5 = tmp3_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CompositionLocalProvider$composable$lambda_0($context, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable_0($context, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_calculationBlockNestedLevel() {
    _init_properties_DerivedState_kt__eqt0x8();
    return calculationBlockNestedLevel;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function observeDerivedStateRecalculations(start, done, block) {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$1rw840k_lol8qc().pt();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(16), null);
      tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
      tmp$ret$2 = tmp$ret$1;
      var tmp0_also = tmp$ret$2;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations.<anonymous>' call
      _get_derivedStateObservers_$accessor$1rw840k_lol8qc().j1u(tmp0_also);
      tmp$ret$3 = tmp0_also;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    var observer = to(start, done);
    try {
      observers.h1r(observer);
      block();
    }finally {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$4 = observers.m1u_1 - 1 | 0;
      observers.k3(tmp$ret$4);
    }
  }
  function derivedStateOf(calculation) {
    _init_properties_DerivedState_kt__eqt0x8();
    return new DerivedSnapshotState(calculation, null);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.o1u_1 = new Object();
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ResultRecord() {
    Companion_getInstance_3();
    StateRecord.call(this);
    this.s1u_1 = null;
    this.t1u_1 = Companion_getInstance_3().o1u_1;
    this.u1u_1 = 0;
    this.v1u_1 = 8;
  }
  protoOf(ResultRecord).w1u = function (value) {
    var other = value instanceof ResultRecord ? value : THROW_CCE();
    this.s1u_1 = other.s1u_1;
    this.t1u_1 = other.t1u_1;
    this.u1u_1 = other.u1u_1;
  };
  protoOf(ResultRecord).x1u = function () {
    return new ResultRecord();
  };
  protoOf(ResultRecord).y1u = function (derivedState, snapshot) {
    return !(this.t1u_1 === Companion_getInstance_3().o1u_1) ? this.u1u_1 === this.z1u(derivedState, snapshot) : false;
  };
  protoOf(ResultRecord).z1u = function (derivedState, snapshot) {
    var hash = 7;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>' call
    tmp$ret$0 = this.s1u_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var dependencies = tmp$ret$3;
    if (!(dependencies == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.notifyObservers' call
      var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$1rw840k_lol8qc().pt();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.collection.MutableVector' call
        var tmp$ret$4;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$4 = fillArrayVal(Array(0), null);
        tmp$ret$5 = new MutableVector(tmp$ret$4, 0);
        tmp = tmp$ret$5;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var observers = tmp;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size = observers.m1u_1;
      if (size > 0) {
        var i = 0;
        var tmp_0 = observers.k1u_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          var tmp1__anonymous__uwfjfc = content[i];
          var start = tmp1__anonymous__uwfjfc.f4();
          start(derivedState);
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
      }
      var tmp_1;
      try {
        var inductionVariable = 0;
        var last = dependencies.m1n_1;
        var tmp_2;
        if (inductionVariable < last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$6;
            $l$block: {
              // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>.<anonymous>' call
              var tmp_3 = dependencies.k1n_1[index];
              var tmp0__anonymous__q1qw7t = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              var tmp_4 = dependencies.l1n_1[index];
              var tmp1__anonymous__uwfjfc_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
              if (!equals(tmp1__anonymous__uwfjfc_0, 1)) {
                tmp$ret$6 = Unit_getInstance();
                break $l$block;
              }
              var tmp_5;
              if (tmp0__anonymous__q1qw7t instanceof DerivedSnapshotState) {
                tmp_5 = tmp0__anonymous__q1qw7t.e1v(snapshot);
              } else {
                tmp_5 = current_0(tmp0__anonymous__q1qw7t.a1v(), snapshot);
              }
              var record = tmp_5;
              hash = imul(31, hash) + identityHashCode(record) | 0;
              hash = imul(31, hash) + record.f1v_1 | 0;
            }
          }
           while (inductionVariable < last);
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      }finally {
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = observers.m1u_1;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_6 = observers.k1u_1;
          var content_0 = isArray(tmp_6) ? tmp_6 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            var tmp2__anonymous__z9zvc9 = content_0[i_0];
            var done = tmp2__anonymous__z9zvc9.g4();
            done(derivedState);
            var tmp0_0 = i_0;
            i_0 = tmp0_0 + 1 | 0;
          }
           while (i_0 < size_0);
        }
      }
      tmp$ret$7 = tmp_1;
    }
    return hash;
  };
  function currentRecord($this, readable, snapshot, forceDependencyReads, calculation) {
    if (readable.y1u($this, snapshot)) {
      if (forceDependencyReads) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.notifyObservers' call
        var tmp0_elvis_lhs = _get_derivedStateObservers_$accessor$1rw840k_lol8qc().pt();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector' call
          var tmp$ret$0;
          // Inline function 'kotlin.arrayOfNulls' call
          tmp$ret$0 = fillArrayVal(Array(0), null);
          tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var observers = tmp;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size = observers.m1u_1;
        if (size > 0) {
          var i = 0;
          var tmp_0 = observers.k1u_1;
          var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            var tmp0__anonymous__q1qw7t = content[i];
            var start = tmp0__anonymous__q1qw7t.f4();
            start($this);
            var tmp0 = i;
            i = tmp0 + 1 | 0;
          }
           while (i < size);
        }
        var tmp_1;
        try {
          var dependencies = readable.s1u_1;
          var tmp0_elvis_lhs_0 = get_calculationBlockNestedLevel().pt();
          var invalidationNestedLevel = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
          var tmp1_safe_receiver = dependencies;
          if (tmp1_safe_receiver == null)
            null;
          else {
            // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
            var inductionVariable = 0;
            var last = tmp1_safe_receiver.m1n_1;
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>.<anonymous>' call
                var tmp_2 = tmp1_safe_receiver.k1n_1[index];
                var tmp0__anonymous__q1qw7t_0 = isObject(tmp_2) ? tmp_2 : THROW_CCE();
                var tmp_3 = tmp1_safe_receiver.l1n_1[index];
                var tmp1__anonymous__uwfjfc = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
                get_calculationBlockNestedLevel().j1u(tmp1__anonymous__uwfjfc + invalidationNestedLevel | 0);
                var tmp0_safe_receiver = snapshot.i1v();
                if (tmp0_safe_receiver == null)
                  null;
                else
                  tmp0_safe_receiver(tmp0__anonymous__q1qw7t_0);
              }
               while (inductionVariable < last);
          }
          get_calculationBlockNestedLevel().j1u(invalidationNestedLevel);
          tmp_1 = Unit_getInstance();
        }finally {
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var size_0 = observers.m1u_1;
          if (size_0 > 0) {
            var i_0 = 0;
            var tmp_4 = observers.k1u_1;
            var content_0 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = content_0[i_0];
              var done = tmp1__anonymous__uwfjfc_0.g4();
              done($this);
              var tmp0_0 = i_0;
              i_0 = tmp0_0 + 1 | 0;
            }
             while (i_0 < size_0);
          }
        }
        tmp$ret$2 = tmp_1;
      }
      return readable;
    }
    var tmp0_elvis_lhs_1 = get_calculationBlockNestedLevel().pt();
    var nestedCalculationLevel = tmp0_elvis_lhs_1 == null ? 0 : tmp0_elvis_lhs_1;
    var newDependencies = new IdentityArrayMap();
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.notifyObservers' call
    var tmp0_elvis_lhs_2 = _get_derivedStateObservers_$accessor$1rw840k_lol8qc().pt();
    var tmp_5;
    if (tmp0_elvis_lhs_2 == null) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$3 = fillArrayVal(Array(0), null);
      tmp$ret$4 = new MutableVector(tmp$ret$3, 0);
      tmp_5 = tmp$ret$4;
    } else {
      tmp_5 = tmp0_elvis_lhs_2;
    }
    var observers_0 = tmp_5;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var size_1 = observers_0.m1u_1;
    if (size_1 > 0) {
      var i_1 = 0;
      var tmp_6 = observers_0.k1u_1;
      var content_1 = isArray(tmp_6) ? tmp_6 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = content_1[i_1];
        var start_0 = tmp2__anonymous__z9zvc9.f4();
        start_0($this);
        var tmp0_1 = i_1;
        i_1 = tmp0_1 + 1 | 0;
      }
       while (i_1 < size_1);
    }
    var tmp_7;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
      get_calculationBlockNestedLevel().j1u(nestedCalculationLevel + 1 | 0);
      var tmp_8 = Companion_getInstance_10();
      var result = tmp_8.j1v(DerivedSnapshotState$currentRecord$lambda($this, newDependencies, nestedCalculationLevel), null, calculation);
      get_calculationBlockNestedLevel().j1u(nestedCalculationLevel);
      tmp$ret$5 = result;
      tmp_7 = tmp$ret$5;
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size_2 = observers_0.m1u_1;
      if (size_2 > 0) {
        var i_2 = 0;
        var tmp_9 = observers_0.k1u_1;
        var content_2 = isArray(tmp_9) ? tmp_9 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          var tmp3__anonymous__ufb84q = content_2[i_2];
          var done_0 = tmp3__anonymous__ufb84q.g4();
          done_0($this);
          var tmp0_2 = i_2;
          i_2 = tmp0_2 + 1 | 0;
        }
         while (i_2 < size_2);
      }
    }
    tmp$ret$6 = tmp_7;
    var result_0 = tmp$ret$6;
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp4_synchronized = get_lock();
    var tmp$ret$8;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
    var currentSnapshot = Companion_getInstance_10().m1b();
    var tmp_10;
    var tmp_11;
    if (!(readable.t1u_1 === Companion_getInstance_3().o1u_1)) {
      var tmp0_safe_receiver_0 = $this.c1v_1;
      var tmp_12;
      if (tmp0_safe_receiver_0 == null) {
        tmp_12 = null;
      } else {
        var tmp_13 = readable.t1u_1;
        tmp_12 = tmp0_safe_receiver_0.k1v(result_0, (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE());
      }
      tmp_11 = tmp_12 === true;
    } else {
      tmp_11 = false;
    }
    if (tmp_11) {
      readable.s1u_1 = newDependencies;
      readable.u1u_1 = readable.z1u($this, currentSnapshot);
      tmp_10 = readable;
    } else {
      var writable = newWritableRecord($this.d1v_1, $this, currentSnapshot);
      writable.s1u_1 = newDependencies;
      writable.u1u_1 = writable.z1u($this, currentSnapshot);
      writable.t1u_1 = result_0;
      tmp_10 = writable;
    }
    tmp$ret$7 = tmp_10;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    var record = tmp$ret$10;
    if (nestedCalculationLevel === 0) {
      Companion_getInstance_10().l1v();
    }
    return record;
  }
  function displayValue($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = $this.d1v_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    if (tmp1__anonymous__uwfjfc.y1u($this, Companion_getInstance_10().m1b())) {
      return toString_0(tmp1__anonymous__uwfjfc.t1u_1);
    }
    return '<Not calculated>';
  }
  function DerivedSnapshotState$currentRecord$lambda(this$0, $newDependencies, $nestedCalculationLevel) {
    return function (it) {
      var tmp;
      if (it === this$0) {
        throw IllegalStateException_init_$Create$('A derived state calculation cannot read itself');
      }
      var tmp_0;
      if (isInterface(it, StateObject)) {
        var readNestedLevel = ensureNotNull(get_calculationBlockNestedLevel().pt());
        var tmp$ret$0;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = readNestedLevel - $nestedCalculationLevel | 0;
        var tmp0_elvis_lhs = $newDependencies.o1t(it);
        var tmp1_min = tmp0_elvis_lhs == null ? IntCompanionObject_getInstance().MAX_VALUE : tmp0_elvis_lhs;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
        $newDependencies.k1s(it, tmp$ret$0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function DerivedSnapshotState(calculation, policy) {
    this.b1v_1 = calculation;
    this.c1v_1 = policy;
    this.d1v_1 = new ResultRecord();
  }
  protoOf(DerivedSnapshotState).g1u = function () {
    return this.c1v_1;
  };
  protoOf(DerivedSnapshotState).e1v = function (snapshot) {
    return currentRecord(this, current_0(this.d1v_1, snapshot), snapshot, false, this.b1v_1);
  };
  protoOf(DerivedSnapshotState).a1v = function () {
    return this.d1v_1;
  };
  protoOf(DerivedSnapshotState).m1v = function (value) {
    var tmp = this;
    tmp.d1v_1 = value instanceof ResultRecord ? value : THROW_CCE();
  };
  protoOf(DerivedSnapshotState).b2 = function () {
    var tmp0_safe_receiver = Companion_getInstance_10().m1b().i1v();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this);
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d1v_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-value>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_10().m1b(), true, this.b1v_1).t1u_1;
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(DerivedSnapshotState).f1u = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d1v_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-currentValue>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_10().m1b(), false, this.b1v_1).t1u_1;
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(DerivedSnapshotState).w1s = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d1v_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-dependencies>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var record = currentRecord(this, tmp1__anonymous__uwfjfc, Companion_getInstance_10().m1b(), false, this.b1v_1);
    var tmp0_safe_receiver = record.s1u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1n_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(DerivedSnapshotState).toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d1v_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'DerivedState(value=' + displayValue(this) + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function _get_derivedStateObservers_$accessor$1rw840k_lol8qc() {
    _init_properties_DerivedState_kt__eqt0x8();
    return get_derivedStateObservers();
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (properties_initialized_DerivedState_kt_scch8q) {
    } else {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.o1v_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)336@14101L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:331)');
    }
    var applyContext = $composer_0.v1o();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.x1h(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.p1v_1 = task;
    this.q1v_1 = CoroutineScope(parentCoroutineContext);
    this.r1v_1 = null;
  }
  protoOf(LaunchedEffectImpl).s1m = function () {
    var tmp0_safe_receiver = this.r1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.r1v_1 = launch(this.q1v_1, VOID, VOID, this.p1v_1);
  };
  protoOf(LaunchedEffectImpl).u1m = function () {
    var tmp0_safe_receiver = this.r1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fo();
    }
    this.r1v_1 = null;
  };
  protoOf(LaunchedEffectImpl).t1m = function () {
    var tmp0_safe_receiver = this.r1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fo();
    }
    this.r1v_1 = null;
  };
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.x1h(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function DisposableEffect$composable_0(key1, key2, key3, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(324877634);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2,3)235@9981L59:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(324877634, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:229)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed | 112 & $changed | 896 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-1058148781);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!(!!($composer_1.x1h(key1) | $composer_1.x1h(key2)) | $composer_1.x1h(key3));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.s1v_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).s1m = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).u1m = function () {
    cancel_0(this.s1v_1);
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).t1m = function () {
    cancel_0(this.s1v_1);
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.x5(Key_getInstance()) == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      tmp0_apply.nx(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp$ret$0 = tmp0_apply;
      tmp = CoroutineScope(tmp$ret$0);
    } else {
      var applyContext = composer.v1o();
      tmp = CoroutineScope(applyContext.e6(Job(applyContext.x5(Key_getInstance()))).e6(coroutineContext));
    }
    return tmp;
  }
  function DisposableEffectImpl(effect) {
    this.t1v_1 = effect;
    this.u1v_1 = null;
  }
  protoOf(DisposableEffectImpl).s1m = function () {
    this.u1v_1 = this.t1v_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).u1m = function () {
    var tmp0_safe_receiver = this.u1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
    this.u1v_1 = null;
  };
  protoOf(DisposableEffectImpl).t1m = function () {
  };
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
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
    var tmp2_cache = !!($composer_1.x1h(key1) | $composer_1.x1h(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function LaunchedEffect$composable_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(-1365960137);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2)359@15109L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1365960137, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:353)');
    }
    var applyContext = $composer_0.v1o();
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
    var tmp2_cache = !!($composer_1.x1h(key1) | $composer_1.x1h(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function SideEffect$composable(effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(-706403066);
    sourceInformation($composer_0, 'C(SideEffect$composable):Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-706403066, $changed, -1, 'androidx.compose.runtime.SideEffect$composable (Effects.kt:44)');
    }
    $composer_0.s1p(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function LaunchedEffect$composable_1(key1, key2, key3, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(-1589460333);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2,3)383@16147L70:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1589460333, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:376)');
    }
    var applyContext = $composer_0.v1o();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed | 112 & $changed | 896 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.s1c(-1058148781);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!(!!($composer_1.x1h(key1) | $composer_1.x1h(key2)) | $composer_1.x1h(key3));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  function LaunchedEffect$composable_2(keys, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s1c(-132231756);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)406@17175L59:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-132231756, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:401)');
    }
    var applyContext = $composer_0.v1o();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = keys.slice();
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
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = invalid;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.o1q();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      tmp$ret$0 = new LaunchedEffectImpl(applyContext, block);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (properties_initialized_Effects_kt_cj8kem) {
    } else {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.k6_1;
    } else {
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.v1v_1 = left;
    this.w1v_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.v1v_1), 31) + hashCodeOf(this, this.w1v_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.v1v_1) + ', right=' + toString_0(this.w1v_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.v1v_1, tmp0_other_with_cast.v1v_1))
      return false;
    if (!equals(this.w1v_1, tmp0_other_with_cast.w1v_1))
      return false;
    return true;
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.x5(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withFrameNanos(onFrame, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.h5();
    var tmp0 = get_monotonicFrameClock(tmp$ret$0).q1c(onFrame, $completion);
    return tmp0;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function movableContentOf$composable(content) {
    var movableContent = new MovableContent(content);
    return ComposableLambda$invoke$ref_2(composableLambdaInstance(-434707029, true, movableContentOf$composable$lambda(movableContent)));
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.x1v(p0, p1, p2);
    };
  }
  function movableContentOf$composable$lambda($movableContent) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:MovableContent.kt#9igjgp');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.x1h(it) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.k1o()) {
        if (isTraceInProgress()) {
          traceEventStart(-434707029, $changed, -1, 'androidx.compose.runtime.movableContentOf$composable.<anonymous> (MovableContent.kt:63)');
        }
        $composer_0.f1q($movableContent, it);
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
  function OpaqueKey(key) {
    this.y1v_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.y1v_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.y1v_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.y1v_1 === tmp0_other_with_cast.y1v_1))
      return false;
    return true;
  };
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.w1d_1 = $this.w1d_1 | 32;
    } else {
      $this.w1d_1 = $this.w1d_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.w1d_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.w1d_1 = $this.w1d_1 | 16;
    } else {
      $this.w1d_1 = $this.w1d_1 & -17;
    }
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.a1e_1 === $token ? equals($tmp0_safe_receiver, this$0.b1e_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var destinationIndex = 0;
        var inductionVariable = 0;
        var last = $tmp0_safe_receiver.z1v_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = $tmp0_safe_receiver.a1w_1[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = $tmp0_safe_receiver.b1w_1[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.k1t(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.l1t(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.c1e_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.c1w(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.m1n_1 === 0) {
                    this$0.c1e_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                $tmp0_safe_receiver.a1w_1[destinationIndex] = key;
                $tmp0_safe_receiver.b1w_1[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < last);
        var inductionVariable_0 = destinationIndex;
        var last_0 = $tmp0_safe_receiver.z1v_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $tmp0_safe_receiver.a1w_1[i_0] = null;
          }
           while (inductionVariable_0 < last_0);
        $tmp0_safe_receiver.z1v_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.z1v_1 === 0) {
          this$0.b1e_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(composition) {
    this.w1d_1 = 0;
    this.x1d_1 = composition;
    this.y1d_1 = null;
    this.z1d_1 = null;
    this.a1e_1 = 0;
    this.b1e_1 = null;
    this.c1e_1 = null;
  }
  protoOf(RecomposeScopeImpl).f1s = function () {
    var tmp;
    if (!(this.x1d_1 == null)) {
      var tmp0_safe_receiver = this.y1d_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1s();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).j1t = function () {
    return !(this.z1d_1 == null);
  };
  protoOf(RecomposeScopeImpl).r1q = function (value) {
    if (value) {
      this.w1d_1 = this.w1d_1 | 1;
    } else {
      this.w1d_1 = this.w1d_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).n1k = function () {
    return !((this.w1d_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).z1o = function (value) {
    if (value) {
      this.w1d_1 = this.w1d_1 | 2;
    } else {
      this.w1d_1 = this.w1d_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).h1t = function () {
    return !((this.w1d_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).d1q = function (value) {
    if (value) {
      this.w1d_1 = this.w1d_1 | 4;
    } else {
      this.w1d_1 = this.w1d_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).a1p = function () {
    return !((this.w1d_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).m1l = function (value) {
    if (value) {
      this.w1d_1 = this.w1d_1 | 8;
    } else {
      this.w1d_1 = this.w1d_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).d1p = function () {
    return !((this.w1d_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).d1l = function (composer) {
    var tmp0_safe_receiver = this.z1d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1);
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    } else {
    }
  };
  protoOf(RecomposeScopeImpl).o1r = function (value) {
    var tmp0_safe_receiver = this.x1d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1t(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).rs = function () {
    this.x1d_1 = null;
    this.b1e_1 = null;
    this.c1e_1 = null;
  };
  protoOf(RecomposeScopeImpl).n1o = function (composition) {
    this.x1d_1 = composition;
  };
  protoOf(RecomposeScopeImpl).f1t = function () {
    var tmp0_safe_receiver = this.x1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.g1t(this, null);
  };
  protoOf(RecomposeScopeImpl).y1t = function (block) {
    this.z1d_1 = block;
  };
  protoOf(RecomposeScopeImpl).e1q = function () {
    return !((this.w1d_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).n1l = function (token) {
    this.a1e_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).x1p = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).x1s = function (instance) {
    if (_get_rereading__g2iruw(this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = this.b1e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.b1e_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.d1w(instance, this.a1e_1);
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.c1e_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.c1e_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.k1s(instance, instance.f1u());
    }
  };
  protoOf(RecomposeScopeImpl).u1r = function () {
    return !(this.c1e_1 == null);
  };
  protoOf(RecomposeScopeImpl).f1r = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.c1e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.k1m()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = element;
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (isInterface(tmp0_let, DerivedState))
              tmp0_let;
            else
              THROW_CCE();
            var tmp0_elvis_lhs_0 = tmp0_let.g1u();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp$ret$1 = policy.k1v(tmp0_let.f1u(), trackedDependencies.o1t(tmp0_let));
            tmp$ret$2 = tmp$ret$1;
            tmp_2 = tmp$ret$2;
          } else {
            tmp_2 = false;
          }
          tmp$ret$3 = tmp_2;
          if (!tmp$ret$3) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).c1l = function () {
    var tmp0_safe_receiver = this.x1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.b1e_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var inductionVariable = 0;
          var last = tmp0_safe_receiver_0.z1v_1;
          var tmp_1;
          if (inductionVariable < last) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver_0.a1w_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver_0.b1w_1[i];
              tmp0_safe_receiver.u1s(tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable < last);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp$ret$0 = tmp_0;
        tmp = Unit_getInstance();
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
    }
  };
  protoOf(RecomposeScopeImpl).c1q = function (token) {
    var tmp0_safe_receiver = this.b1e_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.e1q()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.z1v_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver.a1w_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver.b1w_1[i];
              tmp$ret$0 = !(tmp1__anonymous__uwfjfc === token);
              if (tmp$ret$0) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.e1w_1.b2();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.e1w_1.cm(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.e1w_1.b2();
      var new_0 = old.j3(info);
      if (old === new_0 ? true : $this.e1w_1.cm(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.l3();
    toInsert.l3();
    toApply.l3();
    toLateApply.l3();
    toComplete.l3();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.l3();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.j1w_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.q1w_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.g(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.q1w_1.l3();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (this$0.i1w_1.o1c()) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().d1n('Recomposer:animation');
          try {
            this$0.i1w_1.p1c(frameTime);
            Companion_getInstance_10().d1x();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().p1n(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().d1n('Recomposer:recompose');
        try {
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.j1w_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          recordComposerModificationsLocked(this$0);
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.o1w_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.g(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.o1w_1.l3();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.l();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.l();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.g(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.h1r(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.l3();
            }
            if (modifiedValues.k1m()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.j1w_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.m1w_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.f() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.g(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.x3(item_1) ? item_1.t1s(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.l()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.l();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.l();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.h1w_1;
            tmp0_this.h1w_1 = tmp1.af();
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toApply);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.f() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.g(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.c1t();
                }
                 while (inductionVariable_2 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.l3();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.l();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.c();
              while (tmp0_iterator.d()) {
                var element = tmp0_iterator.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.d1t();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.l3();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.l();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.c();
              while (tmp0_iterator_0.d()) {
                var element_0 = tmp0_iterator_0.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.b1p();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.l3();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.j1w_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_10().l1v();
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().p1n(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.j1w_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.y1w_1.b2().l6(State_Idle_getInstance()) >= 0) {
        this$0.n1w_1.k(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.f5(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.m1x_1 = $block;
    this.n1x_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).p1x = function ($this$coroutineScope, $completion) {
    var tmp = this.q1x($this$coroutineScope, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.m1x_1(this.o1x_1, this.n1x_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).q1x = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.m1x_1, this.n1x_1, completion);
    i.o1x_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.p1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function deriveStateLocked($this) {
    if ($this.y1w_1.b2().l6(State_ShuttingDown_getInstance()) <= 0) {
      $this.m1w_1.l3();
      var tmp = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp.n1w_1 = tmp$ret$0;
      $this.o1w_1.l3();
      $this.p1w_1.l3();
      $this.q1w_1.l3();
      $this.t1w_1 = null;
      var tmp0_safe_receiver = $this.u1w_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.qp();
      $this.u1w_1 = null;
      $this.x1w_1 = null;
      return null;
    }
    var tmp_0;
    if (!($this.x1w_1 == null)) {
      tmp_0 = State_Inactive_getInstance();
    } else {
      if ($this.k1w_1 == null) {
        var tmp_1 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        tmp_1.n1w_1 = tmp$ret$1;
        $this.o1w_1.l3();
        tmp_0 = $this.i1w_1.o1c() ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = $this.o1w_1;
        tmp$ret$2 = !tmp0_isNotEmpty.l();
        if (tmp$ret$2) {
          tmp_6 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = $this.n1w_1;
          tmp$ret$3 = !tmp1_isNotEmpty.l();
          tmp_6 = tmp$ret$3;
        }
        if (tmp_6) {
          tmp_5 = true;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp2_isNotEmpty = $this.p1w_1;
          tmp$ret$4 = !tmp2_isNotEmpty.l();
          tmp_5 = tmp$ret$4;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp3_isNotEmpty = $this.q1w_1;
          tmp$ret$5 = !tmp3_isNotEmpty.l();
          tmp_4 = tmp$ret$5;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          tmp_3 = $this.v1w_1 > 0;
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          tmp_2 = $this.i1w_1.o1c();
        }
        if (tmp_2) {
          tmp_0 = State_PendingWork_getInstance();
        } else {
          tmp_0 = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp_0;
    $this.y1w_1.kk(newState);
    var tmp_7;
    if (newState.equals(State_PendingWork_getInstance())) {
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp4_also = $this.u1w_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.u1w_1 = null;
      tmp$ret$6 = tmp4_also;
      tmp_7 = tmp$ret$6;
    } else {
      tmp_7 = null;
    }
    return tmp_7;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1w_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    tmp$ret$0 = !$this.w1w_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp1_any = $this.z1w_1.jk();
        var tmp0_iterator = tmp1_any.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          tmp$ret$3 = element.an();
          if (tmp$ret$3) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.r1x_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.s1x_1 = recoverable;
    this.t1x_1 = cause;
  }
  function recordComposerModificationsLocked($this) {
    var changes = $this.n1w_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !changes.l();
    if (tmp$ret$0) {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var tmp0_fastForEach = $this.m1w_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastForEach.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastForEach.g(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>.<anonymous>' call
            item.r1s(changes);
            if ($this.y1w_1.b2().l6(State_ShuttingDown_getInstance()) <= 0) {
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      tmp$ret$2 = tmp$ret$1;
      var tmp = $this;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$3 = LinkedHashSet_init_$Create$();
      tmp.n1w_1 = tmp$ret$3;
      if (!(deriveStateLocked($this) == null)) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
      }
    }
  }
  function registerRunnerJob($this, callingJob) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1w_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.l1w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.y1w_1.b2().l6(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.k1w_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.k1w_1 = callingJob;
    tmp$ret$1 = deriveStateLocked($this);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_4().f1w_1.pt()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = $this.j1w_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.p1w_1.l3();
      $this.o1w_1.l3();
      var tmp_0 = $this;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      tmp_0.n1w_1 = tmp$ret$0;
      $this.q1w_1.l3();
      $this.r1w_1.l3();
      $this.s1w_1.l3();
      $this.x1w_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.t1w_1;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          var tmp$ret$1;
          // Inline function 'kotlin.collections.mutableListOf' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var tmp0_also = tmp$ret$1;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.t1w_1 = tmp0_also;
          tmp$ret$2 = tmp0_also;
          tmp_1 = tmp$ret$2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_1;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        var tmp1_this = $this;
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp1_minusAssign = tmp1_this.m1w_1;
        tmp1_minusAssign.j3(failedInitialComposition);
      }
      tmp$ret$3 = deriveStateLocked($this);
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1w_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.n1w_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = $this.o1w_1;
      tmp$ret$1 = !tmp1_isNotEmpty.l();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.i1w_1.o1c();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.h5();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    var tmp0 = withContext($this.i1w_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
    return tmp0;
  }
  function performInitialMovableContentInserts($this, composition) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1w_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.q1w_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(item.v1l_1, composition);
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    var toInsert = tmp$ret$4;
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !toInsert.l();
      if (!tmp$ret$5) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    if (composition.j1s() ? true : composition.o1s())
      return null;
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_10().d1y(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.e1y();
          try {
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            var tmp0_safe_receiver = modifiedValues;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1m()) === true) {
              composition.l1q(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$0 = composition.z1s();
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            snapshot.f1y(previous);
          }
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$2) {
      tmp = composition;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function performInsertValues($this, references, modifiedValues) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        tmp$ret$0 = item.v1l_1;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.q2(key);
        var tmp;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var answer = tmp$ret$1;
          destination.h4(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$2 = tmp;
        var list = tmp$ret$2;
        list.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$3 = destination;
    var tasks = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$4 = tasks.c2().c();
    var tmp0_iterator = tmp$ret$4;
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.z1();
      var composition = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$6 = tmp1_loop_parameter.b2();
      var refs = tmp$ret$6;
      runtimeCheck(!composition.j1s());
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_10().d1y(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          var tmp$ret$12;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.e1y();
            try {
              var tmp$ret$11;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp0_synchronized = $this.j1w_1;
              var tmp$ret$10;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp$ret$9;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              var tmp$ret$8;
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.f());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.g(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp$ret$7;
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  tmp$ret$7 = to(item_0, removeLastMultiValue($this.r1w_1, item_0.t1l_1));
                  var tmp0_plusAssign = tmp$ret$7;
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$8 = target;
              tmp$ret$9 = tmp$ret$8;
              tmp$ret$10 = tmp$ret$9;
              tmp$ret$11 = tmp$ret$10;
              var pairs = tmp$ret$11;
              composition.a1t(pairs);
              tmp$ret$12 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.f1y(previous);
            }
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.r2());
  }
  function discardUnusedValues($this) {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.j1w_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.r1w_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      var references = flatten($this.r1w_1.s2());
      $this.r1w_1.l3();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.f());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          tmp$ret$1 = to(item, $this.s1w_1.q2(item));
          var tmp0_plusAssign = tmp$ret$1;
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      tmp$ret$2 = target;
      var unusedValues = tmp$ret$2;
      $this.s1w_1.l3();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var unusedValues_0 = tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.g(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.f4();
        var state = item_0.g4();
        if (!(state == null)) {
          reference.v1l_1.b1t(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.t1y();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.wp();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.o1w_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.i1w_1.o1c();
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e1w_1 = MutableStateFlow(persistentSetOf());
    this.f1w_1 = new AtomicReference(false);
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.l3();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.j1w_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.q1w_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.v1l_1, $composition)) {
        toInsert.a(value);
        iterator.t4();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.j1w_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.y1w_1.b2().l6(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.l1w_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.f5(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.j1w_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.l1w_1 = tmp_0;
      this$0.y1w_1.kk(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.j1w_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.k1w_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.y1w_1.kk(State_ShuttingDown_getInstance());
        if (!this$0.w1w_1) {
          runnerJob.eo(cancellation);
        } else if (!(this$0.u1w_1 == null)) {
          continuationToResume = this$0.u1w_1;
        }
        this$0.u1w_1 = null;
        tmp = runnerJob.yn(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.l1w_1 = cancellation;
        this$0.y1w_1.kk(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.f5(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.c1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).k1z = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.l1z($this$recompositionRunner, parentFrameClock, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).m1z = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.k1z(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 6;
            var tmp_0 = this;
            tmp_0.f1z_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.g1z_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.h1z_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.i1z_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.j1z_1 = LinkedHashSet_init_$Create$();
            this.jf_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.c1z_1)) {
              this.jf_1 = 5;
              continue $sm;
            }

            this.jf_1 = 2;
            suspendResult = awaitWorkAvailable(this.c1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_synchronized = this.c1z_1.j1w_1;
            var tmp_5;
            if (!_get_hasFrameWorkLocked__1gtyf7(this.c1z_1)) {
              recordComposerModificationsLocked(this.c1z_1);
              tmp_5 = !_get_hasFrameWorkLocked__1gtyf7(this.c1z_1);
            } else {
              tmp_5 = false;
            }

            if (tmp_5) {
              this.jf_1 = 1;
              continue $sm;
            } else {
              this.jf_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.jf_1 = 4;
            suspendResult = this.e1z_1.q1c(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.c1z_1, this.f1z_1, this.g1z_1, this.h1z_1, this.i1z_1, this.j1z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.c1z_1);
            this.jf_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 6) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).l1z = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.c1z_1, completion);
    i.d1z_1 = $this$recompositionRunner;
    i.e1z_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.k1z($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.v1z_1 = this$0;
    this.w1z_1 = $block;
    this.x1z_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).p1x = function ($this$withContext, $completion) {
    var tmp = this.q1x($this$withContext, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(Recomposer$recompositionRunner$slambda).eg = function (p1, $completion) {
    return this.p1x((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 5;
            this.z1z_1 = get_job(this.y1z_1.zm());
            registerRunnerJob(this.v1z_1, this.z1z_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_10();
            tmp_0.a20_1 = tmp_1.c20(Recomposer$recompositionRunner$slambda$lambda(this.v1z_1));
            addRunning(Companion_getInstance_4(), this.v1z_1.b1x_1);
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 4;
            var tmp0_synchronized = this.v1z_1.j1w_1;
            var tmp0_fastForEach = this.v1z_1.m1w_1;
            var inductionVariable = 0;
            var last = tmp0_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastForEach.g(index);
                item.e1t();
              }
               while (inductionVariable <= last);
            this.jf_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.w1z_1, this.x1z_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b20_1 = suspendResult;
            this.kf_1 = 5;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.a20_1.wp();
            var tmp1_synchronized = this.v1z_1.j1w_1;
            if (this.v1z_1.k1w_1 === this.z1z_1) {
              this.v1z_1.k1w_1 = null;
            }

            deriveStateLocked(this.v1z_1);
            ;
            removeRunning(Companion_getInstance_4(), this.v1z_1.b1x_1);
            ;
            return Unit_getInstance();
          case 4:
            this.kf_1 = 5;
            var t = this.mf_1;
            this.a20_1.wp();
            var tmp1_synchronized_0 = this.v1z_1.j1w_1;
            if (this.v1z_1.k1w_1 === this.z1z_1) {
              this.v1z_1.k1w_1 = null;
            }

            deriveStateLocked(this.v1z_1);
            ;
            removeRunning(Companion_getInstance_4(), this.v1z_1.b1x_1);
            ;
            throw t;
          case 5:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 5) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).q1x = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.v1z_1, this.w1z_1, this.x1z_1, completion);
    i.y1z_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.p1x($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $modifiedValues.g1m_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = $modifiedValues.g(i);
          $composition.y1s(tmp0__anonymous__q1qw7t);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.u1s(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.y1s(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.h1r(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1y_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.c1y_1)) {
              this.jf_1 = 1;
              var tmp0__anonymous__q1qw7t = this;
              var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
              cancellable.gr();
              var tmp0_synchronized = this.c1y_1.j1w_1;
              if (_get_hasSchedulingWork__b617oy(this.c1y_1)) {
                var tmp0_success = Companion_getInstance();
                cancellable.f5(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.c1y_1.u1w_1 = cancellable;
              }
              suspendResult = returnIfSuspended(cancellable.xo(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.jf_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.mf_1;
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_4();
    CompositionContext.call(this);
    this.h1w_1 = new Long(0, 0);
    var tmp = this;
    tmp.i1w_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.j1w_1 = createSynchronizedObject();
    this.k1w_1 = null;
    this.l1w_1 = null;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.m1w_1 = tmp$ret$0;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_1.n1w_1 = tmp$ret$1;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_2.o1w_1 = tmp$ret$2;
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_3.p1w_1 = tmp$ret$3;
    var tmp_4 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    tmp_4.q1w_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$5 = LinkedHashMap_init_$Create$();
    tmp_5.r1w_1 = tmp$ret$5;
    var tmp_6 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$6 = LinkedHashMap_init_$Create$();
    tmp_6.s1w_1 = tmp$ret$6;
    this.t1w_1 = null;
    this.u1w_1 = null;
    this.v1w_1 = 0;
    this.w1w_1 = false;
    this.x1w_1 = null;
    this.y1w_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_7 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.x5(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.yn(Recomposer$effectJob$lambda(this));
    tmp$ret$7 = tmp0_apply;
    tmp_7.z1w_1 = tmp$ret$7;
    this.a1x_1 = effectCoroutineContext.e6(this.i1w_1).e6(this.z1w_1);
    this.b1x_1 = new RecomposerInfoImpl(this);
    this.c1x_1 = 8;
  }
  protoOf(Recomposer).y1m = function () {
    return this.a1x_1;
  };
  protoOf(Recomposer).d20 = function ($completion) {
    var tmp0 = recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
    return tmp0;
  };
  protoOf(Recomposer).a1i = function () {
    return 1000;
  };
  protoOf(Recomposer).y1h = function () {
    return false;
  };
  protoOf(Recomposer).z1h = function (table) {
  };
  protoOf(Recomposer).x1m = function (composition) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp0_minusAssign = tmp0_this.m1w_1;
    tmp0_minusAssign.j3(composition);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.minusAssign' call
    var tmp1_minusAssign = tmp1_this.o1w_1;
    tmp1_minusAssign.j3(composition);
    var tmp2_this = this;
    var tmp2_minusAssign = tmp2_this.p1w_1;
    tmp2_minusAssign.j3(composition);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Recomposer).z1m = function (composition) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.o1w_1.m(composition)) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.o1w_1;
      tmp0_plusAssign.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.f5(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).r1l = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.q1w_1;
    tmp0_plusAssign.a(reference);
    tmp$ret$0 = deriveStateLocked(this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.f5(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(Recomposer).b1n = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    tmp$ret$0 = addMultiValue(this.r1w_1, reference.t1l_1, reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Recomposer).o1m = function (reference, data) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_set = this.s1w_1;
    tmp0_set.h4(reference, data);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(Recomposer).c1m = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    tmp$ret$0 = this.s1w_1.s4(reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(Recomposer).c1n = function (composition, content) {
    var composerWasComposing = composition.j1s();
    try {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_10().d1y(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.e1y();
            try {
              composition.n1t(content);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.f1y(previous);
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_10().l1v();
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.j1w_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.y1w_1.b2().l6(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.m1w_1.m(composition)) {
        var tmp0_this = this;
        var tmp0_plusAssign = tmp0_this.m1w_1;
        tmp0_plusAssign.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.c1t();
      composition.d1t();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_10().l1v();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.q2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.l()) {
        _this__u8e3s4.s4(key);
      }
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.q2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      _this__u8e3s4.h4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (properties_initialized_Recomposer_kt_k8q2ph) {
    } else {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor) {
    var groupsToMove = fromWriter.p1k(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.p1d_1);
    if (fromWriter.c1d_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.h1d_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.z1c_1;
    var currentGroup = toWriter.p1d_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.z1c_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = groups;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    tmp$ret$4 = groups;
    var slots = toWriter.a1d_1;
    var currentSlot = toWriter.f1d_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.a1d_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    tmp$ret$5 = slots;
    var parent = toWriter.q1d_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    tmp$ret$6 = dataIndex_0(groups, toWriter, currentGroup);
    tmp$ret$7 = tmp$ret$6;
    var dataIndexDelta = currentSlot - tmp$ret$7 | 0;
    var slotsGapOwner = toWriter.j1d_1;
    var slotsGapLen = toWriter.i1d_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$8 = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        tmp$ret$9 = tmp$ret$8;
        var newDataIndex = tmp$ret$9;
        var tmp$ret$11;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$10 = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.h1d_1, slotsGapLen, slotsCapacity);
        tmp$ret$11 = tmp$ret$10;
        var newDataAnchor = tmp$ret$11;
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          var tmp1 = slotsGapOwner;
          slotsGapOwner = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.j1d_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.b1d_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.b1d_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.b1d_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.g(anchorIndex);
          var tmp3_this = sourceAnchor;
          tmp3_this.n1n_1 = tmp3_this.n1n_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.b1d_1, toWriter.p1d_1, toWriter.f());
      toWriter.b1d_1.i3(insertLocation, anchors);
      sourceAnchors.k1(startAnchors, endAnchors).l3();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.y1i(fromIndex);
    var tmp_1;
    if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.h1j();
        fromWriter.o1o(parentGroup - fromWriter.p1d_1 | 0);
        fromWriter.h1j();
      }
      fromWriter.o1o(fromIndex - fromWriter.p1d_1 | 0);
      var anchorsRemoved = fromWriter.y1e();
      if (needsStartGroups) {
        fromWriter.f1j();
        fromWriter.w1k();
        fromWriter.f1j();
        fromWriter.w1k();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp5_runtimeCheck = !anchorsRemoved_1;
    if (!tmp5_runtimeCheck) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      tmp$ret$12 = 'Unexpectedly removed anchors';
      var message = tmp$ret$12;
      composeRuntimeError(toString(message));
    }
    var tmp4_this = toWriter;
    tmp4_this.l1d_1 = tmp4_this.l1d_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.p1d_1 = currentGroup + groupsToMove | 0;
      toWriter.f1d_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.k1d_1 > 0;
    $this.o1d_1.w1h($this.l1d_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.p1d_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().k1j_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().k1j_1) : false;
      initGroup($this.z1c_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.q1d_1, $this.f1d_1);
      $this.g1d_1 = $this.f1d_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.a1d_1;
        var currentSlot = $this.f1d_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.f1d_1 = currentSlot;
      }
      $this.l1d_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.q1d_1 = current;
      $this.p1d_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.q1d_1;
      $this.m1d_1.w1h(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.p1d_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().k1j_1)) {
        if (isNode) {
          $this.e20(aux);
        } else {
          $this.d1o(aux);
        }
      }
      $this.f1d_1 = slotIndex($this.z1c_1, $this, currentGroupAddress);
      $this.g1d_1 = dataIndex_0($this.z1c_1, $this, groupIndexToAddress($this, $this.p1d_1 + 1 | 0));
      $this.l1d_1 = nodeCount($this.z1c_1, currentGroupAddress);
      $this.q1d_1 = currentGroup;
      $this.p1d_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.z1c_1, currentGroupAddress) | 0;
    }
    tmp.e1d_1 = tmp_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.z1c_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.z1c_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.s1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.k1m()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.g20(), tmp0_safe_receiver);
      }
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.s1d_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.s1d_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.h20(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.z1c_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.z1c_1, groupAddress, containsAnyMarks);
      var parent = $this.y1i(group);
      if (parent >= 0) {
        set.h20(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.p1k(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.z1c_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.p1k(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.n1d_1.w1h((_get_capacity__a9k9f3($this) - $this.d1d_1 | 0) - $this.e1d_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.d1d_1 | 0) - $this.n1d_1.m1k() | 0;
    $this.e1d_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.c1d_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.z1c_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.z1c_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.d1d_1;
    var gapStart = $this.c1d_1;
    if (!(gapStart === index)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = $this.b1d_1;
      tmp$ret$0 = !tmp0_isNotEmpty.l();
      if (tmp$ret$0) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.z1c_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = groups;
          tmp$ret$2 = tmp$ret$1;
          var tmp = tmp$ret$2;
          var tmp$ret$4;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$3;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$3 = groups;
          tmp$ret$4 = tmp$ret$3;
          arrayCopy(tmp, tmp$ret$4, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
          tmp$ret$5 = groups;
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = groups;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          var tmp$ret$9;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$8;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$8 = groups;
          tmp$ret$9 = tmp$ret$8;
          arrayCopy(tmp_0, tmp$ret$9, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
          tmp$ret$10 = groups;
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.z1c_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.z1c_1, groupAddress, newAnchor);
        }
        var tmp0 = groupAddress;
        groupAddress = tmp0 + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.c1d_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.i1d_1;
    var gapStart = $this.h1d_1;
    var slotsGapOwner = $this.j1d_1;
    if (!(gapStart === index)) {
      var slots = $this.a1d_1;
      if (index < gapStart) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
        tmp$ret$0 = slots;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
        tmp$ret$1 = slots;
      }
      fill_0(slots, null, index, index + gapLen | 0);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.f();
    tmp$ret$2 = Math.min(tmp3_min, tmp4_min);
    var newSlotsGapOwner = tmp$ret$2;
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.a1d_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.c1d_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.z1c_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp5_runtimeCheck = anchor >= 0;
          if (!tmp5_runtimeCheck) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            var message = tmp$ret$3;
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.z1c_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          var tmp0 = updateAddress;
          updateAddress = tmp0 + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.d1d_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.z1c_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp6_runtimeCheck = anchor_0 < 0;
          if (!tmp6_runtimeCheck) {
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            var message_0 = tmp$ret$4;
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.z1c_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          var tmp1 = updateAddress_0;
          updateAddress_0 = tmp1 + 1 | 0;
          if (updateAddress_0 === $this.c1d_1)
            updateAddress_0 = updateAddress_0 + $this.d1d_1 | 0;
        }
      }
      $this.j1d_1 = newSlotsGapOwner;
    }
    $this.h1d_1 = index;
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.p1d_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.c1d_1;
      var gapLen = $this.d1d_1;
      var oldCapacity = $this.z1c_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.z1c_1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = groups;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = newGroups;
        tmp$ret$5 = tmp$ret$4;
        arrayCopy(tmp, tmp$ret$5, 0, 0, tmp4_copyInto);
        tmp$ret$6 = newGroups;
        var tmp$ret$11;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = groups;
        tmp$ret$8 = tmp$ret$7;
        var tmp_0 = tmp$ret$8;
        var tmp$ret$10;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$9 = newGroups;
        tmp$ret$10 = tmp$ret$9;
        arrayCopy(tmp_0, tmp$ret$10, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        tmp$ret$11 = newGroups;
        $this.z1c_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.e1d_1;
      if (currentEnd >= gapStart)
        $this.e1d_1 = currentEnd + size | 0;
      $this.c1d_1 = gapStart + size | 0;
      $this.d1d_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.j1d_1 < gapStart ? 0 : $this.h1d_1, $this.i1d_1, $this.a1d_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.z1c_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.j1d_1;
      if (slotsGapOwner >= gapStart) {
        $this.j1d_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.f1d_1, group);
      var gapStart = $this.h1d_1;
      var gapLen = $this.i1d_1;
      if (gapLen < size) {
        var slots = $this.a1d_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var tmp = 0;
        var tmp_0 = newCapacity;
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$2 = fillArrayVal(Array(tmp_0), null);
        var tmp_1 = tmp$ret$2;
        while (tmp < tmp_0) {
          var tmp_2 = tmp;
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotWriter.insertSlots.<anonymous>' call
          tmp$ret$3 = null;
          tmp_1[tmp_2] = tmp$ret$3;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_1;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        tmp$ret$4 = newData;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        tmp$ret$5 = newData;
        $this.a1d_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.g1d_1;
      if (currentDataEnd >= gapStart)
        $this.g1d_1 = currentDataEnd + size | 0;
      $this.h1d_1 = gapStart + size | 0;
      $this.i1d_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.b1d_1;
      moveGroupGapTo($this, start);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.l();
      if (tmp$ret$0)
        anchorsRemoved = removeAnchors($this, start, len);
      $this.c1d_1 = start;
      var previousGapLen = $this.d1d_1;
      var newGapLen = previousGapLen + len | 0;
      $this.d1d_1 = newGapLen;
      var slotsGapOwner = $this.j1d_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp$ret$1 = Math.max(start, tmp0_max);
        tmp_0.j1d_1 = tmp$ret$1;
      }
      if ($this.e1d_1 >= $this.c1d_1) {
        var tmp0_this = $this;
        tmp0_this.e1d_1 = tmp0_this.e1d_1 - len | 0;
      }
      if (containsGroupMark($this, $this.q1d_1)) {
        updateContainsMark($this, $this.q1d_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.i1d_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.h1d_1 = start;
      $this.i1d_1 = gapLen + len | 0;
      fill_0($this.a1d_1, null, start, start + len | 0);
      var currentDataEnd = $this.g1d_1;
      if (currentDataEnd >= start)
        $this.g1d_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = address < $this.z1c_1.length ? isNode($this.z1c_1, address) : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.a1d_1[dataIndexToDataAddress($this, nodeIndex($this.z1c_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.d1d_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.b1d_1, previousGapStart, size);
      $l$loop_0: while (index < $this.b1d_1.f()) {
        var anchor = $this.b1d_1.g(index);
        var location = anchor.n1n_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.n1n_1 = size + location | 0;
            var tmp0 = index;
            index = tmp0 + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.b1d_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.b1d_1.f()) {
        var anchor_0 = $this.b1d_1.g(index_0);
        var location_0 = anchor_0.n1n_1;
        if (location_0 >= 0) {
          anchor_0.n1n_1 = -(size - location_0 | 0) | 0;
          var tmp1 = index_0;
          index_0 = tmp1 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.d1d_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.b1d_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    tmp$ret$0 = tmp0_let >= $this.b1d_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    var index = tmp$ret$1;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.b1d_1.g(index);
      var location = $this.b1m(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.n1n_1 = IntCompanionObject_getInstance().MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        var tmp0 = index;
        index = tmp0 - 1 | 0;
      } else
        break $l$loop;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.b1d_1.k1(removeAnchorStart, removeAnchorEnd).l3();
    }
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.b1d_1, originalLocation, groupsSize);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var removedAnchors = tmp$ret$0;
    if (index >= 0) {
      $l$loop: while (index < $this.b1d_1.f()) {
        var anchor = $this.b1d_1.g(index);
        var location = $this.b1m(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.b1d_1.k3(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.g(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.b1m(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.c1d_1) {
          item.n1n_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.n1n_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.b1d_1, newAnchorIndex, groupsSize);
        $this.b1d_1.h3(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.z1c_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.c1d_1 ? index : index + $this.d1d_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.h1d_1 ? dataIndex : dataIndex + $this.i1d_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.z1c_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.a1d_1.length - $this.i1d_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.i1d_1, $this.a1d_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.a1d_1.length - $this.i1d_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.i1d_1, $this.a1d_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.h1d_1, $this.i1d_1, $this.a1d_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.f() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.f() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.j20_1 = $end;
    this.k20_1 = this$0;
    this.i20_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d = function () {
    return this.i20_1 < this.j20_1;
  };
  protoOf(SlotWriter$groupSlots$1).e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.k20_1.a1d_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.i20_1;
      tmp0_this.i20_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.k20_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_5();
    this.y1c_1 = table;
    this.z1c_1 = this.y1c_1.i1h_1;
    this.a1d_1 = this.y1c_1.k1h_1;
    this.b1d_1 = this.y1c_1.p1h_1;
    this.c1d_1 = this.y1c_1.j1h_1;
    this.d1d_1 = (this.z1c_1.length / 5 | 0) - this.y1c_1.j1h_1 | 0;
    this.e1d_1 = this.y1c_1.j1h_1;
    this.f1d_1 = 0;
    this.g1d_1 = 0;
    this.h1d_1 = this.y1c_1.l1h_1;
    this.i1d_1 = this.a1d_1.length - this.y1c_1.l1h_1 | 0;
    this.j1d_1 = this.y1c_1.j1h_1;
    this.k1d_1 = 0;
    this.l1d_1 = 0;
    this.m1d_1 = new IntStack();
    this.n1d_1 = new IntStack();
    this.o1d_1 = new IntStack();
    this.p1d_1 = 0;
    this.q1d_1 = -1;
    this.r1d_1 = false;
    this.s1d_1 = null;
  }
  protoOf(SlotWriter).t1n = function () {
    return this.p1d_1 < this.e1d_1 ? isNode(this.z1c_1, groupIndexToAddress(this, this.p1d_1)) : false;
  };
  protoOf(SlotWriter).h1l = function (index) {
    return isNode(this.z1c_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).i1l = function (index) {
    return nodeCount(this.z1c_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).x1i = function (index) {
    return key(this.z1c_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).w1i = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.z1c_1, address) ? this.a1d_1[objectKeyIndex(this.z1c_1, address)] : null;
  };
  protoOf(SlotWriter).p1k = function (index) {
    return groupSize(this.z1c_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v1i = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.z1c_1, address) ? this.a1d_1[auxIndex(this.z1c_1, this, address)] : Companion_getInstance_1().k1j_1;
  };
  protoOf(SlotWriter).r1n = function (index) {
    return (index > this.q1d_1 ? index < this.e1d_1 : false) ? true : this.q1d_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).u1n = function (index) {
    return this.s1n(index, this.p1d_1);
  };
  protoOf(SlotWriter).s1n = function (index, group) {
    var tmp;
    if (group === this.q1d_1) {
      tmp = this.e1d_1;
    } else if (group > this.m1d_1.q1m(0)) {
      tmp = group + this.p1k(group) | 0;
    } else {
      var openIndex = this.m1d_1.l20(group);
      tmp = openIndex < 0 ? group + this.p1k(group) | 0 : (_get_capacity__a9k9f3(this) - this.d1d_1 | 0) - this.n1d_1.g1l(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).j1m = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.z1c_1, address) ? this.a1d_1[dataIndexToDataAddress(this, nodeIndex(this.z1c_1, this, address))] : null;
  };
  protoOf(SlotWriter).z1n = function (anchor) {
    return this.j1m(anchor.m20(this));
  };
  protoOf(SlotWriter).y1i = function (index) {
    return parent(this.z1c_1, this, index);
  };
  protoOf(SlotWriter).o1i = function () {
    this.r1d_1 = true;
    if (this.m1d_1.l()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.a1d_1.length - this.i1d_1 | 0, this.c1d_1);
      recalculateMarks(this);
    }
    this.y1c_1.n20(this, this.z1c_1, this.c1d_1, this.a1d_1, this.h1d_1, this.b1d_1);
  };
  protoOf(SlotWriter).k1r = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      tmp$ret$0 = 'Cannot reset when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.p1d_1 = 0;
    this.e1d_1 = _get_capacity__a9k9f3(this) - this.d1d_1 | 0;
    this.f1d_1 = 0;
    this.g1d_1 = 0;
    this.l1d_1 = 0;
  };
  protoOf(SlotWriter).m1m = function (value) {
    var result = this.o20();
    this.p20(value);
    return result;
  };
  protoOf(SlotWriter).d1o = function (value) {
    var address = groupIndexToAddress(this, this.p1d_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = hasAux(this.z1c_1, address);
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.a1d_1[dataIndexToDataAddress(this, auxIndex(this.z1c_1, this, address))] = value;
  };
  protoOf(SlotWriter).i1q = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$0 = 'Cannot insert auxiliary data when not inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.q1d_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = !hasAux(this.z1c_1, parentGroupAddress);
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$1 = 'Group already has auxiliary data';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.z1c_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.f1d_1 > auxIndex_0) {
      var slotsToMove = this.f1d_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      var tmp2_check = slotsToMove < 3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        tmp$ret$2 = 'Moving more than two slot not supported';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.a1d_1[auxAddress + 2 | 0] = this.a1d_1[auxAddress + 1 | 0];
      }
      this.a1d_1[auxAddress + 1 | 0] = this.a1d_1[auxAddress];
    }
    addAux(this.z1c_1, parentGroupAddress);
    this.a1d_1[auxAddress] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.f1d_1;
    tmp0_this.f1d_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotWriter).e20 = function (value) {
    return updateNodeOfGroup(this, this.p1d_1, value);
  };
  protoOf(SlotWriter).y1n = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.m20(this), value);
  };
  protoOf(SlotWriter).p20 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.f1d_1 <= this.g1d_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Writing to an invalid slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.a1d_1[dataIndexToDataAddress(this, this.f1d_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).b1o = function (index, value) {
    var address = groupIndexToAddress(this, this.p1d_1);
    var slotsStart = slotIndex(this.z1c_1, this, address);
    var slotsEnd = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, this.p1d_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + this.p1d_1;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.a1d_1[slotAddress];
    this.a1d_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).o20 = function () {
    if (this.k1d_1 > 0) {
      insertSlots(this, 1, this.q1d_1);
    }
    var tmp = this.a1d_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.f1d_1;
    tmp0_this.f1d_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).m1o = function (anchor, index) {
    return this.g1o(this.b1m(anchor), index);
  };
  protoOf(SlotWriter).g1o = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.z1c_1, this, address);
    var slotsEnd = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().k1j_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.a1d_1[slotAddress];
  };
  protoOf(SlotWriter).o1o = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = amount >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$0 = 'Cannot seek backwards';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.k1d_1 <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$1 = 'Cannot call seek() while inserting';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.p1d_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp2_runtimeCheck = index >= this.q1d_1 ? index <= this.e1d_1 : false;
    if (!tmp2_runtimeCheck) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$2 = 'Cannot seek outside the current group (' + this.q1d_1 + '-' + this.e1d_1 + ')';
      var message_1 = tmp$ret$2;
      composeRuntimeError(toString(message_1));
    }
    this.p1d_1 = index;
    var newSlot = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, index));
    this.f1d_1 = newSlot;
    this.g1d_1 = newSlot;
  };
  protoOf(SlotWriter).f1j = function () {
    var newGroup = this.e1d_1;
    this.p1d_1 = newGroup;
    this.f1d_1 = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).a1k = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1d_1;
    tmp0_this.k1d_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).x1k = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.k1d_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end insert';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.k1d_1 = tmp0_this.k1d_1 - 1 | 0;
    if (tmp0_this.k1d_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = this.o1d_1.f() === this.m1d_1.f();
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).h1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      tmp$ret$0 = 'Key must be supplied when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().k1j_1, false, Companion_getInstance_1().k1j_1);
  };
  protoOf(SlotWriter).l1j = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().k1j_1);
  };
  protoOf(SlotWriter).n1j = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().k1j_1);
  };
  protoOf(SlotWriter).m1j = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).w1k = function () {
    var inserting = this.k1d_1 > 0;
    var currentGroup = this.p1d_1;
    var currentGroupEnd = this.e1d_1;
    var groupIndex = this.q1d_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.l1d_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.z1c_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.z1c_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.z1c_1, groupAddress, newNodes);
      this.l1d_1 = this.o1d_1.m1k() + (isNode_0 ? 1 : newNodes) | 0;
      this.q1d_1 = parent(this.z1c_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = currentGroup === currentGroupEnd;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        tmp$ret$0 = 'Expected to be at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.z1c_1, groupAddress);
      var oldNodes = nodeCount(this.z1c_1, groupAddress);
      updateGroupSize(this.z1c_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.z1c_1, groupAddress, newNodes);
      var newParent = this.m1d_1.m1k();
      restoreCurrentGroupEnd(this);
      this.q1d_1 = newParent;
      var groupParent = parent(this.z1c_1, this, groupIndex);
      this.l1d_1 = this.o1d_1.m1k();
      if (groupParent === newParent) {
        var tmp0_this = this;
        tmp0_this.l1d_1 = tmp0_this.l1d_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.z1c_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.z1c_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.z1c_1, currentAddress, nodeCount(this.z1c_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.z1c_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.z1c_1, this, current);
          }
        }
        var tmp1_this = this;
        tmp1_this.l1d_1 = tmp1_this.l1d_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).j1r = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 <= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.q1d_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = index >= parent ? index < this.e1d_1 : false;
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.p1d_1;
      var oldCurrentSlot = this.f1d_1;
      var oldCurrentSlotEnd = this.g1d_1;
      this.p1d_1 = index;
      this.h1j();
      this.p1d_1 = oldCurrent;
      this.f1d_1 = oldCurrentSlot;
      this.g1d_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).r1o = function (anchor) {
    return this.j1r(anchor.m20(this));
  };
  protoOf(SlotWriter).u1i = function () {
    var groupAddress = groupIndexToAddress(this, this.p1d_1);
    var newGroup = this.p1d_1 + groupSize(this.z1c_1, groupAddress) | 0;
    this.p1d_1 = newGroup;
    this.f1d_1 = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.z1c_1, groupAddress) ? 1 : nodeCount(this.z1c_1, groupAddress);
  };
  protoOf(SlotWriter).y1e = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot remove group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.p1d_1;
    var oldSlot = this.f1d_1;
    var count = this.u1i();
    var tmp0_safe_receiver = this.s1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.k1m() ? tmp0_safe_receiver.g1p() >= oldGroup : false) {
        tmp0_safe_receiver.g20();
      }
      tmp$ret$1 = Unit_getInstance();
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.p1d_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.f1d_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.p1d_1 = oldGroup;
    this.f1d_1 = oldSlot;
    var tmp1_this = this;
    tmp1_this.l1d_1 = tmp1_this.l1d_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).t1d = function () {
    var start = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, this.p1d_1));
    var end = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, this.p1d_1 + this.p1k(this.p1d_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).e1o = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.k1d_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot move a group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = offset >= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$1 = 'Parameter offset is out of bounds';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.p1d_1;
    var parent = this.q1d_1;
    var parentEnd = this.e1d_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.z1c_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp2_runtimeCheck = groupToMove <= parentEnd;
      if (!tmp2_runtimeCheck) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        tmp$ret$2 = 'Parameter offset is out of bounds';
        var message_1 = tmp$ret$2;
        composeRuntimeError(toString(message_1));
      }
      var tmp0 = count;
      count = tmp0 - 1 | 0;
    }
    var moveLen = groupSize(this.z1c_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.f1d_1;
    var dataStart = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.z1c_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.p1d_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.z1c_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = groups;
    tmp$ret$5 = tmp$ret$4;
    var tmp = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = groups;
    tmp$ret$7 = tmp$ret$6;
    arrayCopy(tmp, tmp$ret$7, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    tmp$ret$8 = groups;
    if (moveDataLen > 0) {
      var slots = this.a1d_1;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
      tmp$ret$9 = slots;
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.h1d_1;
    var slotsGapLen = this.i1d_1;
    var slotsCapacity = this.a1d_1.length;
    var slotsGapOwner = this.j1d_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp8_runtimeCheck = !anchorsRemoved;
    if (!tmp8_runtimeCheck) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$10 = 'Unexpectedly removed anchors';
      var message_2 = tmp$ret$10;
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.e1d_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).n1m = function (anchor, offset, writer) {
    runtimeCheck(writer.k1d_1 > 0);
    runtimeCheck(this.k1d_1 === 0);
    runtimeCheck(anchor.f1s());
    var location = this.b1m(anchor) + offset | 0;
    var currentGroup = this.p1d_1;
    runtimeCheck(currentGroup <= location ? location < this.e1d_1 : false);
    var parent = this.y1i(location);
    var size = this.p1k(location);
    var nodes = this.h1l(location) ? 1 : this.i1l(location);
    var result = moveGroup(Companion_getInstance_5(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.z1c_1, currentAddress, groupSize(this.z1c_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.z1c_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.z1c_1, currentAddress, nodeCount(this.z1c_1, currentAddress) - nodes | 0);
        }
      }
      current = this.y1i(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.l1d_1 >= nodes);
      var tmp0_this = this;
      tmp0_this.l1d_1 = tmp0_this.l1d_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).q1o = function (table, index) {
    runtimeCheck(this.k1d_1 > 0);
    if ((index === 0 ? this.p1d_1 === 0 : false) ? this.y1c_1.j1h_1 === 0 : false) {
      var myGroups = this.z1c_1;
      var mySlots = this.a1d_1;
      var myAnchors = this.b1d_1;
      var groups = table.i1h_1;
      var groupsSize = table.j1h_1;
      var slots = table.k1h_1;
      var slotsSize = table.l1h_1;
      this.z1c_1 = groups;
      this.a1d_1 = slots;
      this.b1d_1 = table.p1h_1;
      this.c1d_1 = groupsSize;
      this.d1d_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.h1d_1 = slotsSize;
      this.i1d_1 = slots.length - slotsSize | 0;
      this.j1d_1 = groupsSize;
      table.q20(myGroups, 0, mySlots, 0, myAnchors);
      return this.b1d_1;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.e1j();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_5(), tmp0_let, index, this, true, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  protoOf(SlotWriter).l1o = function (offset, table, index) {
    runtimeCheck(this.k1d_1 <= 0 ? this.p1k(this.p1d_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.p1d_1;
    var previousCurrentSlot = this.f1d_1;
    var previousCurrentSlotEnd = this.g1d_1;
    this.o1o(offset);
    this.h1j();
    this.a1k();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.e1j();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_5(), tmp0_let, index, this, false, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.o1i();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var anchors = tmp$ret$3;
    this.x1k();
    this.w1k();
    this.p1d_1 = previousCurrentGroup;
    this.f1d_1 = previousCurrentSlot;
    this.g1d_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).b1k = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.b1d_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$3b1dzq(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index <= this.c1d_1 ? index : -(this.f() - index | 0) | 0);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.h3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).r20 = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.z1c_1, groupAddress)) {
      updateMark(this.z1c_1, groupAddress, true);
      if (!containsMark(this.z1c_1, groupAddress)) {
        updateContainsMark(this, this.y1i(group));
      }
    }
  };
  protoOf(SlotWriter).p1l = function (group, $super) {
    group = group === VOID ? this.q1d_1 : group;
    var tmp;
    if ($super === VOID) {
      this.r20(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.r20.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).b1m = function (anchor) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.n1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.p1d_1 + ' end=' + this.e1d_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.c1d_1 + '-' + (this.c1d_1 + this.d1d_1 | 0) + ')');
  };
  protoOf(SlotWriter).f = function () {
    return _get_capacity__a9k9f3(this) - this.d1d_1 | 0;
  };
  function SlotTable() {
    this.i1h_1 = new Int32Array(0);
    this.j1h_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.slots.<anonymous>' call
      tmp$ret$1 = null;
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.k1h_1 = tmp_2;
    this.l1h_1 = 0;
    this.m1h_1 = 0;
    this.n1h_1 = false;
    this.o1h_1 = 0;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_4.p1h_1 = tmp$ret$2;
  }
  protoOf(SlotTable).it = function () {
    return this.j1h_1 === 0;
  };
  protoOf(SlotTable).q1h = function () {
    if (this.n1h_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1h_1;
    tmp0_this.m1h_1 = tmp1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).e1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.n1h_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = this.m1h_1 <= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    this.n1h_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.o1h_1;
    tmp0_this.o1h_1 = tmp1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).b1k = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.n1h_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$0 = 'use active SlotWriter to create an anchor location instead ';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= index ? index < this.j1h_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$1 = 'Parameter index is out of range';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.p1h_1;
    var tmp3_getOrAdd = this.j1h_1;
    var location = search$accessor$3b1dzq(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$2 = new Anchor(index);
      var anchor = tmp$ret$2;
      tmp2_getOrAdd.h3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.g(location);
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  protoOf(SlotTable).b1m = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.n1h_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = anchor.f1s();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$1 = 'Anchor refers to a group that was removed';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.n1n_1;
  };
  protoOf(SlotTable).i1t = function (anchor) {
    var tmp;
    if (anchor.f1s()) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$3b1dzq(this.p1h_1, anchor.n1n_1, this.j1h_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp$ret$0 = tmp0_let >= 0 ? equals(this.p1h_1.g(tmp0_let), anchor) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).i1s = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.n1h_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$0 = 'Writer is active';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = 0 <= groupIndex ? groupIndex < this.j1h_1 : false;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$1 = 'Invalid group index';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.i1t(anchor)) {
      var containsUpper = groupIndex + groupSize(this.i1h_1, groupIndex) | 0;
      var containsArg = anchor.n1n_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).s20 = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = reader.c1i_1 === this ? this.m1h_1 > 0 : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected reader close()';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1h_1;
    tmp0_this.m1h_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotTable).n20 = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    var tmp0_require = writer.y1c_1 === this ? this.n1h_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected writer close()';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.n1h_1 = false;
    this.q20(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).q20 = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.i1h_1 = groups;
    this.j1h_1 = groupsSize;
    this.k1h_1 = slots;
    this.l1h_1 = slotsSize;
    this.p1h_1 = anchors;
  };
  protoOf(SlotTable).p1m = function () {
    return this.j1h_1 > 0 ? containsMark(this.i1h_1, 0) : false;
  };
  protoOf(SlotTable).c = function () {
    return new GroupIterator(this, 0, this.j1h_1);
  };
  function Anchor(loc) {
    this.n1n_1 = loc;
  }
  protoOf(Anchor).f1s = function () {
    return !(this.n1n_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).p1o = function (slots) {
    return slots.b1m(this);
  };
  protoOf(Anchor).m20 = function (writer) {
    return writer.b1m(this);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = list;
    }
    list = tmp;
    this.f20_1 = list;
  }
  protoOf(PrioritySet).h20 = function (value) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.f20_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      tmp = this.f20_1.g(0) === value ? true : this.f20_1.g(this.f20_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.f20_1.f();
    this.f20_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.f20_1.g(parent);
      if (value > parentValue) {
        this.f20_1.p(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.f20_1.p(index, value);
  };
  protoOf(PrioritySet).k1m = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.f20_1;
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    return tmp$ret$0;
  };
  protoOf(PrioritySet).g1p = function () {
    return first(this.f20_1);
  };
  protoOf(PrioritySet).g20 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.f20_1.f() > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      tmp$ret$0 = 'Set is empty';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var value = this.f20_1.g(0);
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.f20_1;
      tmp$ret$1 = !tmp1_isNotEmpty.l();
      if (tmp$ret$1) {
        tmp = this.f20_1.g(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.f20_1.p(0, last(this.f20_1));
      this.f20_1.k3(this.f20_1.f() - 1 | 0);
      var index = 0;
      var size = this.f20_1.f();
      var max = this.f20_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.f20_1.g(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.f20_1.g(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.f20_1.g(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.f20_1.p(index, rightValue);
              this.f20_1.p(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.f20_1.p(index, leftValue);
          this.f20_1.p(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$3b1dzq(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function countOneBits_0(value) {
    var tmp0_subject = value;
    switch (tmp0_subject) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.f1i_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().k1j_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.f1i_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().k1j_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.f1i_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.c1i_1 = table;
    this.d1i_1 = this.c1i_1.i1h_1;
    this.e1i_1 = this.c1i_1.j1h_1;
    this.f1i_1 = this.c1i_1.k1h_1;
    this.g1i_1 = this.c1i_1.l1h_1;
    this.h1i_1 = false;
    this.i1i_1 = 0;
    this.j1i_1 = this.e1i_1;
    this.k1i_1 = -1;
    this.l1i_1 = 0;
    this.m1i_1 = 0;
    this.n1i_1 = 0;
  }
  protoOf(SlotReader).f = function () {
    return this.e1i_1;
  };
  protoOf(SlotReader).y1i = function (index) {
    return parentAnchor(this.d1i_1, index);
  };
  protoOf(SlotReader).t1n = function () {
    return isNode(this.d1i_1, this.i1i_1);
  };
  protoOf(SlotReader).h1l = function (index) {
    return isNode(this.d1i_1, index);
  };
  protoOf(SlotReader).i1l = function (index) {
    return nodeCount(this.d1i_1, index);
  };
  protoOf(SlotReader).j1m = function (index) {
    return isNode(this.d1i_1, index) ? node(this.d1i_1, this, index) : null;
  };
  protoOf(SlotReader).t1k = function () {
    return this.y1k() ? true : this.i1i_1 === this.j1i_1;
  };
  protoOf(SlotReader).y1k = function () {
    return this.l1i_1 > 0;
  };
  protoOf(SlotReader).l1m = function () {
    return groupSize(this.d1i_1, this.i1i_1);
  };
  protoOf(SlotReader).p1k = function (index) {
    return groupSize(this.d1i_1, index);
  };
  protoOf(SlotReader).s1k = function () {
    return this.j1i_1;
  };
  protoOf(SlotReader).w1j = function () {
    var tmp;
    if (this.i1i_1 < this.j1i_1) {
      tmp = key(this.d1i_1, this.i1i_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).x1i = function (index) {
    return key(this.d1i_1, index);
  };
  protoOf(SlotReader).r1p = function () {
    return this.m1i_1 - slotAnchor(this.d1i_1, this.k1i_1) | 0;
  };
  protoOf(SlotReader).j1l = function (index) {
    return hasObjectKey(this.d1i_1, index);
  };
  protoOf(SlotReader).y1j = function () {
    return this.i1i_1 < this.j1i_1 ? objectKey(this.d1i_1, this, this.i1i_1) : null;
  };
  protoOf(SlotReader).w1i = function (index) {
    return objectKey(this.d1i_1, this, index);
  };
  protoOf(SlotReader).g1j = function () {
    return this.i1i_1 < this.j1i_1 ? aux(this.d1i_1, this, this.i1i_1) : 0;
  };
  protoOf(SlotReader).v1i = function (index) {
    return aux(this.d1i_1, this, index);
  };
  protoOf(SlotReader).x1n = function (index) {
    return hasMark(this.d1i_1, index);
  };
  protoOf(SlotReader).v1n = function (index) {
    return containsMark(this.d1i_1, index);
  };
  protoOf(SlotReader).k1l = function () {
    return this.k1i_1 >= 0 ? nodeCount(this.d1i_1, this.k1i_1) : 0;
  };
  protoOf(SlotReader).u1p = function (index) {
    return this.w1n(this.i1i_1, index);
  };
  protoOf(SlotReader).w1n = function (group, index) {
    var start = slotAnchor(this.d1i_1, group);
    var next = group + 1 | 0;
    var end = next < this.e1i_1 ? dataAnchor(this.d1i_1, next) : this.g1i_1;
    var address = start + index | 0;
    return address < end ? this.f1i_1[address] : Companion_getInstance_1().k1j_1;
  };
  protoOf(SlotReader).e = function () {
    if (this.l1i_1 > 0 ? true : this.m1i_1 >= this.n1i_1)
      return Companion_getInstance_1().k1j_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1i_1;
    tmp0_this.m1i_1 = tmp1 + 1 | 0;
    return this.f1i_1[tmp1];
  };
  protoOf(SlotReader).j1j = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.l1i_1;
    tmp0_this.l1i_1 = tmp1 + 1 | 0;
  };
  protoOf(SlotReader).v1k = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.l1i_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.l1i_1;
    tmp0_this.l1i_1 = tmp1 - 1 | 0;
  };
  protoOf(SlotReader).o1i = function () {
    this.h1i_1 = true;
    this.c1i_1.s20(this);
  };
  protoOf(SlotReader).h1j = function () {
    if (this.l1i_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = parentAnchor(this.d1i_1, this.i1i_1) === this.k1i_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        tmp$ret$0 = 'Invalid slot table detected';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.k1i_1 = this.i1i_1;
      this.j1i_1 = this.i1i_1 + groupSize(this.d1i_1, this.i1i_1) | 0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.i1i_1;
      tmp0_this.i1i_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.m1i_1 = slotAnchor(this.d1i_1, current);
      this.n1i_1 = current >= (this.e1i_1 - 1 | 0) ? this.g1i_1 : dataAnchor(this.d1i_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).i1j = function () {
    if (this.l1i_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isNode(this.d1i_1, this.i1i_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        tmp$ret$0 = 'Expected a node group';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.h1j();
    }
  };
  protoOf(SlotReader).u1i = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.l1i_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot skip while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.d1i_1, this.i1i_1) ? 1 : nodeCount(this.d1i_1, this.i1i_1);
    var tmp0_this = this;
    tmp0_this.i1i_1 = tmp0_this.i1i_1 + groupSize(this.d1i_1, this.i1i_1) | 0;
    return count;
  };
  protoOf(SlotReader).f1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.l1i_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.i1i_1 = this.j1i_1;
  };
  protoOf(SlotReader).k1k = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.l1i_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      tmp$ret$0 = 'Cannot reposition while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.i1i_1 = index;
    var parent = index < this.e1i_1 ? parentAnchor(this.d1i_1, index) : -1;
    this.k1i_1 = parent;
    if (parent < 0)
      this.j1i_1 = this.e1i_1;
    else
      this.j1i_1 = parent + groupSize(this.d1i_1, parent) | 0;
    this.m1i_1 = 0;
    this.n1i_1 = 0;
  };
  protoOf(SlotReader).e1l = function (index) {
    var newCurrentEnd = index + groupSize(this.d1i_1, index) | 0;
    var current = this.i1i_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = current >= index ? current <= newCurrentEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.k1i_1 = index;
    this.j1i_1 = newCurrentEnd;
    this.m1i_1 = 0;
    this.n1i_1 = 0;
  };
  protoOf(SlotReader).u1k = function () {
    if (this.l1i_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = this.i1i_1 === this.j1i_1;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        tmp$ret$0 = 'endGroup() not called at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.d1i_1, this.k1i_1);
      this.k1i_1 = parent;
      this.j1i_1 = parent < 0 ? this.e1i_1 : parent + groupSize(this.d1i_1, parent) | 0;
    }
  };
  protoOf(SlotReader).x1j = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    if (this.l1i_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.i1i_1;
    while (childIndex < this.j1i_1) {
      var tmp = key(this.d1i_1, childIndex);
      var tmp_0 = objectKey(this.d1i_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.d1i_1, childIndex) ? 1 : nodeCount(this.d1i_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.d1i_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).z1p = function (group, block) {
    var start = slotAnchor(this.d1i_1, group);
    var end = (group + 1 | 0) < this.c1i_1.j1h_1 ? dataAnchor(this.c1i_1.i1h_1, group + 1 | 0) : this.c1i_1.l1h_1;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(index - start | 0, this.f1i_1[index]);
      }
       while (inductionVariable < end);
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.i1i_1 + ', key=' + this.w1j() + ', ' + ('parent=' + this.k1i_1 + ', end=' + this.j1i_1 + ')');
  };
  protoOf(SlotReader).b1k = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.c1i_1.p1h_1;
    var tmp1_getOrAdd = this.e1i_1;
    var location = search$accessor$3b1dzq(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.h3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.g(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.g(mid).n1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      tmp$ret$0 = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      var midVal = tmp$ret$1;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function validateRead($this) {
    if (!($this.t20_1.o1h_1 === $this.w20_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.t20_1 = table;
    this.u20_1 = end;
    this.v20_1 = start;
    this.w20_1 = this.t20_1.o1h_1;
    if (this.t20_1.n1h_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d = function () {
    return this.v20_1 < this.u20_1;
  };
  protoOf(GroupIterator).e = function () {
    validateRead(this);
    var group = this.v20_1;
    var tmp0_this = this;
    tmp0_this.v20_1 = tmp0_this.v20_1 + groupSize(this.t20_1.i1h_1, group) | 0;
    return new SlotTableGroup(this.t20_1, group, this.w20_1);
  };
  function validateRead_0($this) {
    if (!($this.x20_1.o1h_1 === $this.z20_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.o1h_1 : version;
    this.x20_1 = table;
    this.y20_1 = group;
    this.z20_1 = version;
  }
  protoOf(SlotTableGroup).c = function () {
    validateRead_0(this);
    return new GroupIterator(this.x20_1, this.y20_1 + 1 | 0, this.y20_1 + groupSize(this.x20_1.i1h_1, this.y20_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.c1k_1 = key;
    this.d1k_1 = objectKey;
    this.e1k_1 = location;
    this.f1k_1 = nodes;
    this.g1k_1 = index;
  }
  function search$accessor$3b1dzq(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function snapshotFlow(block) {
    return flow(snapshotFlow$slambda_0(block, null));
  }
  function intersects(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.f() < other.f()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(_this__u8e3s4, Collection)) {
          tmp_0 = _this__u8e3s4.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = _this__u8e3s4.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          tmp$ret$1 = other.m(element);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(other, Collection)) {
          tmp_1 = other.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = other.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          tmp$ret$3 = _this__u8e3s4.m(element_0);
          if (tmp$ret$3) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function snapshotFlow$slambda$lambda($readSet) {
    return function (it) {
      $readSet.a(it);
      return Unit_getInstance();
    };
  }
  function snapshotFlow$slambda$lambda_0($appliedChanges) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      $appliedChanges.w11(changed);
      return Unit_getInstance();
    };
  }
  function snapshotFlow$slambda($block, resultContinuation) {
    this.i21_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(snapshotFlow$slambda).t21 = function ($this$flow, $completion) {
    var tmp = this.u21($this$flow, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(snapshotFlow$slambda).eg = function (p1, $completion) {
    return this.t21((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(snapshotFlow$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 11;
            var tmp_0 = this;
            tmp_0.k21_1 = LinkedHashSet_init_$Create$();
            var tmp_1 = this;
            tmp_1.l21_1 = snapshotFlow$slambda$lambda(this.k21_1);
            var tmp_2 = this;
            Factory_getInstance();
            tmp_2.m21_1 = Channel(2147483647);
            var tmp_3 = this;
            var tmp_4 = Companion_getInstance_10();
            tmp_3.n21_1 = tmp_4.c20(snapshotFlow$slambda$lambda_0(this.m21_1));
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 10;
            var tmp_5 = this;
            var tmp0_run = Companion_getInstance_10().v21(this.l21_1);
            var tmp$ret$6;
            l$ret$7: do {
              var tmp_6;
              try {
                var tmp$ret$4;
                l$ret$5: do {
                  var previous = tmp0_run.e1y();
                  var tmp$ret$2;
                  l$ret$3: do {
                    var tmp$ret$0;
                    l$ret$1: do {
                      var tmp_7;
                      try {
                        tmp$ret$0 = this.i21_1();
                        break l$ret$1;
                      } catch ($p) {
                        var tmp_8;
                        {
                          var t = $p;
                          tmp0_run.f1y(previous);
                          throw t;
                        }
                        tmp_7 = tmp_8;
                      }
                      tmp$ret$0 = tmp_7;
                    }
                     while (false);
                    var tmp_9 = tmp$ret$0;
                    tmp0_run.f1y(previous);
                    tmp$ret$4 = tmp_9;
                    break l$ret$5;
                  }
                   while (false);
                  tmp0_run.f1y(previous);
                }
                 while (false);
                tmp$ret$6 = tmp$ret$4;
                break l$ret$7;
              } catch ($p) {
                var tmp_10;
                {
                  var t_0 = $p;
                  tmp0_run.wp();
                  throw t_0;
                }
                tmp_6 = tmp_10;
              }
              tmp$ret$6 = tmp_6;
            }
             while (false);
            var tmp_11 = tmp$ret$6;
            tmp0_run.wp();
            ;
            tmp_5.p21_1 = tmp_11;
            this.jf_1 = 2;
            suspendResult = this.j21_1.c14(this.p21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.jf_1 = 8;
              continue $sm;
            }

            this.q21_1 = false;
            this.jf_1 = 4;
            suspendResult = this.m21_1.l11(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.r21_1 = suspendResult;
            $l$loop: while (true) {
              this.q21_1 = this.q21_1 ? true : intersects(this.k21_1, this.r21_1);
              var tmp_12 = this;
              var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.m21_1.m11());
              var tmp_13;
              if (tmp0_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_13 = tmp0_elvis_lhs;
              }
              tmp_12.r21_1 = tmp_13;
            }

            if (this.q21_1) {
              this.k21_1.l3();
              var tmp_14 = this;
              var tmp1_run = Companion_getInstance_10().v21(this.l21_1);
              var tmp$ret$14;
              l$ret$15: do {
                var tmp_15;
                try {
                  var tmp$ret$12;
                  l$ret$13: do {
                    var previous_0 = tmp1_run.e1y();
                    var tmp$ret$10;
                    l$ret$11: do {
                      var tmp$ret$8;
                      l$ret$9: do {
                        var tmp_16;
                        try {
                          tmp$ret$8 = this.i21_1();
                          break l$ret$9;
                        } catch ($p) {
                          var tmp_17;
                          {
                            var t_1 = $p;
                            tmp1_run.f1y(previous_0);
                            throw t_1;
                          }
                          tmp_16 = tmp_17;
                        }
                        tmp$ret$8 = tmp_16;
                      }
                       while (false);
                      var tmp_18 = tmp$ret$8;
                      tmp1_run.f1y(previous_0);
                      tmp$ret$12 = tmp_18;
                      break l$ret$13;
                    }
                     while (false);
                    tmp1_run.f1y(previous_0);
                  }
                   while (false);
                  tmp$ret$14 = tmp$ret$12;
                  break l$ret$15;
                } catch ($p) {
                  var tmp_19;
                  {
                    var t_2 = $p;
                    tmp1_run.wp();
                    throw t_2;
                  }
                  tmp_15 = tmp_19;
                }
                tmp$ret$14 = tmp_15;
              }
               while (false);
              var tmp_20 = tmp$ret$14;
              tmp1_run.wp();
              tmp_14.s21_1 = tmp_20;
              if (!equals(this.s21_1, this.p21_1)) {
                this.p21_1 = this.s21_1;
                this.jf_1 = 5;
                suspendResult = this.j21_1.c14(this.s21_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.jf_1 = 6;
                continue $sm;
              }
            } else {
              this.jf_1 = 7;
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
            this.o21_1 = Unit_getInstance();
            this.kf_1 = 11;
            this.jf_1 = 9;
            continue $sm;
          case 9:
            this.n21_1.wp();
            ;
            return Unit_getInstance();
          case 10:
            this.kf_1 = 11;
            var t_3 = this.mf_1;
            this.n21_1.wp();
            ;
            throw t_3;
          case 11:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 11) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(snapshotFlow$slambda).u21 = function ($this$flow, completion) {
    var i = new snapshotFlow$slambda(this.i21_1, completion);
    i.j21_1 = $this$flow;
    return i;
  };
  function snapshotFlow$slambda_0($block, resultContinuation) {
    var i = new snapshotFlow$slambda($block, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.t21($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  protoOf(StructuralEqualityPolicy).x21 = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).k1v = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.x21(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function NeverEqualPolicy() {
    NeverEqualPolicy_instance = this;
  }
  protoOf(NeverEqualPolicy).x21 = function (a, b) {
    return false;
  };
  protoOf(NeverEqualPolicy).k1v = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.x21(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(NeverEqualPolicy).toString = function () {
    return 'NeverEqualPolicy';
  };
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    if (NeverEqualPolicy_instance == null)
      new NeverEqualPolicy();
    return NeverEqualPolicy_instance;
  }
  function ReferentialEqualityPolicy() {
    ReferentialEqualityPolicy_instance = this;
  }
  protoOf(ReferentialEqualityPolicy).x21 = function (a, b) {
    return a === b;
  };
  protoOf(ReferentialEqualityPolicy).k1v = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.x21(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(ReferentialEqualityPolicy).toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    if (ReferentialEqualityPolicy_instance == null)
      new ReferentialEqualityPolicy();
    return ReferentialEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.b22_1 = myValue;
  }
  protoOf(StateStateRecord).w1u = function (value) {
    var tmp = this;
    tmp.b22_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).b22_1;
  };
  protoOf(StateStateRecord).x1u = function () {
    return new StateStateRecord(this.b22_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.c22_1 = policy;
    this.d22_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).g1u = function () {
    return this.c22_1;
  };
  protoOf(SnapshotMutableStateImpl).kk = function (value) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d22_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp;
    if (!this.g1u().k1v(tmp1__anonymous__uwfjfc.b22_1, value)) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp2_overwritable = this.d22_1;
      var snapshot = get_snapshotInitializer();
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp3__anonymous__ufb84q = overwritableRecord(tmp2_overwritable, this, snapshot, tmp1__anonymous__uwfjfc);
      tmp3__anonymous__ufb84q.b22_1 = value;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_also = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$4 = tmp1_also;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    tmp$ret$6 = tmp;
    return tmp$ret$6;
  };
  protoOf(SnapshotMutableStateImpl).b2 = function () {
    return readable_0(this.d22_1, this).b22_1;
  };
  protoOf(SnapshotMutableStateImpl).a1v = function () {
    return this.d22_1;
  };
  protoOf(SnapshotMutableStateImpl).m1v = function (value) {
    var tmp = this;
    tmp.d22_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).n1v = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.g1u().k1v(currentRecord.b22_1, appliedRecord.b22_1)) {
      tmp = current;
    } else {
      var merged = this.g1u().w21(previousRecord.b22_1, currentRecord.b22_1, appliedRecord.b22_1);
      var tmp_0;
      if (!(merged == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.x1u();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).b22_1 = merged;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.d22_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'MutableState(value=' + tmp1__anonymous__uwfjfc.b22_1 + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function rememberUpdatedState$composable(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.s1c(735465400);
    sourceInformation($composer_0, 'C(rememberUpdatedState$composable)*294@9997L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(735465400, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState$composable (SnapshotState.kt:294)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().k1j_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(newValue);
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
    var tmp3_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
    tmp3_apply.kk(newValue);
    tmp$ret$5 = tmp3_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1c();
    return tmp0_0;
  }
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.h1u_1 = new AtomicReference(get_emptyThreadMap());
    this.i1u_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).pt = function () {
    var tmp = this.h1u_1.pt().h22(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).j1u = function (value) {
    var key = getCurrentThreadId();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.i1u_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.h1u_1.pt();
    if (current.i22(key, value))
      return Unit_getInstance();
    this.h1u_1.h1s(current.j22(key, value));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  function IntStack() {
    this.u1h_1 = new Int32Array(10);
    this.v1h_1 = 0;
  }
  protoOf(IntStack).f = function () {
    return this.v1h_1;
  };
  protoOf(IntStack).w1h = function (value) {
    if (this.v1h_1 >= this.u1h_1.length) {
      this.u1h_1 = copyOf(this.u1h_1, imul(this.u1h_1.length, 2));
    }
    var tmp = this.u1h_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.v1h_1;
    tmp0_this.v1h_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).m1k = function () {
    var tmp = this.u1h_1;
    var tmp0_this = this;
    tmp0_this.v1h_1 = tmp0_this.v1h_1 - 1 | 0;
    return tmp[tmp0_this.v1h_1];
  };
  protoOf(IntStack).q1m = function (default_0) {
    return this.v1h_1 > 0 ? this.g1p() : default_0;
  };
  protoOf(IntStack).g1p = function () {
    return this.u1h_1[this.v1h_1 - 1 | 0];
  };
  protoOf(IntStack).g1l = function (index) {
    return this.u1h_1[index];
  };
  protoOf(IntStack).l = function () {
    return this.v1h_1 === 0;
  };
  protoOf(IntStack).l3 = function () {
    this.v1h_1 = 0;
  };
  protoOf(IntStack).l20 = function (value) {
    var inductionVariable = 0;
    var last = this.v1h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.u1h_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.p1i_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).f = function () {
    return this.p1i_1.f();
  };
  protoOf(Stack).l1k = function (value) {
    return this.p1i_1.a(value);
  };
  protoOf(Stack).m1k = function () {
    return this.p1i_1.k3(this.f() - 1 | 0);
  };
  protoOf(Stack).g1p = function () {
    return this.p1i_1.g(this.f() - 1 | 0);
  };
  protoOf(Stack).g1l = function (index) {
    return this.p1i_1.g(index);
  };
  protoOf(Stack).l = function () {
    return this.p1i_1.l();
  };
  protoOf(Stack).k1m = function () {
    return !this.l();
  };
  protoOf(Stack).l3 = function () {
    return this.p1i_1.l3();
  };
  protoOf(Stack).n3 = function () {
    var tmp = 0;
    var tmp_0 = this.p1i_1.f();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Stack.toArray.<anonymous>' call
      tmp$ret$1 = this.p1i_1.g(tmp_2);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = current$factory();
    tmp$ret$0 = $this.d1j_1.b2();
    return tmp$ret$0;
  }
  function LazyValueHolder(valueProducer) {
    this.d1j_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).b2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.k22_1 = value;
  }
  protoOf(StaticValueHolder).b2 = function () {
    return this.k22_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.k22_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.k22_1 == null ? 0 : hashCode(this.k22_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.k22_1, tmp0_other_with_cast.k22_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.z1v_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.a1w_1[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.a1w_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.z1v_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.a1w_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.z1v_1 + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.z1v_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(4), null);
    tmp.a1w_1 = tmp$ret$0;
    this.b1w_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).d1w = function (key, value) {
    var index;
    if (this.z1v_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = this.b1w_1[index];
        this.b1w_1[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.z1v_1 === this.a1w_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.a1w_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newKeys = tmp$ret$0;
      var newValues = new Int32Array(imul(this.a1w_1.length, 2));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.a1w_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.z1v_1;
      arrayCopy(tmp1_copyInto, newKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newKeys;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.b1w_1;
      var tmp5_copyInto = insertIndex + 1 | 0;
      var tmp6_copyInto = this.z1v_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp4_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = newValues;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp, tmp$ret$5, tmp5_copyInto, insertIndex, tmp6_copyInto);
      tmp$ret$6 = newValues;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp7_copyInto = this.a1w_1;
      arrayCopy(tmp7_copyInto, newKeys, 0, 0, insertIndex);
      tmp$ret$7 = newKeys;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = this.b1w_1;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = tmp8_copyInto;
      tmp$ret$9 = tmp$ret$8;
      var tmp_0 = tmp$ret$9;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = newValues;
      tmp$ret$11 = tmp$ret$10;
      arrayCopy(tmp_0, tmp$ret$11, 0, 0, insertIndex);
      tmp$ret$12 = newValues;
      this.a1w_1 = newKeys;
      this.b1w_1 = newValues;
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.a1w_1;
      var tmp10_copyInto = this.a1w_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      var tmp12_copyInto = this.z1v_1;
      arrayCopy(tmp9_copyInto, tmp10_copyInto, tmp11_copyInto, insertIndex, tmp12_copyInto);
      tmp$ret$13 = tmp10_copyInto;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp13_copyInto = this.b1w_1;
      var tmp14_copyInto = this.b1w_1;
      var tmp15_copyInto = insertIndex + 1 | 0;
      var tmp16_copyInto = this.z1v_1;
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp13_copyInto;
      tmp$ret$15 = tmp$ret$14;
      var tmp_1 = tmp$ret$15;
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = tmp14_copyInto;
      tmp$ret$17 = tmp$ret$16;
      arrayCopy(tmp_1, tmp$ret$17, tmp15_copyInto, insertIndex, tmp16_copyInto);
      tmp$ret$18 = tmp14_copyInto;
    }
    this.a1w_1[insertIndex] = key;
    this.b1w_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.z1v_1;
    tmp0_this.z1v_1 = tmp1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.m1n_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = $this.k1n_1[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = $this.k1n_1[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.m1n_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = $this.k1n_1[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.m1n_1 + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    tmp.k1n_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(capacity), null);
    tmp_0.l1n_1 = tmp$ret$1;
    this.m1n_1 = 0;
  }
  protoOf(IdentityArrayMap).k1m = function () {
    return this.m1n_1 > 0;
  };
  protoOf(IdentityArrayMap).p1t = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).o1t = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.l1n_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).k1s = function (key, value) {
    var index = find_0(this, key);
    if (index >= 0) {
      this.l1n_1[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = this.m1n_1 === this.k1n_1.length;
      var tmp;
      if (resize) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(this.m1n_1, 2);
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = this.k1n_1;
      }
      var destKeys = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.k1n_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.m1n_1;
      arrayCopy(tmp1_copyInto, destKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = destKeys;
      if (resize) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = this.k1n_1;
        arrayCopy(tmp4_copyInto, destKeys, 0, 0, insertIndex);
        tmp$ret$2 = destKeys;
      }
      destKeys[insertIndex] = key;
      this.k1n_1 = destKeys;
      var tmp_0;
      if (resize) {
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp5_arrayOfNulls = imul(this.m1n_1, 2);
        tmp$ret$3 = fillArrayVal(Array(tmp5_arrayOfNulls), null);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = this.l1n_1;
      }
      var destValues = tmp_0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.l1n_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.m1n_1;
      arrayCopy(tmp6_copyInto, destValues, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$4 = destValues;
      if (resize) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp9_copyInto = this.l1n_1;
        arrayCopy(tmp9_copyInto, destValues, 0, 0, insertIndex);
        tmp$ret$5 = destValues;
      }
      destValues[insertIndex] = value;
      this.l1n_1 = destValues;
      var tmp0_this = this;
      var tmp1 = tmp0_this.m1n_1;
      tmp0_this.m1n_1 = tmp1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).c1w = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.l1n_1[index];
      var size = this.m1n_1;
      var keys = this.k1n_1;
      var values = this.l1n_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      tmp$ret$0 = keys;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      tmp$ret$1 = values;
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.m1n_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  protoOf(IdentityArrayMap).l3 = function () {
    this.m1n_1 = 0;
    fill_0(this.k1n_1, null);
    fill_0(this.l1n_1, null);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.g1m_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.g(mid);
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.h1m_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.g1m_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.h1m_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.g1m_1 + 1 | 0) | 0;
  }
  function checkIndexBounds($this, index) {
    if (!(0 <= index ? index < $this.g1m_1 : false)) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ', size ' + $this.g1m_1);
    }
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.m22_1 = this$0;
    this.l22_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d = function () {
    return this.l22_1 < this.m22_1.g1m_1;
  };
  protoOf(IdentityArraySet$iterator$1).e = function () {
    var tmp = this.m22_1.h1m_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.l22_1;
    tmp0_this.l22_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet() {
    this.g1m_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.h1m_1 = tmp$ret$0;
  }
  protoOf(IdentityArraySet).f = function () {
    return this.g1m_1;
  };
  protoOf(IdentityArraySet).x3 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).m = function (element) {
    if (!isObject(element))
      return false;
    return this.x3(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).g = function (index) {
    checkIndexBounds(this, index);
    var tmp = this.h1m_1[index];
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  protoOf(IdentityArraySet).h1r = function (value) {
    var index;
    if (this.g1m_1 > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.g1m_1 === this.h1m_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.h1m_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newSorted = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.h1m_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.g1m_1;
      arrayCopy(tmp1_copyInto, newSorted, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newSorted;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.h1m_1;
      arrayCopy(tmp4_copyInto, newSorted, 0, 0, insertIndex);
      tmp$ret$2 = newSorted;
      this.h1m_1 = newSorted;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = this.h1m_1;
      var tmp6_copyInto = this.h1m_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.g1m_1;
      arrayCopy(tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$3 = tmp6_copyInto;
    }
    this.h1m_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1m_1;
    tmp0_this.g1m_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).l3 = function () {
    fill_0(this.h1m_1, null);
    this.g1m_1 = 0;
  };
  protoOf(IdentityArraySet).l = function () {
    return this.g1m_1 === 0;
  };
  protoOf(IdentityArraySet).k1m = function () {
    return this.g1m_1 > 0;
  };
  protoOf(IdentityArraySet).n22 = function (value) {
    var index = find_1(this, value);
    if (index >= 0) {
      if (index < (this.g1m_1 - 1 | 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.h1m_1;
        var tmp1_copyInto = this.h1m_1;
        var tmp2_copyInto = index + 1 | 0;
        var tmp3_copyInto = this.g1m_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tmp3_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.g1m_1;
      tmp0_this.g1m_1 = tmp1 - 1 | 0;
      this.h1m_1[this.g1m_1] = null;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).y3 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.x3(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).d1 = function (elements) {
    return this.y3(elements);
  };
  protoOf(IdentityArraySet).c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.r1r_1[$this.p1r_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var index;
    if ($this.s1r_1 > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if ($this.s1r_1 < $this.p1r_1.length) {
      var valueIndex = $this.p1r_1[$this.s1r_1];
      $this.q1r_1[valueIndex] = value;
      var tmp0_elvis_lhs = $this.r1r_1[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        $this.r1r_1[valueIndex] = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < $this.s1r_1) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = $this.p1r_1;
        var tmp2_copyInto = $this.p1r_1;
        var tmp3_copyInto = insertIndex + 1 | 0;
        var tmp4_copyInto = $this.s1r_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_copyInto;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = tmp2_copyInto;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, tmp3_copyInto, insertIndex, tmp4_copyInto);
        tmp$ret$5 = tmp2_copyInto;
      }
      $this.p1r_1[insertIndex] = valueIndex;
      var tmp1_this = $this;
      var tmp2 = tmp1_this.s1r_1;
      tmp1_this.s1r_1 = tmp2 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul($this.p1r_1.length, 2);
    var valueIndex_0 = $this.s1r_1;
    $this.r1r_1 = copyOf_0($this.r1r_1, newSize);
    var scopeSet_0 = new IdentityArraySet();
    $this.r1r_1[valueIndex_0] = scopeSet_0;
    $this.q1r_1 = copyOf_0($this.q1r_1, newSize);
    $this.q1r_1[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = $this.s1r_1 + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < $this.s1r_1) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = $this.p1r_1;
      var tmp6_copyInto = insertIndex + 1 | 0;
      var tmp7_copyInto = $this.s1r_1;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp5_copyInto;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = newKeyOrder;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, tmp6_copyInto, insertIndex, tmp7_copyInto);
      tmp$ret$10 = newKeyOrder;
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      var tmp$ret$15;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = $this.p1r_1;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp8_copyInto;
      tmp$ret$12 = tmp$ret$11;
      var tmp_2 = tmp$ret$12;
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = newKeyOrder;
      tmp$ret$14 = tmp$ret$13;
      arrayCopy(tmp_2, tmp$ret$14, 0, 0, insertIndex);
      tmp$ret$15 = newKeyOrder;
    }
    $this.p1r_1 = newKeyOrder;
    var tmp4_this = $this;
    var tmp5 = tmp4_this.s1r_1;
    tmp4_this.s1r_1 = tmp5 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.s1r_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
      tmp$ret$0 = ensureNotNull($this.q1r_1[$this.p1r_1[mid]]);
      var midValue = tmp$ret$0;
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$0 = ensureNotNull($this.q1r_1[$this.p1r_1[i]]);
        var v = tmp$ret$0;
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.s1r_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$1 = ensureNotNull($this.q1r_1[$this.p1r_1[i_0]]);
        var v_0 = tmp$ret$1;
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.s1r_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 50;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueOrder.<anonymous>' call
      tmp$ret$0 = tmp_3;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.p1r_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(50), null);
    tmp_4.q1r_1 = tmp$ret$1;
    var tmp_5 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(50), null);
    tmp_5.r1r_1 = tmp$ret$2;
    this.s1r_1 = 0;
  }
  protoOf(IdentityScopeMap).v1r = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.h1r(scope);
  };
  protoOf(IdentityScopeMap).t1r = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).l3 = function () {
    var inductionVariable = 0;
    var last = this.r1r_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.r1r_1[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.l3();
        }
        this.p1r_1[i] = i;
        this.q1r_1[i] = null;
      }
       while (inductionVariable < last);
    this.s1r_1 = 0;
  };
  protoOf(IdentityScopeMap).l1s = function (value, scope) {
    var index = find_2(this, value);
    if (index >= 0) {
      var valueOrderIndex = this.p1r_1[index];
      var tmp0_elvis_lhs = this.r1r_1[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.n22(scope);
      if (set.g1m_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = this.s1r_1;
        if (startIndex < endIndex) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp0_copyInto = this.p1r_1;
          var tmp1_copyInto = this.p1r_1;
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
          arrayCopy(tmp_0, tmp$ret$3, index, startIndex, endIndex);
          tmp$ret$4 = tmp1_copyInto;
        }
        this.p1r_1[this.s1r_1 - 1 | 0] = valueOrderIndex;
        this.q1r_1[valueOrderIndex] = null;
        var tmp1_this = this;
        var tmp2 = tmp1_this.s1r_1;
        tmp1_this.s1r_1 = tmp2 - 1 | 0;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).v1s = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.s1r_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.p1r_1[i];
        var set = ensureNotNull(this.r1r_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.n22(scope);
        if (set.g1m_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.p1r_1[destinationIndex];
            this.p1r_1[destinationIndex] = valueIndex;
            this.p1r_1[i] = destinationKeyOrder;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.s1r_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.q1r_1[this.p1r_1[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.s1r_1 = destinationIndex;
  };
  function VectorListIterator(list, index) {
    this.o22_1 = list;
    this.p22_1 = index;
  }
  protoOf(VectorListIterator).d = function () {
    return this.p22_1 < this.o22_1.f();
  };
  protoOf(VectorListIterator).e = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.p22_1;
    tmp0_this.p22_1 = tmp1 + 1 | 0;
    return this.o22_1.g(tmp1);
  };
  protoOf(VectorListIterator).t4 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.p22_1;
    tmp0_this.p22_1 = tmp1 - 1 | 0;
    this.o22_1.k3(this.p22_1);
  };
  protoOf(VectorListIterator).r1 = function () {
    return this.p22_1 > 0;
  };
  protoOf(VectorListIterator).s1 = function () {
    return this.p22_1;
  };
  protoOf(VectorListIterator).t1 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.p22_1;
    tmp0_this.p22_1 = tmp1 - 1 | 0;
    return this.o22_1.g(this.p22_1);
  };
  protoOf(VectorListIterator).u1 = function () {
    return this.p22_1 - 1 | 0;
  };
  function MutableVectorList(vector) {
    this.q22_1 = vector;
  }
  protoOf(MutableVectorList).f = function () {
    return this.q22_1.m1u_1;
  };
  protoOf(MutableVectorList).x3 = function (element) {
    return this.q22_1.x3(element);
  };
  protoOf(MutableVectorList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).y3 = function (elements) {
    return this.q22_1.y3(elements);
  };
  protoOf(MutableVectorList).d1 = function (elements) {
    return this.y3(elements);
  };
  protoOf(MutableVectorList).g = function (index) {
    checkIndex(this, index);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp0_get = this.q22_1;
    var tmp = tmp0_get.k1u_1[index];
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    return tmp$ret$0;
  };
  protoOf(MutableVectorList).r22 = function (element) {
    return this.q22_1.r22(element);
  };
  protoOf(MutableVectorList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.r22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).l = function () {
    return this.q22_1.l();
  };
  protoOf(MutableVectorList).c = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(MutableVectorList).s22 = function (element) {
    return this.q22_1.s22(element);
  };
  protoOf(MutableVectorList).x1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.s22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).h1r = function (element) {
    return this.q22_1.h1r(element);
  };
  protoOf(MutableVectorList).a = function (element) {
    return this.h1r((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).z4 = function (index, element) {
    return this.q22_1.z4(index, element);
  };
  protoOf(MutableVectorList).h3 = function (index, element) {
    return this.z4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).t22 = function (index, elements) {
    return this.q22_1.t22(index, elements);
  };
  protoOf(MutableVectorList).i3 = function (index, elements) {
    return this.t22(index, elements);
  };
  protoOf(MutableVectorList).u22 = function (elements) {
    return this.q22_1.u22(elements);
  };
  protoOf(MutableVectorList).k = function (elements) {
    return this.u22(elements);
  };
  protoOf(MutableVectorList).l3 = function () {
    return this.q22_1.l3();
  };
  protoOf(MutableVectorList).j1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(MutableVectorList).n22 = function (element) {
    return this.q22_1.n22(element);
  };
  protoOf(MutableVectorList).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).k3 = function (index) {
    checkIndex(this, index);
    return this.q22_1.k3(index);
  };
  protoOf(MutableVectorList).y4 = function (index, element) {
    checkIndex(this, index);
    return this.q22_1.y4(index, element);
  };
  protoOf(MutableVectorList).p = function (index, element) {
    return this.y4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).k1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.v22_1 = list;
    this.w22_1 = start;
    this.x22_1 = end;
  }
  protoOf(SubList).f = function () {
    return this.x22_1 - this.w22_1 | 0;
  };
  protoOf(SubList).x3 = function (element) {
    var inductionVariable = this.w22_1;
    var last = this.x22_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.v22_1.g(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).y3 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.SubList.containsAll.<anonymous>' call
      if (!this.x3(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SubList).d1 = function (elements) {
    return this.y3(elements);
  };
  protoOf(SubList).g = function (index) {
    checkIndex(this, index);
    return this.v22_1.g(index + this.w22_1 | 0);
  };
  protoOf(SubList).r22 = function (element) {
    var inductionVariable = this.w22_1;
    var last = this.x22_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.v22_1.g(i), element)) {
          return i - this.w22_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.r22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).l = function () {
    return this.x22_1 === this.w22_1;
  };
  protoOf(SubList).c = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(SubList).s22 = function (element) {
    var inductionVariable = this.x22_1 - 1 | 0;
    var last = this.w22_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(this.v22_1.g(i), element)) {
          return i - this.w22_1 | 0;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(SubList).x1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.s22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).h1r = function (element) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.x22_1;
    tmp0_this.x22_1 = tmp1 + 1 | 0;
    this.v22_1.h3(tmp1, element);
    return true;
  };
  protoOf(SubList).a = function (element) {
    return this.h1r((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).z4 = function (index, element) {
    this.v22_1.h3(index + this.w22_1 | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.x22_1;
    tmp0_this.x22_1 = tmp1 + 1 | 0;
  };
  protoOf(SubList).h3 = function (index, element) {
    return this.z4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).t22 = function (index, elements) {
    this.v22_1.i3(index + this.w22_1 | 0, elements);
    var tmp0_this = this;
    tmp0_this.x22_1 = tmp0_this.x22_1 + elements.f() | 0;
    return elements.f() > 0;
  };
  protoOf(SubList).i3 = function (index, elements) {
    return this.t22(index, elements);
  };
  protoOf(SubList).u22 = function (elements) {
    this.v22_1.i3(this.x22_1, elements);
    var tmp0_this = this;
    tmp0_this.x22_1 = tmp0_this.x22_1 + elements.f() | 0;
    return elements.f() > 0;
  };
  protoOf(SubList).k = function (elements) {
    return this.u22(elements);
  };
  protoOf(SubList).l3 = function () {
    var inductionVariable = this.x22_1 - 1 | 0;
    var last = this.w22_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.v22_1.k3(i);
      }
       while (!(i === last));
    this.x22_1 = this.w22_1;
  };
  protoOf(SubList).j1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(SubList).n22 = function (element) {
    var inductionVariable = this.w22_1;
    var last = this.x22_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.v22_1.g(i), element)) {
          this.v22_1.k3(i);
          var tmp1_this = this;
          var tmp2 = tmp1_this.x22_1;
          tmp1_this.x22_1 = tmp2 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).k3 = function (index) {
    checkIndex(this, index);
    var item = this.v22_1.k3(index + this.w22_1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.x22_1;
    tmp0_this.x22_1 = tmp1 - 1 | 0;
    return item;
  };
  protoOf(SubList).y4 = function (index, element) {
    checkIndex(this, index);
    return this.v22_1.p(index + this.w22_1 | 0, element);
  };
  protoOf(SubList).p = function (index, element) {
    return this.y4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).k1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableVector(content, size) {
    this.k1u_1 = content;
    this.l1u_1 = null;
    this.m1u_1 = size;
    this.n1u_1 = 8;
  }
  protoOf(MutableVector).h1r = function (element) {
    this.y22(this.m1u_1 + 1 | 0);
    this.k1u_1[this.m1u_1] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1u_1;
    tmp0_this.m1u_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).z4 = function (index, element) {
    this.y22(this.m1u_1 + 1 | 0);
    var content = this.k1u_1;
    if (!(index === this.m1u_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.m1u_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    content[index] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1u_1;
    tmp0_this.m1u_1 = tmp1 + 1 | 0;
  };
  protoOf(MutableVector).z22 = function (index, elements) {
    if (elements.l())
      return false;
    this.y22(this.m1u_1 + elements.m1u_1 | 0);
    var content = this.k1u_1;
    if (!(index === this.m1u_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.m1u_1 | 0;
      var tmp1_copyInto = this.m1u_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = elements.k1u_1;
    var tmp3_copyInto = elements.m1u_1;
    arrayCopy(tmp2_copyInto, content, index, 0, tmp3_copyInto);
    tmp$ret$1 = content;
    var tmp0_this = this;
    tmp0_this.m1u_1 = tmp0_this.m1u_1 + elements.m1u_1 | 0;
    return true;
  };
  protoOf(MutableVector).t22 = function (index, elements) {
    if (elements.l())
      return false;
    this.y22(this.m1u_1 + elements.f() | 0);
    var content = this.k1u_1;
    if (!(index === this.m1u_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.f() | 0;
      var tmp1_copyInto = this.m1u_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
      tmp$ret$0 = content;
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
      content[index + tmp2__anonymous__z9zvc9 | 0] = item;
    }
    var tmp0_this = this;
    tmp0_this.m1u_1 = tmp0_this.m1u_1 + elements.f() | 0;
    return true;
  };
  protoOf(MutableVector).u22 = function (elements) {
    return this.t22(this.m1u_1, elements);
  };
  protoOf(MutableVector).a23 = function () {
    var tmp0_elvis_lhs = this.l1u_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.l1u_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MutableVector).l3 = function () {
    var content = this.k1u_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.m1u_1 - 1 | 0;
    var inductionVariable = tmp$ret$0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.m1u_1 = 0;
  };
  protoOf(MutableVector).x3 = function (element) {
    var inductionVariable = 0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.m1u_1 - 1 | 0;
    var last = tmp$ret$0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = this.k1u_1[i];
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).y3 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.x3(element))
        return false;
    }
    return true;
  };
  protoOf(MutableVector).y22 = function (capacity) {
    var oldContent = this.k1u_1;
    if (oldContent.length < capacity) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      tmp$ret$0 = Math.max(capacity, tmp0_max);
      var newSize = tmp$ret$0;
      this.k1u_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).b23 = function () {
    if (this.l()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.k1u_1[0];
    tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    return tmp$ret$0;
  };
  protoOf(MutableVector).r22 = function (element) {
    var size = this.m1u_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.k1u_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  protoOf(MutableVector).l = function () {
    return this.m1u_1 === 0;
  };
  protoOf(MutableVector).k1m = function () {
    return !(this.m1u_1 === 0);
  };
  protoOf(MutableVector).c23 = function () {
    if (this.l()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.m1u_1 - 1 | 0;
    var tmp0_get = tmp$ret$0;
    var tmp = this.k1u_1[tmp0_get];
    tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    return tmp$ret$1;
  };
  protoOf(MutableVector).s22 = function (element) {
    var size = this.m1u_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.k1u_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        var tmp0 = i;
        i = tmp0 - 1 | 0;
      }
       while (i >= 0);
    }
    return -1;
  };
  protoOf(MutableVector).n22 = function (element) {
    var index = this.r22(element);
    if (index >= 0) {
      this.k3(index);
      return true;
    }
    return false;
  };
  protoOf(MutableVector).k3 = function (index) {
    var content = this.k1u_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.m1u_1 - 1 | 0;
    if (!(index === tmp$ret$0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.m1u_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
      tmp$ret$1 = content;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.m1u_1;
    tmp0_this.m1u_1 = tmp1 - 1 | 0;
    content[this.m1u_1] = null;
    return item;
  };
  protoOf(MutableVector).p3 = function (start, end) {
    if (end > start) {
      if (end < this.m1u_1) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.k1u_1;
        var tmp1_copyInto = this.k1u_1;
        var tmp2_copyInto = this.m1u_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, start, end, tmp2_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var newSize = this.m1u_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$1 = this.m1u_1 - 1 | 0;
      var last = tmp$ret$1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.k1u_1[i] = null;
        }
         while (!(i === last));
      this.m1u_1 = newSize;
    }
  };
  protoOf(MutableVector).y4 = function (index, element) {
    var content = this.k1u_1;
    var tmp = content[index];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  protoOf(MutableVector).d23 = function (comparator) {
    var tmp = this.k1u_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.m1u_1);
  };
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.f();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    var size = _this__u8e3s4.f();
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('Indices are out of order. fromIndex (' + fromIndex + ') is ' + ('greater than toIndex (' + toIndex + ').'));
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  function SubList_0(source, fromIndex, toIndex) {
    AbstractList.call(this);
    this.e23_1 = source;
    this.f23_1 = fromIndex;
    this.g23_1 = toIndex;
    this.h23_1 = 0;
    ListImplementation_getInstance().h1(this.f23_1, this.g23_1, this.e23_1.f());
    this.h23_1 = this.g23_1 - this.f23_1 | 0;
  }
  protoOf(SubList_0).g = function (index) {
    ListImplementation_getInstance().i1(index, this.h23_1);
    return this.e23_1.g(this.f23_1 + index | 0);
  };
  protoOf(SubList_0).f = function () {
    return this.h23_1;
  };
  protoOf(SubList_0).k1 = function (fromIndex, toIndex) {
    ListImplementation_getInstance().h1(fromIndex, toIndex, this.h23_1);
    return new SubList_0(this.e23_1, this.f23_1 + fromIndex | 0, this.f23_1 + toIndex | 0);
  };
  function ImmutableList() {
  }
  function PersistentMap() {
  }
  function persistentHashMapOf() {
    return Companion_getInstance_7().j23();
  }
  function persistentSetOf() {
    return Companion_getInstance_9().l23();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.o23_1 = element;
  }
  protoOf(SingleElementListIterator).e = function () {
    this.r23();
    var tmp0_this = this;
    var tmp1 = tmp0_this.p23_1;
    tmp0_this.p23_1 = tmp1 + 1 | 0;
    return this.o23_1;
  };
  protoOf(SingleElementListIterator).t1 = function () {
    this.s23();
    var tmp0_this = this;
    var tmp1 = tmp0_this.p23_1;
    tmp0_this.p23_1 = tmp1 - 1 | 0;
    return this.o23_1;
  };
  function AbstractListIterator(index, size) {
    this.p23_1 = index;
    this.q23_1 = size;
  }
  protoOf(AbstractListIterator).d = function () {
    return this.p23_1 < this.q23_1;
  };
  protoOf(AbstractListIterator).r1 = function () {
    return this.p23_1 > 0;
  };
  protoOf(AbstractListIterator).s1 = function () {
    return this.p23_1;
  };
  protoOf(AbstractListIterator).u1 = function () {
    return this.p23_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).r23 = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).s23 = function () {
    if (!this.r1())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).k1 = function (fromIndex, toIndex) {
    return subList.call(this, fromIndex, toIndex);
  };
  protoOf(AbstractPersistentList).k = function (elements) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1i();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.a1j();
    return tmp$ret$1;
  };
  protoOf(AbstractPersistentList).j3 = function (element) {
    var index = this.n(element);
    if (!(index === -1)) {
      return this.k3(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).m = function (element) {
    return !(this.n(element) === -1);
  };
  protoOf(AbstractPersistentList).d1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        tmp$ret$1 = this.m(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).c = function () {
    return this.t23();
  };
  protoOf(AbstractPersistentList).t23 = function () {
    return this.j1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.x23_1 = buffer;
  }
  protoOf(BufferIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.p23_1;
    tmp0_this.p23_1 = tmp1 + 1 | 0;
    return this.x23_1[tmp1];
  };
  protoOf(BufferIterator).t1 = function () {
    if (!this.r1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp0_this = this;
    tmp0_this.p23_1 = tmp0_this.p23_1 - 1 | 0;
    return this.x23_1[tmp0_this.p23_1];
  };
  function rootSize($this) {
    return rootSize_1($this.a24_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.a24_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.b24_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.b24_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.a24_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.b24_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.a24_1 + 1 | 0, $this.b24_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.a24_1 - 1 | 0, shift);
    var tmp0_safe_receiver = root;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copyOf_0(tmp0_safe_receiver, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.a24_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.z23_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.z23_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      tmp$ret$0 = newTail;
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.a24_1 + 1 | 0, $this.b24_1);
    }
    var lastElement = $this.z23_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.z23_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    tmp$ret$1 = newTail;
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      elementCarry.c24_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.c24_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.a24_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.z23_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.z23_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
      tmp$ret$0 = newTail;
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.c24_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.c24_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.c24_1;
      tailCarry.c24_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.z23_1;
    }
    var buffer = $this.y23_1;
    var shift = $this.b24_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.y23_1 = root;
    this.z23_1 = tail;
    this.a24_1 = size;
    this.b24_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.a24_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.a24_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.a24_1 - rootSize_1(this.a24_1) | 0) <= coerceAtMost(this.z23_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).f = function () {
    return this.a24_1;
  };
  protoOf(PersistentVector).a = function (element) {
    var tailSize = this.a24_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.z23_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.y23_1, newTail, this.a24_1 + 1 | 0, this.b24_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.y23_1, this.z23_1, newTail_0);
  };
  protoOf(PersistentVector).u23 = function (index, element) {
    ListImplementation_getInstance().q1(index, this.a24_1);
    if (index === this.a24_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.y23_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.y23_1, this.b24_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.c24_1);
  };
  protoOf(PersistentVector).k3 = function (index) {
    ListImplementation_getInstance().i1(index, this.a24_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.y23_1, rootSize_0, this.b24_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.y23_1, this.b24_1, index, new ObjectRef(this.z23_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.b24_1, 0);
  };
  protoOf(PersistentVector).z1i = function () {
    return new PersistentVectorBuilder(this, this.y23_1, this.z23_1, this.b24_1);
  };
  protoOf(PersistentVector).j1 = function (index) {
    ListImplementation_getInstance().q1(index, this.a24_1);
    var tmp = this.z23_1;
    return new PersistentVectorIterator(this.y23_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.a24_1, (this.b24_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).g = function (index) {
    ListImplementation_getInstance().i1(index, this.a24_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).p = function (index, element) {
    ListImplementation_getInstance().i1(index, this.a24_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.z23_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.y23_1, newTail, this.a24_1, this.b24_1);
    }
    var newRoot = setInRoot(this, this.y23_1, this.b24_1, index, element);
    return new PersistentVector(newRoot, this.z23_1, this.a24_1, this.b24_1);
  };
  function rootSize_0($this) {
    if ($this.l24_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.l24_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.l24_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.i24_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    tmp$ret$0 = tmp0_copyInto;
    return tmp$ret$0;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, tmp0_copyInto);
      tmp$ret$0 = buffer;
      return tmp$ret$0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = mutableBuffer($this);
    var tmp2_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
    arrayCopy(buffer, tmp1_copyInto, distance, 0, tmp2_copyInto);
    tmp$ret$1 = tmp1_copyInto;
    return tmp$ret$1;
  }
  function mutableBufferWith($this, element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.i24_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.i24_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.l24_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.h24_1) {
      $this.j24_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.h24_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.k24_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.h24_1 = tmp0_this.h24_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.l24_1 = tmp1_this.l24_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.j24_1 = filledTail;
      $this.k24_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.l24_1 = tmp2_this.l24_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.j24_1 = pushTail_0($this, root, filledTail, $this.h24_1);
      $this.k24_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.l24_1 = tmp3_this.l24_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.l24_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.d() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.e();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.h24_1 ? pushBuffers($this, root, rootSize, $this.h24_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.d()) {
      var tmp0_this = $this;
      tmp0_this.h24_1 = tmp0_this.h24_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.h24_1, $this.h24_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffersIterator.d();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = shift >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.e();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.d();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.k24_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.k24_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.j24_1 = root;
      $this.k24_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.l24_1 = tmp0_this.l24_1 + 1 | 0;
    } else {
      var lastElement = $this.k24_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.k24_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      tmp$ret$1 = mutableTail;
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.c24_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.c24_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.j24_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var startLeafIndex = index >> get_LOG_MAX_BUFFER_SIZE();
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE()) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, get_MAX_BUFFER_SIZE(), buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.j24_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.u1() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.t1();
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = buffer;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE() - rightShift | 0;
      var tmp3_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(currentBuffer, tmp1_copyInto, 0, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$3 = tmp1_copyInto;
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.t1();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = nullBuffers >= 1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var endBufferEndIndex = ((index + elements.f() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = newNextBuffer;
      var tmp2_copyInto = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp1_copyInto, tmp2_copyInto, startBufferStartIndex, startBufferSize);
      tmp$ret$1 = tmp1_copyInto;
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - get_MAX_BUFFER_SIZE() | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, tmp3_copyInto, startBufferSize);
      tmp$ret$2 = nextBuffer;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = newNextBuffer;
      var tmp5_copyInto = endBufferEndIndex + 1 | 0;
      var tmp6_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp4_copyInto, tmp5_copyInto, startBufferStartIndex, tmp6_copyInto);
      tmp$ret$3 = tmp4_copyInto;
    }
    var elementsIterator = elements.c();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.k24_1;
    }
    var buffer = ensureNotNull($this.j24_1);
    var shift = $this.h24_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.l24_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.k24_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.k24_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.k24_1;
      var tmp1_copyInto = makeMutable($this, $this.k24_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.j24_1 = root;
      $this.k24_1 = mutableTail;
      $this.l24_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.h24_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.c24_1;
      tailCarry.c24_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.j24_1 = null;
      var tmp = $this;
      var tmp0_elvis_lhs = root;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.emptyArray' call
        tmp$ret$0 = [];
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.k24_1 = tmp_0;
      $this.l24_1 = rootSize;
      $this.h24_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.c24_1;
    tmp_1.k24_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.l24_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.j24_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.h24_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.j24_1 = newRoot;
      $this.h24_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.c24_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        var tmp0_this = $this;
        var tmp1 = tmp0_this.o3_1;
        tmp0_this.o3_1 = tmp1 + 1 | 0;
      }
      oldElementCarry.c24_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.j24_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    ListImplementation_getInstance().q1(index, leafCount);
    if ($this.h24_1 === 0) {
      return new SingleElementListIterator(ensureNotNull($this.j24_1), index);
    }
    var trieHeight = $this.h24_1 / get_LOG_MAX_BUFFER_SIZE() | 0;
    return new TrieIterator(ensureNotNull($this.j24_1), index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.e24_1 = vector;
    this.f24_1 = vectorRoot;
    this.g24_1 = vectorTail;
    this.h24_1 = rootShift;
    this.i24_1 = new MutabilityOwnership();
    this.j24_1 = this.f24_1;
    this.k24_1 = this.g24_1;
    this.l24_1 = this.e24_1.f();
  }
  protoOf(PersistentVectorBuilder).f = function () {
    return this.l24_1;
  };
  protoOf(PersistentVectorBuilder).m24 = function () {
    return this.o3_1;
  };
  protoOf(PersistentVectorBuilder).a1j = function () {
    var tmp = this;
    var tmp_0;
    if (this.j24_1 === this.f24_1 ? this.k24_1 === this.g24_1 : false) {
      tmp_0 = this.e24_1;
    } else {
      this.i24_1 = new MutabilityOwnership();
      this.f24_1 = this.j24_1;
      this.g24_1 = this.k24_1;
      var tmp_1;
      if (this.j24_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.k24_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.k24_1, this.l24_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.j24_1), this.k24_1, this.l24_1, this.h24_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.e24_1 = tmp_0;
    return this.e24_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    var tmp0_this = this;
    tmp0_this.o3_1 = tmp0_this.o3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.k24_1);
      mutableTail[tailSize] = element;
      this.k24_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.l24_1 = tmp1_this.l24_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.j24_1, this.k24_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).k = function (elements) {
    if (elements.l()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.o3_1;
    tmp0_this.o3_1 = tmp1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.c();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.f()) {
      this.k24_1 = copyToBuffer(this, makeMutable(this, this.k24_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.l24_1 = tmp2_this.l24_1 + elements.f() | 0;
    } else {
      var buffersSize = ((elements.f() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.k24_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.j24_1;
      var tmp_1 = rootSize_0(this);
      tmp.j24_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.k24_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.l24_1 = tmp4_this.l24_1 + elements.f() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).h3 = function (index, element) {
    ListImplementation_getInstance().q1(index, this.l24_1);
    if (index === this.l24_1) {
      this.a(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.o3_1 = tmp0_this.o3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.j24_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.j24_1), this.h24_1, index, element, elementCarry);
    var tmp = elementCarry.c24_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).i3 = function (index, elements) {
    ListImplementation_getInstance().q1(index, this.l24_1);
    if (index === this.l24_1) {
      return this.k(elements);
    }
    if (elements.l()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.o3_1;
    tmp0_this.o3_1 = tmp1 + 1 | 0;
    var unaffectedElementsCount = index >> get_LOG_MAX_BUFFER_SIZE() << get_LOG_MAX_BUFFER_SIZE();
    var buffersSize = (((this.l24_1 - unaffectedElementsCount | 0) + elements.f() | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var endIndex = ((index + elements.f() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.k24_1;
      var tmp1_copyInto = makeMutable(this, this.k24_1);
      var tmp2_copyInto = endIndex + 1 | 0;
      var tmp3_copyInto = tailSize_0(this);
      arrayCopy(tmp0_copyInto, tmp1_copyInto, tmp2_copyInto, startIndex, tmp3_copyInto);
      tmp$ret$0 = tmp1_copyInto;
      var newTail = tmp$ret$0;
      copyToBuffer(this, newTail, startIndex, elements.c());
      this.k24_1 = newTail;
      var tmp2_this = this;
      tmp2_this.l24_1 = tmp2_this.l24_1 + elements.f() | 0;
      return true;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(buffersSize), null);
    var buffers = tmp$ret$1;
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.l24_1 + elements.f() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.k24_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.k24_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.k24_1;
      var tmp5_copyInto = mutableBuffer(this);
      var tmp6_copyInto = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, 0, tmp6_copyInto, tailSize_1);
      tmp$ret$2 = tmp5_copyInto;
      newTail_0 = tmp$ret$2;
      var rightShift_0 = get_MAX_BUFFER_SIZE() - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.k24_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.j24_1;
    tmp.j24_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.k24_1 = newTail_0;
    var tmp3_this = this;
    tmp3_this.l24_1 = tmp3_this.l24_1 + elements.f() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).g = function (index) {
    ListImplementation_getInstance().i1(index, this.l24_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).k3 = function (index) {
    ListImplementation_getInstance().i1(index, this.l24_1);
    var tmp0_this = this;
    tmp0_this.o3_1 = tmp0_this.o3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.j24_1, rootSize, this.h24_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.k24_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.j24_1), this.h24_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.h24_1, 0);
    var tmp_0 = elementCarry.c24_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).p = function (index, element) {
    ListImplementation_getInstance().i1(index, this.l24_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.k24_1);
      if (!(mutableTail === this.k24_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.o3_1;
        tmp0_this.o3_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.k24_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.j24_1 = setInRoot_0(this, ensureNotNull(this.j24_1), this.h24_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.c24_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).c = function () {
    return this.t23();
  };
  protoOf(PersistentVectorBuilder).t23 = function () {
    return this.j1(0);
  };
  protoOf(PersistentVectorBuilder).j1 = function (index) {
    ListImplementation_getInstance().q1(index, this.l24_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.p24_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.q24_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).e = function () {
    this.r23();
    if (this.q24_1.d()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.p23_1;
      tmp0_this.p23_1 = tmp1 + 1 | 0;
      return this.q24_1.e();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.p23_1;
    tmp2_this.p23_1 = tmp3 + 1 | 0;
    return this.p24_1[tmp3 - this.q24_1.q23_1 | 0];
  };
  protoOf(PersistentVectorIterator).t1 = function () {
    this.s23();
    if (this.p23_1 > this.q24_1.q23_1) {
      var tmp0_this = this;
      tmp0_this.p23_1 = tmp0_this.p23_1 - 1 | 0;
      return this.p24_1[tmp0_this.p23_1 - this.q24_1.q23_1 | 0];
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.p23_1;
    tmp1_this.p23_1 = tmp2 - 1 | 0;
    return this.q24_1.t1();
  };
  function reset($this) {
    $this.q23_1 = $this.y24_1.l24_1;
    $this.z24_1 = $this.y24_1.m24();
    $this.b25_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.y24_1.j24_1;
    if (root == null) {
      $this.a25_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.y24_1.l24_1);
    var trieIndex = coerceAtMost($this.p23_1, trieSize);
    var trieHeight = ($this.y24_1.h24_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.a25_1 == null) {
      $this.a25_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.a25_1).c25(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.z24_1 === $this.y24_1.m24()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.b25_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.l24_1);
    this.y24_1 = builder;
    this.z24_1 = this.y24_1.m24();
    this.a25_1 = null;
    this.b25_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).t1 = function () {
    checkForComodification(this);
    this.s23();
    this.b25_1 = this.p23_1 - 1 | 0;
    var tmp1_elvis_lhs = this.a25_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.y24_1.k24_1;
      var tmp0_this = this;
      tmp0_this.p23_1 = tmp0_this.p23_1 - 1 | 0;
      var tmp_1 = tmp_0[tmp0_this.p23_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.p23_1 > trieIterator.q23_1) {
      var tmp_2 = this.y24_1.k24_1;
      var tmp2_this = this;
      tmp2_this.p23_1 = tmp2_this.p23_1 - 1 | 0;
      var tmp_3 = tmp_2[tmp2_this.p23_1 - trieIterator.q23_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    var tmp3_this = this;
    var tmp4 = tmp3_this.p23_1;
    tmp3_this.p23_1 = tmp4 - 1 | 0;
    return trieIterator.t1();
  };
  protoOf(PersistentVectorMutableIterator).e = function () {
    checkForComodification(this);
    this.r23();
    this.b25_1 = this.p23_1;
    var tmp2_elvis_lhs = this.a25_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.y24_1.k24_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.p23_1;
      tmp0_this.p23_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.d()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.p23_1;
      tmp3_this.p23_1 = tmp4 + 1 | 0;
      return trieIterator.e();
    }
    var tmp_2 = this.y24_1.k24_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.p23_1;
    tmp5_this.p23_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.q23_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).t4 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.y24_1.k3(this.b25_1);
    if (this.b25_1 < this.p23_1)
      this.p23_1 = this.b25_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.d25_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.e25_1 = buffer;
    assert(this.e25_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).f = function () {
    return this.e25_1.length;
  };
  protoOf(SmallPersistentVector).a = function (element) {
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.e25_1, this.f() + 1 | 0);
      newBuffer[this.f()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.e25_1, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).k = function (elements) {
    if ((this.f() + elements.f() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.e25_1, this.f() + elements.f() | 0);
      var index = this.f();
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1i();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.a1j();
    return tmp$ret$1;
  };
  protoOf(SmallPersistentVector).u23 = function (index, element) {
    ListImplementation_getInstance().q1(index, this.f());
    if (index === this.f()) {
      return this.a(element);
    }
    if (this.f() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.f() + 1 | 0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.e25_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      tmp$ret$0 = newBuffer;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.e25_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.f();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      tmp$ret$1 = newBuffer;
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp4_copyOf = this.e25_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_copyOf;
    tmp$ret$3 = tmp$ret$2.slice();
    var root = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.e25_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.f() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    tmp$ret$4 = root;
    root[index] = element;
    var tail = presizedBufferWith(this.e25_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.f() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).k3 = function (index) {
    ListImplementation_getInstance().i1(index, this.f());
    if (this.f() === 1) {
      return Companion_getInstance_6().d25_1;
    }
    var newBuffer = copyOf_0(this.e25_1, this.f() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.e25_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.f();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).z1i = function () {
    return new PersistentVectorBuilder(this, null, this.e25_1, 0);
  };
  protoOf(SmallPersistentVector).n = function (element) {
    return indexOf(this.e25_1, element);
  };
  protoOf(SmallPersistentVector).x1 = function (element) {
    return lastIndexOf(this.e25_1, element);
  };
  protoOf(SmallPersistentVector).j1 = function (index) {
    ListImplementation_getInstance().q1(index, this.f());
    var tmp = this.e25_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.f());
  };
  protoOf(SmallPersistentVector).g = function (index) {
    ListImplementation_getInstance().i1(index, this.f());
    var tmp = this.e25_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).p = function (index, element) {
    ListImplementation_getInstance().i1(index, this.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.e25_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.t24_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.t24_1) {
      var tmp = $this.u24_1;
      var tmp_0 = i;
      var tmp_1 = $this.u24_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.p23_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.t24_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.p23_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.p23_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.u24_1[$this.t24_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.t24_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.t24_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.u24_1 = tmp$ret$0;
    this.v24_1 = index === size;
    this.u24_1[0] = root;
    fillPath(this, index - (this.v24_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).c25 = function (root, index, size, height) {
    this.p23_1 = index;
    this.q23_1 = size;
    this.t24_1 = height;
    if (this.u24_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.u24_1 = tmp$ret$0;
    }
    this.u24_1[0] = root;
    this.v24_1 = index === size;
    fillPath(this, index - (this.v24_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).e = function () {
    if (!this.d()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.p23_1 = tmp0_this.p23_1 + 1 | 0;
    if (this.p23_1 === this.q23_1) {
      this.v24_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).t1 = function () {
    if (!this.r1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp0_this = this;
    tmp0_this.p23_1 = tmp0_this.p23_1 - 1 | 0;
    if (this.v24_1) {
      this.v24_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().d25_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 32;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.c24_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.i23_1 = new PersistentHashMap(Companion_getInstance_8().f25_1, 0);
  }
  protoOf(Companion_5).j23 = function () {
    var tmp = this.i23_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.i25_1 = node;
    this.j25_1 = size;
  }
  protoOf(PersistentHashMap).f = function () {
    return this.j25_1;
  };
  protoOf(PersistentHashMap).r2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).s2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).c2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).k2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.i25_1.o25(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).q2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.i25_1.p25(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h4 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.i25_1.q25(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.r25_1, this.j25_1 + newNodeResult.s25_1 | 0);
  };
  protoOf(PersistentHashMap).s4 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.i25_1.t25(tmp$ret$0, key, 0);
    if (this.i25_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().j23();
    }
    return new PersistentHashMap(newNode, this.j25_1 - 1 | 0);
  };
  protoOf(PersistentHashMap).z1i = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.y25_1 = map;
    this.z25_1 = new MutabilityOwnership();
    this.a26_1 = this.y25_1.i25_1;
    this.b26_1 = null;
    this.c26_1 = 0;
    this.d26_1 = this.y25_1.j25_1;
  }
  protoOf(PersistentHashMapBuilder).e26 = function (value) {
    this.d26_1 = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.c26_1;
    tmp0_this.c26_1 = tmp1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).f = function () {
    return this.d26_1;
  };
  protoOf(PersistentHashMapBuilder).a1j = function () {
    var tmp = this;
    var tmp_0;
    if (this.a26_1 === this.y25_1.i25_1) {
      tmp_0 = this.y25_1;
    } else {
      this.z25_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.a26_1, this.d26_1);
    }
    tmp.y25_1 = tmp_0;
    return this.y25_1;
  };
  protoOf(PersistentHashMapBuilder).c2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).r2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).s2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).k2 = function (key) {
    var tmp = this.a26_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.o25(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).q2 = function (key) {
    var tmp = this.a26_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.p25(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).h4 = function (key, value) {
    this.b26_1 = null;
    var tmp = this;
    var tmp_0 = this.a26_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.a26_1 = tmp_0.f26(tmp$ret$0, key, value, 0, this);
    return this.b26_1;
  };
  protoOf(PersistentHashMapBuilder).ia = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1j();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.d26_1;
      var tmp_0 = this;
      var tmp_1 = this.a26_1;
      var tmp_2 = map.i25_1;
      tmp_0.a26_1 = tmp_1.g26(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.j25_1 | 0) - intersectionCounter.h26_1 | 0;
      if (!(oldSize === newSize)) {
        this.e26(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).ia.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).s4 = function (key) {
    this.b26_1 = null;
    var tmp = this;
    var tmp_0 = this.a26_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.i26(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().f25_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.a26_1 = tmp_1;
    return this.b26_1;
  };
  protoOf(PersistentHashMapBuilder).j26 = function (key, value) {
    var oldSize = this.d26_1;
    var tmp = this;
    var tmp_0 = this.a26_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.k26(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().f25_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.a26_1 = tmp_1;
    return !(oldSize === this.d26_1);
  };
  protoOf(PersistentHashMapBuilder).l3 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().f25_1;
    tmp.a26_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.e26(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntriesIterator.base.<anonymous>' call
      tmp$ret$1 = new TrieNodeMutableEntriesIterator(this);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.l26_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d = function () {
    return this.l26_1.d();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.l26_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).t4 = function () {
    return this.l26_1.t4();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).w26 = function (key, newValue) {
    return this.l26_1.w26(key, newValue);
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.m26_1[pathIndex].b27(node.n25_1, node.n25_1.length, 0);
      while (!equals($this.m26_1[pathIndex].x26(), key)) {
        $this.m26_1[pathIndex].c27();
      }
      $this.n26_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.f27(keyPositionMask)) {
      var keyIndex = node.d27(keyPositionMask);
      $this.m26_1[pathIndex].b27(node.n25_1, imul(get_ENTRY_SIZE(), node.e27()), keyIndex);
      $this.n26_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.g27(keyPositionMask);
    var targetNode = node.h27(nodeIndex);
    $this.m26_1[pathIndex].b27(node.n25_1, imul(get_ENTRY_SIZE(), node.e27()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.u26_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.s26_1.c26_1 === $this.v26_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.a26_1, path);
    this.s26_1 = builder;
    this.t26_1 = null;
    this.u26_1 = false;
    this.v26_1 = this.s26_1.c26_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e = function () {
    checkForComodification_0(this);
    this.t26_1 = this.x26();
    this.u26_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).t4 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.x26();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.s26_1;
      var tmp1_remove = this.t26_1;
      tmp$ret$0 = (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).s4(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.s26_1.a26_1, currentKey, 0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.s26_1;
      var tmp3_remove = this.t26_1;
      tmp$ret$2 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).s4(tmp3_remove);
    }
    this.t26_1 = null;
    this.u26_1 = false;
    this.v26_1 = this.s26_1.c26_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).w26 = function (key, newValue) {
    if (!this.s26_1.k2(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.x26();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.s26_1;
      tmp0_set.h4(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.s26_1.a26_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.s26_1;
      tmp1_set.h4(key, newValue);
    }
    this.v26_1 = this.s26_1.c26_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.l27_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e = function () {
    assert(this.m27());
    var tmp0_this = this;
    tmp0_this.a27_1 = tmp0_this.a27_1 + 2 | 0;
    var tmp = this.y26_1[this.a27_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.y26_1[this.a27_1 - 1 | 0];
    return new MutableMapEntry(this.l27_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.t27_1 = parentIterator;
    this.u27_1 = value;
  }
  protoOf(MutableMapEntry).b2 = function () {
    return this.u27_1;
  };
  protoOf(MutableMapEntry).x9 = function (newValue) {
    var result = this.u27_1;
    this.u27_1 = newValue;
    this.t27_1.w26(this.z1(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.x27_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).ma = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.ma((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).l3 = function () {
    this.x27_1.l3();
  };
  protoOf(PersistentHashMapBuilderEntries).c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.x27_1);
  };
  protoOf(PersistentHashMapBuilderEntries).z9 = function (element) {
    return this.x27_1.j26(element.z1(), element.b2());
  };
  protoOf(PersistentHashMapBuilderEntries).f = function () {
    return this.x27_1.d26_1;
  };
  protoOf(PersistentHashMapBuilderEntries).y9 = function (element) {
    var tmp0_safe_receiver = this.x27_1.q2(element.z1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.b2());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.b2() == null ? this.x27_1.k2(element.z1()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.y27_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).ba = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.ba((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).l3 = function () {
    this.y27_1.l3();
  };
  protoOf(PersistentHashMapBuilderKeys).c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.y27_1);
  };
  protoOf(PersistentHashMapBuilderKeys).s4 = function (element) {
    if (this.y27_1.k2(element)) {
      this.y27_1.s4(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.s4((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f = function () {
    return this.y27_1.d26_1;
  };
  protoOf(PersistentHashMapBuilderKeys).h2 = function (element) {
    return this.y27_1.k2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.h2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.z27_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).f = function () {
    return this.z27_1.d26_1;
  };
  protoOf(PersistentHashMapBuilderValues).n2 = function (element) {
    return this.z27_1.o2(element);
  };
  protoOf(PersistentHashMapBuilderValues).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).ha = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a = function (element) {
    return this.ha((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).c = function () {
    return new PersistentHashMapBuilderValuesIterator(this.z27_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).m = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.y9(element);
  };
  protoOf(AbstractMapBuilderEntries).j3 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.z9(element);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntriesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeEntriesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  function TrieNodeBaseIterator() {
    this.y26_1 = Companion_getInstance_8().f25_1.n25_1;
    this.z26_1 = 0;
    this.a27_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).b27 = function (buffer, dataSize, index) {
    this.y26_1 = buffer;
    this.z26_1 = dataSize;
    this.a27_1 = index;
  };
  protoOf(TrieNodeBaseIterator).n27 = function (buffer, dataSize) {
    this.b27(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).m27 = function () {
    return this.a27_1 < this.z26_1;
  };
  protoOf(TrieNodeBaseIterator).x26 = function () {
    assert(this.m27());
    var tmp = this.y26_1[this.a27_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).c27 = function () {
    assert(this.m27());
    var tmp0_this = this;
    tmp0_this.a27_1 = tmp0_this.a27_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).o27 = function () {
    assert(this.a27_1 >= this.z26_1);
    return this.a27_1 < this.y26_1.length;
  };
  protoOf(TrieNodeBaseIterator).p27 = function () {
    assert(this.o27());
    var tmp = this.y26_1[this.a27_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).q27 = function () {
    assert(this.o27());
    var tmp0_this = this;
    var tmp1 = tmp0_this.a27_1;
    tmp0_this.a27_1 = tmp1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d = function () {
    return this.m27();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e = function () {
    assert(this.m27());
    var tmp0_this = this;
    tmp0_this.a27_1 = tmp0_this.a27_1 + 2 | 0;
    var tmp = this.y26_1[this.a27_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e = function () {
    assert(this.m27());
    var tmp0_this = this;
    tmp0_this.a27_1 = tmp0_this.a27_1 + 2 | 0;
    var tmp = this.y26_1[this.a27_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.m26_1[pathIndex].m27()) {
      return pathIndex;
    }
    if ($this.m26_1[pathIndex].o27()) {
      var node = $this.m26_1[pathIndex].p27();
      if (pathIndex === 6) {
        $this.m26_1[pathIndex + 1 | 0].n27(node.n25_1, node.n25_1.length);
      } else {
        $this.m26_1[pathIndex + 1 | 0].n27(node.n25_1, imul(get_ENTRY_SIZE(), node.e27()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.m26_1[$this.n26_1].m27()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.n26_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.m26_1[i].o27() : false) {
          $this.m26_1[i].q27();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.n26_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.m26_1[i - 1 | 0].q27();
        }
        $this.m26_1[i].n27(Companion_getInstance_8().f25_1.n25_1, 0);
      }
       while (0 <= inductionVariable);
    $this.o26_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.m26_1 = path;
    this.n26_1 = 0;
    this.o26_1 = true;
    this.m26_1[0].n27(node.n25_1, imul(get_ENTRY_SIZE(), node.e27()));
    this.n26_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).x26 = function () {
    checkHasNext(this);
    return this.m26_1[this.n26_1].x26();
  };
  protoOf(PersistentHashMapBaseIterator).d = function () {
    return this.o26_1;
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    checkHasNext(this);
    var result = this.m26_1[this.n26_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  function MapEntry(key, value) {
    this.v27_1 = key;
    this.w27_1 = value;
  }
  protoOf(MapEntry).z1 = function () {
    return this.v27_1;
  };
  protoOf(MapEntry).b2 = function () {
    return this.w27_1;
  };
  protoOf(MapEntry).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.z1();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.b2();
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp ^ tmp$ret$1;
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver.z1(), this.z1()) ? equals(tmp0_safe_receiver.b2(), this.b2()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.z1()) + '=' + toString_0(this.b2());
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e = function () {
    assert(this.m27());
    var tmp0_this = this;
    tmp0_this.a27_1 = tmp0_this.a27_1 + 2 | 0;
    var tmp = this.y26_1[this.a27_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.y26_1[this.a27_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.j28_1 = map;
  }
  protoOf(PersistentHashMapKeys).f = function () {
    return this.j28_1.j25_1;
  };
  protoOf(PersistentHashMapKeys).h2 = function (element) {
    return this.j28_1.k2(element);
  };
  protoOf(PersistentHashMapKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.h2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).c = function () {
    return new PersistentHashMapKeysIterator(this.j28_1.i25_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.k28_1 = map;
  }
  protoOf(PersistentHashMapValues).f = function () {
    return this.k28_1.j25_1;
  };
  protoOf(PersistentHashMapValues).n2 = function (element) {
    return this.k28_1.o2(element);
  };
  protoOf(PersistentHashMapValues).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).c = function () {
    return new PersistentHashMapValuesIterator(this.k28_1.i25_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.l28_1 = map;
  }
  protoOf(PersistentHashMapEntries).f = function () {
    return this.l28_1.j25_1;
  };
  protoOf(PersistentHashMapEntries).m28 = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.l28_1.q2(element.z1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.b2());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.b2() == null ? this.l28_1.k2(element.z1()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.m28((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).c = function () {
    return new PersistentHashMapEntriesIterator(this.l28_1.i25_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.r25_1 = node;
    this.s25_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.l25_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.n25_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.n25_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.d27(positionMask);
    var newBuffer = insertEntryAtIndex($this.n25_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.k25_1 | positionMask, $this.l25_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.d27(positionMask);
    if ($this.m25_1 === owner) {
      $this.n25_1 = insertEntryAtIndex($this.n25_1, keyIndex, key, value);
      $this.k25_1 = $this.k25_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.n25_1, keyIndex, key, value);
    return new TrieNode($this.k25_1 | positionMask, $this.l25_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.n25_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.k25_1, $this.l25_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.m25_1 === mutator.z25_1) {
      $this.n25_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.c26_1;
    tmp0_this.c26_1 = tmp1 + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.n25_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.k25_1, $this.l25_1, newBuffer, mutator.z25_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.n25_1;
    if (newNodeBuffer.length === 2 ? newNode.l25_1 === 0 : false) {
      if ($this.n25_1.length === 1) {
        newNode.k25_1 = $this.l25_1;
        return newNode;
      }
      var keyIndex = $this.d27(positionMask);
      var newBuffer = replaceNodeWithEntry($this.n25_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.k25_1 ^ positionMask, $this.l25_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.n25_1, $this.n25_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.k25_1, $this.l25_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.n25_1.length === 1 ? newNode.n25_1.length === 2 : false) ? newNode.l25_1 === 0 : false) {
      newNode.k25_1 = $this.l25_1;
      return newNode;
    }
    if ($this.m25_1 === owner) {
      $this.n25_1[nodeIndex] = newNode;
      return $this;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.n25_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.k25_1, $this.l25_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.n25_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.n25_1, nodeIndex);
    return TrieNode_init_$Create$($this.k25_1, $this.l25_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.n25_1.length === 1)
      return null;
    if ($this.m25_1 === owner) {
      $this.n25_1 = removeNodeAtIndex_0($this.n25_1, nodeIndex);
      $this.l25_1 = $this.l25_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.n25_1, nodeIndex);
    return new TrieNode($this.k25_1, $this.l25_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = storedKey;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedKeyHash = tmp$ret$0;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.g27(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.n25_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.k25_1 ^ positionMask, $this.l25_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.m25_1 === owner) {
      $this.n25_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.k25_1 = $this.k25_1 ^ positionMask;
      $this.l25_1 = $this.l25_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.k25_1 ^ positionMask, $this.l25_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [key1, value1, key2, value2];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        var tmp$ret$5;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = [key1, value1, key2, value2];
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } else {
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [key2, value2, key1, value1];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp = tmp$ret$8;
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [node];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.n25_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.n25_1, keyIndex);
    return TrieNode_init_$Create$($this.k25_1 ^ positionMask, $this.l25_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.d26_1;
    tmp0_this.e26(tmp1 - 1 | 0);
    mutator.b26_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.n25_1.length === 2)
      return null;
    if ($this.m25_1 === mutator.z25_1) {
      $this.n25_1 = removeEntryAtIndex_0($this.n25_1, keyIndex);
      $this.k25_1 = $this.k25_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.n25_1, keyIndex);
    return new TrieNode($this.k25_1 ^ positionMask, $this.l25_1, newBuffer, mutator.z25_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.n25_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.n25_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.d26_1;
    tmp0_this.e26(tmp1 - 1 | 0);
    mutator.b26_1 = valueAtKeyIndex($this, i);
    if ($this.n25_1.length === 2)
      return null;
    if ($this.m25_1 === mutator.z25_1) {
      $this.n25_1 = removeEntryAtIndex_0($this.n25_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.n25_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.z25_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.n25_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.n25_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.n25_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.b26_1 = valueAtKeyIndex($this, i);
          if ($this.m25_1 === mutator.z25_1) {
            $this.n25_1[i + 1 | 0] = value;
            return $this;
          }
          var tmp1_this = mutator;
          var tmp2 = tmp1_this.c26_1;
          tmp1_this.c26_1 = tmp2 + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.n25_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.z25_1);
        }
      }
       while (!(i === last));
    var tmp3_this = mutator;
    var tmp4 = tmp3_this.d26_1;
    tmp3_this.e26(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.n25_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.z25_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.l25_1 === 0);
    assert($this.k25_1 === 0);
    assert(otherNode.l25_1 === 0);
    assert(otherNode.k25_1 === 0);
    var tempBuffer = copyOf_0($this.n25_1, $this.n25_1.length + otherNode.n25_1.length | 0);
    var i = $this.n25_1.length;
    var progression = step(until(0, otherNode.n25_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.n25_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.n25_1[j];
          tempBuffer[i + 1 | 0] = otherNode.n25_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          var tmp1_this = intersectionCounter;
          var tmp2 = tmp1_this.h26_1;
          tmp1_this.h26_1 = tmp2 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.n25_1.length ? $this : newSize === otherNode.n25_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.h27($this.g27(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.h27(otherNode.g27(positionMask));
        tmp_0 = targetNode.g26(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.f27(positionMask)) {
        var keyIndex = otherNode.d27(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.d26_1;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = key;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.f26(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.d26_1 === oldSize) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.h26_1;
          tmp0_this.h26_1 = tmp1 + 1 | 0;
        }
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.h27(otherNode.g27(positionMask));
      var tmp_1;
      if ($this.f27(positionMask)) {
        var keyIndex_0 = $this.d27(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = key_0;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.o25(tmp$ret$2, key_0, shift + 5 | 0)) {
          var tmp0_this_0 = intersectionCounter;
          var tmp1_0 = tmp0_this_0.h26_1;
          tmp0_this_0.h26_1 = tmp1_0 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver_1 = key_0;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.f26(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.d27(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.d27(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      var tmp$ret$4;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = thisKey;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$4 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = otherKey;
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.z25_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.l25_1 === 0)
      return $this.n25_1.length / 2 | 0;
    var numValues = countOneBits($this.k25_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.n25_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.h27(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.l25_1 === otherNode.l25_1))
      return false;
    if (!($this.k25_1 === otherNode.k25_1))
      return false;
    var inductionVariable = 0;
    var last = $this.n25_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.n25_1[i] === otherNode.n25_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.m25_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.f25_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.k25_1 = dataMap;
    this.l25_1 = nodeMap;
    this.m25_1 = ownedBy;
    this.n25_1 = buffer;
  }
  protoOf(TrieNode).e27 = function () {
    return countOneBits(this.k25_1);
  };
  protoOf(TrieNode).f27 = function (positionMask) {
    return !((this.k25_1 & positionMask) === 0);
  };
  protoOf(TrieNode).d27 = function (positionMask) {
    return imul(2, countOneBits(this.k25_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).g27 = function (positionMask) {
    return (this.n25_1.length - 1 | 0) - countOneBits(this.l25_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).h27 = function (nodeIndex) {
    var tmp = this.n25_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).o25 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.d27(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.h27(this.g27(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.o25(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).p25 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.h27(this.g27(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.p25(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).g26 = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.n28(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.z25_1);
    }
    var newNodeMap = this.l25_1 | otherNode.l25_1;
    var newDataMap = (this.k25_1 ^ otherNode.k25_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp0_forEachOneBit = this.k25_1 & otherNode.k25_1;
    var mask = tmp0_forEachOneBit;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp1__anonymous__uwfjfc = index;
      var leftKey = keyAtIndex(this, this.d27(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.d27(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = (newNodeMap & newDataMap) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.m25_1, mutator.z25_1) ? this.k25_1 === newDataMap : false) ? this.l25_1 === newNodeMap : false) {
      tmp = this;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      tmp$ret$1 = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      var newBuffer = tmp$ret$1;
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp4_forEachOneBit = newNodeMap;
    var mask_0 = tmp4_forEachOneBit;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5__anonymous__kpxxpo = index_0;
      var newNodeIndex = (mutableNode.n25_1.length - 1 | 0) - tmp5__anonymous__kpxxpo | 0;
      mutableNode.n25_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      var tmp0_0 = index_0;
      index_0 = tmp0_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp6_forEachOneBit = newDataMap;
    var mask_1 = tmp6_forEachOneBit;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7__anonymous__b0knam = index_1;
      var newKeyIndex = imul(tmp7__anonymous__b0knam, 2);
      if (!otherNode.f27(bit_1)) {
        var oldKeyIndex = this.d27(bit_1);
        mutableNode.n25_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.n25_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.d27(bit_1);
        mutableNode.n25_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.n25_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.f27(bit_1)) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.h26_1;
          tmp0_this.h26_1 = tmp1 + 1 | 0;
        }
      }
      var tmp0_1 = index_1;
      index_1 = tmp0_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).q25 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.g27(keyPositionMask);
      var targetNode = this.h27(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.q25(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0__anonymous__q1qw7t = putResult.r25_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.r25_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).f26 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.b26_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp0_this = mutator;
      var tmp1 = tmp0_this.d26_1;
      tmp0_this.e26(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.z25_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.g27(keyPositionMask);
      var targetNode = this.h27(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.f26(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.z25_1);
    }
    var tmp2_this = mutator;
    var tmp3 = tmp2_this.d26_1;
    tmp2_this.e26(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.z25_1);
  };
  protoOf(TrieNode).t25 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.g27(keyPositionMask);
      var targetNode = this.h27(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.t25(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).i26 = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.g27(keyPositionMask);
      var targetNode = this.h27(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.i26(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.z25_1);
    }
    return this;
  };
  protoOf(TrieNode).k26 = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.f27(keyPositionMask)) {
      var keyIndex = this.d27(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.g27(keyPositionMask);
      var targetNode = this.h27(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.k26(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.z25_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    tmp$ret$1 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    tmp$ret$2 = newBuffer;
    newBuffer[newNodeIndex] = newNode;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    tmp$ret$3 = newBuffer;
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.k23_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_7().j23());
  }
  protoOf(Companion_7).l23 = function () {
    return this.k23_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.o28_1 = firstElement;
    this.p28_1 = lastElement;
    this.q28_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).f = function () {
    return this.q28_1.j25_1;
  };
  protoOf(PersistentOrderedSet).m = function (element) {
    return this.q28_1.k2(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.q28_1.k2(element)) {
      return this;
    }
    if (this.l()) {
      var newMap = this.q28_1.h4(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.p28_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.q28_1.q2(lastElement));
    var newMap_0 = this.q28_1.h4(lastElement, lastLinks.t28(element)).h4(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.o28_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).j3 = function (element) {
    var tmp0_elvis_lhs = this.q28_1.q2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.q28_1.s4(element);
    if (links.u28()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.r28_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).q2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.r28_1;
      newMap = tmp_0.h4((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.t28(links.s28_1));
    }
    if (links.w28()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.s28_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).q2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.s28_1;
      newMap = tmp_2.h4((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.v28(links.r28_1));
    }
    var newFirstElement = !links.u28() ? links.s28_1 : this.o28_1;
    var newLastElement = !links.w28() ? links.r28_1 : this.p28_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).c = function () {
    return new PersistentOrderedSetIterator(this.o28_1, this.q28_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.r28_1 = previous;
    this.s28_1 = next;
  }
  protoOf(Links).t28 = function (newNext) {
    return new Links(this.r28_1, newNext);
  };
  protoOf(Links).v28 = function (newPrevious) {
    return new Links(newPrevious, this.s28_1);
  };
  protoOf(Links).w28 = function () {
    return !(this.s28_1 === EndOfChain_getInstance());
  };
  protoOf(Links).u28 = function () {
    return !(this.r28_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.x28_1 = nextElement;
    this.y28_1 = map;
    this.z28_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d = function () {
    return this.z28_1 < this.y28_1.f();
  };
  protoOf(PersistentOrderedSetIterator).e = function () {
    checkHasNext_0(this);
    var tmp = this.x28_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.z28_1;
    tmp0_this.z28_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.y28_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.q2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.x28_1 = tmp$ret$0.s28_1;
    return result;
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  protoOf(ListImplementation).i1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).q1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).h1 = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.h26_1 = count;
  }
  protoOf(DeltaCounter).n28 = function (that) {
    var tmp0_this = this;
    tmp0_this.h26_1 = tmp0_this.h26_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.h26_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.h26_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.h26_1 === tmp0_other_with_cast.h26_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.f29(block);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.f1s() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.y1d_1, other.y1d_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.s1c(key);
    var slot = composer.o1q();
    var tmp;
    if (slot === Companion_getInstance_1().k1j_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.p1q(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.f29(block);
    composer.u1c();
    return result;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.e22_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.f22_1[0].equals(key) ? 0 : $this.f22_1[0].u(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.f22_1[mid];
      var comparison = midVal.s7(key);
      if (comparison.u(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.u(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.e22_1 = size;
    this.f22_1 = keys;
    this.g22_1 = values;
  }
  protoOf(ThreadMap).h22 = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.g22_1[index] : null;
  };
  protoOf(ThreadMap).i22 = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.g22_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).j22 = function (key, value) {
    var size = this.e22_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.count' call
    var tmp0_count = this.g22_1;
    var count = 0;
    var indexedObject = tmp0_count;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      tmp$ret$0 = !(element == null);
      if (tmp$ret$0) {
        count = count + 1 | 0;
      }
    }
    tmp$ret$1 = count;
    var newSize = tmp$ret$1 + 1 | 0;
    var newKeys = longArray(newSize);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(newSize), null);
    var newValues = tmp$ret$2;
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.f22_1[source];
        var oldValue = this.g22_1[source];
        if (oldKey.u(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          var tmp0 = dest;
          dest = tmp0 + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          var tmp1 = dest;
          dest = tmp1 + 1 | 0;
        }
        var tmp2 = source;
        source = tmp2 + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.f22_1[source];
          var oldValue_0 = this.g22_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            var tmp3 = dest;
            dest = tmp3 + 1 | 0;
          }
          var tmp4 = source;
          source = tmp4 + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (properties_initialized_ThreadMap_kt_kd2vq6) {
    } else {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
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
  function fastToSet(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
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
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.g29_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).wp = function () {
    return this.g29_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.h29_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).wp = function () {
    return this.h29_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().j3($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().j3($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).m1b = function () {
    return currentSnapshot();
  };
  protoOf(Companion_8).v21 = function (readObserver) {
    return currentSnapshot().i29(readObserver);
  };
  protoOf(Companion_8).d1y = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j29(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_8).j1v = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().pt();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.i29(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.e1y();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.f1y(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.wp();
      }
    } else
      return block();
  };
  protoOf(Companion_8).k29 = function () {
    return createTransparentSnapshotWithNoParentReadObserver(get_threadSnapshot().pt());
  };
  protoOf(Companion_8).c20 = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    tmp$ret$0 = get_applyObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_8).l29 = function (observer) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    tmp$ret$0 = get_globalWriteObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_8).l1v = function () {
    return currentSnapshot().l1v();
  };
  protoOf(Companion_8).d1x = function () {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().pt().m29();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !tmp0_safe_receiver.l();
      tmp = tmp$ret$0;
    }
    tmp$ret$1 = tmp === true;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var changes = tmp$ret$4;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_10();
    this.e1n_1 = invalid;
    this.f1n_1 = id;
    this.g1n_1 = false;
    this.h1n_1 = !(id === 0) ? trackPinning(id, this.n29()) : -1;
    this.i1n_1 = 8;
  }
  protoOf(Snapshot).o29 = function (_set____db54di) {
    this.e1n_1 = _set____db54di;
  };
  protoOf(Snapshot).n29 = function () {
    return this.e1n_1;
  };
  protoOf(Snapshot).p29 = function (_set____db54di) {
    this.f1n_1 = _set____db54di;
  };
  protoOf(Snapshot).j1n = function () {
    return this.f1n_1;
  };
  protoOf(Snapshot).wp = function () {
    this.g1n_1 = true;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r29();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).e1y = function () {
    var previous = get_threadSnapshot().pt();
    get_threadSnapshot().j1u(this);
    return previous;
  };
  protoOf(Snapshot).f1y = function (snapshot) {
    get_threadSnapshot().j1u(snapshot);
  };
  protoOf(Snapshot).w29 = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x29();
    this.y29();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(Snapshot).x29 = function () {
    set_openSnapshots(get_openSnapshots().d2a(this.j1n()));
  };
  protoOf(Snapshot).y29 = function () {
    this.r29();
  };
  protoOf(Snapshot).e2a = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = !this.g1n_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      tmp$ret$0 = 'Cannot use a disposed snapshot';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).r29 = function () {
    if (this.h1n_1 >= 0) {
      releasePinningLocked(this.h1n_1);
      this.h1n_1 = -1;
    }
  };
  protoOf(Snapshot).f2a = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h1n_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.h1n_1 = -1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function abandon($this) {
    var modified = $this.m29();
    if (!(modified == null)) {
      $this.g2a();
      $this.h2a(null);
      var id = $this.j1n();
      var tmp0_iterator = modified.c();
      while (tmp0_iterator.d()) {
        var state = tmp0_iterator.e();
        var current = state.a1v();
        while (!(current == null)) {
          if (current.f1v_1 === id ? true : contains($this.o1y_1, current.f1v_1)) {
            current.f1v_1 = 0;
          }
          current = current.g1v_1;
        }
      }
    }
    $this.w29();
  }
  function apply$overwriteUnusedRecordsLocked(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function apply$overwriteUnusedRecordsLocked_0(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Snapshot.call(this, id, invalid);
    this.l1y_1 = readObserver;
    this.m1y_1 = writeObserver;
    this.n1y_1 = null;
    this.o1y_1 = Companion_getInstance_11().i2a_1;
    this.p1y_1 = new Int32Array(0);
    this.q1y_1 = 1;
    this.r1y_1 = false;
    this.s1y_1 = 8;
  }
  protoOf(MutableSnapshot).i1v = function () {
    return this.l1y_1;
  };
  protoOf(MutableSnapshot).s29 = function () {
    return this.m1y_1;
  };
  protoOf(MutableSnapshot).j29 = function (readObserver, writeObserver) {
    this.e2a();
    this.j2a();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.k2a(this.j1n());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().l2a(newId));
    var currentInvalid = this.n29();
    this.o29(currentInvalid.l2a(newId));
    tmp$ret$0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.j1n() + 1 | 0, newId), mergedReadObserver(readObserver, this.i1v()), mergedWriteObserver(writeObserver, this.s29()), this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.r1y_1 ? !this.g1n_1 : false) {
      var previousId = this.j1n();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.p29(tmp0_0);
      set_openSnapshots(get_openSnapshots().l2a(this.j1n()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.o29(addRange(this.n29(), previousId + 1 | 0, this.j1n()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  protoOf(MutableSnapshot).t1y = function () {
    var modified = this.m29();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().pt(), this, get_openSnapshots().d2a(get_currentGlobalSnapshot().pt().j1n())) : null;
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.f() === 0) {
      this.x29();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().pt();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var globalModified = previousGlobalSnapshot.m29();
      var tmp_0;
      var tmp_1;
      if (!(globalModified == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$0 = !globalModified.l();
        tmp_1 = tmp$ret$0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = to(toMutableList(get_applyObservers()), globalModified);
      } else {
        tmp_0 = to(emptyList(), null);
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().pt();
      var result = this.m2a(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().d2a(previousGlobalSnapshot_0.j1n()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.x29();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var globalModified_0 = previousGlobalSnapshot_0.m29();
      this.h2a(null);
      previousGlobalSnapshot_0.h2a(null);
      tmp = to(toMutableList(get_applyObservers()), globalModified_0);
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_container = tmp$ret$4;
    var observers = tmp0_container.f4();
    var globalModified_1 = tmp0_container.g4();
    this.r1y_1 = true;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$5 = globalModified_1 == null ? true : globalModified_1.l();
    if (!tmp$ret$5) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(globalModified_1, this);
        }
         while (inductionVariable <= last);
    }
    var tmp$ret$6;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$6 = modified == null ? true : modified.l();
    if (!tmp$ret$6) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = observers.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = observers.g(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp1_synchronized = get_lock();
    var tmp$ret$8;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    this.y29();
    var tmp0_safe_receiver = globalModified_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        apply$overwriteUnusedRecordsLocked(element);
      }
    }
    var tmp1_safe_receiver = modified;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp1_safe_receiver.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        apply$overwriteUnusedRecordsLocked_0(element_0);
      }
      tmp_2 = Unit_getInstance();
    }
    tmp$ret$7 = tmp_2;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).q29 = function () {
    return false;
  };
  protoOf(MutableSnapshot).wp = function () {
    if (!this.g1n_1) {
      protoOf(Snapshot).wp.call(this);
      this.u29(this);
    }
  };
  protoOf(MutableSnapshot).i29 = function (readObserver) {
    this.e2a();
    this.j2a();
    var previousId = this.j1n();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.k2a(this.j1n());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().l2a(readonlyId));
    tmp$ret$0 = new NestedReadonlySnapshot(readonlyId, addRange(this.n29(), previousId + 1 | 0, readonlyId), readObserver, this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.r1y_1 ? !this.g1n_1 : false) {
      var previousId_0 = this.j1n();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.p29(tmp0_0);
      set_openSnapshots(get_openSnapshots().l2a(this.j1n()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.o29(addRange(this.n29(), previousId_0 + 1 | 0, this.j1n()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  protoOf(MutableSnapshot).t29 = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.q1y_1;
    tmp0_this.q1y_1 = tmp1 + 1 | 0;
  };
  protoOf(MutableSnapshot).u29 = function (snapshot) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.q1y_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.q1y_1 = tmp0_this.q1y_1 - 1 | 0;
    if (tmp0_this.q1y_1 === 0) {
      if (!this.r1y_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).l1v = function () {
    if (this.r1y_1 ? true : this.g1n_1)
      return Unit_getInstance();
    this.n2a();
  };
  protoOf(MutableSnapshot).x29 = function () {
    set_openSnapshots(get_openSnapshots().d2a(this.j1n()).o2a(this.o1y_1));
  };
  protoOf(MutableSnapshot).y29 = function () {
    this.p2a();
    protoOf(Snapshot).y29.call(this);
  };
  protoOf(MutableSnapshot).g2a = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.r1y_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(MutableSnapshot).j2a = function () {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!this.r1y_1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp$ret$0 = this.h1n_1 >= 0;
      tmp = tmp$ret$0;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(MutableSnapshot).m2a = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.n29().l2a(this.j1n()).q2a(this.o1y_1);
    var modified = ensureNotNull(this.m29());
    var statesToRemove = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.a1v();
      var tmp1_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, this.j1n(), start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, this.j1n(), this.n29());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var tmp4_safe_receiver = optimisticMerges;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.q2(current);
        var tmp_2;
        if (tmp5_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          tmp$ret$0 = state.n1v(previous, current, applied);
          tmp$ret$1 = tmp$ret$0;
          tmp_2 = tmp$ret$1;
        } else {
          tmp_2 = tmp5_elvis_lhs;
        }
        var merged = tmp_2;
        var tmp6_subject = merged;
        if (tmp6_subject == null)
          return new Failure(this);
        else if (equals(tmp6_subject, applied)) {
        } else if (equals(tmp6_subject, current)) {
          var tmp7_elvis_lhs = mergedRecords;
          var tmp_3;
          if (tmp7_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp$ret$2;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$2 = ArrayList_init_$Create$();
            var tmp0_also = tmp$ret$2;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp0_also;
            tmp$ret$3 = tmp0_also;
            tmp_3 = tmp$ret$3;
          } else {
            tmp_3 = tmp7_elvis_lhs;
          }
          tmp_3.a(to(state, current.x1u()));
          var tmp8_elvis_lhs = statesToRemove;
          var tmp_4;
          if (tmp8_elvis_lhs == null) {
            var tmp$ret$5;
            // Inline function 'kotlin.also' call
            var tmp$ret$4;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$4 = ArrayList_init_$Create$();
            var tmp1_also = tmp$ret$4;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            statesToRemove = tmp1_also;
            tmp$ret$5 = tmp1_also;
            tmp_4 = tmp$ret$5;
          } else {
            tmp_4 = tmp8_elvis_lhs;
          }
          tmp_4.a(state);
        } else {
          var tmp9_elvis_lhs = mergedRecords;
          var tmp_5;
          if (tmp9_elvis_lhs == null) {
            var tmp$ret$7;
            // Inline function 'kotlin.also' call
            var tmp$ret$6;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$6 = ArrayList_init_$Create$();
            var tmp2_also = tmp$ret$6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp2_also;
            tmp$ret$7 = tmp2_also;
            tmp_5 = tmp$ret$7;
          } else {
            tmp_5 = tmp9_elvis_lhs;
          }
          tmp_5.a(!equals(merged, previous) ? to(state, merged) : to(state, previous.x1u()));
        }
      }
    }
    var tmp10_safe_receiver = mergedRecords;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.n2a();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp10_safe_receiver.f() - 1 | 0;
      var tmp_6;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp10_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var tmp0_container = item;
          var state_0 = tmp0_container.f4();
          var stateRecord = tmp0_container.g4();
          stateRecord.f1v_1 = this.j1n();
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = get_lock();
          var tmp$ret$8;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.g1v_1 = state_0.a1v();
          state_0.m1v(stateRecord);
          tmp$ret$8 = Unit_getInstance();
          tmp$ret$9 = tmp$ret$8;
          tmp$ret$10 = tmp$ret$9;
        }
         while (inductionVariable <= last);
        tmp_6 = Unit_getInstance();
      }
      tmp$ret$11 = tmp_6;
    }
    var tmp11_safe_receiver = statesToRemove;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      tmp$ret$12 = modified.h9(tmp11_safe_receiver);
      tmp$ret$13 = tmp$ret$12;
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).n2a = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.k2a(this.j1n());
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    var tmp0_also = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.r1y_1 ? !this.g1n_1 : false) {
      var previousId = this.j1n();
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.p29(tmp0);
      set_openSnapshots(get_openSnapshots().l2a(this.j1n()));
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      this.o29(addRange(this.n29(), previousId + 1 | 0, this.j1n()));
    }
    tmp$ret$4 = tmp0_also;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  protoOf(MutableSnapshot).k2a = function (id) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1y_1 = this.o1y_1.l2a(id);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).r2a = function (id) {
    if (id >= 0) {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      var tmp1_plus = this.p1y_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([id]);
      var tmp0_plus = tmp$ret$0;
      tmp$ret$1 = primitiveArrayConcat([tmp1_plus, tmp0_plus]);
      tmp$ret$2 = tmp$ret$1;
      tmp.p1y_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).s2a = function (handles) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = handles.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var pinned = this.p1y_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$1 = pinned.length === 0;
    if (tmp$ret$1)
      this.p1y_1 = handles;
    else {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$2 = primitiveArrayConcat([pinned, handles]);
      tmp.p1y_1 = tmp$ret$2;
    }
  };
  protoOf(MutableSnapshot).p2a = function () {
    var inductionVariable = 0;
    var last = this.p1y_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked(this.p1y_1[index]);
      }
       while (inductionVariable <= last);
  };
  protoOf(MutableSnapshot).t2a = function (snapshots) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1y_1 = this.o1y_1.q2a(snapshots);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  protoOf(MutableSnapshot).v29 = function (state) {
    var tmp0_elvis_lhs = this.m29();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.h2a(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(state);
  };
  protoOf(MutableSnapshot).h2a = function (_set____db54di) {
    this.n1y_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).m29 = function () {
    return this.n1y_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.v2a_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.x2a_1 = snapshot;
    this.y2a_1 = 8;
  }
  function SnapshotApplyResult() {
    this.z2a_1 = 0;
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new ReadonlySnapshot(tmp$ret$3, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = get_globalWriteObservers();
    tmp$ret$0 = !tmp0_isNotEmpty.l();
    if (tmp$ret$0) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).i29 = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  protoOf(GlobalSnapshot).j29 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).l1v = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).n2b = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).u29 = function (snapshot) {
    return this.n2b(snapshot);
  };
  protoOf(GlobalSnapshot).o2b = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).t29 = function (snapshot) {
    return this.o2b(snapshot);
  };
  protoOf(GlobalSnapshot).t1y = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).wp = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r29();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.p2b(id);
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    tmp$ret$0 = get_pinningTable().v2b(pinned);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StateObject() {
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().w2b(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().pt();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().pt() : tmp0_elvis_lhs;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.k2c_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().pt() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(previousSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsPreviousSnapshot) {
    var tmp = Companion_getInstance_11().i2a_1;
    var tmp0_safe_receiver = previousSnapshot;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1v();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().pt().i1v() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp2_safe_receiver = previousSnapshot;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s29();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().pt().s29() : tmp3_elvis_lhs));
    this.k2c_1 = previousSnapshot;
    this.l2c_1 = specifiedReadObserver;
    this.m2c_1 = specifiedWriteObserver;
    this.n2c_1 = mergeParentObservers;
    this.o2c_1 = ownsPreviousSnapshot;
  }
  protoOf(TransparentObserverMutableSnapshot).wp = function () {
    this.g1n_1 = true;
    if (this.o2c_1) {
      var tmp0_safe_receiver = this.k2c_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.wp();
      }
    }
  };
  protoOf(TransparentObserverMutableSnapshot).p29 = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).j1n = function () {
    return _get_currentSnapshot__9vker0(this).j1n();
  };
  protoOf(TransparentObserverMutableSnapshot).o29 = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).n29 = function () {
    return _get_currentSnapshot__9vker0(this).n29();
  };
  protoOf(TransparentObserverMutableSnapshot).h2a = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).m29 = function () {
    return _get_currentSnapshot__9vker0(this).m29();
  };
  protoOf(TransparentObserverMutableSnapshot).q29 = function () {
    return _get_currentSnapshot__9vker0(this).q29();
  };
  protoOf(TransparentObserverMutableSnapshot).t1y = function () {
    return _get_currentSnapshot__9vker0(this).t1y();
  };
  protoOf(TransparentObserverMutableSnapshot).v29 = function (state) {
    return _get_currentSnapshot__9vker0(this).v29(state);
  };
  protoOf(TransparentObserverMutableSnapshot).i29 = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.i1v());
    var tmp;
    if (!this.n2c_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).i29(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).i29(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).j29 = function (readObserver, writeObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.i1v());
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.s29());
    var tmp;
    if (!this.n2c_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).j29(null, mergedWriteObserver_0);
      tmp = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver_0, mergedWriteObserver_0, false, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).j29(mergedReadObserver_0, mergedWriteObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).l1v = function () {
    return _get_currentSnapshot__9vker0(this).l1v();
  };
  protoOf(TransparentObserverMutableSnapshot).o2b = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).t29 = function (snapshot) {
    return this.o2b(snapshot);
  };
  protoOf(TransparentObserverMutableSnapshot).n2b = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).u29 = function (snapshot) {
    return this.n2b(snapshot);
  };
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    readObserver = readObserver === VOID ? null : readObserver;
    ownsPreviousSnapshot = ownsPreviousSnapshot === VOID ? false : ownsPreviousSnapshot;
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().pt();
    tmp$ret$0 = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var result = tmp$ret$3;
    var modified = previousGlobalSnapshot.m29();
    if (!(modified == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      tmp$ret$4 = toMutableList(get_applyObservers());
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var observers = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.g(index);
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
          item(modified, previousGlobalSnapshot);
        }
         while (inductionVariable <= last);
    }
    var tmp$ret$11;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp2_synchronized = get_lock();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    var tmp0_safe_receiver = modified;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        advanceGlobalSnapshot$overwriteUnusedRecordsLocked(element);
      }
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$8 = tmp_0;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $tmp0_safe_receiver) {
    return function (state) {
      $readObserver(state);
      $tmp0_safe_receiver(state);
      return Unit_getInstance();
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.u2c_1 = parent;
    this.u2c_1.t29(this);
    var tmp = this;
    var tmp0_safe_receiver = readObserver;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver_0 = this.u2c_1.i1v();
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp$ret$0 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver_0);
        tmp$ret$1 = tmp$ret$0;
        tmp_1 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp$ret$2 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.v2c_1 = tmp1_elvis_lhs_0 == null ? this.u2c_1.i1v() : tmp1_elvis_lhs_0;
  }
  protoOf(NestedReadonlySnapshot).q29 = function () {
    return true;
  };
  protoOf(NestedReadonlySnapshot).i29 = function (readObserver) {
    return new NestedReadonlySnapshot(this.j1n(), this.n29(), readObserver, this.u2c_1);
  };
  protoOf(NestedReadonlySnapshot).l1v = function () {
  };
  protoOf(NestedReadonlySnapshot).i1v = function () {
    return this.v2c_1;
  };
  protoOf(NestedReadonlySnapshot).wp = function () {
    if (!this.g1n_1) {
      if (!(this.j1n() === this.u2c_1.j1n())) {
        this.w29();
      }
      this.u2c_1.u29(this);
      protoOf(Snapshot).wp.call(this);
    }
  };
  protoOf(NestedReadonlySnapshot).s29 = function () {
    return null;
  };
  protoOf(NestedReadonlySnapshot).w2c = function (state) {
    reportReadonlySnapshotWrite();
  };
  protoOf(NestedReadonlySnapshot).v29 = function (state) {
    return this.w2c(state);
  };
  protoOf(NestedReadonlySnapshot).n2b = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).u29 = function (snapshot) {
    return this.n2b(snapshot);
  };
  protoOf(NestedReadonlySnapshot).o2b = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).t29 = function (snapshot) {
    return this.o2b(snapshot);
  };
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.c2d_1 = readObserver;
    this.d2d_1 = 1;
  }
  protoOf(ReadonlySnapshot).i1v = function () {
    return this.c2d_1;
  };
  protoOf(ReadonlySnapshot).q29 = function () {
    return true;
  };
  protoOf(ReadonlySnapshot).s29 = function () {
    return null;
  };
  protoOf(ReadonlySnapshot).i29 = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.j1n(), this.n29(), readObserver, this);
  };
  protoOf(ReadonlySnapshot).l1v = function () {
  };
  protoOf(ReadonlySnapshot).wp = function () {
    if (!this.g1n_1) {
      this.u29(this);
      protoOf(Snapshot).wp.call(this);
    }
  };
  protoOf(ReadonlySnapshot).t29 = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.d2d_1;
    tmp0_this.d2d_1 = tmp1 + 1 | 0;
  };
  protoOf(ReadonlySnapshot).u29 = function (snapshot) {
    var tmp0_this = this;
    tmp0_this.d2d_1 = tmp0_this.d2d_1 - 1 | 0;
    if (tmp0_this.d2d_1 === 0) {
      this.w29();
    }
  };
  protoOf(ReadonlySnapshot).v29 = function (state) {
    reportReadonlySnapshotWrite();
  };
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.j2d_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().pt() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_11().i2a_1);
    this.j2d_1 = previousSnapshot;
    this.k2d_1 = mergeParentObservers;
    this.l2d_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.j2d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1v();
    tmp.m2d_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().pt().i1v() : tmp1_elvis_lhs, this.k2d_1);
    this.n2d_1 = null;
    this.o2d_1 = this;
  }
  protoOf(TransparentObserverSnapshot).i1v = function () {
    return this.m2d_1;
  };
  protoOf(TransparentObserverSnapshot).s29 = function () {
    return this.n2d_1;
  };
  protoOf(TransparentObserverSnapshot).wp = function () {
    this.g1n_1 = true;
    if (this.l2d_1) {
      var tmp0_safe_receiver = this.j2d_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.wp();
      }
    }
  };
  protoOf(TransparentObserverSnapshot).j1n = function () {
    return _get_currentSnapshot__9vker0_0(this).j1n();
  };
  protoOf(TransparentObserverSnapshot).n29 = function () {
    return _get_currentSnapshot__9vker0_0(this).n29();
  };
  protoOf(TransparentObserverSnapshot).q29 = function () {
    return _get_currentSnapshot__9vker0_0(this).q29();
  };
  protoOf(TransparentObserverSnapshot).v29 = function (state) {
    return _get_currentSnapshot__9vker0_0(this).v29(state);
  };
  protoOf(TransparentObserverSnapshot).i29 = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.m2d_1);
    var tmp;
    if (!this.k2d_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).i29(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).i29(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverSnapshot).l1v = function () {
    return _get_currentSnapshot__9vker0_0(this).l1v();
  };
  protoOf(TransparentObserverSnapshot).o2b = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).t29 = function (snapshot) {
    return this.o2b(snapshot);
  };
  protoOf(TransparentObserverSnapshot).n2b = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).u29 = function (snapshot) {
    return this.n2b(snapshot);
  };
  function deactivate($this) {
    if (!$this.d2e_1) {
      $this.d2e_1 = true;
      $this.c2e_1.u29($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.c2e_1 = parent;
    this.d2e_1 = false;
    this.c2e_1.t29(this);
  }
  protoOf(NestedMutableSnapshot).wp = function () {
    if (!this.g1n_1) {
      protoOf(MutableSnapshot).wp.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).t1y = function () {
    if (this.c2e_1.r1y_1 ? true : this.c2e_1.g1n_1)
      return new Failure(this);
    var modified = this.m29();
    var id = this.j1n();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.c2e_1, this, this.c2e_1.n29()) : null;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.f() === 0) {
      this.w29();
    } else {
      var result = this.m2a(this.c2e_1.j1n(), optimisticMerges_0, this.c2e_1.n29());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_elvis_lhs = this.c2e_1.m29();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = HashSet_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.c2e_1.h2a(tmp0_also);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.k(modified);
    }
    if (this.c2e_1.j1n() < id) {
      this.c2e_1.n2a();
    }
    this.c2e_1.o29(this.c2e_1.n29().d2a(id).o2a(this.o1y_1));
    this.c2e_1.k2a(id);
    this.c2e_1.r2a(this.f2a());
    this.c2e_1.t2a(this.o1y_1);
    this.c2e_1.s2a(this.p1y_1);
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    this.r1y_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.l2a(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      var tmp0_elvis_lhs = readObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver_0 : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      var tmp0_elvis_lhs = writeObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StateRecord() {
    this.f1v_1 = currentSnapshot().j1n();
    this.g1v_1 = null;
    this.h1v_1 = 8;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.m29();
    var id = currentSnapshot.j1n();
    if (modified == null)
      return null;
    var start = applyingSnapshot.n29().l2a(applyingSnapshot.j1n()).q2a(applyingSnapshot.o1y_1);
    var result = null;
    var tmp0_iterator = modified.c();
    $l$loop_0: while (tmp0_iterator.d()) {
      var state = tmp0_iterator.e();
      var first = state.a1v();
      var tmp1_elvis_lhs = readable(first, id, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, id, start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, applyingSnapshot.j1n(), applyingSnapshot.n29());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var merged = state.n1v(previous, current, applied);
        if (!(merged == null)) {
          // Inline function 'kotlin.collections.set' call
          var tmp4_elvis_lhs = result;
          var tmp_2;
          if (tmp4_elvis_lhs == null) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp$ret$0;
            // Inline function 'kotlin.collections.hashMapOf' call
            tmp$ret$0 = HashMap_init_$Create$();
            var tmp0_also = tmp$ret$0;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
            result = tmp0_also;
            tmp$ret$1 = tmp0_also;
            tmp_2 = tmp$ret$1;
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }
          var tmp1_set = tmp_2;
          tmp1_set.h4(current, merged);
        } else {
          return null;
        }
      }
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().g(snapshot.j1n())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().d2a(previousGlobalSnapshot.j1n()));
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().d2a(previousGlobalSnapshot.j1n()));
    get_currentGlobalSnapshot().h1s(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.wp();
    set_openSnapshots(get_openSnapshots().l2a(globalId));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return result;
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a1v();
    var validRecord = null;
    var reuseLimit = get_pinningTable().e2e(get_nextSnapshotId()) - 1 | 0;
    var uncertainRecords = 0;
    while (!(current == null)) {
      var currentId = current.f1v_1;
      if (!(currentId === 0)) {
        if (currentId <= reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
          } else {
            var tmp;
            if (current.f1v_1 < validRecord.f1v_1) {
              tmp = current;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = validRecord;
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
              validRecord = current;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            }
            var recordToOverwrite = tmp;
            recordToOverwrite.f1v_1 = 0;
            var tmp0_safe_receiver = validRecord;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$1;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              recordToOverwrite.w1u(tmp0_safe_receiver);
              tmp$ret$1 = Unit_getInstance();
            }
          }
        } else {
          var tmp1 = uncertainRecords;
          uncertainRecords = tmp1 + 1 | 0;
        }
      }
      current = current.g1v_1;
    }
    return uncertainRecords < 1;
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.f1v_1 < current.f1v_1 ? current : candidate;
      }
      current = current.g1v_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function reportReadonlySnapshotWrite() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Cannot modify a state object in a read-only snapshot');
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.f1v_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.g(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_10().m1b();
    var tmp0_safe_receiver = snapshot.i1v();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.j1n(), snapshot.n29());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_10().m1b();
      var tmp_0 = state.a1v();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.j1n(), syncSnapshot.n29());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$0 = tmp_1;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_10().m1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.j1n(), tmp0_let.n29());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_10().m1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = readable(r, tmp0_let_0.j1n(), tmp0_let_0.n29());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp$ret$6 = tmp_0;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_safe_receiver = snapshot.s29();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q29()) {
      snapshot.v29(state);
    }
    var id = snapshot.j1n();
    if (candidate.f1v_1 === id)
      return candidate;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    tmp$ret$0 = newOverwritableRecordLocked(_this__u8e3s4, state);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var newData = tmp$ret$3;
    newData.f1v_1 = id;
    snapshot.v29(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.f1v_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp$ret$0 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.x1u();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.f1v_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.g1v_1 = state.a1v();
      state.m1v(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      tmp$ret$1 = tmp0_apply;
      var tmp_2 = tmp$ret$1;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a1v();
    var validRecord = null;
    var reuseLimit = get_pinningTable().e2e(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_11().i2a_1;
    while (!(current == null)) {
      var currentId = current.f1v_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.f1v_1 < validRecord.f1v_1 ? current : validRecord;
        }
      }
      current = current.g1v_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q29()) {
      snapshot.v29(state);
    }
    var id = snapshot.j1n();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.n29());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.f1v_1 === snapshot.j1n())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.v29(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    tmp$ret$0 = newWritableRecordLocked(_this__u8e3s4, state, snapshot);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.w1u(_this__u8e3s4);
    newData.f1v_1 = snapshot.j1n();
    return newData;
  }
  function current_0(r, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = readable(r, snapshot.j1n(), snapshot.n29());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function advanceGlobalSnapshot$overwriteUnusedRecordsLocked(p0) {
    overwriteUnusedRecordsLocked(p0);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().l2a(result.j1n()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (properties_initialized_Snapshot_kt_2vlcoq) {
    } else {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_11().i2a_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      applyObservers = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_0 = ArrayList_init_$Create$();
      globalWriteObservers = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_11().i2a_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().l2a(tmp0_also.j1n()));
      tmp$ret$0_1 = tmp0_also;
      currentGlobalSnapshot = new AtomicReference(tmp$ret$0_1);
      snapshotInitializer = get_currentGlobalSnapshot().pt();
    }
  }
  function shiftUp($this, index) {
    var values = $this.r2b_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.r2b_1;
    var half = $this.q2b_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.q2b_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.r2b_1;
    var index = $this.s2b_1;
    var handles = $this.t2b_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.r2b_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.r2b_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newValues;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newValues;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.s2b_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp2_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = newIndex;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, 0, 0, tmp3_copyInto);
    tmp$ret$9 = newIndex;
    $this.r2b_1 = newValues;
    $this.s2b_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.t2b_1.length;
    if ($this.u2b_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.allocateHandle.<anonymous>' call
        tmp$ret$0 = tmp_2 + 1 | 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.t2b_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = newHandles;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_3, tmp$ret$4, 0, 0, tmp1_copyInto);
      tmp$ret$5 = newHandles;
      $this.t2b_1 = newHandles;
    }
    var handle = $this.u2b_1;
    $this.u2b_1 = $this.t2b_1[$this.u2b_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.t2b_1[handle] = $this.u2b_1;
    $this.u2b_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.q2b_1 = 0;
    this.r2b_1 = new Int32Array(16);
    this.s2b_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 16;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.handles.<anonymous>' call
      tmp$ret$0 = tmp_3 + 1 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.t2b_1 = tmp_2;
    this.u2b_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).e2e = function (default_0) {
    return this.q2b_1 > 0 ? this.r2b_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).v2b = function (value) {
    ensure(this, this.q2b_1 + 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.q2b_1;
    tmp0_this.q2b_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.r2b_1[i] = value;
    this.s2b_1[i] = handle;
    this.t2b_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).w2b = function (handle) {
    var i = this.t2b_1[handle];
    swap(this, i, this.q2b_1 - 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.q2b_1;
    tmp0_this.q2b_1 = tmp1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.i2a_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.n2e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).w2e = function ($this$sequence, $completion) {
    var tmp = this.x2e($this$sequence, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(SnapshotIdSet$iterator$slambda).eg = function (p1, $completion) {
    return this.w2e(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 15;
            this.p2e_1 = this.n2e_1.c2a_1;
            if (!(this.p2e_1 == null)) {
              this.q2e_1 = intArrayIterator(this.p2e_1);
              this.jf_1 = 1;
              continue $sm;
            } else {
              this.jf_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            if (!this.q2e_1.d()) {
              this.jf_1 = 3;
              continue $sm;
            }

            this.r2e_1 = this.q2e_1.e();
            this.jf_1 = 2;
            suspendResult = this.o2e_1.a5(this.r2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jf_1 = 1;
            continue $sm;
          case 3:
            this.jf_1 = 4;
            continue $sm;
          case 4:
            if (!this.n2e_1.a2a_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.s2e_1 = until(0, 64).c();
              this.jf_1 = 5;
              continue $sm;
            } else {
              this.jf_1 = 9;
              continue $sm;
            }

            break;
          case 5:
            if (!this.s2e_1.d()) {
              this.jf_1 = 8;
              continue $sm;
            }

            this.t2e_1 = this.s2e_1.e();
            if (!this.n2e_1.a2a_1.s8((new Long(1, 0)).g8(this.t2e_1)).equals(new Long(0, 0))) {
              this.jf_1 = 6;
              suspendResult = this.o2e_1.a5(this.t2e_1 + this.n2e_1.b2a_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 7;
              continue $sm;
            }

            break;
          case 6:
            this.jf_1 = 7;
            continue $sm;
          case 7:
            this.jf_1 = 5;
            continue $sm;
          case 8:
            this.jf_1 = 9;
            continue $sm;
          case 9:
            if (!this.n2e_1.z29_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.u2e_1 = until(0, 64).c();
              this.jf_1 = 10;
              continue $sm;
            } else {
              this.jf_1 = 14;
              continue $sm;
            }

            break;
          case 10:
            if (!this.u2e_1.d()) {
              this.jf_1 = 13;
              continue $sm;
            }

            this.v2e_1 = this.u2e_1.e();
            if (!this.n2e_1.z29_1.s8((new Long(1, 0)).g8(this.v2e_1)).equals(new Long(0, 0))) {
              this.jf_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.o2e_1.a5((this.v2e_1 + 64 | 0) + this.n2e_1.b2a_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 12;
              continue $sm;
            }

            break;
          case 11:
            this.jf_1 = 12;
            continue $sm;
          case 12:
            this.jf_1 = 10;
            continue $sm;
          case 13:
            this.jf_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 15) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).x2e = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.n2e_1, completion);
    i.o2e_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.w2e($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_11();
    this.z29_1 = upperSet;
    this.a2a_1 = lowerSet;
    this.b2a_1 = lowerBound;
    this.c2a_1 = belowBound;
  }
  protoOf(SnapshotIdSet).g = function (bit) {
    var offset = bit - this.b2a_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).g8(offset).s8(this.a2a_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.g8(offset - 64 | 0).s8(this.z29_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.c2a_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp$ret$0 = binarySearch(tmp0_safe_receiver, bit) >= 0;
            tmp$ret$1 = tmp$ret$0;
            tmp_2 = tmp$ret$1;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).l2a = function (bit) {
    var offset = bit - this.b2a_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).g8(offset);
      if (this.a2a_1.s8(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.z29_1, this.a2a_1.cf(mask), this.b2a_1, this.c2a_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.g8(offset - 64 | 0);
        if (this.z29_1.s8(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.z29_1.cf(mask_0), this.a2a_1, this.b2a_1, this.c2a_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.g(bit)) {
            var newUpperSet = this.z29_1;
            var newLowerSet = this.a2a_1;
            var newLowerBound = this.b2a_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  var tmp$ret$2;
                  // Inline function 'kotlin.apply' call
                  var tmp$ret$0;
                  // Inline function 'kotlin.collections.mutableListOf' call
                  tmp$ret$0 = ArrayList_init_$Create$();
                  var tmp0_apply = tmp$ret$0;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.c2a_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$1;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var indexedObject = tmp0_safe_receiver;
                    var inductionVariable = 0;
                    var last = indexedObject.length;
                    while (inductionVariable < last) {
                      var element = indexedObject[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                    tmp$ret$1 = Unit_getInstance();
                  }
                  tmp$ret$2 = tmp0_apply;
                  newBelowBound = tmp$ret$2;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                var tmp1_repeat = 64;
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < tmp1_repeat)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.s8((new Long(1, 0)).g8(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < tmp1_repeat);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.c2a_1 : tmp1_elvis_lhs)).l2a(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.c2a_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.z29_1, this.a2a_1, this.b2a_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            var tmp$ret$8;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp$ret$5;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$4 = array;
            tmp$ret$5 = tmp$ret$4;
            var tmp_9 = tmp$ret$5;
            var tmp$ret$7;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$6;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$6 = newBelowBound_0;
            tmp$ret$7 = tmp$ret$6;
            arrayCopy(tmp_9, tmp$ret$7, 0, 0, insertLocation);
            tmp$ret$8 = newBelowBound_0;
            var tmp$ret$13;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = array;
            tmp$ret$10 = tmp$ret$9;
            var tmp_10 = tmp$ret$10;
            var tmp$ret$12;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = newBelowBound_0;
            tmp$ret$12 = tmp$ret$11;
            arrayCopy(tmp_10, tmp$ret$12, tmp2_copyInto, insertLocation, tmp3_copyInto);
            tmp$ret$13 = newBelowBound_0;
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.z29_1, this.a2a_1, this.b2a_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).d2a = function (bit) {
    var offset = bit - this.b2a_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).g8(offset);
      if (!this.a2a_1.s8(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.z29_1, this.a2a_1.s8(mask.bf()), this.b2a_1, this.c2a_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.g8(offset - 64 | 0);
        if (!this.z29_1.s8(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.z29_1.s8(mask_0.bf()), this.a2a_1, this.b2a_1, this.c2a_1);
        }
      } else {
        if (offset < 0) {
          var array = this.c2a_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.z29_1, this.a2a_1, this.b2a_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                var tmp$ret$4;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp$ret$1;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$0;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$0 = array;
                tmp$ret$1 = tmp$ret$0;
                var tmp_2 = tmp$ret$1;
                var tmp$ret$3;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$2;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$2 = newBelowBound;
                tmp$ret$3 = tmp$ret$2;
                arrayCopy(tmp_2, tmp$ret$3, 0, 0, location);
                tmp$ret$4 = newBelowBound;
              }
              if (location < newSize) {
                var tmp$ret$9;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                var tmp$ret$6;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$5;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$5 = array;
                tmp$ret$6 = tmp$ret$5;
                var tmp_3 = tmp$ret$6;
                var tmp$ret$8;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$7;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$7 = newBelowBound;
                tmp$ret$8 = tmp$ret$7;
                arrayCopy(tmp_3, tmp$ret$8, location, tmp0_copyInto, tmp1_copyInto);
                tmp$ret$9 = newBelowBound;
              }
              return new SnapshotIdSet(this.z29_1, this.a2a_1, this.b2a_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).o2a = function (bits) {
    if (bits === Companion_getInstance_11().i2a_1)
      return this;
    if (this === Companion_getInstance_11().i2a_1)
      return Companion_getInstance_11().i2a_1;
    var tmp;
    if (bits.b2a_1 === this.b2a_1 ? bits.c2a_1 === this.c2a_1 : false) {
      tmp = new SnapshotIdSet(this.z29_1.s8(bits.z29_1.bf()), this.a2a_1.s8(bits.a2a_1.bf()), this.b2a_1, this.c2a_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = tmp0__anonymous__q1qw7t.d2a(element);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).q2a = function (bits) {
    if (bits === Companion_getInstance_11().i2a_1)
      return this;
    if (this === Companion_getInstance_11().i2a_1)
      return bits;
    var tmp;
    if (bits.b2a_1 === this.b2a_1 ? bits.c2a_1 === this.c2a_1 : false) {
      tmp = new SnapshotIdSet(this.z29_1.cf(bits.z29_1), this.a2a_1.cf(bits.a2a_1), this.b2a_1, this.c2a_1);
    } else {
      var tmp_0;
      if (this.c2a_1 == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp0__anonymous__q1qw7t = accumulator;
          tmp$ret$0 = tmp0__anonymous__q1qw7t.l2a(element);
          accumulator = tmp$ret$0;
        }
        tmp$ret$1 = accumulator;
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp1__anonymous__uwfjfc = accumulator_0;
          tmp$ret$2 = tmp1__anonymous__uwfjfc.l2a(element_0);
          accumulator_0 = tmp$ret$2;
        }
        tmp$ret$3 = accumulator_0;
        tmp_0 = tmp$ret$3;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).c = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).c();
  };
  protoOf(SnapshotIdSet).p2b = function (default_0) {
    var belowBound = this.c2a_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.a2a_1.equals(new Long(0, 0)))
      return this.b2a_1 + lowestBitOf(this.a2a_1) | 0;
    if (!this.z29_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.b2a_1 + 64 | 0) + lowestBitOf(this.z29_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp + ' [' + fastJoinToString(tmp$ret$2) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.s8(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.e8(32);
    }
    if (b.s8(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.e8(16);
    }
    if (b.s8(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.e8(8);
    }
    if (b.s8(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.e8(4);
    }
    if (!b.s8(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.s8(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.s8(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.s8(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.b2f_1 = list;
    this.c2f_1 = 0;
  }
  protoOf(StateListStateRecord).w1u = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.b2f_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).b2f_1;
    this.c2f_1 = value.c2f_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(StateListStateRecord).x1u = function () {
    return new StateListStateRecord(this.b2f_1);
  };
  function mutateBoolean($this, block) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = $this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldList).z1i();
      result = block(builder);
      var newList = builder.a1j();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = $this.d2f_1;
        var tmp2_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, $this, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.b2f_1 = newList;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.c2f_1;
          tmp0_this.c2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp1_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp$ret$10 = tmp1_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
    return tmp$ret$16;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.i3($index, $elements);
    };
  }
  function SnapshotStateList() {
    this.d2f_1 = new StateListStateRecord(persistentListOf());
    this.e2f_1 = 0;
  }
  protoOf(SnapshotStateList).a1v = function () {
    return this.d2f_1;
  };
  protoOf(SnapshotStateList).m1v = function (value) {
    value.g1v_1 = this.d2f_1;
    var tmp = this;
    tmp.d2f_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).f2f = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.d2f_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = tmp1__anonymous__uwfjfc.c2f_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf(SnapshotStateList).g2f = function () {
    var tmp = this.d2f_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).f = function () {
    return this.g2f().b2f_1.f();
  };
  protoOf(SnapshotStateList).x3 = function (element) {
    return this.g2f().b2f_1.m(element);
  };
  protoOf(SnapshotStateList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).y3 = function (elements) {
    return this.g2f().b2f_1.d1(elements);
  };
  protoOf(SnapshotStateList).d1 = function (elements) {
    return this.y3(elements);
  };
  protoOf(SnapshotStateList).g = function (index) {
    return this.g2f().b2f_1.g(index);
  };
  protoOf(SnapshotStateList).r22 = function (element) {
    return this.g2f().b2f_1.n(element);
  };
  protoOf(SnapshotStateList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.r22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).l = function () {
    return this.g2f().b2f_1.l();
  };
  protoOf(SnapshotStateList).c = function () {
    return this.t23();
  };
  protoOf(SnapshotStateList).s22 = function (element) {
    return this.g2f().b2f_1.x1(element);
  };
  protoOf(SnapshotStateList).x1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.s22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).t23 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).j1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).k1 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.f() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SubList_1(this, fromIndex, toIndex);
  };
  protoOf(SnapshotStateList).h1r = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).a = function (element) {
    return this.h1r((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).z4 = function (index, element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.u23(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return Unit_getInstance();
  };
  protoOf(SnapshotStateList).h3 = function (index, element) {
    return this.z4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).t22 = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).i3 = function (index, elements) {
    return this.t22(index, elements);
  };
  protoOf(SnapshotStateList).u22 = function (elements) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.k(elements);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).k = function (elements) {
    return this.u22(elements);
  };
  protoOf(SnapshotStateList).l3 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.d2f_1;
    var tmp2_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized_0 = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_10().m1b();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
    tmp3__anonymous__ufb84q.b2f_1 = persistentListOf();
    var tmp0_this = tmp3__anonymous__ufb84q;
    var tmp1 = tmp0_this.c2f_1;
    tmp0_this.c2f_1 = tmp1 + 1 | 0;
    tmp$ret$0 = tmp1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
    tmp$ret$5 = tmp1_also;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
  };
  protoOf(SnapshotStateList).n22 = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.j3(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  protoOf(SnapshotStateList).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k3 = function (index) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.k3(index);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  protoOf(SnapshotStateList).y4 = function (index, element) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.g(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.p(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.d2f_1;
      var tmp2_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      var tmp_1;
      if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
        tmp3__anonymous__ufb84q.b2f_1 = newList;
        var tmp0_this = tmp3__anonymous__ufb84q;
        var tmp1 = tmp0_this.c2f_1;
        tmp0_this.c2f_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp1_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp1_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  protoOf(SnapshotStateList).p = function (index, element) {
    return this.y4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p3 = function (fromIndex, toIndex) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$mtya1n_8tc451();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.d2f_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.c2f_1;
      oldList = current_0.b2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldList).z1i();
      builder.k1(fromIndex, toIndex).l3();
      result = Unit_getInstance();
      var newList = builder.a1j();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$mtya1n_8tc451();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.d2f_1;
        var tmp2_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.c2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.b2f_1 = newList;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.c2f_1;
          tmp0_this.c2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp1_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$10 = tmp1_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
  };
  function validateModification($this) {
    if (!($this.h2f_1.f2f() === $this.j2f_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.h2f_1 = list;
    this.i2f_1 = offset - 1 | 0;
    this.j2f_1 = this.h2f_1.f2f();
  }
  protoOf(StateListIterator).r1 = function () {
    return this.i2f_1 >= 0;
  };
  protoOf(StateListIterator).s1 = function () {
    return this.i2f_1 + 1 | 0;
  };
  protoOf(StateListIterator).t1 = function () {
    validateModification(this);
    validateRange(this.i2f_1, this.h2f_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h2f_1.g(this.i2f_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2f_1;
    tmp0_this.i2f_1 = tmp1 - 1 | 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).u1 = function () {
    return this.i2f_1;
  };
  protoOf(StateListIterator).d = function () {
    return this.i2f_1 < (this.h2f_1.f() - 1 | 0);
  };
  protoOf(StateListIterator).e = function () {
    validateModification(this);
    var newIndex = this.i2f_1 + 1 | 0;
    validateRange(newIndex, this.h2f_1.f());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.h2f_1.g(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.i2f_1 = newIndex;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(StateListIterator).t4 = function () {
    validateModification(this);
    this.h2f_1.k3(this.i2f_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.i2f_1;
    tmp0_this.i2f_1 = tmp1 - 1 | 0;
    this.j2f_1 = this.h2f_1.f2f();
  };
  function validateModification_0($this) {
    if (!($this.k2f_1.f2f() === $this.m2f_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SubList$listIterator$1($current, this$0) {
    this.o2f_1 = $current;
    this.p2f_1 = this$0;
  }
  protoOf(SubList$listIterator$1).r1 = function () {
    return this.o2f_1._v >= 0;
  };
  protoOf(SubList$listIterator$1).s1 = function () {
    return this.o2f_1._v + 1 | 0;
  };
  protoOf(SubList$listIterator$1).t1 = function () {
    var oldCurrent = this.o2f_1._v;
    validateRange(oldCurrent, this.p2f_1.n2f_1);
    this.o2f_1._v = oldCurrent - 1 | 0;
    return this.p2f_1.g(oldCurrent);
  };
  protoOf(SubList$listIterator$1).u1 = function () {
    return this.o2f_1._v;
  };
  protoOf(SubList$listIterator$1).d = function () {
    return this.o2f_1._v < (this.p2f_1.n2f_1 - 1 | 0);
  };
  protoOf(SubList$listIterator$1).e = function () {
    var newCurrent = this.o2f_1._v + 1 | 0;
    validateRange(newCurrent, this.p2f_1.n2f_1);
    this.o2f_1._v = newCurrent;
    return this.p2f_1.g(newCurrent);
  };
  protoOf(SubList$listIterator$1).pq = function () {
    modificationError();
  };
  protoOf(SubList$listIterator$1).t4 = function () {
    return this.pq();
  };
  function SubList_1(parentList, fromIndex, toIndex) {
    this.k2f_1 = parentList;
    this.l2f_1 = fromIndex;
    this.m2f_1 = this.k2f_1.f2f();
    this.n2f_1 = toIndex - fromIndex | 0;
  }
  protoOf(SubList_1).f = function () {
    return this.n2f_1;
  };
  protoOf(SubList_1).x3 = function (element) {
    return this.r22(element) >= 0;
  };
  protoOf(SubList_1).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).y3 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SubList.containsAll.<anonymous>' call
        tmp$ret$1 = this.x3(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SubList_1).d1 = function (elements) {
    return this.y3(elements);
  };
  protoOf(SubList_1).g = function (index) {
    validateModification_0(this);
    validateRange(index, this.n2f_1);
    return this.k2f_1.g(this.l2f_1 + index | 0);
  };
  protoOf(SubList_1).r22 = function (element) {
    validateModification_0(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(this.l2f_1, this.l2f_1 + this.n2f_1 | 0);
    var inductionVariable = tmp0_forEach.w_1;
    var last = tmp0_forEach.x_1;
    if (inductionVariable <= last)
      do {
        var element_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.SubList.indexOf.<anonymous>' call
        if (equals(element, this.k2f_1.g(element_0)))
          return element_0 - this.l2f_1 | 0;
      }
       while (!(element_0 === last));
    return -1;
  };
  protoOf(SubList_1).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.r22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).l = function () {
    return this.n2f_1 === 0;
  };
  protoOf(SubList_1).c = function () {
    return this.t23();
  };
  protoOf(SubList_1).s22 = function (element) {
    validateModification_0(this);
    var index = (this.l2f_1 + this.n2f_1 | 0) - 1 | 0;
    while (index >= this.l2f_1) {
      if (equals(element, this.k2f_1.g(index)))
        return index - this.l2f_1 | 0;
      var tmp0 = index;
      index = tmp0 - 1 | 0;
    }
    return -1;
  };
  protoOf(SubList_1).x1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.s22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).h1r = function (element) {
    validateModification_0(this);
    this.k2f_1.z4(this.l2f_1 + this.n2f_1 | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.n2f_1;
    tmp0_this.n2f_1 = tmp1 + 1 | 0;
    this.m2f_1 = this.k2f_1.f2f();
    return true;
  };
  protoOf(SubList_1).a = function (element) {
    return this.h1r((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).z4 = function (index, element) {
    validateModification_0(this);
    this.k2f_1.z4(this.l2f_1 + index | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.n2f_1;
    tmp0_this.n2f_1 = tmp1 + 1 | 0;
    this.m2f_1 = this.k2f_1.f2f();
  };
  protoOf(SubList_1).h3 = function (index, element) {
    return this.z4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).t22 = function (index, elements) {
    validateModification_0(this);
    var result = this.k2f_1.t22(index + this.l2f_1 | 0, elements);
    if (result) {
      var tmp0_this = this;
      tmp0_this.n2f_1 = tmp0_this.n2f_1 + elements.f() | 0;
      this.m2f_1 = this.k2f_1.f2f();
    }
    return result;
  };
  protoOf(SubList_1).i3 = function (index, elements) {
    return this.t22(index, elements);
  };
  protoOf(SubList_1).u22 = function (elements) {
    return this.t22(this.n2f_1, elements);
  };
  protoOf(SubList_1).k = function (elements) {
    return this.u22(elements);
  };
  protoOf(SubList_1).l3 = function () {
    if (this.n2f_1 > 0) {
      validateModification_0(this);
      this.k2f_1.p3(this.l2f_1, this.l2f_1 + this.n2f_1 | 0);
      this.n2f_1 = 0;
      this.m2f_1 = this.k2f_1.f2f();
    }
  };
  protoOf(SubList_1).t23 = function () {
    return this.j1(0);
  };
  protoOf(SubList_1).j1 = function (index) {
    validateModification_0(this);
    var current = {_v: index - 1 | 0};
    return new SubList$listIterator$1(current, this);
  };
  protoOf(SubList_1).n22 = function (element) {
    var index = this.r22(element);
    var tmp;
    if (index >= 0) {
      this.k3(index);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SubList_1).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n22((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).k3 = function (index) {
    validateModification_0(this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.k2f_1.k3(this.l2f_1 + index | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SubList.removeAt.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.n2f_1;
    tmp0_this.n2f_1 = tmp1 - 1 | 0;
    this.m2f_1 = this.k2f_1.f2f();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SubList_1).y4 = function (index, element) {
    validateRange(index, this.n2f_1);
    validateModification_0(this);
    var result = this.k2f_1.y4(index + this.l2f_1 | 0, element);
    this.m2f_1 = this.k2f_1.f2f();
    return result;
  };
  protoOf(SubList_1).p = function (index, element) {
    return this.y4(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).k1 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.n2f_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    validateModification_0(this);
    return new SubList_1(this.k2f_1, fromIndex + this.l2f_1 | 0, toIndex + this.l2f_1 | 0);
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function modificationError() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    throw IllegalStateException_init_$Create$('Cannot modify a state list through an iterator');
  }
  function _get_sync_$accessor$mtya1n_8tc451() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (properties_initialized_SnapshotStateList_kt_lcuarf) {
    } else {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  function get_sync_0() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync_0;
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.t2f_1 = map;
    this.u2f_1 = 0;
  }
  protoOf(StateMapStateRecord).w1u = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t2f_1 = other.t2f_1;
    this.u2f_1 = other.u2f_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(StateMapStateRecord).x1u = function () {
    return new StateMapStateRecord(this.t2f_1);
  };
  function SnapshotStateMap() {
    this.v2f_1 = new StateMapStateRecord(persistentHashMapOf());
    this.w2f_1 = new SnapshotMapEntrySet(this);
    this.x2f_1 = new SnapshotMapKeySet(this);
    this.y2f_1 = new SnapshotMapValueSet(this);
    this.z2f_1 = 0;
  }
  protoOf(SnapshotStateMap).a1v = function () {
    return this.v2f_1;
  };
  protoOf(SnapshotStateMap).m1v = function (value) {
    var tmp = this;
    tmp.v2f_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).f = function () {
    return this.g2f().t2f_1.f();
  };
  protoOf(SnapshotStateMap).k2 = function (key) {
    return this.g2f().t2f_1.k2(key);
  };
  protoOf(SnapshotStateMap).o2 = function (value) {
    return this.g2f().t2f_1.o2(value);
  };
  protoOf(SnapshotStateMap).q2 = function (key) {
    return this.g2f().t2f_1.q2(key);
  };
  protoOf(SnapshotStateMap).l = function () {
    return this.g2f().t2f_1.l();
  };
  protoOf(SnapshotStateMap).c2 = function () {
    return this.w2f_1;
  };
  protoOf(SnapshotStateMap).r2 = function () {
    return this.x2f_1;
  };
  protoOf(SnapshotStateMap).s2 = function () {
    return this.y2f_1;
  };
  protoOf(SnapshotStateMap).l3 = function () {
    var tmp$ret$14;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    var tmp$ret$12;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.v2f_1;
    var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    var tmp2__anonymous__z9zvc9 = tmp1__anonymous__uwfjfc.t2f_1;
    tmp$ret$0 = persistentHashMapOf();
    var newMap = tmp$ret$0;
    var tmp_0;
    if (!(newMap === tmp1__anonymous__uwfjfc.t2f_1)) {
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
      var tmp$ret$10;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.v2f_1;
      var tmp2_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_10().m1b();
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
      tmp3__anonymous__ufb84q.t2f_1 = newMap;
      var tmp0_this = tmp3__anonymous__ufb84q;
      var tmp1 = tmp0_this.u2f_1;
      tmp0_this.u2f_1 = tmp1 + 1 | 0;
      tmp$ret$1 = tmp1;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp1_also = tmp$ret$5;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$6 = tmp1_also;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      tmp_0 = Unit_getInstance();
    }
    tmp$ret$12 = tmp_0;
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    return tmp$ret$14;
  };
  protoOf(SnapshotStateMap).h4 = function (key, value) {
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.v2f_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.t2f_1;
      currentModification = current_0.u2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).z1i();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      tmp$ret$5 = builder.h4(key, value);
      result = tmp$ret$5;
      var newMap = builder.a1j();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.v2f_1;
        var tmp2_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.u2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.t2f_1 = newMap;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.u2f_1;
          tmp0_this.u2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp1_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$11 = tmp1_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    return tmp$ret$17;
  };
  protoOf(SnapshotStateMap).ia = function (from) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.v2f_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.t2f_1;
      currentModification = current_0.u2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).z1i();
      builder.ia(from);
      result = Unit_getInstance();
      var newMap = builder.a1j();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.v2f_1;
        var tmp2_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.u2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.t2f_1 = newMap;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.u2f_1;
          tmp0_this.u2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp1_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$10 = tmp1_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
    return tmp$ret$16;
  };
  protoOf(SnapshotStateMap).s4 = function (key) {
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.v2f_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.t2f_1;
      currentModification = current_0.u2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).z1i();
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      tmp$ret$5 = builder.s4(key);
      result = tmp$ret$5;
      var newMap = builder.a1j();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.v2f_1;
        var tmp2_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, this, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.u2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.t2f_1 = newMap;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.u2f_1;
          tmp0_this.u2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp1_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$11 = tmp1_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    return tmp$ret$17;
  };
  protoOf(SnapshotStateMap).f2f = function () {
    return this.g2f().u2f_1;
  };
  protoOf(SnapshotStateMap).a2g = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.w2f_1;
      var tmp0_iterator = tmp0_firstOrNull.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        tmp$ret$0 = equals(element.b2(), value);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.s4(tmp0_safe_receiver.z1());
      tmp$ret$2 = true;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).g2f = function () {
    var tmp = this.v2f_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).ma = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).a = function (element) {
    return this.ma((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).c2g = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).k = function (elements) {
    return this.c2g(elements);
  };
  protoOf(SnapshotMapEntrySet).c = function () {
    return new StateMapMutableEntriesIterator(this.d2g_1, this.d2g_1.g2f().t2f_1.c2().c());
  };
  protoOf(SnapshotMapEntrySet).e2g = function (element) {
    return !(this.d2g_1.s4(element.z1()) == null);
  };
  protoOf(SnapshotMapEntrySet).j3 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.e2g((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).f2g = function (elements) {
    var removed = false;
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      removed = !(this.d2g_1.s4(element.z1()) == null) ? true : removed;
    }
    return removed;
  };
  protoOf(SnapshotMapEntrySet).h9 = function (elements) {
    return this.f2g(elements);
  };
  protoOf(SnapshotMapEntrySet).g2g = function (element) {
    return equals(this.d2g_1.q2(element.z1()), element.b2());
  };
  protoOf(SnapshotMapEntrySet).m = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.g2g((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).h2g = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.g2g(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).d1 = function (elements) {
    return this.h2g(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).ba = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).a = function (element) {
    return this.ba((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).j2g = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).k = function (elements) {
    return this.j2g(elements);
  };
  protoOf(SnapshotMapKeySet).c = function () {
    return new StateMapMutableKeysIterator(this.d2g_1, this.d2g_1.g2f().t2f_1.c2().c());
  };
  protoOf(SnapshotMapKeySet).s4 = function (element) {
    return !(this.d2g_1.s4(element) == null);
  };
  protoOf(SnapshotMapKeySet).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.s4((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).k2g = function (elements) {
    var removed = false;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.removeAll.<anonymous>' call
      removed = !(this.d2g_1.s4(element) == null) ? true : removed;
    }
    return removed;
  };
  protoOf(SnapshotMapKeySet).h9 = function (elements) {
    return this.k2g(elements);
  };
  protoOf(SnapshotMapKeySet).h2 = function (element) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.d2g_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(element);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(SnapshotMapKeySet).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.h2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).l2g = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.collections.contains' call
        var tmp0_contains = this.d2g_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.containsKey' call
        tmp$ret$1 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).k2(element);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        if (!tmp$ret$3) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).d1 = function (elements) {
    return this.l2g(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).ha = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).a = function (element) {
    return this.ha((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).n2g = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).k = function (elements) {
    return this.n2g(elements);
  };
  protoOf(SnapshotMapValueSet).c = function () {
    return new StateMapMutableValuesIterator(this.d2g_1, this.d2g_1.g2f().t2f_1.c2().c());
  };
  protoOf(SnapshotMapValueSet).o2g = function (element) {
    return this.d2g_1.a2g(element);
  };
  protoOf(SnapshotMapValueSet).j3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.o2g((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).p2g = function (elements) {
    var set = toSet(elements);
    var tmp$ret$18;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var tmp2_removeIf = this.d2g_1;
    var removed = false;
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = tmp2_removeIf.v2f_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      oldMap = current_0.t2f_1;
      currentModification = current_0.u2f_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldMap).z1i();
      var tmp0_iterator = tmp2_removeIf.w2f_1.c();
      while (tmp0_iterator.d()) {
        var entry = tmp0_iterator.e();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.removeAll.<anonymous>' call
        tmp$ret$5 = set.m(entry.b2());
        if (tmp$ret$5) {
          builder.s4(entry.z1());
          removed = true;
        }
      }
      result = Unit_getInstance();
      var newMap = builder.a1j();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$5o1krd_ht7f01();
        var tmp$ret$15;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = tmp2_removeIf.v2f_1;
        var tmp2_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$11;
        // Inline function 'kotlin.also' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$8;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_10().m1b();
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp3__anonymous__ufb84q = writableRecord(tmp2_writable, tmp2_removeIf, snapshot);
        var tmp_2;
        if (tmp3__anonymous__ufb84q.u2f_1 === currentModification) {
          tmp3__anonymous__ufb84q.t2f_1 = newMap;
          var tmp0_this = tmp3__anonymous__ufb84q;
          var tmp1 = tmp0_this.u2f_1;
          tmp0_this.u2f_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        var tmp1_also = tmp$ret$10;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, tmp2_removeIf);
        tmp$ret$11 = tmp1_also;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        tmp_0 = tmp$ret$16;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$17 = result;
    tmp$ret$18 = removed;
    return tmp$ret$18;
  };
  protoOf(SnapshotMapValueSet).h9 = function (elements) {
    return this.p2g(elements);
  };
  protoOf(SnapshotMapValueSet).n2 = function (element) {
    return this.d2g_1.o2(element);
  };
  protoOf(SnapshotMapValueSet).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.n2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).q2g = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        tmp$ret$1 = this.d2g_1.o2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).d1 = function (elements) {
    return this.q2g(elements);
  };
  function SnapshotMapSet(map) {
    this.d2g_1 = map;
  }
  protoOf(SnapshotMapSet).f = function () {
    return this.d2g_1.f();
  };
  protoOf(SnapshotMapSet).l3 = function () {
    return this.d2g_1.l3();
  };
  protoOf(SnapshotMapSet).l = function () {
    return this.d2g_1.l();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.t2g_1 = this$0;
    this.r2g_1 = ensureNotNull(this$0.x2g_1).z1();
    this.s2g_1 = ensureNotNull(this$0.x2g_1).b2();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).z1 = function () {
    return this.r2g_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).b2 = function () {
    return this.s2g_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).x9 = function (newValue) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.t2g_1.u2g_1.f2f() === this.t2g_1.w2g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var result = this.s2g_1;
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.t2g_1.u2g_1;
    var tmp1_set = this.r2g_1;
    tmp0_set.h4(tmp1_set, newValue);
    this.s2g_1 = newValue;
    return result;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).e = function () {
    this.n2a();
    if (!(this.x2g_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).e = function () {
    var tmp0_elvis_lhs = this.y2g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.n2a();
    return result.z1();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).e = function () {
    var tmp0_elvis_lhs = this.y2g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.n2a();
    return result.b2();
  };
  function StateMapMutableIterator(map, iterator) {
    this.u2g_1 = map;
    this.v2g_1 = iterator;
    this.w2g_1 = this.u2g_1.f2f();
    this.x2g_1 = null;
    this.y2g_1 = null;
    this.n2a();
  }
  protoOf(StateMapMutableIterator).t4 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.u2g_1.f2f() === this.w2g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var value = this.x2g_1;
    var tmp;
    if (!(value == null)) {
      this.u2g_1.s4(value.z1());
      this.x2g_1 = null;
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.w2g_1 = this.u2g_1.f2f();
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(StateMapMutableIterator).d = function () {
    return !(this.y2g_1 == null);
  };
  protoOf(StateMapMutableIterator).n2a = function () {
    this.x2g_1 = this.y2g_1;
    this.y2g_1 = this.v2g_1.d() ? this.v2g_1.e() : null;
  };
  function _get_sync_$accessor$5o1krd_ht7f01() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return get_sync_0();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (properties_initialized_SnapshotStateMap_kt_9i73ip) {
    } else {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var tmp0_safe_receiver = $this.q2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
      var destinationIndex = 0;
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.z1v_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = tmp0_safe_receiver.a1w_1[i];
          var key = isObject(tmp) ? tmp : THROW_CCE();
          var value = tmp0_safe_receiver.b1w_1[i];
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = !(value === $this.r2h_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
          if (tmp0_also) {
            removeObservation($this, scope, key);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          if (!tmp$ret$1) {
            if (!(destinationIndex === i)) {
              tmp0_safe_receiver.a1w_1[destinationIndex] = key;
              tmp0_safe_receiver.b1w_1[destinationIndex] = value;
            }
            var tmp1 = destinationIndex;
            destinationIndex = tmp1 + 1 | 0;
          }
        }
         while (inductionVariable < last);
      var inductionVariable_0 = destinationIndex;
      var last_0 = tmp0_safe_receiver.z1v_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_safe_receiver.a1w_1[i_0] = null;
        }
         while (inductionVariable_0 < last_0);
      tmp0_safe_receiver.z1v_1 = destinationIndex;
    }
  }
  function removeObservation($this, scope, value) {
    $this.s2h_1.l1s(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.s2h_1.t1r(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.y2h_1.v1s(value);
      $this.z2h_1.s4(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateEnterObserver$lambda(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.x2h_1;
      tmp0_this.x2h_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateExitObserver$lambda(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.x2h_1;
      tmp0_this.x2h_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function drainChanges($this) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.g2i_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
    tmp$ret$0 = $this.c2i_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2)
      return false;
    var hasValues = false;
    while (true) {
      var tmp0_elvis_lhs = removeChanges($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return hasValues;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var notifications = tmp;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = $this.g2i_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_forEach = $this.f2i_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEach.m1u_1;
      var tmp_0;
      if (size > 0) {
        var i = 0;
        var tmp_1 = tmp0_forEach.k1u_1;
        var content = isArray(tmp_1) ? tmp_1 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = content[i];
          hasValues = tmp2__anonymous__z9zvc9.l2i(notifications) ? true : hasValues;
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$3 = tmp_0;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function sendNotifications($this) {
    $this.a2i_1(SnapshotStateObserver$sendNotifications$lambda($this));
  }
  function addChanges($this, set) {
    $l$loop: while (true) {
      var old = $this.b2i_1.pt();
      var tmp0_subject = old;
      var tmp;
      if (tmp0_subject == null) {
        tmp = set;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          tmp = listOf_0([old, set]);
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
            tmp = plus_1(old, listOf(set));
          } else {
            report($this);
          }
        }
      }
      var new_0 = tmp;
      if ($this.b2i_1.s1s(old, new_0))
        break $l$loop;
    }
  }
  function removeChanges($this) {
    while (true) {
      var old = $this.b2i_1.pt();
      var result;
      var new_0;
      var tmp0_subject = old;
      if (tmp0_subject == null)
        return null;
      else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          result = (old == null ? true : isInterface(old, Set)) ? old : THROW_CCE();
          new_0 = null;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
            var tmp = old.g(0);
            result = (tmp == null ? true : isInterface(tmp, Set)) ? tmp : THROW_CCE();
            new_0 = old.f() === 2 ? old.g(1) : old.f() > 2 ? old.k1(1, old.f()) : null;
          } else {
            report($this);
          }
        }
      }
      if ($this.b2i_1.s1s(old, new_0)) {
        return result;
      }
    }
  }
  function report($this) {
    composeRuntimeError('Unexpected notification');
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var tmp0_firstOrNull = $this.f2i_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_firstOrNull.m1u_1;
      if (size > 0) {
        var i = 0;
        var tmp = tmp0_firstOrNull.k1u_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          tmp$ret$0 = item.o2h_1 === onChanged;
          if (tmp$ret$0) {
            tmp$ret$1 = item;
            break $l$block;
          }
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      var tmp0_this = $this;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      var tmp1_plusAssign = tmp0_this.f2i_1;
      tmp1_plusAssign.h1r(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.o2h_1 = onChanged;
    this.p2h_1 = null;
    this.q2h_1 = null;
    this.r2h_1 = -1;
    this.s2h_1 = new IdentityScopeMap();
    this.t2h_1 = new IdentityArrayMap();
    this.u2h_1 = new IdentityArraySet();
    var tmp = this;
    tmp.v2h_1 = SnapshotStateObserver$ObservedScopeMap$derivedStateEnterObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.w2h_1 = SnapshotStateObserver$ObservedScopeMap$derivedStateExitObserver$lambda(this);
    this.x2h_1 = 0;
    this.y2h_1 = new IdentityScopeMap();
    this.z2h_1 = HashMap_init_$Create$();
  }
  protoOf(ObservedScopeMap).x1s = function (value) {
    if (this.x2h_1 > 0) {
      return Unit_getInstance();
    }
    var scope = ensureNotNull(this.p2h_1);
    var tmp0_elvis_lhs = this.q2h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.q2h_1 = tmp0_also;
      this.t2h_1.k1s(scope, tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    var previousValue = recordedValues.d1w(value, this.r2h_1);
    var tmp_0;
    if (isInterface(value, DerivedState)) {
      tmp_0 = !(previousValue === this.r2h_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var dependencies = value.w1s();
      var indexedObject = dependencies;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$loop: while (inductionVariable < last) {
        var dependency = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (dependency == null)
          break $l$loop;
        this.y2h_1.v1r(dependency, value);
      }
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.z2h_1;
      var tmp2_set = value;
      var tmp3_set = value.f1u();
      tmp1_set.h4(tmp2_set, tmp3_set);
    }
    if (previousValue === -1) {
      this.s2h_1.v1r(value, scope);
    }
  };
  protoOf(ObservedScopeMap).m2i = function (scope) {
    var tmp0_elvis_lhs = this.t2h_1.c1w(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
    var inductionVariable = 0;
    var last = recordedValues.z1v_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
        var tmp_0 = recordedValues.a1w_1[i];
        var tmp0__anonymous__q1qw7t = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        var tmp1__anonymous__uwfjfc = recordedValues.b1w_1[i];
        removeObservation(this, scope, tmp0__anonymous__q1qw7t);
      }
       while (inductionVariable < last);
  };
  protoOf(ObservedScopeMap).n2i = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.removeIf' call
    var tmp0_removeIf = this.t2h_1;
    var current = 0;
    var inductionVariable = 0;
    var last = tmp0_removeIf.m1n_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = tmp0_removeIf.k1n_1[index];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_0 = tmp0_removeIf.l1n_1[index];
        var value = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = predicate(key);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
        if (tmp0_also) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = value.z1v_1;
          if (inductionVariable_0 < last_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_1 = value.a1w_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_1) ? tmp_1 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = value.b1w_1[i];
              removeObservation(this, key, tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable_0 < last_0);
        }
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        if (!tmp$ret$1) {
          if (!(current === index)) {
            tmp0_removeIf.k1n_1[current] = key;
            tmp0_removeIf.l1n_1[current] = tmp0_removeIf.l1n_1[index];
          }
          var tmp1 = current;
          current = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (tmp0_removeIf.m1n_1 > current) {
      var inductionVariable_1 = current;
      var last_1 = tmp0_removeIf.m1n_1;
      if (inductionVariable_1 < last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          tmp0_removeIf.k1n_1[index_0] = null;
          tmp0_removeIf.l1n_1[index_0] = null;
        }
         while (inductionVariable_1 < last_1);
      tmp0_removeIf.m1n_1 = current;
    }
  };
  protoOf(ObservedScopeMap).l3 = function () {
    this.s2h_1.l3();
    this.t2h_1.l3();
    this.y2h_1.l3();
    this.z2h_1.l3();
  };
  protoOf(ObservedScopeMap).l2i = function (changes) {
    var hasValues = false;
    var tmp0_iterator = changes.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.y2h_1.t1r(value)) {
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = this.y2h_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.g1m_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.g(i);
              if (isInterface(tmp2__anonymous__z9zvc9, DerivedState))
                tmp2__anonymous__z9zvc9;
              else
                THROW_CCE();
              var previousValue = this.z2h_1.q2(tmp2__anonymous__z9zvc9);
              var tmp0_elvis_lhs = tmp2__anonymous__z9zvc9.g1u();
              var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
              if (!policy.k1v(tmp2__anonymous__z9zvc9.f1u(), previousValue)) {
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                var tmp1_forEachScopeOf_0 = this.s2h_1;
                var index_0 = find_2(tmp1_forEachScopeOf_0, tmp2__anonymous__z9zvc9);
                if (index_0 >= 0) {
                  // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                  var tmp0_fastForEach_0 = scopeSetAt(tmp1_forEachScopeOf_0, index_0);
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_0 = 0;
                  var last_0 = tmp0_fastForEach_0.g1m_1;
                  if (inductionVariable_0 < last_0)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                      var tmp2__anonymous__z9zvc9_0 = tmp0_fastForEach_0.g(i_0);
                      this.u2h_1.h1r(tmp2__anonymous__z9zvc9_0);
                      hasValues = true;
                    }
                     while (inductionVariable_0 < last_0);
                }
              }
            }
             while (inductionVariable < last);
        }
      }
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
      var tmp4_forEachScopeOf = this.s2h_1;
      var index_1 = find_2(tmp4_forEachScopeOf, value);
      if (index_1 >= 0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
        var tmp3_fastForEach = scopeSetAt(tmp4_forEachScopeOf, index_1);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp3_fastForEach.g1m_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
            var tmp5__anonymous__kpxxpo = tmp3_fastForEach.g(i_1);
            this.u2h_1.h1r(tmp5__anonymous__kpxxpo);
            hasValues = true;
          }
           while (inductionVariable_1 < last_1);
      }
    }
    return hasValues;
  };
  protoOf(ObservedScopeMap).o2i = function () {
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    var tmp0_fastForEach = this.u2h_1;
    var tmp1_fastForEach = this.o2h_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.g1m_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp1_fastForEach(tmp0_fastForEach.g(i));
      }
       while (inductionVariable < last);
    this.u2h_1.l3();
  };
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      addChanges(this$0, applied);
      var tmp;
      if (drainChanges(this$0)) {
        sendNotifications(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$sendNotifications$lambda(this$0) {
    return function () {
      $l$loop: while (true) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.g2i_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp;
        if (!this$0.c2i_1) {
          this$0.c2i_1 = true;
          var tmp_0;
          try {
            var tmp0_forEach = this$0.f2i_1;
            // Inline function 'kotlin.contracts.contract' call
            var size = tmp0_forEach.m1u_1;
            var tmp_1;
            if (size > 0) {
              var i = 0;
              var tmp_2 = tmp0_forEach.k1u_1;
              var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              do {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.sendNotifications.<anonymous>.<anonymous>.<anonymous>' call
                var tmp1__anonymous__uwfjfc = content[i];
                tmp1__anonymous__uwfjfc.o2i();
                var tmp0 = i;
                i = tmp0 + 1 | 0;
              }
               while (i < size);
              tmp_1 = Unit_getInstance();
            }
            tmp_0 = tmp_1;
          }finally {
            this$0.c2i_1 = false;
          }
          tmp = tmp_0;
        }
        tmp$ret$0 = tmp;
        tmp$ret$1 = tmp$ret$0;
        if (!drainChanges(this$0))
          break $l$loop;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.i2i_1) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.g2i_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        ensureNotNull(this$0.j2i_1).x1s(state);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$observeReads$lambda(this$0, $block) {
    return function () {
      Companion_getInstance_10().j1v(this$0.e2i_1, null, $block);
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.a2i_1 = onChangedExecutor;
    this.b2i_1 = new AtomicReference(null);
    this.c2i_1 = false;
    var tmp = this;
    tmp.d2i_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.e2i_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
    tmp$ret$2 = tmp$ret$1;
    tmp_1.f2i_1 = tmp$ret$2;
    this.g2i_1 = createSynchronizedObject();
    this.h2i_1 = null;
    this.i2i_1 = false;
    this.j2i_1 = null;
    this.k2i_1 = 8;
  }
  protoOf(SnapshotStateObserver).p2i = function (scope, onValueChangedForScope, block) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g2i_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    tmp$ret$0 = ensureMap(this, onValueChangedForScope);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var scopeMap = tmp$ret$2;
    var oldPaused = this.i2i_1;
    var oldMap = this.j2i_1;
    try {
      this.i2i_1 = false;
      this.j2i_1 = scopeMap;
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe' call
      var previousScope = scopeMap.p2h_1;
      var previousReads = scopeMap.q2h_1;
      var previousToken = scopeMap.r2h_1;
      scopeMap.p2h_1 = scope;
      scopeMap.q2h_1 = scopeMap.t2h_1.o1t(scope);
      if (scopeMap.r2h_1 === -1) {
        scopeMap.r2h_1 = currentSnapshot().j1n();
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
      observeDerivedStateRecalculations(scopeMap.v2h_1, scopeMap.w2h_1, SnapshotStateObserver$observeReads$lambda(this, block));
      clearObsoleteStateReads(scopeMap, ensureNotNull(scopeMap.p2h_1));
      scopeMap.p2h_1 = previousScope;
      scopeMap.q2h_1 = previousReads;
      scopeMap.r2h_1 = previousToken;
    }finally {
      this.j2i_1 = oldMap;
      this.i2i_1 = oldPaused;
    }
  };
  protoOf(SnapshotStateObserver).q2i = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g2i_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.f2i_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.m1u_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.k1u_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        var tmp1__anonymous__uwfjfc = content[i];
        tmp1__anonymous__uwfjfc.m2i(scope);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(SnapshotStateObserver).r2i = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g2i_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.f2i_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.m1u_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.k1u_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        var tmp1__anonymous__uwfjfc = content[i];
        tmp1__anonymous__uwfjfc.n2i(predicate);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  protoOf(SnapshotStateObserver).aj = function () {
    this.h2i_1 = Companion_getInstance_10().c20(this.d2i_1);
  };
  protoOf(SnapshotStateObserver).bj = function () {
    var tmp0_safe_receiver = this.h2i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wp();
    }
  };
  protoOf(SnapshotStateObserver).l3 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.g2i_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.f2i_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.m1u_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.k1u_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        var tmp1__anonymous__uwfjfc = content[i];
        tmp1__anonymous__uwfjfc.l3();
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (properties_initialized_InspectionTables_kt_tgdbmt) {
    } else {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.l1r_1 = value;
    this.m1r_1 = 8;
  }
  protoOf(AtomicReference).pt = function () {
    return this.l1r_1;
  };
  protoOf(AtomicReference).h1s = function (value) {
    this.l1r_1 = value;
  };
  protoOf(AtomicReference).n1r = function (value) {
    var oldValue = this.l1r_1;
    this.l1r_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).s1s = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.l1r_1)) {
      this.l1r_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = instance;
    var hashCode = tmp$ret$0['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp0_subject = typeof instance;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.f5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2j_1 = _this__u8e3s4;
    this.b2j_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var safe = SafeContinuation_init_$Create$(intercepted(tmp0__anonymous__q1qw7t));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.b2j_1, safe));
            ;
            suspendResult = returnIfSuspended(safe.bc(), this);
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).q1c = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function createSnapshotMutableState(value, policy) {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new SnapshotMutableStateImpl(value, policy);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (properties_initialized_ActualJs_js_kt_azbr3k) {
    } else {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  protoOf(Trace).d1n = function (name) {
    return null;
  };
  protoOf(Trace).p1n = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_unsafeCast = tmp$ret$1(composer, 1);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function invokeComposable$composable(composer, composable) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$1(composer, 1);
  }
  function trackWrite($this) {
    if ($this.b29_1) {
      var scope = $this.d29_1;
      if (!(scope == null)) {
        scope.f1t();
        $this.d29_1 = null;
      }
      var scopes = $this.e29_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.g(index);
            item.f1t();
          }
           while (inductionVariable < last);
        scopes.l3();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.b29_1) {
      var scope = composer.n1q();
      if (!(scope == null)) {
        composer.q1q(scope);
        var lastScope = $this.d29_1;
        if (replacableWith(lastScope, scope)) {
          $this.d29_1 = scope;
        } else {
          var lastScopes = $this.e29_1;
          if (lastScopes == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$0 = ArrayList_init_$Create$();
            var newScopes = tmp$ret$0;
            $this.e29_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.f();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.g(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.p(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.h1o(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.x1v($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.c2j($p1, $p2, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_1(this$0, $p1, $p2, $p3, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.d2j($p1, $p2, $p3, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.a29_1 = key;
    this.b29_1 = tracked;
    this.c29_1 = null;
    this.d29_1 = null;
    this.e29_1 = null;
  }
  protoOf(ComposableLambdaImpl).f29 = function (block) {
    if (!equals(this.c29_1, block)) {
      var oldBlockNull = this.c29_1 == null;
      this.c29_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).h1o = function (c, changed) {
    var c_0 = c.a1q(this.a29_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.x1h(this) ? differentBits(0) : sameBits(0));
    var tmp = this.c29_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.b1q();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1t(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).x1v = function (p1, c, changed) {
    var c_0 = c.a1q(this.a29_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.x1h(this) ? differentBits(1) : sameBits(1));
    var tmp = this.c29_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.b1q();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1t(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).c2j = function (p1, p2, c, changed) {
    var c_0 = c.a1q(this.a29_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.x1h(this) ? differentBits(2) : sameBits(2));
    var tmp = this.c29_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.b1q();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1t(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).d2j = function (p1, p2, p3, c, changed) {
    var c_0 = c.a1q(this.a29_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.x1h(this) ? differentBits(3) : sameBits(3));
    var tmp = this.c29_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, p3, c_0, dirty);
    var tmp0_safe_receiver = c_0.b1q();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1t(ComposableLambdaImpl$invoke$lambda_1(this, p1, p2, p3, changed));
    }
    return result;
  };
  function IntMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.q1i_1 = tmp$ret$0;
  }
  protoOf(IntMap).g = function (key) {
    return this.q1i_1.q2(key);
  };
  protoOf(IntMap).q1l = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.q1i_1;
    tmp0_set.h4(key, value);
  };
  protoOf(IntMap).l3 = function () {
    this.q1i_1.l3();
  };
  //region block: post-declaration
  protoOf(OffsetApplier).n1b = onBeginChanges;
  protoOf(OffsetApplier).o1b = onEndChanges;
  protoOf(AbstractApplier).n1b = onBeginChanges;
  protoOf(AbstractApplier).o1b = onEndChanges;
  protoOf(BroadcastFrameClock).z1 = get_key;
  protoOf(BroadcastFrameClock).x5 = get;
  protoOf(BroadcastFrameClock).d6 = fold;
  protoOf(BroadcastFrameClock).c6 = minusKey;
  protoOf(BroadcastFrameClock).e6 = plus;
  protoOf(DerivedSnapshotState).n1v = mergeRecords;
  protoOf(StructuralEqualityPolicy).w21 = merge;
  protoOf(NeverEqualPolicy).w21 = merge;
  protoOf(ReferentialEqualityPolicy).w21 = merge;
  protoOf(SnapshotStateList).n1v = mergeRecords;
  protoOf(SnapshotStateMap).n1v = mergeRecords;
  protoOf(MonotonicClockImpl).z1 = get_key;
  protoOf(MonotonicClockImpl).x5 = get;
  protoOf(MonotonicClockImpl).d6 = fold;
  protoOf(MonotonicClockImpl).c6 = minusKey;
  protoOf(MonotonicClockImpl).e6 = plus;
  //endregion
  //region block: init
  reuseKey = 207;
  movableContentKey = 126665345;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateList;
  _.$_$.f = SnapshotStateObserver;
  _.$_$.g = $get_currentCompositeKeyHash$$composable_u3vbzj;
  _.$_$.h = AbstractApplier;
  _.$_$.i = onBeginChanges;
  _.$_$.j = onEndChanges;
  _.$_$.k = Applier;
  _.$_$.l = AtomicReference;
  _.$_$.m = BroadcastFrameClock;
  _.$_$.n = ComposeNodeLifecycleCallback;
  _.$_$.o = CompositionLocalProvider$composable;
  _.$_$.p = CompositionLocalProvider$composable_0;
  _.$_$.q = CompositionScopedCoroutineScopeCanceller;
  _.$_$.r = Composition;
  _.$_$.s = DisposableEffect$composable_0;
  _.$_$.t = DisposableEffect$composable_1;
  _.$_$.u = DisposableEffect$composable;
  _.$_$.v = LaunchedEffect$composable_2;
  _.$_$.w = LaunchedEffect$composable;
  _.$_$.x = LaunchedEffect$composable_0;
  _.$_$.y = LaunchedEffect$composable_1;
  _.$_$.z = Recomposer;
  _.$_$.a1 = RememberObserver;
  _.$_$.b1 = SideEffect$composable;
  _.$_$.c1 = SkippableUpdater;
  _.$_$.d1 = compositionLocalOf;
  _.$_$.e1 = createCompositionCoroutineScope;
  _.$_$.f1 = derivedStateOf;
  _.$_$.g1 = invalidApplier;
  _.$_$.h1 = isTraceInProgress;
  _.$_$.i1 = movableContentOf$composable;
  _.$_$.j1 = mutableStateListOf;
  _.$_$.k1 = mutableStateMapOf;
  _.$_$.l1 = mutableStateOf;
  _.$_$.m1 = neverEqualPolicy;
  _.$_$.n1 = referentialEqualityPolicy;
  _.$_$.o1 = rememberCompositionContext$composable;
  _.$_$.p1 = rememberUpdatedState$composable;
  _.$_$.q1 = get_reuseKey;
  _.$_$.r1 = snapshotFlow;
  _.$_$.s1 = sourceInformationMarkerEnd;
  _.$_$.t1 = sourceInformationMarkerStart;
  _.$_$.u1 = sourceInformation;
  _.$_$.v1 = staticCompositionLocalOf;
  _.$_$.w1 = structuralEqualityPolicy;
  _.$_$.x1 = traceEventEnd;
  _.$_$.y1 = traceEventStart;
  _.$_$.z1 = updateChangedFlags;
  _.$_$.a2 = withFrameNanos;
  _.$_$.b2 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.c2 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.d2 = _Updater___init__impl__rbfxm8;
  _.$_$.e2 = Updater__set_impl_v7kwss;
  _.$_$.f2 = Companion_getInstance_10;
  _.$_$.g2 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime.js.map
