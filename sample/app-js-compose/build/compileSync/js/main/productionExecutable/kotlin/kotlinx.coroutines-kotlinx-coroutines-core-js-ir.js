(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r8;
  var THROW_CCE = kotlin_kotlin.$_$.jb;
  var isObject = kotlin_kotlin.$_$.i8;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var plus = kotlin_kotlin.$_$.e7;
  var get = kotlin_kotlin.$_$.b7;
  var fold = kotlin_kotlin.$_$.a7;
  var minusKey = kotlin_kotlin.$_$.c7;
  var Continuation = kotlin_kotlin.$_$.z6;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.mc;
  var setMetadataFor = kotlin_kotlin.$_$.s8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.n2;
  var Key_getInstance = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.u7;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.s6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.t6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r6;
  var interfaceMeta = kotlin_kotlin.$_$.e8;
  var isInterface = kotlin_kotlin.$_$.h8;
  var toString = kotlin_kotlin.$_$.ic;
  var toString_0 = kotlin_kotlin.$_$.v8;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.q8;
  var hashCode = kotlin_kotlin.$_$.c8;
  var CoroutineImpl = kotlin_kotlin.$_$.f7;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.w;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.e2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d2;
  var createFailure = kotlin_kotlin.$_$.pb;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.v6;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.u6;
  var get_0 = kotlin_kotlin.$_$.w6;
  var minusKey_0 = kotlin_kotlin.$_$.x6;
  var ContinuationInterceptor = kotlin_kotlin.$_$.y6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Enum = kotlin_kotlin.$_$.ya;
  var startCoroutine = kotlin_kotlin.$_$.h7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yb;
  var Long = kotlin_kotlin.$_$.db;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var RuntimeException = kotlin_kotlin.$_$.ib;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var Error_0 = kotlin_kotlin.$_$.za;
  var Error_init_$Init$ = kotlin_kotlin.$_$.g1;
  var Element = kotlin_kotlin.$_$.d7;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ec;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var CancellationException = kotlin_kotlin.$_$.q6;
  var ArrayList = kotlin_kotlin.$_$.f3;
  var SequenceScope = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var sequence = kotlin_kotlin.$_$.ba;
  var anyToString = kotlin_kotlin.$_$.j7;
  var UnsupportedOperationException = kotlin_kotlin.$_$.mb;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.v;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var fill = kotlin_kotlin.$_$.j4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ensureNotNull = kotlin_kotlin.$_$.qb;
  var NoSuchElementException = kotlin_kotlin.$_$.eb;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var IllegalStateException = kotlin_kotlin.$_$.cb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var toLong = kotlin_kotlin.$_$.t8;
  var arrayIterator = kotlin_kotlin.$_$.k7;
  var copyOf = kotlin_kotlin.$_$.b4;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var arrayCopy = kotlin_kotlin.$_$.p3;
  var toLongOrNull = kotlin_kotlin.$_$.pa;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.x;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var coerceIn = kotlin_kotlin.$_$.n9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.eo(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.eo.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.zn(onCancelling, invokeImmediately, handler) : $super.zn.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.kp(value, idempotent) : $super.kp.call(this, value, idempotent);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.pp(cause) : $super.pp.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor($awaitCOROUTINE$2, '$awaitCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().us(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$3, '$withTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_3, 'Key', objectMeta);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta);
  setMetadataFor($collectCOROUTINE$9, '$collectCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, VOID, VOID, [0]);
  setMetadataFor($onSubscriptionCOROUTINE$17, '$onSubscriptionCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1, 0]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(Empty_0, 'Empty', classMeta);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.k18(owner, $completion) : $super.k18.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.m18(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.m18.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(LockedQueue, 'LockedQueue', classMeta, LinkedListHead);
  setMetadataFor(LockWaiter, 'LockWaiter', classMeta, LinkedListNode);
  setMetadataFor(LockCont, 'LockCont', classMeta, LockWaiter);
  setMetadataFor(UnlockOp, 'UnlockOp', classMeta, AtomicOp);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, VOID, [Mutex], VOID, VOID, [1]);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.vm(parentContext.x5(Key_getInstance_3()));
    }
    this.ym_1 = parentContext.e6(this);
  }
  protoOf(AbstractCoroutine).h5 = function () {
    return this.ym_1;
  };
  protoOf(AbstractCoroutine).zm = function () {
    return this.ym_1;
  };
  protoOf(AbstractCoroutine).an = function () {
    return protoOf(JobSupport).an.call(this);
  };
  protoOf(AbstractCoroutine).bn = function (value) {
  };
  protoOf(AbstractCoroutine).cn = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).dn = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).en = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.cn(state.fn_1, state.hn());
    } else {
      this.bn((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).f5 = function (result) {
    var state = this.in(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.jn(state);
  };
  protoOf(AbstractCoroutine).jn = function (state) {
    return this.kn(state);
  };
  protoOf(AbstractCoroutine).ln = function (exception) {
    handleCoroutineException(this.ym_1, exception);
  };
  protoOf(AbstractCoroutine).mn = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ym_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).mn.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).mn.call(this);
  };
  protoOf(AbstractCoroutine).nn = function (start, receiver, block) {
    start.qn(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.ro() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.nn(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      var oldContext = tmp0__anonymous__q1qw7t.h5();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, tmp0__anonymous__q1qw7t);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.x5(Key_getInstance()), oldContext.x5(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, tmp0__anonymous__q1qw7t);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.xo();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).po = function (exception) {
    handleCoroutineException(this.ym_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.ep_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).gg = function () {
    startCoroutineCancellable_0(this.ep_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.wo_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.wo_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.wo_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.wo_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.wo_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).kn = function (state) {
    this.jn(state);
  };
  protoOf(DispatchedCoroutine).jn = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.ip_1), recoverResult(state, this.ip_1));
  };
  protoOf(DispatchedCoroutine).xo = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.sg());
    if (state instanceof CompletedExceptionally)
      throw state.fn_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.rp(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.up_1 = handle;
  }
  protoOf(DisposeOnCancel).vp = function (cause) {
    return this.up_1.wp();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.up_1 + ']';
  };
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.rp(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.dq();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.kq();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.lq_1 = node;
  }
  protoOf(RemoveOnCancel).vp = function (cause) {
    this.lq_1.pq();
  };
  protoOf(RemoveOnCancel).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(RemoveOnCancel).toString = function () {
    return 'RemoveOnCancel[' + this.lq_1 + ']';
  };
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.sg();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.rq_1)) {
      var tmp_0 = $this.fq_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).qq();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.fq_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.sq(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.h5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.hq_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.hq_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.h5().x5(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.ao(true, VOID, tmp$ret$1);
    $this.jq_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.fq_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tq($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.uq();
    $this.pp(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.iq_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.zq()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.vq(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.fn_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.iq_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.rq_1, onCancellation, idempotent);
          if (!$this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.dr_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.uq();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.fq_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.gq_1 = this.fq_1.h5();
    this.hq_1 = atomic$int$1(0);
    this.iq_1 = atomic$ref$1(Active_getInstance());
    this.jq_1 = null;
  }
  protoOf(CancellableContinuationImpl).fr = function () {
    return this.fq_1;
  };
  protoOf(CancellableContinuationImpl).h5 = function () {
    return this.gq_1;
  };
  protoOf(CancellableContinuationImpl).sg = function () {
    return this.iq_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).tn = function () {
    var tmp = this.sg();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).gr = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.tn()) {
      handle.wp();
      this.jq_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).kq = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.iq_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.dr_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.uq();
      return false;
    }
    this.hq_1.kotlinx$atomicfu$value = 0;
    this.iq_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  protoOf(CancellableContinuationImpl).hr = function () {
    return this.sg();
  };
  protoOf(CancellableContinuationImpl).ir = function (takenState, cause) {
    var tmp0_loop = this.iq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.jr();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.kr(VOID, VOID, VOID, VOID, cause);
            if (this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.lr(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new CompletedContinuation(tmp1__anonymous__uwfjfc, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).pp = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.iq_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.mr(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.rq_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).nr = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.pp(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).mr = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.h5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).vq = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.h5(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).or = function (parent) {
    return parent.vn();
  };
  protoOf(CancellableContinuationImpl).xo = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.jq_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.sg();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.fn_1, this);
    if (get_isCancellableMode(this.rq_1)) {
      var job = this.h5().x5(Key_getInstance_3());
      if (!(job == null) ? !job.an() : false) {
        var cause = job.vn();
        this.ir(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.pr(state);
  };
  protoOf(CancellableContinuationImpl).f5 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.rq_1);
  };
  protoOf(CancellableContinuationImpl).tp = function (value, onCancellation) {
    return resumeImpl(this, value, this.rq_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).rp = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.iq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.qr()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fn_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.br_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.jr()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.er_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.kr(VOID, cancelHandler);
              if (this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1__anonymous__uwfjfc, cancelHandler);
              if (this.iq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).uq = function () {
    var tmp0_elvis_lhs = this.jq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.wp();
    this.jq_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).kp = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).mp = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).np = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).op = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.rq_1);
  };
  protoOf(CancellableContinuationImpl).sp = function (_this__u8e3s4, value) {
    var tmp = this.fq_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yp_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.rq_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).pr = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.ar_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).rr = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).rr.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.fq_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.mn() + '(' + toDebugString(this.fq_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).mn = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.ar_1 = result;
    this.br_1 = cancelHandler;
    this.cr_1 = onCancellation;
    this.dr_1 = idempotentResume;
    this.er_1 = cancelCause;
  }
  protoOf(CompletedContinuation).jr = function () {
    return !(this.er_1 == null);
  };
  protoOf(CompletedContinuation).lr = function (cont, cause) {
    var tmp0_safe_receiver = this.br_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.mr(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.cr_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.vq(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  protoOf(CompletedContinuation).ur = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).kr = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.ar_1 : result;
    cancelHandler = cancelHandler === VOID ? this.br_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.cr_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.dr_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.er_1 : cancelCause;
    return $super === VOID ? this.ur(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.ur.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.ar_1) + ', cancelHandler=' + this.br_1 + ', onCancellation=' + this.cr_1 + ', idempotentResume=' + toString(this.dr_1) + ', cancelCause=' + this.er_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.ar_1 == null ? 0 : hashCode(this.ar_1);
    result = imul(result, 31) + (this.br_1 == null ? 0 : hashCode(this.br_1)) | 0;
    result = imul(result, 31) + (this.cr_1 == null ? 0 : hashCode(this.cr_1)) | 0;
    result = imul(result, 31) + (this.dr_1 == null ? 0 : hashCode(this.dr_1)) | 0;
    result = imul(result, 31) + (this.er_1 == null ? 0 : hashCode(this.er_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.ar_1, tmp0_other_with_cast.ar_1))
      return false;
    if (!equals(this.br_1, tmp0_other_with_cast.br_1))
      return false;
    if (!equals(this.cr_1, tmp0_other_with_cast.cr_1))
      return false;
    if (!equals(this.dr_1, tmp0_other_with_cast.dr_1))
      return false;
    if (!equals(this.er_1, tmp0_other_with_cast.er_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.vr_1 = handler;
  }
  protoOf(InvokeOnCancel).vp = function (cause) {
    this.vr_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.vr_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.es_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 2;
            this.jf_1 = 1;
            suspendResult = this.es_1.fs(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.vm(parent);
  }
  protoOf(CompletableDeferredImpl).do = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).is = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(CompletableDeferredImpl).js = function (value) {
    return this.ks(value);
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.fn_1 = cause;
    this.gn_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).hn = function () {
    return this.gn_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).qr = function () {
    return this.gn_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.fn_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.yq_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).zq = function () {
    return this.yq_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(recoverStackTrace(exception, caller));
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = new CompletedExceptionally(exception);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.ls_1 = result;
    this.ms_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.ls_1) + ', onCancellation=' + this.ms_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.ls_1 == null ? 0 : hashCode(this.ls_1);
    result = imul(result, 31) + hashCode(this.ms_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.ls_1, tmp0_other_with_cast.ls_1))
      return false;
    if (!equals(this.ms_1, tmp0_other_with_cast.ms_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.fn_1, uCont);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp2_success = Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp3_success);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).os = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).qs = function (context, block) {
    return this.ps(context, block);
  };
  protoOf(CoroutineDispatcher).v5 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).w5 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.rs();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.x5(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.ss(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.x5(Key_getInstance_3()) == null) ? context : context.e6(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var coroutine = new ScopeCoroutine(tmp0__anonymous__q1qw7t.h5(), tmp0__anonymous__q1qw7t);
    tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.zm().x5(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.eo(cause);
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  protoOf(GlobalScope).zm = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.zm().x5(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.an();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).qn = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).ro = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.u(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.u(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.h5()).ts(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.xo();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.x5(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.ws_1 = new Long(0, 0);
    this.xs_1 = false;
    this.ys_1 = null;
  }
  protoOf(EventLoop).zs = function () {
    var tmp0_elvis_lhs = this.ys_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.dt();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.sr();
    return true;
  };
  protoOf(EventLoop).et = function (task) {
    var tmp0_elvis_lhs = this.ys_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.ys_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ft(task);
  };
  protoOf(EventLoop).gt = function () {
    return this.ws_1.u(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).ht = function () {
    var tmp0_safe_receiver = this.ys_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.it();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).jt = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.ws_1 = tmp0_this.ws_1.r7(delta(this, unconfined));
    if (!unconfined)
      this.xs_1 = true;
  };
  protoOf(EventLoop).kt = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.ws_1 = tmp0_this.ws_1.s7(delta(this, unconfined));
    if (this.ws_1.u(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.xs_1) {
      this.lt();
    }
  };
  protoOf(EventLoop).lt = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.mt_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).nt = function () {
    var tmp0_elvis_lhs = this.mt_1.pt();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().mt_1.qt(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).jp = function () {
    return null;
  };
  protoOf(NonDisposableHandle).wp = function () {
  };
  protoOf(NonDisposableHandle).io = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x5(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.an())
      throw _this__u8e3s4.vn();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.x5(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.fo();
    var tmp0 = _this__u8e3s4.bo($completion);
    return tmp0;
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.x5(Key_getInstance_3());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.an()) === true;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCompletion(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.yn(tmp$ret$1);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.eo(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.rt_1 = isActive;
  }
  protoOf(Empty).an = function () {
    return this.rt_1;
  };
  protoOf(Empty).st = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.rt_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).an = function () {
    return true;
  };
  protoOf(NodeList).st = function () {
    return this;
  };
  protoOf(NodeList).wt = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.hd('List{');
    tmp0_apply.hd(state);
    tmp0_apply.hd('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.mq_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.hd(', ');
        }
        tmp0_apply.gd(tmp0__anonymous__q1qw7t);
      }
      cur = cur.mq_1;
    }
    tmp0_apply.hd(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.wt('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).hu = function () {
    var tmp = this.gu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).an = function () {
    return true;
  };
  protoOf(JobNode).st = function () {
    return null;
  };
  protoOf(JobNode).wp = function () {
    return this.hu().co(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.hu()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.mu_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.mu_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fn_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.nu();
    var exceptions = state.ou(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.po(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).qr();
      }
    }
    if (!wasCancelling) {
      $this.mo(finalException);
    }
    $this.en(finalState);
    var casSuccess = $this.tm_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.l()) {
      if (state.nu()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.dn() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.g(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.tm_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.mo(null);
    $this.en(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.sn();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.wp();
      $this.rn(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fn_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.ln(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.st();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.mo(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.mq_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.mq_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ln(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.no())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.sn();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.io(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.mq_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, ex);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.mq_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ln(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.rt_1)
        return 0;
      if (!$this.tm_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.gg();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.tm_1.atomicfu$compareAndSet(state, state.pu_1))
          return -1;
        $this.gg();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.gu_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.sg() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.au(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.rt_1 ? list : new InactiveNodeList(list);
    $this.tm_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.iu(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.mq_1;
    var list = tmp$ret$0;
    $this.tm_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.sg();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.yn(tmp$ret$1));
    tmp$ret$2 = cancellable.xo();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.sg();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.qu();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.dn() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ko();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.sg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.ru())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.nu();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.su(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.tu();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.ju_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.an()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.st();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.tm_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.qu())
      return get_COMPLETING_ALREADY();
    finishing.uu(true);
    if (!(finishing === state)) {
      if (!$this.tm_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.nu();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.su(tmp0_safe_receiver.fn_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.tu();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fn_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.st();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.zu_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.ao(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.kn(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.oq_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.nq_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.mq_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.oq_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.nu() ? 'Cancelling' : state.qu() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.an() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.ju_1 = list;
    this.ku_1 = atomic$boolean$1(isCompleting);
    this.lu_1 = atomic$ref$1(rootCause);
    this.mu_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).st = function () {
    return this.ju_1;
  };
  protoOf(Finishing).uu = function (value) {
    this.ku_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).qu = function () {
    return this.ku_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).av = function (value) {
    this.lu_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).tu = function () {
    return this.lu_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).ru = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).nu = function () {
    return !(this.tu() == null);
  };
  protoOf(Finishing).an = function () {
    return this.tu() == null;
  };
  protoOf(Finishing).ou = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.tu();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.h3(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).su = function (exception) {
    var rootCause = this.tu();
    if (rootCause == null) {
      this.av(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.nu() + ', completing=' + this.qu() + ', rootCause=' + this.tu() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.ju_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.fv_1 = parent;
    this.gv_1 = state;
    this.hv_1 = child;
    this.iv_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).vp = function (cause) {
    continueCompleting(this.fv_1, this.gv_1, this.hv_1, this.iv_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.vp(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.pv_1 = job;
  }
  protoOf(AwaitContinuation).or = function (parent) {
    var state = this.pv_1.sg();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.tu();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.fn_1;
    return parent.vn();
  };
  protoOf(AwaitContinuation).mn = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.gr();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.yn(tmp$ret$1));
    tmp$ret$2 = cont.xo();
    var tmp0 = tmp$ret$2;
    return tmp0;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.yv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).fw = function ($this$sequence, $completion) {
    var tmp = this.gw($this$sequence, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).eg = function (p1, $completion) {
    return this.fw(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 8;
            this.aw_1 = this.yv_1.sg();
            var tmp_0 = this.aw_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.jf_1 = 6;
              suspendResult = this.zv_1.a5(this.aw_1.zu_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.aw_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.bw_1 = this.aw_1.st();
                if (this.bw_1 == null) {
                  this.cw_1 = null;
                  this.jf_1 = 5;
                  continue $sm;
                } else {
                  this.dw_1 = this.bw_1.mq_1;
                  this.jf_1 = 1;
                  continue $sm;
                }
              } else {
                this.jf_1 = 7;
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.dw_1, this.bw_1)) {
              this.jf_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.dw_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.ew_1 = this.dw_1;
              this.jf_1 = 2;
              suspendResult = this.zv_1.a5(this.ew_1.zu_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.dw_1 = this.dw_1.mq_1;
            this.jf_1 = 1;
            continue $sm;
          case 4:
            this.cw_1 = Unit_getInstance();
            this.jf_1 = 5;
            continue $sm;
          case 5:
            ;
            this.jf_1 = 7;
            continue $sm;
          case 6:
            this.jf_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 8) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).gw = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.yv_1, completion);
    i.zv_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.fw($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.tm_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.um_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).z1 = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).rn = function (value) {
    this.um_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).sn = function () {
    return this.um_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).vm = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.rn(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.un();
    var handle = parent.lo(this);
    this.rn(handle);
    if (this.tn()) {
      handle.wp();
      this.rn(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).sg = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.hw(this);
    }
  };
  protoOf(JobSupport).an = function () {
    var state = this.sg();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.an();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).tn = function () {
    var tmp = this.sg();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).un = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.sg();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).gg = function () {
  };
  protoOf(JobSupport).vn = function () {
    var state = this.sg();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.tu();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.wn(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.xn(state.fn_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).wn = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.dn() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).xn = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.wn(_this__u8e3s4, message) : $super.wn.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).yn = function (handler) {
    return this.zn(false, true, handler);
  };
  protoOf(JobSupport).zn = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.sg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.rt_1) {
            if (this.tm_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.st();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.tu();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.qu();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fn_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).bo = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.h5();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    var tmp0 = joinSuspend(this, $completion);
    return tmp0;
  };
  protoOf(JobSupport).co = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.sg();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.tm_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.st() == null)) {
            node.pq();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).do = function () {
    return false;
  };
  protoOf(JobSupport).eo = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.dn() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.go(tmp);
  };
  protoOf(JobSupport).dn = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).go = function (cause) {
    this.jo(cause);
  };
  protoOf(JobSupport).ho = function (parentJob) {
    this.jo(parentJob);
  };
  protoOf(JobSupport).io = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.jo(cause) ? this.oo() : false;
  };
  protoOf(JobSupport).iw = function (cause) {
    return this.jo(cause);
  };
  protoOf(JobSupport).jo = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.do()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.kn(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ko = function () {
    var state = this.sg();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.tu();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.fn_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).ks = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.sg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.kn(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).in = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.sg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).jk = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).lo = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.ao(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).ln = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).mo = function (cause) {
  };
  protoOf(JobSupport).no = function () {
    return false;
  };
  protoOf(JobSupport).oo = function () {
    return true;
  };
  protoOf(JobSupport).po = function (exception) {
    return false;
  };
  protoOf(JobSupport).en = function (state) {
  };
  protoOf(JobSupport).kn = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.qo() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).qo = function () {
    return this.mn() + '{' + stateString(this, this.sg()) + '}';
  };
  protoOf(JobSupport).mn = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).fs = function ($completion) {
    $l$loop: while (true) {
      var state = this.sg();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.fn_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    var tmp0 = awaitSuspend(this, $completion);
    return tmp0;
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.pu_1 = list;
  }
  protoOf(InactiveNodeList).st = function () {
    return this.pu_1;
  };
  protoOf(InactiveNodeList).an = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.pu_1.wt('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.zu_1 = childJob;
  }
  protoOf(ChildHandleNode).jp = function () {
    return this.hu();
  };
  protoOf(ChildHandleNode).vp = function (cause) {
    return this.zu_1.ho(this.hu());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(ChildHandleNode).io = function (cause) {
    return this.hu().io(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.nw_1 = handler;
    this.ow_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).vp = function (cause) {
    if (this.ow_1.atomicfu$compareAndSet(0, 1))
      this.nw_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.vp(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.tw_1 = handler;
  }
  protoOf(InvokeOnCompletion).vp = function (cause) {
    return this.tw_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.vp(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.yw_1 = continuation;
  }
  protoOf(ResumeOnCompletion).vp = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp1_resume = this.yw_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp1_resume.f5(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.vp(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zw_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.ex_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).vp = function (cause) {
    var state = this.hu().sg();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp1_resumeWithException = this.ex_1;
      var tmp2_resumeWithException = state.fn_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
      tmp1_resumeWithException.f5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp4_resume = this.ex_1;
      var tmp = unboxState(state);
      var tmp5_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp3_success = Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp5_resume);
      tmp4_resume.f5(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.vp(cause);
  };
  function IncompleteStateBox(state) {
    this.zw_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.jx_1 = child;
  }
  protoOf(ChildContinuation).vp = function (cause) {
    this.jx_1.nr(this.jx_1.or(this.hu()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.vp(cause);
  };
  function handlesException($this) {
    var tmp = $this.sn();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hu();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.oo())
        return true;
      var tmp_1 = parentJob.sn();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hu();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.vm(parent);
    this.mx_1 = handlesException(this);
  }
  protoOf(JobImpl).do = function () {
    return true;
  };
  protoOf(JobImpl).oo = function () {
    return this.mx_1;
  };
  protoOf(JobImpl).nx = function (exception) {
    return this.ks(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.sx_1 = handle;
  }
  protoOf(DisposeOnCompletion).vp = function (cause) {
    return this.sx_1.wp();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.vp(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.vx();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).vx = function () {
    var main = Dispatchers_getInstance().ay();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.ux();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).io = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.ey_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  }
  function setupTimeout(coroutine, block) {
    var cont = coroutine.ip_1;
    var context = cont.h5();
    disposeOnCompletion(coroutine, get_delay(context).us(coroutine.uy_1, coroutine, coroutine.ym_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.h5(), uCont);
    this.uy_1 = time;
  }
  protoOf(TimeoutCoroutine).sr = function () {
    this.iw(TimeoutCancellationException_0(this.uy_1, this));
  };
  protoOf(TimeoutCoroutine).mn = function () {
    return protoOf(ScopeCoroutine).mn.call(this) + '(timeMillis=' + toString_0(this.uy_1) + ')';
  };
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ny_1 = timeMillis;
    this.oy_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$3).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 3;
            if (this.ny_1.u(new Long(0, 0)) <= 0)
              return null;
            this.py_1 = {_v: null};
            this.kf_1 = 2;
            this.jf_1 = 1;
            var tmp0__anonymous__q1qw7t = this;
            var timeoutCoroutine = new TimeoutCoroutine(this.ny_1, tmp0__anonymous__q1qw7t);
            this.py_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.oy_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.kf_1 = 3;
            var tmp_0 = this.mf_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.mf_1;
              if (e.ey_1 === this.py_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.mf_1;
            }

            break;
          case 3:
            throw this.mf_1;
          case 4:
            this.kf_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.kf_1 === 3) {
          throw e_0;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).os = function (context) {
    return false;
  };
  protoOf(Unconfined).ps = function (context, block) {
    var yieldContext = context.x5(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.xy_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.xy_1 = false;
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $completion;
      var context = tmp0__anonymous__q1qw7t.h5();
      ensureActive(context);
      var tmp = intercepted(tmp0__anonymous__q1qw7t);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.yp_1.os(context)) {
        cont.yy(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.yy(context.e6(yieldContext), Unit_getInstance());
        if (yieldContext.xy_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function get_EMPTY() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.cz_1 == null))
        throw recoverStackTrace_0(result.dz());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $completion) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.ez_1, receive)) {
          removeReceiveOnCancel($this.ez_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.ez_1.jz();
        $this.fz_1 = result;
        if (result instanceof Closed) {
          if (result.cz_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.f5(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp2_resumeWithException = result.dz();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp1_failure = Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
            cancellable.f5(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.ez_1.kz_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.h5());
          }
          cancellable.tp(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.xo();
    var tmp0 = tmp$ret$5;
    return tmp0;
  }
  function receiveSuspend($this, receiveMode, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.kz_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.kz_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.jz();
        if (result instanceof Closed) {
          receive.sz(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.tz((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.tp(tmp_0, receive.xz((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.xo();
    var tmp0 = tmp$ret$1;
    return tmp0;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.yz(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.zz();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.rp(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.b10_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.a10_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).vp = function (cause) {
    if (this.a10_1.pq()) {
      this.b10_1.c10();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.a10_1 + ']';
  };
  function Itr(channel) {
    this.ez_1 = channel;
    this.fz_1 = get_POLL_FAILED();
  }
  protoOf(Itr).d10 = function ($completion) {
    if (!(this.fz_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.fz_1);
    this.fz_1 = this.ez_1.jz();
    if (!(this.fz_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.fz_1);
    var tmp0 = hasNextSuspend(this, $completion);
    return tmp0;
  };
  protoOf(Itr).e = function () {
    var result = this.fz_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.dz());
    if (!(result === get_POLL_FAILED())) {
      this.fz_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.qz_1 = cont;
    this.rz_1 = receiveMode;
  }
  protoOf(ReceiveElement).tz = function (value) {
    var tmp0_subject = this.rz_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().f10(value)) : value;
  };
  protoOf(ReceiveElement).g10 = function (value, otherOp) {
    var tmp = this.tz(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.qz_1.mp(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i10_1, this.xz(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k10();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveElement).l10 = function (value) {
    return this.qz_1.op(get_RESUME_TOKEN());
  };
  protoOf(ReceiveElement).sz = function (closed) {
    if (this.rz_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = this.qz_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().m10(closed.cz_1);
      var tmp2_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp2_resume));
      tmp1_resume.f5(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp4_resumeWithException = this.qz_1;
      var tmp5_resumeWithException = closed.dz();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp3_failure = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp5_resumeWithException));
      tmp4_resumeWithException.f5(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  protoOf(ReceiveElement).toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.rz_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.t10_1 = onUndeliveredElement;
  }
  protoOf(ReceiveElementWithUndeliveredHandler).xz = function (value) {
    return bindCancellationFun(this.t10_1, value, this.qz_1.h5());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.x10_1 = iterator;
    this.y10_1 = cont;
  }
  protoOf(ReceiveHasNext).g10 = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.y10_1.mp(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i10_1, this.xz(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k10();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).l10 = function (value) {
    this.x10_1.fz_1 = value;
    this.y10_1.op(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).sz = function (closed) {
    var tmp;
    if (closed.cz_1 == null) {
      tmp = this.y10_1.lp(false);
    } else {
      tmp = this.y10_1.np(closed.dz());
    }
    var token = tmp;
    if (!(token == null)) {
      this.x10_1.fz_1 = closed;
      this.y10_1.op(token);
    }
  };
  protoOf(ReceiveHasNext).xz = function (value) {
    var tmp0_safe_receiver = this.x10_1.ez_1.kz_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.y10_1.h5());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).jz = function () {
    while (true) {
      var tmp0_elvis_lhs = this.b11();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.f11(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.g11();
        return send.h11();
      }
      send.i11();
    }
  };
  protoOf(AbstractChannel).j11 = function () {
    return !(this.k11() == null) ? this.a11() : false;
  };
  protoOf(AbstractChannel).l11 = function ($completion) {
    var result = this.jz();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    var tmp0 = receiveSuspend(this, 0, $completion);
    return tmp0;
  };
  protoOf(AbstractChannel).yz = function (receive) {
    var tmp;
    if (this.z10()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.lz_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.nq_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.au(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.lz_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.nq_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.a11();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.au(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).m11 = function () {
    var result = this.jz();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().n11();
    if (result instanceof Closed)
      return Companion_getInstance_1().m10(result.cz_1);
    var tmp = Companion_getInstance_1();
    return tmp.f10((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  protoOf(AbstractChannel).eo = function (cause) {
    if (this.j11())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.o11(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  protoOf(AbstractChannel).o11 = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.p11(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.q11(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).q11 = function (wasClosed) {
    var tmp0_elvis_lhs = this.r11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.nq_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.pq()) {
        previous.cu();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.s11(list, closed);
  };
  protoOf(AbstractChannel).s11 = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.t11(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.g(i);
              tmp1__anonymous__uwfjfc.t11(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).c = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).u11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(AbstractSendChannel).u11.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.c10();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(AbstractChannel).zz = function () {
  };
  protoOf(AbstractChannel).c10 = function () {
  };
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.z11();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.mz_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.mz_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.nq_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.pq()) {
        previous.cu();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.sz(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.g(i);
              tmp2__anonymous__z9zvc9.sz(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.x11(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.lz_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.mq_1;
    var head = tmp$ret$0;
    if (head === $this.lz_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.lz_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.nq_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.lz_1;
    var cur = tmp0_forEach.mq_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.mq_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.d12_1 = element;
  }
  protoOf(SendBuffered).h11 = function () {
    return this.d12_1;
  };
  protoOf(SendBuffered).f11 = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k10();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(SendBuffered).g11 = function () {
  };
  protoOf(SendBuffered).t11 = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.d12_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.kz_1 = onUndeliveredElement;
    this.lz_1 = new LinkedListHead();
    this.mz_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).v11 = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.u11();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.g10(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.l10(element);
        return receive.n10();
      }
    }
  };
  protoOf(AbstractSendChannel).r11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.lz_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.nq_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).k11 = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.lz_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.mq_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).b11 = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.lz_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.mq_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.bu();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).e12 = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.lz_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.nq_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.au(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  protoOf(AbstractSendChannel).w11 = function (element) {
    var result = this.v11(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().f10(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.r11();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().n11();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().m10(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().m10(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).p11 = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.lz_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.nq_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.au(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.lz_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.nq_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  protoOf(AbstractSendChannel).x11 = function (closed) {
  };
  protoOf(AbstractSendChannel).u11 = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.lz_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.mq_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.bu();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.y11();
  };
  protoOf(AbstractSendChannel).y11 = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).i11 = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.cz_1 = closeCause;
  }
  protoOf(Closed).z11 = function () {
    var tmp0_elvis_lhs = this.cz_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).dz = function () {
    var tmp0_elvis_lhs = this.cz_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).n10 = function () {
    return this;
  };
  protoOf(Closed).h11 = function () {
    return this;
  };
  protoOf(Closed).f11 = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k10();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).g11 = function () {
  };
  protoOf(Closed).g10 = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k10();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(Closed).l10 = function (value) {
  };
  protoOf(Closed).t11 = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.cz_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).n10 = function () {
    return get_OFFER_SUCCESS();
  };
  protoOf(Receive).xz = function (value) {
    return null;
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function _init_properties_AbstractChannel_kt__sw8o27() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.i12_1) {
      $this.n12_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.j12_1;
    var tmp0 = tmp0_subject.k6_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.i12_1) {
      ensureCapacity($this, currentSize);
      $this.l12_1[($this.m12_1 + currentSize | 0) % $this.l12_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.l12_1[$this.m12_1 % $this.l12_1.length | 0] = null;
      $this.l12_1[($this.m12_1 + currentSize | 0) % $this.l12_1.length | 0] = element;
      $this.m12_1 = ($this.m12_1 + 1 | 0) % $this.l12_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.l12_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.l12_1.length, 2);
      var tmp1_min = $this.i12_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.l12_1[($this.m12_1 + i | 0) % $this.l12_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.l12_1 = newBuffer;
      $this.m12_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.i12_1 = capacity;
    this.j12_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.i12_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.i12_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.k12_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.i12_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(tmp2_apply, get_EMPTY());
    tmp$ret$3 = tmp2_apply;
    tmp.l12_1 = tmp$ret$3;
    this.m12_1 = 0;
    this.n12_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).z10 = function () {
    return false;
  };
  protoOf(ArrayChannel).a11 = function () {
    return this.n12_1.kotlinx$atomicfu$value === 0;
  };
  protoOf(ArrayChannel).j11 = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.k12_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).j11.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).v11 = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.k12_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.n12_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.r11();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.u11();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.n12_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).g10(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.n12_1.kotlinx$atomicfu$value = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).l10(element);
    return ensureNotNull(receive).n10();
  };
  protoOf(ArrayChannel).jz = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.k12_1;
    var size = this.n12_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.r11();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.l12_1[this.m12_1];
    this.l12_1[this.m12_1] = null;
    this.n12_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.i12_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.b11();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).f11(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).h11();
          break loop;
        }
        ensureNotNull(send).i11();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.n12_1.kotlinx$atomicfu$value = size;
      this.l12_1[(this.m12_1 + size | 0) % this.l12_1.length | 0] = replacement;
    }
    this.m12_1 = (this.m12_1 + 1 | 0) % this.l12_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).g11();
    }
    return result;
  };
  protoOf(ArrayChannel).yz = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.k12_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).yz.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ArrayChannel).q11 = function (wasClosed) {
    var onUndeliveredElement = this.kz_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.k12_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.n12_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.l12_1[this.m12_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.l12_1[this.m12_1] = get_EMPTY();
        this.m12_1 = (this.m12_1 + 1 | 0) % this.l12_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.n12_1.kotlinx$atomicfu$value = 0;
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).q11.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ArrayChannel).y11 = function () {
    return '(buffer:capacity=' + this.i12_1 + ',size=' + this.n12_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.o12_1 = 2147483647;
    this.p12_1 = 0;
    this.q12_1 = -1;
    this.r12_1 = -2;
    this.s12_1 = -3;
    this.t12_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.u12_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp0_subject = capacity;
    var tmp_0;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp_0 = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp_0 = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp_0 = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().u12_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.v12_1 = cause;
  }
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.v12_1, other.v12_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.v12_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.v12_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.e10_1 = new Failed();
  }
  protoOf(Companion).f10 = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).n11 = function () {
    return _ChannelResult___init__impl__siwsuf(this.e10_1);
  };
  protoOf(Companion).m10 = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.w12_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.w12_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.w12_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.w12_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.w12_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.eo(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.b13_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.kz_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : isObject(old)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.b13_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.a13_1 = new NoOpLock();
    this.b13_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).z10 = function () {
    return false;
  };
  protoOf(ConflatedChannel).a11 = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.b13_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).v11 = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.r11();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.b13_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.u11();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).g10(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).l10(element);
    return ensureNotNull(receive).n10();
  };
  protoOf(ConflatedChannel).jz = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    if (this.b13_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.r11();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.b13_1;
    this.b13_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  protoOf(ConflatedChannel).q11 = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    protoOf(AbstractChannel).q11.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ConflatedChannel).yz = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = protoOf(AbstractChannel).yz.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(ConflatedChannel).y11 = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.a13_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.b13_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).z10 = function () {
    return true;
  };
  protoOf(LinkedListChannel).a11 = function () {
    return true;
  };
  protoOf(LinkedListChannel).v11 = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).v11.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.e12(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).s11 = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.kz_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.d12_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.t11(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.g(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.kz_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.d12_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.t11(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(RendezvousChannel).z10 = function () {
    return true;
  };
  protoOf(RendezvousChannel).a11 = function () {
    return true;
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.i13_1 = block;
  }
  protoOf(SafeFlow).j13 = function (collector, $completion) {
    var tmp0 = this.i13_1(collector, $completion);
    return tmp0;
  };
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t13_1 = _this__u8e3s4;
    this.u13_1 = collector;
  }
  protoOf($collectCOROUTINE$8).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 5;
            var tmp_0 = this;
            tmp_0.v13_1 = new SafeCollector(this.u13_1, this.h5());
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 4;
            this.jf_1 = 2;
            suspendResult = this.t13_1.j13(this.v13_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w13_1 = suspendResult;
            this.kf_1 = 5;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.v13_1.b14();
            ;
            return Unit_getInstance();
          case 4:
            this.kf_1 = 5;
            var t = this.mf_1;
            this.v13_1.b14();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).k13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function _get_head__d7jo8b($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.m14_1;
    var tmp1_minOf = $this.l14_1;
    tmp$ret$0 = tmp0_minOf.u(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    return tmp$ret$0;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.n14_1;
    tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
    return tmp$ret$0.s7($this.l14_1).f8();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.n14_1 + $this.o14_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.n14_1;
    tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
    return tmp$ret$0;
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.n14_1;
    tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = $this.o14_1;
    tmp$ret$1 = tmp2_plus.r7(toLong(tmp3_plus));
    return tmp$ret$1;
  }
  function tryEmitLocked($this, value) {
    if ($this.q14_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.n14_1 >= $this.i14_1 ? $this.m14_1.u($this.l14_1) <= 0 : false) {
      var tmp0_subject = $this.j14_1;
      var tmp0 = tmp0_subject.k6_1;
      switch (tmp0) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    var tmp1_this = $this;
    var tmp2 = tmp1_this.n14_1;
    tmp1_this.n14_1 = tmp2 + 1 | 0;
    if ($this.n14_1 > $this.i14_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.h14_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.l14_1;
      tmp$ret$0 = tmp0_plus.r7(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.m14_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.h14_1 === 0)
      return true;
    enqueueLocked($this, value);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.n14_1;
    tmp0_this.n14_1 = tmp1 + 1 | 0;
    if ($this.n14_1 > $this.h14_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.n14_1;
    tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
    tmp.m14_1 = tmp$ret$0;
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.k14_1), _get_head__d7jo8b($this), null);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.n14_1;
    tmp0_this.n14_1 = tmp1 - 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.r7(new Long(1, 0));
    var newHead = tmp$ret$0;
    if ($this.l14_1.u(newHead) < 0)
      $this.l14_1 = newHead;
    if ($this.m14_1.u(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.q14_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.p14_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.t14_1.u(new Long(0, 0)) >= 0 ? element.t14_1.u(newHead) < 0 : false) {
              element.t14_1 = newHead;
            }
          }
        }
      }
    }
    $this.m14_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.k14_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    tmp$ret$0 = tmp0_plus.r7(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    var tmp0_check = newSize > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      tmp$ret$0 = 'Buffer size overflow';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(newSize), null);
    var tmp1_also = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.k14_1 = tmp1_also;
    tmp$ret$2 = tmp1_also;
    var newBuffer = tmp$ret$2;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = head.r7(toLong(i));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.r7(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var tmp$ret$9;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.f5(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = _get_head__d7jo8b($this);
      var tmp2_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp1_plus.r7(toLong(tmp2_plus));
      var tmp3_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp3_also);
      var tmp0_this = $this;
      var tmp1 = tmp0_this.o14_1;
      tmp0_this.o14_1 = tmp1 + 1 | 0;
      if ($this.i14_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = tmp3_also;
      tmp$ret$2 = tmp$ret$4;
    }
    tmp$ret$5 = tmp$ret$2;
    var emitter = tmp$ret$5;
    var tmp0_safe_receiver = emitter;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, tmp0_safe_receiver);
      tmp$ret$6 = Unit_getInstance();
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp2_safe_receiver = r;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp2_safe_receiver.f5(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
    tmp$ret$9 = cancellable.xo();
    var tmp0 = tmp$ret$9;
    return tmp0;
  }
  function cancelEmitter($this, emitter) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.w14_1.u(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.k14_1);
    if (!(getBufferAt(buffer, emitter.w14_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.w14_1, get_NO_VALUE());
    cleanupTailLocked($this);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = newMinCollectorIndex.u(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    var newHead = tmp$ret$0;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.u(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.r7(new Long(1, 0));
        setBufferAt(ensureNotNull($this.k14_1), index, null);
      }
       while (inductionVariable.u(newHead) < 0);
    $this.l14_1 = newReplayIndex;
    $this.m14_1 = newMinCollectorIndex;
    $this.n14_1 = newBufferEndIndex.s7(newHead).f8();
    $this.o14_1 = newQueueEndIndex.s7(newBufferEndIndex).f8();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.i14_1 === 0 ? $this.o14_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.k14_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.o14_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
        var tmp2_minus = tmp$ret$0;
        tmp$ret$1 = tmp2_minus.s7(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = $this;
      var tmp1 = tmp0_this.o14_1;
      tmp0_this.o14_1 = tmp1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.r7(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.u(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.t14_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = index.r7(new Long(1, 0));
      tmp_0.t14_1 = tmp$ret$0;
      resumes = $this.z14(oldIndex);
      tmp = newValue;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var value = tmp$ret$2;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = resume;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.f5(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.t14_1;
    if (index.u(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.i14_1 > 0)
      return new Long(-1, -1);
    if (index.u(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.o14_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.k14_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.x14_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.u(new Long(0, 0)) < 0) {
        slot.u14_1 = cancellable;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.f5(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      slot.u14_1 = cancellable;
    }
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = cancellable.xo();
    var tmp0 = tmp$ret$4;
    return tmp0;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.q14_1 === 0) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = $this.p14_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            var tmp$ret$1;
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.u14_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).u(new Long(0, 0)) < 0) {
                tmp$ret$1 = Unit_getInstance();
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.u14_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.v14_1 = flow;
    this.w14_1 = index;
    this.x14_1 = value;
    this.y14_1 = cont;
  }
  protoOf(Emitter).wp = function () {
    return cancelEmitter(this.v14_1, this);
  };
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i15_1 = _this__u8e3s4;
    this.j15_1 = collector;
  }
  protoOf($collectCOROUTINE$9).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 13;
            this.k15_1 = this.i15_1.o15();
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 12;
            var tmp_0 = this.j15_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.jf_1 = 2;
              suspendResult = this.j15_1.r15(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.m15_1 = this.h5().x5(Key_getInstance_3());
            this.jf_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.jf_1 = 10;
              continue $sm;
            }

            this.jf_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.jf_1 = 8;
              continue $sm;
            }

            this.n15_1 = tryTakeValue(this.i15_1, this.k15_1);
            if (!(this.n15_1 === get_NO_VALUE())) {
              this.jf_1 = 8;
              continue $sm;
            } else {
              this.jf_1 = 6;
              continue $sm;
            }

            break;
          case 6:
            this.jf_1 = 7;
            suspendResult = awaitValue(this.i15_1, this.k15_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.jf_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.m15_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            this.jf_1 = 9;
            var tmp_2 = this.n15_1;
            suspendResult = this.j15_1.c14((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.jf_1 = 4;
            continue $sm;
          case 10:
            this.l15_1 = Unit_getInstance();
            this.kf_1 = 13;
            this.jf_1 = 11;
            continue $sm;
          case 11:
            this.i15_1.s15(this.k15_1);
            ;
            return Unit_getInstance();
          case 12:
            this.kf_1 = 13;
            var t = this.mf_1;
            this.i15_1.s15(this.k15_1);
            ;
            throw t;
          case 13:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 13) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.h14_1 = replay;
    this.i14_1 = bufferCapacity;
    this.j14_1 = onBufferOverflow;
    this.k14_1 = null;
    this.l14_1 = new Long(0, 0);
    this.m14_1 = new Long(0, 0);
    this.n14_1 = 0;
    this.o14_1 = 0;
  }
  protoOf(SharedFlowImpl).t15 = function () {
    var tmp = ensureNotNull(this.k14_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.l14_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
    var tmp2_minus = tmp$ret$0;
    tmp$ret$1 = tmp2_minus.s7(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).u15 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$9(this, collector, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(SharedFlowImpl).k13 = function (collector, $completion) {
    return this.u15(collector, $completion);
  };
  protoOf(SharedFlowImpl).v15 = function (value) {
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var emitted = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.f5(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).c14 = function (value, $completion) {
    if (this.v15(value))
      return Unit_getInstance();
    var tmp0 = emitSuspend(this, value, $completion);
    return tmp0;
  };
  protoOf(SharedFlowImpl).w15 = function () {
    var index = this.l14_1;
    if (index.u(this.m14_1) < 0)
      this.m14_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).z14 = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.u(this.m14_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.n14_1;
    tmp$ret$0 = head.r7(toLong(tmp0_plus));
    var newMinCollectorIndex = tmp$ret$0;
    if (this.i14_1 === 0 ? this.o14_1 > 0 : false) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = tmp0.af();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.q14_1 === 0) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      }
      var tmp0_safe_receiver = this.p14_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.t14_1.u(new Long(0, 0)) >= 0 ? element.t14_1.u(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.t14_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.u(this.m14_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.q14_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.s7(newMinCollectorIndex).f8();
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.o14_1;
      var tmp2_minOf = this.i14_1 - newBufferSize0 | 0;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      tmp = tmp$ret$2;
    } else {
      tmp = this.o14_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.o14_1;
    tmp$ret$3 = tmp3_plus.r7(toLong(tmp4_plus));
    var newQueueEndIndex = tmp$ret$3;
    if (maxResumeCount > 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$4 = fillArrayVal(Array(maxResumeCount), null);
      resumes = tmp$ret$4;
      var resumeCount = 0;
      var buffer = ensureNotNull(this.k14_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.u(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.r7(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (emitter instanceof Emitter)
              emitter;
            else
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.y14_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.x14_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = tmp3.af();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.u(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.s7(head).f8();
    if (this.q14_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.l14_1;
    var tmp$ret$6;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.h14_1;
    tmp$ret$5 = Math.min(tmp5_minOf, newBufferSize1);
    var tmp7_minus = tmp$ret$5;
    tmp$ret$6 = tmp6_minus.s7(toLong(tmp7_minus));
    var tmp9_maxOf = tmp$ret$6;
    tmp$ret$7 = tmp8_maxOf.u(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    var newReplayIndex = tmp$ret$7;
    if ((this.i14_1 === 0 ? newReplayIndex.u(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.k14_1), newReplayIndex), get_NO_VALUE()) : false) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = tmp4.af();
      var tmp5 = newReplayIndex;
      newReplayIndex = tmp5.af();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp10_isNotEmpty = resumes;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$8 = tmp10_isNotEmpty.length === 0;
    tmp$ret$9 = !tmp$ret$8;
    if (tmp$ret$9)
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).x15 = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).y15 = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.t14_1 = new Long(-1, -1);
    this.u14_1 = null;
  }
  protoOf(SharedFlowSlot).z15 = function (flow) {
    if (this.t14_1.u(new Long(0, 0)) >= 0)
      return false;
    this.t14_1 = flow.w15();
    return true;
  };
  protoOf(SharedFlowSlot).a16 = function (flow) {
    return this.z15(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).b16 = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.t14_1;
    this.t14_1 = new Long(-1, -1);
    this.u14_1 = null;
    return flow.z14(oldIndex);
  };
  protoOf(SharedFlowSlot).c16 = function (flow) {
    return this.b16(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f8() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f8() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    var tmp0_require = replay >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$0 = 'replay cannot be negative, but was ' + replay;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = extraBufferCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$1 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      tmp$ret$2 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().MAX_VALUE : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    var tmp0_elvis_lhs = value;
    return new StateFlowImpl(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.p14_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.h16_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.h16_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.i16_1;
    if ((curSequence & 1) === 0) {
      var tmp0 = curSequence;
      curSequence = tmp0 + 1 | 0;
      $this.i16_1 = curSequence;
    } else {
      $this.i16_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.p14_1;
    tmp$ret$0 = Unit_getInstance();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          var tmp0_safe_receiver_0 = element;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.k16();
          }
        }
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.i16_1 === curSequence) {
        $this.i16_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.i16_1;
      curSlots = $this.p14_1;
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t16_1 = _this__u8e3s4;
    this.u16_1 = collector;
  }
  protoOf($collectCOROUTINE$10).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 12;
            this.v16_1 = this.t16_1.o15();
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 11;
            var tmp_0 = this.u16_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.jf_1 = 2;
              suspendResult = this.u16_1.r15(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.jf_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.x16_1 = this.h5().x5(Key_getInstance_3());
            this.y16_1 = null;
            this.jf_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.jf_1 = 9;
              continue $sm;
            }

            this.z16_1 = this.t16_1.h16_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.x16_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            ;
            if (this.y16_1 == null ? true : !equals(this.y16_1, this.z16_1)) {
              this.jf_1 = 5;
              var tmp0_unbox = get_NULL();
              var tmp_2;
              if (this.z16_1 === tmp0_unbox) {
                tmp_2 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_3 = this.z16_1;
                tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              }
              suspendResult = this.u16_1.c14(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 6;
              continue $sm;
            }

            break;
          case 5:
            this.y16_1 = this.z16_1;
            this.jf_1 = 6;
            continue $sm;
          case 6:
            if (!this.v16_1.b17()) {
              this.jf_1 = 7;
              suspendResult = this.v16_1.a17(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 8;
              continue $sm;
            }

            break;
          case 7:
            this.jf_1 = 8;
            continue $sm;
          case 8:
            this.jf_1 = 4;
            continue $sm;
          case 9:
            this.w16_1 = Unit_getInstance();
            this.kf_1 = 12;
            this.jf_1 = 10;
            continue $sm;
          case 10:
            this.t16_1.s15(this.v16_1);
            ;
            return Unit_getInstance();
          case 11:
            this.kf_1 = 12;
            var t = this.mf_1;
            this.t16_1.s15(this.v16_1);
            ;
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
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.h16_1 = atomic$ref$1(initialState);
    this.i16_1 = 0;
  }
  protoOf(StateFlowImpl).kk = function (value) {
    var tmp0_elvis_lhs = value;
    updateState(this, null, tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs);
  };
  protoOf(StateFlowImpl).b2 = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.h16_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StateFlowImpl).cm = function (expect, update) {
    var tmp0_elvis_lhs = expect;
    var tmp = tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = update;
    return updateState(this, tmp, tmp1_elvis_lhs == null ? get_NULL() : tmp1_elvis_lhs);
  };
  protoOf(StateFlowImpl).v15 = function (value) {
    this.kk(value);
    return true;
  };
  protoOf(StateFlowImpl).c14 = function (value, $completion) {
    this.kk(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).u15 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  protoOf(StateFlowImpl).k13 = function (collector, $completion) {
    return this.u15(collector, $completion);
  };
  protoOf(StateFlowImpl).x15 = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).y15 = function (size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.j16_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).c17 = function (flow) {
    if (!(this.j16_1.kotlinx$atomicfu$value == null))
      return false;
    this.j16_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  protoOf(StateFlowSlot).a16 = function (flow) {
    return this.c17(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).d17 = function (flow) {
    this.j16_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).c16 = function (flow) {
    return this.d17(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).k16 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.j16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc == null)
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_PENDING())
        return Unit_getInstance();
      else if (tmp1__anonymous__uwfjfc === get_NONE()) {
        if (this.j16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this.j16_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_NONE())) {
          var tmp$ret$1;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp1_resume = tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp1_resume.f5(tmp$ret$0);
          tmp$ret$1 = Unit_getInstance();
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).b17 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureNotNull(this.j16_1.atomicfu$getAndSet(get_NONE()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return tmp0_let === get_PENDING();
    return tmp$ret$0;
  };
  protoOf(StateFlowSlot).a17 = function ($completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.gr();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.j16_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.f5(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = cancellable.xo();
    var tmp0 = tmp$ret$3;
    return tmp0;
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.p14_1 = null;
    this.q14_1 = 0;
    this.r14_1 = 0;
    this.s14_1 = null;
  }
  protoOf(AbstractSharedFlow).o15 = function () {
    var subscriptionCount = null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.p14_1;
    var tmp;
    if (curSlots == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.y15(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.p14_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var tmp_0;
      if (this.q14_1 >= curSlots.length) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.p14_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.r14_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = this.x15();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp$ret$2 = tmp2_also;
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).a16(this))
        break $l$loop;
    }
    this.r14_1 = index;
    var tmp2_this = this;
    var tmp3 = tmp2_this.q14_1;
    tmp2_this.q14_1 = tmp3 + 1 | 0;
    subscriptionCount = this.s14_1;
    tmp$ret$3 = slot;
    tmp$ret$4 = tmp$ret$3;
    var slot_0 = tmp$ret$4;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.q17(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).s15 = function (slot) {
    var subscriptionCount = null;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.q14_1;
    tmp0_this.q14_1 = tmp1 - 1 | 0;
    subscriptionCount = this.s14_1;
    if (this.q14_1 === 0)
      this.r14_1 = 0;
    tmp$ret$0 = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).c16(this);
    tmp$ret$1 = tmp$ret$0;
    var resumes = tmp$ret$1;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = cont;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp1_safe_receiver.f5(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.q17(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.d6(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.z13_1)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.y13_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.jp();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.z1();
      var collectElement = $this_checkContext.y13_1.x5(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function $onSubscriptionCOROUTINE$17(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z17_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$17).sf = function () {
    var suspendResult = this.lf_1;
    $sm: do
      try {
        var tmp = this.jf_1;
        switch (tmp) {
          case 0:
            this.kf_1 = 7;
            var tmp_0 = this;
            tmp_0.a18_1 = new SafeCollector(this.z17_1.p15_1, this.h5());
            this.jf_1 = 1;
            continue $sm;
          case 1:
            this.kf_1 = 6;
            this.jf_1 = 2;
            suspendResult = this.z17_1.q15_1(this.a18_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b18_1 = suspendResult;
            this.kf_1 = 7;
            this.jf_1 = 3;
            continue $sm;
          case 3:
            this.a18_1.b14();
            ;
            var tmp_1 = this.z17_1.p15_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.jf_1 = 4;
              suspendResult = this.z17_1.p15_1.r15(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.jf_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.kf_1 = 7;
            var t = this.mf_1;
            this.a18_1.b14();
            ;
            throw t;
          case 7:
            throw this.mf_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.kf_1 === 7) {
          throw e;
        } else {
          this.jf_1 = this.kf_1;
          this.mf_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).r15 = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$17(this, $completion);
    tmp.lf_1 = Unit_getInstance();
    tmp.mf_1 = null;
    return tmp.sf();
  };
  function ensureCapacity_0($this) {
    var currentSize = $this.at_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.at_1;
    var tmp1_copyInto = $this.bt_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.at_1;
    var tmp4_copyInto = $this.at_1.length - $this.bt_1 | 0;
    var tmp5_copyInto = $this.bt_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.at_1 = newElements;
    $this.bt_1 = 0;
    $this.ct_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.at_1 = tmp$ret$0;
    this.bt_1 = 0;
    this.ct_1 = 0;
  }
  protoOf(ArrayQueue).it = function () {
    return this.bt_1 === this.ct_1;
  };
  protoOf(ArrayQueue).ft = function (element) {
    this.at_1[this.ct_1] = element;
    this.ct_1 = (this.ct_1 + 1 | 0) & (this.at_1.length - 1 | 0);
    if (this.ct_1 === this.bt_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).dt = function () {
    if (this.bt_1 === this.ct_1)
      return null;
    var element = this.at_1[this.bt_1];
    this.at_1[this.bt_1] = null;
    this.bt_1 = (this.bt_1 + 1 | 0) & (this.at_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function AtomicOp() {
    OpDescriptor.call(this);
    this.c18_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).d18 = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this.c18_1.kotlinx$atomicfu$value;
    if (!(current === get_NO_DECISION()))
      return current;
    if (this.c18_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this.c18_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicOp).hw = function (affected) {
    var decision = this.c18_1.kotlinx$atomicfu$value;
    if (decision === get_NO_DECISION()) {
      decision = this.d18(this.e18((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.f18((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.yp_1.os(tmp1_resumeCancellableWith.h5())) {
        tmp1_resumeCancellableWith.aq_1 = state;
        tmp1_resumeCancellableWith.rq_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.yp_1.ps(tmp1_resumeCancellableWith.h5(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().nt();
          if (false ? eventLoop.ht() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.gt()) {
            tmp1_resumeCancellableWith.aq_1 = state;
            tmp1_resumeCancellableWith.rq_1 = tmp0_executeUnconfined;
            eventLoop.et(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.jt(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.h5().x5(Key_getInstance_3());
                if (!(job == null) ? !job.an() : false) {
                  var cause = job.vn();
                  tmp1_resumeCancellableWith.ir(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.f5(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.zp_1;
                var tmp2_withContinuationContext = tmp1_resumeCancellableWith.bq_1;
                tmp1_resumeCancellableWith.zp_1.f5(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.zs())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                tmp1_resumeCancellableWith.tr(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.kt(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.f5(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.cq_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.yp_1 = dispatcher;
    this.zp_1 = continuation;
    this.aq_1 = get_UNDEFINED();
    this.bq_1 = threadContextElements(this.h5());
    this.cq_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).h5 = function () {
    return this.zp_1.h5();
  };
  protoOf(DispatchedContinuation).qq = function () {
    return !(this.cq_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).g18 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).rs = function () {
    this.g18();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.uq();
    }
  };
  protoOf(DispatchedContinuation).dq = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === null) {
        this.cq_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.cq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).tq = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.cq_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.cq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).sq = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.cq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.cq_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.cq_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).hr = function () {
    var state = this.aq_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.aq_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).fr = function () {
    return this;
  };
  protoOf(DispatchedContinuation).f5 = function (result) {
    var context = this.zp_1.h5();
    var state = toState_0(result);
    if (this.yp_1.os(context)) {
      this.aq_1 = state;
      this.rq_1 = get_MODE_ATOMIC();
      this.yp_1.ps(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().nt();
        if (false ? eventLoop.ht() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.gt()) {
          this.aq_1 = state;
          this.rq_1 = tmp0_executeUnconfined;
          eventLoop.et(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.jt(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.h5();
            var tmp1_withCoroutineContext = this.bq_1;
            this.zp_1.f5(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.zs())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.tr(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.kt(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  protoOf(DispatchedContinuation).ir = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.ms_1(cause);
    }
  };
  protoOf(DispatchedContinuation).yy = function (context, value) {
    this.aq_1 = value;
    this.rq_1 = get_MODE_CANCELLABLE();
    this.yp_1.qs(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.yp_1 + ', ' + toDebugString(this.zp_1) + ']';
  };
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().nt();
      if (eventLoop.ht()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.gt()) {
        _this__u8e3s4.aq_1 = Unit_getInstance();
        _this__u8e3s4.rq_1 = tmp0_executeUnconfined;
        eventLoop.et(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.jt(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.sr();
          $l$loop: while (true) {
            if (!eventLoop.zs())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.tr(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.kt(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.rq_1 = resumeMode;
  }
  protoOf(DispatchedTask).ir = function (takenState, cause) {
  };
  protoOf(DispatchedTask).pr = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).rr = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fn_1;
  };
  protoOf(DispatchedTask).sr = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.fr();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.zp_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.bq_1;
      var context = continuation.h5();
      var state = this.hr();
      var exception = this.rr(state);
      var job = (exception == null ? get_isCancellableMode(this.rq_1) : false) ? context.x5(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.an() : false) {
        var cause = job.vn();
        this.ir(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.f5(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.f5(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp4_resume = this.pr(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp3_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp4_resume);
          continuation.f5(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp2_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(e_0));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.tr(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).tr = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.fr().h5(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.fr();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.rq_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.yp_1;
      var context = delegate.h5();
      if (dispatcher.os(context)) {
        dispatcher.ps(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().nt();
    if (eventLoop.gt()) {
      eventLoop.et(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.jt(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.fr(), true);
        $l$loop: while (true) {
          if (!eventLoop.zs())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.tr(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.kt(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.hr();
    var exception = _this__u8e3s4.rr(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance();
      var tmp2_success = _this__u8e3s4.pr(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp5_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp3_withContinuationContext = tmp5_resumeUndispatchedWith.zp_1;
      var tmp4_withContinuationContext = tmp5_resumeUndispatchedWith.bq_1;
      tmp5_resumeUndispatchedWith.zp_1.f5(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.f5(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.h18_1 = context;
  }
  protoOf(ContextScope).zm = function () {
    return this.h18_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.h18_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.ip_1 = uCont;
  }
  protoOf(ScopeCoroutine).no = function () {
    return true;
  };
  protoOf(ScopeCoroutine).jp = function () {
    var tmp0_safe_receiver = this.sn();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jp();
  };
  protoOf(ScopeCoroutine).kn = function (state) {
    resumeCancellableWith(intercepted(this.ip_1), recoverResult(state, this.ip_1));
  };
  protoOf(ScopeCoroutine).jn = function (state) {
    this.ip_1.f5(recoverResult(state, this.ip_1));
  };
  function Symbol(symbol) {
    this.i18_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.i18_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).f8();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance_0();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.u(parsed) <= 0 ? parsed.u(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.f5(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.eg(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.in(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.fn_1;
        tmp$ret$4 = true;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.fn_1, _this__u8e3s4.ip_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.fn_1, _this__u8e3s4.ip_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = block;
        var a = tmp$ret$0;
        tmp$ret$1 = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.eg(receiver, _this__u8e3s4);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.in(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0__anonymous__q1qw7t = state.fn_1;
        var tmp_3;
        if (tmp0__anonymous__q1qw7t instanceof TimeoutCancellationException) {
          tmp_3 = tmp0__anonymous__q1qw7t.ey_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        tmp$ret$4 = !tmp_3;
        if (tmp$ret$4) {
          throw recoverStackTrace(state.fn_1, _this__u8e3s4.ip_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.fn_1, _this__u8e3s4.ip_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.h5();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.eg(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.f5(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp2_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp2_resume);
        actualCompletion.f5(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.j18_1 = locked;
  }
  protoOf(Empty_0).toString = function () {
    return 'Empty[' + toString_0(this.j18_1) + ']';
  };
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.m18(this$1.r18_1);
      return Unit_getInstance();
    };
  }
  function lockSuspend($this, owner, $completion) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $completion;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var waiter = new LockCont($this, owner, cancellable);
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = $this.u18_1;
      while (true) {
        var tmp$ret$2;
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Empty_0) {
            if (!(tmp1__anonymous__uwfjfc.j18_1 === get_UNLOCKED())) {
              $this.u18_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, new LockedQueue(tmp1__anonymous__uwfjfc.j18_1));
            } else {
              var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
              if ($this.u18_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                cancellable.tp(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
            }
          } else {
            if (tmp0_subject instanceof LockedQueue) {
              var curOwner = tmp1__anonymous__uwfjfc.y18_1;
              // Inline function 'kotlin.check' call
              var tmp0_check = !(curOwner === owner);
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$1;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>.<anonymous>' call
                tmp$ret$1 = 'Already locked by ' + toString(owner);
                var message = tmp$ret$1;
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
              tmp1__anonymous__uwfjfc.au(waiter);
              if ($this.u18_1.kotlinx$atomicfu$value === tmp1__anonymous__uwfjfc ? true : !waiter.z18()) {
                removeOnCancellation(cancellable, waiter);
                tmp$ret$0 = Unit_getInstance();
                break $l$block_0;
              }
              waiter = new LockCont($this, owner, cancellable);
              tmp$ret$2 = Unit_getInstance();
              break $l$block_1;
            } else {
              if (tmp0_subject instanceof OpDescriptor) {
                tmp1__anonymous__uwfjfc.hw($this);
              } else {
                var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.xo();
    var tmp0 = tmp$ret$3;
    return tmp0;
  }
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.y18_1 = owner;
  }
  protoOf(LockedQueue).toString = function () {
    return 'LockedQueue[' + toString_0(this.y18_1) + ']';
  };
  function LockWaiter($outer, owner) {
    this.t18_1 = $outer;
    LinkedListNode.call(this);
    this.r18_1 = owner;
    this.s18_1 = atomic$boolean$1(false);
  }
  protoOf(LockWaiter).z18 = function () {
    return this.s18_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(LockWaiter).wp = function () {
    this.pq();
  };
  function LockCont($outer, owner, cont) {
    this.j19_1 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.i19_1 = cont;
  }
  protoOf(LockCont).a19 = function () {
    if (!this.z18())
      return false;
    return !(this.i19_1.mp(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.j19_1, this)) == null);
  };
  protoOf(LockCont).b19 = function () {
    return this.i19_1.op(get_RESUME_TOKEN());
  };
  protoOf(LockCont).toString = function () {
    return 'LockCont[' + toString(this.r18_1) + ', ' + this.i19_1 + '] for ' + this.j19_1;
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.l19_1 = queue;
  }
  protoOf(UnlockOp).m19 = function (affected) {
    return this.l19_1.it() ? null : get_UNLOCK_FAIL();
  };
  protoOf(UnlockOp).e18 = function (affected) {
    return this.m19(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  protoOf(UnlockOp).n19 = function (affected, failure) {
    var update = failure == null ? get_EMPTY_UNLOCKED() : this.l19_1;
    affected.u18_1.atomicfu$compareAndSet(this, update);
  };
  protoOf(UnlockOp).f18 = function (affected, failure) {
    return this.n19(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.m18($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this.u18_1 = atomic$ref$1(locked ? get_EMPTY_LOCKED() : get_EMPTY_UNLOCKED());
  }
  protoOf(MutexImpl).o19 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (!(tmp1__anonymous__uwfjfc.j18_1 === get_UNLOCKED()))
          return false;
        var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
        if (this.u18_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
          return true;
      } else {
        if (tmp0_subject instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.y18_1 === owner);
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Already locked by ' + toString(owner);
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          return false;
        } else {
          if (tmp0_subject instanceof OpDescriptor) {
            tmp1__anonymous__uwfjfc.hw(this);
          } else {
            var tmp1_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).k18 = function (owner, $completion) {
    if (this.o19(owner))
      return Unit_getInstance();
    var tmp0 = lockSuspend(this, owner, $completion);
    return tmp0;
  };
  protoOf(MutexImpl).m18 = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0) {
        if (owner == null) {
          // Inline function 'kotlin.check' call
          var tmp0_check = !(tmp1__anonymous__uwfjfc.j18_1 === get_UNLOCKED());
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'Mutex is not locked';
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
        } else {
          // Inline function 'kotlin.check' call
          var tmp1_check = tmp1__anonymous__uwfjfc.j18_1 === owner;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_check) {
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            tmp$ret$1 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.j18_1) + ' but expected ' + toString(owner);
            var message_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_0(message_0));
          }
        }
        if (this.u18_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_EMPTY_UNLOCKED()))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.hw(this);
        } else {
          if (tmp0_subject instanceof LockedQueue) {
            if (!(owner == null)) {
              // Inline function 'kotlin.check' call
              var tmp2_check = tmp1__anonymous__uwfjfc.y18_1 === owner;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp2_check) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Mutex is locked by ' + toString_0(tmp1__anonymous__uwfjfc.y18_1) + ' but expected ' + toString(owner);
                var message_1 = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString_0(message_1));
              }
            }
            var waiter = tmp1__anonymous__uwfjfc.dt();
            if (waiter == null) {
              var op = new UnlockOp(tmp1__anonymous__uwfjfc);
              if (this.u18_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, op) ? op.hw(this) == null : false)
                return Unit_getInstance();
            } else {
              if ((waiter instanceof LockWaiter ? waiter : THROW_CCE()).a19()) {
                var tmp = tmp1__anonymous__uwfjfc;
                var tmp1_elvis_lhs = waiter.r18_1;
                tmp.y18_1 = tmp1_elvis_lhs == null ? get_LOCKED() : tmp1_elvis_lhs;
                waiter.b19();
                return Unit_getInstance();
              }
            }
          } else {
            var tmp3_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp3_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).toString = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.toString.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Empty_0)
        return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.j18_1) + ']';
      else {
        if (tmp0_subject instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.hw(this);
        } else {
          if (tmp0_subject instanceof LockedQueue)
            return 'Mutex[' + toString_0(tmp1__anonymous__uwfjfc.y18_1) + ']';
          else {
            var tmp0_error = 'Illegal state ' + toString(tmp1__anonymous__uwfjfc);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (properties_initialized_Mutex_kt_yv4p3j) {
    } else {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().wx_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.zm().e6(context);
    return (!(combined === Dispatchers_getInstance().wx_1) ? combined.x5(Key_getInstance()) == null : false) ? combined.e6(Dispatchers_getInstance().wx_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.e6(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).jn = function (state) {
    return this.ip_1.f5(recoverResult(state, this.ip_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).ec();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.wx_1 = createDefaultDispatcher();
    this.xx_1 = Unconfined_getInstance();
    this.yx_1 = new JsMainDispatcher(this.wx_1, false);
    this.zx_1 = null;
  }
  protoOf(Dispatchers).ay = function () {
    var tmp0_elvis_lhs = this.zx_1;
    return tmp0_elvis_lhs == null ? this.yx_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.u19_1 = delegate;
    this.v19_1 = invokeImmediately;
    this.w19_1 = this.v19_1 ? this : new JsMainDispatcher(this.u19_1, true);
  }
  protoOf(JsMainDispatcher).ux = function () {
    return this.w19_1;
  };
  protoOf(JsMainDispatcher).os = function (context) {
    return !this.v19_1;
  };
  protoOf(JsMainDispatcher).ps = function (context, block) {
    return this.u19_1.ps(context, block);
  };
  protoOf(JsMainDispatcher).qs = function (context, block) {
    return this.u19_1.qs(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.vx();
    return tmp0_elvis_lhs == null ? this.u19_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).ps = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.b1a_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.b1a_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.b1a_1, this.b1a_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.b1a_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).e1a = function () {
    process.nextTick(this.n1a_1.k1a_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).e1a = function () {
    setTimeout(this.n1a_1.k1a_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.v1a();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.l1a_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.k1a_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).w1a = function () {
    this.l1a_1.e1a();
  };
  protoOf(ScheduledMessageQueue).x1a = function () {
    setTimeout(this.k1a_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.sr();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.sp(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.n1a_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).ps = function (context, block) {
    this.n1a_1.y1a(block);
  };
  protoOf(SetTimeoutBasedDispatcher).us = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).ts = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.rp(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.t1a_1 = 16;
    this.u1a_1 = false;
  }
  protoOf(MessageQueue).y1a = function (element) {
    this.ft(element);
    if (!this.u1a_1) {
      this.u1a_1 = true;
      this.w1a();
    }
  };
  protoOf(MessageQueue).v1a = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.t1a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.dt();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.sr();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.it()) {
        this.u1a_1 = false;
      } else {
        this.x1a();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).f8();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.z1a_1 = handle;
  }
  protoOf(ClearTimeout).wp = function () {
    clearTimeout(this.z1a_1);
  };
  protoOf(ClearTimeout).vp = function (cause) {
    this.wp();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.vp(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.z1a_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.sp(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.sr();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.a1b_1 = this$0;
    this.b1b_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).wp = function () {
    this.a1b_1.d1b_1.clearTimeout(this.b1b_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.d1b_1 = window_0;
    this.e1b_1 = new WindowMessageQueue(this.d1b_1);
  }
  protoOf(WindowDispatcher).ps = function (context, block) {
    return this.e1b_1.y1a(block);
  };
  protoOf(WindowDispatcher).ts = function (timeMillis, continuation) {
    this.d1b_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).us = function (timeMillis, block, context) {
    var handle = this.d1b_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.k1b_1 ? event.data == this$0.l1b_1 : false) {
        event.stopPropagation();
        this$0.v1a();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.v1a();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.k1b_1 = window_0;
    this.l1b_1 = 'dispatchCoroutine';
    this.k1b_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).w1a = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).x1a = function () {
    this.k1b_1.postMessage(this.l1b_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.x13_1 = collector;
    this.y13_1 = collectContext;
    var tmp = this;
    tmp.z13_1 = this.y13_1.d6(0, SafeCollector$collectContextSize$lambda);
    this.a14_1 = null;
  }
  protoOf(SafeCollector).c14 = function (value, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.h5();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    ensureActive(currentContext);
    if (!(this.a14_1 === currentContext)) {
      checkContext(this, currentContext);
      this.a14_1 = currentContext;
    }
    var tmp0 = this.x13_1.c14(value, $completion);
    return tmp0;
  };
  protoOf(SafeCollector).b14 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).it = function () {
    return this.mq_1 === this;
  };
  protoOf(LinkedListHead).pq = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.mq_1 = this;
    this.nq_1 = this;
    this.oq_1 = false;
  }
  protoOf(LinkedListNode).au = function (node) {
    var prev = this.nq_1;
    node.mq_1 = this;
    node.nq_1 = prev;
    prev.mq_1 = node;
    this.nq_1 = node;
  };
  protoOf(LinkedListNode).pq = function () {
    return this.bu();
  };
  protoOf(LinkedListNode).bu = function () {
    if (this.oq_1)
      return false;
    var prev = this.nq_1;
    var next = this.mq_1;
    prev.mq_1 = next;
    next.nq_1 = prev;
    this.oq_1 = true;
    return true;
  };
  protoOf(LinkedListNode).iu = function (node) {
    if (!(this.mq_1 === this))
      return false;
    this.au(node);
    return true;
  };
  protoOf(LinkedListNode).cu = function () {
  };
  protoOf(LinkedListNode).dt = function () {
    var next = this.mq_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.bu();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.ot_1 = null;
  }
  protoOf(CommonThreadLocal).pt = function () {
    var tmp = this.ot_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).qt = function (value) {
    this.ot_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).ao = invokeOnCompletion$default;
  protoOf(JobSupport).fo = cancel$default;
  protoOf(JobSupport).e6 = plus;
  protoOf(JobSupport).x5 = get;
  protoOf(JobSupport).d6 = fold;
  protoOf(JobSupport).c6 = minusKey;
  protoOf(AbstractCoroutine).ao = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).fo = cancel$default;
  protoOf(AbstractCoroutine).e6 = plus;
  protoOf(AbstractCoroutine).x5 = get;
  protoOf(AbstractCoroutine).d6 = fold;
  protoOf(AbstractCoroutine).c6 = minusKey;
  protoOf(StandaloneCoroutine).ao = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).fo = cancel$default;
  protoOf(StandaloneCoroutine).e6 = plus;
  protoOf(StandaloneCoroutine).x5 = get;
  protoOf(StandaloneCoroutine).d6 = fold;
  protoOf(StandaloneCoroutine).c6 = minusKey;
  protoOf(LazyStandaloneCoroutine).ao = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).fo = cancel$default;
  protoOf(LazyStandaloneCoroutine).e6 = plus;
  protoOf(LazyStandaloneCoroutine).x5 = get;
  protoOf(LazyStandaloneCoroutine).d6 = fold;
  protoOf(LazyStandaloneCoroutine).c6 = minusKey;
  protoOf(ScopeCoroutine).ao = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).fo = cancel$default;
  protoOf(ScopeCoroutine).e6 = plus;
  protoOf(ScopeCoroutine).x5 = get;
  protoOf(ScopeCoroutine).d6 = fold;
  protoOf(ScopeCoroutine).c6 = minusKey;
  protoOf(DispatchedCoroutine).ao = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).fo = cancel$default;
  protoOf(DispatchedCoroutine).e6 = plus;
  protoOf(DispatchedCoroutine).x5 = get;
  protoOf(DispatchedCoroutine).d6 = fold;
  protoOf(DispatchedCoroutine).c6 = minusKey;
  protoOf(CancellableContinuationImpl).qp = cancel$default_0;
  protoOf(CancellableContinuationImpl).lp = tryResume$default;
  protoOf(CompletableDeferredImpl).ao = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).fo = cancel$default;
  protoOf(CompletableDeferredImpl).e6 = plus;
  protoOf(CompletableDeferredImpl).x5 = get;
  protoOf(CompletableDeferredImpl).d6 = fold;
  protoOf(CompletableDeferredImpl).c6 = minusKey;
  protoOf(CoroutineDispatcher).x5 = get_0;
  protoOf(CoroutineDispatcher).d6 = fold;
  protoOf(CoroutineDispatcher).c6 = minusKey_0;
  protoOf(CoroutineDispatcher).e6 = plus;
  protoOf(EventLoop).e6 = plus;
  protoOf(EventLoop).x5 = get_0;
  protoOf(EventLoop).d6 = fold;
  protoOf(EventLoop).c6 = minusKey_0;
  protoOf(AwaitContinuation).qp = cancel$default_0;
  protoOf(AwaitContinuation).lp = tryResume$default;
  protoOf(JobImpl).ao = invokeOnCompletion$default;
  protoOf(JobImpl).fo = cancel$default;
  protoOf(JobImpl).e6 = plus;
  protoOf(JobImpl).x5 = get;
  protoOf(JobImpl).d6 = fold;
  protoOf(JobImpl).c6 = minusKey;
  protoOf(MainCoroutineDispatcher).e6 = plus;
  protoOf(MainCoroutineDispatcher).x5 = get_0;
  protoOf(MainCoroutineDispatcher).d6 = fold;
  protoOf(MainCoroutineDispatcher).c6 = minusKey_0;
  protoOf(SupervisorJobImpl).ao = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).fo = cancel$default;
  protoOf(SupervisorJobImpl).e6 = plus;
  protoOf(SupervisorJobImpl).x5 = get;
  protoOf(SupervisorJobImpl).d6 = fold;
  protoOf(SupervisorJobImpl).c6 = minusKey;
  protoOf(TimeoutCoroutine).ao = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).fo = cancel$default;
  protoOf(TimeoutCoroutine).e6 = plus;
  protoOf(TimeoutCoroutine).x5 = get;
  protoOf(TimeoutCoroutine).d6 = fold;
  protoOf(TimeoutCoroutine).c6 = minusKey;
  protoOf(Unconfined).e6 = plus;
  protoOf(Unconfined).x5 = get_0;
  protoOf(Unconfined).d6 = fold;
  protoOf(Unconfined).c6 = minusKey_0;
  protoOf(YieldContext).x5 = get;
  protoOf(YieldContext).d6 = fold;
  protoOf(YieldContext).c6 = minusKey;
  protoOf(YieldContext).e6 = plus;
  protoOf(MutexImpl).l18 = lock$default;
  protoOf(MutexImpl).n18 = unlock$default;
  protoOf(UndispatchedCoroutine).ao = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).fo = cancel$default;
  protoOf(UndispatchedCoroutine).e6 = plus;
  protoOf(UndispatchedCoroutine).x5 = get;
  protoOf(UndispatchedCoroutine).d6 = fold;
  protoOf(UndispatchedCoroutine).c6 = minusKey;
  protoOf(JsMainDispatcher).e6 = plus;
  protoOf(JsMainDispatcher).x5 = get_0;
  protoOf(JsMainDispatcher).d6 = fold;
  protoOf(JsMainDispatcher).c6 = minusKey_0;
  protoOf(UnconfinedEventLoop).e6 = plus;
  protoOf(UnconfinedEventLoop).x5 = get_0;
  protoOf(UnconfinedEventLoop).d6 = fold;
  protoOf(UnconfinedEventLoop).c6 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).e6 = plus;
  protoOf(SetTimeoutBasedDispatcher).x5 = get_0;
  protoOf(SetTimeoutBasedDispatcher).d6 = fold;
  protoOf(SetTimeoutBasedDispatcher).c6 = minusKey_0;
  protoOf(NodeDispatcher).e6 = plus;
  protoOf(NodeDispatcher).x5 = get_0;
  protoOf(NodeDispatcher).d6 = fold;
  protoOf(NodeDispatcher).c6 = minusKey_0;
  protoOf(SetTimeoutDispatcher).e6 = plus;
  protoOf(SetTimeoutDispatcher).x5 = get_0;
  protoOf(SetTimeoutDispatcher).d6 = fold;
  protoOf(SetTimeoutDispatcher).c6 = minusKey_0;
  protoOf(WindowDispatcher).e6 = plus;
  protoOf(WindowDispatcher).x5 = get_0;
  protoOf(WindowDispatcher).d6 = fold;
  protoOf(WindowDispatcher).c6 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = cancelAndJoin;
  _.$_$.d = coroutineScope;
  _.$_$.e = delay;
  _.$_$.f = withContext;
  _.$_$.g = withTimeoutOrNull;
  _.$_$.h = yield_0;
  _.$_$.i = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.j = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.k = Factory_getInstance;
  _.$_$.l = Key_getInstance_1;
  _.$_$.m = Key_getInstance_2;
  _.$_$.n = Dispatchers_getInstance;
  _.$_$.o = GlobalScope_getInstance;
  _.$_$.p = Key_getInstance_3;
  _.$_$.q = Channel;
  _.$_$.r = cancelConsumed;
  _.$_$.s = FlowCollector;
  _.$_$.t = MutableSharedFlow;
  _.$_$.u = MutableStateFlow;
  _.$_$.v = flow;
  _.$_$.w = Mutex_0;
  _.$_$.x = CancellableContinuationImpl;
  _.$_$.y = CompletableDeferred;
  _.$_$.z = CoroutineDispatcher;
  _.$_$.a1 = CoroutineScope_0;
  _.$_$.b1 = CoroutineScope;
  _.$_$.c1 = invokeOnTimeout;
  _.$_$.d1 = Delay;
  _.$_$.e1 = Job_0;
  _.$_$.f1 = get_MODE_CANCELLABLE;
  _.$_$.g1 = SupervisorJob;
  _.$_$.h1 = cancel;
  _.$_$.i1 = cancel_0;
  _.$_$.j1 = get_isActive_0;
  _.$_$.k1 = get_isActive;
  _.$_$.l1 = get_job;
  _.$_$.m1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
