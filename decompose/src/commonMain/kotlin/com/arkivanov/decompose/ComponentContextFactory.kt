package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.essenty.statekeeper.StateKeeper

/**
 * Represents a factory that creates new instances of component contexts of type [T].
 * Used by various navigation models that require creating child component contexts.
 */
fun interface ComponentContextFactory<out T : Any> {

    /**
     * Creates a new instance of component context of type [T], not attached to any
     * parent component context.
     *
     * @param lifecycle a [Lifecycle] for the new component context.
     * @param stateKeeper a [StateKeeper] for the new component context.
     * @param viewModelStore a [ViewModelStore] for the new component context.
     * @param navigationEventDispatcher a [NavigationEventDispatcher] for the new component context.
     */
    operator fun invoke(
        lifecycle: Lifecycle,
        stateKeeper: StateKeeper,
        viewModelStore: ViewModelStore,
        navigationEventDispatcher: NavigationEventDispatcher,
    ): T
}
