package com.arkivanov.decompose

import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.child
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

/**
 * Creates a new instance of child [ComponentContext] and attaches it to the parent (`this`) [ComponentContext].
 *
 * @param key A key of the child [ComponentContext], must be unique within the parent [ComponentContext].
 * @param lifecycle An optional [Lifecycle] of the child [ComponentContext] to be merged with the parent [Lifecycle],
 * can be used for manual control (see [LifecycleRegistry][com.arkivanov.essenty.lifecycle.LifecycleRegistry]).
 * The following conditions apply:
 * - The resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one.
 * - The supplied [Lifecycle] must never be destroyed manually.
 */
fun ComponentContext.childContext(key: String, lifecycle: Lifecycle? = null): ComponentContext {
    lifecycle?.doOnDestroy { error("The lifecycle of a child ComponentContext must never be destroyed manually.") }

    return DefaultComponentContext(
        lifecycle = if (lifecycle == null) this.lifecycle else MergedLifecycle(this.lifecycle, lifecycle),
        stateKeeper = stateKeeper.child(key, lifecycle),
        instanceKeeper = instanceKeeper.child(key, lifecycle),
        backHandler = backHandler.child(lifecycle),
    )
}
