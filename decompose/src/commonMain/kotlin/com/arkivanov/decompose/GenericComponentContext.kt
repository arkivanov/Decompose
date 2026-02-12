package com.arkivanov.decompose

import androidx.navigationevent.NavigationEventDispatcherOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * A generic component context that extends [LifecycleOwner], [StateKeeperOwner],
 * [InstanceKeeperOwner] and [NavigationEventDispatcherOwner] interfaces, and also able to create
 * new instances of itself via [ComponentContextFactory].
 */
interface GenericComponentContext<out T : Any> :
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    NavigationEventDispatcherOwner,
    ComponentContextFactoryOwner<T>
