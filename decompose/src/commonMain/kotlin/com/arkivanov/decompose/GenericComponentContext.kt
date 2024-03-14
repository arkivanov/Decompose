package com.arkivanov.decompose

import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * A generic component context that extends [LifecycleOwner], [StateKeeperOwner],
 * [InstanceKeeperOwner] and [BackHandlerOwner] interfaces, and also able to create
 * new instances of itself via [ComponentContextFactory].
 */
interface GenericComponentContext<out T : Any> :
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    BackHandlerOwner,
    ComponentContextFactoryOwner<T>
