package com.arkivanov.decompose

import com.arkivanov.decompose.backpressed.child
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.child
import com.arkivanov.essenty.lifecycle.Lifecycle

/**
 * Creates a new instance of [ComponentContext] and attaches it the parent (`this`) [ComponentContext].
 *
 * @param key A key of the child [ComponentContext], must be unique within the parent [ComponentContext]
 * @param lifecycle An optional [Lifecycle] of the child [ComponentContext], can be used if the child component
 * needs to be destroyed earlier, or if you need manual control. If supplied, then the following conditions apply:
 * - the resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one
 * - when the supplied [Lifecycle] is explicitly destroyed, the child [ComponentContext] detaches from its parent
 */
fun ComponentContext.childContext(key: String, lifecycle: Lifecycle? = null): ComponentContext =
    DefaultComponentContext(
        lifecycle = if (lifecycle == null) this.lifecycle else MergedLifecycle(this.lifecycle, lifecycle),
        stateKeeper = stateKeeper.child(key, lifecycle),
        instanceKeeper = instanceKeeper.child(key, lifecycle),
        backPressedHandler = backPressedHandler.child(lifecycle),
    )
