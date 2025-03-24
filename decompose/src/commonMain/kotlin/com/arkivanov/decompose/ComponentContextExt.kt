package com.arkivanov.decompose

import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.child
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

/**
 * Creates a new instance of child [ComponentContext] of type [Ctx] and attaches it to the parent (`this`) component context.
 * Can be used to create fixed child components (i.e. without navigation) living as long as the parent (hosting) component.
 *
 * @param key A key of the child component context, must be unique within the parent context.
 * @param lifecycle An optional [Lifecycle] of the child component context to be merged with the parent [Lifecycle],
 * can be used for manual control (see [LifecycleRegistry][com.arkivanov.essenty.lifecycle.LifecycleRegistry]).
 * The following conditions apply:
 * - The resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one.
 * - The supplied [Lifecycle] must never be destroyed manually.
 */
fun <Ctx : GenericComponentContext<Ctx>> Ctx.childContext(key: String, lifecycle: Lifecycle? = null): Ctx =
    childContext(
        key = key,
        lifecycle = lifecycle,
        backHandlerPriority = BackCallback.PRIORITY_DEFAULT,
    )

/**
 * Creates a new instance of child [ComponentContext] of type [Ctx] and attaches it to the parent (`this`) component context.
 * Can be used to create fixed child components (i.e. without navigation) living as long as the parent (hosting) component.
 *
 * @param key A key of the child component context, must be unique within the parent context.
 * @param lifecycle An optional [Lifecycle] of the child component context to be merged with the parent [Lifecycle],
 * can be used for manual control (see [LifecycleRegistry][com.arkivanov.essenty.lifecycle.LifecycleRegistry]).
 * The following conditions apply:
 * - The resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one.
 * - The supplied [Lifecycle] must never be destroyed manually.
 * @param backHandlerPriority a priority of the `BackHandler` used by the returned [ComponentContext] in the scope of the
 * parent (`this`) [ComponentContext]. By default, back handlers of the child component contexts and normal `BackCallbacks`
 * registered in the parent (hosting) component context's `BackHandler` handle the back button in the reverse order.
 * E.g. with two child component contexts, the second one handles the back button before the first one.
 * The [backHandlerPriority] parameter allows to explicitly control the order.
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>> Ctx.childContext(
    key: String,
    lifecycle: Lifecycle? = null,
    backHandlerPriority: Int,
): Ctx {
    lifecycle?.doOnDestroy { error("The lifecycle of a child ComponentContext must never be destroyed manually.") }

    return componentContextFactory(
        lifecycle = if (lifecycle == null) this.lifecycle else MergedLifecycle(this.lifecycle, lifecycle),
        stateKeeper = stateKeeper.child(key, lifecycle),
        instanceKeeper = instanceKeeper.child(key, lifecycle),
        backHandler = backHandler.child(lifecycle, backHandlerPriority),
    )
}
