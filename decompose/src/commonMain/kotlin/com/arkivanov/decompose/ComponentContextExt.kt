package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.navigationevent.NavigationEventPriority
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.statekeeper.child

/**
 * Creates a new instance of child [ComponentContext] of type [Ctx] and attaches it to the parent (`this`) component context.
 * Can be used to create fixed child components (i.e. without navigation) living as long as the parent (hosting) component.
 *
 * @param key A key of the child component context, must be unique within the parent context.
 * @param lifecycle An optional [Lifecycle] of the child component context to be merged with the parent [Lifecycle],
 * can be used for manual control (see [LifecycleRegistry][com.arkivanov.decompose.lifecycle.LifecycleRegistry]).
 * The following conditions apply:
 * - The resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one.
 * - The supplied [Lifecycle] must never be destroyed manually.
 * @param navigationEventPriority a priority of the [NavigationEventDispatcher][androidx.navigationevent.NavigationEventDispatcher]
 * used by the returned [ComponentContext] in the scope of the parent (`this`) [ComponentContext]. By default, navigation event
 * handlers of the child component contexts and normal `NavigationEventHandler`s registered in the parent (hosting) component
 * context's `NavigationEventDispatcher` handle navigation events in the reverse order. E.g., with two child component contexts,
 * the second one handles the back button before the first one. The [navigationEventPriority] parameter allows you to explicitly
 * control the order. Default value is [NavigationEventPriority.Default].
 */
fun <Ctx : GenericComponentContext<Ctx>> Ctx.childContext(
    key: String,
    lifecycle: Lifecycle? = null,
    navigationEventPriority: NavigationEventPriority = NavigationEventPriority.Default,
): Ctx {
    lifecycle?.doOnDestroy { error("The lifecycle of a child ComponentContext must never be destroyed manually.") }

    return componentContextFactory(
        lifecycle = if (lifecycle == null) this.lifecycle else mergedLifecycle(this.lifecycle, lifecycle),
        stateKeeper = stateKeeper.child(key, lifecycle),
        instanceKeeper = instanceKeeper.child(key, lifecycle),
        navigationEventDispatcher = navigationEventDispatcher.child(lifecycle = lifecycle, priority = navigationEventPriority),
    )
}
