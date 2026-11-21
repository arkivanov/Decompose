package com.arkivanov.decompose

import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * A generic component context that extends [LifecycleOwner], [StateKeeperOwner],
 * [ViewModelStoreOwner], [HasDefaultViewModelProviderFactory], [SavedStateRegistryOwner],
 * and [NavigationEventDispatcherOwner] interfaces,
 * and also able to create new instances of itself via [ComponentContextFactory].
 */
interface GenericComponentContext<out T : Any> :
    LifecycleOwner,
    StateKeeperOwner,
    ViewModelStoreOwner,
    HasDefaultViewModelProviderFactory,
    SavedStateRegistryOwner,
    NavigationEventDispatcherOwner,
    ComponentContextFactoryOwner<T>
