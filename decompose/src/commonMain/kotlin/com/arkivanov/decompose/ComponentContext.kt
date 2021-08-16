package com.arkivanov.decompose

import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.backpressed.BackPressedHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

interface ComponentContext :
    RouterFactory,
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    BackPressedHandlerOwner {

    @Deprecated(
        message = "ComponentContext now extends BackPressedHandlerOwner instead of BackPressedDispatcherOwner. " +
            "Please use backPressedHandler property.",
        replaceWith = ReplaceWith("backPressedHandler")
    )
    val backPressedDispatcher: BackPressedDispatcher
}
