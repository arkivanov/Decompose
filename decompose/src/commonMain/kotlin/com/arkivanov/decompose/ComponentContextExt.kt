package com.arkivanov.decompose

import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.statekeeper.child

fun ComponentContext.child(key: String): ComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper.child(key),
        instanceKeeper = instanceKeeper.child(key),
        backPressedDispatcher = backPressedDispatcher
    )
