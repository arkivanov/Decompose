package com.arkivanov.decompose

import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.statekeeper.child

fun ComponentContext.childContext(key: String): ComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper.child(key),
        instanceKeeper = instanceKeeper.child(key),
        backPressedHandler = backPressedHandler
    )

@Deprecated("Use childContext(key)", ReplaceWith("childContext(key)"))
fun ComponentContext.child(key: String): ComponentContext = childContext(key = key)
