package com.arkivanov.decompose.extensions.compose.jetbrains

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle.lifecycle
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper

@OptIn(InternalDecomposeApi::class)
@Deprecated(
    message = "Composition may run on a background thread, it is advised to create components on the main or UI thread. " +
        "Consider creating ComponentContext and components manually. " +
        "Please refer to examples: https://github.com/arkivanov/Decompose/blob/master/sample/master-detail/app-desktop/src/jvmMain/kotlin/com/arkivanov/masterdetail/app/Main.kt",
    level = DeprecationLevel.WARNING
)
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

@Suppress("DeprecatedCallableAddReplaceWith", "DEPRECATION")
@Deprecated(
    message = "Composition may run on a background thread, it is advised to create components on the main or UI thread. " +
        "Consider creating ComponentContext and components manually. " +
        "Please refer to examples: https://github.com/arkivanov/Decompose/blob/master/sample/master-detail/app-desktop/src/jvmMain/kotlin/com/arkivanov/masterdetail/app/Main.kt",
    level = DeprecationLevel.ERROR
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
