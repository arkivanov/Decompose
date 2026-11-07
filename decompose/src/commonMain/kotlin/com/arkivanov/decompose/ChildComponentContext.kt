package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.lifecycle.moveToStarted
import com.arkivanov.decompose.navigationevent.NavigationEventPriority
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.statekeeper.child

/**
 * Creates a new instance of child [ComponentContext] of type [Ctx] and attaches it to the parent (`this`) component context.
 * Can be used to create fixed child components (i.e. without navigation) living as long as the parent (hosting) component.
 *
 * @param key A key of the child component context, must be unique within the parent context.
 * @param maxLifecycle An optional [ChildContextLifecycle] of the child component context. If provided,
 * the returned component context's [Lifecycle.State] will never be higher than the [ChildContextLifecycle].
 * @param navigationEventPriority a priority of the [NavigationEventDispatcher][androidx.navigationevent.NavigationEventDispatcher]
 * used by the returned [ComponentContext] in the scope of the parent (`this`) [ComponentContext]. By default, navigation event
 * handlers of the child component contexts and normal `NavigationEventHandler`s registered in the parent (hosting) component
 * context's `NavigationEventDispatcher` handle navigation events in the reverse order. E.g., with two child component contexts,
 * the second one handles the back button before the first one. The [navigationEventPriority] parameter allows you to explicitly
 * control the order. Default value is [NavigationEventPriority.Default].
 */
fun <Ctx : GenericComponentContext<Ctx>> Ctx.childContext(
    key: String,
    maxLifecycle: ChildContextLifecycle? = null,
    navigationEventPriority: NavigationEventPriority = NavigationEventPriority.Default,
): Ctx =
    componentContextFactory(
        lifecycle = if (maxLifecycle == null) this.lifecycle else mergedLifecycle(this.lifecycle, maxLifecycle.lifecycle),
        stateKeeper = stateKeeper.child(key),
        viewModelStore = viewModelStore.child(key),
        navigationEventDispatcher = navigationEventDispatcher.child(
            lifecycle = maxLifecycle?.lifecycle,
            priority = navigationEventPriority
        ),
    )

/**
 * Designed for use with the [childContext] extension function.
 * Allows controlling the maximum [Lifecycle.State] of a child component context.
 */
class ChildContextLifecycle {
    private val registry = LifecycleRegistry()
    internal val lifecycle: Lifecycle by ::registry

    /**
     * Moves this [ChildContextLifecycle] to the [Lifecycle.State.CREATED] state.
     * The corresponding child component context's [Lifecycle.State] will never be
     * higher than [Lifecycle.State.CREATED].
     */
    fun moveToCreated(): ChildContextLifecycle {
        registry.moveToCreated()
        return this
    }

    /**
     * Moves this [ChildContextLifecycle] to the [Lifecycle.State.STARTED] state.
     * The corresponding child component context's [Lifecycle.State] will never be
     * higher than [Lifecycle.State.STARTED].
     */
    fun moveToStarted(): ChildContextLifecycle {
        registry.moveToStarted()
        return this
    }

    /**
     * Moves this [ChildContextLifecycle] to the [Lifecycle.State.RESUMED] state.
     * The corresponding child component context's [Lifecycle.State] will never be
     * higher than [Lifecycle.State.RESUMED].
     */
    fun moveToResumed(): ChildContextLifecycle {
        registry.moveToResumed()
        return this
    }
}
