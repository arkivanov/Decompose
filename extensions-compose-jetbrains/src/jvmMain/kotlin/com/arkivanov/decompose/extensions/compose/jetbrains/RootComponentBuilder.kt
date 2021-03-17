package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle.lifecycle
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.StateKeeper

@OptIn(InternalDecomposeApi::class)
@Composable
fun <T> rememberRootComponent(
    lifecycle: Lifecycle? = null,
    stateKeeper: StateKeeper? = null,
    instanceKeeper: InstanceKeeper? = null,
    backPressedDispatcher: BackPressedDispatcher? = null,
    factory: (ComponentContext) -> T,
): T {
    val composableLifecycle = lifecycle()

    return remember {
        val componentContext =
            DefaultComponentContext(
                lifecycle = lifecycle?.let { MergedLifecycle(it, composableLifecycle) } ?: composableLifecycle,
                stateKeeper = stateKeeper,
                instanceKeeper = instanceKeeper,
                backPressedDispatcher = backPressedDispatcher
            )

        factory(componentContext)
    }
}

@Deprecated(
    "Use rememberRootComponent",
    ReplaceWith("rememberRootComponent(lifecycle, stateKeeper, instanceKeeper, backPressedDispatcher, factory)")
)
@Composable
fun <T> rootComponent(
    lifecycle: Lifecycle? = null,
    stateKeeper: StateKeeper? = null,
    instanceKeeper: InstanceKeeper? = null,
    backPressedDispatcher: BackPressedDispatcher? = null,
    factory: (ComponentContext) -> T,
): T =
    rememberRootComponent(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        instanceKeeper = instanceKeeper,
        backPressedDispatcher = backPressedDispatcher,
        factory = factory
    )
