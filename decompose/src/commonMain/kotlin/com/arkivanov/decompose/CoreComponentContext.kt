package com.arkivanov.decompose

import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

/**
 * Represents a core (basic) component context.
 * Extends [LifecycleOwner], [StateKeeperOwner], [InstanceKeeperOwner] and [BackHandlerOwner] interfaces.
 */
interface CoreComponentContext :
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    BackHandlerOwner
