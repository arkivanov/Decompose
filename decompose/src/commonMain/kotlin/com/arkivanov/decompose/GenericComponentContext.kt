package com.arkivanov.decompose

import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * A generic component context that extends [LifecycleOwner], [StateKeeperOwner],
 * [ViewModelStoreOwner], [SavedStateRegistryOwner], and [NavigationEventDispatcherOwner] interfaces,
 * and also able to create new instances of itself via [ComponentContextFactory].
 */
interface GenericComponentContext<out T : Any> :
    LifecycleOwner,
    StateKeeperOwner,
    ViewModelStoreOwner, // TODO: Add HasDefaultViewModelProviderFactory after supporting SavedStateRegistryOwner
    SavedStateRegistryOwner,
    NavigationEventDispatcherOwner,
    ComponentContextFactoryOwner<T>
